# js-xfetch

> A Fetch request tool wrapper, convenient global management.

> Fetch 被称为下一代 Ajax 技术，浏览器原生支持，采用 Promise 方式来处理数据。是一种简洁明了的 API，比 XMLHttpRequest 更加简单易用。

> 但是使用不太方便，本插件对 Fetch API 进行了了一次封装，解决了 Fetch API 原生的一些痛点，增加了一些常用功能并使用类初始化方便全局管理，具体功能如下。

* 浏览器原生支持
* 参数优化(参考 Axios)
* 自动转换请求与返回数据
* 增加请求/响应/错误拦截功能
* 增加超时设置
* 增加重试/重连设置
* 主动取消请求、取消重复请求、添加请求白名单(abortController)
* 请求头拦截处理(Headers)
* 日志输出，请求完成时的回调(无论是否成功) Hooks。
* 提供实例默认配置修改方法(timeout/baseUrl...)

## Install

```bash
npm install js-xfetch -S
```

## Import

```javascript
// Es or Node
const {
  XFetch,
  XFetchContentType,
  XFetchHttpMethod,
  XFetchHeader,
  XFetchRequestConfig,
  XFetchOptions,
  CODE_MSG
} = require('js-xfetch');
import {
  XFetch,
  XFetchContentType,
  XFetchHttpMethod,
  XFetchHeader,
  XFetchRequestConfig,
  XFetchOptions,
  CODE_MSG
} from 'js-xfetch';
import XFetch from 'js-xfetch';

// Browser
<script src="xfetch.min.js"></script>
// const {
//   XFetch,
//   XFetchContentType,
//   XFetchHttpMethod,
//   XFetchHeader,
//   XFetchRequestConfig,
//   XFetchOptions,
//   CODE_MSG
// } = xfetch;
```

## Use

```javascript
$fetch = XFetch.create({
  baseUrl: '', // default: ''
  timeout: 5000, // timeout default: 30000
  cancelDuplicatedRequest: true, // Whether to cancel the duplicate request default: true
  // default: undefined
  retryConfig: {
    retry: 3, // count
    delay: 2000 // delay time
  },
  requestHandler: (config) => {
    console.log('requestHandler', config);
  },
  responseHandler: (response) => {
    console.log('responseHandler', response);
  },
  errorHandler: (error) => {
    if (XFetch.isCancel(error)) {
      return;
    }
    console.log('errorHandler', error);
  },
  setRequestHeaders: (config) => {
    console.log('setRequestHeaders', config);
    // return new Headers({});
    return config.headers;
  },
  requestFinally: () => {
    console.log('requestFinally Hooks'); // The callback when the request is completed, regardless of the result.
  }
});

$fetch
  .get('/test', { test: 1, v: 1 }) // params
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

XFetch.post(
  '/test/post',
  { test: 'data' }, // data
  {
    // headers: Headers,
    // 'Content-Type': 'contentType',
    // autoContentType: Boolean,
    // qsStringifyOptions: { hasBrackets, hasIndex, arr2str, urlEncode }
  },
  true // WhiteList default: false
);

XFetch.request(
  XFetchHttpMethod.POST,
  '/test/post',
  {
    // params?: any;
    // data?: any;
    // headers?: XFetchHeader;
    // autoContentType?: boolean;
    // 'Content-Type'?: string;
    // qsStringifyOptions?: {
    //     arr2str?: boolean;
    //     hasIndex?: boolean;
    //     urlEncode?: boolean;
    //     hasBrackets?: boolean;
    // };
  },
  true // WhiteList default: false
);

XFetch.cancelRequest('reason');
XFetch.cancelWhiteListRequest('reason');
XFetch.qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }); // 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'
XFetch.qsParse('start=0&count=20&x=1&x=2&x=3'); // { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' };
```

## API Docs

[API Docs](https://github.com/pandaoh/js-xfetch/blob/main/docs/README.md)

## Others

* [Issue](https://github.com/pandaoh/js-xfetch/issues)
* [Pull Request](https://github.com/pandaoh/js-xfetch/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
