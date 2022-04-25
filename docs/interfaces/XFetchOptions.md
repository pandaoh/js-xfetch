[js-xfetch - v1.1.1](../README.md) / XFetchOptions

# Interface: XFetchOptions

XFetch 初始化参数

## Indexable

▪ [propName: `string`]: `any`

## Table of contents

### Properties

- [baseUrl](XFetchOptions.md#baseurl)
- [cancelDuplicatedRequest](XFetchOptions.md#cancelduplicatedrequest)
- [errorHandler](XFetchOptions.md#errorhandler)
- [requestHandler](XFetchOptions.md#requesthandler)
- [responseHandler](XFetchOptions.md#responsehandler)
- [retryConfig](XFetchOptions.md#retryconfig)
- [setRequestHeaders](XFetchOptions.md#setrequestheaders)
- [timeout](XFetchOptions.md#timeout)

### Methods

- [requestFinally](XFetchOptions.md#requestfinally)

## Properties

### baseUrl

• `Optional` **baseUrl**: `string`

___

### cancelDuplicatedRequest

• `Optional` **cancelDuplicatedRequest**: `boolean`

___

### errorHandler

• `Optional` **errorHandler**: `HandlerFunction`<`any`\>

___

### requestHandler

• `Optional` **requestHandler**: `HandlerFunction`<`any`\>

___

### responseHandler

• `Optional` **responseHandler**: `HandlerFunction`<`any`\>

___

### retryConfig

• `Optional` **retryConfig**: `RetryConfig`

___

### setRequestHeaders

• `Optional` **setRequestHeaders**: `HandlerFunction`<`object`\>

___

### timeout

• `Optional` **timeout**: `number`

## Methods

### requestFinally

▸ `Optional` **requestFinally**(): `void`

#### Returns

`void`
