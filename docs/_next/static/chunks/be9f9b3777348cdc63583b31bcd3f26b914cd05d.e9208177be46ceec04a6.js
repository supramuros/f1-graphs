(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"3q9U":function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r("o0o1"),o=r.n(n),i=r("rePB"),u=r("KQm4"),c=r("HaE+"),a=r("At3W"),s=r("jPAz"),f=r("l+jR"),l=r("uMoK");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(o.a.mark((function t(e,r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e,r);case 2:return n=t.sent,t.abrupt("return",n[0]);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(o.a.mark((function t(e,r){var n,i,u,c,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="results.json?limit=1000",i=s.d,i+="/"+e+"/",i+=r?r+"/"+n:n,t.next=6,fetch(i);case 6:if(u=t.sent,c=void 0,u.ok){t.next=15;break}return l=new a.a("An error occurred while fetching the Race Results data."),t.next=12,u.json();case 12:throw l.info=t.sent,l.status=u.status,l;case 15:return t.next=17,u.json();case 17:return c=t.sent,t.abrupt("return",c.MRData.RaceTable.Races.map((function(t){return{race:Object(f.a)(t),results:g(t?t.Results.map((function(t){return m(t)})):[]).sort((function(t,e){return t.endingPosition-e.endingPosition}))}})));case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){var e=Object(u.a)(t);return e.sort((function(t,e){return(0!=t.startingPosition?t.startingPosition:100)-(0!=e.startingPosition?e.startingPosition:100)})),e.forEach((function(t,e){t.startingOrder=e+1})),e}function m(t){return p(p({driver:O(t)},function(t){return{startingPosition:parseInt(t.grid),endingPosition:parseInt(t.position),points:parseInt(t.points),lapsCompleted:parseInt(t.laps),raceTime:t.Time?parseInt(t.Time.millis):null,raceTimeDsp:t.Time?t.Time.time:t.status,endingStatus:t.status}}(t)),{},{raceStats:w(t)})}function w(t){return{fastestLapRank:t.FastestLap?t.FastestLap.rank:-1,fastestLapNumber:t.FastestLap?parseInt(t.FastestLap.lap):-1,fastestLapTime:t.FastestLap?Object(l.a)(t.FastestLap.Time.time):null,fastestLapTimeDsp:t.FastestLap?t.FastestLap.Time.time:"N/A",fastestLapSpeed:t.FastestLap?Math.round(1e3*parseFloat(t.FastestLap.AverageSpeed.speed))/1e3:0,fastestLapUnits:t.FastestLap?t.FastestLap.AverageSpeed.units:null}}function O(t){return{driverId:t.Driver.driverId,driverCode:t.Driver.code,driverNumber:t.Driver.permanentNumber?t.Driver.permanentNumber:t.number,driverName:t.Driver.givenName+" "+t.Driver.familyName,constructorId:t.Constructor.constructorId,constructorName:t.Constructor.name,constructorColor:s.a.get(t.Constructor.constructorId)?s.a.get(t.Constructor.constructorId):s.b}}},At3W:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?o(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,r){return(f=s()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&i(o,r.prototype),o}).apply(null,arguments)}function l(t){var e="function"===typeof Map?new Map:void 0;return(l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)})(t)}r.d(e,"a",(function(){return v}));var d=r("rePB");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var v=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=p(r);function r(){var t;n(this,r);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return t=e.call.apply(e,[this].concat(u)),Object(d.a)(o(t),"status",void 0),Object(d.a)(o(t),"info",void 0),t}return r}(l(Error))},"HaE+":function(t,e,r){"use strict";function n(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(s){return void r(s)}c.done?e(a):Promise.resolve(a).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var u=t.apply(e,r);function c(t){n(u,o,i,c,a,"next",t)}function a(t){n(u,o,i,c,a,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},KQm4:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},VtrM:function(t,e,r){"use strict";var n=r("q1tI"),o=Object.prototype.hasOwnProperty;var i=new WeakMap,u=0;var c=function(){function t(t){void 0===t&&(t={}),this.cache=new Map(Object.entries(t)),this.subs=[]}return t.prototype.get=function(t){var e=this.serializeKey(t)[0];return this.cache.get(e)},t.prototype.set=function(t,e){var r=this.serializeKey(t)[0];this.cache.set(r,e),this.notify()},t.prototype.keys=function(){return Array.from(this.cache.keys())},t.prototype.has=function(t){var e=this.serializeKey(t)[0];return this.cache.has(e)},t.prototype.clear=function(){this.cache.clear(),this.notify()},t.prototype.delete=function(t){var e=this.serializeKey(t)[0];this.cache.delete(e),this.notify()},t.prototype.serializeKey=function(t){var e=null;if("function"===typeof t)try{t=t()}catch(r){t=""}return Array.isArray(t)?(e=t,t=function(t){if(!t.length)return"";for(var e="arg",r=0;r<t.length;++r)if(null!==t[r]){var n=void 0;"object"!==typeof t[r]&&"function"!==typeof t[r]?n="string"===typeof t[r]?'"'+t[r]+'"':String(t[r]):i.has(t[r])?n=i.get(t[r]):(n=u,i.set(t[r],u++)),e+="@"+n}else e+="@null";return e}(t)):t=String(t||""),[t,e,t?"err@"+t:"",t?"validating@"+t:""]},t.prototype.subscribe=function(t){var e=this;if("function"!==typeof t)throw new Error("Expected the listener to be a function.");var r=!0;return this.subs.push(t),function(){if(r){r=!1;var n=e.subs.indexOf(t);n>-1&&(e.subs[n]=e.subs[e.subs.length-1],e.subs.length--)}}},t.prototype.notify=function(){for(var t=0,e=this.subs;t<e.length;t++){(0,e[t])()}},t}(),a=!0,s={isOnline:function(){return a},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(t){return fetch(t).then((function(t){return t.json()}))},registerOnFocus:function(t){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return t()}),!1),window.addEventListener("focus",(function(){return t()}),!1))},registerOnReconnect:function(t){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){a=!0,t()}),!1),window.addEventListener("offline",(function(){return a=!1}),!1))}},f=function(){return(f=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},l=new c;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),p=f({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(t,e,r,n,o){if(r.isDocumentVisible()&&!("number"===typeof r.errorRetryCount&&o.retryCount>r.errorRetryCount)){var i=Math.min(o.retryCount,8),u=~~((Math.random()+.5)*(1<<i))*r.errorRetryInterval;setTimeout(n,u,o)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function t(e,r){var n,i;if(e===r)return!0;if(e&&r&&(n=e.constructor)===r.constructor){if(n===Date)return e.getTime()===r.getTime();if(n===RegExp)return e.toString()===r.toString();if(n===Array){if((i=e.length)===r.length)for(;i--&&t(e[i],r[i]););return-1===i}if(!n||"object"===typeof e){for(n in i=0,e){if(o.call(e,n)&&++i&&!o.call(r,n))return!1;if(!(n in r)||!t(e[n],r[n]))return!1}return Object.keys(r).length===i}}return e!==e&&r!==r},isPaused:function(){return!1}},s),v="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),y=v?null:window.requestAnimationFrame?function(t){return window.requestAnimationFrame(t)}:function(t){return setTimeout(t,1)},h=v?n.useEffect:n.useLayoutEffect,b=Object(n.createContext)({});b.displayName="SWRConfigContext";var g=b,m=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function u(t){try{a(n.next(t))}catch(e){i(e)}}function c(t){try{a(n.throw(t))}catch(e){i(e)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,c)}a((n=n.apply(t,e||[])).next())}))},w=function(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},O={},j={},S={},I={},R={},P={},T={},E=function(){var t=0;return function(){return++t}}();if(!v){var D=function(t){if(p.isDocumentVisible()&&p.isOnline())for(var e in t)t[e][0]&&t[e][0]()};"function"===typeof p.registerOnFocus&&p.registerOnFocus((function(){return D(S)})),"function"===typeof p.registerOnReconnect&&p.registerOnReconnect((function(){return D(I)}))}var L=function(t,e){void 0===e&&(e=!0);var r=l.serializeKey(t),n=r[0],o=r[2],i=r[3];if(!n)return Promise.resolve();var u=R[n];if(n&&u){for(var c=l.get(n),a=l.get(o),s=l.get(i),f=[],d=0;d<u.length;++d)f.push(u[d](e,c,a,s,d>0));return Promise.all(f).then((function(){return l.get(n)}))}return Promise.resolve(l.get(n))},x=function(t,e,r,n){var o=R[t];if(t&&o)for(var i=0;i<o.length;++i)o[i](!1,e,r,n)},A=function(t,e,r){return void 0===r&&(r=!0),m(void 0,void 0,void 0,(function(){var n,o,i,u,c,a,s,f,d,p,v,y,h;return w(this,(function(b){switch(b.label){case 0:if(n=l.serializeKey(t),o=n[0],i=n[2],!o)return[2];if("undefined"===typeof e)return[2,L(t,r)];if(P[o]=E()-1,T[o]=0,u=P[o],c=j[o],f=!1,e&&"function"===typeof e)try{e=e(l.get(o))}catch(g){e=void 0,s=g}if(!e||"function"!==typeof e.then)return[3,5];f=!0,b.label=1;case 1:return b.trys.push([1,3,,4]),[4,e];case 2:return a=b.sent(),[3,4];case 3:return d=b.sent(),s=d,[3,4];case 4:return[3,6];case 5:a=e,b.label=6;case 6:if((p=function(){if(u!==P[o]||c!==j[o]){if(s)throw s;return!0}})())return[2,a];if("undefined"!==typeof a&&l.set(o,a),l.set(i,s),T[o]=E()-1,!f&&p())return[2,a];if(v=R[o]){for(y=[],h=0;h<v.length;++h)y.push(v[h](!!r,a,s,void 0,h>0));return[2,Promise.all(y).then((function(){if(s)throw s;return l.get(o)}))]}if(s)throw s;return[2,a]}}))}))};Object.defineProperty(g.Provider,"default",{value:p});g.Provider;var C=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=e[0],i=Object.assign({},p,Object(n.useContext)(g),e.length>2?e[2]:2===e.length&&"object"===typeof e[1]?e[1]:{}),u=e.length>2||2===e.length&&"function"===typeof e[1]||null===e[1]?e[1]:i.fetcher,c=l.serializeKey(o),a=c[0],s=c[1],f=c[2],d=c[3],b=Object(n.useRef)(i);h((function(){b.current=i}));var D=function(){return i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount},L=function(){var t=l.get(a);return"undefined"===typeof t?i.initialData:t},C=function(){return!!l.get(d)||a&&D()},F=L(),k=l.get(f),N=C(),M=Object(n.useRef)({data:!1,error:!1,isValidating:!1}),V=Object(n.useRef)({data:F,error:k,isValidating:N});Object(n.useDebugValue)(V.current.data);var _,K,z=Object(n.useState)({})[1],W=Object(n.useCallback)((function(t){var e=!1;for(var r in t)V.current[r]!==t[r]&&(V.current[r]=t[r],M.current[r]&&(e=!0));if(e){if(H.current||!q.current)return;z({})}}),[]),H=Object(n.useRef)(!1),U=Object(n.useRef)(a),q=Object(n.useRef)(!1),B=Object(n.useCallback)((function(t){for(var e,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];H.current||q.current&&a===U.current&&(e=b.current)[t].apply(e,r)}),[a]),G=Object(n.useCallback)((function(t,e){return A(U.current,t,e)}),[]),J=function(t,e){return t[a]?t[a].push(e):t[a]=[e],function(){var r=t[a],n=r.indexOf(e);n>=0&&(r[n]=r[r.length-1],r.pop())}},Q=Object(n.useCallback)((function(e){return void 0===e&&(e={}),m(t,void 0,void 0,(function(){var t,r,n,o,c,p,v,y,h,g;return w(this,(function(m){switch(m.label){case 0:if(!a||!u)return[2,!1];if(H.current)return[2,!1];if(b.current.isPaused())return[2,!1];t=e.retryCount,r=void 0===t?0:t,n=e.dedupe,o=void 0!==n&&n,c=!0,p="undefined"!==typeof O[a]&&o,m.label=1;case 1:return m.trys.push([1,6,,7]),W({isValidating:!0}),l.set(d,!0),p||x(a,V.current.data,V.current.error,!0),v=void 0,y=void 0,p?(y=j[a],[4,O[a]]):[3,3];case 2:return v=m.sent(),[3,5];case 3:return i.loadingTimeout&&!l.get(a)&&setTimeout((function(){c&&B("onLoadingSlow",a,i)}),i.loadingTimeout),O[a]=null!==s?u.apply(void 0,s):u(a),j[a]=y=E(),[4,O[a]];case 4:v=m.sent(),setTimeout((function(){delete O[a],delete j[a]}),i.dedupingInterval),B("onSuccess",v,a,i),m.label=5;case 5:return j[a]>y?[2,!1]:P[a]&&(y<=P[a]||y<=T[a]||0===T[a])?(W({isValidating:!1}),[2,!1]):(l.set(f,void 0),l.set(d,!1),h={isValidating:!1},"undefined"!==typeof V.current.error&&(h.error=void 0),i.compare(V.current.data,v)||(h.data=v,l.set(a,v)),W(h),p||x(a,v,h.error,!1),[3,7]);case 6:return g=m.sent(),delete O[a],delete j[a],b.current.isPaused()?(W({isValidating:!1}),[2,!1]):(l.set(f,g),V.current.error!==g&&(W({isValidating:!1,error:g}),p||x(a,void 0,g,!1)),B("onError",g,a,i),i.shouldRetryOnError&&B("onErrorRetry",g,a,i,Q,{retryCount:r+1,dedupe:!0}),[3,7]);case 7:return c=!1,[2,!0]}}))}))}),[a]);if(h((function(){if(a){H.current=!1;var t=q.current;q.current=!0;var e=V.current.data,r=L();U.current=a,i.compare(e,r)||W({data:r});var n=function(){return Q({dedupe:!0})};(t||D())&&("undefined"===typeof r||v?n():y(n));var o=!1,u=J(S,(function(){!o&&b.current.revalidateOnFocus&&(o=!0,n(),setTimeout((function(){return o=!1}),b.current.focusThrottleInterval))})),c=J(I,(function(){b.current.revalidateOnReconnect&&n()})),s=J(R,(function(t,e,r,o,u){void 0===t&&(t=!0),void 0===u&&(u=!0);var c={},a=!1;return"undefined"===typeof e||i.compare(V.current.data,e)||(c.data=e,a=!0),V.current.error!==r&&(c.error=r,a=!0),"undefined"!==typeof o&&V.current.isValidating!==o&&(c.isValidating=o,a=!0),a&&W(c),!!t&&(u?n():Q())}));return function(){W=function(){return null},H.current=!0,u(),c(),s()}}}),[a,Q]),h((function(){var e=null,r=function(){return m(t,void 0,void 0,(function(){return w(this,(function(t){switch(t.label){case 0:return V.current.error||!b.current.refreshWhenHidden&&!b.current.isDocumentVisible()||!b.current.refreshWhenOffline&&!b.current.isOnline()?[3,2]:[4,Q({dedupe:!0})];case 1:t.sent(),t.label=2;case 2:return b.current.refreshInterval&&e&&(e=setTimeout(r,b.current.refreshInterval)),[2]}}))}))};return b.current.refreshInterval&&(e=setTimeout(r,b.current.refreshInterval)),function(){e&&(clearTimeout(e),e=null)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,Q]),i.suspense){if(_=l.get(a),K=l.get(f),"undefined"===typeof _&&(_=F),"undefined"===typeof K&&(K=k),"undefined"===typeof _&&"undefined"===typeof K){if(O[a]||Q(),O[a]&&"function"===typeof O[a].then)throw O[a];_=O[a]}if("undefined"===typeof _&&K)throw K}var $=Object(n.useMemo)((function(){var t={revalidate:Q,mutate:G};return Object.defineProperties(t,{error:{get:function(){return M.current.error=!0,i.suspense?K:U.current===a?V.current.error:k},enumerable:!0},data:{get:function(){return M.current.data=!0,i.suspense?_:U.current===a?V.current.data:F},enumerable:!0},isValidating:{get:function(){return M.current.isValidating=!0,!!a&&V.current.isValidating},enumerable:!0}}),t}),[Q,F,k,G,a,i.suspense,K,_]);return $};e.a=C},jPAz:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return u}));var n,o="https://ergast.com/api/f1";!function(t){t.SEASONS="seasons",t.SCHEDULE="schedule",t.RESULTS="results",t.LAPS="laps",t.RESULTSLAPS="results+laps",t.PITSTOPS="pitstops",t.DRIVERSTANDINGS="driver-standings",t.CONSTRUCTORSTANDINGS="constructor-standings"}(n||(n={}));var i="#898b8c",u=new Map([{constructorId:"red_bull",color:"#0600ef"},{constructorId:"mercedes",color:"#00D2BE"},{constructorId:"ferrari",color:"#dc0000"},{constructorId:"alphatauri",color:"#2b4562"},{constructorId:"mclaren",color:"#FF9800"},{constructorId:"alpine",color:"#0090ff"},{constructorId:"aston_martin",color:"#006f62"},{constructorId:"alfa",color:"#900000"},{constructorId:"williams",color:"#005aff"},{constructorId:"haas",color:"#ffffff"},{constructorId:"racing_point",color:"#f196c6"},{constructorId:"force_india",color:"#f196c6"},{constructorId:"toro_rosso",color:"#2b4562"},{constructorId:"renault",color:"#fce903"},{constructorId:"manor",color:"#0079bf"},{constructorId:"sauber",color:"#d6201c"}].map((function(t){return[t.constructorId,t.color]})))},"l+jR":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return f}));var n=r("o0o1"),o=r.n(n),i=r("HaE+"),u=r("At3W"),c=r("jPAz");function a(t){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(o.a.mark((function t(e){var r,n,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.d+"/"+e+".json");case 2:if(r=t.sent,n=void 0,i=void 0,r.ok){t.next=12;break}return a=new u.a("An error occurred while fetching the Season Schedule data."),t.next=9,r.json();case 9:throw a.info=t.sent,a.status=r.status,a;case 12:return t.next=14,r.json();case 14:return n=t.sent,t.abrupt("return",!i&&n?n.MRData.RaceTable.Races.map((function(t){return f(t)})).sort((function(t,e){return t.round-e.round})):void 0);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return{season:t.season,round:t.round,raceName:t.raceName,circuitId:t.Circuit.circuitId,circuitName:t.Circuit.circuitName,raceDate:new Date(t.date+"T"+t.time),numLaps:t.Results?t.Results.reduce((function(t,e){return Math.max(t,parseInt(e.laps))}),0):void 0}}},rePB:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},uMoK:function(t,e,r){"use strict";function n(t){var e=t.split(":"),r=t.includes(":")?parseInt(e[0]):0,n=t.includes(":")?parseFloat(e[1]):parseFloat(e[0]);return Math.round(1e3*Number(60*r+n))/1e3}r.d(e,"a",(function(){return n}))}}]);