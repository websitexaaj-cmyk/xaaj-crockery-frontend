var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function P(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,P(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),P(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=P(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=P(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return P(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function F(e,t,n){if(e==null)return e;var r=[],i=0;return P(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function I(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ee=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function L(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,ee)}catch(e){ee(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function te(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else L(te.bind(null,e))}var R={map:F,forEach:function(e,t,n){F(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=R,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=te,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=L,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),N=Symbol.for(`react.profiler`),P=Symbol.for(`react.consumer`),F=Symbol.for(`react.context`),I=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),L=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),R=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.legacy_hidden`),z=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.for(`react.view_transition`),ae=Symbol.for(`react.recoverable`),oe=Symbol.iterator;function B(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case N:return`Profiler`;case M:return`StrictMode`;case ee:return`Suspense`;case L:return`SuspenseList`;case ne:return`Activity`;case ie:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case F:return e.displayName||`Context`;case P:return(e._context.displayName||`Context`)+`.Consumer`;case I:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case R:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var V=Array.isArray,H=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function me(e,t){de++,ue[de]=e.current,e.current=t}var he=fe(null),W=fe(null),ge=fe(null),G=fe(null);function _e(e,t){switch(me(ge,t),me(W,e),me(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(he),me(he,e)}function ve(){pe(he),pe(W),pe(ge)}function ye(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,me(G,e)),t=he.current;var n=dp(t,e.type);t!==n&&(me(W,e),me(he,n))}function be(e){W.current===e&&(pe(he),pe(W)),G.current===e&&(pe(G),sh._currentValue=le)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);case 30:return Ce(`ViewTransition`);default:return``}}function K(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,q=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ue(n),i=1<<r;t|=e[r],n&=~i}return t}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=U.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function dt(e,t){var n=U.p;try{return U.p=e,t()}finally{U.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft,xt=`__reactLoad$`+ft;function St(e){delete e[pt],delete e[mt],delete e[_t],delete e[vt]}function Ct(e){var t;if(t=e[pt])return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[pt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[bt]=!0}function Ot(e){e[xt]=void 0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return De.call(Ft,e)?!0:De.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}var Lt=!1;function Rt(){var e=Lt;return Lt=!1,e}function zt(e,t,n){if(It(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,Ht(n)):o===`number`&&e.value==t?Zt(e,Ht(e.value)):Zt(e,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Zt(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(V(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Lt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(rn(e,a,r),Lt=!0)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(Rd(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=D({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=D({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(D({},Ln,{dataTransfer:0})),Bn=kn(D({},Mn,{relatedTarget:0})),Vn=kn(D({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(D({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(D({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(D({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(D({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(D({},An,{submitter:0})),Qn=kn(D({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),$n=kn(D({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),er=kn(D({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),tr=kn(D({},An,{newState:0,oldState:0,source:0})),nr=[9,13,27,32],rr=yn&&`CompositionEvent`in window,ir=null;yn&&`documentMode`in document&&(ir=document.documentMode);var ar=yn&&`TextEvent`in window&&!ir,or=yn&&(!rr||ir&&8<ir&&11>=ir),sr=` `,cr=!1;function lr(e,t){switch(e){case`keyup`:return nr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ur(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var dr=!1;function fr(e,t){switch(e){case`compositionend`:return ur(t);case`keypress`:return t.which===32?(cr=!0,sr):null;case`textInput`:return e=t.data,e===sr&&cr?null:e;default:return null}}function pr(e,t){if(dr)return e===`compositionend`||!rr&&lr(e,t)?(e=Tn(),wn=Cn=Sn=null,dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return or&&t.locale!==`ko`?null:t.data;default:return null}}var mr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!mr[e.type]:t===`textarea`}function gr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Jf(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var _r=null,vr=null;function yr(e){Vf(e,0)}function br(e){if(Kt(Tt(e)))return e}function xr(e,t){if(e===`change`)return t}var Sr=!1;if(yn){var Cr;if(yn){var wr=`oninput`in document;if(!wr){var Tr=document.createElement(`div`);Tr.setAttribute(`oninput`,`return;`),wr=typeof Tr.oninput==`function`}Cr=wr}else Cr=!1;Sr=Cr&&(!document.documentMode||9<document.documentMode)}function Er(){_r&&(_r.detachEvent(`onpropertychange`,Dr),vr=_r=null)}function Dr(e){if(e.propertyName===`value`&&br(vr)){var t=[];gr(t,vr,e,fn(e)),_n(yr,t)}}function Or(e,t,n){e===`focusin`?(Er(),_r=t,vr=n,_r.attachEvent(`onpropertychange`,Dr)):e===`focusout`&&Er()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return br(vr)}function Ar(e,t){if(e===`click`)return br(t)}function jr(e,t){if(e===`input`||e===`change`)return br(t)}function Mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Nr=typeof Object.is==`function`?Object.is:Mr;function Pr(e,t){if(Nr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Nr(e[i],t[i]))return!1}return!0}function Fr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ir(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lr(e,t){var n=Ir(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ir(n)}}function Rr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Vr=yn&&`documentMode`in document&&11>=document.documentMode,Hr=null,Ur=null,Wr=null,Gr=!1;function Kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gr||Hr==null||Hr!==Fr(r)||(r=Hr,`selectionStart`in r&&Br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&Pr(Wr,r)||(Wr=r,r=Jf(Ur,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Jr={animationend:qr(`Animation`,`AnimationEnd`),animationiteration:qr(`Animation`,`AnimationIteration`),animationstart:qr(`Animation`,`AnimationStart`),transitionrun:qr(`Transition`,`TransitionRun`),transitionstart:qr(`Transition`,`TransitionStart`),transitioncancel:qr(`Transition`,`TransitionCancel`),transitionend:qr(`Transition`,`TransitionEnd`)},Yr={},Xr={};yn&&(Xr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),`TransitionEvent`in window||delete Jr.transitionend.transition);function Zr(e){if(Yr[e])return Yr[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xr)return Yr[e]=t[n];return e}var Qr=Zr(`animationend`),$r=Zr(`animationiteration`),ei=Zr(`animationstart`),ti=Zr(`transitionrun`),ni=Zr(`transitionstart`),ri=Zr(`transitioncancel`),ii=Zr(`transitionend`),ai=new Map,oi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);oi.push(`scrollEnd`);function si(e,t){ai.set(e,t),jt(t,[e])}var ci=0;function li(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=ci++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function ui(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function di(e,t){return e=ui(e),t=ui(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var fi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},pi=[],mi=0,hi=0;function gi(){for(var e=mi,t=hi=mi=0;t<e;){var n=pi[t];pi[t++]=null;var r=pi[t];pi[t++]=null;var i=pi[t];pi[t++]=null;var a=pi[t];if(pi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&bi(n,i,a)}}function _i(e,t,n,r){pi[mi++]=e,pi[mi++]=t,pi[mi++]=n,pi[mi++]=r,hi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vi(e,t,n,r){return _i(e,t,n,r),xi(e)}function yi(e,t){return _i(e,null,null,t),xi(e)}function bi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function xi(e){if(50<Od)throw Od=0,kd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Si={};function Ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(e,t,n,r){return new Ci(e,t,n,r)}function Ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ei(e,t){var n=e.alternate;return n===null?(n=wi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Di(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ti(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ne:return e=wi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case j:return ki(n.children,a,o,t);case M:s=8,a|=24;break;case N:return e=wi(12,n,t,a|2),e.elementType=N,e.lanes=o,e;case ee:return e=wi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case L:return e=wi(19,n,t,a),e.elementType=L,e.lanes=o,e;case re:case ie:return e=a|32,e=wi(30,n,t,e),e.elementType=ie,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case F:s=10;break a;case P:s=9;break a;case I:s=11;break a;case te:s=14;break a;case R:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=wi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ki(e,t,n,r){return e=wi(7,e,r,t),e.lanes=n,e}function Ai(e,t,n){return e=wi(6,e,null,t),e.lanes=n,e}function ji(e){var t=wi(18,null,null,0);return t.stateNode=e,t}function Mi(e,t,n){return t=wi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ni=new WeakMap;function Pi(e,t){if(typeof e==`object`&&e){var n=Ni.get(e);return n===void 0?(t={value:e,source:t,stack:K(t)},Ni.set(e,t),t):n}return{value:e,source:t,stack:K(t)}}var Fi=[],Ii=0,Li=null,Ri=0,zi=[],Bi=0,Vi=null,Hi=1,Ui=``;function Wi(e,t){Fi[Ii++]=Ri,Fi[Ii++]=Li,Li=e,Ri=t}function Gi(e,t,n){zi[Bi++]=Hi,zi[Bi++]=Ui,zi[Bi++]=Vi,Vi=e;var r=Hi;e=Ui;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hi=1<<32-Ue(t)+i|n<<i|r,Ui=a+e}else Hi=1<<a|n<<i|r,Ui=e}function Ki(e){e.return!==null&&(Wi(e,1),Gi(e,1,0))}function qi(e){for(;e===Li;)Li=Fi[--Ii],Fi[Ii]=null,Ri=Fi[--Ii],Fi[Ii]=null;for(;e===Vi;)Vi=zi[--Bi],zi[Bi]=null,Ui=zi[--Bi],zi[Bi]=null,Hi=zi[--Bi],zi[Bi]=null}function Ji(e,t){zi[Bi++]=Hi,zi[Bi++]=Ui,zi[Bi++]=Vi,Hi=t.id,Ui=t.overflow,Vi=e}var Yi=null,Xi=null,Zi=!1,Qi=null,J=!1,$i=Error(i(519));function ea(e){throw oa(Pi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),$i}function ta(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Hf(`cancel`,t),Hf(`close`,t);break;case`iframe`:case`object`:case`embed`:Hf(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Hf(zf[n],t);break;case`source`:Hf(`error`,t);break;case`img`:case`image`:case`link`:Hf(`error`,t),Hf(`load`,t);break;case`details`:Hf(`toggle`,t);break;case`input`:Hf(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Hf(`invalid`,t);break;case`textarea`:Hf(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&(Hf(`beforetoggle`,t),Hf(`toggle`,t)),r.onScroll!=null&&Hf(`scroll`,t),r.onScrollEnd!=null&&Hf(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||ea(e,!0)}function na(e){for(Yi=e.return;Yi;)switch(Yi.tag){case 5:case 31:case 13:J=!1;return;case 27:case 3:J=!0;return;default:Yi=Yi.return}}function ra(e){if(e!==Yi)return!1;if(!Zi)return na(e),Zi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&Xi&&ea(e),na(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Xi=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Xi=dm(e)}else t===27?(t=Xi,Sp(e.type)?(e=um,um=null,Xi=e):Xi=t):Xi=Yi?lm(e.stateNode.nextSibling):null;return!0}function ia(){Xi=Yi=null,Zi=!1}function aa(){var e=Qi;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),Qi=null),e}function oa(e){Qi===null?Qi=[e]:Qi.push(e)}var sa=fe(null),ca=null,la=null;function ua(e,t,n){me(sa,t._currentValue),t._currentValue=n}function da(e){e._currentValue=sa.current,pe(sa)}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function pa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),fa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),fa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),fa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ma(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Nr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===G.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&pa(t,e,n,r),t.flags|=262144,e!==null}function ha(e){for(e=e.firstContext;e!==null;){if(!Nr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){ca=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _a(e){return ya(ca,e)}function va(e,t){return ca===null&&ga(e),ya(e,t)}function ya(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},la===null){if(e===null)throw Error(i(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return n}var ba=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},xa=t.unstable_scheduleCallback,Y=t.unstable_NormalPriority,Sa={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ca(){return{controller:new ba,data:new Map,refCount:0}}function wa(e){e.refCount--,e.refCount===0&&xa(Y,function(){e.controller.abort()})}function Ta(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ea=null;function Da(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Oa=null,ka=0,Aa=0,ja=null;function Ma(e,t){if(Oa===null){var n=Oa=[];ka=0,Aa=Pf(),ja={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ka++,t.then(Na,Na),t}function Na(){if(--ka===0&&(Ea=null,Oa!==null)){ja!==null&&(ja.status=`fulfilled`);var e=Oa;Oa=null,Aa=0,ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Fa=H.S;H.S=function(e,t){if(hd=je(),typeof t==`object`&&t&&typeof t.then==`function`&&Ma(e,t),Ea!==null)for(var n=bf;n!==null;)Ta(n,Ea),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ta(r,n),r=r.next;if(Aa!==0){r=Ea,r===null&&(r=Ea=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Fa!==null&&Fa(e,t)};var Ia=fe(null);function La(){var e=Ia.current;return e===null?Xu.pooledCache:e}function Ra(e,t){t===null?me(Ia,Ia.current):me(Ia,t.pool)}function za(){var e=La();return e===null?null:{parent:Sa._currentValue,pool:e}}var Ba=Error(i(460)),Va=Error(i(474)),Ha=Error(i(542)),Ua={then:function(){}};function Wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ga(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ya(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ya(e),e}throw qa=t,Ba}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(qa=e,Ba):e}}var qa=null;function Ja(){if(qa===null)throw Error(i(459));var e=qa;return qa=null,e}function Ya(e){if(e===Ba||e===Ha)throw Error(i(483))}var Xa=null,Za=0;function Qa(e){var t=Za;return Za+=1,Xa===null&&(Xa=[]),Ga(Xa,e,t)}function $a(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function eo(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function to(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ei(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ai(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),$a(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===R&&Ka(i)===t.type)?(t=a(t,n.props),$a(t,n),t.return=e,t):(t=Oi(n.type,n.key,n.props,null,e.mode,r),$a(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ki(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ai(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Oi(t.type,t.key,t.props,null,e.mode,n),$a(n,t),n.return=e,n;case A:return t=Mi(t,e.mode,n),t.return=e,t;case R:return t=Ka(t),f(e,t,n)}if(V(t)||B(t))return t=ki(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Qa(t),n);if(t.$$typeof===F)return f(e,va(e,t),n);eo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case R:return n=Ka(n),p(e,t,n,r)}if(V(n)||B(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Qa(n),r);if(n.$$typeof===F)return p(e,t,va(e,n),r);eo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case R:return r=Ka(r),m(e,t,n,r,i)}if(V(r)||B(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Qa(r),i);if(r.$$typeof===F)return m(e,t,n,va(t,r),i);eo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Zi&&Wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Zi&&Wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Zi&&Wi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Zi&&Wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Zi&&Wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Zi&&Wi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),$a(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===R&&Ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),$a(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=ki(o.props.children,e.mode,c,o.key),$a(c,o),c.return=e,e=c):(c=Oi(o.type,o.key,o.props,null,e.mode,c),$a(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Mi(o,e.mode,c),c.return=e,e=c}return s(e);case R:return o=Ka(o),_(e,r,o,c)}if(V(o))return h(e,r,o,c);if(B(o)){if(l=B(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,Qa(o),c);if(o.$$typeof===F)return _(e,r,va(e,o),c);eo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ai(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Za=0;var i=_(e,t,n,r);return Xa=null,i}catch(t){if(t===Ba||t===Ha)throw t;var a=wi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var no=to(!0),ro=to(!1),io=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function so(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=xi(e),bi(e,null,n),t}return _i(e,r,t,n),xi(e)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fo=!1;function po(){if(fo){var e=ja;if(e!==null)throw e}}function mo(e,t,n,r){fo=!1;var i=e.updateQueue;io=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Qu&f)===f:(r&f)===f){f!==0&&f===Aa&&(fo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:io=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function ho(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function go(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ho(n[e],t)}var _o=fe(null),vo=fe(0);function yo(e,t){e=id,me(vo,e),me(_o,t),id=e|t.baseLanes}function bo(){me(vo,id),me(_o,_o.current)}function xo(){id=vo.current,pe(_o),pe(vo)}var So=fe(null),Co=null;function wo(e){var t=e.alternate;me(ko,ko.current&1),me(So,e),Co===null&&(t===null||_o.current!==null||t.memoizedState!==null)&&(Co=e)}function To(e){me(ko,ko.current),me(So,e),Co===null&&(Co=e)}function Eo(e){e.tag===22?(me(ko,ko.current),me(So,e),Co===null&&(Co=e)):Do()}function Do(){me(ko,ko.current),me(So,So.current)}function Oo(e){pe(So),Co===e&&(Co=null),pe(ko)}var ko=fe(0);function Ao(e,t){me(So,So.current),me(ko,t)}function jo(e){pe(ko),pe(So),Co===e&&(Co=null)}function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No=0,X=null,Po=null,Fo=null,Io=!1,Lo=!1,Ro=!1,zo=0,Bo=0,Vo=null,Ho=0;function Uo(){throw Error(i(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,a){return No=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?cc:lc,Ro=!1,a=n(r,i),Ro=!1,Lo&&(a=qo(t,n,r,i)),Ko(e),a}function Ko(e){H.H=sc;var t=Po!==null&&Po.next!==null;if(No=0,Fo=Po=X=null,Io=!1,Bo=0,Vo=null,t)throw Error(i(300));e===null||Ec||(e=e.dependencies,e!==null&&ha(e)&&(Ec=!0))}function qo(e,t,n,r){X=e;var a=0;do{if(Lo&&(Vo=null),Bo=0,Lo=!1,25<=a)throw Error(i(301));if(a+=1,Fo=Po=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=uc,o=t(n,r)}while(Lo);return o}function Jo(){var e=H.H,t=e.useState()[0];return t=typeof t.then==`function`?ts(t):t,e=e.useState()[0],(Po===null?null:Po.memoizedState)!==e&&(X.flags|=1024),t}function Yo(){var e=zo!==0;return zo=0,e}function Xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zo(e){if(Io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Io=!1}No=0,Fo=Po=X=null,Lo=!1,Bo=zo=0,Vo=null}function Qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fo===null?X.memoizedState=Fo=e:Fo=Fo.next=e,Fo}function $o(){if(Po===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=Po.next;var t=Fo===null?X.memoizedState:Fo.next;if(t!==null)Fo=t,Po=e;else{if(e===null)throw X.alternate===null?Error(i(467)):Error(i(310));Po=e,e={memoizedState:Po.memoizedState,baseState:Po.baseState,baseQueue:Po.baseQueue,queue:Po.queue,next:null},Fo===null?X.memoizedState=Fo=e:Fo=Fo.next=e}return Fo}function es(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(e){var t=Bo;return Bo+=1,Vo===null&&(Vo=[]),e=Ga(Vo,e,t),t=X,(Fo===null?t.memoizedState:Fo.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?cc:lc),e}function ns(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ts(e);if(e.$$typeof===ae)return;if(e.$$typeof===F)return _a(e)}throw Error(i(438,String(e)))}function rs(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=es(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=z;return t.index++,n}function is(e,t){return typeof t==`function`?t(e):t}function as(e){return os($o(),Po,e)}function os(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(No&f)===f:(Qu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Aa&&(d=!0);else if((No&p)===p){u=u.next,p===Aa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,X.lanes|=p,od|=p;f=u.action,Ro&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,X.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Nr(o,e.memoizedState)&&(Ec=!0,d&&(n=ja,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ss(e){var t=$o(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Nr(o,t.memoizedState)||(Ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cs(e,t,n){var r=X,a=$o(),o=Zi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Nr((Po||a).memoizedState,n);if(s&&(a.memoizedState=n,Ec=!0),a=a.queue,Ns(ds.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Fo!==null&&!!(Fo.memoizedState.tag&1),Os(e?9:8,{destroy:void 0},us.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(i(349));o||No&127||ls(r,t,n)}return n}function ls(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=es(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function us(e,t,n,r){t.value=n,t.getSnapshot=r,fs(t)&&ps(e)}function ds(e,t,n){return n(function(){fs(t)&&ps(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nr(e,n)}catch{return!0}}function ps(e){var t=yi(e,2);t!==null&&Nd(t,e,2)}function ms(e){var t=Qo();if(typeof e==`function`){var n=e;if(e=n(),Ro){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t}function hs(e,t,n,r){return e.baseState=n,os(e,Po,typeof r==`function`?r:is)}function gs(e,t,n,r,a){if(ic(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};H.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,_s(t,o)):(o.next=n.next,t.pending=n.next=o)}}function _s(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=H.T,o={};o.types=a===null?null:a.types,H.T=o;try{var s=n(i,r),c=H.S;c!==null&&c(o,s),vs(e,t,s)}catch(n){bs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),H.T=a}}else try{a=n(i,r),vs(e,t,a)}catch(n){bs(e,t,n)}}function vs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ys(e,t,n)},function(n){return bs(e,t,n)}):ys(e,t,n)}function ys(e,t,n){t.status=`fulfilled`,t.value=n,xs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_s(e,n)))}function bs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,xs(t),t=t.next;while(t!==r)}e.action=null}function xs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ss(e,t){return t}function Cs(e,t){if(Zi){var n=Xu.formState;if(n!==null){a:{var r=X;if(Zi){if(Xi){b:{for(var i=Xi,a=J;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Xi=lm(i.nextSibling),r=i.data===`F!`;break a}}ea(r)}r=!1}r&&(t=n[0])}}return n=Qo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},n.queue=r,n=tc.bind(null,X,r),r.dispatch=n,r=ms(!1),a=rc.bind(null,X,!1,r.queue),r=Qo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=gs.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ws(e){return Ts($o(),Po,e)}function Ts(e,t,n){if(t=os(e,t,Ss)[0],e=as(is)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ts(t)}catch(e){throw e===Ba?Ha:e}else r=t;t=$o();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,Os(9,{destroy:void 0},Es.bind(null,i,n),null)),[r,a,e]}function Es(e,t){e.action=t}function Ds(e){var t=$o(),n=Po;if(n!==null)return Ts(t,n,e);$o(),t=t.memoizedState,n=$o();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=es(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ks(){return $o().memoizedState}function As(e,t,n,r){var i=Qo();X.flags|=e,i.memoizedState=Os(1|t,{destroy:void 0},n,r===void 0?null:r)}function js(e,t,n,r){var i=$o();r=r===void 0?null:r;var a=i.memoizedState.inst;Po!==null&&r!==null&&Wo(r,Po.memoizedState.deps)?i.memoizedState=Os(t,a,n,r):(X.flags|=e,i.memoizedState=Os(1|t,a,n,r))}function Ms(e,t){As(8390656,8,e,t)}function Ns(e,t){js(2048,8,e,t)}function Ps(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=es(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fs(e){var t=$o().memoizedState;return Ps({ref:t,nextImpl:e}),function(){if(Yu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Is(e,t){return js(4,2,e,t)}function Ls(e,t){return js(4,4,e,t)}function Rs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zs(e,t,n){n=n==null?null:n.concat([e]),js(4,4,Rs.bind(null,t,e),n)}function Bs(){}function Vs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Wo(t,r[1]))return r[0];if(r=e(),Ro){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function Us(e,t,n){return n===void 0||No&1073741824&&!(Qu&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),X.lanes|=e,od|=e,n)}function Ws(e,t,n,r){return Nr(n,t)?n:_o.current===null?!(No&106)||No&1073741824&&!(Qu&261930)?(Ec=!0,e.memoizedState=n):(e=jd(),X.lanes|=e,od|=e,t):(e=Us(e,n,r),Nr(e,t)||(Ec=!0),e)}function Gs(e,t,n,r,i){var a=U.p;U.p=a!==0&&8>a?a:8;var o=H.T,s={};s.types=o===null?null:o.types,H.T=s,rc(e,!1,t,n);try{var c=i(),l=H.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?nc(e,t,Pa(c,r),Ad(e)):nc(e,t,r,Ad(e))}catch(n){nc(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{U.p=a,o!==null&&s.types!==null&&(o.types=s.types),H.T=o}}function Ks(){}function qs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Js(e).queue;Gs(e,a,t,le,n===null?Ks:function(){return Ys(e),n(r)})}function Js(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ys(e){var t=Js(e);t.next===null&&(t=e.alternate.memoizedState),nc(e,t.next.queue,{},Ad())}function Xs(){return _a(sh)}function Zs(){return $o().memoizedState}function Qs(){return $o().memoizedState}function $s(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=so(n);var r=co(t,e,n);r!==null&&(Nd(r,t,n),lo(r,t,n)),t={cache:Ca()},e.payload=t;return}t=t.return}}function ec(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e)?ac(t,n):(n=vi(e,t,n,r),n!==null&&(Nd(n,e,r),oc(n,t,r)))}function tc(e,t,n){nc(e,t,n,Ad())}function nc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))ac(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Nr(s,o))return _i(e,t,i,0),Xu===null&&gi(),!1}catch{}if(n=vi(e,t,i,r),n!==null)return Nd(n,e,r),oc(n,t,r),!0}return!1}function rc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(t)throw Error(i(479))}else t=vi(e,n,r,2),t!==null&&Nd(t,e,2)}function ic(e){var t=e.alternate;return e===X||t!==null&&t===X}function ac(e,t){Lo=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var sc={readContext:_a,use:ns,useCallback:Uo,useContext:Uo,useEffect:Uo,useImperativeHandle:Uo,useLayoutEffect:Uo,useInsertionEffect:Uo,useMemo:Uo,useReducer:Uo,useRef:Uo,useState:Uo,useDebugValue:Uo,useDeferredValue:Uo,useTransition:Uo,useSyncExternalStore:Uo,useId:Uo,useHostTransitionStatus:Uo,useFormState:Uo,useActionState:Uo,useOptimistic:Uo,useMemoCache:Uo,useCacheRefresh:Uo,useEffectEvent:Uo},cc={readContext:_a,use:ns,useCallback:function(e,t){return Qo().memoizedState=[e,t===void 0?null:t],e},useContext:_a,useEffect:Ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),As(4194308,4,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){As(4,2,e,t)},useMemo:function(e,t){var n=Qo();t=t===void 0?null:t;var r=e();if(Ro){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Qo();if(n!==void 0){var i=n(t);if(Ro){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ec.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Qo();return e={current:e},t.memoizedState=e},useState:function(e){e=ms(e);var t=e.queue,n=tc.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bs,useDeferredValue:function(e,t){return Us(Qo(),e,t)},useTransition:function(){var e=ms(!1);return e=Gs.bind(null,X,e.queue,!0,!1),Qo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,a=Qo();if(Zi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xu===null)throw Error(i(349));Qu&127||ls(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ms(ds.bind(null,r,o,e),[e]),r.flags|=2048,Os(9,{destroy:void 0},us.bind(null,r,o,n,t),null),n},useId:function(){var e=Qo(),t=Xu.identifierPrefix;if(Zi){var n=Ui,r=Hi;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Ho++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Xs,useFormState:Cs,useActionState:Cs,useOptimistic:function(e){var t=Qo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=rc.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:rs,useCacheRefresh:function(){return Qo().memoizedState=$s.bind(null,X)},useEffectEvent:function(e){var t=Qo(),n={impl:e};return t.memoizedState=n,function(){if(Yu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},lc={readContext:_a,use:ns,useCallback:Vs,useContext:_a,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:as,useRef:ks,useState:function(){return as(is)},useDebugValue:Bs,useDeferredValue:function(e,t){return Ws($o(),Po.memoizedState,e,t)},useTransition:function(){var e=as(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:cs,useId:Zs,useHostTransitionStatus:Xs,useFormState:ws,useActionState:ws,useOptimistic:function(e,t){return hs($o(),Po,e,t)},useMemoCache:rs,useCacheRefresh:Qs,useEffectEvent:Fs},uc={readContext:_a,use:ns,useCallback:Vs,useContext:_a,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:ss,useRef:ks,useState:function(){return ss(is)},useDebugValue:Bs,useDeferredValue:function(e,t){var n=$o();return Po===null?Us(n,e,t):Ws(n,Po.memoizedState,e,t)},useTransition:function(){var e=ss(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:cs,useId:Zs,useHostTransitionStatus:Xs,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){var n=$o();return Po===null?(n.baseState=e,[e,n.queue.dispatch]):hs(n,Po,e,t)},useMemoCache:rs,useCacheRefresh:Qs,useEffectEvent:Fs};function dc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=so(r);i.payload=t,n!=null&&(i.callback=n),t=co(e,i,r),t!==null&&(Nd(t,e,r),lo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=so(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=co(e,i,r),t!==null&&(Nd(t,e,r),lo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=so(n);r.tag=2,t!=null&&(r.callback=t),t=co(e,r,n),t!==null&&(Nd(t,e,n),lo(t,e,n))}};function pc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,a):!0}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function hc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function gc(e){fi(e)}function _c(e){console.error(e)}function vc(e){fi(e)}function yc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function xc(e,t,n){return n=so(n),n.tag=3,n.payload={element:null},n.callback=function(){yc(e,t)},n}function Sc(e){return e=so(e),e.tag=3,e}function Cc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){bc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){bc(t,n,r),typeof i!=`function`&&(Z===null?Z=new Set([this]):Z.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function wc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ma(t,n,a,!0),n=So.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Co===null?Gd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ua?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ua?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Gd(),!1}if(Zi)return t=So.current,t===null?(r!==$i&&(t=Error(i(423),{cause:r}),oa(Pi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Pi(r,n),a=xc(e.stateNode,r,a),uo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==$i&&(e=Error(i(422),{cause:r}),oa(Pi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Pi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Pi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=xc(n.stateNode,r,e),uo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(Z===null||!Z.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Sc(a),Cc(a,e,n,r),uo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Tc=Error(i(461)),Ec=!1;function Dc(e,t,n,r){t.child=e===null?ro(t,null,n,r):no(t,e.child,n,r)}function Oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ga(t),r=Go(e,t,n,o,a,i),s=Yo(),e!==null&&!Ec?(Xo(e,t,i),nl(e,t,i)):(Zi&&s&&Ki(t),t.flags|=1,Dc(e,t,r,i),t.child)}function kc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ac(e,t,a,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!rl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Pr:n,n(o,r)&&e.ref===t.ref)return nl(e,t,i)}return t.flags|=1,e=Ei(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref){if(Ec=!1,t.pendingProps=r=a,rl(e,i))e.flags&131072&&(Ec=!0);else return t.lanes=e.lanes,nl(e,t,i)}}return Rc(e,t,n,r,i)}function jc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Nc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ra(t,a===null?null:a.cachePool),a===null?bo():yo(t,a),Eo(t);else return r=t.lanes=536870912,Nc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ra(t,null),bo(),Do()):(Ra(t,a.cachePool),yo(t,a),Do(),t.memoizedState=null);return Dc(e,t,i,n),t.child}function Mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nc(e,t,n,r,i){var a=La();return a=a===null?null:{parent:Sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ra(t,null),bo(),Eo(t),e!==null&&ma(e,t,r,!0),t.childLanes=i,null}function Pc(e,t){return t=qc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fc(e,t,n){return no(t,e.child,null,n),e=Pc(t,t.pendingProps),e.flags|=2,Oo(t),t.memoizedState=null,e}function Ic(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Zi){if(r.mode===`hidden`)return e=Pc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Mc(null,e);if(To(t),(e=Xi)?(e=am(e,J),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vi===null?null:{id:Hi,overflow:Ui},retryLane:536870912,hydrationErrors:null},n=ji(e),n.return=t,t.child=n,Yi=t,Xi=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return Pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(To(t),a){if(t.flags&256)t.flags&=-257,t=Fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ec||ma(e,t,n,!1),a=(n&e.childLanes)!==0,Ec||a){if(_o.current===null){if(r=Xu,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,yi(e,s),Nd(r,e,s),Tc;Gd()}t=Fc(e,t,n)}else e=o.treeContext,Xi=lm(s.nextSibling),Yi=t,Zi=!0,Qi=null,J=!1,e!==null&&Ji(t,e),t=Pc(t,r),t.flags|=134221824;return t}return e=Ei(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rc(e,t,n,r,i){return ga(t),n=Go(e,t,n,r,void 0,i),r=Yo(),e!==null&&!Ec?(Xo(e,t,i),nl(e,t,i)):(Zi&&r&&Ki(t),t.flags|=1,Dc(e,t,n,i),t.child)}function zc(e,t,n,r,i,a){return ga(t),t.updateQueue=null,n=qo(t,r,n,i),Ko(e),r=Yo(),e!==null&&!Ec?(Xo(e,t,a),nl(e,t,a)):(Zi&&r&&Ki(t),t.flags|=1,Dc(e,t,n,a),t.child)}function Bc(e,t,n,r,i){if(ga(t),t.stateNode===null){var a=Si,o=n.contextType;typeof o==`object`&&o&&(a=_a(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=fc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ao(t),o=n.contextType,a.context=typeof o==`object`&&o?_a(o):Si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(dc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&fc.enqueueReplaceState(a,a.state,null),mo(t,r,a,i),po(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=hc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Si,typeof u==`object`&&u&&(o=_a(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&mc(t,a,r,o),io=!1;var f=t.memoizedState;a.state=f,mo(t,r,a,i),po(),l=t.memoizedState,s||f!==l||io?(typeof d==`function`&&(dc(t,n,d,r),l=t.memoizedState),(c=io||pc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oo(e,t),o=t.memoizedProps,u=hc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Si,typeof l==`object`&&l&&(c=_a(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&mc(t,a,r,c),io=!1,f=t.memoizedState,a.state=f,mo(t,r,a,i),po();var p=t.memoizedState;o!==d||f!==p||io||e!==null&&e.dependencies!==null&&ha(e.dependencies)?(typeof s==`function`&&(dc(t,n,s,r),p=t.memoizedState),(u=io||pc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ha(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Lc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=no(t,e.child,null,i),t.child=no(t,null,n,i)):Dc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=nl(e,t,i),e}function Vc(e,t,n,r){return ia(),t.flags|=256,Dc(e,t,n,r),t.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:za()}}function Wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Gc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(ko.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(Zi){if(i?wo(t):Do(),(e=Xi)?(e=am(e,J),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vi===null?null:{id:Hi,overflow:Ui},retryLane:536870912,hydrationErrors:null},n=ji(e),n.return=t,t.child=n,Yi=t,Xi=null)):e=null,e===null)throw ea(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Do(),i=t.mode,a=qc({mode:`hidden`,children:a},i),r=ki(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Uc(n),r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(null,r)):(wo(t),Kc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Yc(e,t,a,o,r,c,s,n)}return i?(Do(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ei(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=ki(i,a,n,null),i.flags|=2):i=Ei(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Mc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Uc(n):(a=i.cachePool,a===null?a=za():(s=Sa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(e.child,r)):(wo(t),n=e.child,e=n.sibling,n=Ei(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Kc(e,t){return t=qc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function qc(e,t){return e=wi(22,e,null,t),e.lanes=0,e}function Jc(e,t,n){return no(t,e.child,null,n),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(wo(t),t.flags&=-257,Jc(e,t,c)):t.memoizedState===null?(Do(),o=a.fallback,s=t.mode,a=qc({mode:`visible`,children:a.children},s),o=ki(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,no(t,e.child,null,c),a=t.child,a.memoizedState=Uc(c),a.childLanes=Wc(e,r,c),t.memoizedState=Hc,Mc(null,a)):(Do(),t.child=e.child,t.flags|=128,null);if(wo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,oa({value:a,source:null,stack:null})),Jc(e,t,c)}if(Ec||ma(e,t,c,!1),r=(c&e.childLanes)!==0,Ec||r){if(_o.current!==null)return Jc(e,t,c);if(r=Xu,r!==null&&(a=st(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,yi(e,a),Nd(r,e,a),Tc;return om(o)||Gd(),Jc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Xi=lm(o.nextSibling),Yi=t,Zi=!0,Qi=null,J=!1,e!==null&&Ji(t,e),t=Kc(t,a.children),t.flags|=134221824,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function Zc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Mo(n)===null&&(t=e),e=e.sibling}return t}function Qc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function $c(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function el(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ko.current;if(t.flags&128)return Ao(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ao(t,o),i===`backwards`&&e!==null?($c(e),Dc(e,t,r,n),$c(e)):Dc(e,t,r,n),r=Zi?Ri:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,$c(t)),Qc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qc(t,!0,n,null,a,r);break;case`together`:Qc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qc(t,!1,i,n,a,r)}return t.child}function tl(e,t,n){var r=t.pendingProps;return ua(t,t.type,r.value),Dc(e,t,r.children,n),t.child}function nl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ei(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ei(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ha(e)))}function il(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ua(t,Sa,e.memoizedState.cache),ia();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,To(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return wo(t),t.flags|=128,null;r=ma(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Gc(e,t,n):(wo(t),e=nl(e,t,n),e===null?null:e.sibling)}wo(t);break;case 19:if(t.flags&128)return el(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ma(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return el(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ao(t,ko.current),r)break;return null;case 22:return t.lanes=0,jc(e,t,n,t.pendingProps);case 24:ua(t,Sa,e.memoizedState.cache)}return nl(e,t,n)}function al(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ec=!0;else{if(!rl(e,n)&&!(t.flags&128))return Ec=!1,il(e,t,n);Ec=!!(e.flags&131072)}}else Ec=!1,Zi&&t.flags&1048576&&Gi(t,Ri,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e==`function`)Ti(e)?(r=hc(e,r),t.tag=1,t=Bc(null,t,e,r,n)):(t.tag=0,t=Rc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===I){t.tag=11,t=Oc(null,t,e,r,n);break a}if(a===te){t.tag=14,t=kc(null,t,e,r,n);break a}if(a===F){t.tag=10,t.type=e,t=tl(null,t,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=hc(r,t.pendingProps),Bc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,oo(e,t),mo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ua(t,Sa,r),r!==o.cache&&pa(t,[Sa],n,!0),po(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Vc(e,t,r,n);break a}if(r!==a){a=Pi(Error(i(424)),t),oa(a),t=Vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Xi=lm(e.firstChild),Yi=t,Zi=!0,Qi=null,J=!0,n=ro(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ia(),r===a){t=nl(e,t,n);break a}Dc(e,t,r,n)}t=t.child}return t;case 26:return Lc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Zi||(t.stateNode=fp(t.type,t.pendingProps,ge.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&Zi&&(r=t.stateNode=hm(t.type,t.pendingProps,ge.current),Yi=t,J=!0,a=Xi,Sp(t.type)?(um=a,Xi=lm(r.firstChild)):Xi=a),Dc(e,t,t.pendingProps.children,n),Lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Zi&&((a=r=Xi)&&(r=rm(r,t.type,t.pendingProps,J),r===null?a=!1:(t.stateNode=r,Yi=t,Xi=lm(r.firstChild),J=!1,a=!0)),a||ea(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Go(e,t,Jo,null,null,n),sh._currentValue=a),Lc(e,t),Dc(e,t,r,n),t.child;case 6:return e===null&&Zi&&((e=n=Xi)&&(n=im(n,t.pendingProps,J),n===null?e=!1:(t.stateNode=n,Yi=t,Xi=null,e=!0)),e||ea(t)),null;case 13:return Gc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=no(t,null,r,n):Dc(e,t,r,n),t.child;case 11:return Oc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Lc(e,t),Dc(e,t,r,n),t.child;case 8:return Dc(e,t,t.pendingProps.children,n),t.child;case 12:return Dc(e,t,t.pendingProps.children,n),t.child;case 10:return tl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ga(t),a=_a(a),r=r(a),t.flags|=1,Dc(e,t,r,n),t.child;case 14:return kc(e,t,t.type,t.pendingProps,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 19:return el(e,t,n);case 31:return Ic(e,t,n);case 22:return jc(e,t,n,t.pendingProps);case 24:return ga(t),r=_a(Sa),e===null?(a=La(),a===null&&(a=Xu,o=Ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ao(t),ua(t,Sa,a)):((e.lanes&n)!==0&&(oo(e,t),mo(t,null,null,n),po()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ua(t,Sa,r),r!==a.cache&&pa(t,[Sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ua(t,Sa,r))),Dc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:Zi&&Ki(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Lc(e,t),Dc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ol(e){e.flags|=4}function sl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw qa=Ua,Va}}else e.flags&=-16777217}function cl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Hd())e.flags|=8192;else throw qa=Ua,Va}}function ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,ud|=t)}function ul(e,t){if(!Zi)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function dl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fl(e,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dl(t),null;case 1:return dl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),da(Sa),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ra(t)?ol(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,aa())),dl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ol(t),o===null?(dl(t),sl(t,a,null,r,n)):(dl(t),cl(t,o))):o?o===e.memoizedState?(dl(t),t.flags&=-16777217):(ol(t),dl(t),cl(t,o)):(e=e.memoizedProps,e!==r&&ol(t),dl(t),sl(t,a,e,r,n)),null;case 27:if(be(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}e=he.current,ra(t)?ta(t,e):(e=hm(a,r,n),t.stateNode=e,ol(t))}return dl(t),t.subtreeFlags&=-33554433,null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}if(o=he.current,ra(t))ta(t,o);else{var s=lp(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ol(t)}}return dl(t),t.subtreeFlags&=-33554433,sl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Yi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||ea(t,!0)}else e=lp(e).createTextNode(r),e[pt]=t,t.stateNode=e}return dl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ra(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),e=!1}else n=aa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Oo(t),t):(Oo(t),null);if(t.flags&128)throw Error(i(558))}return dl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),a=!1}else a=aa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Oo(t),t):(Oo(t),null)}return Oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ll(t,t.updateQueue),dl(t),null);case 4:return ve(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,dl(t),null;case 10:return da(t.type),dl(t),null;case 19:if(jo(t),r=t.memoizedState,r===null)return dl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ul(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Mo(e),o!==null){for(t.flags|=128,ul(r,!1),e=o.updateQueue,t.updateQueue=e,ll(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Di(n,e),n=n.sibling;return Ao(t,ko.current&1|2),Zi&&Wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>gd&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ll(t,e),ul(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!Zi)return dl(t),null}else 2*je()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,o=ko.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||Zi?Ao(t,o):(n=o,me(So,t),me(ko,n),Co===null&&(Co=t)),Zi&&Wi(t,r.treeForkCount),e}return dl(t),null;case 22:case 23:return Oo(t),xo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(dl(t),t.subtreeFlags&6&&(t.flags|=8192)):dl(t),n=t.updateQueue,n!==null&&ll(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(Ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),da(Sa),dl(t),null;case 25:return null;case 30:return t.flags|=33554432,dl(t),null}throw Error(i(156,t.tag))}function pl(e,t){switch(qi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(Sa),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(Oo(t),t.alternate===null)throw Error(i(340));ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return jo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ve(),null;case 10:return da(t.type),null;case 22:case 23:return Oo(t),xo(),e!==null&&pe(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(Sa),null;case 25:return null;default:return null}}function ml(e,t){switch(qi(t),t.tag){case 3:da(Sa),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&Oo(t);break;case 13:Oo(t);break;case 19:jo(t);break;case 10:da(t.type);break;case 22:case 23:Oo(t),xo(),e!==null&&pe(Ia);break;case 24:da(Sa)}}function hl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){pf(t,t.return,e)}}function gl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){pf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){pf(t,t.return,e)}}function _l(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{go(t,n)}catch(t){pf(e,e.return,t)}}}function vl(e,t,n){n.props=hc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){pf(e,t,n)}}function yl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=li(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){pf(e,t,n)}}function bl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){pf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){pf(e,t,n)}else n.current=null}}function xl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Sl(e){for(var t=e.return;t!==null&&(Tl(t)&&em(e.stateNode,t.stateNode),!wl(t));)t=t.return}function Cl(e){for(var t=e.return;t!==null&&(Tl(t)&&tm(e.stateNode,t.stateNode),!wl(t));)t=t.return}function wl(e){return e.tag===5||e.tag===3||e.tag===27}function Tl(e){return e&&e.tag===7&&e.stateNode!==null}function El(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){pf(e,e.return,t)}}function Dl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[mt]=t}catch(t){pf(e,e.return,t)}}function Ol(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function kl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un)),xl(e,r),Lt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),xl(e,r),Lt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(jl(e,t,n,r),e=e.sibling;e!==null;)jl(e,t,n,r),e=e.sibling}function Ml(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[pt]=e,t[mt]=n}catch(t){pf(e,e.return,t)}}var Nl=!1,Pl=null;function Fl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Nl=!0)}var Il=null;function Ll(){var e=Il;return Il=null,e}var Rl=0;function zl(e,t,n,r,i){return Rl=0,Bl(e.child,t,n,r,i)}function Bl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Nl=!0,Tp(o,Rl===0?t:t+`_`+Rl,n),Rl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Bl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Vl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Vl(e.child,t)),e=e.sibling}function Hl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=di(t.default,t.share),t!==`none`&&(zl(e,n,t,null,!1)||Vl(e.child,!1))}e=e.sibling}}function Ul(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=li(r,n),a=di(r.default,n.paired?r.share:r.enter);a===`none`?Hl(e):zl(e,i,a,null,!1)?(Hl(e),n.paired||t||Md(e,r.onEnter)):Vl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ul(e,t),e=e.sibling;else Hl(e)}function Wl(e){if(Pl!==null&&Pl.size!==0){var t=Pl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=di(n.default,n.share);if(a!==`none`&&(zl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Vl(e.child,!1)),t.delete(r),t.size===0)break}}}Wl(e)}e=e.sibling}}}function Gl(e){if(e.tag===30){var t=e.memoizedProps,n=li(t,e.stateNode),r=Pl===null?void 0:Pl.get(n),i=di(t.default,r===void 0?t.exit:t.share);i!==`none`&&(zl(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Pl.delete(n),Md(e,t.onShare)):Vl(e.child,!1)),Pl!==null&&Wl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e),e=e.sibling;else Pl!==null&&Wl(e)}function Kl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=li(t,e.stateNode);t=di(t.default,t.update),e.flags&=-5,t!==`none`&&zl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Kl(e);e=e.sibling}}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Vl(e.child,!1))}ql(e)}e=e.sibling}}function Jl(e){if(e.tag===30)e.stateNode.paired=null,Vl(e.child,!1),ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else ql(e)}function Yl(e){for(e=e.child;e!==null;)e.tag===30?Vl(e.child,!1):e.subtreeFlags&33554432&&Yl(e),e=e.sibling}function Xl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Rl<a.length){var l=a[Rl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Rl===0?n:n+`_`+Rl,i),s&&e.flags&4||(Il===null&&(Il=[]),Il.push(c,Rl===0?r:r+`_`+Rl,t.memoizedProps)),Rl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Xl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Zl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=li(n,r),a=di(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Rl=0,i=Xl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&Zl(e,t);e=e.sibling}}var Ql=!1,$l=!1,eu=!1,tu=!1,nu=typeof WeakSet==`function`?WeakSet:Set,ru=null,iu=!1,au=!1,ou=!1,su=!1;function cu(e,t,n){if(e=e.containerInfo,sp=gh,e=zr(e),Br(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ru=t,t=n?9270:1024;ru!==null;){if(e=ru,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Gl(r[a]);if(e.alternate===null&&e.flags&2)n&&Fl(e),lu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Gl(r),lu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Fl(e),lu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ru=r):(n&&Kl(e),lu(n))}}Pl=null}function lu(e){for(;ru!==null;){var t=ru,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=hc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){pf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=li(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=di(a.default,a.update),a!==`none`&&zl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ru=r;break}ru=t.return}}function uu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Au(e,n),r&4&&hl(5,n);break;case 1:if(Au(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){pf(n,n.return,e)}else{var i=hc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){pf(n,n.return,e)}}}r&64&&_l(n),r&512&&yl(n,n.return);break;case 3:if(Au(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{go(e,t)}catch(e){pf(n,n.return,e)}}break;case 27:t===null&&r&4&&Ml(n);case 26:case 5:Au(e,n),t===null&&r&4&&El(n),r&512&&yl(n,n.return);break;case 12:Au(e,n);break;case 31:Au(e,n),r&4&&yu(e,n);break;case 13:Au(e,n),r&4&&bu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||Ql,!r){var a=t!==null&&t.memoizedState!==null||$l;t=Ql,i=$l,Ql=r,($l=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Mu(e,n,r)):Au(e,n),Ql=t,$l=i}break;case 30:Au(e,n),r&512&&yl(n,n.return);break;case 7:r&512&&yl(n,n.return);default:Au(e,n)}}function du(e,t){for(e=e.child;e!==null;)fu(e,t),e=e.sibling}function fu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){pf(e,e.return,t)}pu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Lt=!0}catch(t){pf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){pf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&du(e,t);break;default:du(e,t)}}function pu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:fu(n,r);break a;case 22:n.memoizedState===null&&pu(n,r);break a;default:pu(n,r)}}e=e.sibling}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hu=null,gu=!1;function _u(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:$l||bl(n,t),_u(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!$l&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$l||bl(n,t),Cl(n);var r=hu,i=gu;Sp(n.type)&&(hu=n.stateNode,gu=!1),_u(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),hu=r,gu=i;break;case 5:$l||bl(n,t),Cl(n);case 6:if(n.tag===6&&Cl(n),r=hu,i=gu,hu=null,_u(e,t,n),hu=r,gu=i,hu!==null){if(gu)try{(hu.nodeType===9?hu.body:hu.nodeName===`HTML`?hu.ownerDocument.body:hu).removeChild(n.stateNode),Lt=!0}catch(e){pf(n,t,e)}else try{hu.removeChild(n.stateNode),Lt=!0}catch(e){pf(n,t,e)}}break;case 18:hu!==null&&(gu?(e=hu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(hu,n.stateNode));break;case 4:r=hu,i=gu,hu=n.stateNode.containerInfo,gu=!0,_u(e,t,n),hu=r,gu=i;break;case 0:case 11:case 14:case 15:gl(2,n,t),$l||gl(4,n,t),_u(e,t,n);break;case 1:$l||(bl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&vl(n,t,r)),_u(e,t,n);break;case 21:_u(e,t,n);break;case 22:$l=(r=$l)||n.memoizedState!==null,_u(e,t,n),$l=r;break;case 30:bl(n,t),_u(e,t,n);break;case 7:$l||bl(n,t),_u(e,t,n);break;default:_u(e,t,n)}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){pf(t,t.return,e)}}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){pf(t,t.return,e)}}function xu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nu),t;default:throw Error(i(435,e.tag))}}function Su(e,t){var n=xu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Cu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){hu=l.stateNode,gu=!1;break a}break;case 5:hu=l.stateNode,gu=!1;break a;case 3:case 4:hu=l.stateNode.containerInfo,gu=!0;break a}l=l.return}if(hu===null)throw Error(i(160));vu(s,c,o),hu=null,gu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tu(t,e,n),t=t.sibling}var wu=null;function Tu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Cu(t,e,n),Eu(e),a&4&&(gl(3,e,e.return),hl(3,e),gl(5,e,e.return));break;case 1:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&64&&Ql&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=wu,Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Ql)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[bt]||r[pt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[pt]=e,Dt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[pt]=e,Dt(r),t=r}e.stateNode=t}}else Ql||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Dl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||$l||t.parentNode.removeChild(t)):a.count--,n===null?Ql||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),r!==null&&a&4&&Dl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=eu,eu=!1,Cu(t,e,n),eu=o,Eu(e),a&512&&($l||r===null||bl(r,r.return)),e.flags&32){t=e.stateNode;try{tn(t,``),Lt=!0}catch(t){pf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Dl(e,t,r===null?t:r.memoizedProps)),a&1024&&(tu=!0);break;case 6:if(Cu(t,e,n),Eu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Lt=!0}catch(t){pf(e,e.return,t)}}break;case 3:if(Lt=!1,Wm=null,o=wu,wu=bm(t.containerInfo),Cu(t,e,n),wu=o,Eu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){pf(e,e.return,t)}tu&&(tu=!1,Du(e)),Lt=!1;break;case 4:a=eu,eu=Ql,r=Rt(),o=wu,wu=bm(e.stateNode.containerInfo),Cu(t,e,n),Eu(e),wu=o,Lt&&au&&(ou=!0),Lt=r,eu=a;break;case 12:Cu(t,e,n),Eu(e);break;case 31:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 13:Cu(t,e,n),Eu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=je()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Ql,l=$l,u=eu;Ql=c||o,eu=u||o,$l=l||s,Cu(t,e,n),$l=l,eu=u,Ql=c,Eu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Ql||$l||(t=s||$l,n=Ql,r=$l,Ql=o||Ql,$l=t,ju(e,2),Ql=n,$l=r),!o&&eu||du(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Su(e,n))));break;case 19:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 30:a&512&&($l||r===null||bl(r,r.return)),a=Rt(),o=au,s=(n&335544064)===n,c=e.memoizedProps,au=s&&di(c.default,c.update)!==`none`,Cu(t,e,n),Eu(e),s&&r!==null&&Lt&&(e.flags|=4),au=o,Lt=a;break;case 21:break;case 7:a&512&&($l||r===null||bl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Cu(t,e,n),Eu(e)}}function Eu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ol(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Tl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(wl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;jl(e,kl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(tn(l,``),n.flags&=-33),jl(e,kl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Al(e,kl(e),u,s);break;default:throw Error(i(161))}}catch(t){pf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Du(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Du(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Ou(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ku(t,e),t=t.sibling;else Zl(t,!1)}function ku(e,t){var n=e.alternate;if(n===null)Ul(e,!1);else switch(e.tag){case 3:if(su=iu=!1,Ll(),Ou(t,e),!iu&&!ou){if(e=Il,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),su=!0}Il=null;break;case 5:Ou(t,e);break;case 4:r=iu,iu=!1,Ou(t,e),iu&&(ou=!0),iu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Ou(t,e):Ul(e,!1));break;case 30:r=iu,i=Ll(),iu=!1,Ou(t,e),iu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=li(a,o),o=li(n.memoizedProps,o);var s=di(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Rl=0,t=Xl(e,n,t,o,s,a,!0),Rl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),Il=i):i!==null&&(i.push.apply(i,Il),Il=i),iu=e.flags&32?!0:r;break;default:Ou(t,e)}}function Au(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uu(e,t.alternate,t),t=t.sibling}function ju(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:gl(4,n,n.return),ju(n,r);break;case 1:bl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&vl(n,n.return,i),ju(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:bl(n,n.return),n.tag!==5&&n.tag!==27||Cl(n),ju(n,r);break;case 6:Cl(n);break;case 26:bl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||$l||i.parentNode.removeChild(i),ju(n,r);break;case 22:n.memoizedState===null&&ju(n,r);break;case 30:bl(n,n.return),ju(n,r);break;case 7:bl(n,n.return);default:ju(n,r)}e=e.sibling}}function Mu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Mu(i,a,n),hl(4,a);break;case 1:if(Mu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){pf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ho(l[i],c)}catch(e){pf(r,r.return,e)}}s&&o&64&&_l(a),yl(a,a.return);break;case 27:n&2&&Ml(a);case 5:a.tag!==5&&a.tag!==27||Sl(a),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 6:Sl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Ql||Km(bm(c.ownerDocument),a.type,c),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 12:Mu(i,a,n);break;case 31:Mu(i,a,n),s&&o&4&&yu(i,a);break;case 13:Mu(i,a,n),s&&o&4&&bu(i,a);break;case 22:a.memoizedState===null&&Mu(i,a,n),yl(a,a.return);break;case 30:Mu(i,a,n),yl(a,a.return);break;case 7:yl(a,a.return);default:Mu(i,a,n)}t=t.sibling}}function Nu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wa(n))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e))}function Fu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Iu(e,t,n,r),t=t.sibling;else i&&Yl(t)}function Iu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Jl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Fu(e,t,n,r),a&2048&&hl(9,t);break;case 1:Fu(e,t,n,r);break;case 3:Fu(e,t,n,r),i&&su&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&wa(a)));break;case 12:if(a&2048){Fu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){pf(t,t.return,e)}}else Fu(e,t,n,r);break;case 31:Fu(e,t,n,r);break;case 13:Fu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Jl(t),o._visibility&2?Fu(e,t,n,r):(o._visibility|=2,Lu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Jl(s),o._visibility&2?Fu(e,t,n,r):Ru(e,t)),a&2048&&Nu(s,t);break;case 24:Fu(e,t,n,r),a&2048&&Pu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Vl(a.child,!0),Vl(t.child,!0))),Fu(e,t,n,r);break;default:Fu(e,t,n,r)}}function Lu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Lu(a,o,s,c,i),hl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Lu(a,o,s,c,i)):u._visibility&2?Lu(a,o,s,c,i):Ru(a,o),i&&l&2048&&Nu(o.alternate,o);break;case 24:Lu(a,o,s,c,i),i&&l&2048&&Pu(o.alternate,o);break;default:Lu(a,o,s,c,i)}t=t.sibling}}function Ru(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ru(n,r),i&2048&&Nu(r.alternate,r);break;case 24:Ru(n,r),i&2048&&Pu(r.alternate,r);break;default:Ru(n,r)}t=t.sibling}}var zu=8192;function Bu(e,t,n){if(e.subtreeFlags&zu)for(e=e.child;e!==null;)Vu(e,t,n),e=e.sibling}function Vu(e,t,n){switch(e.tag){case 26:Bu(e,t,n),e.flags&zu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,wu,e.memoizedState,e.memoizedProps));break;case 5:Bu(e,t,n),e.flags&zu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=wu;wu=bm(e.stateNode.containerInfo),Bu(e,t,n),wu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zu,zu=16777216,Bu(e,t,n),zu=r):Bu(e,t,n));break;case 30:if((e.flags&zu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Pl===null&&(Pl=new Map),Pl.set(r,i)}Bu(e,t,n);break;default:Bu(e,t,n)}}function Hu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wu(e),e=e.sibling}function Wu(e){switch(e.tag){case 0:case 11:case 15:Uu(e),e.flags&2048&&gl(9,e,e.return);break;case 3:Uu(e);break;case 12:Uu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gu(e)):Uu(e);break;default:Uu(e)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gl(8,t,t.return),Gu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gu(t));break;default:Gu(t)}e=e.sibling}}function Ku(e,t){for(;ru!==null;){var n=ru;switch(n.tag){case 0:case 11:case 15:gl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ru=r;else a:for(n=e;ru!==null;){r=ru;var i=r.sibling,a=r.return;if(mu(r),r===n){ru=null;break a}if(i!==null){i.return=a,ru=i;break a}ru=a}}}var qu={getCacheForType:function(e){var t=_a(Sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _a(Sa).controller.signal}},Ju=typeof WeakMap==`function`?WeakMap:Map,Yu=0,Xu=null,Zu=null,Qu=0,$u=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,Z=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return Yu&2&&Qu!==0?Qu&-Qu:H.T===null?ut():Pf()}function jd(){if(ld===0){if(!(Qu&536870912)||Zi){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),ld=e}else ld=536870912}return e=So.current,e!==null&&(e.flags|=32),ld}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(li(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===Xu&&($u===2||$u===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,Qu,ld,!1)),rt(e,n),(!(Yu&2)||e!==Xu)&&(e===Xu&&(!(Yu&2)&&(sd|=n),ad===4&&Ld(e,Qu,ld,!1)),Ef(e))}function Pd(e,t,n){if(Yu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Jd(e,t):Kd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n)){a=Kd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Kd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-je(),10<a)){if(Ld(r,t,ld,!td),Ze(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=gp(Fd.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Fd(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}while(1);Ef(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Pl=null,Vu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-je():(a&4194048)===a?hd-je():0,m=eh(d,m),m!==null)){xd=a,e.cancelPendingCommit=m(tf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l);return}tf(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=$e(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function Rd(){return Yu&6?!0:(Df(0,!1),!1)}function zd(){if(Zu!==null){if($u===0)var e=Zu.return;else e=Zu,la=ca=null,Zo(e),Xa=null,Za=0,e=Zu;for(;e!==null;)ml(e.alternate,e),e=e.return;Zu=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),Xu=e,Zu=n=Ei(e.current,null),Qu=t,$u=0,ed=null,td=!1,nd=Qe(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=$e(e,t),gi(),n}function Vd(e,t){X=null,H.H=sc,t===Ba||t===Ha?(t=Ja(),$u=3):t===Va?(t=Ja(),$u=4):$u=t===Tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,Zu===null&&(ad=1,yc(e,Pi(t,e.current)))}function Hd(){var e=So.current;return e===null?!0:(Qu&4194048)===Qu?Co===null:(Qu&62914560)===Qu||Qu&536870912?e===Co:!1}function Ud(){var e=H.H;return H.H=sc,e===null?sc:e}function Wd(){var e=H.A;return H.A=qu,e}function Gd(){ad=4,td||(Qu&4194048)!==Qu&&So.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||Xu===null||Ld(Xu,Qu,ld,!1)}function Kd(e,t,n){var r=Yu;Yu|=2;var i=Ud(),a=Wd();(Xu!==e||Qu!==t)&&(_d=null,Bd(e,t)),t=!1;var o=ad;a:do try{if($u!==0&&Zu!==null){var s=Zu,c=ed;switch($u){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:So.current===null&&(t=!0);var l=$u;if($u=0,ed=null,Qd(e,s,c,l),n&&nd){o=0;break a}break;default:l=$u,$u=0,ed=null,Qd(e,s,c,l)}}qd(),o=ad;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,la=ca=null,Yu=r,H.H=i,H.A=a,Zu===null&&(Xu=null,Qu=0,gi()),o}function qd(){for(;Zu!==null;)Xd(Zu)}function Jd(e,t){var n=Yu;Yu|=2;var r=Ud(),a=Wd();Xu!==e||Qu!==t?(_d=null,gd=je()+500,Bd(e,t)):nd=Qe(e,t);a:do try{if($u!==0&&Zu!==null){t=Zu;var o=ed;b:switch($u){case 1:$u=0,ed=null,Qd(e,t,o,1);break;case 2:case 9:if(Wa(o)){$u=0,ed=null,Zd(t);break}t=function(){$u!==2&&$u!==9||Xu!==e||($u=7),Ef(e)},o.then(t,t);break a;case 3:$u=7;break a;case 4:$u=5;break a;case 7:Wa(o)?($u=0,ed=null,Zd(t)):($u=0,ed=null,Qd(e,t,o,7));break;case 5:var s=null;switch(Zu.tag){case 26:s=Zu.memoizedState;case 5:case 27:var c=Zu;if(s?Ym(s):c.stateNode.complete){$u=0,ed=null;var l=c.sibling;if(l!==null)Zu=l;else{var u=c.return;u===null?Zu=null:(Zu=u,$d(u))}break b}}$u=0,ed=null,Qd(e,t,o,5);break;case 6:$u=0,ed=null,Qd(e,t,o,6);break;case 8:zd(),ad=6;break a;default:throw Error(i(462))}}Yd();break}catch(t){Vd(e,t)}while(1);return la=ca=null,H.H=r,H.A=a,Yu=n,Zu===null?(Xu=null,Qu=0,gi(),ad):0}function Yd(){for(;Zu!==null&&!Ae();)Xd(Zu)}function Xd(e){var t=al(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?$d(e):Zu=t}function Zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zc(n,t,t.pendingProps,t.type,void 0,Qu);break;case 11:t=zc(n,t,t.pendingProps,t.type.render,t.ref,Qu);break;case 5:Zo(t);var r=t;r===Yi&&(Zi?(na(r),r.tag===5&&r.stateNode!=null&&(Xi=r.stateNode)):(na(r),Zi=!0));default:ml(n,t),t=Zu=Di(t,id),t=al(n,t,id)}e.memoizedProps=e.pendingProps,t===null?$d(e):Zu=t}function Qd(e,t,n,r){la=ca=null,Zo(t),Xa=null,Za=0;var i=t.return;try{if(wc(e,i,t,n,Qu)){ad=1,yc(e,Pi(n,e.current)),Zu=null;return}}catch(t){if(i!==null)throw Zu=i,t;ad=1,yc(e,Pi(n,e.current)),Zu=null;return}t.flags&32768?(Zi||r===1?e=!0:nd||Qu&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=So.current,r!==null&&r.tag===13&&(r.flags|=16384))),ef(t,e)):$d(t)}function $d(e){var t=e;do{if(t.flags&32768){ef(t,td);return}e=t.return;var n=fl(t.alternate,t,id);if(n!==null){Zu=n;return}if(t=t.sibling,t!==null){Zu=t;return}Zu=t=e}while(t!==null);ad===0&&(ad=5)}function ef(e,t){do{var n=pl(e.alternate,e);if(n!==null){n.flags&=32767,Zu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zu=e;return}Zu=e=n}while(e!==null);ad=6,Zu=null}function tf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do uf();while(vd!==0);if(Yu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Xu&&(Zu=Xu=null,Qu=0),bd=t,yd=e,xd=n,Cd=a,wd=r,nf(e,t,n,s,c,l,f)}}function nf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=hi,it(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Da(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Fe,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),Nl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=H.T,H.T=null,i=U.p,U.p=2,a=Yu,Yu|=4;try{cu(e,t,n)}finally{Yu=a,U.p=i,H.T=r}}vd=1,Nl?Td=Mp(o,e.containerInfo,Dd,of,sf,af,cf,df,rf,null,null):(of(),sf(),cf())}function rf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function af(){vd===3&&(vd=0,ku(bd,yd),vd=4)}function of(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=H.T,H.T=null;var i=U.p;U.p=2;var a=Yu;Yu|=4;try{au=ou=!1,Tu(t,e,n),n=cp;var o=zr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Rr(s.ownerDocument.documentElement,s)){if(c!==null&&Br(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Lr(s,h),v=Lr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Yu=a,U.p=i,H.T=r}}e.current=t,vd=2}}function sf(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=H.T,H.T=null;var r=U.p;U.p=2;var i=Yu;Yu|=4;try{uu(e,t.alternate,t)}finally{Yu=i,U.p=r,H.T=n}}vd=3}}function cf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,q();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,lf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Z=null),lt(r),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=H.T,a=U.p,U.p=2,H.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{H.T=n,U.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&uf(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Df(0,!1)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wa(t)))}function uf(){return Td!==null&&(Td.skipTransition(),Td=null),of(),sf(),cf(),df()}function df(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=lt(xd),r=H.T,a=U.p;try{U.p=32>n?32:n,H.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,Yu&6)throw Error(i(331));var c=Yu;if(Yu|=4,Wu(o.current),Iu(o,o.current,s,n),Yu=c,Df(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{U.p=a,H.T=r,lf(e,t)}}function ff(e,t,n){t=Pi(n,t),t=xc(e.stateNode,t,2),e=co(e,t,2),e!==null&&(rt(e,2),Ef(e))}function pf(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(Z===null||!Z.has(r))){e=Pi(n,e),n=Sc(2),r=co(t,n,2),r!==null&&(Cc(n,r,t,e),rt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ju;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Qu&n)===n&&(ad===4||ad===3&&(Qu&62914560)===Qu&&300>je()-md?Yu&2?cd|=n:Bd(e,0):cd|=n,ud===Qu&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=tt()),e=yi(e,t),e!==null&&(rt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Oe(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Qu,a=Ze(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=je(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}vd!==0&&vd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Qu,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&($u===2||$u===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=jf.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var r=Qu;return r=Ze(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),Af(e,je()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(uf())return null;Pd(e,t,!0)}function Nf(){bp(function(){Yu&6?Oe(Ne,Of):kf()})}function Pf(){if(Tf===0){var e=Aa;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);qs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),qs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<oi.length;Lf++){var Rf=oi[Lf];si(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}si(Qr,`onAnimationEnd`),si($r,`onAnimationIteration`),si(ei,`onAnimationStart`),si(`dblclick`,`onDoubleClick`),si(`focusin`,`onFocus`),si(`focusout`,`onBlur`),si(ti,`onTransitionRun`),si(ni,`onTransitionStart`),si(ri,`onTransitionCancel`),si(ii,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}}}}function Hf(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Uf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Q=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Q]){e[Q]=!0,kt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Uf(t,!1,e),Uf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Q]||(t[Q]=!0,Uf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ai.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Qn;break;case Qr:case $r:case ei:l=Vn;break;case ii:l=$n;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=er;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`submit`:l=Zn;break;case`toggle`:case`beforetoggle`:l=tr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[ht]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ct(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Tt(c),h=l==null?u:Tt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=xr;else if(hr(c)){if(Sr)_=jr;else{_=kr;var v=Or}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(_=xr):_=Ar;if(_&&=_(e,r)){gr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Tt(r):window,e){case`focusin`:(hr(v)||v.contentEditable===`true`)&&(Hr=v,Ur=r,Wr=null);break;case`focusout`:Wr=Ur=Hr=null;break;case`mousedown`:Gr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Gr=!1,Kr(s,n,i);break;case`selectionchange`:if(Vr)break;case`keydown`:case`keyup`:Kr(s,n,i)}var y;if(rr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else dr?lr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(or&&n.locale!==`ko`&&(dr||b!==`onCompositionStart`?b===`onCompositionEnd`&&dr&&(y=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,dr=!0)),v=Jf(r,b),0<v.length&&(b=new Un(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=ur(n),y!==null&&(b.data=y)))),(y=ar?fr(e,n):pr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=vn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,$=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace($,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&tn(e,``+r);else return;break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:an(e,r,o);return;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);return;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Hf(`beforetoggle`,e),Hf(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=sn.get(n)||n,zt(e,n,r);else return}Lt=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)tn(e,``+r);else return;break;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=un);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[mt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Lt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}return}Lt=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Hf(`error`,e),Hf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:Hf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Hf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Hf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:Hf(`beforetoggle`,e),Hf(`toggle`,e),Hf(`cancel`,e),Hf(`close`,e);break;case`iframe`:case`object`:Hf(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Hf(zf[r],e);break;case`image`:Hf(`error`,e),Hf(`load`,e);break;case`details`:Hf(`toggle`,e);break;case`embed`:case`source`:case`link`:Hf(`error`,e),Hf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Lt=!0),o=m;break;case`name`:m!==f&&(Lt=!0),a=m;break;case`checked`:m!==f&&(Lt=!0),u=m;break;case`defaultChecked`:m!==f&&(Lt=!0),d=m;break;case`value`:m!==f&&(Lt=!0),s=m;break;case`defaultValue`:m!==f&&(Lt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Lt=!0),p=o;break;case`defaultValue`:o!==l&&(Lt=!0),c=o;break;case`multiple`:o!==l&&(Lt=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Lt=!0),p=a;break;case`defaultValue`:a!==o&&(Lt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Lt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[pt]=r,n[mt]=t,np(n,e,t),Dt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Ct(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===un&&(e.onclick=null),St(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=U.d;U.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Rd();return e||t}function Cm(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?Ys(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[xt]=!0,o.onload=o.onerror=function(){Ot(o)}),Dt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Et(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Dt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Et(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Dt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Et(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Dt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=ge.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Et(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Et(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+Jt(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[xt]){r.loading=1;return}}else t=e.createElement(`link`),t[xt]=!0,t.onload=t.onerror=Ot.bind(null,t),np(t,`link`,n),Dt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+Jt(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Dt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:F,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=wi(3,null,null,t),e.current=a,a.stateNode=e,t=Ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ao(a),e}function uh(e){return e?(e=Si,e):Si}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=so(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=co(e,r,t),n!==null&&(Nd(n,e,t),lo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=yi(e,67108864);t!==null&&Nd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=Ad();t=ct(t);var n=yi(e,t);n!==null&&Nd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=H.T;H.T=null;var a=U.p;try{U.p=2,yh(e,t,n,r)}finally{U.p=a,H.T=i}}function vh(e,t,n,r){var i=H.T;H.T=null;var a=U.p;try{U.p=8,yh(e,t,n,r)}finally{U.p=a,H.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(Yu&6)&&(gd=je()+500,Df(0,!1))}}break;case 31:case 13:s=yi(a,2),s!==null&&Nd(s,a,2),Rd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=fn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=wt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,qs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,Ad(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Rd(),t[ht]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:H,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Be=Jh.inject(qh),Ve=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=gc,s=_c,c=vc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[ht]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=c(m(),1),y=g();function b(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function x(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var S={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},C={duration:.5,overwrite:!1,delay:0},w,T,E,D=1e8,O=1/D,k=Math.PI*2,A=k/4,j=0,M=Math.sqrt,N=Math.cos,P=Math.sin,F=function(e){return typeof e==`string`},I=function(e){return typeof e==`function`},ee=function(e){return typeof e==`number`},L=function(e){return e===void 0},te=function(e){return typeof e==`object`},R=function(e){return e!==!1},ne=function(){return typeof window<`u`},re=function(e){return I(e)||F(e)},z=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},ie=Array.isArray,ae=/random\([^)]+\)/g,oe=/,\s*/g,B=/(?:-?\.?\d|\.)+/gi,se=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ce=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,V=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,H=/[+-]=-?[.\d]+/,U=/[^,'"\[\]\s]+/gi,le=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,de,fe,pe,me={},he={},W,ge=function(e){return(he=Ge(e,me))&&dr},G=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},_e=function(e,t){return!t&&console.warn(e)},ve=function(e,t){return e&&(me[e]=t)&&he&&(he[e]=t)||me},ye=function(){return 0},be={suppressEvents:!0,isStart:!0,kill:!1},xe={suppressEvents:!0,kill:!1},Se={suppressEvents:!0},Ce={},we=[],Te={},Ee,K={},De={},Oe=30,ke=[],Ae=``,q=function(e){var t=e[0],n,r;if(te(t)||I(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ke.length;r--&&!ke[r].targetTest(t););n=ke[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new xn(e[r],n)))||e.splice(r,1);return e},je=function(e){return e._gsap||q(Ot(e))[0]._gsap},Me=function(e,t,n){return(n=e[t])&&I(n)?e[t]():L(n)&&e.getAttribute&&e.getAttribute(t)||n},Ne=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Pe=function(e){return Math.round(e*1e5)/1e5||0},Fe=function(e){return Math.round(e*1e7)/1e7||0},Ie=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Le=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Re=function(){var e=we.length,t=we.slice(0),n,r;for(Te={},we.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ze=function(e){return!!(e._initted||e._startAt||e.add)},Be=function(e,t,n,r){we.length&&!T&&Re(),e.render(t,n,r||!!(T&&t<0&&ze(e))),we.length&&!T&&Re()},Ve=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(U).length<2?t:F(e)?e.trim():e},He=function(e){return e},Ue=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},We=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Ge=function(e,t){for(var n in t)e[n]=t[n];return e},Ke=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=te(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},qe=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Je=function(e){var t=e.parent||ue,n=e.keyframes?We(ie(e.keyframes)):Ue;if(R(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ye=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Xe=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ze=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Qe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$e=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},et=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tt=function(e,t,n,r){return e._startAt&&(T?e._startAt.revert(xe):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},nt=function e(t){return!t||t._ts&&e(t.parent)},rt=function(e){return e._repeat?it(e._tTime,e=e.duration()+e._rDelay)*e:0},it=function(e,t){var n=Math.floor(e=Fe(e/t));return e&&n===e?n-1:n},at=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ot=function(e){return e._end=Fe(e._start+(e._tDur/Math.abs(e._ts||e._rts||O)||0))},st=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Fe(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ot(e),n._dirty||$e(n,e)),e},ct=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=at(e.rawTime(),t),(!t._dur||St(0,t.totalDuration(),n)-t._tTime>O)&&t.render(n,!0)),$e(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-O}},lt=function(e,t,n,r){return t.parent&&Qe(t),t._start=Fe((ee(n)?n:n||e!==ue?yt(e,n,t):e._time)+t._delay),t._end=Fe(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xe(e,t,`_first`,`_last`,e._sort?`_start`:0),pt(t)||(e._recent=t),r||ct(e,t),e._ts<0&&st(e,e._tTime),e},ut=function(e,t){return(me.ScrollTrigger||G(`scrollTrigger`,t))&&me.ScrollTrigger.create(t,e)},dt=function(e,t,n,r,i){if(An(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!T&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ee!==sn.frame)return we.push(e),e._lazy=[i,r],1},ft=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},pt=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},mt=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&ft(e)&&(e._initted||!pt(e))||(e._ts<0||e._dp._ts<0)&&!pt(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=St(0,e._tDur,t),l=it(s,o),e._yoyo&&l&1&&(a=1-a),l!==it(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||T||r||e._zTime===O||!t&&e._zTime){if(!e._initted&&dt(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?O:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&tt(e,t,n,!0),e._onUpdate&&!n&&Gt(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Gt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Qe(e,1),!n&&!T&&(Gt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},ht=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},gt=function(e,t,n,r){var i=e._repeat,a=Fe(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Fe(a*(i+1)+e._rDelay*i):a,o>0&&!r&&st(e,e._tTime=e._tDur*o),e.parent&&ot(e),n||$e(e.parent,e),e},_t=function(e){return e instanceof Cn?$e(e):gt(e,e._dur)},vt={_start:0,endTime:ye,totalDuration:ye},yt=function e(t,n,r){var i=t.labels,a=t._recent||vt,o=t.duration()>=D?a.endTime(!1):t._dur,s,c,l;return F(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(ie(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},bt=function(e,t,n){var r=ee(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=R(s.vars.inherit)&&s.parent;a.immediateRender=R(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Ln(t[0],a,t[i+1])},xt=function(e,t){return e||e===0?t(e):t},St=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!F(e)||!(t=le.exec(e))?``:t[1]},wt=function(e,t,n){return xt(n,function(n){return St(e,t,n)})},Tt=[].slice,Et=function(e,t){return e&&te(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&te(e[0]))&&!e.nodeType&&e!==de},Dt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return F(e)&&!t||Et(e,1)?(r=n).push.apply(r,Ot(e)):n.push(e)})||n},Ot=function(e,t,n){return E&&!t&&E.selector?E.selector(e):F(e)&&!n&&(fe||!cn())?Tt.call((t||pe).querySelectorAll(e),0):ie(e)?Dt(e,n):Et(e)?Tt.call(e,0):e?[e]:[]},kt=function(e){return e=Ot(e)[0]||_e(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Ot(t,n.querySelectorAll?n:n===e?_e(`Invalid scope`)||pe.createElement(`div`):e)}},At=function(e){return e.sort(function(){return .5-Math.random()})},jt=function(e){if(I(e))return e;var t=te(e)?e:{each:e},n=gn(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return F(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,D])[1],!S){for(b=-D;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===D?0:s?f*u/S-.5:r/S|0,b=0,x=D,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):M(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&At(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Ct(t.amount||t.each)||0,n=n&&f<0?hn(n):n}return f=(p[e]-p.min)/p.max||0,Fe(p.b+(n?n(f):f)*p.v)+p.u}},Mt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=Fe(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ee(n)?0:Ct(n))}},Nt=function(e,t){var n=ie(e),r,i;return!n&&te(e)&&(r=n=e.radius||D,e.values?(e=Ot(e.values),(i=!ee(e[0]))&&(r*=r)):e=Mt(e.increment)),xt(t,n?I(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=D,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||ee(t)?s:s+Ct(t)}:Mt(e))},Pt=function(e,t,n,r){return xt(ie(e)?!t:n===!0?!!(n=0):!r,function(){return ie(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Ft=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},It=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},Lt=function(e,t,n){return Ht(e,t,0,1,n)},Rt=function(e,t,n){return xt(n,function(n){return e[~~t(n)]})},zt=function e(t,n,r){var i=n-t;return ie(t)?Rt(t,e(0,t.length),n):xt(r,function(e){return(i+(e-t)%i)%i+t})},Bt=function e(t,n,r){var i=n-t,a=i*2;return ie(t)?Rt(t,e(0,t.length-1),n):xt(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Vt=function(e){return e.replace(ae,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(oe);return Pt(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Ht=function(e,t,n,r,i){var a=t-e,o=r-n;return xt(i,function(t){return n+((t-e)/a*o||0)})},Ut=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=F(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(ie(t)&&!ie(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Ge(ie(t)?[]:{},t));if(!u){for(c in n)Tn.call(s,t,c,`get`,n[c]);a=function(e){return Kn(e,s)||(o?t.p:t)}}}return xt(r,a)},Wt=function(e,t,n){var r=e.labels,i=D,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Gt=function(e,t,n){var r=e.vars,i=r[t],a=E,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&we.length&&Re(),o&&(E=o),l=s?i.apply(c,s):i.call(c),E=a,l},Kt=function(e){return Qe(e),e.scrollTrigger&&e.scrollTrigger.kill(!!T),e.progress()<1&&Gt(e,`onInterrupt`),e},qt,Jt=[],Yt=function(e){if(e){if(e=!e.name&&e.default||e,ne()||e.headless){var t=e.name,n=I(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:ye,render:Kn,add:Tn,kill:Jn,modifier:qn,rawVars:0},a={targetTest:0,get:0,getSetter:Hn,aliases:{},register:0};if(cn(),e!==r){if(K[t])return;Ue(r,Ue(qe(e,i),a)),Ge(r.prototype,Ge(i,qe(e,a))),K[r.prop=t]=r,e.targetTest&&(ke.push(r),Ce[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}ve(t,r),e.register&&e.register(dr,r,Zn)}else Jt.push(e)}},Xt=255,Zt={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},Qt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Xt+.5|0},$t=function(e,t,n){var r=e?ee(e)?[e>>16,e>>8&Xt,e&Xt]:0:Zt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Zt[e])r=Zt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Xt,r&Xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Xt,e&Xt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(B),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Qt(s+1/3,i,a),r[1]=Qt(s,i,a),r[2]=Qt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(se),n&&r.length<4&&(r[3]=1),r}else r=e.match(B)||Zt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Xt,a=r[1]/Xt,o=r[2]/Xt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},en=function(e){var t=[],n=[],r=-1;return e.split(nn).forEach(function(e){var i=e.match(ce)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},tn=function(e,t,n){var r=``,i=(e+r).match(nn),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=$t(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=en(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(nn,`1`).split(ce),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(nn),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},nn=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Zt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),rn=/hsl[a]?\(/,an=function(e){var t=e.join(` `),n;if(nn.lastIndex=0,nn.test(t))return n=rn.test(t),e[1]=tn(e[1],n),e[0]=tn(e[0],n,en(e[1])),!0},on,sn=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){W&&(!fe&&ne()&&(de=fe=window,pe=de.document||{},me.gsap=dr,(de.gsapVersions||(de.gsapVersions=[])).push(dr.version),ge(he||de.GreenSockGlobals||!de.gsap&&de||{}),Jt.forEach(Yt)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},on=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),on=0,l=ye},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),cn(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),cn=function(){return!on&&sn.wake()},ln={},un=/^[\d.\-M][\d.\-,\s]/,dn=/["']/g,fn=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(dn,``).trim():+c,r=s.substr(o+1).trim();return t},pn=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},mn=function(e){var t=(e+``).split(`(`),n=ln[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[fn(t[1])]:pn(e).split(`,`).map(Ve)):ln._CE&&un.test(e)?ln._CE(``,e):n},hn=function(e){return function(t){return 1-e(1-t)}},gn=function(e,t){return e&&(I(e)?e:ln[e]||mn(e))||t},_n=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Ne(e,function(e){for(var t in ln[e]=me[e]=i,ln[a=e.toLowerCase()]=n,i)ln[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=ln[e+`.`+t]=i[t]}),i},vn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/k*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*P((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:vn(s);return a=k/a,c.config=function(n,r){return e(t,n,r)},c},bn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:vn(r);return i.config=function(n){return e(t,n)},i};Ne(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;_n(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),ln.Linear.easeNone=ln.none=ln.Linear.easeIn,_n(`Elastic`,yn(`in`),yn(`out`),yn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};_n(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),_n(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),_n(`Circ`,function(e){return-(M(1-e*e)-1)}),_n(`Sine`,function(e){return e===1?1:-N(e*A)+1}),_n(`Back`,bn(`in`),bn(`out`),bn()),ln.SteppedEase=ln.steps=me.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-O;return function(e){return((r*St(0,a,e)|0)+i)*n}}},C.ease=ln[`quad.out`],Ne(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Ae+=e+`,`+e+`Params,`});var xn=function(e,t){this.id=j++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Me,this.set=t?t.getSetter:Hn},Sn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,gt(this,+e.duration,1,1),this.data=e.data,E&&(this._ctx=E,E.data.push(this)),on||sn.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,gt(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(cn(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(st(this,e),!n._dp||n.parent||ct(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&lt(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===O||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Be(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+rt(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+rt(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?it(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-O?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?at(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-O?0:this._rts,this.totalTime(St(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),ot(this),et(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==O&&(this._tTime-=O)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=Fe(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&lt(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(R(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?at(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Se);var t=T;return T=e,ze(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),T=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,_t(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,_t(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(yt(this,e),R(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,R(t)),this._dur||(this._zTime=-O),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-O:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-O,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-O)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=I(e)?e:He,a=function(){var e=t.then;t.then=null,n&&n(),I(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Kt(this)},e}();Ue(Sn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-O,_prom:0,_ps:!1,_rts:1});var Cn=function(e){x(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=R(t.sortChildren),ue&&lt(t.parent||ue,b(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&ut(b(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return bt(0,arguments,this),this},n.from=function(e,t,n){return bt(1,arguments,this),this},n.fromTo=function(e,t,n,r){return bt(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Je(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Ln(e,t,yt(this,n),1),this},n.call=function(e,t,n){return lt(this,Ln.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Ln(e,n,yt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Je(n).immediateRender=R(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Je(r).immediateRender=R(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:Fe(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==ue&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=Fe(o%f),o===i?(d=this._repeat,c=a):(_=Fe(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=it(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:Fe(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Gt(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=ht(this,Fe(r),Fe(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Gt(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-O);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||T&&ze(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-O:O);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-O)._zTime=c>=r?1:-1,this._ts))return this._start=g,ot(this),this.render(e,t,n);this._onUpdate&&!t&&Gt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Qe(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(Gt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(ee(t)||(t=yt(this,t,e)),!(e instanceof Sn)){if(ie(e))return e.forEach(function(e){return n.add(e,t)}),this;if(F(e))return this.addLabel(e,t);if(I(e))e=Ln.delayedCall(0,e);else return this}return this===e?this:lt(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-D);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Ln?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return F(e)?this.removeLabel(e):I(e)?this.killTweensOf(e):(e.parent===this&&Ze(this,e),e===this._recent&&(this._recent=this._last),$e(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fe(sn.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=yt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Ln.delayedCall(0,t||ye,n);return r.data=`isPause`,this._hasPause=1,lt(this,r,yt(this,e))},n.removePause=function(e){var t=this._first;for(e=yt(this,e);t;)t._start===e&&t.data===`isPause`&&Qe(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)On!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Ot(e),i=this._first,a=ee(t),o;i;)i instanceof Ln?Le(i._targets,r)&&(a?(!On||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=yt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Ln.to(n,Ue({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||O,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&gt(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Ue({startAt:{time:yt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Wt(this,yt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Wt(this,yt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+O)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=Fe(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return $e(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),$e(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=D,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,lt(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=Fe(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;gt(n,n===ue&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(ue._ts&&(Be(ue,at(e,ue)),Ee=sn.frame),sn.frame>=Oe){Oe+=S.autoSleep||120;var t=ue._first;if((!t||!t._ts)&&S.autoSleep&&sn._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||sn.sleep()}}},t}(Sn);Ue(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wn=function(e,t,n,r,i,a,o){var s=new Zn(this._pt,e,t,0,1,Gn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Vt(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(V)||[];u=V.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Ie(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=V.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(H.test(r)||g)&&(s.e=0),this._pt=s,s},Tn=function(e,t,n,r,i,a,o,s,c,l){I(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?I(u)?c?e[t.indexOf(`set`)||!I(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=I(u)?c?Bn:zn:Rn,p;if(F(r)&&(~r.indexOf(`random(`)&&(r=Vt(r)),r.charAt(1)===`=`&&(p=Ie(d,r)+(Ct(d)||0),(p||p===0)&&(r=p))),!l||d!==r||kn)return!isNaN(d*r)&&r!==``?(p=new Zn(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Wn:Un,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&G(t,r),wn.call(this,e,t,d,r,f,s||S.stringFilter,c))},En=function(e,t,n,r,i){if(I(e)&&(e=Pn(e,i,t,n,r)),!te(e)||e.style&&e.nodeType||ie(e)||z(e))return F(e)?Pn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Pn(e[o],i,t,n,r);return a},Dn=function(e,t,n,r,i,a){var o,s,c,l;if(K[e]&&(o=new K[e]).init(i,o.rawVars?t[e]:En(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Zn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==qt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},On,kn,An=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!w,b=t.timeline,x=i.easeReverse||d,S,E,k,A,j,M,N,P,F,I,ee,L,te;if(b&&(!f||!a)&&(a=`none`),t._ease=gn(a,C.ease),t._rEase=x&&(gn(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(P=g[0]?je(g[0]).harness:0,L=P&&i[P.prop],S=qe(i,Ce),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?xe:be),h._lazy=0),o){if(Qe(t._startAt=Ln.set(g,Ue({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&R(c),startAt:null,delay:0,onUpdate:l&&function(){return Gt(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(T||!s&&!p)&&t._startAt.revert(xe),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),k=Ue({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&R(c),immediateRender:s,stagger:0,parent:_},S),L&&(k[P.prop]=L),Qe(t._startAt=Ln.set(g,k)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(T?t._startAt.revert(xe):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,O,O);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&R(c)||c&&!m,E=0;E<g.length;E++){if(j=g[E],N=j._gsap||q(g)[E]._gsap,t._ptLookup[E]=I={},Te[N.id]&&we.length&&Re(),ee=v===g?E:v.indexOf(j),P&&(F=new P).init(j,L||S,t,ee,v)!==!1&&(t._pt=A=new Zn(t._pt,j,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(e){I[e]=A}),F.priority&&(M=1)),!P||L)for(k in S)K[k]&&(F=Dn(k,S,t,ee,j,v))?F.priority&&(M=1):I[k]=A=Tn.call(t,j,k,`get`,S[k],ee,v,0,i.stringFilter);t._op&&t._op[E]&&t.kill(j,t._op[E]),y&&t._pt&&(On=t,ue.killTweensOf(j,I,t.globalTime(n)),te=!t.parent,On=0),t._pt&&c&&(Te[N.id]=1)}M&&Xn(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!te,f&&n<=0&&b.render(D,!0,!0)},jn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return kn=1,e.vars[t]=`+=0`,An(e,o),kn=0,s?_e(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Pe(n)+Ct(u.e)),u.b&&(u.b=l.s+Ct(u.b))},Mn=function(e,t){var n=e[0]?je(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Ge({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Nn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(ie(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Pn=function(e,t,n,r,i){return I(e)?e.call(t,n,r,i):F(e)&&~e.indexOf(`random(`)?Vt(e):e},Fn=Ae+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,In={};Ne(Fn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return In[e]=1});var Ln=function(e){x(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Je(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||ue,g=(ie(t)||z(t)?ee(t[0]):`length`in n)?[t]:Ot(t),_,v,y,x,C,T,E,D;if(a._targets=g.length?q(g):_e(`GSAP target `+t+` not found. https://gsap.com`,!S.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||re(s)||re(c)){n=a.vars;var k=n.easeReverse||n.yoyoEase;if(_=a.timeline=new Cn({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=b(a),_._start=0,u||re(s)||re(c)){if(x=g.length,E=u&&jt(u),te(u))for(C in u)~Fn.indexOf(C)&&(D||={},D[C]=u[C]);for(v=0;v<x;v++)y=qe(n,In),y.stagger=0,k&&(y.easeReverse=k),D&&Ge(y,D),T=g[v],y.duration=+Pn(s,b(a),v,T,g),y.delay=(+Pn(c,b(a),v,T,g)||0)-a._delay,!u&&x===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(T,y,E?E(v,T,g):0),_._ease=ln.none;_.duration()?s=c=0:a.timeline=0}else if(f){Je(Ue(_.vars.defaults,{ease:`none`})),_._ease=gn(f.ease||n.ease||`none`);var A=0,j,M,N;if(ie(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(C in y={},f)C===`ease`||C===`easeEach`||Nn(C,f[C],y,f.easeEach);for(C in y)for(j=y[C].sort(function(e,t){return e.t-t.t}),A=0,v=0;v<j.length;v++)M=j[v],N={ease:M.e,duration:(M.t-(v?j[v-1].t:0))/100*s},N[C]=M.v,_.to(g,N,A),A+=N.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!w&&(On=b(a),ue.killTweensOf(g),On=0),lt(h,b(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===Fe(h._time)&&R(l)&&nt(b(a))&&h.data!==`nested`)&&(a._tTime=-O,a.render(Math.max(0,-c)||0)),m&&ut(b(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-O&&!o?i:e<O?0:e,c,l,u,d,f,p,m,h;if(!a)mt(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=Fe(s%d),s===i?(u=this._repeat,c=a):(f=Fe(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=it(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(Fe(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(dt(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Gt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&tt(this,e,t,n),Gt(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Gt(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&tt(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Qe(this,1),!t&&(!o||r)&&(s||r||p)&&(Gt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){on||sn.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||An(this,a),o=this._ease(a/this._dur),jn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(st(this,0),this.parent||Xe(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Kt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!T),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,On&&On.vars.overwrite!==!0)._first||Kt(this),this.parent&&n!==this.timeline.totalDuration()&&gt(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Ot(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Ye(r,i))return t===`all`&&(this._pt=0),Kt(this);for(s=this._op=this._op||[],t!==`all`&&(F(t)&&(d={},Ne(t,function(e){return d[e]=1}),t=d),t=Mn(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Ze(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Kt(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return bt(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return bt(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return ue.killTweensOf(e,t,n)},t}(Sn);Ue(Ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Ne(`staggerTo,staggerFrom,staggerFromTo`,function(e){Ln[e]=function(){var t=new Cn,n=Tt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Rn=function(e,t,n){return e[t]=n},zn=function(e,t,n){return e[t](n)},Bn=function(e,t,n,r){return e[t](r.fp,n)},Vn=function(e,t,n){return e.setAttribute(t,n)},Hn=function(e,t){return I(e[t])?zn:L(e[t])&&e.setAttribute?Vn:Rn},Un=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Wn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Kn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Jn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ze(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Yn=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Xn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Zn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Un,this.d=o||this,this.set=s||Rn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Yn,this.m=e,this.mt=n,this.tween=t},e}();Ne(Ae+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Ce[e]=1}),me.TweenMax=me.TweenLite=Ln,me.TimelineLite=me.TimelineMax=Cn,ue=new Cn({sortChildren:!1,defaults:C,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),S.stringFilter=an;var Qn=[],$n={},er=[],tr=0,nr=0,rr=function(e){return($n[e]||er).map(function(e){return e()})},ir=function(){var e=Date.now(),t=[];e-tr>2&&(rr(`matchMediaInit`),Qn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=de.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),rr(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),tr=e,rr(`matchMedia`))},ar=function(){function e(e,t){this.selector=t&&kt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=nr++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){I(e)&&(n=t,t=e,e=I);var r=this,i=function(){var e=E,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=kt(n)),E=r,a=t.apply(r,arguments),I(a)&&r._r.push(a),E=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===I?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=E;E=null,e(this),E=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Ln&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Cn?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Ln)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Qn.length;r--;)Qn[r].id===this.id&&Qn.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),or=function(){function e(e){this.contexts=[],this.scope=e,E&&E.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){te(e)||(e={matches:e});var r=new ar(0,n||this.scope),i=r.conditions={},a,o,s;for(o in E&&!r.selector&&(r.selector=E.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=de.matchMedia(e[o]),a&&(Qn.indexOf(r)<0&&Qn.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(ir):a.addEventListener(`change`,ir)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),sr={registerPlugin:function(){[...arguments].forEach(function(e){return Yt(e)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return ue.getTweensOf(e,t)},getProperty:function(e,t,n,r){F(e)&&(e=Ot(e)[0]);var i=je(e||{}).get,a=n?He:Ve;return n===`native`&&(n=``),e&&(t?a((K[t]&&K[t].get||i)(e,t,n,r)):function(t,n,r){return a((K[t]&&K[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Ot(e),e.length>1){var r=e.map(function(e){return dr.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=K[t],o=je(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;qt._pt=0,r.init(e,n?t+n:t,qt,0,[e]),r.render(1,r),qt._pt&&Kn(1,qt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=dr.to(e,Ue((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return ue.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gn(e.ease,C.ease)),Ke(C,e||{})},config:function(e){return Ke(S,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!K[e]&&!me[e]&&_e(t+` effect requires `+e+` plugin.`)}),De[t]=function(e,t,r){return n(Ot(e),Ue(t||{},i),r)},a&&(Cn.prototype[t]=function(e,n,r){return this.add(De[t](e,te(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){ln[e]=gn(t)},parseEase:function(e,t){return arguments.length?gn(e,t):ln},getById:function(e){return ue.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),r,i;for(n.smoothChildTiming=R(e.smoothChildTiming),ue.remove(n),n._dp=0,n._time=n._tTime=ue._time,r=ue._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Ln&&r.vars.onComplete===r._targets[0]))&&lt(n,r,r._start-r._delay),r=i;return lt(ue,n,0),n},context:function(e,t){return e?new ar(e,t):E},matchMedia:function(e){return new or(e)},matchMediaRefresh:function(){return Qn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ir()},addEventListener:function(e,t){var n=$n[e]||($n[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$n[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:zt,wrapYoyo:Bt,distribute:jt,random:Pt,snap:Nt,normalize:Lt,getUnit:Ct,clamp:wt,splitColor:$t,toArray:Ot,selector:kt,mapRange:Ht,pipe:Ft,unitize:It,interpolate:Ut,shuffle:At},install:ge,effects:De,ticker:sn,updateRoot:Cn.updateRoot,plugins:K,globalTimeline:ue,core:{PropTween:Zn,globals:ve,Tween:Ln,Timeline:Cn,Animation:Sn,getCache:je,_removeLinkedListItem:Ze,reverting:function(){return T},context:function(e){return e&&E&&(E.data.push(e),e._ctx=E),E},suppressOverwrites:function(e){return w=e}}};Ne(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return sr[e]=Ln[e]}),sn.add(Cn.updateRoot),qt=sr.to({},{duration:0});var cr=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},lr=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=cr(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},ur=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(F(n)&&(r={},Ne(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}lr(e,n)}}}},dr=sr.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)T?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ur(`roundProps`,Mt),ur(`modifiers`),ur(`snap`,Nt))||sr;Ln.version=Cn.version=dr.version=`3.15.0`,W=1,ne()&&cn(),ln.Power0,ln.Power1,ln.Power2,ln.Power3,ln.Power4,ln.Linear,ln.Quad,ln.Cubic,ln.Quart,ln.Quint,ln.Strong,ln.Elastic,ln.Back,ln.SteppedEase,ln.Bounce,ln.Sine,ln.Expo,ln.Circ;var fr,pr,mr,hr,gr,_r,vr,yr=function(){return typeof window<`u`},br={},xr=180/Math.PI,Sr=Math.PI/180,Cr=Math.atan2,wr=1e8,Tr=/([A-Z])/g,Er=/(left|right|width|margin|padding|x)/i,Dr=/[\s,\(]\S/,Or={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},kr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ar=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Nr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Ir=function(e,t,n){return e.style[t]=n},Lr=function(e,t,n){return e.style.setProperty(t,n)},Rr=function(e,t,n){return e._gsap[t]=n},zr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Br=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Vr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Hr=`transform`,Ur=Hr+`Origin`,Wr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in br&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Or[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=li(i,e)}):this.tfm[t]=o.x?o[t]:li(i,t),t===Ur&&(this.tfm.zOrigin=o.zOrigin);else return Or.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Hr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Ur,n,``)),t=Hr}(a||n)&&this.props.push(t,n,a[t])},Gr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Kr=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Tr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=vr(),(!i||!i.isStart)&&!n[Hr]&&(Gr(n),r.zOrigin&&n[Ur]&&(n[Ur]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qr=function(e,t){var n={target:e,props:[],revert:Kr,save:Wr};return e._gsap||dr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Jr,Yr=function(e,t){var n=pr.createElementNS?pr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):pr.createElement(e);return n&&n.style?n:pr.createElement(e)},Xr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Tr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Qr(n)||n,1)||``},Zr=`O,Moz,ms,Ms,Webkit`.split(`,`),Qr=function(e,t,n){var r=(t||gr).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Zr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Zr[i]:``)+e},$r=function(){yr()&&window.document&&(fr=window,pr=fr.document,mr=pr.documentElement,gr=Yr(`div`)||{style:{}},Yr(`div`),Hr=Qr(Hr),Ur=Hr+`Origin`,gr.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Jr=!!Qr(`perspective`),vr=dr.core.reverting,hr=1)},ei=function(e){var t=e.ownerSVGElement,n=Yr(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),mr.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),mr.removeChild(n),i},ti=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ni=function(e){var t,n;try{t=e.getBBox()}catch{t=ei(e),n=1}return t&&(t.width||t.height)||n||(t=ei(e)),t&&!t.width&&!t.x&&!t.y?{x:+ti(e,[`x`,`cx`,`x1`])||0,y:+ti(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},ri=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!ni(e))},ii=function(e,t){if(t){var n=e.style,r;t in br&&t!==Ur&&(t=Hr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Tr,`-$1`).toLowerCase())):n.removeAttribute(t)}},ai=function(e,t,n,r,i,a){var o=new Zn(e._pt,t,n,0,1,a?Fr:Pr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},oi={deg:1,rad:1,turn:1},si={grid:1,flex:1},ci=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=gr.style,c=Er.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||oi[i]||oi[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&ri(t),(p||o===`%`)&&(br[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Pe(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===pr||!h.appendChild)&&(h=pr.body),g=h._gsap,g&&p&&g.width&&c&&g.time===sn.time&&!g.uncache)return Pe(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:ii(t,n)}else(p||o===`%`)&&!si[Xr(h,`display`)]&&(s.position=Xr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(gr),m=gr[u],h.removeChild(gr),s.position=`absolute`;return c&&p&&(g=je(h),g.time=sn.time,g.width=h[u]),Pe(f?m*a/d:m&&a?d/m*a:0)},li=function(e,t,n,r){var i;return hr||$r(),t in Or&&t!==`transform`&&(t=Or[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),br[t]&&t!==`transform`?(i=xi(e,r),i=t===`transformOrigin`?i.svg?i.origin:Si(Xr(e,Ur))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=mi[t]&&mi[t](e,t,n)||Xr(e,t)||Me(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?ci(e,t,i,n)+n:i},ui=function(e,t,n,r){if(!n||n===`none`){var i=Qr(t,e,1),a=i&&Xr(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Xr(e,`borderTopColor`))}var o=new Zn(this._pt,e.style,t,0,1,Gn),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Xr(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Xr(e,t)||r,m?e.style[t]=m:ii(e,t)),l=[n,r],an(l),n=l[0],r=l[1],d=n.match(ce)||[],b=r.match(ce)||[],b.length){for(;u=ce.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Ie(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=ce.lastIndex-v.length,v||(v=v||S.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=ci(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Fr:Pr;return H.test(r)&&(o.e=0),this._pt=o,o},di={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},fi=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=di[n]||n,t[1]=di[r]||r,t.join(` `)},pi=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],br[o]&&(s=1,o=o===`transformOrigin`?Ur:Hr),ii(n,o);s&&(ii(n,Hr),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,xi(n,1),a.uncache=1,Gr(r)))}},mi={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Zn(e._pt,t,n,0,0,pi);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},hi=[1,0,0,1,0,0],gi={},_i=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},vi=function(e){var t=Xr(e,Hr);return _i(t)?hi:t.substr(7).match(se).map(Pe)},yi=function(e,t){var n=e._gsap||je(e),r=e.style,i=vi(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?hi:i):(i===hi&&!e.offsetParent&&e!==mr&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,mr.appendChild(e)),i=vi(e),s?r.display=s:ii(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):mr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},bi=function(e,t,n,r,i,a){var o=e._gsap,s=i||yi(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==hi&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=ni(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Ur]=`0px 0px`,a&&(ai(a,o,`xOrigin`,c,y),ai(a,o,`yOrigin`,l,b),ai(a,o,`xOffset`,u,o.xOffset),ai(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},xi=function(e,t){var n=e._gsap||new xn(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Xr(e,Ur)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,L,te,R,ne;return n.svg=!!(e.getCTM&&ri(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Hr]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Hr]===`none`?``:s[Hr])),r.scale=r.rotate=r.translate=`none`),C=yi(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),c=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),bi(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,C)),b=n.xOrigin||0,x=n.yOrigin||0,C!==hi&&(D=C[0],O=C[1],k=C[2],A=C[3],l=j=C[4],u=M=C[5],C.length===6?(f=Math.sqrt(D*D+O*O),p=Math.sqrt(A*A+k*k),m=D||O?Cr(O,D)*xr:0,_=k||A?Cr(k,A)*xr+m:0,_&&(p*=Math.abs(Math.cos(_*Sr))),n.svg&&(l-=b-(b*D+x*k),u-=x-(b*O+x*A))):(ne=C[6],te=C[7],I=C[8],ee=C[9],L=C[10],R=C[11],l=C[12],u=C[13],d=C[14],w=Cr(ne,L),h=w*xr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+ee*E,F=ne*T+L*E,I=j*-E+I*T,ee=M*-E+ee*T,L=ne*-E+L*T,R=te*-E+R*T,j=N,M=P,ne=F),w=Cr(-k,L),g=w*xr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-ee*E,F=k*T-L*E,R=A*E+R*T,D=N,O=P,k=F),w=Cr(O,D),m=w*xr,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Pe(Math.sqrt(D*D+O*O+k*k)),p=Pe(Math.sqrt(M*M+ne*ne)),w=Cr(j,M),_=Math.abs(w)>2e-4?w*xr:0,y=R?1/(R<0?-R:R):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!_i(Xr(e,Hr)),N&&e.setAttribute(`transform`,N))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Pe(f),n.scaleY=Pe(p),n.rotation=Pe(m)+o,n.rotationX=Pe(h)+o,n.rotationY=Pe(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Ur]=Si(c)),n.xOffset=n.yOffset=0,n.force3D=S.force3D,n.renderTransform=n.svg?ki:Jr?Oi:wi,n.uncache=0,n},Si=function(e){return(e=e.split(` `))[0]+` `+e[1]},Ci=function(e,t,n){var r=Ct(t);return Pe(parseFloat(t)+parseFloat(ci(e,`x`,n+`px`,r)))+r},wi=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Oi(e,t)},Ti=`0deg`,Ei=`0px`,Di=`) `,Oi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Ti||l!==Ti)){var x=parseFloat(l)*Sr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Sr,w=Math.cos(x),a=Ci(_,a,S*w*-v),o=Ci(_,o,-Math.sin(x)*-v),s=Ci(_,s,C*w*-v+v)}h!==Ei&&(y+=`perspective(`+h+Di),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Ei||o!==Ei||s!==Ei)&&(y+=s!==Ei||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Di),c!==Ti&&(y+=`rotate(`+c+Di),l!==Ti&&(y+=`rotateY(`+l+Di),u!==Ti&&(y+=`rotateX(`+u+Di),(d!==Ti||f!==Ti)&&(y+=`skew(`+d+`, `+f+Di),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+Di),_.style[Hr]=y||`translate(0, 0)`},ki=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Sr,c*=Sr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Sr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Pe(b),x=Pe(x),S=Pe(S),C=Pe(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=ci(f,`x`,a,`px`),y=ci(f,`y`,o,`px`)),(p||m||h||g)&&(v=Pe(v+p-(p*b+m*S)+h),y=Pe(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Pe(v+r/100*w.width),y=Pe(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Hr]=w)},Ai=function(e,t,n,r,i){var a=360,o=F(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?xr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*wr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*wr)%a-~~(s/a)*a)),e._pt=u=new Zn(e._pt,t,n,r,s,Ar),u.e=c,u.u=`deg`,e._props.push(n),u},ji=function(e,t){for(var n in t)e[n]=t[n];return e},Mi=function(e,t,n){var r=ji({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Hr]=t,o=xi(n,1),ii(n,Hr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Hr],a[Hr]=t,o=xi(n,1),a[Hr]=c),br)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Ct(c),p=Ct(l),u=f===p?parseFloat(c):ci(n,s,c,p),d=parseFloat(l),e._pt=new Zn(e._pt,o,s,u,d-u,kr),e._pt.u=p||0,e._props.push(s));ji(o,r)};Ne(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});mi[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return li(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Ni={name:`css`,register:$r,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,C,w,T;for(m in hr||$r(),this.styles=this.styles||qr(e),w=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(K[m]&&Dn(m,t,n,r,e,i)))){if(f=typeof l,p=mi[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Vt(l)),p)p(this,e,m,l,n)&&(C=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,nn.lastIndex=0,nn.test(c)||(h=Ct(c),g=Ct(l),g?h!==g&&(c=ci(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),w.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],F(c)&&~c.indexOf(`random(`)&&(c=Vt(c)),Ct(c+``)||c===`auto`||(c+=S.units[m]||Ct(li(e,m))||``),(c+``).charAt(1)===`=`&&(c=li(e,m))):c=li(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Or&&(m===`autoAlpha`&&(d===1&&li(e,`visibility`)===`hidden`&&u&&(d=0),w.push(`visibility`,0,o.visibility),ai(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Or[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in br,v){if(this.styles.save(m),T=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Xr(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var E=e.style.perspective;e.style.perspective=l,l=Xr(e,`perspective`),E?e.style.perspective=E:ii(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||xi(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Zn(this._pt,o,Hr,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Zn(this._pt,b,`scaleY`,b.scaleY,(_?Ie(b.scaleY,_+u):u)-b.scaleY||0,kr),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){w.push(Ur,0,o[Ur]),l=fi(l),b.svg?bi(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&ai(this,b,`zOrigin`,b.zOrigin,g),ai(this,o,m,Si(c),Si(l)));continue}else if(m===`svgOrigin`){bi(e,l,1,x,0,this);continue}else if(m in gi){Ai(this,b,m,d,_?Ie(d,_+l):l);continue}else if(m===`smoothOrigin`){ai(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Mi(this,l,e);continue}}else m in o||(m=Qr(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Dr.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=Ct(l)||(m in S.units?S.units[m]:h),h!==g&&(d=ci(e,m,c,g)),this._pt=new Zn(this._pt,v?b:o,m,d,(_?Ie(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Nr:kr),this._pt.u=g||0,v&&T!==l?(this._pt.b=c,this._pt.e=T,this._pt.r=Mr):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=jr);else if(m in o)ui.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){G(m,l);continue}v||(m in o?w.push(m,0,o[m]):typeof e[m]==`function`?w.push(m,2,e[m]()):w.push(m,1,c||e[m])),a.push(m)}}C&&Xn(this)},render:function(e,t){if(t.tween._time||!vr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:li,aliases:Or,getSetter:function(e,t,n){var r=Or[t];return r&&r.indexOf(`,`)<0&&(t=r),t in br&&t!==Ur&&(e._gsap.x||li(e,`x`))?n&&_r===n?t===`scale`?zr:Rr:(_r=n||{})&&(t===`scale`?Br:Vr):e.style&&!L(e.style[t])?Ir:~t.indexOf(`-`)?Lr:Hn(e,t)},core:{_removeProperty:ii,_getMatrix:yi}};dr.utils.checkPrefix=Qr,dr.core.getStyleSaver=qr,(function(e,t,n,r){var i=Ne(e+`,`+t+`,`+n,function(e){br[e]=1});Ne(t,function(e){S.units[e]=`deg`,gi[e]=1}),Or[i[13]]=e+`,`+t,Ne(r,function(e){var t=e.split(`:`);Or[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Ne(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){S.units[e]=`px`}),dr.registerPlugin(Ni);var Pi=dr.registerPlugin(Ni)||dr;Pi.core.Tween;function Fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ii(e,t,n){return t&&Fi(e.prototype,t),n&&Fi(e,n),e}var Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi=function(){return Li||typeof window<`u`&&(Li=window.gsap)&&Li.registerPlugin&&Li},Zi=1,Qi=[],J=[],$i=[],ea=Date.now,ta=function(e,t){return t},na=function(){var e=Gi.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,J),r.push.apply(r,$i),J=n,$i=r,ta=function(e,n){return t[e](n)}},ra=function(e,t){return~$i.indexOf(e)&&$i[$i.indexOf(e)+1][t]},ia=function(e){return!!~Ki.indexOf(e)},aa=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},oa=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},sa=`scrollLeft`,ca=`scrollTop`,la=function(){return qi&&qi.isPressed||J.cache++},ua=function(e,t){var n=function n(r){if(r||r===0){Zi&&(zi.history.scrollRestoration=`manual`);var i=qi&&qi.isPressed;r=n.v=Math.round(r)||(qi&&qi.iOS?1:0),e(r),n.cacheID=J.cache,i&&ta(`ss`,r)}else(t||J.cache!==n.cacheID||ta(`ref`))&&(n.cacheID=J.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},da={s:sa,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:ua(function(e){return arguments.length?zi.scrollTo(e,fa.sc()):zi.pageXOffset||Bi[sa]||Vi[sa]||Hi[sa]||0})},fa={s:ca,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:da,sc:ua(function(e){return arguments.length?zi.scrollTo(da.sc(),e):zi.pageYOffset||Bi[ca]||Vi[ca]||Hi[ca]||0})},pa=function(e,t){return(t&&t._ctx&&t._ctx.selector||Li.utils.toArray)(e)[0]||(typeof e==`string`&&Li.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},ma=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ha=function(e,t){var n=t.s,r=t.sc;ia(e)&&(e=Bi.scrollingElement||Vi);var i=J.indexOf(e),a=r===fa.sc?1:2;!~i&&(i=J.push(e)-1),J[i+a]||aa(e,`scroll`,la);var o=J[i+a],s=o||(J[i+a]=ua(ra(e,n),!0)||(ia(e)?r:ua(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=Li.getProperty(e,`scrollBehavior`)===`smooth`),s},ga=function(e,t,n){var r=e,i=e,a=ea(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=ea();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=ea();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},_a=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},va=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ya=function(){Gi=Li.core.globals().ScrollTrigger,Gi&&Gi.core&&na()},ba=function(e){return Li=e||Xi(),!Ri&&Li&&typeof document<`u`&&document.body&&(zi=window,Bi=document,Vi=Bi.documentElement,Hi=Bi.body,Ki=[zi,Bi,Vi,Hi],Li.utils.clamp,Yi=Li.core.context||function(){},Wi=`onpointerenter`in Hi?`pointer`:`mouse`,Ui=xa.isTouch=zi.matchMedia&&zi.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in zi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=xa.eventTypes=(`ontouchstart`in Vi?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Vi?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Zi=0},500),Ri=1),Gi||ya(),Ri};da.op=fa,J.cache=0;var xa=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){Ri||ba(Li)||console.warn(`Please gsap.registerPlugin(Observer)`),Gi||ya();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,F=e.onEnable,I=e.onDisable,ee=e.onClick,L=e.scrollSpeed,te=e.capture,R=e.allowClicks,ne=e.lockAxis,re=e.onLockAxis;this.target=i=pa(i)||Vi,this.vars=e,u&&=Li.utils.toArray(u),t||=1e-9,n||=0,d||=1,L||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(zi.getComputedStyle(Hi).lineHeight)||22;var z,ie,ae,oe,B,se,ce,V=this,H=0,U=0,le=e.passive||!s&&e.passive!==!1,ue=ha(i,da),de=ha(i,fa),fe=ue(),pe=de(),me=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Ji[0]===`pointerdown`,he=ia(i),W=i.ownerDocument||Bi,ge=[0,0,0],G=[0,0,0],_e=0,ve=function(){return _e=ea()},ye=function(e,t){return(V.event=e)&&u&&ma(e.target,u)||t&&me&&e.pointerType!==`touch`||A&&A(e,t)},be=function(){V._vx.reset(),V._vy.reset(),ie.pause(),c&&c(V)},xe=function(){var e=V.deltaX=va(ge),n=V.deltaY=va(G),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(V,e,n,ge,G),r&&(v&&V.deltaX>0&&v(V),y&&V.deltaX<0&&y(V),S&&S(V),T&&V.deltaX<0!=H<0&&T(V),H=V.deltaX,ge[0]=ge[1]=ge[2]=0),i&&(x&&V.deltaY>0&&x(V),b&&V.deltaY<0&&b(V),C&&C(V),E&&V.deltaY<0!=U<0&&E(V),U=V.deltaY,G[0]=G[1]=G[2]=0),(oe||ae)&&(k&&k(V),ae&&=(p&&ae===1&&p(V),h&&h(V),0),oe=!1),se&&!(se=!1)&&re&&re(V),B&&=(P(V),!1),z=0},Se=function(e,t,n){ge[n]+=e,G[n]+=t,V._vx.update(e),V._vy.update(t),o?z||=requestAnimationFrame(xe):xe()},Ce=function(e,t){ne&&!ce&&(V.axis=ce=Math.abs(e)>Math.abs(t)?`x`:`y`,se=!0),ce!==`y`&&(ge[2]+=e,V._vx.update(e,!0)),ce!==`x`&&(G[2]+=t,V._vy.update(t,!0)),o?z||=requestAnimationFrame(xe):xe()},we=function(e){if(!ye(e,1)){e=_a(e,s);var t=e.clientX,r=e.clientY,i=t-V.x,a=r-V.y,o=V.isDragging;V.x=t,V.y=r,(o||(i||a)&&(Math.abs(V.startX-t)>=n||Math.abs(V.startY-r)>=n))&&(ae||=o?2:1,o||(V.isDragging=!0),Ce(i,a))}},Te=V.onPress=function(e){ye(e,1)||e&&e.button||(V.axis=ce=null,ie.pause(),V.isPressed=!0,e=_a(e),H=U=0,V.startX=V.x=e.clientX,V.startY=V.y=e.clientY,V._vx.reset(),V._vy.reset(),aa(j?i:W,Ji[1],we,le,!0),V.deltaX=V.deltaY=0,g&&g(V))},Ee=V.onRelease=function(e){if(!ye(e,1)){oa(j?i:W,Ji[1],we,!0);var t=!isNaN(V.y-V.startY),n=V.isDragging,r=n&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),a=_a(e);!r&&t&&(V._vx.reset(),V._vy.reset(),s&&R&&Li.delayedCall(.08,function(){if(ea()-_e>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(W.createEvent){var t=W.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,zi,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,c&&n&&!j&&ie.restart(!0),ae&&xe(),m&&n&&m(V),_&&_(V,r)}},K=function(e){return e.touches&&e.touches.length>1&&(V.isGesturing=!0)&&M(e,V.isDragging)},De=function(){return(V.isGesturing=!1)||N(V)},Oe=function(e){if(!ye(e)){var t=ue(),n=de();Se((t-fe)*L,(n-pe)*L,1),fe=t,pe=n,c&&ie.restart(!0)}},ke=function(e){if(!ye(e)){e=_a(e,s),P&&(B=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?zi.innerHeight:1)*d;Se(e.deltaX*t,e.deltaY*t,0),c&&!j&&ie.restart(!0)}},Ae=function(e){if(!ye(e)){var t=e.clientX,n=e.clientY,r=t-V.x,i=n-V.y;V.x=t,V.y=n,oe=!0,c&&ie.restart(!0),(r||i)&&Ce(r,i)}},q=function(e){V.event=e,D(V)},je=function(e){V.event=e,O(V)},Me=function(e){return ye(e)||_a(e,s)&&ee(V)};ie=V._dc=Li.delayedCall(l||.25,be).pause(),V.deltaX=V.deltaY=0,V._vx=ga(0,50,!0),V._vy=ga(0,50,!0),V.scrollX=ue,V.scrollY=de,V.isDragging=V.isGesturing=V.isPressed=!1,Yi(this),V.enable=function(e){return V.isEnabled||(aa(he?W:i,`scroll`,la),r.indexOf(`scroll`)>=0&&aa(he?W:i,`scroll`,Oe,le,te),r.indexOf(`wheel`)>=0&&aa(i,`wheel`,ke,le,te),(r.indexOf(`touch`)>=0&&Ui||r.indexOf(`pointer`)>=0)&&(aa(i,Ji[0],Te,le,te),aa(W,Ji[2],Ee),aa(W,Ji[3],Ee),R&&aa(i,`click`,ve,!0,!0),ee&&aa(i,`click`,Me),M&&aa(W,`gesturestart`,K),N&&aa(W,`gestureend`,De),D&&aa(i,Wi+`enter`,q),O&&aa(i,Wi+`leave`,je),k&&aa(i,Wi+`move`,Ae)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=oe=ae=!1,V._vx.reset(),V._vy.reset(),fe=ue(),pe=de(),e&&e.type&&Te(e),F&&F(V)),V},V.disable=function(){V.isEnabled&&(Qi.filter(function(e){return e!==V&&ia(e.target)}).length||oa(he?W:i,`scroll`,la),V.isPressed&&(V._vx.reset(),V._vy.reset(),oa(j?i:W,Ji[1],we,!0)),oa(he?W:i,`scroll`,Oe,te),oa(i,`wheel`,ke,te),oa(i,Ji[0],Te,te),oa(W,Ji[2],Ee),oa(W,Ji[3],Ee),oa(i,`click`,ve,!0),oa(i,`click`,Me),oa(W,`gesturestart`,K),oa(W,`gestureend`,De),oa(i,Wi+`enter`,q),oa(i,Wi+`leave`,je),oa(i,Wi+`move`,Ae),V.isEnabled=V.isPressed=V.isDragging=!1,I&&I(V))},V.kill=V.revert=function(){V.disable();var e=Qi.indexOf(V);e>=0&&Qi.splice(e,1),qi===V&&(qi=0)},Qi.push(V),j&&ia(i)&&(qi=V),V.enable(f)},Ii(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();xa.version=`3.15.0`,xa.create=function(e){return new xa(e)},xa.register=ba,xa.getAll=function(){return Qi.slice()},xa.getById=function(e){return Qi.filter(function(t){return t.vars.id===e})[0]},Xi()&&Li.registerPlugin(xa);var Y,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to=1,no=Date.now,ro=no(),io=0,ao=0,oo=function(e,t,n){var r=Co(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},so=function(e,t){return t&&(!Co(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},co=function e(){return ao&&requestAnimationFrame(e)},lo=function(){return Pa=1},uo=function(){return Pa=0},fo=function(e){return e},po=function(e){return Math.round(e*1e5)/1e5||0},mo=function(){return typeof window<`u`},ho=function(){return Y||mo()&&(Y=window.gsap)&&Y.registerPlugin&&Y},go=function(e){return!!~Da.indexOf(e)},_o=function(e){return(e===`Height`?Za:Ca[`inner`+e])||Ta[`client`+e]||Ea[`client`+e]},vo=function(e){return ra(e,`getBoundingClientRect`)||(go(e)?function(){return Ws.width=Ca.innerWidth,Ws.height=Za,Ws}:function(){return qo(e)})},yo=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=ra(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?_o(i):e[`client`+i])||0}},bo=function(e,t){return!t||~$i.indexOf(e)?vo(e):function(){return Ws}},xo=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=ra(e,n))?a()-vo(e)()[i]:go(e)?(Ta[n]||Ea[n])-_o(r):e[n]-e[`offset`+r])},So=function(e,t){for(var n=0;n<za.length;n+=3)(!t||~t.indexOf(za[n+1]))&&e(za[n],za[n+1],za[n+2])},Co=function(e){return typeof e==`string`},wo=function(e){return typeof e==`function`},To=function(e){return typeof e==`number`},Eo=function(e){return typeof e==`object`},Do=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},Oo=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},ko=Math.abs,Ao=`left`,jo=`top`,Mo=`right`,No=`bottom`,X=`width`,Po=`height`,Fo=`Right`,Io=`Left`,Lo=`Top`,Ro=`Bottom`,zo=`padding`,Bo=`margin`,Vo=`Width`,Ho=`Height`,Uo=`px`,Wo=function(e){return Ca.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Go=function(e){var t=Wo(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},Ko=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qo=function(e,t){var n=t&&Wo(e)[Fa]!==`matrix(1, 0, 0, 1, 0, 0)`&&Y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Jo=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Yo=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},Xo=function(e){return function(t){return Y.utils.snap(Yo(e),t)}},Zo=function(e){var t=Y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Qo=function(e){return function(t,n){return Zo(Yo(e))(t,n.direction)}},$o=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},es=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},ts=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ns=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},rs={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},is={toggleActions:`play`,anticipatePin:0},as={top:0,left:0,center:.5,bottom:1,right:1},os=function(e,t){if(Co(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in as?as[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ss=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=wa.createElement(`div`),m=go(n)||ra(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?Ea:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===fa?Mo:No)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],cs(p,0,r,_),p},cs=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+Vo]=1,i[`border`+o+Vo]=0,i[n.p]=t+`px`,Y.set(e,i)},ls=[],us={},ds,fs=function(){return no()-io>34&&(ds||=requestAnimationFrame(Fs))},ps=function(){(!Ua||!Ua.isPressed||Ua.startX>Ea.clientWidth)&&(J.cache++,Ua?ds||=requestAnimationFrame(Fs):Fs(),io||ys(`scrollStart`),io=no())},ms=function(){Ka=Ca.innerWidth,Ga=Ca.innerHeight},hs=function(e){J.cache++,(e===!0||!Na&&!Ha&&!wa.fullscreenElement&&!wa.webkitFullscreenElement&&(!Wa||Ka!==Ca.innerWidth||Math.abs(Ca.innerHeight-Ga)>Ca.innerHeight*.25))&&Oa.restart(!0)},gs={},_s=[],vs=function e(){return ts(Zs,`scrollEnd`,e)||js(!0)},ys=function(e){return gs[e]&&gs[e].map(function(e){return e()})||_s},bs=[],xs=function(e){for(var t=0;t<bs.length;t+=5)(!e||bs[t+4]&&bs[t+4].query===e)&&(bs[t].style.cssText=bs[t+1],bs[t].getBBox&&bs[t].setAttribute(`transform`,bs[t+2]||``),bs[t+3].uncache=1)},Ss=function(){return J.forEach(function(e){return wo(e)&&++e.cacheID&&(e.rec=e())})},Cs=function(e,t){var n;for(Ia=0;Ia<ls.length;Ia++)n=ls[Ia],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qa=!0,t&&xs(t),t||ys(`revert`)},ws=function(e,t){J.cache++,(t||!Ts)&&J.forEach(function(e){return wo(e)&&e.cacheID++&&(e.rec=0)}),Co(e)&&(Ca.history.scrollRestoration=Ya=e)},Ts,Es=0,Ds,Os=function(){if(Ds!==Es){var e=Ds=Es;requestAnimationFrame(function(){return e===Es&&js(!0)})}},ks=function(){Ea.appendChild(Xa),Za=!Ua&&Xa.offsetHeight||Ca.innerHeight,Ea.removeChild(Xa)},As=function(e){return ka(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},js=function(e,t){if(Ta=wa.documentElement,Ea=wa.body,Da=[Ca,wa,Ta,Ea],io&&!e&&!Qa){es(Zs,`scrollEnd`,vs);return}ks(),Ts=Zs.isRefreshing=!0,Qa||Ss();var n=ys(`refreshInit`);Ba&&Zs.sort(),t||Cs(),J.forEach(function(e){wo(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),ls.slice(0).forEach(function(e){return e.refresh()}),Qa=!1,ls.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),$a=1,As(!0),ls.forEach(function(e){var t=xo(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),As(!1),$a=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),J.forEach(function(e){wo(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),ws(Ya,1),Oa.pause(),Es++,Ts=2,Fs(2),ls.forEach(function(e){return wo(e.vars.onRefresh)&&e.vars.onRefresh(e)}),Ts=Zs.isRefreshing=!1,ys(`refresh`)},Ms=0,Ns=1,Ps,Fs=function(e){if(e===2||!Ts&&!Qa){Zs.isUpdating=!0,Ps&&Ps.update(0);var t=ls.length,n=no(),r=n-ro>=50,i=t&&ls[0].scroll();if(Ns=Ms>i?-1:1,Ts||(Ms=i),r&&(io&&!Pa&&n-io>200&&(io=0,ys(`scrollEnd`)),ja=ro,ro=n),Ns<0){for(Ia=t;Ia-->0;)ls[Ia]&&ls[Ia].update(0,r);Ns=1}else for(Ia=0;Ia<t;Ia++)ls[Ia]&&ls[Ia].update(0,r);Zs.isUpdating=!1}ds=0},Is=[Ao,jo,No,Mo,Bo+Ro,Bo+Fo,Bo+Lo,Bo+Io,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],Ls=Is.concat([X,Po,`boxSizing`,`max`+Vo,`max`+Ho,`position`,Bo,zo,zo+Lo,zo+Fo,zo+Ro,zo+Io]),Rs=function(e,t,n){Vs(n);var r=e._gsap;if(r.spacerIsNative)Vs(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},zs=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=Is.length,a=t.style,o=e.style,s;i--;)s=Is[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[No]=o[Mo]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[X]=Jo(e,da)+Uo,a[Po]=Jo(e,fa)+Uo,a[zo]=o[Bo]=o[jo]=o[Ao]=`0`,Vs(r),o[X]=o[`max`+Vo]=n[X],o[Po]=o[`max`+Ho]=n[Po],o[zo]=n[zo],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Bs=/([A-Z])/g,Vs=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||Y.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(Bs,`-$1`).toLowerCase())}},Hs=function(e){for(var t=Ls.length,n=e.style,r=[],i=0;i<t;i++)r.push(Ls[i],n[Ls[i]]);return r.t=e,r},Us=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Ws={left:0,top:0},Gs=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){wo(e)&&(e=e(s)),Co(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?os(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),To(e))f&&(e=Y.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&cs(o,n,r,!0);else{wo(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=pa(t,s)||Ea,y=qo(_)||{},(!y||!y.left&&!y.top)&&Wo(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=qo(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=os(v[0],y[r.d]),x=os(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&cs(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,cs(a,C,r,w&&C>20||!w&&(u?Math.max(Ea[h],Ta[h]):a.parentNode[h])<=C+1),u&&(c=qo(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Uo))}return f&&_&&(h=qo(_),f.seek(d),g=qo(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},Ks=/(webkit|moz|length|cssText|inset)/i,qs=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===Ea){for(a in e._stOrig=i.cssText,o=Wo(e),o)!+a&&!Ks.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;Y.core.getCache(e).uncache=1,t.appendChild(e)}},Js=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Ys=function(e,t,n){var r={};r[t.p]=`+=`+n,Y.set(e,r)},Xs=function(e,t){var n=ha(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Js(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){J.cache++,t.tween&&Fs()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=Y.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},es(e,`wheel`,n.wheelHandler),Zs.isTouch&&es(e,`touchmove`,n.wheelHandler),i},Zs=function(){function e(t,n){Sa||e.register(Y)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Ja(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ao){this.update=this.refresh=this.kill=fo;return}t=Ko(Co(t)||To(t)||t.nodeType?{trigger:t}:t,is);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?da:fa,T=!l&&l!==0,E=pa(t.scroller||Ca),D=Y.core.getCache(E),O=go(E),k=(`pinType`in t?t.pinType:ra(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:is.markers,N=O?0:parseFloat(Wo(E)[`border`+w.p2+Vo])||0,P=this,F=t.onRefreshInit&&function(){return t.onRefreshInit(P)},I=yo(E,O,w),ee=bo(E,O),L=0,te=0,R=0,ne=ha(E,w),re,z,ie,ae,oe,B,se,ce,V,H,U,le,ue,de,fe,pe,me,he,W,ge,G,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,K,De,Oe,ke,Ae,q,je,Me;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):ne,ae=ne(),P.vars=t,n||=t.animation,`refreshPriority`in t&&(Ba=1,t.refreshPriority===-9999&&(Ps=P)),D.tweenScroll=D.tweenScroll||{top:Xs(E,fa),left:Xs(E,da)},P.tweenTo=re=D.tweenScroll[w.p],P.scrubDuration=function(e){De=To(e)&&e,De?K?K.duration(e):K=Y.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:De,paused:!0,onComplete:function(){return h&&h(P)}}):(K&&K.progress(1).kill(),K=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),Te=0,o||=n.vars.id),v&&((!Eo(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in Ea.style&&Y.set(O?[Ea,Ta]:E,{scrollBehavior:`auto`}),J.forEach(function(e){return wo(e)&&e.target===(O?wa.scrollingElement||Ta:E)&&(e.smooth=!1)}),ie=wo(v.snapTo)?v.snapTo:v.snapTo===`labels`?Xo(n):v.snapTo===`labelsDirectional`?Qo(n):v.directional===!1?Y.utils.snap(v.snapTo):function(e,t){return Zo(v.snapTo)(e,no()-te<500?0:t.direction)},Oe=v.duration||{min:.1,max:2},Oe=Eo(Oe)?Aa(Oe.min,Oe.max):Aa(Oe,Oe),ke=Y.delayedCall(v.delay||De/2||.1,function(){var e=ne(),t=no()-te<500,r=re.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!Pa&&L!==e){var i=(e-B)/de,a=n&&!T?n.totalProgress():i,o=t?0:(a-Ee)/(no()-ja)*1e3||0,s=Y.utils.clamp(-i,1-i,ko(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=ie(c,P),To(l)||(l=c),u=Math.max(0,Math.round(B+l*de)),e<=se&&e>=B&&u!==e){if(r&&!r._initted&&r.data<=ko(u-e))return;v.inertia===!1&&(s=l-i),re(u,{duration:Oe(ko(Math.max(ko(c-a),ko(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:ko(u-e),onInterrupt:function(){return ke.restart(!0)&&p&&Oo(P,p)},onComplete:function(){P.update(),L=ne(),n&&!T&&(K?K.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Te=Ee=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&Oo(P,m)}},e,s*de,u-e-s*de),f&&Oo(P,f,re.tween)}}else P.isActive&&L!==e&&ke.restart(!0)}).pause()),o&&(us[o]=P),u=P.trigger=pa(u||d!==!0&&d),Me=u&&u._gsap&&u._gsap.stRevert,Me&&=Me(P),d=d===!0?u:pa(d),Co(a)&&(a={targets:u,className:a}),d&&(f===!1||f===Bo||(f=!f&&d.parentNode&&d.parentNode.style&&Wo(d.parentNode).display===`flex`?!1:zo),P.pin=d,z=Y.core.getCache(d),z.spacer?fe=z.pinState:(b&&(b=pa(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),z.spacerIsNative=!!b,b&&(z.spacerState=Hs(b))),z.spacer=he=b||wa.createElement(`div`),he.classList.add(`pin-spacer`),o&&he.classList.add(`pin-spacer-`+o),z.pinState=fe=Hs(d)),t.force3D!==!1&&Y.set(d,{force3D:!0}),P.spacer=he=z.spacer,we=Wo(d),ye=we[f+w.os2],ge=Y.getProperty(d),G=Y.quickSetter(d,w.a,Uo),zs(d,he,we),me=Hs(d)),M){le=Eo(M)?Ko(M,rs):rs,H=ss(`scroller-start`,o,E,w,le,0),U=ss(`scroller-end`,o,E,w,le,0,H),W=H[`offset`+w.op.d2];var Ne=pa(ra(E,`content`)||E);ce=this.markerStart=ss(`start`,o,Ne,w,le,W,0,x),V=this.markerEnd=ss(`end`,o,Ne,w,le,W,0,x),x&&(je=Y.quickSetter([ce,V],w.a,Uo)),!k&&!($i.length&&ra(E,`fixedMarkers`)===!0)&&(Go(O?Ea:E),Y.set([H,U],{force3D:!0}),xe=Y.quickSetter(H,w.a,Uo),Ce=Y.quickSetter(U,w.a,Uo))}if(x){var Pe=x.vars.onUpdate,Fe=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Pe&&Pe.apply(x,Fe||[])})}if(P.previous=function(){return ls[ls.indexOf(P)-1]},P.next=function(){return ls[ls.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=Na;r!==P.isReverted&&(r&&(Ae=Math.max(ne(),P.scroll.rec||0),R=P.progress,q=n&&n.progress()),ce&&[ce,V,H,U].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(Na=P,P.update(r)),d&&(!y||!P.isActive)&&(r?Rs(d,he,fe):zs(d,he,Wo(d),be)),r||P.update(r),Na=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!Na&&P.enabled||i){if(d&&r&&io){es(e,`scrollEnd`,vs);return}!Ts&&F&&F(P),Na=P,re.tween&&!a&&(re.tween.kill(),re.tween=0),K&&K.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=I(),l=ee(),m=x?x.duration():xo(E,w),h=de<=.01||!de,g=0,_=o||0,v=Eo(a)?a.end:t.end,b=t.endTrigger||u,S=Eo(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&pa(t.pinnedContainer,P),D=u&&Math.max(0,ls.indexOf(P))||0,A=D,j,z,ie,le,W,G,ye,xe,Ce,we,Te,Ee,De;for(M&&Eo(a)&&(Ee=Y.getProperty(H,w.p),De=Y.getProperty(U,w.p));A-->0;)G=ls[A],G.end||G.refresh(0,1)||(Na=P),ye=G.pin,ye&&(ye===u||ye===d||ye===C)&&!G.isReverted&&(we||=[],we.unshift(G),G.revert(!0,!0)),G!==ls[A]&&(D--,A--);for(wo(S)&&(S=S(P)),S=oo(S,`start`,P),B=Gs(S,u,s,w,ne(),ce,H,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),wo(v)&&(v=v(P)),Co(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(Co(S)?S.split(` `)[0]:``)+v:(g=os(v.substr(2),s),v=Co(S)?S:(x?Y.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,B):B)+g,b=u)),v=oo(v,`end`,P),se=Math.max(B,Gs(v||(b?`100% 0`:m),b,s,w,ne()+g,V,U,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)G=ls[A]||{},ye=G.pin,ye&&G.start-G._pinPush<=B&&!x&&G.end>0&&(j=G.end-(P._startClamp?Math.max(0,G.start):G.start),(ye===u&&G.start-G._pinPush<B||ye===C)&&isNaN(S)&&(g+=j*(1-G.progress)),ye===d&&(_+=j));if(B+=g,se+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!Ts&&(P._endClamp=se||-.001,se=Math.min(se,xo(E,w))),de=se-B||(B-=.01)&&.001,h&&(R=Y.utils.clamp(0,1,Y.utils.normalize(B,se,Ae))),P._pinPush=_,ce&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+ne()),Y.set([ce,V],j)),d&&!($a&&P.end>=xo(E,w)))j=Wo(d),le=w===fa,ie=ne(),_e=parseFloat(ge(w.a))+_,!m&&se>1&&(Te=(O?wa.scrollingElement||Ta:E).style,Te={style:Te,value:Te[`overflow`+w.a.toUpperCase()]},O&&Wo(Ea)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Te.style[`overflow`+w.a.toUpperCase()]=`scroll`)),zs(d,he,j),me=Hs(d),z=qo(d,!0),xe=k&&ha(E,le?da:fa)(),f?(be=[f+w.os2,de+_+Uo],be.t=he,A=f===zo?Jo(d,w)+de+_:0,A&&(be.push(w.d,A+Uo),he.style.flexBasis!==`auto`&&(he.style.flexBasis=A+Uo)),Vs(be),C&&ls.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&ne(Ae)):(A=Jo(d,w),A&&he.style.flexBasis!==`auto`&&(he.style.flexBasis=A+Uo)),k&&(W={top:z.top+(le?ie-B:xe)+Uo,left:z.left+(le?xe:ie-B)+Uo,boxSizing:`border-box`,position:`fixed`},W[X]=W[`max`+Vo]=Math.ceil(z.width)+Uo,W[Po]=W[`max`+Ho]=Math.ceil(z.height)+Uo,W[Bo]=W[Bo+Lo]=W[Bo+Fo]=W[Bo+Ro]=W[Bo+Io]=`0`,W[zo]=j[zo],W[zo+Lo]=j[zo+Lo],W[zo+Fo]=j[zo+Fo],W[zo+Ro]=j[zo+Ro],W[zo+Io]=j[zo+Io],pe=Us(fe,W,y),Ts&&ne(0)),n?(Ce=n._initted,Va(1),n.render(n.duration(),!0,!0),ve=ge(w.a)-_e+de+_,Se=Math.abs(de-ve)>1,k&&Se&&pe.splice(pe.length-2,2),n.render(0,!0,!0),Ce||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Va(0)):ve=de,Te&&(Te.value?Te.style[`overflow`+w.a.toUpperCase()]=Te.value:Te.style.removeProperty(`overflow-`+w.a));else if(u&&ne()&&!x)for(z=u.parentNode;z&&z!==Ea;)z._pinOffset&&(B-=z._pinOffset,se-=z._pinOffset),z=z.parentNode;we&&we.forEach(function(e){return e.revert(!1,!0)}),P.start=B,P.end=se,ae=oe=Ts?Ae:ne(),!x&&!Ts&&(ae<Ae&&ne(Ae),P.scroll.rec=0),P.revert(!1,!0),te=no(),ke&&(L=-1,ke.restart(!0)),Na=0,n&&T&&(n._initted||q)&&n.progress()!==q&&n.progress(q||0,!0).render(n.time(),!0,!0),(h||R!==P.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||R||n.vars.immediateRender!==!1)&&n.totalProgress(x&&B<-.001&&!R?Y.utils.normalize(B,se,0):R,!0),P.progress=h||(ae-B)/de===R?0:R),d&&f&&(he._pinOffset=Math.round(P.progress*ve)),K&&K.invalidate(),isNaN(Ee)||(Ee-=Y.getProperty(H,w.p),De-=Y.getProperty(U,w.p),Ys(H,w,Ee),Ys(ce,w,Ee-(o||0)),Ys(U,w,De),Ys(V,w,De-(o||0))),h&&!Ts&&P.update(),c&&!Ts&&!ue&&(ue=!0,c(P),ue=!1)}},P.getVelocity=function(){return(ne()-oe)/(no()-ja)*1e3||0},P.endAnimation=function(){Do(P.callbackAnimation),n&&(K?K.progress(1):n.paused()?T||Do(n,P.direction<0,1):Do(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(B||P.refresh()||B)+n.labels[e]/n.duration()*de||0},P.getTrailing=function(e){var t=ls.indexOf(P),n=P.direction>0?ls.slice(0,t).reverse():ls.slice(t+1);return(Co(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=B:e.start>=se})},P.update=function(e,t,r){if(!x||r||e){var o=Ts===!0?Ae:P.scroll(),c=e?0:(o-B)/de,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,F;if(t&&(oe=ae,ae=x?ne():o,v&&(Ee=Te,Te=n&&!T?n.totalProgress():u)),m&&d&&!Na&&!to&&io&&(!u&&B<o+(o-oe)/(no()-ja)*m?u=1e-4:u===1&&se>o+(o-oe)/(no()-ja)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!Na&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],F=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||F)&&(F||l||!n)&&(wo(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(K&&!Na&&!to?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo(`totalProgress`,u,n._tTime/n._tDur):(K.vars.totalProgress=u,K.invalidate().restart())):n&&n.totalProgress(u,!!(Na&&(te||e)))),d){if(e&&f&&(he.style[f+w.os2]=ye),!k)G(po(_e+ve*u));else if(O){if(N=!e&&u>p&&se+1>o&&o+1>=xo(E,w),y){if(!e&&(h||N)){var I=qo(d,!0),ee=o-B;qs(d,Ea,I.top+(w===fa?ee:0)+Uo,I.left+(w===fa?0:ee)+Uo)}else qs(d,he)}Vs(h||N?pe:me),Se&&u<1&&h||G(_e+(u===1&&!N?ve:0))}}v&&!re.tween&&!Na&&!to&&ke.restart(!0),a&&(M||_&&u&&(u<1||!eo))&&ka(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!Na?(T&&(F&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!eo)&&(s&&M&&Oo(P,s),A[b]&&Oo(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&Oo(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(To(S)?S:2500)&&(Do(P.callbackAnimation),K?K.progress(1):Do(n,D===`reverse`?1:!u,1))):T&&i&&!Na&&i(P)}if(Ce){var L=x?o/x.duration()*(x._caScrollDist||0):o;xe(L+ +!!H._isFlipped),Ce(L)}je&&je(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,es(E,`resize`,hs),O||es(E,`scroll`,ps),F&&es(e,`refreshInit`,F),t!==!1&&(P.progress=R=0,ae=oe=L=ne()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&re?re.tween:K},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:so(e,n&&!!P._startClamp),end:so(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(be&&e){var t=be.indexOf(w.d)+1;be[t]=parseFloat(be[t])+e+Uo,be[1]=parseFloat(be[1])+e+Uo,Vs(be)}},P.disable=function(t,n){if(t!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,n||K&&K.pause(),Ae=0,z&&(z.uncache=1),F&&ts(e,`refreshInit`,F),ke&&(ke.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!O)){for(var r=ls.length;r--;)if(ls[r].scroller===E&&ls[r]!==P)return;ts(E,`resize`,hs),O||ts(E,`scroll`,ps)}},P.kill=function(e,r){P.disable(e,r),K&&!r&&K.kill(),o&&delete us[o];var i=ls.indexOf(P);i>=0&&ls.splice(i,1),i===Ia&&Ns>0&&Ia--,i=0,ls.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||Ts||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),ce&&[ce,V,H,U].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),Ps===P&&(Ps=0),d&&(z&&(z.uncache=1),i=0,ls.forEach(function(e){return e.pin===d&&i++}),i||(z.spacer=0)),t.onKill&&t.onKill(P)},ls.push(P),P.enable(!1,!1),Me&&Me(P),n&&n.add&&!de){var Ie=P.update;P.update=function(){P.update=Ie,J.cache++,B||se||P.refresh()},Y.delayedCall(.01,P.update),de=.01,B=se=0}else P.refresh();d&&Os()},e.register=function(t){return Sa||=(Y=t||ho(),mo()&&window.document&&e.enable(),ao),Sa},e.defaults=function(e){if(e)for(var t in e)is[t]=e[t];return is},e.disable=function(e,t){ao=0,ls.forEach(function(n){return n[t?`kill`:`disable`](e)}),ts(Ca,`wheel`,ps),ts(wa,`scroll`,ps),clearInterval(Ma),ts(wa,`touchcancel`,fo),ts(Ea,`touchstart`,fo),$o(ts,wa,`pointerdown,touchstart,mousedown`,lo),$o(ts,wa,`pointerup,touchend,mouseup`,uo),Oa.kill(),So(ts);for(var n=0;n<J.length;n+=3)ns(ts,J[n],J[n+1]),ns(ts,J[n],J[n+2])},e.enable=function(){if(Ca=window,wa=document,Ta=wa.documentElement,Ea=wa.body,Y){if(ka=Y.utils.toArray,Aa=Y.utils.clamp,Ja=Y.core.context||fo,Va=Y.core.suppressOverwrites||fo,Ya=Ca.history.scrollRestoration||`auto`,Ms=Ca.pageYOffset||0,Y.core.globals(`ScrollTrigger`,e),Ea){ao=1,Xa=document.createElement(`div`),Xa.style.height=`100vh`,Xa.style.position=`absolute`,ks(),co(),xa.register(Y),e.isTouch=xa.isTouch,qa=xa.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wa=xa.isTouch===1,es(Ca,`wheel`,ps),Da=[Ca,wa,Ta,Ea],Y.matchMedia?(e.matchMedia=function(e){var t=Y.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},Y.addEventListener(`matchMediaInit`,function(){Ss(),Cs()}),Y.addEventListener(`matchMediaRevert`,function(){return xs()}),Y.addEventListener(`matchMedia`,function(){js(0,1),ys(`matchMedia`)}),Y.matchMedia().add(`(orientation: portrait)`,function(){return ms(),ms})):console.warn(`Requires GSAP 3.11.0 or later`),ms(),es(wa,`scroll`,ps);var t=Ea.hasAttribute(`style`),n=Ea.style,r=n.borderTopStyle,i=Y.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=qo(Ea),fa.m=Math.round(a.top+fa.sc())||0,da.m=Math.round(a.left+da.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(Ea.setAttribute(`style`,``),Ea.removeAttribute(`style`)),Ma=setInterval(fs,250),Y.delayedCall(.5,function(){return to=0}),es(wa,`touchcancel`,fo),es(Ea,`touchstart`,fo),$o(es,wa,`pointerdown,touchstart,mousedown`,lo),$o(es,wa,`pointerup,touchend,mouseup`,uo),Fa=Y.utils.checkPrefix(`transform`),Ls.push(Fa),Sa=no(),Oa=Y.delayedCall(.2,js).pause(),za=[wa,`visibilitychange`,function(){var e=Ca.innerWidth,t=Ca.innerHeight;wa.hidden?(La=e,Ra=t):(La!==e||Ra!==t)&&hs()},wa,`DOMContentLoaded`,js,Ca,`load`,js,Ca,`resize`,hs],So(es),ls.forEach(function(e){return e.enable(0,1)}),o=0;o<J.length;o+=3)ns(ts,J[o],J[o+1]),ns(ts,J[o],J[o+2])}else wa&&wa.addEventListener(`DOMContentLoaded`,function t(){e.enable(),wa.removeEventListener(`DOMContentLoaded`,t)})}},e.config=function(t){`limitCallbacks`in t&&(eo=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(Ma)||(Ma=n)&&setInterval(fs,n),`ignoreMobileResize`in t&&(Wa=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(So(ts)||So(es,t.autoRefreshEvents||`none`),Ha=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=pa(e),r=J.indexOf(n),i=go(n);~r&&J.splice(r,i?6:2),t&&(i?$i.unshift(Ca,t,Ea,t,Ta,t):$i.unshift(n,t))},e.clearMatchMedia=function(e){ls.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(Co(e)?pa(e):e).getBoundingClientRect(),i=r[n?X:Po]*t||0;return n?r.right-i>0&&r.left+i<Ca.innerWidth:r.bottom-i>0&&r.top+i<Ca.innerHeight},e.positionInViewport=function(e,t,n){Co(e)&&(e=pa(e));var r=e.getBoundingClientRect(),i=r[n?X:Po],a=t==null?i/2:t in as?as[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/Ca.innerWidth:(r.top+a)/Ca.innerHeight},e.killAll=function(e){if(ls.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=gs.killAll||[];gs={},t.forEach(function(e){return e()})}},e}();Zs.version=`3.15.0`,Zs.saveStyles=function(e){return e?ka(e).forEach(function(e){if(e&&e.style){var t=bs.indexOf(e);t>=0&&bs.splice(t,5),bs.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Y.core.getCache(e),Ja())}}):bs},Zs.revert=function(e,t){return Cs(!e,t)},Zs.create=function(e,t){return new Zs(e,t)},Zs.refresh=function(e){return e?hs(!0):(Sa||Zs.register())&&js(!0)},Zs.update=function(e){return++J.cache&&Fs(e===!0?2:0)},Zs.clearScrollMemory=ws,Zs.maxScroll=function(e,t){return xo(e,t?da:fa)},Zs.getScrollFunc=function(e,t){return ha(pa(e),t?da:fa)},Zs.getById=function(e){return us[e]},Zs.getAll=function(){return ls.filter(function(e){return e.vars.id!==`ScrollSmoother`})},Zs.isScrolling=function(){return!!io},Zs.snapDirectional=Zo,Zs.addEventListener=function(e,t){var n=gs[e]||(gs[e]=[]);~n.indexOf(t)||n.push(t)},Zs.removeEventListener=function(e,t){var n=gs[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},Zs.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=Y.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&wo(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return wo(a)&&(a=a(),es(Zs,`refresh`,function(){return a=t.batchMax()})),ka(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push(Zs.create(t))}),n};var Qs=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},$s=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(xa.isTouch?` pinch-zoom`:``):`none`,t===Ta&&e(Ea,n)},ec={auto:1,scroll:1},tc=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||Y.core.getCache(i),o=no(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==Ea&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(ec[(s=Wo(i)).overflowY]||ec[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!go(i)&&(ec[(s=Wo(i)).overflowY]||ec[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},nc=function(e,t,n,r){return xa.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=tc,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&es(wa,xa.eventTypes[0],ac,!1,!0)},onDisable:function(){return ts(wa,xa.eventTypes[0],ac,!0)}})},rc=/(input|label|select|textarea)/i,ic,ac=function(e){var t=rc.test(e.target.tagName);(t||ic)&&(e._gsapAllow=!0,ic=t)},oc=function(e){Eo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=pa(e.target)||Ta,l=Y.core.globals().ScrollSmoother,u=l&&l.get(),d=qa&&(e.content&&pa(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=ha(c,fa),p=ha(c,da),m=1,h=(xa.isTouch&&Ca.visualViewport?Ca.visualViewport.scale*Ca.visualViewport.width:Ca.outerWidth)/Ca.innerWidth,g=0,_=wo(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=nc(c,e.type,!0,i),x=function(){return y=!1},S=fo,C=fo,w=function(){s=xo(c,fa),C=Aa(+!!qa,s),n&&(S=Aa(0,xo(c,da))),v=Es},T=function(){d._gsap.y=po(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=po(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=po((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=J.cache,Fs()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&Y.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return qa&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=po((Ca.visualViewport&&Ca.visualViewport.scale||1)/h),D.pause(),e!==m&&$s(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=Es},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{J.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Qs(p,i,o,xo(c,da)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Qs(f,i,o,xo(c,fa)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(qa&&D.vars.scrollY>=s||i>=s-1)&&Y.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),no()-g>1e3&&(v=0,g=no())},e.onChange=function(e,t,r,i,a){if(Es!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&Fs()},e.onEnable=function(){$s(c,!n&&`x`),Zs.addEventListener(`refresh`,j),es(Ca,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){$s(c,!0),ts(Ca,`resize`,j),Zs.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new xa(e),o.iOS=qa,qa&&!f()&&f(1),qa&&Y.ticker.add(fo),A=o._dc,D=Y.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Js(f,f(),function(){return D.pause()})},onUpdate:Fs,onComplete:A.vars.onComplete}),o};Zs.sort=function(e){if(wo(e))return ls.sort(e);var t=Ca.pageYOffset||0;return Zs.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Ca.innerHeight}),ls.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},Zs.observe=function(e){return new xa(e)},Zs.normalizeScroll=function(e){if(e===void 0)return Ua;if(e===!0&&Ua)return Ua.enable();if(e===!1){Ua&&Ua.kill(),Ua=e;return}var t=e instanceof xa?e:oc(e);return Ua&&Ua.target===t.target&&Ua.kill(),go(t.target)&&(Ua=t),t},Zs.core={_getVelocityProp:ga,_inputObserver:nc,_scrollers:J,_proxies:$i,bridge:{ss:function(){io||ys(`scrollStart`),io=no()},ref:function(){return Na}}},ho()&&Y.registerPlugin(Zs);function sc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cc(e,t,n){return t&&sc(e.prototype,t),n&&sc(e,n),e}var lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc=function(){return typeof window<`u`},Tc=function(){return lc||wc()&&(lc=window.gsap)&&lc.registerPlugin&&lc},Ec=function(e){return Math.round(e*1e5)/1e5||0},Dc=function(e){return _c.maxScroll(e||dc)},Oc=function(e,t){var n=e.parentNode||pc,r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=i.top-r.top,o=i.bottom-r.bottom,s=(Math.abs(a)>Math.abs(o)?a:o)/(1-t),c=-s*t,l,u;return s>0&&(l=i.height/(dc.innerHeight+i.height),u=l===.5?i.height*2:Math.min(i.height,Math.abs(-s*l/(2*l-1)))*2*(t||1),c+=t?-u*t:-u/2,s+=u),{change:s,offset:c}},kc=function(e){var t=fc.querySelector(`.ScrollSmoother-wrapper`);return t||(t=fc.createElement(`div`),t.classList.add(`ScrollSmoother-wrapper`),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},Ac=function(){function e(t){var n=this;uc||e.register(lc)||console.warn(`Please gsap.registerPlugin(ScrollSmoother)`),t=this.vars=t||{},vc&&vc.kill(),vc=this,Sc(this);var r=t,i=r.smoothTouch,a=r.onUpdate,o=r.onStop,s=r.smooth,c=r.onFocusIn,l=r.normalizeScroll,u=r.wholePixels,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=this,E=t.effectsPrefix||``,D=_c.getScrollFunc(dc),O=_c.isTouch===1?i===!0?.8:parseFloat(i)||0:s===0||s===!1?0:parseFloat(s)||.8,k=O&&+t.speed||1,A=0,j=0,M=1,N=bc(0),P=function(){return N.update(-A)},F={y:0},I=function(){return d.style.overflow=`visible`},ee,L=function(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),ee=!1,e.animation.progress(e.progress,!0)},te=function(t,n){(t!==A&&!b||n)&&(u&&(t=Math.round(t)),O&&(d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+t+`, 0, 1)`,d._gsap.y=t+`px`),j=t-A,A=t,_c.isUpdating||e.isRefreshing||_c.update())},R=function(e){return arguments.length?(e<0&&(e=0),F.y=-e,ee=!0,b?A=-e:te(-e),_c.isRefreshing?m.update():D(e/k),this):-A},ne=typeof ResizeObserver<`u`&&t.autoResize!==!1&&new ResizeObserver(function(){if(!_c.isRefreshing){var e=Dc(f)*k;e<-A&&R(e),Cc.restart(!0)}}),re,z=function(e){f.scrollTop=0,!(e.target.contains&&e.target.contains(f)||c&&c(n,e)===!1)&&(_c.isInViewport(e.target)||e.target===re||n.scrollTo(e.target,!1,`center center`),re=e.target)},ie=function(e,t){if(e<t.start)return e;var n=isNaN(t.ratio)?1:t.ratio,r=t.end-t.start,i=e-t.start,a=t.offset||0,o=t.pins||[],s=o.offset||0,c=t._startClamp&&t.start<=0||t.pins&&t.pins.offset?0:t._endClamp&&t.end===Dc()?1:.5;return o.forEach(function(t){r-=t.distance,t.nativeStart<=e&&(i-=t.distance)}),s&&(i*=(r-s/n)/r),e+(i-a*c)/n-i},ae=function e(t,n,r){r||(t.pins.length=t.pins.offset=0);for(var i=t.pins,a=t.markers,o,s,c,l,u,d,f=0,p;f<n.length;f++)if(p=n[f],t.trigger&&p.trigger&&t!==p&&(p.trigger===t.trigger||p.pinnedContainer===t.trigger||t.trigger.contains(p.trigger))&&(u=p._startNative||p._startClamp||p.start,d=p._endNative||p._endClamp||p.end,c=ie(u,t),l=p.pin&&d>0?c+(d-u):ie(d,t),p.setPositions(c,l,!0,(p._startClamp?Math.max(0,c):c)-u),p.markerStart&&a.push(lc.quickSetter([p.markerStart,p.markerEnd],`y`,`px`)),p.pin&&p.end>0&&!r)){if(o=p.end-p.start,s=t._startClamp&&p.start<0,s){if(t.start>0){t.setPositions(0,t.end+(t._startNative-t.start),!0),e(t,n);return}o+=p.start,i.offset=-p.start}i.push({start:p.start,nativeStart:u,end:p.end,distance:o,trig:p}),t.setPositions(t.start,t.end+(s?-p.start:o),!0)}},oe=function(e,t){h.forEach(function(n){return ae(n,e,t)})},B=function(){pc=fc.documentElement,mc=fc.body,I(),requestAnimationFrame(I),h&&(_c.getAll().forEach(function(e){e._startNative=e.start,e._endNative=e.end}),h.forEach(function(e){var t=e._startClamp||e.start,n=e.autoSpeed?Math.min(Dc(),e.end):t+Math.abs((e.end-t)/e.ratio),r=n-e.end;if(t-=r/2,n-=r/2,t>n){var i=t;t=n,n=i}e._startClamp&&t<0?(n=e.ratio<0?Dc():e.end/e.ratio,r=n-e.end,t=0):(e.ratio<0||e._endClamp&&n>=Dc())&&(n=Dc(),t=e.ratio<0||e.ratio>1?0:n-(n-e.start)/e.ratio,r=(n-t)*e.ratio-(e.end-e.start)),e.offset=r||1e-4,e.pins.length=e.pins.offset=0,e.setPositions(t,n,!0)}),oe(_c.sort())),N.reset()},se=function(){return _c.addEventListener(`refresh`,B)},ce=function(){return h&&h.forEach(function(e){return e.vars.onRefresh(e)})},V=function(){return h&&h.forEach(function(e){return e.vars.onRefreshInit(e)}),ce},H=function(e,t,n,r){return function(){var i=typeof t==`function`?t(n,r):t;i||i===0||(i=r.getAttribute(`data-`+E+e)||+(e===`speed`)),r.setAttribute(`data-`+E+e,i);var a=(i+``).substr(0,6)===`clamp(`;return{clamp:a,value:a?i.substr(6,i.length-7):i}}},U=function(e,t,n,r,i){i=(typeof i==`function`?i(r,e):i)||0;var a=H(`speed`,t,r,e),o=H(`lag`,n,r,e),s=lc.getProperty(e,`y`),c=e._gsap,l,u,d,p,m,g,_=[],v=function(){t=a(),n=parseFloat(o().value),l=parseFloat(t.value)||1,d=t.value===`auto`,m=d||u&&u._startClamp&&u.start<=0||_.offset?0:u&&u._endClamp&&u.end===Dc()?1:.5,p&&p.kill(),p=n&&lc.to(e,{ease:yc,overwrite:!1,y:`+=0`,duration:n}),u&&(u.ratio=l,u.autoSpeed=d)},y=function(){c.y=s+`px`,c.renderTransform(1),v()},b=[],x=0,S=function(t){if(d){y();var n=Oc(e,gc(0,1,-t.start/(t.end-t.start)));x=n.change,g=n.offset}else g=_.offset||0,x=(t.end-t.start-g)*(1-l);_.forEach(function(e){return x-=e.distance*(1-l)}),t.offset=x||.001,t.vars.onUpdate(t),p&&p.progress(1)};return v(),(l!==1||d||p)&&(u=_c.create({trigger:d?e.parentNode:e,start:function(){return t.clamp?`clamp(top bottom+=`+i+`)`:`top bottom+=`+i},end:function(){return t.value<0?`max`:t.clamp?`clamp(bottom top-=`+i+`)`:`bottom top-=`+i},scroller:f,scrub:!0,refreshPriority:-999,onRefreshInit:y,onRefresh:S,onKill:function(e){var t=h.indexOf(e);t>=0&&h.splice(t,1),y()},onUpdate:function(e){var t=s+x*(e.progress-m),n=_.length,r=0,i,a,o;if(e.offset){if(n){for(a=-A,o=e.end;n--;){if(i=_[n],i.trig.isActive||a>=i.start&&a<=i.end){p&&(i.trig.progress+=i.trig.direction<0?.001:-.001,i.trig.update(0,0,1),p.resetTo(`y`,parseFloat(c.y),-j,!0),M&&p.progress(1));return}a>i.end&&(r+=i.distance),o-=i.distance}t=s+r+x*((lc.utils.clamp(e.start,e.end,a)-e.start-r)/(o-e.start)-m)}b.length&&!d&&b.forEach(function(e){return e(t-r)}),t=Ec(t+g),p?(p.resetTo(`y`,t,-j,!0),M&&p.progress(1)):(c.y=t+`px`,c.renderTransform(1))}}}),S(u),lc.core.getCache(u.trigger).stRevert=V,u.startY=s,u.pins=_,u.markers=b,u.ratio=l,u.autoSpeed=d,e.style.willChange=`transform`),u};se(),_c.addEventListener(`killAll`,se),lc.delayedCall(.5,function(){return M=0}),this.scrollTop=R,this.scrollTo=function(e,t,r){var i=lc.utils.clamp(0,Dc(),isNaN(e)?n.offset(e,r,!!t&&!b):+e);t?b?lc.to(n,{duration:O,scrollTop:i,overwrite:`auto`,ease:yc}):D(i):R(i)},this.offset=function(e,t,n){e=hc(e)[0];var r=e.style.cssText,i=_c.create({trigger:e,start:t||`top top`}),a;return h&&(M?_c.refresh():oe([i],!0)),a=i.start/(n?k:1),i.kill(!1),e.style.cssText=r,lc.core.getCache(e).uncache=1,a};function le(){return p=d.clientHeight,d.style.overflow=`visible`,mc.style.height=dc.innerHeight+(p-dc.innerHeight)/k+`px`,p-dc.innerHeight}this.content=function(e){if(arguments.length){var t=hc(e||`#smooth-content`)[0]||console.warn(`ScrollSmoother needs a valid content element.`)||mc.children[0];return t!==d&&(d=t,y=d.getAttribute(`style`)||``,ne&&ne.observe(d),lc.set(d,{overflow:`visible`,width:`100%`,boxSizing:`border-box`,y:`+=0`}),O||lc.set(d,{clearProps:`transform`})),this}return d},this.wrapper=function(e){return arguments.length?(f=hc(e||`#smooth-wrapper`)[0]||kc(d),v=f.getAttribute(`style`)||``,le(),lc.set(f,O?{overflow:`hidden`,position:`fixed`,height:`100%`,width:`100%`,top:0,left:0,right:0,bottom:0}:{overflow:`visible`,position:`relative`,width:`100%`,height:`auto`,top:`auto`,bottom:`auto`,left:`auto`,right:`auto`}),this):f},this.effects=function(e,t){var n;if(h||=[],!e)return h.slice(0);e=hc(e),e.forEach(function(e){for(var t=h.length;t--;)h[t].trigger===e&&h[t].kill()}),t||={};for(var r=t,i=r.speed,a=r.lag,o=r.effectsPadding,s=[],c=0,l;c<e.length;c++)l=U(e[c],i,a,c,o),l&&s.push(l);return(n=h).push.apply(n,s),t.refresh!==!1&&_c.refresh(),s},this.sections=function(e,t){var n;if(g||=[],!e)return g.slice(0);var r=hc(e).map(function(e){return _c.create({trigger:e,start:`top 120%`,end:`bottom -20%`,onToggle:function(t){e.style.opacity=t.isActive?`1`:`0`,e.style.pointerEvents=t.isActive?`all`:`none`}})});return t&&t.add?(n=g).push.apply(n,r):g=r.slice(0),r},this.content(t.content),this.wrapper(t.wrapper),this.render=function(e){return te(e||e===0?e:A)},this.getVelocity=function(){return N.getVelocity(-A)},_c.scrollerProxy(f,{scrollTop:R,scrollHeight:function(){return le()&&mc.scrollHeight},fixedMarkers:t.fixedMarkers!==!1&&!!O,content:d,getBoundingClientRect:function(){return{top:0,left:0,width:dc.innerWidth,height:dc.innerHeight}}}),_c.defaults({scroller:f});var ue=_c.getAll().filter(function(e){return e.scroller===dc||e.scroller===f});ue.forEach(function(e){return e.revert(!0,!0)}),m=_c.create({animation:lc.fromTo(F,{y:function(){return w=0,0}},{y:function(){return w=1,-le()},immediateRender:!1,ease:`none`,data:`ScrollSmoother`,duration:100,onUpdate:function(){if(w){var e=ee;e&&(L(m),F.y=A),te(F.y,e),P(),a&&!b&&a(T)}}}),onRefreshInit:function(t){if(!e.isRefreshing){if(e.isRefreshing=!0,h){var n=_c.getAll().filter(function(e){return!!e.pin});h.forEach(function(e){e.vars.pinnedContainer||n.forEach(function(t){if(t.pin.contains(e.trigger)){var n=e.vars;n.pinnedContainer=t.pin,e.vars=null,e.init(n,e.animation)}})})}var r=t.getTween();C=r&&r._end>r._dp._time,S=A,F.y=0,O&&(_c.isTouch===1&&(f.style.position=`absolute`),f.scrollTop=0,_c.isTouch===1&&(f.style.position=`fixed`))}},onRefresh:function(t){t.animation.invalidate(),F.y=0,t.setPositions(t.start,le()/k),C||L(t),F.y=-D()*k,te(F.y),M||(C&&(ee=!1),t.animation.progress(lc.utils.clamp(0,1,S/k/-t.end))),C&&(t.progress-=.001,t.update()),e.isRefreshing=!1},id:`ScrollSmoother`,scroller:dc,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return le()/k},onScrubComplete:function(){N.reset(),o&&o(n)},scrub:O||!0}),this.smooth=function(e){return arguments.length&&(O=e||0,k=O&&+t.speed||1,m.scrubDuration(e)),m.getTween()?m.getTween().duration():0},m.getTween()&&(m.getTween().vars.ease=t.ease||yc),this.scrollTrigger=m,t.effects&&this.effects(t.effects===!0?`[data-`+E+`speed], [data-`+E+`lag]`:t.effects,{effectsPadding:t.effectsPadding,refresh:!1}),t.sections&&this.sections(t.sections===!0?`[data-section]`:t.sections),ue.forEach(function(e){e.vars.scroller=f,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!b!==e&&(e?(m.getTween()&&m.getTween().pause(),D(-A/k),N.reset(),x=_c.normalizeScroll(),x&&x.disable(),b=_c.observe({preventDefault:!0,type:`wheel,touch,scroll`,debounce:!1,allowClicks:!0,onChangeY:function(){return R(-A)}}),b.nested=xc(pc,`wheel,touch,scroll`,!0,t!==!1)):(b.nested.kill(),b.kill(),b=0,x&&x.enable(),m.progress=(-A/k-m.start)/(m.end-m.start),L(m))),this):!!b},this.kill=this.revert=function(){n.paused(!1),L(m),m.kill();for(var e=(h||[]).concat(g||[]),t=e.length;t--;)e[t].kill();_c.scrollerProxy(f),_c.removeEventListener(`killAll`,se),_c.removeEventListener(`refresh`,B),f.style.cssText=v,d.style.cssText=y;var r=_c.defaults({});r&&r.scroller===f&&_c.defaults({scroller:dc}),n.normalizer&&_c.normalizeScroll(!1),clearInterval(_),vc=null,ne&&ne.disconnect(),mc.style.removeProperty(`height`),dc.removeEventListener(`focusin`,z)},this.refresh=function(e,t){return m.refresh(e,t)},l&&(this.normalizer=_c.normalizeScroll(l===!0?{debounce:!0,content:!O&&d}:l)),_c.config(t),`scrollBehavior`in dc.getComputedStyle(mc)&&lc.set([mc,pc],{scrollBehavior:`auto`}),dc.addEventListener(`focusin`,z),_=setInterval(P,250),fc.readyState===`loading`||requestAnimationFrame(function(){return _c.refresh()})}return e.register=function(t){return uc||(lc=t||Tc(),wc()&&window.document&&(dc=window,fc=document,pc=fc.documentElement,mc=fc.body),lc&&(hc=lc.utils.toArray,gc=lc.utils.clamp,yc=lc.parseEase(`expo`),Sc=lc.core.context||function(){},_c=lc.core.globals().ScrollTrigger,lc.core.globals(`ScrollSmoother`,e),mc&&_c&&(Cc=lc.delayedCall(.2,function(){return _c.isRefreshing||vc&&vc.refresh()}).pause(),bc=_c.core._getVelocityProp,xc=_c.core._inputObserver,e.refresh=_c.refresh,uc=1))),uc},cc(e,[{key:`progress`,get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),e}();Ac.version=`3.15.0`,Ac.create=function(e){return vc&&e&&vc.content()===hc(e.content)[0]?vc:new Ac(e)},Ac.get=function(){return vc},Tc()&&lc.registerPlugin(Ac);var jc=`modulepreload`,Mc=function(e){return`/`+e},Nc={},Pc=function(e){return e.pathname.endsWith(`.css`)},Fc=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Mc(t,n);let r=s(t);if(r.href in Nc)return;Nc[r.href]=!0;let i=Pc(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:jc,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ic=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Lc=/^[\\/]{2}/;function Rc(e,t){return t+e.replace(/\\/g,`/`)}var zc=`popstate`;function Bc(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function Vc(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return Kc(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:qc(t)}return Yc(t,n,null,e)}function Hc(e,t){if(e===!1||e==null)throw Error(t)}function Uc(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function Wc(){return Math.random().toString(36).substring(2,10)}function Gc(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Kc(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?Jc(t):t,state:n,key:t&&t.key||r||Wc(),mask:i}}function qc({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function Jc(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Yc(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=Bc(e)?e:Kc(h.location,e,t);n&&n(r,e),l=u()+1;let d=Gc(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=Bc(e)?e:Kc(h.location,e,t);n&&n(r,e),l=u();let i=Gc(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return Xc(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(zc,d),c=e,()=>{i.removeEventListener(zc,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function Xc(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),Hc(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:qc(t);return i=i.replace(/ $/,`%20`),!n&&Lc.test(i)&&(i=r+i),new URL(i,r)}function Zc(e,t,n=`/`){return Qc(e,t,n,!1)}function Qc(e,t,n,r,i){let a=_l((typeof t==`string`?Jc(t):t).pathname||`/`,n);if(a==null)return null;let o=i??$c(e),s=null,c=gl(a);for(let e=0;s==null&&e<o.length;++e)s=fl(o[e],c,r);return s}function $c(e){let t=el(e);return nl(t),t}function el(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;Hc(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Tl([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(Hc(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),el(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:ul(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=hl(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of tl(e.path))a(e,t,!0,n)}),t}function tl(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=tl(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function nl(e){e.sort((e,t)=>e.score===t.score?dl(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var rl=/^:[\w-]+$/,il=3,al=2,ol=1,sl=10,cl=-2,ll=e=>e===`*`;function ul(e,t){let n=e.split(`/`),r=n.length;return n.some(ll)&&(r+=cl),t&&(r+=al),n.filter(e=>!ll(e)).reduce((e,t)=>e+(rl.test(t)?il:t===``?ol:sl),r)}function dl(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function fl(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ml(u,l,s.matcher,s.compiledParams):pl(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=pl({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Tl([a,d.pathname]),pathnameBase:Dl(Tl([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Tl([a,d.pathnameBase]))}return o}function pl(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=hl(e.path,e.caseSensitive,e.end);return ml(e,t,n,r)}function ml(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=El(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=El(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function hl(e,t=!1,n=!0){Uc(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function gl(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return Uc(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _l(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function vl(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?Jc(e):e,a;return n?(n=wl(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?yl(n.substring(1),`/`):yl(n,t)):a=t,{pathname:a,search:Ol(r),hash:kl(i)}}function yl(e,t){let n=El(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function bl(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xl(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Sl(e){let t=xl(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Cl(e,t,n,r=!1){let i;typeof e==`string`?i=Jc(e):(i={...e},Hc(!i.pathname||!i.pathname.includes(`?`),bl(`?`,`pathname`,`search`,i)),Hc(!i.pathname||!i.pathname.includes(`#`),bl(`#`,`pathname`,`hash`,i)),Hc(!i.search||!i.search.includes(`#`),bl(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=vl(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var wl=e=>e.replace(/[\\/]{2,}/g,`/`),Tl=e=>wl(e.join(`/`));function El(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Dl=e=>El(e).replace(/^\/*/,`/`),Ol=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,kl=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Al=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function jl(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ml(e){return Tl(e.map(e=>e.route.path).filter(Boolean))||`/`}var Nl=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Pl(e,t){let n=e;if(typeof n!=`string`||!Ic.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Nl)try{let e=new URL(window.location.href),r=Lc.test(n)?new URL(Rc(n,e.protocol)):new URL(n),a=_l(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{Uc(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Fl=new URL(`http://localhost`);function Il(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),Fl)}catch{return Fl}}function Ll(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Rl(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function zl(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Ll(i,n),s=!Ll(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Rl(e,i)||!Ll(i,a)))throw Error(`External navigation is not allowed`)}var Bl=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Bl);var Vl=[`GET`,...Bl];new Set(Vl);var Hl=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ul(e){try{return Hl.includes(new URL(e).protocol)}catch{return!1}}var Wl=_.createContext(null);Wl.displayName=`DataRouter`;var Gl=_.createContext(null);Gl.displayName=`DataRouterState`;var Kl=_.createContext(!1);function ql(){return _.useContext(Kl)}var Jl=_.createContext({isTransitioning:!1});Jl.displayName=`ViewTransition`;var Yl=_.createContext(new Map);Yl.displayName=`Fetchers`;var Xl=_.createContext(null);Xl.displayName=`Await`;var Zl=_.createContext(null);Zl.displayName=`Navigation`;var Ql=_.createContext(null);Ql.displayName=`Location`;var $l=_.createContext({outlet:null,matches:[],isDataRoute:!1});$l.displayName=`Route`;var eu=_.createContext(null);eu.displayName=`RouteError`;var tu=`REACT_ROUTER_ERROR`,nu=`REDIRECT`,ru=`ROUTE_ERROR_RESPONSE`;function iu(e){if(e.startsWith(`${tu}:${nu}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function au(e){if(e.startsWith(`${tu}:${ru}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Al(t.status,t.statusText,t.data)}catch{}}function ou(e,{relative:t}={}){Hc(su(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(Zl),{hash:i,pathname:a,search:o}=pu(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Tl([n,a])),r.createHref({pathname:s,search:o,hash:i})}function su(){return _.useContext(Ql)!=null}function cu(){return Hc(su(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Ql).location}var lu=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function uu(e){_.useContext(Zl).static||_.useLayoutEffect(e)}function du(){let{isDataRoute:e}=_.useContext($l);return e?ku():fu()}function fu(){Hc(su(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Wl),{basename:t,navigator:n}=_.useContext(Zl),{matches:r}=_.useContext($l),{pathname:i}=cu(),a=JSON.stringify(Sl(r)),o=_.useRef(!1);return uu(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(Uc(o.current,lu),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Cl(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Tl([t,c.pathname])),zl(typeof r==`string`?r:qc(r),n.createHref(c),Il(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function pu(e,{relative:t}={}){let{matches:n}=_.useContext($l),{pathname:r}=cu(),i=JSON.stringify(Sl(n));return _.useMemo(()=>Cl(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function mu(e,t,n){Hc(su(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(Zl),{matches:i}=_.useContext($l),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;ju(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=cu(),d;if(t){let e=typeof t==`string`?Jc(t):t;Hc(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):Zc(e,{pathname:p});Uc(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Uc(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=xu(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Tl([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Tl([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Ql.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function hu(){let e=Ou(),t=jl(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var gu=_.createElement(hu,null),_u=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=au(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement($l.Provider,{value:this.props.routeContext},_.createElement(eu.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(yu,{error:e},t):t}};_u.contextType=Kl;var vu=new WeakMap;function yu({children:e,error:t}){let{basename:n,navigator:r}=_.useContext(Zl);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=iu(t.digest);if(e){let i=vu.get(t);if(i)throw i;let a=Pl(e.location,n),o=a.absoluteURL||a.to;if(zl(e.location,o,Il(r),`allow-explicit`),Ul(o))throw Error(`Invalid redirect location`);if(Nl&&!vu.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw vu.set(t,n),n}}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function bu({routeContext:e,match:t,children:n}){let r=_.useContext(Wl);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement($l.Provider,{value:e},n)}function xu(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);Hc(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ml(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||gu,o&&(s<0&&c===0?(ju(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(bu,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(_u,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Su(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cu(e){let t=_.useContext(Wl);return Hc(t,Su(e)),t}function wu(e){let t=_.useContext(Gl);return Hc(t,Su(e)),t}function Tu(e){let t=_.useContext($l);return Hc(t,Su(e)),t}function Eu(e){let t=Tu(e),n=t.matches[t.matches.length-1];return Hc(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Du(){return Eu(`useRouteId`)}function Ou(){let e=_.useContext(eu),t=wu(`useRouteError`),n=Eu(`useRouteError`);return e===void 0?t.errors?.[n]:e}function ku(){let{router:e}=Cu(`useNavigate`),t=Eu(`useNavigate`),n=_.useRef(!1);return uu(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{Uc(n.current,lu),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Au={};function ju(e,t,n){!t&&!Au[e]&&(Au[e]=!0,Uc(!1,n))}_.memo(Mu);function Mu({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return mu(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Nu({to:e,replace:t,state:n,relative:r}){Hc(su(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=_.useContext(Zl);Uc(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=_.useContext($l),{pathname:s}=cu(),c=du(),l=Cl(e,Sl(o),s,r===`path`);zl(typeof e==`string`?e:qc(e),a.createHref(l),Il(a),`reject`);let u=JSON.stringify(l);return _.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function Pu({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){Hc(!su(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=Jc(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=_l(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return Uc(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(Zl.Provider,{value:c},_.createElement(Ql.Provider,{children:t,value:h}))}_.Component;var Fu=`get`,Iu=`application/x-www-form-urlencoded`;function Lu(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ru(e){return Lu(e)&&e.tagName.toLowerCase()===`button`}function zu(e){return Lu(e)&&e.tagName.toLowerCase()===`form`}function Bu(e){return Lu(e)&&e.tagName.toLowerCase()===`input`}function Vu(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hu(e,t){return e.button===0&&(!t||t===`_self`)&&!Vu(e)}var Uu=null;function Wu(){if(Uu===null)try{new FormData(document.createElement(`form`),0),Uu=!1}catch{Uu=!0}return Uu}var Gu=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Ku(e){return e!=null&&!Gu.has(e)?(Uc(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Iu}"`),null):e}function qu(e,t){let n,r,i,a,o;if(zu(e)){let o=e.getAttribute(`action`);r=o?_l(o,t):null,n=e.getAttribute(`method`)||Fu,i=Ku(e.getAttribute(`enctype`))||Iu,a=new FormData(e)}else if(Ru(e)||Bu(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?_l(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Fu,i=Ku(e.getAttribute(`formenctype`))||Ku(o.getAttribute(`enctype`))||Iu,a=new FormData(o,e),!Wu()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Lu(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Fu,r=null,i=Iu,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function Ju(e,t){if(e===!1||e==null)throw Error(t)}function Yu(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&_l(i.pathname,t)===`/`?`${El(t)}/_root.${r}`:`${El(i.pathname)}.${r}`,i}async function Xu(e,t){if(e.id in t)return t[e.id];try{let n=await Fc(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zu(e){return e!=null&&typeof e.page==`string`}function Qu(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function $u(e,t,n){return id((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Xu(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Qu).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function ed(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function td(e,t,{includeHydrateFallback:n}={}){return nd(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function nd(e){return[...new Set(e)]}function rd(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function id(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Zu(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(rd(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function ad(){let e=_.useContext(Wl);return Ju(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function od(){let e=_.useContext(Gl);return Ju(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var sd=_.createContext(void 0);sd.displayName=`FrameworkContext`;function cd(){let e=_.useContext(sd);return Ju(e,`You must render this element inside a <HydratedRouter> element`),e}function ld(e,t){let n=_.useContext(sd),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:ud(s,p),onBlur:ud(c,m),onMouseEnter:ud(l,p),onMouseLeave:ud(u,m),onTouchStart:ud(d,p)}]:[a,f,{}]:[!1,f,{}]}function ud(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function dd({page:e,...t}){let n=ql(),{nonce:r}=cd(),{router:i}=ad(),a=_.useMemo(()=>Zc(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?_.createElement(pd,{page:e,matches:a,...t}):_.createElement(md,{page:e,matches:a,...t})):null}function fd(e){let{manifest:t,routeModules:n}=cd(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return $u(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function pd({page:e,matches:t,...n}){let r=cu(),{future:i}=cd(),{basename:a}=ad(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=Yu(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function md({page:e,matches:t,...n}){let r=cu(),{future:i,manifest:a,routeModules:o}=cd(),{basename:s}=ad(),{loaderData:c,matches:l}=od(),u=_.useMemo(()=>ed(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>ed(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];t&&t.hasLoader&&(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=Yu(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>td(d,a),[d,a]),m=fd(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function hd(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var gd=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{gd&&(window.__reactRouterVersion=`7.18.4`)}catch{}function _d({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=Vc({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Pu,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Z=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(Zl),y=typeof l==`string`&&Ic.test(l),b=Pl(l,h);l=b.to;let x=ou(l,{relative:r}),S=cu(),C=null;if(o){let e=Cl(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Tl([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=ld(n,p),D=Sd(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function O(t){e&&e(t),t.defaultPrevented||D(t)}let k=!(b.isExternal||i),A=_.createElement(`a`,{...p,...E,href:(k?C:void 0)||b.absoluteURL||x,onClick:k?O:e,ref:hd(m,T),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?_.createElement(_.Fragment,null,A,_.createElement(dd,{page:x})):A});Z.displayName=`Link`;var vd=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=pu(a,{relative:c.relative}),d=cu(),f=_.useContext(Gl),{navigator:p,basename:m}=_.useContext(Zl),h=f!=null&&Dd(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=_l(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return _.createElement(Z,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});vd.displayName=`NavLink`;var yd=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Fu,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(Zl),g=Td(),v=Ed(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&Ic.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});yd.displayName=`Form`;function bd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xd(e){let t=_.useContext(Wl);return Hc(t,bd(e)),t}function Sd(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=du(),d=cu(),f=pu(e,{relative:o});return _.useCallback(p=>{if(Hu(p,t)){p.preventDefault();let t=n===void 0?qc(d)===qc(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Cd=0,wd=()=>`__${String(++Cd)}__`;function Td(){let{router:e}=xd(`useSubmit`),{basename:t}=_.useContext(Zl),n=Du(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=qu(e,t);if(a.navigate===!1){let e=a.fetcherKey||wd();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ed(e,{relative:t}={}){let{basename:n}=_.useContext(Zl),r=_.useContext($l);Hc(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...pu(e||`.`,{relative:t})},o=cu();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Tl([n,a.pathname])),qc(a)}function Dd(e,{relative:t}={}){let n=_.useContext(Jl);Hc(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=xd(`useViewTransitionState`),i=pu(e,{relative:t});if(!n.isTransitioning)return!1;let a=_l(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=_l(n.nextLocation.pathname,r)||n.nextLocation.pathname;return pl(i.pathname,o)!=null||pl(i.pathname,a)!=null}var Od=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function kd(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:Od(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var Ad=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},jd=e=>{let t=Ad(e);return t.charAt(0).toUpperCase()+t.slice(1)},Md=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Nd={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function Pd(e){return e!=null}function Fd(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??Nd.width,a=e.size??e.height??Nd.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?Md(...c):Md(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??Nd[`stroke-width`])*Number(e.size??e.width??Nd.width)/Number(t.size??t.width??Nd.width):t.strokeWidth??Nd[`stroke-width`];return[`svg`,{...Object.entries(Nd).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&Pd(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&Pd(t.width)&&{[r(`width`)]:t.width},...`height`in t&&Pd(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function Id(e,t={}){return Fd(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var Ld=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Rd=(0,_.createContext)({}),zd=()=>(0,_.useContext)(Rd),Bd=(0,_.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:v=`currentColor`,className:y=``}=zd()??{},b=!!c||Ld(d),[x,S,C=[]]=Id(u,{color:e??v,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:Md(y,s),hasA11yProp:b,attributes:d});return(0,_.createElement)(x,{ref:f,...S},[...C.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function Vd(e,t=[],n=[]){let r=typeof e==`string`?kd(e,t,n):e,i=(0,_.forwardRef)(({className:e,...t},n)=>(0,_.createElement)(Bd,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=jd(r.name)),i}var Hd={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};Hd.node;var Ud=Vd(Hd),Wd={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};Wd.node;var Gd=Vd(Wd),Kd={name:`chevron-down`,size:24,node:[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]};Kd.node;var qd=Vd(Kd),Jd={name:`gem`,size:24,node:[[`path`,{d:`M10.5 3 8 9l4 13 4-13-2.5-6`,key:`b3dvk1`}],[`path`,{d:`M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z`,key:`7w4byz`}],[`path`,{d:`M2 9h20`,key:`16fsjt`}]]};Jd.node;var Yd=Vd(Jd),Xd={name:`heart`,size:24,node:[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]};Xd.node;var Zd=Vd(Xd),Qd={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]};Qd.node;var $d=Vd(Qd),ef={name:`map-pin`,size:24,node:[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]};ef.node;var tf=Vd(ef),nf={name:`menu`,size:24,node:[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]};nf.node;var rf=Vd(nf),af={name:`minus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]};af.node;var of=Vd(af),sf={name:`package`,size:24,node:[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]};sf.node;var cf=Vd(sf),lf={name:`phone-call`,size:24,node:[[`path`,{d:`M13 2a9 9 0 0 1 9 9`,key:`1itnx2`}],[`path`,{d:`M13 6a5 5 0 0 1 5 5`,key:`11nki7`}],[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]};lf.node;var uf=Vd(lf),df={name:`plus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]};df.node;var ff=Vd(df),pf={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};pf.node;var mf=Vd(pf),hf={name:`shield-check`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]};hf.node;var gf=Vd(hf),_f={name:`shopping-bag`,size:24,node:[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]};_f.node;var vf=Vd(_f),yf={name:`star`,size:24,node:[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]};yf.node;var bf=Vd(yf),xf={name:`truck`,size:24,node:[[`path`,{d:`M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,key:`wrbu53`}],[`path`,{d:`M15 18H9`,key:`1lyqi6`}],[`path`,{d:`M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,key:`lysw3i`}],[`circle`,{cx:`17`,cy:`18`,r:`2`,key:`332jqn`}],[`circle`,{cx:`7`,cy:`18`,r:`2`,key:`19iecd`}]]};xf.node;var Sf=Vd(xf),Cf={name:`user-round`,size:24,node:[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]],aliases:[`user-2`]};Cf.node;var wf=Vd(Cf),Tf={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};Tf.node;var Ef=Vd(Tf),Df={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Of=_.createContext&&_.createContext(Df),kf=[`attr`,`size`,`title`];function Af(e,t){if(e==null)return{};var n,r,i=jf(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function jf(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Mf(){return Mf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mf.apply(null,arguments)}function Nf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Pf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Nf(Object(n),!0).forEach(function(t){Ff(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nf(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ff(e,t,n){return(t=If(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function If(e){var t=Lf(e,`string`);return typeof t==`symbol`?t:t+``}function Lf(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Rf(e){return e&&e.map((e,t)=>_.createElement(e.tag,Pf({key:t},e.attr),Rf(e.child)))}function zf(e){return t=>_.createElement(Bf,Mf({attr:Pf({},e.attr)},t),Rf(e.child))}function Bf(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Af(e,kf),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),_.createElement(`svg`,Mf({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Pf(Pf({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&_.createElement(`title`,null,i),e.children)};return Of===void 0?t(Df):_.createElement(Of.Consumer,null,e=>t(e))}function Vf(e){return zf({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function Hf(e){return zf({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}var Uf=`http://localhost:7100/api`.replace(/\/$/,``);async function Q(e,t={}){let n=window.localStorage.getItem(`xaaj_token`),r=new Headers(t.headers||{});!r.has(`Content-Type`)&&t.body&&!(typeof FormData<`u`&&t.body instanceof FormData)&&r.set(`Content-Type`,`application/json`),n&&r.set(`Authorization`,`Bearer ${n}`);let i=await fetch(`${Uf}${e}`,{...t,headers:r,credentials:`include`}),a=await i.json().catch(()=>({}));if(!i.ok){let e=Error(a.message||a.error||`Request failed with status ${i.status}`);throw e.status=i.status,e.data=a,e}return a}var Wf={register:e=>Q(`/auth/register`,{method:`POST`,body:JSON.stringify(e)}),login:e=>Q(`/auth/login`,{method:`POST`,body:JSON.stringify(e)}),verifyEmail:e=>Q(`/auth/verify-email`,{method:`POST`,body:JSON.stringify(e)}),resendVerification:e=>Q(`/auth/resend-verification`,{method:`POST`,body:JSON.stringify(e)}),forgotPassword:e=>Q(`/auth/forgot-password`,{method:`POST`,body:JSON.stringify(e)}),verifyResetOtp:e=>Q(`/auth/verify-reset-otp`,{method:`POST`,body:JSON.stringify(e)}),resetPassword:e=>Q(`/auth/reset-password`,{method:`POST`,body:JSON.stringify(e)}),me:()=>Q(`/auth/me`),logout:()=>Q(`/auth/logout`,{method:`POST`})},Gf={list:e=>{let t=new URLSearchParams(e||{}).toString();return Q(`/products${t?`?${t}`:``}`)},get:e=>Q(`/products/${encodeURIComponent(e)}`)},Kf={getAnnouncement:()=>Q(`/cms/announcement`),getHero:()=>Q(`/cms/hero`),getHome:()=>Q(`/cms/home`),getAll:e=>Q(`/cms${e?`?type=${encodeURIComponent(e)}`:``}`),create:e=>Q(`/cms`,{method:`POST`,body:JSON.stringify(e)}),update:(e,t)=>Q(`/cms/${e}`,{method:`PATCH`,body:JSON.stringify(t)}),remove:e=>Q(`/cms/${e}`,{method:`DELETE`}),updateHero:e=>Q(`/cms/hero`,{method:`PUT`,body:JSON.stringify({slides:e})}),updateAnnouncement:e=>Q(`/cms/announcement`,{method:`PUT`,body:JSON.stringify(e)}),getCategoryHero:()=>Q(`/cms/category-hero`),getCategoryHeroAdmin:()=>Q(`/cms/category-hero/admin`),updateCategoryHero:e=>Q(`/cms/category-hero`,{method:`PUT`,body:JSON.stringify({categoryHeroes:e})}),uploadCategoryHero:e=>Q(`/cms/category-hero/upload`,{method:`POST`,body:e})},qf={subscribe:e=>Q(`/newsletter/subscribe`,{method:`POST`,body:JSON.stringify({email:String(e||``).trim().toLowerCase()})})},Jf={send:e=>Q(`/contact`,{method:`POST`,body:JSON.stringify({name:String(e?.name||``).trim(),email:String(e?.email||``).trim().toLowerCase(),phone:String(e?.phone||``).trim(),message:String(e?.message||``).trim()})})},Yf={list:e=>Q(`/orders${e?`?${new URLSearchParams(e)}`:``}`),create:e=>Q(`/orders`,{method:`POST`,body:JSON.stringify(e)}),get:e=>Q(`/orders/${encodeURIComponent(e)}`),cancel:e=>Q(`/orders/${encodeURIComponent(e)}/cancel`,{method:`PATCH`})},Xf={create:e=>Q(`/reviews`,{method:`POST`,body:JSON.stringify({orderId:e?.orderId,productId:e?.productId,rating:Number(e?.rating),comment:String(e?.comment||``).trim()})}),getProductReviews:e=>Q(`/reviews/product/${encodeURIComponent(e)}`),getOrderReviews:e=>Q(`/reviews/order/${encodeURIComponent(e)}`)},Zf=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),$=o(((e,t)=>{t.exports=Zf()}))(),Qf=(0,_.createContext)(null),$f=`xaaj_token`,ep=`xaaj_user`;function tp({children:e}){let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(!0),a=(0,_.useCallback)(e=>{if(!e)return;let t=e?.token,r=e?.user;t&&localStorage.setItem($f,t),r&&(localStorage.setItem(ep,JSON.stringify(r)),n(r))},[]),o=(0,_.useCallback)(()=>{localStorage.removeItem($f),localStorage.removeItem(ep),n(null)},[]);(0,_.useEffect)(()=>{let e=!1;return(async()=>{try{let t=localStorage.getItem($f),r=localStorage.getItem(ep);if(!t){e||(n(null),i(!1));return}if(r)try{let t=JSON.parse(r);e||n(t)}catch{localStorage.removeItem(ep)}let a=await Wf.me();if(e)return;let s=a?.user||a?.data?.user||a?.data;a?.success&&s?(localStorage.setItem(ep,JSON.stringify(s)),n(s)):o()}catch(t){if(e)return;console.error(`Auth session restore error:`,t),localStorage.getItem(ep)||o()}finally{e||i(!1)}})(),()=>{e=!0}},[o]);let s=(0,_.useCallback)(async e=>{try{let t=e?.name?.trim()||``,n=e?.email?.trim().toLowerCase()||``,r=e?.password||``,i=e?.phone?.trim()||``,o=e?.address?.trim()||``,s=e?.city?.trim()||``,c=e?.state?.trim()||``,l=e?.pin?.trim()||``;if(!t)return{success:!1,message:`Name is required.`};if(!n)return{success:!1,message:`Email is required.`};if(!r)return{success:!1,message:`Password is required.`};if(r.length<8)return{success:!1,message:`Password must be at least 8 characters.`};if(!i)return{success:!1,message:`Phone number is required.`};if(!/^\d{10,15}$/.test(i))return{success:!1,message:`Please enter a valid phone number.`};if(!o)return{success:!1,message:`Full address is required.`};if(!s)return{success:!1,message:`City is required.`};if(!c)return{success:!1,message:`State is required.`};if(!/^\d{6}$/.test(l))return{success:!1,message:`PIN code must be 6 digits.`};let u=await Wf.register({name:t,email:n,password:r,phone:i,address:o,city:s,state:c,pin:l});return u?.success&&u?.requiresEmailVerification?{...u,requiresEmailVerification:!0}:(u?.success&&u?.token&&u?.user&&a(u),u)}catch(e){return console.error(`Register error:`,e),{success:!1,message:e?.message||`Unable to create your account.`}}},[a]),c=(0,_.useCallback)(async(e,t)=>{try{let n=e?.trim().toLowerCase()||``,r=t?.trim()||``;if(!n)return{success:!1,message:`Email is required.`};if(!/^\d{6}$/.test(r))return{success:!1,message:`OTP must be a 6-digit number.`};let i=await Wf.verifyEmail({email:n,otp:r});return i?.success&&i?.token&&i?.user&&a(i),i}catch(e){return console.error(`Verify email error:`,e),{success:!1,message:e?.message||`Unable to verify your email.`}}},[a]),l=(0,_.useCallback)(async e=>{try{let t=e?.trim().toLowerCase()||``;return t?await Wf.resendVerification({email:t}):{success:!1,message:`Email is required.`}}catch(e){return console.error(`Resend verification error:`,e),{success:!1,message:e?.message||`Unable to resend verification OTP.`}}},[]),u=(0,_.useCallback)(async(e,t)=>{try{let n=e?.trim().toLowerCase()||``;if(!n)return{success:!1,message:`Email is required.`};if(!t)return{success:!1,message:`Password is required.`};let r=await Wf.login({email:n,password:t});return r?.success&&r?.token&&r?.user&&a(r),r}catch(e){return console.error(`Login error:`,e),{success:!1,message:e?.message||`Unable to login. Please try again.`}}},[a]),d=(0,_.useCallback)(async e=>{try{let t=e?.trim().toLowerCase()||``;return t?await Wf.forgotPassword({email:t}):{success:!1,message:`Email is required.`}}catch(e){return console.error(`Forgot password error:`,e),{success:!1,message:e?.message||`Unable to send password reset OTP.`}}},[]),f=(0,_.useCallback)(async(e,t)=>{try{let n=e?.trim().toLowerCase()||``,r=t?.trim()||``;return n?/^\d{6}$/.test(r)?await Wf.verifyResetOtp({email:n,otp:r}):{success:!1,message:`OTP must be a 6-digit number.`}:{success:!1,message:`Email is required.`}}catch(e){return console.error(`Verify reset OTP error:`,e),{success:!1,message:e?.message||`Unable to verify password reset OTP.`}}},[]),p=(0,_.useCallback)(async(e,t,n,r)=>{try{return e?.trim()?t?.trim()?n?r?n.length<8?{success:!1,message:`Password must be at least 8 characters.`}:n===r?await Wf.resetPassword({email:e.trim().toLowerCase(),resetToken:t.trim(),password:n,confirmPassword:r}):{success:!1,message:`Passwords do not match.`}:{success:!1,message:`Please confirm your new password.`}:{success:!1,message:`New password is required.`}:{success:!1,message:`Reset token is missing.`}:{success:!1,message:`Email is required.`}}catch(e){return console.error(`Reset password error:`,e),{success:!1,message:e?.message||`Unable to reset your password.`}}},[]),m=(0,_.useCallback)(async()=>{try{let e=await Wf.me(),t=e?.user||e?.data?.user||e?.data;return e?.success&&t?(localStorage.setItem(ep,JSON.stringify(t)),n(t),{...e,user:t}):e}catch(e){return console.error(`Refresh user error:`,e),{success:!1,message:e?.message||`Unable to refresh user.`}}},[]),h=(0,_.useCallback)(async()=>{try{await Wf.logout()}catch(e){console.error(`Logout API error:`,e)}finally{o()}return{success:!0}},[o]),g=(0,_.useMemo)(()=>({user:t,loading:r,register:s,verifyEmail:c,resendVerification:l,login:u,forgotPassword:d,verifyResetOtp:f,resetPassword:p,refreshUser:m,logout:h}),[t,r,s,c,l,u,d,f,p,m,h]);return(0,$.jsx)(Qf.Provider,{value:g,children:e})}function np(){let e=(0,_.useContext)(Qf);if(!e)throw Error(`useAuth must be used inside AuthProvider`);return e}var rp=(0,_.createContext)(null);function ip(e,t){try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function ap(e){return{...e,id:e._id,image:e.images?.[0]||``,old:e.mrp??e.compareAtPrice??null,tag:e.tags?.[0]||`New`,rating:Number(e.rating||0),reviews:Number(e.reviewCount||0),reviewCount:Number(e.reviewCount||0)}}function op({children:e}){let[t,n]=(0,_.useState)(()=>ip(`xaaj-cart`,[])),[r,i]=(0,_.useState)(()=>ip(`xaaj-wishlist`,[])),[a,o]=(0,_.useState)([]),s=async()=>{try{let e=await Gf.list({limit:48}),t=Array.isArray(e?.data)?e.data:[];o(t.map(ap))}catch(e){console.error(`Products load error:`,e)}};(0,_.useEffect)(()=>{let e=!1;async function t(){try{let t=await Gf.list({limit:48}),n=Array.isArray(t?.data)?t.data:[];if(e)return;o(n.map(ap))}catch(t){e||(console.error(`Products load error:`,t),o([]))}}return t(),()=>{e=!0}},[]);let c=(0,_.useMemo)(()=>[...a].sort((e,t)=>{let n=new Date(e.createdAt||0).getTime();return new Date(t.createdAt||0).getTime()-n}).slice(0,4),[a]),l=(0,_.useMemo)(()=>[...a].filter(e=>{let t=Number(e.rating||0),n=Number(e.reviewCount||e.reviews||0);return t>=4&&n>0}).sort((e,t)=>{let n=Number(e.rating||0),r=Number(t.rating||0);if(r!==n)return r-n;let i=Number(e.reviewCount||e.reviews||0),a=Number(t.reviewCount||t.reviews||0);if(a!==i)return a-i;let o=new Date(e.createdAt||0).getTime();return new Date(t.createdAt||0).getTime()-o}).slice(0,4),[a]),u=e=>{n(t=>{let n=t.find(t=>t.id===e.id),r=Number(e.stock??0);return r<=0?t:n?n.qty>=r?t:t.map(t=>t.id===e.id?{...t,qty:t.qty+1}:t):[...t,{...e,qty:1}]})},d=e=>{n(t=>t.filter(t=>t.id!==e))},f=(e,t)=>{n(n=>n.map(n=>{if(n.id!==e)return n;let r=Number(n.stock??0),i=Number(n.qty||1)+t;return i<1?{...n,qty:1}:r>0&&i>r?{...n,qty:r}:{...n,qty:i}}))},p=()=>{n([])},m=e=>{i(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};(0,_.useEffect)(()=>{window.localStorage.setItem(`xaaj-cart`,JSON.stringify(t))},[t]),(0,_.useEffect)(()=>{window.localStorage.setItem(`xaaj-wishlist`,JSON.stringify(r))},[r]);let h=(0,_.useMemo)(()=>({products:a,newArrivals:c,bestSellingProducts:l,loadProducts:s,cart:t,add:u,remove:d,change:f,clearCart:p,wish:r,toggleWish:m,count:t.reduce((e,t)=>e+Number(t.qty||0),0),total:t.reduce((e,t)=>e+Number(t.price||0)*Number(t.qty||0),0)}),[a,c,l,t,r]);return(0,$.jsx)(rp.Provider,{value:h,children:e})}var sp=()=>(0,_.useContext)(rp);function cp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 4 23 10 17 10`},child:[]},{tag:`polyline`,attr:{points:`1 20 1 14 7 14`},child:[]},{tag:`path`,attr:{d:`M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15`},child:[]}]})(e)}function lp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`5`,x2:`12`,y2:`19`},child:[]},{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]}]})(e)}function up(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`16.5`,y1:`9.4`,x2:`7.5`,y2:`4.21`},child:[]},{tag:`path`,attr:{d:`M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`},child:[]},{tag:`polyline`,attr:{points:`3.27 6.96 12 12.01 20.73 6.96`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22.08`,x2:`12`,y2:`12`},child:[]}]})(e)}function dp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`},child:[]},{tag:`polyline`,attr:{points:`16 17 21 12 16 7`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`9`,y2:`12`},child:[]}]})(e)}function fp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`8.5`,r:`1.5`},child:[]},{tag:`polyline`,attr:{points:`21 15 16 10 5 21`},child:[]}]})(e)}function pp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`7`,height:`7`},child:[]},{tag:`rect`,attr:{x:`14`,y:`3`,width:`7`,height:`7`},child:[]},{tag:`rect`,attr:{x:`14`,y:`14`,width:`7`,height:`7`},child:[]},{tag:`rect`,attr:{x:`3`,y:`14`,width:`7`,height:`7`},child:[]}]})(e)}function mp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`},child:[]},{tag:`polyline`,attr:{points:`15 3 21 3 21 9`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`14`,x2:`21`,y2:`3`},child:[]}]})(e)}function hp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 20h9`},child:[]},{tag:`path`,attr:{d:`M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z`},child:[]}]})(e)}function gp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polyline`,attr:{points:`12 6 12 12 16 14`},child:[]}]})(e)}function _p(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z`},child:[]},{tag:`path`,attr:{d:`M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z`},child:[]}]})(e)}function vp(e){return zf({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9`},child:[]},{tag:`path`,attr:{d:`M13.73 21a2 2 0 0 1-3.46 0`},child:[]}]})(e)}var yp={dashboard:()=>Q(`/admin/dashboard`),customers:()=>Q(`/admin/customers`),products:()=>Q(`/admin/products`),orders:()=>Q(`/admin/orders`),createProduct:e=>Q(`/products`,{method:`POST`,body:JSON.stringify(e)}),updateProduct:(e,t)=>Q(`/products/${e}`,{method:`PATCH`,body:JSON.stringify(t)}),archiveProduct:e=>Q(`/products/${e}`,{method:`DELETE`}),content:e=>Q(`/cms${e?`?type=${encodeURIComponent(e)}`:``}`),createContent:e=>Q(`/cms`,{method:`POST`,body:JSON.stringify(e)}),updateContent:(e,t)=>Q(`/cms/${e}`,{method:`PATCH`,body:JSON.stringify(t)}),deleteContent:e=>Q(`/cms/${e}`,{method:`DELETE`})};function bp(){let[e,t]=(0,_.useState)(`dashboard`),{user:n,logout:r}=np(),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(``),[C,w]=(0,_.useState)(``),[T,E]=(0,_.useState)(``),[D,O]=(0,_.useState)(``),[k,A]=(0,_.useState)(!0),[j,M]=(0,_.useState)(!1),[N,P]=(0,_.useState)(!1),F=[{categorySlug:`drinkware`,categoryName:`Drinkware`,mediaUrl:``,mediaType:`image`,alt:`Drinkware`,enabled:!0},{categorySlug:`gifting`,categoryName:`Gifting`,mediaUrl:``,mediaType:`image`,alt:`Gifting`,enabled:!0},{categorySlug:`dinnerware`,categoryName:`Dinnerware`,mediaUrl:``,mediaType:`image`,alt:`Dinnerware`,enabled:!0},{categorySlug:`serveware`,categoryName:`Serveware`,mediaUrl:``,mediaType:`image`,alt:`Serveware`,enabled:!0},{categorySlug:`b2b`,categoryName:`B2B`,mediaUrl:``,mediaType:`image`,alt:`B2B`,enabled:!0}],[I,ee]=(0,_.useState)(F),[L,te]=(0,_.useState)(!1),[R,ne]=(0,_.useState)(!1),re={mediaUrl:``,mediaType:`image`,alt:`XAAJ handcrafted tableware arranged on a linen table`,enabled:!0},[z,ie]=(0,_.useState)(re),[ae,oe]=(0,_.useState)(!1),[B,se]=(0,_.useState)(!1),[ce,V]=(0,_.useState)(!1),H={main:{mediaUrl:``,mediaType:`image`,alt:`XAAJ B2B collection`},sideOne:{mediaUrl:``,mediaType:`image`,alt:`XAAJ B2B tableware`},sideTwo:{mediaUrl:``,mediaType:`image`,alt:`XAAJ B2B serveware`}},[U,le]=(0,_.useState)(H),[ue,de]=(0,_.useState)(!1),[fe,pe]=(0,_.useState)(!1),[me,he]=(0,_.useState)(null),W={title:``,slug:``,coverImage:``,category:`Table Styling`,excerpt:``,content:``,author:`XAAJ Editorial`,publishDate:new Date().toISOString().slice(0,10),isPublished:!1},[ge,G]=(0,_.useState)([]),[_e,ve]=(0,_.useState)(!1),[ye,be]=(0,_.useState)(!1),[xe,Se]=(0,_.useState)(W),[Ce,we]=(0,_.useState)(null),[Te,Ee]=(0,_.useState)(!1),[K,De]=(0,_.useState)(null),Oe=[`Speckled White`,`Dove Gray`,`Blush Pink`,`Beachgrass Green`,`Midnight Blue`],ke=[`Dinnerware`,`Drinkware`,`Serveware`,`Gifting`],Ae={name:``,slug:``,description:``,category:``,dinnerwareCollection:``,hsnCode:``,mrp:``,price:``,stock:``,shipping:{weight:``,length:``,breadth:``,height:``},images:[``],productDetails:``,shippingPayment:``,returnExchange:``},[q,je]=(0,_.useState)(Ae),[Me,Ne]=(0,_.useState)(null),[Pe,Fe]=(0,_.useState)(!1),[Ie,Le]=(0,_.useState)(!1);(0,_.useEffect)(()=>{n?.role===`admin`&&(Re(),gt(),_t(),ze(),He(),Ke(),$e(),it())},[n]);let Re=async()=>{try{w(``);let e=await yp.dashboard();a(e.data)}catch(e){w(e.message||`Unable to load dashboard`)}},ze=async()=>{try{M(!0);let e=await Q(`/cms/announcement`),t=e?.data||e?.announcement||e||{};O(t?.text||t?.message||``),A(t?.enabled===void 0||!!t.enabled)}catch(e){w(e.message||`Unable to load announcement`)}finally{M(!1)}},Be=async e=>{e.preventDefault();let t=D.trim();if(!t){w(`Announcement message is required.`);return}try{P(!0),w(``),E(``);let e=await Q(`/cms/announcement`,{method:`PUT`,body:JSON.stringify({text:t,enabled:k})}),n=e?.data||e?.announcement||e||{};O(n?.text||n?.message||t),A(n?.enabled===void 0?k:!!n.enabled),E(`Announcement bar updated successfully.`)}catch(e){w(e.message||`Unable to update announcement`)}finally{P(!1)}},Ve=(e=[])=>{let t=Array.isArray(e)?e:[];return F.map(e=>{let n=t.find(t=>String(t?.categorySlug||t?.slug||t?.category?.slug||``).trim().toLowerCase()===e.categorySlug);return{...e,categoryName:n?.categoryName||n?.category?.name||e.categoryName,mediaUrl:n?.mediaUrl||n?.image||n?.imageUrl||n?.video||n?.videoUrl||``,mediaType:n?.mediaType===`video`?`video`:`image`,alt:n?.alt||n?.title||e.alt,enabled:n?.enabled===void 0?e.enabled:!!n.enabled}})},He=async()=>{try{te(!0);let e=await Q(`/cms/category-hero/admin`),t=e?.data?.categories||e?.data?.items||e?.categories||e?.items||e?.data||[];ee(Ve(t))}catch(e){w(e.message||`Unable to load category hero media`)}finally{te(!1)}},Ue=(e,t,n)=>{ee(r=>r.map(r=>r.categorySlug===e?{...r,[t]:n}:r))},We=async()=>{let e=I.map(e=>({categorySlug:e.categorySlug,categoryName:e.categoryName,mediaUrl:String(e.mediaUrl||``).trim(),mediaType:e.mediaType===`video`?`video`:`image`,alt:String(e.alt||``).trim(),enabled:!!e.enabled})),t=e.find(e=>e.enabled&&!e.mediaUrl);if(t){w(`Please add a media URL for ${t.categoryName}, or turn it off.`);return}try{ne(!0),w(``),E(``);let t=await Q(`/cms/category-hero`,{method:`PUT`,body:JSON.stringify({categories:e})}),n=t?.data?.categories||t?.data?.items||t?.categories||t?.items||t?.data||e;ee(Ve(n)),E(`Category hero media updated successfully.`)}catch(e){w(e.message||`Unable to update category hero media`)}finally{ne(!1)}},Ge=e=>{let t=e?.brandStory||e?.story||e?.item||e?.data||e||{};return{mediaUrl:t?.mediaUrl||t?.image||t?.imageUrl||t?.videoUrl||t?.url||``,mediaType:t?.mediaType===`video`?`video`:`image`,alt:t?.alt||t?.title||re.alt,enabled:t?.enabled===void 0||!!t.enabled}},Ke=async()=>{try{oe(!0);let e=await Q(`/cms/brand-story`);ie(Ge(e))}catch(e){w(e.message||`Unable to load Brand Story media`)}finally{oe(!1)}},qe=(e,t)=>{ie(n=>({...n,[e]:t}))},Je=(e,t=`image`)=>{let n=typeof e==`object`&&e?.type||``;if(n.startsWith(`video/`))return`video`;if(n.startsWith(`image/`))return`image`;let r=String(typeof e==`string`?e:``).trim();return/\.(mp4|webm|ogg|mov)(?:[?#].*)?$/i.test(r)||t===`video`?`video`:`image`},Ye=async e=>{let t=e.target.files?.[0];if(e.target.value=``,!t)return;let n=Je(t,`image`),r=n===`video`?52428800:5242880;if(t.size>r){w(n===`video`?`Brand Story video cannot exceed 50 MB.`:`Brand Story image cannot exceed 5 MB.`);return}try{V(!0),w(``),E(``);let e=new FormData;e.append(`media`,t),e.append(`folder`,`xaaj/brand-story`);let r=await Q(`/uploads/media`,{method:`POST`,body:e}),i=r?.data||r?.media||r||{},a=i?.secure_url||i?.url||i?.mediaUrl||``;if(!a)throw Error(`Upload succeeded but no media URL was returned.`);ie(e=>({...e,mediaUrl:a,mediaType:i?.mediaType||Je(a,n)})),E(`${n===`video`?`Video`:`Image`} uploaded. Click Save Brand Story to publish it.`)}catch(e){w(e.message||`Unable to upload Brand Story media`)}finally{V(!1)}},Xe=async()=>{if(window.confirm(`Remove the current Brand Story media?`))try{se(!0),w(``),E(``);let e=await Q(`/cms/brand-story`,{method:`PUT`,body:JSON.stringify({mediaUrl:``,mediaType:z.mediaType===`video`?`video`:`image`,alt:String(z.alt||re.alt).trim(),enabled:!0})}),t=e?.data||e?.brandStory||e;ie(Ge(t)),E(`Brand Story media removed successfully. The Brand Story section remains visible.`)}catch(e){w(e.message||`Unable to remove Brand Story media`)}finally{se(!1)}},Ze=async()=>{let e=String(z.mediaUrl||``).trim();if(z.enabled&&!e){w(`Please upload or add a Brand Story media URL, or turn it off.`);return}let t={mediaUrl:e,mediaType:z.mediaType===`video`?`video`:`image`,alt:String(z.alt||re.alt).trim(),enabled:!!z.enabled};try{se(!0),w(``),E(``);let e=await Q(`/cms/brand-story`,{method:`PUT`,body:JSON.stringify(t)}),n=e?.data||e?.brandStory||e;ie(Ge(n)),E(`Brand Story media updated successfully.`)}catch(e){w(e.message||`Unable to update Brand Story media`)}finally{se(!1)}},Qe=e=>{let t=e?.items||e?.horeca||e?.media||e?.data||e||[],n=Array.isArray(t)?t:t&&typeof t==`object`?Object.entries(t).map(([e,t])=>({...t&&typeof t==`object`?t:{mediaUrl:t},slot:e})):[],r={main:{...H.main},sideOne:{...H.sideOne},sideTwo:{...H.sideTwo}};return n.forEach(e=>{if(!e)return;let t=String(e?.slot||e?.key||e?.position||e?.name||``).trim().toLowerCase().replace(/[\s_-]+/g,``),n=t===`main`||t===`primary`||t===`left`?`main`:t===`sideone`||t===`side1`||t===`top`||t===`righttop`?`sideOne`:t===`sidetwo`||t===`side2`||t===`bottom`||t===`rightbottom`?`sideTwo`:null;n&&(r[n]={mediaUrl:e?.mediaUrl||e?.image||e?.imageUrl||e?.url||``,mediaType:`image`,alt:e?.alt||e?.title||r[n].alt})}),r},$e=async()=>{try{de(!0);let e=await Q(`/cms/horeca-collection`);le(Qe(e))}catch(e){w(e.message||`Unable to load B2B collection media`)}finally{de(!1)}},et=(e,t,n)=>{le(r=>({...r,[e]:{...r[e],[t]:n}}))},tt=async(e,t)=>{let n=t.target.files?.[0];if(t.target.value=``,n){if(!n.type.startsWith(`image/`)){w(`Please select an image for the B2B collection.`);return}if(n.size>5242880){w(`B2B image cannot exceed 5 MB.`);return}try{he(e),w(``),E(``);let t=new FormData;t.append(`media`,n),t.append(`folder`,`xaaj/horeca-collection`);let r=await Q(`/uploads/media`,{method:`POST`,body:t}),i=r?.data||r?.media||r||{},a=i?.secure_url||i?.url||i?.mediaUrl||``;if(!a)throw Error(`Upload succeeded but no media URL was returned.`);et(e,`mediaUrl`,a),et(e,`mediaType`,`image`),E(`Horeca image uploaded. Click Save B2B Collection to publish it.`)}catch(e){w(e.message||`Unable to upload Horeca image`)}finally{he(null)}}},nt=async e=>{if(window.confirm(`Remove this Horeca image from the homepage?`))try{pe(!0),w(``),E(``);let t=Object.entries(U).map(([t,n])=>({slot:t,mediaUrl:t===e?``:String(n.mediaUrl||``).trim(),mediaType:`image`,alt:String(n.alt||``).trim()})),n=await Q(`/cms/horeca-collection`,{method:`PUT`,body:JSON.stringify({items:t})});le(Qe(n?.data||n)),E(`B2B image removed. The original fallback remains on the website.`)}catch(e){w(e.message||`Unable to remove Horeca image`)}finally{pe(!1)}},rt=async()=>{let e=Object.entries(U).map(([e,t])=>({slot:e,mediaUrl:String(t.mediaUrl||``).trim(),mediaType:`image`,alt:String(t.alt||``).trim()}));try{pe(!0),w(``),E(``);let t=await Q(`/cms/horeca-collection`,{method:`PUT`,body:JSON.stringify({items:e})});le(Qe(t?.data||t)),E(`B2B collection media updated successfully.`)}catch(e){w(e.message||`Unable to update B2B collection media`)}finally{pe(!1)}},it=async()=>{try{ve(!0);let e=await Q(`/blogs/admin`),t=e?.data?.blogs||e?.blogs||e?.data||[];G(Array.isArray(t)?t:[])}catch(e){w(e.message||`Unable to load blogs`)}finally{ve(!1)}},at=e=>{let{name:t,value:n,type:r,checked:i}=e.target;Se(e=>({...e,[t]:r===`checkbox`?i:n}))},ot=e=>e.toLowerCase().trim().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),st=e=>{let t=e.target.value;Se(e=>({...e,title:t,...Ce||e.slug?{}:{slug:ot(t)}}))},ct=()=>{we(null),Se({...W,publishDate:new Date().toISOString().slice(0,10)}),De(null),w(``),E(``),Ee(!0),window.scrollTo({top:0,behavior:`smooth`})},lt=e=>{we(e._id),Se({title:e.title||``,slug:e.slug||``,coverImage:e.coverImage||e.image||``,category:e.category||`Table Styling`,excerpt:e.excerpt||``,content:e.content||``,author:e.author||`XAAJ Editorial`,publishDate:e.publishDate?new Date(e.publishDate).toISOString().slice(0,10):new Date().toISOString().slice(0,10),isPublished:!!(e.isPublished??e.published)}),w(``),E(``),Ee(!0),window.scrollTo({top:0,behavior:`smooth`})},ut=()=>{Ee(!1),we(null),Se(W)},dt=e=>{De(e)},ft=async e=>{e.preventDefault();let t={title:xe.title.trim(),slug:ot(xe.slug||xe.title),coverImage:xe.coverImage.trim(),category:xe.category.trim(),excerpt:xe.excerpt.trim(),content:xe.content.trim(),author:xe.author.trim(),publishDate:xe.publishDate,isPublished:!!xe.isPublished};if(!t.title)return w(`Blog title is required.`);if(!t.coverImage)return w(`Blog cover image URL is required.`);if(!t.excerpt)return w(`Blog short excerpt is required.`);if(!t.content)return w(`Blog article content is required.`);if(!t.author)return w(`Blog author is required.`);if(!t.publishDate)return w(`Publish date is required.`);try{be(!0),w(``),E(``),Ce?(await Q(`/blogs/${Ce}`,{method:`PATCH`,body:JSON.stringify(t)}),E(`Blog updated successfully.`)):(await Q(`/blogs`,{method:`POST`,body:JSON.stringify(t)}),E(`Blog created successfully.`)),Ee(!1),we(null),Se(W),await it()}catch(e){w(e.message||`Unable to save blog.`)}finally{be(!1)}},pt=async e=>{try{w(``),E(``),await Q(`/blogs/${e._id}`,{method:`PATCH`,body:JSON.stringify({isPublished:!(e.isPublished??e.published)})}),E(`${e.isPublished??e.published?`Blog unpublished.`:`Blog published.`}`),await it()}catch(e){w(e.message||`Unable to change blog status.`)}},mt=async e=>{if(window.confirm(`Are you sure you want to delete "${e.title}"? This action cannot be undone.`))try{w(``),E(``),await Q(`/blogs/${e._id}`,{method:`DELETE`}),E(`Blog deleted successfully.`),K?._id===e._id&&De(null),await it()}catch(e){w(e.message||`Unable to delete blog.`)}},ht=e=>{if(!e)return`—`;let t=new Date(e);return Number.isNaN(t.getTime())?`—`:t.toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,year:`numeric`})},gt=async()=>{try{l(!0),w(``);let e=await yp.products();s(e?.data||e?.products||[])}catch(e){w(e.message||`Unable to load products`)}finally{l(!1)}},_t=async()=>{try{p(!0),w(``);let e=await Q(`/orders?all=true`);d(e?.data||[])}catch(e){w(e.message||`Unable to load orders`)}finally{p(!1)}},vt=async(e,t,n=y,r=x)=>{try{v(e),w(``),E(``);let i=await Q(`/orders/${e}/status`,{method:`PATCH`,body:JSON.stringify({status:t,courierName:n.trim(),trackingNumber:r.trim()})});if(!i?.success)throw Error(i?.message||`Unable to update order`);let a=i.data;d(t=>t.map(t=>t._id===e?a:t)),h(t=>t?._id===e?a:t),E(`Order status changed to ${t.replace(/_/g,` `)}.`),b(a?.courierName||n.trim()),S(a?.trackingNumber||r.trim())}catch(e){w(e.message||`Unable to update order status`)}finally{v(null)}},yt=e=>e?new Date(e).toLocaleString(`en-IN`,{dateStyle:`medium`,timeStyle:`short`}):`—`,bt=e=>e?.shippingAddress?.name||e?.user?.name||`Customer`,xt=e=>e?.shippingAddress?.email||e?.user?.email||`—`,St=e=>e?.shippingAddress?.phone||`—`,Ct=[`pending`,`confirmed`,`processing`,`packed`,`shipped`,`out_for_delivery`,`delivered`,`cancelled`],wt=e=>e.replace(/_/g,` `).replace(/\b\w/g,e=>e.toUpperCase()),Tt=e=>{let{name:t,value:n}=e.target;je(e=>({...e,[t]:n}))},Et=e=>{let{name:t,value:n}=e.target;je(e=>({...e,shipping:{...e.shipping,[t]:n}}))},Dt=(e,t)=>{je(n=>({...n,images:n.images.map((n,r)=>r===e?t:n)}))},Ot=()=>{je(e=>({...e,images:[...e.images,``]}))},kt=e=>{je(t=>{let n=t.images.filter((t,n)=>n!==e);return{...t,images:n.length?n:[``]}})},At=()=>{Ne(null),je(Ae),w(``),E(``),Fe(!0)},jt=e=>{Ne(e._id);let t=new Set([`Dinner Sets`,`Plates`,`Bowls`,`Cups & Mugs`]),n=String(e.category||``).trim(),r=e.dinnerwareCollection||e.dinnerwareSubcategory||e.dinnerwareType||e.subcategory||``,i=Oe.includes(r)?r:``,a=t.has(n)?`Dinnerware`:(ke.includes(n),n);je({name:e.name||``,slug:e.slug||``,description:e.description||``,category:a,dinnerwareCollection:i,hsnCode:e.hsnCode||e.hsn||``,mrp:e.mrp??e.compareAtPrice??``,price:e.price??``,stock:e.stock??``,shipping:{weight:e.shipping?.weight??``,length:e.shipping?.length??``,breadth:e.shipping?.breadth??``,height:e.shipping?.height??``},images:Array.isArray(e.images)&&e.images.length?e.images:[``],productDetails:e.productDetails||``,shippingPayment:e.shippingPayment||``,returnExchange:e.returnExchange||``}),w(``),E(``),Fe(!0),window.scrollTo({top:0,behavior:`smooth`})},Mt=()=>{Fe(!1),Ne(null),je(Ae),w(``)},Nt=async e=>{if(e.preventDefault(),w(``),E(``),!q.name.trim()){w(`Product name is required.`);return}if(!q.slug.trim()){w(`Product slug is required.`);return}if(!q.description.trim()){w(`Product description is required.`);return}if(!q.category.trim()){w(`Product category is required.`);return}let t=String(q.hsnCode||``).trim();if(!t){w(`HSN code is required.`);return}if(!/^(?:\d{4}|\d{6}|\d{8})$/.test(t)){w(`HSN code must contain 4, 6, or 8 digits.`);return}if(q.mrp===``||Number(q.mrp)<0){w(`Please enter a valid MRP.`);return}if(q.price===``||Number(q.price)<0){w(`Please enter a valid selling price.`);return}if(Number(q.price)>Number(q.mrp)){w(`Selling price cannot be higher than MRP.`);return}if(q.stock!==``&&Number(q.stock)<0){w(`Stock cannot be negative.`);return}if(q.shipping.weight===``||Number(q.shipping.weight)<=0){w(`Please enter a valid shipping weight.`);return}if(q.shipping.length===``||Number(q.shipping.length)<=0){w(`Please enter a valid package length.`);return}if(q.shipping.breadth===``||Number(q.shipping.breadth)<=0){w(`Please enter a valid package breadth.`);return}if(q.shipping.height===``||Number(q.shipping.height)<=0){w(`Please enter a valid package height.`);return}let n=q.images.map(e=>e.trim()).filter(Boolean);if(!n.length){w(`Please add at least one product image URL.`);return}let r={name:q.name.trim(),slug:q.slug.trim().toLowerCase(),description:q.description.trim(),category:q.category.trim(),dinnerwareCollection:q.category===`Dinnerware`&&q.dinnerwareCollection.trim()||null,hsnCode:t,mrp:Number(q.mrp),compareAtPrice:Number(q.mrp),price:Number(q.price),stock:q.stock===``?0:Number(q.stock),shipping:{weight:Number(q.shipping.weight),length:Number(q.shipping.length),breadth:Number(q.shipping.breadth),height:Number(q.shipping.height)},images:n,productDetails:q.productDetails.trim(),shippingPayment:q.shippingPayment.trim(),returnExchange:q.returnExchange.trim()};try{Le(!0),Me?(await yp.updateProduct(Me,r),E(`Product updated successfully.`)):(await yp.createProduct(r),E(`Product added successfully.`)),je(Ae),Ne(null),Fe(!1),await gt(),await Re()}catch(e){w(e.message||`Unable to save product.`)}finally{Le(!1)}},Pt=async e=>{if(window.confirm(`Are you sure you want to archive "${e.name}"?`))try{w(``),E(``),await yp.archiveProduct(e._id),E(`Product archived successfully.`),await gt(),await Re()}catch(e){w(e.message||`Unable to archive product.`)}};return n?.role===`admin`?(0,$.jsxs)(`main`,{className:`page xaaj-admin-v2`,"data-active-section":e,children:[(0,$.jsx)(`style`,{children:`.xaaj-admin-v2{--ink:#25231f;--muted:#777169;--line:#e7e0d6;width:100%;height:100vh;min-height:100vh!important;max-width:none!important;margin:0!important;padding:0!important;background:radial-gradient(circle at 82% 0%,rgba(154,116,72,.09),transparent 28%),#f7f4ee!important;font-family:'DM Sans',sans-serif;color:var(--ink);overflow:hidden!important}
.xaaj-admin-v2 *{box-sizing:border-box}.xaaj-admin-v2 .admin-shell{display:flex;width:100%;height:100vh;min-height:100vh}.xaaj-admin-v2 .admin-sidebar{position:fixed;left:0;top:0;width:250px;height:100vh;min-height:100vh;background:linear-gradient(180deg,#10271c,#0b1f16);color:#fff;padding:28px 18px;display:flex;flex-direction:column;z-index:20;box-shadow:14px 0 45px rgba(34,29,23,.12);overflow:hidden}.xaaj-admin-v2 .admin-main{margin-left:250px;width:calc(100% - 250px);height:100vh;min-height:100vh;min-width:0;padding:28px 34px 70px;overflow-y:auto;overflow-x:hidden}.xaaj-admin-v2 .brand-mark{padding:6px 12px 30px;border-bottom:1px solid rgba(255,255,255,.1);margin-bottom:22px}.xaaj-admin-v2 .brand-mark strong{font-family:'Playfair Display',serif;font-size:27px;letter-spacing:.08em;font-weight:500}.xaaj-admin-v2 .brand-mark span{display:block;margin-top:5px;color:#bdb5aa;font-size:9px;letter-spacing:.18em;text-transform:uppercase}.xaaj-admin-v2 .side-label{font-size:9px;text-transform:uppercase;letter-spacing:.18em;color:#8f887d;padding:0 12px 10px}.xaaj-admin-v2 .side-nav{display:grid;gap:5px}.xaaj-admin-v2 .side-nav button{width:100%!important;border:0!important;background:transparent!important;color:#bdb7ae!important;box-shadow:none!important;border-radius:12px!important;padding:12px 13px!important;display:flex!important;align-items:center!important;gap:12px!important;text-align:left!important;font:600 12px 'DM Sans',sans-serif!important;transform:none!important}.xaaj-admin-v2 .side-nav button:hover{background:rgba(47,112,72,.28)!important;color:#fff!important;border-color:rgba(82,157,105,.45)!important;transform:translateX(3px)!important}.xaaj-admin-v2 .side-nav button.active{background:linear-gradient(90deg,#2f7048,#245d3b)!important;color:#fff!important;box-shadow:0 8px 22px rgba(47,112,72,.28),inset 3px 0 #8bd19d!important}.xaaj-admin-v2 .side-nav button.active:hover{background:linear-gradient(90deg,#398356,#2f7048)!important}.xaaj-admin-v2 .side-icon{width:25px;height:25px;border:1px solid rgba(255,255,255,.13);border-radius:8px;display:grid;place-items:center;font-size:11px;color:#9dd5aa;flex:none}.xaaj-admin-v2 .side-footer{margin-top:auto;padding:15px 0 4px}.xaaj-admin-v2 .sidebar-logout{width:100%!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;background:rgba(255,255,255,.045)!important;color:#d8ddd9!important;border:1px solid rgba(255,255,255,.13)!important;border-radius:12px!important;padding:11px 14px!important;box-shadow:none!important}.xaaj-admin-v2 .sidebar-logout:hover{background:#2f7048!important;border-color:#4d9666!important;color:#fff!important}.xaaj-admin-v2 .sidebar-logout span:first-child{font-size:15px;color:#9bcda7}.xaaj-admin-v2 .content-width{max-width:1320px;margin:0 auto}.xaaj-admin-v2 .topbar{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:26px;padding:22px 26px;background:rgba(255,253,249,.88);border:1px solid var(--line);border-radius:20px;box-shadow:0 12px 35px rgba(63,53,41,.055);backdrop-filter:blur(10px)}.xaaj-admin-v2 .topbar h1,.xaaj-admin-v2 h1,.xaaj-admin-v2 h2,.xaaj-admin-v2 h3{font-family:'Playfair Display',serif;letter-spacing:-.025em}.xaaj-admin-v2 .topbar h1{font-size:32px!important;margin:3px 0 4px!important}.xaaj-admin-v2 .topbar p{margin:0;color:var(--muted);font-size:13px}.xaaj-admin-v2 .top-actions{display:flex;gap:9px;align-items:center;flex-wrap:wrap}.xaaj-admin-v2 .live-store-btn{display:inline-flex!important;align-items:center!important;gap:9px!important;background:#fff!important;color:#205c36!important;border:1px solid #a9c9b1!important;border-radius:999px!important;padding:10px 15px!important;box-shadow:0 5px 16px rgba(47,112,72,.10)!important}.xaaj-admin-v2 .live-store-btn:hover{background:#2f7048!important;color:#fff!important;border-color:#2f7048!important;box-shadow:0 9px 22px rgba(47,112,72,.24)!important}.xaaj-admin-v2 .live-dot{width:9px;height:9px;border-radius:50%;background:#35a85a;box-shadow:0 0 0 0 rgba(53,168,90,.55);animation:xaaj-live-pulse 1.25s infinite}.xaaj-admin-v2 .live-store-btn:hover .live-dot{background:#fff;box-shadow:0 0 0 0 rgba(255,255,255,.55)}@keyframes xaaj-live-pulse{0%{box-shadow:0 0 0 0 rgba(53,168,90,.55);opacity:1}70%{box-shadow:0 0 0 7px rgba(53,168,90,0);opacity:.72}100%{box-shadow:0 0 0 0 rgba(53,168,90,0);opacity:1}}.xaaj-admin-v2 button,.xaaj-admin-v2 .button{appearance:none!important;border:1px solid #d8d0c4!important;background:#fff!important;color:#292621!important;border-radius:11px!important;padding:10px 15px!important;font:600 12px 'DM Sans',sans-serif!important;cursor:pointer!important;transition:all .2s ease!important;box-shadow:0 2px 0 rgba(0,0,0,.02)!important}.xaaj-admin-v2 button:hover:not(:disabled){transform:translateY(-1px)!important;border-color:#3b8758!important;background:#eef8f1!important;color:#1f5c35!important;box-shadow:0 8px 18px rgba(47,112,72,.12)!important}.xaaj-admin-v2 button.button,.xaaj-admin-v2 button[type=submit]{background:#292621!important;color:#fff!important;border-color:#292621!important;box-shadow:0 7px 18px rgba(41,38,33,.18)!important}.xaaj-admin-v2 button.button:hover,.xaaj-admin-v2 button[type=submit]:hover{background:#2f7048!important;border-color:#2f7048!important;color:#fff!important;box-shadow:0 9px 22px rgba(47,112,72,.24)!important}.xaaj-admin-v2 button:disabled{opacity:.45!important;cursor:not-allowed!important;transform:none!important}.xaaj-admin-v2 section{background:rgba(255,253,249,.94)!important;border:1px solid var(--line)!important;border-radius:20px!important;padding:28px!important;margin-bottom:26px!important;box-shadow:0 12px 35px rgba(63,53,41,.055)!important}.xaaj-admin-v2 .summary{background:linear-gradient(145deg,#fffefa,#f2ece2)!important;border:1px solid #e4dcd1!important;border-radius:18px!important;padding:23px!important;min-height:120px!important;box-shadow:0 10px 25px rgba(57,47,35,.065)!important}.xaaj-admin-v2 .summary strong{font-family:'Playfair Display',serif!important;font-size:30px!important}.xaaj-admin-v2 .summary span{display:block!important;margin-top:7px!important;color:var(--muted)!important;font-size:11px!important;text-transform:uppercase!important;letter-spacing:.12em!important}.xaaj-admin-v2 input:not([type=checkbox]),.xaaj-admin-v2 textarea,.xaaj-admin-v2 select{background:#fffefa!important;border:1px solid #ded7cd!important;border-radius:10px!important;padding:11px 13px!important;color:#2c2925!important;outline:none!important;transition:.2s!important}.xaaj-admin-v2 input:not([type=checkbox]):focus,.xaaj-admin-v2 textarea:focus,.xaaj-admin-v2 select:focus{border-color:#9b7c58!important;box-shadow:0 0 0 4px rgba(139,106,67,.10)!important}.xaaj-admin-v2 label{font-weight:600!important;font-size:12px!important;color:#4c4741!important}.xaaj-admin-v2 img{border-radius:13px}.xaaj-admin-v2 .eyebrow{text-transform:uppercase!important;letter-spacing:.16em!important;font-size:9px!important;font-weight:700!important;color:#9a7954!important}.xaaj-admin-v2 small{color:#8b857d!important}.xaaj-admin-v2[data-active-section=dashboard] [data-admin-section]:not([data-admin-section=dashboard]),.xaaj-admin-v2[data-active-section=announcement] [data-admin-section]:not([data-admin-section=announcement]),.xaaj-admin-v2[data-active-section=category-hero] [data-admin-section]:not([data-admin-section=category-hero]),.xaaj-admin-v2[data-active-section=brand-story] [data-admin-section]:not([data-admin-section=brand-story]),.xaaj-admin-v2[data-active-section=horeca] [data-admin-section]:not([data-admin-section=horeca]),.xaaj-admin-v2[data-active-section=blog] [data-admin-section]:not([data-admin-section=blog]),.xaaj-admin-v2[data-active-section=orders] [data-admin-section]:not([data-admin-section=orders]),.xaaj-admin-v2[data-active-section=products] [data-admin-section]:not([data-admin-section=products]){display:none!important}.xaaj-admin-v2 .side-icon svg{display:block}.xaaj-admin-v2 .sidebar-logout svg{color:#9bcda7;flex:none}.xaaj-admin-v2 .sidebar-logout:hover svg{color:#fff}.xaaj-admin-v2 .live-store-btn svg{flex:none}.xaaj-admin-v2 .product-header-actions{display:flex;align-items:center;gap:9px;flex-wrap:wrap}.xaaj-admin-v2 .product-header-actions button{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;min-height:39px!important}.xaaj-admin-v2 .product-add-btn{background:#292621!important;color:#fff!important;border-color:#292621!important;box-shadow:0 7px 18px rgba(41,38,33,.14)!important}.xaaj-admin-v2 .product-add-btn:hover{background:#2f7048!important;border-color:#2f7048!important;color:#fff!important;box-shadow:0 9px 22px rgba(47,112,72,.22)!important}.xaaj-admin-v2 .product-refresh-btn{background:#fff!important;color:#3f3a34!important}.xaaj-admin-v2 .product-refresh-btn:hover{background:#eef8f1!important;color:#1f5c35!important;border-color:#3b8758!important}.xaaj-admin-v2 .is-spinning{animation:xaaj-spin .8s linear infinite}@keyframes xaaj-spin{to{transform:rotate(360deg)}}
.xaaj-admin-v2 [data-admin-section="brand-story"] .brand-story-media-preview{min-height:220px}
@media(max-width:760px){
  .xaaj-admin-v2 [data-admin-section="brand-story"] > div:nth-child(2){
    grid-template-columns:1fr!important;
  }
}
@media(max-width:900px){.xaaj-admin-v2{height:auto;min-height:100vh;overflow:visible!important}.xaaj-admin-v2 .admin-shell{display:block;width:100%;height:auto;min-height:100vh}.xaaj-admin-v2 .admin-sidebar{position:sticky;left:auto;top:0;width:100%;height:auto;min-height:0;padding:13px 12px;overflow:visible}.xaaj-admin-v2 .brand-mark,.xaaj-admin-v2 .side-label{display:none}.xaaj-admin-v2 .side-footer{display:block;margin:0 0 0 8px;padding:0;flex:none}.xaaj-admin-v2 .sidebar-logout{width:auto!important;padding:9px 12px!important}.xaaj-admin-v2 .side-nav{display:flex;overflow-x:auto;gap:5px}.xaaj-admin-v2 .side-nav button{width:auto!important;white-space:nowrap;padding:9px 11px!important}.xaaj-admin-v2 .side-icon{display:none}.xaaj-admin-v2 .admin-main{margin-left:0;width:100%;height:auto;min-height:0;padding:18px 14px 50px;overflow:visible}.xaaj-admin-v2 .topbar{padding:18px}.xaaj-admin-v2 .topbar h1{font-size:27px!important}}
/* =========================
   XAAJ Admin Premium System
   ========================= */
.xaaj-admin-v2{
  --admin-ink:#25231f;
  --admin-muted:#777169;
  --admin-line:#e7e0d6;
  --admin-paper:#fffdf9;
  --admin-green:#2f7048;
  font-family:'DM Sans',Arial,sans-serif!important;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
.xaaj-admin-v2 h1,
.xaaj-admin-v2 h2,
.xaaj-admin-v2 h3,
.xaaj-admin-v2 h4{
  font-family:'Playfair Display',Georgia,serif!important;
  font-weight:500!important;
  color:var(--admin-ink)!important;
}
.xaaj-admin-v2 p,
.xaaj-admin-v2 label,
.xaaj-admin-v2 input,
.xaaj-admin-v2 textarea,
.xaaj-admin-v2 select,
.xaaj-admin-v2 button{
  font-family:'DM Sans',Arial,sans-serif!important;
}
.xaaj-admin-v2 .content-width{
  width:min(100%,1380px)!important;
}
.xaaj-admin-v2 section[data-admin-section]{
  overflow:hidden;
  scroll-margin-top:20px;
}
.xaaj-admin-v2 section[data-admin-section] > div:first-child h2{
  margin:4px 0 8px!important;
  font-size:30px!important;
  line-height:1.08!important;
}
.xaaj-admin-v2 section[data-admin-section] > div:first-child p{
  max-width:720px;
  margin:0!important;
  font-size:13px!important;
  line-height:1.7!important;
}
.xaaj-admin-v2 input:not([type=checkbox]),
.xaaj-admin-v2 textarea,
.xaaj-admin-v2 select{
  min-height:44px!important;
  width:100%;
}
.xaaj-admin-v2 textarea{
  resize:vertical;
  min-height:120px!important;
}
.xaaj-admin-v2 input[type=checkbox]{
  accent-color:var(--admin-green)!important;
}
.xaaj-admin-v2 button{
  min-height:42px;
}
.xaaj-admin-v2 button:focus-visible,
.xaaj-admin-v2 input:focus-visible,
.xaaj-admin-v2 select:focus-visible,
.xaaj-admin-v2 textarea:focus-visible{
  outline:3px solid rgba(47,112,72,.14)!important;
  outline-offset:2px!important;
}
.xaaj-admin-v2 .admin-main{
  scrollbar-width:thin;
  scrollbar-color:#cfc6ba transparent;
}
.xaaj-admin-v2 .admin-main::-webkit-scrollbar{width:8px}
.xaaj-admin-v2 .admin-main::-webkit-scrollbar-track{background:transparent}
.xaaj-admin-v2 .admin-main::-webkit-scrollbar-thumb{
  background:#cfc6ba;
  border-radius:999px;
}
.xaaj-admin-v2 .summary{
  transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease;
}
.xaaj-admin-v2 .summary:hover{
  transform:translateY(-2px);
  border-color:#d8cfc2!important;
  box-shadow:0 16px 34px rgba(57,47,35,.09)!important;
}
@media (max-width:1180px){
  .xaaj-admin-v2 .admin-sidebar{
    width:220px;
    padding-left:14px;
    padding-right:14px;
  }
  .xaaj-admin-v2 .admin-main{
    margin-left:220px;
    width:calc(100% - 220px);
    padding-left:24px;
    padding-right:24px;
  }
  .xaaj-admin-v2 .side-nav button{
    font-size:11px!important;
  }
}
@media (max-width:900px){
  .xaaj-admin-v2 .admin-sidebar{
    position:sticky!important;
    top:0!important;
    z-index:50!important;
    border-bottom:1px solid rgba(255,255,255,.08);
  }
  .xaaj-admin-v2 .side-nav{
    scrollbar-width:none;
    padding-bottom:2px;
  }
  .xaaj-admin-v2 .side-nav::-webkit-scrollbar{display:none}
  .xaaj-admin-v2 .side-nav button{
    flex:0 0 auto!important;
    min-height:40px!important;
    border-radius:999px!important;
  }
  .xaaj-admin-v2 .admin-main{
    padding:18px 14px 50px!important;
  }
  .xaaj-admin-v2 .topbar{
    position:relative;
    top:auto;
    padding:18px!important;
    margin-bottom:18px;
    border-radius:16px!important;
  }
  .xaaj-admin-v2 .topbar h1{
    font-size:28px!important;
  }
  .xaaj-admin-v2 section[data-admin-section]{
    padding:22px!important;
    margin-bottom:20px!important;
    border-radius:18px!important;
  }
  .xaaj-admin-v2 section[data-admin-section] > div:first-child h2{
    font-size:26px!important;
  }
  .xaaj-admin-v2 [style*="gridTemplateColumns: '140px 1fr auto'"],
  .xaaj-admin-v2 [style*="gridTemplateColumns: '150px 1fr auto'"],
  .xaaj-admin-v2 [style*="gridTemplateColumns: '90px 1fr auto'"]{
    grid-template-columns:1fr!important;
  }
  .xaaj-admin-v2 [style*="gridTemplateColumns: '90px 1fr auto'"] > div:first-child,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '140px 1fr auto'"] > div:first-child,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '150px 1fr auto'"] > div:first-child{
    width:100%!important;
    max-width:none!important;
  }
  .xaaj-admin-v2 [style*="gridTemplateColumns: '90px 1fr auto'"] img,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '140px 1fr auto'"] img,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '150px 1fr auto'"] img{
    width:100%!important;
    height:auto!important;
    aspect-ratio:16/9;
    object-fit:cover!important;
  }
  .xaaj-admin-v2 [style*="gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'"]{
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
  }
  .xaaj-admin-v2 .product-header-actions{
    width:100%;
  }
  .xaaj-admin-v2 .product-header-actions button{
    flex:1 1 150px;
  }
}
@media (max-width:640px){
  .xaaj-admin-v2 .admin-main{
    padding:14px 10px 40px!important;
  }
  .xaaj-admin-v2 section[data-admin-section]{
    padding:17px!important;
    border-radius:15px!important;
  }
  .xaaj-admin-v2 .topbar{
    padding:16px!important;
    border-radius:15px!important;
    align-items:flex-start!important;
    flex-direction:column!important;
    gap:14px!important;
  }
  .xaaj-admin-v2 .topbar h1{
    font-size:25px!important;
    line-height:1.1!important;
  }
  .xaaj-admin-v2 .top-actions,
  .xaaj-admin-v2 .top-actions button{
    width:100%;
  }
  .xaaj-admin-v2 section[data-admin-section] > div:first-child h2{
    font-size:23px!important;
  }
  .xaaj-admin-v2 section[data-admin-section] > div:first-child p{
    font-size:12px!important;
    line-height:1.65!important;
  }
  .xaaj-admin-v2 .summary{
    min-height:105px!important;
    padding:18px!important;
  }
  .xaaj-admin-v2 .summary strong{
    font-size:26px!important;
  }
  .xaaj-admin-v2 button{
    min-height:44px!important;
  }
  .xaaj-admin-v2 [style*="gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'"],
  .xaaj-admin-v2 [style*="gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'"],
  .xaaj-admin-v2 [style*="gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'"],
  .xaaj-admin-v2 [style*="gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))'"]{
    grid-template-columns:1fr!important;
  }
  .xaaj-admin-v2 [style*="gridTemplateColumns: '90px 1fr auto'"] > div:last-child,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '140px 1fr auto'"] > div:last-child,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '150px 1fr auto'"] > div:last-child{
    width:100%;
    display:flex;
    flex-wrap:wrap;
  }
  .xaaj-admin-v2 [style*="gridTemplateColumns: '90px 1fr auto'"] > div:last-child button,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '140px 1fr auto'"] > div:last-child button,
  .xaaj-admin-v2 [style*="gridTemplateColumns: '150px 1fr auto'"] > div:last-child button{
    flex:1 1 120px;
  }
  .xaaj-admin-v2 [data-admin-section="category-hero"]{
    overflow:visible!important;
  }
  .xaaj-admin-v2 [data-admin-section="category-hero"] img,
  .xaaj-admin-v2 [data-admin-section="category-hero"] video{
    min-height:190px;
  }
}

`}),(0,$.jsxs)(`div`,{className:`admin-shell`,children:[(0,$.jsxs)(`aside`,{className:`admin-sidebar`,children:[(0,$.jsxs)(`div`,{className:`brand-mark`,children:[(0,$.jsx)(`strong`,{children:`XAAJ`}),(0,$.jsx)(`span`,{children:`Stories Crafted in Earth`})]}),(0,$.jsx)(`div`,{className:`side-label`,children:`Store Management`}),(0,$.jsx)(`nav`,{className:`side-nav`,children:[[`dashboard`,`Overview`,pp],[`announcement`,`Announcement`,vp],[`category-hero`,`Category Hero Media`,fp],[`brand-story`,`Brand Story`,_p],[`horeca`,`B2B`,fp],[`blog`,`Blog`,hp],[`orders`,`Orders`,gp],[`products`,`Products`,up]].map(([n,r,i])=>(0,$.jsxs)(`button`,{type:`button`,className:e===n?`active`:``,onClick:()=>{t(n),window.scrollTo({top:0,behavior:`smooth`})},children:[(0,$.jsx)(`span`,{className:`side-icon`,children:(0,$.jsx)(i,{size:15,strokeWidth:1.8})}),(0,$.jsx)(`span`,{children:r})]},n))}),(0,$.jsx)(`div`,{className:`side-footer`,children:(0,$.jsxs)(`button`,{type:`button`,className:`sidebar-logout`,onClick:async()=>{await r(),window.location.href=`/account`},children:[(0,$.jsx)(dp,{size:15,strokeWidth:1.8}),(0,$.jsx)(`span`,{children:`Logout`})]})})]}),(0,$.jsx)(`div`,{className:`admin-main`,children:(0,$.jsxs)(`div`,{className:`content-width`,children:[(0,$.jsxs)(`div`,{className:`topbar`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`XAAJ / Admin`}),(0,$.jsx)(`h1`,{children:e===`dashboard`?`Store overview`:e===`announcement`?`Announcement bar`:e===`category-hero`?`Category Hero Media`:e===`brand-story`?`Brand Story`:e===`horeca`?`B2B`:e===`blog`?`Blog management`:e===`orders`?`Customer orders`:`Product management`}),(0,$.jsx)(`p`,{children:`Manage your XAAJ storefront from one place.`})]}),(0,$.jsx)(`div`,{className:`top-actions`,children:(0,$.jsxs)(`button`,{type:`button`,className:`live-store-btn`,onClick:()=>window.open(`/?xaajPreview=1`,`_blank`,`noopener,noreferrer`),title:`Open live store`,children:[(0,$.jsx)(`span`,{className:`live-dot`}),(0,$.jsx)(mp,{size:14,strokeWidth:1.8}),(0,$.jsx)(`span`,{children:`Live Store`})]})})]}),T&&(0,$.jsx)(`div`,{style:{padding:`14px 16px`,marginBottom:`20px`,borderRadius:`8px`,background:`#edf7ed`,color:`#246b2a`},children:T}),C&&(0,$.jsx)(`div`,{style:{padding:`14px 16px`,marginBottom:`20px`,borderRadius:`8px`,background:`#fff1f0`,color:`#b42318`},children:C}),i&&(0,$.jsx)(`section`,{"data-admin-section":`dashboard`,style:{marginBottom:`50px`},children:(0,$.jsxs)(`div`,{className:`product-grid`,children:[(0,$.jsxs)(`div`,{className:`summary`,children:[(0,$.jsx)(`strong`,{children:i.sales??0}),(0,$.jsx)(`span`,{children:`Total sales`})]}),(0,$.jsxs)(`div`,{className:`summary`,children:[(0,$.jsx)(`strong`,{children:i.orders??0}),(0,$.jsx)(`span`,{children:`Orders`})]}),(0,$.jsxs)(`div`,{className:`summary`,children:[(0,$.jsx)(`strong`,{children:i.customers??0}),(0,$.jsx)(`span`,{children:`Customers`})]}),(0,$.jsxs)(`div`,{className:`summary`,children:[(0,$.jsx)(`strong`,{children:i.lowStock??0}),(0,$.jsx)(`span`,{children:`Low stock`})]})]})}),(0,$.jsxs)(`section`,{"data-admin-section":`announcement`,style:{marginBottom:`50px`,padding:`28px`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`20px`,flexWrap:`wrap`,marginBottom:`24px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Website Content`}),(0,$.jsx)(`h2`,{children:`Announcement Bar`}),(0,$.jsx)(`p`,{children:`Update the message shown in the announcement bar on the customer website.`})]}),(0,$.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:`999px`,background:k?`#edf7ed`:`#f5f5f5`,color:k?`#246b2a`:`#666`,fontSize:`13px`,fontWeight:600},children:k?`Live on website`:`Hidden`})]}),j?(0,$.jsx)(`p`,{children:`Loading announcement...`}):(0,$.jsxs)(`form`,{onSubmit:Be,children:[(0,$.jsx)(`label`,{htmlFor:`announcement-text`,style:{display:`block`,marginBottom:`8px`},children:`Announcement Message *`}),(0,$.jsx)(`textarea`,{id:`announcement-text`,value:D,onChange:e=>O(e.target.value),placeholder:`Example: Free shipping on orders above ₹5,000`,rows:3,maxLength:200,style:{width:`100%`,marginBottom:`8px`,resize:`vertical`},required:!0}),(0,$.jsx)(`small`,{children:`Maximum 200 characters.`}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,marginTop:`18px`,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:k,onChange:e=>A(e.target.checked)}),`Show announcement on website`]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,marginTop:`18px`},children:[(0,$.jsx)(`button`,{type:`submit`,className:`button`,disabled:N||j,children:N?`Saving...`:`Save Announcement`}),(0,$.jsx)(`button`,{type:`button`,onClick:ze,disabled:N||j,children:`Refresh`})]})]})]}),(0,$.jsxs)(`section`,{"data-admin-section":`category-hero`,style:{marginBottom:`50px`,padding:`28px`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`20px`,flexWrap:`wrap`,marginBottom:`24px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Homepage Categories`}),(0,$.jsx)(`h2`,{children:`Category Hero Media`}),(0,$.jsx)(`p`,{children:`Manage a separate image or video for each homepage category card. Each category keeps its own stable slug, so changing media does not change the category product link.`})]}),(0,$.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:`999px`,background:`#f5f5f5`,color:`#555`,fontSize:`13px`,fontWeight:600},children:`5 categories`})]}),L?(0,$.jsx)(`p`,{children:`Loading category hero media...`}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(260px, 1fr))`,gap:`18px`},children:I.map(e=>(0,$.jsxs)(`div`,{style:{border:`1px solid #e5e5e5`,borderRadius:`12px`,padding:`16px`,background:`#faf9f6`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`10px`,marginBottom:`12px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:e.categoryName}),(0,$.jsxs)(`small`,{style:{display:`block`,marginTop:`3px`},children:[`/shop?category=`,e.categorySlug]})]}),(0,$.jsx)(`span`,{style:{padding:`5px 9px`,borderRadius:`999px`,background:e.enabled?`#edf7ed`:`#f1f1f1`,color:e.enabled?`#246b2a`:`#666`,fontSize:`11px`,fontWeight:700},children:e.enabled?`Active`:`Hidden`})]}),(0,$.jsx)(`div`,{style:{width:`100%`,height:`170px`,borderRadius:`9px`,overflow:`hidden`,background:`#f1eee8`,marginBottom:`14px`},children:e.mediaUrl?e.mediaType===`video`?(0,$.jsx)(`video`,{src:e.mediaUrl,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,controls:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,$.jsx)(`img`,{src:e.mediaUrl,alt:e.alt||e.categoryName,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,$.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`grid`,placeItems:`center`,padding:`20px`,textAlign:`center`,color:`#777`,fontSize:`12px`},children:`No media configured`})}),(0,$.jsxs)(`div`,{style:{display:`grid`,gap:`10px`},children:[(0,$.jsx)(`label`,{children:`Media URL *`}),(0,$.jsx)(`input`,{value:e.mediaUrl,onChange:t=>Ue(e.categorySlug,`mediaUrl`,t.target.value),placeholder:`Image or video URL`}),(0,$.jsx)(`label`,{children:`Media type`}),(0,$.jsxs)(`select`,{value:e.mediaType,onChange:t=>Ue(e.categorySlug,`mediaType`,t.target.value),children:[(0,$.jsx)(`option`,{value:`image`,children:`Image`}),(0,$.jsx)(`option`,{value:`video`,children:`Video`})]}),(0,$.jsx)(`label`,{children:`Alt text`}),(0,$.jsx)(`input`,{value:e.alt,onChange:t=>Ue(e.categorySlug,`alt`,t.target.value),placeholder:`${e.categoryName} hero media`}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:e.enabled,onChange:t=>Ue(e.categorySlug,`enabled`,t.target.checked)}),`Show on homepage`]})]})]},e.categorySlug))}),(0,$.jsx)(`small`,{style:{display:`block`,marginTop:`16px`,color:`#777`},children:`Glassware, Gifting, Dinnerware, Serveware and Horeca are stored separately by category slug. Their existing product navigation remains unchanged.`}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,marginTop:`18px`},children:[(0,$.jsx)(`button`,{type:`button`,className:`button`,onClick:We,disabled:R||L,children:R?`Saving...`:`Save Category Media`}),(0,$.jsx)(`button`,{type:`button`,onClick:He,disabled:R||L,children:L?`Loading...`:`Refresh`})]})]})]}),(0,$.jsxs)(`section`,{"data-admin-section":`brand-story`,style:{marginBottom:`50px`,padding:`28px`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`20px`,flexWrap:`wrap`,marginBottom:`24px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Store Management`}),(0,$.jsx)(`h2`,{children:`Brand Story`}),(0,$.jsx)(`p`,{children:`Control the media shown beside “India, Made for the Table.” on the homepage. Upload an image or video, preview it, and save the change without changing the story text or Read more link.`})]}),(0,$.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:`999px`,background:z.enabled?`#edf7ed`:`#f5f5f5`,color:z.enabled?`#246b2a`:`#666`,fontSize:`13px`,fontWeight:600},children:z.enabled?`Live on website`:`Hidden`})]}),ae?(0,$.jsx)(`p`,{children:`Loading Brand Story media...`}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(260px, 420px) minmax(0, 1fr)`,gap:`22px`,alignItems:`start`},children:[(0,$.jsx)(`div`,{style:{width:`100%`,height:`250px`,borderRadius:`12px`,overflow:`hidden`,background:`#f1eee8`,border:`1px solid #e5e5e5`},children:z.mediaUrl?z.mediaType===`video`?(0,$.jsx)(`video`,{src:z.mediaUrl,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,controls:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,$.jsx)(`img`,{src:z.mediaUrl,alt:z.alt||`Brand Story`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,$.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`grid`,placeItems:`center`,padding:`20px`,textAlign:`center`,color:`#777`,fontSize:`12px`},children:`No Brand Story media configured`})}),(0,$.jsxs)(`div`,{style:{display:`grid`,gap:`10px`},children:[(0,$.jsx)(`label`,{children:`Upload Image / Video`}),(0,$.jsx)(`input`,{type:`file`,accept:`image/*,video/*`,onChange:Ye,disabled:ce||B,style:{padding:`9px`,background:`#fffefa`}}),(0,$.jsx)(`small`,{children:`Images: max 5 MB · Videos: max 50 MB`}),(0,$.jsx)(`label`,{style:{marginTop:`7px`},children:`Media URL`}),(0,$.jsx)(`input`,{value:z.mediaUrl,onChange:e=>qe(`mediaUrl`,e.target.value),onBlur:e=>qe(`mediaType`,Je(e.target.value,z.mediaType)),placeholder:`Cloudinary image or video URL`}),(0,$.jsx)(`label`,{children:`Media type`}),(0,$.jsxs)(`select`,{value:z.mediaType,onChange:e=>qe(`mediaType`,e.target.value),children:[(0,$.jsx)(`option`,{value:`image`,children:`Image`}),(0,$.jsx)(`option`,{value:`video`,children:`Video`})]}),(0,$.jsx)(`label`,{children:`Alt text`}),(0,$.jsx)(`input`,{value:z.alt,onChange:e=>qe(`alt`,e.target.value),placeholder:`Brand Story media alt text`}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginTop:`4px`,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:z.enabled,onChange:e=>qe(`enabled`,e.target.checked)}),`Show Brand Story media on homepage`]})]})]}),(0,$.jsx)(`small`,{style:{display:`block`,marginTop:`16px`,color:`#777`},children:`The story heading, description and Read more link remain unchanged. Only the left-side media is managed here.`}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,marginTop:`18px`},children:[(0,$.jsx)(`button`,{type:`button`,className:`button`,onClick:Ze,disabled:B||ce||ae,children:B?`Saving...`:`Save Brand Story`}),(0,$.jsx)(`button`,{type:`button`,onClick:Xe,disabled:!z.mediaUrl||B||ce||ae,style:{border:`1px solid #c44`,color:`#a22`,background:`#fff`},children:B?`Removing...`:`Remove Media`}),(0,$.jsx)(`button`,{type:`button`,onClick:Ke,disabled:B||ce||ae,children:ae?`Loading...`:`Refresh`})]})]})]}),(0,$.jsxs)(`section`,{"data-admin-section":`horeca`,style:{marginBottom:`50px`,padding:`28px`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsxs)(`div`,{style:{marginBottom:`24px`},children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Store Management`}),(0,$.jsx)(`h2`,{children:`B2B Collection`}),(0,$.jsx)(`p`,{children:`Change the three images in the “Discover our B2B collections” section. Remove clears only the custom CMS image; the original image remains as the homepage fallback.`})]}),ue?(0,$.jsx)(`p`,{children:`Loading B2B collection media...`}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, minmax(0, 1fr))`,gap:`18px`},children:[[`main`,`Main Image`],[`sideOne`,`Right Top Image`],[`sideTwo`,`Right Bottom Image`]].map(([e,t])=>{let n=U[e],r=me===e;return(0,$.jsxs)(`div`,{style:{border:`1px solid #e5e5e5`,borderRadius:`12px`,padding:`14px`,background:`#fff`},children:[(0,$.jsx)(`strong`,{style:{display:`block`,marginBottom:`10px`},children:t}),(0,$.jsx)(`div`,{style:{width:`100%`,height:`190px`,overflow:`hidden`,borderRadius:`9px`,background:`#f1eee8`,marginBottom:`12px`},children:n.mediaUrl?(0,$.jsx)(`img`,{src:n.mediaUrl,alt:n.alt||t,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,$.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`grid`,placeItems:`center`,padding:`16px`,textAlign:`center`,color:`#777`,fontSize:`12px`},children:`No custom image — original fallback will show`})}),(0,$.jsx)(`label`,{children:`Upload Image`}),(0,$.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:t=>tt(e,t),disabled:fe||r,style:{width:`100%`,marginTop:`7px`,marginBottom:`8px`,padding:`8px`}}),(0,$.jsx)(`small`,{style:{display:`block`,marginBottom:`10px`},children:`Maximum 5 MB`}),(0,$.jsx)(`label`,{children:`Image URL`}),(0,$.jsx)(`input`,{value:n.mediaUrl,onChange:t=>et(e,`mediaUrl`,t.target.value),placeholder:`Cloudinary image URL`,disabled:fe||r,style:{width:`100%`,marginTop:`7px`,marginBottom:`10px`}}),(0,$.jsx)(`label`,{children:`Alt text`}),(0,$.jsx)(`input`,{value:n.alt,onChange:t=>et(e,`alt`,t.target.value),placeholder:`B2B collection image`,disabled:fe||r,style:{width:`100%`,marginTop:`7px`,marginBottom:`12px`}}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>nt(e),disabled:!n.mediaUrl||fe||r,style:{width:`100%`,border:`1px solid #c44`,color:`#a22`,background:`#fff`},children:r?`Uploading...`:fe?`Removing...`:`Remove Image`})]},e)})}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,marginTop:`18px`},children:[(0,$.jsx)(`button`,{type:`button`,className:`button`,onClick:rt,disabled:fe||ue||!!me,children:fe?`Saving...`:`Save B2B Collection`}),(0,$.jsx)(`button`,{type:`button`,onClick:$e,disabled:fe||ue||!!me,children:ue?`Loading...`:`Refresh`})]})]})]}),(0,$.jsxs)(`section`,{"data-admin-section":`blog`,style:{marginBottom:`50px`,padding:`28px`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`20px`,flexWrap:`wrap`,marginBottom:`24px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Website Content`}),(0,$.jsx)(`h2`,{children:`Blog Management`}),(0,$.jsx)(`p`,{children:`Publish stories, styling ideas and care guides for the XAAJ website.`})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,$.jsx)(`button`,{type:`button`,className:`button`,onClick:ct,children:`+ Add New Blog`}),(0,$.jsx)(`button`,{type:`button`,onClick:it,disabled:_e||ye,children:_e?`Loading...`:`Refresh`})]})]}),Te&&(0,$.jsxs)(`form`,{onSubmit:ft,style:{padding:`22px`,marginBottom:`28px`,border:`1px solid #e5e5e5`,borderRadius:`10px`,background:`#faf9f6`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`15px`,marginBottom:`22px`,flexWrap:`wrap`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Blog Editor`}),(0,$.jsx)(`h3`,{style:{margin:`5px 0 0`},children:Ce?`Edit Blog`:`Add New Blog`})]}),(0,$.jsx)(`button`,{type:`button`,onClick:ut,disabled:ye,children:`Cancel`})]}),(0,$.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(260px, 1fr))`,gap:`16px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`blog-title`,children:`Title *`}),(0,$.jsx)(`input`,{id:`blog-title`,name:`title`,value:xe.title,onChange:st,placeholder:`5 Ways to Style Your Dining Table`,required:!0})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`blog-slug`,children:`Slug *`}),(0,$.jsx)(`input`,{id:`blog-slug`,name:`slug`,value:xe.slug,onChange:at,placeholder:`5-ways-to-style-your-dining-table`,required:!0}),(0,$.jsx)(`small`,{children:`Used in the blog URL.`})]}),(0,$.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,$.jsx)(`label`,{htmlFor:`blog-cover-image`,children:`Cover Image URL *`}),(0,$.jsx)(`input`,{id:`blog-cover-image`,name:`coverImage`,value:xe.coverImage,onChange:at,placeholder:`https://...`,required:!0}),xe.coverImage&&(0,$.jsx)(`img`,{src:xe.coverImage,alt:`Blog cover preview`,style:{display:`block`,width:`220px`,height:`130px`,objectFit:`cover`,marginTop:`12px`,borderRadius:`8px`}}),(0,$.jsx)(`small`,{children:`Use a high-quality landscape image URL. Image upload can be connected to the existing media service next.`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`blog-category`,children:`Category *`}),(0,$.jsxs)(`select`,{id:`blog-category`,name:`category`,value:xe.category,onChange:at,required:!0,children:[(0,$.jsx)(`option`,{children:`Table Styling`}),(0,$.jsx)(`option`,{children:`Crockery Care`}),(0,$.jsx)(`option`,{children:`Home Decor`}),(0,$.jsx)(`option`,{children:`Dining`}),(0,$.jsx)(`option`,{children:`Entertaining`}),(0,$.jsx)(`option`,{children:`Lifestyle`}),(0,$.jsx)(`option`,{children:`XAAJ Stories`})]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`blog-author`,children:`Author *`}),(0,$.jsx)(`input`,{id:`blog-author`,name:`author`,value:xe.author,onChange:at,placeholder:`XAAJ Editorial`,required:!0})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`blog-date`,children:`Publish Date *`}),(0,$.jsx)(`input`,{id:`blog-date`,type:`date`,name:`publishDate`,value:xe.publishDate,onChange:at,required:!0})]}),(0,$.jsx)(`div`,{children:(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,cursor:`pointer`,marginTop:`28px`},children:[(0,$.jsx)(`input`,{type:`checkbox`,name:`isPublished`,checked:xe.isPublished,onChange:at}),`Published on website`]})}),(0,$.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,$.jsx)(`label`,{htmlFor:`blog-excerpt`,children:`Short Excerpt *`}),(0,$.jsx)(`textarea`,{id:`blog-excerpt`,name:`excerpt`,value:xe.excerpt,onChange:at,placeholder:`A short introduction that appears on the blog card...`,rows:3,maxLength:320,required:!0}),(0,$.jsx)(`small`,{children:`Keep this concise for the homepage card.`})]}),(0,$.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,$.jsx)(`label`,{htmlFor:`blog-content`,children:`Full Article / Content *`}),(0,$.jsx)(`textarea`,{id:`blog-content`,name:`content`,value:xe.content,onChange:at,placeholder:`Write the complete article here...`,rows:14,required:!0}),(0,$.jsx)(`small`,{children:`For now this accepts plain text. Rich-text formatting can be added without changing the blog data structure.`})]})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,marginTop:`20px`},children:[(0,$.jsx)(`button`,{type:`submit`,className:`button`,disabled:ye,children:ye?`Saving...`:Ce?`Update Blog`:`Save Blog`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>De(xe),disabled:!xe.title||!xe.content,children:`Preview`}),(0,$.jsx)(`button`,{type:`button`,onClick:ut,disabled:ye,children:`Cancel`})]})]}),_e?(0,$.jsx)(`p`,{children:`Loading blogs...`}):ge.length===0?(0,$.jsxs)(`div`,{style:{padding:`40px 20px`,textAlign:`center`,border:`1px dashed #d9d3ca`,borderRadius:`10px`},children:[(0,$.jsx)(`h3`,{children:`No blogs yet`}),(0,$.jsx)(`p`,{children:`Create your first blog and publish it to the website.`}),(0,$.jsx)(`button`,{type:`button`,className:`button`,onClick:ct,children:`+ Add New Blog`})]}):(0,$.jsx)(`div`,{style:{display:`grid`,gap:`14px`},children:ge.map(e=>{let t=!!(e.isPublished??e.published);return(0,$.jsxs)(`article`,{style:{display:`grid`,gridTemplateColumns:`150px 1fr auto`,gap:`18px`,alignItems:`center`,padding:`16px`,border:`1px solid #e5e5e5`,borderRadius:`10px`},children:[(0,$.jsx)(`div`,{style:{width:`150px`,height:`100px`,overflow:`hidden`,borderRadius:`8px`,background:`#f5f5f5`},children:e.coverImage?(0,$.jsx)(`img`,{src:e.coverImage,alt:e.title||`Blog`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,$.jsx)(`div`,{style:{height:`100%`,display:`grid`,placeItems:`center`,fontSize:`12px`},children:`No image`})}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,alignItems:`center`,flexWrap:`wrap`,marginBottom:`6px`},children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:e.category||`XAAJ Stories`}),(0,$.jsx)(`span`,{style:{padding:`5px 9px`,borderRadius:`999px`,background:t?`#edf7ed`:`#f5f5f5`,color:t?`#246b2a`:`#666`,fontSize:`12px`,fontWeight:600},children:t?`Published`:`Draft`})]}),(0,$.jsx)(`h3`,{style:{margin:`0 0 6px`},children:e.title}),(0,$.jsx)(`p`,{style:{margin:`0 0 7px`},children:e.excerpt||`No excerpt added.`}),(0,$.jsxs)(`small`,{children:[`By `,e.author||`XAAJ Editorial`,` · `,ht(e.publishDate)]})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`,justifyContent:`flex-end`},children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>dt(e),children:`Preview`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>lt(e),children:`Edit`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>pt(e),children:t?`Unpublish`:`Publish`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>mt(e),children:`Delete`})]})]},e._id)})}),K&&(0,$.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,style:{position:`fixed`,inset:0,zIndex:1200,background:`rgba(0,0,0,.5)`,padding:`24px`,overflowY:`auto`},onClick:()=>De(null),children:(0,$.jsxs)(`article`,{style:{maxWidth:`900px`,margin:`30px auto`,background:`#fff`,padding:`32px`,borderRadius:`14px`},onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`15px`,alignItems:`flex-start`,marginBottom:`22px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:K.category||`XAAJ Stories`}),(0,$.jsx)(`h2`,{style:{margin:`7px 0`},children:K.title}),(0,$.jsxs)(`small`,{children:[`By `,K.author||`XAAJ Editorial`,` · `,ht(K.publishDate)]})]}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>De(null),children:`Close`})]}),K.coverImage&&(0,$.jsx)(`img`,{src:K.coverImage,alt:K.title||`Blog cover`,style:{width:`100%`,maxHeight:`480px`,objectFit:`cover`,borderRadius:`10px`,marginBottom:`24px`}}),K.excerpt&&(0,$.jsx)(`p`,{style:{fontSize:`18px`,lineHeight:1.6},children:K.excerpt}),(0,$.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8},children:K.content})]})})]}),Pe&&(0,$.jsxs)(`section`,{style:{marginBottom:`50px`,padding:`28px`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`24px`,gap:`20px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Products`}),(0,$.jsx)(`h2`,{children:Me?`Edit Product`:`Add Product`})]}),(0,$.jsx)(`button`,{type:`button`,onClick:Mt,style:{padding:`8px 14px`,cursor:`pointer`},children:`Cancel`})]}),(0,$.jsxs)(`form`,{onSubmit:Nt,className:`checkout-form`,children:[(0,$.jsx)(`label`,{children:`Product Name *`}),(0,$.jsx)(`input`,{name:`name`,value:q.name,onChange:Tt,placeholder:`Example: Ivory Dinner Set`,required:!0}),(0,$.jsx)(`label`,{children:`Slug *`}),(0,$.jsx)(`input`,{name:`slug`,value:q.slug,onChange:Tt,placeholder:`ivory-dinner-set`,required:!0}),(0,$.jsx)(`label`,{children:`Category *`}),(0,$.jsxs)(`select`,{name:`category`,value:q.category,onChange:e=>{Tt(e),e.target.value!==`Dinnerware`&&je(e=>({...e,dinnerwareCollection:``}))},required:!0,children:[(0,$.jsx)(`option`,{value:``,children:`Select Category`}),ke.map(e=>(0,$.jsx)(`option`,{value:e,children:e},e))]}),q.category===`Dinnerware`&&(0,$.jsxs)(`div`,{style:{padding:`14px 16px`,marginTop:`4px`,border:`1px solid #e1d9cf`,borderRadius:`12px`,background:`#fffdf9`},children:[(0,$.jsxs)(`label`,{htmlFor:`dinnerware-subcategory`,children:[`Dinnerware collection `,(0,$.jsx)(`span`,{style:{color:`#948b81`,fontWeight:400},children:`(Optional)`})]}),(0,$.jsxs)(`select`,{id:`dinnerware-subcategory`,name:`dinnerwareCollection`,value:q.dinnerwareCollection,onChange:Tt,children:[(0,$.jsx)(`option`,{value:``,children:`Select collection (optional)`}),Oe.map(e=>(0,$.jsx)(`option`,{value:e,children:e},e))]}),(0,$.jsx)(`small`,{style:{display:`block`,marginTop:`8px`},children:`You can leave this blank. The product will still be saved under Dinnerware.`})]}),(0,$.jsx)(`label`,{htmlFor:`product-hsn-code`,children:`HSN Code *`}),(0,$.jsx)(`input`,{id:`product-hsn-code`,name:`hsnCode`,value:q.hsnCode,onChange:Tt,placeholder:`e.g. 69120010`,inputMode:`numeric`,pattern:`(?:[0-9]{4}|[0-9]{6}|[0-9]{8})`,maxLength:8,required:!0}),(0,$.jsx)(`label`,{children:`MRP (Original Price) *`}),(0,$.jsx)(`input`,{name:`mrp`,value:q.mrp,onChange:Tt,type:`number`,min:`0`,step:`0.01`,placeholder:`4500`,required:!0}),(0,$.jsx)(`small`,{children:`This price will appear crossed out only when it is higher than the selling price.`}),(0,$.jsx)(`label`,{children:`Selling Price *`}),(0,$.jsx)(`input`,{name:`price`,value:q.price,onChange:Tt,type:`number`,min:`0`,step:`0.01`,placeholder:`2499`,required:!0}),(0,$.jsx)(`label`,{children:`Stock`}),(0,$.jsx)(`input`,{name:`stock`,value:q.stock,onChange:Tt,type:`number`,min:`0`,step:`1`,placeholder:`20`}),(0,$.jsxs)(`div`,{style:{marginTop:`18px`,marginBottom:`18px`,padding:`18px`,border:`1px solid #e5e5e5`,borderRadius:`10px`,background:`#faf9f6`},children:[(0,$.jsx)(`h3`,{style:{margin:`0 0 6px`},children:`Shipping Package Details`}),(0,$.jsx)(`p`,{style:{margin:`0 0 16px`,color:`#666`,fontSize:`13px`},children:`Required for Velocity Shipping. Weight in kg and dimensions in cm.`}),(0,$.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(180px, 1fr))`,gap:`14px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`product-weight`,children:`Weight (kg) *`}),(0,$.jsx)(`input`,{id:`product-weight`,type:`number`,name:`weight`,value:q.shipping.weight,onChange:Et,placeholder:`Example: 2.5`,min:`0.001`,step:`0.001`,required:!0})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`product-length`,children:`Length (cm) *`}),(0,$.jsx)(`input`,{id:`product-length`,type:`number`,name:`length`,value:q.shipping.length,onChange:Et,placeholder:`Example: 35`,min:`0.1`,step:`0.1`,required:!0})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`product-breadth`,children:`Breadth (cm) *`}),(0,$.jsx)(`input`,{id:`product-breadth`,type:`number`,name:`breadth`,value:q.shipping.breadth,onChange:Et,placeholder:`Example: 30`,min:`0.1`,step:`0.1`,required:!0})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{htmlFor:`product-height`,children:`Height (cm) *`}),(0,$.jsx)(`input`,{id:`product-height`,type:`number`,name:`height`,value:q.shipping.height,onChange:Et,placeholder:`Example: 15`,min:`0.1`,step:`0.1`,required:!0})]})]})]}),(0,$.jsx)(`label`,{children:`Product Description *`}),(0,$.jsx)(`textarea`,{name:`description`,value:q.description,onChange:Tt,placeholder:`Write the main product description...`,rows:6,required:!0}),(0,$.jsx)(`label`,{children:`Product Details & Care`}),(0,$.jsx)(`textarea`,{name:`productDetails`,value:q.productDetails,onChange:Tt,placeholder:`Material, size, dimensions, care instructions, what's included, etc.`,rows:6}),(0,$.jsx)(`label`,{children:`Shipping & Payment`}),(0,$.jsx)(`textarea`,{name:`shippingPayment`,value:q.shippingPayment,onChange:Tt,placeholder:`Delivery time, shipping charges, payment information, etc.`,rows:5}),(0,$.jsx)(`label`,{children:`Return & Exchange`}),(0,$.jsx)(`textarea`,{name:`returnExchange`,value:q.returnExchange,onChange:Tt,placeholder:`Return window, exchange conditions and process...`,rows:5}),(0,$.jsx)(`label`,{children:`Product Images *`}),(0,$.jsx)(`div`,{style:{display:`grid`,gap:`10px`},children:q.images.map((e,t)=>(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,$.jsx)(`input`,{value:e,onChange:e=>Dt(t,e.target.value),placeholder:`Image URL ${t+1}`,style:{flex:1}}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>kt(t),disabled:q.images.length===1,title:`Remove image`,children:`Remove`})]},t))}),(0,$.jsx)(`button`,{type:`button`,onClick:Ot,style:{marginTop:`8px`,width:`fit-content`},children:`+ Add Another Image`}),(0,$.jsx)(`small`,{children:`Add as many product images as needed. The first image is used as the main product image.`}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,marginTop:`10px`},children:[(0,$.jsx)(`button`,{type:`submit`,className:`button`,disabled:Ie,children:Ie?`Saving...`:Me?`Update Product`:`Add Product`}),(0,$.jsx)(`button`,{type:`button`,onClick:Mt,disabled:Ie,children:`Cancel`})]})]})]}),(0,$.jsxs)(`section`,{"data-admin-section":`orders`,style:{marginBottom:`50px`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`20px`,gap:`20px`,flexWrap:`wrap`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Sales`}),(0,$.jsx)(`h2`,{children:`Customer Orders`}),(0,$.jsx)(`p`,{children:`View incoming orders and update their status.`})]}),(0,$.jsx)(`button`,{type:`button`,onClick:_t,disabled:f,children:f?`Loading...`:`Refresh Orders`})]}),f&&(0,$.jsx)(`p`,{children:`Loading customer orders...`}),!f&&u.length===0&&(0,$.jsxs)(`div`,{style:{padding:`40px 20px`,textAlign:`center`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsx)(`h3`,{children:`No orders yet`}),(0,$.jsx)(`p`,{children:`Customer orders will appear here after checkout.`})]}),!f&&u.length>0&&(0,$.jsx)(`div`,{style:{display:`grid`,gap:`14px`},children:u.map(e=>(0,$.jsxs)(`div`,{style:{border:`1px solid #e5e5e5`,borderRadius:`12px`,padding:`18px`,display:`grid`,gap:`14px`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`16px`,flexWrap:`wrap`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`strong`,{children:[`Order #`,String(e._id).slice(-8).toUpperCase()]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0 0`},children:[bt(e),` · `,xt(e)]}),(0,$.jsx)(`small`,{children:yt(e.createdAt)})]}),(0,$.jsxs)(`strong`,{children:[`₹`,Number(e.total||0).toLocaleString(`en-IN`)]})]}),(0,$.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(160px, 1fr))`,gap:`10px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Payment`}),(0,$.jsx)(`div`,{children:e.paymentStatus||`pending`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Items`}),(0,$.jsx)(`div`,{children:e.items?.reduce((e,t)=>e+Number(t.quantity||0),0)||0})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Phone`}),(0,$.jsx)(`div`,{children:St(e)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Status`}),(0,$.jsx)(`select`,{value:e.status||`pending`,disabled:g===e._id,onChange:t=>vt(e._id,t.target.value),children:Ct.map(e=>(0,$.jsx)(`option`,{value:e,children:wt(e)},e))})]})]}),(0,$.jsx)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:(0,$.jsx)(`button`,{type:`button`,onClick:()=>{h(e),b(e.courierName||``),S(e.trackingNumber||``)},children:`Details`})})]},e._id))}),m&&(0,$.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,.45)`,zIndex:1e3,padding:`24px`,overflowY:`auto`},onClick:()=>h(null),children:(0,$.jsxs)(`div`,{style:{maxWidth:`760px`,margin:`30px auto`,background:`#fff`,borderRadius:`14px`,padding:`28px`,boxShadow:`0 20px 60px rgba(0,0,0,.18)`},onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`20px`,marginBottom:`24px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Order details`}),(0,$.jsxs)(`h2`,{style:{marginBottom:`6px`},children:[`#`,String(m._id).slice(-8).toUpperCase()]}),(0,$.jsx)(`small`,{children:yt(m.createdAt)})]}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>h(null),children:`Close`})]}),(0,$.jsxs)(`div`,{style:{display:`grid`,gap:`18px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`Customer`}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Name:`}),` `,bt(m)]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Email:`}),` `,xt(m)]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Phone:`}),` `,St(m)]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`Shipping Address`}),(0,$.jsx)(`p`,{style:{margin:`6px 0`},children:m.shippingAddress?.address||`—`}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[m.shippingAddress?.city||`—`,`,`,` `,m.shippingAddress?.state||`—`,` `,m.shippingAddress?.pin||`—`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`Products`}),(0,$.jsx)(`div`,{style:{display:`grid`,gap:`10px`},children:m.items?.map((e,t)=>(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,borderBottom:`1px solid #eee`,paddingBottom:`10px`},children:[(0,$.jsxs)(`span`,{children:[e.name,` × `,e.quantity]}),(0,$.jsxs)(`strong`,{children:[`₹`,Number(e.price*e.quantity).toLocaleString(`en-IN`)]})]},`${e.product}-${t}`))})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`Payment`}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Status:`}),` `,m.paymentStatus||`pending`]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Provider:`}),` `,m.paymentProvider||`—`]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`,wordBreak:`break-all`},children:[(0,$.jsx)(`strong`,{children:`Razorpay Order ID:`}),` `,m.razorpayOrderId||`—`]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`,wordBreak:`break-all`},children:[(0,$.jsx)(`strong`,{children:`Razorpay Payment ID:`}),` `,m.razorpayPaymentId||`—`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`Order Total`}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Subtotal:`}),` ₹`,Number(m.subtotal||0).toLocaleString(`en-IN`)]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Shipping:`}),` ₹`,Number(m.shippingFee||0).toLocaleString(`en-IN`)]}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`,fontSize:`18px`},children:[(0,$.jsx)(`strong`,{children:`Total:`}),` ₹`,Number(m.total||0).toLocaleString(`en-IN`)]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`Delivery & Status`}),(0,$.jsx)(`label`,{style:{display:`block`,marginBottom:`6px`},children:`Courier Name`}),(0,$.jsx)(`input`,{value:y,onChange:e=>b(e.target.value),placeholder:`Example: Delhivery`,style:{width:`100%`,marginBottom:`14px`}}),(0,$.jsx)(`label`,{style:{display:`block`,marginBottom:`6px`},children:`Tracking Number`}),(0,$.jsx)(`input`,{value:x,onChange:e=>S(e.target.value),placeholder:`Example: DL123456789`,style:{width:`100%`,marginBottom:`14px`}}),(0,$.jsx)(`label`,{style:{display:`block`,marginBottom:`6px`},children:`Order Status`}),(0,$.jsx)(`select`,{value:m.status||`pending`,disabled:g===m._id,onChange:e=>vt(m._id,e.target.value,y,x),children:Ct.map(e=>(0,$.jsx)(`option`,{value:e,children:wt(e)},e))}),(m.courierName||m.trackingNumber)&&(0,$.jsxs)(`div`,{style:{marginTop:`14px`,padding:`12px`,background:`#f7f7f7`,borderRadius:`8px`},children:[(0,$.jsx)(`small`,{children:`Current delivery details`}),(0,$.jsxs)(`p`,{style:{margin:`6px 0`},children:[(0,$.jsx)(`strong`,{children:`Courier:`}),` `,m.courierName||`—`]}),(0,$.jsxs)(`p`,{style:{margin:0},children:[(0,$.jsx)(`strong`,{children:`Tracking:`}),` `,m.trackingNumber||`—`]})]})]})]})]})})]}),(0,$.jsxs)(`section`,{"data-admin-section":`products`,children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`20px`,gap:`20px`,flexWrap:`wrap`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Inventory`}),(0,$.jsx)(`h2`,{children:`Products`})]}),(0,$.jsxs)(`div`,{className:`product-header-actions`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`product-add-btn`,onClick:At,children:[(0,$.jsx)(lp,{size:15,strokeWidth:2}),(0,$.jsx)(`span`,{children:`Add Product`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`product-refresh-btn`,onClick:gt,disabled:c,children:[(0,$.jsx)(cp,{size:14,strokeWidth:1.9,className:c?`is-spinning`:``}),(0,$.jsx)(`span`,{children:c?`Loading...`:`Refresh`})]})]})]}),c&&(0,$.jsx)(`p`,{children:`Loading products...`}),!c&&o.length===0&&(0,$.jsxs)(`div`,{style:{padding:`40px 20px`,textAlign:`center`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsx)(`h3`,{children:`No products yet`}),(0,$.jsx)(`p`,{children:`Add your first product to start selling.`}),(0,$.jsx)(`button`,{type:`button`,className:`button`,onClick:At,children:`+ Add Product`})]}),!c&&o.length>0&&(0,$.jsx)(`div`,{style:{display:`grid`,gap:`16px`},children:o.map(e=>(0,$.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`90px 1fr auto`,gap:`20px`,alignItems:`center`,padding:`18px`,border:`1px solid #e5e5e5`,borderRadius:`12px`},children:[(0,$.jsx)(`div`,{style:{width:`90px`,height:`90px`,borderRadius:`8px`,overflow:`hidden`,background:`#f5f5f5`},children:e.images?.[0]?(0,$.jsx)(`img`,{src:e.images[0],alt:e.name,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,$.jsx)(`div`,{style:{height:`100%`,display:`grid`,placeItems:`center`,fontSize:`12px`},children:`No image`})}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{style:{margin:`0 0 6px`},children:e.name}),(0,$.jsx)(`p`,{style:{margin:`0 0 6px`},children:e.category}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`strong`,{children:[`₹`,Number(e.price||0).toLocaleString(`en-IN`)]}),Number(e.mrp??e.compareAtPrice??0)>Number(e.price||0)&&(0,$.jsxs)(`del`,{style:{marginLeft:`10px`},children:[`₹`,Number(e.mrp??e.compareAtPrice).toLocaleString(`en-IN`)]}),(0,$.jsxs)(`span`,{style:{marginLeft:`15px`},children:[`Stock:`,` `,e.stock??0]})]})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>jt(e),children:`Edit`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>Pt(e),children:`Archive`})]})]},e._id))})]})]})})]})]}):(0,$.jsxs)(`main`,{className:`page xaaj-admin-v2`,children:[(0,$.jsx)(`style`,{children:`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600&display=swap');
.xaaj-admin-v2{--ink:#24221f;--muted:#777169;--line:#e9e3da;--paper:#fffdf9;--cream:#f5f1ea;--accent:#8b6a43;--dark:#26231f;max-width:1500px!important;margin:0 auto!important;padding:34px 38px 90px!important;background:radial-gradient(circle at 85% 0%,rgba(139,106,67,.08),transparent 30%),#f8f5ef!important;font-family:'DM Sans',sans-serif;color:var(--ink)}
.xaaj-admin-v2 *{box-sizing:border-box}.xaaj-admin-v2 h1,.xaaj-admin-v2 h2,.xaaj-admin-v2 h3{font-family:'Playfair Display',serif;letter-spacing:-.025em}.xaaj-admin-v2 h1{font-size:42px!important;margin:4px 0 8px!important}.xaaj-admin-v2 h2{font-size:28px!important}.xaaj-admin-v2 p{color:var(--muted);line-height:1.65}.xaaj-admin-v2 .wrap{max-width:none!important}
/* header */
.xaaj-admin-v2 .admin-header,.xaaj-admin-v2 header:first-child{background:linear-gradient(135deg,#292620,#40382f)!important;color:#fff!important;border:0!important;border-radius:24px!important;padding:30px 34px!important;box-shadow:0 22px 55px rgba(38,35,31,.16)!important;position:relative;overflow:hidden}.xaaj-admin-v2 .admin-header:after,.xaaj-admin-v2 header:first-child:after{content:'';position:absolute;right:-90px;top:-100px;width:280px;height:280px;border:1px solid rgba(255,255,255,.12);border-radius:50%;box-shadow:0 0 0 45px rgba(255,255,255,.035),0 0 0 90px rgba(255,255,255,.025)}
/* buttons */
.xaaj-admin-v2 button,.xaaj-admin-v2 .button{appearance:none!important;border:1px solid #d8d0c4!important;background:#fff!important;color:#292621!important;border-radius:12px!important;padding:11px 17px!important;font:600 13px 'DM Sans',sans-serif!important;letter-spacing:.01em!important;cursor:pointer!important;transition:all .2s ease!important;box-shadow:0 2px 0 rgba(0,0,0,.02)!important}.xaaj-admin-v2 button:hover:not(:disabled){transform:translateY(-2px)!important;border-color:#b7a58e!important;box-shadow:0 9px 22px rgba(49,41,31,.10)!important}.xaaj-admin-v2 button.button,.xaaj-admin-v2 button[type=submit]{background:#292621!important;color:#fff!important;border-color:#292621!important;box-shadow:0 8px 20px rgba(41,38,33,.18)!important}.xaaj-admin-v2 button.button:hover,.xaaj-admin-v2 button[type=submit]:hover{background:#8b6a43!important;border-color:#8b6a43!important}.xaaj-admin-v2 button:disabled{opacity:.45!important;cursor:not-allowed!important;transform:none!important}
/* sections */
.xaaj-admin-v2 section{background:rgba(255,253,249,.92)!important;border:1px solid var(--line)!important;border-radius:22px!important;padding:30px!important;margin-bottom:28px!important;box-shadow:0 12px 35px rgba(63,53,41,.055)!important;backdrop-filter:blur(8px)}
.xaaj-admin-v2 section:hover{box-shadow:0 18px 45px rgba(63,53,41,.075)!important}.xaaj-admin-v2 .summary{position:relative!important;background:linear-gradient(145deg,#fffefa,#f4eee5)!important;border:1px solid #e5ddd2!important;border-radius:20px!important;padding:24px!important;min-height:125px!important;box-shadow:0 12px 28px rgba(57,47,35,.07)!important;overflow:hidden}.xaaj-admin-v2 .summary:after{content:'';position:absolute;right:-28px;bottom:-38px;width:100px;height:100px;border:1px solid rgba(139,106,67,.16);border-radius:50%}.xaaj-admin-v2 .summary strong{display:block!important;font-size:31px!important;font-family:'Playfair Display',serif!important}.xaaj-admin-v2 .summary span{display:block!important;margin-top:8px!important;color:var(--muted)!important;font-size:12px!important;text-transform:uppercase!important;letter-spacing:.12em!important}
/* controls */
.xaaj-admin-v2 input:not([type=checkbox]),.xaaj-admin-v2 textarea,.xaaj-admin-v2 select{background:#fffefa!important;border:1px solid #ded7cd!important;border-radius:11px!important;padding:12px 14px!important;color:#2c2925!important;outline:none!important;transition:.2s!important;box-shadow:inset 0 1px 2px rgba(0,0,0,.025)!important}.xaaj-admin-v2 input:not([type=checkbox]):focus,.xaaj-admin-v2 textarea:focus,.xaaj-admin-v2 select:focus{border-color:#9b7c58!important;box-shadow:0 0 0 4px rgba(139,106,67,.10)!important}.xaaj-admin-v2 label{font-weight:600!important;font-size:13px!important;color:#4c4741!important}
/* lists/cards */
.xaaj-admin-v2 img{border-radius:14px}.xaaj-admin-v2 [style*="border: '1px solid #e5e5e5'"]{border-color:#e7dfd5!important;border-radius:15px!important;background:#fffefa!important}.xaaj-admin-v2 small{color:#8b857d!important}.xaaj-admin-v2 .eyebrow{text-transform:uppercase!important;letter-spacing:.16em!important;font-size:10px!important;font-weight:700!important;color:#9a7954!important}
/* status */
.xaaj-admin-v2 [style*="borderRadius: '999px'"]{box-shadow:0 2px 8px rgba(0,0,0,.04)!important}
/* message */
.xaaj-admin-v2 div[style*="background: '#edf7ed'"]{border:1px solid #cfe2d0!important;border-radius:13px!important;box-shadow:0 8px 20px rgba(56,95,60,.07)!important}.xaaj-admin-v2 div[style*="background: '#fff1f0'"]{border:1px solid #edd0cd!important;border-radius:13px!important}
@media(max-width:900px){.xaaj-admin-v2{padding:20px 14px 60px!important}.xaaj-admin-v2 h1{font-size:32px!important}.xaaj-admin-v2 section{padding:21px!important;border-radius:18px!important}}
`}),(0,$.jsxs)(`div`,{className:`wrap narrow`,children:[(0,$.jsx)(`h1`,{children:`Admin access required`}),(0,$.jsx)(`p`,{children:`Sign in with an administrator account to manage the store.`})]})]})}var xp={dinner:`/images/dinnerSets.png`,plate:`/images/plates.png`,mug:`/images/cupPlate.png`,bowl:`/images/bowl.png`,glass:`/images/Glassware.png`,vase:`/images/vase.png`};xp.dinner,xp.plate,xp.mug,xp.bowl,xp.glass,xp.vase;var Sp=[{name:`Dinner Sets`,image:xp.dinner},{name:`Plates`,image:xp.plate},{name:`Bowls`,image:xp.bowl},{name:`Cups & Mugs`,image:xp.mug},{name:`Serveware`,image:xp.vase},{name:`Drinkware`,image:xp.glass}],Cp=e=>`₹${e.toLocaleString(`en-IN`)}`;Pi.registerPlugin(Zs,Ac);var wp=`/xaaj-logo-no-tagline.png`,Tp=`https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1800&q=88`,Ep=[{image:`https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1800&q=88`,alt:`Handmade stoneware arranged on a dining table`},{image:`https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1800&q=88`,alt:`Warm dining table with handcrafted tableware`},{image:`https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1800&q=88`,alt:`Elegant ceramic tableware collection`}],Dp=`https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1200&q=86`,Op=`https://res.cloudinary.com/kswukbpp/image/upload/v1790273032/ChatGPT_Image_Sep_24_2026_11_33_30_PM.png`,kp={main:{url:Dp,alt:`XAAJ Horeca collection`},sideOne:{url:Op,alt:`XAAJ Horeca tableware`},sideTwo:{url:`https://res.cloudinary.com/kswukbpp/image/upload/v1790269104/ChatGPT_Image_Sep_24_2026_10_27_52_PM.png`,alt:`XAAJ Horeca serveware`}},Ap=[{name:`Drinkware`,slug:`drinkware`,fallback:`https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1200&q=88`},{name:`Gifting`,slug:`gifting`,fallback:Dp},{name:`Dinnerware`,slug:`dinnerware`,fallback:Op},{name:`Serveware`,slug:`serveware`,fallback:`https://res.cloudinary.com/kswukbpp/image/upload/v1790269104/ChatGPT_Image_Sep_24_2026_10_27_52_PM.png`},{name:`B2B`,slug:`b2b`,fallback:Tp,isB2B:!0}],jp=e=>String(e||``).toLowerCase().trim().replace(/&/g,`and`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),Mp=(e,t)=>t===`video`||/\.(mp4|webm|ogg|mov)(?:[?#].*)?$/i.test(String(e||``).trim())?`video`:`image`,Np=(e,t)=>Mp(e,t);function Pp(){let{user:e}=np(),{count:t,cart:n,total:r}=sp(),i=du(),a=cu(),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(``),w=(0,_.useRef)(null),[T,E]=(0,_.useState)(`Free shipping on orders above ₹1,000`),[D,O]=(0,_.useState)(!0),[k,A]=(0,_.useState)(!1),[j,M]=(0,_.useState)(!1),N=()=>{w.current&&=(window.clearTimeout(w.current),null)},P=()=>{N(),M(!1),s(!1),d(!0),w.current=window.setTimeout(()=>{l(!1),d(!1),w.current=null},420)},F=()=>{N(),h(!1),x(!0),w.current=window.setTimeout(()=>{y(!1),x(!1),w.current=null},380)},I=()=>{p(!1),c&&P(),g&&F()},ee=()=>{N(),M(!1),h(!1),y(!1),x(!1),p(!1),l(!0),requestAnimationFrame(()=>s(!0))};(0,_.useEffect)(()=>{if(a.pathname!==`/`){A(!1);return}let e=()=>A(window.scrollY>55);return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[a.pathname]),(0,_.useEffect)(()=>(document.body.classList.add(`xaaj-header-mounted`),()=>{document.body.classList.remove(`xaaj-header-mounted`),N()}),[]),(0,_.useEffect)(()=>{let e=!1;async function t(){try{let t=await Q(`/cms/announcement`),n=t?.data||t?.announcement||t||{};if(e)return;(n?.text||n?.message)&&E(n.text||n.message),n?.enabled!==void 0&&O(!!n.enabled)}catch(e){console.error(`Announcement load error:`,e)}}return t(),()=>{e=!0}},[]),(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&I()};document.addEventListener(`keydown`,e);let t=c||g||f;return document.body.style.overflow=t?`hidden`:``,document.body.style.paddingRight=t?`${window.innerWidth-document.documentElement.clientWidth}px`:``,()=>{document.removeEventListener(`keydown`,e),document.body.style.overflow=``,document.body.style.paddingRight=``}},[c,g,f]);let L=e=>{I(),i(e)},te=(Array.isArray(Sp)?Sp.filter(Boolean):[]).slice(0,2),R=Array.isArray(n)?n:Array.isArray(n?.items)?n.items:n&&typeof n==`object`?Object.values(n).filter(e=>e&&typeof e==`object`&&(e.id||e._id||e.name)):[];return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`xaaj-ref-header-shell ${a.pathname===`/`?`xaaj-home-header`:``} ${k?`is-scrolled`:``}`,children:[D&&T&&(0,$.jsx)(`div`,{className:`xaaj-ref-announcement ${k?`is-hidden`:``}`,children:(0,$.jsx)(`span`,{children:T})}),(0,$.jsxs)(`header`,{className:`xaaj-ref-header`,children:[(0,$.jsx)(`div`,{className:`xaaj-ref-header-side xaaj-ref-header-side-left`,"aria-hidden":`true`}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-ref-mobile-menu-toggle ${c&&o?`is-open`:``}`,"aria-label":c&&o?`Close menu`:`Open menu`,"aria-expanded":c&&o,onClick:()=>{c&&o?P():ee()},children:c&&o?(0,$.jsx)(Ef,{size:31,strokeWidth:1.15}):(0,$.jsx)(rf,{size:31,strokeWidth:1.15})}),(0,$.jsxs)(`div`,{className:`xaaj-ref-header-center`,children:[(0,$.jsxs)(Z,{to:`/`,className:`xaaj-ref-logo`,onClick:I,"aria-label":`XAAJ home`,children:[(0,$.jsx)(`img`,{src:wp,alt:`XAAJ`}),(0,$.jsx)(`span`,{children:`STORES CRAFTED IN EARTH`})]}),(0,$.jsxs)(`nav`,{className:`xaaj-ref-main-nav`,"aria-label":`Collection navigation`,children:[(0,$.jsxs)(`div`,{className:`xaaj-ref-nav-dropdown`,children:[(0,$.jsxs)(Z,{className:`xaaj-ref-nav-trigger ${new URLSearchParams(a.search).get(`category`)===`Dinnerware`?`active`:``}`,to:`/shop?category=Dinnerware`,"aria-haspopup":`true`,children:[(0,$.jsx)(`span`,{children:`Dinnerware`}),(0,$.jsx)(qd,{className:`xaaj-ref-nav-chevron`,size:13,strokeWidth:1.35})]}),(0,$.jsx)(`div`,{className:`xaaj-ref-nav-menu`,role:`menu`,"aria-label":`Dinnerware categories`,children:[`Speckled White`,`Dove Gray`,`Blush Pink`,`Beachgrass Green`,`Midnight Blue`].map(e=>(0,$.jsx)(Z,{to:`/shop?category=Dinnerware`,role:`menuitem`,onClick:I,children:e},e))})]}),(0,$.jsx)(Z,{className:new URLSearchParams(a.search).get(`category`)===`Drinkware`?`active`:``,to:`/shop?category=Drinkware`,children:`Drinkware`}),(0,$.jsx)(Z,{className:new URLSearchParams(a.search).get(`category`)===`Serveware`?`active`:``,to:`/shop?category=Serveware`,children:`Serveware`}),(0,$.jsx)(Z,{className:new URLSearchParams(a.search).get(`category`)===`Gifting`?`active`:``,to:`/shop?category=Gifting`,children:`Gifting`}),(0,$.jsx)(Z,{to:`/enquiry`,children:`B2B`})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-ref-actions`,children:[(0,$.jsx)(`button`,{type:`button`,className:`xaaj-ref-header-icon`,"aria-label":`Search`,onClick:()=>{f?p(!1):(c&&P(),g&&F(),p(!0))},children:(0,$.jsx)(mf,{size:19,strokeWidth:1.45})}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-ref-header-icon`,"aria-label":`Account`,onClick:()=>L(e?.role===`admin`?`/admin`:`/account`),children:(0,$.jsx)(wf,{size:19,strokeWidth:1.45})}),(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-ref-cart-button ${m?`is-active`:``}`,"aria-label":`View cart`,onClick:e=>{e.preventDefault(),e.stopPropagation(),I(),i(`/cart`)},children:[(0,$.jsx)(vf,{size:19,strokeWidth:1.45}),t>0&&(0,$.jsx)(`span`,{children:t})]})]})]})]}),f&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{type:`button`,className:`xaaj-ref-search-backdrop`,"aria-label":`Close search`,onClick:()=>p(!1)}),(0,$.jsx)(`div`,{className:`xaaj-ref-search-panel`,role:`dialog`,"aria-modal":`true`,"aria-label":`Search products`,children:(0,$.jsxs)(`div`,{className:`xaaj-ref-search-row`,children:[(0,$.jsxs)(`form`,{className:`xaaj-ref-search-form`,onSubmit:e=>{e.preventDefault();let t=S.trim();t&&L(`/shop?search=${encodeURIComponent(t)}`)},children:[(0,$.jsx)(`input`,{autoFocus:!0,value:S,onChange:e=>C(e.target.value),placeholder:`Search`,"aria-label":`Search products`}),(0,$.jsx)(`button`,{type:`submit`,className:`xaaj-ref-search-submit`,"aria-label":`Submit search`,children:(0,$.jsx)(mf,{size:20,strokeWidth:1.35})})]}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-ref-search-close`,"aria-label":`Close search`,onClick:()=>p(!1),children:(0,$.jsx)(Ef,{size:27,strokeWidth:1.25})})]})})]}),(c||g)&&(0,$.jsx)(`button`,{type:`button`,className:`xaaj-ref-overlay`,"aria-label":`Close panel`,onClick:I}),c&&(0,$.jsxs)(`aside`,{className:`xaaj-ref-menu-drawer ${o?`is-open`:`is-closing`}`,"aria-label":`Main menu`,children:[(0,$.jsxs)(`div`,{className:`xaaj-ref-mobile-menu-content`,children:[(0,$.jsx)(`nav`,{"aria-label":`Mobile collection navigation`,children:j?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-ref-mobile-dinnerware-back`,onClick:()=>M(!1),"aria-label":`Back to collections`,children:[(0,$.jsx)(Ud,{className:`xaaj-ref-mobile-dinnerware-back-icon`,size:22,strokeWidth:1.15}),(0,$.jsx)(`span`,{children:`Dinnerware`})]}),[`Speckled White`,`Dove Gray`,`Blush Pink`,`Beachgrass Green`,`Midnight Blue`].map(e=>(0,$.jsx)(Z,{to:`/shop?category=Dinnerware`,onClick:P,children:(0,$.jsx)(`span`,{children:e})},e))]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-ref-mobile-dinnerware-toggle`,onClick:()=>M(!0),"aria-expanded":`false`,children:[(0,$.jsx)(`span`,{children:`Dinnerware`}),(0,$.jsx)(Ud,{size:22,strokeWidth:1.15})]}),(0,$.jsx)(Z,{to:`/shop?category=Drinkware`,onClick:P,children:(0,$.jsx)(`span`,{children:`Drinkware`})}),(0,$.jsx)(Z,{to:`/shop?category=Serveware`,onClick:P,children:(0,$.jsx)(`span`,{children:`Serveware`})}),(0,$.jsx)(Z,{to:`/shop?category=Gifting`,onClick:P,children:(0,$.jsx)(`span`,{children:`Gifting`})}),(0,$.jsx)(Z,{to:`/enquiry`,onClick:P,children:(0,$.jsx)(`span`,{children:`B2B`})})]})}),(0,$.jsxs)(`div`,{className:`xaaj-ref-mobile-menu-secondary`,children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>L(`/story`),children:`Our Story`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>L(`/faq`),children:`FAQs`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>L(`/contact`),children:`Contact Us`})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-ref-menu-links`,children:[(0,$.jsxs)(`div`,{className:`xaaj-ref-menu-primary`,children:[(0,$.jsxs)(`button`,{onClick:()=>L(`/shop`),children:[`Shop all `,(0,$.jsx)(Ud,{size:14})]}),(0,$.jsxs)(`button`,{onClick:()=>L(`/collections`),children:[`Collections `,(0,$.jsx)(Ud,{size:14})]}),(0,$.jsxs)(`button`,{onClick:()=>L(`/shop?filter=new`),children:[`New arrivals `,(0,$.jsx)(Ud,{size:14})]}),(0,$.jsxs)(`button`,{onClick:()=>L(`/shop?filter=best-selling`),children:[`Best sellers `,(0,$.jsx)(Ud,{size:14})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-ref-menu-columns`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`DINING`}),[`Dinner Sets`,`Plates`,`Bowls`,`Serveware`].map(e=>(0,$.jsx)(`button`,{onClick:()=>L(`/shop?category=${encodeURIComponent(e)}`),children:e},e))]}),(0,$.jsx)(`div`,{children:(0,$.jsx)(`button`,{type:`button`,onClick:()=>L(`/shop?category=Drinkware`),children:`DRINKWARE`})}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`ABOUT XAAJ`}),(0,$.jsx)(`button`,{onClick:()=>L(`/story`),children:`Our story`}),(0,$.jsx)(`button`,{onClick:()=>L(`/contact`),children:`Contact`}),(0,$.jsx)(`button`,{onClick:()=>L(`/faq`),children:`FAQs`})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-ref-menu-bottom`,children:[(0,$.jsx)(`button`,{onClick:()=>L(`/account`),children:`My account`}),(0,$.jsx)(`button`,{onClick:()=>L(`/wishlist`),children:`Wishlist`}),(0,$.jsx)(`small`,{children:`Thoughtful tableware, shaped slowly in India.`})]})]}),(0,$.jsx)(`div`,{className:`xaaj-ref-menu-feature`,children:te[0]?(0,$.jsxs)(Z,{to:`/shop?category=${encodeURIComponent(te[0].name)}`,onClick:I,children:[(0,$.jsx)(`img`,{src:te[0].image,alt:te[0].name}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:te[0].name}),(0,$.jsxs)(`strong`,{children:[`Explore collection `,(0,$.jsx)(Ud,{size:14})]})]})]}):(0,$.jsxs)(Z,{to:`/shop`,onClick:I,children:[(0,$.jsx)(`img`,{src:Tp,alt:`XAAJ collection`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`XAAJ`}),(0,$.jsxs)(`strong`,{children:[`Explore collection `,(0,$.jsx)(Ud,{size:14})]})]})]})})]}),g&&(0,v.createPortal)((0,$.jsxs)(`aside`,{className:`xaaj-ref-cart-drawer ${m?`is-open`:`is-closing`}`,"aria-label":`Shopping cart`,children:[(0,$.jsxs)(`div`,{className:`xaaj-ref-drawer-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Your selection`}),(0,$.jsxs)(`h2`,{children:[`Cart `,(0,$.jsx)(`small`,{children:R.length})]})]}),(0,$.jsx)(`button`,{type:`button`,onClick:e=>{e.preventDefault(),e.stopPropagation(),F()},"aria-label":`Close cart`,children:(0,$.jsx)(Ef,{size:20,strokeWidth:1.35})})]}),(0,$.jsx)(`div`,{className:`xaaj-ref-cart-items`,children:R.length===0?(0,$.jsxs)(`div`,{className:`xaaj-ref-empty-cart`,children:[(0,$.jsx)(`div`,{className:`xaaj-ref-empty-cart-mark`,children:(0,$.jsx)(vf,{size:25,strokeWidth:1.15})}),(0,$.jsx)(`span`,{children:`Nothing here yet`}),(0,$.jsx)(`p`,{children:`Your table is waiting for something beautiful.`}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>L(`/shop`),children:[`Explore the collection `,(0,$.jsx)(Ud,{size:14})]})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`xaaj-ref-cart-intro`,children:[(0,$.jsxs)(`span`,{children:[R.length,` `,R.length===1?`piece`:`pieces`,` selected`]}),(0,$.jsx)(`small`,{children:`Curated for everyday rituals`})]}),R.map(e=>(0,$.jsxs)(`div`,{className:`xaaj-ref-cart-item`,children:[(0,$.jsx)(`img`,{src:e.image,alt:e.name}),(0,$.jsxs)(`div`,{className:`xaaj-ref-cart-item-copy`,children:[(0,$.jsx)(`span`,{children:e.category||`XAAJ`}),(0,$.jsx)(`strong`,{children:e.name}),(0,$.jsxs)(`p`,{children:[Cp(e.price),` `,(0,$.jsxs)(`em`,{children:[`× `,e.qty||1]})]})]})]},e.id||e._id))]})}),R.length>0&&(0,$.jsxs)(`div`,{className:`xaaj-ref-cart-footer`,children:[(0,$.jsxs)(`div`,{className:`xaaj-ref-cart-subtotal`,children:[(0,$.jsx)(`span`,{children:`Subtotal`}),(0,$.jsx)(`strong`,{children:Cp(r)})]}),(0,$.jsx)(`p`,{className:`xaaj-ref-cart-note`,children:`Shipping calculated at checkout`}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>L(`/cart`),children:[`View cart `,(0,$.jsx)(Ud,{size:15})]}),(0,$.jsxs)(`button`,{type:`button`,className:`secondary`,onClick:()=>L(`/checkout`),children:[`Checkout `,(0,$.jsx)(Ud,{size:15})]})]})]}),document.body),(0,$.jsx)(`style`,{children:`
        body.xaaj-header-mounted{padding-top:0!important;background:#ffffff}
        .xaaj-ref-header-shell{position:relative;z-index:9000;width:100%;background:#fffdf9}
        .xaaj-ref-header-shell,.xaaj-ref-header-shell.xaaj-home-header,.xaaj-ref-header-shell.xaaj-home-header.is-scrolled{background:#ffffff!important}
        .xaaj-ref-header-shell .xaaj-ref-header,.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header{background:#ffffff!important}
        .xaaj-ref-announcement{height:42px;max-height:42px;background:#252923;color:#f8f3e9;display:flex;align-items:center;justify-content:center;font-family:'Gotham Book','Gotham',Arial,sans-serif;font-size:11px;font-weight:400;letter-spacing:1.45px;line-height:1;text-transform:none;overflow:hidden;white-space:nowrap;transition:max-height .35s ease,opacity .25s ease,visibility .35s ease,padding .35s ease}
        .xaaj-ref-announcement::before,.xaaj-ref-announcement::after{display:none!important}
        .xaaj-ref-announcement.is-hidden{max-height:42px;height:42px;opacity:0;visibility:hidden;pointer-events:none}
        .xaaj-ref-header{height:144px;background:#fffdf9;border:0;display:grid;grid-template-columns:1fr auto 1fr;align-items:start;padding:15px 4.2vw 0;position:relative;color:#302d28}
        .xaaj-ref-header-center{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-width:290px}
        .xaaj-ref-logo{display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none;color:#302d28;line-height:1}
        .xaaj-ref-logo img{width:96px;height:66px;object-fit:contain;object-position:center}
        .xaaj-ref-logo span{font-family:'Gotham Book','Gotham',Arial,sans-serif;font-size:7px;letter-spacing:2.4px;margin-top:-2px;color:#777168;text-transform:uppercase}
        .xaaj-ref-main-nav{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:31px;
            margin-top:34px;
            padding:0 10px;
            white-space:nowrap;
          }

          .xaaj-ref-nav-dropdown{
            position:relative;
            display:flex;
            align-items:center;
            height:25px;
          }

          .xaaj-ref-nav-trigger{
            gap:4px;
          }

          .xaaj-ref-nav-chevron{
            margin-top:1px;
            transition:transform .28s cubic-bezier(.22,1,.36,1);
          }

          .xaaj-ref-nav-dropdown:hover .xaaj-ref-nav-chevron,
          .xaaj-ref-nav-dropdown:focus-within .xaaj-ref-nav-chevron{
            transform:rotate(180deg);
          }

          .xaaj-ref-nav-menu{
            position:absolute;
            top:calc(100% + 13px);
            left:50%;
            min-width:208px;
            padding:12px 0;
            background:#ffffff!important;
            border:1px solid rgba(48,45,40,.22);
            border-radius:7px;
            box-shadow:0 12px 32px rgba(48,45,40,.10);
            transform:translate(-50%, -7px);
            opacity:0;
            visibility:hidden;
            pointer-events:none;
            transition:opacity .22s ease, transform .25s cubic-bezier(.22,1,.36,1), visibility .22s ease;
            z-index:10000;
          }

          .xaaj-ref-nav-menu::before{
            content:"";
            position:absolute;
            top:-7px;
            left:50%;
            width:12px;
            height:12px;
            background:#fffdf9;
            border-left:1px solid rgba(48,45,40,.22);
            border-top:1px solid rgba(48,45,40,.22);
            transform:translateX(-50%) rotate(45deg);
          }

          .xaaj-ref-nav-dropdown:hover .xaaj-ref-nav-menu,
          .xaaj-ref-nav-dropdown:focus-within .xaaj-ref-nav-menu{
            opacity:1;
            visibility:visible;
            pointer-events:auto;
            transform:translate(-50%, 0);
          }

          .xaaj-ref-nav-menu a{
            display:flex!important;
            width:100%;
            min-height:38px;
            align-items:center;
            padding:0 20px!important;
            color:#5d5750!important;
            font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
            font-size:13px!important;
            font-weight:400;
            letter-spacing:.01em;
            text-decoration:none;
            transition:background .2s ease, color .2s ease, padding-left .2s ease;
          }

          .xaaj-ref-nav-menu a::after{
            display:none!important;
          }

          .xaaj-ref-nav-menu a:hover{
            color:#302d28!important;
            background:rgba(48,45,40,.045);
            padding-left:24px!important;
          }

          .xaaj-ref-nav-menu a.active{
            color:#302d28!important;
          }

          .xaaj-ref-main-nav a{
            position:relative;
            display:inline-flex;
            align-items:center;
            height:25px;
            color:#57534e;
            text-decoration:none;
            font-family:inherit;
            font-size:13px;
            font-weight:400;
            line-height:1;
            letter-spacing:.015em;
            transition:color .25s ease, opacity .25s ease;
          }

          .xaaj-ref-main-nav a::after{
            content:"";
            position:absolute;
            left:0;
            right:0;
            bottom:-7px;
            height:1px;
            background:#2d2a26;
            transform:scaleX(0);
            transform-origin:center;
            transition:transform .28s cubic-bezier(.22,1,.36,1);
          }

          .xaaj-ref-main-nav a:hover{
            color:#24211e;
          }

          .xaaj-ref-main-nav a:hover::after,
          .xaaj-ref-main-nav a.active::after{
            transform:scaleX(1);
          }

          .xaaj-ref-main-nav a.active{
            color:#24211e;
          }

          @media(max-width:850px){
            .xaaj-ref-main-nav{
              gap:20px;
              margin-top:18px;
              overflow-x:auto;
              justify-content:flex-start;
              scrollbar-width:none;
              -webkit-overflow-scrolling:touch;
            }

            .xaaj-ref-main-nav::-webkit-scrollbar{
              display:none;
            }

            .xaaj-ref-main-nav a{
              flex:0 0 auto;
              font-size:12px;
            }

            .xaaj-ref-nav-dropdown{
              flex:0 0 auto;
            }

            .xaaj-ref-nav-menu{
              left:0;
              transform:translate(0, -7px);
            }

            .xaaj-ref-nav-menu::before{
              left:30px;
            }

            .xaaj-ref-nav-dropdown:hover .xaaj-ref-nav-menu,
            .xaaj-ref-nav-dropdown:focus-within .xaaj-ref-nav-menu{
              transform:translate(0, 0);
            }
          }

          @media(max-width:520px){
            .xaaj-ref-main-nav{
              gap:18px;
              padding:0 4px;
            }

            .xaaj-ref-main-nav a{
              font-size:11px;
            }
          }.xaaj-ref-main-nav a{font-family:'Gotham Book','Gotham',Arial,sans-serif;font-size:13px!important;line-height:1;color:#5d5750;text-decoration:none;position:relative;padding:3px 0;transition:color .25s ease}
        .xaaj-ref-main-nav a::after{content:'';position:absolute;left:0;right:0;bottom:-4px;height:1px;background:#302d28;transform:scaleX(0);transform-origin:center;transition:transform .25s ease}
        .xaaj-ref-main-nav a:hover,.xaaj-ref-main-nav a.active{color:#302d28}
        .xaaj-ref-main-nav a.active::after{transform:scaleX(1)}
        .xaaj-ref-header-side{min-width:1px}
        .xaaj-ref-actions{justify-self:end;display:flex;align-items:center;gap:7px;padding-top:18px}
        .xaaj-ref-header-icon,.xaaj-ref-cart-button{appearance:none;border:0;background:transparent;color:#302d28;width:39px;height:39px;display:grid;place-items:center;padding:0;cursor:pointer;transition:transform .2s ease,color .2s ease}
        .xaaj-ref-header-icon:hover,.xaaj-ref-cart-button:hover{transform:translateY(-1px);color:#8d4e3d}
        .xaaj-ref-cart-button{position:relative}.xaaj-ref-cart-button span{position:absolute;right:1px;top:1px;min-width:14px;height:14px;border-radius:50%;background:#b84d38;color:#fff;font:600 8px/1 'Gotham Book','Gotham',Arial,sans-serif;display:grid;place-items:center}
        /* Keep the logo/nav geometry identical while scrolling. Only the surface changes. */
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled{position:relative;top:auto}
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header-center,.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-logo,.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-main-nav,.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-actions{transform:none}
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header{height:144px;padding-top:15px;align-items:start;border-bottom:1px solid rgba(48,45,40,.08);background:#fffdf9;box-shadow:0 6px 20px rgba(48,45,40,.035);backdrop-filter:none;-webkit-backdrop-filter:none}
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-logo img{width:96px;height:66px}
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-logo span{display:block}
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-main-nav{margin-top:18px;gap:31px}
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-actions{padding-top:18px}
        .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header-center{flex-direction:column;gap:0;align-items:center}
        .xaaj-ref-overlay{
          position:fixed!important;
          top:42px!important;
          right:0!important;
          bottom:0!important;
          left:0!important;
          border:0!important;
          background:rgba(26,25,22,.34)!important;
          z-index:8999!important;
          cursor:pointer!important;
        }
        .xaaj-ref-cart-drawer{
          position:fixed!important;
          top:42px!important;
          right:0!important;
          bottom:0!important;
          left:auto!important;
          width:min(520px,92vw)!important;
          height:calc(100dvh - 42px)!important;
          max-height:calc(100dvh - 42px)!important;
          min-height:0!important;
          margin:0!important;
          padding:0!important;
          background:#fffdf9!important;
          z-index:2147483647!important;
          display:flex!important;
          flex-direction:column!important;
          overflow:hidden!important;
          box-sizing:border-box!important;
          box-shadow:-28px 0 70px rgba(25,22,18,.17)!important;
          transform:translateX(100%)!important;
          transition:transform .38s cubic-bezier(.22,1,.36,1)!important;
          will-change:transform;
        }
        .xaaj-ref-cart-drawer.is-open{transform:translateX(0)!important}
        .xaaj-ref-cart-drawer.is-closing{transform:translateX(100%)!important}
        .xaaj-ref-drawer-head{padding:28px 28px 20px;border-bottom:1px solid rgba(42,39,34,.1);display:flex;justify-content:space-between;align-items:flex-start}.xaaj-ref-drawer-head span{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#8a8379}.xaaj-ref-drawer-head h2{margin:5px 0 0;font:400 32px 'Gotham Book','Gotham',Arial,sans-serif}.xaaj-ref-drawer-head h2 small{font:400 11px 'Gotham Book','Gotham',Arial,sans-serif;color:#888;margin-left:4px}.xaaj-ref-drawer-head button{width:36px;height:36px;display:grid;place-items:center;border:0;background:transparent;color:#302d28;cursor:pointer}
        .xaaj-ref-cart-intro{display:flex;justify-content:space-between;align-items:baseline;padding:0 0 16px;margin-bottom:18px;border-bottom:1px solid rgba(42,39,34,.08)}.xaaj-ref-cart-intro span{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:#5f5a52}.xaaj-ref-cart-intro small{font-size:10px;color:#9a9389}.xaaj-ref-empty-cart-mark{width:58px;height:58px;border:1px solid rgba(42,39,34,.14);border-radius:50%;display:grid;place-items:center;margin-bottom:18px;color:#665f56}.xaaj-ref-empty-cart>span{font-size:9px;letter-spacing:1.6px;text-transform:uppercase;color:#8b847a}.xaaj-ref-empty-cart p{margin:7px 0 18px!important}.xaaj-ref-cart-item-copy{min-width:0}.xaaj-ref-cart-item-copy p em{font-style:normal;color:#8b857b;margin-left:3px}.xaaj-ref-cart-note{margin:0 0 14px;color:#8a8379;font-size:9px;letter-spacing:.3px}.xaaj-ref-cart-subtotal{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px}.xaaj-ref-cart-subtotal span{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:#6a645c}.xaaj-ref-cart-subtotal strong{font:400 20px 'Gotham Book','Gotham',Arial,sans-serif;color:#292621}
        .xaaj-ref-cart-items{padding:34px 34px 36px;overflow-y:auto;overflow-x:hidden;flex:1;min-height:0}.xaaj-ref-cart-item{display:grid;grid-template-columns:82px 1fr;gap:14px;padding:0 0 18px;margin-bottom:18px;border-bottom:1px solid rgba(42,39,34,.08)}.xaaj-ref-cart-item img{width:82px;height:102px;object-fit:cover;background:#eeeae1}.xaaj-ref-cart-item span{font-size:8px;text-transform:uppercase;letter-spacing:1px;color:#8b857b}.xaaj-ref-cart-item strong{display:block;font:400 17px 'Gotham Book','Gotham',Arial,sans-serif;margin:5px 0}.xaaj-ref-cart-item p{margin:0;color:#68635c;font-size:11px}.xaaj-ref-empty-cart{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#787269}.xaaj-ref-empty-cart p{max-width:220px;font:400 20px 'Gotham Book','Gotham',Arial,sans-serif;line-height:1.25}.xaaj-ref-empty-cart button{display:flex;align-items:center;gap:7px;border:0;background:none;color:#8d4e3d;font-size:11px;cursor:pointer}.xaaj-ref-cart-footer{padding:24px 34px 30px;border-top:1px solid rgba(42,39,34,.1);flex:0 0 auto;background:#fffdf9}.xaaj-ref-cart-footer>div{display:flex;justify-content:space-between;margin-bottom:16px;color:#605b53;font-size:12px}.xaaj-ref-cart-footer>div strong{color:#292621;font-size:14px}.xaaj-ref-cart-footer button{width:100%;height:45px;border:1px solid #302d28;background:#302d28;color:#fff;display:flex;align-items:center;justify-content:center;gap:8px;font-size:10px;text-transform:uppercase;letter-spacing:1.3px;cursor:pointer;margin-top:8px}.xaaj-ref-cart-footer button.secondary{background:transparent;color:#302d28}
        .xaaj-ref-search-backdrop{
          position:fixed;
          top:44px;
          right:0;
          bottom:0;
          left:0;
          border:0;
          background:rgba(25,24,21,.48);
          z-index:9490;
          cursor:pointer;
        }

        .xaaj-ref-search-panel{
          position:fixed;
          top:44px;
          left:0;
          right:0;
          height:144px;
          z-index:9700;
          background:#fffdf9;
          border-bottom:1px solid rgba(42,39,34,.08);
          box-shadow:0 10px 24px rgba(35,32,28,.05);
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 28px;
          box-sizing:border-box;
        }

        .xaaj-ref-search-row{
          width:min(824px,100%);
          display:flex;
          align-items:center;
          justify-content:center;
          gap:16px;
        }

        .xaaj-ref-search-form{
          position:relative;
          width:min(770px,calc(100vw - 112px));
          height:51px;
          margin:0;
          border:1px solid #96928d;
          border-radius:6px;
          background:#fffdf9;
          display:flex;
          align-items:center;
          box-sizing:border-box;
          overflow:hidden;
        }

        .xaaj-ref-search-form input{
          width:100%;
          height:100%;
          border:0;
          outline:0;
          background:transparent;
          color:#3d3a36;
          padding:0 58px 0 20px;
          font:400 15px/1 'Gotham Book','Gotham',Arial,sans-serif;
          letter-spacing:.25px;
          box-sizing:border-box;
        }

        .xaaj-ref-search-form input::placeholder{
          color:#66615c;
          opacity:1;
        }

        .xaaj-ref-search-submit{
          position:absolute;
          top:0;
          right:0;
          width:52px;
          height:50px;
          border:0!important;
          background:transparent!important;
          color:#5b5752!important;
          display:grid!important;
          place-items:center!important;
          padding:0!important;
          cursor:pointer;
        }

        .xaaj-ref-search-close{
          width:36px!important;
          height:51px!important;
          border:0!important;
          background:transparent!important;
          color:#413e39!important;
          display:grid!important;
          place-items:center!important;
          padding:0!important;
          cursor:pointer;
          flex:0 0 36px;
        }

        .xaaj-ref-search-close:hover{
          color:#8d4e3d!important;
        }
        .xaaj-ref-mobile-menu-toggle{
          display:none;
          position:absolute;
          left:14px;
          top:10px;
          width:42px;
          height:42px;
          border:0;
          background:transparent;
          color:#292722;
          padding:0;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:5;
        }

        .xaaj-ref-mobile-menu-content{
          display:none;
        }

        @media(max-width:850px){
          .xaaj-ref-mobile-menu-toggle{
            display:flex;
          }

          .xaaj-ref-menu-drawer{
            position:fixed!important;
            top:148px!important;
            left:0!important;
            right:auto!important;
            bottom:0!important;
            width:min(88vw, 420px)!important;
            max-width:calc(100vw - 54px)!important;
            height:calc(100dvh - 148px)!important;
            margin:0!important;
            padding:0!important;
            background:#f8f5f5!important;
            color:#292722!important;
            border:0!important;
            border-radius:0!important;
            box-shadow:18px 0 55px rgba(28,25,22,.14)!important;
            transform:translateX(-105%)!important;
            transition:transform .42s cubic-bezier(.22,1,.36,1)!important;
            overflow-y:auto!important;
            overflow-x:hidden!important;
            z-index:2147483000!important;
          }

          .xaaj-ref-menu-drawer.is-open{
            transform:translateX(0)!important;
          }

          .xaaj-ref-menu-drawer.is-closing{
            transform:translateX(-105%)!important;
          }

          .xaaj-ref-menu-drawer > .xaaj-ref-menu-links,
          .xaaj-ref-menu-drawer > .xaaj-ref-menu-feature{
            display:none!important;
          }

          .xaaj-ref-mobile-menu-content{
            display:flex;
            min-height:100%;
            flex-direction:column;
            justify-content:space-between;
            padding:104px 0 24px;
          }

          .xaaj-ref-mobile-menu-content nav{
            display:flex;
            flex-direction:column;
          }

          .xaaj-ref-mobile-menu-content nav a{
            min-height:76px;
            display:flex!important;
            align-items:center;
            justify-content:space-between;
            padding:0 28px 0 26px!important;
            color:#292722!important;
            text-decoration:none;
            font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif!important;
            font-size:28px!important;
            font-weight:500!important;
            line-height:1!important;
            letter-spacing:-.02em!important;
            border-bottom:1px solid rgba(42,39,34,.08);
            transition:background .2s ease, padding-left .2s ease;
          }

          .xaaj-ref-mobile-menu-content nav a:first-child{
            border-top:1px solid rgba(42,39,34,.08);
          }

          .xaaj-ref-mobile-menu-content nav a:hover,
          .xaaj-ref-mobile-menu-content nav a:focus-visible{
            background:rgba(42,39,34,.045);
            padding-left:30px!important;
            outline:none;
          }

          .xaaj-ref-mobile-menu-secondary{
            display:flex;
            align-items:center;
            gap:22px;
            padding:21px 26px 0;
            border-top:1px solid rgba(42,39,34,.10);
          }

          .xaaj-ref-mobile-menu-secondary button{
            border:0;
            background:none;
            padding:0;
            color:#666059;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:11px;
            letter-spacing:.06em;
            cursor:pointer;
          }

          .xaaj-ref-mobile-menu-secondary button:hover{
            color:#292722;
          }

          .xaaj-ref-actions{
            padding-top:11px;
          }

          .xaaj-ref-actions .xaaj-ref-header-icon[aria-label="Account"]{
            display:none;
          }

          .xaaj-ref-actions .xaaj-ref-header-icon,
          .xaaj-ref-actions .xaaj-ref-cart-button{
            width:37px;
            height:37px;
          }

          .xaaj-ref-mobile-menu-toggle.is-open{
            z-index:2147483001;
          }

          .xaaj-reference-hero{
            padding:34px 14px 48px;
          }

          .xaaj-reference-hero-heading{
            padding:0 8px 34px;
          }

          .xaaj-reference-hero-heading h1{
            max-width:360px;
            font-size:clamp(39px,10.3vw,49px);
            line-height:1.02;
            letter-spacing:-.035em;
          }

          .xaaj-reference-hero-grid{
            grid-template-columns:repeat(2,minmax(0,1fr))!important;
            gap:12px!important;
          }

          .xaaj-reference-hero-card-top{
            height:auto!important;
            aspect-ratio:.66 / 1!important;
          }

          .xaaj-reference-hero-bottom{
            grid-column:1 / -1!important;
            grid-template-columns:1fr!important;
            gap:12px!important;
            margin-top:0!important;
          }

          .xaaj-reference-hero-bottom-card{
            height:auto;
          }

          .xaaj-reference-hero-bottom-card img,
          .xaaj-reference-hero-bottom-card video{
            height:auto!important;
            aspect-ratio:.82 / 1!important;
          }

          .xaaj-reference-hero-label{
            height:72px!important;
            min-height:72px!important;
            flex:0 0 72px!important;
            padding:15px 15px!important;
            gap:8px!important;
            font-size:21px!important;
          }

          .xaaj-reference-hero-label svg{
            width:17px;
            height:17px;
          }
        }

        @media(max-width:520px){
          .xaaj-ref-menu-drawer{
            top:140px!important;
            height:calc(100dvh - 140px)!important;
          }

          .xaaj-ref-overlay{
            top:140px!important;
          }
        }

        @media(max-width:430px){
          .xaaj-ref-mobile-menu-content{
            padding-top:96px;
          }

          .xaaj-ref-mobile-menu-content nav a{
            min-height:70px;
            padding-left:23px!important;
            padding-right:22px!important;
            font-size:26px!important;
          }

          .xaaj-reference-hero{
            padding-left:12px!important;
            padding-right:12px!important;
          }

          .xaaj-reference-hero-grid{
            gap:10px!important;
          }

          .xaaj-reference-hero-bottom{
            gap:10px!important;
          }

          .xaaj-reference-hero-label{
            height:68px;
            min-height:68px;
            flex-basis:68px;
            padding-left:13px;
            padding-right:13px;
            font-size:20px!important;
          }
        }

        @media(max-width:850px){
          .xaaj-ref-overlay{
            top:148px!important;
          }

          .xaaj-ref-cart-drawer{
            top:36px!important;
            height:calc(100dvh - 36px)!important;
            max-height:calc(100dvh - 36px)!important;
            width:min(520px,96vw)!important;
          }
          .xaaj-ref-announcement{height:36px;max-height:36px;font-size:10px;letter-spacing:1.15px}
          .xaaj-ref-header{height:112px;padding:10px 15px 0}
          .xaaj-ref-logo img{width:82px;height:54px}.xaaj-ref-logo span{font-size:5.5px;letter-spacing:1.8px}
          .xaaj-ref-main-nav{gap:20px;margin-top:9px}.xaaj-ref-main-nav a{font-size:13px}
          .xaaj-ref-actions{padding-top:11px;gap:0}.xaaj-ref-header-icon,.xaaj-ref-cart-button{width:34px;height:34px}
          .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header{height:112px;padding-top:10px;align-items:start}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header-center{gap:0;flex-direction:column}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-main-nav{gap:20px;margin-top:9px}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-logo img{width:82px;height:54px}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-logo span{display:block}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-actions{padding-top:11px}
        }
        @media(max-width:520px){
          .xaaj-ref-cart-drawer{
            top:38px!important;
            width:100vw!important;
            height:calc(100dvh - 38px)!important;
            max-height:calc(100dvh - 38px)!important;
          }
          .xaaj-ref-header{height:104px;padding-left:10px;padding-right:10px}.xaaj-ref-header-center{min-width:0}.xaaj-ref-logo img{width:76px;height:50px}.xaaj-ref-logo span{font-size:4.8px;letter-spacing:1.5px}.xaaj-ref-main-nav{gap:15px}.xaaj-ref-main-nav a{font-size:14px}.xaaj-ref-actions{padding-top:8px}.xaaj-ref-header-icon,.xaaj-ref-cart-button{width:31px;height:31px}
          .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header-center{gap:0;flex-direction:column}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-main-nav{gap:15px;margin-top:9px}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-main-nav a{font-size:14px}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-logo img{width:76px;height:50px}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-logo span{display:block}.xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-actions{padding-top:8px}
        }
        @media(max-width:850px){
          .xaaj-ref-search-backdrop{
            top:38px;
          }

          .xaaj-ref-search-panel{
            top:38px;
            height:124px;
            padding:0 18px;
          }

          .xaaj-ref-search-row{
            width:100%;
            gap:9px;
          }

          .xaaj-ref-search-form{
            width:calc(100vw - 73px);
            height:50px;
          }

          .xaaj-ref-search-form input{
            padding-left:16px;
            padding-right:48px;
            font-size:15px;
          }

          .xaaj-ref-search-submit{
            width:48px;
            height:49px;
          }

          .xaaj-ref-search-close{
            width:34px!important;
            flex-basis:34px!important;
          }
        }

      

        /* Final mobile navigation: premium, minimal, drawer-only. */
        @media (max-width: 850px){
          .xaaj-ref-main-nav{
            display:none!important;
          }

          .xaaj-ref-header{
            height:104px;
            padding:8px 14px 0;
          }

          .xaaj-ref-header-center{
            min-width:0;
            height:92px;
            justify-content:flex-start;
          }

          .xaaj-ref-logo{
            gap:0;
          }

          .xaaj-ref-logo img{
            width:82px;
            height:58px;
          }

          .xaaj-ref-logo span{
            display:block!important;
            margin-top:1px!important;
            font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
            font-size:6.2px!important;
            line-height:1!important;
            letter-spacing:2.05px!important;
            color:#777168!important;
            white-space:nowrap;
          }

          .xaaj-ref-actions{
            padding-top:9px;
            gap:0;
          }

          .xaaj-ref-actions .xaaj-ref-header-icon[aria-label="Account"]{
            display:none!important;
          }

          .xaaj-ref-actions .xaaj-ref-header-icon,
          .xaaj-ref-actions .xaaj-ref-cart-button{
            width:36px;
            height:36px;
          }

          .xaaj-ref-mobile-menu-toggle{
            display:flex!important;
            left:12px;
            top:24px;
            width:42px;
            height:42px;
          }

          /* Premium mobile drawer */
          .xaaj-ref-menu-drawer{
            top:140px!important;
            left:0!important;
            width:min(88vw,420px)!important;
            max-width:calc(100vw - 46px)!important;
            height:calc(100dvh - 140px)!important;
            padding:0!important;
            background:#f8f5f5!important;
            box-shadow:18px 0 55px rgba(28,25,22,.12)!important;
          }

          .xaaj-ref-overlay{
            top:140px!important;
          }

          .xaaj-ref-menu-drawer > .xaaj-ref-menu-links,
          .xaaj-ref-menu-drawer > .xaaj-ref-menu-feature{
            display:none!important;
          }

          .xaaj-ref-mobile-menu-content{
            display:flex!important;
            min-height:100%;
            padding:54px 0 24px!important;
            justify-content:space-between;
            box-sizing:border-box;
          }

          .xaaj-ref-mobile-menu-content nav{
            display:flex;
            flex-direction:column;
            width:100%;
          }

          /* Clean menu items: no separators */
          .xaaj-ref-mobile-menu-content nav a,
          .xaaj-ref-mobile-dinnerware-toggle,
          .xaaj-ref-mobile-dinnerware-back{
            min-height:62px;
            width:100%;
            padding:0 24px!important;
            display:flex!important;
            align-items:center;
            justify-content:space-between;
            box-sizing:border-box;
            color:#292722!important;
            background:transparent!important;
            border:0!important;
            font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif!important;
            font-size:22px!important;
            font-weight:500!important;
            line-height:1!important;
            letter-spacing:-.015em!important;
            text-decoration:none;
            text-align:left;
            cursor:pointer;
            transition:color .25s ease,opacity .25s ease,transform .25s ease;
          }

          .xaaj-ref-mobile-menu-content nav a:first-child,
          .xaaj-ref-mobile-dinnerware-toggle,
          .xaaj-ref-mobile-dinnerware-back{
            border-top:0!important;
          }

          .xaaj-ref-mobile-dinnerware-toggle:hover,
          .xaaj-ref-mobile-dinnerware-toggle:focus-visible,
          .xaaj-ref-mobile-menu-content nav a:hover,
          .xaaj-ref-mobile-menu-content nav a:focus-visible,
          .xaaj-ref-mobile-dinnerware-back:hover,
          .xaaj-ref-mobile-dinnerware-back:focus-visible{
            background:transparent!important;
            padding-left:24px!important;
            color:#756b62!important;
            outline:none;
            transform:translateX(2px);
          }

          .xaaj-ref-mobile-dinnerware-back{
            justify-content:flex-start;
            gap:14px;
          }

          .xaaj-ref-mobile-dinnerware-back-icon{
            flex:0 0 auto;
            transform:rotate(180deg);
            opacity:.75;
          }

          /* Minimal footer links */
          .xaaj-ref-mobile-menu-secondary{
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            gap:16px 22px;
            padding:20px 24px 0;
            margin-top:auto;
            border-top:0!important;
          }

          .xaaj-ref-mobile-menu-secondary button{
            border:0;
            background:none;
            padding:0;
            color:#706960;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:10px;
            letter-spacing:.07em;
            cursor:pointer;
            transition:color .2s ease,opacity .2s ease;
          }

          .xaaj-ref-mobile-menu-secondary button:hover{
            color:#292722;
          }
        }

        @media (max-width:430px){
          .xaaj-ref-mobile-menu-toggle{
            left:10px;
            top:21px;
            width:40px;
            height:40px;
          }

          .xaaj-ref-logo img{
            width:76px!important;
            height:52px!important;
          }

          .xaaj-ref-logo span{
            font-size:5.5px!important;
            letter-spacing:1.75px!important;
            margin-top:1px!important;
          }

          .xaaj-ref-mobile-menu-content{
            padding-top:48px!important;
          }

          .xaaj-ref-mobile-menu-content nav a,
          .xaaj-ref-mobile-dinnerware-toggle,
          .xaaj-ref-mobile-dinnerware-back{
            min-height:59px;
            padding-left:20px!important;
            padding-right:20px!important;
            font-size:21px!important;
          }

          .xaaj-ref-mobile-dinnerware-toggle:hover,
          .xaaj-ref-mobile-dinnerware-toggle:focus-visible,
          .xaaj-ref-mobile-menu-content nav a:hover,
          .xaaj-ref-mobile-menu-content nav a:focus-visible,
          .xaaj-ref-mobile-dinnerware-back:hover,
          .xaaj-ref-mobile-dinnerware-back:focus-visible{
            padding-left:20px!important;
          }

          .xaaj-ref-mobile-menu-secondary{
            padding-left:20px;
            padding-right:20px;
            gap:14px 20px;
          }
        }
`})]})}function Fp({children:e,to:t,onClick:n,light:r=!1,className:i=``}){return(0,$.jsxs)(t?Z:`button`,{to:t,onClick:n,className:`button ${r?`button-light`:``} ${i}`,children:[e,(0,$.jsx)(Ud,{size:15})]})}function Ip({rating:e=0,reviews:t=0}){let n=Math.max(0,Math.min(5,Number(e)||0)),r=Number(t)||0,i=Math.floor(n),a=n-i>=.5,o=5-i-!!a;return(0,$.jsxs)(`span`,{className:`rating`,"aria-label":`${n.toFixed(1)} out of 5 stars, ${r} reviews`,children:[(0,$.jsxs)(`span`,{className:`rating-stars`,children:[`★`.repeat(i),a&&`★`,`☆`.repeat(o)]}),r>0?(0,$.jsxs)(`small`,{children:[n.toFixed(1),` (`,r,`)`]}):(0,$.jsx)(`small`,{children:`No reviews yet`})]})}var Lp=!1,Rp=()=>{try{return new URLSearchParams(window.location.search).get(`xaajPreview`)===`1`||Lp}catch{return Lp}};function zp({product:e}){let{add:t,wish:n,toggleWish:r}=sp(),[i,a]=(0,_.useState)(!1),o=e.id||e._id,s=n.includes(o),c=e.images?.[1]||``;return(0,$.jsxs)(`article`,{className:`xaaj-editorial-card`,children:[(0,$.jsxs)(`div`,{className:`xaaj-editorial-card-media`,children:[(0,$.jsxs)(Z,{to:`/product/${e.slug}`,"aria-label":`View ${e.name}`,children:[(0,$.jsx)(`img`,{className:`primary`,src:e.image,alt:e.name,loading:`lazy`}),c&&(0,$.jsx)(`img`,{className:`secondary`,src:c,alt:``,"aria-hidden":`true`,loading:`lazy`})]}),e.tag&&(0,$.jsx)(`span`,{className:`xaaj-editorial-tag`,children:e.tag}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-editorial-wish ${s?`liked`:``}`,onClick:e=>{e.preventDefault(),e.stopPropagation(),r(o)},"aria-label":s?`Remove from wishlist`:`Add to wishlist`,children:(0,$.jsx)(Zd,{size:16,fill:s?`currentColor`:`none`})}),(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-editorial-add ${i?`added`:``}`,onClick:n=>{n.preventDefault(),n.stopPropagation(),!Rp()&&(t(e),a(!0),window.dispatchEvent(new CustomEvent(`xaaj:cart-added`)),window.setTimeout(()=>a(!1),800))},children:[i?(0,$.jsx)(Gd,{size:15}):(0,$.jsx)(ff,{size:15}),(0,$.jsx)(`span`,{children:i?`Added`:`Add`})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-editorial-card-copy`,children:[(0,$.jsx)(`span`,{children:e.category||`XAAJ Collection`}),(0,$.jsx)(Z,{to:`/product/${e.slug}`,children:(0,$.jsx)(`h3`,{children:e.name})}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:Cp(e.price)}),Number(e.old||0)>Number(e.price||0)&&(0,$.jsx)(`del`,{children:Cp(e.old)})]})]}),(0,$.jsx)(`style`,{children:`
        .xaaj-editorial-card{min-width:0;color:#2c2924}.xaaj-editorial-card-media{position:relative;background:#f1eee7;overflow:hidden;aspect-ratio:4/5}.xaaj-editorial-card-media>a{display:block;width:100%;height:100%}.xaaj-editorial-card-media img{width:100%;height:100%;display:block;object-fit:cover;transition:opacity .45s ease,transform .8s cubic-bezier(.22,1,.36,1)}.xaaj-editorial-card-media .secondary{position:absolute;inset:0;opacity:0}.xaaj-editorial-card:hover .secondary{opacity:1}.xaaj-editorial-card:hover .primary{transform:scale(1.018)}.xaaj-editorial-tag{position:absolute;left:10px;top:10px;background:#fffdf9;padding:5px 7px;font-size:7px;letter-spacing:1px;text-transform:uppercase}.xaaj-editorial-wish{position:absolute;right:10px;top:10px;width:31px;height:31px;border:0;border-radius:50%;background:rgba(255,253,249,.9);display:grid;place-items:center;color:#302d28;cursor:pointer}.xaaj-editorial-wish.liked{color:#9a4c3d}.xaaj-editorial-add{position:absolute;right:10px;bottom:10px;height:34px;min-width:34px;border:1px solid rgba(255,255,255,.8);background:rgba(255,253,249,.92);color:#292621;display:flex;align-items:center;justify-content:center;gap:6px;padding:0 10px;font-size:9px;text-transform:uppercase;letter-spacing:1px;cursor:pointer;transition:all .25s}.xaaj-editorial-add span{display:none}.xaaj-editorial-add:hover,.xaaj-editorial-add.added{background:#2f7048;color:#fff;border-color:#2f7048}.xaaj-editorial-add:hover span,.xaaj-editorial-add.added span{display:inline}.xaaj-editorial-card-copy{padding:10px 1px 0}.xaaj-editorial-card-copy>span{display:block;color:#8a8379;font-size:8px;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:5px}.xaaj-editorial-card-copy h3{margin:0 0 6px;font:400 15px 'Gotham Book','Gotham',Arial,sans-serif;line-height:1.2}.xaaj-editorial-card-copy a{text-decoration:none;color:inherit}.xaaj-editorial-card-copy>div{display:flex;align-items:center;gap:7px;font-size:11px}.xaaj-editorial-card-copy del{color:#9b958b}.xaaj-editorial-card-copy strong{font-weight:500}
        @media(max-width:600px){.xaaj-editorial-card-media{aspect-ratio:3/4}.xaaj-editorial-card-copy h3{font-size:14px}.xaaj-editorial-add{min-width:32px;width:32px;padding:0}.xaaj-editorial-add span{display:none!important}}
        /* Final mobile header: Account icon sits between Search and Cart. */
        @media (max-width:850px){
          .xaaj-ref-actions .xaaj-ref-header-icon[aria-label="Account"]{
            display:grid!important;
            place-items:center!important;
          }

          .xaaj-ref-actions{
            gap:0!important;
          }

          .xaaj-ref-actions .xaaj-ref-header-icon,
          .xaaj-ref-actions .xaaj-ref-cart-button{
            width:36px!important;
            height:36px!important;
          }
        }

        @media (max-width:520px){
          .xaaj-ref-actions .xaaj-ref-header-icon[aria-label="Account"]{
            display:grid!important;
            place-items:center!important;
          }

          .xaaj-ref-actions .xaaj-ref-header-icon,
          .xaaj-ref-actions .xaaj-ref-cart-button{
            width:33px!important;
            height:33px!important;
          }
        }

      `})]})}function Bp({eyebrow:e,title:t,action:n}){return(0,$.jsxs)(`div`,{className:`section-heading`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:e}),(0,$.jsx)(`h2`,{style:{fontWeight:500},children:t})]}),n&&(0,$.jsxs)(Z,{to:n.to,children:[n.label,(0,$.jsx)(Ud,{size:14})]})]})}function Vp(){let{products:e,bestSellingProducts:t,newArrivals:n}=sp(),r=Array.isArray(e)?e:[],i=Array.isArray(t)&&t.length?t:r.slice(0,4),a=Array.isArray(n)&&n.length?n:r.slice(4,8),o=Ep[0]?.image||Tp;Ep[1]?.image,Ep[2]?.image;let s=Array.isArray(Sp)?Sp.slice(0,5):[],[c,l]=(0,_.useState)({});(0,_.useEffect)(()=>{let e=!1;return(async()=>{try{let t=await Q(`/cms/category-hero`),n=t?.data?.categories||t?.data?.items||t?.data?.heroes||t?.categories||t?.items||t?.heroes||t?.data||[];if(!Array.isArray(n)||e)return;let r={};n.forEach(e=>{if(!e||e.enabled===!1)return;let t=e.mediaUrl||e.image||e.imageUrl||e.videoUrl||e.url||``,n=jp(e.categorySlug||e.slug||e.categoryName||e.name||e.category?.slug||e.category?.name),i=n===`glassware`?`drinkware`:n,a=i===`horeca`?`b2b`:i;a&&t&&(r[a]={url:t,mediaType:Mp(t,e.mediaType),alt:e.alt||e.title||``})}),e||l(r)}catch(t){e||console.error(`Category hero CMS load error:`,t)}})(),()=>{e=!0}},[]);let u=Ap.map(e=>({...e,...c[e.slug]||{}})),[d,f]=(0,_.useState)({url:Dp,mediaType:`image`,alt:`XAAJ handcrafted tableware arranged on a linen table`,enabled:!0});(0,_.useEffect)(()=>{let e=!1;return(async()=>{try{let t=await Q(`/cms/brand-story`),n=t?.data?.brandStory||t?.data?.story||t?.data?.item||t?.brandStory||t?.story||t?.item||t?.data||t||null,r=Array.isArray(n)?n.find(e=>e&&typeof e==`object`):n&&typeof n==`object`?n:null,i=r?.mediaUrl||r?.image||r?.imageUrl||r?.videoUrl||r?.url||``;if(e)return;let a=r?.enabled===void 0?r?.isActive===void 0||!!r.isActive:!!r.enabled;f({url:i||Dp,mediaType:Np(i||Dp,r?.mediaType),alt:r?.alt||r?.title||`XAAJ handcrafted tableware arranged on a linen table`,enabled:a})}catch(t){e||console.error(`Brand Story CMS load error:`,t)}})(),()=>{e=!0}},[]);let[p,m]=(0,_.useState)(kp);(0,_.useEffect)(()=>{let e=!1;return(async()=>{try{let t=await Q(`/cms/horeca-collection`),n=t?.data?.items||t?.data?.horeca||t?.data?.media||t?.items||t?.horeca||t?.media||t?.data||t||null,r=Array.isArray(n)?n:n&&typeof n==`object`?Object.entries(n).map(([e,t])=>({...t&&typeof t==`object`?t:{mediaUrl:t},slot:e})):[],i={...kp};r.forEach(e=>{if(!e||e.enabled===!1)return;let t=e.slot||e.key||e.position||e.name||``,n=String(t).trim().toLowerCase().replace(/[\s_-]+/g,``),r=n===`main`||n===`primary`||n===`left`?`main`:n===`sideone`||n===`side1`||n===`top`||n===`righttop`?`sideOne`:n===`sidetwo`||n===`side2`||n===`bottom`||n===`rightbottom`?`sideTwo`:null;if(!r)return;let a=String(e.mediaUrl||e.image||e.imageUrl||e.url||``).trim();a&&(i[r]={...i[r],url:a,alt:e.alt||e.title||i[r].alt})}),e||m(i)}catch(t){e||console.error(`Horeca collection CMS load error:`,t)}})(),()=>{e=!0}},[]);let h=e=>String(e||``).toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9]+/g,``);[`Plates`,`Bowls`,`Cups & Mugs`,`Serveware`].map((e,t)=>{let n=h(e),i=(Array.isArray(Sp)?Sp:[]).find(e=>{let t=h(e?.name);return t===n||t.includes(n)||n.includes(t)});if(!i)return null;let a=r.find(e=>{let t=h(e?.category);return t===n||t.includes(n)||n.includes(t)})||r[t]||null;return{...i,showcaseProduct:a}}).filter(Boolean);let[g,v]=(0,_.useState)({image:o,mediaType:`image`,mobileImage:o,alt:`XAAJ handcrafted tableware`});(0,_.useEffect)(()=>{let e=!1;return(async()=>{try{let t=await Kf.getHero(),n=(Array.isArray(t?.data?.slides)?t.data.slides:[]).filter(e=>e?.enabled!==!1&&e?.image).sort((e,t)=>Number(e?.order??0)-Number(t?.order??0))[0];!e&&n?.image&&v({image:n.image,mediaType:n.mediaType===`video`?`video`:`image`,mobileImage:n.mobileImage||n.image,alt:n.alt||`XAAJ handcrafted tableware`})}catch(t){e||console.error(`Hero CMS load error:`,t)}})(),()=>{e=!0}},[o]);let y=(0,_.useRef)(null);(0,_.useRef)(null),(0,_.useRef)(null),(0,_.useRef)(null);let b=(0,_.useRef)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useRef)(null),w=(0,_.useRef)(null),[T,E]=(0,_.useState)(!1);return(0,_.useLayoutEffect)(()=>{let e=y.current;if(!e)return;let t=Pi.context(()=>{(e.parentElement?.querySelectorAll(`[data-xaaj-cinema-reveal]:not(.xaaj-brand-story)`)||[]).forEach((e,t)=>{Pi.fromTo(e,{y:42,opacity:.35},{y:0,opacity:1,duration:.85,ease:`power3.out`,immediateRender:!1,scrollTrigger:{trigger:e,start:`top 88%`,end:`top 55%`,toggleActions:`play none none reverse`,invalidateOnRefresh:!0},delay:Math.min(t*.04,.16)})});let t=b.current;if(t){let e=x.current,n=S.current,r=Array.from(t.querySelectorAll(`.xaaj-brand-story-block`)),i=C.current,a=w.current,o=window.matchMedia(`(min-width: 851px)`).matches;if(e&&n&&r.length&&o){Pi.set(e,{clearProps:`transform`,force3D:!0}),Pi.set(r,{autoAlpha:0,y:34,force3D:!0}),Pi.set(r[0],{autoAlpha:1,y:0}),Pi.set(n,{scale:1.06,yPercent:0,transformOrigin:`center center`,force3D:!0}),i&&Pi.set(i,{scaleY:0,transformOrigin:`top center`}),a&&(a.textContent=`03 / 06 · 01`);let o=Pi.timeline({defaults:{ease:`power2.out`},scrollTrigger:{trigger:t,start:`top top`,end:`bottom top`,pin:e,pinSpacing:!1,anticipatePin:1,scrub:1.15,invalidateOnRefresh:!0,fastScrollEnd:!0,onUpdate:e=>{if(i&&(i.style.transform=`scaleY(${e.progress})`),a){let t=e.progress<.34?1:e.progress<.68?2:3;a.textContent=`03 / 06 · 0${t}`}}}});o.to(n,{scale:1,yPercent:-1,duration:3,ease:`none`},0),o.to(r[0],{autoAlpha:0,y:-24,duration:.22,ease:`power2.in`},.78),o.fromTo(r[1],{autoAlpha:0,y:34},{autoAlpha:1,y:0,duration:.26,ease:`power3.out`},1.04),o.to(r[1],{autoAlpha:0,y:-24,duration:.22,ease:`power2.in`},1.86),o.fromTo(r[2],{autoAlpha:0,y:34},{autoAlpha:1,y:0,duration:.26,ease:`power3.out`},2.12),o.to(r[2],{autoAlpha:1,y:-3,duration:.88,ease:`none`},2.3),i&&o.to(i,{scaleY:1,duration:3,ease:`none`},0);let s=()=>requestAnimationFrame(()=>Zs.refresh());n.complete?s():n.addEventListener(`load`,s,{once:!0}),document.fonts?.ready?.then(s).catch(()=>{})}else n&&Pi.fromTo(n,{scale:1.045},{scale:1,ease:`none`,scrollTrigger:{trigger:t,start:`top bottom`,end:`bottom top`,scrub:.7,invalidateOnRefresh:!0}})}let n=e.parentElement?.querySelector(`.xaaj-category-gallery`);if(n){let e=Array.from(n.querySelectorAll(`.xaaj-category-gallery-card`)),t=Array.from(n.querySelectorAll(`.xaaj-category-gallery-card img`)),r=window.matchMedia(`(min-width: 851px)`).matches;e.length&&(Pi.set(e,{autoAlpha:1,y:r?34:18,clipPath:`inset(4% 0% 0% 0%)`,force3D:!0}),Pi.to(e,{autoAlpha:1,y:0,clipPath:`inset(0% 0% 0% 0%)`,ease:`none`,stagger:r?.055:.03,scrollTrigger:{trigger:n,start:`top 98%`,end:`top 62%`,scrub:1.25,invalidateOnRefresh:!0}})),t.length&&(Pi.set(t,{scale:1.045,force3D:!0}),Pi.to(t,{scale:1,ease:`none`,stagger:.035,scrollTrigger:{trigger:n,start:`top 98%`,end:`top 54%`,scrub:1.35,invalidateOnRefresh:!0}}))}requestAnimationFrame(()=>Zs.refresh()),window.setTimeout(()=>Zs.refresh(),300)},e);return E(!0),()=>t.revert()},[g.mediaType,g.image]),(0,_.useEffect)(()=>(document.body.classList.add(`xaaj-cinematic-home`),()=>document.body.classList.remove(`xaaj-cinematic-home`)),[]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsxs)(`main`,{className:`xaaj-cinema-home`,children:[(0,$.jsx)(`style`,{children:`
          body.xaaj-cinematic-home{padding-top:0!important;background:#ffffff}
          .xaaj-cinema-home{background:#ffffff;color:#292722;overflow-x:clip}
          .xaaj-cinema-home *{box-sizing:border-box}

          /* Temporarily hide the sections shown in the supplied reference screenshots.
             JSX, data, product mapping and all existing logic are intentionally preserved. */
          .xaaj-cinema-home .xaaj-everyday-carousel,
          .xaaj-cinema-home .xaaj-cinema-products,
          .xaaj-cinema-home .xaaj-collection-story-carousel,
          .xaaj-cinema-home .xaaj-cinema-quote{
            display:none !important;
          }

          .xaaj-cinema-hero{position:relative;height:100svh;min-height:680px;overflow:hidden;background:#171712;color:#fff}
          .xaaj-cinema-hero-media{position:absolute;inset:0;overflow:hidden;background:#171712}
          .xaaj-cinema-hero-media img,.xaaj-cinema-hero-media video{width:100%;height:100%;object-fit:cover;object-position:center;display:block;will-change:transform;filter:saturate(.82) contrast(.96)}
          .xaaj-cinema-hero-media video{pointer-events:none}
          .xaaj-cinema-wash{position:absolute;inset:0;background:linear-gradient(90deg,rgba(7,7,5,.62) 0%,rgba(7,7,5,.28) 34%,rgba(7,7,5,.06) 66%,rgba(7,7,5,.22) 100%),linear-gradient(0deg,rgba(0,0,0,.26),transparent 34%,rgba(0,0,0,.16));opacity:1;pointer-events:none}
          .xaaj-cinema-grain{position:absolute;inset:0;opacity:.06;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E")}
          .xaaj-cinema-content{position:absolute;z-index:3;left:7vw;top:50%;transform:translateY(-50%);max-width:560px;will-change:transform,opacity}
          .xaaj-cinema-eyebrow{display:block;margin-bottom:18px;font-size:9px;letter-spacing:3.5px;text-transform:uppercase;color:rgba(255,255,255,.72)}
          .xaaj-cinema-title{margin:0;overflow:hidden;font:400 clamp(52px,7.2vw,112px)/.86 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.055em}
          .xaaj-cinema-title-line{display:block;overflow:hidden}
          .xaaj-cinema-copy{max-width:370px;margin:25px 0 27px;color:rgba(255,255,255,.78);font-size:13px;line-height:1.7}
          .xaaj-cinema-cta{display:inline-flex;align-items:center;gap:10px;color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.72);padding:13px 18px;font-size:9px;letter-spacing:1.8px;text-transform:uppercase;transition:background .3s ease,color .3s ease}
          .xaaj-cinema-cta:hover{background:#fff;color:#222}
          .xaaj-cinema-meta{position:absolute;z-index:3;right:5.5vw;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:flex-end;gap:15px;will-change:transform,opacity}
          .xaaj-cinema-meta-label{writing-mode:vertical-rl;transform:rotate(180deg);font-size:8px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.7)}
          .xaaj-cinema-meta-line{width:1px;height:72px;background:rgba(255,255,255,.55)}
          .xaaj-cinema-next-hint{position:absolute;z-index:3;bottom:30px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:9px;color:rgba(255,255,255,.76);font-size:8px;letter-spacing:2.5px;text-transform:uppercase;white-space:nowrap}
          .xaaj-cinema-next-hint span:last-child{width:1px;height:34px;background:rgba(255,255,255,.7)}
          .xaaj-cinema-index{position:absolute;z-index:3;left:7vw;bottom:30px;display:flex;gap:16px;font-size:8px;letter-spacing:1.5px;color:rgba(255,255,255,.72)}
          .xaaj-cinema-index strong{font-weight:400;color:#fff}

          .xaaj-cinema-intro{display:grid;grid-template-columns:.75fr 1.25fr;min-height:650px;background:#f7f5ef}
          .xaaj-cinema-intro-copy{display:flex;align-items:center;padding:80px clamp(30px,7vw,110px);background:#f7f5ef}
          .xaaj-cinema-intro-copy>div{max-width:430px}
          .xaaj-cinema-eyebrow-dark,.xaaj-cinema-section-eyebrow{display:block;font-size:8px;letter-spacing:2.8px;text-transform:uppercase;color:#918b81}
          .xaaj-cinema-intro h2{margin:13px 0 20px;font:400 clamp(42px,5vw,76px)/.91 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.05em}
          .xaaj-cinema-intro p{max-width:390px;margin:0 0 25px;color:#746e65;font-size:12px;line-height:1.85}
          .xaaj-cinema-text-link{display:inline-flex;align-items:center;gap:8px;color:#302d28;text-decoration:none;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;border-bottom:1px solid #9d978d;padding-bottom:6px}
          .xaaj-cinema-intro-media{position:relative;min-height:650px;overflow:hidden}
          .xaaj-cinema-intro-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 1s cubic-bezier(.22,1,.36,1)}
          .xaaj-cinema-intro-media:hover img{transform:scale(1.025)}
          .xaaj-cinema-intro-side{position:absolute;right:0;bottom:0;width:min(28%,330px);padding:28px;background:rgba(37,35,30,.82);color:#fff;backdrop-filter:blur(8px)}
          .xaaj-cinema-intro-side h3{margin:10px 0 0;font:400 30px/1 'Gotham Book','Gotham',Arial,sans-serif}

          /* XAAJ brand story: editorial split-screen with a pinned cinematic image */
          .xaaj-brand-story{position:relative;height:300svh;min-height:300svh;background:#171712;color:#f4f1e9;isolation:isolate;overflow:clip}
          .xaaj-brand-story-inner{position:relative;width:100%;height:100svh;min-height:680px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);overflow:hidden;will-change:transform;z-index:20}
          .xaaj-brand-story-image{position:relative;height:100%;min-width:0;overflow:hidden;background:#24231f}
          .xaaj-brand-story-image::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.18) 70%,rgba(0,0,0,.42));pointer-events:none}
          .xaaj-brand-story-image img,.xaaj-brand-story-image video{width:100%;height:100%;object-fit:cover;object-position:center center;display:block;will-change:transform;filter:saturate(.88) contrast(1.02)}
          .xaaj-brand-story-image video{pointer-events:none}
          .xaaj-brand-story-image-label{position:absolute;z-index:2;left:clamp(24px,4vw,64px);bottom:clamp(28px,5vw,62px);font-size:8px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.78)}
          .xaaj-brand-story-content{position:relative;display:flex;align-items:center;min-width:0;padding:0 clamp(36px,7vw,110px);background:#171712;overflow:hidden}
          .xaaj-brand-story-content::before{content:'XAAJ';position:absolute;right:-.03em;top:50%;transform:translateY(-50%);font:400 clamp(130px,20vw,320px)/.8 'Gotham Book','Gotham',Arial,sans-serif;color:rgba(255,255,255,.025);pointer-events:none;letter-spacing:-.08em}
          .xaaj-brand-story-kicker{position:absolute;z-index:3;left:clamp(36px,7vw,110px);top:clamp(30px,5vw,58px);display:flex;align-items:center;gap:12px;margin:0;color:rgba(255,255,255,.82);font-size:9px;letter-spacing:3.2px;text-transform:uppercase}
          .xaaj-brand-story-kicker i{display:block;width:32px;height:1px;background:rgba(255,255,255,.55)}
          .xaaj-brand-story-kicker span{font-weight:600}
          .xaaj-brand-story-kicker b{font-size:7px;font-weight:500;letter-spacing:2px;color:rgba(255,255,255,.38);margin-left:4px}
          .xaaj-brand-story-block{position:absolute;z-index:2;left:clamp(36px,7vw,110px);right:clamp(52px,7vw,110px);top:50%;transform:translateY(-50%);max-width:590px;margin:0;visibility:visible;opacity:0;will-change:transform,opacity;pointer-events:none}
          .xaaj-brand-story-block:first-of-type{opacity:1}
          .xaaj-brand-story-block.is-active{pointer-events:auto}
          .xaaj-brand-story-block:last-of-type{margin-bottom:0}
          .xaaj-brand-story-block h2{margin:0 0 26px;font:400 clamp(42px,5.2vw,78px)/.9 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.055em;color:#f6f2e9}
          .xaaj-brand-story-block h3{margin:0 0 24px;font:400 clamp(28px,3.1vw,48px)/1 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.035em;color:#f6f2e9}
          .xaaj-brand-story-block p{max-width:500px;margin:0;color:rgba(246,242,233,.66);font-size:13px;line-height:1.95}
          .xaaj-brand-story-lines{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:26px;color:rgba(246,242,233,.88);font-size:11px;letter-spacing:.4px}
          .xaaj-brand-story-lines span{position:relative}
          .xaaj-brand-story-lines span:not(:last-child)::after{content:'·';position:absolute;right:-13px;color:rgba(255,255,255,.35)}
          .xaaj-brand-story-discover{display:inline-flex;align-items:center;gap:10px;margin-top:30px;color:#f6f2e9;text-decoration:none;font-size:9px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.4);padding-bottom:8px;width:max-content}
          .xaaj-brand-story-progress{position:absolute;z-index:5;top:50%;right:clamp(18px,3vw,42px);width:1px;height:96px;background:rgba(255,255,255,.14);transform:translateY(-50%)}
          .xaaj-brand-story-progress span{display:block;width:1px;height:100%;background:rgba(255,255,255,.85);transform:scaleY(0);transform-origin:top}
          .xaaj-brand-story-number{position:absolute;z-index:4;left:clamp(24px,4vw,64px);top:clamp(24px,4vw,50px);font-size:8px;letter-spacing:2px;color:rgba(255,255,255,.7)}

          /* NEW SECTION 03 — two premium editorial tiles */
          .xaaj-brand-story-split{
            width:100%;
            padding:32px 0 76px;
            background:#ffffff;
          }
          .xaaj-brand-story-split-inner{
            /* Match the hero grid width exactly, so both sections share the same left/right edges. */
            width:min(1140px,calc(100% - 48px));
            margin:0 auto;
            display:grid;
            grid-template-columns:minmax(0,1fr) minmax(0,1fr);
            gap:14px;
            align-items:stretch;
          }
          .xaaj-brand-story-split-media,
          .xaaj-brand-story-split-copy{
            min-width:0;
            min-height:540px;
            border:1px solid rgba(48,45,40,.14);
            border-radius:7px;
            overflow:hidden;
          }
          .xaaj-brand-story-split-media{
            display:block;
            position:relative;
            background:#eee9df;
          }
          .xaaj-brand-story-split-media img,
          .xaaj-brand-story-split-media video{
            width:100%;
            height:100%;
            display:block;
            object-fit:cover;
            object-position:center;
            transition:transform .9s cubic-bezier(.22,1,.36,1);
          }
          .xaaj-brand-story-split-media:hover img,
          .xaaj-brand-story-split-media:hover video{
            transform:scale(1.018);
          }
          .xaaj-brand-story-split-copy{
            display:flex;
            align-items:center;
            justify-content:center;
            padding:64px clamp(34px,5.4vw,82px);
            background:#fffdf9;
          }
          .xaaj-brand-story-split-copy-inner{
            width:min(100%,500px);
          }
          .xaaj-brand-story-split-eyebrow{
            display:block;
            margin-bottom:18px;
            color:#8b847b;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:8px;
            line-height:1;
            font-weight:500;
            letter-spacing:2.8px;
            text-transform:uppercase;
          }
          .xaaj-brand-story-split-copy h2{
            margin:0 0 25px;
            color:#302d28;
            font:400 clamp(38px,4.2vw,66px)/.96 'Gotham Book','Gotham',Arial,sans-serif;
            letter-spacing:-.045em;
          }
          .xaaj-brand-story-split-copy p{
            max-width:470px;
            margin:0;
            color:#6d675f;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:12px;
            line-height:1.9;
          }
          .xaaj-brand-story-split-button{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:12px;
            margin-top:30px;
            min-width:138px;
            min-height:44px;
            padding:0 19px;
            border:1px solid rgba(48,45,40,.72);
            border-radius:3px;
            color:#302d28;
            text-decoration:none;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:9px;
            letter-spacing:1.8px;
            text-transform:uppercase;
            transition:background .28s ease,color .28s ease,border-color .28s ease;
          }
          .xaaj-brand-story-split-button:hover{
            background:#302d28;
            color:#fffdf9;
            border-color:#302d28;
          }
          @media(max-width:850px){
            .xaaj-brand-story-split{
              padding:26px 18px 58px;
            }
            .xaaj-brand-story-split-inner{
              grid-template-columns:1fr;
              gap:12px;
            }
            .xaaj-brand-story-split-media,
            .xaaj-brand-story-split-copy{
              min-height:0;
            }
            .xaaj-brand-story-split-media{
              aspect-ratio:1/1.02;
            }
            .xaaj-brand-story-split-copy{
              padding:54px 30px 58px;
              min-height:420px;
            }
            .xaaj-brand-story-split-copy h2{
              font-size:clamp(36px,9vw,52px);
            }
          }
          @media(max-width:520px){
            .xaaj-brand-story-split{
              padding:22px 12px 44px;
            }
            .xaaj-brand-story-split-copy{
              padding:45px 24px 48px;
              min-height:390px;
            }
            .xaaj-brand-story-split-copy p{
              font-size:11px;
              line-height:1.82;
            }
          }

          .xaaj-cinema-category{display:none!important;padding:58px 0 62px;background:#f7f5ef;border-top:1px solid rgba(42,39,34,.07);border-bottom:1px solid rgba(42,39,34,.07)}
          .xaaj-cinema-wrap{width:min(100% - 56px,1700px);margin:auto}
          .xaaj-cinema-category-inner{display:grid;grid-template-columns:250px minmax(0,1fr);align-items:center;gap:34px}
          .xaaj-cinema-category-intro{padding:8px 0 0}
          .xaaj-cinema-category-intro .xaaj-cinema-section-eyebrow{font-size:8px;letter-spacing:2.5px;color:#292722;font-weight:600}
          .xaaj-cinema-category-intro p{max-width:185px;margin:18px 0 30px;color:#777168;font-size:11px;line-height:1.7}
          .xaaj-cinema-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:32px}
          .xaaj-cinema-section-title{margin:10px 0 0;font:400 clamp(40px,5vw,70px)/.92 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.05em}
          .xaaj-cinema-category-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:16px}
          .xaaj-cinema-category-card{position:relative;min-width:0;aspect-ratio:.9/1;overflow:hidden;color:#fff;text-decoration:none;background:#302d27}
          .xaaj-cinema-category-card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .9s cubic-bezier(.22,1,.36,1);filter:saturate(.78)}
          .xaaj-cinema-category-card:after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.7),transparent 58%)}
          .xaaj-cinema-category-card:hover img{transform:scale(1.045)}
          .xaaj-cinema-category-card span{position:absolute;z-index:2;left:20px;right:14px;bottom:19px;font:400 17px 'Gotham Book','Gotham',Arial,sans-serif;white-space:nowrap;letter-spacing:-.01em}.xaaj-cinema-category-card:before{content:"";position:absolute;z-index:2;left:20px;bottom:52px;width:28px;height:1px;background:rgba(255,255,255,.58)}

          /* HORECA COLLECTION — same Craft-style geometry as the reference */
          .xaaj-horeca-bundled{
            background:#fff;
            color:#302d28;
            padding:56px 24px 24px;
            overflow:hidden;
          }
          .xaaj-horeca-bundled-inner{
            width:min(1140px,100%);
            margin:0 auto;
          }
          .xaaj-horeca-bundled h2{
            margin:0 0 34px;
            color:#302d28;
            font:400 32px/1.1 'Gotham Book','Gotham',Arial,sans-serif;
            letter-spacing:-.035em;
          }
          .xaaj-horeca-bundled-grid{
            display:grid;
            grid-template-columns:minmax(0,2.1fr) minmax(270px,.9fr);
            gap:18px;
            align-items:stretch;
          }
          .xaaj-horeca-bundled-main{
            display:block;
            min-width:0;
            color:inherit;
            text-decoration:none;
            background:#fff;
            border:1px solid rgba(48,45,40,.12);
            border-radius:5px;
            overflow:hidden;
          }
          .xaaj-horeca-bundled-media{
            width:100%;
            aspect-ratio:1.62/1;
            overflow:hidden;
            background:#e9e5dd;
          }
          .xaaj-horeca-bundled-media img,
          .xaaj-horeca-bundled-small img{
            width:100%;
            height:100%;
            display:block;
            object-fit:cover;
            transition:transform .7s cubic-bezier(.22,1,.36,1);
          }
          .xaaj-horeca-bundled-main:hover .xaaj-horeca-bundled-media img,
          .xaaj-horeca-bundled-small:hover img{
            transform:scale(1.018);
          }
          .xaaj-horeca-bundled-label{
            min-height:78px;
            padding:0 22px;
            display:flex;
            align-items:center;
            justify-content:flex-start;
            gap:7px;
            color:#302d28;
            font:400 21px/1 'Gotham Book','Gotham',Arial,sans-serif;
            border-top:1px solid rgba(48,45,40,.1);
          }
          .xaaj-horeca-bundled-label svg{
            transition:transform .25s ease;
          }
          .xaaj-horeca-bundled-main:hover .xaaj-horeca-bundled-label svg{
            transform:translateX(3px);
          }
          .xaaj-horeca-bundled-side{
            display:grid;
            grid-template-rows:1fr 1fr;
            gap:18px;
            min-width:0;
          }
          .xaaj-horeca-bundled-small{
            display:block;
            min-width:0;
            min-height:0;
            overflow:hidden;
            border-radius:5px;
            background:#e9e5dd;
            border:1px solid rgba(48,45,40,.12);
          }
          .xaaj-horeca-bundled-small img{
            aspect-ratio:1.46/1;
          }
          @media(max-width:850px){
            .xaaj-horeca-bundled{
              padding:48px 18px 22px;
            }
            .xaaj-horeca-bundled h2{
              margin-bottom:24px;
              font-size:30px;
            }
            .xaaj-horeca-bundled-grid{
              grid-template-columns:1fr;
              gap:12px;
            }
            .xaaj-horeca-bundled-side{
              grid-template-columns:1fr 1fr;
              grid-template-rows:none;
              gap:12px;
            }
            .xaaj-horeca-bundled-small img{
              aspect-ratio:1/1;
            }
          }
          @media(max-width:520px){
            .xaaj-horeca-bundled{
              padding:42px 12px 20px;
            }
            .xaaj-horeca-bundled h2{
              font-size:31px;
            }
            .xaaj-horeca-bundled-label{
              min-height:62px;
              padding:0 17px;
              font-size:18px;
            }
          }

          /* Section 04: category spotlight gallery inspired by the supplied reference. */
          .xaaj-category-gallery{background:#eee8d8;color:#2d3428;padding:78px clamp(28px,4.2vw,72px) 92px;position:relative;overflow:hidden;border-top:1px solid rgba(55,61,48,.08);border-bottom:1px solid rgba(55,61,48,.08);z-index:10;backface-visibility:hidden}
          .xaaj-category-gallery::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 12% 8%,rgba(255,255,255,.45),transparent 30%),radial-gradient(circle at 92% 90%,rgba(132,113,79,.08),transparent 32%)}
          .xaaj-category-gallery-head{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;margin-bottom:34px;padding:0 2px;color:#69715d;font-size:9px;letter-spacing:2.8px;text-transform:uppercase}
          .xaaj-category-gallery-head a{display:inline-flex;align-items:center;gap:8px;color:#4f5a46;text-decoration:none;letter-spacing:1.5px;font-size:8px;border-bottom:1px solid rgba(79,90,70,.32);padding-bottom:5px;transition:opacity .3s ease}
          .xaaj-category-gallery-head a:hover{opacity:.65}
          .xaaj-category-gallery-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(18px,2vw,34px);width:100%}
          .xaaj-category-gallery-card{display:block;min-width:0;color:#4f5a46;text-decoration:none;will-change:transform,opacity,clip-path;transform:translateZ(0)}
          .xaaj-category-gallery-image{overflow:hidden;background:#e5dfd1;aspect-ratio:.84/1;position:relative}
          .xaaj-category-gallery-image::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.07))}
          .xaaj-category-gallery-image img{width:100%;height:100%;display:block;object-fit:cover;object-position:center;transform-origin:center center;will-change:transform;filter:saturate(.82) contrast(.99);transition:transform 1.15s cubic-bezier(.22,1,.36,1)}
          .xaaj-category-gallery-card:hover .xaaj-category-gallery-image img{transform:scale(1.035)}
          .xaaj-category-gallery-label{display:flex;align-items:center;justify-content:center;min-height:54px;padding:15px 4px 0;color:#59664e;font-size:16px;letter-spacing:.05px;font-family:'Gotham Book','Gotham',Arial,sans-serif;text-align:center}
          .xaaj-brand-story + .xaaj-category-gallery{box-shadow:0 -18px 48px rgba(24,23,18,.07)}

          /* SECTION 06 — THE EVERYDAY TABLE / single image */
          .xaaj-everyday-carousel{position:relative;height:88svh;min-height:620px;background:#161611;color:#fff;overflow:hidden;isolation:isolate}
          .xaaj-everyday-carousel-track{position:relative;width:100%;height:100%;min-height:620px;overflow:hidden;background:#161611}
          .xaaj-everyday-slide{position:absolute;inset:0;margin:0;overflow:hidden;z-index:1}
          .xaaj-everyday-slide img{width:100%;height:100%;object-fit:cover;object-position:center;display:block;filter:saturate(.82) contrast(.97);transform:scale(1.02)}
          .xaaj-everyday-overlay{position:absolute;z-index:3;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(10,9,7,.68) 0%,rgba(10,9,7,.28) 34%,rgba(10,9,7,.05) 70%,rgba(10,9,7,.16) 100%),linear-gradient(0deg,rgba(0,0,0,.28),transparent 45%,rgba(0,0,0,.08))}
          .xaaj-everyday-copy{position:absolute;z-index:5;left:7vw;top:50%;transform:translateY(-50%);width:min(510px,44vw)}
          .xaaj-everyday-copy h2{margin:12px 0 20px;font:400 clamp(48px,6.5vw,98px)/.86 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.055em}
          .xaaj-everyday-subtitle{font:400 clamp(18px,2vw,29px)/1.15 'Gotham Book','Gotham',Arial,sans-serif!important;color:rgba(255,255,255,.92)!important;max-width:560px!important;margin:-5px 0 18px!important;line-height:1.25!important}
          .xaaj-everyday-copy p{max-width:370px;color:rgba(255,255,255,.78);font-size:12px;line-height:1.8;margin-bottom:25px}
          .xaaj-everyday-progress,.xaaj-everyday-scroll-hint{display:none}

          .xaaj-cinema-quote{padding:110px 24px;text-align:center;background:#f7f5ef}
          .xaaj-cinema-quote p{max-width:900px;margin:0 auto;font:400 clamp(35px,5vw,72px)/.98 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.05em}
          .xaaj-cinema-quote span{display:block;margin-top:25px;color:#928b81;font-size:8px;letter-spacing:2.5px;text-transform:uppercase}

          .xaaj-cinema-products{padding:105px 0;background:#f7f5ef}
          .xaaj-cinema-product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:17px}
          .xaaj-cinema-product-grid .xaaj-editorial-card-media{aspect-ratio:4/5}
          .xaaj-cinema-product-grid .xaaj-editorial-card-copy h3{font-size:16px}

          /* SECTION 08 — COLLECTION STORY / NORMAL RIGHT-TO-LEFT CAROUSEL */
          .xaaj-collection-story-carousel{
            position:relative;
            height:100svh;
            min-height:680px;
            display:grid;
            grid-template-columns:1fr 1fr;
            background:#e8e3d9;
            overflow:hidden;
            isolation:isolate;
          }
          .xaaj-collection-story-media{
            position:relative;
            height:100%;
            min-height:680px;
            overflow:hidden;
            background:#d8d1c5;
          }
          .xaaj-collection-story-track{
            display:flex;
            width:400%;
            height:100%;
            will-change:transform;
            animation:xaajCollectionStoryRTL 14s linear infinite;
          }
          .xaaj-collection-story-slide{
            position:relative;
            flex:0 0 25%;
            width:25%;
            height:100%;
            margin:0;
            overflow:hidden;
          }
          .xaaj-collection-story-slide img{
            width:100%;
            height:100%;
            object-fit:cover;
            object-position:center;
            display:block;
            transform:scale(1.025);
            transition:transform .8s ease;
          }
          .xaaj-collection-story-carousel:hover .xaaj-collection-story-track{
            animation-play-state:paused;
          }
          @keyframes xaajCollectionStoryRTL{
            from{transform:translate3d(0,0,0)}
            to{transform:translate3d(-50%,0,0)}
          }
          .xaaj-collection-story-copy{
            position:relative;
            z-index:5;
            display:flex;
            align-items:center;
            padding:80px clamp(35px,7vw,105px);
            background:#e8e3d9;
          }
          .xaaj-collection-story-copy>div{max-width:490px}
          .xaaj-collection-story-copy h2{
            margin:12px 0 20px;
            font:400 clamp(45px,5.5vw,82px)/.9 'Gotham Book','Gotham',Arial,sans-serif;
            letter-spacing:-.05em;
          }
          .xaaj-collection-story-copy p{
            color:#716b61;
            font-size:12px;
            line-height:1.85;
            max-width:390px;
            margin-bottom:25px;
          }

          .xaaj-cinema-new{position:relative;min-height:72svh;overflow:hidden;color:#fff;background:#292720}
          .xaaj-cinema-new img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.72)}
          .xaaj-cinema-new:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,18,14,.62),rgba(20,18,14,.08) 70%)}
          .xaaj-cinema-new-copy{position:relative;z-index:2;min-height:72svh;display:flex;align-items:center;padding:80px 7vw}
          .xaaj-cinema-new h2{margin:12px 0 23px;font:400 clamp(45px,6vw,88px)/.88 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:-.05em;max-width:600px}

          .xaaj-cinema-reveal{opacity:1;transform:none;will-change:transform,opacity}

          @media(max-width:850px){
            .xaaj-cinema-hero{min-height:100svh;height:100svh}
            .xaaj-cinema-content{left:22px;right:22px;top:auto;bottom:105px;transform:none;max-width:520px}
            .xaaj-cinema-title{font-size:clamp(48px,14vw,78px)}
            .xaaj-cinema-copy{font-size:11px;max-width:320px}
            .xaaj-cinema-meta{right:18px;top:auto;bottom:125px}
            .xaaj-cinema-index{left:22px;bottom:31px}
            .xaaj-cinema-next-hint{bottom:28px}
            .xaaj-cinema-intro{grid-template-columns:1fr;min-height:0}
            .xaaj-cinema-intro-copy{min-height:470px;padding:60px 22px}
            .xaaj-cinema-intro-media{height:80svh;min-height:460px}
            .xaaj-cinema-intro-side{width:45%;padding:20px}
            .xaaj-cinema-intro-side h3{font-size:22px}
            .xaaj-brand-story{height:auto;min-height:auto}
            .xaaj-brand-story-inner{position:relative;height:auto;min-height:0;display:block;overflow:visible}
            .xaaj-brand-story-image{height:72svh;min-height:460px;position:relative}
            .xaaj-brand-story-content{display:block;min-height:0;padding:78px 22px 90px;overflow:hidden}
            .xaaj-brand-story-kicker{position:relative;left:auto;top:auto;margin:0 0 48px}
            .xaaj-brand-story-block{position:relative;left:auto;right:auto;top:auto;transform:none;margin-bottom:92px;max-width:none;visibility:visible;opacity:1;pointer-events:auto}
            .xaaj-brand-story-block:last-of-type{margin-bottom:0}
            .xaaj-brand-story-block h2{font-size:48px}
            .xaaj-brand-story-block h3{font-size:34px}
            .xaaj-brand-story-block p{font-size:12px;line-height:1.85}
            .xaaj-brand-story-progress{display:none}
            .xaaj-cinema-wrap{width:calc(100% - 28px)}
            .xaaj-cinema-category{padding:28px 0 30px}
            .xaaj-cinema-category-inner{grid-template-columns:1fr;gap:24px}
            .xaaj-cinema-category-intro p{max-width:360px;margin:12px 0 18px}
            .xaaj-cinema-category-grid{grid-template-columns:repeat(2,1fr);gap:11px}
            .xaaj-cinema-category-card{aspect-ratio:.92/1}
            .xaaj-cinema-category-card span{font-size:16px;left:15px;bottom:15px}.xaaj-cinema-category-card:before{left:15px;bottom:44px}
            .xaaj-category-gallery{padding:54px 18px 64px}
            .xaaj-category-gallery-head{margin-bottom:23px;font-size:8px}
            .xaaj-category-gallery-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 12px}
            .xaaj-category-gallery-image{aspect-ratio:.84/1}
            .xaaj-category-gallery-label{min-height:48px;padding-top:11px;font-size:13px}
            .xaaj-brand-story-kicker{left:22px;top:25px;gap:9px;font-size:8px;letter-spacing:2.5px}.xaaj-brand-story-kicker i{width:24px}.xaaj-brand-story-kicker b{font-size:6px}
            .xaaj-everyday-carousel{height:78svh;min-height:520px}
            .xaaj-everyday-carousel-track{height:100%;min-height:520px}
            .xaaj-everyday-copy{left:22px;right:22px;top:auto;bottom:82px;transform:none;width:auto}
            .xaaj-everyday-copy h2{font-size:clamp(43px,12vw,70px)}
            .xaaj-everyday-copy p{font-size:11px;max-width:330px}
            .xaaj-everyday-progress,.xaaj-everyday-scroll-hint{display:none}
            .xaaj-cinema-product-grid{grid-template-columns:repeat(2,1fr);gap:12px}
            .xaaj-cinema-products{padding:70px 0}
            .xaaj-collection-story-carousel{
              height:auto;
              min-height:0;
              display:grid;
              grid-template-columns:1fr;
              overflow:hidden;
            }
            .xaaj-collection-story-media{
              height:78svh;
              min-height:460px;
            }
            .xaaj-collection-story-track{
              height:100%;
              animation-duration:11s;
            }
            .xaaj-collection-story-slide{
              flex:0 0 25%;
              width:25%;
              height:100%;
              min-height:460px;
            }
            .xaaj-collection-story-slide img{
              transform:none;
            }
            .xaaj-collection-story-copy{
              min-height:460px;
              padding:60px 22px;
            }
            .xaaj-collection-story-counter,
            .xaaj-collection-story-progress{
              display:none;
            }
            .xaaj-cinema-new,.xaaj-cinema-new-copy{min-height:72svh}
            .xaaj-cinema-new-copy{padding:60px 22px}
            .xaaj-cinema-quote{padding:75px 20px}
          }
          @media(max-width:520px){
            .xaaj-cinema-hero-media img{object-position:58% center}
            .xaaj-cinema-eyebrow{font-size:8px;letter-spacing:2.5px}
            .xaaj-cinema-copy{margin:18px 0 22px}
            .xaaj-cinema-meta{display:none}
            .xaaj-cinema-intro-side{width:52%;padding:15px}
            .xaaj-cinema-intro-side h3{font-size:18px}
            .xaaj-cinema-section-head{align-items:flex-start;flex-direction:column}
            .xaaj-cinema-section-title{font-size:43px}
            .xaaj-cinema-category-intro p{font-size:10px}
            .xaaj-cinema-category-card span{font-size:16px}
          }
          @media(prefers-reduced-motion:reduce){
            .xaaj-cinema-home *{scroll-behavior:auto!important}
            .xaaj-cinema-reveal{opacity:1;transform:none}
            .xaaj-category-gallery-card{opacity:1!important;transform:none!important;clip-path:none!important}
          }

          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap');
          body.xaaj-cinematic-home{background:#f8f6f1!important}
          body.xaaj-cinematic-home,body.xaaj-cinematic-home *{font-family:'Gotham Book','Gotham',Arial,sans-serif}
          .xaaj-reference-hero{
            position:relative;
            z-index:1;
            background:#ffffff;
            color:#292722;
            padding:64px 3.45vw 40px;
            overflow:hidden;
          }

          .xaaj-reference-hero-heading{
            text-align:center;
            padding:0 15px 62px;
          }

          .xaaj-reference-hero-heading h1{
            margin:0 auto;
            max-width:1000px;
            font-family:'Cormorant Garamond',Georgia,"Times New Roman",serif !important;
            font-size:clamp(48px,4.25vw,66px);
            font-weight:400 !important;
            line-height:.98;
            letter-spacing:-.035em;
            color:#292722;
          }

          .xaaj-reference-hero-grid{
            width:min(1140px,100%);
            margin:0 auto;
            display:grid;
            grid-template-columns:365px minmax(0,1fr);
            gap:22px;
            align-items:stretch;
          }

          .xaaj-reference-hero-card{
            position:relative;
            display:flex;
            flex-direction:column;
            min-width:0;
            overflow:hidden;
            background:rgb(239,236,236);
            color:#292722;
            text-decoration:none;
            border:1px solid rgba(37,37,37,.20);
            border-radius:6px;
            box-shadow:none;
            transition:border-color .35s ease,transform .35s ease;
          }

          .xaaj-reference-hero-card-top{
            height:659px;
          }

          .xaaj-reference-hero-card img,
          .xaaj-reference-hero-card video{
            width:100%;
            height:auto;
            flex:1 1 auto;
            min-height:0;
            display:block;
            object-fit:cover;
            transition:transform 1.1s cubic-bezier(.22,1,.36,1);
          }

          .xaaj-reference-hero-card:hover{
            border-color:rgba(48,45,40,.34);
          }

          .xaaj-reference-hero-card:hover img,
          .xaaj-reference-hero-card:hover video{
            transform:scale(1.025);
          }

          .xaaj-reference-hero-bottom{
            grid-column:1 / -1;
            display:grid;
            grid-template-columns:repeat(3,minmax(0,1fr));
            gap:22px;
            margin-top:2px;
          }

          .xaaj-reference-hero-bottom-card{
            position:relative;
            display:flex;
            flex-direction:column;
            min-width:0;
            overflow:hidden;
            background:rgb(239,236,236);
            color:#292722;
            text-decoration:none;
            border:1px solid rgba(37,37,37,.20);
            border-radius:6px;
            transition:border-color .35s ease,transform .35s ease;
          }

          .xaaj-reference-hero-bottom-card:hover{
            border-color:rgba(48,45,40,.34);
          }

          .xaaj-reference-hero-bottom-card img,
          .xaaj-reference-hero-bottom-card video{
            width:100%;
            height:380px;
            display:block;
            object-fit:cover;
            transition:transform 1.1s cubic-bezier(.22,1,.36,1);
          }

          .xaaj-reference-hero-bottom-card:hover img,
          .xaaj-reference-hero-bottom-card:hover video{
            transform:scale(1.025);
          }

          .xaaj-reference-hero-label{
            position:relative;
            left:auto;
            bottom:auto;
            height:82px;
            min-height:82px;
            flex:0 0 82px;
            box-sizing:border-box;
            display:flex;
            align-items:center;
            justify-content:flex-start;
            gap:13px;
            padding:19px 22px 18px;
            background:#ffffff;
            color:#302d28;
            font-family:'Cormorant Garamond',Georgia,"Times New Roman",serif !important;
            font-size:28px !important;
            font-weight:500 !important;
            line-height:.95 !important;
            letter-spacing:-.008em !important;
            text-shadow:none;
          }

          .xaaj-reference-hero-label > span{
            font-family:'Cormorant Garamond',Georgia,"Times New Roman",serif !important;
            font-size:inherit !important;
            font-weight:inherit !important;
            line-height:inherit !important;
            letter-spacing:inherit !important;
            color:inherit !important;
          }

          .xaaj-reference-hero-label svg{
            flex:0 0 auto;
            transition:transform .35s ease;
          }

          .xaaj-reference-hero-card:hover .xaaj-reference-hero-label svg,
          .xaaj-reference-hero-bottom-card:hover .xaaj-reference-hero-label svg{
            transform:translateX(4px);
          }

          .xaaj-reference-hero-overlay{
            display:none!important;
          }          /* Product showcase directly below hero — clean 4-up editorial grid */
          .xaaj-hero-product-showcase{
            position:relative;
            background:#f7f5ef;
            color:#292722;
            padding:30px 3.45vw 74px;
            border-bottom:1px solid rgba(42,39,34,.07);
            overflow:hidden;
          }

          .xaaj-hero-product-showcase-inner{
            width:min(1390px,100%);
            margin:0 auto;
          }

          .xaaj-hero-product-showcase-head{
            display:flex;
            align-items:flex-end;
            justify-content:space-between;
            gap:20px;
            margin-bottom:24px;
          }

          .xaaj-hero-product-showcase-kicker{
            display:block;
            margin-bottom:8px;
            color:#8f887f;
            font-size:8px;
            line-height:1;
            letter-spacing:2.4px;
            text-transform:uppercase;
          }

          .xaaj-hero-product-showcase-head h2{
            margin:0;
            color:#292722;
            font:400 25px/1.08 'Gotham Book','Gotham',Arial,sans-serif;
            letter-spacing:-.02em;
          }

          .xaaj-hero-product-showcase-head a{
            display:inline-flex;
            align-items:center;
            gap:8px;
            color:#5f5a53;
            text-decoration:none;
            font-size:8px;
            letter-spacing:1.6px;
            text-transform:uppercase;
            border-bottom:1px solid rgba(95,90,83,.34);
            padding-bottom:5px;
          }

          .xaaj-hero-product-showcase-grid{
            display:grid;
            grid-template-columns:repeat(4,minmax(0,1fr));
            gap:14px;
          }

          .xaaj-hero-product-card{
            min-width:0;
            color:#292722;
            text-decoration:none;
            display:block;
          }

          .xaaj-hero-product-media{
            position:relative;
            overflow:hidden;
            background:#ece8df;
            aspect-ratio:.84/1;
          }

          .xaaj-hero-product-media img{
            width:100%;
            height:100%;
            display:block;
            object-fit:cover;
            transition:transform .8s cubic-bezier(.22,1,.36,1);
            will-change:transform;
          }

          .xaaj-hero-product-card:hover .xaaj-hero-product-media img{
            transform:scale(1.025);
          }

          .xaaj-hero-product-copy{
            padding:12px 2px 0;
          }

          .xaaj-hero-product-copy span{
            display:block;
            margin-bottom:5px;
            color:#918a80;
            font-size:7px;
            line-height:1;
            letter-spacing:1.5px;
            text-transform:uppercase;
          }

          .xaaj-hero-product-copy h3{
            margin:0 0 6px;
            color:#302d28;
            font:400 17px/1.18 'Gotham Book','Gotham',Arial,sans-serif;
            letter-spacing:-.01em;
          }

          .xaaj-hero-product-price{
            color:#4f4a43;
            font-size:11px;
            line-height:1.2;
            letter-spacing:.15px;
          }

          @media(max-width:850px){
            .xaaj-hero-product-showcase{
              padding:26px 18px 54px;
            }

            .xaaj-hero-product-showcase-grid{
              grid-template-columns:repeat(2,minmax(0,1fr));
              gap:18px 14px;
            }

            .xaaj-hero-product-showcase-head h2{
              font-size:22px;
            }

            .xaaj-hero-product-copy h3{
              font-size:15px;
            }
          }

          @media(max-width:520px){
            .xaaj-hero-product-showcase{
              padding:22px 12px 42px;
            }

            .xaaj-hero-product-showcase-head{
              margin-bottom:18px;
            }

            .xaaj-hero-product-showcase-head h2{
              font-size:19px;
            }

            .xaaj-hero-product-showcase-head a{
              font-size:7px;
            }

            .xaaj-hero-product-showcase-grid{
              gap:18px 10px;
            }

            .xaaj-hero-product-copy{
              padding-top:9px;
            }

            .xaaj-hero-product-copy h3{
              font-size:14px;
              line-height:1.15;
            }

            .xaaj-hero-product-copy span{
              font-size:6.5px;
            }

            .xaaj-hero-product-price{
              font-size:10px;
            }
          }

          @media(max-width:850px){
            .xaaj-reference-hero{
              padding:48px 18px 30px;
            }

            .xaaj-reference-hero-heading{
              padding-bottom:35px;
            }

            .xaaj-reference-hero-heading h1{
              font-size:clamp(40px,7vw,54px);
              line-height:1.04;
            }

            .xaaj-reference-hero-grid{
              grid-template-columns:1fr 1fr;
              gap:14px;
            }

            .xaaj-reference-hero-card-top{
              height:430px;
            }

            .xaaj-reference-hero-bottom{
              grid-column:1 / -1;
              grid-template-columns:repeat(2,1fr);
              gap:14px;
            }

            .xaaj-reference-hero-bottom-card img,
            .xaaj-reference-hero-bottom-card video{
              height:330px;
            }

            .xaaj-reference-hero-label{
              min-height:76px;
              padding:18px 19px;
              gap:11px;
              font-size:24px !important;
            }
          }

          @media(max-width:560px){
            .xaaj-reference-hero{
              padding:32px 12px 42px;
            }

            .xaaj-reference-hero-heading{
              padding:0 8px 30px;
            }

            .xaaj-reference-hero-heading h1{
              font-size:37px;
              line-height:1.04;
            }

            .xaaj-reference-hero-grid{
              grid-template-columns:1fr;
              gap:13px;
            }

            .xaaj-reference-hero-card-top{
              height:430px;
            }

            .xaaj-reference-hero-bottom{
              grid-template-columns:1fr 1fr;
              gap:13px;
              margin-top:0;
            }

            .xaaj-reference-hero-bottom-card img,
            .xaaj-reference-hero-bottom-card video{
              height:250px;
            }

            .xaaj-reference-hero-label{
              min-height:64px;
              padding:15px 16px;
              gap:9px;
              font-size:20px !important;
            }

            .xaaj-reference-hero-label svg{
              width:16px;
              height:16px;
            }
          }
        `}),(0,$.jsxs)(`section`,{ref:y,className:`xaaj-reference-hero ${T?`is-ready`:``}`,"aria-labelledby":`xaaj-reference-hero-title`,children:[(0,$.jsx)(`div`,{className:`xaaj-reference-hero-heading`,children:(0,$.jsxs)(`h1`,{id:`xaaj-reference-hero-title`,children:[`Sustainably crafted goods to elevate`,(0,$.jsx)(`br`,{}),`your everyday.`]})}),(0,$.jsxs)(`div`,{className:`xaaj-reference-hero-grid`,children:[u.slice(0,2).map((e,t)=>{let n=e.url||e.fallback,r=e.alt||`XAAJ ${e.name} collection`;return(0,$.jsxs)(Z,{className:`xaaj-reference-hero-card xaaj-reference-hero-card-top`,to:e.isB2B?`/enquiry`:`/shop?category=${encodeURIComponent(e.name)}`,"aria-label":e.isB2B?`B2B enquiry`:`Shop ${e.name}`,children:[e.mediaType===`video`?(0,$.jsx)(`video`,{src:n,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:`metadata`,"aria-label":r}):(0,$.jsx)(`img`,{src:n,alt:r,loading:t===0?`eager`:`lazy`,fetchPriority:t===0?`high`:void 0}),(0,$.jsxs)(`span`,{className:`xaaj-reference-hero-label`,children:[(0,$.jsx)(`span`,{children:e.name}),(0,$.jsx)(Ud,{size:20,strokeWidth:1.25})]})]},e.slug)}),(0,$.jsx)(`div`,{className:`xaaj-reference-hero-bottom`,children:u.slice(2).map(e=>{let t=e.url||e.fallback,n=e.alt||`XAAJ ${e.name} collection`;return(0,$.jsxs)(Z,{className:`xaaj-reference-hero-bottom-card`,to:e.isB2B?`/enquiry`:`/shop?category=${encodeURIComponent(e.name)}`,"aria-label":e.isB2B?`B2B enquiry`:`Shop ${e.name}`,children:[e.mediaType===`video`?(0,$.jsx)(`video`,{src:t,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:`metadata`,"aria-label":n}):(0,$.jsx)(`img`,{src:t,alt:n,loading:`lazy`}),(0,$.jsxs)(`span`,{className:`xaaj-reference-hero-label`,children:[(0,$.jsx)(`span`,{children:e.name}),(0,$.jsx)(Ud,{size:20,strokeWidth:1.25})]})]},e.slug)})})]})]}),(()=>{let e=[...Array.isArray(i)?i:[],...Array.isArray(a)?a:[],...Array.isArray(r)?r:[]].filter((e,t,n)=>{let r=e?.id||e?._id||e?.slug||`${e?.name||`product`}-${t}`;return n.findIndex(e=>(e?.id||e?._id||e?.slug||`${e?.name||`product`}-${n.indexOf(e)}`)===r)===t}).slice(0,4);return e.length?(0,$.jsx)(`section`,{className:`xaaj-hero-product-showcase xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,"aria-label":`Featured XAAJ products`,style:{display:`none`},children:(0,$.jsxs)(`div`,{className:`xaaj-hero-product-showcase-inner`,children:[(0,$.jsxs)(`div`,{className:`xaaj-hero-product-showcase-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`xaaj-hero-product-showcase-kicker`,children:`Selected pieces`}),(0,$.jsx)(`h2`,{children:`Made for the everyday table.`})]}),(0,$.jsxs)(Z,{to:`/shop`,children:[`View all pieces`,(0,$.jsx)(Ud,{size:12,strokeWidth:1.35})]})]}),(0,$.jsx)(`div`,{className:`xaaj-hero-product-showcase-grid`,children:e.map(e=>(0,$.jsxs)(Z,{to:`/product/${e.slug}`,className:`xaaj-hero-product-card`,"aria-label":`View ${e.name}`,children:[(0,$.jsx)(`div`,{className:`xaaj-hero-product-media`,children:(0,$.jsx)(`img`,{src:e.image||e.images?.[0]||``,alt:e.name,loading:`lazy`})}),(0,$.jsxs)(`div`,{className:`xaaj-hero-product-copy`,children:[(0,$.jsx)(`span`,{children:e.category||`XAAJ Collection`}),(0,$.jsx)(`h3`,{children:e.name}),(0,$.jsx)(`div`,{className:`xaaj-hero-product-price`,children:Cp(e.price)})]})]},e.id||e._id||e.slug))})]})}):null})(),(0,$.jsx)(`section`,{className:`xaaj-cinema-category xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,children:(0,$.jsx)(`div`,{className:`xaaj-cinema-wrap`,children:(0,$.jsxs)(`div`,{className:`xaaj-cinema-category-inner`,children:[(0,$.jsxs)(`div`,{className:`xaaj-cinema-category-intro`,children:[(0,$.jsx)(`span`,{className:`xaaj-cinema-section-eyebrow`,children:`Shop by category`}),(0,$.jsx)(`p`,{children:`Every piece tells a story. Discover crockery crafted to be part of your everyday moments.`}),(0,$.jsxs)(Z,{className:`xaaj-cinema-text-link`,to:`/shop`,children:[`View all `,(0,$.jsx)(Ud,{size:13})]})]}),(0,$.jsx)(`div`,{className:`xaaj-cinema-category-grid`,children:s.map(e=>(0,$.jsxs)(Z,{className:`xaaj-cinema-category-card`,to:`/shop?category=${encodeURIComponent(e.name)}`,children:[(0,$.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`}),(0,$.jsx)(`span`,{children:e.name})]},e.name))})]})})}),(0,$.jsxs)(`section`,{className:`xaaj-brand-story-split xaaj-brand-story-homepage xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,"aria-label":`XAAJ brand story`,children:[(0,$.jsxs)(`div`,{className:`xaaj-brand-story-split-inner`,children:[(0,$.jsx)(Z,{className:`xaaj-brand-story-split-media`,to:`/story`,"aria-label":`Read the full XAAJ brand story`,children:d.mediaType===`video`?(0,$.jsx)(`video`,{src:d.url,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:`metadata`,"aria-label":d.alt}):(0,$.jsx)(`img`,{src:d.url,alt:d.alt,loading:`lazy`})}),(0,$.jsxs)(`div`,{className:`xaaj-brand-story-split-copy`,children:[(0,$.jsx)(`img`,{src:wp,alt:``,"aria-hidden":`true`,className:`xaaj-brand-story-home-watermark`}),(0,$.jsxs)(`div`,{className:`xaaj-brand-story-split-copy-inner`,children:[(0,$.jsx)(`span`,{className:`xaaj-brand-story-split-eyebrow`,children:`Brand Story`}),(0,$.jsx)(`h2`,{children:`Stories, shaped by hand.`}),(0,$.jsxs)(`p`,{className:`xaaj-brand-story-home-lead`,children:[`Some things are designed to be seen.`,(0,$.jsx)(`br`,{}),`Some things are made to be felt.`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`strong`,{children:`XAAJ is about the latter.`})]}),(0,$.jsx)(`p`,{children:`Born from the love for beauty that exists in India's everyday life, XAAJ brings together clay, craft, colour and stories to create pieces that feel at home in the cultural richness of India.`}),(0,$.jsx)(`p`,{children:`Our journey begins in places where craft is still made by hand. In Khurja, clay is shaped slowly, patiently and lovingly by hands that have learned the craft over generations. We take these stories and give them a new, contemporary expression for today's homes.`}),(0,$.jsx)(`p`,{className:`xaaj-brand-story-home-closing`,children:`We don't create crockery just for occasions. We create pieces that quietly become part of your everyday life.`}),(0,$.jsxs)(Z,{className:`xaaj-brand-story-split-button`,to:`/story`,children:[(0,$.jsx)(`span`,{children:`Read the full story`}),(0,$.jsx)(Ud,{size:15,strokeWidth:1.35})]})]})]})]}),(0,$.jsx)(`style`,{children:`
            .xaaj-brand-story-homepage{
              background:#ffffff!important;
              border-top:0!important;
              border-bottom:0!important;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-inner{
              max-width:1180px!important;
              margin:0 auto!important;
              display:grid!important;
              grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;
              min-height:720px;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-media{
              min-height:720px;
              display:block;
              overflow:hidden;
              background:#e9e3d8;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-media img,
            .xaaj-brand-story-homepage .xaaj-brand-story-split-media video{
              width:100%;
              height:100%;
              min-height:720px;
              display:block;
              object-fit:cover;
              transition:transform .9s cubic-bezier(.22,1,.36,1);
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-media:hover img,
            .xaaj-brand-story-homepage .xaaj-brand-story-split-media:hover video{
              transform:scale(1.025);
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-copy{
              position:relative;
              min-height:720px;
              display:flex;
              align-items:center;
              overflow:hidden;
              background:#ffffff!important;
              padding:82px 78px!important;
              box-sizing:border-box;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-copy-inner{
              position:relative;
              z-index:2;
              width:min(100%,520px);
              margin:0 auto;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-eyebrow{
              display:block;
              margin-bottom:25px;
              color:#7b746b!important;
              font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
              font-size:10px!important;
              font-weight:400!important;
              line-height:1;
              letter-spacing:2.5px!important;
              text-transform:uppercase;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-copy h2{
              margin:0 0 30px!important;
              color:#302d28!important;
              font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif!important;
              font-size:clamp(46px,4.2vw,68px)!important;
              font-weight:400!important;
              line-height:.96!important;
              letter-spacing:-.045em!important;
              max-width:470px;
            }
            .xaaj-brand-story-home-lead{
              margin:0 0 27px!important;
              color:#413c36!important;
              font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif!important;
              font-size:22px!important;
              line-height:1.35!important;
              letter-spacing:-.01em;
            }
            .xaaj-brand-story-home-lead strong{
              font-weight:600!important;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-copy p:not(.xaaj-brand-story-home-lead):not(.xaaj-brand-story-home-closing){
              max-width:490px;
              margin:0 0 17px!important;
              color:#716a62!important;
              font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
              font-size:12px!important;
              font-weight:400!important;
              line-height:1.75!important;
              letter-spacing:.01em;
            }
            .xaaj-brand-story-home-closing{
              max-width:490px;
              margin:0 0 31px!important;
              color:#716a62!important;
              font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
              font-size:12px!important;
              font-weight:400!important;
              line-height:1.75!important;
              letter-spacing:.01em!important;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-button{
              display:inline-flex!important;
              align-items:center;
              justify-content:center;
              gap:13px;
              min-height:45px;
              padding:0 18px!important;
              border:1px solid rgba(48,45,40,.55)!important;
              color:#302d28!important;
              background:transparent!important;
              font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
              font-size:9px!important;
              font-weight:400!important;
              letter-spacing:1.7px!important;
              line-height:1!important;
              text-transform:uppercase;
              text-decoration:none!important;
              transition:background .25s ease,color .25s ease,border-color .25s ease;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-button svg{
              color:#8d4e3d!important;
              transition:color .25s ease, transform .25s ease;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-button:hover{
              background:#8d4e3d!important;
              color:#fff!important;
              border-color:#8d4e3d!important;
            }
            .xaaj-brand-story-homepage .xaaj-brand-story-split-button:hover svg{
              color:#fff!important;
              transform:translateX(2px);
            }
            .xaaj-brand-story-home-watermark{
              position:absolute;
              right:-38px;
              bottom:-42px;
              width:300px;
              height:300px;
              object-fit:contain;
              opacity:.055;
              filter:grayscale(1);
              pointer-events:none;
              z-index:1;
            }
            @media(max-width:850px){
              .xaaj-brand-story-homepage .xaaj-brand-story-split-inner{
                grid-template-columns:1fr!important;
                min-height:0;
              }
              .xaaj-brand-story-homepage .xaaj-brand-story-split-media,
              .xaaj-brand-story-homepage .xaaj-brand-story-split-media img,
              .xaaj-brand-story-homepage .xaaj-brand-story-split-media video{
                min-height:0;
                height:auto;
                aspect-ratio:1 / 1.08;
              }
              .xaaj-brand-story-homepage .xaaj-brand-story-split-copy{
                min-height:0;
                padding:64px 28px 70px!important;
              }
              .xaaj-brand-story-homepage .xaaj-brand-story-split-copy-inner{
                width:100%;
              }
              .xaaj-brand-story-homepage .xaaj-brand-story-split-copy h2{
                font-size:clamp(42px,11vw,58px)!important;
              }
              .xaaj-brand-story-home-lead{
                font-size:20px!important;
              }
              .xaaj-brand-story-home-watermark{
                width:220px;
                height:220px;
                right:-35px;
                bottom:-30px;
              }
            }
            @media(max-width:520px){
              .xaaj-brand-story-homepage .xaaj-brand-story-split-copy{
                padding:52px 22px 58px!important;
              }
              .xaaj-brand-story-homepage .xaaj-brand-story-split-eyebrow{
                font-size:9px!important;
                letter-spacing:2.2px!important;
              }
              .xaaj-brand-story-homepage .xaaj-brand-story-split-copy h2{
                font-size:42px!important;
                line-height:.98!important;
                margin-bottom:25px!important;
              }
              .xaaj-brand-story-home-lead{
                font-size:19px!important;
              }
              .xaaj-brand-story-homepage .xaaj-brand-story-split-copy p:not(.xaaj-brand-story-home-lead):not(.xaaj-brand-story-home-closing){
                font-size:11.5px!important;
                line-height:1.72!important;
              }
              .xaaj-brand-story-home-closing{
                font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
                font-size:12px!important;
                font-weight:400!important;
                line-height:1.75!important;
                letter-spacing:.01em!important;
              }
            }
          `})]}),(0,$.jsx)(`section`,{className:`xaaj-horeca-bundled xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,"aria-label":`B2B collection`,children:(0,$.jsxs)(`div`,{className:`xaaj-horeca-bundled-inner`,children:[(0,$.jsx)(`h2`,{children:`Discover our B2B collections`}),(0,$.jsxs)(`div`,{className:`xaaj-horeca-bundled-grid`,children:[(0,$.jsxs)(Z,{to:`/enquiry`,className:`xaaj-horeca-bundled-main`,"aria-label":`B2B enquiry`,children:[(0,$.jsx)(`div`,{className:`xaaj-horeca-bundled-media`,children:(0,$.jsx)(`img`,{src:p.main.url,alt:p.main.alt,loading:`lazy`})}),(0,$.jsxs)(`div`,{className:`xaaj-horeca-bundled-label`,children:[`B2B `,(0,$.jsx)(Ud,{size:18,strokeWidth:1.25})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-horeca-bundled-side`,children:[(0,$.jsx)(Z,{to:`/enquiry`,className:`xaaj-horeca-bundled-small`,"aria-label":`B2B enquiry`,children:(0,$.jsx)(`img`,{src:p.sideOne.url,alt:p.sideOne.alt,loading:`lazy`})}),(0,$.jsx)(Z,{to:`/enquiry`,className:`xaaj-horeca-bundled-small`,"aria-label":`B2B enquiry`,children:(0,$.jsx)(`img`,{src:p.sideTwo.url,alt:p.sideTwo.alt,loading:`lazy`})})]})]})]})}),(0,$.jsx)(`section`,{className:`xaaj-values-strip xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,"aria-label":`XAAJ values`,children:(0,$.jsxs)(`div`,{className:`xaaj-values-grid`,children:[(0,$.jsxs)(`article`,{className:`xaaj-value-card`,children:[(0,$.jsx)(`div`,{className:`xaaj-value-icon`,"aria-hidden":`true`,children:(0,$.jsx)(Yd,{size:42,strokeWidth:1.15})}),(0,$.jsx)(`h3`,{children:`Responsible Design`}),(0,$.jsxs)(`p`,{children:[`Designed with integrity and`,(0,$.jsx)(`br`,{}),`durably crafted for everyday`,(0,$.jsx)(`br`,{}),`use.`]})]}),(0,$.jsxs)(`article`,{className:`xaaj-value-card`,children:[(0,$.jsx)(`div`,{className:`xaaj-value-icon`,"aria-hidden":`true`,children:(0,$.jsx)(cf,{size:42,strokeWidth:1.15})}),(0,$.jsx)(`h3`,{children:`Transparent Pricing`}),(0,$.jsxs)(`p`,{children:[`We believe in accessible`,(0,$.jsx)(`br`,{}),`pricing and full transparency.`,(0,$.jsx)(`br`,{}),`Our pricing model is an open`,(0,$.jsx)(`br`,{}),`book.`]})]}),(0,$.jsxs)(`article`,{className:`xaaj-value-card`,children:[(0,$.jsx)(`div`,{className:`xaaj-value-icon`,"aria-hidden":`true`,children:(0,$.jsx)(gf,{size:42,strokeWidth:1.15})}),(0,$.jsx)(`h3`,{children:`Sustainable Sourcing`}),(0,$.jsxs)(`p`,{children:[`We only partner with people`,(0,$.jsx)(`br`,{}),`who put the earth, and its`,(0,$.jsx)(`br`,{}),`people, first.`]})]}),(0,$.jsxs)(`article`,{className:`xaaj-value-card`,children:[(0,$.jsx)(`div`,{className:`xaaj-value-icon`,"aria-hidden":`true`,children:(0,$.jsx)(Sf,{size:42,strokeWidth:1.15})}),(0,$.jsx)(`h3`,{children:`Giving Back`}),(0,$.jsxs)(`p`,{children:[`Thanks to Mealshare, every`,(0,$.jsx)(`br`,{}),`purchase directly donates a`,(0,$.jsx)(`br`,{}),`meal to a youth in need.`]})]})]})}),(0,$.jsx)(`style`,{children:`
          .xaaj-values-strip{
            width:100%;
            background:#fff;
            padding:36px 5.2vw 34px;
            box-sizing:border-box;
          }
          .xaaj-values-grid{
            width:min(1180px,100%);
            margin:0 auto;
            display:grid;
            grid-template-columns:repeat(4,minmax(0,1fr));
            gap:54px;
            align-items:start;
          }
          .xaaj-value-card{
            text-align:center;
            color:#393633;
          }
          .xaaj-value-icon{
            width:58px;
            height:58px;
            margin:0 auto 25px;
            display:grid;
            place-items:center;
            color:#aaa8a5;
          }
          .xaaj-value-icon svg{
            width:42px;
            height:42px;
            stroke-width:1.05;
          }
          .xaaj-value-card h3{
            margin:0 0 13px;
            font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;
            font-size:23px;
            font-weight:400;
            line-height:1.2;
            letter-spacing:.01em;
            color:#393633;
          }
          .xaaj-value-card p{
            margin:0;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:14px;
            font-weight:400;
            line-height:2.05;
            letter-spacing:.01em;
            color:#66625e;
          }
          @media(max-width:900px){
            .xaaj-values-grid{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:62px;gap:46px}
          }
          @media(max-width:520px){
            .xaaj-values-strip{padding:34px 20px 42px}
            .xaaj-values-grid{grid-template-columns:1fr;gap:50px}
            .xaaj-value-card h3{font-size:21px}
            .xaaj-value-card p{font-size:13px;line-height:1.85}
          }
        `}),(0,$.jsx)(rm,{}),!1,(0,$.jsx)(`section`,{className:`xaaj-everyday-carousel xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,"aria-label":`The Everyday Table`,children:(0,$.jsxs)(`div`,{className:`xaaj-everyday-carousel-track`,children:[(0,$.jsx)(`article`,{className:`xaaj-everyday-slide`,children:(0,$.jsx)(`img`,{src:`https://res.cloudinary.com/kswukbpp/image/upload/v1790269104/ChatGPT_Image_Sep_24_2026_10_27_52_PM.png`,alt:`XAAJ handcrafted serveware collection`,loading:`eager`,fetchPriority:`high`})}),(0,$.jsx)(`div`,{className:`xaaj-everyday-overlay`,"aria-hidden":`true`}),(0,$.jsxs)(`div`,{className:`xaaj-everyday-copy`,children:[(0,$.jsx)(`span`,{className:`xaaj-cinema-section-eyebrow`,children:`The Everyday Table`}),(0,$.jsx)(`h2`,{children:`The Everyday Table`}),(0,$.jsx)(`p`,{className:`xaaj-everyday-subtitle`,children:`Thoughtfully designed for everyday living.`}),(0,$.jsxs)(`p`,{children:[`Morning chai. Long lunches. Quiet dinners.`,(0,$.jsx)(`br`,{}),`Pieces designed for the moments that make a home feel like yours.`]}),(0,$.jsxs)(Z,{className:`xaaj-cinema-cta`,to:`/shop`,children:[`Shop the collection `,(0,$.jsx)(Ud,{size:14})]})]})]})}),(0,$.jsx)(`section`,{className:`xaaj-cinema-products xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,children:(0,$.jsxs)(`div`,{className:`xaaj-cinema-wrap`,children:[(0,$.jsxs)(`div`,{className:`xaaj-cinema-section-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`xaaj-cinema-section-eyebrow`,children:`Considered · Intentional · Handcrafted`}),(0,$.jsx)(`h2`,{className:`xaaj-cinema-section-title`,children:`Best sellers`})]}),(0,$.jsxs)(Z,{className:`xaaj-cinema-text-link`,to:`/shop?filter=best-selling`,children:[`View all products `,(0,$.jsx)(Ud,{size:13})]})]}),(0,$.jsx)(`div`,{className:`xaaj-cinema-product-grid`,children:i.slice(0,4).map(e=>(0,$.jsx)(zp,{product:e},e.id||e._id))})]})}),(0,$.jsxs)(`section`,{className:`xaaj-collection-story-carousel xaaj-cinema-reveal`,"data-xaaj-collection-story":!0,"aria-label":`The collection story`,children:[(0,$.jsx)(`div`,{className:`xaaj-collection-story-media`,children:(0,$.jsxs)(`div`,{className:`xaaj-collection-story-track`,children:[(0,$.jsx)(`article`,{className:`xaaj-collection-story-slide`,children:(0,$.jsx)(`img`,{src:`https://res.cloudinary.com/kswukbpp/image/upload/v1789491522/Blue_Meadow_Bowls2.png`,alt:`XAAJ Willow Blue serving set`,loading:`lazy`})}),(0,$.jsx)(`article`,{className:`xaaj-collection-story-slide`,children:(0,$.jsx)(`img`,{src:`https://res.cloudinary.com/kswukbpp/image/upload/v1789492078/Coastal_Clay_Cup_Saucer_Set1.png`,alt:`XAAJ Coastal Clay cup and saucer set`,loading:`lazy`})}),(0,$.jsx)(`article`,{className:`xaaj-collection-story-slide`,"aria-hidden":`true`,children:(0,$.jsx)(`img`,{src:`https://res.cloudinary.com/kswukbpp/image/upload/v1789491522/Blue_Meadow_Bowls2.png`,alt:``,loading:`lazy`})}),(0,$.jsx)(`article`,{className:`xaaj-collection-story-slide`,"aria-hidden":`true`,children:(0,$.jsx)(`img`,{src:`https://res.cloudinary.com/kswukbpp/image/upload/v1789492078/Coastal_Clay_Cup_Saucer_Set1.png`,alt:``,loading:`lazy`})})]})}),(0,$.jsx)(`div`,{className:`xaaj-collection-story-copy`,children:(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`xaaj-cinema-section-eyebrow`,children:`The collection story`}),(0,$.jsx)(`h2`,{children:`Made slowly. Meant to live with you.`}),(0,$.jsx)(`p`,{children:`We look to everyday rituals, natural materials and the quiet beauty around us, then shape useful objects with a calmer point of view.`}),(0,$.jsxs)(Z,{className:`xaaj-cinema-text-link`,to:`/story`,children:[`Our story `,(0,$.jsx)(Ud,{size:13})]})]})})]}),(0,$.jsx)(`section`,{className:`xaaj-cinema-products xaaj-cinema-reveal`,"data-xaaj-cinema-reveal":!0,children:(0,$.jsxs)(`div`,{className:`xaaj-cinema-wrap`,children:[(0,$.jsxs)(`div`,{className:`xaaj-cinema-section-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`xaaj-cinema-section-eyebrow`,children:`Just arrived`}),(0,$.jsx)(`h2`,{className:`xaaj-cinema-section-title`,children:`New arrivals`})]}),(0,$.jsxs)(Z,{className:`xaaj-cinema-text-link`,to:`/shop?filter=new`,children:[`Shop new `,(0,$.jsx)(Ud,{size:13})]})]}),(0,$.jsx)(`div`,{className:`xaaj-cinema-product-grid`,children:a.slice(0,4).map(e=>(0,$.jsx)(zp,{product:e},e.id||e._id))})]})}),(0,$.jsxs)(`section`,{className:`xaaj-cinema-quote`,children:[(0,$.jsx)(`p`,{children:`“A table is never just a table. It is where life happens.”`}),(0,$.jsx)(`span`,{children:`XAAJ · Stories Crafted in Earth`})]})]}),(0,$.jsx)(Up,{})]})}function Hp(){let[e,t]=(0,_.useState)({name:``,email:``,phone:``,subject:``,message:``}),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(null),o=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`xaaj-contact-layout`,children:[(0,$.jsx)(`section`,{className:`xaaj-contact-image-panel`,"aria-label":`XAAJ tableware`,children:(0,$.jsx)(`img`,{src:`/contact.png`,alt:`XAAJ handcrafted tableware arranged on a table`})}),(0,$.jsx)(`section`,{className:`xaaj-contact-form-side`,children:(0,$.jsxs)(`div`,{className:`xaaj-contact-form-inner`,children:[(0,$.jsx)(`span`,{className:`xaaj-contact-kicker`,children:`CONTACT US`}),(0,$.jsx)(`h2`,{children:`Send us a message.`}),(0,$.jsx)(`p`,{className:`xaaj-contact-form-subtitle`,children:`Fill out the form and our team will get back to you as soon as possible.`}),(0,$.jsxs)(`form`,{className:`xaaj-contact-form`,onSubmit:async n=>{n.preventDefault();let i=e.name.trim(),o=e.email.trim().toLowerCase(),s=e.phone.trim(),c=e.subject.trim(),l=e.message.trim();if(!i||!o||!l){a({type:`error`,title:`A few details are missing`,message:`Please enter your name, email address and message.`});return}if(!/^\S+@\S+\.\S+$/.test(o)){a({type:`error`,title:`Invalid email address`,message:`Please enter a valid email address and try again.`});return}r(!0);try{let e=c?`Subject: ${c}\n\n${l}`:l,n=await Jf.send({name:i,email:o,phone:s,message:e});t({name:``,email:``,phone:``,subject:``,message:``}),a({type:`success`,title:`Message received`,message:n?.message||`Thank you for reaching out to XAAJ. Our team will get back to you shortly.`})}catch(e){a({type:`error`,title:`Something went wrong`,message:e?.data?.message||e?.message||`We could not send your message right now. Please try again or contact us directly.`})}finally{r(!1)}},children:[(0,$.jsxs)(`div`,{className:`xaaj-contact-form-row`,children:[(0,$.jsxs)(`label`,{children:[(0,$.jsxs)(`span`,{children:[`Your Name `,(0,$.jsx)(`b`,{children:`*`})]}),(0,$.jsx)(`input`,{name:`name`,value:e.name,onChange:o,required:!0,maxLength:80,autoComplete:`name`,placeholder:`Your name`})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsxs)(`span`,{children:[`Your Email `,(0,$.jsx)(`b`,{children:`*`})]}),(0,$.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:o,required:!0,maxLength:254,autoComplete:`email`,placeholder:`you@example.com`})]})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`Subject`}),(0,$.jsxs)(`select`,{name:`subject`,value:e.subject,onChange:o,children:[(0,$.jsx)(`option`,{value:``,children:`Select a subject`}),(0,$.jsx)(`option`,{value:`Order enquiry`,children:`Order enquiry`}),(0,$.jsx)(`option`,{value:`Product enquiry`,children:`Product enquiry`}),(0,$.jsx)(`option`,{value:`Corporate / B2B`,children:`Corporate / B2B`}),(0,$.jsx)(`option`,{value:`Collaboration`,children:`Collaboration`}),(0,$.jsx)(`option`,{value:`Other`,children:`Other`})]})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsxs)(`span`,{children:[`Your Message `,(0,$.jsx)(`b`,{children:`*`})]}),(0,$.jsx)(`textarea`,{name:`message`,value:e.message,onChange:o,required:!0,maxLength:2e3,rows:7,placeholder:`Tell us how we can help...`})]}),(0,$.jsxs)(`label`,{className:`xaaj-contact-phone-field`,children:[(0,$.jsxs)(`span`,{children:[`Phone / WhatsApp `,(0,$.jsx)(`small`,{children:`Optional`})]}),(0,$.jsx)(`input`,{type:`tel`,name:`phone`,value:e.phone,onChange:o,maxLength:15,autoComplete:`tel`,placeholder:`+91 00000 00000`})]}),(0,$.jsxs)(`div`,{className:`xaaj-contact-submit-row`,children:[(0,$.jsx)(`span`,{children:`We read every message.`}),(0,$.jsxs)(`button`,{type:`submit`,disabled:n,children:[(0,$.jsx)(`span`,{children:n?`Sending...`:`Send Message`}),(0,$.jsx)(Ud,{size:16,strokeWidth:1.5})]})]})]})]})})]}),(0,$.jsxs)(`section`,{className:`xaaj-contact-info-strip`,children:[(0,$.jsxs)(`div`,{className:`xaaj-contact-info-list`,children:[(0,$.jsxs)(`a`,{href:`https://www.google.com/maps/search/?api=1&query=G6%2F4C%20DLF%20Garden%20City%20Sector%2092%20Gurugram%20122505`,target:`_blank`,rel:`noreferrer`,children:[(0,$.jsx)(tf,{size:20,strokeWidth:1.35}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`OUR ADDRESS`}),(0,$.jsxs)(`strong`,{children:[`G6/4C DLF Garden City,`,(0,$.jsx)(`br`,{}),`Sector 92, Gurugram 122505`]})]})]}),(0,$.jsxs)(`a`,{href:`tel:+919899446117`,children:[(0,$.jsx)(uf,{size:20,strokeWidth:1.35}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`CALL US`}),(0,$.jsx)(`strong`,{children:`+91 98994 46117`}),(0,$.jsx)(`em`,{children:`Mon – Sat, 10:00 AM – 6:00 PM`})]})]}),(0,$.jsxs)(`a`,{href:`mailto:customercare@xaaj.in`,children:[(0,$.jsx)($d,{size:20,strokeWidth:1.35}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`EMAIL US`}),(0,$.jsx)(`strong`,{children:`customercare@xaaj.in`}),(0,$.jsx)(`em`,{children:`We usually respond within 1–2 business days.`})]})]})]}),(0,$.jsxs)(`a`,{className:`xaaj-contact-map-card`,href:`https://www.google.com/maps/search/?api=1&query=G6%2F4C%20DLF%20Garden%20City%20Sector%2092%20Gurugram%20122505`,target:`_blank`,rel:`noreferrer`,"aria-label":`Open XAAJ address in Google Maps`,children:[(0,$.jsx)(tf,{size:30,strokeWidth:1.25}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:`Gurugram`}),(0,$.jsx)(`span`,{children:`Haryana, India`})]})]})]}),i&&(0,$.jsx)(`div`,{className:`xaaj-contact-popup`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`xaaj-contact-popup-title`,onClick:e=>{e.target===e.currentTarget&&a(null)},children:(0,$.jsxs)(`div`,{className:`xaaj-contact-popup-card`,children:[(0,$.jsx)(`button`,{type:`button`,className:`xaaj-contact-popup-close`,onClick:()=>a(null),"aria-label":`Close`,children:`×`}),(0,$.jsx)(`div`,{className:`xaaj-contact-popup-mark`,children:i.type===`error`?`!`:`♡`}),(0,$.jsx)(`span`,{className:`xaaj-contact-popup-brand`,children:`XAAJ`}),(0,$.jsx)(`h3`,{id:`xaaj-contact-popup-title`,children:i.title}),(0,$.jsx)(`p`,{children:i.message}),(0,$.jsx)(`div`,{className:`xaaj-contact-popup-rule`}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-contact-popup-action`,onClick:()=>a(null),children:`Continue`})]})})]})}function Up(){return(0,$.jsxs)(`footer`,{className:`xaaj-reference-footer`,children:[(0,$.jsx)(`style`,{children:`
        .xaaj-reference-footer{
          width:100%;
          overflow:hidden;
          background:#272d29;
          color:#f5f2ea;
          font-family:'Gotham Book','Gotham',Arial,sans-serif;
        }

        .xaaj-reference-footer *,
        .xaaj-reference-footer *::before,
        .xaaj-reference-footer *::after{
          box-sizing:border-box;
        }

        /* Newsletter */
        .xaaj-reference-newsletter{
          padding:58px 24px 56px;
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
          border-bottom:1px solid rgba(255,255,255,.09);
        }

        .xaaj-reference-newsletter h2{
          margin:0;
          color:#f7f4ec;
          font-family:Georgia,'Times New Roman',serif!important;
          font-size:32px!important;
          line-height:1.12!important;
          font-weight:400!important;
          letter-spacing:-.2px!important;
        }

        .xaaj-reference-newsletter p{
          margin:12px 0 0;
          max-width:560px;
          color:rgba(247,244,236,.62);
          font-size:13px!important;
          line-height:1.55!important;
          letter-spacing:.2px!important;
        }

        .xaaj-reference-newsletter-form{
          width:min(420px,100%);
          margin:22px auto 0;
        }

        .xaaj-reference-newsletter-field{
          width:100%;
          height:50px;
          border:1px solid rgba(247,244,236,.34);
          border-radius:8px;
          background:rgba(255,255,255,.025);
          display:flex;
          align-items:center;
          overflow:hidden;
          transition:border-color .2s ease,background .2s ease;
        }

        .xaaj-reference-newsletter-field:focus-within{
          border-color:rgba(247,244,236,.68);
          background:rgba(255,255,255,.045);
        }

        .xaaj-reference-newsletter-field input{
          flex:1;
          min-width:0;
          height:100%;
          border:0;
          outline:0;
          background:transparent;
          color:#f7f4ec;
          padding:0 15px;
          font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
          font-size:13px!important;
          line-height:1!important;
          letter-spacing:.2px!important;
        }

        .xaaj-reference-newsletter-field input::placeholder{
          color:rgba(247,244,236,.56);
          opacity:1;
        }

        .xaaj-reference-newsletter-field button{
          width:48px;
          height:100%;
          flex:0 0 48px;
          border:0;
          background:transparent;
          color:#f7f4ec;
          display:grid;
          place-items:center;
          padding:0;
          cursor:pointer;
          transition:transform .2s ease,opacity .2s ease;
        }

        .xaaj-reference-newsletter-field button:hover{
          transform:translateX(2px);
          opacity:.75;
        }

        .xaaj-reference-newsletter-message{
          min-height:14px;
          margin-top:7px;
          color:rgba(247,244,236,.55);
          font-size:10px!important;
          line-height:1.4!important;
          letter-spacing:.1px;
        }

        /* Main footer — premium desktop editorial layout: brand | contact | shop/about */
        .xaaj-reference-footer-main{
          width:min(1320px,100%);
          margin:0 auto;
          display:grid!important;
          grid-template-columns:minmax(0,1.15fr) minmax(300px,.90fr) minmax(320px,1.05fr)!important;
          grid-template-areas:'brand contact links';
          align-items:start;
          column-gap:0;
          padding:62px 56px 58px;
          box-sizing:border-box;
        }

        .xaaj-reference-footer-brand{
          grid-area:brand;
          padding:0 72px 0 0;
          min-width:0;
        }

        .xaaj-reference-footer-brand h3{
          margin:0;
          color:#f7f4ec;
          font-family:Georgia,'Times New Roman',serif!important;
          font-size:62px!important;
          font-weight:400!important;
          line-height:.82!important;
          letter-spacing:2px!important;
        }

        .xaaj-reference-footer-brand-rule{
          width:48px;
          height:1px;
          margin:24px 0 18px;
          background:rgba(247,244,236,.58);
        }

        .xaaj-reference-footer-brand p{
          max-width:390px;
          margin:0;
          color:rgba(247,244,236,.70);
          font-family:Georgia,'Times New Roman',serif!important;
          font-size:14px!important;
          line-height:1.65!important;
          letter-spacing:.05px;
        }

        /* Desktop contact column */
        .xaaj-reference-footer-contact{
          grid-area:contact;
          border-left:1px solid rgba(247,244,236,.18);
          border-right:1px solid rgba(247,244,236,.18);
          padding:2px 54px 0;
          display:flex;
          flex-direction:column;
          justify-content:flex-start;
          min-width:0;
        }

        .xaaj-reference-footer-contact h4{
          display:none!important;
        }

        .xaaj-reference-footer-contact-list{
          display:flex;
          flex-direction:column;
          gap:20px;
          padding:0;
        }

        .xaaj-reference-footer-contact-item{
          display:grid;
          grid-template-columns:24px minmax(0,1fr);
          gap:13px;
          align-items:center;
          min-width:0;
          color:inherit;
          text-decoration:none;
          transition:color .22s ease,transform .22s ease;
        }

        .xaaj-reference-footer-contact-item:hover{
          transform:translateX(2px);
        }

        .xaaj-reference-footer-contact-icon{
          width:24px;
          height:24px;
          display:flex;
          align-items:center;
          justify-content:center;
          color:rgba(247,244,236,.88);
          background:transparent;
          border:0;
          border-radius:0;
          margin:0;
          transition:color .22s ease;
        }

        .xaaj-reference-footer-contact-item:hover .xaaj-reference-footer-contact-icon{
          color:#f7f4ec;
        }

        .xaaj-reference-footer-contact-copy{
          min-width:0;
        }

        .xaaj-reference-footer-contact-copy strong{
          display:none!important;
        }

        .xaaj-reference-footer-contact-copy span{
          display:block;
          margin:0;
          max-width:100%;
          overflow:visible;
          text-overflow:clip;
          white-space:normal;
          color:rgba(247,244,236,.68);
          font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
          font-size:11.5px!important;
          line-height:1.5!important;
          letter-spacing:.03px;
        }

        .xaaj-reference-footer-address{
          display:flex;
          align-items:flex-start;
          gap:14px;
          width:100%;
          max-width:285px;
          margin:27px 0 0;
          color:rgba(247,244,236,.60);
          text-decoration:none;
          font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
          font-size:11px!important;
          line-height:1.55!important;
          letter-spacing:.05px;
          transition:color .2s ease;
        }

        .xaaj-reference-footer-address svg{
          flex:0 0 auto;
          margin-top:1px;
          color:rgba(247,244,236,.88);
        }

        .xaaj-reference-footer-address:hover{
          color:#f7f4ec;
        }

        /* Right side: Shop + About */
        .xaaj-reference-footer-links{
          grid-area:links;
          padding-left:54px;
          display:grid;
          grid-template-columns:minmax(125px,1fr) minmax(105px,.82fr);
          column-gap:56px;
          min-width:0;
        }

        .xaaj-reference-footer-column h4{
          margin:2px 0 22px;
          color:#f7f4ec;
          font-family:Georgia,'Times New Roman',serif!important;
          font-size:22px!important;
          font-weight:400!important;
          line-height:1.1!important;
        }

        .xaaj-reference-footer-column nav{
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          gap:13px;
        }

        .xaaj-reference-footer-column a{
          color:rgba(247,244,236,.65);
          text-decoration:none;
          font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
          font-size:12px!important;
          line-height:1.35!important;
          letter-spacing:.15px!important;
          transition:color .2s ease,transform .2s ease;
        }

        .xaaj-reference-footer-column a:hover{
          color:#fff;
          transform:translateX(2px);
        }

        /* Bottom bar */
        .xaaj-reference-footer-bottom{
          min-height:64px;
          border-top:1px solid rgba(255,255,255,.09);
          padding:17px max(48px,calc((100% - 1320px)/2 + 48px));
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:28px;
        }

        .xaaj-reference-footer-copy{
          flex:0 0 auto;
          color:rgba(247,244,236,.48);
          font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
          font-size:10px!important;
          line-height:1.5!important;
          letter-spacing:.15px;
        }

        .xaaj-reference-footer-policies{
          display:flex;
          align-items:center;
          justify-content:flex-end;
          flex-wrap:wrap;
          gap:0;
          min-width:0;
        }

        .xaaj-reference-footer-policies a{
          color:rgba(247,244,236,.52);
          text-decoration:none;
          font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
          font-size:10px!important;
          line-height:1.5!important;
          letter-spacing:.1px;
          white-space:nowrap;
          transition:color .2s ease;
        }

        .xaaj-reference-footer-policies a:hover{
          color:#fff;
        }

        .xaaj-reference-footer-policies a + a::before{
          content:'';
          display:inline-block;
          width:1px;
          height:11px;
          margin:0 14px;
          vertical-align:-2px;
          background:rgba(247,244,236,.22);
        }

        /* Tablet */
        @media(max-width:1050px){
          .xaaj-reference-footer-main{
            grid-template-columns:minmax(260px,1.1fr) minmax(240px,.9fr) minmax(260px,1fr);
            gap:28px;
            padding:54px 34px 48px;
          }

          .xaaj-reference-footer-brand{
            padding-right:28px;
          }

          .xaaj-reference-footer-contact{
            padding-left:30px;
            padding-right:30px;
          }

          .xaaj-reference-footer-links{
            padding-left:30px;
            column-gap:28px;
          }

          .xaaj-reference-footer-bottom{
            padding:16px 34px;
          }

          .xaaj-reference-footer-policies a + a::before{
            margin:0 10px;
          }
        }

        /* Small tablet / large phone */
        @media(max-width:760px){
          .xaaj-reference-newsletter{
            padding:46px 22px 44px;
          }

          .xaaj-reference-newsletter h2{
            font-size:28px!important;
          }

          .xaaj-reference-footer-main{
            grid-template-columns:1fr 1fr;
            gap:38px 28px;
            padding:48px 26px 44px;
          }

          .xaaj-reference-footer-brand{
            grid-column:1 / -1;
          }

          .xaaj-reference-footer-brand p{
            max-width:430px;
          }

          .xaaj-reference-footer-contact{
            grid-column:1 / -1;
          }

          .xaaj-reference-footer-contact-list{
            display:grid;
            grid-template-columns:repeat(3,minmax(0,1fr));
            gap:18px;
          }

          .xaaj-reference-footer-bottom{
            padding:20px 26px 22px;
            align-items:flex-start;
            flex-direction:column;
            gap:14px;
          }

          .xaaj-reference-footer-policies{
            justify-content:flex-start;
          }
        }

        /* Phone */
        @media(max-width:520px){
          .xaaj-reference-newsletter{
            padding:38px 18px 36px;
          }

          .xaaj-reference-newsletter h2{
            font-size:25px!important;
            letter-spacing:-.1px!important;
          }

          .xaaj-reference-newsletter p{
            margin-top:10px;
            max-width:330px;
            font-size:11.5px!important;
            line-height:1.55!important;
          }

          .xaaj-reference-newsletter-form{
            margin-top:18px;
          }

          .xaaj-reference-newsletter-field{
            height:46px;
          }

          .xaaj-reference-footer-main{
            grid-template-columns:1fr 1fr;
            gap:31px 20px;
            padding:39px 20px 34px;
          }

          .xaaj-reference-footer-brand h3{
            font-size:49px!important;
            letter-spacing:1.5px!important;
          }

          .xaaj-reference-footer-brand-rule{
            margin:18px 0 14px;
          }

          .xaaj-reference-footer-brand p{
            max-width:320px;
            font-size:14px!important;
            line-height:1.5!important;
          }

          .xaaj-reference-footer-column h4,
          .xaaj-reference-footer-contact h4{
            margin-bottom:15px;
            font-size:19px!important;
          }

          .xaaj-reference-footer-column nav{
            gap:10px;
          }

          .xaaj-reference-footer-column a{
            font-size:11px!important;
          }

          .xaaj-reference-footer-contact-list{
            grid-template-columns:1fr;
            gap:12px;
          }

          .xaaj-reference-footer-contact-item{
            grid-template-columns:38px minmax(0,1fr);
            gap:11px;
          }

          .xaaj-reference-footer-contact-icon{
            width:38px;
            height:38px;
          }

          .xaaj-reference-footer-contact-copy strong{
            font-size:12px!important;
          }

          .xaaj-reference-footer-contact-copy span{
            font-size:10px!important;
          }

          .xaaj-reference-footer-bottom{
            padding:18px 20px 21px;
            gap:16px;
          }

          .xaaj-reference-footer-copy{
            font-size:9.5px!important;
          }

          .xaaj-reference-footer-policies{
            width:100%;
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:9px 16px;
          }

          .xaaj-reference-footer-policies a{
            font-size:9.5px!important;
            white-space:normal;
          }

          .xaaj-reference-footer-policies a + a::before{
            display:none;
          }
        }


        /* Final desktop footer lock: Brand | Shop | About | Contact */
        @media(min-width:761px){
          .xaaj-reference-footer-main{
            display:grid!important;
            grid-template-columns:minmax(260px,1.35fr) minmax(125px,.72fr) minmax(125px,.72fr) minmax(260px,1.05fr)!important;
            grid-template-areas:'brand shop about contact'!important;
            align-items:start!important;
            column-gap:0!important;
            row-gap:0!important;
          }

          .xaaj-reference-footer-brand{grid-area:brand!important;}
          .xaaj-reference-footer-shop{grid-area:shop!important;}
          .xaaj-reference-footer-about{grid-area:about!important;}
          .xaaj-reference-footer-contact{grid-area:contact!important;}

          .xaaj-reference-footer-shop,
          .xaaj-reference-footer-about{
            padding-left:28px!important;
            padding-right:20px!important;
          }

          /* Premium desktop contact edge: one divider only, between About and Contact. */
          .xaaj-reference-footer-contact{
            padding-left:34px!important;
            padding-right:0!important;
            border-left:1px solid rgba(247,244,236,.18)!important;
            border-right:0!important;
          }

          .xaaj-reference-footer-contact-list{
            gap:18px!important;
          }

          .xaaj-reference-footer-contact-item{
            grid-template-columns:24px minmax(0,1fr)!important;
            gap:13px!important;
          }

          .xaaj-reference-footer-contact-copy span{
            font-size:11.5px!important;
            line-height:1.5!important;
          }

          .xaaj-reference-footer-address{
            margin-top:24px!important;
            max-width:300px!important;
            gap:12px!important;
          }

          .xaaj-mobile-footer{display:none!important;}
        }

        @media(min-width:761px){
          /* Keep the footer visually clean: no right-side contact divider. */
          .xaaj-reference-footer-contact{
            border-right:none!important;
          }
        }

        @media(min-width:761px) and (max-width:1050px){
          .xaaj-reference-footer-main{
            grid-template-columns:minmax(220px,1.2fr) minmax(105px,.7fr) minmax(105px,.7fr) minmax(220px,1fr)!important;
            padding-left:34px!important;
            padding-right:34px!important;
          }

          .xaaj-reference-footer-brand{
            padding-right:24px!important;
          }

          .xaaj-reference-footer-shop,
          .xaaj-reference-footer-about{
            padding-left:18px!important;
            padding-right:12px!important;
          }

          .xaaj-reference-footer-contact{
            padding-left:22px!important;
          }
        }

        /* =========================================================
           XAAJ MOBILE FOOTER
           Premium / responsive / compact editorial layout
           ========================================================= */
        .xaaj-mobile-footer{
          display:none;
        }

        @media(max-width:760px){
          .xaaj-reference-footer-main{
            display:none!important;
          }

          .xaaj-mobile-footer{
            display:block;
            width:100%;
            padding:0 20px;
            box-sizing:border-box;
          }

          .xaaj-mobile-footer-section{
            margin:0;
            border-top:1px solid rgba(247,244,236,.13);
          }

          .xaaj-mobile-footer-section:last-child{
            border-bottom:1px solid rgba(247,244,236,.13);
          }

          .xaaj-mobile-footer-section summary{
            list-style:none;
            min-height:58px;
            padding:0;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:16px;
            cursor:pointer;
            color:#f7f4ec;
            font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif!important;
            font-size:21px!important;
            font-weight:400!important;
            line-height:1;
            letter-spacing:.01em;
            -webkit-tap-highlight-color:transparent;
          }

          .xaaj-mobile-footer-section summary::-webkit-details-marker{
            display:none;
          }

          .xaaj-mobile-footer-section summary svg{
            flex:0 0 auto;
            transition:transform .25s ease;
            opacity:.82;
          }

          .xaaj-mobile-footer-section[open] summary svg{
            transform:rotate(180deg);
          }

          .xaaj-mobile-footer-section nav{
            display:flex;
            flex-direction:column;
            gap:10px;
            padding:0 0 18px;
          }

          .xaaj-mobile-footer-section nav a{
            color:rgba(247,244,236,.62);
            text-decoration:none;
            font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
            font-size:11px!important;
            line-height:1.45!important;
          }

          .xaaj-mobile-footer-contact-list{
            display:flex;
            flex-direction:column;
            gap:13px;
            padding:1px 0 20px;
          }

          .xaaj-mobile-footer-contact-item{
            display:grid;
            grid-template-columns:23px minmax(0,1fr);
            align-items:start;
            column-gap:14px;
            color:rgba(247,244,236,.67);
            text-decoration:none;
            font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
            font-size:11px!important;
            line-height:1.5!important;
            min-width:0;
          }

          .xaaj-mobile-footer-contact-item svg{
            margin-top:1px;
            color:#f7f4ec;
            opacity:.9;
            flex:0 0 auto;
          }

          .xaaj-mobile-footer-contact-item span{
            min-width:0;
            overflow-wrap:anywhere;
          }

          .xaaj-reference-footer-bottom{
            display:flex!important;
            flex-direction:column!important;
            align-items:flex-start!important;
            gap:16px!important;
            padding:18px 20px 21px!important;
            margin:0!important;
          }

          .xaaj-reference-footer-copy{
            order:2;
            width:100%;
            font-size:9.5px!important;
            line-height:1.45!important;
          }

          /* Legal links: deliberate 2-column grid on phones.
             This prevents awkward 3+2 wrapping and keeps every link aligned. */
          .xaaj-reference-footer-policies{
            order:1;
            width:100%!important;
            display:grid!important;
            grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;
            justify-content:stretch!important;
            align-items:stretch!important;
            gap:0!important;
            border-top:1px solid rgba(247,244,236,.12);
          }

          .xaaj-reference-footer-policies a{
            display:flex!important;
            align-items:center!important;
            min-height:38px!important;
            box-sizing:border-box!important;
            padding:8px 12px 8px 0!important;
            font-size:10.5px!important;
            line-height:1.35!important;
            letter-spacing:.01em!important;
            white-space:normal!important;
            color:rgba(247,244,236,.62)!important;
            text-decoration:none!important;
          }

          .xaaj-reference-footer-policies a:nth-child(even){
            padding-left:12px!important;
            padding-right:0!important;
            border-left:1px solid rgba(247,244,236,.12);
          }

          .xaaj-reference-footer-policies a:nth-child(odd){
            padding-right:12px!important;
          }

          .xaaj-reference-footer-policies a + a::before{
            display:none!important;
            content:none!important;
          }

          .xaaj-reference-footer-policies a:hover{
            color:#f7f4ec!important;
          }
        }

        @media(max-width:380px){
          .xaaj-mobile-footer{
            padding-left:18px;
            padding-right:18px;
          }

          .xaaj-mobile-footer-section summary{
            min-height:55px;
            font-size:20px!important;
          }

          .xaaj-mobile-footer-contact-list{
            gap:12px;
            padding-bottom:18px;
          }

          .xaaj-mobile-footer-contact-item{
            grid-template-columns:22px minmax(0,1fr);
            column-gap:12px;
            font-size:10.5px!important;
          }

          .xaaj-reference-footer-bottom{
            padding-left:18px!important;
            padding-right:18px!important;
          }

          .xaaj-reference-footer-policies{
            grid-template-columns:1fr!important;
          }

          .xaaj-reference-footer-policies a,
          .xaaj-reference-footer-policies a:nth-child(even),
          .xaaj-reference-footer-policies a:nth-child(odd){
            min-height:35px!important;
            padding:8px 0!important;
            font-size:9.5px!important;
            border-left:0!important;
            border-bottom:1px solid rgba(247,244,236,.09);
          }

          .xaaj-reference-footer-policies a:last-child{
            border-bottom:0!important;
          }
        }

        @media(max-width:360px){
          .xaaj-reference-footer-main{
            padding-left:17px;
            padding-right:17px;
            gap:28px 16px;
          }

          .xaaj-reference-footer-bottom{
            padding-left:17px;
            padding-right:17px;
          }

          .xaaj-reference-footer-brand h3{
            font-size:45px!important;
          }

          .xaaj-reference-footer-brand p{
            font-size:13px!important;
          }

          .xaaj-reference-footer-column h4,
          .xaaj-reference-footer-contact h4{
            font-size:18px!important;
          }
        }
        /* Final desktop footer: Brand | Shop | About | Contact */
        @media (min-width: 761px){
          .xaaj-reference-footer-main{
            display:grid!important;
            grid-template-columns:minmax(260px,1.35fr) minmax(125px,.72fr) minmax(125px,.72fr) minmax(260px,1.05fr)!important;
            grid-template-areas:"brand shop about contact"!important;
            align-items:start!important;
          }
          .xaaj-reference-footer-brand{grid-area:brand!important;}
          .xaaj-reference-footer-shop{grid-area:shop!important;}
          .xaaj-reference-footer-about{grid-area:about!important;}
          .xaaj-reference-footer-contact{grid-area:contact!important;}
        }

      `}),(0,$.jsxs)(`section`,{className:`xaaj-reference-newsletter`,"aria-labelledby":`xaaj-reference-subscribe-title`,children:[(0,$.jsx)(`h2`,{id:`xaaj-reference-subscribe-title`,children:`Subscribe to our emails`}),(0,$.jsx)(`p`,{children:`Subscribe to our mailing list for insider news, product launches, and more.`}),(0,$.jsx)(Wp,{})]}),(0,$.jsxs)(`div`,{className:`xaaj-reference-footer-main`,children:[(0,$.jsxs)(`div`,{className:`xaaj-reference-footer-brand`,children:[(0,$.jsx)(`h3`,{children:`XAAJ`}),(0,$.jsx)(`div`,{className:`xaaj-reference-footer-brand-rule`,"aria-hidden":`true`}),(0,$.jsx)(`p`,{children:`Contemporary crockery rooted in the colours, crafts and everyday beauty of India.`})]}),(0,$.jsxs)(`div`,{className:`xaaj-reference-footer-contact`,children:[(0,$.jsxs)(`div`,{className:`xaaj-reference-footer-contact-list`,children:[(0,$.jsxs)(`a`,{className:`xaaj-reference-footer-contact-item`,href:`tel:+919899446117`,"aria-label":`Call XAAJ at +91 98994 46117`,children:[(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-icon`,"aria-hidden":`true`,children:(0,$.jsx)(uf,{size:18,strokeWidth:1.35})}),(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-copy`,children:(0,$.jsx)(`span`,{children:`+91 98994 46117`})})]}),(0,$.jsxs)(`a`,{className:`xaaj-reference-footer-contact-item`,href:`https://wa.me/919899446117`,target:`_blank`,rel:`noreferrer`,"aria-label":`Chat with XAAJ on WhatsApp`,children:[(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-icon`,"aria-hidden":`true`,children:(0,$.jsx)(Vf,{size:18})}),(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-copy`,children:(0,$.jsx)(`span`,{children:`9899446117`})})]}),(0,$.jsxs)(`a`,{className:`xaaj-reference-footer-contact-item`,href:`mailto:customercare@xaaj.in`,"aria-label":`Email XAAJ customer care`,children:[(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-icon`,"aria-hidden":`true`,children:(0,$.jsx)($d,{size:18,strokeWidth:1.35})}),(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-copy`,children:(0,$.jsx)(`span`,{children:`customercare@xaaj.in`})})]}),(0,$.jsxs)(`a`,{className:`xaaj-reference-footer-contact-item`,href:`https://www.instagram.com/xaajstories?stkn=MWxkMzRscjAzaXVjZQ%3D%3D&utm_source=qr`,target:`_blank`,rel:`noreferrer`,"aria-label":`XAAJ on Instagram`,children:[(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-icon`,"aria-hidden":`true`,children:(0,$.jsx)(Hf,{size:18})}),(0,$.jsx)(`div`,{className:`xaaj-reference-footer-contact-copy`,children:(0,$.jsx)(`span`,{children:`@xaajstories`})})]})]}),(0,$.jsxs)(`a`,{className:`xaaj-reference-footer-address`,href:`https://www.google.com/maps/search/?api=1&query=G6%2F4C%20DLF%20Garden%20City%20Sector%2092%20Gurugram%20122505`,target:`_blank`,rel:`noreferrer`,"aria-label":`XAAJ business address`,children:[(0,$.jsx)(tf,{size:17,strokeWidth:1.25}),(0,$.jsxs)(`span`,{children:[`G6/4C DLF Garden City, Sector 92`,(0,$.jsx)(`br`,{}),`Gurugram 122505`]})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-reference-footer-column xaaj-reference-footer-shop`,children:[(0,$.jsx)(`h4`,{children:`Shop`}),(0,$.jsxs)(`nav`,{"aria-label":`Shop`,children:[(0,$.jsx)(Z,{to:`/shop?category=Dinnerware`,children:`Dinnerware`}),(0,$.jsx)(Z,{to:`/shop?category=Drinkware`,children:`Drinkware`}),(0,$.jsx)(Z,{to:`/shop?category=Serveware`,children:`Serveware`}),(0,$.jsx)(Z,{to:`/shop?category=Gifting`,children:`Gifting`}),(0,$.jsx)(Z,{to:`/enquiry`,children:`B2B`})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-reference-footer-column xaaj-reference-footer-about`,children:[(0,$.jsx)(`h4`,{children:`About`}),(0,$.jsxs)(`nav`,{"aria-label":`About XAAJ`,children:[(0,$.jsx)(Z,{to:`/story`,children:`Our Story`}),(0,$.jsx)(Z,{to:`/faq`,children:`FAQs`}),(0,$.jsx)(Z,{to:`/contact`,children:`Contact Us`})]})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-mobile-footer`,children:[(0,$.jsxs)(`details`,{className:`xaaj-mobile-footer-section`,children:[(0,$.jsxs)(`summary`,{children:[(0,$.jsx)(`span`,{children:`Shop`}),(0,$.jsx)(qd,{size:17,strokeWidth:1.2})]}),(0,$.jsxs)(`nav`,{"aria-label":`Mobile Shop`,children:[(0,$.jsx)(Z,{to:`/shop?category=Dinnerware`,children:`Dinnerware`}),(0,$.jsx)(Z,{to:`/shop?category=Drinkware`,children:`Drinkware`}),(0,$.jsx)(Z,{to:`/shop?category=Serveware`,children:`Serveware`}),(0,$.jsx)(Z,{to:`/shop?category=Gifting`,children:`Gifting`}),(0,$.jsx)(Z,{to:`/enquiry`,children:`B2B`})]})]}),(0,$.jsxs)(`details`,{className:`xaaj-mobile-footer-section`,children:[(0,$.jsxs)(`summary`,{children:[(0,$.jsx)(`span`,{children:`About`}),(0,$.jsx)(qd,{size:17,strokeWidth:1.2})]}),(0,$.jsxs)(`nav`,{"aria-label":`Mobile About`,children:[(0,$.jsx)(Z,{to:`/story`,children:`Our Story`}),(0,$.jsx)(Z,{to:`/faq`,children:`FAQs`}),(0,$.jsx)(Z,{to:`/contact`,children:`Contact Us`})]})]}),(0,$.jsxs)(`details`,{className:`xaaj-mobile-footer-section`,open:!0,children:[(0,$.jsxs)(`summary`,{children:[(0,$.jsx)(`span`,{children:`Get in Touch`}),(0,$.jsx)(qd,{size:17,strokeWidth:1.2})]}),(0,$.jsxs)(`div`,{className:`xaaj-mobile-footer-contact-list`,children:[(0,$.jsxs)(`a`,{href:`https://www.google.com/maps/search/?api=1&query=G6%2F4C%20DLF%20Garden%20City%20Sector%2092%20Gurugram%20122505`,target:`_blank`,rel:`noreferrer`,className:`xaaj-mobile-footer-contact-item`,"aria-label":`XAAJ business address`,children:[(0,$.jsx)(tf,{size:19,strokeWidth:1.35}),(0,$.jsxs)(`span`,{children:[`G6/4C DLF Garden City, Sector 92`,(0,$.jsx)(`br`,{}),`Gurugram 122505`]})]}),(0,$.jsxs)(`a`,{href:`https://wa.me/919899446117`,target:`_blank`,rel:`noreferrer`,className:`xaaj-mobile-footer-contact-item`,"aria-label":`Chat with XAAJ on WhatsApp`,children:[(0,$.jsx)(Vf,{size:19}),(0,$.jsx)(`span`,{children:`9899446117`})]}),(0,$.jsxs)(`a`,{href:`mailto:customercare@xaaj.in`,className:`xaaj-mobile-footer-contact-item`,"aria-label":`Email XAAJ customer care`,children:[(0,$.jsx)($d,{size:19,strokeWidth:1.35}),(0,$.jsx)(`span`,{children:`customercare@xaaj.in`})]}),(0,$.jsxs)(`a`,{href:`https://www.instagram.com/xaajstories?stkn=MWxkMzRscjAzaXVjZQ%3D%3D&utm_source=qr`,target:`_blank`,rel:`noreferrer`,className:`xaaj-mobile-footer-contact-item`,"aria-label":`XAAJ on Instagram`,children:[(0,$.jsx)(Hf,{size:19}),(0,$.jsx)(`span`,{children:`@xaajstories`})]})]})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-reference-footer-bottom`,children:[(0,$.jsx)(`div`,{className:`xaaj-reference-footer-copy`,children:(0,$.jsx)(`span`,{children:`© 2026, XAAJ. Made for everyday.`})}),(0,$.jsxs)(`nav`,{className:`xaaj-reference-footer-policies`,"aria-label":`Legal policies`,children:[(0,$.jsx)(Z,{to:`/shipping`,children:`Shipping Policy`}),(0,$.jsx)(Z,{to:`/returns`,children:`Return & Refund Policy`}),(0,$.jsx)(Z,{to:`/cancellation`,children:`Cancellation Policy`}),(0,$.jsx)(Z,{to:`/terms`,children:`Terms & Conditions`}),(0,$.jsx)(Z,{to:`/privacy`,children:`Privacy Policy`})]})]})]})}function Wp(){let[e,t]=(0,_.useState)(``),[n,r]=(0,_.useState)(``);return(0,$.jsxs)(`form`,{className:`xaaj-reference-newsletter-form`,onSubmit:async n=>{n.preventDefault();let i=e.trim().toLowerCase();if(!i){r(`Please enter your email address.`);return}r(`Subscribing...`);try{let e=await qf.subscribe(i);t(``),r(e?.message||`You’re now part of the XAAJ family.`)}catch(e){e?.data?.code===`ALREADY_SUBSCRIBED`||e?.status===409?r(`This email is already subscribed.`):r(e?.data?.message||e?.message||`We could not complete your subscription right now.`)}},children:[(0,$.jsxs)(`div`,{className:`xaaj-reference-newsletter-field`,children:[(0,$.jsx)(`input`,{type:`email`,value:e,onChange:e=>t(e.target.value),placeholder:`Email`,"aria-label":`Email address`,autoComplete:`email`,required:!0}),(0,$.jsx)(`button`,{type:`submit`,"aria-label":`Subscribe`,children:(0,$.jsx)(Ud,{size:29,strokeWidth:1.2})})]}),(0,$.jsx)(`div`,{className:`xaaj-reference-newsletter-message`,"aria-live":`polite`,children:n||`\xA0`})]})}function Gp(){let{products:e}=sp(),t=cu(),n=new URLSearchParams(t.search),r=n.get(`category`),i=n.get(`search`),a=n.get(`filter`),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(`featured`),[f,p]=(0,_.useState)(`all`),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)([]),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=Array.isArray(e)?[...e]:[];if(r){let e=r.toLowerCase();if(e===`dinnerware`){let e=[`dinner sets`,`plates`,`bowls`,`cups & mugs`];C=C.filter(t=>e.includes(String(t.category||``).toLowerCase()))}else C=C.filter(t=>`${t.name||``} ${t.category||``}`.toLowerCase().includes(e))}if(i){let e=i.toLowerCase();C=C.filter(t=>String(t.name||``).toLowerCase().includes(e))}a===`new`&&(C=C.filter(e=>String(e.tag||``).toLowerCase().includes(`new`))),a===`best-selling`&&(C=C.slice().sort((e,t)=>Number(t.rating||0)-Number(e.rating||0)));let w=[...new Set(C.map(e=>String(e.category||``).trim()).filter(Boolean))].sort((e,t)=>e.localeCompare(t));if(f===`in`?C=C.filter(e=>Number(e.stock??0)>0):f===`out`&&(C=C.filter(e=>Number(e.stock??0)<=0)),m!==``){let e=Number(m);Number.isFinite(e)&&(C=C.filter(t=>Number(t.price||0)>=e))}if(g!==``){let e=Number(g);Number.isFinite(e)&&(C=C.filter(t=>Number(t.price||0)<=e))}if(y.length>0){let e=new Set(y.map(e=>e.toLowerCase()));C=C.filter(t=>e.has(String(t.category||``).toLowerCase()))}u===`low`?C.sort((e,t)=>Number(e.price||0)-Number(t.price||0)):u===`high`?C.sort((e,t)=>Number(t.price||0)-Number(e.price||0)):u===`alpha-asc`?C.sort((e,t)=>String(e.name||``).localeCompare(String(t.name||``))):u===`alpha-desc`?C.sort((e,t)=>String(t.name||``).localeCompare(String(e.name||``))):u===`best-selling`?C.sort((e,t)=>Number(t.rating||0)-Number(e.rating||0)):u===`old-new`?C.sort((e,t)=>new Date(e.createdAt||0)-new Date(t.createdAt||0)):u===`new-old`&&C.sort((e,t)=>new Date(t.createdAt||0)-new Date(e.createdAt||0));let T={featured:`Featured`,"best-selling":`Best selling`,"alpha-asc":`Alphabetically, A–Z`,"alpha-desc":`Alphabetically, Z–A`,low:`Price, low to high`,high:`Price, high to low`,"old-new":`Date, old to new`,"new-old":`Date, new to old`},E=e=>{b(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},D=()=>{p(`all`),h(``),v(``),b([])},O=(f===`all`?0:1)+ +(m!==``||g!==``)+y.length;return(0,_.useEffect)(()=>{let e=e=>{x.current&&!x.current.contains(e.target)&&s(!1),S.current&&!S.current.contains(e.target)&&l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsxs)(`main`,{className:`xaaj-shop-ref`,children:[(0,$.jsx)(`style`,{children:`

          /* XAAJ pure-white surfaces: shop toolbar, filter/sort panels and nav dropdown */
          .xaaj-shop-ref,
          .xaaj-shop-ref-tools,
          .xaaj-shop-ref-popover,
          .xaaj-shop-ref-sort-menu,
          .xaaj-shop-ref-price-field input,
          .xaaj-ref-nav-menu,
          .xaaj-ref-nav-menu::before{
            background:#ffffff!important;
          }

          .xaaj-shop-ref{
            --shop-bg:#ffffff;
            --shop-ink:#2d2a26;
            --shop-muted:#7a746b;
            --shop-line:rgba(45,42,38,.14);
            background:var(--shop-bg);
            color:var(--shop-ink);
            min-height:70vh;
            width:100%;
          }
          .xaaj-shop-ref-inner{width:min(1160px,calc(100% - 96px));margin:0 auto;}
          .xaaj-shop-ref-head{padding:74px 0 54px;text-align:left;}
          .xaaj-shop-ref-head .xaaj-ref-eyebrow{display:block;margin-bottom:13px;color:#918a80;font:400 10px/1.2 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:2.4px;text-transform:uppercase;}
          .xaaj-shop-ref-head h1{margin:0;color:var(--shop-ink);font:400 clamp(48px,6.2vw,78px)/.98 'Playfair Display',serif;letter-spacing:-.045em;}
          .xaaj-shop-ref-head p{margin:25px 0 0;max-width:710px;color:var(--shop-muted);font:400 15px/1.65 'Gotham Book','Gotham',Arial,sans-serif;}
          .xaaj-shop-ref-toolbar-wrap{position:relative;z-index:70;}
          .xaaj-shop-ref-tools{height:62px;background:#ffffff!important;border-top:1px solid var(--shop-line);border-bottom:1px solid var(--shop-line);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;position:relative;background:var(--shop-bg);}
          .xaaj-shop-ref-tools-left{display:flex;align-items:center;gap:28px;justify-self:start;}
          .xaaj-shop-ref-toolbar-button,.xaaj-shop-ref-sort-button{appearance:none;border:0;background:transparent;color:#5e5850;display:inline-flex;align-items:center;gap:7px;padding:0;font:400 12px/1 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:.01em;cursor:pointer;}
          .xaaj-shop-ref-toolbar-button:hover,.xaaj-shop-ref-sort-button:hover{color:var(--shop-ink);}
          .xaaj-shop-ref-count{text-align:center;color:#8a8379;font:400 10px/1 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:.03em;}
          .xaaj-shop-ref-sort-wrap{position:relative;justify-self:end;}
          .xaaj-shop-ref-sort-label{color:#888178;font-size:10px;margin-right:7px;}
          .xaaj-shop-ref-sort-button svg,.xaaj-shop-ref-toolbar-button svg{transition:transform .22s ease;}
          .xaaj-shop-ref-sort-wrap.is-open .xaaj-shop-ref-sort-button svg,.xaaj-shop-ref-filter-wrap.is-open .xaaj-shop-ref-toolbar-button svg{transform:rotate(180deg);}
          .xaaj-shop-ref-popover{position:absolute;top:calc(100% + 14px);left:0;right:0;background:#ffffff!important;border:1px solid rgba(45,42,38,.14);box-shadow:0 24px 65px rgba(35,30,25,.11);z-index:120;backdrop-filter:blur(14px);}
          .xaaj-shop-ref-filter-popover{display:grid;grid-template-columns:1fr 1fr 1.45fr;gap:0;}
          .xaaj-shop-ref-filter-group{padding:26px 30px 28px;border-right:1px solid rgba(45,42,38,.10);}
          .xaaj-shop-ref-filter-group:last-child{border-right:0;}
          .xaaj-shop-ref-filter-group h3{margin:0 0 20px;color:#8b847b;font:500 9px/1 'Gotham Book','Gotham',Arial,sans-serif;letter-spacing:1.7px;text-transform:uppercase;}
          .xaaj-shop-ref-filter-options{display:flex;flex-direction:column;gap:13px;}
          .xaaj-shop-ref-filter-option{appearance:none;border:0;background:transparent;padding:0;color:#625d56;display:flex;align-items:center;justify-content:space-between;gap:12px;text-align:left;font:400 12px/1.3 'Gotham Book','Gotham',Arial,sans-serif;cursor:pointer;}
          .xaaj-shop-ref-filter-option:hover{color:var(--shop-ink);}
          .xaaj-shop-ref-filter-option.is-active{color:var(--shop-ink);font-weight:500;}
          .xaaj-shop-ref-check{width:14px;height:14px;border:1px solid #bdb5ab;display:grid;place-items:center;flex:0 0 14px;}
          .xaaj-shop-ref-filter-option.is-active .xaaj-shop-ref-check{background:var(--shop-ink);border-color:var(--shop-ink);}
          .xaaj-shop-ref-check::after{content:'';width:6px;height:3px;border-left:1px solid #fff;border-bottom:1px solid #fff;transform:rotate(-45deg) translateY(-1px);opacity:0;}
          .xaaj-shop-ref-filter-option.is-active .xaaj-shop-ref-check::after{opacity:1;}
          .xaaj-shop-ref-price-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
          .xaaj-shop-ref-price-field{position:relative;}
          .xaaj-shop-ref-price-field span{position:absolute;left:12px;top:50%;transform:translateY(-50%);font:400 12px 'Gotham Book','Gotham',Arial,sans-serif;color:#8d867d;pointer-events:none;}
          .xaaj-shop-ref-price-field input{width:100%;height:40px;border:1px solid rgba(45,42,38,.18);background:#ffffff!important;color:var(--shop-ink);padding:0 11px 0 24px;outline:none;font:400 12px 'Gotham Book','Gotham',Arial,sans-serif;}
          .xaaj-shop-ref-price-field input:focus{border-color:rgba(45,42,38,.42);}
          .xaaj-shop-ref-filter-footer{grid-column:1/-1;border-top:1px solid rgba(45,42,38,.10);display:flex;align-items:center;justify-content:space-between;padding:15px 22px;}
          .xaaj-shop-ref-active-note{color:#8b847b;font-size:10px;}
          .xaaj-shop-ref-clear{border:0;background:transparent;color:#625d56;padding:6px 0;font:500 10px/1 'Gotham Book','Gotham',Arial,sans-serif;text-transform:uppercase;letter-spacing:1px;cursor:pointer;}
          .xaaj-shop-ref-sort-menu{position:absolute;top:calc(100% + 14px);right:0;min-width:228px;padding:8px;background:#ffffff!important;border:1px solid rgba(45,42,38,.14);box-shadow:0 24px 65px rgba(35,30,25,.11);z-index:120;}
          .xaaj-shop-ref-sort-option{width:100%;border:0;background:transparent;color:#625d56;display:flex;justify-content:space-between;align-items:center;padding:11px 12px;text-align:left;font:400 11px/1.2 'Gotham Book','Gotham',Arial,sans-serif;cursor:pointer;}
          .xaaj-shop-ref-sort-option:hover{background:rgba(45,42,38,.045);color:var(--shop-ink);}
          .xaaj-shop-ref-sort-option.is-active{color:var(--shop-ink);font-weight:500;}
          .xaaj-shop-ref-sort-check{opacity:0;font-size:12px;}
          .xaaj-shop-ref-sort-option.is-active .xaaj-shop-ref-sort-check{opacity:1;}
          .xaaj-shop-ref-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px 18px;padding:34px 0 88px;}
          .xaaj-shop-ref-empty{grid-column:1/-1;text-align:center;padding:110px 20px 130px;}
          .xaaj-shop-ref-empty h2{margin:0 0 10px;font:400 34px/1.1 'Playfair Display',serif;}
          .xaaj-shop-ref-empty p{margin:0;color:#8a8379;font:400 12px/1.6 'Gotham Book','Gotham',Arial,sans-serif;}
          @media(max-width:900px){
            .xaaj-shop-ref-inner{width:min(100% - 44px,760px);}
            .xaaj-shop-ref-filter-popover{grid-template-columns:1fr 1fr;}
            .xaaj-shop-ref-filter-group:nth-child(2){border-right:0;}
            .xaaj-shop-ref-filter-group:nth-child(3){grid-column:1/-1;border-top:1px solid rgba(45,42,38,.10);border-right:0;}
            .xaaj-shop-ref-grid{grid-template-columns:repeat(3,minmax(0,1fr));}
          }
          @media(max-width:700px){
            .xaaj-shop-ref-inner{width:calc(100% - 32px);}
            .xaaj-shop-ref-head{padding:50px 0 34px;}
            .xaaj-shop-ref-head h1{font-size:44px;}
            .xaaj-shop-ref-head p{font-size:13px;margin-top:17px;}
            .xaaj-shop-ref-tools{height:54px;grid-template-columns:1fr auto;}
            .xaaj-shop-ref-tools-left{gap:18px;}
            .xaaj-shop-ref-count{display:none;}
            .xaaj-shop-ref-sort-label{display:none;}
            .xaaj-shop-ref-filter-popover{grid-template-columns:1fr;}
            .xaaj-shop-ref-filter-group,.xaaj-shop-ref-filter-group:nth-child(2),.xaaj-shop-ref-filter-group:nth-child(3){border-right:0;border-top:0;border-bottom:1px solid rgba(45,42,38,.10);grid-column:auto;}
            .xaaj-shop-ref-filter-footer{grid-column:auto;}
            .xaaj-shop-ref-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 12px;padding-top:24px;}
            .xaaj-shop-ref-sort-menu{right:0;min-width:210px;}
          }
        `}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-inner`,children:[(0,$.jsxs)(`section`,{className:`xaaj-shop-ref-head`,children:[(0,$.jsx)(`span`,{className:`xaaj-ref-eyebrow`,children:`XAAJ collection`}),(0,$.jsx)(`h1`,{children:r||(i?`Search: ${i}`:`Everything for the everyday`)}),(0,$.jsx)(`p`,{children:`Considered crockery for tables, rituals and gatherings. Explore the collection by form.`})]}),(0,$.jsx)(`div`,{className:`xaaj-shop-ref-toolbar-wrap`,children:(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-tools`,children:[(0,$.jsx)(`div`,{className:`xaaj-shop-ref-tools-left`,children:(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-filter-wrap ${o?`is-open`:``}`,ref:x,children:[(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-shop-ref-toolbar-button`,onClick:()=>{s(e=>!e),l(!1)},"aria-expanded":o,children:[`Filter`,O>0?` · ${O}`:``,(0,$.jsx)(qd,{size:13,strokeWidth:1.4})]}),o&&(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-popover xaaj-shop-ref-filter-popover`,children:[(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-filter-group`,children:[(0,$.jsx)(`h3`,{children:`Availability`}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-filter-options`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-shop-ref-filter-option ${f===`all`?`is-active`:``}`,onClick:()=>p(`all`),children:[(0,$.jsx)(`span`,{children:`All products`}),(0,$.jsx)(`span`,{className:`xaaj-shop-ref-check`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-shop-ref-filter-option ${f===`in`?`is-active`:``}`,onClick:()=>p(`in`),children:[(0,$.jsx)(`span`,{children:`In stock`}),(0,$.jsx)(`span`,{className:`xaaj-shop-ref-check`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-shop-ref-filter-option ${f===`out`?`is-active`:``}`,onClick:()=>p(`out`),children:[(0,$.jsx)(`span`,{children:`Out of stock`}),(0,$.jsx)(`span`,{className:`xaaj-shop-ref-check`})]})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-filter-group`,children:[(0,$.jsx)(`h3`,{children:`Price · INR`}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-price-row`,children:[(0,$.jsxs)(`label`,{className:`xaaj-shop-ref-price-field`,children:[(0,$.jsx)(`span`,{children:`₹`}),(0,$.jsx)(`input`,{type:`number`,min:`0`,inputMode:`numeric`,value:m,onChange:e=>h(e.target.value),placeholder:`From`,"aria-label":`Minimum price`})]}),(0,$.jsxs)(`label`,{className:`xaaj-shop-ref-price-field`,children:[(0,$.jsx)(`span`,{children:`₹`}),(0,$.jsx)(`input`,{type:`number`,min:`0`,inputMode:`numeric`,value:g,onChange:e=>v(e.target.value),placeholder:`To`,"aria-label":`Maximum price`})]})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-filter-group`,children:[(0,$.jsx)(`h3`,{children:`Product type`}),(0,$.jsx)(`div`,{className:`xaaj-shop-ref-filter-options`,children:w.length>0?w.map(e=>(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-shop-ref-filter-option ${y.includes(e)?`is-active`:``}`,onClick:()=>E(e),children:[(0,$.jsx)(`span`,{children:e}),(0,$.jsx)(`span`,{className:`xaaj-shop-ref-check`})]},e)):(0,$.jsx)(`span`,{className:`xaaj-shop-ref-active-note`,children:`No product types available.`})})]}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-filter-footer`,children:[(0,$.jsx)(`span`,{className:`xaaj-shop-ref-active-note`,children:O>0?`${C.length} matching products`:`All products shown`}),O>0&&(0,$.jsx)(`button`,{type:`button`,className:`xaaj-shop-ref-clear`,onClick:D,children:`Clear filters`})]})]})]})}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-count`,children:[C.length,` products`]}),(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-sort-wrap ${c?`is-open`:``}`,ref:S,children:[(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-shop-ref-sort-button`,onClick:()=>{l(e=>!e),s(!1)},"aria-expanded":c,children:[(0,$.jsx)(`span`,{className:`xaaj-shop-ref-sort-label`,children:`Sort by:`}),T[u],(0,$.jsx)(qd,{size:13,strokeWidth:1.4})]}),c&&(0,$.jsx)(`div`,{className:`xaaj-shop-ref-sort-menu`,children:Object.entries(T).map(([e,t])=>(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-shop-ref-sort-option ${u===e?`is-active`:``}`,onClick:()=>{d(e),l(!1)},children:[(0,$.jsx)(`span`,{children:t}),(0,$.jsx)(`span`,{className:`xaaj-shop-ref-sort-check`,children:`✓`})]},e))})]})]})}),(0,$.jsx)(`div`,{className:`xaaj-shop-ref-grid`,children:C.length>0?C.map(e=>(0,$.jsx)(zp,{product:e},e.id||e._id)):(0,$.jsxs)(`div`,{className:`xaaj-shop-ref-empty`,children:[(0,$.jsx)(`h2`,{children:`No pieces found`}),(0,$.jsx)(`p`,{children:`Try clearing a filter or exploring another collection.`})]})})]})]}),(0,$.jsx)(Up,{})]})}function Kp(){let{add:e,products:t}=sp(),{pathname:n}=cu(),r=decodeURIComponent(n.split(`/product/`)[1]||``),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(!0),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(1),[f,p]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=!1;async function t(){if(!r){a(null),s(!1);return}s(!0);try{let t=(await Gf.get(r))?.data;if(e)return;if(!t){a(null);return}let n=Array.isArray(t.images)?t.images.filter(Boolean):[];a({...t,id:t._id,image:n[0]||``,images:n,old:t.mrp??t.compareAtPrice??null,tag:t.tags?.[0]||`New`,rating:Number(t.rating||0),reviews:Number(t.reviewCount||0),reviewCount:Number(t.reviewCount||0)}),l(n[0]||``)}catch(t){e||(console.error(`Product load error:`,t),a(null))}finally{e||s(!1)}}return t(),()=>{e=!0}},[r]);let m=t.filter(e=>{let t=String(e.category||``).toLowerCase()===String(i?.category||``).toLowerCase(),n=String(e.id||e._id)!==String(i?.id||i?._id);return t&&n}).slice(0,4);return o?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`main`,{className:`page xaaj-product-page`,style:{background:`#fff`},children:(0,$.jsxs)(`div`,{className:`wrap narrow`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Product`}),(0,$.jsx)(`h1`,{children:`Loading product...`}),(0,$.jsx)(`p`,{className:`lead`,children:`Please wait while we load the product details.`})]})}),(0,$.jsx)(Up,{})]}):i?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`style`,{children:`
        .xaaj-product-page {
          background: #fff !important;
        }
        .xaaj-product-page,
        .xaaj-product-page > .wrap,
        .xaaj-product-page .detail,
        .xaaj-product-page .detail-copy {
          background: #fff !important;
        }
      `}),(0,$.jsx)(`main`,{className:`page xaaj-product-page`,style:{background:`#fff`},children:(0,$.jsxs)(`div`,{className:`wrap`,children:[(0,$.jsxs)(`div`,{className:`breadcrumbs`,children:[`Home`,(0,$.jsx)(`span`,{children:`/`}),`Shop`,(0,$.jsx)(`span`,{children:`/`}),i.name]}),(0,$.jsxs)(`div`,{className:`detail`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`detail-image`,style:{position:`relative`,marginBottom:`14px`},children:(0,$.jsx)(`img`,{src:c||i.images?.[0]||i.image,alt:i.name})}),i.images?.length>1&&(0,$.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(72px, 88px))`,gap:`10px`},children:i.images.map((e,t)=>(0,$.jsx)(`button`,{type:`button`,onClick:()=>l(e),"aria-label":`View product image ${t+1}`,style:{padding:0,border:e===c?`2px solid currentColor`:`1px solid #ddd`,background:`transparent`,cursor:`pointer`,aspectRatio:`1 / 1`,overflow:`hidden`},children:(0,$.jsx)(`img`,{src:e,alt:`${i.name} ${t+1}`,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}})},`${e}-${t}`))})]}),(0,$.jsxs)(`div`,{className:`detail-copy`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:i.category}),(0,$.jsx)(`h1`,{children:i.name}),(0,$.jsx)(Ip,{rating:Number(i.rating)||0,reviews:Number(i.reviewCount??i.reviews??0)}),(0,$.jsxs)(`div`,{className:`detail-price`,children:[(0,$.jsx)(`strong`,{children:Cp(i.price)}),Number(i.old||0)>Number(i.price||0)&&(0,$.jsxs)(`del`,{style:{marginLeft:`10px`},children:[`MRP `,Cp(i.old)]})]}),(0,$.jsx)(`p`,{children:i.description||i.desc||`Beautifully crafted for everyday use.`}),(0,$.jsx)(`hr`,{}),(0,$.jsx)(`label`,{children:`Quantity`}),(0,$.jsxs)(`div`,{className:`quantity`,children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>d(Math.max(1,u-1)),children:(0,$.jsx)(of,{size:15})}),(0,$.jsx)(`span`,{children:u}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>d(u+1),children:(0,$.jsx)(ff,{size:15})})]}),(0,$.jsxs)(`button`,{type:`button`,className:`detail-add-button ${f?`detail-add-success`:``}`,onClick:t=>{if(t.preventDefault(),Rp()){window.alert(`Admin Preview Mode: adding products to cart is disabled.`);return}for(let t=0;t<u;t++)e(i);let n=document.querySelector(`.detail-image img`),r=document.querySelector(`[data-xaaj-cart-target="true"]`),a=n?.getBoundingClientRect(),o=r?.getBoundingClientRect();if(a&&o){let e=n.cloneNode(!0),t=a.left+a.width/2-30,r=a.top+a.height/2-30,i=o.left+o.width/2-30,s=o.top+o.height/2-30;e.className=`xaaj-flying-cart-image`,e.style.left=`${t}px`,e.style.top=`${r}px`,e.style.setProperty(`--xaaj-x`,`${i-t}px`),e.style.setProperty(`--xaaj-y`,`${s-r}px`),document.body.appendChild(e),e.addEventListener(`animationend`,()=>e.remove(),{once:!0})}window.dispatchEvent(new CustomEvent(`xaaj:cart-added`)),p(!0),window.setTimeout(()=>p(!1),650)},children:[(0,$.jsx)(`span`,{className:`detail-add-label`,children:`ADD TO CART`}),(0,$.jsx)(`span`,{className:`detail-add-shine`,"aria-hidden":`true`})]}),(0,$.jsxs)(`div`,{className:`xaaj-product-accordions`,children:[(0,$.jsx)(`style`,{children:`
                  @import url('https://fonts.googleapis.com/css2?family=Gotham Book:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');

                  .xaaj-product-accordions {
                    margin-top: 30px;
                    border-top: 1px solid rgba(42, 39, 35, .14);
                  }

                  .xaaj-product-accordions details {
                    margin: 0;
                    border-bottom: 1px solid rgba(42, 39, 35, .14);
                  }

                  .xaaj-product-accordions summary {
                    position: relative;
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    padding: 21px 2px 20px;
                    cursor: pointer;
                    color: #2c2925;
                    font-family:'Gotham Book','Gotham',Arial,sans-serif;
                    font-size: clamp(20px, 1.8vw, 25px);
                    font-weight: 500;
                    line-height: 1.1;
                    letter-spacing: -.015em;
                    transition: color .3s ease;
                  }

                  .xaaj-product-accordions summary::-webkit-details-marker {
                    display: none;
                  }

                  .xaaj-product-accordions summary::after {
                    content: '+';
                    width: 25px;
                    height: 25px;
                    flex: 0 0 25px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #6f6a63;
                    font-family:'Gotham Book','Gotham',Arial,sans-serif;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 1;
                    transition: transform .35s cubic-bezier(.22,1,.36,1), color .25s ease;
                  }

                  .xaaj-product-accordions details[open] summary {
                    color: #2f7048;
                  }

                  .xaaj-product-accordions details[open] summary::after {
                    content: '−';
                    transform: rotate(180deg);
                    color: #2f7048;
                  }

                  .xaaj-product-accordions summary:hover {
                    color: #2f7048;
                  }

                  .xaaj-product-accordions p {
                    max-width: 720px;
                    margin: 0;
                    padding: 0 42px 23px 2px;
                    color: #716c65;
                    font-family:'Gotham Book','Gotham',Arial,sans-serif;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 1.9;
                    white-space: pre-line;
                  }

                  .xaaj-product-accordions details[open] p {
                    animation: xaajAccordionReveal .45s cubic-bezier(.22,1,.36,1) both;
                  }

                  @keyframes xaajAccordionReveal {
                    from {
                      opacity: 0;
                      transform: translateY(-7px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }

                  @media (max-width: 700px) {
                    .xaaj-product-accordions summary {
                      padding: 18px 0;
                      font-size: 21px;
                    }

                    .xaaj-product-accordions p {
                      padding: 0 4px 20px;
                      font-size: 13px;
                    }
                  }
                `}),(0,$.jsxs)(`details`,{children:[(0,$.jsx)(`summary`,{children:`Product Details & Care`}),(0,$.jsx)(`p`,{children:i.productDetails||`Material, dimensions and care instructions will be shown here.`})]}),(0,$.jsxs)(`details`,{children:[(0,$.jsx)(`summary`,{children:`Shipping & Payment`}),(0,$.jsx)(`p`,{children:i.shippingPayment||`Shipping and payment information will be shown here. Secure online payment options are available at checkout.`})]}),(0,$.jsxs)(`details`,{children:[(0,$.jsx)(`summary`,{children:`Return & Exchange`}),(0,$.jsx)(`p`,{children:i.returnExchange||`Return & exchange information will be shown here. For help with an order, please contact XAAJ support.`})]})]}),(0,$.jsxs)(`div`,{className:`detail-note`,children:[`Free shipping on orders of ₹1,000 or more`,(0,$.jsx)(`br`,{}),`Secure packaging · 48-hour damage reporting`]})]})]}),m.length>0&&(0,$.jsxs)(`section`,{className:`wrap`,style:{marginTop:`90px`,marginBottom:`30px`},children:[(0,$.jsx)(Bp,{eyebrow:`You may also like`,title:`Related products`}),(0,$.jsx)(`div`,{className:`product-grid`,children:m.map(e=>(0,$.jsx)(zp,{product:e},e.id||e._id))})]})]})}),(0,$.jsx)(Up,{})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`main`,{className:`page xaaj-product-page`,style:{background:`#fff`},children:(0,$.jsxs)(`div`,{className:`wrap narrow`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Product`}),(0,$.jsx)(`h1`,{children:`Product not found`}),(0,$.jsx)(`p`,{className:`lead`,children:`This product may be unavailable or the link may be incorrect.`}),(0,$.jsx)(Fp,{to:`/shop`,children:`Back to shop`})]})}),(0,$.jsx)(Up,{})]})}function qp({wishlist:e=!1}){let{products:t,cart:n,remove:r,change:i,total:a,wish:o,toggleWish:s,add:c}=sp(),l=e?t.filter(e=>o.includes(e.id||e._id)):n,u=e=>t.find(t=>String(t.id||t._id)===String(e.id||e._id))||e,d=e=>{let t=u(e),n=t.slug||e.slug||t.id||t._id;return`/product/${encodeURIComponent(String(n||``))}`},f=a>=1e3?0:99,p=a+f,m=Math.min(100,a/1e3*100),h=Math.max(0,1e3-a);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsxs)(`main`,{className:`page xaaj-cart-page ${e?`xaaj-wishlist-page`:``}`,children:[(0,$.jsx)(`style`,{children:`
          .xaaj-cart-page {
            background: #ffffff !important;
          }
        `}),(0,$.jsxs)(`div`,{className:`wrap`,children:[(0,$.jsxs)(`div`,{className:`breadcrumbs`,children:[`Home `,(0,$.jsx)(`span`,{children:`/`}),` `,e?`Wishlist`:`Your cart`]}),(0,$.jsxs)(`header`,{className:`xaaj-cart-heading`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:e?`Saved with intention`:`Your selections`}),(0,$.jsx)(`h1`,{children:e?`Your wishlist`:`Your cart`}),(0,$.jsx)(`p`,{children:e?`Pieces you loved enough to keep close.`:`A considered collection of pieces for your table.`})]}),(0,$.jsxs)(`div`,{className:`xaaj-cart-count`,children:[(0,$.jsx)(`span`,{children:l.length}),(0,$.jsx)(`small`,{children:l.length===1?`piece`:`pieces`})]})]}),l.length===0?(0,$.jsxs)(`div`,{className:`xaaj-empty-state`,children:[(0,$.jsx)(`div`,{className:`xaaj-empty-mark`,children:e?(0,$.jsx)(Zd,{size:25,strokeWidth:1.25}):(0,$.jsx)(vf,{size:25,strokeWidth:1.25})}),(0,$.jsx)(`span`,{className:`eyebrow`,children:e?`Nothing saved yet`:`Your collection is waiting`}),(0,$.jsx)(`h2`,{children:e?`Keep something beautiful close.`:`Start with something beautiful.`}),(0,$.jsx)(`p`,{children:`Explore XAAJ and find pieces made to become part of everyday rituals.`}),(0,$.jsx)(Fp,{to:`/shop`,children:`Explore the collection`})]}):(0,$.jsxs)(`div`,{className:`xaaj-shopping-layout`,children:[(0,$.jsxs)(`section`,{className:`xaaj-shopping-items`,children:[!e&&(0,$.jsxs)(`div`,{className:`xaaj-shipping-progress`,children:[(0,$.jsxs)(`div`,{className:`xaaj-shipping-copy`,children:[(0,$.jsx)(`span`,{children:h>0?(0,$.jsxs)($.Fragment,{children:[`Add `,(0,$.jsx)(`strong`,{children:Cp(h)}),` more for complimentary shipping.`]}):(0,$.jsxs)($.Fragment,{children:[`Your order qualifies for `,(0,$.jsx)(`strong`,{children:`complimentary shipping.`})]})}),(0,$.jsxs)(`span`,{children:[Math.round(m),`%`]})]}),(0,$.jsx)(`div`,{className:`xaaj-progress-track`,children:(0,$.jsx)(`span`,{style:{width:`${m}%`}})})]}),(0,$.jsxs)(`div`,{className:`xaaj-items-header`,children:[(0,$.jsx)(`span`,{children:e?`Saved pieces`:`Your pieces`}),(0,$.jsxs)(`span`,{children:[l.length,` `,l.length===1?`item`:`items`]})]}),(0,$.jsx)(`div`,{className:`xaaj-item-list`,children:l.map(t=>{let n=u(t),a=t.qty||1,o=d(t),l=n.image||t.image,f=n.name||t.name,p=n.category||t.category,m=Number(n.price??t.price??0);return(0,$.jsxs)(`article`,{className:`xaaj-shopping-item`,children:[(0,$.jsxs)(Z,{to:o,className:`xaaj-shopping-image`,"aria-label":`View ${f}`,children:[(0,$.jsx)(`img`,{src:l,alt:f}),(0,$.jsxs)(`span`,{children:[`View piece `,(0,$.jsx)(Ud,{size:13})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-shopping-info`,children:[(0,$.jsxs)(`div`,{className:`xaaj-item-topline`,children:[(0,$.jsx)(`span`,{children:p||`XAAJ Collection`}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-item-remove`,"aria-label":`Remove ${f}`,onClick:()=>e?s(t.id||t._id):r(t.id||t._id),children:(0,$.jsx)(Ef,{size:16})})]}),(0,$.jsx)(Z,{to:o,className:`xaaj-shopping-title`,children:(0,$.jsx)(`h2`,{children:f})}),(0,$.jsx)(`p`,{className:`xaaj-item-price`,children:Cp(m)}),(0,$.jsxs)(`div`,{className:`xaaj-item-actions`,children:[e?(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-text-action`,onClick:()=>{if(Rp()){window.alert(`Admin Preview Mode: adding products to cart is disabled.`);return}c(n)},children:[(0,$.jsx)(vf,{size:14}),` Add to cart`]}):(0,$.jsxs)(`div`,{className:`xaaj-quantity-control`,"aria-label":`Quantity for ${f}`,children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>i(t.id||t._id,-1),"aria-label":`Decrease quantity`,children:(0,$.jsx)(of,{size:13})}),(0,$.jsx)(`span`,{children:a}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>i(t.id||t._id,1),"aria-label":`Increase quantity`,children:(0,$.jsx)(ff,{size:13})})]}),(0,$.jsxs)(Z,{to:o,className:`xaaj-view-link`,children:[`View details `,(0,$.jsx)(Ud,{size:14})]})]})]}),(0,$.jsx)(`strong`,{className:`xaaj-item-total`,children:Cp(m*a)})]},t.id||t._id)})})]}),!e&&(0,$.jsxs)(`aside`,{className:`xaaj-order-summary`,children:[(0,$.jsx)(`div`,{className:`xaaj-summary-kicker`,children:`XAAJ / ORDER`}),(0,$.jsx)(`h2`,{children:`Order summary`}),(0,$.jsx)(`p`,{className:`xaaj-summary-intro`,children:`Thoughtfully packed and prepared for its journey to you.`}),(0,$.jsxs)(`div`,{className:`xaaj-summary-lines`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Subtotal`}),(0,$.jsx)(`strong`,{children:Cp(a)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Shipping`}),(0,$.jsx)(`strong`,{children:f===0?`Complimentary`:Cp(f)})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-summary-total`,children:[(0,$.jsx)(`span`,{children:`Total`}),(0,$.jsx)(`strong`,{children:Cp(p)})]}),(0,$.jsx)(Fp,{to:`/checkout`,className:`xaaj-checkout-button`,children:`Continue to checkout`}),(0,$.jsxs)(`div`,{className:`xaaj-summary-note`,children:[(0,$.jsx)(gf,{size:16}),(0,$.jsx)(`span`,{children:`Secure checkout · Carefully packed · Damage support within 48 hours`})]})]})]})]})]}),(0,$.jsx)(Up,{})]})}function Jp({sections:e}){return(0,$.jsx)(`div`,{className:`policy-accordion`,children:e.map((e,t)=>(0,$.jsxs)(`details`,{className:`policy-item`,open:t===0,children:[(0,$.jsxs)(`summary`,{children:[(0,$.jsx)(`span`,{children:e.title}),(0,$.jsx)(`span`,{className:`policy-plus`,"aria-hidden":`true`,children:`+`})]}),(0,$.jsx)(`div`,{className:`policy-answer`,children:e.content})]},e.title))})}var Yp=`
  .policy-page {
    background: #f7f3ed;
  }
  .policy-page .wrap.narrow {
    max-width: 900px;
  }
  .policy-hero {
    padding: 78px 0 46px;
  }
  .policy-hero .eyebrow {
    display: block;
    margin-bottom: 18px;
    letter-spacing: .24em;
  }
  .policy-hero h1 {
    max-width: 760px;
    margin: 0 0 20px;
    font-family:'Gotham Book','Gotham',Arial,sans-serif;
    font-size: clamp(48px, 7vw, 82px);
    line-height: .98;
    font-weight: 400;
    letter-spacing: -.035em;
  }
  .policy-hero .policy-intro {
    max-width: 720px;
    margin: 0;
    font-family:'Gotham Book','Gotham',Arial,sans-serif;
    font-size: clamp(20px, 2.2vw, 27px);
    line-height: 1.45;
    color: #393632;
  }
  .policy-effective {
    margin-top: 18px;
    font-family:'Gotham Book','Gotham',Arial,sans-serif;
    font-size: 13px;
    color: #77716a;
  }
  .policy-accordion {
    border-top: 1px solid rgba(45, 42, 38, .16);
    margin: 10px 0 80px;
  }
  .policy-item {
    border-bottom: 1px solid rgba(45, 42, 38, .16);
  }
  .policy-item summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 27px 0;
    font-family:'Gotham Book','Gotham',Arial,sans-serif;
    font-size: clamp(22px, 2.2vw, 29px);
    line-height: 1.25;
    color: #292724;
    transition: opacity .25s ease;
  }
  .policy-item summary::-webkit-details-marker { display: none; }
  .policy-item summary:hover { opacity: .68; }
  .policy-plus {
    flex: 0 0 auto;
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    font-family:'Gotham Book','Gotham',Arial,sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1;
    transition: transform .3s ease;
  }
  .policy-item[open] .policy-plus {
    transform: rotate(45deg);
  }
  .policy-answer {
    max-width: 790px;
    padding: 0 46px 30px 0;
    color: #68635d;
    font-family:'Gotham Book','Gotham',Arial,sans-serif;
    font-size: 15px;
    line-height: 1.8;
    animation: policyReveal .35s ease both;
  }
  .policy-answer p { margin: 0 0 16px; }
  .policy-answer p:last-child { margin-bottom: 0; }
  .policy-answer ul { margin: 0 0 16px; padding-left: 22px; }
  .policy-answer li { margin: 0 0 8px; }
  .policy-answer strong { color: #36322e; }
  .policy-answer a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
  @keyframes policyReveal {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 700px) {
    .policy-hero { padding: 54px 0 34px; }
    .policy-hero h1 { font-size: 48px; }
    .policy-item summary { padding: 22px 0; font-size: 23px; }
    .policy-answer { padding: 0 0 25px; font-size: 14px; }
  }
`;function Xp({title:e,eyebrow:t,children:n,policy:r=!1,auth:i=!1,intro:a=``,effectiveDate:o=``}){return r?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`style`,{children:Yp}),(0,$.jsx)(`main`,{className:`page simple policy-page`,children:(0,$.jsxs)(`div`,{className:`wrap narrow`,children:[(0,$.jsxs)(`div`,{className:`policy-hero`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:t}),(0,$.jsx)(`h1`,{children:e}),(0,$.jsx)(`p`,{className:`policy-intro`,children:a}),o&&(0,$.jsxs)(`p`,{className:`policy-effective`,children:[`Effective date: `,o]})]}),n]})}),(0,$.jsx)(Up,{})]}):i?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`main`,{className:`page simple xaaj-auth-page`,children:(0,$.jsx)(`div`,{className:`xaaj-auth-shell`,children:n})}),(0,$.jsx)(`style`,{children:`
          .xaaj-auth-page {
            position: relative;
            z-index: 1;
            min-height: calc(100dvh - 80px);
            padding: 56px 24px 80px;
            box-sizing: border-box;
            background:
              radial-gradient(circle at 10% 5%, rgba(159,63,39,.055), transparent 28%),
              linear-gradient(180deg, #f7f5f0 0%, #f2efe8 100%);
          }

          .xaaj-auth-shell {
            width: min(1120px, 100%);
            min-height: 0;
            margin: 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }

          .xaaj-auth-layout {
            width: min(100%, 980px);
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(430px, .82fr);
            align-items: stretch;
            overflow: visible;
            border: 1px solid rgba(39,46,40,.10);
            border-radius: 24px;
            background: rgba(255,254,250,.88);
            box-shadow:
              0 34px 90px rgba(37,42,37,.09),
              0 2px 10px rgba(37,42,37,.035);
          }

          /* The left side is intentionally typographic, not a stock image.
             It gives the authentication screen its own brand identity. */
          .xaaj-auth-editorial {
            position: relative;
            border-radius: 23px 0 0 23px;
            min-height: 690px;
            padding: 56px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background:
              radial-gradient(circle at 72% 27%, rgba(255,220,205,.08), transparent 23%),
              radial-gradient(circle at 18% 82%, rgba(255,235,225,.035), transparent 28%),
              #963b27;
            color: #f8f5ed;
          }

          .xaaj-auth-editorial::before {
            content: 'X';
            position: absolute;
            right: -45px;
            bottom: -125px;
            color: rgba(255,245,238,.055);
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size: 410px;
            line-height: 1;
            font-weight: 400;
            pointer-events: none;
          }

          .xaaj-auth-editorial::after {
            content: '';
            position: absolute;
            width: 240px;
            height: 240px;
            right: 34px;
            top: 105px;
            border: 1px solid rgba(255,226,214,.18);
            border-radius: 50%;
            box-shadow:
              0 0 0 30px rgba(255,226,214,.028),
              0 0 0 60px rgba(255,226,214,.018);
            pointer-events: none;
          }

          .xaaj-auth-mark {
            position: relative;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            color: rgba(248,245,237,.72);
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 2.4px;
            text-transform: uppercase;
          }

          .xaaj-auth-mark i {
            width: 30px;
            height: 1px;
            display: block;
            background: #d9a18d;
          }

          .xaaj-auth-editorial-copy {
            position: relative;
            z-index: 2;
            max-width: 500px;
          }

          .xaaj-auth-editorial-eyebrow {
            display: block;
            margin-bottom: 19px;
            color: #d9a18d;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 2.3px;
            text-transform: uppercase;
          }

          .xaaj-auth-editorial h2 {
            max-width: 500px;
            margin: 0;
            color: #f8f5ed;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size: clamp(52px, 5.6vw, 78px);
            line-height: .91;
            letter-spacing: -.055em;
            font-weight: 400;
          }

          .xaaj-auth-editorial h2 em {
            color: #f1d1c3;
            font-style: italic;
            font-weight: 400;
          }

          .xaaj-auth-editorial-copy p {
            max-width: 370px;
            margin: 27px 0 0;
            color: rgba(248,245,237,.65);
            font-size: 12px;
            line-height: 1.85;
          }

          .xaaj-auth-editorial-footer {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 12px;
            color: rgba(248,245,237,.48);
            font-size: 9px;
            letter-spacing: .7px;
          }

          .xaaj-auth-editorial-footer b {
            color: rgba(248,245,237,.76);
            font-weight: 600;
          }

          .xaaj-auth-editorial-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #d9a18d;
          }

          .xaaj-auth-form-panel {
            display: flex;
            align-items: flex-start;
            overflow: visible;
            padding: 42px clamp(34px, 4vw, 56px);
            background: rgba(255,254,250,.95);
            min-width: 0;
          }

          .xaaj-auth-form-inner {
            width: min(400px, 100%);
            margin: 0 auto;
          }

          .xaaj-auth-nav {
            position: relative;
            z-index: 3;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 4px;
            margin-bottom: 27px;
            border: 1px solid #e4e0d8;
            border-radius: 999px;
            background: #f5f3ee;
          }

          .xaaj-auth-nav a {
            min-width: 94px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            color: #77736b;
            text-decoration: none;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: .4px;
            transition: background .25s ease, color .25s ease, transform .25s ease;
          }

          .xaaj-auth-nav a:hover {
            color: #292824;
            transform: translateY(-1px);
          }

          .xaaj-auth-nav a.active {
            background: #9f3f27;
            color: #fffdf8;
            box-shadow: 0 4px 12px rgba(41,40,36,.12);
          }

          .xaaj-auth-kicker {
            display: block;
            margin-bottom: 13px;
            color: #9f3f27;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .xaaj-auth-title {
            margin: 0;
            color: #292824;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size: clamp(44px, 4vw, 58px);
            line-height: .98;
            font-weight: 400;
            letter-spacing: -.05em;
          }

          .xaaj-auth-lead {
            max-width: 390px;
            margin: 13px 0 23px;
            color: #77736b;
            font-size: 12px;
            line-height: 1.8;
          }

          .xaaj-auth-form {
            display: grid;
            gap: 14px;
          }

          .xaaj-auth-section-label {
            display: flex;
            align-items: center;
            gap: 11px;
            margin: 2px 0 -4px;
            color: #918b83;
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 1.8px;
            text-transform: uppercase;
          }

          .xaaj-auth-section-label::after {
            content: '';
            height: 1px;
            flex: 1;
            background: #e7e2d9;
          }

          .xaaj-auth-fields {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .xaaj-auth-fields .full {
            grid-column: 1 / -1;
          }

          .xaaj-auth-field {
            position: relative;
          }

          .xaaj-auth-field label {
            display: block;
            margin: 0 0 6px 1px;
            color: #5f5a53;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 1.1px;
            text-transform: uppercase;
          }

          .xaaj-auth-input-wrap {
            position: relative;
          }

          .xaaj-auth-field input {
            width: 100%;
            height: 46px;
            box-sizing: border-box;
            padding: 0 14px;
            border: 1px solid #dedad2;
            border-radius: 10px;
            outline: none;
            background: #fbfaf7;
            color: #292824;
            font: inherit;
            font-size: 12px;
            transition:
              border-color .25s ease,
              background .25s ease,
              box-shadow .25s ease;
          }

          .xaaj-auth-field input::placeholder {
            color: #aaa49b;
          }

          .xaaj-auth-field input:hover {
            border-color: #c9c3b9;
            background: #fff;
          }

          .xaaj-auth-field input:focus {
            border-color: #9f3f27;
            background: #fff;
            box-shadow: 0 0 0 3px rgba(159,63,39,.10);
          }

          .xaaj-auth-password-toggle {
            position: absolute;
            top: 50%;
            right: 13px;
            transform: translateY(-50%);
            padding: 4px;
            border: 0;
            background: transparent;
            color: #858078;
            font: inherit;
            font-size: 9px;
            font-weight: 700;
            cursor: pointer;
          }

          .xaaj-auth-password-toggle:hover {
            color: #9f3f27;
          }

          .xaaj-auth-error {
            margin: -5px 1px 0;
            color: #b42318;
            font-size: 11px;
            line-height: 1.5;
          }

          .xaaj-auth-submit {
            position: relative;
            width: 100%;
            min-height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border: 1px solid #9f3f27;
            border-radius: 10px;
            background: #9f3f27;
            color: #fffdf8;
            font: inherit;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: .65px;
            cursor: pointer;
            transition:
              transform .28s cubic-bezier(.22,1,.36,1),
              background .25s ease,
              box-shadow .28s ease;
          }

          .xaaj-auth-submit:hover {
            transform: translateY(-2px);
            background: #87331f;
            box-shadow: 0 13px 28px rgba(159,63,39,.18);
          }

          .xaaj-auth-submit:active {
            transform: translateY(0);
          }

          .xaaj-auth-submit:disabled {
            opacity: .58;
            cursor: wait;
            transform: none;
            box-shadow: none;
          }

          .xaaj-auth-secondary {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 14px;
            margin-top: 11px;
            padding-top: 1px;
          }

          .xaaj-auth-secondary span {
            display: none;
          }

          .xaaj-auth-secondary a,
          .xaaj-auth-switch a {
            color: #9f3f27;
            text-decoration: none;
            font-size: 10px;
            font-weight: 700;
          }

          .xaaj-auth-secondary a:hover,
          .xaaj-auth-switch a:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
          }

          .xaaj-auth-switch {
            margin: 25px 0 0;
            padding-top: 21px;
            border-top: 1px solid #e7e2d9;
            color: #817b73;
            text-align: center;
            font-size: 10px;
          }

          .xaaj-auth-switch a {
            margin-left: 5px;
          }

          .xaaj-auth-trust {
            display: flex;
            justify-content: center;
            gap: 9px;
            margin-top: 18px;
            color: #aaa49b;
            font-size: 8px;
            letter-spacing: .25px;
          }

          .xaaj-auth-step {
            display: flex;
            align-items: center;
            gap: 9px;
            margin: 0 0 15px;
            color: #817b73;
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }

          .xaaj-auth-step strong {
            display: inline-flex;
            width: 22px;
            height: 22px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #f1e1da;
            color: #9f3f27;
            font-size: 8px;
          }

          @media (max-width: 900px) {
            .xaaj-auth-page {
              min-height: calc(100dvh - 74px);
              padding: 48px 16px 65px;
            }

            .xaaj-auth-layout {
              grid-template-columns: 1fr;
              max-width: 620px;
            }

            .xaaj-auth-editorial {
              min-height: 300px;
              padding: 32px;
            }

            .xaaj-auth-editorial::before {
              font-size: 250px;
              right: -30px;
              bottom: -80px;
            }

            .xaaj-auth-editorial::after {
              width: 150px;
              height: 150px;
              right: 25px;
              top: 70px;
            }

            .xaaj-auth-editorial h2 {
              font-size: 52px;
            }

            .xaaj-auth-editorial-footer {
              margin-top: 35px;
            }

            .xaaj-auth-form-panel {
              padding: 42px 30px 48px;
            }
          }

          @media (max-width: 560px) {
            .xaaj-auth-page {
              min-height: calc(100dvh - 74px);
              padding: 36px 10px 52px;
            }

            .xaaj-auth-layout {
              border-radius: 18px;
              overflow: visible;
            }

            .xaaj-auth-editorial {
              min-height: 250px;
              padding: 25px 22px;
            }

            .xaaj-auth-editorial h2 {
              font-size: 42px;
            }

            .xaaj-auth-editorial-copy p {
              max-width: 270px;
              margin-top: 14px;
              font-size: 10px;
            }

            .xaaj-auth-editorial-footer {
              display: none;
            }

            .xaaj-auth-form-panel {
              padding: 31px 21px 36px;
            }

            .xaaj-auth-nav {
              margin-bottom: 30px;
            }

            .xaaj-auth-nav a {
              min-width: 86px;
            }

            .xaaj-auth-fields {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            .xaaj-auth-fields .full {
              grid-column: auto;
            }

            .xaaj-auth-title {
              font-size: 43px;
            }

            .xaaj-auth-lead {
              margin-bottom: 26px;
            }
          }

          @media (max-width: 560px) {
            .xaaj-auth-page {
              padding: 28px 10px 44px;
              min-height: calc(100dvh - 140px);
              overflow-x: hidden;
            }

            .xaaj-auth-shell {
              width: 100%;
            }

            .xaaj-auth-layout {
              width: 100%;
              max-width: 100%;
              border-radius: 16px;
              overflow: hidden;
            }

            .xaaj-auth-editorial {
              min-height: 235px;
              padding: 24px 20px;
              border-radius: 0;
            }

            .xaaj-auth-editorial h2 {
              font-size: clamp(36px, 10.8vw, 44px);
              line-height: .94;
            }

            .xaaj-auth-editorial-copy p {
              max-width: 290px;
              margin-top: 13px;
              font-size: 10px;
              line-height: 1.7;
            }

            .xaaj-auth-form-panel {
              padding: 28px 18px 34px;
            }

            .xaaj-auth-form-inner {
              width: 100%;
              max-width: 100%;
            }

            .xaaj-auth-nav {
              width: 100%;
              box-sizing: border-box;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4px;
              margin-bottom: 24px;
            }

            .xaaj-auth-nav a {
              width: 100%;
              min-width: 0;
              height: 34px;
              font-size: 9px;
              letter-spacing: .25px;
            }

            .xaaj-auth-title {
              font-size: clamp(38px, 11vw, 46px);
              line-height: .98;
            }

            .xaaj-auth-lead {
              margin: 12px 0 22px;
              max-width: 100%;
              font-size: 11px;
              line-height: 1.7;
            }

            .xaaj-auth-fields {
              grid-template-columns: 1fr;
              gap: 14px;
            }

            .xaaj-auth-fields .full {
              grid-column: auto;
            }

            .xaaj-auth-field input,
            .xaaj-auth-field textarea,
            .xaaj-auth-field select {
              width: 100%;
              max-width: 100%;
              min-width: 0;
              box-sizing: border-box;
            }

            .xaaj-auth-submit {
              width: 100%;
              min-height: 48px;
            }
          }

          @media (max-width: 390px) {
            .xaaj-auth-page {
              padding: 22px 8px 36px;
            }

            .xaaj-auth-editorial {
              min-height: 215px;
              padding: 22px 17px;
            }

            .xaaj-auth-editorial h2 {
              font-size: 34px;
            }

            .xaaj-auth-form-panel {
              padding: 24px 15px 30px;
            }

            .xaaj-auth-nav a {
              font-size: 8.5px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .xaaj-auth-nav a,
            .xaaj-auth-field input,
            .xaaj-auth-submit {
              transition: none !important;
            }
          }        `})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`main`,{className:`page simple`,children:(0,$.jsxs)(`div`,{className:`wrap narrow`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:t}),(0,$.jsx)(`h1`,{children:e}),n]})}),(0,$.jsx)(Up,{})]})}var Zp=[{id:`blog-1`,title:`5 Ways to Create a Beautiful Dining Table`,slug:`5-ways-to-create-a-beautiful-dining-table`,coverImage:`https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1600&q=88`,category:`Table Styling`,excerpt:`Simple ideas to elevate your dining experience with timeless crockery, thoughtful placement and beautiful details.`,content:`A beautiful dining table is not only about the food you serve. The right crockery, placement and small details can completely transform the experience.

Start with the right dinnerware. Choose pieces that complement your table and the occasion, while keeping the setting practical enough for everyday use.

Add layers with plates, bowls and serving pieces to create visual depth. Keep colours balanced and let natural textures do the talking.

Finally, leave a little room for imperfection. A table should feel lived in, warm and inviting — never overly precious.`,author:`XAAJ Editorial`,publishDate:`2026-09-15`,isPublished:!0},{id:`blog-2`,title:`How to Care for Your Ceramic Dinnerware`,slug:`how-to-care-for-your-ceramic-dinnerware`,coverImage:`https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1600&q=88`,category:`Crockery Care`,excerpt:`Keep your favourite XAAJ pieces beautiful for years with a few simple care habits.`,content:`Good ceramic dinnerware is made to be used. With a little everyday care, your favourite pieces can remain part of your table for years.

Wash pieces gently and avoid sudden temperature changes wherever possible. Stack thoughtfully and give delicate rims a little extra space.

For daily meals, use your pieces freely. Their beauty comes from becoming part of the rituals and moments that make a home feel like yours.`,author:`XAAJ Editorial`,publishDate:`2026-09-12`,isPublished:!0},{id:`blog-3`,title:`Creating a Cozy Corner at Home`,slug:`creating-a-cozy-corner-at-home`,coverImage:`https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1600&q=88`,category:`Home Decor`,excerpt:`Small styling ideas to make an everyday corner feel warmer, calmer and more inviting.`,content:`A home does not need a complete makeover to feel different. Sometimes, a few thoughtful objects are enough.

Start with one useful piece you genuinely love, then build around it with natural textures, soft light and a little greenery.

The goal is not perfection. It is creating a corner that feels comfortable enough to pause, gather and stay awhile.`,author:`XAAJ Editorial`,publishDate:`2026-09-10`,isPublished:!0}];function Qp(e,t=0){return!e||typeof e!=`object`?null:{...e,id:e.id||e._id||`blog-${t}`,title:e.title||`XAAJ Story`,slug:e.slug||``,coverImage:e.coverImage||e.image||e.featuredImage||``,category:e.category||`XAAJ Stories`,excerpt:e.excerpt||e.shortExcerpt||``,content:e.content||e.article||``,author:e.author||`XAAJ Editorial`,publishDate:e.publishDate||e.publishedAt||e.createdAt||``,isPublished:e.isPublished!==!1&&e.published!==!1}}function $p(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleDateString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`})}function em(){return(0,$.jsx)(`style`,{children:`
      .xaaj-blog-shell,
      .xaaj-blog-article-shell {
        --blog-ink: #292825;
        --blog-muted: #77736b;
        --blog-line: rgba(41,40,37,.14);
        --blog-soft: #f4f1eb;
        --blog-paper: #faf9f6;
        --blog-serif: Georgia, 'Times New Roman', serif;
      }

      .xaaj-blog-shell {
        position: relative;
        overflow: hidden;
        background: var(--blog-paper);
        padding: 0 0 110px;
      }

      .xaaj-blog-hero {
        position: relative;
        min-height: 520px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        background: #292825;
      }

      .xaaj-blog-hero-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .62;
        transform: scale(1.02);
        transition: transform 1.2s cubic-bezier(.22,1,.36,1);
      }

      .xaaj-blog-hero:hover .xaaj-blog-hero-bg { transform: scale(1.06); }

      .xaaj-blog-hero::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(25,24,22,.05) 15%, rgba(25,24,22,.74) 100%);
      }

      .xaaj-blog-hero-content {
        position: relative;
        z-index: 1;
        width: min(1180px, calc(100% - 44px));
        margin: 0 auto;
        padding: 92px 0 74px;
        color: #fff;
      }

      .xaaj-blog-kicker {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        font-size: 10px;
        letter-spacing: .2em;
        text-transform: uppercase;
        font-weight: 700;
      }

      .xaaj-blog-kicker::before {
        content: '';
        width: 34px;
        height: 1px;
        background: currentColor;
        opacity: .7;
      }

      .xaaj-blog-hero h1 {
        max-width: 780px;
        margin: 0;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        font-size: clamp(48px, 7vw, 88px);
        font-weight: 400;
        line-height: .96;
        letter-spacing: -.045em;
      }

      .xaaj-blog-hero p {
        max-width: 570px;
        margin: 26px 0 0;
        font-size: 15px;
        line-height: 1.75;
        color: rgba(255,255,255,.82);
      }

      .xaaj-blog-feature-wrap {
        width: min(1180px, calc(100% - 44px));
        margin: -62px auto 0;
        position: relative;
        z-index: 3;
      }

      .xaaj-blog-feature {
        display: grid;
        grid-template-columns: minmax(0, 1.18fr) minmax(360px, .82fr);
        min-height: 440px;
        background: #fff;
        box-shadow: 0 24px 70px rgba(36,34,30,.13);
      }

      .xaaj-blog-feature-image {
        position: relative;
        min-height: 440px;
        overflow: hidden;
      }

      .xaaj-blog-feature-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 1s cubic-bezier(.22,1,.36,1);
      }

      .xaaj-blog-feature:hover .xaaj-blog-feature-image img { transform: scale(1.045); }

      .xaaj-blog-feature-copy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 54px clamp(30px, 5vw, 70px);
      }

      .xaaj-blog-category {
        display: inline-flex;
        width: fit-content;
        color: var(--blog-muted);
        font-size: 10px;
        line-height: 1;
        font-weight: 700;
        letter-spacing: .16em;
        text-transform: uppercase;
      }

      .xaaj-blog-feature-copy h2 {
        margin: 20px 0 18px;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        color: var(--blog-ink);
        font-size: clamp(31px, 4vw, 49px);
        font-weight: 400;
        line-height: 1.04;
        letter-spacing: -.035em;
      }

      .xaaj-blog-feature-copy p {
        margin: 0;
        color: var(--blog-muted);
        font-size: 14px;
        line-height: 1.8;
      }

      .xaaj-blog-meta {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 28px;
        color: #98938a;
        font-size: 11px;
      }

      .xaaj-blog-read {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        width: fit-content;
        margin-top: 34px;
        color: var(--blog-ink);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .13em;
        text-transform: uppercase;
        text-decoration: none;
      }

      .xaaj-blog-read svg { transition: transform .35s ease; }
      .xaaj-blog-read:hover svg { transform: translateX(6px); }
      .xaaj-blog-read::after {
        content: '';
        position: absolute;
        left: 0;
        right: 28px;
        bottom: -8px;
        height: 1px;
        background: var(--blog-ink);
        transform-origin: left;
        transition: transform .35s ease;
      }
      .xaaj-blog-read:hover::after { transform: scaleX(.55); }

      .xaaj-blog-content {
        width: min(1180px, calc(100% - 44px));
        margin: 108px auto 0;
      }

      /* Blog index: no cinematic hero video. Open the Blog page directly
         into the clean editorial listing shown in the reference design. */
      .xaaj-blog-page-content {
        margin-top: 56px;
      }

      .xaaj-blog-content-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 30px;
        margin-bottom: 34px;
      }

      .xaaj-blog-content-head h2 {
        margin: 8px 0 0;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        font-size: clamp(30px, 4vw, 46px);
        font-weight: 400;
        line-height: 1;
        letter-spacing: -.035em;
        color: var(--blog-ink);
      }

      .xaaj-blog-content-head p {
        max-width: 410px;
        margin: 10px 0 0;
        color: var(--blog-muted);
        font-size: 13px;
        line-height: 1.7;
      }

      .xaaj-blog-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 42px;
        padding-bottom: 18px;
        border-bottom: 1px solid var(--blog-line);
      }

      .xaaj-blog-filter {
        border: 1px solid var(--blog-line);
        background: transparent;
        color: #6f6b64;
        padding: 10px 17px;
        border-radius: 999px;
        font: inherit;
        font-size: 10px;
        letter-spacing: .11em;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s ease;
      }

      .xaaj-blog-filter:hover,
      .xaaj-blog-filter.active {
        background: var(--blog-ink);
        color: #fff;
        border-color: var(--blog-ink);
        transform: translateY(-1px);
      }

      .xaaj-blog-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 30px;
      }

      .xaaj-blog-card {
        min-width: 0;
        background: #fff;
        border: 1px solid rgba(44,42,38,.06);
        box-shadow: 0 8px 30px rgba(44,42,38,.07);
        overflow: hidden;
        transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease;
      }

      .xaaj-blog-card:hover {
        transform: translateY(-7px);
        box-shadow: 0 18px 46px rgba(44,42,38,.13);
      }

      .xaaj-blog-card-image {
        position: relative;
        display: block;
        aspect-ratio: 1.58 / 1;
        overflow: hidden;
        background: #eeeae3;
      }

      .xaaj-blog-card-image img,
      .xaaj-blog-card-placeholder {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform .8s cubic-bezier(.22,1,.36,1);
      }

      .xaaj-blog-card:hover .xaaj-blog-card-image img { transform: scale(1.045); }

      .xaaj-blog-card-number {
        display: none;
      }

      .xaaj-blog-card-copy {
        padding: 24px 27px 27px;
      }

      .xaaj-blog-category {
        display: inline-block;
        color: #b96f60;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .13em;
        line-height: 1.2;
        text-transform: uppercase;
      }

      .xaaj-blog-card-copy h3 {
        margin: 12px 0 12px;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        color: var(--blog-ink);
        font-size: 26px;
        font-weight: 400;
        line-height: 1.12;
        letter-spacing: -.025em;
      }

      .xaaj-blog-card-copy h3 a {
        color: inherit;
        text-decoration: none;
      }

      .xaaj-blog-card-copy p {
        margin: 0;
        color: #77736d;
        font-size: 14px;
        line-height: 1.55;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .xaaj-blog-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        margin-top: 18px;
        padding-top: 0;
        border-top: 0;
        color: #8b867e;
        font-size: 12px;
      }

      .xaaj-blog-card-footer .xaaj-blog-read {
        margin-top: 0;
        color: #b96f60;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0;
        text-transform: none;
      }

      .xaaj-blog-skeleton {
        aspect-ratio: 1.12 / 1;
        background: linear-gradient(100deg,#eeeae3 20%,#f7f5f1 40%,#eeeae3 60%);
        background-size: 200% 100%;
        animation: xaajBlogShimmer 1.5s linear infinite;
      }

      @keyframes xaajBlogShimmer { to { background-position: -200% 0; } }

      .xaaj-blog-empty {
        padding: 80px 20px;
        border-top: 1px solid var(--blog-line);
        text-align: center;
      }

      .xaaj-blog-empty h2 {
        margin: 0 0 10px;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        font-weight: 400;
        font-size: 34px;
      }
      .xaaj-blog-empty p { color: var(--blog-muted); font-size: 13px; }

      .xaaj-blog-article-shell {
        background: var(--blog-paper);
        padding: 45px 0 110px;
      }

      .xaaj-blog-article {
        width: min(1040px, calc(100% - 44px));
        margin: 0 auto;
      }

      .xaaj-blog-breadcrumbs {
        display: flex;
        gap: 9px;
        flex-wrap: wrap;
        margin-bottom: 62px;
        color: #9b968e;
        font-size: 10px;
      }
      .xaaj-blog-breadcrumbs a { color: inherit; text-decoration: none; }
      .xaaj-blog-breadcrumbs a:hover { color: var(--blog-ink); }

      .xaaj-blog-article-header {
        max-width: 860px;
        margin: 0 auto 45px;
        text-align: center;
      }

      .xaaj-blog-article-header h1 {
        margin: 17px 0 20px;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        font-size: clamp(42px, 6vw, 76px);
        font-weight: 400;
        line-height: 1;
        letter-spacing: -.045em;
        color: var(--blog-ink);
      }

      .xaaj-blog-article-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #918c84;
        font-size: 11px;
      }

      .xaaj-blog-article-cover {
        width: 100%;
        aspect-ratio: 1.8 / 1;
        overflow: hidden;
        background: var(--blog-soft);
      }

      .xaaj-blog-article-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .xaaj-blog-article-body {
        max-width: 720px;
        margin: 58px auto 0;
      }

      .xaaj-blog-article-excerpt {
        margin: 0 0 42px;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        font-size: 23px;
        line-height: 1.55;
        color: var(--blog-ink);
      }

      .xaaj-blog-article-content p {
        margin: 0 0 25px;
        color: #5f5b54;
        font-size: 15px;
        line-height: 2;
      }

      .xaaj-blog-article-content h2 {
        margin: 48px 0 18px;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        color: var(--blog-ink);
        font-size: 30px;
        font-weight: 400;
      }

      .xaaj-blog-article-back {
        max-width: 720px;
        margin: 58px auto 0;
        padding-top: 24px;
        border-top: 1px solid var(--blog-line);
      }

      .xaaj-blog-article-back a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--blog-ink);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: .12em;
        text-transform: uppercase;
        text-decoration: none;
      }

      .xaaj-blog-fade {
        animation: xaajBlogFade .8s cubic-bezier(.22,1,.36,1) both;
      }
      .xaaj-blog-fade-delay { animation-delay: .1s; }

      @keyframes xaajBlogFade {
        from { opacity: 0; transform: translateY(22px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* ============================================================
         HOME BLOG — "FROM THE MAGAZINE" REFERENCE STYLE
         Scoped to the homepage so the full Blog page stays unchanged.
         ============================================================ */
      .xaaj-blog-home-shell{
        background:#fff;
        padding:34px 0 82px;
        margin-top:0;
      }

      .xaaj-blog-home-content{
        width:min(1148px,calc(100% - 48px));
        margin:0 auto;
      }

      .xaaj-blog-home-heading{
        margin:0 0 31px;
      }

      .xaaj-blog-home-heading h2{
        margin:0;
        color:#302e2b;
        font-family:Georgia,'Times New Roman',serif;
        font-size:31px;
        font-weight:400;
        line-height:1.15;
        letter-spacing:-.012em;
      }

      .xaaj-blog-home-grid{
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:20px;
      }

      .xaaj-blog-card-home{
        background:#fff;
        border:1px solid rgba(48,46,43,.20);
        border-radius:5px;
        box-shadow:none;
        overflow:hidden;
        transform:none;
        transition:box-shadow .35s ease,transform .35s ease;
      }

      .xaaj-blog-card-home:hover{
        transform:translateY(-3px);
        box-shadow:0 10px 28px rgba(48,46,43,.08);
      }

      .xaaj-blog-card-home .xaaj-blog-card-image{
        aspect-ratio:1.67 / 1;
        border-bottom:1px solid rgba(48,46,43,.12);
        background:#e9e5e1;
      }

      .xaaj-blog-card-home .xaaj-blog-card-copy{
        min-height:306px;
        background:#fff;
        padding:27px 30px 29px;
        box-sizing:border-box;
      }

      .xaaj-blog-card-home .xaaj-blog-card-copy h3{
        margin:0 0 13px;
        color:#34312e;
        font-family:Georgia,'Times New Roman',serif;
        font-size:28px;
        font-weight:400;
        line-height:1.16;
        letter-spacing:-.012em;
      }

      .xaaj-blog-card-home .xaaj-blog-card-copy h3 a{
        color:inherit;
      }

      .xaaj-blog-card-home-date{
        display:block;
        margin-bottom:15px;
        color:#77736e;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        font-size:10px;
        font-weight:400;
        line-height:1.2;
        letter-spacing:.14em;
        text-transform:uppercase;
      }

      .xaaj-blog-card-home .xaaj-blog-card-copy p{
        margin:0;
        color:#66625e;
        font-family:'Gotham Book','Gotham',Arial,sans-serif;
        font-size:14px;
        line-height:1.72;
        display:-webkit-box;
        -webkit-line-clamp:4;
        -webkit-box-orient:vertical;
        overflow:hidden;
      }

      .xaaj-blog-home-shell .xaaj-blog-fade{
        animation-duration:.65s;
      }

      @media (max-width: 900px) {
        .xaaj-blog-hero { min-height: 460px; }
        .xaaj-blog-feature { grid-template-columns: 1fr; }
        .xaaj-blog-feature-image { min-height: 390px; }
        .xaaj-blog-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
      }

      @media (max-width: 900px) {
        .xaaj-blog-home-grid{
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:18px;
        }
        .xaaj-blog-card-home .xaaj-blog-card-copy{
          min-height:280px;
          padding:24px 24px 26px;
        }
        .xaaj-blog-card-home .xaaj-blog-card-copy h3{
          font-size:24px;
        }
      }

      @media (max-width: 620px) {
        .xaaj-blog-home-shell{
          padding:38px 0 62px;
        }
        .xaaj-blog-home-content{
          width:calc(100% - 30px);
        }
        .xaaj-blog-home-heading{
          margin-bottom:24px;
        }
        .xaaj-blog-home-heading h2{
          font-size:27px;
        }
        .xaaj-blog-home-grid{
          grid-template-columns:1fr;
          gap:18px;
        }
        .xaaj-blog-card-home .xaaj-blog-card-image{
          aspect-ratio:1.58 / 1;
        }
        .xaaj-blog-card-home .xaaj-blog-card-copy{
          min-height:0;
          padding:23px 21px 25px;
        }
        .xaaj-blog-card-home .xaaj-blog-card-copy h3{
          font-size:24px;
        }
      }

      @media (max-width: 620px) {
        .xaaj-blog-shell { padding-bottom: 72px; }
        .xaaj-blog-hero { min-height: 470px; }
        .xaaj-blog-hero-content { width: min(100% - 30px,1180px); padding: 70px 0 62px; }
        .xaaj-blog-hero h1 { font-size: clamp(46px, 14vw, 68px); }
        .xaaj-blog-feature-wrap,
        .xaaj-blog-content,
        .xaaj-blog-article { width: min(100% - 30px,1180px); }

        .xaaj-blog-page-content {
          margin-top: 38px;
        }
        .xaaj-blog-feature-wrap { margin-top: -36px; }
        .xaaj-blog-feature-image { min-height: 300px; }
        .xaaj-blog-feature-copy { padding: 35px 26px 38px; }
        .xaaj-blog-content { margin-top: 72px; }
        .xaaj-blog-content-head { display: block; }
        .xaaj-blog-filters { margin-bottom: 30px; }
        .xaaj-blog-grid { grid-template-columns: 1fr; gap: 42px; }
        .xaaj-blog-card-image { aspect-ratio: 1.5 / 1; }
        .xaaj-blog-card-copy { padding: 21px 20px 23px; }
        .xaaj-blog-card-copy h3 { font-size: 23px; }
        .xaaj-blog-article-shell { padding-top: 28px; }
        .xaaj-blog-breadcrumbs { margin-bottom: 44px; }
        .xaaj-blog-article-header { margin-bottom: 34px; }
        .xaaj-blog-article-cover { aspect-ratio: 1.08 / 1; }
        .xaaj-blog-article-body { margin-top: 38px; }
        .xaaj-blog-article-excerpt { font-size: 20px; }
      }

      @media (prefers-reduced-motion: reduce) {
        .xaaj-blog-hero-bg,
        .xaaj-blog-feature-image img,
        .xaaj-blog-card-image img,
        .xaaj-blog-read svg,
        .xaaj-blog-filter { transition: none; }
        .xaaj-blog-fade { animation: none; }
      }



      /* ============================================================
         HOME BLOG — FINAL WHITE SURFACE / NO SECTION BAND
         ============================================================ */
      .xaaj-cinema-home,
      .xaaj-blog-shell,
      .xaaj-blog-home-shell,
      .xaaj-blog-home-content,
      .xaaj-blog-card-home,
      .xaaj-blog-card-home .xaaj-blog-card-copy {
        background:#fff !important;
      }

      .xaaj-values-strip,
      .xaaj-blog-home-shell {
        margin-top:0 !important;
        margin-bottom:0 !important;
        border-top:0 !important;
        border-bottom:0 !important;
      }

      .xaaj-blog-home-content {
        margin-top:0 !important;
      }

      .xaaj-blog-card-home .xaaj-blog-card-copy {
        background:#fff !important;
      }

      .xaaj-blog-card-home {
        box-shadow:none !important;
      }

      /* ============================================================
         BLOG VISIBILITY / ROUTE SAFETY
         Keep the blog route visible even when global site styles or
         previous animation rules are loaded on the same page.
         ============================================================ */
      .xaaj-blog-shell,
      .xaaj-blog-article-shell,
      .xaaj-blog-home-shell {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        width: 100%;
        min-height: 1px;
      }

      .xaaj-blog-article-shell {
        background: #fff !important;
        color: #292825;
        position: relative;
        z-index: 1;
      }

      .xaaj-blog-article,
      .xaaj-blog-article-header,
      .xaaj-blog-article-cover,
      .xaaj-blog-article-body,
      .xaaj-blog-article-back {
        visibility: visible !important;
      }

      .xaaj-blog-article-header.xaaj-blog-fade,
      .xaaj-blog-article-cover.xaaj-blog-fade {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }

      .xaaj-blog-card-home,
      .xaaj-blog-card-home.xaaj-blog-fade {
        visibility: visible !important;
        opacity: 1 !important;
      }

      .xaaj-blog-home-shell {
        background: #fff !important;
      }
    `})}function tm({post:e,index:t=0,homeVariant:n=!1}){return n?(0,$.jsxs)(`article`,{className:`xaaj-blog-card xaaj-blog-card-home xaaj-blog-fade`,style:{animationDelay:`${Math.min(t*70,350)}ms`},children:[(0,$.jsx)(Z,{to:`/blog/${e.slug}`,className:`xaaj-blog-card-image`,"aria-label":`Read ${e.title}`,children:e.coverImage?(0,$.jsx)(`img`,{src:e.coverImage,alt:e.title,loading:`lazy`}):(0,$.jsx)(`div`,{className:`xaaj-blog-card-placeholder`})}),(0,$.jsxs)(`div`,{className:`xaaj-blog-card-copy`,children:[(0,$.jsx)(`h3`,{children:(0,$.jsx)(Z,{to:`/blog/${e.slug}`,children:e.title})}),(0,$.jsx)(`span`,{className:`xaaj-blog-card-home-date`,children:$p(e.publishDate)}),e.excerpt&&(0,$.jsx)(`p`,{children:e.excerpt})]})]}):(0,$.jsxs)(`article`,{className:`xaaj-blog-card xaaj-blog-fade`,style:{animationDelay:`${Math.min(t*70,350)}ms`},children:[(0,$.jsxs)(Z,{to:`/blog/${e.slug}`,className:`xaaj-blog-card-image`,"aria-label":`Read ${e.title}`,children:[e.coverImage?(0,$.jsx)(`img`,{src:e.coverImage,alt:e.title,loading:`lazy`}):(0,$.jsx)(`div`,{className:`xaaj-blog-card-placeholder`}),(0,$.jsx)(`span`,{className:`xaaj-blog-card-number`,children:String(t+1).padStart(2,`0`)})]}),(0,$.jsxs)(`div`,{className:`xaaj-blog-card-copy`,children:[(0,$.jsx)(`span`,{className:`xaaj-blog-category`,children:e.category}),(0,$.jsx)(`h3`,{children:(0,$.jsx)(Z,{to:`/blog/${e.slug}`,children:e.title})}),e.excerpt&&(0,$.jsx)(`p`,{children:e.excerpt}),(0,$.jsxs)(`div`,{className:`xaaj-blog-card-footer`,children:[(0,$.jsx)(`span`,{children:$p(e.publishDate)}),(0,$.jsxs)(Z,{to:`/blog/${e.slug}`,className:`xaaj-blog-read`,children:[`Read article `,(0,$.jsx)(Ud,{size:13})]})]})]})]})}function nm(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{let e=!1;async function n(){try{let n=await Q(`/blogs`),r=n?.data?.blogs||n?.blogs||n?.data||[],i=Array.isArray(r)?r.map((e,t)=>Qp(e,t)).filter(e=>e&&e.isPublished):[];e||t(i.length?i:Zp)}catch(n){e||(console.error(`Blog load error:`,n),t(Zp))}finally{e||r(!1)}}return n(),()=>{e=!0}},[]),{posts:e,loading:n}}function rm(){let{posts:e,loading:t}=nm(),n=e.filter(e=>e?.isPublished!==!1).slice(0,3);return(0,$.jsxs)(`section`,{className:`xaaj-blog-shell xaaj-blog-home-shell`,"data-xaaj-reveal":`up`,style:{background:`#fff`,marginTop:0,marginBottom:0,border:0},children:[(0,$.jsx)(em,{}),(0,$.jsxs)(`div`,{className:`xaaj-blog-content xaaj-blog-home-content`,children:[(0,$.jsx)(`div`,{className:`xaaj-blog-home-heading`,children:(0,$.jsx)(`h2`,{children:`From the magazine`})}),t?(0,$.jsx)(`div`,{className:`xaaj-blog-grid xaaj-blog-home-grid`,children:[1,2,3].map(e=>(0,$.jsx)(`div`,{className:`xaaj-blog-skeleton`},e))}):n.length?(0,$.jsx)(`div`,{className:`xaaj-blog-grid xaaj-blog-home-grid`,children:n.map((e,t)=>(0,$.jsx)(tm,{post:e,index:t,homeVariant:!0},e.id||e.slug||t))}):(0,$.jsxs)(`div`,{className:`xaaj-blog-empty`,children:[(0,$.jsx)(`h2`,{children:`No stories yet.`}),(0,$.jsx)(`p`,{children:`New XAAJ stories will appear here soon.`})]})]})]})}function im(){let{posts:e,loading:t}=nm(),[n,r]=(0,_.useState)(`All`),i=[`All`,...Array.from(new Set(e.map(e=>e.category).filter(Boolean)))],a=n===`All`?e:e.filter(e=>e.category===n);return a[0]||e[0],(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(em,{}),(0,$.jsx)(`main`,{className:`xaaj-blog-shell`,children:(0,$.jsxs)(`div`,{className:`xaaj-blog-content xaaj-blog-page-content`,children:[(0,$.jsx)(`div`,{className:`xaaj-blog-filters`,"aria-label":`Blog categories`,children:i.map(e=>(0,$.jsx)(`button`,{type:`button`,className:`xaaj-blog-filter ${n===e?`active`:``}`,onClick:()=>r(e),children:e},e))}),t?(0,$.jsx)(`div`,{className:`xaaj-blog-grid`,children:[1,2,3].map(e=>(0,$.jsx)(`div`,{className:`xaaj-blog-skeleton`},e))}):a.length?(0,$.jsx)(`div`,{className:`xaaj-blog-grid xaaj-blog-page-grid`,children:a.map((e,t)=>(0,$.jsx)(tm,{post:e,index:t},e.id||e.slug||t))}):(0,$.jsxs)(`div`,{className:`xaaj-blog-empty`,children:[(0,$.jsx)(`h2`,{children:`No stories yet.`}),(0,$.jsx)(`p`,{children:`New XAAJ stories will appear here soon.`})]})]})}),(0,$.jsx)(Up,{})]})}function am({slug:e}){let t=Zp.find(t=>t.slug===e)||null,[n,r]=(0,_.useState)(t),[i,a]=(0,_.useState)(!t),[o,s]=(0,_.useState)(``);return(0,_.useEffect)(()=>{let t=!1,n=null;async function i(){s(``);let i=Zp.find(t=>t.slug===e)||null;!t&&i&&(r(i),a(!1));try{let a=Q(`/blogs/${encodeURIComponent(e)}`),o=new Promise((e,t)=>{n=window.setTimeout(()=>t(Error(`Blog request timed out`)),8e3)}),c=await Promise.race([a,o]),l=c?.data,u=Qp(l?.blog||l?.post||l?.article||(Array.isArray(l)?l.find(t=>t?.slug===e||t?.id===e):null)||c?.blog||c?.post||c?.article||(Array.isArray(c)?c.find(t=>t?.slug===e||t?.id===e):null)||l||c);!t&&u?.title?(r(u),s(``)):!t&&!i&&(r(null),s(`This blog story could not be found.`))}catch(n){if(console.error(`Blog article load error:`,n),!t){let t=Zp.find(t=>t.slug===e)||null;r(t),t||s(`Unable to load this blog story. Please check the blog API and slug.`)}}finally{n&&window.clearTimeout(n),t||a(!1)}}return i(),()=>{t=!0,n&&window.clearTimeout(n)}},[e]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(em,{}),(0,$.jsx)(`main`,{className:`xaaj-blog-article-shell`,"data-xaaj-blog-route-root":`article`,style:{background:`#fff`,display:`block`,minHeight:`70vh`},children:(0,$.jsxs)(`article`,{className:`xaaj-blog-article`,style:{opacity:1,visibility:`visible`,transform:`none`,display:`block`},children:[(0,$.jsxs)(`div`,{className:`xaaj-blog-breadcrumbs`,children:[(0,$.jsx)(Z,{to:`/`,children:`Home`}),(0,$.jsx)(`span`,{children:`/`}),(0,$.jsx)(Z,{to:`/blog`,children:`Blog`}),(0,$.jsx)(`span`,{children:`/`}),(0,$.jsx)(`span`,{children:n?.title||e})]}),i&&!n?(0,$.jsxs)(`section`,{style:{padding:`70px 0 120px`,textAlign:`center`},children:[(0,$.jsx)(`span`,{className:`xaaj-blog-category`,children:`Blog`}),(0,$.jsx)(`h1`,{style:{margin:`18px auto 0`,maxWidth:`860px`,fontFamily:`'Cormorant Garamond', Georgia, 'Times New Roman', serif`,fontSize:`clamp(42px, 6vw, 76px)`,fontWeight:400,lineHeight:1,color:`#292825`},children:`Loading story...`})]}):n?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`header`,{className:`xaaj-blog-article-header`,style:{opacity:1,visibility:`visible`},children:[(0,$.jsx)(`span`,{className:`xaaj-blog-category`,children:n.category}),(0,$.jsx)(`h1`,{children:n.title}),(0,$.jsxs)(`div`,{className:`xaaj-blog-article-meta`,children:[(0,$.jsxs)(`span`,{children:[`By `,n.author]}),(0,$.jsx)(`span`,{children:`•`}),(0,$.jsx)(`span`,{children:$p(n.publishDate)})]})]}),n.coverImage&&(0,$.jsx)(`div`,{className:`xaaj-blog-article-cover`,style:{opacity:1,visibility:`visible`},children:(0,$.jsx)(`img`,{src:n.coverImage,alt:n.title})}),(0,$.jsxs)(`div`,{className:`xaaj-blog-article-body`,children:[n.excerpt&&(0,$.jsx)(`p`,{className:`xaaj-blog-article-excerpt`,children:n.excerpt}),(0,$.jsx)(`div`,{className:`xaaj-blog-article-content`,children:String(n.content||``).split(/\n{2,}/).map(e=>e.trim()).filter(Boolean).map((e,t)=>(0,$.jsx)(`div`,{children:e.split(`
`).map((e,t)=>{let n=e.trim();return n?/^#{1,3}\s/.test(n)?(0,$.jsx)(`h2`,{children:n.replace(/^#{1,3}\s/,``)},t):(0,$.jsx)(`p`,{children:n},t):null})},t))})]}),(0,$.jsx)(`div`,{className:`xaaj-blog-article-back`,children:(0,$.jsxs)(Z,{to:`/blog`,children:[(0,$.jsx)(Ud,{size:14,style:{transform:`rotate(180deg)`}}),`Back to all stories`]})})]}):(0,$.jsxs)(`section`,{style:{padding:`70px 0 120px`,textAlign:`center`},children:[(0,$.jsx)(`span`,{className:`xaaj-blog-category`,children:`Blog`}),(0,$.jsx)(`h1`,{style:{margin:`18px auto 0`,maxWidth:`860px`,fontFamily:`'Cormorant Garamond', Georgia, 'Times New Roman', serif`,fontSize:`clamp(42px, 6vw, 76px)`,fontWeight:400,lineHeight:1,color:`#292825`},children:`Story not found.`}),(0,$.jsx)(`p`,{style:{color:`#77736b`,marginTop:18},children:o||`This story may have been unpublished or the link may be incorrect.`}),(0,$.jsx)(Fp,{to:`/blog`,children:`Back to blog`})]})]})}),(0,$.jsx)(Up,{})]})}function om(){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`style`,{children:`
        .xaaj-brand-story-page{
          position:relative;
          isolation:isolate;
          overflow:hidden;
          background:#fff;
          color:#292722;
          min-height:100vh;
          padding:72px 24px 110px;
        }

        .xaaj-brand-story-page,
        .xaaj-brand-story-page *{
          box-sizing:border-box;
        }

        .xaaj-brand-story-page::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            radial-gradient(circle at 50% 14%, rgba(181,151,128,.055), transparent 23%),
            linear-gradient(180deg,#fff 0%,#fff 72%,#fcfbf8 100%);
          pointer-events:none;
          z-index:-2;
        }

        .xaaj-brand-story-inner{
          position:relative;
          width:min(760px,100%);
          margin:0 auto;
          text-align:center;
          z-index:1;
        }

        .xaaj-brand-story-eyebrow{
          display:block;
          margin:0 0 24px;
          color:#6e675e;
          font-family:'Gotham Book','Gotham',Arial,sans-serif;
          font-size:10px;
          font-weight:400;
          line-height:1;
          letter-spacing:3px;
          text-transform:uppercase;
        }

        /* The original logo is intentionally treated as a very light watermark. */
        .xaaj-brand-story-mark{
          position:absolute;
          top:6px;
          left:50%;
          width:190px;
          height:150px;
          object-fit:contain;
          object-position:center;
          transform:translateX(-50%);
          opacity:.075;
          filter:grayscale(1);
          mix-blend-mode:multiply;
          pointer-events:none;
          user-select:none;
          z-index:-1;
        }

        .xaaj-brand-story-title{
          position:relative;
          margin:0 0 25px;
          color:#292722;
          font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;
          font-size:31px;
          font-weight:600;
          line-height:1.05;
          letter-spacing:-.025em;
        }

        .xaaj-brand-story-title::after{
          content:"";
          display:block;
          width:34px;
          height:1px;
          margin:17px auto 0;
          background:rgba(41,39,34,.28);
        }

        .xaaj-brand-story-lead{
          width:min(600px,100%);
          margin:0 auto 40px;
          color:#35312c;
          font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;
          font-size:21px;
          font-weight:400;
          line-height:1.42;
          letter-spacing:.005em;
        }

        .xaaj-brand-story-lead p{
          margin:0;
        }

        .xaaj-brand-story-lead strong{
          font-weight:600;
        }

        .xaaj-brand-story-copy{
          width:min(680px,100%);
          margin:0 auto;
          color:#555049;
          font-family:'Gotham Book','Gotham',Arial,sans-serif;
          font-size:13px;
          font-weight:400;
          line-height:1.85;
          letter-spacing:.01em;
        }

        .xaaj-brand-story-copy p{
          margin:0 0 16px;
        }

        /* Consistent editorial spacing between story paragraphs.
           Emphasis paragraphs get only a subtle separation instead of large gaps. */
        .xaaj-brand-story-copy p:nth-child(8),
        .xaaj-brand-story-copy p:nth-child(15),
        .xaaj-brand-story-copy p:nth-child(25),
        .xaaj-brand-story-copy p:nth-child(31){
          margin-top:22px;
        }

        .xaaj-brand-story-copy strong{
          color:#302d28;
          font-family:'Gotham Book','Gotham',Arial,sans-serif;
          font-size:inherit;
          font-weight:600;
        }

        .xaaj-brand-story-closing{
          margin-top:34px!important;
        }

        .xaaj-brand-story-signoff{
          margin-top:42px;
          padding-top:24px;
          border-top:1px solid rgba(48,45,40,.12);
          color:#302d28;
          font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;
          font-size:18px;
          line-height:1.4;
        }

        .xaaj-brand-story-signoff strong{
          display:block;
          font-family:'Gotham Book','Gotham',Arial,sans-serif;
          font-size:10px;
          font-weight:500;
          letter-spacing:3px;
          margin-bottom:5px;
        }

        .xaaj-brand-story-signoff em{
          font-style:italic;
        }

        @media(max-width:700px){
          .xaaj-brand-story-page{
            padding:58px 20px 82px;
          }

          .xaaj-brand-story-mark{
            width:150px;
            height:120px;
            top:4px;
            opacity:.07;
          }

          .xaaj-brand-story-eyebrow{
            margin-bottom:20px;
            font-size:9px;
            letter-spacing:2.6px;
          }

          .xaaj-brand-story-title{
            font-size:27px;
            margin-bottom:22px;
          }

          .xaaj-brand-story-lead{
            font-size:19px;
            margin-bottom:34px;
          }

          .xaaj-brand-story-copy{
            font-size:12px;
            line-height:1.82;
          }

          .xaaj-brand-story-copy p{
            margin-bottom:14px;
          }

          .xaaj-brand-story-copy p:nth-child(8),
          .xaaj-brand-story-copy p:nth-child(15),
          .xaaj-brand-story-copy p:nth-child(25),
          .xaaj-brand-story-copy p:nth-child(31){
            margin-top:20px;
          }

          .xaaj-brand-story-signoff{
            margin-top:34px;
          }
        }

        @media(max-width:430px){
          .xaaj-brand-story-page{
            padding:48px 15px 70px;
          }

          .xaaj-brand-story-mark{
            width:128px;
            height:105px;
          }

          .xaaj-brand-story-title{
            font-size:25px;
          }

          .xaaj-brand-story-lead{
            font-size:18px;
            line-height:1.4;
          }

          .xaaj-brand-story-copy{
            font-size:11.5px;
            line-height:1.8;
          }

          .xaaj-brand-story-signoff{
            font-size:17px;
          }
        }
      `}),(0,$.jsx)(`main`,{className:`xaaj-brand-story-page`,children:(0,$.jsxs)(`article`,{className:`xaaj-brand-story-inner`,"aria-labelledby":`xaaj-brand-story-title`,children:[(0,$.jsx)(`span`,{className:`xaaj-brand-story-eyebrow`,children:`Brand Story`}),(0,$.jsx)(`img`,{src:wp,alt:``,"aria-hidden":`true`,className:`xaaj-brand-story-mark`}),(0,$.jsx)(`h1`,{id:`xaaj-brand-story-title`,className:`xaaj-brand-story-title`,children:`Stories, shaped by hand.`}),(0,$.jsx)(`div`,{className:`xaaj-brand-story-lead`,children:(0,$.jsxs)(`p`,{children:[`Some things are designed to be seen.`,(0,$.jsx)(`br`,{}),`Some things are made to be felt.`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`strong`,{children:`XAAJ is about the latter.`})]})}),(0,$.jsxs)(`div`,{className:`xaaj-brand-story-copy`,children:[(0,$.jsx)(`p`,{children:`Born from the love for beauty that exists in India's everyday life, XAAJ presents the Story of Clay, Craft, & Colour to create the cultural richness that cozies up your home.`}),(0,$.jsx)(`p`,{children:`Because India has never been short of stories.`}),(0,$.jsx)(`p`,{children:`They live in the morning Chai shared across a balcony.`}),(0,$.jsx)(`p`,{children:`In the grandmother's favourite bowl.`}),(0,$.jsx)(`p`,{children:`In the plate brought out when guests arrive.`}),(0,$.jsx)(`p`,{children:`In the table that gets a little louder during festivals.`}),(0,$.jsx)(`p`,{children:`In the quiet dinner shared after a long day.`}),(0,$.jsx)(`p`,{children:`We thrive to create something that could become part of these moments.`}),(0,$.jsxs)(`p`,{children:[`And thus, `,(0,$.jsx)(`strong`,{children:`XAAJ was born.`})]}),(0,$.jsx)(`p`,{children:`Our journey begins in places where craft is still handcrafted. Khurja is one of them—a place that witnesses humble workshops where generations invested themselves in pottery. Here, clay is shaped slowly, patiently, and lovingly by hands that have learned the craft over generations.`}),(0,$.jsx)(`p`,{children:`XAAJ nurtures the Story of Khurja and several other such place to showcase to the rest of India.`}),(0,$.jsx)(`p`,{children:`At XAAJ, we don't create crockery for occasions.`}),(0,$.jsx)(`p`,{children:`We create pieces that quietly become part of your everyday life.`}),(0,$.jsx)(`p`,{children:`Every collection is our way of discovering a little more of this country—its colours, its patterns, its forgotten crafts, its landscapes, its architecture, its traditions and, most importantly, its people.`}),(0,$.jsx)(`p`,{children:`We take these inspirations and give them a new expression—something contemporary for today's homes, yet carrying a little piece of essence of where it came from.`}),(0,$.jsx)(`p`,{children:(0,$.jsx)(`strong`,{children:`We want it to live on your table.`})}),(0,$.jsx)(`p`,{children:`In the things you use every day.`}),(0,$.jsx)(`p`,{children:`A cup that becomes your morning ritual.`}),(0,$.jsx)(`p`,{children:`A plate that witnesses family celebrations.`}),(0,$.jsx)(`p`,{children:`A bowl that holds the meal that made a difficult day feel better.`}),(0,$.jsx)(`p`,{children:`Over time, these objects become more than objects.`}),(0,$.jsx)(`p`,{children:`They become ours.`}),(0,$.jsx)(`p`,{children:(0,$.jsx)(`strong`,{children:`At XAAJ, we embrace that artistry.`})}),(0,$.jsx)(`p`,{children:`A brushstroke that isn't perfectly identical.`}),(0,$.jsx)(`p`,{children:`A glaze that settles a little differently.`}),(0,$.jsx)(`p`,{children:`A tiny variation that makes one piece unlike another.`}),(0,$.jsx)(`p`,{children:`We don't see these as imperfections.`}),(0,$.jsx)(`p`,{children:(0,$.jsx)(`strong`,{children:`We see the human hand.`})}),(0,$.jsx)(`p`,{children:`XAAJ is not just crockery, but pieces that slowly find their way into your life.`}),(0,$.jsx)(`p`,{children:`Pieces that bring joy & happiness today...`}),(0,$.jsx)(`p`,{children:`and perhaps, years from now, carry memories of moments that made your house a home.`}),(0,$.jsxs)(`p`,{className:`xaaj-brand-story-closing`,children:[`Because ultimately, `,(0,$.jsx)(`strong`,{children:`XAAJ is not about what we make.`})]}),(0,$.jsx)(`p`,{children:(0,$.jsx)(`strong`,{children:`It is about what happens around it.`})}),(0,$.jsx)(`p`,{children:`The conversations.`}),(0,$.jsx)(`p`,{children:`The celebrations.`}),(0,$.jsx)(`p`,{children:`The ordinary evenings.`}),(0,$.jsx)(`p`,{children:`The people we love.`}),(0,$.jsx)(`p`,{children:(0,$.jsx)(`strong`,{children:`Every table has a story.`})}),(0,$.jsx)(`p`,{children:(0,$.jsx)(`strong`,{children:`XAAJ is here to become a part of yours.`})})]}),(0,$.jsxs)(`div`,{className:`xaaj-brand-story-signoff`,children:[(0,$.jsx)(`strong`,{children:`XAAJ`}),(0,$.jsx)(`em`,{children:`Stories crafted in earth.`})]})]})}),(0,$.jsx)(Up,{})]})}function sm(){let e={name:``,businessName:``,phone:``,email:``,interest:``,message:``},[t,n]=(0,_.useState)(e),[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)({type:``,message:``}),s=(e,t)=>{n(n=>({...n,[e]:t})),a.message&&o({type:``,message:``})};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`main`,{className:`xaaj-b2b-enquiry-page`,children:(0,$.jsxs)(`section`,{className:`xaaj-b2b-enquiry-shell`,"aria-labelledby":`b2b-enquiry-title`,children:[(0,$.jsxs)(`div`,{className:`xaaj-b2b-enquiry-heading`,children:[(0,$.jsx)(`span`,{className:`xaaj-b2b-enquiry-eyebrow`,children:`B2B ENQUIRY`}),(0,$.jsx)(`h1`,{id:`b2b-enquiry-title`,children:`Enquire for Bulk Orders`}),(0,$.jsx)(`p`,{children:`Share a few details and our team will get in touch with you shortly.`})]}),(0,$.jsxs)(`form`,{className:`xaaj-b2b-enquiry-form`,onSubmit:async r=>{if(r.preventDefault(),!t.name.trim()||!t.businessName.trim()||!t.phone.trim()||!t.email.trim()||!t.interest){o({type:`error`,message:`Please fill in all required fields.`});return}i(!0),o({type:``,message:``});try{await Q(`/contact`,{method:`POST`,body:JSON.stringify({name:t.name.trim(),businessName:t.businessName.trim(),phone:t.phone.trim(),email:t.email.trim(),lookingFor:t.interest,message:t.message.trim()})}),n(e),o({type:`success`,message:`Thank you. Your enquiry has been received and our team will get in touch shortly.`})}catch(e){console.error(`B2B enquiry submission error:`,e),o({type:`error`,message:`We could not submit your enquiry right now. Please try again.`})}finally{i(!1)}},noValidate:!0,children:[(0,$.jsxs)(`div`,{className:`xaaj-b2b-enquiry-grid`,children:[(0,$.jsxs)(`label`,{children:[(0,$.jsxs)(`span`,{children:[`Full Name `,(0,$.jsx)(`i`,{children:`*`})]}),(0,$.jsx)(`input`,{type:`text`,value:t.name,onChange:e=>s(`name`,e.target.value),placeholder:`Enter your full name`,autoComplete:`name`,required:!0})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsxs)(`span`,{children:[`Business Name `,(0,$.jsx)(`i`,{children:`*`})]}),(0,$.jsx)(`input`,{type:`text`,value:t.businessName,onChange:e=>s(`businessName`,e.target.value),placeholder:`Enter your business name`,autoComplete:`organization`,required:!0})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsxs)(`span`,{children:[`Phone Number `,(0,$.jsx)(`i`,{children:`*`})]}),(0,$.jsx)(`input`,{type:`tel`,value:t.phone,onChange:e=>s(`phone`,e.target.value),placeholder:`Enter your phone number`,autoComplete:`tel`,inputMode:`tel`,required:!0})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsxs)(`span`,{children:[`Email Address `,(0,$.jsx)(`i`,{children:`*`})]}),(0,$.jsx)(`input`,{type:`email`,value:t.email,onChange:e=>s(`email`,e.target.value),placeholder:`Enter your email address`,autoComplete:`email`,required:!0})]})]}),(0,$.jsxs)(`label`,{className:`xaaj-b2b-enquiry-full-field`,children:[(0,$.jsxs)(`span`,{children:[`What are you looking for? `,(0,$.jsx)(`i`,{children:`*`})]}),(0,$.jsxs)(`select`,{value:t.interest,onChange:e=>s(`interest`,e.target.value),required:!0,children:[(0,$.jsx)(`option`,{value:``,children:`Select an option`}),(0,$.jsx)(`option`,{value:`Crockery`,children:`Crockery`}),(0,$.jsx)(`option`,{value:`Serveware`,children:`Serveware`}),(0,$.jsx)(`option`,{value:`Drinkware`,children:`Drinkware`}),(0,$.jsx)(`option`,{value:`Dinnerware`,children:`Dinnerware`}),(0,$.jsx)(`option`,{value:`Other`,children:`Other`})]})]}),(0,$.jsxs)(`label`,{className:`xaaj-b2b-enquiry-full-field`,children:[(0,$.jsx)(`span`,{children:`Message / Requirement`}),(0,$.jsx)(`textarea`,{value:t.message,onChange:e=>s(`message`,e.target.value),placeholder:`Tell us briefly about your requirement`,rows:5})]}),a.message&&(0,$.jsx)(`div`,{className:`xaaj-b2b-enquiry-status ${a.type}`,role:`status`,children:a.message}),(0,$.jsxs)(`button`,{className:`xaaj-b2b-enquiry-submit`,type:`submit`,disabled:r,children:[(0,$.jsx)(`span`,{children:r?`Submitting...`:`Submit Enquiry`}),!r&&(0,$.jsx)(Ud,{size:18,strokeWidth:1.25})]})]})]})}),(0,$.jsx)(`style`,{children:`
        .xaaj-b2b-enquiry-page {
          min-height: calc(100vh - 186px);
          background: #fffdf9;
          padding: 72px 24px 100px;
          color: #302d28;
        }

        .xaaj-b2b-enquiry-shell {
          width: min(100%, 1040px);
          margin: 0 auto;
          padding: clamp(34px, 5vw, 64px);
          background: #fbf8f1;
          border: 1px solid rgba(48,45,40,.13);
          border-radius: 4px;
          box-shadow: 0 20px 60px rgba(48,45,40,.045);
        }

        .xaaj-b2b-enquiry-heading {
          max-width: 720px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .xaaj-b2b-enquiry-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          color: #87745d;
          font: 500 10px/1 'Gotham Book','Gotham',Arial,sans-serif;
          letter-spacing: 2.1px;
          text-transform: uppercase;
        }

        .xaaj-b2b-enquiry-eyebrow::before,
        .xaaj-b2b-enquiry-eyebrow::after {
          content: '';
          width: 42px;
          height: 1px;
          background: rgba(135,116,93,.5);
        }

        .xaaj-b2b-enquiry-heading h1 {
          margin: 18px 0 12px;
          color: #292621;
          font: 400 clamp(42px, 5.2vw, 68px)/.98 'Cormorant Garamond',Georgia,'Times New Roman',serif;
          letter-spacing: -.035em;
        }

        .xaaj-b2b-enquiry-heading p {
          max-width: 520px;
          margin: 0 auto;
          color: #777169;
          font: 400 14px/1.7 'Gotham Book','Gotham',Arial,sans-serif;
        }

        .xaaj-b2b-enquiry-form {
          width: 100%;
        }

        .xaaj-b2b-enquiry-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 24px 22px;
        }

        .xaaj-b2b-enquiry-form label {
          display: block;
          min-width: 0;
        }

        .xaaj-b2b-enquiry-form label > span {
          display: block;
          margin-bottom: 9px;
          color: #3b3732;
          font: 400 11px/1.3 'Gotham Book','Gotham',Arial,sans-serif;
          letter-spacing: .15px;
        }

        .xaaj-b2b-enquiry-form label > span i {
          color: #9a4e3d;
          font-style: normal;
        }

        .xaaj-b2b-enquiry-form input,
        .xaaj-b2b-enquiry-form select,
        .xaaj-b2b-enquiry-form textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(48,45,40,.18);
          border-radius: 2px;
          outline: none;
          background: #fffdf9;
          color: #302d28;
          font: 400 13px/1.45 'Gotham Book','Gotham',Arial,sans-serif;
          transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
        }

        .xaaj-b2b-enquiry-form input,
        .xaaj-b2b-enquiry-form select {
          height: 52px;
          padding: 0 15px;
        }

        .xaaj-b2b-enquiry-form textarea {
          min-height: 126px;
          padding: 15px;
          resize: vertical;
        }

        .xaaj-b2b-enquiry-form input::placeholder,
        .xaaj-b2b-enquiry-form textarea::placeholder {
          color: #aaa39a;
        }

        .xaaj-b2b-enquiry-form input:focus,
        .xaaj-b2b-enquiry-form select:focus,
        .xaaj-b2b-enquiry-form textarea:focus {
          border-color: #77705f;
          box-shadow: 0 0 0 3px rgba(119,112,95,.08);
          background: #ffffff;
        }

        .xaaj-b2b-enquiry-full-field {
          margin-top: 24px;
        }

        .xaaj-b2b-enquiry-status {
          margin-top: 18px;
          padding: 13px 15px;
          border: 1px solid rgba(48,45,40,.12);
          font: 400 11px/1.55 'Gotham Book','Gotham',Arial,sans-serif;
        }

        .xaaj-b2b-enquiry-status.success {
          background: rgba(43,69,44,.06);
          color: #3d5a40;
        }

        .xaaj-b2b-enquiry-status.error {
          background: rgba(145,66,51,.06);
          color: #8d4e3d;
        }

        .xaaj-b2b-enquiry-submit {
          width: 100%;
          min-height: 54px;
          margin-top: 26px;
          border: 1px solid #2e3527;
          border-radius: 2px;
          background: #2e3527;
          color: #fffdf9;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          cursor: pointer;
          font: 400 11px/1 'Gotham Book','Gotham',Arial,sans-serif;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          transition: background .22s ease, transform .22s ease, opacity .22s ease;
        }

        .xaaj-b2b-enquiry-submit:hover:not(:disabled) {
          background: #252b20;
          transform: translateY(-1px);
        }

        .xaaj-b2b-enquiry-submit:disabled {
          opacity: .62;
          cursor: wait;
        }

        @media (max-width: 700px) {
          .xaaj-b2b-enquiry-page {
            padding: 42px 14px 64px;
          }

          .xaaj-b2b-enquiry-shell {
            padding: 34px 20px 28px;
            border-radius: 3px;
          }

          .xaaj-b2b-enquiry-heading {
            margin-bottom: 34px;
          }

          .xaaj-b2b-enquiry-heading h1 {
            font-size: clamp(39px, 11vw, 54px);
          }

          .xaaj-b2b-enquiry-grid {
            grid-template-columns: 1fr;
            gap: 21px;
          }

          .xaaj-b2b-enquiry-full-field {
            margin-top: 21px;
          }
        }

        @media (max-width: 430px) {
          .xaaj-b2b-enquiry-page {
            padding: 28px 10px 48px;
          }

          .xaaj-b2b-enquiry-shell {
            padding: 30px 15px 22px;
          }

          .xaaj-b2b-enquiry-heading h1 {
            font-size: 39px;
          }

          .xaaj-b2b-enquiry-eyebrow {
            gap: 10px;
            font-size: 8.5px;
            letter-spacing: 1.7px;
          }

          .xaaj-b2b-enquiry-eyebrow::before,
          .xaaj-b2b-enquiry-eyebrow::after {
            width: 25px;
          }
        }
      `})]})}function cm(){let{login:e,register:t,verifyEmail:n,resendVerification:r,forgotPassword:i,verifyResetOtp:a,resetPassword:o,logout:s,user:c}=np(),{cart:l,total:u,clearCart:d,loadProducts:f}=sp(),p=cu(),m=p.pathname,h=du();(0,_.useLayoutEffect)(()=>{let e=()=>{try{let e=Ac.get();e&&(typeof e.scrollTop==`function`&&e.scrollTop(0),typeof e.scrollTo==`function`&&e.scrollTo(0,!0))}catch(e){console.debug(`ScrollSmoother reset skipped:`,e)}window.scrollTo({top:0,left:0,behavior:`auto`}),document.documentElement.scrollTop=0,document.body.scrollTop=0};try{`scrollRestoration`in window.history&&(window.history.scrollRestoration=`manual`)}catch{}e();let t=window.requestAnimationFrame(e),n=window.setTimeout(e,60);try{Zs.refresh()}catch{}return()=>{window.cancelAnimationFrame(t),window.clearTimeout(n)}},[p.pathname,p.search]);let g=new URLSearchParams(p.search).get(`xaajPreview`)===`1`,v=g||Lp;(0,_.useEffect)(()=>{g&&(Lp=!0)},[g]);let[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(``),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(``),[D,O]=(0,_.useState)(!1),[k,A]=(0,_.useState)(!1),[j,M]=(0,_.useState)(``),[N,P]=(0,_.useState)(``),[F,I]=(0,_.useState)(``),[ee,L]=(0,_.useState)(``),[te,R]=(0,_.useState)(``),[ne,re]=(0,_.useState)(``),[z,ie]=(0,_.useState)(``),[ae,oe]=(0,_.useState)(``),[B,se]=(0,_.useState)(!1),[ce,V]=(0,_.useState)(``),[H,U]=(0,_.useState)(``),[le,ue]=(0,_.useState)(``),[de,fe]=(0,_.useState)(!1),[pe,me]=(0,_.useState)(!1),[he,W]=(0,_.useState)(``),[ge,G]=(0,_.useState)(``),[_e,ve]=(0,_.useState)(``),[ye,be]=(0,_.useState)(``),[xe,Se]=(0,_.useState)(()=>window.sessionStorage.getItem(`xaaj-reset-token`)||``),[Ce,we]=(0,_.useState)(``),[Te,Ee]=(0,_.useState)(``),[K,De]=(0,_.useState)(!1),[Oe,ke]=(0,_.useState)(``),[Ae,q]=(0,_.useState)(``),[je,Me]=(0,_.useState)(``),[Ne,Pe]=(0,_.useState)(``),[Fe,Ie]=(0,_.useState)(``),[Le,Re]=(0,_.useState)(``),[ze,Be]=(0,_.useState)(``),[Ve,He]=(0,_.useState)(``),[Ue,We]=(0,_.useState)(``),[Ge,Ke]=(0,_.useState)(!1),[qe,Je]=(0,_.useState)(``),[Ye,Xe]=(0,_.useState)(`razorpay`),[Ze,Qe]=(0,_.useState)([]),[$e,et]=(0,_.useState)(!1),[tt,nt]=(0,_.useState)(``),[rt,it]=(0,_.useState)(``),[at,ot]=(0,_.useState)(null),[st,ct]=(0,_.useState)(0),[lt,ut]=(0,_.useState)(``),[dt,ft]=(0,_.useState)(!1),[pt,mt]=(0,_.useState)(``),[ht,gt]=(0,_.useState)(``),_t=(e,t)=>{ot({orderId:e?._id||e?.id,productId:t?.product,productName:t?.name||`Product`,image:t?.image||``}),ct(0),ut(``),mt(``),gt(``)},vt=()=>{dt||(ot(null),ct(0),ut(``),mt(``),gt(``))},yt=async e=>{if(e.preventDefault(),at?.orderId&&at?.productId){if(!st){mt(`Please select a rating from 1 to 5 stars.`);return}try{ft(!0),mt(``),gt(``);let e=await Xf.create({orderId:at.orderId,productId:at.productId,rating:st,comment:lt});Qe(t=>t.map(t=>{let n=t?._id||t?.id;return String(n)===String(at.orderId)?{...t,items:Array.isArray(t.items)?t.items.map(t=>String(t.product)===String(at.productId)?{...t,reviewSubmitted:!0,reviewId:e?.review?._id||e?.data?.review?._id||null,reviewedAt:new Date().toISOString()}:t):t.items}:t})),await f(),gt(e?.message||`Thank you. Your review has been submitted.`),window.setTimeout(()=>{ot(null),ct(0),ut(``),gt(``)},900)}catch(e){console.error(`Review submission error:`,e),mt(e?.data?.message||e?.message||`Unable to submit your review. Please try again.`)}finally{ft(!1)}}},bt=async e=>{let t=e?._id||e?.id;if(t){if(e.status!==`pending`){window.alert(`This order can no longer be cancelled online.

Please contact Customer Care at customercare@xaaj.in or +91 9899446117.`);return}if(window.confirm(`Are you sure you want to cancel Order #${String(t).slice(-8).toUpperCase()}?`))try{it(t),nt(``);let e=await Q(`/orders/${t}/cancel`,{method:`PATCH`}),n=e?.data||e?.order;Qe(e=>e.map(e=>String(e._id||e.id)===String(t)?n||{...e,status:`cancelled`}:e)),window.alert(`Order cancelled successfully.`)}catch(e){console.error(`Order cancellation error:`,e),window.alert(e?.message||`Unable to cancel this order. Please contact Customer Care at customercare@xaaj.in or +91 9899446117.`)}finally{it(``)}}};(0,_.useEffect)(()=>{if(!c){Qe([]);return}let e=!1;async function t(){try{et(!0),nt(``);let t=await Yf.list(),n=t?.data||t?.orders||[];e||Qe(Array.isArray(n)?n:[])}catch(t){e||(console.error(`Orders load error:`,t),nt(t?.message||`Unable to load your orders.`))}finally{e||et(!1)}}return t(),()=>{e=!0}},[c]),(0,_.useEffect)(()=>{if(!c)return;let e=c.addresses?.[0];c.email&&Me(c.email),c.name&&!Ne&&Pe(c.name),e&&(e.name&&!Ne&&Pe(e.name),e.phone&&!Fe&&Ie(e.phone),e.line1&&!Le&&Re(e.line1),e.city&&!ze&&Be(e.city),e.state&&!Ve&&He(e.state),e.postalCode&&!Ue&&We(e.postalCode))},[c]);let xt=()=>new Promise((e,t)=>{if(window.Razorpay)return e();let n=document.querySelector(`script[data-razorpay-checkout]`);if(n){n.addEventListener(`load`,e,{once:!0}),n.addEventListener(`error`,t,{once:!0});return}let r=document.createElement(`script`);r.src=`https://checkout.razorpay.com/v1/checkout.js`,r.async=!0,r.dataset.razorpayCheckout=`true`,r.onload=e,r.onerror=()=>t(Error(`Unable to load Razorpay.`)),document.body.appendChild(r)}),St=async e=>{if(e.preventDefault(),v){Je(`Admin Preview Mode: checkout and ordering are disabled.`);return}if(Je(``),!c){h(`/account`);return}if(!l.length){Je(`Your cart is empty.`);return}if(!je.trim()||!Ne.trim()||!Fe.trim()||!Le.trim()||!ze.trim()||!Ve.trim()||!Ue.trim()){Je(`Please fill in all checkout details.`);return}if(Fe.replace(/\D/g,``).length!==10){Je(`Please enter a valid 10-digit phone number.`);return}if(!/^\d{6}$/.test(Ue.trim())){Je(`Please enter a valid 6-digit PIN code.`);return}try{Ke(!0);let e={items:l.map(e=>({product:e.id,quantity:e.qty||1})),paymentMethod:Ye,shippingAddress:{name:Ne.trim(),email:je.trim().toLowerCase(),phone:Fe.trim(),address:Le.trim(),city:ze.trim(),state:Ve.trim(),pin:Ue.trim()}};if(Ye===`cod`){let t=await Q(`/orders`,{method:`POST`,body:JSON.stringify(e)});if(!t?.success)throw Error(t?.message||`Unable to place COD order.`);window.sessionStorage.setItem(`xaaj-payment-success`,`true`),window.sessionStorage.setItem(`xaaj-last-order`,JSON.stringify(t.data)),d(),h(`/order-confirmation`);return}await xt();let t=await Q(`/payment/create-order`,{method:`POST`,body:JSON.stringify({...e,paymentMethod:`razorpay`})}),n=t?.data;if(!n?.id||!n?.keyId)throw Error(t?.message||`Unable to create Razorpay order.`);let r={key:n.keyId,amount:n.amount,currency:n.currency||`INR`,name:`XAAJ`,description:`XAAJ Store Order`,order_id:n.id,prefill:{name:Ne.trim(),email:je.trim().toLowerCase(),contact:Fe.trim()},notes:{address:Le.trim(),city:ze.trim(),state:Ve.trim(),pin:Ue.trim()},theme:{color:`#2b2a27`},handler:async e=>{try{let t=await Q(`/payment/verify`,{method:`POST`,body:JSON.stringify(e)});if(!t?.success)throw Error(t?.message||`Payment verification failed.`);window.sessionStorage.setItem(`xaaj-payment-success`,`true`),window.sessionStorage.setItem(`xaaj-last-order`,JSON.stringify(t.data)),d(),h(`/order-confirmation`)}catch(e){console.error(`Payment verification error:`,e),Je(e?.message||`Payment verification failed. Please contact support.`)}finally{Ke(!1)}},modal:{ondismiss:()=>{Ke(!1)}}},i=new window.Razorpay(r);i.on(`payment.failed`,e=>{console.error(`Razorpay payment failed:`,e?.error),Je(e?.error?.description||`Payment failed. Please try again.`),Ke(!1)}),i.open()}catch(e){console.error(`Checkout error:`,e),Je(e?.message||`Unable to process your order. Please try again.`),Ke(!1)}},Ct=async t=>{if(t.preventDefault(),E(``),!y.trim()||!x){E(`Please enter your email and password.`);return}try{w(!0);let t=await e(y.trim(),x);if(!t?.success){if(t?.requiresEmailVerification){U(t.email||y.trim()),ue(``),G(``),W(`Please verify your email before signing in.`),h(`/verify-email?email=${encodeURIComponent(t.email||y.trim())}`);return}E(t?.message||`Invalid email or password.`);return}if(t?.requiresEmailVerification){let e=t.email||y.trim();U(e),ue(``),G(``),W(`Please verify your email first.`),h(`/verify-email?email=${encodeURIComponent(e)}`);return}(t?.user||null)?.role===`admin`?h(`/admin`,{replace:!0}):h(`/`,{replace:!0})}catch(e){console.error(`Login error:`,e),E(e?.message||`Unable to login. Please try again.`)}finally{w(!1)}},wt=async e=>{if(e.preventDefault(),V(``),!j.trim()||!N.trim()||!F||!ee.trim()||!te.trim()||!ne.trim()||!z.trim()||!ae.trim()){V(`Please fill in all registration details.`);return}if(F.length<8){V(`Password must be at least 8 characters.`);return}if(ee.replace(/\D/g,``).length<10){V(`Please enter a valid phone number.`);return}if(!/^\d{6}$/.test(ae)){V(`PIN code must be 6 digits.`);return}try{se(!0);let e=await t({name:j.trim(),email:N.trim(),password:F,phone:ee.trim(),address:te.trim(),city:ne.trim(),state:z.trim(),pin:ae.trim()});if(!e?.success){V(e?.message||`Unable to create your account.`);return}let n=e.email||N.trim();U(n),ue(``),G(``),W(`We sent a 6-digit verification code to your email. It is valid for 10 minutes.`),h(`/verify-email?email=${encodeURIComponent(n)}`)}catch(e){console.error(`Registration error:`,e),V(e?.message||`Unable to create your account. Please try again.`)}finally{se(!1)}},Tt=async e=>{e.preventDefault(),G(``),W(``);let t=H.trim()||new URLSearchParams(p.search).get(`email`)||``;if(!t){G(`Email address is required.`);return}if(!/^\d{6}$/.test(le)){G(`Please enter the 6-digit OTP.`);return}try{fe(!0);let e=await n(t,le);if(!e?.success){G(e?.message||`Invalid or expired OTP.`);return}h(`/`)}catch(e){console.error(`Email verification error:`,e),G(e?.message||`Unable to verify email. Please try again.`)}finally{fe(!1)}},Et=async()=>{G(``),W(``);let e=H.trim()||new URLSearchParams(p.search).get(`email`)||``;if(!e){G(`Email address is required.`);return}try{me(!0);let t=await r(e);if(!t?.success){G(t?.message||`Unable to resend OTP.`);return}W(`A new OTP has been sent to your email. It is valid for 10 minutes.`)}catch(e){console.error(`Resend OTP error:`,e),G(e?.message||`Unable to resend OTP. Please try again.`)}finally{me(!1)}},Dt=async e=>{e.preventDefault(),ke(``),q(``);let t=_e.trim().toLowerCase();if(!t){ke(`Please enter your email address.`);return}try{De(!0);let e=await i(t);if(!e?.success){ke(e?.message||`Unable to send password reset OTP.`);return}ve(t),be(``),Se(``),window.sessionStorage.removeItem(`xaaj-reset-token`),q(`If the account exists, a 6-digit OTP has been sent to your email. It is valid for 10 minutes.`),h(`/reset-password?email=${encodeURIComponent(t)}`)}catch(e){console.error(`Forgot password error:`,e),ke(e?.message||`Unable to send password reset OTP. Please try again.`)}finally{De(!1)}},Ot=async e=>{e.preventDefault(),ke(``),q(``);let t=_e.trim()||new URLSearchParams(p.search).get(`email`)||``;if(!t){ke(`Email address is required.`);return}if(!/^\d{6}$/.test(ye)){ke(`Please enter the 6-digit OTP.`);return}try{De(!0);let e=await a(t,ye);if(!e?.success||!e?.resetToken){ke(e?.message||`Invalid or expired OTP.`);return}ve(t),Se(e.resetToken),window.sessionStorage.setItem(`xaaj-reset-token`,e.resetToken),be(``),q(`OTP verified. Please create your new password.`)}catch(e){console.error(`Reset OTP verification error:`,e),ke(e?.message||`Unable to verify OTP. Please try again.`)}finally{De(!1)}},kt=async e=>{e.preventDefault(),ke(``),q(``);let t=_e.trim()||new URLSearchParams(p.search).get(`email`)||``,n=xe||window.sessionStorage.getItem(`xaaj-reset-token`)||``;if(!t||!n){ke(`Your password reset session is missing. Please request a new OTP.`);return}if(Ce.length<8){ke(`Password must be at least 8 characters.`);return}if(Ce!==Te){ke(`Passwords do not match.`);return}try{De(!0);let e=await o(t,n,Ce,Te);if(!e?.success){ke(e?.message||`Unable to reset your password.`);return}window.sessionStorage.removeItem(`xaaj-reset-token`),Se(``),be(``),we(``),Ee(``),q(`Password updated successfully. You can now login.`),b(t),S(``),h(`/account`)}catch(e){console.error(`Reset password error:`,e),ke(e?.message||`Unable to reset your password. Please try again.`)}finally{De(!1)}};if(m===`/blog`)return(0,$.jsx)(im,{});if(m.startsWith(`/blog/`)){let e=decodeURIComponent(m.slice(6));return(0,$.jsx)(am,{slug:e})}if(m===`/admin`)return(0,$.jsx)(bp,{});if(m===`/enquiry`)return(0,$.jsx)(sm,{});if(m===`/shop`)return(0,$.jsx)(Gp,{});if(m.startsWith(`/product/`))return(0,$.jsx)(Kp,{});if(m===`/cart`)return(0,$.jsx)(qp,{});if(m===`/wishlist`)return(0,$.jsx)(qp,{wishlist:!0});if(m===`/story`||m===`/about`)return(0,$.jsx)(om,{});if(m===`/checkout`)return v?(0,$.jsxs)(Xp,{eyebrow:`Admin Preview Mode`,title:`Checkout is disabled.`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`You are viewing the XAAJ storefront from the Admin Live Store preview. Product purchasing, checkout and payment are disabled in this mode.`}),(0,$.jsx)(Fp,{to:`/`,onClick:()=>{window.sessionStorage.removeItem(`xaaj-admin-preview`)},children:`Back to store`})]}):c?(0,$.jsx)(Xp,{eyebrow:`Almost home`,title:`Checkout`,children:(0,$.jsxs)(`form`,{className:`checkout-form`,onSubmit:St,children:[(0,$.jsx)(`input`,{value:je,onChange:e=>Me(e.target.value),placeholder:`Email address`,type:`email`,autoComplete:`email`,required:!0}),(0,$.jsx)(`input`,{value:Ne,onChange:e=>Pe(e.target.value),placeholder:`Full name`,autoComplete:`name`,required:!0}),(0,$.jsx)(`input`,{value:Fe,onChange:e=>Ie(e.target.value.replace(/\D/g,``).slice(0,10)),placeholder:`Phone number`,type:`tel`,inputMode:`numeric`,autoComplete:`tel`,required:!0}),(0,$.jsx)(`input`,{value:Le,onChange:e=>Re(e.target.value),placeholder:`Full address`,autoComplete:`street-address`,required:!0}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`input`,{value:ze,onChange:e=>Be(e.target.value),placeholder:`City`,autoComplete:`address-level2`,required:!0}),(0,$.jsx)(`input`,{value:Ve,onChange:e=>He(e.target.value),placeholder:`State`,autoComplete:`address-level1`,required:!0})]}),(0,$.jsx)(`input`,{value:Ue,onChange:e=>We(e.target.value.replace(/\D/g,``).slice(0,6)),placeholder:`PIN code`,inputMode:`numeric`,autoComplete:`postal-code`,required:!0}),(0,$.jsxs)(`div`,{className:`checkout-payment-method`,children:[(0,$.jsx)(`h3`,{children:`Payment Method`}),(0,$.jsxs)(`label`,{className:`payment-option ${Ye===`razorpay`?`selected`:``}`,children:[(0,$.jsx)(`input`,{type:`radio`,name:`paymentMethod`,value:`razorpay`,checked:Ye===`razorpay`,onChange:()=>Xe(`razorpay`)}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Online Payment`}),(0,$.jsx)(`small`,{children:`Pay securely using Razorpay`})]})]}),(0,$.jsxs)(`label`,{className:`payment-option ${Ye===`cod`?`selected`:``}`,children:[(0,$.jsx)(`input`,{type:`radio`,name:`paymentMethod`,value:`cod`,checked:Ye===`cod`,onChange:()=>Xe(`cod`)}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Cash on Delivery`}),(0,$.jsx)(`small`,{children:`Pay when your order is delivered`})]})]})]}),qe&&(0,$.jsx)(`p`,{style:{color:`#b42318`,margin:`0`},children:qe}),(0,$.jsxs)(`button`,{type:`submit`,className:`button`,disabled:Ge,children:[Ge?Ye===`cod`?`Placing Order...`:`Opening Razorpay...`:Ye===`cod`?`Place Order - COD`:`Pay securely`,(0,$.jsx)(Ud,{size:15})]})]})}):(0,$.jsxs)(Xp,{eyebrow:`Sign in required`,title:`Please sign in to checkout.`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`Your cart is saved. Sign in to continue securely with your order and saved address.`}),(0,$.jsx)(Fp,{to:`/account`,children:`Sign in to continue`})]});if(m===`/order-confirmation`)return(0,$.jsxs)(Xp,{eyebrow:`Thank you`,title:`Your order is on its way.`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`We have sent a confirmation to your email. Your pieces will be carefully packed and dispatched soon.`}),(0,$.jsx)(Fp,{to:`/shop`,children:`Continue shopping`})]});if(m===`/verify-email`){let e=new URLSearchParams(p.search).get(`email`)||``,t=H||e;return(0,$.jsxs)(Xp,{eyebrow:`Email verification`,title:`Verify your email.`,children:[(0,$.jsxs)(`p`,{className:`lead`,children:[`Enter the 6-digit OTP sent to`,` `,(0,$.jsx)(`strong`,{children:t||`your email`}),`. The OTP is valid for 10 minutes.`]}),(0,$.jsxs)(`form`,{className:`checkout-form`,onSubmit:Tt,children:[(0,$.jsx)(`input`,{value:t,onChange:e=>{U(e.target.value)},type:`email`,placeholder:`Email address`,autoComplete:`email`,required:!0}),(0,$.jsx)(`input`,{value:le,onChange:e=>ue(e.target.value.replace(/\D/g,``).slice(0,6)),placeholder:`6-digit OTP`,inputMode:`numeric`,autoComplete:`one-time-code`,maxLength:6,required:!0}),ge&&(0,$.jsx)(`p`,{style:{color:`#b42318`,margin:`0`},children:ge}),he&&(0,$.jsx)(`p`,{style:{margin:`0`},children:he}),(0,$.jsxs)(`button`,{type:`submit`,className:`button`,disabled:de,children:[de?`Verifying...`:`Verify email`,(0,$.jsx)(Ud,{size:15})]}),(0,$.jsxs)(`button`,{type:`button`,className:`button button-light`,onClick:Et,disabled:pe,children:[pe?`Sending OTP...`:`Resend OTP`,(0,$.jsx)(Ud,{size:15})]})]})]})}if(m===`/forgot-password`){let e=new URLSearchParams(p.search).get(`email`)||``;return(0,$.jsxs)(Xp,{eyebrow:`Account security`,title:`Forgot your password?`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`Enter your registered email address and we will send you a 6-digit OTP to reset your password.`}),(0,$.jsxs)(`form`,{className:`checkout-form`,onSubmit:Dt,children:[(0,$.jsx)(`input`,{value:_e||e,onChange:e=>ve(e.target.value),type:`email`,placeholder:`Email address`,autoComplete:`email`,required:!0}),Oe&&(0,$.jsx)(`p`,{style:{color:`#b42318`,margin:`0`},children:Oe}),Ae&&(0,$.jsx)(`p`,{style:{margin:`0`},children:Ae}),(0,$.jsxs)(`button`,{type:`submit`,className:`button`,disabled:K,children:[K?`Sending OTP...`:`Send OTP`,(0,$.jsx)(Ud,{size:15})]}),(0,$.jsxs)(`button`,{type:`button`,className:`button button-light`,onClick:()=>h(`/account`),children:[`Back to login`,(0,$.jsx)(Ud,{size:15})]})]})]})}if(m===`/reset-password`){let e=new URLSearchParams(p.search).get(`email`)||``,t=_e||e;return xe||window.sessionStorage.getItem(`xaaj-reset-token`)?(0,$.jsxs)(Xp,{eyebrow:`Password reset`,title:`Create a new password.`,children:[(0,$.jsxs)(`p`,{className:`lead`,children:[`Create a new password for`,` `,(0,$.jsx)(`strong`,{children:t}),`.`]}),(0,$.jsxs)(`form`,{className:`checkout-form`,onSubmit:kt,children:[(0,$.jsx)(`input`,{value:Ce,onChange:e=>we(e.target.value),type:`password`,placeholder:`New password (minimum 8 characters)`,autoComplete:`new-password`,required:!0}),(0,$.jsx)(`input`,{value:Te,onChange:e=>Ee(e.target.value),type:`password`,placeholder:`Confirm new password`,autoComplete:`new-password`,required:!0}),Oe&&(0,$.jsx)(`p`,{style:{color:`#b42318`,margin:`0`},children:Oe}),Ae&&(0,$.jsx)(`p`,{style:{margin:`0`},children:Ae}),(0,$.jsxs)(`button`,{type:`submit`,className:`button`,disabled:K,children:[K?`Updating password...`:`Update password`,(0,$.jsx)(Ud,{size:15})]})]})]}):(0,$.jsxs)(Xp,{eyebrow:`Password reset`,title:`Verify your email.`,children:[(0,$.jsxs)(`p`,{className:`lead`,children:[`Enter the 6-digit OTP sent to`,` `,(0,$.jsx)(`strong`,{children:t||`your email`}),`. The OTP is valid for 10 minutes.`]}),(0,$.jsxs)(`form`,{className:`checkout-form`,onSubmit:Ot,children:[(0,$.jsx)(`input`,{value:t,onChange:e=>ve(e.target.value),type:`email`,placeholder:`Email address`,autoComplete:`email`,required:!0}),(0,$.jsx)(`input`,{value:ye,onChange:e=>be(e.target.value.replace(/\D/g,``).slice(0,6)),placeholder:`6-digit OTP`,inputMode:`numeric`,autoComplete:`one-time-code`,maxLength:6,required:!0}),Oe&&(0,$.jsx)(`p`,{style:{color:`#b42318`,margin:`0`},children:Oe}),Ae&&(0,$.jsx)(`p`,{style:{margin:`0`},children:Ae}),(0,$.jsxs)(`button`,{type:`submit`,className:`button`,disabled:K,children:[K?`Verifying...`:`Verify OTP`,(0,$.jsx)(Ud,{size:15})]}),(0,$.jsxs)(`button`,{type:`button`,className:`button button-light`,onClick:()=>h(`/forgot-password`),children:[`Request new OTP`,(0,$.jsx)(Ud,{size:15})]})]})]})}return m===`/account`?c?.role===`admin`?(0,$.jsx)(Nu,{to:`/admin`,replace:!0}):c?(0,$.jsxs)(Xp,{eyebrow:`Your XAAJ account`,title:`Welcome, ${c.name||`Customer`}.`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`Your account is verified and ready for checkout.`}),c.email&&(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`strong`,{children:`Email:`}),` `,c.email]}),c.addresses?.[0]&&(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`strong`,{children:`Saved address:`}),` `,c.addresses[0].line1,`,`,` `,c.addresses[0].city,`,`,` `,c.addresses[0].state,` -`,` `,c.addresses[0].postalCode]}),(0,$.jsx)(`style`,{children:`
            .xaaj-account-actions {
              display: flex;
              align-items: center;
              gap: 12px;
              flex-wrap: wrap;
              margin-top: 24px;
            }

            .xaaj-account-action {
              min-height: 46px;
              padding: 0 19px !important;
              border-radius: 999px !important;
              border: 1px solid rgba(41,40,37,.14) !important;
              box-shadow: 0 6px 18px rgba(41,40,37,.06);
              transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
            }

            .xaaj-account-action:hover {
              transform: translateY(-1px);
              box-shadow: 0 10px 24px rgba(41,40,37,.10);
            }

            .xaaj-account-action-light {
              background: #fff !important;
            }

            .xaaj-account-action-danger {
              color: #b42318 !important;
              border-color: rgba(180,35,24,.20) !important;
              background: #fff !important;
            }

            .xaaj-account-action-danger:hover {
              color: #fff !important;
              background: #b42318 !important;
              border-color: #b42318 !important;
            }

            .xaaj-orders-heading {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              gap: 20px;
              flex-wrap: wrap;
            }

            .xaaj-orders-heading h2 { margin-bottom: 0; }

            .xaaj-orders-count {
              display: inline-flex;
              align-items: center;
              min-height: 30px;
              padding: 0 11px;
              border-radius: 999px;
              background: rgba(41,40,37,.055);
              border: 1px solid rgba(41,40,37,.08);
              font-size: 11px;
              font-weight: 700;
              letter-spacing: .06em;
              text-transform: uppercase;
            }

            @media (max-width: 640px) {
              .xaaj-account-actions {
                display: grid;
                grid-template-columns: 1fr;
              }

              .xaaj-account-action {
                width: 100%;
                justify-content: center;
              }
            }
          `}),(0,$.jsxs)(`div`,{className:`xaaj-account-actions`,children:[(0,$.jsx)(Fp,{to:`/checkout`,className:`xaaj-account-action`,children:`Continue to checkout`}),(0,$.jsxs)(`button`,{type:`button`,className:`button button-light xaaj-account-action xaaj-account-action-light`,onClick:()=>{window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},children:[`My Orders`,(0,$.jsx)(Ud,{size:15})]}),(0,$.jsx)(`button`,{type:`button`,className:`button button-light xaaj-account-action xaaj-account-action-danger`,onClick:async()=>{await s(),h(`/account`)},children:`Logout`})]}),(0,$.jsxs)(`div`,{style:{marginTop:`40px`,paddingTop:`28px`,borderTop:`1px solid rgba(0,0,0,.12)`},children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Order history`}),(0,$.jsxs)(`div`,{className:`xaaj-orders-heading`,children:[(0,$.jsx)(`h2`,{style:{marginTop:`8px`},children:`My Orders`}),(0,$.jsxs)(`span`,{className:`xaaj-orders-count`,children:[Ze.length,` `,Ze.length===1?`Order`:`Orders`]})]}),$e&&(0,$.jsx)(`p`,{children:`Loading your orders...`}),tt&&(0,$.jsx)(`p`,{style:{color:`#b42318`},children:tt}),!$e&&!tt&&Ze.length===0&&(0,$.jsx)(`p`,{children:`You haven't placed any orders yet.`}),!$e&&Ze.length>0&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
                    .xaaj-account-actions {
                      display: flex;
                      align-items: center;
                      gap: 12px;
                      flex-wrap: wrap;
                      margin-top: 24px;
                    }

                    .xaaj-account-action {
                      min-height: 46px;
                      padding: 0 19px;
                      border-radius: 999px !important;
                      border: 1px solid rgba(41,40,37,.14);
                      box-shadow: 0 6px 18px rgba(41,40,37,.06);
                      transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
                    }

                    .xaaj-account-action:hover {
                      transform: translateY(-1px);
                      box-shadow: 0 10px 24px rgba(41,40,37,.10);
                    }

                    .xaaj-account-action-light {
                      background: #fff;
                    }

                    .xaaj-account-action-danger {
                      color: #b42318;
                      border-color: rgba(180,35,24,.20);
                      background: #fff;
                    }

                    .xaaj-account-action-danger:hover {
                      color: #fff;
                      background: #b42318;
                      border-color: #b42318;
                    }

                    .xaaj-orders-heading {
                      display: flex;
                      align-items: flex-end;
                      justify-content: space-between;
                      gap: 20px;
                      flex-wrap: wrap;
                    }

                    .xaaj-orders-heading h2 {
                      margin-bottom: 0;
                    }

                    .xaaj-orders-count {
                      display: inline-flex;
                      align-items: center;
                      min-height: 30px;
                      padding: 0 11px;
                      border-radius: 999px;
                      background: rgba(41,40,37,.055);
                      border: 1px solid rgba(41,40,37,.08);
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: .06em;
                      text-transform: uppercase;
                    }

                    .xaaj-orders-grid {
                      display: grid;
                      grid-template-columns: 1fr;
                      gap: 20px;
                      margin-top: 22px;
                    }

                    .xaaj-order-card {
                      position: relative;
                      overflow: hidden;
                      padding: 24px;
                      border: 1px solid rgba(41,40,37,.10);
                      border-radius: 20px;
                      background: linear-gradient(145deg, #ffffff 0%, #faf9f6 100%);
                      box-shadow: 0 12px 35px rgba(41,40,37,.07);
                      transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
                    }

                    .xaaj-order-card:hover {
                      transform: translateY(-2px);
                      border-color: rgba(41,40,37,.16);
                      box-shadow: 0 18px 45px rgba(41,40,37,.10);
                    }

                    .xaaj-order-card::before {
                      content: '';
                      position: absolute;
                      inset: 0 0 auto 0;
                      height: 3px;
                      background: currentColor;
                      opacity: .12;
                    }

                    .xaaj-order-top {
                      display: flex;
                      align-items: flex-start;
                      justify-content: space-between;
                      gap: 18px;
                      padding-bottom: 18px;
                      border-bottom: 1px solid rgba(0,0,0,.07);
                    }

                    .xaaj-order-number {
                      margin: 0;
                      font-size: 14px;
                      letter-spacing: .07em;
                      text-transform: uppercase;
                    }

                    .xaaj-order-total {
                      margin: 0;
                      font-size: 19px;
                      letter-spacing: -.02em;
                      white-space: nowrap;
                    }

                    .xaaj-order-meta {
                      display: grid;
                      grid-template-columns: repeat(3, minmax(0, 1fr));
                      gap: 10px;
                      margin-top: 18px;
                    }

                    .xaaj-order-meta-item {
                      min-width: 0;
                      padding: 13px 14px;
                      border: 1px solid rgba(0,0,0,.065);
                      border-radius: 14px;
                      background: rgba(255,255,255,.68);
                    }

                    .xaaj-order-meta-label {
                      display: block;
                      margin-bottom: 5px;
                      font-size: 10px;
                      letter-spacing: .10em;
                      text-transform: uppercase;
                      opacity: .55;
                    }

                    .xaaj-order-meta-value {
                      font-size: 13px;
                      font-weight: 600;
                      text-transform: capitalize;
                    }

                    .xaaj-order-summary {
                      margin-top: 18px;
                      padding: 16px 17px;
                      border-radius: 15px;
                      background: rgba(41,40,37,.035);
                    }

                    .xaaj-order-summary-row {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      gap: 15px;
                      padding: 6px 0;
                      font-size: 13px;
                    }

                    .xaaj-order-summary-row.total {
                      margin-top: 7px;
                      padding-top: 12px;
                      border-top: 1px solid rgba(0,0,0,.09);
                      font-size: 15px;
                    }

                    .xaaj-free-shipping {
                      font-weight: 700;
                    }

                    .xaaj-order-tracking {
                      display: flex;
                      align-items: center;
                      gap: 10px;
                      margin-top: 16px;
                      padding: 12px 14px;
                      border: 1px solid rgba(0,0,0,.07);
                      border-radius: 14px;
                      font-size: 12px;
                    }

                    .xaaj-order-actions {
                      display: flex;
                      align-items: center;
                      gap: 10px;
                      flex-wrap: wrap;
                      margin-top: 18px;
                    }

                    .xaaj-cancel-button {
                      min-height: 44px;
                      padding: 0 18px;
                      border: 1px solid rgba(180,35,24,.28);
                      border-radius: 999px;
                      background: #fff;
                      color: #b42318;
                      font: inherit;
                      font-size: 12px;
                      font-weight: 700;
                      letter-spacing: .02em;
                      cursor: pointer;
                      transition: all .2s ease;
                    }

                    .xaaj-cancel-button:hover:not(:disabled) {
                      background: #b42318;
                      color: #fff;
                      border-color: #b42318;
                      transform: translateY(-1px);
                    }

                    .xaaj-cancel-button:disabled {
                      cursor: wait;
                      opacity: .55;
                    }

                    .xaaj-cancel-help {
                      margin: 0;
                      padding: 13px 15px;
                      border: 1px solid rgba(0,0,0,.07);
                      border-radius: 14px;
                      background: rgba(0,0,0,.025);
                      font-size: 12px;
                      line-height: 1.55;
                    }

                    .xaaj-cancel-help strong {
                      display: block;
                      margin-bottom: 3px;
                      font-size: 12px;
                    }

                    .xaaj-cancel-help a {
                      color: inherit;
                      font-weight: 600;
                    }

                    .xaaj-feedback-list {
                      display: grid;
                      gap: 10px;
                      width: 100%;
                      margin-top: 4px;
                      padding-top: 4px;
                    }

                    .xaaj-feedback-item {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      gap: 14px;
                      padding: 12px 13px;
                      border: 1px solid rgba(41,40,37,.08);
                      border-radius: 15px;
                      background: rgba(255,255,255,.72);
                    }

                    .xaaj-feedback-product {
                      display: flex;
                      align-items: center;
                      gap: 11px;
                      min-width: 0;
                    }

                    .xaaj-feedback-product img,
                    .xaaj-feedback-placeholder {
                      width: 46px;
                      height: 46px;
                      flex: 0 0 46px;
                      border-radius: 10px;
                      object-fit: cover;
                      background: #f0ece5;
                    }

                    .xaaj-feedback-placeholder {
                      display: grid;
                      place-items: center;
                      font-size: 9px;
                      letter-spacing: .12em;
                      color: #77736b;
                    }

                    .xaaj-feedback-product strong {
                      display: block;
                      max-width: 280px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      font-size: 13px;
                    }

                    .xaaj-feedback-product small {
                      display: block;
                      margin-top: 3px;
                      color: #77736b;
                      font-size: 11px;
                    }

                    .xaaj-feedback-button {
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      gap: 7px;
                      min-height: 38px;
                      padding: 0 14px;
                      border: 1px solid rgba(41,40,37,.18);
                      border-radius: 999px;
                      background: #292824;
                      color: #fff;
                      font: inherit;
                      font-size: 11px;
                      font-weight: 700;
                      cursor: pointer;
                      white-space: nowrap;
                    }

                    .xaaj-reviewed-badge {
                      display: inline-flex;
                      align-items: center;
                      gap: 6px;
                      min-height: 36px;
                      padding: 0 12px;
                      border: 1px solid rgba(61,105,77,.18);
                      border-radius: 999px;
                      background: rgba(61,105,77,.07);
                      color: #3d694d;
                      font-size: 11px;
                      font-weight: 700;
                      white-space: nowrap;
                    }

                    @media (max-width: 640px) {
                      .xaaj-order-card {
                        padding: 18px;
                        border-radius: 17px;
                      }

                      .xaaj-order-top {
                        gap: 10px;
                      }

                      .xaaj-order-total {
                        font-size: 17px;
                      }

                      .xaaj-order-meta {
                        grid-template-columns: 1fr 1fr;
                      }

                      .xaaj-order-meta-item:last-child {
                        grid-column: 1 / -1;
                      }
                    }
                  `}),(0,$.jsx)(`div`,{className:`xaaj-orders-grid`,children:Ze.map(e=>{let t=e._id||e.id,n=Number(e.subtotal||0),r=e.shippingFee!==void 0&&e.shippingFee!==null?Number(e.shippingFee):n>=1e3?0:99,i=Number(e.total??n+r-Number(e.discount||0)),a=String(e.status||`pending`),o=a.replaceAll(`_`,` `),s=String(e.paymentStatus||`pending`).replaceAll(`_`,` `);return(0,$.jsxs)(`article`,{className:`xaaj-order-card`,children:[(0,$.jsxs)(`div`,{className:`xaaj-order-top`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`p`,{className:`xaaj-order-number`,children:[`Order #`,String(t||``).slice(-8).toUpperCase()]}),(0,$.jsx)(`small`,{style:{opacity:.58},children:e.createdAt?new Date(e.createdAt).toLocaleDateString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}):``})]}),(0,$.jsx)(`strong`,{className:`xaaj-order-total`,children:Cp(i)})]}),(0,$.jsxs)(`div`,{className:`xaaj-order-meta`,children:[(0,$.jsxs)(`div`,{className:`xaaj-order-meta-item`,children:[(0,$.jsx)(`span`,{className:`xaaj-order-meta-label`,children:`Status`}),(0,$.jsx)(`span`,{className:`xaaj-order-meta-value`,children:o})]}),(0,$.jsxs)(`div`,{className:`xaaj-order-meta-item`,children:[(0,$.jsx)(`span`,{className:`xaaj-order-meta-label`,children:`Payment`}),(0,$.jsx)(`span`,{className:`xaaj-order-meta-value`,children:s})]}),(0,$.jsxs)(`div`,{className:`xaaj-order-meta-item`,children:[(0,$.jsx)(`span`,{className:`xaaj-order-meta-label`,children:`Items`}),(0,$.jsxs)(`span`,{className:`xaaj-order-meta-value`,children:[e.items?.length||0,` item(s)`]})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-order-summary`,children:[(0,$.jsxs)(`div`,{className:`xaaj-order-summary-row`,children:[(0,$.jsx)(`span`,{children:`Subtotal`}),(0,$.jsx)(`strong`,{children:Cp(n)})]}),(0,$.jsxs)(`div`,{className:`xaaj-order-summary-row`,children:[(0,$.jsx)(`span`,{children:`Shipping`}),(0,$.jsx)(`strong`,{className:r===0?`xaaj-free-shipping`:``,children:r===0?`FREE`:Cp(r)})]}),Number(e.discount||0)>0&&(0,$.jsxs)(`div`,{className:`xaaj-order-summary-row`,children:[(0,$.jsx)(`span`,{children:`Discount`}),(0,$.jsxs)(`strong`,{children:[`-`,Cp(e.discount)]})]}),(0,$.jsxs)(`div`,{className:`xaaj-order-summary-row total`,children:[(0,$.jsx)(`strong`,{children:`Total paid / payable`}),(0,$.jsx)(`strong`,{children:Cp(i)})]})]}),e.trackingNumber&&(0,$.jsxs)(`div`,{className:`xaaj-order-tracking`,children:[(0,$.jsx)(cf,{size:16,strokeWidth:1.5}),(0,$.jsxs)(`span`,{children:[`Tracking: `,(0,$.jsx)(`strong`,{children:e.trackingNumber}),e.courierName?` · ${e.courierName}`:``]})]}),(0,$.jsxs)(`div`,{className:`xaaj-order-actions`,children:[a===`pending`&&(0,$.jsx)(`button`,{type:`button`,className:`xaaj-cancel-button`,onClick:()=>bt(e),disabled:rt===t,children:rt===t?`Cancelling...`:`Cancel Order`}),a!==`pending`&&a!==`cancelled`&&(0,$.jsxs)(`p`,{className:`xaaj-cancel-help`,children:[(0,$.jsx)(`strong`,{children:`Cancellation unavailable online`}),`This order has moved beyond the pending stage. Please contact Customer Care for assistance.`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`a`,{href:`mailto:customercare@xaaj.in`,children:`customercare@xaaj.in`}),` · `,(0,$.jsx)(`a`,{href:`tel:+919899446117`,children:`+91 9899446117`})]}),a===`delivered`&&Array.isArray(e.items)&&(0,$.jsx)(`div`,{className:`xaaj-feedback-list`,children:e.items.map((n,r)=>(0,$.jsxs)(`div`,{className:`xaaj-feedback-item`,children:[(0,$.jsxs)(`div`,{className:`xaaj-feedback-product`,children:[n.image?(0,$.jsx)(`img`,{src:n.image,alt:n.name||`Product`}):(0,$.jsx)(`div`,{className:`xaaj-feedback-placeholder`,children:`XAAJ`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:n.name||`Product`}),(0,$.jsxs)(`small`,{children:[`Qty: `,n.quantity||1]})]})]}),n.reviewSubmitted?(0,$.jsxs)(`span`,{className:`xaaj-reviewed-badge`,children:[(0,$.jsx)(Gd,{size:14}),`Reviewed`]}):(0,$.jsxs)(`button`,{type:`button`,className:`xaaj-feedback-button`,onClick:()=>_t(e,n),children:[(0,$.jsx)(bf,{size:14}),`Give Feedback`]})]},`${t}-${n.product||r}`))})]})]},t)})})]})]}),at&&(0,$.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`xaaj-review-title`,onClick:e=>{e.target===e.currentTarget&&vt()},style:{position:`fixed`,inset:0,zIndex:99999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`,background:`rgba(35,32,28,.48)`,backdropFilter:`blur(8px)`},children:(0,$.jsxs)(`div`,{style:{position:`relative`,width:`min(100%, 480px)`,padding:`30px`,border:`1px solid #e8e0d5`,borderRadius:`24px`,background:`#fffdf9`,boxShadow:`0 30px 80px rgba(41,40,37,.22)`},children:[(0,$.jsx)(`button`,{type:`button`,onClick:vt,disabled:dt,"aria-label":`Close review`,style:{position:`absolute`,top:`15px`,right:`15px`,width:`35px`,height:`35px`,display:`grid`,placeItems:`center`,border:`1px solid #e5ddd2`,borderRadius:`50%`,background:`#fff`,color:`#292824`,cursor:`pointer`},children:(0,$.jsx)(Ef,{size:16,strokeWidth:1.5})}),(0,$.jsx)(`span`,{className:`eyebrow`,children:`Your experience`}),(0,$.jsx)(`h2`,{id:`xaaj-review-title`,style:{margin:`9px 45px 8px 0`,fontFamily:`Georgia, "Times New Roman", serif`,fontSize:`30px`,lineHeight:1.2,fontWeight:400},children:`How did you like it?`}),(0,$.jsx)(`p`,{style:{margin:`0 0 20px`,color:`#706d67`,fontSize:`14px`},children:at.productName}),(0,$.jsxs)(`form`,{onSubmit:yt,children:[(0,$.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`6px`,margin:`8px 0 18px`},children:[1,2,3,4,5].map(e=>(0,$.jsx)(`button`,{type:`button`,onClick:()=>ct(e),"aria-label":`${e} star${e>1?`s`:``}`,style:{width:`42px`,height:`42px`,border:0,background:`transparent`,color:e<=st?`#b84d32`:`#c9c1b7`,cursor:`pointer`,fontSize:`29px`,lineHeight:1},children:`★`},e))}),(0,$.jsx)(`p`,{style:{minHeight:`20px`,margin:`-5px 0 16px`,textAlign:`center`,fontSize:`12px`,color:`#77736b`},children:st?`${st} out of 5`:`Select your rating`}),(0,$.jsx)(`textarea`,{value:lt,onChange:e=>ut(e.target.value),maxLength:1e3,rows:5,placeholder:`Tell us a little about your experience (optional)`,disabled:dt,style:{width:`100%`,boxSizing:`border-box`,padding:`14px 15px`,border:`1px solid #ddd4c8`,borderRadius:`14px`,background:`#fff`,color:`#292824`,outline:`none`,resize:`vertical`,font:`inherit`,lineHeight:1.6}}),pt&&(0,$.jsx)(`p`,{style:{margin:`12px 0 0`,color:`#b42318`,fontSize:`13px`},children:pt}),ht&&(0,$.jsx)(`p`,{style:{margin:`12px 0 0`,color:`#3d694d`,fontSize:`13px`},children:ht}),(0,$.jsxs)(`button`,{type:`submit`,className:`button`,disabled:dt,style:{width:`100%`,marginTop:`18px`,justifyContent:`center`},children:[dt?`Submitting...`:`Submit review`,!dt&&(0,$.jsx)(Ud,{size:15})]})]})]})})]}):(0,$.jsx)(Xp,{auth:!0,eyebrow:`Welcome back`,title:`Sign in`,children:(0,$.jsxs)(`div`,{className:`xaaj-auth-layout`,children:[(0,$.jsxs)(`section`,{className:`xaaj-auth-editorial`,children:[(0,$.jsxs)(`div`,{className:`xaaj-auth-mark`,children:[(0,$.jsx)(`i`,{}),`XAAJ · STORIES CRAFTED IN EARTH`]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-editorial-copy`,children:[(0,$.jsx)(`span`,{className:`xaaj-auth-editorial-eyebrow`,children:`The everyday, considered`}),(0,$.jsxs)(`h2`,{children:[`Make room`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`em`,{children:`for beautiful.`})]}),(0,$.jsx)(`p`,{children:`Your saved pieces, orders and details — quietly kept in one place.`})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-editorial-footer`,children:[(0,$.jsx)(`b`,{children:`01`}),(0,$.jsx)(`span`,{className:`xaaj-auth-editorial-dot`}),`Thoughtfully made tableware`,(0,$.jsx)(`span`,{className:`xaaj-auth-editorial-dot`}),`India`]})]}),(0,$.jsx)(`section`,{className:`xaaj-auth-form-panel`,children:(0,$.jsxs)(`div`,{className:`xaaj-auth-form-inner`,children:[(0,$.jsxs)(`nav`,{className:`xaaj-auth-nav`,"aria-label":`Account navigation`,children:[(0,$.jsx)(Z,{className:`active`,to:`/account`,children:`Sign in`}),(0,$.jsx)(Z,{to:`/register`,children:`Create account`})]}),(0,$.jsx)(`span`,{className:`xaaj-auth-kicker`,children:`Welcome back`}),(0,$.jsx)(`h1`,{className:`xaaj-auth-title`,children:`Sign in.`}),(0,$.jsx)(`p`,{className:`xaaj-auth-lead`,children:`Enter your email and password to continue to your XAAJ account.`}),(0,$.jsxs)(`form`,{className:`xaaj-auth-form`,onSubmit:Ct,children:[(0,$.jsxs)(`div`,{className:`xaaj-auth-field`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-login-email`,children:`Email address`}),(0,$.jsx)(`input`,{id:`xaaj-login-email`,value:y,onChange:e=>b(e.target.value),placeholder:`you@example.com`,type:`email`,autoComplete:`email`,required:!0})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-field`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-login-password`,children:`Password`}),(0,$.jsxs)(`div`,{className:`xaaj-auth-input-wrap`,children:[(0,$.jsx)(`input`,{id:`xaaj-login-password`,value:x,onChange:e=>S(e.target.value),placeholder:`Your password`,type:D?`text`:`password`,autoComplete:`current-password`,style:{paddingRight:`62px`},required:!0}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-auth-password-toggle`,onClick:()=>O(e=>!e),children:D?`Hide`:`Show`})]})]}),T&&(0,$.jsx)(`p`,{className:`xaaj-auth-error`,children:T}),(0,$.jsxs)(`button`,{type:`submit`,className:`xaaj-auth-submit`,disabled:C,children:[C?`Signing in...`:`Continue to XAAJ`,!C&&(0,$.jsx)(Ud,{size:14})]})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-secondary`,children:[(0,$.jsx)(`span`,{}),(0,$.jsx)(Z,{to:`/forgot-password`,children:`Forgot password?`})]}),(0,$.jsxs)(`p`,{className:`xaaj-auth-switch`,children:[`New to XAAJ?`,(0,$.jsx)(Z,{to:`/register`,children:`Create your account`})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-trust`,children:[(0,$.jsx)(`span`,{children:`Secure`}),(0,$.jsx)(`span`,{children:`·`}),(0,$.jsx)(`span`,{children:`Private`}),(0,$.jsx)(`span`,{children:`·`}),(0,$.jsx)(`span`,{children:`Made for XAAJ`})]})]})})]})}):m===`/register`?(0,$.jsx)(Xp,{auth:!0,eyebrow:`Join XAAJ`,title:`Create account`,children:(0,$.jsxs)(`div`,{className:`xaaj-auth-layout`,children:[(0,$.jsxs)(`section`,{className:`xaaj-auth-editorial`,children:[(0,$.jsxs)(`div`,{className:`xaaj-auth-mark`,children:[(0,$.jsx)(`i`,{}),`XAAJ · STORIES CRAFTED IN EARTH`]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-editorial-copy`,children:[(0,$.jsx)(`span`,{className:`xaaj-auth-editorial-eyebrow`,children:`Made for everyday rituals`}),(0,$.jsxs)(`h2`,{children:[`Begin with`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`em`,{children:`something beautiful.`})]}),(0,$.jsx)(`p`,{children:`Create your account once. We will keep your details ready for every future order.`})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-editorial-footer`,children:[(0,$.jsx)(`b`,{children:`01`}),(0,$.jsx)(`span`,{className:`xaaj-auth-editorial-dot`}),`Thoughtfully made tableware`,(0,$.jsx)(`span`,{className:`xaaj-auth-editorial-dot`}),`India`]})]}),(0,$.jsx)(`section`,{className:`xaaj-auth-form-panel`,children:(0,$.jsxs)(`div`,{className:`xaaj-auth-form-inner`,children:[(0,$.jsxs)(`nav`,{className:`xaaj-auth-nav`,"aria-label":`Account navigation`,children:[(0,$.jsx)(Z,{to:`/account`,children:`Sign in`}),(0,$.jsx)(Z,{className:`active`,to:`/register`,children:`Create account`})]}),(0,$.jsx)(`span`,{className:`xaaj-auth-kicker`,children:`Join XAAJ`}),(0,$.jsx)(`h1`,{className:`xaaj-auth-title`,children:`Create account.`}),(0,$.jsx)(`p`,{className:`xaaj-auth-lead`,children:`A few details now means a smoother checkout and a more personal XAAJ experience later.`}),(0,$.jsxs)(`form`,{className:`xaaj-auth-form`,onSubmit:wt,children:[(0,$.jsx)(`div`,{className:`xaaj-auth-section-label`,children:`Your details`}),(0,$.jsxs)(`div`,{className:`xaaj-auth-fields`,children:[(0,$.jsxs)(`div`,{className:`xaaj-auth-field`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-name`,children:`Full name`}),(0,$.jsx)(`input`,{id:`xaaj-register-name`,value:j,onChange:e=>M(e.target.value),placeholder:`Your name`,autoComplete:`name`,required:!0})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-field`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-phone`,children:`Phone`}),(0,$.jsx)(`input`,{id:`xaaj-register-phone`,value:ee,onChange:e=>L(e.target.value.replace(/\D/g,``).slice(0,10)),placeholder:`10-digit number`,type:`tel`,inputMode:`numeric`,autoComplete:`tel`,required:!0})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-field full`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-email`,children:`Email address`}),(0,$.jsx)(`input`,{id:`xaaj-register-email`,value:N,onChange:e=>P(e.target.value),placeholder:`you@example.com`,type:`email`,autoComplete:`email`,required:!0})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-field full`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-password`,children:`Password`}),(0,$.jsxs)(`div`,{className:`xaaj-auth-input-wrap`,children:[(0,$.jsx)(`input`,{id:`xaaj-register-password`,value:F,onChange:e=>I(e.target.value),placeholder:`Minimum 8 characters`,type:k?`text`:`password`,autoComplete:`new-password`,style:{paddingRight:`62px`},required:!0}),(0,$.jsx)(`button`,{type:`button`,className:`xaaj-auth-password-toggle`,onClick:()=>A(e=>!e),children:k?`Hide`:`Show`})]})]})]}),(0,$.jsx)(`div`,{className:`xaaj-auth-section-label`,children:`Delivery details`}),(0,$.jsxs)(`div`,{className:`xaaj-auth-fields`,children:[(0,$.jsxs)(`div`,{className:`xaaj-auth-field full`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-address`,children:`Address`}),(0,$.jsx)(`input`,{id:`xaaj-register-address`,value:te,onChange:e=>R(e.target.value),placeholder:`House / street / locality`,autoComplete:`street-address`,required:!0})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-field`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-city`,children:`City`}),(0,$.jsx)(`input`,{id:`xaaj-register-city`,value:ne,onChange:e=>re(e.target.value),placeholder:`City`,autoComplete:`address-level2`,required:!0})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-field`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-state`,children:`State`}),(0,$.jsx)(`input`,{id:`xaaj-register-state`,value:z,onChange:e=>ie(e.target.value),placeholder:`State`,autoComplete:`address-level1`,required:!0})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-field full`,children:[(0,$.jsx)(`label`,{htmlFor:`xaaj-register-pin`,children:`PIN code`}),(0,$.jsx)(`input`,{id:`xaaj-register-pin`,value:ae,onChange:e=>oe(e.target.value.replace(/\D/g,``).slice(0,6)),placeholder:`6-digit PIN code`,inputMode:`numeric`,autoComplete:`postal-code`,maxLength:6,required:!0})]})]}),ce&&(0,$.jsx)(`p`,{className:`xaaj-auth-error`,children:ce}),(0,$.jsxs)(`button`,{type:`submit`,className:`xaaj-auth-submit`,disabled:B,children:[B?`Creating account...`:`Create my XAAJ account`,!B&&(0,$.jsx)(Ud,{size:14})]})]}),(0,$.jsxs)(`p`,{className:`xaaj-auth-switch`,children:[`Already have an account?`,(0,$.jsx)(Z,{to:`/account`,children:`Sign in`})]}),(0,$.jsxs)(`div`,{className:`xaaj-auth-trust`,children:[(0,$.jsx)(`span`,{children:`Secure`}),(0,$.jsx)(`span`,{children:`·`}),(0,$.jsx)(`span`,{children:`Email verification`}),(0,$.jsx)(`span`,{children:`·`}),(0,$.jsx)(`span`,{children:`Private`})]})]})})]})}):m===`/shipping`?(0,$.jsx)(Xp,{policy:!0,eyebrow:`Shipping Policy`,title:`Shipping made simple.`,intro:`We carefully pack every XAAJ order and deliver across India.`,effectiveDate:`12/09/2026`,children:(0,$.jsx)(Jp,{sections:[{title:`How long does delivery take?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`p`,{children:`Because every XAAJ piece is handmade, hand-glazed and individually quality-checked, please allow a short window to prepare your order with care before it ships.`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`In-stock items:`}),` Dispatched within 2–4 business days of order confirmation and payment realisation.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Made-to-order / pre-order collections:`}),` Dispatch timelines are specified on the product page, typically 2–4 weeks.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Custom or personalised orders:`}),` Timelines are confirmed separately in writing and are non-cancellable once production has commenced.`]}),(0,$.jsx)(`li`,{children:`Orders are not processed, packed or dispatched on Sundays and gazetted national holidays.`})]}),(0,$.jsx)(`p`,{children:`You will receive an order confirmation email/SMS immediately, and a dispatch confirmation with tracking details once your order leaves our facility.`}),(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`strong`,{children:`Estimated delivery after dispatch:`}),` Metro cities 3–5 business days; Rest of India 5–8 business days; Remote / hilly / North-East regions 7–12 business days.`]})]})},{title:`What is the shipping charge?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`p`,{children:`All shipping charges, if any, are displayed transparently at checkout before payment and included in the total payable amount shown before order confirmation.`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Above ₹1000:`}),` Free shipping.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Below ₹999.99:`}),` Shipping charge calculated at checkout.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Express / Priority:`}),` Available at checkout for eligible pin codes and products; charges are dynamically calculated.`]})]}),(0,$.jsx)(`p`,{children:`Express or priority delivery may not be available for fragile, oversized or heavy items. Express timelines are estimates and can be affected by courier delays, weather, regional restrictions, strikes and other events beyond XAAJ's reasonable control.`})]})},{title:`Where do you deliver?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`p`,{children:`We currently ship to all serviceable pin codes across India through our logistics partners.`}),(0,$.jsx)(`p`,{children:`International shipping is currently unavailable.`})]})},{title:`How are fragile ceramics packed?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`p`,{children:`Every order is packed using multi-layer protective wrapping, corner reinforcement and cushioning material designed for breakage-resistant transit.`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`Inspect the outer packaging at delivery and note visible damage to the delivery executive where possible.`}),(0,$.jsx)(`li`,{children:`Record an unboxing video without pause/edit from the moment the sealed package is opened. This is strongly recommended for any damage-related claim.`}),(0,$.jsx)(`li`,{children:`Retain the original packaging until you have inspected all items.`})]})]})},{title:`How do I track my order?`,content:(0,$.jsx)(`p`,{children:`Once dispatched, a tracking link will be shared via email/SMS/WhatsApp. You may also track your order by logging into your XAAJ account or by contacting us with your order number.`})},{title:`What if delivery fails or is delayed?`,content:(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`If delivery fails due to an incorrect/incomplete address or recipient unavailability, the courier partner will typically make up to 2–3 re-attempts before returning the shipment.`}),(0,$.jsx)(`li`,{children:`Shipments returned as undeliverable through no fault of XAAJ may be re-shipped at an additional delivery charge, or refunded after deducting original outbound and return shipping costs, at XAAJ's discretion.`}),(0,$.jsx)(`li`,{children:`Please ensure your shipping address, pin code and phone number are accurate at checkout.`})]})})},{title:`What if my order arrives damaged, broken or incomplete?`,content:(0,$.jsxs)(`p`,{children:[`Please report transit damage, breakage or missing items within `,(0,$.jsx)(`strong`,{children:`48 hours of delivery`}),` by writing to `,(0,$.jsx)(`strong`,{children:`customercare@xaaj.in`}),` with your order number and photographs/video of the damaged item and outer packaging. Full resolution details are set out in our Return & Refund Policy.`]})},{title:`When does risk in the product pass to me?`,content:(0,$.jsx)(`p`,{children:`Title and risk in the goods, including risk of loss or damage, passes to the customer only upon delivery to the address provided at checkout, except where damage is reported and substantiated in accordance with the damaged-item process.`})},{title:`How do I contact the Grievance Officer?`,content:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`strong`,{children:`Mr Ashish Chaudhary`}),(0,$.jsx)(`br`,{}),`Email: grievance@xaaj.in`,(0,$.jsx)(`br`,{}),`Phone: 989946117, Mon–Sat, 10:00 AM – 6:00 PM IST`]})}]})}):m===`/returns`?(0,$.jsx)(Xp,{policy:!0,eyebrow:`Return & Refund Policy`,title:`Returns made simple.`,intro:`If something isn't right with your XAAJ order, here's exactly what to do.`,effectiveDate:`12/09/2026`,children:(0,$.jsx)(Jp,{sections:[{title:`When is my order eligible for a return or replacement?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`p`,{children:`You may request a return, replacement or refund when:`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`The product arrives broken, cracked or chipped due to shipping/handling.`}),(0,$.jsx)(`li`,{children:`The wrong item is delivered, including wrong design, size, quantity or colour.`}),(0,$.jsx)(`li`,{children:`Part of a set, such as a dinner set, is missing from the package.`})]})]})},{title:`How quickly do I need to report a problem?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`p`,{children:[`Damage, wrong-item and missing-item claims must be reported `,(0,$.jsx)(`strong`,{children:`within 48 hours of delivery`}),`.`]}),(0,$.jsxs)(`p`,{children:[`Email `,(0,$.jsx)(`strong`,{children:`customercare@xaaj.in`}),` or WhatsApp `,(0,$.jsx)(`strong`,{children:`+91-9899446117`}),` with your order number.`]}),(0,$.jsx)(`p`,{children:`Please provide clear photos of the damaged/defective item, shipping label and outer packaging. An unboxing video is preferred. Resolution is communicated within 5–7 business days of receiving complete evidence.`}),(0,$.jsx)(`p`,{children:`Claims after 48 hours, or without adequate photographic/video evidence, may not be eligible except where the issue is a latent manufacturing defect covered by the policy.`})]})},{title:`Which items are not eligible for return?`,content:(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`Products that have been used, washed, or show signs of handling beyond inspection.`}),(0,$.jsx)(`li`,{children:`Clearance/final-sale products marked "non-returnable" on the product page.`}),(0,$.jsx)(`li`,{children:`Customised, personalised or made-to-order pieces.`}),(0,$.jsx)(`li`,{children:`Minor glaze, texture, hand-painted pattern or size variations inherent to handmade ceramics.`}),(0,$.jsx)(`li`,{children:`Products without original packaging, tags or accompanying documentation, where applicable.`}),(0,$.jsx)(`li`,{children:`Change-of-mind returns on made-to-order or bespoke items once production has commenced.`})]})},{title:`Do you offer change-of-mind returns?`,content:(0,$.jsxs)(`p`,{children:[`For ready-to-ship, unused products in original condition and packaging, XAAJ `,(0,$.jsx)(`strong`,{children:`[offers / does not offer]`}),` change-of-mind returns within `,(0,$.jsx)(`strong`,{children:`[7]`}),` days of delivery. Where offered, return shipping costs are borne by the customer, and the item will be inspected before a refund or store credit is issued. Qualifying items should be stated clearly on the product page.`]})},{title:`Are handmade variations considered defects?`,content:(0,$.jsx)(`p`,{children:`XAAJ products are handmade using traditional techniques. Minor irregularities in shape, glaze pooling, colour depth, surface texture or size are intentional characteristics of handcrafted ceramics and are not treated as manufacturing defects.`})},{title:`How and when will I receive my refund?`,content:(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`Refunds are processed to the original payment method used at checkout, or as store credit where opted by the customer.`}),(0,$.jsx)(`li`,{children:`Once a return is approved and, where applicable, the item is received and inspected, refunds are initiated within 7 business days.`}),(0,$.jsx)(`li`,{children:`After initiation, funds typically reflect in 10–15 business days depending on the bank or card issuer.`}),(0,$.jsx)(`li`,{children:`COD orders are refunded via bank transfer/UPI to an account provided by the customer, or as store credit.`})]})})},{title:`Can I get a replacement instead of a refund?`,content:(0,$.jsx)(`p`,{children:`For damaged, defective or wrongly delivered items, XAAJ may, at the customer's choice and subject to stock availability, offer a free replacement instead of a refund. If the item is out of stock, a full refund or store credit valid for 12 months will be offered.`})},{title:`Who pays for return shipping?`,content:(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`For approved damage/defect/wrong-item claims, XAAJ will arrange a free reverse pickup where serviceable.`}),(0,$.jsx)(`li`,{children:`Where reverse pickup is unavailable in your pin code, XAAJ will reimburse reasonable actual courier charges for self-shipping.`}),(0,$.jsx)(`li`,{children:`For permitted change-of-mind returns, return shipping is borne by the customer unless stated otherwise.`})]})},{title:`How do I request a return?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`p`,{children:[`Email `,(0,$.jsx)(`strong`,{children:`customercare@xaaj.in`}),` or use the 'Returns' section of your account with your order number, reason for return and supporting photos/video.`]}),(0,$.jsx)(`p`,{children:`Our team will review and respond with a resolution or request for further information within 2 business days. Once approved, we will share pickup/drop-off instructions.`})]})},{title:`How do I contact the Grievance Officer?`,content:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`strong`,{children:`Ashish Chaudhary`}),(0,$.jsx)(`br`,{}),`Email: grievance@xaaj.in`,(0,$.jsx)(`br`,{}),`Phone: +91-9899446117, Mon–Fri, 10:00 AM – 5:00 PM IST`]})}]})}):m===`/cancellation`?(0,$.jsx)(Xp,{policy:!0,eyebrow:`Cancellation Policy`,title:`Cancellation made simple.`,intro:`Need to cancel an order? Here's when and how you can do it.`,effectiveDate:`12/09/2026`,children:(0,$.jsx)(Jp,{sections:[{title:`Can I cancel my order before dispatch?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`p`,{children:[`Ready-to-ship items may be cancelled free of charge any time before the order status changes to `,(0,$.jsx)(`strong`,{children:`"Dispatched"`}),`.`]}),(0,$.jsxs)(`p`,{children:[`Write to `,(0,$.jsx)(`strong`,{children:`customercare@xaaj.in`}),` or use the "Cancel Order" option in your account where available.`]}),(0,$.jsx)(`p`,{children:`100% of the amount paid, including shipping charges if any, will be refunded to the original payment method within 10–15 business days.`})]})},{title:`Can I cancel after my order has been dispatched?`,content:(0,$.jsx)(`p`,{children:`Once an order has been dispatched, it cannot be cancelled. You may refuse delivery or initiate a return after delivery in accordance with the Return & Refund Policy, where eligible. For prepaid orders refused after dispatch, the refund will be processed after deducting actual outbound and return shipping costs.`})},{title:`When can XAAJ cancel an order?`,content:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`p`,{children:`XAAJ may cancel an order, in whole or in part, with a full refund of the amount paid for the cancelled portion when:`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`The product is out of stock or discontinued after order placement.`}),(0,$.jsx)(`li`,{children:`There are pricing or product-information inaccuracies due to technical or human error.`}),(0,$.jsx)(`li`,{children:`A fraudulent transaction is suspected, or payment/delivery details cannot be verified.`}),(0,$.jsx)(`li`,{children:`The delivery address falls outside the current serviceable area.`}),(0,$.jsx)(`li`,{children:`Force majeure events prevent fulfilment.`})]}),(0,$.jsx)(`p`,{children:`XAAJ will notify you by email/SMS promptly and any amount paid will be refunded within 7 business days.`})]})},{title:`What happens with repeated COD cancellations?`,content:(0,$.jsx)(`p`,{children:`Repeated non-acceptance or cancellation of COD orders may result in COD being disabled for your account, at XAAJ's discretion, to prevent misuse.`})},{title:`Can I modify my order before dispatch?`,content:(0,$.jsxs)(`p`,{children:[`Requests to modify an order, including address, item or quantity, can only be accommodated before dispatch, subject to feasibility. Contact `,(0,$.jsx)(`strong`,{children:`customercare@xaaj.in`}),` with your order number as soon as possible.`]})},{title:`How do I request a cancellation?`,content:(0,$.jsxs)(`ul`,{children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Email:`}),` customercare@xaaj.in with subject line "Cancel Order – [Order Number]".`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Phone/WhatsApp:`}),` 9899446117, Mon–Fri, 10:00 AM – 5:00 PM IST.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`My Orders:`}),` Use your XAAJ account where the self-service option is available.`]})]})},{title:`How do I contact the Grievance Officer?`,content:(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`strong`,{children:`Mr Ashish Chuadhary`}),(0,$.jsx)(`br`,{}),`Email: grievance@xaaj.in`,(0,$.jsx)(`br`,{}),`Complaints regarding cancellations are acknowledged within 48 hours and resolved within one month, in accordance with the Consumer Protection (E-Commerce) Rules, 2020.`]})}]})}):m===`/privacy`?(0,$.jsxs)(Xp,{eyebrow:`Privacy`,title:`Your privacy matters.`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`We use your information only to provide a smooth and secure shopping experience.`}),(0,$.jsx)(`p`,{children:`Information such as your name, email, phone number and delivery address may be used to process orders, payments, delivery and customer support.`}),(0,$.jsx)(`p`,{children:`For privacy questions, contact us at customercare@xaaj.in.`})]}):m===`/terms`?(0,$.jsxs)(Xp,{eyebrow:`Legal`,title:`Terms & conditions.`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`Please read carefully before using xaaj.in.`}),(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`strong`,{children:`Effective date:`}),` 12/09/2026`]}),(0,$.jsx)(`p`,{children:`These Terms and Conditions ("Terms") govern your access to and use of www.xaaj.in and any related mobile application (together, the "Platform"), owned and operated by APNP Ventures Pvt Ltd, having its registered office at G6/4C DLF GARDEN CITY SECTOR 92 GURGAON 122505 Haryana and GSTIN 06ABGCA0842A1ZC ("XAAJ", "we", "us", "our").`}),(0,$.jsx)(`p`,{children:`By accessing or using the Platform, placing an order, or creating an account, you agree to be bound by these Terms, our Privacy Policy, Shipping Policy, Return & Refund Policy and Cancellation Policy.`}),(0,$.jsx)(`h2`,{children:`1. Eligibility`}),(0,$.jsx)(`p`,{children:`You must be at least 18 years of age and competent to contract under the Indian Contract Act, 1872 to use the Platform and place orders. If you are using the Platform on behalf of an entity, you represent that you have authority to bind that entity.`}),(0,$.jsx)(`h2`,{children:`2. Account Registration`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.`}),(0,$.jsx)(`li`,{children:`You agree to provide accurate, current and complete information at registration and checkout, and to update it as necessary.`}),(0,$.jsx)(`li`,{children:`XAAJ reserves the right to suspend or terminate accounts found to be fraudulent, abusive, or in breach of these Terms.`})]}),(0,$.jsx)(`h2`,{children:`3. Products and Product Descriptions`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`XAAJ sells handcrafted ceramic tableware and home products. As each piece is handmade, minor variation in colour, glaze, texture, weight and dimensions between the product image and the item received is normal and not a defect.`}),(0,$.jsx)(`li`,{children:`We make reasonable efforts to display product colours, dimensions and details accurately; however, actual colours may vary slightly due to screen/display settings and the handcrafted, hand-glazed nature of the products.`}),(0,$.jsx)(`li`,{children:`Country of origin, materials used and care instructions are provided on individual product pages, in accordance with applicable Legal Metrology and consumer protection requirements.`}),(0,$.jsx)(`li`,{children:`Products are microwave/dishwasher safe only where expressly stated on the product page; please follow the specific care instructions provided with your order.`})]}),(0,$.jsx)(`h2`,{children:`4. Pricing and Payment`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`All prices are listed in Indian Rupees (₹) and are inclusive of applicable Goods and Services Tax (GST) unless stated otherwise. The total price payable, including all applicable charges, is displayed at checkout before you confirm payment.`}),(0,$.jsx)(`li`,{children:`We accept payment via credit/debit cards, UPI, net banking, wallets and Cash on Delivery (where available), processed through third-party payment gateways. XAAJ does not store your full card details.`}),(0,$.jsx)(`li`,{children:`In the event of a pricing or product-information error due to technical glitch or human error, XAAJ reserves the right to cancel the affected order and issue a full refund, even after order confirmation.`}),(0,$.jsx)(`li`,{children:`XAAJ reserves the right to modify prices at any time; changes will not affect orders already confirmed.`})]}),(0,$.jsx)(`h2`,{children:`5. Order Acceptance`}),(0,$.jsx)(`p`,{children:`Your order constitutes an offer to purchase. A contract of sale is formed only when XAAJ sends a dispatch confirmation for the relevant item(s); an order confirmation email/SMS is an acknowledgment of receipt of your order, not acceptance. XAAJ reserves the right to refuse or cancel any order for reasons including product unavailability, pricing errors, suspected fraud, or delivery-area restrictions, as detailed in our Cancellation Policy.`}),(0,$.jsx)(`h2`,{children:`6. Shipping, Cancellation, Return & Refunds`}),(0,$.jsx)(`p`,{children:`Shipping timelines, cancellation windows and return/refund eligibility are governed by our Shipping Policy, Cancellation Policy and Return & Refund Policy, which form an integral part of these Terms.`}),(0,$.jsx)(`h2`,{children:`7. Intellectual Property`}),(0,$.jsx)(`p`,{children:`All content on the Platform — including the XAAJ name, logo, product designs, photography, graphics, text and layout — is the exclusive property of XAAJ or its licensors and is protected under applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any Platform content without our prior written consent.`}),(0,$.jsx)(`h2`,{children:`8. User Conduct`}),(0,$.jsx)(`p`,{children:`You agree not to:`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`Use the Platform for any unlawful purpose or in violation of these Terms.`}),(0,$.jsx)(`li`,{children:`Post or transmit any content that is defamatory, obscene, infringing, or otherwise objectionable.`}),(0,$.jsx)(`li`,{children:`Attempt to gain unauthorised access to the Platform, other users' accounts, or our systems.`}),(0,$.jsx)(`li`,{children:`Use any automated means (bots, scrapers) to access or extract data from the Platform without permission.`}),(0,$.jsx)(`li`,{children:`Engage in fraudulent transactions, chargebacks without valid cause, or misuse of promotional offers.`})]}),(0,$.jsx)(`h2`,{children:`9. Reviews and User-Generated Content`}),(0,$.jsx)(`p`,{children:`If you submit reviews, photos or other content, you grant XAAJ a non-exclusive, royalty-free, worldwide licence to use, reproduce and display such content for marketing and promotional purposes. XAAJ does not permit fake or incentivised reviews that misrepresent genuine user experience.`}),(0,$.jsx)(`h2`,{children:`10. Limitation of Liability`}),(0,$.jsx)(`p`,{children:`To the maximum extent permitted by law, XAAJ's aggregate liability arising from your use of the Platform or purchase of products shall not exceed the amount paid by you for the specific order giving rise to the claim. XAAJ shall not be liable for any indirect, incidental or consequential damages. Nothing in these Terms limits any liability that cannot be excluded under the Consumer Protection Act, 2019, or excludes your statutory rights as a consumer.`}),(0,$.jsx)(`h2`,{children:`11. Indemnity`}),(0,$.jsx)(`p`,{children:`You agree to indemnify and hold XAAJ, its directors, employees and affiliates harmless from any claims, losses or damages arising from your breach of these Terms or misuse of the Platform.`}),(0,$.jsx)(`h2`,{children:`12. Force Majeure`}),(0,$.jsx)(`p`,{children:`XAAJ shall not be liable for any delay or failure to perform resulting from causes beyond its reasonable control, including natural disasters, strikes, pandemics, government action, or logistics/network disruptions.`}),(0,$.jsx)(`h2`,{children:`13. Grievance Redressal Mechanism`}),(0,$.jsx)(`p`,{children:`In accordance with applicable law, the name and contact details of our Grievance Officer are:`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Name:`}),` Ashish Chaudhary`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Designation:`}),` Director`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Email:`}),` grievance@xaaj.in`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Address:`}),` G6/4C DLF GARDEN CITY SECTOR 92 GURGAON 122505 HARYANA`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Working hours:`}),` Mon–Fri, 10:00 AM – 5:00 PM IST`]})]}),(0,$.jsx)(`p`,{children:`The Grievance Officer will acknowledge complaints within 48 hours and resolve them within one month of receipt.`}),(0,$.jsx)(`h2`,{children:`14. Governing Law and Jurisdiction`}),(0,$.jsx)(`p`,{children:`These Terms are governed by the laws of India. Subject to the dispute-resolution mechanisms available under the Consumer Protection Act, 2019, the courts at Gurugram, Haryana shall have exclusive jurisdiction over disputes not resolved through such consumer fora.`}),(0,$.jsx)(`h2`,{children:`15. Amendments`}),(0,$.jsx)(`p`,{children:`XAAJ may revise these Terms from time to time. Continued use of the Platform after changes are posted constitutes acceptance of the revised Terms. Material changes will be highlighted via the Platform or email where feasible.`}),(0,$.jsx)(`h2`,{children:`16. Contact Us`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Email:`}),` customercare@xaaj.in`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Phone:`}),` 9899446117`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`strong`,{children:`Registered Address:`}),` G6/4C DLF GARDEN CITY SECTOR 92 GURGAON 122505 HARYANA`]})]})]}):m===`/contact`?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Pp,{}),(0,$.jsx)(`style`,{children:`
          .xaaj-contact-page{
            background:#ffffff;
            color:#292824;
            overflow:hidden;
          }

          .xaaj-contact-layout{
            width:100%;
            display:grid;
            grid-template-columns:minmax(0,1fr) minmax(0,1fr);
            background:#ffffff;
          }

          .xaaj-contact-image-panel{
            position:relative;
            min-height:630px;
            overflow:hidden;
            background:#4a392b;
          }

          .xaaj-contact-image-panel::after{
            content:"";
            position:absolute;
            inset:0;
            background:linear-gradient(90deg,rgba(27,21,16,.18),rgba(34,24,17,.54));
            pointer-events:none;
          }

          .xaaj-contact-image-panel img{
            width:100%;
            height:100%;
            min-height:630px;
            object-fit:cover;
            display:block;
            filter:saturate(.84) contrast(.96);
          }

          .xaaj-contact-image-copy{
            display:none!important;
            position:absolute;
            z-index:2;
            left:clamp(42px,6vw,105px);
            top:clamp(55px,8vw,92px);
            width:min(390px,70%);
            color:#fffaf1;
          }

          .xaaj-contact-image-copy>span,
          .xaaj-contact-kicker{
            display:block;
            color:#fffaf1;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:10px;
            font-weight:600;
            letter-spacing:.23em;
            line-height:1.2;
            text-transform:uppercase;
          }

          .xaaj-contact-image-copy h1{
            margin:24px 0 22px;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:clamp(52px,5.2vw,78px);
            font-weight:400;
            line-height:.93;
            letter-spacing:-.045em;
          }

          .xaaj-contact-image-copy i{
            display:block;
            width:52px;
            height:1px;
            margin:0 0 22px;
            background:rgba(255,250,241,.7);
          }

          .xaaj-contact-image-copy p{
            max-width:330px;
            margin:0;
            color:rgba(255,250,241,.78);
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:14px;
            line-height:1.75;
          }

          .xaaj-contact-form-side{
            background:#ffffff;
            display:flex;
            align-items:center;
          }

          .xaaj-contact-form-inner{
            width:min(720px,100%);
            margin:0 auto;
            padding:78px clamp(42px,6vw,96px) 74px;
            box-sizing:border-box;
          }

          .xaaj-contact-kicker{
            color:#b44832;
            margin-bottom:22px;
          }

          .xaaj-contact-form-inner h2{
            margin:0;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:clamp(48px,4.6vw,68px);
            font-weight:400;
            line-height:.95;
            letter-spacing:-.045em;
          }

          .xaaj-contact-form-subtitle{
            margin:24px 0 42px;
            color:#77716a;
            font-size:14px;
            line-height:1.7;
          }

          .xaaj-contact-form{display:grid;gap:20px}

          .xaaj-contact-form-row{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:20px;
          }

          .xaaj-contact-form label{display:grid;gap:9px;min-width:0}

          .xaaj-contact-form label>span{
            color:#625d56;
            font-family:'Gotham Book','Gotham',Arial,sans-serif;
            font-size:9px;
            font-weight:600;
            letter-spacing:.12em;
            text-transform:uppercase;
          }

          .xaaj-contact-form label>span b{color:#b44832;font-weight:600}
          .xaaj-contact-form label>span small{color:#a29c93;font-size:8px;font-weight:400;letter-spacing:.04em;text-transform:none;margin-left:5px}

          .xaaj-contact-form input,
          .xaaj-contact-form select,
          .xaaj-contact-form textarea{
            width:100%;
            box-sizing:border-box;
            border:1px solid #dedad4;
            border-radius:8px;
            background:#fff;
            color:#302d29;
            padding:0 17px;
            font:400 13px/1.4 'Gotham Book','Gotham',Arial,sans-serif;
            outline:none;
            transition:border-color .2s ease,box-shadow .2s ease;
          }

          .xaaj-contact-form input,
          .xaaj-contact-form select{height:55px}
          .xaaj-contact-form textarea{min-height:135px;padding-top:15px;padding-bottom:15px;resize:vertical}
          .xaaj-contact-form input::placeholder,.xaaj-contact-form textarea::placeholder{color:#aaa49c}
          .xaaj-contact-form select{appearance:auto;color:#77716a;cursor:pointer}
          .xaaj-contact-form input:focus,.xaaj-contact-form select:focus,.xaaj-contact-form textarea:focus{border-color:#b44832;box-shadow:0 0 0 3px rgba(180,72,50,.07)}

          .xaaj-contact-phone-field{display:none!important}

          .xaaj-contact-submit-row{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:20px;
            margin-top:2px;
          }

          .xaaj-contact-submit-row>span{color:#9a948c;font-size:10px;letter-spacing:.02em}

          .xaaj-contact-submit-row button{
            min-width:205px;
            height:54px;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:18px;
            border:0;
            border-radius:7px;
            background:#b44832;
            color:#fff;
            font:600 11px 'Gotham Book','Gotham',Arial,sans-serif;
            letter-spacing:.03em;
            cursor:pointer;
            transition:transform .2s ease,background .2s ease;
          }

          .xaaj-contact-submit-row button:hover{background:#a23e2b;transform:translateY(-1px)}
          .xaaj-contact-submit-row button:disabled{opacity:.65;cursor:wait;transform:none}

          .xaaj-contact-info-strip{
            width:min(1400px,calc(100% - 90px));
            margin:0 auto;
            padding:34px 0 48px;
            border-top:1px solid #e3dfd9;
            display:grid;
            grid-template-columns:minmax(0,1.65fr) minmax(280px,.85fr);
            gap:44px;
            align-items:stretch;
          }

          .xaaj-contact-info-list{
            display:grid;
            grid-template-columns:repeat(3,1fr);
          }

          .xaaj-contact-info-list>a{
            display:flex;
            align-items:flex-start;
            gap:15px;
            min-height:130px;
            padding:10px 34px 10px 0;
            color:#302d29;
            text-decoration:none;
          }

          .xaaj-contact-info-list>a+a{padding-left:34px;border-left:1px solid #e0dbd4}
          .xaaj-contact-info-list svg{color:#b44832;flex:0 0 auto;margin-top:2px}
          .xaaj-contact-info-list span{display:block}
          .xaaj-contact-info-list small{display:block;margin-bottom:13px;color:#b44832;font-size:8px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}
          .xaaj-contact-info-list strong{display:block;font:400 15px/1.45 'Gotham Book','Gotham',Arial,sans-serif}
          .xaaj-contact-info-list em{display:block;margin-top:7px;color:#8c867e;font-size:10px;line-height:1.5;font-style:normal}

          .xaaj-contact-map-card{
            min-height:130px;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:15px;
            border-radius:15px;
            background:linear-gradient(145deg,#f5f1e9,#eee9df);
            color:#302d29;
            text-decoration:none;
            position:relative;
            overflow:hidden;
          }

          .xaaj-contact-map-card::before{content:"";position:absolute;inset:0;background-image:linear-gradient(30deg,transparent 48%,rgba(125,112,97,.08) 49%,transparent 51%),linear-gradient(120deg,transparent 48%,rgba(125,112,97,.06) 49%,transparent 51%);background-size:72px 72px;opacity:.7}
          .xaaj-contact-map-card svg,.xaaj-contact-map-card div{position:relative;z-index:1}
          .xaaj-contact-map-card svg{color:#b44832}
          .xaaj-contact-map-card strong,.xaaj-contact-map-card span{display:block}
          .xaaj-contact-map-card strong{font:400 16px/1.2 'Gotham Book','Gotham',Arial,sans-serif}
          .xaaj-contact-map-card span{margin-top:5px;color:#807970;font-size:10px}

          .xaaj-contact-popup{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(24,29,25,.58);backdrop-filter:blur(10px)}
          .xaaj-contact-popup-card{position:relative;width:min(100%,470px);padding:48px 36px 34px;text-align:center;background:#fff;border:1px solid rgba(41,40,37,.12);box-shadow:0 30px 100px rgba(0,0,0,.20)}
          .xaaj-contact-popup-close{position:absolute;top:13px;right:15px;width:30px;height:30px;border:0;background:transparent;color:#77716a;font-size:23px;cursor:pointer}
          .xaaj-contact-popup-mark{width:48px;height:48px;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;border:1px solid #d9d0c5;color:#b44832;font-size:22px}
          .xaaj-contact-popup-brand{display:block;margin-bottom:10px;color:#b44832;font-size:9px;font-weight:700;letter-spacing:.25em}
          .xaaj-contact-popup-card h3{margin:0 0 13px;color:#292824;font:400 30px 'Gotham Book','Gotham',Arial,sans-serif}
          .xaaj-contact-popup-card p{max-width:390px;margin:0 auto;color:#706d67;font-size:14px;line-height:1.75}
          .xaaj-contact-popup-rule{width:54px;height:1px;margin:24px auto;background:#d9d0c5}
          .xaaj-contact-popup-action{min-width:140px;height:44px;padding:0 22px;border:0;background:#b44832;color:#fff;font-size:11px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}

          /* Final Contact image fix: contact.png already contains its own artwork/text.
             Do not place a second text overlay on top of the image. */
          .xaaj-contact-image-panel{
            position:relative;
            overflow:hidden;
            background:#ffffff;
          }

          .xaaj-contact-image-panel img{
            display:block;
            width:100%;
            height:100%;
            object-fit:cover;
            object-position:center;
          }

          /* Final Contact page layout: compact hero image, white surface, breathing room from header/footer. */
          .xaaj-contact-page{
            padding-top:52px;
            padding-bottom:72px;
            background:#ffffff;
          }

          .xaaj-contact-layout{
            width:min(1440px,calc(100% - 72px));
            margin:0 auto;
            align-items:start;
          }

          .xaaj-contact-image-panel{
            height:560px;
            min-height:0;
          }

          .xaaj-contact-image-panel img{
            width:100%;
            height:560px;
            min-height:0;
            object-fit:cover;
            object-position:center;
          }

          .xaaj-contact-form-side{
            min-height:560px;
          }

          @media(max-width:900px){
            .xaaj-contact-page{padding-top:32px;padding-bottom:54px}
            .xaaj-contact-layout{
              width:calc(100% - 32px);
              grid-template-columns:1fr;
            }
            .xaaj-contact-image-panel{height:480px!important;min-height:0!important}
            .xaaj-contact-image-panel img{height:480px!important;min-height:0!important;object-position:left center!important}
            .xaaj-contact-image-copy{left:8vw;top:8vw}
            .xaaj-contact-form-inner{padding:60px 8vw}
            .xaaj-contact-info-strip{width:calc(100% - 48px);grid-template-columns:1fr;gap:24px}
          }

          /* Final premium contact hero sizing.
             The supplied contact artwork already contains the typography,
             so the image is kept intact and aligned to the full form height. */
          .xaaj-contact-layout{
            align-items:stretch!important;
          }

          .xaaj-contact-image-panel{
            height:auto!important;
            min-height:0!important;
            align-self:stretch!important;
          }

          .xaaj-contact-image-panel img{
            width:100%!important;
            height:100%!important;
            min-height:100%!important;
            object-fit:cover!important;
            object-position:left center!important;
          }

          .xaaj-contact-form-side{
            min-height:0!important;
            align-self:stretch!important;
          }

          .xaaj-contact-form-inner{
            width:100%!important;
            padding:68px clamp(38px,5.2vw,78px) 64px!important;
          }

          @media(min-width:901px){
            .xaaj-contact-layout{
              grid-template-columns:minmax(0,1.02fr) minmax(0,.98fr)!important;
            }
          }

          @media(max-width:600px){
            .xaaj-contact-page{padding-top:24px;padding-bottom:44px}
            .xaaj-contact-layout{width:calc(100% - 24px)}
            .xaaj-contact-image-panel{height:390px!important;min-height:0!important}
            .xaaj-contact-image-panel img{height:390px!important;min-height:0!important;object-position:left center!important}
            .xaaj-contact-image-copy{left:28px;top:54px;width:78%}
            .xaaj-contact-image-copy h1{font-size:52px}
            .xaaj-contact-image-copy p{font-size:13px}
            .xaaj-contact-form-inner{padding:48px 22px 54px}
            .xaaj-contact-form-inner h2{font-size:46px}
            .xaaj-contact-form-row{grid-template-columns:1fr;gap:20px}
            .xaaj-contact-submit-row{align-items:stretch;flex-direction:column;gap:15px}
            .xaaj-contact-submit-row button{width:100%}
            .xaaj-contact-info-strip{width:calc(100% - 32px);padding-top:26px}
            .xaaj-contact-info-list{grid-template-columns:1fr}
            .xaaj-contact-info-list>a{min-height:auto;padding:18px 0!important}
            .xaaj-contact-info-list>a+a{border-left:0;border-top:1px solid #e0dbd4}
            .xaaj-contact-map-card{min-height:150px}
          }
        `}),(0,$.jsx)(`main`,{className:`xaaj-contact-page`,children:(0,$.jsx)(Hp,{})}),(0,$.jsx)(Up,{}),(0,$.jsx)(`style`,{id:`xaaj-gotham-book-global`,children:`
        :root{
          --xaaj-heading-font:'Gotham Book','Gotham',Arial,sans-serif;
          --xaaj-body-font:'Gotham Book','Gotham',Arial,sans-serif;
          --blog-serif:'Gotham Book','Gotham',Arial,sans-serif;
        }

        html,
        body,
        #root,
        #root *{
          font-family:'Gotham Book','Gotham',Arial,sans-serif !important;
        }

        input,
        textarea,
        select,
        option,
        button{
          font-family:'Gotham Book','Gotham',Arial,sans-serif !important;
        }

        html{
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
          text-rendering:optimizeLegibility;
        }
      `})]}):m===`/faq`?(0,$.jsxs)(Xp,{eyebrow:`We are here`,title:`How can we help?`,children:[(0,$.jsx)(`p`,{className:`lead`,children:`Questions about an order, a piece or the making process? Write to customercare@xaaj.in and we’ll get back to you within two working days.`}),(0,$.jsxs)(`div`,{className:`faq-list`,children:[(0,$.jsxs)(`details`,{open:!0,children:[(0,$.jsx)(`summary`,{children:`How long does delivery take?`}),(0,$.jsx)(`p`,{children:`Most orders arrive within 3–7 working days across India.`})]}),(0,$.jsxs)(`details`,{children:[(0,$.jsx)(`summary`,{children:`Are the pieces dishwasher safe?`}),(0,$.jsx)(`p`,{children:`Yes. Our tableware is made for everyday use and is dishwasher safe.`})]}),(0,$.jsxs)(`details`,{children:[(0,$.jsx)(`summary`,{children:`Can I return my order?`}),(0,$.jsx)(`p`,{children:`Absolutely. We offer easy returns within 7 days of delivery.`})]})]})]}):(0,$.jsx)(Vp,{})}function lm({children:e}){let t=(0,_.useRef)(null),n=(0,_.useRef)(null),r=typeof window<`u`&&(window.location.pathname===`/blog`||window.location.pathname.startsWith(`/blog/`));return(0,_.useLayoutEffect)(()=>{if(r||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=t.current,i=e?.querySelector(`#smooth-content`);if(e&&i)return n.current=Ac.create({wrapper:e,content:i,smooth:1.25,effects:!0,normalizeScroll:!1,ignoreMobileResize:!0}),Zs.refresh(),()=>{n.current?.kill(),n.current=null}},[r]),r?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
          html, body, #root {
            min-height: 100%;
            background: #fff !important;
          }
          body {
            overflow-x: hidden !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
        `}),e]}):(0,$.jsxs)(`div`,{id:`smooth-wrapper`,ref:t,className:`xaaj-smooth-wrapper`,children:[(0,$.jsx)(`div`,{id:`smooth-content`,className:`xaaj-smooth-content`,children:e}),(0,$.jsx)(`style`,{children:`
        html {
          scroll-behavior: auto;
        }

        .xaaj-smooth-wrapper {
          width: 100%;
          min-height: 100vh;
        }

        .xaaj-smooth-content {
          width: 100%;
          min-height: 100vh;
          overflow: visible;
        }

        @media (prefers-reduced-motion: reduce) {
          .xaaj-smooth-content {
            transform: none !important;
          }
        }
      `})]})}function um(){return(0,$.jsx)(tp,{children:(0,$.jsx)(op,{children:(0,$.jsxs)(_d,{children:[(0,$.jsx)(`style`,{id:`xaaj-white-section-surfaces`,children:`
            html, body, #root,
            .xaaj-smooth-wrapper, .xaaj-smooth-content {
              background: #ffffff !important;
            }

            /* Main page surfaces — pure white, like the cart page. */
            main.xaaj-cinema-home,
            main.xaaj-shop-ref,
            main.xaaj-product-page,
            main.policy-page,
            main.xaaj-auth-page,
            main.xaaj-blog-shell,
            main.xaaj-blog-article-shell,
            main.xaaj-about,
            main.xaaj-contact-page,
            .xaaj-reference-hero,
            .xaaj-hero-product-showcase,
            .xaaj-brand-story-split,
            .xaaj-horeca-bundled,
            .xaaj-cinema-intro,
            .xaaj-cinema-intro-copy,
            .xaaj-cinema-category,
            .xaaj-cinema-quote,
            .xaaj-cinema-products,
            .xaaj-collection-story-carousel,
            .xaaj-collection-story-copy,
            .xaaj-category-gallery,
            .xaaj-values-strip,
            .xaaj-cart-page,
            .xaaj-blog-home-shell,
            .xaaj-blog-home-content {
              background: #ffffff !important;
            }

            /* White content panels inside those sections. */
            .xaaj-brand-story-split-copy,
            .xaaj-blog-feature,
            .xaaj-blog-card,
            .xaaj-blog-card-home,
            .xaaj-blog-card-home .xaaj-blog-card-copy,
            .xaaj-contact-form-head,
            .xaaj-contact-form-grid {
              background: #ffffff !important;
            }

            /* Keep the main header/nav white even while cart/navigation overlays are active. */
            .xaaj-ref-header-shell,
            .xaaj-ref-header-shell .xaaj-ref-header,
            .xaaj-ref-header-shell.xaaj-home-header,
            .xaaj-ref-header-shell.xaaj-home-header.is-scrolled .xaaj-ref-header {
              background: #ffffff !important;
            }
          `}),(0,$.jsx)(`style`,{id:`xaaj-nav-premium-typography`,children:`
            .xaaj-ref-main-nav a{
              font-family:'Gotham Book','Gotham',Arial,sans-serif!important;
              font-size:13px!important;
              line-height:1.2!important;
              font-weight:400!important;
              letter-spacing:.12px!important;
              text-transform:none!important;
            }

            @media(max-width:850px){
              .xaaj-ref-main-nav a{
                font-size:12px!important;
                letter-spacing:.08px!important;
              }
            }

            @media(max-width:520px){
              .xaaj-ref-main-nav a{
                font-size:11px!important;
                letter-spacing:.05px!important;
              }
            }
          `}),(0,$.jsx)(lm,{children:(0,$.jsx)(cm,{})})]})})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(tp,{children:(0,$.jsx)(op,{children:(0,$.jsx)(um,{})})}));