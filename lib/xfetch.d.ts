declare enum XFetchContentType {
    JSON = "application/json;charset=UTF-8",
    FORM = "application/x-www-form-urlencoded;charset=UTF-8",
    FILE = "multipart/form-data",
    json = "application/json;charset=UTF-8",
    form = "application/x-www-form-urlencoded;charset=UTF-8",
    file = "multipart/form-data"
}
declare enum XFetchHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE",
    options = "OPTIONS"
}
interface XFetchRequestConfig {
    params?: any;
    data?: any;
    headers?: XFetchHeader;
    autoContentType?: boolean;
    'Content-Type'?: string;
    qsStringifyOptions?: {
        arr2str?: boolean;
        hasIndex?: boolean;
        urlEncode?: boolean;
        hasBrackets?: boolean;
    };
    [propName: string]: any;
}
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
declare const CODE_MSG: {
    [status: number]: string;
};
export declare class XFetchClass {
    timeout: number;
    baseUrl: string;
    private _requestHandler;
    private _responseHandler;
    private _errorHandler;
    private _requestFinally;
    private _setRequestHeaders;
    private _pendingRequests;
    private _cancelDuplicatedRequest;
    private _retryConfig;
    private _abortController;
    private _whiteListAbortController;
    constructor(options?: XFetchOptions);
    private _requestInterceptor;
    private _responseInterceptor;
    private _errorInterceptor;
    private _addPendingRequest;
    private _removePendingRequest;
    private _handleFetchResponse;
    private _parseFetchResponse;
    typeof(obj: any): string;
    qsStringify(obj: any, options?: {
        arr2str?: boolean;
        hasIndex?: boolean;
        urlEncode?: boolean;
        hasBrackets?: boolean;
    }): string;
    qsParse(url?: string, key?: string): any;
    private _timeoutPromise;
    request(method: XFetchHttpMethod, url: string, config: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    sleep(milliseconds: number): Promise<unknown>;
    checkStatus(response: Response): any;
    get(url: string, params?: any, config?: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    post(url: string, data?: any, config?: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    patch(url: string, data?: any, config?: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    put(url: string, data?: any, config?: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    delete(url: string, data?: any, config?: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    postForm(url: string, data?: any, config?: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    postFile(url: string, files: File | File[], name?: string, hasBrackets?: boolean, hasIndex?: boolean, config?: XFetchRequestConfig, isWhiteList?: boolean): Promise<any>;
    cancelRequest(message: string): XFetchClass;
    cancelWhiteListRequest(message: string): XFetchClass;
    getAbortController(): any;
    getBaseURL(): string | undefined;
    setBaseURL(url?: string): XFetchClass;
    setRequestTimeout(timeout: number): XFetchClass;
    getInstance(): XFetchClass;
    isCancel(error: any): boolean;
    create(options?: XFetchOptions): XFetchClass;
}
declare const XFetch: XFetchClass;
export { XFetch, XFetchContentType, XFetchHttpMethod, XFetchHeader, XFetchRequestConfig, XFetchOptions, CODE_MSG };
export default XFetch;
//# sourceMappingURL=xfetch.d.ts.map