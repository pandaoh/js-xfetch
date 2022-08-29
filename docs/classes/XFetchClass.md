[js-xfetch - v1.3.0](../README.md) / XFetchClass

# Class: XFetchClass

XFetchClass 基础类

## Table of contents

### Constructors

- [constructor](XFetchClass.md#constructor)

### Properties

- [\_abortController](XFetchClass.md#_abortcontroller)
- [\_cancelDuplicatedRequest](XFetchClass.md#_cancelduplicatedrequest)
- [\_errorHandler](XFetchClass.md#_errorhandler)
- [\_pendingRequests](XFetchClass.md#_pendingrequests)
- [\_requestFinally](XFetchClass.md#_requestfinally)
- [\_requestHandler](XFetchClass.md#_requesthandler)
- [\_responseHandler](XFetchClass.md#_responsehandler)
- [\_retryConfig](XFetchClass.md#_retryconfig)
- [\_setRequestHeaders](XFetchClass.md#_setrequestheaders)
- [\_whiteListAbortController](XFetchClass.md#_whitelistabortcontroller)
- [baseUrl](XFetchClass.md#baseurl)
- [timeout](XFetchClass.md#timeout)

### Methods

- [\_addPendingRequest](XFetchClass.md#_addpendingrequest)
- [\_errorInterceptor](XFetchClass.md#_errorinterceptor)
- [\_handleFetchResponse](XFetchClass.md#_handlefetchresponse)
- [\_parseFetchResponse](XFetchClass.md#_parsefetchresponse)
- [\_removePendingRequest](XFetchClass.md#_removependingrequest)
- [\_requestInterceptor](XFetchClass.md#_requestinterceptor)
- [\_responseInterceptor](XFetchClass.md#_responseinterceptor)
- [\_timeoutPromise](XFetchClass.md#_timeoutpromise)
- [cancelRequest](XFetchClass.md#cancelrequest)
- [cancelWhiteListRequest](XFetchClass.md#cancelwhitelistrequest)
- [checkStatus](XFetchClass.md#checkstatus)
- [create](XFetchClass.md#create)
- [delete](XFetchClass.md#delete)
- [get](XFetchClass.md#get)
- [getAbortController](XFetchClass.md#getabortcontroller)
- [getBaseURL](XFetchClass.md#getbaseurl)
- [getInstance](XFetchClass.md#getinstance)
- [isCancel](XFetchClass.md#iscancel)
- [patch](XFetchClass.md#patch)
- [post](XFetchClass.md#post)
- [postFile](XFetchClass.md#postfile)
- [postForm](XFetchClass.md#postform)
- [put](XFetchClass.md#put)
- [qsParse](XFetchClass.md#qsparse)
- [qsStringify](XFetchClass.md#qsstringify)
- [request](XFetchClass.md#request)
- [setBaseURL](XFetchClass.md#setbaseurl)
- [setRequestTimeout](XFetchClass.md#setrequesttimeout)
- [sleep](XFetchClass.md#sleep)
- [typeof](XFetchClass.md#typeof)

## Constructors

### constructor

• **new XFetchClass**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`XFetchOptions`](../interfaces/XFetchOptions.md) |

## Properties

### \_abortController

• `Private` **\_abortController**: `AbortController`

___

### \_cancelDuplicatedRequest

• `Private` **\_cancelDuplicatedRequest**: `boolean`

___

### \_errorHandler

• `Private` **\_errorHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_pendingRequests

• `Private` **\_pendingRequests**: `any`

___

### \_requestFinally

• `Private` **\_requestFinally**: `undefined` \| `Function`

___

### \_requestHandler

• `Private` **\_requestHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_responseHandler

• `Private` **\_responseHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_retryConfig

• `Private` **\_retryConfig**: `undefined` \| `RetryConfig`

___

### \_setRequestHeaders

• `Private` **\_setRequestHeaders**: `undefined` \| `HandlerFunction`<`object`\>

___

### \_whiteListAbortController

• `Private` **\_whiteListAbortController**: `AbortController`

___

### baseUrl

• **baseUrl**: `string` = `''`

___

### timeout

• **timeout**: `number` = `30000`

## Methods

### \_addPendingRequest

▸ `Private` **_addPendingRequest**(`config`): `AbortController`

添加请求到 pending Map 中

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`AbortController`

___

### \_errorInterceptor

▸ `Private` **_errorInterceptor**(`errorConfig`): `any`

错误拦截

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorConfig` | `any` |

#### Returns

`any`

___

### \_handleFetchResponse

▸ `Private` **_handleFetchResponse**(`res`): `Promise`<`any`\>

处理请求结果

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `Response` |

#### Returns

`Promise`<`any`\>

___

### \_parseFetchResponse

▸ `Private` **_parseFetchResponse**(`res`): `Promise`<`any`\>

解析结果数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `Response` |

#### Returns

`Promise`<`any`\>

___

### \_removePendingRequest

▸ `Private` **_removePendingRequest**(`config`): `void`

取消重复的等待状态请求

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`void`

___

### \_requestInterceptor

▸ `Private` **_requestInterceptor**(`requestConfig`): `undefined` \| `AbortController`

请求拦截

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestConfig` | `any` |

#### Returns

`undefined` \| `AbortController`

___

### \_responseInterceptor

▸ `Private` **_responseInterceptor**(`responseConfig`): `any`

响应拦截

#### Parameters

| Name | Type |
| :------ | :------ |
| `responseConfig` | `any` |

#### Returns

`any`

___

### \_timeoutPromise

▸ `Private` **_timeoutPromise**(`timeout`, `abortController`): `Promise`<`unknown`\>

超时措施

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `abortController` | `undefined` \| `AbortController` |

#### Returns

`Promise`<`unknown`\>

___

### cancelRequest

▸ **cancelRequest**(`message`): [`XFetchClass`](XFetchClass.md)

取消所有普通请求

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`XFetchClass`](XFetchClass.md)

___

### cancelWhiteListRequest

▸ **cancelWhiteListRequest**(`message`): [`XFetchClass`](XFetchClass.md)

取消所有白名单请求

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`XFetchClass`](XFetchClass.md)

___

### checkStatus

▸ **checkStatus**(`response`): `any`

检查状态码

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`any`

___

### create

▸ **create**(`options?`): [`XFetchClass`](XFetchClass.md)

创建 XFetch 实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`XFetchOptions`](../interfaces/XFetchOptions.md) | XFetch 配置 |

#### Returns

[`XFetchClass`](XFetchClass.md)

___

### delete

▸ **delete**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`any`\>

delete

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`any`\>

___

### get

▸ **get**(`url`, `params?`, `config?`, `isWhiteList?`): `Promise`<`any`\>

get

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `params` | `any` | `{}` |  |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`any`\>

___

### getAbortController

▸ **getAbortController**(): `any`

获取一个 AbortController

#### Returns

`any`

___

### getBaseURL

▸ **getBaseURL**(): `undefined` \| `string`

获取 baseURL

#### Returns

`undefined` \| `string`

___

### getInstance

▸ **getInstance**(): [`XFetchClass`](XFetchClass.md)

获取 XFetch 实例

**`memberof`** XFetch

#### Returns

[`XFetchClass`](XFetchClass.md)

___

### isCancel

▸ **isCancel**(`error`): `boolean`

判断是否取消/中止异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`boolean`

___

### patch

▸ **patch**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`any`\>

patch

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`any`\>

___

### post

▸ **post**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`any`\>

post

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`any`\>

___

### postFile

▸ **postFile**(`url`, `files`, `name?`, `hasBrackets?`, `hasIndex?`, `config?`, `isWhiteList?`): `Promise`<`any`\>

上传文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `files` | `File` \| `File`[] | `undefined` | - |
| `name` | `string` | `'file'` | default['file'] |
| `hasBrackets` | `boolean` | `false` | default[false] |
| `hasIndex` | `boolean` | `false` | default[false] |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`any`\>

___

### postForm

▸ **postForm**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`any`\>

上传表单

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`any`\>

___

### put

▸ **put**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`any`\>

put

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`any`\>

___

### qsParse

▸ **qsParse**(`url?`, `key?`): `any`

获取 query string 参数
Example:
`qsParse('start=0&count=20&x=1&x=2&x=3', 'x') => [1, 2, 3]`
`qsParse('start=0&count=20&x=1&x=2&x=3') => { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url?` | `string` | query string |
| `key?` | `string` | 参数名 |

#### Returns

`any`

___

### qsStringify

▸ **qsStringify**(`obj`, `options?`): `string`

对象转 querystring 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
Example:
`qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }) => 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'`
`qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }) => 'start=0&count=20&obj[a]=1&arr=1,2,3'`
`qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }) => 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | 源数据 |
| `options?` | `Object` | - |
| `options.arr2str?` | `boolean` | - |
| `options.hasBrackets?` | `boolean` | - |
| `options.hasIndex?` | `boolean` | - |
| `options.urlEncode?` | `boolean` | - |

#### Returns

`string`

___

### request

▸ **request**(`method`, `url`, `config`, `isWhiteList?`): `Promise`<`any`\>

XFetch Basic Request Function Template

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `method` | [`XFetchHttpMethod`](../enums/XFetchHttpMethod.md) | `undefined` |
| `url` | `string` | `undefined` |
| `config` | [`XFetchRequestConfig`](../interfaces/XFetchRequestConfig.md) | `undefined` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`any`\>

___

### setBaseURL

▸ **setBaseURL**(`url?`): [`XFetchClass`](XFetchClass.md)

设置 baseURL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Returns

[`XFetchClass`](XFetchClass.md)

___

### setRequestTimeout

▸ **setRequestTimeout**(`timeout`): [`XFetchClass`](XFetchClass.md)

设置请求默认超时时间

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

[`XFetchClass`](XFetchClass.md)

___

### sleep

▸ **sleep**(`milliseconds`): `Promise`<`unknown`\>

睡眠

#### Parameters

| Name | Type |
| :------ | :------ |
| `milliseconds` | `number` |

#### Returns

`Promise`<`unknown`\>

___

### typeof

▸ **typeof**(`obj`): `string`

获取数据类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`
