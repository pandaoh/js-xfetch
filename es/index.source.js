/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var XFetchContentType;
(function (XFetchContentType) {
    XFetchContentType["JSON"] = "application/json;charset=UTF-8";
    XFetchContentType["FORM"] = "application/x-www-form-urlencoded;charset=UTF-8";
    XFetchContentType["FILE"] = "multipart/form-data";
    XFetchContentType["json"] = "application/json;charset=UTF-8";
    XFetchContentType["form"] = "application/x-www-form-urlencoded;charset=UTF-8";
    XFetchContentType["file"] = "multipart/form-data";
})(XFetchContentType || (XFetchContentType = {}));
var XFetchHttpMethod;
(function (XFetchHttpMethod) {
    XFetchHttpMethod["GET"] = "GET";
    XFetchHttpMethod["POST"] = "POST";
    XFetchHttpMethod["PUT"] = "PUT";
    XFetchHttpMethod["PATCH"] = "PATCH";
    XFetchHttpMethod["DELETE"] = "DELETE";
    XFetchHttpMethod["OPTIONS"] = "OPTIONS";
    XFetchHttpMethod["get"] = "GET";
    XFetchHttpMethod["post"] = "POST";
    XFetchHttpMethod["put"] = "PUT";
    XFetchHttpMethod["patch"] = "PATCH";
    XFetchHttpMethod["delete"] = "DELETE";
    XFetchHttpMethod["options"] = "OPTIONS";
})(XFetchHttpMethod || (XFetchHttpMethod = {}));
var CODE_MSG = {
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
var XFetchClass = (function () {
    function XFetchClass(options) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.timeout = 30000;
        this.baseUrl = '';
        this._abortController = new AbortController();
        this._whiteListAbortController = new AbortController();
        this._handleFetchResponse = function (res) { return __awaiter(_this, void 0, void 0, function () {
            var result, error, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this._parseFetchResponse(res)];
                    case 1:
                        result = _a.sent();
                        if (res.ok) {
                            return [2, result];
                        }
                        error = result;
                        return [2, Promise.reject(error)];
                    case 2:
                        e_1 = _a.sent();
                        return [2, Promise.reject(e_1)];
                    case 3: return [2];
                }
            });
        }); };
        this._parseFetchResponse = function (res) { return __awaiter(_this, void 0, void 0, function () {
            var resContentType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resContentType = res.headers.get('Content-Type');
                        if (!resContentType) return [3, 10];
                        if (!resContentType.includes('json')) return [3, 2];
                        return [4, res.json()];
                    case 1: return [2, _a.sent()];
                    case 2:
                        if (!resContentType.includes('text')) return [3, 4];
                        return [4, res.text()];
                    case 3: return [2, _a.sent()];
                    case 4:
                        if (!resContentType.includes('form')) return [3, 6];
                        return [4, res.formData()];
                    case 5: return [2, _a.sent()];
                    case 6:
                        if (!(resContentType.includes('video') || resContentType.includes('image'))) return [3, 8];
                        return [4, res.blob()];
                    case 7: return [2, _a.sent()];
                    case 8:
                        if (!resContentType.includes('arrayBuffer')) return [3, 10];
                        return [4, res.arrayBuffer()];
                    case 9: return [2, _a.sent()];
                    case 10: return [4, res.text()];
                    case 11: return [2, _a.sent()];
                }
            });
        }); };
        this._timeoutPromise = function (timeout, abortController) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(new Response('timeout', { status: 504, statusText: 'timeout ' }));
                    abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                }, timeout);
            });
        };
        this._cancelDuplicatedRequest = (_a = options === null || options === void 0 ? void 0 : options.cancelDuplicatedRequest) !== null && _a !== void 0 ? _a : true;
        if (this._cancelDuplicatedRequest) {
            this._pendingRequests = new Map();
        }
        this._requestHandler = (_b = options === null || options === void 0 ? void 0 : options.requestHandler) !== null && _b !== void 0 ? _b : undefined;
        this._responseHandler = (_c = options === null || options === void 0 ? void 0 : options.responseHandler) !== null && _c !== void 0 ? _c : undefined;
        this._errorHandler = (_d = options === null || options === void 0 ? void 0 : options.errorHandler) !== null && _d !== void 0 ? _d : undefined;
        this._requestFinally = (_e = options === null || options === void 0 ? void 0 : options.requestFinally) !== null && _e !== void 0 ? _e : undefined;
        this._setRequestHeaders = (_f = options === null || options === void 0 ? void 0 : options.setRequestHeaders) !== null && _f !== void 0 ? _f : undefined;
        this._retryConfig = (_g = options === null || options === void 0 ? void 0 : options.retryConfig) !== null && _g !== void 0 ? _g : undefined;
        this.timeout = (_h = options === null || options === void 0 ? void 0 : options.timeout) !== null && _h !== void 0 ? _h : this.timeout;
        this.baseUrl = (_j = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _j !== void 0 ? _j : this.baseUrl;
        return this;
    }
    XFetchClass.prototype._requestInterceptor = function (requestConfig) {
        var _a;
        (_a = this._requestHandler) === null || _a === void 0 ? void 0 : _a.call(this, requestConfig);
        if (this._cancelDuplicatedRequest && !requestConfig.abortController) {
            this._removePendingRequest(requestConfig);
            return this._addPendingRequest(requestConfig);
        }
        return undefined;
    };
    XFetchClass.prototype._responseInterceptor = function (responseConfig) {
        var _a;
        if (this._cancelDuplicatedRequest && !responseConfig.abortController) {
            this._removePendingRequest(responseConfig);
        }
        (_a = this._responseHandler) === null || _a === void 0 ? void 0 : _a.call(this, responseConfig);
    };
    XFetchClass.prototype._errorInterceptor = function (errorConfig) {
        var _a;
        if (!this.isCancel(errorConfig.error)) {
            if (this._cancelDuplicatedRequest) {
                this._pendingRequests.clear();
            }
            this._whiteListAbortController = new AbortController();
            this._abortController = new AbortController();
        }
        return (_a = this._errorHandler) === null || _a === void 0 ? void 0 : _a.call(this, errorConfig);
    };
    XFetchClass.prototype._addPendingRequest = function (config) {
        var url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
        var abortController = new AbortController();
        if (!this._pendingRequests.has(url)) {
            this._pendingRequests.set(url, abortController);
        }
        return abortController;
    };
    XFetchClass.prototype._removePendingRequest = function (config) {
        var url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
        if (this._pendingRequests.has(url)) {
            var abortController = this._pendingRequests.get(url);
            abortController.abort(url);
            this._pendingRequests.delete(url);
        }
    };
    XFetchClass.prototype.typeof = function (obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    };
    XFetchClass.prototype.qsStringify = function (obj, options) {
        var _this = this;
        if (!obj) {
            return '';
        }
        var queryString = new URLSearchParams();
        Object.keys(obj).forEach(function (key) {
            var val = obj[key];
            switch (_this.typeof(val)) {
                case 'object':
                    Object.keys(val).forEach(function (objKey) {
                        queryString.append("".concat(key, "[").concat(objKey, "]"), _this.typeof(val[objKey]) == 'object' ? JSON.stringify(val[objKey]) : val[objKey]);
                    });
                    break;
                case 'array':
                    if (options === null || options === void 0 ? void 0 : options.arr2str) {
                        queryString.append(key, val.join(','));
                    }
                    else {
                        val.filter(Boolean).forEach(function (arrVal, arrIndex) {
                            var newArrVal = _this.typeof(arrVal) == 'object' ? JSON.stringify(arrVal) : arrVal;
                            (options === null || options === void 0 ? void 0 : options.hasBrackets)
                                ? queryString.append((options === null || options === void 0 ? void 0 : options.hasIndex) ? "".concat(key, "[").concat(arrIndex, "]") : "".concat(key, "[]"), newArrVal)
                                : queryString.append(key, newArrVal);
                        });
                    }
                    break;
                default:
                    queryString.append(key, val);
                    break;
            }
        });
        return (options === null || options === void 0 ? void 0 : options.urlEncode) ? queryString.toString() : decodeURIComponent(queryString.toString());
    };
    XFetchClass.prototype.qsParse = function (url, key) {
        var pathname = url !== null && url !== void 0 ? url : window.location.pathname;
        url = url !== null && url !== void 0 ? url : window.location.search;
        var filename = pathname.substring(pathname.lastIndexOf('/') + 1);
        var paramMap = {
            '/': filename !== null && filename !== void 0 ? filename : undefined
        };
        var querystring = url.indexOf('?') === 0 ? url.substring(1) : url;
        if (querystring.length !== 0) {
            var parts = querystring.split('&');
            for (var i = 0; i < parts.length; i++) {
                var component = parts[i].split('=');
                var paramKey = decodeURIComponent(component[0]);
                var paramVal = decodeURIComponent(component[1]);
                if (!paramMap[paramKey]) {
                    paramMap[paramKey] = paramVal;
                    continue;
                }
                !Array.isArray(paramMap[paramKey]) && (paramMap[paramKey] = Array(paramMap[paramKey]));
                paramMap[paramKey].push(paramVal);
            }
        }
        return key ? paramMap === null || paramMap === void 0 ? void 0 : paramMap[key] : paramMap;
    };
    XFetchClass.prototype.request = function (method, url, config, isWhiteList) {
        var _a, _b, _c, _d, _e, _f;
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var contentType, reqUrl, abortController, signal, headers, interceptorConfig, newAbortController, fetchConfig, bodyData, XFetchPromise;
            var _this = this;
            return __generator(this, function (_g) {
                if (!config.autoContentType && config['Content-Type'] !== undefined) {
                    contentType = config['Content-Type'];
                }
                else if (method === XFetchHttpMethod.POST) {
                    contentType = XFetchContentType.FORM;
                }
                else {
                    contentType = XFetchContentType.JSON;
                }
                reqUrl = url.includes('://') ? url : (this.baseUrl + url).replace(/([^\:])\/\//g, '$1/');
                if (config.params) {
                    reqUrl += "".concat(reqUrl.includes('?') ? '&' : '?').concat(this.qsStringify(config.params, (_a = config.qsStringifyOptions) !== null && _a !== void 0 ? _a : {}));
                }
                if (!this._cancelDuplicatedRequest || isWhiteList) {
                    if (isWhiteList) {
                        abortController = this._whiteListAbortController;
                        signal = this._whiteListAbortController.signal;
                    }
                    else {
                        abortController = this._abortController;
                        signal = this._abortController.signal;
                    }
                }
                headers = new Headers(__assign(__assign({ 'Content-Type': contentType }, ((_b = config.headers) !== null && _b !== void 0 ? _b : {})), ((_d = (_c = this._setRequestHeaders) === null || _c === void 0 ? void 0 : _c.call(this, config)) !== null && _d !== void 0 ? _d : {})));
                interceptorConfig = { config: config, headers: headers, url: reqUrl, path: url, method: method, abortController: abortController };
                newAbortController = (_e = this._requestInterceptor) === null || _e === void 0 ? void 0 : _e.call(this, interceptorConfig);
                if (newAbortController && !signal) {
                    signal = newAbortController.signal;
                    abortController = newAbortController;
                }
                if (!method || method === XFetchHttpMethod.GET) {
                    fetchConfig = {
                        headers: headers,
                        signal: signal
                    };
                }
                else if (method === XFetchHttpMethod.POST && contentType === XFetchContentType.FORM) {
                    bodyData = void 0;
                    if (this.typeof(config.data) === 'string') {
                        bodyData = config.data;
                    }
                    else if (this.typeof(config.data) === 'object') {
                        bodyData = this.qsStringify(config.data, (_f = config.qsStringifyOptions) !== null && _f !== void 0 ? _f : {});
                    }
                    else {
                        throw new Error('body must be string or object');
                    }
                    fetchConfig = {
                        body: bodyData,
                        headers: headers,
                        signal: signal,
                        method: XFetchHttpMethod.POST
                    };
                }
                else {
                    fetchConfig = {
                        body: JSON.stringify(config.data),
                        headers: headers,
                        signal: signal,
                        method: method
                    };
                }
                XFetchPromise = function (retryConfig) {
                    var setTimeOut = retryConfig
                        ? (_this.timeout + retryConfig.delay + 500) * (!retryConfig.retry ? 1 : retryConfig.retry)
                        : _this.timeout;
                    return Promise.race([_this._timeoutPromise(setTimeOut, abortController), fetch(reqUrl, fetchConfig)])
                        .then(function (res) { return _this.checkStatus(res); })
                        .then(function (fetchResult) { return _this._handleFetchResponse(fetchResult); })
                        .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                        var responseConfig;
                        var _a;
                        return __generator(this, function (_b) {
                            responseConfig = __assign(__assign({}, interceptorConfig), { data: result });
                            (_a = this._responseInterceptor) === null || _a === void 0 ? void 0 : _a.call(this, responseConfig);
                            return [2, result];
                        });
                    }); })
                        .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                        var errorConfig;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    errorConfig = __assign(__assign({}, interceptorConfig), { error: error });
                                    if (!(retryConfig && retryConfig.retry > 0 && !this.isCancel(error))) return [3, 2];
                                    return [4, this.sleep(retryConfig.delay)];
                                case 1:
                                    _b.sent();
                                    return [2, XFetchPromise(__assign(__assign({}, retryConfig), { retry: retryConfig.retry - 1 }))];
                                case 2: return [2, (_a = this._errorInterceptor) === null || _a === void 0 ? void 0 : _a.call(this, errorConfig)];
                            }
                        });
                    }); })
                        .finally(function () {
                        var _a;
                        (_a = _this._requestFinally) === null || _a === void 0 ? void 0 : _a.call(_this);
                    });
                };
                return [2, XFetchPromise(this._retryConfig)];
            });
        });
    };
    XFetchClass.prototype.sleep = function (milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    };
    XFetchClass.prototype.checkStatus = function (response) {
        var status = response.status;
        if (status >= 200 && status < 300) {
            return response;
        }
        var errorText = CODE_MSG[status] || response.statusText;
        var error = new Error(errorText);
        error.name = response.status;
        error.response = response;
        return Promise.reject(error);
    };
    XFetchClass.prototype.get = function (url, params, config, isWhiteList) {
        if (params === void 0) { params = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XFetchHttpMethod.GET, url, __assign({ params: params }, config), isWhiteList)];
            });
        });
    };
    XFetchClass.prototype.post = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XFetchHttpMethod.POST, url, __assign({ data: data }, config), isWhiteList)];
            });
        });
    };
    XFetchClass.prototype.patch = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XFetchHttpMethod.PATCH, url, __assign({ data: data }, config), isWhiteList)];
            });
        });
    };
    XFetchClass.prototype.put = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XFetchHttpMethod.PUT, url, __assign({ data: data }, config), isWhiteList)];
            });
        });
    };
    XFetchClass.prototype.delete = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XFetchHttpMethod.DELETE, url, __assign({ data: data }, config), isWhiteList)];
            });
        });
    };
    XFetchClass.prototype.postForm = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XFetchHttpMethod.POST, url, __assign(__assign({ 'Content-Type': XFetchContentType.FORM }, config), { data: data }), isWhiteList)];
            });
        });
    };
    XFetchClass.prototype.postFile = function (url, files, name, hasBrackets, hasIndex, config, isWhiteList) {
        if (name === void 0) { name = 'file'; }
        if (hasBrackets === void 0) { hasBrackets = false; }
        if (hasIndex === void 0) { hasIndex = false; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                if (Array.isArray(files)) {
                    files.forEach(function (file, fileIndex) {
                        hasBrackets
                            ? formData.append(hasIndex ? "".concat(name, "[]") : "".concat(name, "[").concat(fileIndex, "]"), file)
                            : formData.append(name, file);
                    });
                }
                else {
                    formData.append(name, files);
                }
                return [2, this.request(XFetchHttpMethod.POST, url, __assign(__assign({ 'Content-Type': XFetchContentType.FILE }, config), { data: formData }), isWhiteList)];
            });
        });
    };
    XFetchClass.prototype.cancelRequest = function (message) {
        var e_2, _a;
        var _b;
        if (this._cancelDuplicatedRequest) {
            try {
                for (var _c = __values(this._pendingRequests), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), url = _e[0], cancel = _e[1];
                    cancel(message ? "".concat(message, ": ").concat(url) : url);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this._pendingRequests.clear();
        }
        else {
            (_b = this._abortController) === null || _b === void 0 ? void 0 : _b.abort(message);
            this._abortController = new AbortController();
        }
        return this;
    };
    XFetchClass.prototype.cancelWhiteListRequest = function (message) {
        var _a;
        (_a = this._whiteListAbortController) === null || _a === void 0 ? void 0 : _a.abort(message);
        this._whiteListAbortController = new AbortController();
        return this;
    };
    XFetchClass.prototype.getAbortController = function () {
        return new AbortController();
    };
    XFetchClass.prototype.getBaseURL = function () {
        return this.baseUrl;
    };
    XFetchClass.prototype.setBaseURL = function (url) {
        this.baseUrl = url !== null && url !== void 0 ? url : '';
        return this;
    };
    XFetchClass.prototype.setRequestTimeout = function (timeout) {
        this.timeout = timeout;
        return this;
    };
    XFetchClass.prototype.getInstance = function () {
        return this;
    };
    XFetchClass.prototype.isCancel = function (error) {
        return error.name === 'AbortError';
    };
    XFetchClass.prototype.create = function (options) {
        return new XFetchClass(options);
    };
    return XFetchClass;
}());
var XFetch = new XFetchClass();

export { CODE_MSG, XFetch, XFetchClass, XFetchContentType, XFetchHttpMethod, XFetch as default };
