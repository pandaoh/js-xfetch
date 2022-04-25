"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,e,r=function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function n(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))}function o(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function i(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}exports.XFetchContentType=void 0,(t=exports.XFetchContentType||(exports.XFetchContentType={})).JSON="application/json;charset=UTF-8",t.FORM="application/x-www-form-urlencoded;charset=UTF-8",t.FILE="multipart/form-data",t.json="application/json;charset=UTF-8",t.form="application/x-www-form-urlencoded;charset=UTF-8",t.file="multipart/form-data",exports.XFetchHttpMethod=void 0,(e=exports.XFetchHttpMethod||(exports.XFetchHttpMethod={})).GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.get="GET",e.post="POST",e.put="PUT",e.patch="PATCH",e.delete="DELETE",e.options="OPTIONS";var s={200:"服务器成功返回请求的数据。",201:"新建或修改数据成功。",202:"一个请求已经进入后台排队（异步任务）。",204:"删除数据成功。",301:"资源永久移动，请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。",302:"资源临时移动，只是临时被移动，客户端可继续使用原有 URI。",303:"查看其它地址，与 301 类似，使用 GET 和 POST 请求查看。",304:"资源未修改，所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。",400:"发出的请求有错误，服务器没有进行新建或修改数据的操作。",401:"用户没有权限（令牌、用户名、密码错误）。",403:"用户得到授权，但是访问是被禁止的。",404:"发出的请求针对的是不存在的记录，服务器没有进行操作。",406:"请求的格式不可得。",410:"请求的资源被永久删除，且不会再得到的。",422:"当创建一个对象时，发生一个验证错误。",500:"服务器发生错误，请检查服务器。",502:"网关错误。",503:"服务不可用，服务器暂时过载或维护。",504:"网关超时。"},a=function(){function t(t){var e,r,i,s,a,u,l,c,d,p=this;return this.timeout=3e4,this.baseUrl="",this._abortController=new AbortController,this._whiteListAbortController=new AbortController,this._handleFetchResponse=function(t){return n(p,void 0,void 0,(function(){var e,r,n;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this._parseFetchResponse(t)];case 1:return e=o.sent(),t.ok?[2,e]:(r=e,[2,Promise.reject(r)]);case 2:return n=o.sent(),[2,Promise.reject(n)];case 3:return[2]}}))}))},this._parseFetchResponse=function(t){return n(p,void 0,void 0,(function(){var e;return o(this,(function(r){switch(r.label){case 0:return(e=t.headers.get("Content-Type"))?e.includes("json")?[4,t.json()]:[3,2]:[3,10];case 1:case 3:case 5:case 7:case 9:case 11:return[2,r.sent()];case 2:return e.includes("text")?[4,t.text()]:[3,4];case 4:return e.includes("form")?[4,t.formData()]:[3,6];case 6:return e.includes("video")||e.includes("image")?[4,t.blob()]:[3,8];case 8:return e.includes("arrayBuffer")?[4,t.arrayBuffer()]:[3,10];case 10:return[4,t.text()]}}))}))},this._timeoutPromise=function(t,e){return new Promise((function(r,n){setTimeout((function(){r(new Response("timeout",{status:504,statusText:"timeout "})),null==e||e.abort()}),t)}))},this._cancelDuplicatedRequest=null===(e=null==t?void 0:t.cancelDuplicatedRequest)||void 0===e||e,this._cancelDuplicatedRequest&&(this._pendingRequests=new Map),this._requestHandler=null!==(r=null==t?void 0:t.requestHandler)&&void 0!==r?r:void 0,this._responseHandler=null!==(i=null==t?void 0:t.responseHandler)&&void 0!==i?i:void 0,this._errorHandler=null!==(s=null==t?void 0:t.errorHandler)&&void 0!==s?s:void 0,this._requestFinally=null!==(a=null==t?void 0:t.requestFinally)&&void 0!==a?a:void 0,this._setRequestHeaders=null!==(u=null==t?void 0:t.setRequestHeaders)&&void 0!==u?u:void 0,this._retryConfig=null!==(l=null==t?void 0:t.retryConfig)&&void 0!==l?l:void 0,this.timeout=null!==(c=null==t?void 0:t.timeout)&&void 0!==c?c:this.timeout,this.baseUrl=null!==(d=null==t?void 0:t.baseUrl)&&void 0!==d?d:this.baseUrl,this}return t.prototype._requestInterceptor=function(t){var e;if(null===(e=this._requestHandler)||void 0===e||e.call(this,t),this._cancelDuplicatedRequest&&!t.abortController)return this._removePendingRequest(t),this._addPendingRequest(t)},t.prototype._responseInterceptor=function(t){var e;this._cancelDuplicatedRequest&&!t.abortController&&this._removePendingRequest(t),null===(e=this._responseHandler)||void 0===e||e.call(this,t)},t.prototype._errorInterceptor=function(t){var e;return this.isCancel(t.error)||(this._cancelDuplicatedRequest&&this._pendingRequests.clear(),this._whiteListAbortController=new AbortController,this._abortController=new AbortController),null===(e=this._errorHandler)||void 0===e?void 0:e.call(this,t)},t.prototype._addPendingRequest=function(t){var e=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&"),r=new AbortController;return this._pendingRequests.has(e)||this._pendingRequests.set(e,r),r},t.prototype._removePendingRequest=function(t){var e=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&");this._pendingRequests.has(e)&&(this._pendingRequests.get(e).abort(e),this._pendingRequests.delete(e))},t.prototype.typeof=function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},t.prototype.qsStringify=function(t,e){var r=this;if(!t)return"";var n=new URLSearchParams;return Object.keys(t).forEach((function(o){var i=t[o];switch(r.typeof(i)){case"object":Object.keys(i).forEach((function(t){n.append("".concat(o,"[").concat(t,"]"),"object"==r.typeof(i[t])?JSON.stringify(i[t]):i[t])}));break;case"array":(null==e?void 0:e.arr2str)?n.append(o,i.join(",")):i.filter(Boolean).forEach((function(t,i){var s="object"==r.typeof(t)?JSON.stringify(t):t;(null==e?void 0:e.hasBrackets)?n.append((null==e?void 0:e.hasIndex)?"".concat(o,"[").concat(i,"]"):"".concat(o,"[]"),s):n.append(o,s)}));break;default:n.append(o,i)}})),(null==e?void 0:e.urlEncode)?n.toString():decodeURIComponent(n.toString())},t.prototype.qsParse=function(t,e){var r=null!=t?t:window.location.pathname;t=null!=t?t:window.location.search;var n=r.substring(r.lastIndexOf("/")+1),o={"/":null!=n?n:void 0},i=0===t.indexOf("?")?t.substring(1):t;if(0!==i.length)for(var s=i.split("&"),a=0;a<s.length;a++){var u=s[a].split("="),l=decodeURIComponent(u[0]),c=decodeURIComponent(u[1]);o[l]?(!Array.isArray(o[l])&&(o[l]=Array(o[l])),o[l].push(c)):o[l]=c}return e?null==o?void 0:o[e]:o},t.prototype.request=function(t,e,i,s){var a,u,l,c,d,p;return void 0===s&&(s=!1),n(this,void 0,void 0,(function(){var h,f,v,y,b,m,g,_,T,w,C=this;return o(this,(function(q){if(h=i.autoContentType||void 0===i["Content-Type"]?t===exports.XFetchHttpMethod.POST?exports.XFetchContentType.FORM:exports.XFetchContentType.JSON:i["Content-Type"],f=e.includes("://")?e:(this.baseUrl+e).replace(/([^\:])\/\//g,"$1/"),i.params&&(f+="".concat(f.includes("?")?"&":"?").concat(this.qsStringify(i.params,null!==(a=i.qsStringifyOptions)&&void 0!==a?a:{}))),this._cancelDuplicatedRequest&&!s||(s?(v=this._whiteListAbortController,y=this._whiteListAbortController.signal):(v=this._abortController,y=this._abortController.signal)),b=new Headers(r(r({"Content-Type":h},null!==(u=i.headers)&&void 0!==u?u:{}),null!==(c=null===(l=this._setRequestHeaders)||void 0===l?void 0:l.call(this,i))&&void 0!==c?c:{})),m={config:i,headers:b,url:f,path:e,method:t,abortController:v},(g=null===(d=this._requestInterceptor)||void 0===d?void 0:d.call(this,m))&&!y&&(y=g.signal,v=g),t&&t!==exports.XFetchHttpMethod.GET)if(t===exports.XFetchHttpMethod.POST&&h===exports.XFetchContentType.FORM){if(T=void 0,"string"===this.typeof(i.data))T=i.data;else{if("object"!==this.typeof(i.data))throw new Error("body must be string or object");T=this.qsStringify(i.data,null!==(p=i.qsStringifyOptions)&&void 0!==p?p:{})}_={body:T,headers:b,signal:y,method:exports.XFetchHttpMethod.POST}}else _={body:JSON.stringify(i.data),headers:b,signal:y,method:t};else _={headers:b,signal:y};return w=function(t){var e=t?(C.timeout+t.delay+500)*(t.retry?t.retry:1):C.timeout;return Promise.race([C._timeoutPromise(e,v),fetch(f,_)]).then((function(t){return C.checkStatus(t)})).then((function(t){return C._handleFetchResponse(t)})).then((function(t){return n(C,void 0,void 0,(function(){var e,n;return o(this,(function(o){return e=r(r({},m),{data:t}),null===(n=this._responseInterceptor)||void 0===n||n.call(this,e),[2,t]}))}))})).catch((function(e){return n(C,void 0,void 0,(function(){var n,i;return o(this,(function(o){switch(o.label){case 0:return n=r(r({},m),{error:e}),t&&t.retry>0&&!this.isCancel(e)?[4,this.sleep(t.delay)]:[3,2];case 1:return o.sent(),[2,w(r(r({},t),{retry:t.retry-1}))];case 2:return[2,null===(i=this._errorInterceptor)||void 0===i?void 0:i.call(this,n)]}}))}))})).finally((function(){var t;null===(t=C._requestFinally)||void 0===t||t.call(C)}))},[2,w(this._retryConfig)]}))}))},t.prototype.sleep=function(t){return new Promise((function(e){return setTimeout(e,t)}))},t.prototype.checkStatus=function(t){var e=t.status;if(e>=200&&e<300)return t;var r=s[e]||t.statusText,n=new Error(r);return n.name=t.status,n.response=t,Promise.reject(n)},t.prototype.get=function(t,e,i,s){return void 0===e&&(e={}),void 0===i&&(i={}),void 0===s&&(s=!1),n(this,void 0,void 0,(function(){return o(this,(function(n){return[2,this.request(exports.XFetchHttpMethod.GET,t,r({params:e},i),s)]}))}))},t.prototype.post=function(t,e,i,s){return void 0===e&&(e={}),void 0===i&&(i={}),void 0===s&&(s=!1),n(this,void 0,void 0,(function(){return o(this,(function(n){return[2,this.request(exports.XFetchHttpMethod.POST,t,r({data:e},i),s)]}))}))},t.prototype.patch=function(t,e,i,s){return void 0===e&&(e={}),void 0===i&&(i={}),void 0===s&&(s=!1),n(this,void 0,void 0,(function(){return o(this,(function(n){return[2,this.request(exports.XFetchHttpMethod.PATCH,t,r({data:e},i),s)]}))}))},t.prototype.put=function(t,e,i,s){return void 0===e&&(e={}),void 0===i&&(i={}),void 0===s&&(s=!1),n(this,void 0,void 0,(function(){return o(this,(function(n){return[2,this.request(exports.XFetchHttpMethod.PUT,t,r({data:e},i),s)]}))}))},t.prototype.delete=function(t,e,i,s){return void 0===e&&(e={}),void 0===i&&(i={}),void 0===s&&(s=!1),n(this,void 0,void 0,(function(){return o(this,(function(n){return[2,this.request(exports.XFetchHttpMethod.DELETE,t,r({data:e},i),s)]}))}))},t.prototype.postForm=function(t,e,i,s){return void 0===e&&(e={}),void 0===i&&(i={}),void 0===s&&(s=!1),n(this,void 0,void 0,(function(){return o(this,(function(n){return[2,this.request(exports.XFetchHttpMethod.POST,t,r(r({"Content-Type":exports.XFetchContentType.FORM},i),{data:e}),s)]}))}))},t.prototype.postFile=function(t,e,i,s,a,u,l){return void 0===i&&(i="file"),void 0===s&&(s=!1),void 0===a&&(a=!1),void 0===u&&(u={}),void 0===l&&(l=!1),n(this,void 0,void 0,(function(){var n;return o(this,(function(o){return n=new FormData,Array.isArray(e)?e.forEach((function(t,e){s?n.append(a?"".concat(i,"[]"):"".concat(i,"[").concat(e,"]"),t):n.append(i,t)})):n.append(i,e),[2,this.request(exports.XFetchHttpMethod.POST,t,r(r({"Content-Type":exports.XFetchContentType.FILE},u),{data:n}),l)]}))}))},t.prototype.cancelRequest=function(t){var e,r,n;if(this._cancelDuplicatedRequest){try{for(var o=function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(this._pendingRequests),s=o.next();!s.done;s=o.next()){var a=i(s.value,2),u=a[0];(0,a[1])(t?"".concat(t,": ").concat(u):u)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}this._pendingRequests.clear()}else null===(n=this._abortController)||void 0===n||n.abort(t),this._abortController=new AbortController;return this},t.prototype.cancelWhiteListRequest=function(t){var e;return null===(e=this._whiteListAbortController)||void 0===e||e.abort(t),this._whiteListAbortController=new AbortController,this},t.prototype.getAbortController=function(){return new AbortController},t.prototype.getBaseURL=function(){return this.baseUrl},t.prototype.setBaseURL=function(t){return this.baseUrl=null!=t?t:"",this},t.prototype.setRequestTimeout=function(t){return this.timeout=t,this},t.prototype.getInstance=function(){return this},t.prototype.isCancel=function(t){return"AbortError"===t.name},t.prototype.create=function(e){return new t(e)},t}(),u=new a;exports.CODE_MSG=s,exports.XFetch=u,exports.XFetchClass=a,exports.default=u;