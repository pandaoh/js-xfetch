/**
 * Content-Type
 */
enum XFetchContentType {
  JSON = 'application/json;charset=UTF-8',
  FORM = 'application/x-www-form-urlencoded;charset=UTF-8',
  FILE = 'multipart/form-data', // fetch 上传文件最好不设置任何 ContentType，否则会报错哦。
  json = 'application/json;charset=UTF-8',
  form = 'application/x-www-form-urlencoded;charset=UTF-8',
  file = 'multipart/form-data'
}

/**
 * HttpMethod
 */
enum XFetchHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
  options = 'OPTIONS'
}

/**
 * XFetch 请求配置 config 参数
 */
interface XFetchRequestConfig {
  params?: any;
  data?: any;
  headers?: XFetchHeader;
  autoContentType?: boolean;
  'Content-Type'?: string;
  qsStringifyOptions?: { arr2str?: boolean; hasIndex?: boolean; urlEncode?: boolean; hasBrackets?: boolean };
  [propName: string]: any;
}

/**
 * Header
 */
interface XFetchHeader {
  Origin?: string;
  Referer?: string;
  Cookie?: string | object;
  Connection?: string;
  'User-Agent'?: string;
  'Content-Type'?: string;
  Authorization?: string;
  [propName: string]: any;
}

/**
 * XFetch 初始化参数
 */
interface XFetchOptions {
  retryConfig?: RetryConfig;
  baseUrl?: string;
  timeout?: number;
  cancelDuplicatedRequest?: boolean;
  requestHandler?: HandlerFunction;
  responseHandler?: HandlerFunction;
  errorHandler?: HandlerFunction;
  requestFinally?: () => void;
  setRequestHeaders?: HandlerFunction<object>;
  [propName: string]: any;
}
interface HandlerFunction<T = any> {
  (data: T): T;
}
interface RetryConfig {
  retry: number;
  delay: number;
}

/**
 * 常用 code message
 */
const CODE_MSG: { [status: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  301: '资源永久移动，请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。',
  302: '资源临时移动，只是临时被移动，客户端可继续使用原有 URI。',
  303: '查看其它地址，与 301 类似，使用 GET 和 POST 请求查看。',
  304: '资源未修改，所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

/**
 * XFetchClass
 */
export class XFetchClass {
  public timeout: number = 30000; // 超时时间
  public baseUrl: string = ''; // baseUrl
  private _requestHandler: HandlerFunction | undefined;
  private _responseHandler: HandlerFunction | undefined;
  private _errorHandler: HandlerFunction | undefined;
  private _requestFinally: Function | undefined;
  private _setRequestHeaders: HandlerFunction<object> | undefined;
  private _pendingRequests: any; // 等待中的请求
  private _cancelDuplicatedRequest: boolean;
  private _retryConfig: RetryConfig | undefined;

  // https://zh.javascript.info/fetch-abort AbortController 是可伸缩的，与 axios.cancelToken 不同它允许一次取消多个 fetch。
  private _abortController: AbortController = new AbortController();
  private _whiteListAbortController: AbortController = new AbortController();

  constructor(options?: XFetchOptions) {
    this._cancelDuplicatedRequest = options?.cancelDuplicatedRequest ?? true;
    if (this._cancelDuplicatedRequest) {
      this._pendingRequests = new Map();
    }

    this._requestHandler = options?.requestHandler ?? undefined;
    this._responseHandler = options?.responseHandler ?? undefined;
    this._errorHandler = options?.errorHandler ?? undefined;
    this._requestFinally = options?.requestFinally ?? undefined;
    this._setRequestHeaders = options?.setRequestHeaders ?? undefined;
    this._retryConfig = options?.retryConfig ?? undefined;
    this.timeout = options?.timeout ?? this.timeout;
    this.baseUrl = options?.baseUrl ?? this.baseUrl;

    return this;
  }

  /**
   * 请求拦截
   * @param requestConfig
   * @returns
   */
  private _requestInterceptor(requestConfig: any): AbortController | undefined {
    this._requestHandler?.call(this, requestConfig);
    if (this._cancelDuplicatedRequest && !requestConfig.abortController) {
      this._removePendingRequest(requestConfig); // 取消此条请求之前的相同请求
      return this._addPendingRequest(requestConfig); // 将当前请求添加到 pending 中
    }
    return undefined;
  }

  /**
   * 响应拦截
   * @param responseConfig
   */
  private _responseInterceptor(responseConfig: any): any {
    if (this._cancelDuplicatedRequest && !responseConfig.abortController) {
      this._removePendingRequest(responseConfig); // 取消此条请求之前的重复请求
    }
    this._responseHandler?.call(this, responseConfig);
  }

  /**
   * 错误拦截
   * @param errorConfig
   * @returns
   */
  private _errorInterceptor(errorConfig: any): any {
    if (!this.isCancel(errorConfig.error)) {
      if (this._cancelDuplicatedRequest) {
        // 避免不可抗力原因导致请求失败，本工具不再干扰原有请求。
        this._pendingRequests.clear();
      }
      this._whiteListAbortController = new AbortController(); // 清空白名单
      this._abortController = new AbortController(); // 清空普通请求
    }
    return this._errorHandler?.call(this, errorConfig); // 返回错误处理 若想传递错误 则可以返回 Promise.reject(error)
  }

  /**
   * 添加请求到 pending Map 中
   * @param config
   */
  private _addPendingRequest(config: any): AbortController {
    const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
    const abortController: AbortController = new AbortController();
    if (!this._pendingRequests.has(url)) {
      // 如果 pending 中不存在当前请求，则添加进去。
      this._pendingRequests.set(url, abortController);
    }
    return abortController;
  }

  /**
   * 取消重复的等待状态请求
   * @param config
   */
  private _removePendingRequest(config: any): void {
    const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
    if (this._pendingRequests.has(url)) {
      // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除。
      const abortController: AbortController = this._pendingRequests.get(url);
      abortController.abort(url);
      this._pendingRequests.delete(url);
    }
  }

  /**
   * 处理请求结果
   * @param res
   * @returns
   */
  private _handleFetchResponse = async (res: Response) => {
    try {
      const result = await this._parseFetchResponse(res);
      // 如果 res.ok，则请求成功。
      if (res.ok) {
        return result;
      }
      // 请求失败，返回解析之后的失败的数据。
      const error = result;
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  /**
   * 解析结果数据
   * @param res
   * @returns
   */
  private _parseFetchResponse = async (res: Response) => {
    const resContentType = res.headers.get('Content-Type');
    // 判定返回的内容类型，做不同的处理
    if (resContentType) {
      if (resContentType.includes('json')) {
        return await res.json();
      }
      if (resContentType.includes('text')) {
        return await res.text();
      }
      if (resContentType.includes('form')) {
        return await res.formData();
      }
      if (resContentType.includes('video') || resContentType.includes('image')) {
        return await res.blob();
      }
      if (resContentType.includes('arrayBuffer')) {
        return await res.arrayBuffer();
      }
    }
    return await res.text();
  };

  /**
   * 获取数据类型
   * @param obj
   * @returns
   */
  typeof(obj: any): string {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  /**
   * 对象转 querystring 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
   * Example:
   * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }) => 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'`
   * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }) => 'start=0&count=20&obj[a]=1&arr=1,2,3'`
   * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }) => 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'`
   * @param obj 源数据
   * @returns
   */
  qsStringify(
    obj: any,
    options?: { arr2str?: boolean; hasIndex?: boolean; urlEncode?: boolean; hasBrackets?: boolean }
  ): string {
    if (!obj) {
      return '';
    }
    let queryString: URLSearchParams = new URLSearchParams();
    // 不用 for...in，避免污染原对象，且数组遍历效率高。
    Object.keys(obj).forEach((key: string) => {
      let val: any = obj[key];
      switch (this.typeof(val)) {
        case 'object':
          Object.keys(val).forEach((objKey: string) => {
            queryString.append(
              `${key}[${objKey}]`,
              this.typeof(val[objKey]) == 'object' ? JSON.stringify(val[objKey]) : val[objKey]
            );
          });
          break;
        case 'array':
          if (options?.arr2str) {
            queryString.append(key, val.join(','));
          } else {
            val.filter(Boolean).forEach((arrVal: any, arrIndex: number) => {
              let newArrVal: any = this.typeof(arrVal) == 'object' ? JSON.stringify(arrVal) : arrVal;
              options?.hasBrackets
                ? queryString.append(options?.hasIndex ? `${key}[${arrIndex}]` : `${key}[]`, newArrVal)
                : queryString.append(key, newArrVal);
            });
          }
          break;
        default:
          queryString.append(key, val);
          break;
      }
    });
    return options?.urlEncode ? queryString.toString() : decodeURIComponent(queryString.toString());
  }

  /**
   * 获取 query string 参数
   * Example:
   * `qsParse('start=0&count=20&x=1&x=2&x=3', 'x') => [1, 2, 3]`
   * `qsParse('start=0&count=20&x=1&x=2&x=3') => { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }`
   * @param url query string
   * @param key 参数名
   * @returns
   */
  qsParse(url?: string, key?: string): any {
    // 也可使用 new URL(url) 或者 new URLSearchParams(params) API 获取
    let pathname: string = url ?? window.location.pathname;
    url = url ?? window.location.search;
    let filename: string = pathname.substring(pathname.lastIndexOf('/') + 1);
    let paramMap: any = {
      '/': filename ?? undefined
    };
    let querystring: string = url.indexOf('?') === 0 ? url.substring(1) : url;
    if (querystring.length !== 0) {
      let parts: any[] = querystring.split('&');
      for (let i = 0; i < parts.length; i++) {
        let component: any[] = parts[i].split('=');
        let paramKey = decodeURIComponent(component[0]);
        let paramVal = decodeURIComponent(component[1]);
        if (!paramMap[paramKey]) {
          paramMap[paramKey] = paramVal;
          continue;
        }
        !Array.isArray(paramMap[paramKey]) && (paramMap[paramKey] = Array(paramMap[paramKey]));
        paramMap[paramKey].push(paramVal);
      }
    }
    return key ? paramMap?.[key] : paramMap;
  }

  /**
   * 超时措施
   * @param timeout
   * @param abortController
   * @returns
   */
  private _timeoutPromise = (timeout: number, abortController: AbortController | undefined) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Response('timeout', { status: 504, statusText: 'timeout ' }));
        abortController?.abort();
      }, timeout);
    });
  };

  /**
   * XFetch Basic Request Function Template
   * @param method
   * @param url
   * @param config
   * @param isWhiteList
   * @returns
   */
  async request(
    method: XFetchHttpMethod,
    url: string,
    config: XFetchRequestConfig,
    isWhiteList: boolean = false
  ): Promise<any> {
    let fetchInstance: Promise<any>;

    let contentType: string;
    if (!config.autoContentType && config['Content-Type'] !== undefined) {
      contentType = config['Content-Type'];
    } else if (method === XFetchHttpMethod.POST) {
      contentType = XFetchContentType.FORM;
    } else {
      contentType = XFetchContentType.JSON;
    }

    let reqUrl = url.includes('://') ? url : (this.baseUrl + url).replace(/([^\:])\/\//g, '$1/');

    if (config.params) {
      reqUrl += `${reqUrl.includes('?') ? '&' : '?'}${this.qsStringify(
        config.params,
        config.qsStringifyOptions ?? {}
      )}`;
    }

    let abortController: AbortController | undefined;
    let signal: AbortSignal | undefined;

    if (!this._cancelDuplicatedRequest || isWhiteList) {
      if (isWhiteList) {
        abortController = this._whiteListAbortController;
        signal = this._whiteListAbortController.signal;
      } else {
        abortController = this._abortController;
        signal = this._abortController.signal;
      }
    }

    let headers: Headers = new Headers({
      'Content-Type': contentType,
      ...(config.headers ?? {}),
      ...(this._setRequestHeaders?.call(this, config) ?? {})
    } as XFetchHeader);

    const interceptorConfig: any = { config, headers, url: reqUrl, path: url, method, abortController };

    const newAbortController: AbortController | undefined = this._requestInterceptor?.call(this, interceptorConfig);
    if (newAbortController && !signal) {
      signal = newAbortController.signal;
      abortController = newAbortController;
    }

    let fetchConfig: any;
    if (!method || method === XFetchHttpMethod.GET) {
      fetchConfig = {
        headers,
        signal
      };
    } else if (method === XFetchHttpMethod.POST && contentType === XFetchContentType.FORM) {
      let bodyData: string;
      if (this.typeof(config.data) === 'string') {
        bodyData = config.data;
      } else if (this.typeof(config.data) === 'object') {
        bodyData = this.qsStringify(config.data, config.qsStringifyOptions ?? {});
      } else {
        throw new Error('body must be string or object');
      }
      fetchConfig = {
        body: bodyData,
        headers,
        signal,
        method: XFetchHttpMethod.POST
      };
    } else {
      fetchConfig = {
        body: JSON.stringify(config.data),
        headers,
        signal,
        method: method
      };
    }

    const XFetchPromise = (retryConfig: RetryConfig | undefined): Promise<any> => {
      let setTimeOut = retryConfig
        ? (this.timeout + retryConfig.delay + 500) * (!retryConfig.retry ? 1 : retryConfig.retry)
        : this.timeout; // 重试时拉长超时时间
      return Promise.race([this._timeoutPromise(setTimeOut, abortController), fetch(reqUrl, fetchConfig)])
        .then((res: any) => this.checkStatus(res))
        .then((fetchResult: Response) => this._handleFetchResponse(fetchResult))
        .then(async (result: any) => {
          const responseConfig: any = {
            ...interceptorConfig,
            data: result
          };

          this._responseInterceptor?.call(this, responseConfig);

          return result;
        })
        .catch(async (error: any) => {
          const errorConfig: any = {
            ...interceptorConfig,
            error: error
          };

          // 请求重试/重连
          if (retryConfig && retryConfig.retry > 0 && !this.isCancel(error)) {
            await this.sleep(retryConfig.delay);
            return XFetchPromise({
              ...retryConfig,
              retry: retryConfig.retry - 1
            });
          }

          return this._errorInterceptor?.call(this, errorConfig);
        })
        .finally(() => {
          this._requestFinally?.call(this);
        });
    };

    return XFetchPromise(this._retryConfig);
  }

  /**
   * 睡眠
   * @param milliseconds
   * @returns
   */
  sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  /**
   * 检查状态码
   * @param response
   * @returns
   */
  checkStatus(response: Response): any {
    const { status } = response;
    if (status >= 200 && status < 300) {
      return response;
    }
    const errorText: string = CODE_MSG[status] || response.statusText;
    const error: any = new Error(errorText);
    error.name = response.status;
    error.response = response;
    return Promise.reject(error);
  }

  /**
   * get
   * @param url
   * @param params
   * @param config default[{}]
   * @param isWhiteList default[false]
   * @returns
   */
  async get(
    url: string,
    params: any = {},
    config: XFetchRequestConfig = {},
    isWhiteList: boolean = false
  ): Promise<any> {
    return this.request(XFetchHttpMethod.GET, url, { params, ...config }, isWhiteList);
  }

  /**
   * post
   * @param url
   * @param data
   * @param config default[{}]
   * @param isWhiteList default[false]
   * @returns
   */
  async post(
    url: string,
    data: any = {},
    config: XFetchRequestConfig = {},
    isWhiteList: boolean = false
  ): Promise<any> {
    return this.request(XFetchHttpMethod.POST, url, { data, ...config }, isWhiteList);
  }

  /**
   * patch
   * @param url
   * @param data
   * @param config default[{}]
   * @param isWhiteList default[false]
   * @returns
   */
  async patch(
    url: string,
    data: any = {},
    config: XFetchRequestConfig = {},
    isWhiteList: boolean = false
  ): Promise<any> {
    return this.request(XFetchHttpMethod.PATCH, url, { data, ...config }, isWhiteList);
  }

  /**
   * put
   * @param url
   * @param data
   * @param config default[{}]
   * @param isWhiteList default[false]
   * @returns
   */
  async put(url: string, data: any = {}, config: XFetchRequestConfig = {}, isWhiteList: boolean = false): Promise<any> {
    return this.request(XFetchHttpMethod.PUT, url, { data, ...config }, isWhiteList);
  }

  /**
   * delete
   * @param url
   * @param data
   * @param config default[{}]
   * @param isWhiteList default[false]
   * @returns
   */
  async delete(
    url: string,
    data: any = {},
    config: XFetchRequestConfig = {},
    isWhiteList: boolean = false
  ): Promise<any> {
    return this.request(XFetchHttpMethod.DELETE, url, { data, ...config }, isWhiteList);
  }

  /**
   * 上传表单
   * @param url
   * @param data
   * @param config default[{}]
   * @param isWhiteList default[false]
   * @returns
   */
  async postForm(
    url: string,
    data: any = {},
    config: XFetchRequestConfig = {},
    isWhiteList: boolean = false
  ): Promise<any> {
    return this.request(
      XFetchHttpMethod.POST,
      url,
      {
        'Content-Type': XFetchContentType.FORM,
        ...config,
        data
      },
      isWhiteList
    );
  }

  /**
   * 上传文件
   * @param url
   * @param file
   * @param name default['file']
   * @param hasBrackets default[false]
   * @param hasIndex default[false]
   * @param config default[{}]
   * @param isWhiteList default[false]
   * @returns
   */
  async postFile(
    url: string,
    files: File | File[],
    name: string = 'file',
    hasBrackets: boolean = false,
    hasIndex: boolean = false,
    config: XFetchRequestConfig = {},
    isWhiteList: boolean = false
  ): Promise<any> {
    const formData = new FormData();
    if (Array.isArray(files)) {
      files.forEach((file: File, fileIndex) => {
        hasBrackets
          ? formData.append(hasIndex ? `${name}[]` : `${name}[${fileIndex}]`, file)
          : formData.append(name, file);
      });
    } else {
      formData.append(name, files);
    }

    return this.request(
      XFetchHttpMethod.POST,
      url,
      {
        'Content-Type': XFetchContentType.FILE, // 如果失败则在 config 里面添加 autoContentType: true
        ...config,
        data: formData
      },
      isWhiteList
    );
  }

  /**
   * 取消所有普通请求
   * @param message
   * @returns
   */
  cancelRequest(message: string): XFetchClass {
    if (this._cancelDuplicatedRequest) {
      for (const [url, cancel] of this._pendingRequests) {
        // this._pendingRequests.entries() Map 遍历需配置 "downlevelIteration": true
        cancel(message ? `${message}: ${url}` : url);
      }
      this._pendingRequests.clear();
    } else {
      this._abortController?.abort(message);
      this._abortController = new AbortController();
    }
    return this;
  }

  /**
   * 取消所有白名单请求
   * @param message
   * @returns
   */
  cancelWhiteListRequest(message: string): XFetchClass {
    this._whiteListAbortController?.abort(message);
    this._whiteListAbortController = new AbortController();
    return this;
  }

  /**
   * 获取一个 AbortController
   * @returns
   */
  getAbortController(): any {
    return new AbortController();
  }

  /**
   * 获取 baseURL
   * @returns
   */
  getBaseURL(): string | undefined {
    return this.baseUrl;
  }

  /**
   * 设置 baseURL
   * @param url
   * @returns
   */
  setBaseURL(url?: string): XFetchClass {
    this.baseUrl = url ?? '';
    return this;
  }

  /**
   * 设置请求默认超时时间
   * @param timeout
   * @returns
   */
  setRequestTimeout(timeout: number): XFetchClass {
    this.timeout = timeout;
    return this;
  }

  /**
   * 获取 XFetch 实例
   * @memberof XFetch
   */
  getInstance(): XFetchClass {
    return this;
  }

  /**
   * 判断是否取消/中止异常
   * @param error
   * @returns
   */
  isCancel(error: any): boolean {
    return error.name === 'AbortError';
  }

  /**
   * 创建 XFetch 实例
   * @param options XFetch 配置
   * @returns
   */
  create(options?: XFetchOptions): XFetchClass {
    return new XFetchClass(options);
  }
}

const XFetch: XFetchClass = new XFetchClass();
export { XFetch, XFetchContentType, XFetchHttpMethod, XFetchHeader, XFetchRequestConfig, XFetchOptions, CODE_MSG };
export default XFetch;
