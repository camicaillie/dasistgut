(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function F0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gh={exports:{}},tl={},qh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function Lj(){if(Hy)return Re;Hy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.iterator;function z(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function L(O,W,le){this.props=O,this.context=W,this.refs=M,this.updater=le||P}L.prototype.isReactComponent={},L.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function $(){}$.prototype=L.prototype;function q(O,W,le){this.props=O,this.context=W,this.refs=M,this.updater=le||P}var Q=q.prototype=new $;Q.constructor=q,N(Q,L.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray,ae=Object.prototype.hasOwnProperty,se={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function E(O,W,le){var Pe,Ce={},Ve=null,Ue=null;if(W!=null)for(Pe in W.ref!==void 0&&(Ue=W.ref),W.key!==void 0&&(Ve=""+W.key),W)ae.call(W,Pe)&&!I.hasOwnProperty(Pe)&&(Ce[Pe]=W[Pe]);var He=arguments.length-2;if(He===1)Ce.children=le;else if(1<He){for(var We=Array(He),tt=0;tt<He;tt++)We[tt]=arguments[tt+2];Ce.children=We}if(O&&O.defaultProps)for(Pe in He=O.defaultProps,He)Ce[Pe]===void 0&&(Ce[Pe]=He[Pe]);return{$$typeof:n,type:O,key:Ve,ref:Ue,props:Ce,_owner:se.current}}function T(O,W){return{$$typeof:n,type:O.type,key:W,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function R(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return W[le]})}var D=/\/+/g;function x(O,W){return typeof O=="object"&&O!==null&&O.key!=null?R(""+O.key):W.toString(36)}function qe(O,W,le,Pe,Ce){var Ve=typeof O;(Ve==="undefined"||Ve==="boolean")&&(O=null);var Ue=!1;if(O===null)Ue=!0;else switch(Ve){case"string":case"number":Ue=!0;break;case"object":switch(O.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=O,Ce=Ce(Ue),O=Pe===""?"."+x(Ue,0):Pe,oe(Ce)?(le="",O!=null&&(le=O.replace(D,"$&/")+"/"),qe(Ce,W,le,"",function(tt){return tt})):Ce!=null&&(C(Ce)&&(Ce=T(Ce,le+(!Ce.key||Ue&&Ue.key===Ce.key?"":(""+Ce.key).replace(D,"$&/")+"/")+O)),W.push(Ce)),1;if(Ue=0,Pe=Pe===""?".":Pe+":",oe(O))for(var He=0;He<O.length;He++){Ve=O[He];var We=Pe+x(Ve,He);Ue+=qe(Ve,W,le,We,Ce)}else if(We=z(O),typeof We=="function")for(O=We.call(O),He=0;!(Ve=O.next()).done;)Ve=Ve.value,We=Pe+x(Ve,He++),Ue+=qe(Ve,W,le,We,Ce);else if(Ve==="object")throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Ue}function ot(O,W,le){if(O==null)return O;var Pe=[],Ce=0;return qe(O,Pe,"","",function(Ve){return W.call(le,Ve,Ce++)}),Pe}function ht(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var we={current:null},te={transition:null},ve={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:te,ReactCurrentOwner:se};function X(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:ot,forEach:function(O,W,le){ot(O,function(){W.apply(this,arguments)},le)},count:function(O){var W=0;return ot(O,function(){W++}),W},toArray:function(O){return ot(O,function(W){return W})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=L,Re.Fragment=t,Re.Profiler=s,Re.PureComponent=q,Re.StrictMode=o,Re.Suspense=m,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,Re.act=X,Re.cloneElement=function(O,W,le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Pe=N({},O.props),Ce=O.key,Ve=O.ref,Ue=O._owner;if(W!=null){if(W.ref!==void 0&&(Ve=W.ref,Ue=se.current),W.key!==void 0&&(Ce=""+W.key),O.type&&O.type.defaultProps)var He=O.type.defaultProps;for(We in W)ae.call(W,We)&&!I.hasOwnProperty(We)&&(Pe[We]=W[We]===void 0&&He!==void 0?He[We]:W[We])}var We=arguments.length-2;if(We===1)Pe.children=le;else if(1<We){He=Array(We);for(var tt=0;tt<We;tt++)He[tt]=arguments[tt+2];Pe.children=He}return{$$typeof:n,type:O.type,key:Ce,ref:Ve,props:Pe,_owner:Ue}},Re.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},Re.createElement=E,Re.createFactory=function(O){var W=E.bind(null,O);return W.type=O,W},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:h,render:O}},Re.isValidElement=C,Re.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ht}},Re.memo=function(O,W){return{$$typeof:f,type:O,compare:W===void 0?null:W}},Re.startTransition=function(O){var W=te.transition;te.transition={};try{O()}finally{te.transition=W}},Re.unstable_act=X,Re.useCallback=function(O,W){return we.current.useCallback(O,W)},Re.useContext=function(O){return we.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return we.current.useDeferredValue(O)},Re.useEffect=function(O,W){return we.current.useEffect(O,W)},Re.useId=function(){return we.current.useId()},Re.useImperativeHandle=function(O,W,le){return we.current.useImperativeHandle(O,W,le)},Re.useInsertionEffect=function(O,W){return we.current.useInsertionEffect(O,W)},Re.useLayoutEffect=function(O,W){return we.current.useLayoutEffect(O,W)},Re.useMemo=function(O,W){return we.current.useMemo(O,W)},Re.useReducer=function(O,W,le){return we.current.useReducer(O,W,le)},Re.useRef=function(O){return we.current.useRef(O)},Re.useState=function(O){return we.current.useState(O)},Re.useSyncExternalStore=function(O,W,le){return we.current.useSyncExternalStore(O,W,le)},Re.useTransition=function(){return we.current.useTransition()},Re.version="18.3.1",Re}var By;function cp(){return By||(By=1,qh.exports=Lj()),qh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky;function Fj(){if(Ky)return tl;Ky=1;var n=cp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(h,m,f){var g,b={},z=null,P=null;f!==void 0&&(z=""+f),m.key!==void 0&&(z=""+m.key),m.ref!==void 0&&(P=m.ref);for(g in m)o.call(m,g)&&!a.hasOwnProperty(g)&&(b[g]=m[g]);if(h&&h.defaultProps)for(g in m=h.defaultProps,m)b[g]===void 0&&(b[g]=m[g]);return{$$typeof:e,type:h,key:z,ref:P,props:b,_owner:s.current}}return tl.Fragment=t,tl.jsx=u,tl.jsxs=u,tl}var $y;function Uj(){return $y||($y=1,Gh.exports=Fj()),Gh.exports}var w=Uj(),re=cp();const Hj=F0(re);var ac={},Jh={exports:{}},hn={},Qh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy;function Bj(){return Wy||(Wy=1,function(n){function e(te,ve){var X=te.length;te.push(ve);e:for(;0<X;){var O=X-1>>>1,W=te[O];if(0<s(W,ve))te[O]=ve,te[X]=W,X=O;else break e}}function t(te){return te.length===0?null:te[0]}function o(te){if(te.length===0)return null;var ve=te[0],X=te.pop();if(X!==ve){te[0]=X;e:for(var O=0,W=te.length,le=W>>>1;O<le;){var Pe=2*(O+1)-1,Ce=te[Pe],Ve=Pe+1,Ue=te[Ve];if(0>s(Ce,X))Ve<W&&0>s(Ue,Ce)?(te[O]=Ue,te[Ve]=X,O=Ve):(te[O]=Ce,te[Pe]=X,O=Pe);else if(Ve<W&&0>s(Ue,X))te[O]=Ue,te[Ve]=X,O=Ve;else break e}}return ve}function s(te,ve){var X=te.sortIndex-ve.sortIndex;return X!==0?X:te.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var m=[],f=[],g=1,b=null,z=3,P=!1,N=!1,M=!1,L=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(te){for(var ve=t(f);ve!==null;){if(ve.callback===null)o(f);else if(ve.startTime<=te)o(f),ve.sortIndex=ve.expirationTime,e(m,ve);else break;ve=t(f)}}function oe(te){if(M=!1,Q(te),!N)if(t(m)!==null)N=!0,ht(ae);else{var ve=t(f);ve!==null&&we(oe,ve.startTime-te)}}function ae(te,ve){N=!1,M&&(M=!1,$(E),E=-1),P=!0;var X=z;try{for(Q(ve),b=t(m);b!==null&&(!(b.expirationTime>ve)||te&&!R());){var O=b.callback;if(typeof O=="function"){b.callback=null,z=b.priorityLevel;var W=O(b.expirationTime<=ve);ve=n.unstable_now(),typeof W=="function"?b.callback=W:b===t(m)&&o(m),Q(ve)}else o(m);b=t(m)}if(b!==null)var le=!0;else{var Pe=t(f);Pe!==null&&we(oe,Pe.startTime-ve),le=!1}return le}finally{b=null,z=X,P=!1}}var se=!1,I=null,E=-1,T=5,C=-1;function R(){return!(n.unstable_now()-C<T)}function D(){if(I!==null){var te=n.unstable_now();C=te;var ve=!0;try{ve=I(!0,te)}finally{ve?x():(se=!1,I=null)}}else se=!1}var x;if(typeof q=="function")x=function(){q(D)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,ot=qe.port2;qe.port1.onmessage=D,x=function(){ot.postMessage(null)}}else x=function(){L(D,0)};function ht(te){I=te,se||(se=!0,x())}function we(te,ve){E=L(function(){te(n.unstable_now())},ve)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(te){te.callback=null},n.unstable_continueExecution=function(){N||P||(N=!0,ht(ae))},n.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<te?Math.floor(1e3/te):5},n.unstable_getCurrentPriorityLevel=function(){return z},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(te){switch(z){case 1:case 2:case 3:var ve=3;break;default:ve=z}var X=z;z=ve;try{return te()}finally{z=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(te,ve){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var X=z;z=te;try{return ve()}finally{z=X}},n.unstable_scheduleCallback=function(te,ve,X){var O=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?O+X:O):X=O,te){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=X+W,te={id:g++,callback:ve,priorityLevel:te,startTime:X,expirationTime:W,sortIndex:-1},X>O?(te.sortIndex=X,e(f,te),t(m)===null&&te===t(f)&&(M?($(E),E=-1):M=!0,we(oe,X-O))):(te.sortIndex=W,e(m,te),N||P||(N=!0,ht(ae))),te},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(te){var ve=z;return function(){var X=z;z=ve;try{return te.apply(this,arguments)}finally{z=X}}}}(Zh)),Zh}var Gy;function Kj(){return Gy||(Gy=1,Qh.exports=Bj()),Qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy;function $j(){if(qy)return hn;qy=1;var n=cp(),e=Kj();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function a(r,i){u(r,i),u(r+"Capture",i)}function u(r,i){for(s[r]=i,r=0;r<i.length;r++)o.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},b={};function z(r){return m.call(b,r)?!0:m.call(g,r)?!1:f.test(r)?b[r]=!0:(g[r]=!0,!1)}function P(r,i,l,d){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,i,l,d){if(i===null||typeof i>"u"||P(r,i,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(r,i,l,d,p,y,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=i,this.sanitizeURL=y,this.removeEmptyString=_}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];L[i]=new M(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function q(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace($,q);L[i]=new M(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace($,q);L[i]=new M(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace($,q);L[i]=new M(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function Q(r,i,l,d){var p=L.hasOwnProperty(i)?L[i]:null;(p!==null?p.type!==0:d||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,l,p,d)&&(l=null),d||p===null?z(i)&&(l===null?r.removeAttribute(i):r.setAttribute(i,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(i=p.attributeName,d=p.attributeNamespace,l===null?r.removeAttribute(i):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?r.setAttributeNS(d,i,l):r.setAttribute(i,l))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),se=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),te=Symbol.iterator;function ve(r){return r===null||typeof r!="object"?null:(r=te&&r[te]||r["@@iterator"],typeof r=="function"?r:null)}var X=Object.assign,O;function W(r){if(O===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+r}var le=!1;function Pe(r,i){if(!r||le)return"";le=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(B){var d=B}Reflect.construct(r,[],i)}else{try{i.call()}catch(B){d=B}r.call(i.prototype)}else{try{throw Error()}catch(B){d=B}r()}}catch(B){if(B&&d&&typeof B.stack=="string"){for(var p=B.stack.split(`
`),y=d.stack.split(`
`),_=p.length-1,S=y.length-1;1<=_&&0<=S&&p[_]!==y[S];)S--;for(;1<=_&&0<=S;_--,S--)if(p[_]!==y[S]){if(_!==1||S!==1)do if(_--,S--,0>S||p[_]!==y[S]){var A=`
`+p[_].replace(" at new "," at ");return r.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",r.displayName)),A}while(1<=_&&0<=S);break}}}finally{le=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?W(r):""}function Ce(r){switch(r.tag){case 5:return W(r.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return r=Pe(r.type,!1),r;case 11:return r=Pe(r.type.render,!1),r;case 1:return r=Pe(r.type,!0),r;default:return""}}function Ve(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case se:return"Portal";case T:return"Profiler";case E:return"StrictMode";case x:return"Suspense";case qe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case R:return(r.displayName||"Context")+".Consumer";case C:return(r._context.displayName||"Context")+".Provider";case D:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ot:return i=r.displayName||null,i!==null?i:Ve(r.type)||"Memo";case ht:i=r._payload,r=r._init;try{return Ve(r(i))}catch{}}return null}function Ue(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function He(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function We(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tt(r){var i=We(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),d=""+r[i];if(!r.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return p.call(this)},set:function(_){d=""+_,y.call(this,_)}}),Object.defineProperty(r,i,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(_){d=""+_},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function On(r){r._valueTracker||(r._valueTracker=tt(r))}function to(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var l=i.getValue(),d="";return r&&(d=We(r)?r.checked?"true":"false":r.value),r=d,r!==l?(i.setValue(r),!0):!1}function Mn(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function de(r,i){var l=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function xe(r,i){var l=i.defaultValue==null?"":i.defaultValue,d=i.checked!=null?i.checked:i.defaultChecked;l=He(i.value!=null?i.value:l),r._wrapperState={initialChecked:d,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ae(r,i){i=i.checked,i!=null&&Q(r,"checked",i,!1)}function Oe(r,i){Ae(r,i);var l=He(i.value),d=i.type;if(l!=null)d==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?Sr(r,i.type,l):i.hasOwnProperty("defaultValue")&&Sr(r,i.type,He(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function mt(r,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var d=i.type;if(!(d!=="submit"&&d!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,l||i===r.value||(r.value=i),r.defaultValue=i}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Sr(r,i,l){(i!=="number"||Mn(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var pn=Array.isArray;function Xt(r,i,l,d){if(r=r.options,i){i={};for(var p=0;p<l.length;p++)i["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=i.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&d&&(r[l].defaultSelected=!0)}else{for(l=""+He(l),i=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,d&&(r[p].defaultSelected=!0);return}i!==null||r[p].disabled||(i=r[p])}i!==null&&(i.selected=!0)}}function ua(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Fi(r,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(t(92));if(pn(l)){if(1<l.length)throw Error(t(93));l=l[0]}i=l}i==null&&(i=""),l=i}r._wrapperState={initialValue:He(l)}}function Ui(r,i){var l=He(i.value),d=He(i.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),i.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),d!=null&&(r.defaultValue=""+d)}function ca(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function _t(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?_t(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Tr,da=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,d,p){MSApp.execUnsafeLocalFunction(function(){return r(i,l,d,p)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Tr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function no(r,i){if(i){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=i;return}}r.textContent=i}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qo=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(r){qo.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Go[i]=Go[r]})});function ha(r,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||Go.hasOwnProperty(r)&&Go[r]?(""+i).trim():i+"px"}function ma(r,i){r=r.style;for(var l in i)if(i.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=ha(l,i[l],d);l==="float"&&(l="cssFloat"),d?r.setProperty(l,p):r[l]=p}}var pa=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(r,i){if(i){if(pa[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function va(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function Hi(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Bi=null,zn=null,sr=null;function Ki(r){if(r=Fa(r)){if(typeof Bi!="function")throw Error(t(280));var i=r.stateNode;i&&(i=wu(i),Bi(r.stateNode,r.type,i))}}function ar(r){zn?sr?sr.push(r):sr=[r]:zn=r}function ya(){if(zn){var r=zn,i=sr;if(sr=zn=null,Ki(r),i)for(r=0;r<i.length;r++)Ki(i[r])}}function Qo(r,i){return r(i)}function ga(){}var xr=!1;function ka(r,i,l){if(xr)return r(i,l);xr=!0;try{return Qo(r,i,l)}finally{xr=!1,(zn!==null||sr!==null)&&(ga(),ya())}}function pt(r,i){var l=r.stateNode;if(l===null)return null;var d=wu(l);if(d===null)return null;l=d[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,i,typeof l));return l}var $i=!1;if(h)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){$i=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{$i=!1}function Zo(r,i,l,d,p,y,_,S,A){var B=Array.prototype.slice.call(arguments,3);try{i.apply(l,B)}catch(Z){this.onError(Z)}}var Xo=!1,Wi=null,Fn=!1,ba=null,_d={onError:function(r){Xo=!0,Wi=r}};function Gi(r,i,l,d,p,y,_,S,A){Xo=!1,Wi=null,Zo.apply(_d,arguments)}function Gl(r,i,l,d,p,y,_,S,A){if(Gi.apply(this,arguments),Xo){if(Xo){var B=Wi;Xo=!1,Wi=null}else throw Error(t(198));Fn||(Fn=!0,ba=B)}}function Un(r){var i=r,l=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(l=i.return),r=i.return;while(r)}return i.tag===3?l:null}function Yo(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Hn(r){if(Un(r)!==r)throw Error(t(188))}function ql(r){var i=r.alternate;if(!i){if(i=Un(r),i===null)throw Error(t(188));return i!==r?null:r}for(var l=r,d=i;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return Hn(p),r;if(y===d)return Hn(p),i;y=y.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=y;else{for(var _=!1,S=p.child;S;){if(S===l){_=!0,l=p,d=y;break}if(S===d){_=!0,d=p,l=y;break}S=S.sibling}if(!_){for(S=y.child;S;){if(S===l){_=!0,l=y,d=p;break}if(S===d){_=!0,d=y,l=p;break}S=S.sibling}if(!_)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:i}function _a(r){return r=ql(r),r!==null?qi(r):null}function qi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=qi(r);if(i!==null)return i;r=r.sibling}return null}var Ji=e.unstable_scheduleCallback,wa=e.unstable_cancelCallback,Jl=e.unstable_shouldYield,wd=e.unstable_requestPaint,Qe=e.unstable_now,Ql=e.unstable_getCurrentPriorityLevel,ei=e.unstable_ImmediatePriority,ro=e.unstable_UserBlockingPriority,jn=e.unstable_NormalPriority,za=e.unstable_LowPriority,Zl=e.unstable_IdlePriority,ti=null,fn=null;function Xl(r){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(ti,r,void 0,(r.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:eu,ja=Math.log,Yl=Math.LN2;function eu(r){return r>>>=0,r===0?32:31-(ja(r)/Yl|0)|0}var Qi=64,Zi=4194304;function oo(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ni(r,i){var l=r.pendingLanes;if(l===0)return 0;var d=0,p=r.suspendedLanes,y=r.pingedLanes,_=l&268435455;if(_!==0){var S=_&~p;S!==0?d=oo(S):(y&=_,y!==0&&(d=oo(y)))}else _=l&~p,_!==0?d=oo(_):y!==0&&(d=oo(y));if(d===0)return 0;if(i!==0&&i!==d&&(i&p)===0&&(p=d&-d,y=i&-i,p>=y||p===16&&(y&4194240)!==0))return i;if((d&4)!==0&&(d|=l&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=d;0<i;)l=31-Yt(i),p=1<<l,d|=r[l],i&=~p;return d}function zd(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pr(r,i){for(var l=r.suspendedLanes,d=r.pingedLanes,p=r.expirationTimes,y=r.pendingLanes;0<y;){var _=31-Yt(y),S=1<<_,A=p[_];A===-1?((S&l)===0||(S&d)!==0)&&(p[_]=zd(S,i)):A<=i&&(r.expiredLanes|=S),y&=~S}}function vn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ri(){var r=Qi;return Qi<<=1,(Qi&4194240)===0&&(Qi=64),r}function io(r){for(var i=[],l=0;31>l;l++)i.push(r);return i}function so(r,i,l){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Yt(i),r[i]=l}function Je(r,i){var l=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-Yt(l),y=1<<p;i[p]=0,d[p]=-1,r[p]=-1,l&=~y}}function ao(r,i){var l=r.entangledLanes|=i;for(r=r.entanglements;l;){var d=31-Yt(l),p=1<<d;p&i|r[d]&i&&(r[d]|=i),l&=~p}}var Me=0;function lo(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var tu,Xi,nu,ru,ou,Ea=!1,lr=[],Vt=null,Bn=null,Kn=null,uo=new Map,En=new Map,ur=[],jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iu(r,i){switch(r){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(i.pointerId)}}function on(r,i,l,d,p,y){return r===null||r.nativeEvent!==y?(r={blockedOn:i,domEventName:l,eventSystemFlags:d,nativeEvent:y,targetContainers:[p]},i!==null&&(i=Fa(i),i!==null&&Xi(i)),r):(r.eventSystemFlags|=d,i=r.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),r)}function Ed(r,i,l,d,p){switch(i){case"focusin":return Vt=on(Vt,r,i,l,d,p),!0;case"dragenter":return Bn=on(Bn,r,i,l,d,p),!0;case"mouseover":return Kn=on(Kn,r,i,l,d,p),!0;case"pointerover":var y=p.pointerId;return uo.set(y,on(uo.get(y)||null,r,i,l,d,p)),!0;case"gotpointercapture":return y=p.pointerId,En.set(y,on(En.get(y)||null,r,i,l,d,p)),!0}return!1}function su(r){var i=li(r.target);if(i!==null){var l=Un(i);if(l!==null){if(i=l.tag,i===13){if(i=Yo(l),i!==null){r.blockedOn=i,ou(r.priority,function(){nu(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Cr(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var l=Yi(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var d=new l.constructor(l.type,l);Jo=d,l.target.dispatchEvent(d),Jo=null}else return i=Fa(l),i!==null&&Xi(i),r.blockedOn=l,!1;i.shift()}return!0}function oi(r,i,l){Cr(r)&&l.delete(i)}function au(){Ea=!1,Vt!==null&&Cr(Vt)&&(Vt=null),Bn!==null&&Cr(Bn)&&(Bn=null),Kn!==null&&Cr(Kn)&&(Kn=null),uo.forEach(oi),En.forEach(oi)}function $n(r,i){r.blockedOn===i&&(r.blockedOn=null,Ea||(Ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,au)))}function Wn(r){function i(p){return $n(p,r)}if(0<lr.length){$n(lr[0],r);for(var l=1;l<lr.length;l++){var d=lr[l];d.blockedOn===r&&(d.blockedOn=null)}}for(Vt!==null&&$n(Vt,r),Bn!==null&&$n(Bn,r),Kn!==null&&$n(Kn,r),uo.forEach(i),En.forEach(i),l=0;l<ur.length;l++)d=ur[l],d.blockedOn===r&&(d.blockedOn=null);for(;0<ur.length&&(l=ur[0],l.blockedOn===null);)su(l),l.blockedOn===null&&ur.shift()}var Ir=oe.ReactCurrentBatchConfig,co=!0;function nt(r,i,l,d){var p=Me,y=Ir.transition;Ir.transition=null;try{Me=1,Sa(r,i,l,d)}finally{Me=p,Ir.transition=y}}function Sd(r,i,l,d){var p=Me,y=Ir.transition;Ir.transition=null;try{Me=4,Sa(r,i,l,d)}finally{Me=p,Ir.transition=y}}function Sa(r,i,l,d){if(co){var p=Yi(r,i,l,d);if(p===null)Od(r,i,d,ii,l),iu(r,d);else if(Ed(p,r,i,l,d))d.stopPropagation();else if(iu(r,d),i&4&&-1<jd.indexOf(r)){for(;p!==null;){var y=Fa(p);if(y!==null&&tu(y),y=Yi(r,i,l,d),y===null&&Od(r,i,d,ii,l),y===p)break;p=y}p!==null&&d.stopPropagation()}else Od(r,i,d,null,l)}}var ii=null;function Yi(r,i,l,d){if(ii=null,r=Hi(d),r=li(r),r!==null)if(i=Un(r),i===null)r=null;else if(l=i.tag,l===13){if(r=Yo(i),r!==null)return r;r=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return ii=r,null}function Ta(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ql()){case ei:return 1;case ro:return 4;case jn:case za:return 16;case Zl:return 536870912;default:return 16}default:return 16}}var yn=null,es=null,sn=null;function xa(){if(sn)return sn;var r,i=es,l=i.length,d,p="value"in yn?yn.value:yn.textContent,y=p.length;for(r=0;r<l&&i[r]===p[r];r++);var _=l-r;for(d=1;d<=_&&i[l-d]===p[y-d];d++);return sn=p.slice(r,1<d?1-d:void 0)}function ts(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function cr(){return!0}function Pa(){return!1}function Nt(r){function i(l,d,p,y,_){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=y,this.target=_,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(l=r[S],this[S]=l?l(y):y[S]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?cr:Pa,this.isPropagationStopped=Pa,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),i}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Nt(Gn),dr=X({},Gn,{view:0,detail:0}),Td=Nt(dr),rs,Ar,ho,si=X({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ho&&(ho&&r.type==="mousemove"?(rs=r.screenX-ho.screenX,Ar=r.screenY-ho.screenY):Ar=rs=0,ho=r),rs)},movementY:function(r){return"movementY"in r?r.movementY:Ar}}),os=Nt(si),Ca=X({},si,{dataTransfer:0}),lu=Nt(Ca),is=X({},dr,{relatedTarget:0}),ss=Nt(is),uu=X({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rr=Nt(uu),cu=X({},Gn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),du=Nt(cu),hu=X({},Gn,{data:0}),Ia=Nt(hu),as={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},en={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pu(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=mu[r])?!!i[r]:!1}function hr(){return pu}var c=X({},dr,{key:function(r){if(r.key){var i=as[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=ts(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?en[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(r){return r.type==="keypress"?ts(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ts(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),v=Nt(c),k=X({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j=Nt(k),F=X({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),K=Nt(F),ie=X({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ge=Nt(ie),zt=X({},si,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Nt(zt),Pt=[9,13,27,32],gt=h&&"CompositionEvent"in window,Sn=null;h&&"documentMode"in document&&(Sn=document.documentMode);var gn=h&&"TextEvent"in window&&!Sn,ai=h&&(!gt||Sn&&8<Sn&&11>=Sn),ls=" ",Df=!1;function Of(r,i){switch(r){case"keyup":return Pt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var us=!1;function Dz(r,i){switch(r){case"compositionend":return Mf(i);case"keypress":return i.which!==32?null:(Df=!0,ls);case"textInput":return r=i.data,r===ls&&Df?null:r;default:return null}}function Oz(r,i){if(us)return r==="compositionend"||!gt&&Of(r,i)?(r=xa(),sn=es=yn=null,us=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ai&&i.locale!=="ko"?null:i.data;default:return null}}var Mz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Mz[r.type]:i==="textarea"}function Ff(r,i,l,d){ar(d),i=ku(i,"onChange"),0<i.length&&(l=new ns("onChange","change",null,l,d),r.push({event:l,listeners:i}))}var Aa=null,Ra=null;function Lz(r){ov(r,0)}function fu(r){var i=ps(r);if(to(i))return r}function Fz(r,i){if(r==="change")return i}var Uf=!1;if(h){var xd;if(h){var Pd="oninput"in document;if(!Pd){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),Pd=typeof Hf.oninput=="function"}xd=Pd}else xd=!1;Uf=xd&&(!document.documentMode||9<document.documentMode)}function Bf(){Aa&&(Aa.detachEvent("onpropertychange",Kf),Ra=Aa=null)}function Kf(r){if(r.propertyName==="value"&&fu(Ra)){var i=[];Ff(i,Ra,r,Hi(r)),ka(Lz,i)}}function Uz(r,i,l){r==="focusin"?(Bf(),Aa=i,Ra=l,Aa.attachEvent("onpropertychange",Kf)):r==="focusout"&&Bf()}function Hz(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return fu(Ra)}function Bz(r,i){if(r==="click")return fu(i)}function Kz(r,i){if(r==="input"||r==="change")return fu(i)}function $z(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var qn=typeof Object.is=="function"?Object.is:$z;function Va(r,i){if(qn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var l=Object.keys(r),d=Object.keys(i);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!m.call(i,p)||!qn(r[p],i[p]))return!1}return!0}function $f(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Wf(r,i){var l=$f(r);r=0;for(var d;l;){if(l.nodeType===3){if(d=r+l.textContent.length,r<=i&&d>=i)return{node:l,offset:i-r};r=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$f(l)}}function Gf(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?Gf(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function qf(){for(var r=window,i=Mn();i instanceof r.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)r=i.contentWindow;else break;i=Mn(r.document)}return i}function Cd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function Wz(r){var i=qf(),l=r.focusedElem,d=r.selectionRange;if(i!==l&&l&&l.ownerDocument&&Gf(l.ownerDocument.documentElement,l)){if(d!==null&&Cd(l)){if(i=d.start,r=d.end,r===void 0&&(r=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(r,l.value.length);else if(r=(i=l.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,y=Math.min(d.start,p);d=d.end===void 0?y:Math.min(d.end,p),!r.extend&&y>d&&(p=d,d=y,y=p),p=Wf(l,y);var _=Wf(l,d);p&&_&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),r.removeAllRanges(),y>d?(r.addRange(i),r.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),r.addRange(i)))}}for(i=[],r=l;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)r=i[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Gz=h&&"documentMode"in document&&11>=document.documentMode,cs=null,Id=null,Na=null,Ad=!1;function Jf(r,i,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ad||cs==null||cs!==Mn(d)||(d=cs,"selectionStart"in d&&Cd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Na&&Va(Na,d)||(Na=d,d=ku(Id,"onSelect"),0<d.length&&(i=new ns("onSelect","select",null,i,l),r.push({event:i,listeners:d}),i.target=cs)))}function vu(r,i){var l={};return l[r.toLowerCase()]=i.toLowerCase(),l["Webkit"+r]="webkit"+i,l["Moz"+r]="moz"+i,l}var ds={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},Rd={},Qf={};h&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function yu(r){if(Rd[r])return Rd[r];if(!ds[r])return r;var i=ds[r],l;for(l in i)if(i.hasOwnProperty(l)&&l in Qf)return Rd[r]=i[l];return r}var Zf=yu("animationend"),Xf=yu("animationiteration"),Yf=yu("animationstart"),ev=yu("transitionend"),tv=new Map,nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mo(r,i){tv.set(r,i),a(i,[r])}for(var Vd=0;Vd<nv.length;Vd++){var Nd=nv[Vd],qz=Nd.toLowerCase(),Jz=Nd[0].toUpperCase()+Nd.slice(1);mo(qz,"on"+Jz)}mo(Zf,"onAnimationEnd"),mo(Xf,"onAnimationIteration"),mo(Yf,"onAnimationStart"),mo("dblclick","onDoubleClick"),mo("focusin","onFocus"),mo("focusout","onBlur"),mo(ev,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function rv(r,i,l){var d=r.type||"unknown-event";r.currentTarget=l,Gl(d,i,void 0,r),r.currentTarget=null}function ov(r,i){i=(i&4)!==0;for(var l=0;l<r.length;l++){var d=r[l],p=d.event;d=d.listeners;e:{var y=void 0;if(i)for(var _=d.length-1;0<=_;_--){var S=d[_],A=S.instance,B=S.currentTarget;if(S=S.listener,A!==y&&p.isPropagationStopped())break e;rv(p,S,B),y=A}else for(_=0;_<d.length;_++){if(S=d[_],A=S.instance,B=S.currentTarget,S=S.listener,A!==y&&p.isPropagationStopped())break e;rv(p,S,B),y=A}}}if(Fn)throw r=ba,Fn=!1,ba=null,r}function Ye(r,i){var l=i[Bd];l===void 0&&(l=i[Bd]=new Set);var d=r+"__bubble";l.has(d)||(iv(i,r,2,!1),l.add(d))}function Dd(r,i,l){var d=0;i&&(d|=4),iv(l,r,d,i)}var gu="_reactListening"+Math.random().toString(36).slice(2);function Oa(r){if(!r[gu]){r[gu]=!0,o.forEach(function(l){l!=="selectionchange"&&(Qz.has(l)||Dd(l,!1,r),Dd(l,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[gu]||(i[gu]=!0,Dd("selectionchange",!1,i))}}function iv(r,i,l,d){switch(Ta(i)){case 1:var p=nt;break;case 4:p=Sd;break;default:p=Sa}l=p.bind(null,i,l,r),p=void 0,!$i||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),d?p!==void 0?r.addEventListener(i,l,{capture:!0,passive:p}):r.addEventListener(i,l,!0):p!==void 0?r.addEventListener(i,l,{passive:p}):r.addEventListener(i,l,!1)}function Od(r,i,l,d,p){var y=d;if((i&1)===0&&(i&2)===0&&d!==null)e:for(;;){if(d===null)return;var _=d.tag;if(_===3||_===4){var S=d.stateNode.containerInfo;if(S===p||S.nodeType===8&&S.parentNode===p)break;if(_===4)for(_=d.return;_!==null;){var A=_.tag;if((A===3||A===4)&&(A=_.stateNode.containerInfo,A===p||A.nodeType===8&&A.parentNode===p))return;_=_.return}for(;S!==null;){if(_=li(S),_===null)return;if(A=_.tag,A===5||A===6){d=y=_;continue e}S=S.parentNode}}d=d.return}ka(function(){var B=y,Z=Hi(l),Y=[];e:{var J=tv.get(r);if(J!==void 0){var ue=ns,me=r;switch(r){case"keypress":if(ts(l)===0)break e;case"keydown":case"keyup":ue=v;break;case"focusin":me="focus",ue=ss;break;case"focusout":me="blur",ue=ss;break;case"beforeblur":case"afterblur":ue=ss;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=K;break;case Zf:case Xf:case Yf:ue=Rr;break;case ev:ue=Ge;break;case"scroll":ue=Td;break;case"wheel":ue=Le;break;case"copy":case"cut":case"paste":ue=du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=j}var pe=(i&4)!==0,ft=!pe&&r==="scroll",U=pe?J!==null?J+"Capture":null:J;pe=[];for(var V=B,H;V!==null;){H=V;var ne=H.stateNode;if(H.tag===5&&ne!==null&&(H=ne,U!==null&&(ne=pt(V,U),ne!=null&&pe.push(Ma(V,ne,H)))),ft)break;V=V.return}0<pe.length&&(J=new ue(J,me,null,l,Z),Y.push({event:J,listeners:pe}))}}if((i&7)===0){e:{if(J=r==="mouseover"||r==="pointerover",ue=r==="mouseout"||r==="pointerout",J&&l!==Jo&&(me=l.relatedTarget||l.fromElement)&&(li(me)||me[Vr]))break e;if((ue||J)&&(J=Z.window===Z?Z:(J=Z.ownerDocument)?J.defaultView||J.parentWindow:window,ue?(me=l.relatedTarget||l.toElement,ue=B,me=me?li(me):null,me!==null&&(ft=Un(me),me!==ft||me.tag!==5&&me.tag!==6)&&(me=null)):(ue=null,me=B),ue!==me)){if(pe=os,ne="onMouseLeave",U="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(pe=j,ne="onPointerLeave",U="onPointerEnter",V="pointer"),ft=ue==null?J:ps(ue),H=me==null?J:ps(me),J=new pe(ne,V+"leave",ue,l,Z),J.target=ft,J.relatedTarget=H,ne=null,li(Z)===B&&(pe=new pe(U,V+"enter",me,l,Z),pe.target=H,pe.relatedTarget=ft,ne=pe),ft=ne,ue&&me)t:{for(pe=ue,U=me,V=0,H=pe;H;H=hs(H))V++;for(H=0,ne=U;ne;ne=hs(ne))H++;for(;0<V-H;)pe=hs(pe),V--;for(;0<H-V;)U=hs(U),H--;for(;V--;){if(pe===U||U!==null&&pe===U.alternate)break t;pe=hs(pe),U=hs(U)}pe=null}else pe=null;ue!==null&&sv(Y,J,ue,pe,!1),me!==null&&ft!==null&&sv(Y,ft,me,pe,!0)}}e:{if(J=B?ps(B):window,ue=J.nodeName&&J.nodeName.toLowerCase(),ue==="select"||ue==="input"&&J.type==="file")var fe=Fz;else if(Lf(J))if(Uf)fe=Kz;else{fe=Hz;var ye=Uz}else(ue=J.nodeName)&&ue.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(fe=Bz);if(fe&&(fe=fe(r,B))){Ff(Y,fe,l,Z);break e}ye&&ye(r,J,B),r==="focusout"&&(ye=J._wrapperState)&&ye.controlled&&J.type==="number"&&Sr(J,"number",J.value)}switch(ye=B?ps(B):window,r){case"focusin":(Lf(ye)||ye.contentEditable==="true")&&(cs=ye,Id=B,Na=null);break;case"focusout":Na=Id=cs=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Jf(Y,l,Z);break;case"selectionchange":if(Gz)break;case"keydown":case"keyup":Jf(Y,l,Z)}var ge;if(gt)e:{switch(r){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else us?Of(r,l)&&(ze="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ze="onCompositionStart");ze&&(ai&&l.locale!=="ko"&&(us||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&us&&(ge=xa()):(yn=Z,es="value"in yn?yn.value:yn.textContent,us=!0)),ye=ku(B,ze),0<ye.length&&(ze=new Ia(ze,r,null,l,Z),Y.push({event:ze,listeners:ye}),ge?ze.data=ge:(ge=Mf(l),ge!==null&&(ze.data=ge)))),(ge=gn?Dz(r,l):Oz(r,l))&&(B=ku(B,"onBeforeInput"),0<B.length&&(Z=new Ia("onBeforeInput","beforeinput",null,l,Z),Y.push({event:Z,listeners:B}),Z.data=ge))}ov(Y,i)})}function Ma(r,i,l){return{instance:r,listener:i,currentTarget:l}}function ku(r,i){for(var l=i+"Capture",d=[];r!==null;){var p=r,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=pt(r,l),y!=null&&d.unshift(Ma(r,y,p)),y=pt(r,i),y!=null&&d.push(Ma(r,y,p))),r=r.return}return d}function hs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function sv(r,i,l,d,p){for(var y=i._reactName,_=[];l!==null&&l!==d;){var S=l,A=S.alternate,B=S.stateNode;if(A!==null&&A===d)break;S.tag===5&&B!==null&&(S=B,p?(A=pt(l,y),A!=null&&_.unshift(Ma(l,A,S))):p||(A=pt(l,y),A!=null&&_.push(Ma(l,A,S)))),l=l.return}_.length!==0&&r.push({event:i,listeners:_})}var Zz=/\r\n?/g,Xz=/\u0000|\uFFFD/g;function av(r){return(typeof r=="string"?r:""+r).replace(Zz,`
`).replace(Xz,"")}function bu(r,i,l){if(i=av(i),av(r)!==i&&l)throw Error(t(425))}function _u(){}var Md=null,Ld=null;function Fd(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,Yz=typeof clearTimeout=="function"?clearTimeout:void 0,lv=typeof Promise=="function"?Promise:void 0,ej=typeof queueMicrotask=="function"?queueMicrotask:typeof lv<"u"?function(r){return lv.resolve(null).then(r).catch(tj)}:Ud;function tj(r){setTimeout(function(){throw r})}function Hd(r,i){var l=i,d=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){r.removeChild(p),Wn(i);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Wn(i)}function po(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function uv(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return r;i--}else l==="/$"&&i++}r=r.previousSibling}return null}var ms=Math.random().toString(36).slice(2),mr="__reactFiber$"+ms,La="__reactProps$"+ms,Vr="__reactContainer$"+ms,Bd="__reactEvents$"+ms,nj="__reactListeners$"+ms,rj="__reactHandles$"+ms;function li(r){var i=r[mr];if(i)return i;for(var l=r.parentNode;l;){if(i=l[Vr]||l[mr]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(r=uv(r);r!==null;){if(l=r[mr])return l;r=uv(r)}return i}r=l,l=r.parentNode}return null}function Fa(r){return r=r[mr]||r[Vr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ps(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function wu(r){return r[La]||null}var Kd=[],fs=-1;function fo(r){return{current:r}}function et(r){0>fs||(r.current=Kd[fs],Kd[fs]=null,fs--)}function Ze(r,i){fs++,Kd[fs]=r.current,r.current=i}var vo={},Ht=fo(vo),an=fo(!1),ui=vo;function vs(r,i){var l=r.type.contextTypes;if(!l)return vo;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===i)return d.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=i[y];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=p),p}function ln(r){return r=r.childContextTypes,r!=null}function zu(){et(an),et(Ht)}function cv(r,i,l){if(Ht.current!==vo)throw Error(t(168));Ze(Ht,i),Ze(an,l)}function dv(r,i,l){var d=r.stateNode;if(i=i.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in i))throw Error(t(108,Ue(r)||"Unknown",p));return X({},l,d)}function ju(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||vo,ui=Ht.current,Ze(Ht,r),Ze(an,an.current),!0}function hv(r,i,l){var d=r.stateNode;if(!d)throw Error(t(169));l?(r=dv(r,i,ui),d.__reactInternalMemoizedMergedChildContext=r,et(an),et(Ht),Ze(Ht,r)):et(an),Ze(an,l)}var Nr=null,Eu=!1,$d=!1;function mv(r){Nr===null?Nr=[r]:Nr.push(r)}function oj(r){Eu=!0,mv(r)}function yo(){if(!$d&&Nr!==null){$d=!0;var r=0,i=Me;try{var l=Nr;for(Me=1;r<l.length;r++){var d=l[r];do d=d(!0);while(d!==null)}Nr=null,Eu=!1}catch(p){throw Nr!==null&&(Nr=Nr.slice(r+1)),Ji(ei,yo),p}finally{Me=i,$d=!1}}return null}var ys=[],gs=0,Su=null,Tu=0,Tn=[],xn=0,ci=null,Dr=1,Or="";function di(r,i){ys[gs++]=Tu,ys[gs++]=Su,Su=r,Tu=i}function pv(r,i,l){Tn[xn++]=Dr,Tn[xn++]=Or,Tn[xn++]=ci,ci=r;var d=Dr;r=Or;var p=32-Yt(d)-1;d&=~(1<<p),l+=1;var y=32-Yt(i)+p;if(30<y){var _=p-p%5;y=(d&(1<<_)-1).toString(32),d>>=_,p-=_,Dr=1<<32-Yt(i)+p|l<<p|d,Or=y+r}else Dr=1<<y|l<<p|d,Or=r}function Wd(r){r.return!==null&&(di(r,1),pv(r,1,0))}function Gd(r){for(;r===Su;)Su=ys[--gs],ys[gs]=null,Tu=ys[--gs],ys[gs]=null;for(;r===ci;)ci=Tn[--xn],Tn[xn]=null,Or=Tn[--xn],Tn[xn]=null,Dr=Tn[--xn],Tn[xn]=null}var kn=null,bn=null,rt=!1,Jn=null;function fv(r,i){var l=An(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=r,i=r.deletions,i===null?(r.deletions=[l],r.flags|=16):i.push(l)}function vv(r,i){switch(r.tag){case 5:var l=r.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,kn=r,bn=po(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,kn=r,bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=ci!==null?{id:Dr,overflow:Or}:null,r.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=An(18,null,null,0),l.stateNode=i,l.return=r,r.child=l,kn=r,bn=null,!0):!1;default:return!1}}function qd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Jd(r){if(rt){var i=bn;if(i){var l=i;if(!vv(r,i)){if(qd(r))throw Error(t(418));i=po(l.nextSibling);var d=kn;i&&vv(r,i)?fv(d,l):(r.flags=r.flags&-4097|2,rt=!1,kn=r)}}else{if(qd(r))throw Error(t(418));r.flags=r.flags&-4097|2,rt=!1,kn=r}}}function yv(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;kn=r}function xu(r){if(r!==kn)return!1;if(!rt)return yv(r),rt=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Fd(r.type,r.memoizedProps)),i&&(i=bn)){if(qd(r))throw gv(),Error(t(418));for(;i;)fv(r,i),i=po(i.nextSibling)}if(yv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(i===0){bn=po(r.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}r=r.nextSibling}bn=null}}else bn=kn?po(r.stateNode.nextSibling):null;return!0}function gv(){for(var r=bn;r;)r=po(r.nextSibling)}function ks(){bn=kn=null,rt=!1}function Qd(r){Jn===null?Jn=[r]:Jn.push(r)}var ij=oe.ReactCurrentBatchConfig;function Ua(r,i,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,r));var p=d,y=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===y?i.ref:(i=function(_){var S=p.refs;_===null?delete S[y]:S[y]=_},i._stringRef=y,i)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Pu(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function kv(r){var i=r._init;return i(r._payload)}function bv(r){function i(U,V){if(r){var H=U.deletions;H===null?(U.deletions=[V],U.flags|=16):H.push(V)}}function l(U,V){if(!r)return null;for(;V!==null;)i(U,V),V=V.sibling;return null}function d(U,V){for(U=new Map;V!==null;)V.key!==null?U.set(V.key,V):U.set(V.index,V),V=V.sibling;return U}function p(U,V){return U=Eo(U,V),U.index=0,U.sibling=null,U}function y(U,V,H){return U.index=H,r?(H=U.alternate,H!==null?(H=H.index,H<V?(U.flags|=2,V):H):(U.flags|=2,V)):(U.flags|=1048576,V)}function _(U){return r&&U.alternate===null&&(U.flags|=2),U}function S(U,V,H,ne){return V===null||V.tag!==6?(V=Uh(H,U.mode,ne),V.return=U,V):(V=p(V,H),V.return=U,V)}function A(U,V,H,ne){var fe=H.type;return fe===I?Z(U,V,H.props.children,ne,H.key):V!==null&&(V.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===ht&&kv(fe)===V.type)?(ne=p(V,H.props),ne.ref=Ua(U,V,H),ne.return=U,ne):(ne=Yu(H.type,H.key,H.props,null,U.mode,ne),ne.ref=Ua(U,V,H),ne.return=U,ne)}function B(U,V,H,ne){return V===null||V.tag!==4||V.stateNode.containerInfo!==H.containerInfo||V.stateNode.implementation!==H.implementation?(V=Hh(H,U.mode,ne),V.return=U,V):(V=p(V,H.children||[]),V.return=U,V)}function Z(U,V,H,ne,fe){return V===null||V.tag!==7?(V=ki(H,U.mode,ne,fe),V.return=U,V):(V=p(V,H),V.return=U,V)}function Y(U,V,H){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Uh(""+V,U.mode,H),V.return=U,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ae:return H=Yu(V.type,V.key,V.props,null,U.mode,H),H.ref=Ua(U,null,V),H.return=U,H;case se:return V=Hh(V,U.mode,H),V.return=U,V;case ht:var ne=V._init;return Y(U,ne(V._payload),H)}if(pn(V)||ve(V))return V=ki(V,U.mode,H,null),V.return=U,V;Pu(U,V)}return null}function J(U,V,H,ne){var fe=V!==null?V.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return fe!==null?null:S(U,V,""+H,ne);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case ae:return H.key===fe?A(U,V,H,ne):null;case se:return H.key===fe?B(U,V,H,ne):null;case ht:return fe=H._init,J(U,V,fe(H._payload),ne)}if(pn(H)||ve(H))return fe!==null?null:Z(U,V,H,ne,null);Pu(U,H)}return null}function ue(U,V,H,ne,fe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(H)||null,S(V,U,""+ne,fe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case ae:return U=U.get(ne.key===null?H:ne.key)||null,A(V,U,ne,fe);case se:return U=U.get(ne.key===null?H:ne.key)||null,B(V,U,ne,fe);case ht:var ye=ne._init;return ue(U,V,H,ye(ne._payload),fe)}if(pn(ne)||ve(ne))return U=U.get(H)||null,Z(V,U,ne,fe,null);Pu(V,ne)}return null}function me(U,V,H,ne){for(var fe=null,ye=null,ge=V,ze=V=0,At=null;ge!==null&&ze<H.length;ze++){ge.index>ze?(At=ge,ge=null):At=ge.sibling;var Ke=J(U,ge,H[ze],ne);if(Ke===null){ge===null&&(ge=At);break}r&&ge&&Ke.alternate===null&&i(U,ge),V=y(Ke,V,ze),ye===null?fe=Ke:ye.sibling=Ke,ye=Ke,ge=At}if(ze===H.length)return l(U,ge),rt&&di(U,ze),fe;if(ge===null){for(;ze<H.length;ze++)ge=Y(U,H[ze],ne),ge!==null&&(V=y(ge,V,ze),ye===null?fe=ge:ye.sibling=ge,ye=ge);return rt&&di(U,ze),fe}for(ge=d(U,ge);ze<H.length;ze++)At=ue(ge,U,ze,H[ze],ne),At!==null&&(r&&At.alternate!==null&&ge.delete(At.key===null?ze:At.key),V=y(At,V,ze),ye===null?fe=At:ye.sibling=At,ye=At);return r&&ge.forEach(function(So){return i(U,So)}),rt&&di(U,ze),fe}function pe(U,V,H,ne){var fe=ve(H);if(typeof fe!="function")throw Error(t(150));if(H=fe.call(H),H==null)throw Error(t(151));for(var ye=fe=null,ge=V,ze=V=0,At=null,Ke=H.next();ge!==null&&!Ke.done;ze++,Ke=H.next()){ge.index>ze?(At=ge,ge=null):At=ge.sibling;var So=J(U,ge,Ke.value,ne);if(So===null){ge===null&&(ge=At);break}r&&ge&&So.alternate===null&&i(U,ge),V=y(So,V,ze),ye===null?fe=So:ye.sibling=So,ye=So,ge=At}if(Ke.done)return l(U,ge),rt&&di(U,ze),fe;if(ge===null){for(;!Ke.done;ze++,Ke=H.next())Ke=Y(U,Ke.value,ne),Ke!==null&&(V=y(Ke,V,ze),ye===null?fe=Ke:ye.sibling=Ke,ye=Ke);return rt&&di(U,ze),fe}for(ge=d(U,ge);!Ke.done;ze++,Ke=H.next())Ke=ue(ge,U,ze,Ke.value,ne),Ke!==null&&(r&&Ke.alternate!==null&&ge.delete(Ke.key===null?ze:Ke.key),V=y(Ke,V,ze),ye===null?fe=Ke:ye.sibling=Ke,ye=Ke);return r&&ge.forEach(function(Mj){return i(U,Mj)}),rt&&di(U,ze),fe}function ft(U,V,H,ne){if(typeof H=="object"&&H!==null&&H.type===I&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case ae:e:{for(var fe=H.key,ye=V;ye!==null;){if(ye.key===fe){if(fe=H.type,fe===I){if(ye.tag===7){l(U,ye.sibling),V=p(ye,H.props.children),V.return=U,U=V;break e}}else if(ye.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===ht&&kv(fe)===ye.type){l(U,ye.sibling),V=p(ye,H.props),V.ref=Ua(U,ye,H),V.return=U,U=V;break e}l(U,ye);break}else i(U,ye);ye=ye.sibling}H.type===I?(V=ki(H.props.children,U.mode,ne,H.key),V.return=U,U=V):(ne=Yu(H.type,H.key,H.props,null,U.mode,ne),ne.ref=Ua(U,V,H),ne.return=U,U=ne)}return _(U);case se:e:{for(ye=H.key;V!==null;){if(V.key===ye)if(V.tag===4&&V.stateNode.containerInfo===H.containerInfo&&V.stateNode.implementation===H.implementation){l(U,V.sibling),V=p(V,H.children||[]),V.return=U,U=V;break e}else{l(U,V);break}else i(U,V);V=V.sibling}V=Hh(H,U.mode,ne),V.return=U,U=V}return _(U);case ht:return ye=H._init,ft(U,V,ye(H._payload),ne)}if(pn(H))return me(U,V,H,ne);if(ve(H))return pe(U,V,H,ne);Pu(U,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,V!==null&&V.tag===6?(l(U,V.sibling),V=p(V,H),V.return=U,U=V):(l(U,V),V=Uh(H,U.mode,ne),V.return=U,U=V),_(U)):l(U,V)}return ft}var bs=bv(!0),_v=bv(!1),Cu=fo(null),Iu=null,_s=null,Zd=null;function Xd(){Zd=_s=Iu=null}function Yd(r){var i=Cu.current;et(Cu),r._currentValue=i}function eh(r,i,l){for(;r!==null;){var d=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,d!==null&&(d.childLanes|=i)):d!==null&&(d.childLanes&i)!==i&&(d.childLanes|=i),r===l)break;r=r.return}}function ws(r,i){Iu=r,Zd=_s=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(un=!0),r.firstContext=null)}function Pn(r){var i=r._currentValue;if(Zd!==r)if(r={context:r,memoizedValue:i,next:null},_s===null){if(Iu===null)throw Error(t(308));_s=r,Iu.dependencies={lanes:0,firstContext:r}}else _s=_s.next=r;return i}var hi=null;function th(r){hi===null?hi=[r]:hi.push(r)}function wv(r,i,l,d){var p=i.interleaved;return p===null?(l.next=l,th(i)):(l.next=p.next,p.next=l),i.interleaved=l,Mr(r,d)}function Mr(r,i){r.lanes|=i;var l=r.alternate;for(l!==null&&(l.lanes|=i),l=r,r=r.return;r!==null;)r.childLanes|=i,l=r.alternate,l!==null&&(l.childLanes|=i),l=r,r=r.return;return l.tag===3?l.stateNode:null}var go=!1;function nh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Lr(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function ko(r,i,l){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Be&2)!==0){var p=d.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),d.pending=i,Mr(r,l)}return p=d.interleaved,p===null?(i.next=i,th(d)):(i.next=p.next,p.next=i),d.interleaved=i,Mr(r,l)}function Au(r,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var d=i.lanes;d&=r.pendingLanes,l|=d,i.lanes=l,ao(r,l)}}function jv(r,i){var l=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var _={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=_:y=y.next=_,l=l.next}while(l!==null);y===null?p=y=i:y=y.next=i}else p=y=i;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:d.shared,effects:d.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=i:r.next=i,l.lastBaseUpdate=i}function Ru(r,i,l,d){var p=r.updateQueue;go=!1;var y=p.firstBaseUpdate,_=p.lastBaseUpdate,S=p.shared.pending;if(S!==null){p.shared.pending=null;var A=S,B=A.next;A.next=null,_===null?y=B:_.next=B,_=A;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,S=Z.lastBaseUpdate,S!==_&&(S===null?Z.firstBaseUpdate=B:S.next=B,Z.lastBaseUpdate=A))}if(y!==null){var Y=p.baseState;_=0,Z=B=A=null,S=y;do{var J=S.lane,ue=S.eventTime;if((d&J)===J){Z!==null&&(Z=Z.next={eventTime:ue,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var me=r,pe=S;switch(J=i,ue=l,pe.tag){case 1:if(me=pe.payload,typeof me=="function"){Y=me.call(ue,Y,J);break e}Y=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=pe.payload,J=typeof me=="function"?me.call(ue,Y,J):me,J==null)break e;Y=X({},Y,J);break e;case 2:go=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,J=p.effects,J===null?p.effects=[S]:J.push(S))}else ue={eventTime:ue,lane:J,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Z===null?(B=Z=ue,A=Y):Z=Z.next=ue,_|=J;if(S=S.next,S===null){if(S=p.shared.pending,S===null)break;J=S,S=J.next,J.next=null,p.lastBaseUpdate=J,p.shared.pending=null}}while(!0);if(Z===null&&(A=Y),p.baseState=A,p.firstBaseUpdate=B,p.lastBaseUpdate=Z,i=p.shared.interleaved,i!==null){p=i;do _|=p.lane,p=p.next;while(p!==i)}else y===null&&(p.shared.lanes=0);fi|=_,r.lanes=_,r.memoizedState=Y}}function Ev(r,i,l){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var d=r[i],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Ha={},pr=fo(Ha),Ba=fo(Ha),Ka=fo(Ha);function mi(r){if(r===Ha)throw Error(t(174));return r}function rh(r,i){switch(Ze(Ka,i),Ze(Ba,r),Ze(pr,Ha),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:wt(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=wt(i,r)}et(pr),Ze(pr,i)}function zs(){et(pr),et(Ba),et(Ka)}function Sv(r){mi(Ka.current);var i=mi(pr.current),l=wt(i,r.type);i!==l&&(Ze(Ba,r),Ze(pr,l))}function oh(r){Ba.current===r&&(et(pr),et(Ba))}var it=fo(0);function Vu(r){for(var i=r;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ih=[];function sh(){for(var r=0;r<ih.length;r++)ih[r]._workInProgressVersionPrimary=null;ih.length=0}var Nu=oe.ReactCurrentDispatcher,ah=oe.ReactCurrentBatchConfig,pi=0,st=null,jt=null,Ct=null,Du=!1,$a=!1,Wa=0,sj=0;function Bt(){throw Error(t(321))}function lh(r,i){if(i===null)return!1;for(var l=0;l<i.length&&l<r.length;l++)if(!qn(r[l],i[l]))return!1;return!0}function uh(r,i,l,d,p,y){if(pi=y,st=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Nu.current=r===null||r.memoizedState===null?cj:dj,r=l(d,p),$a){y=0;do{if($a=!1,Wa=0,25<=y)throw Error(t(301));y+=1,Ct=jt=null,i.updateQueue=null,Nu.current=hj,r=l(d,p)}while($a)}if(Nu.current=Lu,i=jt!==null&&jt.next!==null,pi=0,Ct=jt=st=null,Du=!1,i)throw Error(t(300));return r}function ch(){var r=Wa!==0;return Wa=0,r}function fr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?st.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function Cn(){if(jt===null){var r=st.alternate;r=r!==null?r.memoizedState:null}else r=jt.next;var i=Ct===null?st.memoizedState:Ct.next;if(i!==null)Ct=i,jt=r;else{if(r===null)throw Error(t(310));jt=r,r={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Ct===null?st.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}function Ga(r,i){return typeof i=="function"?i(r):i}function dh(r){var i=Cn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=jt,p=d.baseQueue,y=l.pending;if(y!==null){if(p!==null){var _=p.next;p.next=y.next,y.next=_}d.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,d=d.baseState;var S=_=null,A=null,B=y;do{var Z=B.lane;if((pi&Z)===Z)A!==null&&(A=A.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),d=B.hasEagerState?B.eagerState:r(d,B.action);else{var Y={lane:Z,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};A===null?(S=A=Y,_=d):A=A.next=Y,st.lanes|=Z,fi|=Z}B=B.next}while(B!==null&&B!==y);A===null?_=d:A.next=S,qn(d,i.memoizedState)||(un=!0),i.memoizedState=d,i.baseState=_,i.baseQueue=A,l.lastRenderedState=d}if(r=l.interleaved,r!==null){p=r;do y=p.lane,st.lanes|=y,fi|=y,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function hh(r){var i=Cn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=l.dispatch,p=l.pending,y=i.memoizedState;if(p!==null){l.pending=null;var _=p=p.next;do y=r(y,_.action),_=_.next;while(_!==p);qn(y,i.memoizedState)||(un=!0),i.memoizedState=y,i.baseQueue===null&&(i.baseState=y),l.lastRenderedState=y}return[y,d]}function Tv(){}function xv(r,i){var l=st,d=Cn(),p=i(),y=!qn(d.memoizedState,p);if(y&&(d.memoizedState=p,un=!0),d=d.queue,mh(Iv.bind(null,l,d,r),[r]),d.getSnapshot!==i||y||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,qa(9,Cv.bind(null,l,d,p,i),void 0,null),It===null)throw Error(t(349));(pi&30)!==0||Pv(l,i,p)}return p}function Pv(r,i,l){r.flags|=16384,r={getSnapshot:i,value:l},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.stores=[r]):(l=i.stores,l===null?i.stores=[r]:l.push(r))}function Cv(r,i,l,d){i.value=l,i.getSnapshot=d,Av(i)&&Rv(r)}function Iv(r,i,l){return l(function(){Av(i)&&Rv(r)})}function Av(r){var i=r.getSnapshot;r=r.value;try{var l=i();return!qn(r,l)}catch{return!0}}function Rv(r){var i=Mr(r,1);i!==null&&Yn(i,r,1,-1)}function Vv(r){var i=fr();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:r},i.queue=r,r=r.dispatch=uj.bind(null,st,r),[i.memoizedState,r]}function qa(r,i,l,d){return r={tag:r,create:i,destroy:l,deps:d,next:null},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.lastEffect=r.next=r):(l=i.lastEffect,l===null?i.lastEffect=r.next=r:(d=l.next,l.next=r,r.next=d,i.lastEffect=r)),r}function Nv(){return Cn().memoizedState}function Ou(r,i,l,d){var p=fr();st.flags|=r,p.memoizedState=qa(1|i,l,void 0,d===void 0?null:d)}function Mu(r,i,l,d){var p=Cn();d=d===void 0?null:d;var y=void 0;if(jt!==null){var _=jt.memoizedState;if(y=_.destroy,d!==null&&lh(d,_.deps)){p.memoizedState=qa(i,l,y,d);return}}st.flags|=r,p.memoizedState=qa(1|i,l,y,d)}function Dv(r,i){return Ou(8390656,8,r,i)}function mh(r,i){return Mu(2048,8,r,i)}function Ov(r,i){return Mu(4,2,r,i)}function Mv(r,i){return Mu(4,4,r,i)}function Lv(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Fv(r,i,l){return l=l!=null?l.concat([r]):null,Mu(4,4,Lv.bind(null,i,r),l)}function ph(){}function Uv(r,i){var l=Cn();i=i===void 0?null:i;var d=l.memoizedState;return d!==null&&i!==null&&lh(i,d[1])?d[0]:(l.memoizedState=[r,i],r)}function Hv(r,i){var l=Cn();i=i===void 0?null:i;var d=l.memoizedState;return d!==null&&i!==null&&lh(i,d[1])?d[0]:(r=r(),l.memoizedState=[r,i],r)}function Bv(r,i,l){return(pi&21)===0?(r.baseState&&(r.baseState=!1,un=!0),r.memoizedState=l):(qn(l,i)||(l=ri(),st.lanes|=l,fi|=l,r.baseState=!0),i)}function aj(r,i){var l=Me;Me=l!==0&&4>l?l:4,r(!0);var d=ah.transition;ah.transition={};try{r(!1),i()}finally{Me=l,ah.transition=d}}function Kv(){return Cn().memoizedState}function lj(r,i,l){var d=zo(r);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},$v(r))Wv(i,l);else if(l=wv(r,i,l,d),l!==null){var p=nn();Yn(l,r,d,p),Gv(l,i,d)}}function uj(r,i,l){var d=zo(r),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if($v(r))Wv(i,p);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=i.lastRenderedReducer,y!==null))try{var _=i.lastRenderedState,S=y(_,l);if(p.hasEagerState=!0,p.eagerState=S,qn(S,_)){var A=i.interleaved;A===null?(p.next=p,th(i)):(p.next=A.next,A.next=p),i.interleaved=p;return}}catch{}finally{}l=wv(r,i,p,d),l!==null&&(p=nn(),Yn(l,r,d,p),Gv(l,i,d))}}function $v(r){var i=r.alternate;return r===st||i!==null&&i===st}function Wv(r,i){$a=Du=!0;var l=r.pending;l===null?i.next=i:(i.next=l.next,l.next=i),r.pending=i}function Gv(r,i,l){if((l&4194240)!==0){var d=i.lanes;d&=r.pendingLanes,l|=d,i.lanes=l,ao(r,l)}}var Lu={readContext:Pn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},cj={readContext:Pn,useCallback:function(r,i){return fr().memoizedState=[r,i===void 0?null:i],r},useContext:Pn,useEffect:Dv,useImperativeHandle:function(r,i,l){return l=l!=null?l.concat([r]):null,Ou(4194308,4,Lv.bind(null,i,r),l)},useLayoutEffect:function(r,i){return Ou(4194308,4,r,i)},useInsertionEffect:function(r,i){return Ou(4,2,r,i)},useMemo:function(r,i){var l=fr();return i=i===void 0?null:i,r=r(),l.memoizedState=[r,i],r},useReducer:function(r,i,l){var d=fr();return i=l!==void 0?l(i):i,d.memoizedState=d.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},d.queue=r,r=r.dispatch=lj.bind(null,st,r),[d.memoizedState,r]},useRef:function(r){var i=fr();return r={current:r},i.memoizedState=r},useState:Vv,useDebugValue:ph,useDeferredValue:function(r){return fr().memoizedState=r},useTransition:function(){var r=Vv(!1),i=r[0];return r=aj.bind(null,r[1]),fr().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,l){var d=st,p=fr();if(rt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=i(),It===null)throw Error(t(349));(pi&30)!==0||Pv(d,i,l)}p.memoizedState=l;var y={value:l,getSnapshot:i};return p.queue=y,Dv(Iv.bind(null,d,y,r),[r]),d.flags|=2048,qa(9,Cv.bind(null,d,y,l,i),void 0,null),l},useId:function(){var r=fr(),i=It.identifierPrefix;if(rt){var l=Or,d=Dr;l=(d&~(1<<32-Yt(d)-1)).toString(32)+l,i=":"+i+"R"+l,l=Wa++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=sj++,i=":"+i+"r"+l.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},dj={readContext:Pn,useCallback:Uv,useContext:Pn,useEffect:mh,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:Mv,useMemo:Hv,useReducer:dh,useRef:Nv,useState:function(){return dh(Ga)},useDebugValue:ph,useDeferredValue:function(r){var i=Cn();return Bv(i,jt.memoizedState,r)},useTransition:function(){var r=dh(Ga)[0],i=Cn().memoizedState;return[r,i]},useMutableSource:Tv,useSyncExternalStore:xv,useId:Kv,unstable_isNewReconciler:!1},hj={readContext:Pn,useCallback:Uv,useContext:Pn,useEffect:mh,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:Mv,useMemo:Hv,useReducer:hh,useRef:Nv,useState:function(){return hh(Ga)},useDebugValue:ph,useDeferredValue:function(r){var i=Cn();return jt===null?i.memoizedState=r:Bv(i,jt.memoizedState,r)},useTransition:function(){var r=hh(Ga)[0],i=Cn().memoizedState;return[r,i]},useMutableSource:Tv,useSyncExternalStore:xv,useId:Kv,unstable_isNewReconciler:!1};function Qn(r,i){if(r&&r.defaultProps){i=X({},i),r=r.defaultProps;for(var l in r)i[l]===void 0&&(i[l]=r[l]);return i}return i}function fh(r,i,l,d){i=r.memoizedState,l=l(d,i),l=l==null?i:X({},i,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Fu={isMounted:function(r){return(r=r._reactInternals)?Un(r)===r:!1},enqueueSetState:function(r,i,l){r=r._reactInternals;var d=nn(),p=zo(r),y=Lr(d,p);y.payload=i,l!=null&&(y.callback=l),i=ko(r,y,p),i!==null&&(Yn(i,r,p,d),Au(i,r,p))},enqueueReplaceState:function(r,i,l){r=r._reactInternals;var d=nn(),p=zo(r),y=Lr(d,p);y.tag=1,y.payload=i,l!=null&&(y.callback=l),i=ko(r,y,p),i!==null&&(Yn(i,r,p,d),Au(i,r,p))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var l=nn(),d=zo(r),p=Lr(l,d);p.tag=2,i!=null&&(p.callback=i),i=ko(r,p,d),i!==null&&(Yn(i,r,d,l),Au(i,r,d))}};function qv(r,i,l,d,p,y,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,y,_):i.prototype&&i.prototype.isPureReactComponent?!Va(l,d)||!Va(p,y):!0}function Jv(r,i,l){var d=!1,p=vo,y=i.contextType;return typeof y=="object"&&y!==null?y=Pn(y):(p=ln(i)?ui:Ht.current,d=i.contextTypes,y=(d=d!=null)?vs(r,p):vo),i=new i(l,y),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fu,r.stateNode=i,i._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=y),i}function Qv(r,i,l,d){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,d),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,d),i.state!==r&&Fu.enqueueReplaceState(i,i.state,null)}function vh(r,i,l,d){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},nh(r);var y=i.contextType;typeof y=="object"&&y!==null?p.context=Pn(y):(y=ln(i)?ui:Ht.current,p.context=vs(r,y)),p.state=r.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(fh(r,i,y,l),p.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&Fu.enqueueReplaceState(p,p.state,null),Ru(r,l,p,d),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function js(r,i){try{var l="",d=i;do l+=Ce(d),d=d.return;while(d);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:i,stack:p,digest:null}}function yh(r,i,l){return{value:r,source:null,stack:l??null,digest:i??null}}function gh(r,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var mj=typeof WeakMap=="function"?WeakMap:Map;function Zv(r,i,l){l=Lr(-1,l),l.tag=3,l.payload={element:null};var d=i.value;return l.callback=function(){Gu||(Gu=!0,Rh=d),gh(r,i)},l}function Xv(r,i,l){l=Lr(-1,l),l.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var p=i.value;l.payload=function(){return d(p)},l.callback=function(){gh(r,i)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){gh(r,i),typeof d!="function"&&(_o===null?_o=new Set([this]):_o.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),l}function Yv(r,i,l){var d=r.pingCache;if(d===null){d=r.pingCache=new mj;var p=new Set;d.set(i,p)}else p=d.get(i),p===void 0&&(p=new Set,d.set(i,p));p.has(l)||(p.add(l),r=Tj.bind(null,r,i,l),i.then(r,r))}function ey(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function ty(r,i,l,d,p){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=Lr(-1,1),i.tag=2,ko(l,i,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=p,r)}var pj=oe.ReactCurrentOwner,un=!1;function tn(r,i,l,d){i.child=r===null?_v(i,null,l,d):bs(i,r.child,l,d)}function ny(r,i,l,d,p){l=l.render;var y=i.ref;return ws(i,p),d=uh(r,i,l,d,y,p),l=ch(),r!==null&&!un?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~p,Fr(r,i,p)):(rt&&l&&Wd(i),i.flags|=1,tn(r,i,d,p),i.child)}function ry(r,i,l,d,p){if(r===null){var y=l.type;return typeof y=="function"&&!Fh(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=y,oy(r,i,y,d,p)):(r=Yu(l.type,null,d,i,i.mode,p),r.ref=i.ref,r.return=i,i.child=r)}if(y=r.child,(r.lanes&p)===0){var _=y.memoizedProps;if(l=l.compare,l=l!==null?l:Va,l(_,d)&&r.ref===i.ref)return Fr(r,i,p)}return i.flags|=1,r=Eo(y,d),r.ref=i.ref,r.return=i,i.child=r}function oy(r,i,l,d,p){if(r!==null){var y=r.memoizedProps;if(Va(y,d)&&r.ref===i.ref)if(un=!1,i.pendingProps=d=y,(r.lanes&p)!==0)(r.flags&131072)!==0&&(un=!0);else return i.lanes=r.lanes,Fr(r,i,p)}return kh(r,i,l,d,p)}function iy(r,i,l){var d=i.pendingProps,p=d.children,y=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Ss,_n),_n|=l;else{if((l&1073741824)===0)return r=y!==null?y.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Ze(Ss,_n),_n|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:l,Ze(Ss,_n),_n|=d}else y!==null?(d=y.baseLanes|l,i.memoizedState=null):d=l,Ze(Ss,_n),_n|=d;return tn(r,i,p,l),i.child}function sy(r,i){var l=i.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function kh(r,i,l,d,p){var y=ln(l)?ui:Ht.current;return y=vs(i,y),ws(i,p),l=uh(r,i,l,d,y,p),d=ch(),r!==null&&!un?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~p,Fr(r,i,p)):(rt&&d&&Wd(i),i.flags|=1,tn(r,i,l,p),i.child)}function ay(r,i,l,d,p){if(ln(l)){var y=!0;ju(i)}else y=!1;if(ws(i,p),i.stateNode===null)Hu(r,i),Jv(i,l,d),vh(i,l,d,p),d=!0;else if(r===null){var _=i.stateNode,S=i.memoizedProps;_.props=S;var A=_.context,B=l.contextType;typeof B=="object"&&B!==null?B=Pn(B):(B=ln(l)?ui:Ht.current,B=vs(i,B));var Z=l.getDerivedStateFromProps,Y=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function";Y||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==d||A!==B)&&Qv(i,_,d,B),go=!1;var J=i.memoizedState;_.state=J,Ru(i,d,_,p),A=i.memoizedState,S!==d||J!==A||an.current||go?(typeof Z=="function"&&(fh(i,l,Z,d),A=i.memoizedState),(S=go||qv(i,l,S,d,J,A,B))?(Y||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=d,i.memoizedState=A),_.props=d,_.state=A,_.context=B,d=S):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),d=!1)}else{_=i.stateNode,zv(r,i),S=i.memoizedProps,B=i.type===i.elementType?S:Qn(i.type,S),_.props=B,Y=i.pendingProps,J=_.context,A=l.contextType,typeof A=="object"&&A!==null?A=Pn(A):(A=ln(l)?ui:Ht.current,A=vs(i,A));var ue=l.getDerivedStateFromProps;(Z=typeof ue=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==Y||J!==A)&&Qv(i,_,d,A),go=!1,J=i.memoizedState,_.state=J,Ru(i,d,_,p);var me=i.memoizedState;S!==Y||J!==me||an.current||go?(typeof ue=="function"&&(fh(i,l,ue,d),me=i.memoizedState),(B=go||qv(i,l,B,d,J,me,A)||!1)?(Z||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(d,me,A),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(d,me,A)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||S===r.memoizedProps&&J===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&J===r.memoizedState||(i.flags|=1024),i.memoizedProps=d,i.memoizedState=me),_.props=d,_.state=me,_.context=A,d=B):(typeof _.componentDidUpdate!="function"||S===r.memoizedProps&&J===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&J===r.memoizedState||(i.flags|=1024),d=!1)}return bh(r,i,l,d,y,p)}function bh(r,i,l,d,p,y){sy(r,i);var _=(i.flags&128)!==0;if(!d&&!_)return p&&hv(i,l,!1),Fr(r,i,y);d=i.stateNode,pj.current=i;var S=_&&typeof l.getDerivedStateFromError!="function"?null:d.render();return i.flags|=1,r!==null&&_?(i.child=bs(i,r.child,null,y),i.child=bs(i,null,S,y)):tn(r,i,S,y),i.memoizedState=d.state,p&&hv(i,l,!0),i.child}function ly(r){var i=r.stateNode;i.pendingContext?cv(r,i.pendingContext,i.pendingContext!==i.context):i.context&&cv(r,i.context,!1),rh(r,i.containerInfo)}function uy(r,i,l,d,p){return ks(),Qd(p),i.flags|=256,tn(r,i,l,d),i.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function wh(r){return{baseLanes:r,cachePool:null,transitions:null}}function cy(r,i,l){var d=i.pendingProps,p=it.current,y=!1,_=(i.flags&128)!==0,S;if((S=_)||(S=r!==null&&r.memoizedState===null?!1:(p&2)!==0),S?(y=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),Ze(it,p&1),r===null)return Jd(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=d.children,r=d.fallback,y?(d=i.mode,y=i.child,_={mode:"hidden",children:_},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=_):y=ec(_,d,0,null),r=ki(r,d,l,null),y.return=i,r.return=i,y.sibling=r,i.child=y,i.child.memoizedState=wh(l),i.memoizedState=_h,r):zh(i,_));if(p=r.memoizedState,p!==null&&(S=p.dehydrated,S!==null))return fj(r,i,_,d,S,p,l);if(y){y=d.fallback,_=i.mode,p=r.child,S=p.sibling;var A={mode:"hidden",children:d.children};return(_&1)===0&&i.child!==p?(d=i.child,d.childLanes=0,d.pendingProps=A,i.deletions=null):(d=Eo(p,A),d.subtreeFlags=p.subtreeFlags&14680064),S!==null?y=Eo(S,y):(y=ki(y,_,l,null),y.flags|=2),y.return=i,d.return=i,d.sibling=y,i.child=d,d=y,y=i.child,_=r.child.memoizedState,_=_===null?wh(l):{baseLanes:_.baseLanes|l,cachePool:null,transitions:_.transitions},y.memoizedState=_,y.childLanes=r.childLanes&~l,i.memoizedState=_h,d}return y=r.child,r=y.sibling,d=Eo(y,{mode:"visible",children:d.children}),(i.mode&1)===0&&(d.lanes=l),d.return=i,d.sibling=null,r!==null&&(l=i.deletions,l===null?(i.deletions=[r],i.flags|=16):l.push(r)),i.child=d,i.memoizedState=null,d}function zh(r,i){return i=ec({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Uu(r,i,l,d){return d!==null&&Qd(d),bs(i,r.child,null,l),r=zh(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function fj(r,i,l,d,p,y,_){if(l)return i.flags&256?(i.flags&=-257,d=yh(Error(t(422))),Uu(r,i,_,d)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(y=d.fallback,p=i.mode,d=ec({mode:"visible",children:d.children},p,0,null),y=ki(y,p,_,null),y.flags|=2,d.return=i,y.return=i,d.sibling=y,i.child=d,(i.mode&1)!==0&&bs(i,r.child,null,_),i.child.memoizedState=wh(_),i.memoizedState=_h,y);if((i.mode&1)===0)return Uu(r,i,_,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var S=d.dgst;return d=S,y=Error(t(419)),d=yh(y,d,void 0),Uu(r,i,_,d)}if(S=(_&r.childLanes)!==0,un||S){if(d=It,d!==null){switch(_&-_){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|_))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Mr(r,p),Yn(d,r,p,-1))}return Lh(),d=yh(Error(t(421))),Uu(r,i,_,d)}return p.data==="$?"?(i.flags|=128,i.child=r.child,i=xj.bind(null,r),p._reactRetry=i,null):(r=y.treeContext,bn=po(p.nextSibling),kn=i,rt=!0,Jn=null,r!==null&&(Tn[xn++]=Dr,Tn[xn++]=Or,Tn[xn++]=ci,Dr=r.id,Or=r.overflow,ci=i),i=zh(i,d.children),i.flags|=4096,i)}function dy(r,i,l){r.lanes|=i;var d=r.alternate;d!==null&&(d.lanes|=i),eh(r.return,i,l)}function jh(r,i,l,d,p){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=l,y.tailMode=p)}function hy(r,i,l){var d=i.pendingProps,p=d.revealOrder,y=d.tail;if(tn(r,i,d.children,l),d=it.current,(d&2)!==0)d=d&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&dy(r,l,i);else if(r.tag===19)dy(r,l,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Ze(it,d),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(l=i.child,p=null;l!==null;)r=l.alternate,r!==null&&Vu(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=i.child,i.child=null):(p=l.sibling,l.sibling=null),jh(i,!1,p,l,y);break;case"backwards":for(l=null,p=i.child,i.child=null;p!==null;){if(r=p.alternate,r!==null&&Vu(r)===null){i.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}jh(i,!0,l,null,y);break;case"together":jh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Hu(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Fr(r,i,l){if(r!==null&&(i.dependencies=r.dependencies),fi|=i.lanes,(l&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,l=Eo(r,r.pendingProps),i.child=l,l.return=i;r.sibling!==null;)r=r.sibling,l=l.sibling=Eo(r,r.pendingProps),l.return=i;l.sibling=null}return i.child}function vj(r,i,l){switch(i.tag){case 3:ly(i),ks();break;case 5:Sv(i);break;case 1:ln(i.type)&&ju(i);break;case 4:rh(i,i.stateNode.containerInfo);break;case 10:var d=i.type._context,p=i.memoizedProps.value;Ze(Cu,d._currentValue),d._currentValue=p;break;case 13:if(d=i.memoizedState,d!==null)return d.dehydrated!==null?(Ze(it,it.current&1),i.flags|=128,null):(l&i.child.childLanes)!==0?cy(r,i,l):(Ze(it,it.current&1),r=Fr(r,i,l),r!==null?r.sibling:null);Ze(it,it.current&1);break;case 19:if(d=(l&i.childLanes)!==0,(r.flags&128)!==0){if(d)return hy(r,i,l);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ze(it,it.current),d)break;return null;case 22:case 23:return i.lanes=0,iy(r,i,l)}return Fr(r,i,l)}var my,Eh,py,fy;my=function(r,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Eh=function(){},py=function(r,i,l,d){var p=r.memoizedProps;if(p!==d){r=i.stateNode,mi(pr.current);var y=null;switch(l){case"input":p=de(r,p),d=de(r,d),y=[];break;case"select":p=X({},p,{value:void 0}),d=X({},d,{value:void 0}),y=[];break;case"textarea":p=ua(r,p),d=ua(r,d),y=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=_u)}fa(l,d);var _;l=null;for(B in p)if(!d.hasOwnProperty(B)&&p.hasOwnProperty(B)&&p[B]!=null)if(B==="style"){var S=p[B];for(_ in S)S.hasOwnProperty(_)&&(l||(l={}),l[_]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(s.hasOwnProperty(B)?y||(y=[]):(y=y||[]).push(B,null));for(B in d){var A=d[B];if(S=p!=null?p[B]:void 0,d.hasOwnProperty(B)&&A!==S&&(A!=null||S!=null))if(B==="style")if(S){for(_ in S)!S.hasOwnProperty(_)||A&&A.hasOwnProperty(_)||(l||(l={}),l[_]="");for(_ in A)A.hasOwnProperty(_)&&S[_]!==A[_]&&(l||(l={}),l[_]=A[_])}else l||(y||(y=[]),y.push(B,l)),l=A;else B==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,S=S?S.__html:void 0,A!=null&&S!==A&&(y=y||[]).push(B,A)):B==="children"?typeof A!="string"&&typeof A!="number"||(y=y||[]).push(B,""+A):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(s.hasOwnProperty(B)?(A!=null&&B==="onScroll"&&Ye("scroll",r),y||S===A||(y=[])):(y=y||[]).push(B,A))}l&&(y=y||[]).push("style",l);var B=y;(i.updateQueue=B)&&(i.flags|=4)}},fy=function(r,i,l,d){l!==d&&(i.flags|=4)};function Ja(r,i){if(!rt)switch(r.tailMode){case"hidden":i=r.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Kt(r){var i=r.alternate!==null&&r.alternate.child===r.child,l=0,d=0;if(i)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=d,r.childLanes=l,i}function yj(r,i,l){var d=i.pendingProps;switch(Gd(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(i),null;case 1:return ln(i.type)&&zu(),Kt(i),null;case 3:return d=i.stateNode,zs(),et(an),et(Ht),sh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(xu(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(Dh(Jn),Jn=null))),Eh(r,i),Kt(i),null;case 5:oh(i);var p=mi(Ka.current);if(l=i.type,r!==null&&i.stateNode!=null)py(r,i,l,d,p),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!d){if(i.stateNode===null)throw Error(t(166));return Kt(i),null}if(r=mi(pr.current),xu(i)){d=i.stateNode,l=i.type;var y=i.memoizedProps;switch(d[mr]=i,d[La]=y,r=(i.mode&1)!==0,l){case"dialog":Ye("cancel",d),Ye("close",d);break;case"iframe":case"object":case"embed":Ye("load",d);break;case"video":case"audio":for(p=0;p<Da.length;p++)Ye(Da[p],d);break;case"source":Ye("error",d);break;case"img":case"image":case"link":Ye("error",d),Ye("load",d);break;case"details":Ye("toggle",d);break;case"input":xe(d,y),Ye("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},Ye("invalid",d);break;case"textarea":Fi(d,y),Ye("invalid",d)}fa(l,y),p=null;for(var _ in y)if(y.hasOwnProperty(_)){var S=y[_];_==="children"?typeof S=="string"?d.textContent!==S&&(y.suppressHydrationWarning!==!0&&bu(d.textContent,S,r),p=["children",S]):typeof S=="number"&&d.textContent!==""+S&&(y.suppressHydrationWarning!==!0&&bu(d.textContent,S,r),p=["children",""+S]):s.hasOwnProperty(_)&&S!=null&&_==="onScroll"&&Ye("scroll",d)}switch(l){case"input":On(d),mt(d,y,!0);break;case"textarea":On(d),ca(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=_u)}d=p,i.updateQueue=d,d!==null&&(i.flags|=4)}else{_=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=_t(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=_.createElement(l,{is:d.is}):(r=_.createElement(l),l==="select"&&(_=r,d.multiple?_.multiple=!0:d.size&&(_.size=d.size))):r=_.createElementNS(r,l),r[mr]=i,r[La]=d,my(r,i,!1,!1),i.stateNode=r;e:{switch(_=va(l,d),l){case"dialog":Ye("cancel",r),Ye("close",r),p=d;break;case"iframe":case"object":case"embed":Ye("load",r),p=d;break;case"video":case"audio":for(p=0;p<Da.length;p++)Ye(Da[p],r);p=d;break;case"source":Ye("error",r),p=d;break;case"img":case"image":case"link":Ye("error",r),Ye("load",r),p=d;break;case"details":Ye("toggle",r),p=d;break;case"input":xe(r,d),p=de(r,d),Ye("invalid",r);break;case"option":p=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},p=X({},d,{value:void 0}),Ye("invalid",r);break;case"textarea":Fi(r,d),p=ua(r,d),Ye("invalid",r);break;default:p=d}fa(l,p),S=p;for(y in S)if(S.hasOwnProperty(y)){var A=S[y];y==="style"?ma(r,A):y==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&da(r,A)):y==="children"?typeof A=="string"?(l!=="textarea"||A!=="")&&no(r,A):typeof A=="number"&&no(r,""+A):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?A!=null&&y==="onScroll"&&Ye("scroll",r):A!=null&&Q(r,y,A,_))}switch(l){case"input":On(r),mt(r,d,!1);break;case"textarea":On(r),ca(r);break;case"option":d.value!=null&&r.setAttribute("value",""+He(d.value));break;case"select":r.multiple=!!d.multiple,y=d.value,y!=null?Xt(r,!!d.multiple,y,!1):d.defaultValue!=null&&Xt(r,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=_u)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Kt(i),null;case 6:if(r&&i.stateNode!=null)fy(r,i,r.memoizedProps,d);else{if(typeof d!="string"&&i.stateNode===null)throw Error(t(166));if(l=mi(Ka.current),mi(pr.current),xu(i)){if(d=i.stateNode,l=i.memoizedProps,d[mr]=i,(y=d.nodeValue!==l)&&(r=kn,r!==null))switch(r.tag){case 3:bu(d.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&bu(d.nodeValue,l,(r.mode&1)!==0)}y&&(i.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[mr]=i,i.stateNode=d}return Kt(i),null;case 13:if(et(it),d=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(rt&&bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gv(),ks(),i.flags|=98560,y=!1;else if(y=xu(i),d!==null&&d.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=i.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[mr]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Kt(i),y=!1}else Jn!==null&&(Dh(Jn),Jn=null),y=!0;if(!y)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=l,i):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(it.current&1)!==0?Et===0&&(Et=3):Lh())),i.updateQueue!==null&&(i.flags|=4),Kt(i),null);case 4:return zs(),Eh(r,i),r===null&&Oa(i.stateNode.containerInfo),Kt(i),null;case 10:return Yd(i.type._context),Kt(i),null;case 17:return ln(i.type)&&zu(),Kt(i),null;case 19:if(et(it),y=i.memoizedState,y===null)return Kt(i),null;if(d=(i.flags&128)!==0,_=y.rendering,_===null)if(d)Ja(y,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(_=Vu(r),_!==null){for(i.flags|=128,Ja(y,!1),d=_.updateQueue,d!==null&&(i.updateQueue=d,i.flags|=4),i.subtreeFlags=0,d=l,l=i.child;l!==null;)y=l,r=d,y.flags&=14680066,_=y.alternate,_===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=_.childLanes,y.lanes=_.lanes,y.child=_.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=_.memoizedProps,y.memoizedState=_.memoizedState,y.updateQueue=_.updateQueue,y.type=_.type,r=_.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ze(it,it.current&1|2),i.child}r=r.sibling}y.tail!==null&&Qe()>Ts&&(i.flags|=128,d=!0,Ja(y,!1),i.lanes=4194304)}else{if(!d)if(r=Vu(_),r!==null){if(i.flags|=128,d=!0,l=r.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),Ja(y,!0),y.tail===null&&y.tailMode==="hidden"&&!_.alternate&&!rt)return Kt(i),null}else 2*Qe()-y.renderingStartTime>Ts&&l!==1073741824&&(i.flags|=128,d=!0,Ja(y,!1),i.lanes=4194304);y.isBackwards?(_.sibling=i.child,i.child=_):(l=y.last,l!==null?l.sibling=_:i.child=_,y.last=_)}return y.tail!==null?(i=y.tail,y.rendering=i,y.tail=i.sibling,y.renderingStartTime=Qe(),i.sibling=null,l=it.current,Ze(it,d?l&1|2:l&1),i):(Kt(i),null);case 22:case 23:return Mh(),d=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(i.flags|=8192),d&&(i.mode&1)!==0?(_n&1073741824)!==0&&(Kt(i),i.subtreeFlags&6&&(i.flags|=8192)):Kt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function gj(r,i){switch(Gd(i),i.tag){case 1:return ln(i.type)&&zu(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return zs(),et(an),et(Ht),sh(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return oh(i),null;case 13:if(et(it),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return et(it),null;case 4:return zs(),null;case 10:return Yd(i.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var Bu=!1,$t=!1,kj=typeof WeakSet=="function"?WeakSet:Set,he=null;function Es(r,i){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){ut(r,i,d)}else l.current=null}function Sh(r,i,l){try{l()}catch(d){ut(r,i,d)}}var vy=!1;function bj(r,i){if(Md=co,r=qf(),Cd(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var _=0,S=-1,A=-1,B=0,Z=0,Y=r,J=null;t:for(;;){for(var ue;Y!==l||p!==0&&Y.nodeType!==3||(S=_+p),Y!==y||d!==0&&Y.nodeType!==3||(A=_+d),Y.nodeType===3&&(_+=Y.nodeValue.length),(ue=Y.firstChild)!==null;)J=Y,Y=ue;for(;;){if(Y===r)break t;if(J===l&&++B===p&&(S=_),J===y&&++Z===d&&(A=_),(ue=Y.nextSibling)!==null)break;Y=J,J=Y.parentNode}Y=ue}l=S===-1||A===-1?null:{start:S,end:A}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ld={focusedElem:r,selectionRange:l},co=!1,he=i;he!==null;)if(i=he,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,he=r;else for(;he!==null;){i=he;try{var me=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var pe=me.memoizedProps,ft=me.memoizedState,U=i.stateNode,V=U.getSnapshotBeforeUpdate(i.elementType===i.type?pe:Qn(i.type,pe),ft);U.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var H=i.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){ut(i,i.return,ne)}if(r=i.sibling,r!==null){r.return=i.return,he=r;break}he=i.return}return me=vy,vy=!1,me}function Qa(r,i,l){var d=i.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&r)===r){var y=p.destroy;p.destroy=void 0,y!==void 0&&Sh(i,l,y)}p=p.next}while(p!==d)}}function Ku(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&r)===r){var d=l.create;l.destroy=d()}l=l.next}while(l!==i)}}function Th(r){var i=r.ref;if(i!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof i=="function"?i(r):i.current=r}}function yy(r){var i=r.alternate;i!==null&&(r.alternate=null,yy(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[mr],delete i[La],delete i[Bd],delete i[nj],delete i[rj])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function gy(r){return r.tag===5||r.tag===3||r.tag===4}function ky(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||gy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function xh(r,i,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(r,i):l.insertBefore(r,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(r,l)):(i=l,i.appendChild(r)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=_u));else if(d!==4&&(r=r.child,r!==null))for(xh(r,i,l),r=r.sibling;r!==null;)xh(r,i,l),r=r.sibling}function Ph(r,i,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,i?l.insertBefore(r,i):l.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Ph(r,i,l),r=r.sibling;r!==null;)Ph(r,i,l),r=r.sibling}var Dt=null,Zn=!1;function bo(r,i,l){for(l=l.child;l!==null;)by(r,i,l),l=l.sibling}function by(r,i,l){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(ti,l)}catch{}switch(l.tag){case 5:$t||Es(l,i);case 6:var d=Dt,p=Zn;Dt=null,bo(r,i,l),Dt=d,Zn=p,Dt!==null&&(Zn?(r=Dt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Dt.removeChild(l.stateNode));break;case 18:Dt!==null&&(Zn?(r=Dt,l=l.stateNode,r.nodeType===8?Hd(r.parentNode,l):r.nodeType===1&&Hd(r,l),Wn(r)):Hd(Dt,l.stateNode));break;case 4:d=Dt,p=Zn,Dt=l.stateNode.containerInfo,Zn=!0,bo(r,i,l),Dt=d,Zn=p;break;case 0:case 11:case 14:case 15:if(!$t&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var y=p,_=y.destroy;y=y.tag,_!==void 0&&((y&2)!==0||(y&4)!==0)&&Sh(l,i,_),p=p.next}while(p!==d)}bo(r,i,l);break;case 1:if(!$t&&(Es(l,i),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(S){ut(l,i,S)}bo(r,i,l);break;case 21:bo(r,i,l);break;case 22:l.mode&1?($t=(d=$t)||l.memoizedState!==null,bo(r,i,l),$t=d):bo(r,i,l);break;default:bo(r,i,l)}}function _y(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new kj),i.forEach(function(d){var p=Pj.bind(null,r,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Xn(r,i){var l=i.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var y=r,_=i,S=_;e:for(;S!==null;){switch(S.tag){case 5:Dt=S.stateNode,Zn=!1;break e;case 3:Dt=S.stateNode.containerInfo,Zn=!0;break e;case 4:Dt=S.stateNode.containerInfo,Zn=!0;break e}S=S.return}if(Dt===null)throw Error(t(160));by(y,_,p),Dt=null,Zn=!1;var A=p.alternate;A!==null&&(A.return=null),p.return=null}catch(B){ut(p,i,B)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wy(i,r),i=i.sibling}function wy(r,i){var l=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Xn(i,r),vr(r),d&4){try{Qa(3,r,r.return),Ku(3,r)}catch(pe){ut(r,r.return,pe)}try{Qa(5,r,r.return)}catch(pe){ut(r,r.return,pe)}}break;case 1:Xn(i,r),vr(r),d&512&&l!==null&&Es(l,l.return);break;case 5:if(Xn(i,r),vr(r),d&512&&l!==null&&Es(l,l.return),r.flags&32){var p=r.stateNode;try{no(p,"")}catch(pe){ut(r,r.return,pe)}}if(d&4&&(p=r.stateNode,p!=null)){var y=r.memoizedProps,_=l!==null?l.memoizedProps:y,S=r.type,A=r.updateQueue;if(r.updateQueue=null,A!==null)try{S==="input"&&y.type==="radio"&&y.name!=null&&Ae(p,y),va(S,_);var B=va(S,y);for(_=0;_<A.length;_+=2){var Z=A[_],Y=A[_+1];Z==="style"?ma(p,Y):Z==="dangerouslySetInnerHTML"?da(p,Y):Z==="children"?no(p,Y):Q(p,Z,Y,B)}switch(S){case"input":Oe(p,y);break;case"textarea":Ui(p,y);break;case"select":var J=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var ue=y.value;ue!=null?Xt(p,!!y.multiple,ue,!1):J!==!!y.multiple&&(y.defaultValue!=null?Xt(p,!!y.multiple,y.defaultValue,!0):Xt(p,!!y.multiple,y.multiple?[]:"",!1))}p[La]=y}catch(pe){ut(r,r.return,pe)}}break;case 6:if(Xn(i,r),vr(r),d&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,y=r.memoizedProps;try{p.nodeValue=y}catch(pe){ut(r,r.return,pe)}}break;case 3:if(Xn(i,r),vr(r),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Wn(i.containerInfo)}catch(pe){ut(r,r.return,pe)}break;case 4:Xn(i,r),vr(r);break;case 13:Xn(i,r),vr(r),p=r.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Ah=Qe())),d&4&&_y(r);break;case 22:if(Z=l!==null&&l.memoizedState!==null,r.mode&1?($t=(B=$t)||Z,Xn(i,r),$t=B):Xn(i,r),vr(r),d&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!Z&&(r.mode&1)!==0)for(he=r,Z=r.child;Z!==null;){for(Y=he=Z;he!==null;){switch(J=he,ue=J.child,J.tag){case 0:case 11:case 14:case 15:Qa(4,J,J.return);break;case 1:Es(J,J.return);var me=J.stateNode;if(typeof me.componentWillUnmount=="function"){d=J,l=J.return;try{i=d,me.props=i.memoizedProps,me.state=i.memoizedState,me.componentWillUnmount()}catch(pe){ut(d,l,pe)}}break;case 5:Es(J,J.return);break;case 22:if(J.memoizedState!==null){Ey(Y);continue}}ue!==null?(ue.return=J,he=ue):Ey(Y)}Z=Z.sibling}e:for(Z=null,Y=r;;){if(Y.tag===5){if(Z===null){Z=Y;try{p=Y.stateNode,B?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(S=Y.stateNode,A=Y.memoizedProps.style,_=A!=null&&A.hasOwnProperty("display")?A.display:null,S.style.display=ha("display",_))}catch(pe){ut(r,r.return,pe)}}}else if(Y.tag===6){if(Z===null)try{Y.stateNode.nodeValue=B?"":Y.memoizedProps}catch(pe){ut(r,r.return,pe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;Z===Y&&(Z=null),Y=Y.return}Z===Y&&(Z=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Xn(i,r),vr(r),d&4&&_y(r);break;case 21:break;default:Xn(i,r),vr(r)}}function vr(r){var i=r.flags;if(i&2){try{e:{for(var l=r.return;l!==null;){if(gy(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(no(p,""),d.flags&=-33);var y=ky(r);Ph(r,y,p);break;case 3:case 4:var _=d.stateNode.containerInfo,S=ky(r);xh(r,S,_);break;default:throw Error(t(161))}}catch(A){ut(r,r.return,A)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function _j(r,i,l){he=r,zy(r)}function zy(r,i,l){for(var d=(r.mode&1)!==0;he!==null;){var p=he,y=p.child;if(p.tag===22&&d){var _=p.memoizedState!==null||Bu;if(!_){var S=p.alternate,A=S!==null&&S.memoizedState!==null||$t;S=Bu;var B=$t;if(Bu=_,($t=A)&&!B)for(he=p;he!==null;)_=he,A=_.child,_.tag===22&&_.memoizedState!==null?Sy(p):A!==null?(A.return=_,he=A):Sy(p);for(;y!==null;)he=y,zy(y),y=y.sibling;he=p,Bu=S,$t=B}jy(r)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,he=y):jy(r)}}function jy(r){for(;he!==null;){var i=he;if((i.flags&8772)!==0){var l=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:$t||Ku(5,i);break;case 1:var d=i.stateNode;if(i.flags&4&&!$t)if(l===null)d.componentDidMount();else{var p=i.elementType===i.type?l.memoizedProps:Qn(i.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=i.updateQueue;y!==null&&Ev(i,y,d);break;case 3:var _=i.updateQueue;if(_!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}Ev(i,_,l)}break;case 5:var S=i.stateNode;if(l===null&&i.flags&4){l=S;var A=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&l.focus();break;case"img":A.src&&(l.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var B=i.alternate;if(B!==null){var Z=B.memoizedState;if(Z!==null){var Y=Z.dehydrated;Y!==null&&Wn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||i.flags&512&&Th(i)}catch(J){ut(i,i.return,J)}}if(i===r){he=null;break}if(l=i.sibling,l!==null){l.return=i.return,he=l;break}he=i.return}}function Ey(r){for(;he!==null;){var i=he;if(i===r){he=null;break}var l=i.sibling;if(l!==null){l.return=i.return,he=l;break}he=i.return}}function Sy(r){for(;he!==null;){var i=he;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{Ku(4,i)}catch(A){ut(i,l,A)}break;case 1:var d=i.stateNode;if(typeof d.componentDidMount=="function"){var p=i.return;try{d.componentDidMount()}catch(A){ut(i,p,A)}}var y=i.return;try{Th(i)}catch(A){ut(i,y,A)}break;case 5:var _=i.return;try{Th(i)}catch(A){ut(i,_,A)}}}catch(A){ut(i,i.return,A)}if(i===r){he=null;break}var S=i.sibling;if(S!==null){S.return=i.return,he=S;break}he=i.return}}var wj=Math.ceil,$u=oe.ReactCurrentDispatcher,Ch=oe.ReactCurrentOwner,In=oe.ReactCurrentBatchConfig,Be=0,It=null,kt=null,Ot=0,_n=0,Ss=fo(0),Et=0,Za=null,fi=0,Wu=0,Ih=0,Xa=null,cn=null,Ah=0,Ts=1/0,Ur=null,Gu=!1,Rh=null,_o=null,qu=!1,wo=null,Ju=0,Ya=0,Vh=null,Qu=-1,Zu=0;function nn(){return(Be&6)!==0?Qe():Qu!==-1?Qu:Qu=Qe()}function zo(r){return(r.mode&1)===0?1:(Be&2)!==0&&Ot!==0?Ot&-Ot:ij.transition!==null?(Zu===0&&(Zu=ri()),Zu):(r=Me,r!==0||(r=window.event,r=r===void 0?16:Ta(r.type)),r)}function Yn(r,i,l,d){if(50<Ya)throw Ya=0,Vh=null,Error(t(185));so(r,l,d),((Be&2)===0||r!==It)&&(r===It&&((Be&2)===0&&(Wu|=l),Et===4&&jo(r,Ot)),dn(r,d),l===1&&Be===0&&(i.mode&1)===0&&(Ts=Qe()+500,Eu&&yo()))}function dn(r,i){var l=r.callbackNode;Pr(r,i);var d=ni(r,r===It?Ot:0);if(d===0)l!==null&&wa(l),r.callbackNode=null,r.callbackPriority=0;else if(i=d&-d,r.callbackPriority!==i){if(l!=null&&wa(l),i===1)r.tag===0?oj(xy.bind(null,r)):mv(xy.bind(null,r)),ej(function(){(Be&6)===0&&yo()}),l=null;else{switch(lo(d)){case 1:l=ei;break;case 4:l=ro;break;case 16:l=jn;break;case 536870912:l=Zl;break;default:l=jn}l=Dy(l,Ty.bind(null,r))}r.callbackPriority=i,r.callbackNode=l}}function Ty(r,i){if(Qu=-1,Zu=0,(Be&6)!==0)throw Error(t(327));var l=r.callbackNode;if(xs()&&r.callbackNode!==l)return null;var d=ni(r,r===It?Ot:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||i)i=Xu(r,d);else{i=d;var p=Be;Be|=2;var y=Cy();(It!==r||Ot!==i)&&(Ur=null,Ts=Qe()+500,yi(r,i));do try{Ej();break}catch(S){Py(r,S)}while(!0);Xd(),$u.current=y,Be=p,kt!==null?i=0:(It=null,Ot=0,i=Et)}if(i!==0){if(i===2&&(p=vn(r),p!==0&&(d=p,i=Nh(r,p))),i===1)throw l=Za,yi(r,0),jo(r,d),dn(r,Qe()),l;if(i===6)jo(r,d);else{if(p=r.current.alternate,(d&30)===0&&!zj(p)&&(i=Xu(r,d),i===2&&(y=vn(r),y!==0&&(d=y,i=Nh(r,y))),i===1))throw l=Za,yi(r,0),jo(r,d),dn(r,Qe()),l;switch(r.finishedWork=p,r.finishedLanes=d,i){case 0:case 1:throw Error(t(345));case 2:gi(r,cn,Ur);break;case 3:if(jo(r,d),(d&130023424)===d&&(i=Ah+500-Qe(),10<i)){if(ni(r,0)!==0)break;if(p=r.suspendedLanes,(p&d)!==d){nn(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=Ud(gi.bind(null,r,cn,Ur),i);break}gi(r,cn,Ur);break;case 4:if(jo(r,d),(d&4194240)===d)break;for(i=r.eventTimes,p=-1;0<d;){var _=31-Yt(d);y=1<<_,_=i[_],_>p&&(p=_),d&=~y}if(d=p,d=Qe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*wj(d/1960))-d,10<d){r.timeoutHandle=Ud(gi.bind(null,r,cn,Ur),d);break}gi(r,cn,Ur);break;case 5:gi(r,cn,Ur);break;default:throw Error(t(329))}}}return dn(r,Qe()),r.callbackNode===l?Ty.bind(null,r):null}function Nh(r,i){var l=Xa;return r.current.memoizedState.isDehydrated&&(yi(r,i).flags|=256),r=Xu(r,i),r!==2&&(i=cn,cn=l,i!==null&&Dh(i)),r}function Dh(r){cn===null?cn=r:cn.push.apply(cn,r)}function zj(r){for(var i=r;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],y=p.getSnapshot;p=p.value;try{if(!qn(y(),p))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jo(r,i){for(i&=~Ih,i&=~Wu,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var l=31-Yt(i),d=1<<l;r[l]=-1,i&=~d}}function xy(r){if((Be&6)!==0)throw Error(t(327));xs();var i=ni(r,0);if((i&1)===0)return dn(r,Qe()),null;var l=Xu(r,i);if(r.tag!==0&&l===2){var d=vn(r);d!==0&&(i=d,l=Nh(r,d))}if(l===1)throw l=Za,yi(r,0),jo(r,i),dn(r,Qe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,gi(r,cn,Ur),dn(r,Qe()),null}function Oh(r,i){var l=Be;Be|=1;try{return r(i)}finally{Be=l,Be===0&&(Ts=Qe()+500,Eu&&yo())}}function vi(r){wo!==null&&wo.tag===0&&(Be&6)===0&&xs();var i=Be;Be|=1;var l=In.transition,d=Me;try{if(In.transition=null,Me=1,r)return r()}finally{Me=d,In.transition=l,Be=i,(Be&6)===0&&yo()}}function Mh(){_n=Ss.current,et(Ss)}function yi(r,i){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,Yz(l)),kt!==null)for(l=kt.return;l!==null;){var d=l;switch(Gd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&zu();break;case 3:zs(),et(an),et(Ht),sh();break;case 5:oh(d);break;case 4:zs();break;case 13:et(it);break;case 19:et(it);break;case 10:Yd(d.type._context);break;case 22:case 23:Mh()}l=l.return}if(It=r,kt=r=Eo(r.current,null),Ot=_n=i,Et=0,Za=null,Ih=Wu=fi=0,cn=Xa=null,hi!==null){for(i=0;i<hi.length;i++)if(l=hi[i],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,y=l.pending;if(y!==null){var _=y.next;y.next=p,d.next=_}l.pending=d}hi=null}return r}function Py(r,i){do{var l=kt;try{if(Xd(),Nu.current=Lu,Du){for(var d=st.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}Du=!1}if(pi=0,Ct=jt=st=null,$a=!1,Wa=0,Ch.current=null,l===null||l.return===null){Et=1,Za=i,kt=null;break}e:{var y=r,_=l.return,S=l,A=i;if(i=Ot,S.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var B=A,Z=S,Y=Z.tag;if((Z.mode&1)===0&&(Y===0||Y===11||Y===15)){var J=Z.alternate;J?(Z.updateQueue=J.updateQueue,Z.memoizedState=J.memoizedState,Z.lanes=J.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ue=ey(_);if(ue!==null){ue.flags&=-257,ty(ue,_,S,y,i),ue.mode&1&&Yv(y,B,i),i=ue,A=B;var me=i.updateQueue;if(me===null){var pe=new Set;pe.add(A),i.updateQueue=pe}else me.add(A);break e}else{if((i&1)===0){Yv(y,B,i),Lh();break e}A=Error(t(426))}}else if(rt&&S.mode&1){var ft=ey(_);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),ty(ft,_,S,y,i),Qd(js(A,S));break e}}y=A=js(A,S),Et!==4&&(Et=2),Xa===null?Xa=[y]:Xa.push(y),y=_;do{switch(y.tag){case 3:y.flags|=65536,i&=-i,y.lanes|=i;var U=Zv(y,A,i);jv(y,U);break e;case 1:S=A;var V=y.type,H=y.stateNode;if((y.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(_o===null||!_o.has(H)))){y.flags|=65536,i&=-i,y.lanes|=i;var ne=Xv(y,S,i);jv(y,ne);break e}}y=y.return}while(y!==null)}Ay(l)}catch(fe){i=fe,kt===l&&l!==null&&(kt=l=l.return);continue}break}while(!0)}function Cy(){var r=$u.current;return $u.current=Lu,r===null?Lu:r}function Lh(){(Et===0||Et===3||Et===2)&&(Et=4),It===null||(fi&268435455)===0&&(Wu&268435455)===0||jo(It,Ot)}function Xu(r,i){var l=Be;Be|=2;var d=Cy();(It!==r||Ot!==i)&&(Ur=null,yi(r,i));do try{jj();break}catch(p){Py(r,p)}while(!0);if(Xd(),Be=l,$u.current=d,kt!==null)throw Error(t(261));return It=null,Ot=0,Et}function jj(){for(;kt!==null;)Iy(kt)}function Ej(){for(;kt!==null&&!Jl();)Iy(kt)}function Iy(r){var i=Ny(r.alternate,r,_n);r.memoizedProps=r.pendingProps,i===null?Ay(r):kt=i,Ch.current=null}function Ay(r){var i=r;do{var l=i.alternate;if(r=i.return,(i.flags&32768)===0){if(l=yj(l,i,_n),l!==null){kt=l;return}}else{if(l=gj(l,i),l!==null){l.flags&=32767,kt=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,kt=null;return}}if(i=i.sibling,i!==null){kt=i;return}kt=i=r}while(i!==null);Et===0&&(Et=5)}function gi(r,i,l){var d=Me,p=In.transition;try{In.transition=null,Me=1,Sj(r,i,l,d)}finally{In.transition=p,Me=d}return null}function Sj(r,i,l,d){do xs();while(wo!==null);if((Be&6)!==0)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(Je(r,y),r===It&&(kt=It=null,Ot=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||qu||(qu=!0,Dy(jn,function(){return xs(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=In.transition,In.transition=null;var _=Me;Me=1;var S=Be;Be|=4,Ch.current=null,bj(r,l),wy(l,r),Wz(Ld),co=!!Md,Ld=Md=null,r.current=l,_j(l),wd(),Be=S,Me=_,In.transition=y}else r.current=l;if(qu&&(qu=!1,wo=r,Ju=p),y=r.pendingLanes,y===0&&(_o=null),Xl(l.stateNode),dn(r,Qe()),i!==null)for(d=r.onRecoverableError,l=0;l<i.length;l++)p=i[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Gu)throw Gu=!1,r=Rh,Rh=null,r;return(Ju&1)!==0&&r.tag!==0&&xs(),y=r.pendingLanes,(y&1)!==0?r===Vh?Ya++:(Ya=0,Vh=r):Ya=0,yo(),null}function xs(){if(wo!==null){var r=lo(Ju),i=In.transition,l=Me;try{if(In.transition=null,Me=16>r?16:r,wo===null)var d=!1;else{if(r=wo,wo=null,Ju=0,(Be&6)!==0)throw Error(t(331));var p=Be;for(Be|=4,he=r.current;he!==null;){var y=he,_=y.child;if((he.flags&16)!==0){var S=y.deletions;if(S!==null){for(var A=0;A<S.length;A++){var B=S[A];for(he=B;he!==null;){var Z=he;switch(Z.tag){case 0:case 11:case 15:Qa(8,Z,y)}var Y=Z.child;if(Y!==null)Y.return=Z,he=Y;else for(;he!==null;){Z=he;var J=Z.sibling,ue=Z.return;if(yy(Z),Z===B){he=null;break}if(J!==null){J.return=ue,he=J;break}he=ue}}}var me=y.alternate;if(me!==null){var pe=me.child;if(pe!==null){me.child=null;do{var ft=pe.sibling;pe.sibling=null,pe=ft}while(pe!==null)}}he=y}}if((y.subtreeFlags&2064)!==0&&_!==null)_.return=y,he=_;else e:for(;he!==null;){if(y=he,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Qa(9,y,y.return)}var U=y.sibling;if(U!==null){U.return=y.return,he=U;break e}he=y.return}}var V=r.current;for(he=V;he!==null;){_=he;var H=_.child;if((_.subtreeFlags&2064)!==0&&H!==null)H.return=_,he=H;else e:for(_=V;he!==null;){if(S=he,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Ku(9,S)}}catch(fe){ut(S,S.return,fe)}if(S===_){he=null;break e}var ne=S.sibling;if(ne!==null){ne.return=S.return,he=ne;break e}he=S.return}}if(Be=p,yo(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(ti,r)}catch{}d=!0}return d}finally{Me=l,In.transition=i}}return!1}function Ry(r,i,l){i=js(l,i),i=Zv(r,i,1),r=ko(r,i,1),i=nn(),r!==null&&(so(r,1,i),dn(r,i))}function ut(r,i,l){if(r.tag===3)Ry(r,r,l);else for(;i!==null;){if(i.tag===3){Ry(i,r,l);break}else if(i.tag===1){var d=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(_o===null||!_o.has(d))){r=js(l,r),r=Xv(i,r,1),i=ko(i,r,1),r=nn(),i!==null&&(so(i,1,r),dn(i,r));break}}i=i.return}}function Tj(r,i,l){var d=r.pingCache;d!==null&&d.delete(i),i=nn(),r.pingedLanes|=r.suspendedLanes&l,It===r&&(Ot&l)===l&&(Et===4||Et===3&&(Ot&130023424)===Ot&&500>Qe()-Ah?yi(r,0):Ih|=l),dn(r,i)}function Vy(r,i){i===0&&((r.mode&1)===0?i=1:(i=Zi,Zi<<=1,(Zi&130023424)===0&&(Zi=4194304)));var l=nn();r=Mr(r,i),r!==null&&(so(r,i,l),dn(r,l))}function xj(r){var i=r.memoizedState,l=0;i!==null&&(l=i.retryLane),Vy(r,l)}function Pj(r,i){var l=0;switch(r.tag){case 13:var d=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(i),Vy(r,l)}var Ny;Ny=function(r,i,l){if(r!==null)if(r.memoizedProps!==i.pendingProps||an.current)un=!0;else{if((r.lanes&l)===0&&(i.flags&128)===0)return un=!1,vj(r,i,l);un=(r.flags&131072)!==0}else un=!1,rt&&(i.flags&1048576)!==0&&pv(i,Tu,i.index);switch(i.lanes=0,i.tag){case 2:var d=i.type;Hu(r,i),r=i.pendingProps;var p=vs(i,Ht.current);ws(i,l),p=uh(null,i,d,r,p,l);var y=ch();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ln(d)?(y=!0,ju(i)):y=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,nh(i),p.updater=Fu,i.stateNode=p,p._reactInternals=i,vh(i,d,r,l),i=bh(null,i,d,!0,y,l)):(i.tag=0,rt&&y&&Wd(i),tn(null,i,p,l),i=i.child),i;case 16:d=i.elementType;e:{switch(Hu(r,i),r=i.pendingProps,p=d._init,d=p(d._payload),i.type=d,p=i.tag=Ij(d),r=Qn(d,r),p){case 0:i=kh(null,i,d,r,l);break e;case 1:i=ay(null,i,d,r,l);break e;case 11:i=ny(null,i,d,r,l);break e;case 14:i=ry(null,i,d,Qn(d.type,r),l);break e}throw Error(t(306,d,""))}return i;case 0:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:Qn(d,p),kh(r,i,d,p,l);case 1:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:Qn(d,p),ay(r,i,d,p,l);case 3:e:{if(ly(i),r===null)throw Error(t(387));d=i.pendingProps,y=i.memoizedState,p=y.element,zv(r,i),Ru(i,d,null,l);var _=i.memoizedState;if(d=_.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=y,i.memoizedState=y,i.flags&256){p=js(Error(t(423)),i),i=uy(r,i,d,l,p);break e}else if(d!==p){p=js(Error(t(424)),i),i=uy(r,i,d,l,p);break e}else for(bn=po(i.stateNode.containerInfo.firstChild),kn=i,rt=!0,Jn=null,l=_v(i,null,d,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),d===p){i=Fr(r,i,l);break e}tn(r,i,d,l)}i=i.child}return i;case 5:return Sv(i),r===null&&Jd(i),d=i.type,p=i.pendingProps,y=r!==null?r.memoizedProps:null,_=p.children,Fd(d,p)?_=null:y!==null&&Fd(d,y)&&(i.flags|=32),sy(r,i),tn(r,i,_,l),i.child;case 6:return r===null&&Jd(i),null;case 13:return cy(r,i,l);case 4:return rh(i,i.stateNode.containerInfo),d=i.pendingProps,r===null?i.child=bs(i,null,d,l):tn(r,i,d,l),i.child;case 11:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:Qn(d,p),ny(r,i,d,p,l);case 7:return tn(r,i,i.pendingProps,l),i.child;case 8:return tn(r,i,i.pendingProps.children,l),i.child;case 12:return tn(r,i,i.pendingProps.children,l),i.child;case 10:e:{if(d=i.type._context,p=i.pendingProps,y=i.memoizedProps,_=p.value,Ze(Cu,d._currentValue),d._currentValue=_,y!==null)if(qn(y.value,_)){if(y.children===p.children&&!an.current){i=Fr(r,i,l);break e}}else for(y=i.child,y!==null&&(y.return=i);y!==null;){var S=y.dependencies;if(S!==null){_=y.child;for(var A=S.firstContext;A!==null;){if(A.context===d){if(y.tag===1){A=Lr(-1,l&-l),A.tag=2;var B=y.updateQueue;if(B!==null){B=B.shared;var Z=B.pending;Z===null?A.next=A:(A.next=Z.next,Z.next=A),B.pending=A}}y.lanes|=l,A=y.alternate,A!==null&&(A.lanes|=l),eh(y.return,l,i),S.lanes|=l;break}A=A.next}}else if(y.tag===10)_=y.type===i.type?null:y.child;else if(y.tag===18){if(_=y.return,_===null)throw Error(t(341));_.lanes|=l,S=_.alternate,S!==null&&(S.lanes|=l),eh(_,l,i),_=y.sibling}else _=y.child;if(_!==null)_.return=y;else for(_=y;_!==null;){if(_===i){_=null;break}if(y=_.sibling,y!==null){y.return=_.return,_=y;break}_=_.return}y=_}tn(r,i,p.children,l),i=i.child}return i;case 9:return p=i.type,d=i.pendingProps.children,ws(i,l),p=Pn(p),d=d(p),i.flags|=1,tn(r,i,d,l),i.child;case 14:return d=i.type,p=Qn(d,i.pendingProps),p=Qn(d.type,p),ry(r,i,d,p,l);case 15:return oy(r,i,i.type,i.pendingProps,l);case 17:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:Qn(d,p),Hu(r,i),i.tag=1,ln(d)?(r=!0,ju(i)):r=!1,ws(i,l),Jv(i,d,p),vh(i,d,p,l),bh(null,i,d,!0,r,l);case 19:return hy(r,i,l);case 22:return iy(r,i,l)}throw Error(t(156,i.tag))};function Dy(r,i){return Ji(r,i)}function Cj(r,i,l,d){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,i,l,d){return new Cj(r,i,l,d)}function Fh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ij(r){if(typeof r=="function")return Fh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===D)return 11;if(r===ot)return 14}return 2}function Eo(r,i){var l=r.alternate;return l===null?(l=An(r.tag,i,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=i,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,i=r.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Yu(r,i,l,d,p,y){var _=2;if(d=r,typeof r=="function")Fh(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case I:return ki(l.children,p,y,i);case E:_=8,p|=8;break;case T:return r=An(12,l,i,p|2),r.elementType=T,r.lanes=y,r;case x:return r=An(13,l,i,p),r.elementType=x,r.lanes=y,r;case qe:return r=An(19,l,i,p),r.elementType=qe,r.lanes=y,r;case we:return ec(l,p,y,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case C:_=10;break e;case R:_=9;break e;case D:_=11;break e;case ot:_=14;break e;case ht:_=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=An(_,l,i,p),i.elementType=r,i.type=d,i.lanes=y,i}function ki(r,i,l,d){return r=An(7,r,d,i),r.lanes=l,r}function ec(r,i,l,d){return r=An(22,r,d,i),r.elementType=we,r.lanes=l,r.stateNode={isHidden:!1},r}function Uh(r,i,l){return r=An(6,r,null,i),r.lanes=l,r}function Hh(r,i,l){return i=An(4,r.children!==null?r.children:[],r.key,i),i.lanes=l,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function Aj(r,i,l,d,p){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=io(0),this.expirationTimes=io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Bh(r,i,l,d,p,y,_,S,A){return r=new Aj(r,i,l,S,A),i===1?(i=1,y===!0&&(i|=8)):i=0,y=An(3,null,null,i),r.current=y,y.stateNode=r,y.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(y),r}function Rj(r,i,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:d==null?null:""+d,children:r,containerInfo:i,implementation:l}}function Oy(r){if(!r)return vo;r=r._reactInternals;e:{if(Un(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(ln(l))return dv(r,l,i)}return i}function My(r,i,l,d,p,y,_,S,A){return r=Bh(l,d,!0,r,p,y,_,S,A),r.context=Oy(null),l=r.current,d=nn(),p=zo(l),y=Lr(d,p),y.callback=i??null,ko(l,y,p),r.current.lanes=p,so(r,p,d),dn(r,d),r}function tc(r,i,l,d){var p=i.current,y=nn(),_=zo(p);return l=Oy(l),i.context===null?i.context=l:i.pendingContext=l,i=Lr(y,_),i.payload={element:r},d=d===void 0?null:d,d!==null&&(i.callback=d),r=ko(p,i,_),r!==null&&(Yn(r,p,_,y),Au(r,p,_)),_}function nc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Ly(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<i?l:i}}function Kh(r,i){Ly(r,i),(r=r.alternate)&&Ly(r,i)}function Vj(){return null}var Fy=typeof reportError=="function"?reportError:function(r){console.error(r)};function $h(r){this._internalRoot=r}rc.prototype.render=$h.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));tc(r,i,null,null)},rc.prototype.unmount=$h.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;vi(function(){tc(null,r,null,null)}),i[Vr]=null}};function rc(r){this._internalRoot=r}rc.prototype.unstable_scheduleHydration=function(r){if(r){var i=ru();r={blockedOn:null,target:r,priority:i};for(var l=0;l<ur.length&&i!==0&&i<ur[l].priority;l++);ur.splice(l,0,r),l===0&&su(r)}};function Wh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function oc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Uy(){}function Nj(r,i,l,d,p){if(p){if(typeof d=="function"){var y=d;d=function(){var B=nc(_);y.call(B)}}var _=My(i,d,r,0,null,!1,!1,"",Uy);return r._reactRootContainer=_,r[Vr]=_.current,Oa(r.nodeType===8?r.parentNode:r),vi(),_}for(;p=r.lastChild;)r.removeChild(p);if(typeof d=="function"){var S=d;d=function(){var B=nc(A);S.call(B)}}var A=Bh(r,0,!1,null,null,!1,!1,"",Uy);return r._reactRootContainer=A,r[Vr]=A.current,Oa(r.nodeType===8?r.parentNode:r),vi(function(){tc(i,A,l,d)}),A}function ic(r,i,l,d,p){var y=l._reactRootContainer;if(y){var _=y;if(typeof p=="function"){var S=p;p=function(){var A=nc(_);S.call(A)}}tc(i,_,r,p)}else _=Nj(l,i,r,p,d);return nc(_)}tu=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var l=oo(i.pendingLanes);l!==0&&(ao(i,l|1),dn(i,Qe()),(Be&6)===0&&(Ts=Qe()+500,yo()))}break;case 13:vi(function(){var d=Mr(r,1);if(d!==null){var p=nn();Yn(d,r,1,p)}}),Kh(r,1)}},Xi=function(r){if(r.tag===13){var i=Mr(r,134217728);if(i!==null){var l=nn();Yn(i,r,134217728,l)}Kh(r,134217728)}},nu=function(r){if(r.tag===13){var i=zo(r),l=Mr(r,i);if(l!==null){var d=nn();Yn(l,r,i,d)}Kh(r,i)}},ru=function(){return Me},ou=function(r,i){var l=Me;try{return Me=r,i()}finally{Me=l}},Bi=function(r,i,l){switch(i){case"input":if(Oe(r,l),i=l.name,l.type==="radio"&&i!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var d=l[i];if(d!==r&&d.form===r.form){var p=wu(d);if(!p)throw Error(t(90));to(d),Oe(d,p)}}}break;case"textarea":Ui(r,l);break;case"select":i=l.value,i!=null&&Xt(r,!!l.multiple,i,!1)}},Qo=Oh,ga=vi;var Dj={usingClientEntryPoint:!1,Events:[Fa,ps,wu,ar,ya,Oh]},el={findFiberByHostInstance:li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oj={bundleType:el.bundleType,version:el.version,rendererPackageName:el.rendererPackageName,rendererConfig:el.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=_a(r),r===null?null:r.stateNode},findFiberByHostInstance:el.findFiberByHostInstance||Vj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ti=sc.inject(Oj),fn=sc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dj,hn.createPortal=function(r,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(i))throw Error(t(200));return Rj(r,i,null,l)},hn.createRoot=function(r,i){if(!Wh(r))throw Error(t(299));var l=!1,d="",p=Fy;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Bh(r,1,!1,null,null,l,!1,d,p),r[Vr]=i.current,Oa(r.nodeType===8?r.parentNode:r),new $h(i)},hn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=_a(i),r=r===null?null:r.stateNode,r},hn.flushSync=function(r){return vi(r)},hn.hydrate=function(r,i,l){if(!oc(i))throw Error(t(200));return ic(null,r,i,!0,l)},hn.hydrateRoot=function(r,i,l){if(!Wh(r))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,y="",_=Fy;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(_=l.onRecoverableError)),i=My(i,null,r,1,l??null,p,!1,y,_),r[Vr]=i.current,Oa(r),d)for(r=0;r<d.length;r++)l=d[r],p=l._getVersion,p=p(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,p]:i.mutableSourceEagerHydrationData.push(l,p);return new rc(i)},hn.render=function(r,i,l){if(!oc(i))throw Error(t(200));return ic(null,r,i,!1,l)},hn.unmountComponentAtNode=function(r){if(!oc(r))throw Error(t(40));return r._reactRootContainer?(vi(function(){ic(null,null,r,!1,function(){r._reactRootContainer=null,r[Vr]=null})}),!0):!1},hn.unstable_batchedUpdates=Oh,hn.unstable_renderSubtreeIntoContainer=function(r,i,l,d){if(!oc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ic(r,i,l,!1,d)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var Jy;function Wj(){if(Jy)return Jh.exports;Jy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jh.exports=$j(),Jh.exports}var Qy;function Gj(){if(Qy)return ac;Qy=1;var n=Wj();return ac.createRoot=n.createRoot,ac.hydrateRoot=n.hydrateRoot,ac}var qj=Gj();const Jj=F0(qj),Qj=({front:n,back:e,onDifficultySelect:t,isFlipped:o,onFlip:s,isFavorite:a=!1,onToggleFavorite:u,darkMode:h=!1})=>w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:"relative w-96 h-56 cursor-pointer",onClick:o?void 0:s,children:w.jsxs("div",{className:`absolute w-full h-full transition-transform duration-500 ${o?"rotate-y-180":""} transform-style-preserve-3d`,children:[w.jsxs("div",{className:`absolute w-full h-full ${h?"bg-gray-800":"bg-white"} rounded-xl shadow-lg p-6 backface-hidden flex items-center justify-center`,children:[w.jsx("p",{className:`text-xl text-center font-medium ${h?"text-white":"text-gray-800"}`,children:n}),w.jsx("button",{className:"absolute top-3 right-3",onClick:m=>{m.stopPropagation(),u()},children:a?w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-yellow-500",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"})}):w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-6 w-6 ${h?"text-gray-400 hover:text-yellow-400":"text-gray-400 hover:text-yellow-500"}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})})]}),w.jsxs("div",{className:`absolute w-full h-full ${h?"bg-blue-900":"bg-blue-50"} rounded-xl shadow-lg p-6 backface-hidden rotate-y-180 flex items-center justify-center`,children:[w.jsx("p",{className:`text-xl text-center font-medium ${h?"text-white":"text-gray-800"}`,children:e}),w.jsx("button",{className:"absolute top-3 right-3",onClick:m=>{m.stopPropagation(),u()},children:a?w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-yellow-500",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"})}):w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-6 w-6 ${h?"text-gray-400 hover:text-yellow-400":"text-gray-400 hover:text-yellow-500"}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})})]})]})}),o&&w.jsxs("div",{className:"mt-6 flex justify-center gap-4",children:[w.jsx("button",{onClick:()=>{t("hard")},className:`px-6 py-2 ${h?"bg-red-600 hover:bg-red-700":"bg-red-500 hover:bg-red-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Hard"}),w.jsx("button",{onClick:()=>{t("medium")},className:`px-6 py-2 ${h?"bg-yellow-600 hover:bg-yellow-700":"bg-yellow-500 hover:bg-yellow-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Medium"}),w.jsx("button",{onClick:()=>{t("easy")},className:`px-6 py-2 ${h?"bg-green-600 hover:bg-green-700":"bg-green-500 hover:bg-green-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Easy"})]})]}),Zj=({darkMode:n=!1,onClose:e})=>{const[t,o]=re.useState([]),[s,a]=re.useState(!1),[u,h]=re.useState({cardsReviewed:0,easy:0,medium:0,hard:0,categories:new Set,sessionsCompleted:0});re.useEffect(()=>{const f=localStorage.getItem("flashcards-study-sessions");if(f){const g=JSON.parse(f);o(g);const b={cardsReviewed:0,easy:0,medium:0,hard:0,categories:new Set,sessionsCompleted:g.length};g.forEach(z=>{b.cardsReviewed+=z.cardsReviewed,b.easy+=z.performance.easy,b.medium+=z.performance.medium,b.hard+=z.performance.hard,b.categories.add(z.category)}),h(b)}},[]);const m=f=>{const g=new Date(f);return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(g)};return w.jsx("div",{className:`fixed inset-0 ${n?"bg-black/70":"bg-black/50"} z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto`,children:w.jsxs("div",{className:`w-full max-w-4xl ${n?"bg-gray-800 text-white":"bg-white text-gray-800"} rounded-xl shadow-xl overflow-hidden my-2 sm:my-0`,children:[w.jsxs("div",{className:"flex justify-between items-center p-4 sm:p-6 border-b border-gray-200",children:[w.jsx("h2",{className:"text-xl sm:text-2xl font-bold",children:"Study Statistics"}),w.jsx("button",{onClick:e,className:`p-1.5 sm:p-2 rounded-full ${n?"hover:bg-gray-700":"hover:bg-gray-100"}`,children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-6 sm:w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),w.jsxs("div",{className:"p-4 sm:p-6",children:[w.jsxs("section",{className:"mb-6 sm:mb-8",children:[w.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-3 sm:mb-4",children:"Overall Progress"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4",children:[w.jsxs("div",{className:`p-3 sm:p-4 rounded-lg ${n?"bg-gray-700":"bg-gray-100"}`,children:[w.jsx("p",{className:"text-xs sm:text-sm text-gray-500",children:"Sessions"}),w.jsx("p",{className:"text-xl sm:text-2xl font-bold",children:u.sessionsCompleted})]}),w.jsxs("div",{className:`p-3 sm:p-4 rounded-lg ${n?"bg-gray-700":"bg-gray-100"}`,children:[w.jsx("p",{className:"text-xs sm:text-sm text-gray-500",children:"Cards"}),w.jsx("p",{className:"text-xl sm:text-2xl font-bold",children:u.cardsReviewed})]}),w.jsxs("div",{className:`p-3 sm:p-4 rounded-lg ${n?"bg-gray-700":"bg-gray-100"}`,children:[w.jsx("p",{className:"text-xs sm:text-sm text-gray-500",children:"Categories"}),w.jsx("p",{className:"text-xl sm:text-2xl font-bold",children:u.categories.size})]}),w.jsxs("div",{className:`p-3 sm:p-4 rounded-lg ${n?"bg-gray-700":"bg-gray-100"}`,children:[w.jsx("p",{className:"text-xs sm:text-sm text-gray-500",children:"Mastery"}),w.jsxs("p",{className:"text-xl sm:text-2xl font-bold",children:[u.cardsReviewed>0?Math.round(u.easy/u.cardsReviewed*100):0,"%"]})]})]})]}),w.jsxs("section",{className:"mb-6 sm:mb-8",children:[w.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-3 sm:mb-4",children:"Performance Distribution"}),w.jsx("div",{className:`h-3 sm:h-4 rounded-full ${n?"bg-gray-700":"bg-gray-200"} overflow-hidden`,children:u.cardsReviewed>0&&w.jsxs("div",{className:"flex h-full",children:[w.jsx("div",{className:"bg-green-500 h-full",style:{width:`${u.easy/u.cardsReviewed*100}%`}}),w.jsx("div",{className:"bg-yellow-500 h-full",style:{width:`${u.medium/u.cardsReviewed*100}%`}}),w.jsx("div",{className:"bg-red-500 h-full",style:{width:`${u.hard/u.cardsReviewed*100}%`}})]})}),w.jsxs("div",{className:"flex flex-col sm:flex-row justify-between mt-2 text-xs sm:text-sm text-gray-500 gap-1 sm:gap-0",children:[w.jsxs("span",{children:["Easy: ",u.easy," (",u.cardsReviewed>0?Math.round(u.easy/u.cardsReviewed*100):0,"%)"]}),w.jsxs("span",{children:["Medium: ",u.medium," (",u.cardsReviewed>0?Math.round(u.medium/u.cardsReviewed*100):0,"%)"]}),w.jsxs("span",{children:["Hard: ",u.hard," (",u.cardsReviewed>0?Math.round(u.hard/u.cardsReviewed*100):0,"%)"]})]})]}),w.jsxs("section",{children:[w.jsxs("div",{className:"flex justify-between items-center mb-3 sm:mb-4",children:[w.jsx("h3",{className:"text-base sm:text-lg font-semibold",children:"Recent Study Sessions"}),t.length>4&&w.jsx("button",{onClick:()=>a(!s),className:`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm
                    ${n?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:s?w.jsxs(w.Fragment,{children:["Show Less",w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 sm:h-4 sm:w-4",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})})]}):w.jsxs(w.Fragment,{children:["Show More",w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 sm:h-4 sm:w-4",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]}),t.length===0?w.jsx("p",{className:`text-center py-6 sm:py-8 text-sm sm:text-base ${n?"text-gray-400":"text-gray-500"}`,children:"You haven't completed any study sessions yet."}):w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"sm:hidden space-y-3",children:t.slice().reverse().slice(0,s?void 0:2).map((f,g)=>w.jsxs("div",{className:`p-3 rounded-lg ${n?"bg-gray-700":"bg-gray-100"}`,children:[w.jsxs("div",{className:"flex justify-between items-start mb-2",children:[w.jsxs("div",{className:"text-xs",children:[w.jsx("div",{className:"font-medium mb-1",children:m(f.date)}),w.jsx("div",{className:`${n?"text-gray-400":"text-gray-600"}`,children:f.category})]}),w.jsxs("div",{className:"text-xs font-medium",children:[f.cardsReviewed," cards"]})]}),w.jsxs("div",{className:"flex justify-between text-xs",children:[w.jsx("div",{children:w.jsxs("span",{className:"text-green-500",children:[f.performance.easy," Easy"]})}),w.jsx("div",{children:w.jsxs("span",{className:"text-yellow-500",children:[f.performance.medium," Medium"]})}),w.jsx("div",{children:w.jsxs("span",{className:"text-red-500",children:[f.performance.hard," Hard"]})})]})]},g))}),w.jsx("div",{className:"hidden sm:block",children:w.jsx("div",{className:`border ${n?"border-gray-700":"border-gray-200"} rounded-lg overflow-hidden`,children:w.jsxs("table",{className:"w-full",children:[w.jsx("thead",{className:`${n?"bg-gray-700":"bg-gray-50"}`,children:w.jsxs("tr",{children:[w.jsx("th",{className:"px-4 py-3 text-left text-sm",children:"Date"}),w.jsx("th",{className:"px-4 py-3 text-left text-sm",children:"Category"}),w.jsx("th",{className:"px-4 py-3 text-right text-sm",children:"Cards"}),w.jsx("th",{className:"px-4 py-3 text-right text-sm",children:"Easy"}),w.jsx("th",{className:"px-4 py-3 text-right text-sm",children:"Medium"}),w.jsx("th",{className:"px-4 py-3 text-right text-sm",children:"Hard"})]})}),w.jsx("tbody",{className:"divide-y divide-gray-200",children:t.slice().reverse().slice(0,s?void 0:2).map((f,g)=>w.jsxs("tr",{className:`${n?"hover:bg-gray-700":"hover:bg-gray-50"}`,children:[w.jsx("td",{className:"px-4 py-3 text-sm",children:m(f.date)}),w.jsx("td",{className:"px-4 py-3 text-sm",children:f.category}),w.jsx("td",{className:"px-4 py-3 text-sm text-right",children:f.cardsReviewed}),w.jsx("td",{className:"px-4 py-3 text-sm text-right text-green-500",children:f.performance.easy}),w.jsx("td",{className:"px-4 py-3 text-sm text-right text-yellow-500",children:f.performance.medium}),w.jsx("td",{className:"px-4 py-3 text-sm text-right text-red-500",children:f.performance.hard})]},g))})]})})}),!s&&t.length>4&&w.jsx("div",{className:`text-center py-2 sm:py-3 ${n?"bg-gray-700/50":"bg-gray-50"} mt-2 rounded-lg`,children:w.jsxs("span",{className:`text-xs sm:text-sm ${n?"text-gray-400":"text-gray-500"}`,children:[t.length-4," more sessions hidden"]})})]})]})]}),w.jsx("div",{className:"p-4 sm:p-6 border-t border-gray-200 flex justify-end",children:w.jsx("button",{onClick:e,className:`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base ${n?"bg-gray-700 hover:bg-gray-600":"bg-gray-200 hover:bg-gray-300"} rounded-lg transition-colors duration-200`,children:"Close"})})]})})},Xj=({darkMode:n,onClose:e,totalCards:t})=>w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:o=>{o.target===o.currentTarget&&e()},children:w.jsx("div",{className:`
        ${n?"bg-gray-800 text-white":"bg-white text-gray-900"}
        max-w-md w-full rounded-xl shadow-2xl p-6 sm:p-8
        transform transition-all duration-300 ease-out
        animate-bounce-once
      `,children:w.jsxs("div",{className:"space-y-6 text-center",children:[w.jsx("div",{className:"flex justify-center",children:w.jsx("div",{className:`w-16 h-16 rounded-full ${n?"bg-green-900":"bg-green-100"} flex items-center justify-center`,children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-10 w-10 ${n?"text-green-300":"text-green-600"}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})})}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Congratulations! 🎉"}),w.jsxs("p",{className:`text-lg ${n?"text-gray-300":"text-gray-600"}`,children:["You've mastered all ",t," cards in this deck!"]})]}),w.jsx("div",{className:`p-4 rounded-lg ${n?"bg-blue-900/30":"bg-blue-50"}`,children:w.jsx("p",{className:`text-sm ${n?"text-blue-300":"text-blue-700"}`,children:"Great job! You've demonstrated a strong understanding of this topic. Keep reviewing periodically to maintain your knowledge."})}),w.jsx("div",{className:"flex justify-center pt-4",children:w.jsx("button",{onClick:e,className:`
                px-6 py-3 rounded-lg text-sm font-medium
                transition-all duration-200
                transform hover:scale-[1.02] active:scale-[0.98]
                ${n?"bg-green-600 hover:bg-green-700 text-white":"bg-green-500 hover:bg-green-600 text-white"}
              `,children:"Continue Learning"})})]})})}),U0=re.createContext({});function Yj(n){const e=re.useRef(null);return e.current===null&&(e.current=n()),e.current}const dp=typeof window<"u",eE=dp?re.useLayoutEffect:re.useEffect,hp=re.createContext(null),H0=re.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function tE(n=!0){const e=re.useContext(hp);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:o,register:s}=e,a=re.useId();re.useEffect(()=>{if(n)return s(a)},[n]);const u=re.useCallback(()=>n&&o&&o(a),[a,o,n]);return!t&&o?[!1,u]:[!0]}function mp(n,e){n.indexOf(e)===-1&&n.push(e)}function pp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const wn=n=>n;let B0=wn;const nE={useManualTiming:!1};function fp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Bs=(n,e,t)=>{const o=e-n;return o===0?1:(t-n)/o};class vp{constructor(){this.subscriptions=[]}add(e){return mp(this.subscriptions,e),()=>pp(this.subscriptions,e)}notify(e,t,o){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,o);else for(let a=0;a<s;a++){const u=this.subscriptions[a];u&&u(e,t,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wr=n=>n*1e3,Gr=n=>n/1e3;function K0(n,e){return e?n*(1e3/e):0}const rE=fp(()=>window.ScrollTimeline!==void 0);class oE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let o=0;o<this.animations.length;o++)this.animations[o][e]=t}attachTimeline(e,t){const o=this.animations.map(s=>{if(rE()&&s.attachTimeline)return s.attachTimeline(e);if(typeof t=="function")return t(s)});return()=>{o.forEach((s,a)=>{s&&s(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class iE extends oE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function yp(n,e){return n?n[e]||n.default||n:void 0}const _m=2e4;function $0(n){let e=0;const t=50;let o=n.next(e);for(;!o.done&&e<_m;)e+=t,o=n.next(e);return e>=_m?1/0:e}function gp(n){return typeof n=="function"}function Zy(n,e){n.timeline=e,n.onfinish=null}const kp=n=>Array.isArray(n)&&typeof n[0]=="number",sE={linearEasing:void 0};function aE(n,e){const t=fp(n);return()=>{var o;return(o=sE[e])!==null&&o!==void 0?o:t()}}const Pc=aE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),W0=(n,e,t=10)=>{let o="";const s=Math.max(Math.round(e/t),2);for(let a=0;a<s;a++)o+=n(Bs(0,s-1,a))+", ";return`linear(${o.substring(0,o.length-2)})`};function G0(n){return!!(typeof n=="function"&&Pc()||!n||typeof n=="string"&&(n in wm||Pc())||kp(n)||Array.isArray(n)&&n.every(G0))}const rl=([n,e,t,o])=>`cubic-bezier(${n}, ${e}, ${t}, ${o})`,wm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:rl([0,.65,.55,1]),circOut:rl([.55,0,1,.45]),backIn:rl([.31,.01,.66,-.59]),backOut:rl([.33,1.53,.69,.99])};function q0(n,e){if(n)return typeof n=="function"&&Pc()?W0(n,e):kp(n)?rl(n):Array.isArray(n)?n.map(t=>q0(t,e)||wm.easeOut):wm[n]}const lc=["read","resolveKeyframes","update","preRender","render","postRender"],Xy={value:null};function lE(n,e){let t=new Set,o=new Set,s=!1,a=!1;const u=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1},m=0;function f(b){u.has(b)&&(g.schedule(b),n()),m++,b(h)}const g={schedule:(b,z=!1,P=!1)=>{const M=P&&s?t:o;return z&&u.add(b),M.has(b)||M.add(b),b},cancel:b=>{o.delete(b),u.delete(b)},process:b=>{if(h=b,s){a=!0;return}s=!0,[t,o]=[o,t],t.forEach(f),e&&Xy.value&&Xy.value.frameloop[e].push(m),m=0,t.clear(),s=!1,a&&(a=!1,g.process(b))}};return g}const uE=40;function J0(n,e){let t=!1,o=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,u=lc.reduce(($,q)=>($[q]=lE(a,e?q:void 0),$),{}),{read:h,resolveKeyframes:m,update:f,preRender:g,render:b,postRender:z}=u,P=()=>{const $=performance.now();t=!1,s.delta=o?1e3/60:Math.max(Math.min($-s.timestamp,uE),1),s.timestamp=$,s.isProcessing=!0,h.process(s),m.process(s),f.process(s),g.process(s),b.process(s),z.process(s),s.isProcessing=!1,t&&e&&(o=!1,n(P))},N=()=>{t=!0,o=!0,s.isProcessing||n(P)};return{schedule:lc.reduce(($,q)=>{const Q=u[q];return $[q]=(oe,ae=!1,se=!1)=>(t||N(),Q.schedule(oe,ae,se)),$},{}),cancel:$=>{for(let q=0;q<lc.length;q++)u[lc[q]].cancel($)},state:s,steps:u}}const{schedule:Xe,cancel:Mo,state:Mt,steps:Xh}=J0(typeof requestAnimationFrame<"u"?requestAnimationFrame:wn,!0),{schedule:bp}=J0(queueMicrotask,!1);let yc;function cE(){yc=void 0}const gr={now:()=>(yc===void 0&&gr.set(Mt.isProcessing||nE.useManualTiming?Mt.timestamp:performance.now()),yc),set:n=>{yc=n,queueMicrotask(cE)}},er={x:!1,y:!1};function Q0(){return er.x||er.y}function dE(n){return n==="x"||n==="y"?er[n]?null:(er[n]=!0,()=>{er[n]=!1}):er.x||er.y?null:(er.x=er.y=!0,()=>{er.x=er.y=!1})}function hE(n,e,t){var o;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let s=document;const a=(o=void 0)!==null&&o!==void 0?o:s.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function Z0(n,e){const t=hE(n),o=new AbortController,s={passive:!0,...e,signal:o.signal};return[t,s,()=>o.abort()]}function Yy(n){return!(n.pointerType==="touch"||Q0())}function mE(n,e,t={}){const[o,s,a]=Z0(n,t),u=h=>{if(!Yy(h))return;const{target:m}=h,f=e(m,h);if(typeof f!="function"||!m)return;const g=b=>{Yy(b)&&(f(b),m.removeEventListener("pointerleave",g))};m.addEventListener("pointerleave",g,s)};return o.forEach(h=>{h.addEventListener("pointerenter",u,s)}),a}function eg(n,e){const t=`${e}PointerCapture`;if(n.target instanceof Element&&t in n.target&&n.pointerId!==void 0)try{n.target[t](n.pointerId)}catch{}}const X0=(n,e)=>e?n===e?!0:X0(n,e.parentElement):!1,_p=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,pE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function fE(n){return pE.has(n.tagName)||n.tabIndex!==-1}const ol=new WeakSet;function tg(n){return e=>{e.key==="Enter"&&n(e)}}function Yh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const vE=(n,e)=>{const t=n.currentTarget;if(!t)return;const o=tg(()=>{if(ol.has(t))return;Yh(t,"down");const s=tg(()=>{Yh(t,"up")}),a=()=>Yh(t,"cancel");t.addEventListener("keyup",s,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",o,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",o),e)};function ng(n){return _p(n)&&!Q0()}function yE(n,e,t={}){const[o,s,a]=Z0(n,t),u=h=>{const m=h.currentTarget;if(!m||!ng(h)||ol.has(m))return;ol.add(m),eg(h,"set");const f=e(m,h),g=(P,N)=>{m.removeEventListener("pointerup",b),m.removeEventListener("pointercancel",z),eg(P,"release"),!(!ng(P)||!ol.has(m))&&(ol.delete(m),typeof f=="function"&&f(P,{success:N}))},b=P=>{(P.isTrusted?gE(P,m instanceof Element?m.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?g(P,!1):g(P,!(m instanceof Element)||X0(m,P.target))},z=P=>{g(P,!1)};m.addEventListener("pointerup",b,s),m.addEventListener("pointercancel",z,s),m.addEventListener("lostpointercapture",z,s)};return o.forEach(h=>{h=t.useGlobalTarget?window:h;let m=!1;h instanceof HTMLElement&&(m=!0,!fE(h)&&h.getAttribute("tabindex")===null&&(h.tabIndex=0)),h.addEventListener("pointerdown",u,s),m&&h.addEventListener("focus",f=>vE(f,s),s)}),a}function gE(n,e){return n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom}const rg=30,kE=n=>!isNaN(parseFloat(n));class bE{constructor(e,t={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,s=!0)=>{const a=gr.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=gr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=kE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new vp);const o=this.events[e].add(t);return e==="change"?()=>{o(),Xe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,o){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-o}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=gr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>rg)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,rg);return K0(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yl(n,e){return new bE(n,e)}const Y0=re.createContext({strict:!1}),og={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ks={};for(const n in og)Ks[n]={isEnabled:e=>og[n].some(t=>!!e[t])};function _E(n){for(const e in n)Ks[e]={...Ks[e],...n[e]}}const wE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Cc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||wE.has(n)}let eb=n=>!Cc(n);function zE(n){n&&(eb=e=>e.startsWith("on")?!Cc(e):n(e))}try{zE(require("@emotion/is-prop-valid").default)}catch{}function jE(n,e,t){const o={};for(const s in n)s==="values"&&typeof n.values=="object"||(eb(s)||t===!0&&Cc(s)||!e&&!Cc(s)||n.draggable&&s.startsWith("onDrag"))&&(o[s]=n[s]);return o}function EE(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...o)=>n(...o);return new Proxy(t,{get:(o,s)=>s==="create"?n:(e.has(s)||e.set(s,n(s)),e.get(s))})}const td=re.createContext({});function nd(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function gl(n){return typeof n=="string"||Array.isArray(n)}const wp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],zp=["initial",...wp];function rd(n){return nd(n.animate)||zp.some(e=>gl(n[e]))}function tb(n){return!!(rd(n)||n.variants)}function SE(n,e){if(rd(n)){const{initial:t,animate:o}=n;return{initial:t===!1||gl(t)?t:void 0,animate:gl(o)?o:void 0}}return n.inherit!==!1?e:{}}function TE(n){const{initial:e,animate:t}=SE(n,re.useContext(td));return re.useMemo(()=>({initial:e,animate:t}),[ig(e),ig(t)])}function ig(n){return Array.isArray(n)?n.join(" "):n}const xE=Symbol.for("motionComponentSymbol");function Vs(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function PE(n,e,t){return re.useCallback(o=>{o&&n.onMount&&n.onMount(o),e&&(o?e.mount(o):e.unmount()),t&&(typeof t=="function"?t(o):Vs(t)&&(t.current=o))},[e])}const jp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),CE="framerAppearId",nb="data-"+jp(CE),rb=re.createContext({});function IE(n,e,t,o,s){var a,u;const{visualElement:h}=re.useContext(td),m=re.useContext(Y0),f=re.useContext(hp),g=re.useContext(H0).reducedMotion,b=re.useRef(null);o=o||m.renderer,!b.current&&o&&(b.current=o(n,{visualState:e,parent:h,props:t,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:g}));const z=b.current,P=re.useContext(rb);z&&!z.projection&&s&&(z.type==="html"||z.type==="svg")&&AE(b.current,t,s,P);const N=re.useRef(!1);re.useInsertionEffect(()=>{z&&N.current&&z.update(t,f)});const M=t[nb],L=re.useRef(!!M&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,M))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,M)));return eE(()=>{z&&(N.current=!0,window.MotionIsMounted=!0,z.updateFeatures(),bp.render(z.render),L.current&&z.animationState&&z.animationState.animateChanges())}),re.useEffect(()=>{z&&(!L.current&&z.animationState&&z.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)===null||$===void 0||$.call(window,M)}),L.current=!1))}),z}function AE(n,e,t,o){const{layoutId:s,layout:a,drag:u,dragConstraints:h,layoutScroll:m,layoutRoot:f}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:ob(n.parent)),n.projection.setOptions({layoutId:s,layout:a,alwaysMeasureLayout:!!u||h&&Vs(h),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:o,layoutScroll:m,layoutRoot:f})}function ob(n){if(n)return n.options.allowProjection!==!1?n.projection:ob(n.parent)}function RE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:o,Component:s}){var a,u;n&&_E(n);function h(f,g){let b;const z={...re.useContext(H0),...f,layoutId:VE(f)},{isStatic:P}=z,N=TE(f),M=o(f,P);if(!P&&dp){NE();const L=DE(z);b=L.MeasureLayout,N.visualElement=IE(s,M,z,e,L.ProjectionNode)}return w.jsxs(td.Provider,{value:N,children:[b&&N.visualElement?w.jsx(b,{visualElement:N.visualElement,...z}):null,t(s,f,PE(M,N.visualElement,g),M,P,N.visualElement)]})}h.displayName=`motion.${typeof s=="string"?s:`create(${(u=(a=s.displayName)!==null&&a!==void 0?a:s.name)!==null&&u!==void 0?u:""})`}`;const m=re.forwardRef(h);return m[xE]=s,m}function VE({layoutId:n}){const e=re.useContext(U0).id;return e&&n!==void 0?e+"-"+n:n}function NE(n,e){re.useContext(Y0).strict}function DE(n){const{drag:e,layout:t}=Ks;if(!e&&!t)return{};const o={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const ib=n=>e=>typeof e=="string"&&e.startsWith(n),Ep=ib("--"),OE=ib("var(--"),Sp=n=>OE(n)?ME.test(n.split("/*")[0].trim()):!1,ME=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,kl={};function LE(n){for(const e in n)kl[e]=n[e],Ep(e)&&(kl[e].isCSSVariable=!0)}const ta=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ni=new Set(ta);function sb(n,{layout:e,layoutId:t}){return Ni.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!kl[n]||n==="opacity")}const Qt=n=>!!(n&&n.getVelocity),ab=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Jr=(n,e,t)=>t>e?e:t<n?n:t,na={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},bl={...na,transform:n=>Jr(0,1,n)},uc={...na,default:1},Vl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),xo=Vl("deg"),kr=Vl("%"),_e=Vl("px"),FE=Vl("vh"),UE=Vl("vw"),sg={...kr,parse:n=>kr.parse(n)/100,transform:n=>kr.transform(n*100)},HE={borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,backgroundPositionX:_e,backgroundPositionY:_e},BE={rotate:xo,rotateX:xo,rotateY:xo,rotateZ:xo,scale:uc,scaleX:uc,scaleY:uc,scaleZ:uc,skew:xo,skewX:xo,skewY:xo,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:bl,originX:sg,originY:sg,originZ:_e},ag={...na,transform:Math.round},Tp={...HE,...BE,zIndex:ag,size:_e,fillOpacity:bl,strokeOpacity:bl,numOctaves:ag},KE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$E=ta.length;function WE(n,e,t){let o="",s=!0;for(let a=0;a<$E;a++){const u=ta[a],h=n[u];if(h===void 0)continue;let m=!0;if(typeof h=="number"?m=h===(u.startsWith("scale")?1:0):m=parseFloat(h)===0,!m||t){const f=ab(h,Tp[u]);if(!m){s=!1;const g=KE[u]||u;o+=`${g}(${f}) `}t&&(e[u]=f)}}return o=o.trim(),t?o=t(e,s?"":o):s&&(o="none"),o}function xp(n,e,t){const{style:o,vars:s,transformOrigin:a}=n;let u=!1,h=!1;for(const m in e){const f=e[m];if(Ni.has(m)){u=!0;continue}else if(Ep(m)){s[m]=f;continue}else{const g=ab(f,Tp[m]);m.startsWith("origin")?(h=!0,a[m]=g):o[m]=g}}if(e.transform||(u||t?o.transform=WE(e,n.transform,t):o.transform&&(o.transform="none")),h){const{originX:m="50%",originY:f="50%",originZ:g=0}=a;o.transformOrigin=`${m} ${f} ${g}`}}const Pp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lb(n,e,t){for(const o in e)!Qt(e[o])&&!sb(o,t)&&(n[o]=e[o])}function GE({transformTemplate:n},e){return re.useMemo(()=>{const t=Pp();return xp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function qE(n,e){const t=n.style||{},o={};return lb(o,t,n),Object.assign(o,GE(n,e)),o}function JE(n,e){const t={},o=qE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=o,t}const QE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cp(n){return typeof n!="string"||n.includes("-")?!1:!!(QE.indexOf(n)>-1||/[A-Z]/u.test(n))}const ZE={offset:"stroke-dashoffset",array:"stroke-dasharray"},XE={offset:"strokeDashoffset",array:"strokeDasharray"};function YE(n,e,t=1,o=0,s=!0){n.pathLength=1;const a=s?ZE:XE;n[a.offset]=_e.transform(-o);const u=_e.transform(e),h=_e.transform(t);n[a.array]=`${u} ${h}`}function lg(n,e,t){return typeof n=="string"?n:_e.transform(e+t*n)}function eS(n,e,t){const o=lg(e,n.x,n.width),s=lg(t,n.y,n.height);return`${o} ${s}`}function Ip(n,{attrX:e,attrY:t,attrScale:o,originX:s,originY:a,pathLength:u,pathSpacing:h=1,pathOffset:m=0,...f},g,b){if(xp(n,f,b),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:z,style:P,dimensions:N}=n;z.transform&&(N&&(P.transform=z.transform),delete z.transform),N&&(s!==void 0||a!==void 0||P.transform)&&(P.transformOrigin=eS(N,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(z.x=e),t!==void 0&&(z.y=t),o!==void 0&&(z.scale=o),u!==void 0&&YE(z,u,h,m,!1)}const ub=()=>({...Pp(),attrs:{}}),Ap=n=>typeof n=="string"&&n.toLowerCase()==="svg";function tS(n,e,t,o){const s=re.useMemo(()=>{const a=ub();return Ip(a,e,Ap(o),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};lb(a,n.style,n),s.style={...a,...s.style}}return s}function nS(n=!1){return(t,o,s,{latestValues:a},u)=>{const m=(Cp(t)?tS:JE)(o,a,u,t),f=jE(o,typeof t=="string",n),g=t!==re.Fragment?{...f,...m,ref:s}:{},{children:b}=o,z=re.useMemo(()=>Qt(b)?b.get():b,[b]);return re.createElement(t,{...g,children:z})}}function ug(n){const e=[{},{}];return n==null||n.values.forEach((t,o)=>{e[0][o]=t.get(),e[1][o]=t.getVelocity()}),e}function Rp(n,e,t,o){if(typeof e=="function"){const[s,a]=ug(o);e=e(t!==void 0?t:n.custom,s,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,a]=ug(o);e=e(t!==void 0?t:n.custom,s,a)}return e}const zm=n=>Array.isArray(n),rS=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),oS=n=>zm(n)?n[n.length-1]||0:n;function gc(n){const e=Qt(n)?n.get():n;return rS(e)?e.toValue():e}function iS({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},o,s,a){const u={latestValues:sS(o,s,a,n),renderState:e()};return t&&(u.onMount=h=>t({props:o,current:h,...u}),u.onUpdate=h=>t(h)),u}const cb=n=>(e,t)=>{const o=re.useContext(td),s=re.useContext(hp),a=()=>iS(n,e,o,s);return t?a():Yj(a)};function sS(n,e,t,o){const s={},a=o(n,{});for(const z in a)s[z]=gc(a[z]);let{initial:u,animate:h}=n;const m=rd(n),f=tb(n);e&&f&&!m&&n.inherit!==!1&&(u===void 0&&(u=e.initial),h===void 0&&(h=e.animate));let g=t?t.initial===!1:!1;g=g||u===!1;const b=g?h:u;if(b&&typeof b!="boolean"&&!nd(b)){const z=Array.isArray(b)?b:[b];for(let P=0;P<z.length;P++){const N=Rp(n,z[P]);if(N){const{transitionEnd:M,transition:L,...$}=N;for(const q in $){let Q=$[q];if(Array.isArray(Q)){const oe=g?Q.length-1:0;Q=Q[oe]}Q!==null&&(s[q]=Q)}for(const q in M)s[q]=M[q]}}}return s}function Vp(n,e,t){var o;const{style:s}=n,a={};for(const u in s)(Qt(s[u])||e.style&&Qt(e.style[u])||sb(u,n)||((o=t==null?void 0:t.getValue(u))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(a[u]=s[u]);return a}const aS={useVisualState:cb({scrapeMotionValuesFromProps:Vp,createRenderState:Pp})};function db(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}function hb(n,{style:e,vars:t},o,s){Object.assign(n.style,e,s&&s.getProjectionStyles(o));for(const a in t)n.style.setProperty(a,t[a])}const mb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function pb(n,e,t,o){hb(n,e,void 0,o);for(const s in e.attrs)n.setAttribute(mb.has(s)?s:jp(s),e.attrs[s])}function fb(n,e,t){const o=Vp(n,e,t);for(const s in n)if(Qt(n[s])||Qt(e[s])){const a=ta.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;o[a]=n[s]}return o}const cg=["x","y","width","height","cx","cy","r"],lS={useVisualState:cb({scrapeMotionValuesFromProps:fb,createRenderState:ub,onUpdate:({props:n,prevProps:e,current:t,renderState:o,latestValues:s})=>{if(!t)return;let a=!!n.drag;if(!a){for(const h in s)if(Ni.has(h)){a=!0;break}}if(!a)return;let u=!e;if(e)for(let h=0;h<cg.length;h++){const m=cg[h];n[m]!==e[m]&&(u=!0)}u&&Xe.read(()=>{db(t,o),Xe.render(()=>{Ip(o,s,Ap(t.tagName),n.transformTemplate),pb(t,o)})})}})};function uS(n,e){return function(o,{forwardMotionProps:s}={forwardMotionProps:!1}){const u={...Cp(o)?lS:aS,preloadedFeatures:n,useRender:nS(s),createVisualElement:e,Component:o};return RE(u)}}function _l(n,e,t){const o=n.getProps();return Rp(o,e,t!==void 0?t:o.custom,n)}const vb=new Set(["width","height","top","left","right","bottom",...ta]);function cS(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,yl(t))}function dS(n,e){const t=_l(n,e);let{transitionEnd:o={},transition:s={},...a}=t||{};a={...a,...o};for(const u in a){const h=oS(a[u]);cS(n,u,h)}}function hS(n){return!!(Qt(n)&&n.add)}function jm(n,e){const t=n.getValue("willChange");if(hS(t))return t.add(e)}function yb(n){return n.props[nb]}const gb=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,mS=1e-7,pS=12;function fS(n,e,t,o,s){let a,u,h=0;do u=e+(t-e)/2,a=gb(u,o,s)-n,a>0?t=u:e=u;while(Math.abs(a)>mS&&++h<pS);return u}function Nl(n,e,t,o){if(n===e&&t===o)return wn;const s=a=>fS(a,0,1,n,t);return a=>a===0||a===1?a:gb(s(a),e,o)}const kb=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,bb=n=>e=>1-n(1-e),_b=Nl(.33,1.53,.69,.99),Np=bb(_b),wb=kb(Np),zb=n=>(n*=2)<1?.5*Np(n):.5*(2-Math.pow(2,-10*(n-1))),Dp=n=>1-Math.sin(Math.acos(n)),jb=bb(Dp),Eb=kb(Dp),Sb=n=>/^0[^.\s]+$/u.test(n);function vS(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Sb(n):!0}const ll=n=>Math.round(n*1e5)/1e5,Op=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yS(n){return n==null}const gS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mp=(n,e)=>t=>!!(typeof t=="string"&&gS.test(t)&&t.startsWith(n)||e&&!yS(t)&&Object.prototype.hasOwnProperty.call(t,e)),Tb=(n,e,t)=>o=>{if(typeof o!="string")return o;const[s,a,u,h]=o.match(Op);return{[n]:parseFloat(s),[e]:parseFloat(a),[t]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},kS=n=>Jr(0,255,n),em={...na,transform:n=>Math.round(kS(n))},zi={test:Mp("rgb","red"),parse:Tb("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:o=1})=>"rgba("+em.transform(n)+", "+em.transform(e)+", "+em.transform(t)+", "+ll(bl.transform(o))+")"};function bS(n){let e="",t="",o="",s="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),o=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),o=n.substring(3,4),s=n.substring(4,5),e+=e,t+=t,o+=o,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(o,16),alpha:s?parseInt(s,16)/255:1}}const Em={test:Mp("#"),parse:bS,transform:zi.transform},Ns={test:Mp("hsl","hue"),parse:Tb("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:o=1})=>"hsla("+Math.round(n)+", "+kr.transform(ll(e))+", "+kr.transform(ll(t))+", "+ll(bl.transform(o))+")"},Gt={test:n=>zi.test(n)||Em.test(n)||Ns.test(n),parse:n=>zi.test(n)?zi.parse(n):Ns.test(n)?Ns.parse(n):Em.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?zi.transform(n):Ns.transform(n)},_S=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wS(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Op))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(_S))===null||t===void 0?void 0:t.length)||0)>0}const xb="number",Pb="color",zS="var",jS="var(",dg="${}",ES=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wl(n){const e=n.toString(),t=[],o={color:[],number:[],var:[]},s=[];let a=0;const h=e.replace(ES,m=>(Gt.test(m)?(o.color.push(a),s.push(Pb),t.push(Gt.parse(m))):m.startsWith(jS)?(o.var.push(a),s.push(zS),t.push(m)):(o.number.push(a),s.push(xb),t.push(parseFloat(m))),++a,dg)).split(dg);return{values:t,split:h,indexes:o,types:s}}function Cb(n){return wl(n).values}function Ib(n){const{split:e,types:t}=wl(n),o=e.length;return s=>{let a="";for(let u=0;u<o;u++)if(a+=e[u],s[u]!==void 0){const h=t[u];h===xb?a+=ll(s[u]):h===Pb?a+=Gt.transform(s[u]):a+=s[u]}return a}}const SS=n=>typeof n=="number"?0:n;function TS(n){const e=Cb(n);return Ib(n)(e.map(SS))}const Lo={test:wS,parse:Cb,createTransformer:Ib,getAnimatableNone:TS},xS=new Set(["brightness","contrast","saturate","opacity"]);function PS(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[o]=t.match(Op)||[];if(!o)return n;const s=t.replace(o,"");let a=xS.has(e)?1:0;return o!==t&&(a*=100),e+"("+a+s+")"}const CS=/\b([a-z-]*)\(.*?\)/gu,Sm={...Lo,getAnimatableNone:n=>{const e=n.match(CS);return e?e.map(PS).join(" "):n}},IS={...Tp,color:Gt,backgroundColor:Gt,outlineColor:Gt,fill:Gt,stroke:Gt,borderColor:Gt,borderTopColor:Gt,borderRightColor:Gt,borderBottomColor:Gt,borderLeftColor:Gt,filter:Sm,WebkitFilter:Sm},Ab=n=>IS[n];function Rb(n,e){let t=Ab(n);return t!==Sm&&(t=Lo),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const AS=new Set(["auto","none","0"]);function RS(n,e,t){let o=0,s;for(;o<n.length&&!s;){const a=n[o];typeof a=="string"&&!AS.has(a)&&wl(a).values.length&&(s=n[o]),o++}if(s&&t)for(const a of e)n[a]=Rb(t,s)}const ji=n=>n*180/Math.PI,Tm=n=>{const e=ji(Math.atan2(n[1],n[0]));return xm(e)},VS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Tm,rotateZ:Tm,skewX:n=>ji(Math.atan(n[1])),skewY:n=>ji(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},xm=n=>(n=n%360,n<0&&(n+=360),n),hg=Tm,mg=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),pg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),NS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:mg,scaleY:pg,scale:n=>(mg(n)+pg(n))/2,rotateX:n=>xm(ji(Math.atan2(n[6],n[5]))),rotateY:n=>xm(ji(Math.atan2(-n[2],n[0]))),rotateZ:hg,rotate:hg,skewX:n=>ji(Math.atan(n[4])),skewY:n=>ji(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function fg(n){return n.includes("scale")?1:0}function Pm(n,e){if(!n||n==="none")return fg(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,s;if(t)o=NS,s=t;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=VS,s=h}if(!s)return fg(e);const a=o[e],u=s[1].split(",").map(OS);return typeof a=="function"?a(u):u[a]}const DS=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Pm(t,e)};function OS(n){return parseFloat(n.trim())}const vg=n=>n===na||n===_e,MS=new Set(["x","y","z"]),LS=ta.filter(n=>!MS.has(n));function FS(n){const e=[];return LS.forEach(t=>{const o=n.getValue(t);o!==void 0&&(e.push([t,o.get()]),o.set(t.startsWith("scale")?1:0))}),e}const $s={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Pm(e,"x"),y:(n,{transform:e})=>Pm(e,"y")};$s.translateX=$s.x;$s.translateY=$s.y;const Ti=new Set;let Cm=!1,Im=!1;function Vb(){if(Im){const n=Array.from(Ti).filter(o=>o.needsMeasurement),e=new Set(n.map(o=>o.element)),t=new Map;e.forEach(o=>{const s=FS(o);s.length&&(t.set(o,s),o.render())}),n.forEach(o=>o.measureInitialState()),e.forEach(o=>{o.render();const s=t.get(o);s&&s.forEach(([a,u])=>{var h;(h=o.getValue(a))===null||h===void 0||h.set(u)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Im=!1,Cm=!1,Ti.forEach(n=>n.complete()),Ti.clear()}function Nb(){Ti.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Im=!0)})}function US(){Nb(),Vb()}class Lp{constructor(e,t,o,s,a,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=o,this.motionValue=s,this.element=a,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ti.add(this),Cm||(Cm=!0,Xe.read(Nb),Xe.resolveKeyframes(Vb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:o,motionValue:s}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const u=s==null?void 0:s.get(),h=e[e.length-1];if(u!==void 0)e[0]=u;else if(o&&t){const m=o.readValue(t,h);m!=null&&(e[0]=m)}e[0]===void 0&&(e[0]=h),s&&u===void 0&&s.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ti.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ti.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Db=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),HS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function BS(n){const e=HS.exec(n);if(!e)return[,];const[,t,o,s]=e;return[`--${t??o}`,s]}function Ob(n,e,t=1){const[o,s]=BS(n);if(!o)return;const a=window.getComputedStyle(e).getPropertyValue(o);if(a){const u=a.trim();return Db(u)?parseFloat(u):u}return Sp(s)?Ob(s,e,t+1):s}const Mb=n=>e=>e.test(n),KS={test:n=>n==="auto",parse:n=>n},Lb=[na,_e,kr,xo,UE,FE,KS],yg=n=>Lb.find(Mb(n));class Fb extends Lp{constructor(e,t,o,s,a){super(e,t,o,s,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:o}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let f=e[m];if(typeof f=="string"&&(f=f.trim(),Sp(f))){const g=Ob(f,t.current);g!==void 0&&(e[m]=g),m===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!vb.has(o)||e.length!==2)return;const[s,a]=e,u=yg(s),h=yg(a);if(u!==h)if(vg(u)&&vg(h))for(let m=0;m<e.length;m++){const f=e[m];typeof f=="string"&&(e[m]=parseFloat(f))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,o=[];for(let s=0;s<e.length;s++)vS(e[s])&&o.push(s);o.length&&RS(e,o,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:o}=this;if(!e||!e.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$s[o](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(o,s).jump(s,!1)}measureEndState(){var e;const{element:t,name:o,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const a=t.getValue(o);a&&a.jump(this.measuredOrigin,!1);const u=s.length-1,h=s[u];s[u]=$s[o](t.measureViewportBox(),window.getComputedStyle(t.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([m,f])=>{t.getValue(m).set(f)}),this.resolveNoneKeyframes()}}const gg=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Lo.test(n)||n==="0")&&!n.startsWith("url("));function $S(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function WS(n,e,t,o){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],u=gg(s,e),h=gg(a,e);return!u||!h?!1:$S(n)||(t==="spring"||gp(t))&&o}const GS=n=>n!==null;function od(n,{repeat:e,repeatType:t="loop"},o){const s=n.filter(GS),a=e&&t!=="loop"&&e%2===1?0:s.length-1;return!a||o===void 0?s[a]:o}const qS=40;class Ub{constructor({autoplay:e=!0,delay:t=0,type:o="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:u="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=gr.now(),this.options={autoplay:e,delay:t,type:o,repeat:s,repeatDelay:a,repeatType:u,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>qS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&US(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=gr.now(),this.hasAttemptedResolve=!0;const{name:o,type:s,velocity:a,delay:u,onComplete:h,onUpdate:m,isGenerator:f}=this.options;if(!f&&!WS(e,o,s,a))if(u)this.options.duration=0;else{m&&m(od(e,this.options,t)),h&&h(),this.resolveFinishedPromise();return}const g=this.initPlayback(e,t);g!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...g},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const at=(n,e,t)=>n+(e-n)*t;function tm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function JS({hue:n,saturation:e,lightness:t,alpha:o}){n/=360,e/=100,t/=100;let s=0,a=0,u=0;if(!e)s=a=u=t;else{const h=t<.5?t*(1+e):t+e-t*e,m=2*t-h;s=tm(m,h,n+1/3),a=tm(m,h,n),u=tm(m,h,n-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(u*255),alpha:o}}function Ic(n,e){return t=>t>0?e:n}const nm=(n,e,t)=>{const o=n*n,s=t*(e*e-o)+o;return s<0?0:Math.sqrt(s)},QS=[Em,zi,Ns],ZS=n=>QS.find(e=>e.test(n));function kg(n){const e=ZS(n);if(!e)return!1;let t=e.parse(n);return e===Ns&&(t=JS(t)),t}const bg=(n,e)=>{const t=kg(n),o=kg(e);if(!t||!o)return Ic(n,e);const s={...t};return a=>(s.red=nm(t.red,o.red,a),s.green=nm(t.green,o.green,a),s.blue=nm(t.blue,o.blue,a),s.alpha=at(t.alpha,o.alpha,a),zi.transform(s))},XS=(n,e)=>t=>e(n(t)),Dl=(...n)=>n.reduce(XS),Am=new Set(["none","hidden"]);function YS(n,e){return Am.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function eT(n,e){return t=>at(n,e,t)}function Fp(n){return typeof n=="number"?eT:typeof n=="string"?Sp(n)?Ic:Gt.test(n)?bg:rT:Array.isArray(n)?Hb:typeof n=="object"?Gt.test(n)?bg:tT:Ic}function Hb(n,e){const t=[...n],o=t.length,s=n.map((a,u)=>Fp(a)(a,e[u]));return a=>{for(let u=0;u<o;u++)t[u]=s[u](a);return t}}function tT(n,e){const t={...n,...e},o={};for(const s in t)n[s]!==void 0&&e[s]!==void 0&&(o[s]=Fp(n[s])(n[s],e[s]));return s=>{for(const a in o)t[a]=o[a](s);return t}}function nT(n,e){var t;const o=[],s={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const u=e.types[a],h=n.indexes[u][s[u]],m=(t=n.values[h])!==null&&t!==void 0?t:0;o[a]=m,s[u]++}return o}const rT=(n,e)=>{const t=Lo.createTransformer(e),o=wl(n),s=wl(e);return o.indexes.var.length===s.indexes.var.length&&o.indexes.color.length===s.indexes.color.length&&o.indexes.number.length>=s.indexes.number.length?Am.has(n)&&!s.values.length||Am.has(e)&&!o.values.length?YS(n,e):Dl(Hb(nT(o,s),s.values),t):Ic(n,e)};function Bb(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?at(n,e,t):Fp(n)(n,e)}const oT=5;function Kb(n,e,t){const o=Math.max(e-oT,0);return K0(t-n(o),e-o)}const ct={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},_g=.001;function iT({duration:n=ct.duration,bounce:e=ct.bounce,velocity:t=ct.velocity,mass:o=ct.mass}){let s,a,u=1-e;u=Jr(ct.minDamping,ct.maxDamping,u),n=Jr(ct.minDuration,ct.maxDuration,Gr(n)),u<1?(s=f=>{const g=f*u,b=g*n,z=g-t,P=Rm(f,u),N=Math.exp(-b);return _g-z/P*N},a=f=>{const b=f*u*n,z=b*t+t,P=Math.pow(u,2)*Math.pow(f,2)*n,N=Math.exp(-b),M=Rm(Math.pow(f,2),u);return(-s(f)+_g>0?-1:1)*((z-P)*N)/M}):(s=f=>{const g=Math.exp(-f*n),b=(f-t)*n+1;return-.001+g*b},a=f=>{const g=Math.exp(-f*n),b=(t-f)*(n*n);return g*b});const h=5/n,m=aT(s,a,h);if(n=Wr(n),isNaN(m))return{stiffness:ct.stiffness,damping:ct.damping,duration:n};{const f=Math.pow(m,2)*o;return{stiffness:f,damping:u*2*Math.sqrt(o*f),duration:n}}}const sT=12;function aT(n,e,t){let o=t;for(let s=1;s<sT;s++)o=o-n(o)/e(o);return o}function Rm(n,e){return n*Math.sqrt(1-e*e)}const lT=["duration","bounce"],uT=["stiffness","damping","mass"];function wg(n,e){return e.some(t=>n[t]!==void 0)}function cT(n){let e={velocity:ct.velocity,stiffness:ct.stiffness,damping:ct.damping,mass:ct.mass,isResolvedFromDuration:!1,...n};if(!wg(n,uT)&&wg(n,lT))if(n.visualDuration){const t=n.visualDuration,o=2*Math.PI/(t*1.2),s=o*o,a=2*Jr(.05,1,1-(n.bounce||0))*Math.sqrt(s);e={...e,mass:ct.mass,stiffness:s,damping:a}}else{const t=iT(n);e={...e,...t,mass:ct.mass},e.isResolvedFromDuration=!0}return e}function $b(n=ct.visualDuration,e=ct.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:o,restDelta:s}=t;const a=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],h={done:!1,value:a},{stiffness:m,damping:f,mass:g,duration:b,velocity:z,isResolvedFromDuration:P}=cT({...t,velocity:-Gr(t.velocity||0)}),N=z||0,M=f/(2*Math.sqrt(m*g)),L=u-a,$=Gr(Math.sqrt(m/g)),q=Math.abs(L)<5;o||(o=q?ct.restSpeed.granular:ct.restSpeed.default),s||(s=q?ct.restDelta.granular:ct.restDelta.default);let Q;if(M<1){const ae=Rm($,M);Q=se=>{const I=Math.exp(-M*$*se);return u-I*((N+M*$*L)/ae*Math.sin(ae*se)+L*Math.cos(ae*se))}}else if(M===1)Q=ae=>u-Math.exp(-$*ae)*(L+(N+$*L)*ae);else{const ae=$*Math.sqrt(M*M-1);Q=se=>{const I=Math.exp(-M*$*se),E=Math.min(ae*se,300);return u-I*((N+M*$*L)*Math.sinh(E)+ae*L*Math.cosh(E))/ae}}const oe={calculatedDuration:P&&b||null,next:ae=>{const se=Q(ae);if(P)h.done=ae>=b;else{let I=0;M<1&&(I=ae===0?Wr(N):Kb(Q,ae,se));const E=Math.abs(I)<=o,T=Math.abs(u-se)<=s;h.done=E&&T}return h.value=h.done?u:se,h},toString:()=>{const ae=Math.min($0(oe),_m),se=W0(I=>oe.next(ae*I).value,ae,30);return ae+"ms "+se}};return oe}function zg({keyframes:n,velocity:e=0,power:t=.8,timeConstant:o=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:u,min:h,max:m,restDelta:f=.5,restSpeed:g}){const b=n[0],z={done:!1,value:b},P=E=>h!==void 0&&E<h||m!==void 0&&E>m,N=E=>h===void 0?m:m===void 0||Math.abs(h-E)<Math.abs(m-E)?h:m;let M=t*e;const L=b+M,$=u===void 0?L:u(L);$!==L&&(M=$-b);const q=E=>-M*Math.exp(-E/o),Q=E=>$+q(E),oe=E=>{const T=q(E),C=Q(E);z.done=Math.abs(T)<=f,z.value=z.done?$:C};let ae,se;const I=E=>{P(z.value)&&(ae=E,se=$b({keyframes:[z.value,N(z.value)],velocity:Kb(Q,E,z.value),damping:s,stiffness:a,restDelta:f,restSpeed:g}))};return I(0),{calculatedDuration:null,next:E=>{let T=!1;return!se&&ae===void 0&&(T=!0,oe(E),I(E)),ae!==void 0&&E>=ae?se.next(E-ae):(!T&&oe(E),z)}}}const dT=Nl(.42,0,1,1),hT=Nl(0,0,.58,1),Wb=Nl(.42,0,.58,1),mT=n=>Array.isArray(n)&&typeof n[0]!="number",pT={linear:wn,easeIn:dT,easeInOut:Wb,easeOut:hT,circIn:Dp,circInOut:Eb,circOut:jb,backIn:Np,backInOut:wb,backOut:_b,anticipate:zb},jg=n=>{if(kp(n)){B0(n.length===4);const[e,t,o,s]=n;return Nl(e,t,o,s)}else if(typeof n=="string")return pT[n];return n};function fT(n,e,t){const o=[],s=t||Bb,a=n.length-1;for(let u=0;u<a;u++){let h=s(n[u],n[u+1]);if(e){const m=Array.isArray(e)?e[u]||wn:e;h=Dl(m,h)}o.push(h)}return o}function vT(n,e,{clamp:t=!0,ease:o,mixer:s}={}){const a=n.length;if(B0(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const h=fT(e,o,s),m=h.length,f=g=>{if(u&&g<n[0])return e[0];let b=0;if(m>1)for(;b<n.length-2&&!(g<n[b+1]);b++);const z=Bs(n[b],n[b+1],g);return h[b](z)};return t?g=>f(Jr(n[0],n[a-1],g)):f}function yT(n,e){const t=n[n.length-1];for(let o=1;o<=e;o++){const s=Bs(0,e,o);n.push(at(t,1,s))}}function gT(n){const e=[0];return yT(e,n.length-1),e}function kT(n,e){return n.map(t=>t*e)}function bT(n,e){return n.map(()=>e||Wb).splice(0,n.length-1)}function Ac({duration:n=300,keyframes:e,times:t,ease:o="easeInOut"}){const s=mT(o)?o.map(jg):jg(o),a={done:!1,value:e[0]},u=kT(t&&t.length===e.length?t:gT(e),n),h=vT(u,e,{ease:Array.isArray(s)?s:bT(e,s)});return{calculatedDuration:n,next:m=>(a.value=h(m),a.done=m>=n,a)}}const _T=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Xe.update(e,!0),stop:()=>Mo(e),now:()=>Mt.isProcessing?Mt.timestamp:gr.now()}},wT={decay:zg,inertia:zg,tween:Ac,keyframes:Ac,spring:$b},zT=n=>n/100;class Up extends Ub{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:m}=this.options;m&&m()};const{name:t,motionValue:o,element:s,keyframes:a}=this.options,u=(s==null?void 0:s.KeyframeResolver)||Lp,h=(m,f)=>this.onKeyframesResolved(m,f);this.resolver=new u(a,h,t,o,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a,velocity:u=0}=this.options,h=gp(t)?t:wT[t]||Ac;let m,f;h!==Ac&&typeof e[0]!="number"&&(m=Dl(zT,Bb(e[0],e[1])),e=[0,100]);const g=h({...this.options,keyframes:e});a==="mirror"&&(f=h({...this.options,keyframes:[...e].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=$0(g));const{calculatedDuration:b}=g,z=b+s,P=z*(o+1)-s;return{generator:g,mirroredGenerator:f,mapPercentToKeyframes:m,calculatedDuration:b,resolvedDuration:z,totalDuration:P}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:o}=this;if(!o){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:s,generator:a,mirroredGenerator:u,mapPercentToKeyframes:h,keyframes:m,calculatedDuration:f,totalDuration:g,resolvedDuration:b}=o;if(this.startTime===null)return a.next(0);const{delay:z,repeat:P,repeatType:N,repeatDelay:M,onUpdate:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-g/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const $=this.currentTime-z*(this.speed>=0?1:-1),q=this.speed>=0?$<0:$>g;this.currentTime=Math.max($,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let Q=this.currentTime,oe=a;if(P){const E=Math.min(this.currentTime,g)/b;let T=Math.floor(E),C=E%1;!C&&E>=1&&(C=1),C===1&&T--,T=Math.min(T,P+1),!!(T%2)&&(N==="reverse"?(C=1-C,M&&(C-=M/b)):N==="mirror"&&(oe=u)),Q=Jr(0,1,C)*b}const ae=q?{done:!1,value:m[0]}:oe.next(Q);h&&(ae.value=h(ae.value));let{done:se}=ae;!q&&f!==null&&(se=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&se);return I&&s!==void 0&&(ae.value=od(m,this.options,s)),L&&L(ae.value),I&&this.finish(),ae}get duration(){const{resolved:e}=this;return e?Gr(e.calculatedDuration):0}get time(){return Gr(this.currentTime)}set time(e){e=Wr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Gr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=_T,onPlay:t,startTime:o}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const jT=new Set(["opacity","clipPath","filter","transform"]);function ET(n,e,t,{delay:o=0,duration:s=300,repeat:a=0,repeatType:u="loop",ease:h="easeInOut",times:m}={}){const f={[e]:t};m&&(f.offset=m);const g=q0(h,s);return Array.isArray(g)&&(f.easing=g),n.animate(f,{delay:o,duration:s,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:u==="reverse"?"alternate":"normal"})}const ST=fp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Rc=10,TT=2e4;function xT(n){return gp(n.type)||n.type==="spring"||!G0(n.ease)}function PT(n,e){const t=new Up({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:n[0]};const s=[];let a=0;for(;!o.done&&a<TT;)o=t.sample(a),s.push(o.value),a+=Rc;return{times:void 0,keyframes:s,duration:a-Rc,ease:"linear"}}const Gb={anticipate:zb,backInOut:wb,circInOut:Eb};function CT(n){return n in Gb}class Eg extends Ub{constructor(e){super(e);const{name:t,motionValue:o,element:s,keyframes:a}=this.options;this.resolver=new Fb(a,(u,h)=>this.onKeyframesResolved(u,h),t,o,s),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:o=300,times:s,ease:a,type:u,motionValue:h,name:m,startTime:f}=this.options;if(!h.owner||!h.owner.current)return!1;if(typeof a=="string"&&Pc()&&CT(a)&&(a=Gb[a]),xT(this.options)){const{onComplete:b,onUpdate:z,motionValue:P,element:N,...M}=this.options,L=PT(e,M);e=L.keyframes,e.length===1&&(e[1]=e[0]),o=L.duration,s=L.times,a=L.ease,u="keyframes"}const g=ET(h.owner.current,m,e,{...this.options,duration:o,times:s,ease:a});return g.startTime=f??this.calcStartTime(),this.pendingTimeline?(Zy(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:b}=this.options;h.set(od(e,this.options,t)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:o,times:s,type:u,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Gr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Gr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:o}=t;o.currentTime=Wr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:o}=t;o.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return wn;const{animation:o}=t;Zy(o,e)}return wn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:o,duration:s,type:a,ease:u,times:h}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:f,onUpdate:g,onComplete:b,element:z,...P}=this.options,N=new Up({...P,keyframes:o,duration:s,type:a,ease:u,times:h,isGenerator:!0}),M=Wr(this.time);f.setWithVelocity(N.sample(M-Rc).value,N.sample(M).value,Rc)}const{onStop:m}=this.options;m&&m(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:o,repeatDelay:s,repeatType:a,damping:u,type:h}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:f}=t.owner.getProps();return ST()&&o&&jT.has(o)&&!m&&!f&&!s&&a!=="mirror"&&u!==0&&h!=="inertia"}}const IT={type:"spring",stiffness:500,damping:25,restSpeed:10},AT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),RT={type:"keyframes",duration:.8},VT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},NT=(n,{keyframes:e})=>e.length>2?RT:Ni.has(n)?n.startsWith("scale")?AT(e[1]):IT:VT;function DT({when:n,delay:e,delayChildren:t,staggerChildren:o,staggerDirection:s,repeat:a,repeatType:u,repeatDelay:h,from:m,elapsed:f,...g}){return!!Object.keys(g).length}const Hp=(n,e,t,o={},s,a)=>u=>{const h=yp(o,n)||{},m=h.delay||o.delay||0;let{elapsed:f=0}=o;f=f-Wr(m);let g={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...h,delay:-f,onUpdate:z=>{e.set(z),h.onUpdate&&h.onUpdate(z)},onComplete:()=>{u(),h.onComplete&&h.onComplete()},name:n,motionValue:e,element:a?void 0:s};DT(h)||(g={...g,...NT(n,g)}),g.duration&&(g.duration=Wr(g.duration)),g.repeatDelay&&(g.repeatDelay=Wr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(b=!0)),g.allowFlatten=!h.type&&!h.ease,b&&!a&&e.get()!==void 0){const z=od(g.keyframes,h);if(z!==void 0)return Xe.update(()=>{g.onUpdate(z),g.onComplete()}),new iE([])}return!a&&Eg.supports(g)?new Eg(g):new Up(g)};function OT({protectedKeys:n,needsAnimating:e},t){const o=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,o}function qb(n,e,{delay:t=0,transitionOverride:o,type:s}={}){var a;let{transition:u=n.getDefaultTransition(),transitionEnd:h,...m}=e;o&&(u=o);const f=[],g=s&&n.animationState&&n.animationState.getState()[s];for(const b in m){const z=n.getValue(b,(a=n.latestValues[b])!==null&&a!==void 0?a:null),P=m[b];if(P===void 0||g&&OT(g,b))continue;const N={delay:t,...yp(u||{},b)};let M=!1;if(window.MotionHandoffAnimation){const $=yb(n);if($){const q=window.MotionHandoffAnimation($,b,Xe);q!==null&&(N.startTime=q,M=!0)}}jm(n,b),z.start(Hp(b,z,P,n.shouldReduceMotion&&vb.has(b)?{type:!1}:N,n,M));const L=z.animation;L&&f.push(L)}return h&&Promise.all(f).then(()=>{Xe.update(()=>{h&&dS(n,h)})}),f}function Vm(n,e,t={}){var o;const s=_l(n,e,t.type==="exit"?(o=n.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(a=t.transitionOverride);const u=s?()=>Promise.all(qb(n,s,t)):()=>Promise.resolve(),h=n.variantChildren&&n.variantChildren.size?(f=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:z}=a;return MT(n,e,g+f,b,z,t)}:()=>Promise.resolve(),{when:m}=a;if(m){const[f,g]=m==="beforeChildren"?[u,h]:[h,u];return f().then(()=>g())}else return Promise.all([u(),h(t.delay)])}function MT(n,e,t=0,o=0,s=1,a){const u=[],h=(n.variantChildren.size-1)*o,m=s===1?(f=0)=>f*o:(f=0)=>h-f*o;return Array.from(n.variantChildren).sort(LT).forEach((f,g)=>{f.notify("AnimationStart",e),u.push(Vm(f,e,{...a,delay:t+m(g)}).then(()=>f.notify("AnimationComplete",e)))}),Promise.all(u)}function LT(n,e){return n.sortNodePosition(e)}function FT(n,e,t={}){n.notify("AnimationStart",e);let o;if(Array.isArray(e)){const s=e.map(a=>Vm(n,a,t));o=Promise.all(s)}else if(typeof e=="string")o=Vm(n,e,t);else{const s=typeof e=="function"?_l(n,e,t.custom):e;o=Promise.all(qb(n,s,t))}return o.then(()=>{n.notify("AnimationComplete",e)})}function Jb(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let o=0;o<t;o++)if(e[o]!==n[o])return!1;return!0}const UT=zp.length;function Qb(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Qb(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<UT;t++){const o=zp[t],s=n.props[o];(gl(s)||s===!1)&&(e[o]=s)}return e}const HT=[...wp].reverse(),BT=wp.length;function KT(n){return e=>Promise.all(e.map(({animation:t,options:o})=>FT(n,t,o)))}function $T(n){let e=KT(n),t=Sg(),o=!0;const s=m=>(f,g)=>{var b;const z=_l(n,g,m==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(z){const{transition:P,transitionEnd:N,...M}=z;f={...f,...M,...N}}return f};function a(m){e=m(n)}function u(m){const{props:f}=n,g=Qb(n.parent)||{},b=[],z=new Set;let P={},N=1/0;for(let L=0;L<BT;L++){const $=HT[L],q=t[$],Q=f[$]!==void 0?f[$]:g[$],oe=gl(Q),ae=$===m?q.isActive:null;ae===!1&&(N=L);let se=Q===g[$]&&Q!==f[$]&&oe;if(se&&o&&n.manuallyAnimateOnMount&&(se=!1),q.protectedKeys={...P},!q.isActive&&ae===null||!Q&&!q.prevProp||nd(Q)||typeof Q=="boolean")continue;const I=WT(q.prevProp,Q);let E=I||$===m&&q.isActive&&!se&&oe||L>N&&oe,T=!1;const C=Array.isArray(Q)?Q:[Q];let R=C.reduce(s($),{});ae===!1&&(R={});const{prevResolvedValues:D={}}=q,x={...D,...R},qe=we=>{E=!0,z.has(we)&&(T=!0,z.delete(we)),q.needsAnimating[we]=!0;const te=n.getValue(we);te&&(te.liveStyle=!1)};for(const we in x){const te=R[we],ve=D[we];if(P.hasOwnProperty(we))continue;let X=!1;zm(te)&&zm(ve)?X=!Jb(te,ve):X=te!==ve,X?te!=null?qe(we):z.add(we):te!==void 0&&z.has(we)?qe(we):q.protectedKeys[we]=!0}q.prevProp=Q,q.prevResolvedValues=R,q.isActive&&(P={...P,...R}),o&&n.blockInitialAnimation&&(E=!1),E&&(!(se&&I)||T)&&b.push(...C.map(we=>({animation:we,options:{type:$}})))}if(z.size){const L={};if(typeof f.initial!="boolean"){const $=_l(n,Array.isArray(f.initial)?f.initial[0]:f.initial);$&&$.transition&&(L.transition=$.transition)}z.forEach($=>{const q=n.getBaseTarget($),Q=n.getValue($);Q&&(Q.liveStyle=!0),L[$]=q??null}),b.push({animation:L})}let M=!!b.length;return o&&(f.initial===!1||f.initial===f.animate)&&!n.manuallyAnimateOnMount&&(M=!1),o=!1,M?e(b):Promise.resolve()}function h(m,f){var g;if(t[m].isActive===f)return Promise.resolve();(g=n.variantChildren)===null||g===void 0||g.forEach(z=>{var P;return(P=z.animationState)===null||P===void 0?void 0:P.setActive(m,f)}),t[m].isActive=f;const b=u(m);for(const z in t)t[z].protectedKeys={};return b}return{animateChanges:u,setActive:h,setAnimateFunction:a,getState:()=>t,reset:()=>{t=Sg(),o=!0}}}function WT(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Jb(e,n):!1}function bi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sg(){return{animate:bi(!0),whileInView:bi(),whileHover:bi(),whileTap:bi(),whileDrag:bi(),whileFocus:bi(),exit:bi()}}class Wo{constructor(e){this.isMounted=!1,this.node=e}update(){}}class GT extends Wo{constructor(e){super(e),e.animationState||(e.animationState=$T(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();nd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let qT=0;class JT extends Wo{constructor(){super(...arguments),this.id=qT++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===o)return;const s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const QT={animation:{Feature:GT},exit:{Feature:JT}};function zl(n,e,t,o={passive:!0}){return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t)}function Ol(n){return{point:{x:n.pageX,y:n.pageY}}}const ZT=n=>e=>_p(e)&&n(e,Ol(e));function ul(n,e,t,o){return zl(n,e,ZT(t),o)}function Zb({top:n,left:e,right:t,bottom:o}){return{x:{min:e,max:t},y:{min:n,max:o}}}function XT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function YT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),o=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:o.y,right:o.x}}const Xb=1e-4,e1=1-Xb,t1=1+Xb,Yb=.01,n1=0-Yb,r1=0+Yb;function rn(n){return n.max-n.min}function o1(n,e,t){return Math.abs(n-e)<=t}function Tg(n,e,t,o=.5){n.origin=o,n.originPoint=at(e.min,e.max,n.origin),n.scale=rn(t)/rn(e),n.translate=at(t.min,t.max,n.origin)-n.originPoint,(n.scale>=e1&&n.scale<=t1||isNaN(n.scale))&&(n.scale=1),(n.translate>=n1&&n.translate<=r1||isNaN(n.translate))&&(n.translate=0)}function cl(n,e,t,o){Tg(n.x,e.x,t.x,o?o.originX:void 0),Tg(n.y,e.y,t.y,o?o.originY:void 0)}function xg(n,e,t){n.min=t.min+e.min,n.max=n.min+rn(e)}function i1(n,e,t){xg(n.x,e.x,t.x),xg(n.y,e.y,t.y)}function Pg(n,e,t){n.min=e.min-t.min,n.max=n.min+rn(e)}function dl(n,e,t){Pg(n.x,e.x,t.x),Pg(n.y,e.y,t.y)}const Cg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ds=()=>({x:Cg(),y:Cg()}),Ig=()=>({min:0,max:0}),vt=()=>({x:Ig(),y:Ig()});function Vn(n){return[n("x"),n("y")]}function rm(n){return n===void 0||n===1}function Nm({scale:n,scaleX:e,scaleY:t}){return!rm(n)||!rm(e)||!rm(t)}function _i(n){return Nm(n)||e_(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function e_(n){return Ag(n.x)||Ag(n.y)}function Ag(n){return n&&n!=="0%"}function Vc(n,e,t){const o=n-t,s=e*o;return t+s}function Rg(n,e,t,o,s){return s!==void 0&&(n=Vc(n,s,o)),Vc(n,t,o)+e}function Dm(n,e=0,t=1,o,s){n.min=Rg(n.min,e,t,o,s),n.max=Rg(n.max,e,t,o,s)}function t_(n,{x:e,y:t}){Dm(n.x,e.translate,e.scale,e.originPoint),Dm(n.y,t.translate,t.scale,t.originPoint)}const Vg=.999999999999,Ng=1.0000000000001;function s1(n,e,t,o=!1){const s=t.length;if(!s)return;e.x=e.y=1;let a,u;for(let h=0;h<s;h++){a=t[h],u=a.projectionDelta;const{visualElement:m}=a.options;m&&m.props.style&&m.props.style.display==="contents"||(o&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ms(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,t_(n,u)),o&&_i(a.latestValues)&&Ms(n,a.latestValues))}e.x<Ng&&e.x>Vg&&(e.x=1),e.y<Ng&&e.y>Vg&&(e.y=1)}function Os(n,e){n.min=n.min+e,n.max=n.max+e}function Dg(n,e,t,o,s=.5){const a=at(n.min,n.max,s);Dm(n,e,t,a,o)}function Ms(n,e){Dg(n.x,e.x,e.scaleX,e.scale,e.originX),Dg(n.y,e.y,e.scaleY,e.scale,e.originY)}function n_(n,e){return Zb(YT(n.getBoundingClientRect(),e))}function a1(n,e,t){const o=n_(n,t),{scroll:s}=e;return s&&(Os(o.x,s.offset.x),Os(o.y,s.offset.y)),o}const r_=({current:n})=>n?n.ownerDocument.defaultView:null,Og=(n,e)=>Math.abs(n-e);function l1(n,e){const t=Og(n.x,e.x),o=Og(n.y,e.y);return Math.sqrt(t**2+o**2)}class o_{constructor(e,t,{transformPagePoint:o,contextWindow:s,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=im(this.lastMoveEventInfo,this.history),z=this.startEvent!==null,P=l1(b.offset,{x:0,y:0})>=3;if(!z&&!P)return;const{point:N}=b,{timestamp:M}=Mt;this.history.push({...N,timestamp:M});const{onStart:L,onMove:$}=this.handlers;z||(L&&L(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),$&&$(this.lastMoveEvent,b)},this.handlePointerMove=(b,z)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=om(z,this.transformPagePoint),Xe.update(this.updatePoint,!0)},this.handlePointerUp=(b,z)=>{this.end();const{onEnd:P,onSessionEnd:N,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=im(b.type==="pointercancel"?this.lastMoveEventInfo:om(z,this.transformPagePoint),this.history);this.startEvent&&P&&P(b,L),N&&N(b,L)},!_p(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=o,this.contextWindow=s||window;const u=Ol(e),h=om(u,this.transformPagePoint),{point:m}=h,{timestamp:f}=Mt;this.history=[{...m,timestamp:f}];const{onSessionStart:g}=t;g&&g(e,im(h,this.history)),this.removeListeners=Dl(ul(this.contextWindow,"pointermove",this.handlePointerMove),ul(this.contextWindow,"pointerup",this.handlePointerUp),ul(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Mo(this.updatePoint)}}function om(n,e){return e?{point:e(n.point)}:n}function Mg(n,e){return{x:n.x-e.x,y:n.y-e.y}}function im({point:n},e){return{point:n,delta:Mg(n,i_(e)),offset:Mg(n,u1(e)),velocity:c1(e,.1)}}function u1(n){return n[0]}function i_(n){return n[n.length-1]}function c1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,o=null;const s=i_(n);for(;t>=0&&(o=n[t],!(s.timestamp-o.timestamp>Wr(e)));)t--;if(!o)return{x:0,y:0};const a=Gr(s.timestamp-o.timestamp);if(a===0)return{x:0,y:0};const u={x:(s.x-o.x)/a,y:(s.y-o.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function d1(n,{min:e,max:t},o){return e!==void 0&&n<e?n=o?at(e,n,o.min):Math.max(n,e):t!==void 0&&n>t&&(n=o?at(t,n,o.max):Math.min(n,t)),n}function Lg(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function h1(n,{top:e,left:t,bottom:o,right:s}){return{x:Lg(n.x,t,s),y:Lg(n.y,e,o)}}function Fg(n,e){let t=e.min-n.min,o=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,o]=[o,t]),{min:t,max:o}}function m1(n,e){return{x:Fg(n.x,e.x),y:Fg(n.y,e.y)}}function p1(n,e){let t=.5;const o=rn(n),s=rn(e);return s>o?t=Bs(e.min,e.max-o,n.min):o>s&&(t=Bs(n.min,n.max-s,e.min)),Jr(0,1,t)}function f1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Om=.35;function v1(n=Om){return n===!1?n=0:n===!0&&(n=Om),{x:Ug(n,"left","right"),y:Ug(n,"top","bottom")}}function Ug(n,e,t){return{min:Hg(n,e),max:Hg(n,t)}}function Hg(n,e){return typeof n=="number"?n:n[e]||0}const y1=new WeakMap;class g1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const s=g=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ol(g).point)},a=(g,b)=>{const{drag:z,dragPropagation:P,onDragStart:N}=this.getProps();if(z&&!P&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dE(z),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vn(L=>{let $=this.getAxisMotionValue(L).get()||0;if(kr.test($)){const{projection:q}=this.visualElement;if(q&&q.layout){const Q=q.layout.layoutBox[L];Q&&($=rn(Q)*(parseFloat($)/100))}}this.originPoint[L]=$}),N&&Xe.postRender(()=>N(g,b)),jm(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},u=(g,b)=>{const{dragPropagation:z,dragDirectionLock:P,onDirectionLock:N,onDrag:M}=this.getProps();if(!z&&!this.openDragLock)return;const{offset:L}=b;if(P&&this.currentDirection===null){this.currentDirection=k1(L),this.currentDirection!==null&&N&&N(this.currentDirection);return}this.updateAxis("x",b.point,L),this.updateAxis("y",b.point,L),this.visualElement.render(),M&&M(g,b)},h=(g,b)=>this.stop(g,b),m=()=>Vn(g=>{var b;return this.getAnimationState(g)==="paused"&&((b=this.getAxisMotionValue(g).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new o_(e,{onSessionStart:s,onStart:a,onMove:u,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:r_(this.visualElement)})}stop(e,t){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:s}=t;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&Xe.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,o){const{drag:s}=this.getProps();if(!o||!cc(e,s,this.currentDirection))return;const a=this.getAxisMotionValue(e);let u=this.originPoint[e]+o[e];this.constraints&&this.constraints[e]&&(u=d1(u,this.constraints[e],this.elastic[e])),a.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:o}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Vs(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=h1(s.layoutBox,t):this.constraints=!1,this.elastic=v1(o),a!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Vn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=f1(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Vs(e))return!1;const o=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const a=a1(o,s.root,this.visualElement.getTransformPagePoint());let u=m1(s.layout.layoutBox,a);if(t){const h=t(XT(u));this.hasMutatedConstraints=!!h,h&&(u=Zb(h))}return u}startAnimation(e){const{drag:t,dragMomentum:o,dragElastic:s,dragTransition:a,dragSnapToOrigin:u,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},f=Vn(g=>{if(!cc(g,t,this.currentDirection))return;let b=m&&m[g]||{};u&&(b={min:0,max:0});const z=s?200:1e6,P=s?40:1e7,N={type:"inertia",velocity:o?e[g]:0,bounceStiffness:z,bounceDamping:P,timeConstant:750,restDelta:1,restSpeed:10,...a,...b};return this.startAxisValueAnimation(g,N)});return Promise.all(f).then(h)}startAxisValueAnimation(e,t){const o=this.getAxisMotionValue(e);return jm(this.visualElement,e),o.start(Hp(e,o,0,t,this.visualElement,!1))}stopAnimation(){Vn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Vn(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps(),s=o[t];return s||this.visualElement.getValue(e,(o.initial?o.initial[e]:void 0)||0)}snapToCursor(e){Vn(t=>{const{drag:o}=this.getProps();if(!cc(t,o,this.currentDirection))return;const{projection:s}=this.visualElement,a=this.getAxisMotionValue(t);if(s&&s.layout){const{min:u,max:h}=s.layout.layoutBox[t];a.set(e[t]-at(u,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:o}=this.visualElement;if(!Vs(t)||!o||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Vn(u=>{const h=this.getAxisMotionValue(u);if(h&&this.constraints!==!1){const m=h.get();s[u]=p1({min:m,max:m},this.constraints[u])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Vn(u=>{if(!cc(u,e,null))return;const h=this.getAxisMotionValue(u),{min:m,max:f}=this.constraints[u];h.set(at(m,f,s[u]))})}addListeners(){if(!this.visualElement.current)return;y1.set(this.visualElement,this);const e=this.visualElement.current,t=ul(e,"pointerdown",m=>{const{drag:f,dragListener:g=!0}=this.getProps();f&&g&&this.start(m)}),o=()=>{const{dragConstraints:m}=this.getProps();Vs(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,a=s.addEventListener("measure",o);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Xe.read(o);const u=zl(window,"resize",()=>this.scalePositionWithinConstraints()),h=s.addEventListener("didUpdate",({delta:m,hasLayoutChanged:f})=>{this.isDragging&&f&&(Vn(g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=m[g].translate,b.set(b.get()+m[g].translate))}),this.visualElement.render())});return()=>{u(),t(),a(),h&&h()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:o=!1,dragPropagation:s=!1,dragConstraints:a=!1,dragElastic:u=Om,dragMomentum:h=!0}=e;return{...e,drag:t,dragDirectionLock:o,dragPropagation:s,dragConstraints:a,dragElastic:u,dragMomentum:h}}}function cc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function k1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class b1 extends Wo{constructor(e){super(e),this.removeGroupControls=wn,this.removeListeners=wn,this.controls=new g1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||wn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bg=n=>(e,t)=>{n&&Xe.postRender(()=>n(e,t))};class _1 extends Wo{constructor(){super(...arguments),this.removePointerDownListener=wn}onPointerDown(e){this.session=new o_(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:r_(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:o,onPanEnd:s}=this.node.getProps();return{onSessionStart:Bg(e),onStart:Bg(t),onMove:o,onEnd:(a,u)=>{delete this.session,s&&Xe.postRender(()=>s(a,u))}}}mount(){this.removePointerDownListener=ul(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const kc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Kg(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const nl={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(_e.test(n))n=parseFloat(n);else return n;const t=Kg(n,e.target.x),o=Kg(n,e.target.y);return`${t}% ${o}%`}},w1={correct:(n,{treeScale:e,projectionDelta:t})=>{const o=n,s=Lo.parse(n);if(s.length>5)return o;const a=Lo.createTransformer(n),u=typeof s[0]!="number"?1:0,h=t.x.scale*e.x,m=t.y.scale*e.y;s[0+u]/=h,s[1+u]/=m;const f=at(h,m,.5);return typeof s[2+u]=="number"&&(s[2+u]/=f),typeof s[3+u]=="number"&&(s[3+u]/=f),a(s)}};class z1 extends re.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:o,layoutId:s}=this.props,{projection:a}=e;LE(j1),a&&(t.group&&t.group.add(a),o&&o.register&&s&&o.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),kc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:o,drag:s,isPresent:a}=this.props,u=o.projection;return u&&(u.isPresent=a,s||e.layoutDependency!==t||t===void 0||e.isPresent!==a?u.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?u.promote():u.relegate()||Xe.postRender(()=>{const h=u.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),bp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:o}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),o&&o.deregister&&o.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function s_(n){const[e,t]=tE(),o=re.useContext(U0);return w.jsx(z1,{...n,layoutGroup:o,switchLayoutGroup:re.useContext(rb),isPresent:e,safeToRemove:t})}const j1={borderRadius:{...nl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:nl,borderTopRightRadius:nl,borderBottomLeftRadius:nl,borderBottomRightRadius:nl,boxShadow:w1};function E1(n,e,t){const o=Qt(n)?n:yl(n);return o.start(Hp("",o,e,t)),o.animation}function S1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const T1=(n,e)=>n.depth-e.depth;class x1{constructor(){this.children=[],this.isDirty=!1}add(e){mp(this.children,e),this.isDirty=!0}remove(e){pp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(T1),this.isDirty=!1,this.children.forEach(e)}}function P1(n,e){const t=gr.now(),o=({timestamp:s})=>{const a=s-t;a>=e&&(Mo(o),n(a-e))};return Xe.read(o,!0),()=>Mo(o)}const a_=["TopLeft","TopRight","BottomLeft","BottomRight"],C1=a_.length,$g=n=>typeof n=="string"?parseFloat(n):n,Wg=n=>typeof n=="number"||_e.test(n);function I1(n,e,t,o,s,a){s?(n.opacity=at(0,t.opacity!==void 0?t.opacity:1,A1(o)),n.opacityExit=at(e.opacity!==void 0?e.opacity:1,0,R1(o))):a&&(n.opacity=at(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,o));for(let u=0;u<C1;u++){const h=`border${a_[u]}Radius`;let m=Gg(e,h),f=Gg(t,h);if(m===void 0&&f===void 0)continue;m||(m=0),f||(f=0),m===0||f===0||Wg(m)===Wg(f)?(n[h]=Math.max(at($g(m),$g(f),o),0),(kr.test(f)||kr.test(m))&&(n[h]+="%")):n[h]=f}(e.rotate||t.rotate)&&(n.rotate=at(e.rotate||0,t.rotate||0,o))}function Gg(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const A1=l_(0,.5,jb),R1=l_(.5,.95,wn);function l_(n,e,t){return o=>o<n?0:o>e?1:t(Bs(n,e,o))}function qg(n,e){n.min=e.min,n.max=e.max}function Rn(n,e){qg(n.x,e.x),qg(n.y,e.y)}function Jg(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Qg(n,e,t,o,s){return n-=e,n=Vc(n,1/t,o),s!==void 0&&(n=Vc(n,1/s,o)),n}function V1(n,e=0,t=1,o=.5,s,a=n,u=n){if(kr.test(e)&&(e=parseFloat(e),e=at(u.min,u.max,e/100)-u.min),typeof e!="number")return;let h=at(a.min,a.max,o);n===a&&(h-=e),n.min=Qg(n.min,e,t,h,s),n.max=Qg(n.max,e,t,h,s)}function Zg(n,e,[t,o,s],a,u){V1(n,e[t],e[o],e[s],e.scale,a,u)}const N1=["x","scaleX","originX"],D1=["y","scaleY","originY"];function Xg(n,e,t,o){Zg(n.x,e,N1,t?t.x:void 0,o?o.x:void 0),Zg(n.y,e,D1,t?t.y:void 0,o?o.y:void 0)}function Yg(n){return n.translate===0&&n.scale===1}function u_(n){return Yg(n.x)&&Yg(n.y)}function ek(n,e){return n.min===e.min&&n.max===e.max}function O1(n,e){return ek(n.x,e.x)&&ek(n.y,e.y)}function tk(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function c_(n,e){return tk(n.x,e.x)&&tk(n.y,e.y)}function nk(n){return rn(n.x)/rn(n.y)}function rk(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class M1{constructor(){this.members=[]}add(e){mp(this.members,e),e.scheduleRender()}remove(e){if(pp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(s=>e===s);if(t===0)return!1;let o;for(let s=t;s>=0;s--){const a=this.members[s];if(a.isPresent!==!1){o=a;break}}return o?(this.promote(o),!0):!1}promote(e,t){const o=this.lead;if(e!==o&&(this.prevLead=o,this.lead=e,e.show(),o)){o.instance&&o.scheduleRender(),e.scheduleRender(),e.resumeFrom=o,t&&(e.resumeFrom.preserveOpacity=!0),o.snapshot&&(e.snapshot=o.snapshot,e.snapshot.latestValues=o.animationValues||o.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:o}=e;t.onExitComplete&&t.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function L1(n,e,t){let o="";const s=n.x.translate/e.x,a=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((s||a||u)&&(o=`translate3d(${s}px, ${a}px, ${u}px) `),(e.x!==1||e.y!==1)&&(o+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:f,rotate:g,rotateX:b,rotateY:z,skewX:P,skewY:N}=t;f&&(o=`perspective(${f}px) ${o}`),g&&(o+=`rotate(${g}deg) `),b&&(o+=`rotateX(${b}deg) `),z&&(o+=`rotateY(${z}deg) `),P&&(o+=`skewX(${P}deg) `),N&&(o+=`skewY(${N}deg) `)}const h=n.x.scale*e.x,m=n.y.scale*e.y;return(h!==1||m!==1)&&(o+=`scale(${h}, ${m})`),o||"none"}const sm=["","X","Y","Z"],F1={visibility:"hidden"},ok=1e3;let U1=0;function am(n,e,t,o){const{latestValues:s}=e;s[n]&&(t[n]=s[n],e.setStaticValue(n,0),o&&(o[n]=0))}function d_(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=yb(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Xe,!(s||a))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&d_(o)}function h_({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:o,resetTransform:s}){return class{constructor(u={},h=e==null?void 0:e()){this.id=U1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(K1),this.nodes.forEach(J1),this.nodes.forEach(Q1),this.nodes.forEach($1)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new x1)}addEventListener(u,h){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new vp),this.eventHandlers.get(u).add(h)}notifyListeners(u,...h){const m=this.eventHandlers.get(u);m&&m.notify(...h)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=S1(u),this.instance=u;const{layoutId:m,layout:f,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(f||m)&&(this.isLayoutDirty=!0),n){let b;const z=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=P1(z,250),kc.hasAnimatedSinceResize&&(kc.hasAnimatedSinceResize=!1,this.nodes.forEach(sk))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&g&&(m||f)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:z,hasRelativeLayoutChanged:P,layout:N})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||g.getDefaultTransition()||tx,{onLayoutAnimationStart:L,onLayoutAnimationComplete:$}=g.getProps(),q=!this.targetLayout||!c_(this.targetLayout,N),Q=!z&&P;if(this.options.layoutRoot||this.resumeFrom||Q||z&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,Q);const oe={...yp(M,"layout"),onPlay:L,onComplete:$};(g.shouldReduceMotion||this.options.layoutRoot)&&(oe.delay=0,oe.type=!1),this.startAnimation(oe)}else z||sk(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=N})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Mo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Z1),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&d_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const b=this.path[g];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ik);return}this.isUpdating||this.nodes.forEach(G1),this.isUpdating=!1,this.nodes.forEach(q1),this.nodes.forEach(H1),this.nodes.forEach(B1),this.clearAllSnapshots();const h=gr.now();Mt.delta=Jr(0,1e3/60,h-Mt.timestamp),Mt.timestamp=h,Mt.isProcessing=!0,Xh.update.process(Mt),Xh.preRender.process(Mt),Xh.render.process(Mt),Mt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(W1),this.sharedNodes.forEach(X1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Xe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!rn(this.snapshot.measuredBox.x)&&!rn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=vt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(h=!1),h){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!u_(this.projectionDelta),m=this.getTransformTemplate(),f=m?m(this.latestValues,""):void 0,g=f!==this.prevTransformTemplateValue;u&&(h||_i(this.latestValues)||g)&&(s(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return u&&(m=this.removeTransform(m)),nx(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:h}=this.options;if(!h)return vt();const m=h.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(rx))){const{scroll:g}=this.root;g&&(Os(m.x,g.offset.x),Os(m.y,g.offset.y))}return m}removeElementScroll(u){var h;const m=vt();if(Rn(m,u),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return m;for(let f=0;f<this.path.length;f++){const g=this.path[f],{scroll:b,options:z}=g;g!==this.root&&b&&z.layoutScroll&&(b.wasRoot&&Rn(m,u),Os(m.x,b.offset.x),Os(m.y,b.offset.y))}return m}applyTransform(u,h=!1){const m=vt();Rn(m,u);for(let f=0;f<this.path.length;f++){const g=this.path[f];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Ms(m,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),_i(g.latestValues)&&Ms(m,g.latestValues)}return _i(this.latestValues)&&Ms(m,this.latestValues),m}removeTransform(u){const h=vt();Rn(h,u);for(let m=0;m<this.path.length;m++){const f=this.path[m];if(!f.instance||!_i(f.latestValues))continue;Nm(f.latestValues)&&f.updateSnapshot();const g=vt(),b=f.measurePageBox();Rn(g,b),Xg(h,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,g)}return _i(this.latestValues)&&Xg(h,this.latestValues),h}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var h;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==m;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:z}=this.options;if(!(!this.layout||!(b||z))){if(this.resolvedRelativeTargetAt=Mt.timestamp,!this.targetDelta&&!this.relativeTarget){const P=this.getClosestProjectingParent();P&&P.layout&&this.animationProgress!==1?(this.relativeParent=P,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vt(),this.relativeTargetOrigin=vt(),dl(this.relativeTargetOrigin,this.layout.layoutBox,P.layout.layoutBox),Rn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=vt(),this.targetWithTransforms=vt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),i1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Rn(this.target,this.layout.layoutBox),t_(this.target,this.targetDelta)):Rn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const P=this.getClosestProjectingParent();P&&!!P.resumingFrom==!!this.resumingFrom&&!P.options.layoutScroll&&P.target&&this.animationProgress!==1?(this.relativeParent=P,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vt(),this.relativeTargetOrigin=vt(),dl(this.relativeTargetOrigin,this.target,P.target),Rn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Nm(this.parent.latestValues)||e_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const h=this.getLead(),m=!!this.resumingFrom||this!==h;let f=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(f=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Mt.timestamp&&(f=!1),f)return;const{layout:g,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||b))return;Rn(this.layoutCorrected,this.layout.layoutBox);const z=this.treeScale.x,P=this.treeScale.y;s1(this.layoutCorrected,this.treeScale,this.path,m),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=vt());const{target:N}=h;if(!N){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Jg(this.prevProjectionDelta.x,this.projectionDelta.x),Jg(this.prevProjectionDelta.y,this.projectionDelta.y)),cl(this.projectionDelta,this.layoutCorrected,N,this.latestValues),(this.treeScale.x!==z||this.treeScale.y!==P||!rk(this.projectionDelta.x,this.prevProjectionDelta.x)||!rk(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",N))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),u){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ds(),this.projectionDelta=Ds(),this.projectionDeltaWithTransform=Ds()}setAnimationOrigin(u,h=!1){const m=this.snapshot,f=m?m.latestValues:{},g={...this.latestValues},b=Ds();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const z=vt(),P=m?m.source:void 0,N=this.layout?this.layout.source:void 0,M=P!==N,L=this.getStack(),$=!L||L.members.length<=1,q=!!(M&&!$&&this.options.crossfade===!0&&!this.path.some(ex));this.animationProgress=0;let Q;this.mixTargetDelta=oe=>{const ae=oe/1e3;ak(b.x,u.x,ae),ak(b.y,u.y,ae),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(dl(z,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Y1(this.relativeTarget,this.relativeTargetOrigin,z,ae),Q&&O1(this.relativeTarget,Q)&&(this.isProjectionDirty=!1),Q||(Q=vt()),Rn(Q,this.relativeTarget)),M&&(this.animationValues=g,I1(g,f,this.latestValues,ae,q,$)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=ae},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Mo(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Xe.update(()=>{kc.hasAnimatedSinceResize=!0,this.currentAnimation=E1(0,ok,{...u,onUpdate:h=>{this.mixTargetDelta(h),u.onUpdate&&u.onUpdate(h)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ok),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:h,target:m,layout:f,latestValues:g}=u;if(!(!h||!m||!f)){if(this!==u&&this.layout&&f&&m_(this.options.animationType,this.layout.layoutBox,f.layoutBox)){m=this.target||vt();const b=rn(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+b;const z=rn(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+z}Rn(h,m),Ms(h,g),cl(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(u,h){this.sharedNodes.has(u)||this.sharedNodes.set(u,new M1),this.sharedNodes.get(u).add(h);const f=h.options.initialPromotionConfig;h.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(h):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:h}=this.options;return h?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:h}=this.options;return h?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:h,preserveFollowOpacity:m}={}){const f=this.getStack();f&&f.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let h=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const f={};m.z&&am("z",u,f,this.animationValues);for(let g=0;g<sm.length;g++)am(`rotate${sm[g]}`,u,f,this.animationValues),am(`skew${sm[g]}`,u,f,this.animationValues);u.render();for(const g in f)u.setStaticValue(g,f[g]),this.animationValues&&(this.animationValues[g]=f[g]);u.scheduleRender()}getProjectionStyles(u){var h,m;if(!this.instance||this.isSVG)return;if(!this.isVisible)return F1;const f={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=gc(u==null?void 0:u.pointerEvents)||"",f.transform=g?g(this.latestValues,""):"none",f;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=gc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!_i(this.latestValues)&&(M.transform=g?g({},""):"none",this.hasProjected=!1),M}const z=b.animationValues||b.latestValues;this.applyTransformsToTarget(),f.transform=L1(this.projectionDeltaWithTransform,this.treeScale,z),g&&(f.transform=g(z,f.transform));const{x:P,y:N}=this.projectionDelta;f.transformOrigin=`${P.origin*100}% ${N.origin*100}% 0`,b.animationValues?f.opacity=b===this?(m=(h=z.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&m!==void 0?m:1:this.preserveOpacity?this.latestValues.opacity:z.opacityExit:f.opacity=b===this?z.opacity!==void 0?z.opacity:"":z.opacityExit!==void 0?z.opacityExit:0;for(const M in kl){if(z[M]===void 0)continue;const{correct:L,applyTo:$,isCSSVariable:q}=kl[M],Q=f.transform==="none"?z[M]:L(z[M],b);if($){const oe=$.length;for(let ae=0;ae<oe;ae++)f[$[ae]]=Q}else q?this.options.visualElement.renderState.vars[M]=Q:f[M]=Q}return this.options.layoutId&&(f.pointerEvents=b===this?gc(u==null?void 0:u.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var h;return(h=u.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(ik),this.root.sharedNodes.clear()}}}function H1(n){n.updateLayout()}function B1(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:s}=n.layout,{animationType:a}=n.options,u=t.source!==n.layout.source;a==="size"?Vn(b=>{const z=u?t.measuredBox[b]:t.layoutBox[b],P=rn(z);z.min=o[b].min,z.max=z.min+P}):m_(a,t.layoutBox,o)&&Vn(b=>{const z=u?t.measuredBox[b]:t.layoutBox[b],P=rn(o[b]);z.max=z.min+P,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+P)});const h=Ds();cl(h,o,t.layoutBox);const m=Ds();u?cl(m,n.applyTransform(s,!0),t.measuredBox):cl(m,o,t.layoutBox);const f=!u_(h);let g=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:z,layout:P}=b;if(z&&P){const N=vt();dl(N,t.layoutBox,z.layoutBox);const M=vt();dl(M,o,P.layoutBox),c_(N,M)||(g=!0),b.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=N,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:t,delta:m,layoutDelta:h,hasLayoutChanged:f,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function K1(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function $1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function W1(n){n.clearSnapshot()}function ik(n){n.clearMeasurements()}function G1(n){n.isLayoutDirty=!1}function q1(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function sk(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function J1(n){n.resolveTargetDelta()}function Q1(n){n.calcProjection()}function Z1(n){n.resetSkewAndRotation()}function X1(n){n.removeLeadSnapshot()}function ak(n,e,t){n.translate=at(e.translate,0,t),n.scale=at(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function lk(n,e,t,o){n.min=at(e.min,t.min,o),n.max=at(e.max,t.max,o)}function Y1(n,e,t,o){lk(n.x,e.x,t.x,o),lk(n.y,e.y,t.y,o)}function ex(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const tx={duration:.45,ease:[.4,0,.1,1]},uk=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ck=uk("applewebkit/")&&!uk("chrome/")?Math.round:wn;function dk(n){n.min=ck(n.min),n.max=ck(n.max)}function nx(n){dk(n.x),dk(n.y)}function m_(n,e,t){return n==="position"||n==="preserve-aspect"&&!o1(nk(e),nk(t),.2)}function rx(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const ox=h_({attachResizeListener:(n,e)=>zl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),lm={current:void 0},p_=h_({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!lm.current){const n=new ox({});n.mount(window),n.setOptions({layoutScroll:!0}),lm.current=n}return lm.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ix={pan:{Feature:_1},drag:{Feature:b1,ProjectionNode:p_,MeasureLayout:s_}};function hk(n,e,t){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",t==="Start");const s="onHover"+t,a=o[s];a&&Xe.postRender(()=>a(e,Ol(e)))}class sx extends Wo{mount(){const{current:e}=this.node;e&&(this.unmount=mE(e,(t,o)=>(hk(this.node,o,"Start"),s=>hk(this.node,s,"End"))))}unmount(){}}class ax extends Wo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dl(zl(this.node.current,"focus",()=>this.onFocus()),zl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mk(n,e,t){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",t==="Start");const s="onTap"+(t==="End"?"":t),a=o[s];a&&Xe.postRender(()=>a(e,Ol(e)))}class lx extends Wo{mount(){const{current:e}=this.node;e&&(this.unmount=yE(e,(t,o)=>(mk(this.node,o,"Start"),(s,{success:a})=>mk(this.node,s,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Mm=new WeakMap,um=new WeakMap,ux=n=>{const e=Mm.get(n.target);e&&e(n)},cx=n=>{n.forEach(ux)};function dx({root:n,...e}){const t=n||document;um.has(t)||um.set(t,{});const o=um.get(t),s=JSON.stringify(e);return o[s]||(o[s]=new IntersectionObserver(cx,{root:n,...e})),o[s]}function hx(n,e,t){const o=dx(e);return Mm.set(n,t),o.observe(n),()=>{Mm.delete(n),o.unobserve(n)}}const mx={some:0,all:1};class px extends Wo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:o,amount:s="some",once:a}=e,u={root:t?t.current:void 0,rootMargin:o,threshold:typeof s=="number"?s:mx[s]},h=m=>{const{isIntersecting:f}=m;if(this.isInView===f||(this.isInView=f,a&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:g,onViewportLeave:b}=this.node.getProps(),z=f?g:b;z&&z(m)};return hx(this.node.current,u,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(fx(e,t))&&this.startObserver()}unmount(){}}function fx({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const vx={inView:{Feature:px},tap:{Feature:lx},focus:{Feature:ax},hover:{Feature:sx}},yx={layout:{ProjectionNode:p_,MeasureLayout:s_}},Lm={current:null},f_={current:!1};function gx(){if(f_.current=!0,!!dp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Lm.current=n.matches;n.addListener(e),e()}else Lm.current=!1}const kx=[...Lb,Gt,Lo],bx=n=>kx.find(Mb(n)),_x=new WeakMap;function wx(n,e,t){for(const o in e){const s=e[o],a=t[o];if(Qt(s))n.addValue(o,s);else if(Qt(a))n.addValue(o,yl(s,{owner:n}));else if(a!==s)if(n.hasValue(o)){const u=n.getValue(o);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=n.getStaticValue(o);n.addValue(o,yl(u!==void 0?u:s,{owner:n}))}}for(const o in t)e[o]===void 0&&n.removeValue(o);return e}const pk=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class zx{scrapeMotionValuesFromProps(e,t,o){return{}}constructor({parent:e,props:t,presenceContext:o,reducedMotionConfig:s,blockInitialAnimation:a,visualState:u},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Lp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const P=gr.now();this.renderScheduledAt<P&&(this.renderScheduledAt=P,Xe.render(this.render,!1,!0))};const{latestValues:m,renderState:f,onUpdate:g}=u;this.onUpdate=g,this.latestValues=m,this.baseTarget={...m},this.initialValues=t.initial?{...m}:{},this.renderState=f,this.parent=e,this.props=t,this.presenceContext=o,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=h,this.blockInitialAnimation=!!a,this.isControllingVariants=rd(t),this.isVariantNode=tb(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:b,...z}=this.scrapeMotionValuesFromProps(t,{},this);for(const P in z){const N=z[P];m[P]!==void 0&&Qt(N)&&N.set(m[P],!1)}}mount(e){this.current=e,_x.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,o)=>this.bindToMotionValue(o,t)),f_.current||gx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Lm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Mo(this.notifyUpdate),Mo(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const o=Ni.has(e);o&&this.onBindTransform&&this.onBindTransform();const s=t.on("change",h=>{this.latestValues[e]=h,this.props.onUpdate&&Xe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),a(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ks){const t=Ks[e];if(!t)continue;const{isEnabled:o,Feature:s}=t;if(!this.features[e]&&s&&o(this.props)&&(this.features[e]=new s(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let o=0;o<pk.length;o++){const s=pk[o];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a="on"+s,u=e[a];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=wx(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const o=this.values.get(e);t!==o&&(o&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let o=this.values.get(e);return o===void 0&&t!==void 0&&(o=yl(t===null?void 0:t,{owner:this}),this.addValue(e,o)),o}readValue(e,t){var o;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(o=this.getBaseTargetFromProps(this.props,e))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Db(s)||Sb(s))?s=parseFloat(s):!bx(s)&&Lo.test(t)&&(s=Rb(e,t)),this.setBaseTarget(e,Qt(s)?s.get():s)),Qt(s)?s.get():s}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:o}=this.props;let s;if(typeof o=="string"||typeof o=="object"){const u=Rp(this.props,o,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(s=u[e])}if(o&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Qt(a)?a:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new vp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class v_ extends zx{constructor(){super(...arguments),this.KeyframeResolver=Fb}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:o}){delete t[e],delete o[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Qt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function jx(n){return window.getComputedStyle(n)}class Ex extends v_{constructor(){super(...arguments),this.type="html",this.renderInstance=hb}readValueFromInstance(e,t){if(Ni.has(t))return DS(e,t);{const o=jx(e),s=(Ep(t)?o.getPropertyValue(t):o[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return n_(e,t)}build(e,t,o){xp(e,t,o.transformTemplate)}scrapeMotionValuesFromProps(e,t,o){return Vp(e,t,o)}}class Sx extends v_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vt,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&db(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ni.has(t)){const o=Ab(t);return o&&o.default||0}return t=mb.has(t)?t:jp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,o){return fb(e,t,o)}onBindTransform(){this.current&&!this.renderState.dimensions&&Xe.postRender(this.updateDimensions)}build(e,t,o){Ip(e,t,this.isSVGTag,o.transformTemplate)}renderInstance(e,t,o,s){pb(e,t,o,s)}mount(e){this.isSVGTag=Ap(e.tagName),super.mount(e)}}const Tx=(n,e)=>Cp(n)?new Sx(e):new Ex(e,{allowProjection:n!==re.Fragment}),xx=uS({...QT,...vx,...ix,...yx},Tx),Hr=EE(xx),Px=({darkMode:n=!1,onComplete:e,slides:t})=>{const[o,s]=re.useState(0),[a,u]=re.useState(!1),h=()=>{o<t.length-1?(u(!0),setTimeout(()=>{s(g=>g+1),u(!1)},300)):e()},m=()=>{o>0&&(u(!0),setTimeout(()=>{s(g=>g-1),u(!1)},300))};re.useEffect(()=>{const g=b=>{b.key==="ArrowRight"||b.key==="Enter"?h():b.key==="ArrowLeft"?m():b.key==="Escape"&&e()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[o]);const f=(o+1)/t.length*100;return w.jsxs("div",{className:`fixed inset-0 ${n?"bg-black/70":"bg-black/50"} z-50 flex items-center justify-center p-4 backdrop-blur-sm`,children:[w.jsx(Hr.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.2},className:`w-full max-w-2xl ${n?"bg-gray-800 text-white":"bg-white text-gray-800"} rounded-xl shadow-xl overflow-hidden backdrop-blur-lg border ${n?"border-gray-700":"border-gray-200"}`,children:w.jsxs("div",{className:"relative flex flex-col h-[80vh]",children:[w.jsx("div",{className:"absolute top-4 right-16 z-20",children:w.jsxs(Hr.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,className:`px-4 py-1.5 rounded-lg text-sm font-medium 
                transition-colors duration-200 flex items-center gap-2
                ${n?"text-gray-300 hover:text-white hover:bg-gray-700/50 backdrop-blur-sm":"text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 backdrop-blur-sm"}`,children:["Skip Course",w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})}),w.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gray-200/30 backdrop-blur-sm",children:w.jsx(Hr.div,{className:"h-full bg-blue-500",initial:{width:0},animate:{width:`${f}%`},transition:{duration:.3,ease:"easeInOut"},style:{boxShadow:"0 0 10px #3B82F6"}})}),w.jsxs("div",{className:`absolute top-4 right-4 text-sm font-medium ${n?"text-gray-400":"text-gray-500"}`,children:[o+1," / ",t.length]}),w.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:w.jsxs(Hr.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,ease:"easeOut"},className:"p-6 pt-16",children:[w.jsx(Hr.h2,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.1},className:`text-2xl font-bold mb-4 ${n?"text-white":"text-gray-900"}`,children:t[o].title}),w.jsx(Hr.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.2},className:`prose ${n?"prose-invert":""} max-w-none whitespace-pre-wrap`,children:t[o].content})]},o)}),w.jsxs("div",{className:`border-t ${n?"border-gray-700":"border-gray-200"} p-4 bg-inherit backdrop-blur-sm`,children:[w.jsx("div",{className:"flex gap-2 mb-4 overflow-x-auto pb-2 justify-center",children:t.map((g,b)=>w.jsx(Hr.button,{whileHover:{scale:1.2},whileTap:{scale:.9},onClick:()=>{a||(u(!0),setTimeout(()=>{s(b),u(!1)},300))},className:`h-2 rounded-full transition-all duration-300 flex-shrink-0 ${b===o?"w-8 bg-blue-500 shadow-glow-blue":`w-2 ${n?"bg-gray-600":"bg-gray-300"} hover:bg-blue-300`}`,disabled:a,"aria-label":`Go to slide ${b+1}`},b))}),w.jsxs("div",{className:"flex justify-between items-center",children:[w.jsxs(Hr.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:m,disabled:o===0||a,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                  ${o===0?"opacity-50 cursor-not-allowed":n?"text-gray-300 hover:text-white hover:bg-gray-700/50":"text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"}`,children:[w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Previous"]}),w.jsxs(Hr.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:h,disabled:a,className:`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  flex items-center gap-2 shadow-lg
                  ${n?"bg-blue-600 hover:bg-blue-700 text-white shadow-glow-blue":"bg-blue-500 hover:bg-blue-600 text-white shadow-glow-blue"}`,children:[o===t.length-1?"Start Learning":"Next",w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})]})]})}),w.jsx("style",{children:`
        .shadow-glow-blue {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${n?"rgba(31, 41, 55, 0.5)":"rgba(243, 244, 246, 0.5)"};
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${n?"rgba(75, 85, 99, 0.5)":"rgba(209, 213, 219, 0.5)"};
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${n?"rgba(75, 85, 99, 0.8)":"rgba(209, 213, 219, 0.8)"};
        }
      `})]})},fk={general:{filosofie:[{title:"Míletská škola",content:`Období: Předsokratovské období.

Hlavní představitelé: Thales, Anaximandros, Anaximenés. 

Hlavní myšlenka: Míletská škola hledala základní princip (arché), který by vysvětlil vznik a povahu světa. Thales tvrdil, že základem všeho je voda, Anaximandros mluvil o neomezeném (apeiron), a Anaximenés o vzduchu. 

Příklad: Thalesovo tvrzení, že voda je základem všeho, je viditelné i v přírodních jevech, jako je kondenzace vody nebo vznik života v moři.`},{title:"Pythagorejská škola",content:`Období: Předsokratovské období.

Hlavní představitelé: Pythagoras.

Hlavní myšlenka: Pythagorejská škola věřila, že matematika a čísla jsou klíčové pro pochopení vesmíru. Pythagoras tvrdil, že všechny věci jsou uspořádány podle matematických zákonů, přičemž čísla jsou jejich podstatou.

Příklad: Pythagorejská věta, která říká, že součet čtverců délek obou kratších stran pravoúhlého trojúhelníku se rovná čtverci délky přepony (a² + b² = c²), je příkladem jeho myšlenky, že matematika je základem reality.`},{title:"Herakleitos",content:`Období: Předsokratovské období.

Hlavní představitelé: Herakleitos z Efesu.

Hlavní myšlenka: Herakleitos zdůraznil, že svět je v neustálém pohybu a změně, a že změna je základní charakteristikou reality. Proslul svým výrokem: "Nikdy nevstoupíš do téže řeky".

Příklad: Tento výrok ilustruje, že i když vstoupíme do stejné řeky, její voda už bude jiná, protože se neustále mění. Stejně tak i v životě je vše v neustálém pohybu a nic není trvalé.`},{title:"Eléjská škola",content:`Období: Předsokratovské období.

Hlavní představitelé: Parmenidés, Zenón.

Hlavní myšlenka: Eléjská škola tvrdila, že realita je jedna, neměnná a nehybná. Parmenidés říkal, že změna a pohyb jsou iluze. Zenón formuloval paradoxy, které měly ukázat, že pohyb je nesmyslný.

Příklad: Zenónův paradox "Achilles a želva" ukazuje, že Achilles, i když běží rychleji než želva, ji nikdy nedohoní, protože vždy bude muset uběhnout vzdálenost, kterou želva již ušla.`},{title:"Sofisté",content:`Období: Předsokratovské období.

Hlavní představitelé: Protagoras, Gorgias.

Hlavní myšlenka: Sofisté věřili, že pravda je relativní a závisí na lidském názoru. Protagoras proslul svým výrokem: "Člověk je mírou všech věcí", což znamená, že vše je subjektivní a závisí na člověku.

Příklad: Když dva lidé mají různé názory na nějakou událost, sofisté by řekli, že oba mají pravdu, protože pravda je relativní a závisí na jejich osobních perspektivách.`},{title:"Atomisté",content:`Období: Předsokratovské období.

Hlavní představitelé: Leukippos, Demokritos.

Hlavní myšlenka: Atomisté tvrdili, že vše se skládá z malých, nedělitelných částic - atomů, které se pohybují v prázdnu. Tyto atomy se spojováním vytvářejí různé věci a objekty.

Příklad: Pokud rozbijeme sklenici, podle atomistů se rozbije na mnoho malých atomů, které dříve tvořily celistvou sklenici, ale nyní jsou rozmístěny v prostoru jako samostatné částice.`},{title:"Sokratova filosofie",content:`Období: Klasické období (5. století př. n. l.).

Hlavní představitelé: Sókratés.

Hlavní myšlenka: Sókratés zdůrazňoval význam etiky a sebepoznání, věřil, že „nezkoumaný život nestojí za to žít". Používal dialog (dialektiku) jako metodu zkoumání pravdy.

Příklad: V rozhovoru s mladým mužem by se Sókratés ptal na definici spravedlnosti a postupně by odhaloval rozpory v jeho odpovědích, čímž by ho vedl k hlubšímu zamyšlení a vlastnímu poznání.`},{title:"Platonismus",content:`Období: Klasické období (4. století př. n. l.).

Hlavní představitelé: Platón.

Hlavní myšlenka: Platón rozvinul teorii idejí, podle které existuje dokonalý svět idejí, jehož nedokonalým odrazem je svět, který vidíme. Lidská duše má schopnost tento svět idejí poznávat.

Příklad: Platónova alegorie jeskyně popisuje lidi připoutané v jeskyni, kteří vidí pouze stíny na stěně, a ukazuje, že poznání idejí je jako vyjít z jeskyně na světlo.`},{title:"Aristotelismus",content:`Období: Klasické období (4. století př. n. l.).

Hlavní představitelé: Aristotelés.

Hlavní myšlenka: Aristotelés zdůrazňoval empirické pozorování a logiku. Tvrdil, že vše má svůj účel (telos) a že cílem lidského života je dosažení eudaimonie (štěstí a naplnění).

Příklad: Aristotelés by například zkoumal vlastnosti rostliny a na základě pozorování určil její účel, což by aplikoval i na etické otázky, například jak člověk může dosáhnout svého potenciálu.`},{title:"Spor o univerzálie",content:`Období: Klasické období (4. století př. n. l.).

Pohled Platóna: Platón tvrdil, že univerzálie (obecné pojmy, např. "krása" nebo "dobro") existují samostatně jako reálné ideje ve světě idejí, nezávislé na konkrétních věcech.

Pohled Aristotela: Aristotelés naopak věřil, že univerzálie existují pouze ve věcech samotných, jako jejich podstatné vlastnosti, a mimo ně nemají žádnou nezávislou existenci.

Příklad: Představme si "kruh". Platón by řekl, že existuje dokonalý kruh ve světě idejí, který všechny konkrétní kruhy (např. namalované kruhy na papíře) pouze napodobují. Aristotelés by naopak tvrdil, že vlastnost "kruhovitosti" existuje v každém konkrétním kruhu a není oddělená od dané věci.`},{title:"Stoicismus",content:`Období: Helenistické období (3. století př. n. l. - 2. století n. l.).

Hlavní představitelé: Zénón z Kitia, Epiktétos, Seneca, Marcus Aurelius.

Hlavní myšlenka: Stoicismus se zaměřuje na dosažení vnitřního klidu a harmonického života skrze ovládání emocí a rozpoznání toho, co je v našem životě skutečně pod naší kontrolou. Stoici věřili, že rozum a ctnost jsou klíčem k dosažení „eudaimonie" (šťastného a naplněného života).

Příklad: Stoik Marcus Aurelius ve své knize Meditace zdůrazňuje, jak se vyrovnávat s nepřízní osudu a zaměřovat se na vlastní ctnosti.`},{title:"Epikureismus",content:`Období: Helenistické období (4. století př. n. l. - 1. století n. l.).

Hlavní představitelé: Epikuros, Metrodóros.

Hlavní myšlenka: Epikureismus učí, že nejvyšším cílem je dosáhnout „atarxie" (vnitřního klidu) a potěšení, které je přirozené a dosažitelné skrze rozumné uspokojování základních potřeb, odmítání nadměrných touh a vyhýbání se bolesti.

Příklad: Epikuros tvrdil, že přátelství je největším potěšením, protože přátelé pomáhají zmírnit strach a bolest, což vede k trvalé radosti.`},{title:"Skepticismus",content:`Období: Helenistické období (3. století př. n. l. - 2. století n. l.).

Hlavní představitelé: Pyrrhón z Elidy, Aenesidémos.

Hlavní myšlenka: Skepticismus je filozofický směr, který se zaměřuje na pochybování o schopnosti lidského rozumu dosáhnout jistých a objektivních pravd. Skeptici tvrdí, že člověk nemůže dosáhnout definitivní jistoty a měl by se vyhýbat absolutním tvrzením.

Příklad: Pyrrhón doporučoval, aby se člověk vyhýbal soudům a soudil věci pouze podle přirozených vjemů, což vedlo k tomu, že neexistuje žádný důvod pro negativní emoce.`},{title:"Novoplatonismus",content:`Období: Helenistické období (3. století n. l. - 6. století n. l.).

Hlavní představitelé: Plotínos, Porfyrios, Jamblichos.

Hlavní myšlenka: Novoplatonismus je vývoj a reinterpretace platonismu, který zdůrazňuje existenci jediného, absolutního „Jedna", z něhož pochází vše ostatní. Tento směr se zaměřuje na duchovní očistu a návrat k „Jednu" skrze meditaci, introspekci a filozofii.

Příklad: Plotínos tvrdil, že vše ve světě je propojeno skrze „Jedno", a člověk může dosáhnout osvícení a sjednocení s tímto absolutním principem.`},{title:"Novopýthagoreismus",content:`Období: Helenistické období (3. století př. n. l. - 1. století n. l.).

Hlavní představitelé: Philolaos, Archytas.

Hlavní myšlenka: Novopýthagoreismus zdůrazňuje matematické a harmonické principy jako základ pro porozumění vesmíru. Novopýthagorejci věřili, že vesmír je řízen matematickými zákony, které ovlivňují vše od přírody po duši člověka.

Příklad: Philolaos tvrdil, že vesmír není centrální, ale je uspořádán kolem ohně, což bylo jeho filozofickým pokusem propojit matematiku s cosmologií.`}],psychologie:[{title:"Psychoanalýza",content:`Období: Konec 19. a začátek 20. století.

Hlavní představitelé: Sigmund Freud.

Hlavní myšlenka: Psychoanalýza je teorie a terapeutická metoda, která se zaměřuje na studium nevědomí a vliv nevědomých procesů na chování a myšlení člověka. Freud se domníval, že nevědomé konflikty, potlačené vzpomínky a zranění mají zásadní vliv na duševní zdraví.

Příklad: Freudovo teoretické vysvětlení záměn v jazyce, například, když člověk místo "krásná dívka" řekne "krásná svině", což má být podle něj projev nevědomého přání nebo strachu.`},{title:"Analytická psychologie",content:`Období: Počátek 20. století.

Hlavní představitelé: Carl Gustav Jung.

Hlavní myšlenka: Analytická psychologie se zaměřuje na studium individuace a symboliky. Jung se soustředil na rozvoj jednotlivce, který je schopen dosáhnout plné seberealizace a rovnováhy mezi vědomými a nevědomými částmi psychiky.

Příklad: Jungovy analýzy snů, kde se objevují univerzální symboly (archetypy) jako matka, hrdina nebo stín, které jsou pro všechny kultury a jednotlivce stejné.`},{title:"Individuální psychologie",content:`Období: Počátek 20. století.

Hlavní představitelé: Alfred Adler.

Hlavní myšlenka: Individuální psychologie se zaměřuje na studium jedinečnosti každého člověka a jeho snahy o dosažení nadřazenosti. Adler věřil, že každý člověk má svůj vlastní životní styl a cíle, které se snaží dosáhnout.

Příklad: Adlerova teorie o pocitu méněcennosti a kompenzaci, kde člověk, který se cítí méněcenný v určité oblasti, se snaží tuto nevýhodu kompenzovat rozvojem jiných schopností.`},{title:"Behaviorismus",content:`Období: Začátek 20. století.

Hlavní představitelé: John B. Watson, B. F. Skinner.

Hlavní myšlenka: Behaviorismus je teorie, která tvrdí, že chování je výsledkem podnětů a reakcí (stimulus-response). Tento směr se soustředí na pozorovatelné chování a vychází z přesvědčení, že psychologii lze studovat pouze na základě měřitelných a objektivních faktorů.

Příklad: Skinnerova teorie operantního podmiňování, kdy se chování jedince formuje prostřednictvím pozitivního nebo negativního posílení.`},{title:"Gestalt psychologie",content:`Období: Začátek 20. století.

Hlavní představitelé: Max Wertheimer, Wolfgang Köhler, Kurt Koffka.

Hlavní myšlenka: Gestalt psychologie se zaměřuje na studium vnímání a myšlení jako celků, které jsou více než pouhým součtem jejich částí. Tento směr zdůrazňuje, že člověk vnímá svět v celcích a vzorcích, ne jako izolované prvky.

Příklad: Gestalt zákon blízkosti, který říká, že prvky blízko sebe vnímáme jako celek, například tečky uspořádané do kruhu vnímáme jako kruh, ne jako jednotlivé tečky.`},{title:"Humanistická psychologie",content:`Období: 50. a 60. léta 20. století.

Hlavní představitelé: Abraham Maslow, Carl Rogers.

Hlavní myšlenka: Humanistická psychologie se zaměřuje na studium lidského potenciálu a seberealizace. Tento směr zdůrazňuje svobodu volby, kreativitu a osobní růst člověka.

Příklad: Maslowova pyramida potřeb, která ukazuje hierarchii lidských potřeb od základních fyziologických potřeb až po seberealizaci.`},{title:"Kognitivní psychologie",content:`Období: 60. léta 20. století.

Hlavní představitelé: Jean Piaget, Ulric Neisser.

Hlavní myšlenka: Kognitivní psychologie se zaměřuje na studium mentálních procesů, jako je myšlení, paměť, vnímání a učení. Tento směr zdůrazňuje, že člověk aktivně zpracovává informace a vytváří mentální reprezentace světa.

Příklad: Piagetova teorie kognitivního vývoje, která popisuje, jak se děti vyvíjejí od senzomotorického stádia až po formální operace.`},{title:"Transpersonální psychologie",content:`Období: 60. léta 20. století.

Hlavní představitelé: Stanislav Grof, Abraham Maslow.

Hlavní myšlenka: Transpersonální psychologie se zaměřuje na studium transcendentních a spirituálních aspektů lidské psychiky. Tento směr zkoumá stavy vědomí, které přesahují běžné ego a osobní identitu.

Příklad: Grofovo zkoumání holotropního dýchání a jeho vlivu na změny vědomí a přístup k nevědomému materiálu.`},{title:"Gnoseologie",content:`Období: Od starověku po současnost.

Hlavní představitelé: René Descartes, Immanuel Kant.

Hlavní myšlenka: Gnoseologie je teorie poznání, která se zabývá otázkami, jak člověk poznává svět a jaké jsou hranice lidského poznání. Tento obor zkoumá povahu poznání, jeho zdroje a kritéria pravdivosti.

Příklad: Kantovo rozlišení mezi analytickými a syntetickými soudy, které ukazuje rozdíl mezi definičním poznáním a poznáním, které přidává novou informaci.`},{title:"Introspekce",content:`Období: 19. století.

Hlavní představitelé: Wilhelm Wundt, Edward Titchener.

Hlavní myšlenka: Introspekce je metoda zkoumání vlastních mentálních procesů a stavů. Tato metoda se zaměřuje na systematické pozorování a popis vlastních myšlenek, pocitů a vjemů.

Příklad: Wundtův experimentální přístup k introspekci, kde cvičení pozorovatelé popisovali své vjemy při vystavení různým podnětům.`},{title:"Kolektivní nevědomí",content:`Období: Počátek 20. století.

Hlavní představitelé: Carl Gustav Jung.

Hlavní myšlenka: Kolektivní nevědomí je koncept, který popisuje sdílené nevědomé obsahy, které jsou dědictvím celého lidstva. Jung věřil, že tyto obsahy se projevují v mýtech, symbolech a archetypech.

Příklad: Jungova analýza mýtů a pohádek, kde identifikoval univerzální archetypy jako hrdina, stín nebo moudrý stařec, které se objevují v různých kulturách.`}],sociologie:[{title:"Auguste Comte",content:`Období: 19. století.

Myšlenkový směr: Pozitivismus.

Hlavní myšlenka: Comte je zakladatelem pozitivismu, směru, který tvrdí, že všechny skutečnosti je možné studovat vědeckými metodami, podobně jako v přírodních vědách. Uvedl teorii tří stádií vývoje lidského poznání, která postupuje od teologického, přes metafyzické, až k vědeckému (pozitivnímu) stádiu. Vědecký přístup podle něj měl přinést objektivní porozumění sociálním jevům a tím i zlepšení lidské společnosti.

Příklad: Comteho práce „Systém pozitivní filozofie", která klade důraz na vědecké metody a aplikace na analýzu společenských jevů.`},{title:"Herbert Spencer",content:`Období: 19. století.

Myšlenkový směr: Sociální darwinismus.

Hlavní myšlenka: Spencer přinesl teorii sociálního darwinismu, která tvrdí, že stejně jako v přírodě, i v lidské společnosti přežívají nejschopnější a nejadaptabilnější jedinci. Tvrdil, že lidské společnosti a jejich instituce se vyvíjejí přirozeným výběrem, což znamená, že silnější skupiny a jednotlivci by měli mít svobodu prosperovat bez zásahů zvenčí. Tento přístup odmítal regulace státu a podporoval laissez-faire ekonomiku, která umožňuje přirozený výběr ve všech oblastech života.

Příklad: Spencerovo tvrzení, že jakýkoliv zásah státu do sociálních procesů, například pomoc chudým, brání přirozenému výběru a pokroku společnosti.`},{title:"Karl Marx",content:`Období: 19. století.

Myšlenkový směr: Marxismus.

Hlavní myšlenka: Marxismus tvrdí, že historie lidstva je historií třídních bojů, kde dominantní třídy vykořisťují nižší třídy. Marx rozpracoval teorii o tom, jak kapitalismus vede k exploataci pracujících a jak je tento systém neudržitelný. Předpověděl, že proletariát (dělnická třída) nakonec povstane proti buržoazii (vlastníkům výrobních prostředků), což povede k revoluci a vzniku beztřídní socialistické společnosti.

Příklad: Marxova analýza kapitalismu a jeho teorie přebírání moci proletariátem během proletářské revoluce.`},{title:"Émile Durkheim",content:`Období: 19. - 20. století.

Myšlenkový směr: Jeden ze zakladatelů moderní sociologie (ovlivnil mnoho směrů).

Hlavní myšlenka: Durkheim byl zakladatelem moderní sociologie, který věřil, že společnost by měla být studována jako objektivní realita, která ovlivňuje chování jednotlivců. Zajímal se o to, jak sociální struktury, jako náboženství nebo dělba práce, udržují sociální řád a stabilitu. Durkheim také tvrdil, že společenské jevy musí být vysvětlovány podle jejich funkce v rámci širší sociální struktury, a že společnost je více než souhrn jednotlivců.

Příklad: Durkheimova studie sebevraždy, která ukázala, že sebevraždy nejsou jen individuálními činy, ale jsou ovlivněny širšími sociálními faktory, jako je integrace jednotlivce do společnosti.`},{title:"Vilfredo Pareto",content:`Období: 19. - 20. století.

Myšlenkový směr: Elitismus.

Hlavní myšlenka: Pareto formuloval teorii, podle které v každé společnosti existují dvě hlavní kategorie: elity a masy. Elity jsou ti, kteří kontrolují moc a bohatství, zatímco masy jsou pasivní a podřízené. Pareto věřil, že změny ve společnosti jsou důsledkem boje mezi různými elitami a že změna moci mezi elitami vede k postupnému rozvoji společnosti. Dále tvrdil, že mocné elity vždy udržují svou pozici, ale mění se jednotliví členové elitních skupin. Zneužito nacismem.

Příklad: Paretoho „princip 80/20", který ukazuje, že 80 % zdrojů a moci je soustředěno v rukou 20 % lidí ve společnosti.`},{title:"Max Weber",content:`Období: 19. - 20. století.

Myšlenkový směr: Chápající sociologie.

Hlavní myšlenka: Weber se zabýval tím, jak sociální činy jednotlivců, jejich motivy a hodnoty ovlivňují vznik a fungování institucí a organizací. Na rozdíl od Marxovy ekonomické determinace, Weber tvrdil, že různé hodnoty a ideologie, například protestantská etika, mohou mít zásadní vliv na vznik kapitalismu. Zajímal se také o byrokracii jako jednu z klíčových struktur moderní společnosti, která, i když zajišťuje efektivitu, může vést k odcizení a ztrátě individuality.

Příklad: Weberova teorie o protestantské etice a jejím vlivu na vznik kapitalismu, kde tvrdil, že určité hodnoty spojené s protestantským náboženstvím vedly k etice tvrdé práce, šetření a racionality, které jsou základem kapitalistické ekonomiky.`},{title:"Georg Simmel",content:`Období: 19. - 20. století.

Myšlenkový směr: Sociologie.

Hlavní myšlenka: Simmel se zaměřoval na studium malých skupin a interakcí mezi jednotlivci, čímž se stal průkopníkem mikro-sociologie. Jeho teorie říká, že každé jednotlivé setkání a vztah mezi lidmi má vliv na širší sociální strukturu. Zkoumal také vliv moderního městského života na jednotlivce, přičemž tvrdil, že anonymita velkých měst může vést k rozpadu tradičních společenských vazeb.

Příklad: Simmelova analýza vztahů mezi jednotlivci v moderním městském prostředí, kde anonymita a rychlý životní styl mohou vést k izolaci a ztrátě osobních kontaktů.`},{title:"Robert Park",content:`Období: 20. století.

Myšlenkový směr: Chicago School.

Hlavní myšlenka: Park byl klíčovým představitelem Chicagské školy sociologie, která se zaměřila na studium městského života a jeho vlivu na sociální interakce. Zabýval se tím, jak městské prostředí formuje chování a vztahy mezi lidmi, přičemž zdůrazňoval význam prostředí a sociálních faktorů v rozvoji jednotlivců. Dále se věnoval analýze procesů migrace a urbanizace, které byly v té době významnými tématy.

Příklad: Parkova studie městských komunit v Chicagu, kde zkoumal, jak různé etnické a sociální skupiny spolu koexistují v městském prostoru.`},{title:"Jacob Moreno",content:`Období: 20. století.

Myšlenkový směr: Psychodrama.

Hlavní myšlenka: Moreno je zakladatelem psychodramy, terapeutické metody, která používá dramatizaci osobních konfliktů a zkušeností jako způsob psychoterapie. Psychodrama umožňuje jednotlivcům prožít a analyzovat své emoce a vztahy v simulovaných situacích, což jim pomáhá lépe porozumět jejich vnitřním prožitkům a konfliktům. Moreno věřil, že pomocí tohoto přístupu je možné dosáhnout hlubšího sebepoznání a uzdravení.

Příklad: Morenoho psychodramatické sezení, kdy účastníci hrají různé role, aby se vyrovnali se svými vnitřními problémy nebo vztahovými konflikty.`},{title:"Tomáš Garrigue Masaryk",content:`Období: 19. - 20. století.

Myšlenkový směr: Humanismus, sociologie.

Hlavní myšlenka: Masaryk se zasazoval o humanistické hodnoty, které kladly důraz na rozum, vědu a etiku v politice. V jeho filozofii se prolínaly prvky sociologie a politiky, přičemž jeho hlavním cílem bylo zajištění demokratických a svobodných principů pro nově vzniklou Československou republiku. Masaryk měl rovněž významný podíl na formování politických institucí a rozvoji občanské společnosti v Československu.

Příklad: Masarykovo dílo „Česká otázka", kde se zaměřil na národní identitu a roli vědy a rozumu v politickém životě.`},{title:"Edvard Beneš",content:`Období: 20. století.

Myšlenkový směr: Diplomacie, politika.

Hlavní myšlenka: Beneš byl významnou osobností české diplomacie, který se podílel na vzniku Československé republiky a byl klíčovým diplomatem v období první a druhé světové války. Byl obhájcem mírové politiky a přičinil se o vznik mezinárodních paktů, které měly zajistit bezpečnost střední Evropy. Ve své politické kariéře se věnoval především zahraniční politice a ochraně suverenity Československa.

Příklad: Benešovo zapojení do vzniku Mnichovské dohody a jeho role v diplomatických jednáních během druhé světové války.`},{title:"Jan Bláha",content:`Období: 20. století.

Myšlenkový směr: Sociologie, politika.

Hlavní myšlenka: Bláha se soustředil na otázky politické a sociální změny, přičemž se věnoval zejména studiu transformace politických a sociálních struktur ve 20. století. Jeho přístup zahrnoval analýzu modernizačních procesů, které ovlivnily rozvoj demokratických institucí. Bláha rovněž zdůrazňoval roli politických elit a jejich vliv na vývoj státních a politických systémů.

Příklad: Bláhova analýza politických a sociálních změn v Československu během 20. století, přičemž se zaměřoval na procesy modernizace.`}]},"pravo-politologie":{pravo:[{title:"Ústavní právo",content:`Období: Moderní doba.

Hlavní představitelé: Různí ústavní právníci a teoretici.

Hlavní myšlenka: Ústavní právo je soubor právních norem, které upravují základní principy organizace státu, postavení jednotlivců ve společnosti a vztahy mezi státními orgány. Je to nejvyšší právní normativní soustava v právním systému každého státu.

Příklad: Ústava České republiky, která definuje základní strukturu státu, práva a svobody občanů a vztahy mezi státními orgány.`},{title:"Význam ústavy",content:`Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a teoretici.

Hlavní myšlenka: Ústava je základní právní dokument státu, který vymezuje strukturu a kompetence státních orgánů, práva a svobody občanů a principy fungování právního a politického systému. Má nejvyšší právní sílu.

Příklad: Ústava USA, která je nejstarší psanou ústavou na světě a slouží jako model pro mnoho dalších demokratických států.`},{title:"Princip dělby moci",content:`Období: Moderní doba.

Hlavní představitelé: Montesquieu, John Locke.

Hlavní myšlenka: Princip dělby moci je základní zásada ústavního práva, podle které je moc ve státě rozdělena mezi tři nezávislé složky: zákonodárnou, výkonnou a soudní. Tento princip má zajistit kontrolu a vyváženost mezi jednotlivými složkami.

Příklad: V České republice je moc rozdělena mezi Parlament (zákonodárná), Vládu (výkonná) a soudy (soudní moc).`},{title:"Princip právního státu",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Princip právního státu znamená, že veškerá činnost státu je podřízena právu, což znamená, že stát a jeho orgány mohou jednat pouze v mezích práva. Každý občan je chráněn před svévolným rozhodováním státní moci.

Příklad: Ústavní soud, který kontroluje, zda zákony a rozhodnutí státních orgánů jsou v souladu s ústavou.`},{title:"Suverenita lidu",content:`Období: Moderní doba.

Hlavní představitelé: Jean-Jacques Rousseau, moderní demokratičtí teoretici.

Hlavní myšlenka: Suverenita lidu je základní zásada demokratických států, podle které veškerá politická moc pochází od občanů. Lidé mají právo rozhodovat o svém politickém systému prostřednictvím voleb a dalších demokratických nástrojů.

Příklad: Volební právo, které umožňuje občanům volit své zástupce do parlamentu a dalších orgánů.`},{title:"Psaná a nepsaná ústava",content:`Období: Moderní doba.

Hlavní představitelé: Různí ústavní právníci.

Hlavní myšlenka: Psaná ústava je formálně sepsána v jednom nebo několika dokumentech (např. Ústava USA nebo ČR). Nepsaná ústava je soubor tradic, zvyků a precedensů, které nejsou sepsány v jednom dokumentu, ale tvoří ústavní rámec (např. ve Velké Británii).

Příklad: Velká Británie, která nemá psanou ústavu, ale má dlouholeté ústavní tradice a zvyklosti.`},{title:"Základní práva a svobody",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Základní práva a svobody jsou práva, která mají všichni občané podle ústavy a mezinárodních dohod. Tato práva chrání jednotlivce před nadměrným zásahem státu do jejich života a zahrnují práva na svobodu, rovnost, ochranu soukromí a další.

Příklad: Listina základních práv a svobod v České republice, která garantuje občanům základní práva a svobody.`},{title:"Princip subsidiarity",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Princip subsidiarity znamená, že úkoly by měly být řešeny na nejnižší možné úrovni vlády. To znamená, že vyšší orgány by měly zasahovat pouze tehdy, když nižší úroveň není schopná efektivně problém vyřešit.

Příklad: V Evropské unii, kde se princip subsidiarity používá k určení, kdy by měla EU zasahovat do záležitostí členských států.`},{title:"Kontrolní role ústavního soudu",content:`Období: Moderní doba.

Hlavní představitelé: Ústavní soudci a právní teoretici.

Hlavní myšlenka: Ústavní soud má za úkol kontrolovat, zda zákony a jiné právní předpisy nejsou v rozporu s ústavou. Tato kontrola je důležitá pro ochranu ústavního pořádku a základních práv občanů.

Příklad: Rozhodnutí Ústavního soudu České republiky, která mohou zrušit zákony, které jsou v rozporu s ústavou.`},{title:"Základní normy ústavního pořádku",content:`Období: Moderní doba.

Hlavní představitelé: Různí ústavní právníci.

Hlavní myšlenka: Základní normy ústavního pořádku jsou právní normy, které upravují fundamentální právní strukturu státu. Tyto normy jsou chráněny vyšší právní sílou a jejich změna je obvykle složitější než u běžných právních předpisů.

Příklad: Ústavní zákony v České republice, které mají vyšší právní sílu než běžné zákony.`},{title:"Právní norma",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Právní norma je pravidlo chování, které je vymezeno právním systémem. Normy jsou vynutitelné státem, což znamená, že porušení těchto norem může vést k právním sankcím.

Příklad: Ustanovení občanského zákoníku, která upravují vztahy mezi občany.`},{title:"Právní subjektivita",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Právní subjektivita je schopnost být nositelem práv a povinností. Fyzické osoby mají právní subjektivitu od narození, právnické osoby ji získávají zápisem do obchodního rejstříku.

Příklad: Dítě, které má právní subjektivitu od narození, může být nositelem práv a povinností.`},{title:"Způsobilost k právním úkonům",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Způsobilost k právním úkonům je schopnost jednotlivce právně jednat, tedy uzavírat platné smlouvy a vykonávat jiná právní jednání.

Příklad: Plnoletý člověk má plnou způsobilost k právním úkonům, zatímco nezletilý má omezenou způsobilost.`},{title:"Práva a povinnosti",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Práva a povinnosti jsou právní vztahy mezi subjekty, které vznikají na základě právních norem. Práva jsou oprávnění jedince vykonávat určité činnosti nebo se domáhat něčeho, zatímco povinnosti vyžadují určité chování nebo zdržení se činnosti.

Příklad: Vlastnické právo dává vlastníkovi právo nakládat s věcí, zatímco povinnost platit daně vyžaduje určité chování.`},{title:"Občanská smlouva",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Občanská smlouva je právní úkon, kterým si strany vzájemně ujednají práva a povinnosti. Smlouva je závazná pro obě strany a její porušení může vést k právním důsledkům.

Příklad: Kupní smlouva, kde prodávající se zavazuje předat věc a kupující zaplatit cenu.`},{title:"Absolutní a relativní právo",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Absolutní právo je takové právo, které může být uplatněno vůči každému (např. vlastnické právo). Relativní právo je právo, které se uplatňuje pouze vůči konkrétní osobě nebo osobám (např. nárok na plnění z konkrétní smlouvy).

Příklad: Vlastnické právo je absolutní, protože může být uplatněno vůči komukoliv, zatímco nárok na zaplacení dluhu je relativní, protože se týká pouze konkrétního dlužníka.`},{title:"Vlastnictví",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Vlastnictví je právní vztah, který dává vlastníkovi právo nakládat s věcí podle svého uvážení, v mezích zákona. Vlastník může věc užívat, měnit, zcizit, nebo zničit.

Příklad: Vlastník domu může s ním nakládat podle svého uvážení, ale musí respektovat stavební předpisy a práva sousedů.`},{title:"Závazkové právo",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Závazkové právo je část občanského práva, která se zabývá vztahy mezi osobami, které jsou vzájemně vázány závazky. Závazky mohou vznikat ze smluv nebo z jiných právních jednání.

Příklad: Smlouva o dílo, kde se jedna strana zavazuje vykonat určitou práci a druhá strana zaplatit odměnu.`},{title:"Odpovědnost za škodu",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Odpovědnost za škodu je právní závazek nahradit škodu způsobenou jednáním, které bylo nezákonné, nebo které porušilo smluvní podmínky. Může být založena na zavinění nebo objektivní odpovědnosti.

Příklad: Odpovědnost za škodu způsobenou dopravní nehodou, kde viník musí nahradit škodu poškozenému.`},{title:"Právní jednání",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Právní jednání je úkon, kterým osoba vyjadřuje svůj právní záměr, aby vyvolala právní následky. Může jít o uzavření smlouvy, podání žaloby nebo zřízení závěti.

Příklad: Podpis smlouvy, který je právním jednáním vedoucím k vzniku právních vztahů mezi stranami.`},{title:"Trestní právo",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní právo je soubor právních norem, které stanoví, jaké jednání je považováno za trestné, jaké jsou tresty za jeho spáchání a jak se trestní řízení provádí. Jeho cílem je chránit veřejný zájem a zajistit spravedlivý postih pachatelů trestných činů.

Příklad: Trestní zákoník, který definuje trestné činy a jejich tresty.`},{title:"Přestupek a trestný čin",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Přestupek je méně závažné porušení právních předpisů, které je sankcionováno mírnějším trestem (pokutou, napomenutím), zatímco trestný čin je závažnější protiprávní jednání, které může vést k vyšším trestům, jako je odnětí svobody.

Příklad: Přestupek může být překročení rychlosti, zatímco trestným činem je krádež nebo vražda.`},{title:"Trestní odpovědnost",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní odpovědnost znamená, že osoba, která spáchá trestný čin, je právně zodpovědná za svůj čin a může být potrestána podle trestního zákona. Osoba musí být v době spáchání trestného činu způsobilá k trestní odpovědnosti.

Příklad: Plnoletý člověk, který spáchá trestný čin, je trestně odpovědný, zatímco dítě mladší 15 let není.`},{title:"Druhy trestů",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Tresty v trestním právu se dělí na hlavní (např. odnětí svobody, peněžité tresty) a vedlejší (např. ztráta občanských práv, zákaz činnosti). Hlavní tresty jsou vážnější a mají dlouhodobější dopad na život pachatele.

Příklad: Za vraždu může být uložen trest odnětí svobody, zatímco za přestupek může být uložena pokuta.`},{title:"Trestní řízení",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní řízení je proces, při kterém se zjišťuje, zda byla spáchána trestná činnost a zda je obviněná osoba vinná. Trestní řízení zahrnuje vyšetřování, obžalobu, soudní řízení a případně odvolání.

Příklad: Proces od zadržení podezřelého až po vynesení rozsudku.`},{title:"Obvinění a vyšetřování",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Obvinění je oficiální obvinění osoby z toho, že spáchala trestný čin. Vyšetřování je fáze trestního řízení, kdy orgány činné v trestním řízení shromažďují důkazy, provádějí výslechy a zjišťují okolnosti trestného činu.

Příklad: Policie provádí vyšetřování a shromažďuje důkazy, které pak předkládá státnímu zástupci k podání obžaloby.`},{title:"Soudní řízení",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Soudní řízení je fáze trestního řízení, kdy soud rozhoduje o vině nebo nevině obviněné osoby. Soud zkoumá důkazy, vyslechne obžalovaného a svědky a na základě toho vynáší rozsudek.

Příklad: Veřejné soudní líčení, kde soud zkoumá všechny důkazy a vyslechne všechny zúčastněné strany.`},{title:"Trestní zákoník",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní zákoník je soubor právních předpisů, které definují trestné činy, stanoví tresty a upravují postupy v trestním řízení. V České republice je to zákon č. 40/2009 Sb., který upravuje veškerou trestní problematiku.

Příklad: Definice trestných činů a jejich trestních sazeb v trestním zákoníku.`},{title:"Podmíněné odsouzení",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Podmíněné odsouzení znamená, že osoba je uznána vinnou, ale soud odkládá výkon trestu na zkušební dobu. Pokud obviněný v této době neudělá žádný další trestný čin, trest nebude vykonán.

Příklad: Soud může uložit podmíněný trest odnětí svobody na zkušební dobu tří let.`},{title:"Amnestie",content:`Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Amnestie je rozhodnutí vlády nebo prezidenta, které znamená zproštění trestu pro určitou skupinu osob, které byly odsouzeny za trestné činy. Amnestie může být udělena za zvláštních okolností a obvykle se vztahuje na menší trestné činy.

Příklad: Prezidentská amnestie u příležitosti významného výročí státu.`}],politologie:[{title:"Ústava ČR",content:`Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a teoretici.

Hlavní myšlenka: Ústava ČR je základní zákon státu, který určuje strukturu a fungování státní moci. Stanovuje rozdělení moci na zákonodárnou, výkonnou a soudní a definuje práva a svobody občanů.

Příklad: Ústava ČR definuje základní strukturu státu, včetně pravomocí jednotlivých orgánů a základních práv občanů.`},{title:"Zákon",content:`Období: Moderní doba.

Hlavní představitelé: Zákonodárci a právní teoretici.

Hlavní myšlenka: Zákon je právní norma schválená Parlamentem ČR, která má obecnou závaznost a upravuje důležité oblasti života ve státě.

Příklad: Občanský zákoník, který upravuje vztahy mezi občany a jejich práva a povinnosti.`},{title:"Vyhláška",content:`Období: Moderní doba.

Hlavní představitelé: Ministerstva a obce.

Hlavní myšlenka: Vyhláška je podzákonný předpis vydávaný ministerstvy nebo obcemi, který detailněji upravuje zákony a jejich praktickou aplikaci.

Příklad: Vyhláška ministerstva školství o organizaci školního roku.`},{title:"Volební systém pro Poslaneckou sněmovnu ČR",content:`Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a volební komise.

Hlavní myšlenka: Volby do Poslanecké sněmovny ČR probíhají podle poměrného volebního systému, kde voliči hlasují pro politické strany. Mandáty jsou rozdělovány podle volebních výsledků stran, které překročily 5% hranici.

Příklad: Volební systém umožňuje menším stranám získat zastoupení v parlamentu, pokud překročí 5% hranici.`},{title:"Volební systém pro Senát ČR",content:`Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a volební komise.

Hlavní myšlenka: Volby do Senátu ČR probíhají podle většinového systému. Každý volič hlasuje pro konkrétního kandidáta ve svém obvodě, a pokud žádný nezíská nadpoloviční většinu, koná se druhé kolo.

Příklad: Volební obvody pro senátory jsou menší a umožňují osobnější kontakt voličů s kandidáty.`},{title:"Prezident ČR",content:`Období: Moderní doba.

Hlavní představitelé: Prezidenti ČR.

Hlavní myšlenka: Prezident ČR je hlavou státu, volený přímo občany na pětileté období. Má spíše reprezentativní roli, ale také jmenuje vládu, soudce a další klíčové činitele.

Příklad: Prezident reprezentuje stát navenek a má pravomoc jmenovat předsedu vlády.`},{title:"Poslanecká sněmovna ČR",content:`Období: Moderní doba.

Hlavní představitelé: Poslanci a předsedové sněmovny.

Hlavní myšlenka: Poslanecká sněmovna je dolní komora Parlamentu ČR, která schvaluje zákony, rozpočet a kontroluje vládu. Má 200 poslanců volených na čtyři roky.

Příklad: Poslanecká sněmovna je hlavním zákonodárným orgánem a může vyslovit nedůvěru vládě.`},{title:"Senát ČR",content:`Období: Moderní doba.

Hlavní představitelé: Senátoři a předsedové senátu.

Hlavní myšlenka: Senát je horní komora Parlamentu ČR, která má 81 senátorů volených na šest let. Funguje jako kontrolní orgán při přijímání zákonů.

Příklad: Senát může vrátit zákony Poslanecké sněmovně s pozměňovacími návrhy.`},{title:"Vláda ČR",content:`Období: Moderní doba.

Hlavní představitelé: Členové vlády a premiér.

Hlavní myšlenka: Vláda ČR je výkonným orgánem státu, který řídí činnost ministerstev a odpovídá Poslanecké sněmovně. Jejím předsedou je premiér.

Příklad: Vláda navrhuje zákony a řídí státní správu.`},{title:"Soudní moc v ČR",content:`Období: Moderní doba.

Hlavní představitelé: Soudci a ústavní soudci.

Hlavní myšlenka: Soudní moc v ČR je nezávislá a zahrnuje obecné soudy, nejvyšší soudy a Ústavní soud, který dohlíží na dodržování ústavy.

Příklad: Ústavní soud může zrušit zákony, které jsou v rozporu s ústavou.`},{title:"Poloprezidentská demokracie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Poloprezidentská demokracie je systém, ve kterém se o moc dělí přímo volený prezident a vláda, která je odpovědná parlamentu. Prezident má významné pravomoci, jako je jmenování premiéra, zatímco vláda spravuje každodenní chod státu.

Příklad: Francie, kde prezident jmenuje premiéra a má pravomoc rozpustit parlament.`},{title:"Prezidentská demokracie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Prezidentská demokracie je systém, ve kterém je prezident hlavou státu i vlády. Je přímo volen občany a nemůže být odvolán parlamentem. Prezident má výkonnou moc a parlament zákonodárnou.

Příklad: Spojené státy americké, kde prezident je hlavou výkonné moci a nemůže být odvolán Kongresem.`},{title:"Parlamentní demokracie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Parlamentní demokracie je systém, kde vláda vzniká a odpovídá parlamentu. Hlavou státu je prezident nebo monarcha, ale výkonnou moc vykonává premiér a vláda.

Příklad: Česká republika, kde vláda je odpovědná Poslanecké sněmovně.`},{title:"Ústavní monarchie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Ústavní monarchie je forma vlády, kde monarcha funguje jako reprezentativní hlava státu a jeho pravomoci jsou omezeny ústavou. Skutečnou moc mají volení zástupci.

Příklad: Spojené království, kde královna je hlavou státu, ale skutečnou moc má parlament a vláda.`},{title:"Absolutní monarchie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Absolutní monarchie je systém, ve kterém má monarcha neomezenou moc a vládne bez ústavních omezení. Jeho rozhodnutí jsou konečná.

Příklad: Saúdská Arábie, kde král má absolutní moc nad státem.`},{title:"Theokracie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a náboženští teoretici.

Hlavní myšlenka: Theokracie je forma vlády, ve které je moc v rukou náboženských vůdců nebo institucí, které interpretují božské zákony jako základ vládnutí.

Příklad: Írán, kde nejvyšší náboženský vůdce má významnou politickou moc.`},{title:"Autokracie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a teoretici moci.

Hlavní myšlenka: Autokracie je systém, kde veškerou moc drží jedna osoba nebo úzká skupina lidí. Neexistuje účinná kontrola moci občany nebo institucemi.

Příklad: Severní Korea, kde jediná strana a její vůdce mají absolutní kontrolu nad státem.`},{title:"Diktatura",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a teoretici moci.

Hlavní myšlenka: Diktatura je systém vlády, ve kterém je moc soustředěna v rukou jedné osoby nebo úzké skupiny, často se opírá o vojenskou sílu a potlačuje opozici.

Příklad: Bělorusko, kde prezident má neomezenou moc a potlačuje opozici.`},{title:"Oligarchie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a teoretici moci.

Hlavní myšlenka: Oligarchie je vláda malé skupiny lidí, kteří kontrolují stát na základě svého bohatství, postavení nebo vojenské síly. Občané nemají vliv na rozhodování.

Příklad: Rusko, kde malá skupina bohatých lidí má významný vliv na politiku.`},{title:"Aristokracie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a historici.

Hlavní myšlenka: Aristokracie je systém vlády, kde moc drží privilegovaná vrstva, obvykle šlechta, na základě svého postavení, dědičnosti nebo majetku.

Příklad: Spojené království v minulosti, kde šlechta měla významný vliv na vládu.`},{title:"Demokracie",content:`Období: Moderní doba.

Hlavní představitelé: Politologové a demokratičtí teoretici.

Hlavní myšlenka: Demokracie je systém vlády, kde moc vychází z lidu a občané mají možnost se podílet na rozhodování. Je založena na svobodných volbách, právním státě a ochraně lidských práv.

Příklad: Česká republika, kde občané volí své zástupce a mají ústavou garantovaná práva.`},{title:"Liberalismus",content:`Období: Moderní doba.

Hlavní představitelé: John Locke, Adam Smith, John Stuart Mill.

Hlavní myšlenka: Liberalismus je politická ideologie, která klade důraz na svobodu jednotlivce, tržní hospodářství a omezenou roli státu. Věří v přirozená práva člověka a svobodné podnikání.

Příklad: Spojené státy americké, kde je silná tradice individuální svobody a tržního hospodářství.`},{title:"Konzervatismus",content:`Období: Moderní doba.

Hlavní představitelé: Edmund Burke, Roger Scruton.

Hlavní myšlenka: Konzervatismus je ideologie, která klade důraz na tradici, stabilitu a postupnou změnu. Váží si zavedených institucí a opatrně přistupuje k reformám.

Příklad: Konzervativní strany v Evropě, které hájí tradiční hodnoty a opatrné reformy.`},{title:"Socialismus",content:`Období: Moderní doba.

Hlavní představitelé: Karl Marx, Friedrich Engels.

Hlavní myšlenka: Socialismus je ideologie, která klade důraz na sociální spravedlnost, rovnost a kolektivní vlastnictví. Věří v aktivní roli státu při zajišťování blahobytu občanů.

Příklad: Skandinávské země, kde je silný sociální stát a vysoká míra přerozdělování.`},{title:"Komunismus",content:`Období: Moderní doba.

Hlavní představitelé: Karl Marx, Vladimir Lenin.

Hlavní myšlenka: Komunismus je radikální forma socialismu, která usiluje o beztřídní společnost a společenské vlastnictví výrobních prostředků. V praxi často vede k totalitnímu režimu.

Příklad: Sovětský svaz, kde byla zavedena centrálně plánovaná ekonomika a diktatura proletariátu.`},{title:"Fascismus",content:`Období: Moderní doba.

Hlavní představitelé: Benito Mussolini, Adolf Hitler.

Hlavní myšlenka: Fascismus je autoritářská ideologie, která klade důraz na národ, rasu a silného vůdce. Odmítá demokracii a lidská práva, propaguje násilí a expanzi.

Příklad: Itálie za Mussoliniho a Německo za Hitlera.`},{title:"Nacionalismus",content:`Období: Moderní doba.

Hlavní představitelé: Ernest Renan, Johann Gottlieb Fichte.

Hlavní myšlenka: Nacionalismus je ideologie, která klade důraz na národ a jeho zájmy. Může mít demokratickou formu (kulturní nacionalismus) nebo autoritářskou formu (etnický nacionalismus).

Příklad: Maďarsko, kde je silná tradice kulturního nacionalismu.`},{title:"Anarchismus",content:`Období: Moderní doba.

Hlavní představitelé: Pierre-Joseph Proudhon, Michail Bakunin.

Hlavní myšlenka: Anarchismus je ideologie, která odmítá státní moc a usiluje o společnost bez hierarchie a autority. Věří v dobrovolnou spolupráci a samosprávu.

Příklad: Anarchistické komuny a hnutí v 19. a 20. století.`},{title:"Environmentalismus",content:`Období: Moderní doba.

Hlavní představitelé: Rachel Carson, Al Gore.

Hlavní myšlenka: Environmentalismus je ideologie, která klade důraz na ochranu životního prostředí a udržitelný rozvoj. Usiluje o změnu společenského a ekonomického systému ve prospěch přírody.

Příklad: Zelené strany v Evropě, které prosazují ekologickou politiku.`},{title:"Feminismus",content:`Období: Moderní doba.

Hlavní představitelé: Mary Wollstonecraft, Simone de Beauvoir.

Hlavní myšlenka: Feminismus je ideologie, která usiluje o rovnost pohlaví a odstranění patriarchálních struktur ve společnosti. Prosazuje práva žen a jejich plnou participaci ve společnosti.

Příklad: Feministická hnutí v 20. století, která dosáhla volebního práva pro ženy a další práva.`}]},"historie-ekonomie":{ekonomie:[{title:"Základy ekonomie",content:`Období: Od starověku po současnost.

Hlavní představitelé: Adam Smith, John Maynard Keynes, Milton Friedman.

Hlavní myšlenka: Ekonomie je věda o tom, jak společnost využívá omezené zdroje k uspokojení neomezených potřeb. Zabývá se výrobou, distribucí a spotřebou statků a služeb.

Příklad: Smithova teorie "neviditelné ruky trhu", která ukazuje, jak individuální zájmy mohou vést k celkovému prospěchu společnosti.`},{title:"Ekonomické systémy",content:`Období: Moderní doba.

Hlavní představitelé: Karl Marx, Friedrich Hayek.

Hlavní myšlenka: Ekonomické systémy se liší podle toho, jak je organizována výroba a distribuce statků. Základní dělení je na tržní a plánované hospodářství.

Příklad: Porovnání kapitalistického a socialistického systému, kde se liší role státu a soukromého vlastnictví.`},{title:"Hrubý domácí produkt (HDP)",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a statistici.

Hlavní myšlenka: HDP je celková peněžní hodnota všech finálních výrobků a služeb vyprodukovaných v určité zemi během určitého období. Je to jeden z hlavních ukazatelů ekonomické výkonnosti a zdraví ekonomiky. HDP se měří buď výrobní, výdajovou, nebo příjmovou metodou.

Příklad: HDP České republiky v roce 2023, který měří celkovou ekonomickou produkci země.`},{title:"Inflace",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Inflace je proces, při kterém se zvyšují ceny zboží a služeb v ekonomice, což vede ke snížení kupní síly peněz. Vysoká inflace může destabilizovat ekonomiku, zatímco nízká a stabilní inflace je považována za znak zdravé ekonomiky.

Příklad: Růst cen potravin a energií v důsledku inflace, který snižuje kupní sílu spotřebitelů.`},{title:"Deflace",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Deflace je opakem inflace, tedy pokles cen zboží a služeb v ekonomice. Může signalizovat ekonomický pokles a vést k recesi, protože spotřebitelé a firmy odkládají výdaje v očekávání, že ceny budou klesat i nadále.

Příklad: Japonsko v 90. letech 20. století, kde dlouhodobá deflace vedla k ekonomické stagnaci.`},{title:"Nerovnováha v hospodářství",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Nerovnováha v hospodářství nastává, když mezi nabídkou a poptávkou vznikne disproporce, což může vést k ekonomickým problémům jako jsou nezaměstnanost, vysoká inflace nebo recese. Cílem makroekonomické politiky je tuto nerovnováhu odstranit.

Příklad: Ekonomická krize v roce 2008, kdy nerovnováha na finančních trzích vedla k globální recesi.`},{title:"Poptávková inflace",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Poptávková inflace nastává, když celkový poptávkový tlak v ekonomice (tedy poptávka po zboží a službách) převyšuje nabídku. To může vést k růstu cen a inflaci, která je podporována nadměrným výdajovým tlakem.

Příklad: Růst cen nemovitostí v důsledku vysoké poptávky po bydlení.`},{title:"Nabídková inflace",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Nabídková inflace vzniká, když náklady na výrobu (například ceny surovin nebo práce) vzrostou, což vede ke zvýšení cen zboží a služeb. Tento typ inflace je často spojen s rostoucími cenami surovin nebo energií.

Příklad: Růst cen ropy v 70. letech 20. století, který vedl k celosvětové stagflaci.`},{title:"Cyklická nezaměstnanost",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Cyklická nezaměstnanost je forma nezaměstnanosti, která se vyskytuje v důsledku ekonomických cyklů. Během recese nebo poklesu ekonomické aktivity roste nezaměstnanost, protože poptávka po zboží a službách klesá a firmy omezují výrobu.

Příklad: Vysoká nezaměstnanost během ekonomické krize v roce 2008.`},{title:"Strukturální nezaměstnanost",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Strukturální nezaměstnanost vzniká, když jsou pracovní síly v určitém sektoru neadekvátní potřebám trhu práce, což může být důsledkem technologických změn, změn ve struktuře ekonomiky nebo geografických faktorů.

Příklad: Nezaměstnanost v důsledku automatizace výroby, kdy pracovníci nemají potřebné dovednosti pro nové technologie.`},{title:"Frikční nezaměstnanost",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Frikční nezaměstnanost se vyskytuje, když lidé mezi zaměstnáními mění práci, nebo když se čerství absolventi škol poprvé hledají práci. Je to přirozený typ nezaměstnanosti, který je součástí každé ekonomiky.

Příklad: Absolventi vysokých škol, kteří hledají své první zaměstnání.`},{title:"Makroekonomická rovnováha",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Makroekonomická rovnováha je stav, kdy v ekonomice dochází k vyrovnání mezi celkovou nabídkou (výrobou) a celkovou poptávkou. V tomto stavu neexistují žádné silné inflační nebo deflační tlaky a ekonomika roste stabilním tempem.

Příklad: Stabilní růst HDP s nízkou inflací a přirozenou mírou nezaměstnanosti.`},{title:"Monetární politika",content:`Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a ekonomové.

Hlavní myšlenka: Monetární politika je soubor opatření, která centrální banka používá k řízení nabídky peněz, úrokových sazeb a kreditní politiky s cílem ovlivnit ekonomiku. Cílem je obvykle dosažení stabilní inflace a podpora ekonomického růstu.

Příklad: Změny úrokových sazeb Českou národní bankou pro kontrolu inflace.`},{title:"Fiskální politika",content:`Období: Moderní doba.

Hlavní představitelé: Vlády a ekonomové.

Hlavní myšlenka: Fiskální politika se týká rozhodnutí vlády o výdajích a daních, která mají vliv na ekonomickou aktivitu. Fiskální politika může být expanzivní (zvýšení výdajů nebo snížení daní) nebo restriktivní (snížení výdajů nebo zvýšení daní), aby se podpořil růst nebo snížil deficit.

Příklad: Vládní stimulační balíčky v době ekonomické krize.`},{title:"Kapitálová forma výroby",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a podnikatelé.

Hlavní myšlenka: Kapitálová forma výroby označuje využívání strojů, zařízení a technologických inovací při produkci. Tento faktor přispívá k produktivitě práce a růstu ekonomiky.

Příklad: Automatizované výrobní linky v moderních továrnách.`},{title:"Přirozená míra nezaměstnanosti",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Přirozená míra nezaměstnanosti je míra nezaměstnanosti, která je považována za optimální v ekonomice, která je stabilní a v rovnováze. Zahrnuje frikční a strukturální nezaměstnanost, ale ne cyklickou nezaměstnanost způsobenou recesí.

Příklad: Přirozená míra nezaměstnanosti v rozvinutých ekonomikách se pohybuje kolem 4-6%.`},{title:"Hrubý národní produkt (HNP)",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a statistici.

Hlavní myšlenka: HNP je měřítko celkové ekonomické produkce, které zahrnuje všechny příjmy získané obyvateli dané země, včetně těch, které byly získány v zahraničí. HNP je užitečné pro analýzu ekonomického blahobytu v širším měřítku.

Příklad: HNP zahrnuje příjmy českých občanů pracujících v zahraničí.`},{title:"Otevřená ekonomika",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Otevřená ekonomika je ekonomika, která umožňuje volný obchod se zahraničím, včetně importu a exportu zboží, služeb a kapitálu. Otevřenost ekonomiky má vliv na její růst a integraci do světového hospodářství.

Příklad: Česká republika jako součást Evropské unie a světového obchodu.`},{title:"Uzavřená ekonomika",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Uzavřená ekonomika je ekonomika, která neprovádí mezinárodní obchod a omezuje export i import. Tento model je dnes velmi vzácný, protože většina zemí je integrována do globálního hospodářství.

Příklad: Severní Korea jako příklad relativně uzavřené ekonomiky.`},{title:"Úroková sazba",content:`Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a ekonomové.

Hlavní myšlenka: Úroková sazba je cena, kterou platí dlužníci za půjčení peněz, nebo výnos, který získávají věřitelé. Úrokové sazby mají velký vliv na ekonomickou aktivitu, protože ovlivňují spotřebitelskou poptávku a podnikové investice.

Příklad: Změny úrokových sazeb hypoték vlivem rozhodnutí centrální banky.`},{title:"Poptávka po penězích",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Poptávka po penězích označuje množství peněz, které si jednotlivci a firmy přejí držet v hotovosti, místo toho, aby je investovali nebo použili k nákupu zboží a služeb. Poptávka po penězích závisí na úrokových sazbách, inflaci a očekávání ekonomického vývoje.

Příklad: Zvýšení poptávky po hotovosti v době ekonomické nejistoty.`},{title:"Nabídka peněz",content:`Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a ekonomové.

Hlavní myšlenka: Nabídka peněz je množství peněz v oběhu v ekonomice, které je k dispozici pro obchody a transakce. Tento ukazatel je kontrolován centrální bankou prostřednictvím nástrojů monetární politiky, jako jsou úrokové sazby a kvantitativní uvolňování.

Příklad: Kvantitativní uvolňování v době ekonomické krize, kdy centrální banka nakupuje státní dluhopisy.`},{title:"Mezinárodní obchod",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Mezinárodní obchod zahrnuje výměnu zboží a služeb mezi zeměmi. Tento obchod přináší výhody díky specializaci a komparativním výhodám, což vede k efektivnějšímu využití zdrojů a růstu světového blahobytu.

Příklad: Export českých automobilů do zahraničí a import surovin.`},{title:"Devizový kurz",content:`Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a forex obchodníci.

Hlavní myšlenka: Devizový kurz je cena jedné měny vyjádřená v jiné měně. Kurzy měn jsou důležité pro mezinárodní obchod a investice, protože ovlivňují konkurenceschopnost exportérů a náklady importérů.

Příklad: Fluktuace kurzu koruny vůči euru a jeho vliv na český export.`},{title:"Platební bilance",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Platební bilance je přehled všech ekonomických transakcí mezi rezidenty dané země a zbytkem světa za určité období. Zahrnuje obchodní bilanci, bilanci služeb, bilanci výnosů a kapitálové toky.

Příklad: Přebytek obchodní bilance České republiky díky silnému exportu.`},{title:"Ekonomický růst",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Ekonomický růst je dlouhodobé zvyšování produkce zboží a služeb v ekonomice. Růst je měřen změnami reálného HDP a je klíčovým ukazatelem ekonomického rozvoje a zvyšování životní úrovně.

Příklad: Růst české ekonomiky po vstupu do Evropské unie.`},{title:"Ekonomický rozvoj",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Ekonomický rozvoj zahrnuje nejen růst HDP, ale také zlepšování kvality života, vzdělání, zdravotní péče a infrastruktury. Rozvoj je komplexní proces, který zahrnuje sociální, kulturní a environmentální aspekty.

Příklad: Transformace České republiky z centrálně plánované na tržní ekonomiku.`},{title:"Hospodářský cyklus",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Hospodářský cyklus je opakující se kolísání ekonomické aktivity mezi obdobími růstu (expanze) a poklesu (recese). Cyklus zahrnuje čtyři fáze: expanzi, vrchol, recesi a dno, po kterém následuje nová expanze.

Příklad: Globální finanční krize 2008-2009 a následné oživení.`},{title:"Ekonomická integrace",content:`Období: Moderní doba.

Hlavní představitelé: Politici a mezinárodní organizace.

Hlavní myšlenka: Ekonomická integrace je proces, při kterém se země spojují do větších ekonomických celků, aby zvýšily efektivitu obchodu a produkce. Integrace může mít různé formy, od zón volného obchodu až po měnové unie.

Příklad: Evropská unie jako příklad hluboké ekonomické integrace.`},{title:"Globalizace",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Globalizace je proces rostoucí propojenosti světových ekonomik, kultur a společností. Zahrnuje mezinárodní obchod, investice, migraci a šíření technologií, což vede k vytváření globálního trhu a společnosti.

Příklad: Globální dodavatelské řetězce v automobilovém průmyslu.`},{title:"Protekcionismus",content:`Období: Moderní doba.

Hlavní představitelé: Politici a ekonomové.

Hlavní myšlenka: Protekcionismus je hospodářská politika, která omezuje mezinárodní obchod pomocí cel, kvót a dalších bariér. Cílem je chránit domácí průmysl a zaměstnanost, ale může vést k vyšším cenám a nižší efektivitě.

Příklad: Obchodní války mezi USA a Čínou.`},{title:"Volný obchod",content:`Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Volný obchod je hospodářská politika, která odstraňuje bariéry v mezinárodním obchodu. Teorie komparativních výhod ukazuje, že volný obchod vede k efektivnějšímu využití zdrojů a růstu blahobytu všech zúčastněných zemí.

Příklad: Evropský jednotný trh jako příklad volného obchodu.`}],"moderni-historie":[{title:"Moderní dějiny",content:`Období: Od 18. století po současnost.

Hlavní události: Průmyslová revoluce, světové války, studená válka.

Hlavní myšlenka: Moderní dějiny jsou charakterizovány rychlým technologickým pokrokem, globalizací a významnými společenskými změnami.

Příklad: Průmyslová revoluce v 18. a 19. století, která změnila způsob výroby a život společnosti.`},{title:"Světové války",content:`Období: 20. století.

Hlavní události: První světová válka (1914-1918), Druhá světová válka (1939-1945).

Hlavní myšlenka: Světové války měly zásadní vliv na vývoj moderního světa, vedly k vytvoření nového světového řádu a urychlily technologický pokrok.

Příklad: Vznik Spojených národů po druhé světové válce jako pokus o zajištění světového míru.`},{title:"Hitlerův první pokus o moc",content:`Období: 1923

Vysvětlení: Pivní puč - neúspěšný pokus o převrat, za který byl Hitler odsouzen a poslán do vězení.`},{title:"Smrt Vladimira Iljiče Lenina",content:`Období: 21. ledna 1924

Vysvětlení: Lenin zemřel 21. ledna 1924, což vedlo k boji o moc v Sovětském svazu.`},{title:"Nástup Hitlera k moci",content:`Období: 30. ledna 1933

Vysvětlení: Adolf Hitler byl jmenován německým říšským kancléřem prezidentem Paulem von Hindenburgem.`},{title:"Požár Říšského sněmu",content:`Období: 27. února 1933

Vysvětlení: Hitler využil této události k prosazení zákonů omezujících občanské svobody a k potlačení politické opozice, zejména komunistů.`},{title:"Zmocňovací zákon",content:`Období: 23. března 1933

Vysvětlení: Tento zákon umožnil Hitlerově vládě obcházet parlament a vydávat zákony samostatně, což de facto znamenalo konec demokratického systému Výmarské republiky.`},{title:"Hitler neomezeným vůdcem",content:`Období: 2. srpna 1934

Vysvětlení: Po smrti prezidenta Hindenburga Hitler spojil funkce prezidenta a kancléře a stal se neomezeným vůdcem Německa.`},{title:"Mnichovská dohoda",content:`Období: 30. září 1938

Vysvětlení: Mezinárodní smlouva podepsaná mezi Německem, Itálií, Francií a Velkou Británií. Dohoda umožnila nacistickému Německu anektovat pohraniční oblasti Československa (Sudety) bez souhlasu československé vlády.`},{title:"Signatáři Mnichovské dohody",content:`Vysvětlení: Mnichovskou dohodu podepsali:
1. Adolf Hitler (Německo)
2. Benito Mussolini (Itálie)
3. Neville Chamberlain (Velká Británie)
4. Édouard Daladier (Francie)`},{title:"Pochod na Řím",content:`Období: 27. - 29. října 1922

Vysvětlení: Klíčová událost, během níž fašisté vedení Benitem Mussolinim přinutili italského krále Viktora Emanuela III., aby Mussoliniho jmenoval předsedou vlády.`},{title:"Stalinův nástup k moci",content:`Období: 1922-1953

Vysvětlení: Stalin se stal generálním tajemníkem KSSS v roce 1922, plnou kontrolu získal v roce 1929 a udržel si ji až do své smrti v roce 1953.`},{title:"Bitva u Jutska",content:`Období: 31. května - 1. června 1916

Vysvětlení: Největší námořní bitva války mezi britským a německým námořnictvem.`},{title:"Bitva u Verdunu",content:`Období: 21. února - 18. prosince 1916

Vysvětlení: Nejdelší bitva války, kde Německo usilovalo o vyčerpání francouzských sil (tzv. strategie "vykrvácení"). Francie nakonec Verdun uhájila.`},{title:"Korejská válka",content:`Období: 1950-1953

Vysvětlení: Vojenský konflikt mezi Severní Koreou, podporovanou Sovětským svazem a Čínou, a Jižní Koreou, podporovanou Spojenými státy a dalšími členy OSN.`},{title:"Sovětská invaze do Afghánistánu",content:`Období: 1979-1989

Vysvětlení: Sovětská invaze do Afghánistánu byla vojenská operace, kdy SSSR poslal své vojenské jednotky na podporu komunistického režimu v Afghánistánu.`},{title:"Válka ve Vietnamu",content:`Období: 1955-1975

Vysvětlení: Ozbrojený konflikt mezi komunistickým Severním Vietnamem a nekomunistickým Jižním Vietnamem, podporovaným Spojenými státy a jejich spojenci.`},{title:"Pád Berlínské zdi",content:`Období: 1989

Vysvětlení: Symbolizoval konec studené války a rozpad východního bloku. Zed byla fyzickou a ideologickou bariérou mezi komunistickým východním Berlínem a kapitalistickým západním Berlínem.`},{title:"Válka v Perském zálivu",content:`Období: 1990-1991

Vysvětlení: Konflikt začal, když Irák pod vedením Saddáma Husajna napadl Kuvajt. Koalice vedená Spojenými státy zahájila vojenskou intervenci, která vedla k porážce Iráku a osvobození Kuvajtu.`},{title:"Kubánská raketová krize",content:`Období: 1962

Vysvětlení: Kuba přijala sovětské rakety na své území, což vedlo k dramatickému napětí mezi Spojenými státy a Sovětským svazem.`},{title:"Sovětská revoluce",content:`Období: 1917

Vysvětlení: Revoluce v Rusku, která vyústila v pád carismu a vznik komunistické vlády. Sovětská revoluce znamenala konec ruské monarchie a začátek vlády bolševiků vedených Vladimirem Leninem.`},{title:"Vietnamizace",content:`Období: 1969-1973

Vysvětlení: Politický proces, během kterého USA začaly předávat odpovědnost za válku ve Vietnamu na jiho-vietnamskou armádu, s cílem postupně stáhnout americké síly z tohoto konfliktu.`},{title:"Korean Armistice Agreement",content:`Období: 1953

Vysvětlení: Dohoda o příměří, která ukončila aktivní boje v Korejské válce. Nezaručila však oficiální mír, takže Korejský poloostrov zůstal rozdělený na dva státy.`},{title:"Politické strany v Československu po 2. světové válce",content:`Vysvětlení: Po druhé světové válce v Československu dominovaly čtyři hlavní politické strany:
1. KSČ (Komunistická strana Československa)
2. ČSNS (Československá strana národně socialistická)
3. ČSL (Československá strana lidová)
4. ČSSD (Československá sociálně demokratická strana)`},{title:"Únor 1948 v Československu",content:`Období: 25. února 1948

Vysvětlení: Komunistický převrat v Československu, který vedl k nastolení totalitního režimu. KSČ převzala moc a začala období komunistické diktatury.`},{title:"Pražské jaro",content:`Období: 1968

Vysvětlení: Období politického uvolnění v Československu, které bylo ukončeno invazí vojsk Varšavské smlouvy v srpnu 1968.`},{title:"Sametová revoluce",content:`Období: 17. listopadu - 29. prosince 1989

Vysvětlení: Neozbrojená revoluce, která vedla k pádu komunistického režimu v Československu.`},{title:"Rozdělení Československa",content:`Období: 1. ledna 1993

Vysvětlení: Československo se rozdělilo na dva samostatné státy: Českou republiku a Slovensko.`},{title:"Vstup České republiky do EU",content:`Období: 1. května 2004

Vysvětlení: Česká republika se stala členským státem Evropské unie spolu s dalšími devíti zeměmi.`},{title:"Vstup České republiky do NATO",content:`Období: 12. března 1999

Vysvětlení: Česká republika se stala členským státem Severoatlantické aliance.`},{title:"Vznik České republiky",content:`Období: 1. ledna 1993

Vysvětlení: Po rozdělení Československa vznikla samostatná Česká republika jako nástupnický stát.`},{title:"Vznik Slovenské republiky",content:`Období: 1. ledna 1993

Vysvětlení: Po rozdělení Československa vznikla samostatná Slovenská republika jako nástupnický stát.`},{title:"Vznik Československa",content:`Období: 28. října 1918

Vysvětlení: Vznik samostatného československého státu po rozpadu Rakousko-Uherska.`},{title:"Vznik Rakouska-Uherska",content:`Období: 1867

Vysvětlení: Rakousko-Uhersko vzniklo jako dualistická monarchie po rakousko-uherském vyrovnání.`},{title:"Vznik Rakouského císařství",content:`Období: 1804

Vysvětlení: František II. Habsburský vyhlásil Rakouské císařství jako reakci na Napoleonovu korunovaci.`},{title:"Vznik Svaté říše římské",content:`Období: 962

Vysvětlení: Ota I. Veliký byl korunován císařem Svaté říše římské.`},{title:"Vznik Svaté říše římské národa německého",content:`Období: 1512

Vysvětlení: Oficiální název Svaté říše římské byl změněn na Svatou říši římskou národa německého.`},{title:"Vznik Svaté aliance",content:`Období: 1815

Vysvětlení: Vznik protinapoleonské koalice mezi Rakouskem, Pruskem a Ruskem.`},{title:"Vznik Společnosti národů",content:`Období: 1920

Vysvětlení: Vznik mezinárodní organizace, která měla zajistit mír a spolupráci mezi státy.`},{title:"Vznik OSN",content:`Období: 1945

Vysvětlení: Vznik Organizace spojených národů jako nástupkyně Společnosti národů.`},{title:"Vznik NATO",content:`Období: 1949

Vysvětlení: Vznik Severoatlantické aliance jako vojensko-politické organizace západních států.`},{title:"Vznik Varšavské smlouvy",content:`Období: 1955

Vysvětlení: Vznik vojensko-politické organizace východního bloku jako protiváha NATO.`},{title:"Vznik Evropského hospodářského společenství",content:`Období: 1957

Vysvětlení: Vznik předchůdce Evropské unie, který měl zajistit hospodářskou spolupráci mezi evropskými státy.`}],"evropska-integrace":[{title:"Historie Evropské unie",content:`Období: Po druhé světové válce

Vysvětlení: Evropská unie (EU) vznikla z touhy po míru, stabilitě a hospodářské spolupráci v Evropě po druhé světové válce. Prvním krokem bylo vytvoření Evropského společenství uhlí a oceli (ESUO) v roce 1951, které zahrnovalo šest zakládajících států: Belgii, Francii, Itálii, Lucembursko, Nizozemsko a Německo.`},{title:"Římská smlouva",content:`Období: 1957

Vysvětlení: Římská smlouva byla podepsána v roce 1957 a vytvořila Evropské hospodářské společenství (EHS) a Evropské atomové společenství (EURATOM). Tato smlouva položila základy pro společný trh a postupnou integraci evropských ekonomik.`},{title:"První rozšíření Evropské unie",content:`Období: 1973

Vysvětlení: V roce 1973 přistoupily k EHS tři nové státy: Dánsko, Irsko a Spojené království. Toto rozšíření bylo důležité pro rozšíření Evropské spolupráce a upevnění politické a hospodářské stability.`},{title:"Jednotný evropský akt",content:`Období: 1986

Vysvětlení: Jednotný evropský akt (JEA) z roku 1986 byl první revizí Římské smlouvy a měl za cíl vytvořit jednotný vnitřní trh. Zahrnoval také politické cíle, jako je posílení spolupráce v oblasti zahraniční politiky.`},{title:"Pád Berlínské zdi a nový směr pro EU",content:`Období: 1989-1990

Vysvětlení: Pád Berlínské zdi v roce 1989 a konec studené války otevřely nové možnosti pro expanze EU na východ. Byly zahájeny přípravy na rozšíření EU o státy střední a východní Evropy.`},{title:"Maastrichtská smlouva",content:`Období: 1992

Vysvětlení: Maastrichtská smlouva z roku 1992 ustanovila Evropskou unii a stanovila základní principy pro její politickou a hospodářskou integraci. Zavedla euro jako společnou měnu a položila základy pro společnou zahraniční a bezpečnostní politiku.`},{title:"První vlna rozšíření po pádu železné opony",content:`Období: 2004

Vysvětlení: V roce 2004 se Evropská unie rozšířila o 10 nových členských států, včetně zemí bývalého východního bloku, jako jsou Polsko, Maďarsko, Česká republika, Slovensko, Slovinsko, Estonsko, Litva, Lotyšsko, Kypr a Malta. Tento krok znamenal významnou změnu v geopolitické mapě Evropy.`},{title:"Lisabonská smlouva",content:`Období: 2009

Vysvětlení: Lisabonská smlouva, která vstoupila v platnost v roce 2009, posílila fungování EU tím, že zjednodušila rozhodovací procesy a poskytla větší pravomoci Evropskému parlamentu. Vytvořila také novou funkci předsedy Evropské rady a zavedla institut evropského občanství.`},{title:"Druhá vlna rozšíření Evropské unie",content:`Období: 1973-1986

Vysvětlení: V roce 1986 přistoupily Španělsko a Portugalsko. Tento krok měl velký význam pro stabilizaci a demokratizaci jižní Evropy po pádu diktatur.`},{title:"Třetí vlna rozšíření EU",content:`Období: 1995

Vysvětlení: V roce 1995 přistoupily Rakousko, Finsko a Švédsko. Tato vlna rozšíření byla zaměřena na země, které byly již vyspělé a připravené na integraci do EU.`},{title:"Kypr a Malta se stávají členy EU",content:`Období: 2004

Vysvětlení: Kypr a Malta se staly součástí Evropské unie v roce 2004, což rozšířilo EU na Středozemí. Tato expanze byla součástí širšího procesu integrace středoevropských a východoevropských států.`},{title:"Konsolidace měnové unie",content:`Období: 1999-2002

Vysvětlení: V roce 1999 byla zahájena měnová unie, když byla eurozóna vytvořena pro 11 států, které přijaly euro. V roce 2002 byly bankovky a mince euro zavedeny do oběhu.`},{title:"Balkánské rozšíření EU",content:`Období: 2007

Vysvětlení: V roce 2007 přistoupily Bulharsko a Rumunsko, což znamenalo pokračování rozšíření EU na Balkán. Tento krok měl za cíl stabilizovat a demokratizovat region po dlouhém období konfliktů.`},{title:"Vstup Chorvatska do EU",content:`Období: 2013

Vysvětlení: Chorvatsko se stalo 28. členem EU v roce 2013, což znamenalo poslední vlnu rozšíření před tím, než došlo k britskému referendu o vystoupení z EU (Brexit).`},{title:"Brexit",content:`Období: 2016-2020

Vysvětlení: V roce 2016 se konalo referendum ve Spojeném království, ve kterém se většina obyvatel rozhodla pro odchod z EU. Tento proces, známý jako Brexit, skončil formálním vystoupením Spojeného království z EU v roce 2020.`},{title:"Evropský hospodářský prostor (EHP)",content:`Období: 1994

Vysvětlení: Evropský hospodářský prostor (EHP) vznikl v roce 1994 jako způsob, jak umožnit evropským státům mimo EU přístup na jednotný trh. Zahrnoval země jako Norsko, Island a Lichtenštejnsko.`},{title:"Vznik eurozóny",content:`Období: 1999

Vysvětlení: V roce 1999 byla zřízena eurozóna, která začala fungovat s 11 zeměmi, které přijaly euro jako svou měnu. Tento krok byl klíčovým momentem pro integraci ekonomických politik v rámci EU.`},{title:"Smlouva o fungování Evropské unie",content:`Období: 1957

Vysvětlení: Smlouva o fungování Evropské unie (SFEU), původně známá jako Římská smlouva, byla jedním ze základních dokumentů, který vytvořil Evropské hospodářské společenství a položil základy pro fungování vnitřního trhu EU.`},{title:"Vstup Švédska, Finska a Rakouska do EU",content:`Období: 1995

Vysvětlení: V roce 1995 se Švédsko, Finsko a Rakousko připojily k EU, což rozšířilo unii o tři severské a středoevropské země.`},{title:"Úmluva o přistoupení Španělska a Portugalska",content:`Období: 1986

Vysvětlení: Španělsko a Portugalsko se staly členy EU v roce 1986, čímž došlo k rozšíření o dvě jihoevropské země po skončení jejich diktatur.`},{title:"Integrace po pádu Berlínské zdi",content:`Období: 1989-1990

Vysvětlení: Pád Berlínské zdi a zánik Sovětského svazu znamenaly možnost integrace bývalých komunistických států do EU. Tento proces zahrnoval státy střední a východní Evropy.`},{title:"Evropská unie a její expanze do střední Evropy",content:`Období: 2004

Vysvětlení: V roce 2004 EU přistoupily nové členské státy z bývalého východního bloku, čímž se posílila stabilita a demokracie v regionu. Tento krok znamenal i nové geopolitické uspořádání v Evropě.`},{title:"Vstup Rumunska a Bulharska do EU",content:`Období: 2007

Vysvětlení: V roce 2007 přistoupily k EU Rumunsko a Bulharsko, což posílilo regionální stabilitu a demokratické procesy v jihovýchodní Evropě.`},{title:"Vstup Chorvatska do EU",content:`Období: 2013

Vysvětlení: Chorvatsko se stalo členem EU v roce 2013, což bylo poslední rozšíření unie v 21. století před krizí související s odchodem Spojeného království.`},{title:"Evropský parlament",content:"Vysvětlení: Evropský parlament je jedním z hlavních orgánů Evropské unie, který reprezentuje občany EU. Je složen z poslanců volených každých pět let ve všech členských státech. Parlament schvaluje legislativní návrhy, rozpočet EU a má významnou roli při rozhodování o mezinárodních dohodách a politice Unie. Poslanci jsou rozděleni podle politických frakcí a hlasují o důležitých otázkách týkajících se práv a politiky EU."},{title:"Evropská komise",content:"Vysvětlení: Evropská komise je výkonným orgánem EU, který zajišťuje implementaci politik a rozhodnutí přijatých EU. Je složena z komisařů, kteří jsou jmenováni členskými státy a odpovídají za jednotlivé oblasti politiky, jako jsou obchod, životní prostředí nebo konkurence. Komise má právo navrhovat legislativu, což je klíčová součást její role v evropském legislativním procesu."},{title:"Legislativní proces v EU",content:"Vysvětlení: Legislativní proces v Evropské unii začíná obvykle návrhem Evropské komise. Tento návrh je následně projednáván Evropským parlamentem a Radou Evropské unie, která představuje vlády členských států. Pro schválení legislativy je potřebná součinnost Parlamentu a Rady. Parlament může navrhnout změny k textu, který byl předložen, a rozhodující rozhodnutí jsou přijímána na základě většiny hlasů. Proces může zahrnovat několik čtení a vyjednávání, než se dosáhne konečné dohody."},{title:"Rada Evropské unie",content:"Vysvětlení: Rada Evropské unie, známá také jako Rada ministrů, je složena z ministrů členských států a je spolu s Evropským parlamentem klíčovým legislativním orgánem EU. Rada se schází na různých úrovních podle zaměření (např. ministři financí, ministři zahraničních věcí) a její hlavní úkoly zahrnují schvalování legislativy, vyjednávání o rozpočtu EU a koordinaci politiky mezi členskými státy."},{title:"Právní základ legislativy EU",content:"Vysvětlení: Právní základ legislativy EU se nachází v zakládajících smlouvách, především ve Smlouvě o Evropské unii a Smlouvě o fungování Evropské unie. Tyto smlouvy stanovují rámec pro fungování institucí EU, včetně podmínek pro tvorbu nových právních předpisů, které mají platnost v členských státech. Legislativní aktivity EU vycházejí z těchto základních právních dokumentů."},{title:"Rozhodovací proces v Evropské komisi",content:"Vysvětlení: Evropská komise rozhoduje na základě kolektivní odpovědnosti, což znamená, že komisaři jako celek nesou odpovědnost za její rozhodnutí. Když Komise připravuje návrhy legislativních aktů, může také konzultovat odborníky z členských států nebo veřejnost. Většina rozhodnutí, zejména legislativních, musí být schválena kolegiálně, což zajišťuje jednotný přístup a zohledňuje všechny členské státy."},{title:"Role Evropské komise při kontrole implementace politiky EU",content:"Vysvětlení: Evropská komise má klíčovou roli při sledování, zda členské státy plní závazky podle právních předpisů EU. Komise má pravomoc zahájit řízení proti členským státům, pokud poruší pravidla EU, a může je podrobit soudnímu řízení u Soudního dvora EU. Tento dohled zajišťuje, že pravidla EU jsou aplikována rovnoměrně ve všech členských státech."},{title:"Základní rozhodovací proces v Evropském parlamentu",content:"Vysvětlení: Evropský parlament rozhoduje o většině legislativních návrhů, které mu předloží Evropská komise, prostřednictvím několika čtení a hlasování. V průběhu procesu může Parlament navrhovat změny, které musí být dohodnuty s Radou Evropské unie. Pokud obě instituce dospějí k dohodě, legislativní akt může být přijat. Pokud ne, návrh je obvykle vrácen ke zpracování."},{title:"Přímé a nepřímé hlasování v Evropském parlamentu",content:"Vysvětlení: Evropský parlament používá různé metody hlasování v závislosti na povaze rozhodování. V některých případech se hlasuje přímo, což znamená, že každý poslanec hlasuje individuálně. V jiných případech, zejména u technických nebo procedurálních rozhodnutí, může být použito nepřímé hlasování, kde hlasování probíhá na základě frakcí nebo zástupců výborů."},{title:"Výbor pro právní záležitosti Evropského parlamentu",content:"Vysvětlení: Tento výbor se zaměřuje na právní aspekty legislativních návrhů v Evropském parlamentu. Je odpovědný za hodnocení právní kvality návrhů a jejich souladu s pravidly EU. Výbor pro právní záležitosti může navrhovat úpravy, které zajišťují, že všechny legislativní akty budou v souladu s právem EU a mezinárodními závazky."},{title:"Legislativní proces v Evropském parlamentu",content:"Vysvětlení: Legislativní proces v Evropském parlamentu je založen na principu spolurozhodování mezi Parlamentem a Radou Evropské unie. Tento proces zahrnuje několik čtení, kdy Parlament a Rada mohou vznést návrhy na změny legislativních textů. Pokud se strany dohodnou, návrh je přijat. Pokud ne, návrh může být vrácen k dalšímu projednání."},{title:"Evropská rada a její role v legislativním procesu",content:"Vysvětlení: Evropská rada je složena z hlav států a předsedů vlád členských států. Ačkoli Evropská rada nemá přímou legislativní pravomoc, její rozhodnutí a závěry mohou mít zásadní vliv na směr politiky EU. Evropská rada stanoví hlavní politické cíle a priority, které pak ovlivňují práci Evropské komise a Evropského parlamentu."},{title:"Rozdíl mezi Evropskou komisí a Evropskou radou",content:"Vysvětlení: Evropská komise je výkonným orgánem EU, který navrhuje legislativní opatření a implementuje rozhodnutí EU. Evropská rada je naopak orgánem, který definuje obecné politické směřování a priority EU, ale není přímo zapojena do denní legislativní práce."},{title:"Právní akty Evropské unie",content:"Vysvětlení: Právní akty EU jsou rozděleny na nařízení, směrnice a rozhodnutí. Nařízení jsou závazná pro všechny členské státy a přímo aplikována v národních právních systémech. Směrnice vyžadují, aby členské státy dosáhly určitých cílů, ale umožňují jim vybrat způsob, jak to provést. Rozhodnutí jsou závazná pro jednotlivé příjemce (státy nebo firmy), kterým jsou adresována."},{title:"Evropský soudní dvůr a jeho role",content:"Vysvětlení: Evropský soudní dvůr zajišťuje, že právo EU je správně interpretováno a aplikováno ve všech členských státech. Může rozhodovat o žalobách podaných členskými státy proti Komisi, o sporech mezi institucemi EU a jednotlivými členskými státy nebo jednotlivci, a zajišťuje, že evropské právo má přednost před národními právními předpisy."},{title:"Význam subsidiarity v legislativním procesu EU",content:"Vysvětlení: Princip subsidiarity znamená, že EU by měla jednat pouze v oblastech, kde jsou cíle předpisu lépe dosaženy na úrovni Unie než na úrovni členských států. Tento princip chrání národní suverenitu a zajišťuje, že EU nezasahuje do oblastí, které mohou být lépe řešeny na národní úrovni."},{title:"Legislativa v oblasti životního prostředí",content:"Vysvětlení: Evropská unie má rozsáhlou legislativu zaměřenou na ochranu životního prostředí, která zahrnuje normy pro kvalitu vzduchu, vody, odpadového hospodářství a ochrany biodiverzity. Legislativa v této oblasti se vyvíjí v reakci na environmentální výzvy a má za cíl harmonizovat ekologické standardy mezi členskými státy."},{title:"Vliv veřejného mínění na legislativní proces EU",content:"Vysvětlení: Veřejné mínění má vliv na legislativní proces v EU, protože Evropský parlament je přímo volený občany členských států. Politické strany se snaží brát v úvahu názory voličů, což může ovlivnit jejich hlasování o legislativních návrzích. Veřejná diskuse a konzultace mohou také pomoci formovat politiku a přitáhnout pozornost k důležitým tématům."},{title:"Které země patří do eurozóny?",content:"Vysvětlení: Eurozóna je skupina evropských zemí, které používají euro jako svou oficiální měnu. V současnosti do eurozóny patří 20 zemí: Belgie, Estonsko, Irsko, Řecko, Španělsko, Francie, Itálie, Kypr, Lotyšsko, Litva, Lucembursko, Malta, Nizozemsko, Portugalsko, Slovensko, Slovinsko, Finsko, Německo, Rakousko a Belgii. Země, které nejsou v eurozóně, mají svou vlastní měnu nebo zůstávají v přechodné fázi přijetí eura."},{title:"Rozšíření eurozóny",content:"Vysvětlení: Vzhledem k tomu, že eurozóna je součástí širšího ekonomického a měnového společenství Evropské unie, mohou členské státy EU přistupovat k euru, pokud splní ekonomické podmínky stanovené Maastrichtskými kritérii. Tyto kritéria zahrnují stabilitu cen, veřejné finance a směnný kurz. Po splnění těchto podmínek mohou země požádat o přijetí eura."},{title:"Které země patří do Schengenské zóny?",content:"Vysvětlení: Schengenská zóna je prostor, ve kterém bylo zrušeno hraniční kontroly mezi většinou evropských států. Mezi země, které patří do Schengenu, patří všechny členské státy EU kromě Irska, Rumunska, Bulharska, Chorvatska a Kypru. Dále do Schengenu patří i některé země, které nejsou součástí EU, jako například Norsko, Island, Švýcarsko a Lichtenštejnsko."},{title:"Rozšíření Schengenské zóny",content:"Vysvětlení: Schengenská zóna se postupně rozšiřovala a zahrnovala jak členské státy EU, tak i některé země mimo ni. Důležité pro rozšíření je splnění bezpečnostních, právních a administrativních podmínek, které umožní zrušení hraničních kontrol. Některé země, jako například Rumunsko a Bulharsko, čekají na přistoupení do Schengenu, protože ještě nesplnily všechny podmínky."},{title:"Rozdíl mezi eurozónou a Schengenem",content:"Vysvětlení: Eurozóna a Schengen jsou dva různé procesy v rámci Evropské unie. Eurozóna je zaměřena na jednotnou měnu, euro, a jejími členy jsou pouze země, které používají euro. Schengen se týká zrušení hraničních kontrol mezi státy a je zaměřen na volný pohyb osob, což se netýká měny. Některé země jsou členy Schengenu, ale ne eurozóny, a naopak."},{title:"Země EU mimo Schengenskou zónu",content:"Vysvětlení: Některé členské státy Evropské unie nejsou součástí Schengenské zóny. Patří sem Irsko, Rumunsko, Bulharsko, Chorvatsko a Kypr. Tyto země buď nemají zavedený Schengenský prostor, nebo stále pracují na splnění podmínek pro připojení k této zóně."},{title:"Země mimo EU, které patří do Schengenu",content:"Vysvětlení: Některé země mimo Evropskou unii jsou součástí Schengenské zóny. Patří sem Norsko, Island, Švýcarsko a Lichtenštejnsko. Tyto země souhlasily se zrušením hraničních kontrol a koordinováním svých vízových politik, i když nejsou členy EU."},{title:"Kdy došlo k rozšíření Schengenské zóny na východní Evropu?",content:"Vysvětlení: Schengenská zóna se začala rozšiřovat na východní Evropu po rozšíření EU v roce 2004. Nové členské státy, které vstoupily do EU, začaly postupně splňovat podmínky pro vstup do Schengenu. K tomu došlo v roce 2007 a 2008, kdy země jako Česká republika, Polsko, Maďarsko a další bývalé komunistické státy střední a východní Evropy přistoupily k Schengenu."},{title:"Země, které nepatří do Schengenu",content:"Vysvětlení: Některé členské státy EU nejsou součástí Schengenské zóny, například Irsko, Rumunsko, Bulharsko, Chorvatsko a Kypr. Tyto země si zachovávají vlastní hraniční kontroly a nevstoupily do Schengenu kvůli různým právním, bezpečnostním nebo administrativním důvodům."},{title:"Význam Schengenské zóny pro cestování",content:"Vysvětlení: Schengenská zóna umožňuje volný pohyb osob mezi členskými státy, což znamená, že lidé mohou cestovat bez nutnosti procházet hraničními kontrolami. To usnadňuje obchod, turismus a pracovní mobilitu mezi státy. Schengen také zahrnuje spolupráci v oblasti bezpečnosti, jako je výměna informací o kriminalitě a migraci."},{title:"Vztah mezi Schengenem a vízovou politikou EU",content:"Vysvětlení: V rámci Schengenské zóny platí jednotná vízová politika. Osoba, která získá vízum pro jeden členský stát, má právo cestovat i do dalších států Schengenské zóny. Toto usnadňuje cestování pro turisty, obchodníky a pracovníky, ale zároveň zajišťuje bezpečnostní kontrolu a ochranu hranic EU."},{title:"Země, které mají euro, ale nejsou v Schengenu",content:"Vysvětlení: Existují země, které používají euro, ale nejsou členy Schengenské zóny. Mezi ně patří například Kypr, který používá euro jako svou měnu, ale stále nepatří do Schengenu. Tento rozdíl v členství ukazuje, že přijetí eura a připojení k Schengenské zóně jsou oddělené procesy."},{title:"Přístupové podmínky pro Schengen",content:"Vysvětlení: Země, které chtějí přistoupit k Schengenské zóně, musí splnit určité podmínky, jako je zajištění bezpečných vnějších hranic, fungující migrační politika, spolupráce v oblasti justice a policejní spolupráce. Tyto podmínky jsou hodnoceny před tím, než může stát být přijat do Schengenu."},{title:"Schengen a bezpečnostní spolupráce",content:"Vysvětlení: Schengenská zóna zahrnuje spolupráci v oblasti bezpečnosti, což zahrnuje sdílení informací o trestné činnosti, podezřelých osobách a migrantech. Tato spolupráce pomáhá zajišťovat bezpečnost v Evropě, protože umožňuje lepší monitorování a kontrolu pohybu osob na vnějších hranicích EU."},{title:"Vliv Schengenu na obchod",content:"Vysvětlení: Schengenská zóna podporuje obchod v Evropě tím, že usnadňuje pohyb zboží a osob mezi členskými státy. Zrušení hraničních kontrol znamená rychlejší a efektivnější transport a logistiku, což přispívá k ekonomické integraci a snižuje náklady na obchodní operace."},{title:"Schengen a migrace",content:"Vysvětlení: Schengenská zóna zahrnuje politiky pro kontrolu migrace, včetně pravidel pro udělování víz a ochrany vnějších hranic. Cílem je umožnit volný pohyb občanům členských států a zajištění bezpečnosti tím, že se kontrolují nelegální migranti, kteří se pokoušejí vstoupit do EU."},{title:"Vytvoření Schengenské zóny",content:"Vysvětlení: Schengenská zóna byla původně vytvořena v roce 1985 jako dohoda mezi pěti zeměmi (Belgie, Francie, Lucembursko, Nizozemsko a Německo), které se rozhodly zrušit hraniční kontroly. Postupně se rozšiřovala na další evropské země a dnes zahrnuje většinu států EU, stejně jako některé země mimo EU."},{title:"Přistupování zemí k eurozóně",content:"Vysvětlení: Země přistupují k eurozóně, když splní ekonomické a měnové podmínky stanovené Maastrichtskými kritérii, která zahrnují stabilitu cen, veřejné finance a směnný kurz. Jakmile jsou tyto podmínky splněny, mohou se země rozhodnout o přijetí eura jako své oficiální měny."}]}},Cx=()=>{};var vk={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=function(n){const e=[];let t=0;for(let o=0;o<n.length;o++){let s=n.charCodeAt(o);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++o)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ix=function(n){const e=[];let t=0,o=0;for(;t<n.length;){const s=n[t++];if(s<128)e[o++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[o++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],h=n[t++],m=((s&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[o++]=String.fromCharCode(55296+(m>>10)),e[o++]=String.fromCharCode(56320+(m&1023))}else{const a=n[t++],u=n[t++];e[o++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},g_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,h=u?n[s+1]:0,m=s+2<n.length,f=m?n[s+2]:0,g=a>>2,b=(a&3)<<4|h>>4;let z=(h&15)<<2|f>>6,P=f&63;m||(P=64,u||(z=64)),o.push(t[g],t[b],t[z],t[P])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(y_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ix(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const b=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||h==null||f==null||b==null)throw new Ax;const z=a<<2|h>>4;if(o.push(z),f!==64){const P=h<<4&240|f>>2;if(o.push(P),b!==64){const N=f<<6&192|b;o.push(N)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ax extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rx=function(n){const e=y_(n);return g_.encodeByteArray(e,!0)},Nc=function(n){return Rx(n).replace(/\./g,"")},k_=function(n){try{return g_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=()=>Vx().__FIREBASE_DEFAULTS__,Dx=()=>{if(typeof process>"u"||typeof vk>"u")return;const n=vk.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ox=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&k_(n[1]);return e&&JSON.parse(e)},id=()=>{try{return Cx()||Nx()||Dx()||Ox()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},b_=n=>{var e,t;return(t=(e=id())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mx=n=>{const e=b_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),o]:[e.substring(0,t),o]},__=()=>{var n;return(n=id())===null||n===void 0?void 0:n.config},w_=n=>{var e;return(e=id())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,o)=>{t?this.reject(t):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,o))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},o=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nc(JSON.stringify(t)),Nc(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ux(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function Hx(){var n;const e=(n=id())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $x(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wx(){const n=Zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gx(){return!Hx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qx(){try{return typeof indexedDB=="object"}catch{return!1}}function Jx(){return new Promise((n,e)=>{try{let t=!0;const o="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(o);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(o),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx="FirebaseError";class eo extends Error{constructor(e,t,o){super(t),this.code=e,this.customData=o,this.name=Qx,Object.setPrototypeOf(this,eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ml.prototype.create)}}class Ml{constructor(e,t,o){this.service=e,this.serviceName=t,this.errors=o}create(e,...t){const o=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?Zx(a,o):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new eo(s,h,o)}}function Zx(n,e){return n.replace(Xx,(t,o)=>{const s=e[o];return s!=null?String(s):`<${o}?>`})}const Xx=/\{\$([^}]+)}/g;function Yx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ci(n,e){if(n===e)return!0;const t=Object.keys(n),o=Object.keys(e);for(const s of t){if(!o.includes(s))return!1;const a=n[s],u=e[s];if(yk(a)&&yk(u)){if(!Ci(a,u))return!1}else if(a!==u)return!1}for(const s of o)if(!t.includes(s))return!1;return!0}function yk(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){const e=[];for(const[t,o]of Object.entries(n))Array.isArray(o)?o.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function eP(n,e){const t=new tP(n,e);return t.subscribe.bind(t)}class tP{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,o){let s;if(e===void 0&&t===void 0&&o===void 0)throw new Error("Missing Observer.");nP(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:o},s.next===void 0&&(s.next=cm),s.error===void 0&&(s.error=cm),s.complete===void 0&&(s.complete=cm);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nP(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){return n&&n._delegate?n._delegate:n}class Ii{constructor(e,t,o){this.name=e,this.instanceFactory=t,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const o=new Lx;if(this.instancesDeferred.set(t,o),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&o.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iP(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[t,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});o.resolve(a)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:o,options:t});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);o===h&&u.resolve(s)}return s}onInit(e,t){var o;const s=this.normalizeInstanceIdentifier(t),a=(o=this.onInitCallbacks.get(s))!==null&&o!==void 0?o:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const o=this.onInitCallbacks.get(t);if(o)for(const s of o)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:oP(e),options:t}),this.instances.set(e,o),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oP(n){return n===wi?void 0:n}function iP(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const aP={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},lP=Ne.INFO,uP={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},cP=(n,e,...t)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),s=uP[e];if(s)console[s](`[${o}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bp{constructor(e){this.name=e,this._logLevel=lP,this._logHandler=cP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const dP=(n,e)=>e.some(t=>n instanceof t);let gk,kk;function hP(){return gk||(gk=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mP(){return kk||(kk=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z_=new WeakMap,Fm=new WeakMap,j_=new WeakMap,dm=new WeakMap,Kp=new WeakMap;function pP(n){const e=new Promise((t,o)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Ro(n.result)),s()},u=()=>{o(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&z_.set(t,n)}).catch(()=>{}),Kp.set(e,n),e}function fP(n){if(Fm.has(n))return;const e=new Promise((t,o)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{o(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Fm.set(n,e)}let Um={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||j_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ro(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vP(n){Um=n(Um)}function yP(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const o=n.call(hm(this),e,...t);return j_.set(o,e.sort?e.sort():[e]),Ro(o)}:mP().includes(n)?function(...e){return n.apply(hm(this),e),Ro(z_.get(this))}:function(...e){return Ro(n.apply(hm(this),e))}}function gP(n){return typeof n=="function"?yP(n):(n instanceof IDBTransaction&&fP(n),dP(n,hP())?new Proxy(n,Um):n)}function Ro(n){if(n instanceof IDBRequest)return pP(n);if(dm.has(n))return dm.get(n);const e=gP(n);return e!==n&&(dm.set(n,e),Kp.set(e,n)),e}const hm=n=>Kp.get(n);function kP(n,e,{blocked:t,upgrade:o,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),h=Ro(u);return o&&u.addEventListener("upgradeneeded",m=>{o(Ro(u.result),m.oldVersion,m.newVersion,Ro(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),h.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const bP=["get","getKey","getAll","getAllKeys","count"],_P=["put","add","delete","clear"],mm=new Map;function bk(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mm.get(e))return mm.get(e);const t=e.replace(/FromIndex$/,""),o=e!==t,s=_P.includes(t);if(!(t in(o?IDBIndex:IDBObjectStore).prototype)||!(s||bP.includes(t)))return;const a=async function(u,...h){const m=this.transaction(u,s?"readwrite":"readonly");let f=m.store;return o&&(f=f.index(h.shift())),(await Promise.all([f[t](...h),s&&m.done]))[0]};return mm.set(e,a),a}vP(n=>({...n,get:(e,t,o)=>bk(e,t)||n.get(e,t,o),has:(e,t)=>!!bk(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zP(t)){const o=t.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(t=>t).join(" ")}}function zP(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hm="@firebase/app",_k="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Bp("@firebase/app"),jP="@firebase/app-compat",EP="@firebase/analytics-compat",SP="@firebase/analytics",TP="@firebase/app-check-compat",xP="@firebase/app-check",PP="@firebase/auth",CP="@firebase/auth-compat",IP="@firebase/database",AP="@firebase/data-connect",RP="@firebase/database-compat",VP="@firebase/functions",NP="@firebase/functions-compat",DP="@firebase/installations",OP="@firebase/installations-compat",MP="@firebase/messaging",LP="@firebase/messaging-compat",FP="@firebase/performance",UP="@firebase/performance-compat",HP="@firebase/remote-config",BP="@firebase/remote-config-compat",KP="@firebase/storage",$P="@firebase/storage-compat",WP="@firebase/firestore",GP="@firebase/vertexai",qP="@firebase/firestore-compat",JP="firebase",QP="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="[DEFAULT]",ZP={[Hm]:"fire-core",[jP]:"fire-core-compat",[SP]:"fire-analytics",[EP]:"fire-analytics-compat",[xP]:"fire-app-check",[TP]:"fire-app-check-compat",[PP]:"fire-auth",[CP]:"fire-auth-compat",[IP]:"fire-rtdb",[AP]:"fire-data-connect",[RP]:"fire-rtdb-compat",[VP]:"fire-fn",[NP]:"fire-fn-compat",[DP]:"fire-iid",[OP]:"fire-iid-compat",[MP]:"fire-fcm",[LP]:"fire-fcm-compat",[FP]:"fire-perf",[UP]:"fire-perf-compat",[HP]:"fire-rc",[BP]:"fire-rc-compat",[KP]:"fire-gcs",[$P]:"fire-gcs-compat",[WP]:"fire-fst",[qP]:"fire-fst-compat",[GP]:"fire-vertex","fire-js":"fire-js",[JP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new Map,XP=new Map,Km=new Map;function wk(n,e){try{n.container.addComponent(e)}catch(t){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ws(n){const e=n.name;if(Km.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;Km.set(e,n);for(const t of Dc.values())wk(t,n);for(const t of XP.values())wk(t,n);return!0}function $p(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tr(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vo=new Ml("app","Firebase",YP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vo.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=QP;function E_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const o=Object.assign({name:Bm,automaticDataCollectionEnabled:!1},e),s=o.name;if(typeof s!="string"||!s)throw Vo.create("bad-app-name",{appName:String(s)});if(t||(t=__()),!t)throw Vo.create("no-options");const a=Dc.get(s);if(a){if(Ci(t,a.options)&&Ci(o,a.config))return a;throw Vo.create("duplicate-app",{appName:s})}const u=new sP(s);for(const m of Km.values())u.addComponent(m);const h=new eC(t,o,u);return Dc.set(s,h),h}function S_(n=Bm){const e=Dc.get(n);if(!e&&n===Bm&&__())return E_();if(!e)throw Vo.create("no-app",{appName:n});return e}function No(n,e,t){var o;let s=(o=ZP[n])!==null&&o!==void 0?o:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(h.join(" "));return}Ws(new Ii(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="firebase-heartbeat-database",nC=1,jl="firebase-heartbeat-store";let pm=null;function T_(){return pm||(pm=kP(tC,nC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vo.create("idb-open",{originalErrorMessage:n.message})})),pm}async function rC(n){try{const t=(await T_()).transaction(jl),o=await t.objectStore(jl).get(x_(n));return await t.done,o}catch(e){if(e instanceof eo)Qr.warn(e.message);else{const t=Vo.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(t.message)}}}async function zk(n,e){try{const o=(await T_()).transaction(jl,"readwrite");await o.objectStore(jl).put(e,x_(n)),await o.done}catch(t){if(t instanceof eo)Qr.warn(t.message);else{const o=Vo.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qr.warn(o.message)}}}function x_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=1024,iC=30;class sC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lC(t),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=jk();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>iC){const u=uC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Qr.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jk(),{heartbeatsToSend:o,unsentEntries:s}=aC(this._heartbeatsCache.heartbeats),a=Nc(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Qr.warn(t),""}}}function jk(){return new Date().toISOString().substring(0,10)}function aC(n,e=oC){const t=[];let o=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Ek(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ek(t)>e){t.pop();break}o=o.slice(1)}return{heartbeatsToSend:t,unsentEntries:o}}class lC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qx()?Jx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zk(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zk(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ek(n){return Nc(JSON.stringify({version:2,heartbeats:n})).length}function uC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let o=1;o<n.length;o++)n[o].date<t&&(t=n[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(n){Ws(new Ii("platform-logger",e=>new wP(e),"PRIVATE")),Ws(new Ii("heartbeat",e=>new sC(e),"PRIVATE")),No(Hm,_k,n),No(Hm,_k,"esm2017"),No("fire-js","")}cC("");var Sk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Do,P_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,E){function T(){}T.prototype=E.prototype,I.D=E.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(C,R,D){for(var x=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)x[qe-2]=arguments[qe];return E.prototype[R].apply(C,x)}}function t(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,t),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,E,T){T||(T=0);var C=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)C[R]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(R=0;16>R;++R)C[R]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=I.g[0],T=I.g[1],R=I.g[2];var D=I.g[3],x=E+(D^T&(R^D))+C[0]+3614090360&4294967295;E=T+(x<<7&4294967295|x>>>25),x=D+(R^E&(T^R))+C[1]+3905402710&4294967295,D=E+(x<<12&4294967295|x>>>20),x=R+(T^D&(E^T))+C[2]+606105819&4294967295,R=D+(x<<17&4294967295|x>>>15),x=T+(E^R&(D^E))+C[3]+3250441966&4294967295,T=R+(x<<22&4294967295|x>>>10),x=E+(D^T&(R^D))+C[4]+4118548399&4294967295,E=T+(x<<7&4294967295|x>>>25),x=D+(R^E&(T^R))+C[5]+1200080426&4294967295,D=E+(x<<12&4294967295|x>>>20),x=R+(T^D&(E^T))+C[6]+2821735955&4294967295,R=D+(x<<17&4294967295|x>>>15),x=T+(E^R&(D^E))+C[7]+4249261313&4294967295,T=R+(x<<22&4294967295|x>>>10),x=E+(D^T&(R^D))+C[8]+1770035416&4294967295,E=T+(x<<7&4294967295|x>>>25),x=D+(R^E&(T^R))+C[9]+2336552879&4294967295,D=E+(x<<12&4294967295|x>>>20),x=R+(T^D&(E^T))+C[10]+4294925233&4294967295,R=D+(x<<17&4294967295|x>>>15),x=T+(E^R&(D^E))+C[11]+2304563134&4294967295,T=R+(x<<22&4294967295|x>>>10),x=E+(D^T&(R^D))+C[12]+1804603682&4294967295,E=T+(x<<7&4294967295|x>>>25),x=D+(R^E&(T^R))+C[13]+4254626195&4294967295,D=E+(x<<12&4294967295|x>>>20),x=R+(T^D&(E^T))+C[14]+2792965006&4294967295,R=D+(x<<17&4294967295|x>>>15),x=T+(E^R&(D^E))+C[15]+1236535329&4294967295,T=R+(x<<22&4294967295|x>>>10),x=E+(R^D&(T^R))+C[1]+4129170786&4294967295,E=T+(x<<5&4294967295|x>>>27),x=D+(T^R&(E^T))+C[6]+3225465664&4294967295,D=E+(x<<9&4294967295|x>>>23),x=R+(E^T&(D^E))+C[11]+643717713&4294967295,R=D+(x<<14&4294967295|x>>>18),x=T+(D^E&(R^D))+C[0]+3921069994&4294967295,T=R+(x<<20&4294967295|x>>>12),x=E+(R^D&(T^R))+C[5]+3593408605&4294967295,E=T+(x<<5&4294967295|x>>>27),x=D+(T^R&(E^T))+C[10]+38016083&4294967295,D=E+(x<<9&4294967295|x>>>23),x=R+(E^T&(D^E))+C[15]+3634488961&4294967295,R=D+(x<<14&4294967295|x>>>18),x=T+(D^E&(R^D))+C[4]+3889429448&4294967295,T=R+(x<<20&4294967295|x>>>12),x=E+(R^D&(T^R))+C[9]+568446438&4294967295,E=T+(x<<5&4294967295|x>>>27),x=D+(T^R&(E^T))+C[14]+3275163606&4294967295,D=E+(x<<9&4294967295|x>>>23),x=R+(E^T&(D^E))+C[3]+4107603335&4294967295,R=D+(x<<14&4294967295|x>>>18),x=T+(D^E&(R^D))+C[8]+1163531501&4294967295,T=R+(x<<20&4294967295|x>>>12),x=E+(R^D&(T^R))+C[13]+2850285829&4294967295,E=T+(x<<5&4294967295|x>>>27),x=D+(T^R&(E^T))+C[2]+4243563512&4294967295,D=E+(x<<9&4294967295|x>>>23),x=R+(E^T&(D^E))+C[7]+1735328473&4294967295,R=D+(x<<14&4294967295|x>>>18),x=T+(D^E&(R^D))+C[12]+2368359562&4294967295,T=R+(x<<20&4294967295|x>>>12),x=E+(T^R^D)+C[5]+4294588738&4294967295,E=T+(x<<4&4294967295|x>>>28),x=D+(E^T^R)+C[8]+2272392833&4294967295,D=E+(x<<11&4294967295|x>>>21),x=R+(D^E^T)+C[11]+1839030562&4294967295,R=D+(x<<16&4294967295|x>>>16),x=T+(R^D^E)+C[14]+4259657740&4294967295,T=R+(x<<23&4294967295|x>>>9),x=E+(T^R^D)+C[1]+2763975236&4294967295,E=T+(x<<4&4294967295|x>>>28),x=D+(E^T^R)+C[4]+1272893353&4294967295,D=E+(x<<11&4294967295|x>>>21),x=R+(D^E^T)+C[7]+4139469664&4294967295,R=D+(x<<16&4294967295|x>>>16),x=T+(R^D^E)+C[10]+3200236656&4294967295,T=R+(x<<23&4294967295|x>>>9),x=E+(T^R^D)+C[13]+681279174&4294967295,E=T+(x<<4&4294967295|x>>>28),x=D+(E^T^R)+C[0]+3936430074&4294967295,D=E+(x<<11&4294967295|x>>>21),x=R+(D^E^T)+C[3]+3572445317&4294967295,R=D+(x<<16&4294967295|x>>>16),x=T+(R^D^E)+C[6]+76029189&4294967295,T=R+(x<<23&4294967295|x>>>9),x=E+(T^R^D)+C[9]+3654602809&4294967295,E=T+(x<<4&4294967295|x>>>28),x=D+(E^T^R)+C[12]+3873151461&4294967295,D=E+(x<<11&4294967295|x>>>21),x=R+(D^E^T)+C[15]+530742520&4294967295,R=D+(x<<16&4294967295|x>>>16),x=T+(R^D^E)+C[2]+3299628645&4294967295,T=R+(x<<23&4294967295|x>>>9),x=E+(R^(T|~D))+C[0]+4096336452&4294967295,E=T+(x<<6&4294967295|x>>>26),x=D+(T^(E|~R))+C[7]+1126891415&4294967295,D=E+(x<<10&4294967295|x>>>22),x=R+(E^(D|~T))+C[14]+2878612391&4294967295,R=D+(x<<15&4294967295|x>>>17),x=T+(D^(R|~E))+C[5]+4237533241&4294967295,T=R+(x<<21&4294967295|x>>>11),x=E+(R^(T|~D))+C[12]+1700485571&4294967295,E=T+(x<<6&4294967295|x>>>26),x=D+(T^(E|~R))+C[3]+2399980690&4294967295,D=E+(x<<10&4294967295|x>>>22),x=R+(E^(D|~T))+C[10]+4293915773&4294967295,R=D+(x<<15&4294967295|x>>>17),x=T+(D^(R|~E))+C[1]+2240044497&4294967295,T=R+(x<<21&4294967295|x>>>11),x=E+(R^(T|~D))+C[8]+1873313359&4294967295,E=T+(x<<6&4294967295|x>>>26),x=D+(T^(E|~R))+C[15]+4264355552&4294967295,D=E+(x<<10&4294967295|x>>>22),x=R+(E^(D|~T))+C[6]+2734768916&4294967295,R=D+(x<<15&4294967295|x>>>17),x=T+(D^(R|~E))+C[13]+1309151649&4294967295,T=R+(x<<21&4294967295|x>>>11),x=E+(R^(T|~D))+C[4]+4149444226&4294967295,E=T+(x<<6&4294967295|x>>>26),x=D+(T^(E|~R))+C[11]+3174756917&4294967295,D=E+(x<<10&4294967295|x>>>22),x=R+(E^(D|~T))+C[2]+718787259&4294967295,R=D+(x<<15&4294967295|x>>>17),x=T+(D^(R|~E))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+E&4294967295,I.g[1]=I.g[1]+(R+(x<<21&4294967295|x>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+D&4294967295}o.prototype.u=function(I,E){E===void 0&&(E=I.length);for(var T=E-this.blockSize,C=this.B,R=this.h,D=0;D<E;){if(R==0)for(;D<=T;)s(this,I,D),D+=this.blockSize;if(typeof I=="string"){for(;D<E;)if(C[R++]=I.charCodeAt(D++),R==this.blockSize){s(this,C),R=0;break}}else for(;D<E;)if(C[R++]=I[D++],R==this.blockSize){s(this,C),R=0;break}}this.h=R,this.o+=E},o.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var E=1;E<I.length-8;++E)I[E]=0;var T=8*this.o;for(E=I.length-8;E<I.length;++E)I[E]=T&255,T/=256;for(this.u(I),I=Array(16),E=T=0;4>E;++E)for(var C=0;32>C;C+=8)I[T++]=this.g[E]>>>C&255;return I};function a(I,E){var T=h;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=E(I)}function u(I,E){this.h=E;for(var T=[],C=!0,R=I.length-1;0<=R;R--){var D=I[R]|0;C&&D==E||(T[R]=D,C=!1)}this.g=T}var h={};function m(I){return-128<=I&&128>I?a(I,function(E){return new u([E|0],0>E?-1:0)}):new u([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return b;if(0>I)return L(f(-I));for(var E=[],T=1,C=0;I>=T;C++)E[C]=I/T|0,T*=4294967296;return new u(E,0)}function g(I,E){if(I.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I.charAt(0)=="-")return L(g(I.substring(1),E));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=f(Math.pow(E,8)),C=b,R=0;R<I.length;R+=8){var D=Math.min(8,I.length-R),x=parseInt(I.substring(R,R+D),E);8>D?(D=f(Math.pow(E,D)),C=C.j(D).add(f(x))):(C=C.j(T),C=C.add(f(x)))}return C}var b=m(0),z=m(1),P=m(16777216);n=u.prototype,n.m=function(){if(M(this))return-L(this).m();for(var I=0,E=1,T=0;T<this.g.length;T++){var C=this.i(T);I+=(0<=C?C:4294967296+C)*E,E*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(M(this))return"-"+L(this).toString(I);for(var E=f(Math.pow(I,6)),T=this,C="";;){var R=oe(T,E).g;T=$(T,R.j(E));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=R,N(T))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(var E=0;E<I.g.length;E++)if(I.g[E]!=0)return!1;return!0}function M(I){return I.h==-1}n.l=function(I){return I=$(this,I),M(I)?-1:N(I)?0:1};function L(I){for(var E=I.g.length,T=[],C=0;C<E;C++)T[C]=~I.g[C];return new u(T,~I.h).add(z)}n.abs=function(){return M(this)?L(this):this},n.add=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],C=0,R=0;R<=E;R++){var D=C+(this.i(R)&65535)+(I.i(R)&65535),x=(D>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);C=x>>>16,D&=65535,x&=65535,T[R]=x<<16|D}return new u(T,T[T.length-1]&-2147483648?-1:0)};function $(I,E){return I.add(L(E))}n.j=function(I){if(N(this)||N(I))return b;if(M(this))return M(I)?L(this).j(L(I)):L(L(this).j(I));if(M(I))return L(this.j(L(I)));if(0>this.l(P)&&0>I.l(P))return f(this.m()*I.m());for(var E=this.g.length+I.g.length,T=[],C=0;C<2*E;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var R=0;R<I.g.length;R++){var D=this.i(C)>>>16,x=this.i(C)&65535,qe=I.i(R)>>>16,ot=I.i(R)&65535;T[2*C+2*R]+=x*ot,q(T,2*C+2*R),T[2*C+2*R+1]+=D*ot,q(T,2*C+2*R+1),T[2*C+2*R+1]+=x*qe,q(T,2*C+2*R+1),T[2*C+2*R+2]+=D*qe,q(T,2*C+2*R+2)}for(C=0;C<E;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=E;C<2*E;C++)T[C]=0;return new u(T,0)};function q(I,E){for(;(I[E]&65535)!=I[E];)I[E+1]+=I[E]>>>16,I[E]&=65535,E++}function Q(I,E){this.g=I,this.h=E}function oe(I,E){if(N(E))throw Error("division by zero");if(N(I))return new Q(b,b);if(M(I))return E=oe(L(I),E),new Q(L(E.g),L(E.h));if(M(E))return E=oe(I,L(E)),new Q(L(E.g),E.h);if(30<I.g.length){if(M(I)||M(E))throw Error("slowDivide_ only works with positive integers.");for(var T=z,C=E;0>=C.l(I);)T=ae(T),C=ae(C);var R=se(T,1),D=se(C,1);for(C=se(C,2),T=se(T,2);!N(C);){var x=D.add(C);0>=x.l(I)&&(R=R.add(T),D=x),C=se(C,1),T=se(T,1)}return E=$(I,R.j(E)),new Q(R,E)}for(R=b;0<=I.l(E);){for(T=Math.max(1,Math.floor(I.m()/E.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=f(T),x=D.j(E);M(x)||0<x.l(I);)T-=C,D=f(T),x=D.j(E);N(D)&&(D=z),R=R.add(D),I=$(I,x)}return new Q(R,I)}n.A=function(I){return oe(this,I).h},n.and=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],C=0;C<E;C++)T[C]=this.i(C)&I.i(C);return new u(T,this.h&I.h)},n.or=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],C=0;C<E;C++)T[C]=this.i(C)|I.i(C);return new u(T,this.h|I.h)},n.xor=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],C=0;C<E;C++)T[C]=this.i(C)^I.i(C);return new u(T,this.h^I.h)};function ae(I){for(var E=I.g.length+1,T=[],C=0;C<E;C++)T[C]=I.i(C)<<1|I.i(C-1)>>>31;return new u(T,I.h)}function se(I,E){var T=E>>5;E%=32;for(var C=I.g.length-T,R=[],D=0;D<C;D++)R[D]=0<E?I.i(D+T)>>>E|I.i(D+T+1)<<32-E:I.i(D+T);return new u(R,I.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,P_=o,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,Do=u}).apply(typeof Sk<"u"?Sk:typeof self<"u"?self:typeof window<"u"?window:{});var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var C_,il,I_,bc,$m,A_,R_,V_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,v,k){return c==Array.prototype||c==Object.prototype||(c[v]=k.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof dc=="object"&&dc];for(var v=0;v<c.length;++v){var k=c[v];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var o=t(this);function s(c,v){if(v)e:{var k=o;c=c.split(".");for(var j=0;j<c.length-1;j++){var F=c[j];if(!(F in k))break e;k=k[F]}c=c[c.length-1],j=k[c],v=v(j),v!=j&&v!=null&&e(k,c,{configurable:!0,writable:!0,value:v})}}function a(c,v){c instanceof String&&(c+="");var k=0,j=!1,F={next:function(){if(!j&&k<c.length){var K=k++;return{value:v(K,c[K]),done:!1}}return j=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(v,k){return k})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(c){var v=typeof c;return v=v!="object"?v:c?Array.isArray(c)?"array":v:"null",v=="array"||v=="object"&&typeof c.length=="number"}function f(c){var v=typeof c;return v=="object"&&c!=null||v=="function"}function g(c,v,k){return c.call.apply(c.bind,arguments)}function b(c,v,k){if(!c)throw Error();if(2<arguments.length){var j=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,j),c.apply(v,F)}}return function(){return c.apply(v,arguments)}}function z(c,v,k){return z=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:b,z.apply(null,arguments)}function P(c,v){var k=Array.prototype.slice.call(arguments,1);return function(){var j=k.slice();return j.push.apply(j,arguments),c.apply(this,j)}}function N(c,v){function k(){}k.prototype=v.prototype,c.aa=v.prototype,c.prototype=new k,c.prototype.constructor=c,c.Qb=function(j,F,K){for(var ie=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)ie[Ge-2]=arguments[Ge];return v.prototype[F].apply(j,ie)}}function M(c){const v=c.length;if(0<v){const k=Array(v);for(let j=0;j<v;j++)k[j]=c[j];return k}return[]}function L(c,v){for(let k=1;k<arguments.length;k++){const j=arguments[k];if(m(j)){const F=c.length||0,K=j.length||0;c.length=F+K;for(let ie=0;ie<K;ie++)c[F+ie]=j[ie]}else c.push(j)}}class ${constructor(v,k){this.i=v,this.j=k,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function q(c){return/^[\s\xa0]*$/.test(c)}function Q(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function oe(c){return oe[" "](c),c}oe[" "]=function(){};var ae=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function se(c,v,k){for(const j in c)v.call(k,c[j],j,c)}function I(c,v){for(const k in c)v.call(void 0,c[k],k,c)}function E(c){const v={};for(const k in c)v[k]=c[k];return v}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,v){let k,j;for(let F=1;F<arguments.length;F++){j=arguments[F];for(k in j)c[k]=j[k];for(let K=0;K<T.length;K++)k=T[K],Object.prototype.hasOwnProperty.call(j,k)&&(c[k]=j[k])}}function R(c){var v=1;c=c.split(":");const k=[];for(;0<v&&c.length;)k.push(c.shift()),v--;return c.length&&k.push(c.join(":")),k}function D(c){h.setTimeout(()=>{throw c},0)}function x(){var c=ve;let v=null;return c.g&&(v=c.g,c.g=c.g.next,c.g||(c.h=null),v.next=null),v}class qe{constructor(){this.h=this.g=null}add(v,k){const j=ot.get();j.set(v,k),this.h?this.h.next=j:this.g=j,this.h=j}}var ot=new $(()=>new ht,c=>c.reset());class ht{constructor(){this.next=this.g=this.h=null}set(v,k){this.h=v,this.g=k,this.next=null}reset(){this.next=this.g=this.h=null}}let we,te=!1,ve=new qe,X=()=>{const c=h.Promise.resolve(void 0);we=()=>{c.then(O)}};var O=()=>{for(var c;c=x();){try{c.h.call(c.g)}catch(k){D(k)}var v=ot;v.j(c),100>v.h&&(v.h++,c.next=v.g,v.g=c)}te=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(c,v){this.type=c,this.g=this.target=v,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Pe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,v=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const k=()=>{};h.addEventListener("test",k,v),h.removeEventListener("test",k,v)}catch{}return c}();function Ce(c,v){if(le.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var k=this.type=c.type,j=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=v,v=c.relatedTarget){if(ae){e:{try{oe(v.nodeName);var F=!0;break e}catch{}F=!1}F||(v=null)}}else k=="mouseover"?v=c.fromElement:k=="mouseout"&&(v=c.toElement);this.relatedTarget=v,j?(this.clientX=j.clientX!==void 0?j.clientX:j.pageX,this.clientY=j.clientY!==void 0?j.clientY:j.pageY,this.screenX=j.screenX||0,this.screenY=j.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ce.aa.h.call(this)}}N(Ce,le);var Ve={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),He=0;function We(c,v,k,j,F){this.listener=c,this.proxy=null,this.src=v,this.type=k,this.capture=!!j,this.ha=F,this.key=++He,this.da=this.fa=!1}function tt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function On(c){this.src=c,this.g={},this.h=0}On.prototype.add=function(c,v,k,j,F){var K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);var ie=Mn(c,v,j,F);return-1<ie?(v=c[ie],k||(v.fa=!1)):(v=new We(v,this.src,K,!!j,F),v.fa=k,c.push(v)),v};function to(c,v){var k=v.type;if(k in c.g){var j=c.g[k],F=Array.prototype.indexOf.call(j,v,void 0),K;(K=0<=F)&&Array.prototype.splice.call(j,F,1),K&&(tt(v),c.g[k].length==0&&(delete c.g[k],c.h--))}}function Mn(c,v,k,j){for(var F=0;F<c.length;++F){var K=c[F];if(!K.da&&K.listener==v&&K.capture==!!k&&K.ha==j)return F}return-1}var de="closure_lm_"+(1e6*Math.random()|0),xe={};function Ae(c,v,k,j,F){if(Array.isArray(v)){for(var K=0;K<v.length;K++)Ae(c,v[K],k,j,F);return null}return k=ca(k),c&&c[Ue]?c.K(v,k,f(j)?!!j.capture:!1,F):Oe(c,v,k,!1,j,F)}function Oe(c,v,k,j,F,K){if(!v)throw Error("Invalid event type");var ie=f(F)?!!F.capture:!!F,Ge=Fi(c);if(Ge||(c[de]=Ge=new On(c)),k=Ge.add(v,k,j,ie,K),k.proxy)return k;if(j=mt(),k.proxy=j,j.src=c,j.listener=k,c.addEventListener)Pe||(F=ie),F===void 0&&(F=!1),c.addEventListener(v.toString(),j,F);else if(c.attachEvent)c.attachEvent(Xt(v.toString()),j);else if(c.addListener&&c.removeListener)c.addListener(j);else throw Error("addEventListener and attachEvent are unavailable.");return k}function mt(){function c(k){return v.call(c.src,c.listener,k)}const v=ua;return c}function Sr(c,v,k,j,F){if(Array.isArray(v))for(var K=0;K<v.length;K++)Sr(c,v[K],k,j,F);else j=f(j)?!!j.capture:!!j,k=ca(k),c&&c[Ue]?(c=c.i,v=String(v).toString(),v in c.g&&(K=c.g[v],k=Mn(K,k,j,F),-1<k&&(tt(K[k]),Array.prototype.splice.call(K,k,1),K.length==0&&(delete c.g[v],c.h--)))):c&&(c=Fi(c))&&(v=c.g[v.toString()],c=-1,v&&(c=Mn(v,k,j,F)),(k=-1<c?v[c]:null)&&pn(k))}function pn(c){if(typeof c!="number"&&c&&!c.da){var v=c.src;if(v&&v[Ue])to(v.i,c);else{var k=c.type,j=c.proxy;v.removeEventListener?v.removeEventListener(k,j,c.capture):v.detachEvent?v.detachEvent(Xt(k),j):v.addListener&&v.removeListener&&v.removeListener(j),(k=Fi(v))?(to(k,c),k.h==0&&(k.src=null,v[de]=null)):tt(c)}}}function Xt(c){return c in xe?xe[c]:xe[c]="on"+c}function ua(c,v){if(c.da)c=!0;else{v=new Ce(v,this);var k=c.listener,j=c.ha||c.src;c.fa&&pn(c),c=k.call(j,v)}return c}function Fi(c){return c=c[de],c instanceof On?c:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function ca(c){return typeof c=="function"?c:(c[Ui]||(c[Ui]=function(v){return c.handleEvent(v)}),c[Ui])}function _t(){W.call(this),this.i=new On(this),this.M=this,this.F=null}N(_t,W),_t.prototype[Ue]=!0,_t.prototype.removeEventListener=function(c,v,k,j){Sr(this,c,v,k,j)};function wt(c,v){var k,j=c.F;if(j)for(k=[];j;j=j.F)k.push(j);if(c=c.M,j=v.type||v,typeof v=="string")v=new le(v,c);else if(v instanceof le)v.target=v.target||c;else{var F=v;v=new le(j,c),C(v,F)}if(F=!0,k)for(var K=k.length-1;0<=K;K--){var ie=v.g=k[K];F=Tr(ie,j,!0,v)&&F}if(ie=v.g=c,F=Tr(ie,j,!0,v)&&F,F=Tr(ie,j,!1,v)&&F,k)for(K=0;K<k.length;K++)ie=v.g=k[K],F=Tr(ie,j,!1,v)&&F}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var c=this.i,v;for(v in c.g){for(var k=c.g[v],j=0;j<k.length;j++)tt(k[j]);delete c.g[v],c.h--}}this.F=null},_t.prototype.K=function(c,v,k,j){return this.i.add(String(c),v,!1,k,j)},_t.prototype.L=function(c,v,k,j){return this.i.add(String(c),v,!0,k,j)};function Tr(c,v,k,j){if(v=c.i.g[String(v)],!v)return!0;v=v.concat();for(var F=!0,K=0;K<v.length;++K){var ie=v[K];if(ie&&!ie.da&&ie.capture==k){var Ge=ie.listener,zt=ie.ha||ie.src;ie.fa&&to(c.i,ie),F=Ge.call(zt,j)!==!1&&F}}return F&&!j.defaultPrevented}function da(c,v,k){if(typeof c=="function")k&&(c=z(c,k));else if(c&&typeof c.handleEvent=="function")c=z(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:h.setTimeout(c,v||0)}function no(c){c.g=da(()=>{c.g=null,c.i&&(c.i=!1,no(c))},c.l);const v=c.h;c.h=null,c.m.apply(null,v)}class Go extends W{constructor(v,k){super(),this.m=v,this.l=k,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:no(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(c){W.call(this),this.h=c,this.g={}}N(qo,W);var ha=[];function ma(c){se(c.g,function(v,k){this.g.hasOwnProperty(k)&&pn(v)},c),c.g={}}qo.prototype.N=function(){qo.aa.N.call(this),ma(this)},qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pa=h.JSON.stringify,fa=h.JSON.parse,va=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function Jo(){}Jo.prototype.h=null;function Hi(c){return c.h||(c.h=c.i())}function Bi(){}var zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){le.call(this,"d")}N(sr,le);function Ki(){le.call(this,"c")}N(Ki,le);var ar={},ya=null;function Qo(){return ya=ya||new _t}ar.La="serverreachability";function ga(c){le.call(this,ar.La,c)}N(ga,le);function xr(c){const v=Qo();wt(v,new ga(v))}ar.STAT_EVENT="statevent";function ka(c,v){le.call(this,ar.STAT_EVENT,c),this.stat=v}N(ka,le);function pt(c){const v=Qo();wt(v,new ka(v,c))}ar.Ma="timingevent";function $i(c,v){le.call(this,ar.Ma,c),this.size=v}N($i,le);function Ln(c,v){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},v)}function Zo(){this.g=!0}Zo.prototype.xa=function(){this.g=!1};function Xo(c,v,k,j,F,K){c.info(function(){if(c.g)if(K)for(var ie="",Ge=K.split("&"),zt=0;zt<Ge.length;zt++){var Le=Ge[zt].split("=");if(1<Le.length){var Pt=Le[0];Le=Le[1];var gt=Pt.split("_");ie=2<=gt.length&&gt[1]=="type"?ie+(Pt+"="+Le+"&"):ie+(Pt+"=redacted&")}}else ie=null;else ie=K;return"XMLHTTP REQ ("+j+") [attempt "+F+"]: "+v+`
`+k+`
`+ie})}function Wi(c,v,k,j,F,K,ie){c.info(function(){return"XMLHTTP RESP ("+j+") [ attempt "+F+"]: "+v+`
`+k+`
`+K+" "+ie})}function Fn(c,v,k,j){c.info(function(){return"XMLHTTP TEXT ("+v+"): "+_d(c,k)+(j?" "+j:"")})}function ba(c,v){c.info(function(){return"TIMEOUT: "+v})}Zo.prototype.info=function(){};function _d(c,v){if(!c.g)return v;if(!v)return null;try{var k=JSON.parse(v);if(k){for(c=0;c<k.length;c++)if(Array.isArray(k[c])){var j=k[c];if(!(2>j.length)){var F=j[1];if(Array.isArray(F)&&!(1>F.length)){var K=F[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return pa(k)}catch{return v}}var Gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Un;function Yo(){}N(Yo,Jo),Yo.prototype.g=function(){return new XMLHttpRequest},Yo.prototype.i=function(){return{}},Un=new Yo;function Hn(c,v,k,j){this.j=c,this.i=v,this.l=k,this.R=j||1,this.U=new qo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ql}function ql(){this.i=null,this.g="",this.h=!1}var _a={},qi={};function Ji(c,v,k){c.L=1,c.v=ao(vn(v)),c.m=k,c.P=!0,wa(c,null)}function wa(c,v){c.F=Date.now(),Qe(c),c.A=vn(c.v);var k=c.A,j=c.R;Array.isArray(j)||(j=[String(j)]),uo(k.i,"t",j),c.C=0,k=c.j.J,c.h=new ql,c.g=hu(c.j,k?v:null,!c.m),0<c.O&&(c.M=new Go(z(c.Y,c,c.g),c.O)),v=c.U,k=c.g,j=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(ha[0]=F.toString()),F=ha);for(var K=0;K<F.length;K++){var ie=Ae(k,F[K],j||v.handleEvent,!1,v.h||v);if(!ie)break;v.g[ie.key]=ie}v=c.H?E(c.H):{},c.m?(c.u||(c.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,v)):(c.u="GET",c.g.ea(c.A,c.u,null,v)),xr(),Xo(c.i,c.u,c.A,c.l,c.R,c.m)}Hn.prototype.ca=function(c){c=c.target;const v=this.M;v&&sn(c)==3?v.j():this.Y(c)},Hn.prototype.Y=function(c){try{if(c==this.g)e:{const gt=sn(this.g);var v=this.g.Ba();const Sn=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||xa(this.g)))){this.J||gt!=4||v==7||(v==8||0>=Sn?xr(3):xr(2)),ei(this);var k=this.g.Z();this.X=k;t:if(Jl(this)){var j=xa(this.g);c="";var F=j.length,K=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),ro(this);var ie="";break t}this.h.i=new h.TextDecoder}for(v=0;v<F;v++)this.h.h=!0,c+=this.h.i.decode(j[v],{stream:!(K&&v==F-1)});j.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=k==200,Wi(this.i,this.u,this.A,this.l,this.R,gt,k),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,zt=this.g;if((Ge=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Ge)){var Le=Ge;break t}}Le=null}if(k=Le)Fn(this.i,this.l,k,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,za(this,k);else{this.o=!1,this.s=3,pt(12),jn(this),ro(this);break e}}if(this.P){k=!0;let gn;for(;!this.J&&this.C<ie.length;)if(gn=wd(this,ie),gn==qi){gt==4&&(this.s=4,pt(14),k=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==_a){this.s=4,pt(15),Fn(this.i,this.l,ie,"[Invalid Chunk]"),k=!1;break}else Fn(this.i,this.l,gn,null),za(this,gn);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||ie.length!=0||this.h.h||(this.s=1,pt(16),k=!1),this.o=this.o&&k,!k)Fn(this.i,this.l,ie,"[Invalid Chunked Response]"),jn(this),ro(this);else if(0<ie.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ca(Pt),Pt.M=!0,pt(11))}}else Fn(this.i,this.l,ie,null),za(this,ie);gt==4&&jn(this),this.o&&!this.J&&(gt==4?ss(this.j,this):(this.o=!1,Qe(this)))}else ts(this.g),k==400&&0<ie.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),jn(this),ro(this)}}}catch{}finally{}};function Jl(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function wd(c,v){var k=c.C,j=v.indexOf(`
`,k);return j==-1?qi:(k=Number(v.substring(k,j)),isNaN(k)?_a:(j+=1,j+k>v.length?qi:(v=v.slice(j,j+k),c.C=j+k,v)))}Hn.prototype.cancel=function(){this.J=!0,jn(this)};function Qe(c){c.S=Date.now()+c.I,Ql(c,c.I)}function Ql(c,v){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ln(z(c.ba,c),v)}function ei(c){c.B&&(h.clearTimeout(c.B),c.B=null)}Hn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ba(this.i,this.A),this.L!=2&&(xr(),pt(17)),jn(this),this.s=2,ro(this)):Ql(this,this.S-c)};function ro(c){c.j.G==0||c.J||ss(c.j,c)}function jn(c){ei(c);var v=c.M;v&&typeof v.ma=="function"&&v.ma(),c.M=null,ma(c.U),c.g&&(v=c.g,c.g=null,v.abort(),v.ma())}function za(c,v){try{var k=c.j;if(k.G!=0&&(k.g==c||Yt(k.h,c))){if(!c.K&&Yt(k.h,c)&&k.G==3){try{var j=k.Da.g.parse(v)}catch{j=null}if(Array.isArray(j)&&j.length==3){var F=j;if(F[0]==0){e:if(!k.u){if(k.g)if(k.g.F+3e3<c.F)is(k),Gn(k);else break e;os(k),pt(18)}}else k.za=F[1],0<k.za-k.T&&37500>F[2]&&k.F&&k.v==0&&!k.C&&(k.C=Ln(z(k.Za,k),6e3));if(1>=Xl(k.h)&&k.ca){try{k.ca()}catch{}k.ca=void 0}}else Rr(k,11)}else if((c.K||k.g==c)&&is(k),!q(v))for(F=k.Da.g.parse(v),v=0;v<F.length;v++){let Le=F[v];if(k.T=Le[0],Le=Le[1],k.G==2)if(Le[0]=="c"){k.K=Le[1],k.ia=Le[2];const Pt=Le[3];Pt!=null&&(k.la=Pt,k.j.info("VER="+k.la));const gt=Le[4];gt!=null&&(k.Aa=gt,k.j.info("SVER="+k.Aa));const Sn=Le[5];Sn!=null&&typeof Sn=="number"&&0<Sn&&(j=1.5*Sn,k.L=j,k.j.info("backChannelRequestTimeoutMs_="+j)),j=k;const gn=c.g;if(gn){const ai=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var K=j.h;K.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(ja(K,K.h),K.h=null))}if(j.D){const ls=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;ls&&(j.ya=ls,Je(j.I,j.D,ls))}}k.G=3,k.l&&k.l.ua(),k.ba&&(k.R=Date.now()-c.F,k.j.info("Handshake RTT: "+k.R+"ms")),j=k;var ie=c;if(j.qa=du(j,j.J?j.ia:null,j.W),ie.K){Yl(j.h,ie);var Ge=ie,zt=j.L;zt&&(Ge.I=zt),Ge.B&&(ei(Ge),Qe(Ge)),j.g=ie}else si(j);0<k.i.length&&dr(k)}else Le[0]!="stop"&&Le[0]!="close"||Rr(k,7);else k.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Rr(k,7):Nt(k):Le[0]!="noop"&&k.l&&k.l.ta(Le),k.v=0)}}xr(4)}catch{}}var Zl=class{constructor(c,v){this.g=c,this.map=v}};function ti(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Xl(c){return c.h?1:c.g?c.g.size:0}function Yt(c,v){return c.h?c.h==v:c.g?c.g.has(v):!1}function ja(c,v){c.g?c.g.add(v):c.h=v}function Yl(c,v){c.h&&c.h==v?c.h=null:c.g&&c.g.has(v)&&c.g.delete(v)}ti.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function eu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let v=c.i;for(const k of c.g.values())v=v.concat(k.D);return v}return M(c.i)}function Qi(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var v=[],k=c.length,j=0;j<k;j++)v.push(c[j]);return v}v=[],k=0;for(j in c)v[k++]=c[j];return v}function Zi(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var v=[];c=c.length;for(var k=0;k<c;k++)v.push(k);return v}v=[],k=0;for(const j in c)v[k++]=j;return v}}}function oo(c,v){if(c.forEach&&typeof c.forEach=="function")c.forEach(v,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,v,void 0);else for(var k=Zi(c),j=Qi(c),F=j.length,K=0;K<F;K++)v.call(void 0,j[K],k&&k[K],c)}var ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zd(c,v){if(c){c=c.split("&");for(var k=0;k<c.length;k++){var j=c[k].indexOf("="),F=null;if(0<=j){var K=c[k].substring(0,j);F=c[k].substring(j+1)}else K=c[k];v(K,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Pr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Pr){this.h=c.h,ri(this,c.j),this.o=c.o,this.g=c.g,io(this,c.s),this.l=c.l;var v=c.i,k=new lr;k.i=v.i,v.g&&(k.g=new Map(v.g),k.h=v.h),so(this,k),this.m=c.m}else c&&(v=String(c).match(ni))?(this.h=!1,ri(this,v[1]||"",!0),this.o=Me(v[2]||""),this.g=Me(v[3]||"",!0),io(this,v[4]),this.l=Me(v[5]||"",!0),so(this,v[6]||"",!0),this.m=Me(v[7]||"")):(this.h=!1,this.i=new lr(null,this.h))}Pr.prototype.toString=function(){var c=[],v=this.j;v&&c.push(lo(v,Xi,!0),":");var k=this.g;return(k||v=="file")&&(c.push("//"),(v=this.o)&&c.push(lo(v,Xi,!0),"@"),c.push(encodeURIComponent(String(k)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),k=this.s,k!=null&&c.push(":",String(k))),(k=this.l)&&(this.g&&k.charAt(0)!="/"&&c.push("/"),c.push(lo(k,k.charAt(0)=="/"?ru:nu,!0))),(k=this.i.toString())&&c.push("?",k),(k=this.m)&&c.push("#",lo(k,Ea)),c.join("")};function vn(c){return new Pr(c)}function ri(c,v,k){c.j=k?Me(v,!0):v,c.j&&(c.j=c.j.replace(/:$/,""))}function io(c,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);c.s=v}else c.s=null}function so(c,v,k){v instanceof lr?(c.i=v,ur(c.i,c.h)):(k||(v=lo(v,ou)),c.i=new lr(v,c.h))}function Je(c,v,k){c.i.set(v,k)}function ao(c){return Je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,v){return c?v?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function lo(c,v,k){return typeof c=="string"?(c=encodeURI(c).replace(v,tu),k&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function tu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Xi=/[#\/\?@]/g,nu=/[#\?:]/g,ru=/[#\?]/g,ou=/[#\?@]/g,Ea=/#/g;function lr(c,v){this.h=this.g=null,this.i=c||null,this.j=!!v}function Vt(c){c.g||(c.g=new Map,c.h=0,c.i&&zd(c.i,function(v,k){c.add(decodeURIComponent(v.replace(/\+/g," ")),k)}))}n=lr.prototype,n.add=function(c,v){Vt(this),this.i=null,c=En(this,c);var k=this.g.get(c);return k||this.g.set(c,k=[]),k.push(v),this.h+=1,this};function Bn(c,v){Vt(c),v=En(c,v),c.g.has(v)&&(c.i=null,c.h-=c.g.get(v).length,c.g.delete(v))}function Kn(c,v){return Vt(c),v=En(c,v),c.g.has(v)}n.forEach=function(c,v){Vt(this),this.g.forEach(function(k,j){k.forEach(function(F){c.call(v,F,j,this)},this)},this)},n.na=function(){Vt(this);const c=Array.from(this.g.values()),v=Array.from(this.g.keys()),k=[];for(let j=0;j<v.length;j++){const F=c[j];for(let K=0;K<F.length;K++)k.push(v[j])}return k},n.V=function(c){Vt(this);let v=[];if(typeof c=="string")Kn(this,c)&&(v=v.concat(this.g.get(En(this,c))));else{c=Array.from(this.g.values());for(let k=0;k<c.length;k++)v=v.concat(c[k])}return v},n.set=function(c,v){return Vt(this),this.i=null,c=En(this,c),Kn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[v]),this.h+=1,this},n.get=function(c,v){return c?(c=this.V(c),0<c.length?String(c[0]):v):v};function uo(c,v,k){Bn(c,v),0<k.length&&(c.i=null,c.g.set(En(c,v),M(k)),c.h+=k.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],v=Array.from(this.g.keys());for(var k=0;k<v.length;k++){var j=v[k];const K=encodeURIComponent(String(j)),ie=this.V(j);for(j=0;j<ie.length;j++){var F=K;ie[j]!==""&&(F+="="+encodeURIComponent(String(ie[j]))),c.push(F)}}return this.i=c.join("&")};function En(c,v){return v=String(v),c.j&&(v=v.toLowerCase()),v}function ur(c,v){v&&!c.j&&(Vt(c),c.i=null,c.g.forEach(function(k,j){var F=j.toLowerCase();j!=F&&(Bn(this,j),uo(this,F,k))},c)),c.j=v}function jd(c,v){const k=new Zo;if(h.Image){const j=new Image;j.onload=P(on,k,"TestLoadImage: loaded",!0,v,j),j.onerror=P(on,k,"TestLoadImage: error",!1,v,j),j.onabort=P(on,k,"TestLoadImage: abort",!1,v,j),j.ontimeout=P(on,k,"TestLoadImage: timeout",!1,v,j),h.setTimeout(function(){j.ontimeout&&j.ontimeout()},1e4),j.src=c}else v(!1)}function iu(c,v){const k=new Zo,j=new AbortController,F=setTimeout(()=>{j.abort(),on(k,"TestPingServer: timeout",!1,v)},1e4);fetch(c,{signal:j.signal}).then(K=>{clearTimeout(F),K.ok?on(k,"TestPingServer: ok",!0,v):on(k,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(F),on(k,"TestPingServer: error",!1,v)})}function on(c,v,k,j,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),j(k)}catch{}}function Ed(){this.g=new va}function su(c,v,k){const j=k||"";try{oo(c,function(F,K){let ie=F;f(F)&&(ie=pa(F)),v.push(j+K+"="+encodeURIComponent(ie))})}catch(F){throw v.push(j+"type="+encodeURIComponent("_badmap")),F}}function Cr(c){this.l=c.Ub||null,this.j=c.eb||!1}N(Cr,Jo),Cr.prototype.g=function(){return new oi(this.l,this.j)},Cr.prototype.i=function(c){return function(){return c}}({});function oi(c,v){_t.call(this),this.D=c,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(oi,_t),n=oi.prototype,n.open=function(c,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=v,this.readyState=1,Wn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(v.body=c),(this.D||h).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;au(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function au(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var v=c.value?c.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!c.done}))&&(this.response=this.responseText+=v)}c.done?$n(this):Wn(this),this.readyState==3&&au(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,$n(this))},n.Qa=function(c){this.g&&(this.response=c,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Wn(c)}n.setRequestHeader=function(c,v){this.u.append(c,v)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],v=this.h.entries();for(var k=v.next();!k.done;)k=k.value,c.push(k[0]+": "+k[1]),k=v.next();return c.join(`\r
`)};function Wn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ir(c){let v="";return se(c,function(k,j){v+=j,v+=":",v+=k,v+=`\r
`}),v}function co(c,v,k){e:{for(j in k){var j=!1;break e}j=!0}j||(k=Ir(k),typeof c=="string"?k!=null&&encodeURIComponent(String(k)):Je(c,v,k))}function nt(c){_t.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(nt,_t);var Sd=/^https?$/i,Sa=["POST","PUT"];n=nt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,v,k,j){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);v=v?v.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Un.g(),this.v=this.o?Hi(this.o):Hi(Un),this.g.onreadystatechange=z(this.Ea,this);try{this.B=!0,this.g.open(v,String(c),!0),this.B=!1}catch(K){ii(this,K);return}if(c=k||"",k=new Map(this.headers),j)if(Object.getPrototypeOf(j)===Object.prototype)for(var F in j)k.set(F,j[F]);else if(typeof j.keys=="function"&&typeof j.get=="function")for(const K of j.keys())k.set(K,j.get(K));else throw Error("Unknown input type for opt_headers: "+String(j));j=Array.from(k.keys()).find(K=>K.toLowerCase()=="content-type"),F=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Sa,v,void 0))||j||F||k.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ie]of k)this.g.setRequestHeader(K,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{es(this),this.u=!0,this.g.send(c),this.u=!1}catch(K){ii(this,K)}};function ii(c,v){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=v,c.m=5,Yi(c),yn(c)}function Yi(c){c.A||(c.A=!0,wt(c,"complete"),wt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,wt(this,"complete"),wt(this,"abort"),yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ta(this):this.bb())},n.bb=function(){Ta(this)};function Ta(c){if(c.h&&typeof u<"u"&&(!c.v[1]||sn(c)!=4||c.Z()!=2)){if(c.u&&sn(c)==4)da(c.Ea,0,c);else if(wt(c,"readystatechange"),sn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var k;if(!(k=v)){var j;if(j=ie===0){var F=String(c.D).match(ni)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),j=!Sd.test(F?F.toLowerCase():"")}k=j}if(k)wt(c,"complete"),wt(c,"success");else{c.m=6;try{var K=2<sn(c)?c.g.statusText:""}catch{K=""}c.l=K+" ["+c.Z()+"]",Yi(c)}}finally{yn(c)}}}}function yn(c,v){if(c.g){es(c);const k=c.g,j=c.v[0]?()=>{}:null;c.g=null,c.v=null,v||wt(c,"ready");try{k.onreadystatechange=j}catch{}}}function es(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function sn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var v=this.g.responseText;return c&&v.indexOf(c)==0&&(v=v.substring(c.length)),fa(v)}};function xa(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ts(c){const v={};c=(c.g&&2<=sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let j=0;j<c.length;j++){if(q(c[j]))continue;var k=R(c[j]);const F=k[0];if(k=k[1],typeof k!="string")continue;k=k.trim();const K=v[F]||[];v[F]=K,K.push(k)}I(v,function(j){return j.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(c,v,k){return k&&k.internalChannelParams&&k.internalChannelParams[c]||v}function Pa(c){this.Aa=0,this.i=[],this.j=new Zo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cr("baseRetryDelayMs",5e3,c),this.cb=cr("retryDelaySeedMs",1e4,c),this.Wa=cr("forwardChannelMaxRetries",2,c),this.wa=cr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ti(c&&c.concurrentRequestLimit),this.Da=new Ed,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pa.prototype,n.la=8,n.G=1,n.connect=function(c,v,k,j){pt(0),this.W=c,this.H=v||{},k&&j!==void 0&&(this.H.OSID=k,this.H.OAID=j),this.F=this.X,this.I=du(this,null,this.W),dr(this)};function Nt(c){if(ns(c),c.G==3){var v=c.U++,k=vn(c.I);if(Je(k,"SID",c.K),Je(k,"RID",v),Je(k,"TYPE","terminate"),Ar(c,k),v=new Hn(c,c.j,v),v.L=2,v.v=ao(vn(k)),k=!1,h.navigator&&h.navigator.sendBeacon)try{k=h.navigator.sendBeacon(v.v.toString(),"")}catch{}!k&&h.Image&&(new Image().src=v.v,k=!0),k||(v.g=hu(v.j,null),v.g.ea(v.v)),v.F=Date.now(),Qe(v)}cu(c)}function Gn(c){c.g&&(Ca(c),c.g.cancel(),c.g=null)}function ns(c){Gn(c),c.u&&(h.clearTimeout(c.u),c.u=null),is(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function dr(c){if(!fn(c.h)&&!c.s){c.s=!0;var v=c.Ga;we||X(),te||(we(),te=!0),ve.add(v,c),c.B=0}}function Td(c,v){return Xl(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=v.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ln(z(c.Ga,c,v),uu(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new Hn(this,this.j,c);let K=this.o;if(this.S&&(K?(K=E(K),C(K,this.S)):K=this.S),this.m!==null||this.O||(F.H=K,K=null),this.P)e:{for(var v=0,k=0;k<this.i.length;k++){t:{var j=this.i[k];if("__data__"in j.map&&(j=j.map.__data__,typeof j=="string")){j=j.length;break t}j=void 0}if(j===void 0)break;if(v+=j,4096<v){v=k;break e}if(v===4096||k===this.i.length-1){v=k+1;break e}}v=1e3}else v=1e3;v=ho(this,F,v),k=vn(this.I),Je(k,"RID",c),Je(k,"CVER",22),this.D&&Je(k,"X-HTTP-Session-Id",this.D),Ar(this,k),K&&(this.O?v="headers="+encodeURIComponent(String(Ir(K)))+"&"+v:this.m&&co(k,this.m,K)),ja(this.h,F),this.Ua&&Je(k,"TYPE","init"),this.P?(Je(k,"$req",v),Je(k,"SID","null"),F.T=!0,Ji(F,k,null)):Ji(F,k,v),this.G=2}}else this.G==3&&(c?rs(this,c):this.i.length==0||fn(this.h)||rs(this))};function rs(c,v){var k;v?k=v.l:k=c.U++;const j=vn(c.I);Je(j,"SID",c.K),Je(j,"RID",k),Je(j,"AID",c.T),Ar(c,j),c.m&&c.o&&co(j,c.m,c.o),k=new Hn(c,c.j,k,c.B+1),c.m===null&&(k.H=c.o),v&&(c.i=v.D.concat(c.i)),v=ho(c,k,1e3),k.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ja(c.h,k),Ji(k,j,v)}function Ar(c,v){c.H&&se(c.H,function(k,j){Je(v,j,k)}),c.l&&oo({},function(k,j){Je(v,j,k)})}function ho(c,v,k){k=Math.min(c.i.length,k);var j=c.l?z(c.l.Na,c.l,c):null;e:{var F=c.i;let K=-1;for(;;){const ie=["count="+k];K==-1?0<k?(K=F[0].g,ie.push("ofs="+K)):K=0:ie.push("ofs="+K);let Ge=!0;for(let zt=0;zt<k;zt++){let Le=F[zt].g;const Pt=F[zt].map;if(Le-=K,0>Le)K=Math.max(0,F[zt].g-100),Ge=!1;else try{su(Pt,ie,"req"+Le+"_")}catch{j&&j(Pt)}}if(Ge){j=ie.join("&");break e}}}return c=c.i.splice(0,k),v.D=c,j}function si(c){if(!c.g&&!c.u){c.Y=1;var v=c.Fa;we||X(),te||(we(),te=!0),ve.add(v,c),c.v=0}}function os(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ln(z(c.Fa,c),uu(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,lu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ln(z(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Gn(this),lu(this))};function Ca(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function lu(c){c.g=new Hn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var v=vn(c.qa);Je(v,"RID","rpc"),Je(v,"SID",c.K),Je(v,"AID",c.T),Je(v,"CI",c.F?"0":"1"),!c.F&&c.ja&&Je(v,"TO",c.ja),Je(v,"TYPE","xmlhttp"),Ar(c,v),c.m&&c.o&&co(v,c.m,c.o),c.L&&(c.g.I=c.L);var k=c.g;c=c.ia,k.L=1,k.v=ao(vn(v)),k.m=null,k.P=!0,wa(k,c)}n.Za=function(){this.C!=null&&(this.C=null,Gn(this),os(this),pt(19))};function is(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function ss(c,v){var k=null;if(c.g==v){is(c),Ca(c),c.g=null;var j=2}else if(Yt(c.h,v))k=v.D,Yl(c.h,v),j=1;else return;if(c.G!=0){if(v.o)if(j==1){k=v.m?v.m.length:0,v=Date.now()-v.F;var F=c.B;j=Qo(),wt(j,new $i(j,k)),dr(c)}else si(c);else if(F=v.s,F==3||F==0&&0<v.X||!(j==1&&Td(c,v)||j==2&&os(c)))switch(k&&0<k.length&&(v=c.h,v.i=v.i.concat(k)),F){case 1:Rr(c,5);break;case 4:Rr(c,10);break;case 3:Rr(c,6);break;default:Rr(c,2)}}}function uu(c,v){let k=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(k*=2),k*v}function Rr(c,v){if(c.j.info("Error code "+v),v==2){var k=z(c.fb,c),j=c.Xa;const F=!j;j=new Pr(j||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ri(j,"https"),ao(j),F?jd(j.toString(),k):iu(j.toString(),k)}else pt(2);c.G=0,c.l&&c.l.sa(v),cu(c),ns(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function cu(c){if(c.G=0,c.ka=[],c.l){const v=eu(c.h);(v.length!=0||c.i.length!=0)&&(L(c.ka,v),L(c.ka,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.ra()}}function du(c,v,k){var j=k instanceof Pr?vn(k):new Pr(k);if(j.g!="")v&&(j.g=v+"."+j.g),io(j,j.s);else{var F=h.location;j=F.protocol,v=v?v+"."+F.hostname:F.hostname,F=+F.port;var K=new Pr(null);j&&ri(K,j),v&&(K.g=v),F&&io(K,F),k&&(K.l=k),j=K}return k=c.D,v=c.ya,k&&v&&Je(j,k,v),Je(j,"VER",c.la),Ar(c,j),j}function hu(c,v,k){if(v&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=c.Ca&&!c.pa?new nt(new Cr({eb:k})):new nt(c.pa),v.Ha(c.J),v}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ia(){}n=Ia.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function as(){}as.prototype.g=function(c,v){return new en(c,v)};function en(c,v){_t.call(this),this.g=new Pa(v),this.l=c,this.h=v&&v.messageUrlParams||null,c=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(c?c["X-WebChannel-Content-Type"]=v.messageContentType:c={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(c?c["X-WebChannel-Client-Profile"]=v.va:c={"X-WebChannel-Client-Profile":v.va}),this.g.S=c,(c=v&&v.Sb)&&!q(c)&&(this.g.m=c),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!q(v)&&(this.g.D=v,c=this.h,c!==null&&v in c&&(c=this.h,v in c&&delete c[v])),this.j=new hr(this)}N(en,_t),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Nt(this.g)},en.prototype.o=function(c){var v=this.g;if(typeof c=="string"){var k={};k.__data__=c,c=k}else this.u&&(k={},k.__data__=pa(c),c=k);v.i.push(new Zl(v.Ya++,c)),v.G==3&&dr(v)},en.prototype.N=function(){this.g.l=null,delete this.j,Nt(this.g),delete this.g,en.aa.N.call(this)};function mu(c){sr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var v=c.__sm__;if(v){e:{for(const k in v){c=k;break e}c=void 0}(this.i=c)&&(c=this.i,v=v!==null&&c in v?v[c]:void 0),this.data=v}else this.data=c}N(mu,sr);function pu(){Ki.call(this),this.status=1}N(pu,Ki);function hr(c){this.g=c}N(hr,Ia),hr.prototype.ua=function(){wt(this.g,"a")},hr.prototype.ta=function(c){wt(this.g,new mu(c))},hr.prototype.sa=function(c){wt(this.g,new pu)},hr.prototype.ra=function(){wt(this.g,"b")},as.prototype.createWebChannel=as.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,V_=function(){return new as},R_=function(){return Qo()},A_=ar,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,bc=Gi,Gl.COMPLETE="complete",I_=Gl,Bi.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",_t.prototype.listen=_t.prototype.K,il=Bi,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,C_=nt}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});const Tk="@firebase/firestore",xk="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Bp("@firebase/firestore");function Cs(){return Ai.logLevel}function ce(n,...e){if(Ai.logLevel<=Ne.DEBUG){const t=e.map(Wp);Ai.debug(`Firestore (${oa}): ${n}`,...t)}}function Zr(n,...e){if(Ai.logLevel<=Ne.ERROR){const t=e.map(Wp);Ai.error(`Firestore (${oa}): ${n}`,...t)}}function Gs(n,...e){if(Ai.logLevel<=Ne.WARN){const t=e.map(Wp);Ai.warn(`Firestore (${oa}): ${n}`,...t)}}function Wp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: `+n;throw Zr(e),new Error(e)}function $e(n,e){n||Ee()}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ke extends eo{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qt.UNAUTHENTICATED))}shutdown(){}}class hC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mC{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0);let o=this.i;const s=m=>this.i!==o?(o=this.i,t(m)):Promise.resolve();let a=new Oo;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Oo,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const m=a;e.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},h=m=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>h(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?h(m):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Oo)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(o=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?($e(typeof o.accessToken=="string"),new N_(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new qt(e)}}class pC{constructor(e,t,o){this.l=e,this.h=t,this.P=o,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class fC{constructor(e,t,o){this.l=e,this.h=t,this.P=o}getToken(){return Promise.resolve(new pC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vC{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,tr(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0);const o=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>o(a))};const s=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Pk(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($e(typeof t.token=="string"),this.R=t.token,new Pk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let o=0;o<n;o++)t[o]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const s=yC(40);for(let a=0;a<s.length;++a)o.length<20&&s[a]<t&&(o+=e.charAt(s[a]%62))}return o}}function Ie(n,e){return n<e?-1:n>e?1:0}function Wm(n,e){let t=0;for(;t<n.length&&t<e.length;){const o=n.codePointAt(t),s=e.codePointAt(t);if(o!==s){if(o<128&&s<128)return Ie(o,s);{const a=D_(),u=gC(a.encode(Ck(n,t)),a.encode(Ck(e,t)));return u!==0?u:Ie(o,s)}}t+=o>65535?2:1}return Ie(n.length,e.length)}function Ck(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function gC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ie(n[t],e[t]);return Ie(n.length,e.length)}function qs(n,e,t){return n.length===e.length&&n.every((o,s)=>t(o,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=-62135596800,Ak=1e6;class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),o=Math.floor((e-1e3*t)*Ak);return new Tt(t,o)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ke(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ke(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ik)throw new ke(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ke(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ak}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ik;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Tt(0,0))}static max(){return new Se(new Tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="__name__";class yr{constructor(e,t,o){t===void 0?t=0:t>e.length&&Ee(),o===void 0?o=e.length-t:o>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=o}get length(){return this.len}isEqual(e){return yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yr?e.forEach(o=>{t.push(o)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,o=this.limit();t<o;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const o=Math.min(e.length,t.length);for(let s=0;s<o;s++){const a=yr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Ie(e.length,t.length)}static compareSegments(e,t){const o=yr.isNumericId(e),s=yr.isNumericId(t);return o&&!s?-1:!o&&s?1:o&&s?yr.extractNumericId(e).compare(yr.extractNumericId(t)):Wm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Do.fromString(e.substring(4,e.length-2))}}class dt extends yr{construct(e,t,o){return new dt(e,t,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const o of e){if(o.indexOf("//")>=0)throw new ke(ee.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);t.push(...o.split("/").filter(s=>s.length>0))}return new dt(t)}static emptyPath(){return new dt([])}}const kC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends yr{construct(e,t,o){return new Ft(e,t,o)}static isValidIdentifier(e){return kC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rk}static keyField(){return new Ft([Rk])}static fromServerFormat(e){const t=[];let o="",s=0;const a=()=>{if(o.length===0)throw new ke(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(o),o=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new ke(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ke(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=m,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(o+=h,s++):(a(),s++)}if(a(),u)throw new ke(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(dt.fromString(e))}static fromName(e){return new be(dt.fromString(e).popFirst(5))}static empty(){return new be(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return dt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new dt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=-1;function bC(n,e){const t=n.toTimestamp().seconds,o=n.toTimestamp().nanoseconds+1,s=Se.fromTimestamp(o===1e9?new Tt(t+1,0):new Tt(t,o));return new Fo(s,be.empty(),e)}function _C(n){return new Fo(n.readTime,n.key,El)}class Fo{constructor(e,t,o){this.readTime=e,this.documentKey=t,this.largestBatchId=o}static min(){return new Fo(Se.min(),be.empty(),El)}static max(){return new Fo(Se.max(),be.empty(),El)}}function wC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(n.documentKey,e.documentKey),t!==0?t:Ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==zC)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((o,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(o,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(o,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,o)=>{t(e)})}static reject(e){return new G((t,o)=>{o(e)})}static waitFor(e){return new G((t,o)=>{let s=0,a=0,u=!1;e.forEach(h=>{++s,h.next(()=>{++a,u&&a===s&&t()},m=>o(m))}),u=!0,a===s&&t()})}static or(e){let t=G.resolve(!1);for(const o of e)t=t.next(s=>s?G.resolve(s):o());return t}static forEach(e,t){const o=[];return e.forEach((s,a)=>{o.push(t.call(this,s,a))}),this.waitFor(o)}static mapArray(e,t){return new G((o,s)=>{const a=e.length,u=new Array(a);let h=0;for(let m=0;m<a;m++){const f=m;t(e[f]).next(g=>{u[f]=g,++h,h===a&&o(u)},g=>s(g))}})}static doWhile(e,t){return new G((o,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):o()};a()})}}function EC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sa(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=o=>this.oe(o),this._e=o=>t.writeSequenceNumber(o))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}sd.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=-1;function ad(n){return n==null}function Oc(n){return n===0&&1/n==-1/0}function SC(n){return typeof n=="number"&&Number.isInteger(n)&&!Oc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="";function TC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vk(e)),e=xC(n.get(t),e);return Vk(e)}function xC(n,e){let t=e;const o=n.length;for(let s=0;s<o;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case M_:t+="";break;default:t+=a}}return t}function Vk(n){return n+M_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Di(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function L_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const o=this.comparator(e,t.key);if(o===0)return t.value;o<0?t=t.left:o>0&&(t=t.right)}return null}indexOf(e){let t=0,o=this.root;for(;!o.isEmpty();){const s=this.comparator(e,o.key);if(s===0)return t+o.left.size;s<0?o=o.left:(t+=o.left.size+1,o=o.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,o)=>(e(t,o),!1))}toString(){const e=[];return this.inorderTraversal((t,o)=>(e.push(`${t}:${o}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hc(this.root,e,this.comparator,!0)}}class hc{constructor(e,t,o,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?o(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,o,s,a){this.key=e,this.value=t,this.color=o??Lt.RED,this.left=s??Lt.EMPTY,this.right=a??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,o,s,a){return new Lt(e??this.key,t??this.value,o??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,o){let s=this;const a=o(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,o),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,o)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let o,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;o=s.right.min(),s=s.copy(o.key,o.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,o,s,a){return this}insert(e,t,o){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,o)=>(e(t),!1))}forEachInRange(e,t){const o=this.data.getIteratorFrom(e[0]);for(;o.hasNext();){const s=o.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let o;for(o=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();o.hasNext();)if(!e(o.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dk(this.data.getIterator())}getIteratorFrom(e){return new Dk(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(o=>{t=t.add(o)}),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),o=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=o.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class Dk{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new nr([])}unionWith(e){let t=new xt(Ft.comparator);for(const o of this.fields)t=t.add(o);for(const o of e)t=t.add(o);return new nr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(t,o)=>t.isEqual(o))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new F_("Invalid base64 string: "+a):a}}(e);return new Ut(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const o=new Uint8Array(t.length);for(let s=0;s<t.length;s++)o[s]=t.charCodeAt(s);return o}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Uo(n){if($e(!!n),typeof n=="string"){let e=0;const t=PC.exec(n);if($e(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const o=new Date(n);return{seconds:Math.floor(o.getTime()/1e3),nanos:e}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ho(n){return typeof n=="string"?Ut.fromBase64String(n):Ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="server_timestamp",H_="__type__",B_="__previous_value__",K_="__local_write_time__";function qp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[H_])===null||t===void 0?void 0:t.stringValue)===U_}function ld(n){const e=n.mapValue.fields[B_];return qp(e)?ld(e):e}function Sl(n){const e=Uo(n.mapValue.fields[K_].timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t,o,s,a,u,h,m,f){this.databaseId=e,this.appId=t,this.persistenceKey=o,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=m,this.useFetchStreams=f}}const Mc="(default)";class Tl{constructor(e,t){this.projectId=e,this.database=t||Mc}static empty(){return new Tl("","")}get isDefaultDatabase(){return this.database===Mc}isEqual(e){return e instanceof Tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="__type__",IC="__max__",mc={mapValue:{}},W_="__vector__",Lc="value";function Bo(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qp(n)?4:RC(n)?9007199254740991:AC(n)?10:11:Ee()}function zr(n,e){if(n===e)return!0;const t=Bo(n);if(t!==Bo(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Sl(n).isEqual(Sl(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Uo(s.timestampValue),h=Uo(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return Ho(s.bytesValue).isEqual(Ho(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return yt(s.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return yt(s.integerValue)===yt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=yt(s.doubleValue),h=yt(a.doubleValue);return u===h?Oc(u)===Oc(h):isNaN(u)&&isNaN(h)}return!1}(n,e);case 9:return qs(n.arrayValue.values||[],e.arrayValue.values||[],zr);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},h=a.mapValue.fields||{};if(Nk(u)!==Nk(h))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(h[m]===void 0||!zr(u[m],h[m])))return!1;return!0}(n,e);default:return Ee()}}function xl(n,e){return(n.values||[]).find(t=>zr(t,e))!==void 0}function Js(n,e){if(n===e)return 0;const t=Bo(n),o=Bo(e);if(t!==o)return Ie(t,o);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(n.booleanValue,e.booleanValue);case 2:return function(a,u){const h=yt(a.integerValue||a.doubleValue),m=yt(u.integerValue||u.doubleValue);return h<m?-1:h>m?1:h===m?0:isNaN(h)?isNaN(m)?0:-1:1}(n,e);case 3:return Ok(n.timestampValue,e.timestampValue);case 4:return Ok(Sl(n),Sl(e));case 5:return Wm(n.stringValue,e.stringValue);case 6:return function(a,u){const h=Ho(a),m=Ho(u);return h.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const h=a.split("/"),m=u.split("/");for(let f=0;f<h.length&&f<m.length;f++){const g=Ie(h[f],m[f]);if(g!==0)return g}return Ie(h.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const h=Ie(yt(a.latitude),yt(u.latitude));return h!==0?h:Ie(yt(a.longitude),yt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mk(n.arrayValue,e.arrayValue);case 10:return function(a,u){var h,m,f,g;const b=a.fields||{},z=u.fields||{},P=(h=b[Lc])===null||h===void 0?void 0:h.arrayValue,N=(m=z[Lc])===null||m===void 0?void 0:m.arrayValue,M=Ie(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0);return M!==0?M:Mk(P,N)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===mc.mapValue&&u===mc.mapValue)return 0;if(a===mc.mapValue)return 1;if(u===mc.mapValue)return-1;const h=a.fields||{},m=Object.keys(h),f=u.fields||{},g=Object.keys(f);m.sort(),g.sort();for(let b=0;b<m.length&&b<g.length;++b){const z=Wm(m[b],g[b]);if(z!==0)return z;const P=Js(h[m[b]],f[g[b]]);if(P!==0)return P}return Ie(m.length,g.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function Ok(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ie(n,e);const t=Uo(n),o=Uo(e),s=Ie(t.seconds,o.seconds);return s!==0?s:Ie(t.nanos,o.nanos)}function Mk(n,e){const t=n.values||[],o=e.values||[];for(let s=0;s<t.length&&s<o.length;++s){const a=Js(t[s],o[s]);if(a)return a}return Ie(t.length,o.length)}function Qs(n){return Gm(n)}function Gm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const o=Uo(t);return`time(${o.seconds},${o.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ho(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return be.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let o="[",s=!0;for(const a of t.values||[])s?s=!1:o+=",",o+=Gm(a);return o+"]"}(n.arrayValue):"mapValue"in n?function(t){const o=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of o)a?a=!1:s+=",",s+=`${u}:${Gm(t.fields[u])}`;return s+"}"}(n.mapValue):Ee()}function _c(n){switch(Bo(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ld(n);return e?16+_c(e):16;case 5:return 2*n.stringValue.length;case 6:return Ho(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(o){return(o.values||[]).reduce((s,a)=>s+_c(a),0)}(n.arrayValue);case 10:case 11:return function(o){let s=0;return Di(o.fields,(a,u)=>{s+=a.length+_c(u)}),s}(n.mapValue);default:throw Ee()}}function qm(n){return!!n&&"integerValue"in n}function Jp(n){return!!n&&"arrayValue"in n}function Lk(n){return!!n&&"nullValue"in n}function Fk(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wc(n){return!!n&&"mapValue"in n}function AC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[$_])===null||t===void 0?void 0:t.stringValue)===W_}function hl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Di(n.mapValue.fields,(t,o)=>e.mapValue.fields[t]=hl(o)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function RC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===IC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let o=0;o<e.length-1;++o)if(t=(t.mapValue.fields||{})[e.get(o)],!wc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hl(t)}setAll(e){let t=Ft.emptyPath(),o={},s=[];e.forEach((u,h)=>{if(!t.isImmediateParentOf(h)){const m=this.getFieldsMap(t);this.applyChanges(m,o,s),o={},s=[],t=h.popLast()}u?o[h.lastSegment()]=hl(u):s.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,o,s)}delete(e){const t=this.field(e.popLast());wc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let o=0;o<e.length;++o){let s=t.mapValue.fields[e.get(o)];wc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(o)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,o){Di(t,(s,a)=>e[s]=a);for(const s of o)delete e[s]}clone(){return new Nn(hl(this.value))}}function G_(n){const e=[];return Di(n.fields,(t,o)=>{const s=new Ft([t]);if(wc(o)){const a=G_(o.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new nr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,o,s,a,u,h){this.key=e,this.documentType=t,this.version=o,this.readTime=s,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new Jt(e,0,Se.min(),Se.min(),Se.min(),Nn.empty(),0)}static newFoundDocument(e,t,o,s){return new Jt(e,1,t,Se.min(),o,s,0)}static newNoDocument(e,t){return new Jt(e,2,t,Se.min(),Se.min(),Nn.empty(),0)}static newUnknownDocument(e,t){return new Jt(e,3,t,Se.min(),Se.min(),Nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.position=e,this.inclusive=t}}function Uk(n,e,t){let o=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?o=be.comparator(be.fromName(u.referenceValue),t.key):o=Js(u,t.data.field(a.field)),a.dir==="desc"&&(o*=-1),o!==0)break}return o}function Hk(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t="asc"){this.field=e,this.dir=t}}function VC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{}class St extends q_{constructor(e,t,o){super(),this.field=e,this.op=t,this.value=o}static create(e,t,o){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,o):new DC(e,t,o):t==="array-contains"?new LC(e,o):t==="in"?new FC(e,o):t==="not-in"?new UC(e,o):t==="array-contains-any"?new HC(e,o):new St(e,t,o)}static createKeyFieldInFilter(e,t,o){return t==="in"?new OC(e,o):new MC(e,o)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Js(t,this.value)):t!==null&&Bo(this.value)===Bo(t)&&this.matchesComparison(Js(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jr extends q_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new jr(e,t)}matches(e){return J_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function J_(n){return n.op==="and"}function Q_(n){return NC(n)&&J_(n)}function NC(n){for(const e of n.filters)if(e instanceof jr)return!1;return!0}function Jm(n){if(n instanceof St)return n.field.canonicalString()+n.op.toString()+Qs(n.value);if(Q_(n))return n.filters.map(e=>Jm(e)).join(",");{const e=n.filters.map(t=>Jm(t)).join(",");return`${n.op}(${e})`}}function Z_(n,e){return n instanceof St?function(o,s){return s instanceof St&&o.op===s.op&&o.field.isEqual(s.field)&&zr(o.value,s.value)}(n,e):n instanceof jr?function(o,s){return s instanceof jr&&o.op===s.op&&o.filters.length===s.filters.length?o.filters.reduce((a,u,h)=>a&&Z_(u,s.filters[h]),!0):!1}(n,e):void Ee()}function X_(n){return n instanceof St?function(t){return`${t.field.canonicalString()} ${t.op} ${Qs(t.value)}`}(n):n instanceof jr?function(t){return t.op.toString()+" {"+t.getFilters().map(X_).join(" ,")+"}"}(n):"Filter"}class DC extends St{constructor(e,t,o){super(e,t,o),this.key=be.fromName(o.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class OC extends St{constructor(e,t){super(e,"in",t),this.keys=Y_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class MC extends St{constructor(e,t){super(e,"not-in",t),this.keys=Y_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Y_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(o=>be.fromName(o.referenceValue))}class LC extends St{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jp(t)&&xl(t.arrayValue,this.value)}}class FC extends St{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xl(this.value.arrayValue,t)}}class UC extends St{constructor(e,t){super(e,"not-in",t)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!xl(this.value.arrayValue,t)}}class HC extends St{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(o=>xl(this.value.arrayValue,o))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,t=null,o=[],s=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=o,this.filters=s,this.limit=a,this.startAt=u,this.endAt=h,this.le=null}}function Bk(n,e=null,t=[],o=[],s=null,a=null,u=null){return new BC(n,e,t,o,s,a,u)}function Qp(n){const e=Te(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(o=>Jm(o)).join(","),t+="|ob:",t+=e.orderBy.map(o=>function(a){return a.field.canonicalString()+a.dir}(o)).join(","),ad(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(o=>Qs(o)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(o=>Qs(o)).join(",")),e.le=t}return e.le}function Zp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!VC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Z_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Hk(n.startAt,e.startAt)&&Hk(n.endAt,e.endAt)}function Qm(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t=null,o=[],s=[],a=null,u="F",h=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=o,this.filters=s,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function KC(n,e,t,o,s,a,u,h){return new ud(n,e,t,o,s,a,u,h)}function Xp(n){return new ud(n)}function Kk(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $C(n){return n.collectionGroup!==null}function ml(n){const e=Te(n);if(e.he===null){e.he=[];const t=new Set;for(const a of e.explicitOrderBy)e.he.push(a),t.add(a.field.canonicalString());const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new xt(Ft.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.he.push(new Uc(a,o))}),t.has(Ft.keyField().canonicalString())||e.he.push(new Uc(Ft.keyField(),o))}return e.he}function br(n){const e=Te(n);return e.Pe||(e.Pe=WC(e,ml(n))),e.Pe}function WC(n,e){if(n.limitType==="F")return Bk(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Uc(s.field,a)});const t=n.endAt?new Fc(n.endAt.position,n.endAt.inclusive):null,o=n.startAt?new Fc(n.startAt.position,n.startAt.inclusive):null;return Bk(n.path,n.collectionGroup,e,n.filters,n.limit,t,o)}}function Zm(n,e,t){return new ud(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cd(n,e){return Zp(br(n),br(e))&&n.limitType===e.limitType}function ew(n){return`${Qp(br(n))}|lt:${n.limitType}`}function Is(n){return`Query(target=${function(t){let o=t.path.canonicalString();return t.collectionGroup!==null&&(o+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(o+=`, filters: [${t.filters.map(s=>X_(s)).join(", ")}]`),ad(t.limit)||(o+=", limit: "+t.limit),t.orderBy.length>0&&(o+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(o+=", startAt: ",o+=t.startAt.inclusive?"b:":"a:",o+=t.startAt.position.map(s=>Qs(s)).join(",")),t.endAt&&(o+=", endAt: ",o+=t.endAt.inclusive?"a:":"b:",o+=t.endAt.position.map(s=>Qs(s)).join(",")),`Target(${o})`}(br(n))}; limitType=${n.limitType})`}function dd(n,e){return e.isFoundDocument()&&function(o,s){const a=s.key.path;return o.collectionGroup!==null?s.key.hasCollectionId(o.collectionGroup)&&o.path.isPrefixOf(a):be.isDocumentKey(o.path)?o.path.isEqual(a):o.path.isImmediateParentOf(a)}(n,e)&&function(o,s){for(const a of ml(o))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(o,s){for(const a of o.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(o,s){return!(o.startAt&&!function(u,h,m){const f=Uk(u,h,m);return u.inclusive?f<=0:f<0}(o.startAt,ml(o),s)||o.endAt&&!function(u,h,m){const f=Uk(u,h,m);return u.inclusive?f>=0:f>0}(o.endAt,ml(o),s))}(n,e)}function GC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tw(n){return(e,t)=>{let o=!1;for(const s of ml(n)){const a=qC(s,e,t);if(a!==0)return a;o=o||s.field.isKeyField()}return 0}}function qC(n,e,t){const o=n.field.isKeyField()?be.comparator(e.key,t.key):function(a,u,h){const m=u.data.field(a),f=h.data.field(a);return m!==null&&f!==null?Js(m,f):Ee()}(n.field,e,t);switch(n.dir){case"asc":return o;case"desc":return-1*o;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),o=this.inner[t];if(o!==void 0){for(const[s,a]of o)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const o=this.mapKeyFn(e),s=this.inner[o];if(s===void 0)return this.inner[o]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),o=this.inner[t];if(o===void 0)return!1;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],e))return o.length===1?delete this.inner[t]:o.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,(t,o)=>{for(const[s,a]of o)e(s,a)})}isEmpty(){return L_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new lt(be.comparator);function Xr(){return JC}const nw=new lt(be.comparator);function sl(...n){let e=nw;for(const t of n)e=e.insert(t.key,t);return e}function rw(n){let e=nw;return n.forEach((t,o)=>e=e.insert(t,o.overlayedDocument)),e}function Ei(){return pl()}function ow(){return pl()}function pl(){return new Oi(n=>n.toString(),(n,e)=>n.isEqual(e))}const QC=new lt(be.comparator),ZC=new xt(be.comparator);function De(...n){let e=ZC;for(const t of n)e=e.add(t);return e}const XC=new xt(Ie);function YC(){return XC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oc(e)?"-0":e}}function iw(n){return{integerValue:""+n}}function eI(n,e){return SC(e)?iw(e):Yp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this._=void 0}}function tI(n,e,t){return n instanceof Hc?function(s,a){const u={fields:{[H_]:{stringValue:U_},[K_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&qp(a)&&(a=ld(a)),a&&(u.fields[B_]=a),{mapValue:u}}(t,e):n instanceof Pl?aw(n,e):n instanceof Cl?lw(n,e):function(s,a){const u=sw(s,a),h=$k(u)+$k(s.Ie);return qm(u)&&qm(s.Ie)?iw(h):Yp(s.serializer,h)}(n,e)}function nI(n,e,t){return n instanceof Pl?aw(n,e):n instanceof Cl?lw(n,e):t}function sw(n,e){return n instanceof Bc?function(o){return qm(o)||function(a){return!!a&&"doubleValue"in a}(o)}(e)?e:{integerValue:0}:null}class Hc extends hd{}class Pl extends hd{constructor(e){super(),this.elements=e}}function aw(n,e){const t=uw(e);for(const o of n.elements)t.some(s=>zr(s,o))||t.push(o);return{arrayValue:{values:t}}}class Cl extends hd{constructor(e){super(),this.elements=e}}function lw(n,e){let t=uw(e);for(const o of n.elements)t=t.filter(s=>!zr(s,o));return{arrayValue:{values:t}}}class Bc extends hd{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function $k(n){return yt(n.integerValue||n.doubleValue)}function uw(n){return Jp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function rI(n,e){return n.field.isEqual(e.field)&&function(o,s){return o instanceof Pl&&s instanceof Pl||o instanceof Cl&&s instanceof Cl?qs(o.elements,s.elements,zr):o instanceof Bc&&s instanceof Bc?zr(o.Ie,s.Ie):o instanceof Hc&&s instanceof Hc}(n.transform,e.transform)}class oI{constructor(e,t){this.version=e,this.transformResults=t}}class qr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qr}static exists(e){return new qr(void 0,e)}static updateTime(e){return new qr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class md{}function cw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hw(n.key,qr.none()):new Fl(n.key,n.data,qr.none());{const t=n.data,o=Nn.empty();let s=new xt(Ft.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?o.delete(a):o.set(a,u),s=s.add(a)}return new Mi(n.key,o,new nr(s.toArray()),qr.none())}}function iI(n,e,t){n instanceof Fl?function(s,a,u){const h=s.value.clone(),m=Gk(s.fieldTransforms,a,u.transformResults);h.setAll(m),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Mi?function(s,a,u){if(!zc(s.precondition,a))return void a.convertToUnknownDocument(u.version);const h=Gk(s.fieldTransforms,a,u.transformResults),m=a.data;m.setAll(dw(s)),m.setAll(h),a.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function fl(n,e,t,o){return n instanceof Fl?function(a,u,h,m){if(!zc(a.precondition,u))return h;const f=a.value.clone(),g=qk(a.fieldTransforms,m,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,e,t,o):n instanceof Mi?function(a,u,h,m){if(!zc(a.precondition,u))return h;const f=qk(a.fieldTransforms,m,u),g=u.data;return g.setAll(dw(a)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(b=>b.field))}(n,e,t,o):function(a,u,h){return zc(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,e,t)}function sI(n,e){let t=null;for(const o of n.fieldTransforms){const s=e.data.field(o.field),a=sw(o.transform,s||null);a!=null&&(t===null&&(t=Nn.empty()),t.set(o.field,a))}return t||null}function Wk(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(o,s){return o===void 0&&s===void 0||!(!o||!s)&&qs(o,s,(a,u)=>rI(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fl extends md{constructor(e,t,o,s=[]){super(),this.key=e,this.value=t,this.precondition=o,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mi extends md{constructor(e,t,o,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=o,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function dw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const o=n.data.field(t);e.set(t,o)}}),e}function Gk(n,e,t){const o=new Map;$e(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,h=e.data.field(a.field);o.set(a.field,nI(u,h,t[s]))}return o}function qk(n,e,t){const o=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);o.set(s.field,tI(a,u,e))}return o}class hw extends md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aI extends md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t,o,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=o,this.mutations=s}applyToRemoteDocument(e,t){const o=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&iI(a,e,o[s])}}applyToLocalView(e,t){for(const o of this.baseMutations)o.key.isEqual(e.key)&&(t=fl(o,e,t,this.localWriteTime));for(const o of this.mutations)o.key.isEqual(e.key)&&(t=fl(o,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const o=ow();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=t.has(s.key)?null:h;const m=cw(u,h);m!==null&&o.set(s.key,m),u.isValidDocument()||u.convertToNoDocument(Se.min())}),o}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(t,o)=>Wk(t,o))&&qs(this.baseMutations,e.baseMutations,(t,o)=>Wk(t,o))}}class ef{constructor(e,t,o,s){this.batch=e,this.commitVersion=t,this.mutationResults=o,this.docVersions=s}static from(e,t,o){$e(e.mutations.length===o.length);let s=function(){return QC}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,o[u].version);return new ef(e,t,o,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Fe;function dI(n){switch(n){case ee.OK:return Ee();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return Ee()}}function mw(n){if(n===void 0)return Zr("GRPC error has no .code"),ee.UNKNOWN;switch(n){case bt.OK:return ee.OK;case bt.CANCELLED:return ee.CANCELLED;case bt.UNKNOWN:return ee.UNKNOWN;case bt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case bt.INTERNAL:return ee.INTERNAL;case bt.UNAVAILABLE:return ee.UNAVAILABLE;case bt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case bt.NOT_FOUND:return ee.NOT_FOUND;case bt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case bt.ABORTED:return ee.ABORTED;case bt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case bt.DATA_LOSS:return ee.DATA_LOSS;default:return Ee()}}(Fe=bt||(bt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new Do([4294967295,4294967295],0);function Jk(n){const e=D_().encode(n),t=new P_;return t.update(e),new Uint8Array(t.digest())}function Qk(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),o=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Do([t,o],0),new Do([s,a],0)]}class tf{constructor(e,t,o){if(this.bitmap=e,this.padding=t,this.hashCount=o,t<0||t>=8)throw new al(`Invalid padding: ${t}`);if(o<0)throw new al(`Invalid hash count: ${o}`);if(e.length>0&&this.hashCount===0)throw new al(`Invalid hash count: ${o}`);if(e.length===0&&t!==0)throw new al(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Do.fromNumber(this.Ee)}Ae(e,t,o){let s=e.add(t.multiply(Do.fromNumber(o)));return s.compare(hI)===1&&(s=new Do([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Jk(e),[o,s]=Qk(t);for(let a=0;a<this.hashCount;a++){const u=this.Ae(o,s,a);if(!this.Re(u))return!1}return!0}static create(e,t,o){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new tf(a,s,t);return o.forEach(h=>u.insert(h)),u}insert(e){if(this.Ee===0)return;const t=Jk(e),[o,s]=Qk(t);for(let a=0;a<this.hashCount;a++){const u=this.Ae(o,s,a);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),o=e%8;this.bitmap[t]|=1<<o}}class al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,t,o,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=o,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,o){const s=new Map;return s.set(e,Ul.createSynthesizedTargetChangeForCurrentChange(e,t,o)),new pd(Se.min(),s,new lt(Ie),Xr(),De())}}class Ul{constructor(e,t,o,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=o,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,o){return new Ul(o,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,o,s){this.me=e,this.removedTargetIds=t,this.key=o,this.fe=s}}class pw{constructor(e,t){this.targetId=e,this.ge=t}}class fw{constructor(e,t,o=Ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=o,this.cause=s}}class Zk{constructor(){this.pe=0,this.ye=Xk(),this.we=Ut.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=De(),t=De(),o=De();return this.ye.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:o=o.add(s);break;default:Ee()}}),new Ul(this.we,this.Se,e,t,o)}Me(){this.be=!1,this.ye=Xk()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,$e(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class mI{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Xr(),this.$e=pc(),this.Ue=pc(),this.Ke=new lt(Ie)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const o=this.He(t);switch(e.state){case 0:this.Je(t)&&o.Ce(e.resumeToken);break;case 1:o.Be(),o.De||o.Me(),o.Ce(e.resumeToken);break;case 2:o.Be(),o.De||this.removeTarget(t);break;case 3:this.Je(t)&&(o.Le(),o.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),o.Ce(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((o,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,o=e.ge.count,s=this.Xe(t);if(s){const a=s.target;if(Qm(a))if(o===0){const u=new be(a.path);this.ze(t,u,Jt.newNoDocument(u,Se.min()))}else $e(o===1);else{const u=this.et(t);if(u!==o){const h=this.tt(e),m=h?this.nt(h,e,u):1;if(m!==0){this.Ye(t);const f=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,f)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:o="",padding:s=0},hashCount:a=0}=t;let u,h;try{u=Ho(o).toUint8Array()}catch(m){if(m instanceof F_)return Gs("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{h=new tf(u,s,a)}catch(m){return Gs(m instanceof al?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return h.Ee===0?null:h}nt(e,t,o){return t.ge.count===o-this.st(e,t.targetId)?0:2}st(e,t){const o=this.ke.getRemoteKeysForTarget(t);let s=0;return o.forEach(a=>{const u=this.ke.it(),h=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.ze(t,a,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((a,u)=>{const h=this.Xe(u);if(h){if(a.current&&Qm(h.target)){const m=new be(h.target.path);this._t(m).has(u)||this.ut(u,m)||this.ze(u,m,Jt.newNoDocument(m,e))}a.ve&&(t.set(u,a.Fe()),a.Me())}});let o=De();this.Ue.forEach((a,u)=>{let h=!0;u.forEachWhile(m=>{const f=this.Xe(m);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(o=o.add(a))}),this.Qe.forEach((a,u)=>u.setReadTime(e));const s=new pd(e,t,this.Ke,this.Qe,o);return this.Qe=Xr(),this.$e=pc(),this.Ue=pc(),this.Ke=new lt(Ie),s}Ge(e,t){if(!this.Je(e))return;const o=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,o),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,o){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),o&&(this.Qe=this.Qe.insert(t,o))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Zk,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new xt(Ie),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new xt(Ie),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Zk),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function pc(){return new lt(be.comparator)}function Xk(){return new lt(be.comparator)}const pI={asc:"ASCENDING",desc:"DESCENDING"},fI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vI={and:"AND",or:"OR"};class yI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xm(n,e){return n.useProto3Json||ad(e)?e:{value:e}}function Kc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gI(n,e){return Kc(n,e.toTimestamp())}function _r(n){return $e(!!n),Se.fromTimestamp(function(t){const o=Uo(t);return new Tt(o.seconds,o.nanos)}(n))}function nf(n,e){return Ym(n,e).canonicalString()}function Ym(n,e){const t=function(s){return new dt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yw(n){const e=dt.fromString(n);return $e(ww(e)),e}function ep(n,e){return nf(n.databaseId,e.path)}function fm(n,e){const t=yw(e);if(t.get(1)!==n.databaseId.projectId)throw new ke(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ke(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new be(kw(t))}function gw(n,e){return nf(n.databaseId,e)}function kI(n){const e=yw(n);return e.length===4?dt.emptyPath():kw(e)}function tp(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kw(n){return $e(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yk(n,e,t){return{name:ep(n,e),fields:t.value.mapValue.fields}}function bI(n,e){let t;if("targetChange"in e){e.targetChange;const o=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(f,g){return f.useProto3Json?($e(g===void 0||typeof g=="string"),Ut.fromBase64String(g||"")):($e(g===void 0||g instanceof Buffer||g instanceof Uint8Array),Ut.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(f){const g=f.code===void 0?ee.UNKNOWN:mw(f.code);return new ke(g,f.message||"")}(u);t=new fw(o,s,a,h||null)}else if("documentChange"in e){e.documentChange;const o=e.documentChange;o.document,o.document.name,o.document.updateTime;const s=fm(n,o.document.name),a=_r(o.document.updateTime),u=o.document.createTime?_r(o.document.createTime):Se.min(),h=new Nn({mapValue:{fields:o.document.fields}}),m=Jt.newFoundDocument(s,a,u,h),f=o.targetIds||[],g=o.removedTargetIds||[];t=new jc(f,g,m.key,m)}else if("documentDelete"in e){e.documentDelete;const o=e.documentDelete;o.document;const s=fm(n,o.document),a=o.readTime?_r(o.readTime):Se.min(),u=Jt.newNoDocument(s,a),h=o.removedTargetIds||[];t=new jc([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const o=e.documentRemove;o.document;const s=fm(n,o.document),a=o.removedTargetIds||[];t=new jc([],a,s,null)}else{if(!("filter"in e))return Ee();{e.filter;const o=e.filter;o.targetId;const{count:s=0,unchangedNames:a}=o,u=new cI(s,a),h=o.targetId;t=new pw(h,u)}}return t}function _I(n,e){let t;if(e instanceof Fl)t={update:Yk(n,e.key,e.value)};else if(e instanceof hw)t={delete:ep(n,e.key)};else if(e instanceof Mi)t={update:Yk(n,e.key,e.data),updateMask:CI(e.fieldMask)};else{if(!(e instanceof aI))return Ee();t={verify:ep(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(o=>function(a,u){const h=u.transform;if(h instanceof Hc)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Pl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Cl)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Bc)return{fieldPath:u.field.canonicalString(),increment:h.Ie};throw Ee()}(0,o))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:gI(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ee()}(n,e.precondition)),t}function wI(n,e){return n&&n.length>0?($e(e!==void 0),n.map(t=>function(s,a){let u=s.updateTime?_r(s.updateTime):_r(a);return u.isEqual(Se.min())&&(u=_r(a)),new oI(u,s.transformResults||[])}(t,e))):[]}function zI(n,e){return{documents:[gw(n,e.path)]}}function jI(n,e){const t={structuredQuery:{}},o=e.path;let s;e.collectionGroup!==null?(s=o,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=o.popLast(),t.structuredQuery.from=[{collectionId:o.lastSegment()}]),t.parent=gw(n,s);const a=function(f){if(f.length!==0)return _w(jr.create(f,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(f){if(f.length!==0)return f.map(g=>function(z){return{field:As(z.field),direction:TI(z.dir)}}(g))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=Xm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ht:t,parent:s}}function EI(n){let e=kI(n.parent);const t=n.structuredQuery,o=t.from?t.from.length:0;let s=null;if(o>0){$e(o===1);const g=t.from[0];g.allDescendants?s=g.collectionId:e=e.child(g.collectionId)}let a=[];t.where&&(a=function(b){const z=bw(b);return z instanceof jr&&Q_(z)?z.getFilters():[z]}(t.where));let u=[];t.orderBy&&(u=function(b){return b.map(z=>function(N){return new Uc(Rs(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(z))}(t.orderBy));let h=null;t.limit&&(h=function(b){let z;return z=typeof b=="object"?b.value:b,ad(z)?null:z}(t.limit));let m=null;t.startAt&&(m=function(b){const z=!!b.before,P=b.values||[];return new Fc(P,z)}(t.startAt));let f=null;return t.endAt&&(f=function(b){const z=!b.before,P=b.values||[];return new Fc(P,z)}(t.endAt)),KC(e,s,u,a,h,"F",m,f)}function SI(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const o=Rs(t.unaryFilter.field);return St.create(o,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(t.unaryFilter.field);return St.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Rs(t.unaryFilter.field);return St.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Rs(t.unaryFilter.field);return St.create(u,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return St.create(Rs(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return jr.create(t.compositeFilter.filters.map(o=>bw(o)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function TI(n){return pI[n]}function xI(n){return fI[n]}function PI(n){return vI[n]}function As(n){return{fieldPath:n.canonicalString()}}function Rs(n){return Ft.fromServerFormat(n.fieldPath)}function _w(n){return n instanceof St?function(t){if(t.op==="=="){if(Fk(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NAN"}};if(Lk(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fk(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NOT_NAN"}};if(Lk(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(t.field),op:xI(t.op),value:t.value}}}(n):n instanceof jr?function(t){const o=t.getFilters().map(s=>_w(s));return o.length===1?o[0]:{compositeFilter:{op:PI(t.op),filters:o}}}(n):Ee()}function CI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ww(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,o,s,a=Se.min(),u=Se.min(),h=Ut.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=o,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=m}withSequenceNumber(e){return new Ao(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ao(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ao(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ao(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.Tt=e}}function AI(n){const e=EI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.Tn=new VI}addToCollectionParentIndex(e,t){return this.Tn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Fo.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Fo.min())}updateCollectionGroup(e,t,o){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class VI{constructor(){this.index={}}add(e){const t=e.lastSegment(),o=e.popLast(),s=this.index[t]||new xt(dt.comparator),a=!s.has(o);return this.index[t]=s.add(o),a}has(e){const t=e.lastSegment(),o=e.popLast(),s=this.index[t];return s&&s.has(o)}getEntries(e){return(this.index[e]||new xt(dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zw=41943040;class mn{static withCacheSize(e){return new mn(e,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,o){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn.DEFAULT_COLLECTION_PERCENTILE=10,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mn.DEFAULT=new mn(zw,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mn.DISABLED=new mn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Zs(0)}static Kn(){return new Zs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="LruGarbageCollector",NI=1048576;function n0([n,e],[t,o]){const s=Ie(n,t);return s===0?Ie(e,o):s}class DI{constructor(e){this.Hn=e,this.buffer=new xt(n0),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const o=this.buffer.last();n0(t,o)<0&&(this.buffer=this.buffer.delete(o).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OI{constructor(e,t,o){this.garbageCollector=e,this.asyncQueue=t,this.localStore=o,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ce(t0,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sa(t)?ce(t0,"Ignoring IndexedDB error during garbage collection: ",t):await ia(t)}await this.er(3e5)})}}class MI{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(o=>Math.floor(t/100*o))}nthSequenceNumber(e,t){if(t===0)return G.resolve(sd.ae);const o=new DI(t);return this.tr.forEachTarget(e,s=>o.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>o.Zn(s))).next(()=>o.maxValue)}removeTargets(e,t,o){return this.tr.removeTargets(e,t,o)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(e0)):this.getCacheSize(e).next(o=>o<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${o} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),e0):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let o,s,a,u,h,m,f;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),s=this.params.maximumSequenceNumbersToCollect):s=b,u=Date.now(),this.nthSequenceNumber(e,s))).next(b=>(o=b,h=Date.now(),this.removeTargets(e,o,t))).next(b=>(a=b,m=Date.now(),this.removeOrphanedDocuments(e,o))).next(b=>(f=Date.now(),Cs()<=Ne.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${s} in `+(h-u)+`ms
	Removed ${a} targets in `+(m-h)+`ms
	Removed ${b} documents in `+(f-m)+`ms
Total Duration: ${f-g}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:b})))}}function LI(n,e){return new MI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.changes=new Oi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const o=this.changes.get(t);return o!==void 0?G.resolve(o):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,t,o,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=o,this.indexManager=s}getDocument(e,t){let o=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(o=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(o!==null&&fl(o.mutation,s,nr.empty(),Tt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(o=>this.getLocalViewOfDocuments(e,o,De()).next(()=>o))}getLocalViewOfDocuments(e,t,o=De()){const s=Ei();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,o).next(a=>{let u=sl();return a.forEach((h,m)=>{u=u.insert(h,m.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const o=Ei();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,De()))}populateOverlays(e,t,o){const s=[];return o.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,h)=>{t.set(u,h)})})}computeViews(e,t,o,s){let a=Xr();const u=pl(),h=function(){return pl()}();return t.forEach((m,f)=>{const g=o.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof Mi)?a=a.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),fl(g.mutation,f,g.mutation.getFieldMask(),Tt.now())):u.set(f.key,nr.empty())}),this.recalculateAndSaveOverlays(e,a).next(m=>(m.forEach((f,g)=>u.set(f,g)),t.forEach((f,g)=>{var b;return h.set(f,new UI(g,(b=u.get(f))!==null&&b!==void 0?b:null))}),h))}recalculateAndSaveOverlays(e,t){const o=pl();let s=new lt((u,h)=>u-h),a=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const h of u)h.keys().forEach(m=>{const f=t.get(m);if(f===null)return;let g=o.get(m)||nr.empty();g=h.applyToLocalView(f,g),o.set(m,g);const b=(s.get(h.batchId)||De()).add(m);s=s.insert(h.batchId,b)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const m=h.getNext(),f=m.key,g=m.value,b=ow();g.forEach(z=>{if(!a.has(z)){const P=cw(t.get(z),o.get(z));P!==null&&b.set(z,P),a=a.add(z)}}),u.push(this.documentOverlayCache.saveOverlays(e,f,b))}return G.waitFor(u)}).next(()=>o)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(o=>this.recalculateAndSaveOverlays(e,o))}getDocumentsMatchingQuery(e,t,o,s){return function(u){return be.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$C(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,o,s):this.getDocumentsMatchingCollectionQuery(e,t,o,s)}getNextDocuments(e,t,o,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,o,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,o.largestBatchId,s-a.size):G.resolve(Ei());let h=El,m=a;return u.next(f=>G.forEach(f,(g,b)=>(h<b.largestBatchId&&(h=b.largestBatchId),a.get(g)?G.resolve():this.remoteDocumentCache.getEntry(e,g).next(z=>{m=m.insert(g,z)}))).next(()=>this.populateOverlays(e,f,a)).next(()=>this.computeViews(e,m,f,De())).next(g=>({batchId:h,changes:rw(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next(o=>{let s=sl();return o.isFoundDocument()&&(s=s.insert(o.key,o)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,o,s){const a=t.collectionGroup;let u=sl();return this.indexManager.getCollectionParents(e,a).next(h=>G.forEach(h,m=>{const f=function(b,z){return new ud(z,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,m.child(a));return this.getDocumentsMatchingCollectionQuery(e,f,o,s).next(g=>{g.forEach((b,z)=>{u=u.insert(b,z)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,o,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,o.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,o,a,s))).next(u=>{a.forEach((m,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,Jt.newInvalidDocument(g)))});let h=sl();return u.forEach((m,f)=>{const g=a.get(m);g!==void 0&&fl(g.mutation,f,nr.empty(),Tt.now()),dd(t,f)&&(h=h.insert(m,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return G.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:_r(s.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:AI(s.bundledQuery),readTime:_r(s.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.overlays=new lt(be.comparator),this.Rr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const o=Ei();return G.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&o.set(s,a)})).next(()=>o)}saveOverlays(e,t,o){return o.forEach((s,a)=>{this.Et(e,t,a)}),G.resolve()}removeOverlaysForBatchId(e,t,o){const s=this.Rr.get(o);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Rr.delete(o)),G.resolve()}getOverlaysForCollection(e,t,o){const s=Ei(),a=t.length+1,u=new be(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const m=h.getNext().value,f=m.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===a&&m.largestBatchId>o&&s.set(m.getKey(),m)}return G.resolve(s)}getOverlaysForCollectionGroup(e,t,o,s){let a=new lt((f,g)=>f-g);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>o){let g=a.get(f.largestBatchId);g===null&&(g=Ei(),a=a.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const h=Ei(),m=a.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((f,g)=>h.set(f,g)),!(h.size()>=s)););return G.resolve(h)}Et(e,t,o){const s=this.overlays.get(o.key);if(s!==null){const u=this.Rr.get(s.largestBatchId).delete(o.key);this.Rr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(o.key,new uI(t,o));let a=this.Rr.get(t);a===void 0&&(a=De(),this.Rr.set(t,a)),this.Rr.set(t,a.add(o.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.Vr=new xt(Rt.mr),this.gr=new xt(Rt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const o=new Rt(e,t);this.Vr=this.Vr.add(o),this.gr=this.gr.add(o)}yr(e,t){e.forEach(o=>this.addReference(o,t))}removeReference(e,t){this.wr(new Rt(e,t))}Sr(e,t){e.forEach(o=>this.removeReference(o,t))}br(e){const t=new be(new dt([])),o=new Rt(t,e),s=new Rt(t,e+1),a=[];return this.gr.forEachInRange([o,s],u=>{this.wr(u),a.push(u.key)}),a}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new be(new dt([])),o=new Rt(t,e),s=new Rt(t,e+1);let a=De();return this.gr.forEachInRange([o,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new Rt(e,0),o=this.Vr.firstAfterOrEqual(t);return o!==null&&e.isEqual(o.key)}}class Rt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return be.comparator(e.key,t.key)||Ie(e.Cr,t.Cr)}static pr(e,t){return Ie(e.Cr,t.Cr)||be.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new xt(Rt.mr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,o,s){const a=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new lI(a,t,o,s);this.mutationQueue.push(u);for(const h of s)this.Mr=this.Mr.add(new Rt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return G.resolve(u)}lookupMutationBatch(e,t){return G.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const o=t+1,s=this.Nr(o),a=s<0?0:s;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Gp:this.Fr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const o=new Rt(t,0),s=new Rt(t,Number.POSITIVE_INFINITY),a=[];return this.Mr.forEachInRange([o,s],u=>{const h=this.Or(u.Cr);a.push(h)}),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let o=new xt(Ie);return t.forEach(s=>{const a=new Rt(s,0),u=new Rt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([a,u],h=>{o=o.add(h.Cr)})}),G.resolve(this.Br(o))}getAllMutationBatchesAffectingQuery(e,t){const o=t.path,s=o.length+1;let a=o;be.isDocumentKey(a)||(a=a.child(""));const u=new Rt(new be(a),0);let h=new xt(Ie);return this.Mr.forEachWhile(m=>{const f=m.key.path;return!!o.isPrefixOf(f)&&(f.length===s&&(h=h.add(m.Cr)),!0)},u),G.resolve(this.Br(h))}Br(e){const t=[];return e.forEach(o=>{const s=this.Or(o);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){$e(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let o=this.Mr;return G.forEach(t.mutations,s=>{const a=new Rt(s.key,t.batchId);return o=o.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=o})}qn(e){}containsKey(e,t){const o=new Rt(t,0),s=this.Mr.firstAfterOrEqual(o);return G.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.kr=e,this.docs=function(){return new lt(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const o=t.key,s=this.docs.get(o),a=s?s.size:0,u=this.kr(t);return this.docs=this.docs.insert(o,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,o.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const o=this.docs.get(t);return G.resolve(o?o.document.mutableCopy():Jt.newInvalidDocument(t))}getEntries(e,t){let o=Xr();return t.forEach(s=>{const a=this.docs.get(s);o=o.insert(s,a?a.document.mutableCopy():Jt.newInvalidDocument(s))}),G.resolve(o)}getDocumentsMatchingQuery(e,t,o,s){let a=Xr();const u=t.path,h=new be(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(h);for(;m.hasNext();){const{key:f,value:{document:g}}=m.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||wC(_C(g),o)<=0||(s.has(g.key)||dd(t,g))&&(a=a.insert(g.key,g.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,o,s){Ee()}qr(e,t){return G.forEach(this.docs,o=>t(o))}newChangeBuffer(e){return new qI(this)}getSize(e){return G.resolve(this.size)}}class qI extends FI{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((o,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(o)}),G.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.persistence=e,this.Qr=new Oi(t=>Qp(t),Zp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.$r=0,this.Ur=new rf,this.targetCount=0,this.Kr=Zs.Un()}forEachTarget(e,t){return this.Qr.forEach((o,s)=>t(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,o){return o&&(this.lastRemoteSnapshotVersion=o),t>this.$r&&(this.$r=t),G.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Zs(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.zn(t),G.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,o){let s=0;const a=[];return this.Qr.forEach((u,h)=>{h.sequenceNumber<=t&&o.get(h.targetId)===null&&(this.Qr.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),G.waitFor(a).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const o=this.Qr.get(t)||null;return G.resolve(o)}addMatchingKeys(e,t,o){return this.Ur.yr(t,o),G.resolve()}removeMatchingKeys(e,t,o){this.Ur.Sr(t,o);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),G.resolve()}getMatchingKeysForTargetId(e,t){const o=this.Ur.vr(t);return G.resolve(o)}containsKey(e,t){return G.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new sd(0),this.zr=!1,this.zr=!0,this.jr=new $I,this.referenceDelegate=e(this),this.Hr=new JI(this),this.indexManager=new RI,this.remoteDocumentCache=function(s){return new GI(s)}(o=>this.referenceDelegate.Jr(o)),this.serializer=new II(t),this.Yr=new BI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new KI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let o=this.Wr[e.toKey()];return o||(o=new WI(t,this.referenceDelegate),this.Wr[e.toKey()]=o),o}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,o){ce("MemoryPersistence","Starting transaction:",e);const s=new QI(this.Gr.next());return this.referenceDelegate.Zr(),o(s).next(a=>this.referenceDelegate.Xr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}ei(e,t){return G.or(Object.values(this.Wr).map(o=>()=>o.containsKey(e,t)))}}class QI extends jC{constructor(e){super(),this.currentSequenceNumber=e}}class of{constructor(e){this.persistence=e,this.ti=new rf,this.ni=null}static ri(e){return new of(e)}get ii(){if(this.ni)return this.ni;throw Ee()}addReference(e,t,o){return this.ti.addReference(o,t),this.ii.delete(o.toString()),G.resolve()}removeReference(e,t,o){return this.ti.removeReference(o,t),this.ii.add(o.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),G.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const o=this.persistence.getTargetCache();return o.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ii.add(a.toString()))}).next(()=>o.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ii,o=>{const s=be.fromPath(o);return this.si(e,s).next(a=>{a||t.removeEntry(s,Se.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(o=>{o?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return G.or([()=>G.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class $c{constructor(e,t){this.persistence=e,this.oi=new Oi(o=>TC(o.path),(o,s)=>o.isEqual(s)),this.garbageCollector=LI(this,t)}static ri(e,t){return new $c(e,t)}Zr(){}Xr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(o=>t.next(s=>o+s))}sr(e){let t=0;return this.rr(e,o=>{t++}).next(()=>t)}rr(e,t){return G.forEach(this.oi,(o,s)=>this.ar(e,o,s).next(a=>a?G.resolve():t(s)))}removeTargets(e,t,o){return this.persistence.getTargetCache().removeTargets(e,t,o)}removeOrphanedDocuments(e,t){let o=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.qr(e,u=>this.ar(e,u,t).next(h=>{h||(o++,a.removeEntry(u,Se.min()))})).next(()=>a.apply(e)).next(()=>o)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const o=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,o)}addReference(e,t,o){return this.oi.set(o,e.currentSequenceNumber),G.resolve()}removeReference(e,t,o){return this.oi.set(o,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),G.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_c(e.data.value)),t}ar(e,t,o){return G.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return G.resolve(s!==void 0&&s>o)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,o,s){this.targetId=e,this.fromCache=t,this.Hi=o,this.Ji=s}static Yi(e,t){let o=De(),s=De();for(const a of t.docChanges)switch(a.type){case 0:o=o.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new sf(e,t.fromCache,o,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Gx()?8:EC(Zt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,o,s){const a={result:null};return this.rs(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ss(e,t,s,o).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new ZI;return this._s(e,t,u).next(h=>{if(a.result=h,this.Xi)return this.us(e,t,u,h.size)})}).next(()=>a.result)}us(e,t,o,s){return o.documentReadCount<this.es?(Cs()<=Ne.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Is(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),G.resolve()):(Cs()<=Ne.DEBUG&&ce("QueryEngine","Query:",Is(t),"scans",o.documentReadCount,"local documents and returns",s,"documents as results."),o.documentReadCount>this.ts*s?(Cs()<=Ne.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Is(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,br(t))):G.resolve())}rs(e,t){if(Kk(t))return G.resolve(null);let o=br(t);return this.indexManager.getIndexType(e,o).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Zm(t,null,"F"),o=br(t)),this.indexManager.getDocumentsMatchingTarget(e,o).next(a=>{const u=De(...a);return this.ns.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,o).next(m=>{const f=this.cs(t,h);return this.ls(t,f,u,m.readTime)?this.rs(e,Zm(t,null,"F")):this.hs(e,f,t,m)}))})))}ss(e,t,o,s){return Kk(t)||s.isEqual(Se.min())?G.resolve(null):this.ns.getDocuments(e,o).next(a=>{const u=this.cs(t,a);return this.ls(t,u,o,s)?G.resolve(null):(Cs()<=Ne.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Is(t)),this.hs(e,u,t,bC(s,El)).next(h=>h))})}cs(e,t){let o=new xt(tw(e));return t.forEach((s,a)=>{dd(e,a)&&(o=o.add(a))}),o}ls(e,t,o,s){if(e.limit===null)return!1;if(o.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}_s(e,t,o){return Cs()<=Ne.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Is(t)),this.ns.getDocumentsMatchingQuery(e,t,Fo.min(),o)}hs(e,t,o,s){return this.ns.getDocumentsMatchingQuery(e,o,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="LocalStore",YI=3e8;class eA{constructor(e,t,o,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new lt(Ie),this.Is=new Oi(a=>Qp(a),Zp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(o)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HI(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function tA(n,e,t,o){return new eA(n,e,t,o)}async function Ew(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",o=>{let s;return t.mutationQueue.getAllMutationBatches(o).next(a=>(s=a,t.As(e),t.mutationQueue.getAllMutationBatches(o))).next(a=>{const u=[],h=[];let m=De();for(const f of s){u.push(f.batchId);for(const g of f.mutations)m=m.add(g.key)}for(const f of a){h.push(f.batchId);for(const g of f.mutations)m=m.add(g.key)}return t.localDocuments.getDocuments(o,m).next(f=>({Rs:f,removedBatchIds:u,addedBatchIds:h}))})})}function nA(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",o=>{const s=e.batch.keys(),a=t.ds.newChangeBuffer({trackRemovals:!0});return function(h,m,f,g){const b=f.batch,z=b.keys();let P=G.resolve();return z.forEach(N=>{P=P.next(()=>g.getEntry(m,N)).next(M=>{const L=f.docVersions.get(N);$e(L!==null),M.version.compareTo(L)<0&&(b.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),g.addEntry(M)))})}),P.next(()=>h.mutationQueue.removeMutationBatch(m,b))}(t,o,e,a).next(()=>a.apply(o)).next(()=>t.mutationQueue.performConsistencyCheck(o)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(o,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,function(h){let m=De();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(m=m.add(h.batch.mutations[f].key));return m}(e))).next(()=>t.localDocuments.getDocuments(o,s))})}function Sw(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function rA(n,e){const t=Te(n),o=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const h=[];e.targetChanges.forEach((g,b)=>{const z=s.get(b);if(!z)return;h.push(t.Hr.removeMatchingKeys(a,g.removedDocuments,b).next(()=>t.Hr.addMatchingKeys(a,g.addedDocuments,b)));let P=z.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(b)!==null?P=P.withResumeToken(Ut.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,o)),s=s.insert(b,P),function(M,L,$){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=YI?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(z,P,g)&&h.push(t.Hr.updateTargetData(a,P))});let m=Xr(),f=De();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,g))}),h.push(oA(a,u,e.documentUpdates).next(g=>{m=g.Vs,f=g.fs})),!o.isEqual(Se.min())){const g=t.Hr.getLastRemoteSnapshotVersion(a).next(b=>t.Hr.setTargetsMetadata(a,a.currentSequenceNumber,o));h.push(g)}return G.waitFor(h).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,m,f)).next(()=>m)}).then(a=>(t.Ts=s,a))}function oA(n,e,t){let o=De(),s=De();return t.forEach(a=>o=o.add(a)),e.getEntries(n,o).next(a=>{let u=Xr();return t.forEach((h,m)=>{const f=a.get(h);m.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(h)),m.isNoDocument()&&m.version.isEqual(Se.min())?(e.removeEntry(h,m.readTime),u=u.insert(h,m)):!f.isValidDocument()||m.version.compareTo(f.version)>0||m.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(m),u=u.insert(h,m)):ce(af,"Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",m.version)}),{Vs:u,fs:s}})}function iA(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",o=>(e===void 0&&(e=Gp),t.mutationQueue.getNextMutationBatchAfterBatchId(o,e)))}function sA(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",o=>{let s;return t.Hr.getTargetData(o,e).next(a=>a?(s=a,G.resolve(s)):t.Hr.allocateTargetId(o).next(u=>(s=new Ao(e,u,"TargetPurposeListen",o.currentSequenceNumber),t.Hr.addTargetData(o,s).next(()=>s))))}).then(o=>{const s=t.Ts.get(o.targetId);return(s===null||o.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(o.targetId,o),t.Is.set(e,o.targetId)),o})}async function np(n,e,t){const o=Te(n),s=o.Ts.get(e),a=t?"readwrite":"readwrite-primary";try{t||await o.persistence.runTransaction("Release target",a,u=>o.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!sa(u))throw u;ce(af,`Failed to update sequence numbers for target ${e}: ${u}`)}o.Ts=o.Ts.remove(e),o.Is.delete(s.target)}function r0(n,e,t){const o=Te(n);let s=Se.min(),a=De();return o.persistence.runTransaction("Execute query","readwrite",u=>function(m,f,g){const b=Te(m),z=b.Is.get(g);return z!==void 0?G.resolve(b.Ts.get(z)):b.Hr.getTargetData(f,g)}(o,u,br(e)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,o.Hr.getMatchingKeysForTargetId(u,h.targetId).next(m=>{a=m})}).next(()=>o.Ps.getDocumentsMatchingQuery(u,e,t?s:Se.min(),t?a:De())).next(h=>(aA(o,GC(e),h),{documents:h,gs:a})))}function aA(n,e,t){let o=n.Es.get(e)||Se.min();t.forEach((s,a)=>{a.readTime.compareTo(o)>0&&(o=a.readTime)}),n.Es.set(e,o)}class o0{constructor(){this.activeTargetIds=YC()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lA{constructor(){this.ho=new o0,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,o){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,o){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new o0,Promise.resolve()}handleUserChange(e,t,o){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="ConnectivityMonitor";class s0{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ce(i0,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ce(i0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc=null;function rp(){return fc===null?fc=function(){return 268435456+Math.round(2147483648*Math.random())}():fc++,"0x"+fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="RestConnection",cA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dA{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${o}/databases/${s}`,this.wo=this.databaseId.database===Mc?`project_id=${o}`:`project_id=${o}&database_id=${s}`}So(e,t,o,s,a){const u=rp(),h=this.bo(e,t.toUriEncodedString());ce(vm,`Sending RPC '${e}' ${u}:`,h,o);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,s,a),this.vo(e,h,m,o).then(f=>(ce(vm,`Received RPC '${e}' ${u}: `,f),f),f=>{throw Gs(vm,`RPC '${e}' ${u} failed with error: `,f,"url: ",h,"request:",o),f})}Co(e,t,o,s,a,u){return this.So(e,t,o,s,a)}Do(e,t,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,a)=>e[a]=s),o&&o.headers.forEach((s,a)=>e[a]=s)}bo(e,t){const o=cA[e];return`${this.po}/v1/${t}:${o}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class mA extends dA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,o,s){const a=rp();return new Promise((u,h)=>{const m=new C_;m.setWithCredentials(!0),m.listenOnce(I_.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case bc.NO_ERROR:const g=m.getResponseJson();ce(Wt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),u(g);break;case bc.TIMEOUT:ce(Wt,`RPC '${e}' ${a} timed out`),h(new ke(ee.DEADLINE_EXCEEDED,"Request time out"));break;case bc.HTTP_ERROR:const b=m.getStatus();if(ce(Wt,`RPC '${e}' ${a} failed with status:`,b,"response text:",m.getResponseText()),b>0){let z=m.getResponseJson();Array.isArray(z)&&(z=z[0]);const P=z==null?void 0:z.error;if(P&&P.status&&P.message){const N=function(L){const $=L.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf($)>=0?$:ee.UNKNOWN}(P.status);h(new ke(N,P.message))}else h(new ke(ee.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new ke(ee.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{ce(Wt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);ce(Wt,`RPC '${e}' ${a} sending request:`,s),m.send(t,"POST",f,o,15)})}Wo(e,t,o){const s=rp(),a=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=V_(),h=R_(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(m.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,o),m.encodeInitMessageHeaders=!0;const g=a.join("");ce(Wt,`Creating RPC '${e}' stream ${s}: ${g}`,m);const b=u.createWebChannel(g,m);let z=!1,P=!1;const N=new hA({Fo:L=>{P?ce(Wt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(z||(ce(Wt,`Opening RPC '${e}' stream ${s} transport.`),b.open(),z=!0),ce(Wt,`RPC '${e}' stream ${s} sending:`,L),b.send(L))},Mo:()=>b.close()}),M=(L,$,q)=>{L.listen($,Q=>{try{q(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return M(b,il.EventType.OPEN,()=>{P||(ce(Wt,`RPC '${e}' stream ${s} transport opened.`),N.Qo())}),M(b,il.EventType.CLOSE,()=>{P||(P=!0,ce(Wt,`RPC '${e}' stream ${s} transport closed`),N.Uo())}),M(b,il.EventType.ERROR,L=>{P||(P=!0,Gs(Wt,`RPC '${e}' stream ${s} transport errored:`,L),N.Uo(new ke(ee.UNAVAILABLE,"The operation could not be completed")))}),M(b,il.EventType.MESSAGE,L=>{var $;if(!P){const q=L.data[0];$e(!!q);const Q=q,oe=(Q==null?void 0:Q.error)||(($=Q[0])===null||$===void 0?void 0:$.error);if(oe){ce(Wt,`RPC '${e}' stream ${s} received error:`,oe);const ae=oe.status;let se=function(T){const C=bt[T];if(C!==void 0)return mw(C)}(ae),I=oe.message;se===void 0&&(se=ee.INTERNAL,I="Unknown error status: "+ae+" with message "+oe.message),P=!0,N.Uo(new ke(se,I)),b.close()}else ce(Wt,`RPC '${e}' stream ${s} received:`,q),N.Ko(q)}}),M(h,A_.STAT_EVENT,L=>{L.stat===$m.PROXY?ce(Wt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===$m.NOPROXY&&ce(Wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function ym(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){return new yI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t,o=1e3,s=1.5,a=6e4){this.Ti=e,this.timerId=t,this.Go=o,this.zo=s,this.jo=a,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),o=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-o);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${o} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="PersistentStream";class xw{constructor(e,t,o,s,a,u,h,m){this.Ti=e,this.n_=o,this.r_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Tw(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Zr(t.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([o,s])=>{this.i_===t&&this.V_(o,s)},o=>{e(()=>{const s=new ke(ee.UNKNOWN,"Fetching auth token failed: "+o.message);return this.m_(s)})})}V_(e,t){const o=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{o(()=>this.listener.xo())}),this.stream.No(()=>{o(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{o(()=>this.m_(s))}),this.stream.onMessage(s=>{o(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ce(a0,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ce(a0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pA extends xw{constructor(e,t,o,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,o,s,u),this.serializer=a}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=bI(this.serializer,e),o=function(a){if(!("targetChange"in a))return Se.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Se.min():u.readTime?_r(u.readTime):Se.min()}(e);return this.listener.p_(t,o)}y_(e){const t={};t.database=tp(this.serializer),t.addTarget=function(a,u){let h;const m=u.target;if(h=Qm(m)?{documents:zI(a,m)}:{query:jI(a,m).ht},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=vw(a,u.resumeToken);const f=Xm(a,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(Se.min())>0){h.readTime=Kc(a,u.snapshotVersion.toTimestamp());const f=Xm(a,u.expectedCount);f!==null&&(h.expectedCount=f)}return h}(this.serializer,e);const o=SI(this.serializer,e);o&&(t.labels=o),this.I_(t)}w_(e){const t={};t.database=tp(this.serializer),t.removeTarget=e,this.I_(t)}}class fA extends xw{constructor(e,t,o,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,o,s,u),this.serializer=a}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return $e(!!e.streamToken),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){$e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=wI(e.writeResults,e.commitTime),o=_r(e.commitTime);return this.listener.v_(o,t)}C_(){const e={};e.database=tp(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(o=>_I(this.serializer,o))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{}class yA extends vA{constructor(e,t,o,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=o,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ke(ee.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,o,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.So(e,Ym(t,o),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ke(ee.UNKNOWN,a.toString())})}Co(e,t,o,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Co(e,Ym(t,o),s,u,h,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ke(ee.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class gA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Zr(t),this.N_=!1):ce("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="RemoteStore";class kA{constructor(e,t,o,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=o,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=a,this.z_.To(u=>{o.enqueueAndForget(async()=>{Li(this)&&(ce(Ri,"Restarting streams for network reachability change."),await async function(m){const f=Te(m);f.W_.add(4),await Hl(f),f.j_.set("Unknown"),f.W_.delete(4),await vd(f)}(this))})}),this.j_=new gA(o,s)}}async function vd(n){if(Li(n))for(const e of n.G_)await e(!0)}async function Hl(n){for(const e of n.G_)await e(!1)}function Pw(n,e){const t=Te(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),df(t)?cf(t):aa(t).c_()&&uf(t,e))}function lf(n,e){const t=Te(n),o=aa(t);t.K_.delete(e),o.c_()&&Cw(t,e),t.K_.size===0&&(o.c_()?o.P_():Li(t)&&t.j_.set("Unknown"))}function uf(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}aa(n).y_(e)}function Cw(n,e){n.H_.Ne(e),aa(n).w_(e)}function cf(n){n.H_=new mI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),aa(n).start(),n.j_.B_()}function df(n){return Li(n)&&!aa(n).u_()&&n.K_.size>0}function Li(n){return Te(n).W_.size===0}function Iw(n){n.H_=void 0}async function bA(n){n.j_.set("Online")}async function _A(n){n.K_.forEach((e,t)=>{uf(n,e)})}async function wA(n,e){Iw(n),df(n)?(n.j_.q_(e),cf(n)):n.j_.set("Unknown")}async function zA(n,e,t){if(n.j_.set("Online"),e instanceof fw&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const h of a.targetIds)s.K_.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.K_.delete(h),s.H_.removeTarget(h))}(n,e)}catch(o){ce(Ri,"Failed to remove targets %s: %s ",e.targetIds.join(","),o),await Wc(n,o)}else if(e instanceof jc?n.H_.We(e):e instanceof pw?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Se.min()))try{const o=await Sw(n.localStore);t.compareTo(o)>=0&&await function(a,u){const h=a.H_.ot(u);return h.targetChanges.forEach((m,f)=>{if(m.resumeToken.approximateByteSize()>0){const g=a.K_.get(f);g&&a.K_.set(f,g.withResumeToken(m.resumeToken,u))}}),h.targetMismatches.forEach((m,f)=>{const g=a.K_.get(m);if(!g)return;a.K_.set(m,g.withResumeToken(Ut.EMPTY_BYTE_STRING,g.snapshotVersion)),Cw(a,m);const b=new Ao(g.target,m,f,g.sequenceNumber);uf(a,b)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(o){ce(Ri,"Failed to raise snapshot:",o),await Wc(n,o)}}async function Wc(n,e,t){if(!sa(e))throw e;n.W_.add(1),await Hl(n),n.j_.set("Offline"),t||(t=()=>Sw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ce(Ri,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await vd(n)})}function Aw(n,e){return e().catch(t=>Wc(n,t,e))}async function yd(n){const e=Te(n),t=Ko(e);let o=e.U_.length>0?e.U_[e.U_.length-1].batchId:Gp;for(;jA(e);)try{const s=await iA(e.localStore,o);if(s===null){e.U_.length===0&&t.P_();break}o=s.batchId,EA(e,s)}catch(s){await Wc(e,s)}Rw(e)&&Vw(e)}function jA(n){return Li(n)&&n.U_.length<10}function EA(n,e){n.U_.push(e);const t=Ko(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Rw(n){return Li(n)&&!Ko(n).u_()&&n.U_.length>0}function Vw(n){Ko(n).start()}async function SA(n){Ko(n).C_()}async function TA(n){const e=Ko(n);for(const t of n.U_)e.b_(t.mutations)}async function xA(n,e,t){const o=n.U_.shift(),s=ef.from(o,e,t);await Aw(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await yd(n)}async function PA(n,e){e&&Ko(n).S_&&await async function(o,s){if(function(u){return dI(u)&&u!==ee.ABORTED}(s.code)){const a=o.U_.shift();Ko(o).h_(),await Aw(o,()=>o.remoteSyncer.rejectFailedWrite(a.batchId,s)),await yd(o)}}(n,e),Rw(n)&&Vw(n)}async function l0(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),ce(Ri,"RemoteStore received new credentials");const o=Li(t);t.W_.add(3),await Hl(t),o&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await vd(t)}async function CA(n,e){const t=Te(n);e?(t.W_.delete(2),await vd(t)):e||(t.W_.add(2),await Hl(t),t.j_.set("Unknown"))}function aa(n){return n.J_||(n.J_=function(t,o,s){const a=Te(t);return a.M_(),new pA(o,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{xo:bA.bind(null,n),No:_A.bind(null,n),Lo:wA.bind(null,n),p_:zA.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),df(n)?cf(n):n.j_.set("Unknown")):(await n.J_.stop(),Iw(n))})),n.J_}function Ko(n){return n.Y_||(n.Y_=function(t,o,s){const a=Te(t);return a.M_(),new fA(o,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:SA.bind(null,n),Lo:PA.bind(null,n),D_:TA.bind(null,n),v_:xA.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await yd(n)):(await n.Y_.stop(),n.U_.length>0&&(ce(Ri,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,o,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=o,this.op=s,this.removalCallback=a,this.deferred=new Oo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,o,s,a){const u=Date.now()+o,h=new hf(e,t,u,s,a);return h.start(o),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ke(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mf(n,e){if(Zr("AsyncQueue",`${e}: ${n}`),sa(n))return new ke(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{static emptySet(e){return new Ls(e.comparator)}constructor(e){this.comparator=e?(t,o)=>e(t,o)||be.comparator(t.key,o.key):(t,o)=>be.comparator(t.key,o.key),this.keyedMap=sl(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,o)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),o=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=o.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const o=new Ls;return o.comparator=this.comparator,o.keyedMap=e,o.sortedSet=t,o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.Z_=new lt(be.comparator)}track(e){const t=e.doc.key,o=this.Z_.get(t);o?e.type!==0&&o.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&o.type!==1?this.Z_=this.Z_.insert(t,{type:o.type,doc:e.doc}):e.type===2&&o.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&o.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&o.type===0?this.Z_=this.Z_.remove(t):e.type===1&&o.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:o.doc}):e.type===0&&o.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ee():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,o)=>{e.push(o)}),e}}class Xs{constructor(e,t,o,s,a,u,h,m,f){this.query=e,this.docs=t,this.oldDocs=o,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=m,this.hasCachedResults=f}static fromInitialDocuments(e,t,o,s,a){const u=[];return t.forEach(h=>{u.push({type:0,doc:h})}),new Xs(e,t,Ls.emptySet(t),u,o,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,o=e.docChanges;if(t.length!==o.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==o[s].type||!t[s].doc.isEqual(o[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class AA{constructor(){this.queries=c0(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,o){const s=Te(t),a=s.queries;s.queries=c0(),a.forEach((u,h)=>{for(const m of h.ta)m.onError(o)})})(this,new ke(ee.ABORTED,"Firestore shutting down"))}}function c0(){return new Oi(n=>ew(n),cd)}async function RA(n,e){const t=Te(n);let o=3;const s=e.query;let a=t.queries.get(s);a?!a.na()&&e.ra()&&(o=2):(a=new IA,o=e.ra()?0:1);try{switch(o){case 0:a.ea=await t.onListen(s,!0);break;case 1:a.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const h=mf(u,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,a),a.ta.push(e),e.sa(t.onlineState),a.ea&&e.oa(a.ea)&&pf(t)}async function VA(n,e){const t=Te(n),o=e.query;let s=3;const a=t.queries.get(o);if(a){const u=a.ta.indexOf(e);u>=0&&(a.ta.splice(u,1),a.ta.length===0?s=e.ra()?0:1:!a.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(o),t.onUnlisten(o,!0);case 1:return t.queries.delete(o),t.onUnlisten(o,!1);case 2:return t.onLastRemoteStoreUnlisten(o);default:return}}function NA(n,e){const t=Te(n);let o=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const h of u.ta)h.oa(s)&&(o=!0);u.ea=s}}o&&pf(t)}function DA(n,e,t){const o=Te(n),s=o.queries.get(e);if(s)for(const a of s.ta)a.onError(t);o.queries.delete(e)}function pf(n){n.ia.forEach(e=>{e.next()})}var op,d0;(d0=op||(op={}))._a="default",d0.Cache="cache";class OA{constructor(e,t,o){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=o||{}}oa(e){if(!this.options.includeMetadataChanges){const o=[];for(const s of e.docChanges)s.type!==3&&o.push(s);e=new Xs(e.query,e.docs,e.oldDocs,o,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const o=t!=="Offline";return(!this.options.Ta||!o)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==op.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.key=e}}class Dw{constructor(e){this.key=e}}class MA{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=De(),this.mutatedKeys=De(),this.ya=tw(e),this.wa=new Ls(this.ya)}get Sa(){return this.fa}ba(e,t){const o=t?t.Da:new u0,s=t?t.wa:this.wa;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,h=!1;const m=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((g,b)=>{const z=s.get(g),P=dd(this.query,b)?b:null,N=!!z&&this.mutatedKeys.has(z.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;z&&P?z.data.isEqual(P.data)?N!==M&&(o.track({type:3,doc:P}),L=!0):this.va(z,P)||(o.track({type:2,doc:P}),L=!0,(m&&this.ya(P,m)>0||f&&this.ya(P,f)<0)&&(h=!0)):!z&&P?(o.track({type:0,doc:P}),L=!0):z&&!P&&(o.track({type:1,doc:z}),L=!0,(m||f)&&(h=!0)),L&&(P?(u=u.add(P),a=M?a.add(g):a.delete(g)):(u=u.delete(g),a=a.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),a=a.delete(g.key),o.track({type:1,doc:g})}return{wa:u,Da:o,ls:h,mutatedKeys:a}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,o,s){const a=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((g,b)=>function(P,N){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return M(P)-M(N)}(g.type,b.type)||this.ya(g.doc,b.doc)),this.Ca(o),s=s!=null&&s;const h=t&&!s?this.Fa():[],m=this.pa.size===0&&this.current&&!s?1:0,f=m!==this.ga;return this.ga=m,u.length!==0||f?{snapshot:new Xs(this.query,e.wa,a,u,e.mutatedKeys,m===0,f,!1,!!o&&o.resumeToken.approximateByteSize()>0),Ma:h}:{Ma:h}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new u0,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=De(),this.wa.forEach(o=>{this.xa(o.key)&&(this.pa=this.pa.add(o.key))});const t=[];return e.forEach(o=>{this.pa.has(o)||t.push(new Dw(o))}),this.pa.forEach(o=>{e.has(o)||t.push(new Nw(o))}),t}Oa(e){this.fa=e.gs,this.pa=De();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Xs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ff="SyncEngine";class LA{constructor(e,t,o){this.query=e,this.targetId=t,this.view=o}}class FA{constructor(e){this.key=e,this.Ba=!1}}class UA{constructor(e,t,o,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=o,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new Oi(h=>ew(h),cd),this.qa=new Map,this.Qa=new Set,this.$a=new lt(be.comparator),this.Ua=new Map,this.Ka=new rf,this.Wa={},this.Ga=new Map,this.za=Zs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function HA(n,e,t=!0){const o=Hw(n);let s;const a=o.ka.get(e);return a?(o.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Na()):s=await Ow(o,e,t,!0),s}async function BA(n,e){const t=Hw(n);await Ow(t,e,!0,!1)}async function Ow(n,e,t,o){const s=await sA(n.localStore,br(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let h;return o&&(h=await KA(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&Pw(n.remoteStore,s),h}async function KA(n,e,t,o,s){n.Ha=(b,z,P)=>async function(M,L,$,q){let Q=L.view.ba($);Q.ls&&(Q=await r0(M.localStore,L.query,!1).then(({documents:I})=>L.view.ba(I,Q)));const oe=q&&q.targetChanges.get(L.targetId),ae=q&&q.targetMismatches.get(L.targetId)!=null,se=L.view.applyChanges(Q,M.isPrimaryClient,oe,ae);return m0(M,L.targetId,se.Ma),se.snapshot}(n,b,z,P);const a=await r0(n.localStore,e,!0),u=new MA(e,a.gs),h=u.ba(a.documents),m=Ul.createSynthesizedTargetChangeForCurrentChange(t,o&&n.onlineState!=="Offline",s),f=u.applyChanges(h,n.isPrimaryClient,m);m0(n,t,f.Ma);const g=new LA(e,t,u);return n.ka.set(e,g),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),f.snapshot}async function $A(n,e,t){const o=Te(n),s=o.ka.get(e),a=o.qa.get(s.targetId);if(a.length>1)return o.qa.set(s.targetId,a.filter(u=>!cd(u,e))),void o.ka.delete(e);o.isPrimaryClient?(o.sharedClientState.removeLocalQueryTarget(s.targetId),o.sharedClientState.isActiveQueryTarget(s.targetId)||await np(o.localStore,s.targetId,!1).then(()=>{o.sharedClientState.clearQueryState(s.targetId),t&&lf(o.remoteStore,s.targetId),ip(o,s.targetId)}).catch(ia)):(ip(o,s.targetId),await np(o.localStore,s.targetId,!0))}async function WA(n,e){const t=Te(n),o=t.ka.get(e),s=t.qa.get(o.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(o.targetId),lf(t.remoteStore,o.targetId))}async function GA(n,e,t){const o=eR(n);try{const s=await function(u,h){const m=Te(u),f=Tt.now(),g=h.reduce((P,N)=>P.add(N.key),De());let b,z;return m.persistence.runTransaction("Locally write mutations","readwrite",P=>{let N=Xr(),M=De();return m.ds.getEntries(P,g).next(L=>{N=L,N.forEach(($,q)=>{q.isValidDocument()||(M=M.add($))})}).next(()=>m.localDocuments.getOverlayedDocuments(P,N)).next(L=>{b=L;const $=[];for(const q of h){const Q=sI(q,b.get(q.key).overlayedDocument);Q!=null&&$.push(new Mi(q.key,Q,G_(Q.value.mapValue),qr.exists(!0)))}return m.mutationQueue.addMutationBatch(P,f,$,h)}).next(L=>{z=L;const $=L.applyToLocalDocumentSet(b,M);return m.documentOverlayCache.saveOverlays(P,L.batchId,$)})}).then(()=>({batchId:z.batchId,changes:rw(b)}))}(o.localStore,e);o.sharedClientState.addPendingMutation(s.batchId),function(u,h,m){let f=u.Wa[u.currentUser.toKey()];f||(f=new lt(Ie)),f=f.insert(h,m),u.Wa[u.currentUser.toKey()]=f}(o,s.batchId,t),await Bl(o,s.changes),await yd(o.remoteStore)}catch(s){const a=mf(s,"Failed to persist write");t.reject(a)}}async function Mw(n,e){const t=Te(n);try{const o=await rA(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.Ua.get(a);u&&($e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Ba=!0:s.modifiedDocuments.size>0?$e(u.Ba):s.removedDocuments.size>0&&($e(u.Ba),u.Ba=!1))}),await Bl(t,o,e)}catch(o){await ia(o)}}function h0(n,e,t){const o=Te(n);if(o.isPrimaryClient&&t===0||!o.isPrimaryClient&&t===1){const s=[];o.ka.forEach((a,u)=>{const h=u.view.sa(e);h.snapshot&&s.push(h.snapshot)}),function(u,h){const m=Te(u);m.onlineState=h;let f=!1;m.queries.forEach((g,b)=>{for(const z of b.ta)z.sa(h)&&(f=!0)}),f&&pf(m)}(o.eventManager,e),s.length&&o.La.p_(s),o.onlineState=e,o.isPrimaryClient&&o.sharedClientState.setOnlineState(e)}}async function qA(n,e,t){const o=Te(n);o.sharedClientState.updateQueryState(e,"rejected",t);const s=o.Ua.get(e),a=s&&s.key;if(a){let u=new lt(be.comparator);u=u.insert(a,Jt.newNoDocument(a,Se.min()));const h=De().add(a),m=new pd(Se.min(),new Map,new lt(Ie),u,h);await Mw(o,m),o.$a=o.$a.remove(a),o.Ua.delete(e),vf(o)}else await np(o.localStore,e,!1).then(()=>ip(o,e,t)).catch(ia)}async function JA(n,e){const t=Te(n),o=e.batch.batchId;try{const s=await nA(t.localStore,e);Fw(t,o,null),Lw(t,o),t.sharedClientState.updateMutationState(o,"acknowledged"),await Bl(t,s)}catch(s){await ia(s)}}async function QA(n,e,t){const o=Te(n);try{const s=await function(u,h){const m=Te(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return m.mutationQueue.lookupMutationBatch(f,h).next(b=>($e(b!==null),g=b.keys(),m.mutationQueue.removeMutationBatch(f,b))).next(()=>m.mutationQueue.performConsistencyCheck(f)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(f,g,h)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>m.localDocuments.getDocuments(f,g))})}(o.localStore,e);Fw(o,e,t),Lw(o,e),o.sharedClientState.updateMutationState(e,"rejected",t),await Bl(o,s)}catch(s){await ia(s)}}function Lw(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Fw(n,e,t){const o=Te(n);let s=o.Wa[o.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),o.Wa[o.currentUser.toKey()]=s}}function ip(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const o of n.qa.get(e))n.ka.delete(o),t&&n.La.Ja(o,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(o=>{n.Ka.containsKey(o)||Uw(n,o)})}function Uw(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(lf(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),vf(n))}function m0(n,e,t){for(const o of t)o instanceof Nw?(n.Ka.addReference(o.key,e),ZA(n,o)):o instanceof Dw?(ce(ff,"Document no longer in limbo: "+o.key),n.Ka.removeReference(o.key,e),n.Ka.containsKey(o.key)||Uw(n,o.key)):Ee()}function ZA(n,e){const t=e.key,o=t.path.canonicalString();n.$a.get(t)||n.Qa.has(o)||(ce(ff,"New document in limbo: "+t),n.Qa.add(o),vf(n))}function vf(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new be(dt.fromString(e)),o=n.za.next();n.Ua.set(o,new FA(t)),n.$a=n.$a.insert(t,o),Pw(n.remoteStore,new Ao(br(Xp(t.path)),o,"TargetPurposeLimboResolution",sd.ae))}}async function Bl(n,e,t){const o=Te(n),s=[],a=[],u=[];o.ka.isEmpty()||(o.ka.forEach((h,m)=>{u.push(o.Ha(m,e,t).then(f=>{var g;if((f||t)&&o.isPrimaryClient){const b=f?!f.fromCache:(g=t==null?void 0:t.targetChanges.get(m.targetId))===null||g===void 0?void 0:g.current;o.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(f){s.push(f);const b=sf.Yi(m.targetId,f);a.push(b)}}))}),await Promise.all(u),o.La.p_(s),await async function(m,f){const g=Te(m);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>G.forEach(f,z=>G.forEach(z.Hi,P=>g.persistence.referenceDelegate.addReference(b,z.targetId,P)).next(()=>G.forEach(z.Ji,P=>g.persistence.referenceDelegate.removeReference(b,z.targetId,P)))))}catch(b){if(!sa(b))throw b;ce(af,"Failed to update sequence numbers: "+b)}for(const b of f){const z=b.targetId;if(!b.fromCache){const P=g.Ts.get(z),N=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(N);g.Ts=g.Ts.insert(z,M)}}}(o.localStore,a))}async function XA(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){ce(ff,"User change. New user:",e.toKey());const o=await Ew(t.localStore,e);t.currentUser=e,function(a,u){a.Ga.forEach(h=>{h.forEach(m=>{m.reject(new ke(ee.CANCELLED,u))})}),a.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,o.removedBatchIds,o.addedBatchIds),await Bl(t,o.Rs)}}function YA(n,e){const t=Te(n),o=t.Ua.get(e);if(o&&o.Ba)return De().add(o.key);{let s=De();const a=t.qa.get(e);if(!a)return s;for(const u of a){const h=t.ka.get(u);s=s.unionWith(h.view.Sa)}return s}}function Hw(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qA.bind(null,e),e.La.p_=NA.bind(null,e.eventManager),e.La.Ja=DA.bind(null,e.eventManager),e}function eR(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QA.bind(null,e),e}class Gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return tA(this.persistence,new XI,e.initialUser,this.serializer)}Xa(e){return new jw(of.ri,this.serializer)}Za(e){return new lA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gc.provider={build:()=>new Gc};class tR extends Gc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){$e(this.persistence.referenceDelegate instanceof $c);const o=this.persistence.referenceDelegate.garbageCollector;return new OI(o,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?mn.withCacheSize(this.cacheSizeBytes):mn.DEFAULT;return new jw(o=>$c.ri(o,t),this.serializer)}}class sp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=o=>h0(this.syncEngine,o,1),this.remoteStore.remoteSyncer.handleCredentialChange=XA.bind(null,this.syncEngine),await CA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AA}()}createDatastore(e){const t=fd(e.databaseInfo.databaseId),o=function(a){return new mA(a)}(e.databaseInfo);return function(a,u,h,m){return new yA(a,u,h,m)}(e.authCredentials,e.appCheckCredentials,o,t)}createRemoteStore(e){return function(o,s,a,u,h){return new kA(o,s,a,u,h)}(this.localStore,this.datastore,e.asyncQueue,t=>h0(this.syncEngine,t,0),function(){return s0.D()?new s0:new uA}())}createSyncEngine(e,t){return function(s,a,u,h,m,f,g){const b=new UA(s,a,u,h,m,f);return g&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Te(s);ce(Ri,"RemoteStore shutting down."),a.W_.add(5),await Hl(a),a.z_.shutdown(),a.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sp.provider={build:()=>new sp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Zr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="FirestoreClient";class rR{constructor(e,t,o,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=o,this.databaseInfo=s,this.user=qt.UNAUTHENTICATED,this.clientId=O_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(o,async u=>{ce($o,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(o,u=>(ce($o,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const o=mf(t,"Failed to shutdown persistence");e.reject(o)}}),e.promise}}async function gm(n,e){n.asyncQueue.verifyOperationInProgress(),ce($o,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let o=t.initialUser;n.setCredentialChangeListener(async s=>{o.isEqual(s)||(await Ew(e.localStore,s),o=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function p0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await oR(n);ce($o,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(o=>l0(e.remoteStore,o)),n.setAppCheckTokenChangeListener((o,s)=>l0(e.remoteStore,s)),n._onlineComponents=e}async function oR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce($o,"Using user provided OfflineComponentProvider");try{await gm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===ee.FAILED_PRECONDITION||s.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Gs("Error using user provided cache. Falling back to memory cache: "+t),await gm(n,new Gc)}}else ce($o,"Using default OfflineComponentProvider"),await gm(n,new tR(void 0));return n._offlineComponents}async function Bw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce($o,"Using user provided OnlineComponentProvider"),await p0(n,n._uninitializedComponentsProvider._online)):(ce($o,"Using default OnlineComponentProvider"),await p0(n,new sp))),n._onlineComponents}function iR(n){return Bw(n).then(e=>e.syncEngine)}async function sR(n){const e=await Bw(n),t=e.eventManager;return t.onListen=HA.bind(null,e.syncEngine),t.onUnlisten=$A.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=BA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WA.bind(null,e.syncEngine),t}function aR(n,e,t={}){const o=new Oo;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,h,m,f){const g=new nR({next:z=>{g.su(),u.enqueueAndForget(()=>VA(a,b));const P=z.docs.has(h);!P&&z.fromCache?f.reject(new ke(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&z.fromCache&&m&&m.source==="server"?f.reject(new ke(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(z)},error:z=>f.reject(z)}),b=new OA(Xp(h.path),g,{includeMetadataChanges:!0,Ta:!0});return RA(a,b)}(await sR(n),n.asyncQueue,e,t,o)),o.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(n,e,t){if(!t)throw new ke(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uR(n,e,t,o){if(e===!0&&o===!0)throw new ke(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function v0(n){if(!be.isDocumentKey(n))throw new ke(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function Il(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ke(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yf(n);throw new ke(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firestore.googleapis.com",y0=!0;class g0{constructor(e){var t,o;if(e.host===void 0){if(e.ssl!==void 0)throw new ke(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$w,this.ssl=y0}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:y0;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NI)throw new ke(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kw((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ke(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ke(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ke(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,s){return o.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gf{constructor(e,t,o,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=o,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ke(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ke(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new dC;switch(o.type){case"firstParty":return new fC(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new ke(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const o=f0.get(t);o&&(ce("ComponentProvider","Removing Datastore"),f0.delete(t),o.terminate())}(this),Promise.resolve()}}function cR(n,e,t,o={}){var s;const a=(n=Il(n,gf))._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;a.host!==$w&&a.host!==h&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},a),{host:h,ssl:!1,emulatorOptions:o});if(!Ci(m,u)&&(n._setSettings(m),o.mockUserToken)){let f,g;if(typeof o.mockUserToken=="string")f=o.mockUserToken,g=qt.MOCK_USER;else{f=Fx(o.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const b=o.mockUserToken.sub||o.mockUserToken.user_id;if(!b)throw new ke(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new qt(b)}n._authCredentials=new hC(new N_(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,o){this.converter=t,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new kf(this.firestore,e,this._query)}}class Dn{constructor(e,t,o){this.converter=t,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Al(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dn(this.firestore,e,this._key)}}class Al extends kf{constructor(e,t,o){super(e,t,Xp(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dn(this.firestore,null,new be(e))}withConverter(e){return new Al(this.firestore,e,this._path)}}function Ww(n,e,...t){if(n=ir(n),arguments.length===1&&(e=O_.newId()),lR("doc","path",e),n instanceof gf){const o=dt.fromString(e,...t);return v0(o),new Dn(n,null,new be(o))}{if(!(n instanceof Dn||n instanceof Al))throw new ke(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const o=n._path.child(dt.fromString(e,...t));return v0(o),new Dn(n.firestore,n instanceof Al?n.converter:null,new be(o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="AsyncQueue";class b0{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Tw(this,"async_queue_retry"),this.Su=()=>{const o=ym();o&&ce(k0,"Visibility state changed to "+o.visibilityState),this.a_.t_()},this.bu=e;const t=ym();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=ym();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Oo;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!sa(e))throw e;ce(k0,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(o=>{this.gu=o,this.pu=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(o);throw Zr("INTERNAL UNHANDLED ERROR: ",s),o}).then(o=>(this.pu=!1,o))));return this.bu=t,t}enqueueAfterDelay(e,t,o){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=hf.createAndSchedule(this,e,t,o,a=>this.Fu(a));return this.fu.push(s),s}Du(){this.gu&&Ee()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,o)=>t.targetTimeMs-o.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class bf extends gf{constructor(e,t,o,s){super(e,t,o,s),this.type="firestore",this._queue=new b0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b0(e),this._firestoreClient=void 0,await e}}}function dR(n,e){const t=typeof n=="object"?n:S_(),o=typeof n=="string"?n:Mc,s=$p(t,"firestore").getImmediate({identifier:o});if(!s._initialized){const a=Mx("firestore");a&&cR(s,...a)}return s}function Gw(n){if(n._terminated)throw new ke(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hR(n),n._firestoreClient}function hR(n){var e,t,o;const s=n._freezeSettings(),a=function(h,m,f,g){return new CC(h,m,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Kw(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((o=s.localCache)===null||o===void 0)&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new rR(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const m=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(m),_online:m}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ys(Ut.fromBase64String(e))}catch(t){throw new ke(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ys(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ke(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ke(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ke(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(o,s){if(o.length!==s.length)return!1;for(let a=0;a<o.length;++a)if(o[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=/^__.*__$/;class pR{constructor(e,t,o){this.data=e,this.fieldMask=t,this.fieldTransforms=o}toMutation(e,t){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fl(e,this.data,t,this.fieldTransforms)}}function Jw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class jf{constructor(e,t,o,s,a,u){this.settings=e,this.databaseId=t,this.serializer=o,this.ignoreUndefinedProperties=s,a===void 0&&this.Bu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const o=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:o,Qu:!1});return s.$u(e),s}Uu(e){var t;const o=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:o,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return qc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Jw(this.Lu)&&mR.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class fR{constructor(e,t,o){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=o||fd(e)}ju(e,t,o,s=!1){return new jf({Lu:e,methodName:t,zu:o,path:Ft.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vR(n){const e=n._freezeSettings(),t=fd(n._databaseId);return new fR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function yR(n,e,t,o,s,a={}){const u=n.ju(a.merge||a.mergeFields?2:0,e,t,s);Yw("Data must be an object, but it was:",u,o);const h=Zw(o,u);let m,f;if(a.merge)m=new nr(u.fieldMask),f=u.fieldTransforms;else if(a.mergeFields){const g=[];for(const b of a.mergeFields){const z=gR(e,b,t);if(!u.contains(z))throw new ke(ee.INVALID_ARGUMENT,`Field '${z}' is specified in your field mask but missing from your input data.`);bR(g,z)||g.push(z)}m=new nr(g),f=u.fieldTransforms.filter(b=>m.covers(b.field))}else m=null,f=u.fieldTransforms;return new pR(new Nn(h),m,f)}function Qw(n,e){if(Xw(n=ir(n)))return Yw("Unsupported field value:",e,n),Zw(n,e);if(n instanceof qw)return function(o,s){if(!Jw(s.Lu))throw s.Wu(`${o._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${o._methodName}() is not currently supported inside arrays`);const a=o._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(o,s){const a=[];let u=0;for(const h of o){let m=Qw(h,s.Ku(u));m==null&&(m={nullValue:"NULL_VALUE"}),a.push(m),u++}return{arrayValue:{values:a}}}(n,e)}return function(o,s){if((o=ir(o))===null)return{nullValue:"NULL_VALUE"};if(typeof o=="number")return eI(s.serializer,o);if(typeof o=="boolean")return{booleanValue:o};if(typeof o=="string")return{stringValue:o};if(o instanceof Date){const a=Tt.fromDate(o);return{timestampValue:Kc(s.serializer,a)}}if(o instanceof Tt){const a=new Tt(o.seconds,1e3*Math.floor(o.nanoseconds/1e3));return{timestampValue:Kc(s.serializer,a)}}if(o instanceof wf)return{geoPointValue:{latitude:o.latitude,longitude:o.longitude}};if(o instanceof Ys)return{bytesValue:vw(s.serializer,o._byteString)};if(o instanceof Dn){const a=s.databaseId,u=o.firestore._databaseId;if(!u.isEqual(a))throw s.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:nf(o.firestore._databaseId||s.databaseId,o._key.path)}}if(o instanceof zf)return function(u,h){return{mapValue:{fields:{[$_]:{stringValue:W_},[Lc]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw h.Wu("VectorValues must only contain numeric values.");return Yp(h.serializer,f)})}}}}}}(o,s);throw s.Wu(`Unsupported field value: ${yf(o)}`)}(n,e)}function Zw(n,e){const t={};return L_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(n,(o,s)=>{const a=Qw(s,e.qu(o));a!=null&&(t[o]=a)}),{mapValue:{fields:t}}}function Xw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Tt||n instanceof wf||n instanceof Ys||n instanceof Dn||n instanceof qw||n instanceof zf)}function Yw(n,e,t){if(!Xw(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const o=yf(t);throw o==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+o)}}function gR(n,e,t){if((e=ir(e))instanceof _f)return e._internalPath;if(typeof e=="string")return ez(n,e);throw qc("Field path arguments must be of type string or ",n,!1,void 0,t)}const kR=new RegExp("[~\\*/\\[\\]]");function ez(n,e,t){if(e.search(kR)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _f(...e.split("."))._internalPath}catch{throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qc(n,e,t,o,s){const a=o&&!o.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let m="";return(a||u)&&(m+=" (found",a&&(m+=` in field ${o}`),u&&(m+=` in document ${s}`),m+=")"),new ke(ee.INVALID_ARGUMENT,h+n+m)}function bR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,t,o,s,a){this._firestore=e,this._userDataWriter=t,this._key=o,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _R(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(nz("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _R extends tz{data(){return super.data()}}function nz(n,e){return typeof e=="string"?ez(n,e):e instanceof _f?e._internalPath:e._delegate._internalPath}class wR{convertValue(e,t="none"){switch(Bo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ho(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const o={};return Di(e,(s,a)=>{o[s]=this.convertValue(a,t)}),o}convertVectorValue(e){var t,o,s;const a=(s=(o=(t=e.fields)===null||t===void 0?void 0:t[Lc].arrayValue)===null||o===void 0?void 0:o.values)===null||s===void 0?void 0:s.map(u=>yt(u.doubleValue));return new zf(a)}convertGeoPoint(e){return new wf(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map(o=>this.convertValue(o,t))}convertServerTimestamp(e,t){switch(t){case"previous":const o=ld(e);return o==null?null:this.convertValue(o,t);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const t=Uo(e);return new Tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const o=dt.fromString(e);$e(ww(o));const s=new Tl(o.get(1),o.get(3)),a=new be(o.popFirst(5));return s.isEqual(t)||Zr(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(n,e,t){let o;return o=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rz extends tz{constructor(e,t,o,s,a,u){super(e,t,o,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ER(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const o=this._document.data.field(nz("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,t.serverTimestamps)}}}class ER extends rz{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n){n=Il(n,Dn);const e=Il(n.firestore,bf);return aR(Gw(e),n._key).then(t=>CR(e,n,t))}class TR extends wR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ys(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dn(this.firestore,null,t)}}function xR(n,e,t){n=Il(n,Dn);const o=Il(n.firestore,bf),s=zR(n.converter,e,t);return PR(o,[yR(vR(o),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qr.none())])}function PR(n,e){return function(o,s){const a=new Oo;return o.asyncQueue.enqueueAndForget(async()=>GA(await iR(o),s,a)),a.promise}(Gw(n),e)}function CR(n,e,t){const o=t.docs.get(e._key),s=new TR(n);return new rz(n,s,e._key,o,new jR(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){oa=s})(ra),Ws(new Ii("firestore",(o,{instanceIdentifier:s,options:a})=>{const u=o.getProvider("app").getImmediate(),h=new bf(new mC(o.getProvider("auth-internal")),new vC(u,o.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new ke(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tl(f.options.projectId,g)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),No(Tk,xk,e),No(Tk,xk,"esm2017")})();var IR="firebase",AR="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */No(IR,AR,"app");function Ef(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(n);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(n,o[s])&&(t[o[s]]=n[o[s]]);return t}function oz(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RR=oz,iz=new Ml("auth","Firebase",oz());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new Bp("@firebase/auth");function VR(n,...e){Jc.logLevel<=Ne.WARN&&Jc.warn(`Auth (${ra}): ${n}`,...e)}function Ec(n,...e){Jc.logLevel<=Ne.ERROR&&Jc.error(`Auth (${ra}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,...e){throw Tf(n,...e)}function or(n,...e){return Tf(n,...e)}function Sf(n,e,t){const o=Object.assign(Object.assign({},RR()),{[e]:t});return new Ml("auth","Firebase",o).create(e,{appName:n.name})}function xi(n){return Sf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function NR(n,e,t){const o=t;if(!(e instanceof o))throw o.name!==e.constructor.name&&Er(n,"argument-error"),Sf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tf(n,...e){if(typeof n!="string"){const t=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=n.name),n._errorFactory.create(t,...o)}return iz.create(n,...e)}function je(n,e,...t){if(!n)throw Tf(e,...t)}function Kr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ec(e),new Error(e)}function Yr(n,e){n||Kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function DR(){return _0()==="http:"||_0()==="https:"}function _0(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DR()||Kx()||"connection"in navigator)?navigator.onLine:!0}function MR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yr(t>e,"Short delay should be less than long delay!"),this.isMobile=Ux()||$x()}get(){return OR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,e){Yr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{static initialize(e,t,o){this.fetchImpl=e,t&&(this.headersImpl=t),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UR=new Kl(3e4,6e4);function Pf(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function la(n,e,t,o,s={}){return az(n,s,async()=>{let a={},u={};o&&(e==="GET"?u=o:a={body:JSON.stringify(o)});const h=Ll(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:m},a);return Bx()||(f.referrerPolicy="no-referrer"),sz.fetch()(await lz(n,n.config.apiHost,t,h),f)})}async function az(n,e,t){n._canInitEmulator=!1;const o=Object.assign(Object.assign({},LR),e);try{const s=new BR(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw vc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[m,f]=h.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw vc(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw vc(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw vc(n,"user-disabled",u);const g=o[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Sf(n,g,f);Er(n,g)}}catch(s){if(s instanceof eo)throw s;Er(n,"network-request-failed",{message:String(s)})}}async function HR(n,e,t,o,s={}){const a=await la(n,e,t,o,s);return"mfaPendingCredential"in a&&Er(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function lz(n,e,t,o){const s=`${e}${t}?${o}`,a=n,u=a.config.emulator?xf(n.config,s):`${n.config.apiScheme}://${s}`;return FR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class BR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,o)=>{this.timer=setTimeout(()=>o(or(this.auth,"network-request-failed")),UR.get())})}}function vc(n,e,t){const o={appName:n.name};t.email&&(o.email=t.email),t.phoneNumber&&(o.phoneNumber=t.phoneNumber);const s=or(n,e,o);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(n,e){return la(n,"POST","/v1/accounts:delete",e)}async function Qc(n,e){return la(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $R(n,e=!1){const t=ir(n),o=await t.getIdToken(e),s=Cf(o);je(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:o,authTime:vl(km(s.auth_time)),issuedAtTime:vl(km(s.iat)),expirationTime:vl(km(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function km(n){return Number(n)*1e3}function Cf(n){const[e,t,o]=n.split(".");if(e===void 0||t===void 0||o===void 0)return Ec("JWT malformed, contained fewer than 3 sections"),null;try{const s=k_(t);return s?JSON.parse(s):(Ec("Failed to decode base64 JWT payload"),null)}catch(s){return Ec("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function w0(n){const e=Cf(n);return je(e,"internal-error"),je(typeof e.exp<"u","internal-error"),je(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(n,e,t=!1){if(t)return e;try{return await e}catch(o){throw o instanceof eo&&WR(o)&&n.auth.currentUser===n&&await n.auth.signOut(),o}}function WR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(n){var e;const t=n.auth,o=await n.getIdToken(),s=await Rl(n,Qc(t,{idToken:o}));je(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?uz(a.providerUserInfo):[],h=JR(n.providerData,u),m=n.isAnonymous,f=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),g=m?f:!1,b={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new lp(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,b)}async function qR(n){const e=ir(n);await Zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JR(n,e){return[...n.filter(o=>!e.some(s=>s.providerId===o.providerId)),...e]}function uz(n){return n.map(e=>{var{providerId:t}=e,o=Ef(e,["providerId"]);return{providerId:t,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(n,e){const t=await az(n,{},async()=>{const o=Ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await lz(n,s,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",sz.fetch()(u,{method:"POST",headers:h,body:o})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZR(n,e){return la(n,"POST","/v2/accounts:revokeToken",Pf(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){je(e.idToken,"internal-error"),je(typeof e.idToken<"u","internal-error"),je(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){je(e.length!==0,"internal-error");const t=w0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(je(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:o,refreshToken:s,expiresIn:a}=await QR(e,t);this.updateTokensAndExpiration(o,s,Number(a))}updateTokensAndExpiration(e,t,o){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,t){const{refreshToken:o,accessToken:s,expirationTime:a}=t,u=new Fs;return o&&(je(typeof o=="string","internal-error",{appName:e}),u.refreshToken=o),s&&(je(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(je(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return Kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n,e){je(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:t,auth:o,stsTokenManager:s}=e,a=Ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=o,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new lp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Rl(this,this.stsTokenManager.getToken(this.auth,e));return je(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $R(this,e)}reload(){return qR(this)}_assign(e){this!==e&&(je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),t&&await Zc(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(xi(this.auth));const e=await this.getIdToken();return await Rl(this,KR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var o,s,a,u,h,m,f,g;const b=(o=t.displayName)!==null&&o!==void 0?o:void 0,z=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,N=(u=t.photoURL)!==null&&u!==void 0?u:void 0,M=(h=t.tenantId)!==null&&h!==void 0?h:void 0,L=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,$=(f=t.createdAt)!==null&&f!==void 0?f:void 0,q=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:Q,emailVerified:oe,isAnonymous:ae,providerData:se,stsTokenManager:I}=t;je(Q&&I,e,"internal-error");const E=Fs.fromJSON(this.name,I);je(typeof Q=="string",e,"internal-error"),To(b,e.name),To(z,e.name),je(typeof oe=="boolean",e,"internal-error"),je(typeof ae=="boolean",e,"internal-error"),To(P,e.name),To(N,e.name),To(M,e.name),To(L,e.name),To($,e.name),To(q,e.name);const T=new rr({uid:Q,auth:e,email:z,emailVerified:oe,displayName:b,isAnonymous:ae,photoURL:N,phoneNumber:P,tenantId:M,stsTokenManager:E,createdAt:$,lastLoginAt:q});return se&&Array.isArray(se)&&(T.providerData=se.map(C=>Object.assign({},C))),L&&(T._redirectEventId=L),T}static async _fromIdTokenResponse(e,t,o=!1){const s=new Fs;s.updateFromServerResponse(t);const a=new rr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:o});return await Zc(a),a}static async _fromGetAccountInfoResponse(e,t,o){const s=t.users[0];je(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?uz(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),h=new Fs;h.updateFromIdToken(o);const m=new rr({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:u}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(m,f),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Map;function $r(n){Yr(n instanceof Function,"Expected a class definition");let e=z0.get(n);return e?(Yr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,z0.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cz{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cz.type="NONE";const j0=cz;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,e,t){return`firebase:${n}:${e}:${t}`}class Us{constructor(e,t,o){this.persistence=e,this.auth=t,this.userKey=o;const{config:s,name:a}=this.auth;this.fullUserKey=Sc(this.userKey,s.apiKey,a),this.fullPersistenceKey=Sc("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qc(this.auth,{idToken:e}).catch(()=>{});return t?rr._fromGetAccountInfoResponse(this.auth,t,e):null}return rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,o="authUser"){if(!t.length)return new Us($r(j0),e,o);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let a=s[0]||$r(j0);const u=Sc(o,e.config.apiKey,e.name);let h=null;for(const f of t)try{const g=await f._get(u);if(g){let b;if(typeof g=="string"){const z=await Qc(e,{idToken:g}).catch(()=>{});if(!z)break;b=await rr._fromGetAccountInfoResponse(e,z,g)}else b=rr._fromJSON(e,g);f!==a&&(h=b),a=f;break}}catch{}const m=s.filter(f=>f._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new Us(a,e,o):(a=m[0],h&&await a._set(u,h.toJSON()),await Promise.all(t.map(async f=>{if(f!==a)try{await f._remove(u)}catch{}})),new Us(a,e,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pz(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dz(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vz(e))return"Blackberry";if(yz(e))return"Webos";if(hz(e))return"Safari";if((e.includes("chrome/")||mz(e))&&!e.includes("edge/"))return"Chrome";if(fz(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=n.match(t);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function dz(n=Zt()){return/firefox\//i.test(n)}function hz(n=Zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mz(n=Zt()){return/crios\//i.test(n)}function pz(n=Zt()){return/iemobile/i.test(n)}function fz(n=Zt()){return/android/i.test(n)}function vz(n=Zt()){return/blackberry/i.test(n)}function yz(n=Zt()){return/webos/i.test(n)}function If(n=Zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function XR(n=Zt()){var e;return If(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YR(){return Wx()&&document.documentMode===10}function gz(n=Zt()){return If(n)||fz(n)||yz(n)||vz(n)||/windows phone/i.test(n)||pz(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kz(n,e=[]){let t;switch(n){case"Browser":t=E0(Zt());break;case"Worker":t=`${E0(Zt())}-${n}`;break;default:t=n}const o=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ra}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const o=a=>new Promise((u,h)=>{try{const m=e(a);u(m)}catch(m){h(m)}});o.onAbort=t,this.queue.push(o);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const o of this.queue)await o(e),o.onAbort&&t.push(o.onAbort)}catch(o){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(n,e={}){return la(n,"GET","/v2/passwordPolicy",Pf(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=6;class r2{constructor(e){var t,o,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:n2,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(o=e.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,o,s,a,u,h;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(o=m.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsUppercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),m}validatePasswordLengthOptions(e,t){const o=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;o&&(t.meetsMinPasswordLength=e.length>=o),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let o;for(let s=0;s<e.length;s++)o=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,t,o,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,t,o,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=o,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new S0(this),this.idTokenSubscription=new S0(this),this.beforeStateQueue=new e2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iz,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$r(t)),this._initializationPromise=this.queue(async()=>{var o,s,a;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),(o=this._resolvePersistenceManagerAvailable)===null||o===void 0||o.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qc(this,{idToken:e}),o=await rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(o)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let s=o,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&(m!=null&&m.user)&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return je(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(xi(this));const t=e?ir(e):null;return t&&je(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await t2(this),t=new r2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ml("auth","Firebase",e())}onAuthStateChanged(e,t,o){return this.registerStateListener(this.authStateSubscription,e,t,o)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,o){return this.registerStateListener(this.idTokenSubscription,e,t,o)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(o.tenantId=this.tenantId),await ZR(this,o)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const o=await this.getOrInitRedirectPersistenceManager(t);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$r(e)||this._popupRedirectResolver;je(t,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[$r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,o;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,o,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(je(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,o,s);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kz(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());o&&(t["X-Firebase-Client"]=o);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(tr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&VR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gd(n){return ir(n)}class S0{constructor(e){this.auth=e,this.observer=null,this.addObserver=eP(t=>this.observer=t)}get next(){return je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Af={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i2(n){Af=n}function s2(n){return Af.loadJS(n)}function a2(){return Af.gapiScript}function l2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(n,e){const t=$p(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ci(a,e??{}))return s;Er(s,"already-initialized")}return t.initialize({options:e})}function c2(n,e){const t=(e==null?void 0:e.persistence)||[],o=(Array.isArray(t)?t:[t]).map($r);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(o,e==null?void 0:e.popupRedirectResolver)}function d2(n,e,t){const o=gd(n);je(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const s=!1,a=bz(e),{host:u,port:h}=h2(e),m=h===null?"":`:${h}`,f={url:`${a}//${u}${m}/`},g=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!o._canInitEmulator){je(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),je(Ci(f,o.config.emulator)&&Ci(g,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=f,o.emulatorConfig=g,o.settings.appVerificationDisabledForTesting=!0,m2()}function bz(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function h2(n){const e=bz(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const o=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(o);if(s){const a=s[1];return{host:a,port:T0(o.substr(a.length+1))}}else{const[a,u]=o.split(":");return{host:a,port:T0(u)}}}function T0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function m2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _z{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kr("not implemented")}_getIdTokenResponse(e){return Kr("not implemented")}_linkToIdToken(e,t){return Kr("not implemented")}_getReauthenticationResolver(e){return Kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n,e){return HR(n,"POST","/v1/accounts:signInWithIdp",Pf(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2="http://localhost";class Vi extends _z{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Er("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:s}=t,a=Ef(t,["providerId","signInMethod"]);if(!o||!s)return null;const u=new Vi(o,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Hs(e,t)}_linkToIdToken(e,t){const o=this.buildRequest();return o.idToken=t,Hs(e,o)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hs(e,t)}buildRequest(){const e={requestUri:p2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ll(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends $l{constructor(){super("facebook.com")}static credential(e){return Vi._fromParams({providerId:Po.PROVIDER_ID,signInMethod:Po.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Po.credentialFromTaggedObject(e)}static credentialFromError(e){return Po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Po.credential(e.oauthAccessToken)}catch{return null}}}Po.FACEBOOK_SIGN_IN_METHOD="facebook.com";Po.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vi._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:o}=e;if(!t&&!o)return null;try{return Br.credential(t,o)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends $l{constructor(){super("github.com")}static credential(e){return Vi._fromParams({providerId:Co.PROVIDER_ID,signInMethod:Co.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Co.credentialFromTaggedObject(e)}static credentialFromError(e){return Co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Co.credential(e.oauthAccessToken)}catch{return null}}}Co.GITHUB_SIGN_IN_METHOD="github.com";Co.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends $l{constructor(){super("twitter.com")}static credential(e,t){return Vi._fromParams({providerId:Io.PROVIDER_ID,signInMethod:Io.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Io.credentialFromTaggedObject(e)}static credentialFromError(e){return Io.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:o}=e;if(!t||!o)return null;try{return Io.credential(t,o)}catch{return null}}}Io.TWITTER_SIGN_IN_METHOD="twitter.com";Io.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,o,s=!1){const a=await rr._fromIdTokenResponse(e,o,s),u=x0(o);return new ea({user:a,providerId:u,_tokenResponse:o,operationType:t})}static async _forOperation(e,t,o){await e._updateTokensIfNecessary(o,!0);const s=x0(o);return new ea({user:e,providerId:s,_tokenResponse:o,operationType:t})}}function x0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends eo{constructor(e,t,o,s){var a;super(t.code,t.message),this.operationType=o,this.user=s,Object.setPrototypeOf(this,Xc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,t,o,s){return new Xc(e,t,o,s)}}function wz(n,e,t,o){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Xc._fromErrorAndOperation(n,a,e,o):a})}async function f2(n,e,t=!1){const o=await Rl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ea._forOperation(n,"link",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(n,e,t=!1){const{auth:o}=n;if(tr(o.app))return Promise.reject(xi(o));const s="reauthenticate";try{const a=await Rl(n,wz(o,s,e,n),t);je(a.idToken,o,"internal-error");const u=Cf(a.idToken);je(u,o,"internal-error");const{sub:h}=u;return je(n.uid===h,o,"user-mismatch"),ea._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Er(o,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(n,e,t=!1){if(tr(n.app))return Promise.reject(xi(n));const o="signIn",s=await wz(n,o,e),a=await ea._fromIdTokenResponse(n,o,s);return t||await n._updateCurrentUser(a.user),a}function g2(n,e,t,o){return ir(n).onIdTokenChanged(e,t,o)}function k2(n,e,t){return ir(n).beforeAuthStateChanged(e,t)}function b2(n,e,t,o){return ir(n).onAuthStateChanged(e,t,o)}const Yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zz{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=1e3,w2=10;class jz extends zz{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gz(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const o=this.storage.getItem(t),s=this.localCache[t];o!==s&&e(t,s,o)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,m)=>{this.notifyListeners(u,m)});return}const o=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(o);!t&&this.localCache[o]===u||this.notifyListeners(o,u)},a=this.storage.getItem(o);YR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,w2):s()}notifyListeners(e,t){this.localCache[e]=t;const o=this.listeners[e];if(o)for(const s of Array.from(o))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:o}),!0)})},_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jz.type="LOCAL";const z2=jz;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ez extends zz{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ez.type="SESSION";const Sz=Ez;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const o=new kd(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:o,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:o,eventType:s});const h=Array.from(u).map(async f=>f(t.origin,a)),m=await j2(h);t.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n="",e=10){let t="";for(let o=0;o<e;o++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,o=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((h,m)=>{const f=Vf("",20);s.port1.start();const g=setTimeout(()=>{m(new Error("unsupported_event"))},o);u={messageChannel:s,onMessage(b){const z=b;if(z.data.eventId===f)switch(z.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(z.data.response);break;default:clearTimeout(g),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(){return window}function S2(n){wr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tz(){return typeof wr().WorkerGlobalScope<"u"&&typeof wr().importScripts=="function"}async function T2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function P2(){return Tz()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xz="firebaseLocalStorageDb",C2=1,ed="firebaseLocalStorage",Pz="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bd(n,e){return n.transaction([ed],e?"readwrite":"readonly").objectStore(ed)}function I2(){const n=indexedDB.deleteDatabase(xz);return new Wl(n).toPromise()}function up(){const n=indexedDB.open(xz,C2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const o=n.result;try{o.createObjectStore(ed,{keyPath:Pz})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const o=n.result;o.objectStoreNames.contains(ed)?e(o):(o.close(),await I2(),e(await up()))})})}async function P0(n,e,t){const o=bd(n,!0).put({[Pz]:e,value:t});return new Wl(o).toPromise()}async function A2(n,e){const t=bd(n,!1).get(e),o=await new Wl(t).toPromise();return o===void 0?null:o.value}function C0(n,e){const t=bd(n,!0).delete(e);return new Wl(t).toPromise()}const R2=800,V2=3;class Cz{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await up(),this.db)}async _withRetries(e){let t=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(t++>V2)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tz()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kd._getInstance(P2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await T2(),!this.activeServiceWorker)return;this.sender=new E2(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);o&&!((e=o[0])===null||e===void 0)&&e.fulfilled&&!((t=o[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||x2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await up();return await P0(e,Yc,"1"),await C0(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(o=>P0(o,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(o=>A2(o,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>C0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=bd(s,!1).getAll();return new Wl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],o=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)o.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!o.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const o=this.listeners[e];if(o)for(const s of Array.from(o))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cz.type="LOCAL";const N2=Cz;new Kl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iz(n,e){return e?$r(e):(je(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends _z{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function D2(n){return y2(n.auth,new Nf(n),n.bypassAuthState)}function O2(n){const{auth:e,user:t}=n;return je(t,e,"internal-error"),v2(t,new Nf(n),n.bypassAuthState)}async function M2(n){const{auth:e,user:t}=n;return je(t,e,"internal-error"),f2(t,new Nf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Az{constructor(e,t,o,s,a=!1){this.auth=e,this.resolver=o,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:o,postBody:s,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:o,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(m))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D2;case"linkViaPopup":case"linkViaRedirect":return M2;case"reauthViaPopup":case"reauthViaRedirect":return O2;default:Er(this.auth,"internal-error")}}resolve(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=new Kl(2e3,1e4);async function F2(n,e,t){if(tr(n.app))return Promise.reject(or(n,"operation-not-supported-in-this-environment"));const o=gd(n);NR(n,e,Rf);const s=Iz(o,t);return new Si(o,"signInViaPopup",e,s).executeNotNull()}class Si extends Az{constructor(e,t,o,s,a){super(e,t,s,a),this.provider=o,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return je(e,this.auth,"internal-error"),e}async onExecution(){Yr(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,o;if(!((o=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L2.get())};e()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2="pendingRedirect",Tc=new Map;class H2 extends Az{constructor(e,t,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,o),this.eventId=null}async execute(){let e=Tc.get(this.auth._key());if(!e){try{const o=await B2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(t){e=()=>Promise.reject(t)}Tc.set(this.auth._key(),e)}return this.bypassAuthState||Tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B2(n,e){const t=W2(e),o=$2(n);if(!await o._isAvailable())return!1;const s=await o._get(t)==="true";return await o._remove(t),s}function K2(n,e){Tc.set(n._key(),e)}function $2(n){return $r(n._redirectPersistence)}function W2(n){return Sc(U2,n.config.apiKey,n.name)}async function G2(n,e,t=!1){if(tr(n.app))return Promise.reject(xi(n));const o=gd(n),s=Iz(o,e),u=await new H2(o,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await o._persistUserIfCurrent(u.user),await o._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=10*60*1e3;class J2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(t=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var o;if(e.error&&!Rz(e)){const s=((o=e.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";t.onError(or(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const o=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=q2&&this.cachedEventUids.clear(),this.cachedEventUids.has(I0(e))}saveEventToCache(e){this.cachedEventUids.add(I0(e)),this.lastProcessedEventTime=Date.now()}}function I0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rz({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rz(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(n,e={}){return la(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y2=/^https?/;async function eV(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Z2(n);for(const t of e)try{if(tV(t))return}catch{}Er(n,"unauthorized-domain")}function tV(n){const e=ap(),{protocol:t,hostname:o}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&o===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===o}if(!Y2.test(t))return!1;if(X2.test(n))return o===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(o)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV=new Kl(3e4,6e4);function A0(){const n=wr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rV(n){return new Promise((e,t)=>{var o,s,a;function u(){A0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{A0(),t(or(n,"network-request-failed"))},timeout:nV.get()})}if(!((s=(o=wr().gapi)===null||o===void 0?void 0:o.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=wr().gapi)===null||a===void 0)&&a.load)u();else{const h=l2("iframefcb");return wr()[h]=()=>{gapi.load?u():t(or(n,"network-request-failed"))},s2(`${a2()}?onload=${h}`).catch(m=>t(m))}}).catch(e=>{throw xc=null,e})}let xc=null;function oV(n){return xc=xc||rV(n),xc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=new Kl(5e3,15e3),sV="__/auth/iframe",aV="emulator/auth/iframe",lV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cV(n){const e=n.config;je(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xf(e,aV):`https://${n.config.authDomain}/${sV}`,o={apiKey:e.apiKey,appName:n.name,v:ra},s=uV.get(n.config.apiHost);s&&(o.eid=s);const a=n._getFrameworks();return a.length&&(o.fw=a.join(",")),`${t}?${Ll(o).slice(1)}`}async function dV(n){const e=await oV(n),t=wr().gapi;return je(t,n,"internal-error"),e.open({where:document.body,url:cV(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lV,dontclear:!0},o=>new Promise(async(s,a)=>{await o.restyle({setHideOnLeave:!1});const u=or(n,"network-request-failed"),h=wr().setTimeout(()=>{a(u)},iV.get());function m(){wr().clearTimeout(h),s(o)}o.ping(m).then(m,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mV=500,pV=600,fV="_blank",vV="http://localhost";class R0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yV(n,e,t,o=mV,s=pV){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-o)/2,0).toString();let h="";const m=Object.assign(Object.assign({},hV),{width:o.toString(),height:s.toString(),top:a,left:u}),f=Zt().toLowerCase();t&&(h=mz(f)?fV:t),dz(f)&&(e=e||vV,m.scrollbars="yes");const g=Object.entries(m).reduce((z,[P,N])=>`${z}${P}=${N},`,"");if(XR(f)&&h!=="_self")return gV(e||"",h),new R0(null);const b=window.open(e||"",h,g);je(b,n,"popup-blocked");try{b.focus()}catch{}return new R0(b)}function gV(n,e){const t=document.createElement("a");t.href=n,t.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kV="__/auth/handler",bV="emulator/auth/handler",_V=encodeURIComponent("fac");async function V0(n,e,t,o,s,a){je(n.config.authDomain,n,"auth-domain-config-required"),je(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:o,v:ra,eventId:s};if(e instanceof Rf){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Yx(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,b]of Object.entries({}))u[g]=b}if(e instanceof $l){const g=e.getScopes().filter(b=>b!=="");g.length>0&&(u.scopes=g.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const g of Object.keys(h))h[g]===void 0&&delete h[g];const m=await n._getAppCheckToken(),f=m?`#${_V}=${encodeURIComponent(m)}`:"";return`${wV(n)}?${Ll(h).slice(1)}${f}`}function wV({config:n}){return n.emulator?xf(n,bV):`https://${n.authDomain}/${kV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="webStorageSupport";class zV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sz,this._completeRedirectFn=G2,this._overrideRedirectResult=K2}async _openPopup(e,t,o,s){var a;Yr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await V0(e,t,o,ap(),s);return yV(e,u,Vf())}async _openRedirect(e,t,o,s){await this._originValidation(e);const a=await V0(e,t,o,ap(),s);return S2(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Yr(a,"If manager is not set, promise should be"),a)}const o=this.initAndGetManager(e);return this.eventManagers[t]={promise:o},o.catch(()=>{delete this.eventManagers[t]}),o}async initAndGetManager(e){const t=await dV(e),o=new J2(e);return t.register("authEvent",s=>(je(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:o.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=t,o}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bm,{type:bm},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[bm];u!==void 0&&t(!!u),Er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eV(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gz()||hz()||If()}}const jV=zV;var N0="@firebase/auth",D0="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(o=>{e((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SV(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TV(n){Ws(new Ii("auth",(e,{options:t})=>{const o=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=o.options;je(u&&!u.includes(":"),"invalid-api-key",{appName:o.name});const m={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kz(n)},f=new o2(o,s,a,m);return c2(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,o)=>{e.getProvider("auth-internal").initialize()})),Ws(new Ii("auth-internal",e=>{const t=gd(e.getProvider("auth").getImmediate());return(o=>new EV(o))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),No(N0,D0,SV(n)),No(N0,D0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV=5*60,PV=w_("authIdTokenMaxAge")||xV;let O0=null;const CV=n=>async e=>{const t=e&&await e.getIdTokenResult(),o=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(o&&o>PV)return;const s=t==null?void 0:t.token;O0!==s&&(O0=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function IV(n=S_()){const e=$p(n,"auth");if(e.isInitialized())return e.getImmediate();const t=u2(n,{popupRedirectResolver:jV,persistence:[N2,z2,Sz]}),o=w_("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(o,location.origin);if(location.origin===a.origin){const u=CV(a.toString());k2(t,u,()=>u(t.currentUser)),g2(t,h=>u(h))}}const s=b_("auth");return s&&d2(t,`http://${s}`),t}function AV(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}i2({loadJS(n){return new Promise((e,t)=>{const o=document.createElement("script");o.setAttribute("src",n),o.onload=e,o.onerror=s=>{const a=or("internal-error");a.customData=s,t(a)},o.type="text/javascript",o.charset="UTF-8",AV().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TV("Browser");const RV={apiKey:"AIzaSyARHuueMBCAqvu7Dq6fYDd_fEutumTZl5g",authDomain:"flashcards-1f4c1.firebaseapp.com",projectId:"flashcards-1f4c1",storageBucket:"flashcards-1f4c1.firebasestorage.app",messagingSenderId:"1079353402957",appId:"1:1079353402957:web:bdc931b3b7a3db3066de04"},Vz=E_(RV),Pi=IV(Vz),VV=new Br,Nz=dR(Vz),NV=2.5,DV=1,M0=(n,e)=>{const t={...n};t.easeFactor||(t.easeFactor=NV),t.interval||(t.interval=DV),t.repetitions||(t.repetitions=0),t.difficulty=e;const o=new Date;switch(t.lastReviewed=o,e){case"easy":t.easeFactor+=.15;break;case"medium":t.easeFactor-=.05;break;case"hard":t.easeFactor-=.3;break}t.easeFactor=Math.max(1.3,t.easeFactor),e==="hard"?t.interval=Math.max(1,Math.floor(t.interval*.5)):t.repetitions===0?t.interval=1:t.repetitions===1?t.interval=3:t.interval=Math.round(t.interval*t.easeFactor),t.repetitions+=1;const s=new Date(o);return s.setDate(s.getDate()+t.interval),t.dueDate=s,t},OV=n=>{const e=new Date;return n.filter(t=>!t.dueDate||t.dueDate<=e)},MV=async(n,e,t)=>{if(!Pi.currentUser){console.log("User not logged in, cannot save SRS data");return}const o=Pi.currentUser.uid,s=`${n}_${e}`,a=Ww(Nz,"users",o,"srsData",s),u=t.map(h=>({...h,dueDate:h.dueDate?h.dueDate.toISOString():void 0,lastReviewed:h.lastReviewed?h.lastReviewed.toISOString():void 0}));try{await xR(a,{cards:u},{merge:!0})}catch(h){throw console.error("Error saving SRS data to Firestore:",h),h}},LV=async(n,e,t)=>{if(!Pi.currentUser)return console.log("User not logged in, returning default cards"),t.map((u,h)=>({...u,id:h+1}));const o=Pi.currentUser.uid,s=`${n}_${e}`,a=Ww(Nz,"users",o,"srsData",s);try{const u=await SR(a);if(u.exists())return u.data().cards.map(f=>({...f,dueDate:f.dueDate?new Date(f.dueDate):void 0,lastReviewed:f.lastReviewed?new Date(f.lastReviewed):void 0}))}catch(u){console.error("Error loading SRS data from Firestore:",u)}return t.map((u,h)=>({...u,id:h+1}))},FV=({cards:n,darkMode:e=!1,categoryId:t="default",subcategoryId:o=""})=>{var Mn;const[s,a]=re.useState(0),[u,h]=re.useState(!1),[m,f]=re.useState(!1),[g,b]=re.useState(!1),[z,P]=re.useState(!0),[N,M]=re.useState([]),[L,$]=re.useState(!0),[q,Q]=re.useState(!0),[oe,ae]=re.useState(!1),[se,I]=re.useState(new Set),[E,T]=re.useState({easy:0,medium:0,hard:0}),[C,R]=re.useState(""),[D,x]=re.useState("all"),[qe,ot]=re.useState(!1),[ht,we]=re.useState(!1),[te,ve]=re.useState("");re.useEffect(()=>{(async()=>{$(!0);try{const xe=n.map((Oe,mt)=>({...Oe,id:mt,difficulty:void 0,dueDate:void 0,interval:void 0,easeFactor:2.5,repetitions:0})),Ae=await LV(t,o,xe);M(Ae)}catch(xe){console.error("Error loading SRS data:",xe),M(n.map((Ae,Oe)=>({...Ae,id:Oe,difficulty:void 0,dueDate:void 0,interval:void 0,easeFactor:2.5,repetitions:0})))}finally{$(!1)}})()},[t,o,n]),re.useEffect(()=>{const xe=window.location.pathname.split("/").pop()||"";ve(xe)},[]),re.useEffect(()=>{(async()=>{if(q&&N.length>0)try{await MV(t,o,N)}catch(xe){console.error("Error saving SRS data:",xe)}})()},[N,t,o,q]);const X=N.filter(de=>{const xe=C===""||de.front.toLowerCase().includes(C.toLowerCase())||de.back.toLowerCase().includes(C.toLowerCase()),Ae=D==="all"||D==="favorites"&&de.favorite||D==="due"&&de.dueDate&&new Date(de.dueDate)<=new Date||D===de.difficulty;return xe&&Ae}),O=N.filter(de=>de.difficulty==="hard"),W=OV(N),le={total:N.length,reviewed:N.filter(de=>de.difficulty).length,easy:N.filter(de=>de.difficulty==="easy").length,medium:N.filter(de=>de.difficulty==="medium").length,hard:N.filter(de=>de.difficulty==="hard").length,favorites:N.filter(de=>de.favorite).length};re.useEffect(()=>{const de=xe=>{if(!qe&&!ht)switch(xe.code){case"Space":xe.preventDefault(),h(Ae=>!Ae);break;case"ArrowLeft":xe.preventDefault(),Ce(),h(!1);break;case"ArrowRight":xe.preventDefault(),Pe(),h(!1);break}};return window.addEventListener("keydown",de),()=>window.removeEventListener("keydown",de)},[qe,ht]);const Pe=()=>{if(oe&&X.length<=1)return;const de=s+1;if(de>=X.length&&!oe&&O.length>0&&D==="all"&&!C.trim())ot(!0);else{if(de>=X.length)return;a(de),h(!1)}},Ce=()=>{X.length!==0&&(a(de=>(de-1+X.length)%X.length),h(!1))},Ve=()=>{const de=N.filter(Oe=>Oe.difficulty),xe=de.length,Ae=N.length;xe===Ae&&Ae>0&&(de.some(mt=>mt.difficulty==="hard")||b(!0))},Ue=de=>{if(oe){const xe=X[s];T(Oe=>({...Oe,[de]:Oe[de]+1})),I(Oe=>{const mt=new Set(Oe);return mt.add(xe.id),mt}),M(q?Oe=>Oe.map(mt=>mt.id===xe.id?M0(mt,de):mt):Oe=>Oe.map(mt=>mt.id===xe.id?{...mt,difficulty:de}:mt));const Ae=O.filter(Oe=>!se.has(Oe.id)&&Oe.id!==xe.id);Ae.length===0?we(!0):(s>=Ae.length&&a(0),h(!1))}else{M(q?Ae=>Ae.map(Oe=>Oe.id===X[s].id?M0(Oe,de):Oe):Ae=>Ae.map(Oe=>Oe.id===X[s].id?{...Oe,difficulty:de}:Oe)),setTimeout(()=>{Ve()},0);const xe=(s+1)%X.length;xe===0&&O.length>0&&D==="all"&&!C.trim()?ot(!0):(a(xe),h(!1))}},He=()=>{X.length!==0&&M(de=>de.map(xe=>xe.id===X[s].id?{...xe,favorite:!xe.favorite}:xe))},We=()=>{const de=N.filter(Xt=>Xt.difficulty==="easy").length,xe=N.filter(Xt=>Xt.difficulty==="medium").length,Ae=N.filter(Xt=>Xt.difficulty==="hard").length,Oe=de+xe+Ae;if(Oe===0)return;const mt={date:new Date().toISOString(),cardsReviewed:Oe,performance:{easy:de,medium:xe,hard:Ae},category:te||"General"},Sr=localStorage.getItem("flashcards-study-sessions");let pn=[];Sr&&(pn=JSON.parse(Sr)),pn.push(mt),localStorage.setItem("flashcards-study-sessions",JSON.stringify(pn))},tt=()=>{le.reviewed>0&&We(),ae(!1),a(0),ot(!1),we(!1),h(!1),I(new Set),T({easy:0,medium:0,hard:0}),M(N.map(de=>({...de,difficulty:void 0}))),R(""),x("all")},On=()=>{We(),ot(!1),a(0),h(!1),R(""),x("all")},to=()=>{ae(!0),ot(!1),a(0),h(!1),I(new Set),T({easy:0,medium:0,hard:0}),R(""),x("all")};if(ht){const de=N.filter(Ae=>se.has(Ae.id)&&Ae.difficulty!=="hard"),xe=N.filter(Ae=>Ae.difficulty==="hard"&&!se.has(Ae.id));return w.jsxs("div",{className:"flex flex-col items-center gap-8 p-8",children:[w.jsxs("div",{className:`text-2xl font-bold ${e?"text-white bg-gray-800":"text-gray-700 bg-white"} px-8 py-6 rounded-xl shadow-sm text-center`,children:[w.jsx("p",{children:"Review Complete! 🎉"}),w.jsxs("div",{className:"mt-6 space-y-4",children:[w.jsx("p",{className:"text-lg",children:"Your Review Results:"}),w.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[w.jsxs("div",{className:`${e?"bg-green-900":"bg-green-100"} p-4 rounded-lg`,children:[w.jsx("p",{className:`${e?"text-green-300":"text-green-800"} font-semibold`,children:"Easy"}),w.jsx("p",{className:"text-2xl",children:E.easy})]}),w.jsxs("div",{className:`${e?"bg-yellow-900":"bg-yellow-100"} p-4 rounded-lg`,children:[w.jsx("p",{className:`${e?"text-yellow-300":"text-yellow-800"} font-semibold`,children:"Medium"}),w.jsx("p",{className:"text-2xl",children:E.medium})]}),w.jsxs("div",{className:`${e?"bg-red-900":"bg-red-100"} p-4 rounded-lg`,children:[w.jsx("p",{className:`${e?"text-red-300":"text-red-800"} font-semibold`,children:"Hard"}),w.jsx("p",{className:"text-2xl",children:E.hard})]})]}),w.jsxs("p",{className:"text-lg mt-4",children:["You improved ",E.easy+E.medium," out of ",O.length," cards!"]}),de.length>0&&w.jsxs("div",{className:"mt-6",children:[w.jsx("p",{className:"text-lg font-semibold mb-2",children:"Cards You Improved:"}),w.jsx("div",{className:"max-h-48 overflow-y-auto",children:de.map(Ae=>w.jsxs("div",{className:`p-3 mb-2 rounded-lg ${e?Ae.difficulty==="easy"?"bg-green-900 text-green-300":"bg-yellow-900 text-yellow-300":Ae.difficulty==="easy"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:[w.jsx("p",{className:"font-medium",children:Ae.front}),w.jsx("p",{className:"text-sm opacity-75",children:Ae.back})]},Ae.id))})]}),xe.length>0&&w.jsxs("div",{className:"mt-6",children:[w.jsxs("p",{className:"text-lg font-semibold mb-2",children:["You marked ",xe.length," new cards as hard during this review."]}),w.jsx("p",{className:"text-lg mb-4",children:"Would you like to review these new hard cards now?"}),w.jsxs("div",{className:"flex gap-4",children:[w.jsx("button",{onClick:()=>{ae(!0),we(!1),a(0),h(!1),I(new Set),T({easy:0,medium:0,hard:0})},className:`px-6 py-3 ${e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Review New Hard Cards"}),w.jsx("button",{onClick:tt,className:`px-6 py-3 ${e?"bg-gray-700 hover:bg-gray-600":"bg-gray-500 hover:bg-gray-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Start New Session"})]})]})]})]}),xe.length===0&&w.jsx("button",{onClick:tt,className:`px-6 py-3 ${e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Start New Session"})]})}return qe?w.jsxs("div",{className:"flex flex-col items-center gap-8 p-8",children:[w.jsxs("div",{className:`text-2xl font-bold ${e?"text-white bg-gray-800":"text-gray-700 bg-white"} px-8 py-6 rounded-xl shadow-sm text-center`,children:[w.jsx("p",{children:"You've completed the deck! 🎉"}),w.jsxs("p",{className:"text-lg mt-2",children:["You marked ",O.length," cards as hard."]}),w.jsx("p",{className:"text-lg mt-2",children:"Would you like to review them?"})]}),w.jsxs("div",{className:"flex gap-4",children:[w.jsx("button",{onClick:to,className:`px-6 py-3 ${e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Review Hard Cards"}),w.jsx("button",{onClick:On,className:`px-6 py-3 ${e?"bg-gray-700 hover:bg-gray-600":"bg-gray-500 hover:bg-gray-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Skip Review"})]}),w.jsx("button",{onClick:tt,className:`${e?"text-gray-400 hover:text-gray-300":"text-gray-600 hover:text-gray-800"} transition-colors duration-200`,children:"Start New Session"})]}):X.length===0?w.jsxs("div",{className:"flex flex-col items-center gap-8 p-8",children:[w.jsx("div",{className:`text-2xl font-bold ${e?"text-white bg-gray-800":"text-gray-700 bg-white"} px-8 py-6 rounded-xl shadow-sm text-center`,children:w.jsx("p",{children:oe?"No hard cards to review!":D!=="all"||C?"No cards match your filters or search":"No cards in this deck!"})}),w.jsxs("div",{className:"flex gap-4",children:[(D!=="all"||C)&&w.jsx("button",{onClick:()=>{x("all"),R("")},className:`px-6 py-3 ${e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Clear Filters"}),w.jsx("button",{onClick:tt,className:`px-6 py-3 ${e?"bg-gray-700 hover:bg-gray-600":"bg-gray-500 hover:bg-gray-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Start New Session"})]})]}):L?w.jsxs("div",{className:`flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] ${e?"text-white":"text-gray-800"}`,children:[w.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"}),w.jsx("p",{className:"text-lg",children:"Loading flashcards..."})]}):w.jsx("div",{className:"space-y-6",children:z&&t&&o&&((Mn=fk[t])!=null&&Mn[o])?w.jsx(Px,{slides:fk[t][o],onComplete:()=>P(!1),darkMode:e}):w.jsx(w.Fragment,{children:w.jsxs("div",{className:"flex flex-col items-center gap-8 p-8",children:[w.jsxs("div",{className:"w-full max-w-2xl flex justify-between items-center",children:[w.jsxs("div",{className:"flex items-center gap-4",children:[oe?w.jsxs("div",{className:`text-lg font-medium ${e?"text-red-300 bg-red-900":"text-red-600 bg-red-50"} px-6 py-2 rounded-full`,children:["Reviewing Hard Cards (",X.length," remaining)"]}):q&&D==="due"?w.jsxs("div",{className:`text-lg font-medium ${e?"text-blue-300 bg-blue-900":"text-blue-600 bg-blue-50"} px-6 py-2 rounded-full`,children:["Due Cards: ",W.length]}):null,w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:e?"text-gray-300":"text-gray-700",children:"SRS"}),w.jsx("button",{onClick:()=>Q(de=>!de),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${q?e?"bg-blue-600":"bg-blue-500":e?"bg-gray-700":"bg-gray-300"}`,children:w.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${q?"translate-x-6":"translate-x-1"}`})})]})]}),w.jsxs("button",{onClick:()=>f(!0),className:`flex items-center gap-2 px-4 py-2 rounded-lg ${e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"} text-white transition-colors duration-200`,children:[w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Study Stats"]})]}),!oe&&w.jsxs("div",{className:"w-full max-w-2xl",children:[w.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-4",children:[w.jsxs("div",{className:"flex-grow",children:[w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"text",placeholder:"Search cards by content, difficulty, due date, etc...",value:C,onChange:de=>{R(de.target.value),a(0)},className:`w-full px-4 py-2 border ${e?"bg-gray-800 text-white border-gray-700 focus:ring-blue-600":"bg-white text-gray-900 border-gray-300 focus:ring-blue-500"} rounded-lg focus:outline-none focus:ring-2`}),C.trim()&&w.jsx("button",{onClick:()=>{R(""),a(0)},className:`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-opacity-20 ${e?"text-gray-400 hover:bg-gray-700":"text-gray-500 hover:bg-gray-200"}`,children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})})]}),w.jsx("p",{className:`mt-1 text-xs ${e?"text-gray-400":"text-gray-500"}`,children:"Search by: card content, difficulty (easy/medium/hard), due date, interval, success rate, or times reviewed"})]}),w.jsx("div",{className:"flex",children:w.jsxs("select",{value:D,onChange:de=>{x(de.target.value),a(0)},className:`px-4 py-2 border rounded-lg ${e?"bg-gray-800 text-white border-gray-700 focus:ring-blue-600":"bg-white text-gray-700 border-gray-300 focus:ring-blue-500"} focus:outline-none focus:ring-2`,children:[w.jsx("option",{value:"all",children:"All Cards"}),w.jsx("option",{value:"favorites",children:"Favorites"}),q&&w.jsx("option",{value:"due",children:"Due for Review"}),w.jsx("option",{value:"easy",children:"Easy"}),w.jsx("option",{value:"medium",children:"Medium"}),w.jsx("option",{value:"hard",children:"Hard"})]})})]}),(D!=="all"||C)&&w.jsxs("div",{className:"mb-4 flex justify-between items-center",children:[w.jsxs("p",{className:`text-sm ${e?"text-gray-400":"text-gray-600"}`,children:["Showing: ",X.length," of ",N.length," cards",D!=="all"&&` (${D})`,C&&` matching "${C}"`]}),w.jsx("button",{onClick:()=>{x("all"),R("")},className:`text-sm ${e?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-800"}`,children:"Clear filters"})]}),q&&X.length>0&&X[s].dueDate&&w.jsx("div",{className:`mt-2 mb-4 text-sm ${e?"text-gray-400":"text-gray-600"}`,children:w.jsxs("p",{children:["Due: ",X[s].dueDate.toLocaleDateString(),X[s].interval&&` (Interval: ${X[s].interval} days)`]})})]}),w.jsxs("div",{className:"w-full max-w-2xl",children:[w.jsxs("div",{className:"flex justify-between mb-2",children:[w.jsxs("span",{className:`text-sm font-medium ${e?"text-gray-300":"text-gray-700"}`,children:["Progress: ",oe?`${se.size} / ${O.length}`:`${le.reviewed} / ${le.total}`," cards reviewed"]}),w.jsxs("span",{className:`text-sm font-medium ${e?"text-gray-300":"text-gray-700"}`,children:[Math.round((oe?se.size/O.length:le.reviewed/le.total)*100),"%"]})]}),w.jsx("div",{className:`h-2 ${e?"bg-gray-700":"bg-gray-200"} rounded-full overflow-hidden`,children:w.jsxs("div",{className:"flex h-full",children:[w.jsx("div",{className:"bg-green-500 h-full transition-all duration-300",style:{width:`${(oe?E.easy/O.length:le.easy/le.total)*100}%`}}),w.jsx("div",{className:"bg-yellow-500 h-full transition-all duration-300",style:{width:`${(oe?E.medium/O.length:le.medium/le.total)*100}%`}}),w.jsx("div",{className:"bg-red-500 h-full transition-all duration-300",style:{width:`${(oe?E.hard/O.length:le.hard/le.total)*100}%`}})]})}),w.jsxs("div",{className:`flex justify-between mt-1 text-xs ${e?"text-gray-400":"text-gray-600"}`,children:[w.jsxs("span",{children:["Easy: ",oe?E.easy:le.easy]}),w.jsxs("span",{children:["Medium: ",oe?E.medium:le.medium]}),w.jsxs("span",{children:["Hard: ",oe?E.hard:le.hard]}),w.jsxs("span",{children:["Favorites: ",le.favorites]})]})]}),w.jsxs("div",{className:`text-2xl font-bold ${e?"text-white bg-gray-800":"text-gray-700 bg-white"} px-6 py-2 rounded-full shadow-sm`,children:["Card ",s+1," of ",X.length]}),w.jsx("div",{className:"perspective-1000",children:w.jsx(Qj,{front:X[s].front,back:X[s].back,onDifficultySelect:Ue,isFlipped:u,onFlip:()=>h(de=>!de),isFavorite:X[s].favorite,onToggleFavorite:He,darkMode:e})}),w.jsxs("div",{className:"flex gap-4",children:[w.jsx("button",{onClick:Ce,className:`px-6 py-3 ${e?"bg-gray-700 hover:bg-gray-600":"bg-gray-500 hover:bg-gray-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Previous"}),w.jsx("button",{onClick:Pe,className:`px-6 py-3 ${e?"bg-gray-700 hover:bg-gray-600":"bg-gray-500 hover:bg-gray-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Next"})]}),w.jsxs("div",{className:`text-sm ${e?"text-gray-400":"text-gray-500"} mt-4`,children:["Keyboard shortcuts:",w.jsx("span",{className:`mx-2 px-2 py-1 ${e?"bg-gray-700":"bg-gray-100"} rounded`,children:"Space"})," to flip card,",w.jsx("span",{className:`mx-2 px-2 py-1 ${e?"bg-gray-700":"bg-gray-100"} rounded`,children:"←"})," previous card,",w.jsx("span",{className:`mx-2 px-2 py-1 ${e?"bg-gray-700":"bg-gray-100"} rounded`,children:"→"})," next card"]}),w.jsx("button",{onClick:tt,className:`px-6 py-3 ${e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`,children:"Restart Session"}),m&&w.jsx(Zj,{darkMode:e,onClose:()=>f(!1)}),g&&w.jsx(Xj,{darkMode:e,onClose:()=>b(!1),totalCards:N.length})]})})})},L0=({onCategorySelect:n,darkMode:e=!1,selectedCategory:t})=>{const[o,s]=re.useState(null);re.useEffect(()=>{const h=b2(Pi,m=>{s(m)});return()=>h()},[]);const a=async()=>{try{await F2(Pi,VV)}catch(h){console.error("Google login failed:",h)}},u=[{id:"general",name:"Člověk a společnost",color:e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"},{id:"pravo-politologie",name:"Právo a politologie",color:e?"bg-green-600 hover:bg-green-700":"bg-green-500 hover:bg-green-600"},{id:"historie-ekonomie",name:"Moderní historie a ekonomie",color:e?"bg-purple-600 hover:bg-purple-700":"bg-purple-500 hover:bg-purple-600"}];return o?t?w.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]",children:[w.jsx("h2",{className:`text-4xl font-bold ${e?"text-white":"text-gray-800"} mb-8`,children:t.name}),w.jsx("p",{className:`text-xl ${e?"text-gray-300":"text-gray-600"} mb-12`,children:"Vyberte si podkategorii pro studium"}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl",children:t.subcategories.map(h=>w.jsxs("button",{onClick:()=>n(h.id),className:`
                group relative overflow-hidden
                rounded-xl p-6 shadow-lg 
                transition-all duration-300 ease-out
                transform hover:scale-[1.02]
                ${e?"bg-gray-800 hover:bg-gray-700":"bg-white hover:bg-gray-50"}
              `,children:[w.jsxs("div",{className:"relative z-10 flex flex-col h-full",children:[w.jsx("h3",{className:`text-2xl font-bold mb-3 ${e?"text-white":"text-gray-900"}`,children:h.name}),w.jsxs("div",{className:`flex items-center gap-2 mt-auto ${e?"text-blue-400":"text-blue-600"}`,children:[w.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),w.jsxs("span",{className:"text-lg font-medium",children:[h.cards.length," kartiček"]})]})]}),w.jsx("div",{className:`
                  absolute bottom-0 left-0 right-0 h-1 
                  transform origin-left transition-transform duration-300
                  ${e?"bg-blue-500":"bg-blue-600"}
                  scale-x-0 group-hover:scale-x-100
                `})]},h.id))})]}):w.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]",children:[w.jsxs("h2",{className:`text-4xl font-bold ${e?"text-white":"text-gray-800"} mb-8`,children:["Vítejte, ",o.displayName,"!"]}),w.jsx("p",{className:`text-xl ${e?"text-gray-300":"text-gray-600"} mb-12`,children:"Vyberte si kategorii pro začátek učení"}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:u.map(h=>w.jsxs("button",{onClick:()=>n(h.id),className:`${h.color} text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`,children:[w.jsx("h3",{className:"text-2xl font-semibold mb-4",children:h.name}),w.jsxs("p",{className:"text-white/90",children:["Začít učení ",h.name.toLowerCase()]})]},h.id))}),w.jsx("button",{onClick:()=>Pi.signOut(),className:`mt-8 ${e?"bg-red-600 hover:bg-red-700":"bg-red-500 hover:bg-red-600"} text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`,children:"Odhlásit se"})]}):w.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]",children:[w.jsx("h2",{className:`text-4xl font-bold ${e?"text-white":"text-gray-800"} mb-8`,children:"Vítejte ve Flashcards!"}),w.jsx("p",{className:`text-xl ${e?"text-gray-300":"text-gray-600"} mb-12`,children:"Přihlaste se pro začátek učení"}),w.jsx("button",{onClick:a,className:`${e?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600"} text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`,children:"Přihlásit se přes Google"})]})},UV=({onCorrectPassword:n,darkMode:e})=>{const[t,o]=re.useState(""),[s,a]=re.useState(!1),u=h=>{h.preventDefault(),t==="fenomen"?n():(a(!0),o(""))};return w.jsx("div",{className:"flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8",children:w.jsxs("div",{className:`p-6 sm:p-8 rounded-xl shadow-lg ${e?"bg-gray-800":"bg-white"} w-full max-w-sm mx-auto`,children:[w.jsx("h2",{className:`text-xl sm:text-2xl font-bold mb-6 text-center ${e?"text-white":"text-gray-900"}`,children:"Vítejte ve Flashcards"}),w.jsx("p",{className:`text-sm sm:text-base text-center mb-8 ${e?"text-gray-300":"text-gray-600"}`,children:"Pro pokračování zadejte heslo"}),w.jsxs("form",{onSubmit:u,className:"space-y-6",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"password",value:t,onChange:h=>{o(h.target.value),a(!1)},className:`w-full px-4 py-3 rounded-lg border text-base sm:text-lg ${s?"border-red-500":e?"border-gray-600 bg-gray-700 text-white":"border-gray-300 bg-white text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`,placeholder:"Zadejte heslo",autoComplete:"current-password"}),s&&w.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:w.jsx("svg",{className:"h-5 w-5 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),s&&w.jsx("p",{className:"text-red-500 text-sm mt-2 text-center",children:"Nesprávné heslo. Zkuste to prosím znovu."})]}),w.jsx("button",{type:"submit",className:`w-full py-3 px-4 rounded-lg text-base sm:text-lg font-medium ${e?"bg-blue-600 hover:bg-blue-700 active:bg-blue-800":"bg-blue-500 hover:bg-blue-600 active:bg-blue-700"} text-white transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]`,children:"Vstoupit do aplikace"})]})]})})},HV=({darkMode:n,onClose:e})=>{const[t,o]=re.useState(1),s=3,a=[{title:"Vítejte ve Flashcards!",content:"Tato aplikace vám pomůže učit se a zapamatovat si informace pomocí kartiček. Pojďme se podívat, jak to funguje.",icon:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},{title:"Vyberte si kategorii",content:"Začněte výběrem kategorie kartiček, kterou chcete studovat. Každá kategorie obsahuje sadu kartiček zaměřených na konkrétní téma.",icon:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})},{title:"Studujte a učte se",content:"Klikněte na kartičky pro jejich převrácení a zobrazení odpovědi. Použijte navigační tlačítka pro pohyb mezi kartičkami. Přepínání tmavého režimu vám pomůže pohodlně studovat za jakéhokoliv osvětlení.",icon:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}],u=re.useCallback(()=>{t<s?o(t+1):e()},[t,s,e]),h=re.useCallback(()=>{t>1&&o(t-1)},[t]);return re.useEffect(()=>{const m=f=>{f.key==="ArrowRight"||f.key==="Enter"?u():f.key==="ArrowLeft"?h():f.key==="Escape"&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[u,h,e]),w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:m=>{m.target===m.currentTarget&&e()},children:w.jsx("div",{className:`
        ${n?"bg-gray-800 text-white":"bg-white text-gray-900"}
        max-w-md w-full rounded-xl shadow-2xl p-6 sm:p-8
        transform transition-all duration-300 ease-out
        translate-y-0 scale-100 opacity-100
      `,children:w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("h2",{className:"text-xl sm:text-2xl font-bold flex items-center gap-3",children:[w.jsx("span",{className:`${n?"text-blue-400":"text-blue-600"}`,children:a[t-1].icon}),a[t-1].title]}),w.jsx("button",{onClick:e,className:`p-2 rounded-full hover:bg-opacity-10 ${n?"hover:bg-white":"hover:bg-black"}`,children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),w.jsx("p",{className:`text-base ${n?"text-gray-300":"text-gray-600"}`,children:a[t-1].content}),w.jsxs("div",{className:"flex flex-col gap-4",children:[w.jsx("div",{className:"flex justify-center gap-2",children:Array.from({length:s}).map((m,f)=>w.jsx("button",{onClick:()=>o(f+1),className:`
                    h-1.5 rounded-full transition-all duration-200
                    ${f+1===t?"w-8 bg-blue-500":"w-2 "+(n?"bg-gray-600":"bg-gray-300")}
                  `,"aria-label":`Přejít na krok ${f+1}`},f))}),w.jsxs("div",{className:"flex justify-between items-center",children:[w.jsx("button",{onClick:h,className:`
                  px-4 py-2 rounded-lg text-sm
                  transition-colors duration-200
                  ${t===1?"invisible":"visible"}
                  ${n?"text-gray-300 hover:text-white":"text-gray-600 hover:text-gray-900"}
                `,children:"← Zpět"}),w.jsxs("span",{className:`text-sm ${n?"text-gray-400":"text-gray-500"}`,children:["Krok ",t," z ",s]}),w.jsx("button",{onClick:u,className:`
                  px-6 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200
                  transform hover:scale-[1.02] active:scale-[0.98]
                  ${n?"bg-blue-600 hover:bg-blue-700 text-white":"bg-blue-500 hover:bg-blue-600 text-white"}
                `,children:t===s?"Začít →":"Další →"})]})]})]})})})},Ps=({children:n,text:e,position:t="bottom",darkMode:o})=>{const s={top:"bottom-full mb-2",bottom:"top-full mt-2",left:"right-full mr-2",right:"left-full ml-2"};return w.jsxs("div",{className:"relative group",children:[n,w.jsx("div",{className:`
        absolute ${s[t]} z-50
        w-48 p-2 rounded-lg text-sm
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
        ${o?"bg-gray-800 text-white":"bg-white text-gray-800"}
        shadow-lg border ${o?"border-gray-700":"border-gray-200"}
      `,children:w.jsxs("div",{className:"relative",children:[e,w.jsx("div",{className:`
            absolute w-2 h-2 transform rotate-45
            ${o?"bg-gray-800":"bg-white"}
            ${t==="top"?"bottom-[-4px] left-1/2 ml-[-4px] border-r border-b":""}
            ${t==="bottom"?"top-[-4px] left-1/2 ml-[-4px] border-l border-t":""}
            ${t==="left"?"right-[-4px] top-1/2 mt-[-4px] border-r border-t":""}
            ${t==="right"?"left-[-4px] top-1/2 mt-[-4px] border-l border-b":""}
            ${o?"border-gray-700":"border-gray-200"}
          `})]})})]})},BV=[{id:"general",name:"Člověk a společnost",subcategories:[{id:"filosofie",name:"Filosofie",cards:[{front:"Od kdy do kdy mluvíme o středověké filosofii?",back:"Od rozpadu Západořímské říše do počátku humanismu"},{front:"Kdo byl nejdůležitějším představitelem patristiky?",back:"Sv. Augustýn"},{front:'Co znamená "creatio ex nihilo"?',back:"Stvoření z ničeho"},{front:"Kdo uznal svébytnost filosofie vůči teologii?",back:"Tomáš Akvinský"},{front:"Jaký proud tvrdí, že univerzálie jsou pouze jazykový nástroj?",back:"Nominalismus"},{front:'Kdo z následujících filosofů napsal dílo "O obci boží"?',back:"Sv. Augustýn"},{front:"Co bylo cílem apologetů?",back:"Obhajoba křesťanství"},{front:"Jak nazýváme filosofii inspirovanou Tomášem Akvinským?",back:"Tomismus"},{front:"Kdo byl muslimským filosofem z doby mezidobí, který komentoval Aristotela?",back:"Averroes"},{front:"Který směr zdůrazňuje, že základním zdrojem poznání je rozum?",back:"Racionalismus"},{front:"Kdo je nejvýznamnějším představitelem Kantovského kriticismu?",back:"Immanuel Kant"},{front:"Jaký směr tvrdí, že všechno poznání vychází ze zkušenosti?",back:"Empirismus"},{front:"Který směr kladl důraz na rozum a kritizoval církevní dogmata?",back:"Osvícenství"},{front:"Který směr tvrdí, že Bůh stvořil svět, ale do něj dále nezasahuje?",back:"Deismus"},{front:"Který směr je známý kategoriálním imperativem a spojením racionalismu a empirismu?",back:"Kantovský kriticismus"},{front:"Kdo je nejvýznamnějším představitelem materialismu?",back:"Karl Marx"},{front:"Který směr tvrdí, že hmota je odvozená od idejí?",back:"Idealismus"},{front:"Který směr měří morální hodnotu činu podle jeho důsledků?",back:"Utilitarismus"},{front:"Který směr zdůrazňuje, že rozum není hlavním nástrojem poznání?",back:"Iracionalismus"},{front:"Kdo je představitelem voluntarismu?",back:"Friedrich Nietzsche"},{front:"Který směr odmítá metafyzické spekulace a zaměřuje se na empirická fakta?",back:"Pozitivismus"},{front:"Jaký směr tvrdí, že dějiny jsou poháněny třídním bojem?",back:"Marxismus"},{front:"Který směr tvrdí, že tradiční hodnoty a smysl života jsou iluzí?",back:"Nihilismus"},{front:"Jaký pojem používá Henri Bergson k popisu živého času?",back:"Trvání"},{front:"Který směr považuje pravdu za to, co funguje v praxi?",back:"Pragmatismus"},{front:"Kdo je zakladatelem fenomenologie?",back:"Edmund Husserl"},{front:"Který směr zdůrazňuje individuální svobodu a smysl existence?",back:"Existencialismus"},{front:"Co zkoumá hermeneutika?",back:"Teorii interpretace textů"},{front:'Kdo je autorem výroku "O čem nelze mluvit, o tom se musí mlčet"?',back:"Ludwig Wittgenstein"},{front:"Co je klíčovým kritériem vědeckosti podle Karla Poppera?",back:"Falsifikace"},{front:"Jaká je hlavní myšlenka stoicismus?",back:"Dosažení vnitřního klidu a harmonického života skrze ovládání emocí"},{front:"Jaká je hlavní myšlenka epikureismu?",back:'Nejvyšším cílem je dosažení "atarxie" a potěšení, které je dosažitelné skrze rozumné uspokojování potřeb'},{front:"Jaká je hlavní myšlenka skepticizmu?",back:"Skeptici tvrdí, že člověk nemůže dosáhnout definitivní jistoty a měl by se vyhýbat absolutním tvrzením"},{front:"Jaká je hlavní myšlenka novoplatonismu?",back:'Vše ve světě je propojeno skrze "Jedno", a člověk může dosáhnout osvícení a sjednocení s tímto absolutním principem'},{front:"Jaká je hlavní myšlenka novopýthagoreismu?",back:"Vesmír je řízen matematickými zákony, které ovlivňují přírodu i duši člověka"},{front:"Jaká byla hlavní myšlenka Sokratovy filosofie?",back:"Etika a sebepoznání skrze dialektiku"},{front:"Jaká je hlavní myšlenka platónismu?",back:"Existuje dokonalý svět idejí"},{front:"Co je hlavní myšlenka Aristotelismu?",back:"Vše má svůj účel (telos) a cílem života je eudaimonie"},{front:"Jaký je Platónův pohled na univerzálie?",back:"Jsou nezávislé na konkrétních věcech a existují jako ideje ve světě idejí"},{front:"Jaký je Aristotelův pohled na univerzálie?",back:"Existují pouze ve věcech samotných"},{front:"Jaký základní princip (arché) hledali myslitelé Míletské školy?",back:"Voda"},{front:"Co je hlavní myšlenkou Pythagorejské školy?",back:"Vesmír je uspořádán podle matematických zákonů"},{front:"Co zdůraznil Herakleitos o světě?",back:"Svět je v neustálém pohybu a změně"},{front:"Co tvrdili představitelé Eléjské školy o realitě?",back:"Realita je neměnná a nehybná"},{front:"Co věřili Sofisté o pravdě?",back:"Pravda je relativní a závisí na názoru jednotlivce"},{front:"Jaký názor měli atomisté na svět?",back:"Vše se skládá z malých, nedělitelných částic - atomů"}],stats:{totalCards:40,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:40,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}},{id:"psychologie",name:"Psychologie",cards:[{front:'Kdo přišel s termínem "introspekce"?',back:"Wilhelm Wundt"},{front:"Co zkoumá gnoseologie?",back:"Vztah mezi vědomím a objekty, které jsou poznávány"},{front:"Co je cílem introspekce?",back:"Analyzovat vnitřní prožitky a mentální stavy"},{front:'Kdo přišel s termínem "kolektivní nevědomí"?',back:"Carl Gustav Jung"},{front:"Co je kolektivní nevědomí?",back:"Soubor nevědomých obsahů, které jsou sdílené mezi jednotlivci"},{front:'Kdo přišel s termínem "psychika"?',back:"Sigmund Freud"},{front:"Co zahrnuje psychika podle Freuda?",back:"Vědomí, předvědomí a nevědomí"},{front:'Kdo přišel s termínem "chování a prožívání"?',back:"B.F. Skinner"},{front:'Co zahrnuje termín "chování a prožívání"?',back:"Externí jednání a vnitřní prožitky, které nelze pozorovat"}],stats:{totalCards:9,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:9,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}},{id:"sociologie",name:"Sociologie",cards:[{front:`Kdo je považován za zakladatele pozitivismu?
a) Karl Marx
b) Herbert Spencer
c) Auguste Comte
d) Émile Durkheim`,back:"c) Auguste Comte"},{front:`Jaký filozofický směr byl spojen s Herbertem Spencerem?
a) Pozitivismus
b) Elitismus
c) Sociální darwinismus
d) Feminismus`,back:"c) Sociální darwinismus"},{front:`Který filozof tvrdil, že historie je dějinami třídního boje?
a) Karl Marx
b) Auguste Comte
c) Émile Durkheim
d) Max Weber`,back:"a) Karl Marx"},{front:`Kdo je považován za jednoho z hlavních zakladatelů moderní sociologie?
a) Karl Marx
b) Émile Durkheim
c) Herbert Spencer
d) Auguste Comte`,back:"b) Émile Durkheim"},{front:`Co je hlavní myšlenkou sociálního darwinismu?
a) Třídy by měly spolupracovat pro společný prospěch.
b) Stát by měl regulovat trhy a zásahy do ekonomiky.
c) Vykořisťování dělníků je nezbytné pro rozvoj společnosti.
d) Společnost se vyvíjí přirozeným výběrem, stejně jako příroda.`,back:"d) Společnost se vyvíjí přirozeným výběrem, stejně jako příroda."},{front:`Jaký směr je spojen s Paretovým pravidlem 80/20?
a) Marxismus
b) Sociální darwinismus
c) Elitismus
d) Kapitalismus`,back:"c) Elitismus"},{front:`Kdo spojil protestantskou etiku s rozvojem kapitalismu?
a) Max Weber
b) Auguste Comte
c) Émile Durkheim
d) Herbert Spencer`,back:"a) Max Weber"},{front:`Co bylo hlavním zaměřením Georga Simmela v sociologii?
a) Studování makro-sociálních změn.
b) Analýza mikro-sociálních interakcí.
c) Zkoumání politických systémů.
d) Rozvoj teorie společenského pokroku.`,back:"b) Analýza mikro-sociálních interakcí."},{front:`Jakou metodu vyvinul Jacob L. Moreno pro studium sociálních vztahů?
a) Sociometrie
b) Etologii
c) Psychoanalýzu
d) Behaviorismus`,back:"a) Sociometrie"},{front:`Jaký je význam Paretova pravidla 80/20?
a) 80 % bohatství je rozděleno mezi 80 % lidí.
b) 20 % lidí vlastní 80 % bohatství.
c) 80 % lidí je bez práce.
d) 20 % populace ovládá 80 % rozhodnutí.`,back:"b) 20 % lidí vlastní 80 % bohatství."},{front:`Kdo byl jedním z hlavních představitelů Chicagské školy sociologie?
a) Karl Marx
b) Jacob L. Moreno
c) Robert Park
d) Tomáš Garrigue Masaryk`,back:"c) Robert Park"},{front:`Kdo byl zastáncem pozitivismu a věřil, že veškeré poznání musí být vědecké?
a) Karl Marx
b) Auguste Comte
c) Max Weber
d) Émile Durkheim`,back:"b) Auguste Comte"},{front:`Kdo vyvinul sociometrické metody pro studium vztahů ve skupinách?
a) Karl Marx
b) Max Weber
c) Jacob L. Moreno
d) Émile Durkheim`,back:"c) Jacob L. Moreno"},{front:`Jaký směr se zaměřoval na analýzu vlivu městského života na jednotlivce?
a) Sociální darwinismus
b) Sociologie
c) Marxismus
d) Elitismus`,back:"b) Sociologie"},{front:`Který filozof je spojen s teorií o "beztřídní společnosti"?
a) Karl Marx
b) Auguste Comte
c) Max Weber
d) Herbert Spencer`,back:"a) Karl Marx"},{front:`Kdo se zaměřil na analýzu vlivu náboženství na rozvoj kapitalismu?
a) Émile Durkheim
b) Max Weber
c) Auguste Comte
d) Herbert Spencer`,back:"b) Max Weber"},{front:`Kdo považoval vědecké metody za klíčové pro zlepšení lidské společnosti?
a) Karl Marx
b) Herbert Spencer
c) Auguste Comte
d) Émile Durkheim`,back:"c) Auguste Comte"},{front:`Kdo byl známý svou teorií o tom, že v každé společnosti existuje malá skupina elit?
a) Herbert Spencer
b) Karl Marx
c) Vilfredo Pareto
d) Max Weber`,back:"c) Vilfredo Pareto"},{front:`Co byl hlavní cíl Durkheimova výzkumu o sebevraždách?
a) Analýza příčin válek.
b) Zkoumání vlivu rodiny na jednotlivce.
c) Studium vlivu sociálních faktorů na jednotlivce.
d) Porozumění náboženským rituálům.`,back:"c) Studium vlivu sociálních faktorů na jednotlivce."},{front:`Kdo tvrdil, že lidské vztahy jsou určovány přirozenými zákony evoluce?
a) Max Weber
b) Auguste Comte
c) Herbert Spencer
d) Émile Durkheim`,back:"c) Herbert Spencer"},{front:`Jaký sociální směr je spojený s Durkheimovou studií náboženství?
a) Pozitivismus
b) Sociální darwinismus
c) Funkcionalismus
d) Marxismus`,back:"c) Funkcionalismus"},{front:`Kdo je spojen s myšlenkou, že neexistuje žádná jednotná pravda o společnosti, ale pouze různé interpretace?
a) Max Weber
b) Émile Durkheim
c) Robert Park
d) Auguste Comte`,back:"a) Max Weber"},{front:`Kdo věřil, že ekonomická nerovnost ve společnosti je nezbytná pro pokrok?
a) Karl Marx
b) Vilfredo Pareto
c) Émile Durkheim
d) Tomáš Garrigue Masaryk`,back:"b) Vilfredo Pareto"},{front:`Který filozof kritizoval stát za přílišné zasahování do ekonomiky?
a) Herbert Spencer
b) Auguste Comte
c) Karl Marx
d) Max Weber`,back:"a) Herbert Spencer"},{front:`Kdo vnímal sociální vědy jako nástroj pro zlepšení společnosti?
a) Vilfredo Pareto
b) Herbert Spencer
c) Auguste Comte
d) Robert Park`,back:"c) Auguste Comte"},{front:`Kdo ve svých studiích sociálních vztahů v městském prostředí poukazoval na roli anonymity a odloučení?
a) Karl Marx
b) Max Weber
c) Robert Park
d) Georg Simmel`,back:"d) Georg Simmel"},{front:`Kdo zkoumal vztah mezi ekonomikou a náboženstvím v kontextu protestantské etiky?
a) Émile Durkheim
b) Max Weber
c) Auguste Comte
d) Karl Marx`,back:"b) Max Weber"},{front:`Kdo tvrdil, že stát a společnost musí vycházet z vědeckého poznání pro svou organizaci?
a) Karl Marx
b) Auguste Comte
c) Émile Durkheim
d) Max Weber`,back:"b) Auguste Comte"},{front:`Kdo byl známý svou teorií o společenských elitách a jejich vlivu na politiku?
a) Karl Marx
b) Herbert Spencer
c) Vilfredo Pareto
d) Max Weber`,back:"c) Vilfredo Pareto"},{front:`Kdo považoval sociální vědy za nezbytné pro praktické zlepšení života jednotlivců?
a) Auguste Comte
b) Karl Marx
c) Max Weber
d) Vilfredo Pareto`,back:"a) Auguste Comte"}],stats:{totalCards:30,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:30,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}}]},{id:"pravo-politologie",name:"Právo a politologie",subcategories:[{id:"pravo",name:"Právo",cards:[{front:`Jaké jsou základní principy ústavního práva?
a) Rozdělení moci, právní jistota, suverenita státu
b) Vytváření zákonů, výkon soudní moci
c) Suverenita jednotlivců, volební právo
d) Práva menšin, rovnost práv`,back:"a) Rozdělení moci, právní jistota, suverenita státu"},{front:`Kdo je hlavním představitelem výkonné moci v ČR?
a) Prezident
b) Parlament
c) Soudy
d) Poslanci`,back:"a) Prezident"},{front:`Co znamená princip dělby moci v ústavním právu?
a) Rozdělení pravomocí mezi prezidenta, parlament a soudy
b) Nezávislost soudů na zákonodárné moci
c) Předání moci pouze jednomu subjektu
d) Ovládání státu vojenskou mocí`,back:"a) Rozdělení pravomocí mezi prezidenta, parlament a soudy"},{front:`Jaké jsou podmínky pro uzavření manželství v ČR?
a) Plnoletost, svobodná vůle, souhlas obou stran
b) Dědičnost, souhlas rodičů, plnoletost
c) Svoboda, dědictví, přítomnost svědka
d) Svědecká přítomnost, plnoletost, cizí souhlas`,back:"a) Plnoletost, svobodná vůle, souhlas obou stran"},{front:`Co je to právo občanského soudního řízení?
a) Zákony upravující civilní spory
b) Zákony o právu na náboženskou svobodu
c) Zákony o pracovních podmínkách
d) Zákony o právu na ochranu životního prostředí`,back:"a) Zákony upravující civilní spory"},{front:`Co je to zákonný zástupce?
a) Osoba, která může právně jednat za jiného
b) Osoba, která zastupuje stát v soudních sporech
c) Osoba volená do parlamentu
d) Osoba vykonávající veřejnou funkci`,back:"a) Osoba, která může právně jednat za jiného"},{front:`Co je právní úprava dědictví?
a) Určení práv a povinností dědiců
b) Úprava práv k nemovitostem
c) Zákony upravující rodinné vztahy
d) Určení výše daně z příjmu`,back:"a) Určení práv a povinností dědiců"},{front:`Kdy je smlouva považována za platně uzavřenou?
a) Pokud byly splněny podmínky zákona a obě strany se dohodly
b) Pokud je podepsána jednou stranou
c) Pokud je schválena státem
d) Pokud je potvrzena ústně`,back:"a) Pokud byly splněny podmínky zákona a obě strany se dohodly"},{front:`Co znamená „nullum crimen sine lege"?
a) Neexistuje zločin bez zákona
b) Neexistuje trest bez viníka
c) Neexistuje obhájce bez obvinění
d) Neexistuje trest bez důkazu`,back:"a) Neexistuje zločin bez zákona"},{front:`Co je právní odpovědnost?
a) Povinnost odpovědět za jednání, které porušuje zákon
b) Povinnost hlásit všechny zákony
c) Právo jednat bez omezení
d) Povinnost požádat o pomoc právníka`,back:"a) Povinnost odpovědět za jednání, které porušuje zákon"},{front:`Co je to nutná obrana?
a) Ochrana sebe nebo jiných před útokem
b) Použití síly v reakci na porušení zákona
c) Porušení zákona za účelem zisku
d) Porušení práva k ochraně soukromí`,back:"a) Ochrana sebe nebo jiných před útokem"},{front:`Co je krajní nouze?
a) Ochrana sebe nebo jiných, když není jiná možnost
b) Útok na nevinného člověka
c) Porušení zákona pro vlastní zisk
d) Ochrana soukromí před vládními zásahy`,back:"a) Ochrana sebe nebo jiných, když není jiná možnost"},{front:`Co znamená zásada legality v trestním právu?
a) Trestání pouze za činy definované zákonem
b) Trestání za činy podle individuálních rozhodnutí soudů
c) Trestání pouze za porušení etických norem
d) Trestání pouze pro závažné trestné činy`,back:"a) Trestání pouze za činy definované zákonem"},{front:`Kdy je použití síly v nutné obraně považováno za přiměřené?
a) Pokud je síla odpovídající útoku
b) Pokud je síla nadměrná
c) Pokud je síla nelegální
d) Pokud je síla podporována svědky`,back:"a) Pokud je síla odpovídající útoku"},{front:`Co je to retroaktivita v trestním právu?
a) Použití zákonů na činy spáchané před jejich účinností
b) Použití nových trestů na všechny zločince
c) Použití zákonů na základě rozhodnutí soudů
d) Změna trestů na základě politických rozhodnutí`,back:"a) Použití zákonů na činy spáchané před jejich účinností"},{front:`Co je zákaz retroaktivity v trestním právu?
a) Zákony nemohou být použity zpětně na činy spáchané před jejich účinností
b) Zákony mohou být aplikovány na minulost, ale pouze po schválení soudem
c) Zákony jsou zpětně aplikovány na všechny spáchané zločiny
d) Zákony nemohou být změněny po spáchání činu`,back:"a) Zákony nemohou být použity zpětně na činy spáchané před jejich účinností"},{front:`Co znamená princip "lex mitior"?
a) Použití mírnějších trestů v případě změny zákona
b) Použití tvrdších trestů na závažné trestné činy
c) Odložení trestního řízení až do změny zákona
d) Možnost využít trestů pouze v případě porušení zákona`,back:"a) Použití mírnějších trestů v případě změny zákona"},{front:`Co je to právní zástupce?
a) Osoba, která jedná za jiného v právních záležitostech
b) Osoba, která poskytuje poradenství v trestních věcech
c) Osoba, která je volena do veřejné funkce
d) Osoba, která řídí soudní proces`,back:"a) Osoba, která jedná za jiného v právních záležitostech"},{front:`Co je to právní moc rozhodnutí soudu?
a) Rozhodnutí, které se stalo závazným pro všechny strany
b) Rozhodnutí, které je provizorní
c) Rozhodnutí, které může být později zrušeno
d) Rozhodnutí, které není povinné pro strany`,back:"a) Rozhodnutí, které se stalo závazným pro všechny strany"},{front:`Jaký je účel občanského práva?
a) Upravuje vztahy mezi jednotlivci a jejich majetkové a osobní vztahy
b) Upravuje vztahy mezi státem a jednotlivci
c) Upravuje vztahy mezi státy a jejich územími
d) Upravuje vztahy mezi národy a kulturami`,back:"a) Upravuje vztahy mezi jednotlivci a jejich majetkové a osobní vztahy"},{front:`Co je to právní norma?
a) Pravidlo chování stanovené státem
b) Doporučení pro občany, které není závazné
c) Rozhodnutí soudu v konkrétní věci
d) Doporučení pro podniky, jak postupovat`,back:"a) Pravidlo chování stanovené státem"},{front:`Co znamená zásada "nullum crimen sine lege"?
a) Neexistuje zločin bez zákona
b) Neexistuje trest bez důkazu
c) Neexistuje zločin bez viníka
d) Neexistuje obhájce bez obvinění`,back:"a) Neexistuje zločin bez zákona"},{front:`Co je to právní stát?
a) Stát, kde jsou právní normy nadřazeny nad ostatními pravidly
b) Stát, kde je právo podřízeno vládě
c) Stát, kde občané nemají právo na ochranu práv
d) Stát, který neuznává žádné právní normy`,back:"a) Stát, kde jsou právní normy nadřazeny nad ostatními pravidly"},{front:`Co je to právní jistota?
a) Záruka, že právní předpisy budou jasné, stabilní a aplikovány spravedlivě
b) Jistota, že soudní rozhodnutí budou respektována
c) Jistota, že každý občan má právo na právní poradenství
d) Jistota, že všechny právní záležitosti budou vyřešeny do jednoho roku`,back:"a) Záruka, že právní předpisy budou jasné, stabilní a aplikovány spravedlivě"},{front:`Co je to smlouva podle občanského práva?
a) Dohoda mezi dvěma nebo více stranami, která zakládá, mění nebo ruší právní vztahy
b) Právní norma vydaná státem, která upravuje chování občanů
c) Rozhodnutí soudu ve sporech mezi jednotlivci
d) Zákon, který upravuje pracovní vztahy mezi zaměstnavatelem a zaměstnancem`,back:"a) Dohoda mezi dvěma nebo více stranami, která zakládá, mění nebo ruší právní vztahy"},{front:`Jaké jsou základní podmínky pro platnost smlouvy?
a) Svobodná vůle stran, plnoletost, způsobilost k právním úkonům
b) Povolení státu, písemná forma, souhlas třetí strany
c) Písemná forma, registrace u soudu, svědecká přítomnost
d) Kmenová tradice, souhlas zástupce státu, stanovení výše pokuty`,back:"a) Svobodná vůle stran, plnoletost, způsobilost k právním úkonům"},{front:`Co je to právní jednání?
a) Každý projev vůle, který má za následek vznik, změnu nebo zánik právních vztahů
b) Jakýkoliv projev, který neovlivňuje právní vztahy mezi osobami
c) Projev, který je v rozporu s právem
d) Projev vůle, který nevede k žádným právním následkům`,back:"a) Každý projev vůle, který má za následek vznik, změnu nebo zánik právních vztahů"},{front:`Co znamená způsobilost k právním úkonům?
a) Schopnost osoby vykonávat právní jednání a být za ně odpovědná
b) Povinnost osoby dodržovat všechny právní předpisy
c) Právo na obranu proti státnímu zásahu
d) Možnost obdržet dědictví nebo dary`,back:"a) Schopnost osoby vykonávat právní jednání a být za ně odpovědná"},{front:`Co je to právní osoba?
a) Subjekt, který může mít právní povinnosti a práva, například společnost nebo stát
b) Osoba, která se účastní občanského soudního řízení
c) Osoba, která vykonává veřejnou funkci
d) Osoba, která vykonává profesní činnost`,back:"a) Subjekt, který může mít právní povinnosti a práva, například společnost nebo stát"},{front:`Co je odpovědnost za škodu?
a) Povinnost nahradit škodu, kterou někdo způsobil jinému
b) Povinnost platit daně státu
c) Právo na odškodnění v případě nezákonného jednání
d) Povinnost vrátit půjčené peníze`,back:"a) Povinnost nahradit škodu, kterou někdo způsobil jinému"},{front:`Co je to dědická smlouva?
a) Smlouva, která upravuje dědictví mezi jednotlivci
b) Smlouva mezi podniky o podmínkách spolupráce
c) Smlouva o převodu nemovitosti
d) Smlouva o koupi zboží`,back:"a) Smlouva, která upravuje dědictví mezi jednotlivci"},{front:`Co je to závěť?
a) Právní úkon, kterým člověk určuje, jak naloží se svým majetkem po smrti
b) Písemný souhlas pro uzavření smlouvy
c) Dohoda o dělení majetku mezi dědici
d) Právní dokument potvrzující majetkové právo`,back:"a) Právní úkon, kterým člověk určuje, jak naloží se svým majetkem po smrti"},{front:`Co znamená nárok na vrácení věci?
a) Právo požadovat vrácení věci, která byla někomu neoprávněně odevzdána
b) Právo na odškodnění za ztrátu věci
c) Právo na prodej věci, kterou vlastním
d) Právo na zničení věci, která je ve vlastnictví jiného`,back:"a) Právo požadovat vrácení věci, která byla někomu neoprávněně odevzdána"},{front:`Co je to výpověď ze smlouvy?
a) Jednostranné zrušení smlouvy ze strany jedné strany
b) Dohoda obou stran o ukončení smlouvy
c) Prohlášení o plnění smlouvy
d) Ukončení smlouvy z rozhodnutí soudu`,back:"a) Jednostranné zrušení smlouvy ze strany jedné strany"},{front:`Co je to veřejná nabídka?
a) Projev vůle, kterým jedna strana nabízí plnění určité smlouvy veřejně
b) Nabídka na výměnu zboží mezi podniky
c) Nabídka na uzavření smlouvy v soukromí
d) Nabídka, kterou je možné uzavřít pouze s právním zástupcem`,back:"a) Projev vůle, kterým jedna strana nabízí plnění určité smlouvy veřejně"},{front:`Co je to konkludentní jednání?
a) Jednání, které vyjadřuje vůli osoby, i když není výslovně vyjádřeno slovy
b) Jednání, které je povoleno pouze soudem
c) Jednání, které musí být prováděno písemně
d) Jednání, které se vztahuje pouze na právnické osoby`,back:"a) Jednání, které vyjadřuje vůli osoby, i když není výslovně vyjádřeno slovy"},{front:`Co znamená „koupě" podle občanského práva?
a) Smlouva, kterou se prodávající zavazuje převést vlastnické právo k věci kupujícímu
b) Smlouva, kterou se převádí nájemní právo k nemovitosti
c) Smlouva, kterou se podnik zavazuje k prodeji zboží na splátky
d) Smlouva, která se vztahuje pouze na movité věci`,back:"a) Smlouva, kterou se prodávající zavazuje převést vlastnické právo k věci kupujícímu"},{front:`Co je to „věcná práva"?
a) Práva, která se vztahují k určité věci, jako je vlastnictví nebo zástavní právo
b) Práva týkající se práce a zaměstnání
c) Práva k nehmotným věcem, jako jsou patenty a autorská práva
d) Práva týkající se ochrany soukromí`,back:"a) Práva, která se vztahují k určité věci, jako je vlastnictví nebo zástavní právo"},{front:`Co znamená „nemovitost" podle občanského práva?
a) Věci, které jsou pevně spojeny s pozemkem, jako jsou budovy a stavby
b) Věci, které mohou být pohybovány z místa na místo
c) Zboží, které je určeno k prodeji
d) Zvířata, která jsou ve vlastnictví člověka`,back:"a) Věci, které jsou pevně spojeny s pozemkem, jako jsou budovy a stavby"},{front:`Co je to záruka za jakost?
a) Odpovědnost prodávajícího za vady, které se projeví u prodaného zboží
b) Záruka, že zboží bude doručeno včas
c) Záruka, že zboží bude prodáno za nízkou cenu
d) Záruka, že zboží bude odpovídat přání kupujícího`,back:"a) Odpovědnost prodávajícího za vady, které se projeví u prodaného zboží"},{front:`Co znamená „společná a nerozdílná odpovědnost"?
a) Když více lidí odpovídá za jednu povinnost, každý z nich může být povolán k plnění celé povinnosti
b) Když více lidí odpovídá za různé povinnosti
c) Když každý z účastníků smlouvy je odpovědný pouze za svoji část povinnosti
d) Když zodpovídají pouze ti, kteří podepsali smlouvu`,back:"a) Když více lidí odpovídá za jednu povinnost, každý z nich může být povolán k plnění celé povinnosti"},{front:`Co je to vlastnické právo?
a) Právo osoby nakládat s věcí podle své vůle, včetně jejího prodeje, darování či zničení
b) Právo na užívání věci bez omezení
c) Právo na náhradu škody způsobené jinou osobou
d) Právo užívat věc pouze po dobu nájmu`,back:"a) Právo osoby nakládat s věcí podle své vůle, včetně jejího prodeje, darování či zničení"},{front:`Co je to Ústava České republiky?
a) Nejvyšší právní předpis, který určuje státní zřízení, práva a svobody občanů
b) Právní předpis, který upravuje obchodní vztahy
c) Smlouva mezi Českou republikou a jinými státy
d) Zákon, který upravuje volební právo`,back:"a) Nejvyšší právní předpis, který určuje státní zřízení, práva a svobody občanů"},{front:`Co znamená princip dělby moci v ústavním právu?
a) Rozdělení pravomocí mezi různé orgány státní moci, aby se zabránilo koncentraci moci
b) Právo prezidenta určovat zákony
c) Právo občanů volit zákonodárce
d) Právo vlády vydávat rozhodnutí bez souhlasu parlamentu`,back:"a) Rozdělení pravomocí mezi různé orgány státní moci, aby se zabránilo koncentraci moci"},{front:`Jaké jsou hlavní složky státní moci v České republice?
a) Legislativa, exekutiva a judikativa
b) Prezident, senát a poslanecká sněmovna
c) Vláda, politické strany a parlament
d) Soudy, státní zástupci a ombudsman`,back:"a) Legislativa, exekutiva a judikativa"},{front:`Co je to legislativa?
a) Orgány, které vytvářejí a schvalují právní normy, jako je parlament
b) Orgán, který vykonává rozhodnutí soudu
c) Právo jednotlivců vyjadřovat své názory
d) Organizační složky vlády`,back:"a) Orgány, které vytvářejí a schvalují právní normy, jako je parlament"},{front:`Jaká je role prezidenta České republiky podle Ústavy?
a) Zastupuje stát navenek a vykonává některé pravomoci v rámci exekutivy
b) Vydává zákony a rozhoduje o legislativních změnách
c) Řídí soudní procesy a zajišťuje spravedlnost
d) Určuje složení vlády a přijímá rozhodnutí o zahraniční politice`,back:"a) Zastupuje stát navenek a vykonává některé pravomoci v rámci exekutivy"},{front:`Kdo je oprávněn vyhlašovat zákony v České republice?
a) Parlament, konkrétně Poslanecká sněmovna a Senát
b) Prezident a vláda
c) Občané na základě referenda
d) Soudci a státní zástupci`,back:"a) Parlament, konkrétně Poslanecká sněmovna a Senát"},{front:`Co je to referendum podle Ústavy České republiky?
a) Přímo rozhodnutí občanů o určitém státním nebo politickém otázce
b) Písemné rozhodnutí soudů o ústavní otázce
c) Způsob volby prezidenta
d) Forma rozhodování vlády o politických otázkách`,back:"a) Přímo rozhodnutí občanů o určitém státním nebo politickém otázce"},{front:`Kdo zajišťuje ústavní soudnictví v České republice?
a) Ústavní soud České republiky
b) Nejvyšší soud
c) Nejvyšší správní soud
d) Obvodní soudy`,back:"a) Ústavní soud České republiky"},{front:`Co je to Ústavní soud?
a) Orgán, který rozhoduje o souladu právních předpisů s Ústavou
b) Orgán, který určuje meze pravomocí jednotlivých vládních složek
c) Orgán, který je zodpovědný za implementaci zákonů
d) Orgán, který schvaluje volby a výsledky voleb`,back:"a) Orgán, který rozhoduje o souladu právních předpisů s Ústavou"},{front:`Co znamená pojem "neústavnost"?
a) Protiprávní stav, kdy právní předpisy nebo rozhodnutí odporují Ústavě
b) Stav, kdy právní předpisy nejsou v souladu s mezinárodními smlouvami
c) Stav, kdy vláda vydává zákony bez parlamentního schválení
d) Když právní normy nejsou dostatečně chráněny před změnami`,back:"a) Protiprávní stav, kdy právní předpisy nebo rozhodnutí odporují Ústavě"},{front:`Jaké jsou hlavní záruky základních práv a svobod podle Ústavy?
a) Důsledná ochrana práv jednotlivců před nelegálními zásahy státu
b) Zajištění volného pohybu osob v rámci Evropské unie
c) Zaručení práva na práci a platby z daní
d) Zajištění státního financování vzdělávacích institucí`,back:"a) Důsledná ochrana práv jednotlivců před nelegálními zásahy státu"},{front:`Co znamená princip "suverenity lidu"?
a) Vláda je odvozena z vůle a moci občanů, kteří mají právo rozhodovat o svém státě
b) Politická strana určuje, kdo bude vládnout
c) Prezident má pravomoc rozhodovat o všech klíčových otázkách
d) Soudy jsou nezávislé a nemohou být ovlivněny vládou`,back:"a) Vláda je odvozena z vůle a moci občanů, kteří mají právo rozhodovat o svém státě"},{front:`Jaké je postavení vlády podle Ústavy?
a) Je orgánem, který vykonává výkonnou moc a je odpovědný parlamentu
b) Je nezávislá a nemůže být kontrolována parlamentem
c) Je zodpovědná pouze prezidentovi
d) Je volena přímo občany`,back:"a) Je orgánem, který vykonává výkonnou moc a je odpovědný parlamentu"},{front:`Co je to "parlamentní kontrola"?
a) Sledování a ověřování činnosti vlády a dalších orgánů výkonné moci parlamentem
b) Schvalování rozhodnutí prezidenta
c) Oprávnění vlády vydávat předpisy bez schválení parlamentem
d) Právo občanů zasahovat do rozhodování vlády`,back:"a) Sledování a ověřování činnosti vlády a dalších orgánů výkonné moci parlamentem"},{front:`Co znamená pojem "neodvolatelnost soudců"?
a) Soudci jsou chráněni před odvoláním z funkce, pokud neporuší zákony
b) Soudci mohou být odvoláni na žádost vlády
c) Soudci musí být voleni občany
d) Soudci mohou být odvoláni pouze rozhodnutím prezidenta`,back:"a) Soudci jsou chráněni před odvoláním z funkce, pokud neporuší zákony"},{front:`Co je to "politická odpovědnost" vlády podle Ústavy?
a) Vláda je odpovědná parlamentu a může být odvolána v případě nedůvěry
b) Vláda musí každý měsíc podávat zprávy prezidentovi
c) Vláda je odpovědná pouze za plnění rozpočtu
d) Vláda může být odvolána na základě výsledků referenda`,back:"a) Vláda je odpovědná parlamentu a může být odvolána v případě nedůvěry"},{front:`Co znamená pojem "zásada legality"?
a) Veškeré jednání státní moci musí být v souladu s právními předpisy a Ústavou
b) Soudci mají právo rozhodovat na základě své osobní morálky
c) Stát může jednat bez ohledu na právní rámec
d) Legislativa může měnit ústavu podle aktuální politické situace`,back:"a) Veškeré jednání státní moci musí být v souladu s právními předpisy a Ústavou"},{front:`Co znamená "nerozlučitelnost ústavního pořádku"?
a) Ústava je základním a neměnným právním dokumentem, který nelze měnit bez široké shody
b) Ústava může být změněna jednoduchým hlasováním parlamentu
c) Ústava je zodpovědná pouze za občanské právo
d) Ústava je pouze rámcový dokument a může být často měněna`,back:"a) Ústava je základním a neměnným právním dokumentem, který nelze měnit bez široké shody"},{front:`Co znamená pojem "právo na život" podle Ústavy?
a) Základní právo každého jednotlivce na ochranu života a tělesné integrity
b) Právo na ochranu soukromí v domácnosti
c) Právo na svobodu slova
d) Právo na přístup k informacím`,back:"a) Základní právo každého jednotlivce na ochranu života a tělesné integrity"}],stats:{totalCards:50,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:50,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}},{id:"politologie",name:"Politologie",cards:[{front:'Co je to "dělba moci"?',back:"Rozdělení státní moci na zákonodárnou, výkonnou a soudní"},{front:'Co je to "demokracie"?',back:"Forma vlády, kde moc vychází z lidu"},{front:'Co je to "ústava"?',back:"Základní zákon státu, který určuje jeho uspořádání"},{front:`Jaký volební systém se používá v České republice pro volby do Poslanecké sněmovny?
a) Dvoukolový většinový
b) Proporční systém
c) Kombinovaný systém
d) Smíšený většinový`,back:"b) Proporční systém"},{front:`Která z následujících institucí v České republice vykonává zákonodárnou moc?
a) Prezident
b) Poslanecká sněmovna
c) Ústavní soud
d) Vláda`,back:"b) Poslanecká sněmovna"},{front:`Kdo je hlavou státní moci v České republice?
a) Premiér
b) Prezident
c) Předseda Ústavního soudu
d) Předseda vlády`,back:"b) Prezident"},{front:`Co je podle Ústavy ČR hlavním úkolem Poslanecké sněmovny?
a) Vytvářet legislativu
b) Vykonávat soudní moc
c) Zajišťovat ekonomické plánování
d) Udržovat bezpečnostní politiku`,back:"a) Vytvářet legislativu"},{front:`Kdo v České republice jmenuje vládu?
a) Parlament
b) Prezident
c) Senát
d) Soudy`,back:"b) Prezident"},{front:`Jaký je rozdíl mezi ústavou, zákonem a vyhláškou v České republice?
a) Ústava je nejvyšší právní normou, zákon je nižší a vyhláška je podzákonný právní předpis
b) Vyhláška je nad zákonem a ústava je podzákonný právní předpis
c) Zákon je nejvyšší právní normou
d) Neexistují žádné rozdíly`,back:"a) Ústava je nejvyšší právní normou, zákon je nižší a vyhláška je podzákonný právní předpis"},{front:`Kdo může v České republice navrhovat zákony?
a) Pouze prezident
b) Pouze členové vlády
c) Poslanci, vláda a Senát
d) Pouze občané`,back:"c) Poslanci, vláda a Senát"},{front:`Co je to "smíšený volební systém"?
a) Volební systém, který kombinuje většinový a poměrný systém
b) Volební systém, kde jsou všechny hlasy sečítány stejně
c) Volební systém používaný pouze ve volbách do Evropského parlamentu
d) Volební systém, který je používán pouze v senátních volbách`,back:"a) Volební systém, který kombinuje většinový a poměrný systém"},{front:`Jaký typ vlády je v České republice?
a) Prezidentská demokracie
b) Poloprezidentská demokracie
c) Parlamentní demokracie
d) Monarchie`,back:"c) Parlamentní demokracie"},{front:`Který orgán v České republice vykonává výkonnou moc?
a) Prezident
b) Parlament
c) Vláda
d) Ústavní soud`,back:"c) Vláda"},{front:`Jaké jsou základní pravomoci prezidenta České republiky?
a) Vydávat zákony
b) Mít pravomoc v oblasti armády, jmenování soudců a vyhlašování voleb
c) Ovládat vládu
d) Řídit parlament`,back:"b) Mít pravomoc v oblasti armády, jmenování soudců a vyhlašování voleb"},{front:`Kdo schvaluje zákony v České republice?
a) Prezident
b) Senát a Poslanecká sněmovna
c) Vláda
d) Ústavní soud`,back:"b) Senát a Poslanecká sněmovna"},{front:`Jaký typ politického systému je v České republice?
a) Totalitarismus
b) Parlamentní demokracie
c) Monarchie
d) Teokracie`,back:"b) Parlamentní demokracie"},{front:`Co znamená pojem "proporční volební systém"?
a) Každý volič má jednu hlasovací možnost, a to pro jednu politickou stranu
b) Počet mandátů se přiděluje podle procenta hlasů, které strany získají
c) Počet mandátů je určen pouze na základě geografických oblastí
d) Volební systém, kde se hlasy sčítají pouze na území hlavního města`,back:"b) Počet mandátů se přiděluje podle procenta hlasů, které strany získají"},{front:`Kdo má právo odvolat prezidenta v České republice?
a) Vláda
b) Parlament
c) Ústavní soud
d) Občané prostřednictvím referenda`,back:"c) Ústavní soud"},{front:`Která forma vlády je charakteristická pro Českou republiku?
a) Poloprezidentská demokracie
b) Parlamentní demokracie
c) Prezidentská demokracie
d) Diktatura`,back:"b) Parlamentní demokracie"},{front:`Co je to "konsensuální demokracie"?
a) Demokracie, kde vláda funguje na základě souhlasu všech politických stran
b) Demokracie, kde většina strany v parlamentu může rozhodovat bez ohledu na opozici
c) Demokracie, kde vláda rozhoduje bez jakéhokoli souhlasu s opozicí
d) Demokracie s jedinou politickou stranou`,back:"a) Demokracie, kde vláda funguje na základě souhlasu všech politických stran"},{front:`Co je charakteristické pro "prezidentskou demokracii"?
a) Prezident má absolutní moc ve všech oblastech vlády
b) Prezident je hlavou vlády a může vládnout bez parlamentu
c) Prezident je volen přímo a vykonává výkonnou moc
d) Prezident je volen parlamentem`,back:"c) Prezident je volen přímo a vykonává výkonnou moc"},{front:`Co charakterizuje "totalitní režim"?
a) Omezené politické svobody a silná kontrola státem
b) Silný parlament a demokratické volby
c) Minimální vládní zásahy do osobních práv
d) Nepřítomnost voleb a politických stran`,back:"a) Omezené politické svobody a silná kontrola státem"},{front:`Který z těchto politických směrů usiluje o zrušení státu a jeho nahrazení svobodnými komunitami?
a) Anarchismus
b) Liberalismus
c) Socialismus
d) Konservatismus`,back:"a) Anarchismus"},{front:`Co je hlavním cílem komunismu?
a) Vytvoření společnosti bez třídních rozdílů a státního vlastnictví výrobních prostředků
b) Zajištění individuálních práv a svobod
c) Vytvoření silného tržního hospodářství
d) Podpora tradičních hodnot`,back:"a) Vytvoření společnosti bez třídních rozdílů a státního vlastnictví výrobních prostředků"},{front:`Co charakterizuje liberalismus?
a) Podporu rovnosti a zásah státu do ekonomiky
b) Ochranu osobních svobod a minimální zásahy státu do ekonomiky
c) Plnou kontrolu nad hospodářským sektorem
d) Zaměření na ideály národní tradice`,back:"b) Ochranu osobních svobod a minimální zásahy státu do ekonomiky"},{front:`Která ideologie usiluje o rovnost, zajištění minimálních práv a státní podporu pro každého občana?
a) Liberalismus
b) Komunismus
c) Sociální demokracie
d) Fašismus`,back:"c) Sociální demokracie"},{front:`Co charakterizuje fašismus?
a) Národní hrdost, silná autoritářská vláda a potlačování opozice
b) Rovnost mezi občany a podpora osobní svobody
c) Ochranu přírody a udržitelnost
d) Minimální zásahy státu do ekonomiky`,back:"a) Národní hrdost, silná autoritářská vláda a potlačování opozice"},{front:`Co je charakteristické pro teokracii?
a) Vláda, kterou tvoří náboženští vůdci
b) Vláda, kde je náboženské vyznání odděleno od politických rozhodnutí
c) Ovládání státu prostřednictvím vojenské síly
d) Přímá demokracie, kde všichni občané mají právo hlasovat`,back:"a) Vláda, kterou tvoří náboženští vůdci"},{front:`Co znamená "syndikalismus"?
a) Politická ideologie, která usiluje o zajištění moci prostřednictvím odborů
b) Politický systém, který podporuje státní kontrolu ekonomiky
c) Soubor idejí zaměřený na absolutní individuální svobodu
d) Systém vlády založený na náboženských principech`,back:"a) Politická ideologie, která usiluje o zajištění moci prostřednictvím odborů"},{front:`Co je hlavní myšlenkou marxismu?
a) Rovnost pro všechny prostřednictvím státního vlastnictví výrobních prostředků
b) Individuální svoboda a minimální stát
c) Silný národní stát, který má kontrolu nad všemi oblastmi života
d) Přímá demokracie bez jakýchkoliv politických stran`,back:"a) Rovnost pro všechny prostřednictvím státního vlastnictví výrobních prostředků"},{front:`Co je cílem politického směru nacionalismus?
a) Zavést úplnou rovnost mezi všemi národy
b) Posílit národní stát a jeho kulturní identitu
c) Podpořit globalizaci a mezinárodní spolupráci
d) Usilovat o zrušení států a přechod k anarchii`,back:"b) Posílit národní stát a jeho kulturní identitu"},{front:`Co charakterizuje politický směr konzervatismus?
a) Usiluje o revoluci a rychlé změny ve společnosti
b) Podporuje tradiční hodnoty a postupné změny
c) Zaměřuje se na individualismus a minimalizaci státní moci
d) Podporuje plnou kontrolu státu nad ekonomikou`,back:"b) Podporuje tradiční hodnoty a postupné změny"},{front:`Kdo jsou hlavní představitelé anarchismu?
a) Karl Marx a Friedrich Engels
b) Thomas Hobbes a John Locke
c) Pierre-Joseph Proudhon a Mikhail Bakunin
d) John Stuart Mill a Adam Smith`,back:"c) Pierre-Joseph Proudhon a Mikhail Bakunin"},{front:`Jaké je hlavní zaměření pragmatismu v politické teorii?
a) Důraz na ideologické čistoty a teoretické principy
b) Řešení problémů podle jejich praktických důsledků a účinnosti
c) Posilování státní kontroly nad každou oblastí života
d) Snaha o utopické změny v společnosti`,back:"b) Řešení problémů podle jejich praktických důsledků a účinnosti"},{front:`Která země byla příkladem komunistického režimu v 20. století?
a) USA
b) Sovětský svaz
c) Spojené království
d) Švédsko`,back:"b) Sovětský svaz"},{front:`Jaký je hlavní princip socialismus?
a) Volný trh bez státní regulace
b) Státní kontrola nad všemi aspekty ekonomiky
c) Rovnost ve společnosti a redistribuce bohatství
d) Silná moc jednotlivých států bez vlivu na ostatní`,back:"c) Rovnost ve společnosti a redistribuce bohatství"},{front:`Co je základním principem liberalismu?
a) Posílení národních států a jejich nezávislosti
b) Ochrana osobních svobod a práv jednotlivců
c) Úplná státní kontrola nad ekonomikou a výrobními prostředky
d) Zajištění rovnosti skrze zásahy vlády`,back:"b) Ochrana osobních svobod a práv jednotlivců"},{front:`Který politický směr je zaměřen na maximální rovnost mezi jednotlivci, bez třídních rozdílů?
a) Anarchismus
b) Socialismus
c) Konzervatismus
d) Liberalismus`,back:"b) Socialismus"},{front:`Jaké jsou hlavní charakteristiky teokracie?
a) Oddělení náboženství od státu
b) Vláda je vykonávána podle náboženských zásad a vedení náboženských představitelů
c) Moc je v rukou armády
d) Vláda je založena na demokratických volbách`,back:"b) Vláda je vykonávána podle náboženských zásad a vedení náboženských představitelů"},{front:`Jaký politický směr podporuje volný trh, osobní svobody a minimální stát?
a) Marxismus
b) Anarchismus
c) Liberalismus
d) Totalitarismus`,back:"c) Liberalismus"},{front:`Co znamená "diktatura" v politologii?
a) Forma vlády, kde je moci soustředěna do rukou jednoho nebo několika jednotlivců
b) Forma vlády, kde vládne parlament
c) Vláda založená na volbách a pluralitě politických stran
d) Vláda, kde mají občané právo přímo hlasovat o všech rozhodnutích`,back:"a) Forma vlády, kde je moci soustředěna do rukou jednoho nebo několika jednotlivců"},{front:`Který politický směr se zaměřuje na silný centralizovaný stát a nacionalismus?
a) Fašismus
b) Liberalismus
c) Socialismus
d) Anarchismus`,back:"a) Fašismus"},{front:`Jaký politický směr usiluje o zrušení státních institucí a vytvoření společnosti založené na svobodných komunitách?
a) Socialismus
b) Liberalismus
c) Anarchismus
d) Fašismus`,back:"c) Anarchismus"},{front:`Co je to "demokratický centralismus"?
a) Politický systém, ve kterém je centralizována moc v jednom centru, ale zaručena svoboda projevu
b) Systém, ve kterém je řízení strany zcela centralizováno, ale s otevřeným diskurzem v rámci stranických sborů
c) Forma vlády, kde občané přímo volí všechny zákony
d) Demokracie, která zajišťuje centralizovanou kontrolu médií a politiky`,back:"b) Systém, ve kterém je řízení strany zcela centralizováno, ale s otevřeným diskurzem v rámci stranických sborů"},{front:`Kdo byl hlavním představitelem komunistické ideologie?
a) Karl Marx
b) Winston Churchill
c) Friedrich Hayek
d) John Stuart Mill`,back:"a) Karl Marx"},{front:`Jaký je hlavní princip fašismu?
a) Rovnost a zajištění práv menšin
b) Silná národní identita a autoritářská moc
c) Ochrana osobních svobod a práv
d) Odmítnutí všech náboženství a jejich vlivu na politiku`,back:"b) Silná národní identita a autoritářská moc"},{front:`Který směr podporuje individuální práva a minimální zásahy státu do osobního života?
a) Socialismus
b) Fašismus
c) Liberalismus
d) Totalitarismus`,back:"c) Liberalismus"},{front:`Co znamená pojem "proporcionalita" ve volebních systémech?
a) Počet mandátů je udělován podle velikosti volebních obvodů
b) Počet mandátů je rozdělován mezi politické strany na základě procenta získaných hlasů
c) Počet mandátů je rozdělován mezi strany rovnoměrně
d) Počet mandátů se přiděluje podle výše volební účasti`,back:"b) Počet mandátů je rozdělován mezi politické strany na základě procenta získaných hlasů"},{front:`Co charakterizuje politickou ideologii libertarianismu?
a) Zajištění rovnosti prostřednictvím státní intervence
b) Podpora minimálního státu a maximálních osobních svobod
c) Zajištění politické stability prostřednictvím centralizované moci
d) Podpora kolektivismu a společenské rovnosti`,back:"b) Podpora minimálního státu a maximálních osobních svobod"},{front:`Co je hlavní myšlenkou ekologismu?
a) Zajištění rovnosti prostřednictvím zásahů vlády do ekonomiky
b) Ochrana přírody a udržitelnost životního prostředí
c) Silný stát, který reguluje trhy a pracovní vztahy
d) Zvýšení spotřeby pro zajištění hospodářského růstu`,back:"b) Ochrana přírody a udržitelnost životního prostředí"},{front:`Která ideologie usiluje o vytvoření společnosti bez jakýchkoli třídních rozdílů a státního vlastnictví výrobních prostředků?
a) Anarchismus
b) Konservatismus
c) Komunismus
d) Liberalismus`,back:"c) Komunismus"},{front:`Který směr prosazuje ideál společenské rovnosti prostřednictvím demokratických prostředků?
a) Fašismus
b) Socialismus
c) Liberalismus
d) Anarchismus`,back:"b) Socialismus"},{front:`Který politický směr je spojen s ideologií "silného státu" a kontrolou občanů?
a) Anarchismus
b) Totalitarismus
c) Liberalismus
d) Socialismus`,back:"b) Totalitarismus"},{front:`Jaký je hlavní rozdíl mezi demokratickým a autokratickým režimem?
a) Demokracie je založena na vládě jednoho jednotlivce, zatímco autokracie zajišťuje svobodu projevu.
b) Demokracie vyžaduje pravidelné volby a pluralismus, autokracie má centralizovanou moc v rukou jediné osoby nebo malé skupiny.
c) Demokracie zajišťuje absolutní kontrolu nad ekonomikou, autokracie podporuje tržní ekonomiku.
d) Neexistuje žádný rozdíl mezi demokratickým a autokratickým režimem.`,back:"b) Demokracie vyžaduje pravidelné volby a pluralismus, autokracie má centralizovanou moc v rukou jediné osoby nebo malé skupiny."},{front:`Kdo je považován za hlavního představitele klasického liberalismu?
a) Friedrich Engels
b) John Locke
c) Thomas Hobbes
d) Karl Marx`,back:"b) John Locke"},{front:`Který z následujících režimů je příkladem prezidentské demokracie?
a) Spojené státy americké
b) Francie
c) Švýcarsko
d) Velká Británie`,back:"a) Spojené státy americké"},{front:`Co je charakteristické pro politickou ideologii neokonzervatismu?
a) Podpora minimálního státu a maximálních osobních svobod.
b) Podpora silné role státu v oblasti sociálních a ekonomických záležitostí.
c) Důraz na vojenskou intervenci a ochranu tradičních hodnot.
d) Usilování o rovnost mezi různými skupinami ve společnosti.`,back:"c) Důraz na vojenskou intervenci a ochranu tradičních hodnot."},{front:`Který politický směr odmítá všechny formy vlády a usiluje o zrušení státu?
a) Libertarianismus
b) Anarchismus
c) Socialismus
d) Liberalismus`,back:"b) Anarchismus"},{front:`Jaké je hlavní zaměření politické ideologie feminizmu?
a) Podpora rovnosti mezi pohlavími a práv žen.
b) Zajištění rovnosti mezi národy a rasami.
c) Posílení mocenské struktury státu a jeho autority.
d) Zajištění maximální svobody jednotlivce bez zásahů státu.`,back:"a) Podpora rovnosti mezi pohlavími a práv žen."},{front:`Co je hlavním zaměřením politické ideologie populismu?
a) Ochrana elit a zavedení přísných pravidel pro politické strany.
b) Posílení role politiky ve vědeckém výzkumu a inovacích.
c) Obhajoba zájmů "obyčejných lidí" proti elitám a establishmentu.
d) Podpora vlády v rukou malé skupiny odborníků.`,back:'c) Obhajoba zájmů "obyčejných lidí" proti elitám a establishmentu.'},{front:`Co znamená termín "demokratická centralizace"?
a) Demokracie bez jakékoliv centralizované moci.
b) Centralizace moci v jednom politickém centru, přičemž se zachovává kontrola skrze demokratické volby.
c) Společenský systém, který neumožňuje žádnou formu veřejného hlasování.
d) Systém, kde jsou všechny politické strany stejného významu a moci.`,back:"b) Centralizace moci v jednom politickém centru, přičemž se zachovává kontrola skrze demokratické volby."},{front:`Co je charakteristické pro politickou ideologii liberalismu?
a) Důraz na zajištění rovnosti mezi jednotlivci a sociální spravedlnost.
b) Podpora osobních svobod a minimálního zásahu státu do života jednotlivců.
c) Zavedení přísné státní kontroly nad ekonomikou.
d) Silná podpora centralizované moci ve státní sféře.`,back:"b) Podpora osobních svobod a minimálního zásahu státu do života jednotlivců."},{front:`Který z následujících politických směrů usiluje o úplnou rovnost a bezstátní společnost?
a) Komunismus
b) Socialismus
c) Anarchismus
d) Konzervatismus`,back:"c) Anarchismus"},{front:`Co je hlavní ideou teokracie?
a) Vláda je určena náboženskými autoritami a náboženskými zákony.
b) Vláda je vykonávána demokracií bez jakékoliv náboženské kontroly.
c) Vláda se zaměřuje na plnou rovnost mezi všemi občany bez ohledu na náboženské přesvědčení.
d) Vláda je založena na vojenské autoritě a silném státním aparátu.`,back:"a) Vláda je určena náboženskými autoritami a náboženskými zákony."},{front:`Která země je příkladem konstituční monarchie?
a) Spojené státy americké
b) Velká Británie
c) Kuba
d) Čína`,back:"b) Velká Británie"},{front:`Co je typickým znakem fašismu?
a) Podpora demokratického pluralismu a ochrany osobních svobod.
b) Silná centralizovaná moc, agresivní nacionalismus a autoritářské tendence.
c) Zajištění rovnosti prostřednictvím redistribuce bohatství.
d) Ochrana pracovních práv a zájmů menšin.`,back:"b) Silná centralizovaná moc, agresivní nacionalismus a autoritářské tendence."},{front:`Kdo z následujících je příkladem politického smýšlení marxismu?
a) Adam Smith
b) Karl Marx
c) John Locke
d) John Stuart Mill`,back:"b) Karl Marx"},{front:`Který politický směr se zaměřuje na úplnou rovnost a kolektivistické uspořádání společnosti?
a) Kapitalismus
b) Anarchismus
c) Komunismus
d) Liberalismus`,back:"c) Komunismus"},{front:`Který z těchto politických směrů usiluje o minimalizaci vládní moci a maximální svobodu jednotlivce?
a) Anarchismus
b) Komunismus
c) Konzervatismus
d) Liberalismus`,back:"d) Liberalismus"},{front:`Kdo je považován za zakladatele moderního liberalismu?
a) Friedrich Engels
b) Thomas Hobbes
c) John Locke
d) Karl Marx`,back:"c) John Locke"}],stats:{totalCards:50,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:50,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}}]},{id:"historie-ekonomie",name:"Moderní historie a ekonomie",subcategories:[{id:"ekonomie",name:"Ekonomie",cards:[{front:`Co zdůrazňuje klasická ekonomie?
a) Význam vlády v regulaci trhů
b) Minimalizaci zásahu státu do ekonomiky
c) Důraz na centralizovanou ekonomiku
d) Přímé ovládání ekonomiky vládou`,back:"b) Minimalizaci zásahu státu do ekonomiky"},{front:`Kdo je hlavním představitelem monetarismu?
a) John Maynard Keynes
b) Friedrich Hayek
c) Milton Friedman
d) Karl Marx`,back:"c) Milton Friedman"},{front:`Co je klíčovým prvkem keynesiánství?
a) Minimalizace vládních výdajů
b) Vládní zásahy na podporu poptávky v recesi
c) Zvýšení nabídky na trhu
d) Neomezený trh bez regulace`,back:"b) Vládní zásahy na podporu poptávky v recesi"},{front:`Co tvrdí rakouská škola ekonomie?
a) Ekonomika je řízena centrálními plány
b) Trhy se vždy automaticky stabilizují bez vládní pomoci
c) Ekonomika je řízena vysokou inflací
d) Významný je zásah státu do ekonomiky`,back:"b) Trhy se vždy automaticky stabilizují bez vládní pomoci"},{front:`Co zdůrazňuje neoliberalismus?
a) Zvýšení daní pro bohaté
b) Stát by měl výrazně zasahovat do ekonomiky
c) Minimalizace role státu v ekonomice a volný trh
d) Redistribuci bohatství prostřednictvím daní`,back:"c) Minimalizace role státu v ekonomice a volný trh"},{front:`Jaké je hlavní téma marxismu?
a) Ekonomické zisky z efektivního využívání trhů
b) Třídní boj mezi buržoazií a proletariátem
c) Vládní zásahy k zajištění rovnosti
d) Růst prostřednictvím inovací`,back:"b) Třídní boj mezi buržoazií a proletariátem"},{front:`Co je hlavním zaměřením postkeynesiánství?
a) Omezování vládních výdajů
b) Stabilizace trhů bez vládních zásahů
c) Racionalizace ekonomiky za pomoci tržního řízení
d) Očekávání a nejistota jako klíčové faktory pro ekonomiku`,back:"d) Očekávání a nejistota jako klíčové faktory pro ekonomiku"},{front:`Co se zaměřuje na psychologické faktory ovlivňující ekonomická rozhodnutí?
a) Behavioralní ekonomie
b) Keynesiánství
c) Monetarismus
d) Rakouská škola`,back:"a) Behavioralní ekonomie"},{front:`Co je kladeno za základ ekonomie nabídky?
a) Zvýšení daní pro firmy
b) Minimalizace zásahů státu a stimulace podnikání
c) Zajistit rovnost příjmů mezi bohatými a chudými
d) Zvýšení vládní kontroly nad trhem`,back:"b) Minimalizace zásahů státu a stimulace podnikání"},{front:`Co se zaměřuje na analýzu poptávky v ekonomice?
a) Ekonomie poptávky
b) Neoliberalismus
c) Fiskální politika
d) Behaviorální ekonomie`,back:"a) Ekonomie poptávky"},{front:`Jaký je hlavní zaměřením institucionální ekonomie?
a) Význam institucí jako právní systémy nebo politické struktury
b) Omezení vlády na regulaci ekonomiky
c) Minimalizace tržních výkyvů
d) Rozvoj ekonomiky prostřednictvím rozpočtových deficitů`,back:"a) Význam institucí jako právní systémy nebo politické struktury"},{front:`Co tvrdí evoluční ekonomie?
a) Ekonomické systémy se neustále vyvíjejí a mění v čase
b) Vždy je potřeba stabilizace ekonomiky prostřednictvím vlády
c) Ekonomika by měla být plánována na centrální úrovni
d) Ekonomické výsledky jsou zcela určeny tržními silami`,back:"a) Ekonomické systémy se neustále vyvíjejí a mění v čase"},{front:`Co je hlavním zájmem ekonomiky blahobytu?
a) Zajištění efektivity ekonomiky na úkor spravedlnosti
b) Optimální alokace zdrojů mezi jednotlivci
c) Rovnováha mezi efektivitou a spravedlivým rozdělením bohatství
d) Snížení daní pro bohaté vrstvy`,back:"c) Rovnováha mezi efektivitou a spravedlivým rozdělením bohatství"},{front:`Co je základem korporativismu?
a) Vláda by měla řídit všechny ekonomické aktivity
b) Ekonomické a sociální zájmy by měly být zastupovány organizacemi
c) Ekonomika by měla být zcela tržní a nezávislá na vládních zásazích
d) Stát by měl plně privatizovat všechny sektorové aktivity`,back:"b) Ekonomické a sociální zájmy by měly být zastupovány organizacemi"},{front:`Co charakterizuje teorii racionální volby?
a) Ekonomická rozhodnutí jsou založena na emočních reakcích jednotlivců
b) Jednotlivci činí rozhodnutí na základě racionální analýzy a maximalizace užitku
c) Stát určuje ekonomická rozhodnutí pro jednotlivce
d) Ekonomické rozhodnutí jsou založena na náhodných faktorech`,back:"b) Jednotlivci činí rozhodnutí na základě racionální analýzy a maximalizace užitku"},{front:`Co je cílem feministické ekonomie?
a) Podpora tržní ekonomiky pro všechny
b) Analyzovat, jak ekonomické systémy ovlivňují muže a ženy různě
c) Zajištění rovnosti mezi třídami
d) Snížení významu institucí v ekonomice`,back:"b) Analyzovat, jak ekonomické systémy ovlivňují muže a ženy různě"},{front:`Co tvrdí přístup lidského kapitálu?
a) Lidská práce je nezbytná pro zajištění rovnosti v ekonomice
b) Investice do vzdělání a školení zvyšují produktivitu a růst
c) Ekonomika by měla být regulována vládními zásahy
d) Trhy se stabilizují bez jakéhokoli zásahu`,back:"b) Investice do vzdělání a školení zvyšují produktivitu a růst"},{front:`Co zkoumá ekonomika nelegálních trhů?
a) Vliv vládních regulací na ekonomiku
b) Studuje trhy, které jsou nelegální, jako obchod s drogami
c) Jak fungují trhy v ideálním hospodářství
d) Způsoby, jak zvýšit výrobu zboží a služeb`,back:"b) Studuje trhy, které jsou nelegální, jako obchod s drogami"},{front:`Co je cílem kreativní ekonomiky?
a) Snížení státní regulace v ekonomice
b) Podpora růstu prostřednictvím technologických inovací
c) Zvýšení kreativity a kulturního obsahu v ekonomice
d) Podpora rozvoje těžkého průmyslu`,back:"c) Zvýšení kreativity a kulturního obsahu v ekonomice"},{front:`Co popisuje kruh chudoby?
a) Cyklus, kdy chudoba vede k nižšímu vzdělání a nižším příjmům
b) Růst ekonomiky díky inovacím a investicím
c) Stabilní rozvoj ekonomiky, který nezahrnuje chudé regiony
d) Snižování chudoby prostřednictvím rovných příležitostí`,back:"a) Cyklus, kdy chudoba vede k nižšímu vzdělání a nižším příjmům"},{front:`Co podporuje ekonomika poptávky?
a) Snížení daní pro firmy
b) Zvýšení vládní regulace trhů
c) Zvyšování poptávky v ekonomice prostřednictvím vládních stimulů
d) Zaměření na nabídku a výrobu zboží`,back:"c) Zvyšování poptávky v ekonomice prostřednictvím vládních stimulů"},{front:`Co doporučuje rakouská škola ekonomie?
a) Regulace trhů a centrální řízení ekonomiky
b) Trhy by měly být řízeny podle vládních plánů
c) Volné trhy s minimálním vládním zásahem
d) Zajištění rovnosti ve všech oblastech ekonomiky`,back:"c) Volné trhy s minimálním vládním zásahem"},{front:`Co je hlavním cílem monetární politiky?
a) Zvýšení vládních výdajů
b) Snížení úrokových sazeb pro stimulaci ekonomiky
c) Kontrola inflace prostřednictvím řízení peněžní zásoby
d) Regulace ceny zboží a služeb na trhu`,back:"c) Kontrola inflace prostřednictvím řízení peněžní zásoby"},{front:`Co znamená termín „poptávka" v mikroekonomii?
a) Celkový objem vyrobených výrobků
b) Schopnost a ochota spotřebitelů nakupovat zboží a služby za určitou cenu
c) Celkový objem peněz v oběhu
d) Množství zboží, které je k dispozici na trhu`,back:"b) Schopnost a ochota spotřebitelů nakupovat zboží a služby za určitou cenu"},{front:`Co je příkladem pozitivní externality?
a) Znečištění ovzduší automobilovými emisemi
b) Vzdělání, které zvyšuje produktivitu pracovních sil
c) Ztráta pracovních míst v důsledku automatizace
d) Zvýšení ceny ropy na světových trzích`,back:"b) Vzdělání, které zvyšuje produktivitu pracovních sil"},{front:`Co zkoumá mikroekonomie?
a) Vládní regulace trhů
b) Chování jednotlivců a firem na trzích
c) Makroekonomické faktory jako inflace a nezaměstnanost
d) Role státu v rozdělování bohatství`,back:"b) Chování jednotlivců a firem na trzích"},{front:`Co je to tržní selhání?
a) Případ, kdy trhy automaticky vyrovnávají nabídku a poptávku
b) Situace, kdy trhy neprodukují efektivní nebo spravedlivé výsledky
c) Situace, kdy vláda plně reguluje trhy
d) Proces, kdy ceny na trzích stoupají, ale ekonomika zůstává stabilní`,back:"b) Situace, kdy trhy neprodukují efektivní nebo spravedlivé výsledky"},{front:`Co je definováno jako inflace?
a) Pokles cen zboží a služeb
b) Stabilní růst ekonomiky bez výkyvů
c) Růst cen zboží a služeb v ekonomice
d) Stabilita měnového kurzu`,back:"c) Růst cen zboží a služeb v ekonomice"},{front:`Co znamená termín „neelastická poptávka"?
a) Když poptávka na změnu ceny reaguje silně
b) Když poptávka na změnu ceny reaguje minimálně
c) Když nabídka a poptávka jsou v rovnováze
d) Když cena zboží není ovlivněna poptávkou`,back:"b) Když poptávka na změnu ceny reaguje minimálně"},{front:`Co je charakteristické pro monopol?
a) Trh je tvořen velkým počtem malých firem
b) Jedna firma dominuje na trhu a kontroluje cenu
c) Trh je zcela volný a neexistují žádné regulace
d) Poptávka je zcela nezávislá na cenách`,back:"b) Jedna firma dominuje na trhu a kontroluje cenu"},{front:`Co je to „marginalní užitek"?
a) Úplný užitek z celkového množství spotřebovaného zboží
b) Užitek získaný z poslední jednotky spotřebovaného zboží
c) Celkový užitek všech spotřebovaných statků
d) Množství zboží, které je poptáváno na určité cenové úrovni`,back:"b) Užitek získaný z poslední jednotky spotřebovaného zboží"},{front:`Co je základním cílem fiskální politiky?
a) Zvýšení úrokových sazeb
b) Snížení vládních výdajů
c) Stabilizace ekonomiky prostřednictvím vládních výdajů a daní
d) Kontrola peněžní zásoby v ekonomice`,back:"c) Stabilizace ekonomiky prostřednictvím vládních výdajů a daní"},{front:`Co je to „cena elasticity" v ekonomii?
a) Míra citlivosti poptávky na změnu ceny
b) Míra stability ceny na trhu
c) Rychlost růstu ceny zboží
d) Míra nabídky na trhu v reakci na změnu ceny`,back:"a) Míra citlivosti poptávky na změnu ceny"},{front:`Co se stane, pokud se zvýší nabídka na trhu?
a) Ceny na trhu obvykle vzrostou
b) Poptávka klesne, protože cena stoupne
c) Ceny na trhu obvykle klesnou, pokud poptávka zůstane stejná
d) Poptávka se vůbec nezmění`,back:"c) Ceny na trhu obvykle klesnou, pokud poptávka zůstane stejná"},{front:`Co je to „případný zisk" v mikroekonomii?
a) Zisk, který firma získá během krátkodobé recese
b) Zisk, který firma získá pouze tehdy, když pokryje všechny své náklady
c) Zisk, který firma dosahuje bez ohledu na konkurenci
d) Zisk, který může firma získat pouze po pokrytí fixních nákladů`,back:"b) Zisk, který firma získá pouze tehdy, když pokryje všechny své náklady"},{front:`Co je to „tržní rovnováha"?
a) Situace, kdy nabídka je vyšší než poptávka
b) Situace, kdy poptávka je vyšší než nabídka
c) Situace, kdy nabídka a poptávka jsou vyváženy a cena se stabilizuje
d) Situace, kdy cena na trhu neustále roste`,back:"c) Situace, kdy nabídka a poptávka jsou vyváženy a cena se stabilizuje"},{front:`Co je klíčovým prvkem teorií o řízení ekonomiky podle rakouské školy?
a) Důraz na centrální plánování
b) Volný trh, který se stabilizuje sám
c) Zásah vlády pro zajištění rovnosti
d) Důraz na zvyšování výdajů státního rozpočtu`,back:"b) Volný trh, který se stabilizuje sám"},{front:`Co je hlavní myšlenkou teorie lidského kapitálu?
a) Lidé jsou jen pracovním nástrojem pro výrobu zboží
b) Lidé by neměli investovat do vlastního vzdělání
c) Investice do vzdělání a školení zvyšují produktivitu a ekonomický růst
d) Vzdělání je irrelevantní pro ekonomický růst`,back:"c) Investice do vzdělání a školení zvyšují produktivitu a ekonomický růst"},{front:`Co je to „neviditelná ruka" v ekonomii?
a) Přímý zásah státu do tržního mechanismu
b) Metafora pro nevysvětlitelné tržní fluktuace
c) Tržní mechanismus, který vede k rovnováze prostřednictvím individuálních rozhodnutí
d) Zákon, který reguluje ceny na trhu`,back:"c) Tržní mechanismus, který vede k rovnováze prostřednictvím individuálních rozhodnutí"},{front:`Co znamená termín „zákon nabídky"?
a) Snižování nabídky způsobí růst cen
b) Zvýšení nabídky vede k růstu cen
c) Zvýšení nabídky vede ke snížení cen
d) Cena nezávisí na nabídce`,back:"c) Zvýšení nabídky vede ke snížení cen"},{front:`Co je „cena elasticity" v nabídce?
a) Míra, jak se mění nabídka zboží v reakci na změnu ceny
b) Míra, jak se mění poptávka na trhu
c) Snížení nabídky při poklesu ceny
d) Jaké množství zboží je dostupné za stabilní cenu`,back:"a) Míra, jak se mění nabídka zboží v reakci na změnu ceny"},{front:`Co je hlavní výhodou konkurence na trhu?
a) Zaručuje stabilní ceny pro výrobce
b) Zvyšuje efektivitu a inovace, což vede ke zlepšení služeb a cen
c) Umožňuje monopolům kontrolovat trh
d) Snižuje výběr pro spotřebitele`,back:"b) Zvyšuje efektivitu a inovace, což vede ke zlepšení služeb a cen"},{front:`Co znamená pojem „alternativní náklady"?
a) Náklady spojené s výrobou produktu pro konkurenci
b) Hodnota nejlepší alternativy, kterou obětujeme při rozhodování
c) Skrytá cena, která není vyjádřena v penězích
d) Náklady na zajištění úvěru`,back:"b) Hodnota nejlepší alternativy, kterou obětujeme při rozhodování"},{front:`Co je charakteristické pro oligopol?
a) Trh je dominován mnoha malými firmami
b) Existuje pouze jeden dominantní producent
c) Trh je tvořen malým počtem velkých firem, které mají značnou tržní sílu
d) Ceny na trhu jsou zcela nezávislé na nabídce a poptávce`,back:"c) Trh je tvořen malým počtem velkých firem, které mají značnou tržní sílu"},{front:`Co je to „křivka nabídky"?
a) Graf zobrazující vztah mezi cenou a množstvím zboží, které jsou spotřebitelé ochotni koupit
b) Graf zobrazující vztah mezi cenou a množstvím zboží, které jsou výrobci ochotni nabídnout
c) Graf zobrazující růst ekonomiky
d) Graf zobrazující výdaje vlády`,back:"b) Graf zobrazující vztah mezi cenou a množstvím zboží, které jsou výrobci ochotni nabídnout"},{front:`Co je „opportunity cost"?
a) Příležitost, kterou ztratíte při investování
b) Cena, kterou zaplatíte za špatné rozhodnutí
c) Alternativní hodnota příležitosti, kterou musíte obětovat
d) Výnosy z investice do nemovitosti`,back:"c) Alternativní hodnota příležitosti, kterou musíte obětovat"}],stats:{totalCards:50,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:50,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}},{id:"moderni-historie",name:"Moderní historie",cards:[{front:`Kdo byl britským premiérem během první světové války?
a) Neville Chamberlain
b) Winston Churchill
c) David Lloyd George
d) Clement Attlee`,back:"c) David Lloyd George"},{front:`Co znamenal Versailský mír?
a) Ukončil druhou světovou válku
b) Stanovil podmínky míru mezi Německem a jeho spojenci
c) Stanovil podmínky míru mezi Německem a Spojenci po první světové válce
d) Uzavřel pakt mezi USA a Sovětským svazem`,back:"c) Stanovil podmínky míru mezi Německem a Spojenci po první světové válce"},{front:`Kdo byl hlavním představitelem bolševiků během ruské revoluce v roce 1917?
a) Lev Trockij
b) Josif Stalin
c) Vladimir Lenin
d) Nikita Chruščov`,back:"c) Vladimir Lenin"},{front:`Kdy vypukla první světová válka?
a) 1912
b) 1914
c) 1916
d) 1918`,back:"b) 1914"},{front:`Co byla Sdružení národů (SN)?
a) Mezinárodní organizace pro rozvoj ekonomických vztahů
b) Politická organizace pro udržení míru a bezpečnosti po první světové válce
c) Organizace pro pomoc uprchlíkům po druhé světové válce
d) Mezinárodní banka pro obnovu a rozvoj`,back:"b) Politická organizace pro udržení míru a bezpečnosti po první světové válce"},{front:`Kdo byl hlavním autorem "Mein Kampf"?
a) Hermann Göring
b) Joseph Goebbels
c) Adolf Hitler
d) Rudolf Hess`,back:"c) Adolf Hitler"},{front:`Kdy byla podepsána Mnichovská dohoda?
a) 1935
b) 1938
c) 1940
d) 1945`,back:"b) 1938"},{front:`Co způsobilo vypuknutí první světové války?
a) Napoleonovy vojenské výpravy
b) Rozdělení Evropy mezi velmoci
c) Atentát na Františka Ferdinanda d'Este
d) Vznik Sdružení národů`,back:"c) Atentát na Františka Ferdinanda d'Este"},{front:`Kdo byl předsedou vlády během velké hospodářské krize ve Spojených státech?
a) Harry S. Truman
b) Franklin D. Roosevelt
c) Herbert Hoover
d) Lyndon B. Johnson`,back:"b) Franklin D. Roosevelt"},{front:`Co znamená termín "New Deal"?
a) Nový hospodářský pakt mezi USA a Sovětským svazem
b) Sada ekonomických a sociálních reforem během velké hospodářské krize v USA
c) Plán pro obnovu Evropy po druhé světové válce
d) Politika západních států vůči Číně v 30. letech`,back:"b) Sada ekonomických a sociálních reforem během velké hospodářské krize v USA"},{front:`Kdy byla podepsána Locarnská dohoda?
a) 1919
b) 1925
c) 1932
d) 1939`,back:"b) 1925"},{front:`Co znamenal Pakt Molotov-Ribbentrop?
a) Spojenectví mezi Německem a Itálií
b) Pakt mezi Německem a Sovětským svazem o neútočení a o rozdělení Polska
c) Dohoda o rozdělení Rakouska mezi Německo a Sovětský svaz
d) Politická dohoda o podpoře Velké Británie`,back:"b) Pakt mezi Německem a Sovětským svazem o neútočení a o rozdělení Polska"},{front:`Kdo byl "muž v černém" v první světové válce?
a) Ludendorff
b) Winston Churchill
c) Erwin Rommel
d) Paul von Hindenburg`,back:"d) Paul von Hindenburg"},{front:`Co byla "Velká červená" revoluce?
a) Občanská válka v Rusku
b) Revoluce v Mexiku
c) Komunistická revoluce v Číně
d) Německá revoluce v roce 1918`,back:"a) Občanská válka v Rusku"},{front:`Kdo byl francouzským prezidentem během první světové války?
a) Georges Clemenceau
b) Charles de Gaulle
c) René Coty
d) François Hollande`,back:"a) Georges Clemenceau"},{front:`Kdy byla podepsána Versailleská mírová smlouva?
a) 1919
b) 1923
c) 1930
d) 1945`,back:"a) 1919"},{front:`Která země se připojila k Trojitému paktu v roce 1940?
a) Československo
b) Polsko
c) Maďarsko
d) Rakousko`,back:"c) Maďarsko"},{front:`Co byla hlavní příčina vypuknutí druhé světové války?
a) Nacistická expanze a invaze do Polska
b) Atentát na Františka Ferdinanda
c) Pád Berlínské zdi
d) Krize v Africe`,back:"a) Nacistická expanze a invaze do Polska"},{front:`Co bylo Mnichovskou dohodou?
a) Politické uspořádání po první světové válce
b) Dohoda o rozdělění Československa mezi Německo, Itálii a Francii
c) Dohoda, která měla zachovat mír v Evropě, ale umožnila Německu anektovat Sudety
d) Smlouva, která vyústila ve vznik Varšavské smlouvy`,back:"c) Dohoda, která měla zachovat mír v Evropě, ale umožnila Německu anektovat Sudety"},{front:`Kdy začala druhá světová válka?
a) 1938
b) 1939
c) 1940
d) 1941`,back:"b) 1939"},{front:`Která organizace vznikla po první světové válce s cílem udržet mír v Evropě?
a) OSN
b) NATO
c) Sdružení národů
d) WTO`,back:"c) Sdružení národů"},{front:`Kdy se konal první "Zimní konflikt" mezi Sovětským svazem a Finskem?
a) 1939-1940
b) 1941-1945
c) 1929-1931
d) 1914`,back:"a) 1939-1940"},{front:`Kdo byl autorem knihy "Mein Kampf"?
a) Heinrich Himmler
b) Adolf Hitler
c) Joseph Goebbels
d) Albert Speer`,back:"b) Adolf Hitler"},{front:`Které zemi patřil Mandát nad Palestinou?
a) Velká Británie
b) Francie
c) Německo
d) Spojené státy`,back:"a) Velká Británie"},{front:`Co bylo výsledkem Versailleské smlouvy?
a) Potrestání Německa a rozdělení jeho území
b) Vytvoření Evropské unie
c) Spojení Německa a Rakouska
d) Vznik Německé říše`,back:"a) Potrestání Německa a rozdělení jeho území"},{front:`Co znamená "Münchenský diktát"?
a) Diktát v roce 1939, který zavedl Nacistickou vládu
b) Pakt, který povolil Hitlerovi anektovat část Československa
c) Dohoda, která vedla k ukončení první světové války
d) Příkaz, který vyhlásil druhou světovou válku`,back:"b) Pakt, který povolil Hitlerovi anektovat část Československa"},{front:`Co znamená pojem "Velká hospodářská krize"?
a) Doba rychlého hospodářského růstu ve 30. letech
b) Krize způsobená kolapsem akciového trhu v roce 1929
c) Krize spojená s výbuchem evropské ekonomiky
d) Období, kdy byla světová ekonomika stabilní`,back:"b) Krize způsobená kolapsem akciového trhu v roce 1929"},{front:`Kdo byl hlavním představitelem "Nového Údělu"?
a) Herbert Hoover
b) Franklin D. Roosevelt
c) Winston Churchill
d) George Marshall`,back:"b) Franklin D. Roosevelt"},{front:`Kdy došlo k vypuknutí Korejské války?
a) 1945
b) 1950
c) 1955
d) 1960`,back:"b) 1950"},{front:`Co bylo výsledkem Korejské války?
a) Korejský poloostrov byl sjednocen pod komunistickým režimem
b) Korejský poloostrov byl sjednocen pod kapitalistickým režimem
c) Korejský poloostrov zůstal rozdělen na Severní a Jižní Koreu
d) Korea byla rozdělená mezi USA a Sovětský svaz`,back:"c) Korejský poloostrov zůstal rozdělen na Severní a Jižní Koreu"},{front:`Kdy byla postavena Berlínská zeď?
a) 1949
b) 1955
c) 1961
d) 1975`,back:"c) 1961"},{front:`Co symbolizovala Berlínská zeď?
a) Rozdělení světa mezi kapitalismus a socialismus
b) Sjednocení Německa
c) Vznik Evropské unie
d) Mír mezi východním a západním blokem`,back:"a) Rozdělení světa mezi kapitalismus a socialismus"},{front:`Kdy byla podepsána Helsinská dohoda?
a) 1972
b) 1975
c) 1980
d) 1985`,back:"b) 1975"},{front:`Co znamenala Helsinská dohoda?
a) Mírovou dohodu mezi USA a Sovětským svazem
b) Dohodu o evropské bezpečnosti a spolupráci
c) Dohodu o rozdělení Evropy mezi východní a západní blok
d) Dohodu o vstupu Británie do Evropské unie`,back:"b) Dohodu o evropské bezpečnosti a spolupráci"},{front:`Kdo byl lídrem Sovětského svazu během Kubánské raketové krize?
a) Leonid Brežněv
b) Nikita Chruščov
c) Josef Stalin
d) Mikhail Gorbačov`,back:"b) Nikita Chruščov"},{front:`Kdy došlo k kubánské raketové krizi?
a) 1960
b) 1962
c) 1965
d) 1970`,back:"b) 1962"},{front:`Co bylo příčinou kubánské raketové krize?
a) Sovětský svaz umístil jaderné rakety na Kubě
b) USA napadly Kubu
c) Kuba uzavřela pakt s NATO
d) Sovětský svaz anektoval Kubu`,back:"a) Sovětský svaz umístil jaderné rakety na Kubě"},{front:`Kdy se k vietnamské válce připojilo USA?
a) 1950
b) 1960
c) 1965
d) 1970`,back:"c) 1965"},{front:`Co bylo výsledkem vietnamské války?
a) Vietnam zůstal rozdělený mezi Severní a Jižní Vietnam
b) Jižní Vietnam padl a Vietnam se sjednotil pod komunistickou vládou
c) Jižní Vietnam se stal americkým protektorátem
d) Vietnam se připojil k Sovětskému svazu`,back:"b) Jižní Vietnam padl a Vietnam se sjednotil pod komunistickou vládou"},{front:`Kdy skončila vietnamská válka?
a) 1973
b) 1975
c) 1980
d) 1985`,back:"b) 1975"},{front:`Co znamenal pád Berlínské zdi v roce 1989?
a) Konec studené války a začátek sjednocení Německa
b) Začátek studené války
c) Založení Evropské unie
d) Vytvoření Varšavské smlouvy`,back:"a) Konec studené války a začátek sjednocení Německa"},{front:`Co bylo cílem Marshallova plánu?
a) Podpora rozvoje socialistických států
b) Obnova ekonomiky po druhé světové válce v západní Evropě
c) Vytvoření nové vojenské aliance
d) Rozdělení Německa`,back:"b) Obnova ekonomiky po druhé světové válce v západní Evropě"},{front:`Kdy byla podepsána Pařížská dohoda o Vietnamu?
a) 1965
b) 1970
c) 1973
d) 1975`,back:"c) 1973"},{front:`Kdo byl prvním prezidentem Francie po druhé světové válce?
a) Charles de Gaulle
b) François Mitterrand
c) Jacques Chirac
d) Georges Pompidou`,back:"a) Charles de Gaulle"},{front:`Kdy začala studená válka?
a) 1945
b) 1947
c) 1950
d) 1960`,back:"b) 1947"},{front:`Kdy byl založen NATO?
a) 1945
b) 1949
c) 1955
d) 1960`,back:"b) 1949"},{front:`Co bylo cílem NATO?
a) Zajistit hospodářský rozvoj
b) Zajistit vojenskou ochranu západních států před sovětskou hrozbou
c) Vytvoření jednotného evropského trhu
d) Sjednocení západní Evropy`,back:"b) Zajistit vojenskou ochranu západních států před sovětskou hrozbou"},{front:`Kdy došlo k vypuknutí vojenské intervence v Koreji?
a) 1950
b) 1953
c) 1955
d) 1960`,back:"a) 1950"},{front:`Co byla Kultura a politika Khrushchova?
a) Nastolení mírové politiky a uvolnění napětí mezi Východem a Západem
b) Příprava na jadernou válku
c) Zhoršení vztahů mezi USA a Sovětským svazem
d) Uzavření hranic a totalitní režim`,back:"a) Nastolení mírové politiky a uvolnění napětí mezi Východem a Západem"},{front:`Kdy byla podepsána Charta OSN?
a) 1945
b) 1950
c) 1955
d) 1960`,back:"a) 1945"},{front:`Kdy vznikla Evropská hospodářská společenství (EHS)?
a) 1947
b) 1957
c) 1961
d) 1967`,back:"b) 1957"},{front:`Co znamenala termín "perestrojka"?
a) Program pro rozvoj jaderné energetiky v Sovětském svazu
b) Ekonomické a politické reformy iniciované Michalem Gorbačovem
c) Změna názvu pro Sovětský svaz
d) Nová vojenská doktrína Sovětského svazu`,back:"b) Ekonomické a politické reformy iniciované Michalem Gorbačovem"},{front:`Co znamenala termín "glasnosť"?
a) Zvýšení vojenské výkonnosti Sovětského svazu
b) Politika většího otevření a svobody projevu v Sovětském svazu
c) Zavedení nové hospodářské politiky v Sovětském svazu
d) Zahraniční politika Sovětského svazu vůči Západu`,back:"b) Politika většího otevření a svobody projevu v Sovětském svazu"},{front:`Co bylo záměrem Brežněvovy doktríny?
a) Podpora komunistických revolucí v západních zemích
b) Osvobození států pod sovětskou nadvládou
c) Právo Sovětského svazu zasahovat v socialistických zemích, pokud dojde k ohrožení socialismu
d) Zabránění šíření kapitalismu východní Evropou`,back:"c) Právo Sovětského svazu zasahovat v socialistických zemích, pokud dojde k ohrožení socialismu"},{front:`Co bylo příčinou války ve Vietnamu?
a) Konflikt mezi komunistickým severem a antikomunistickým jihem Vietnamu
b) Německý útok na Vietnam
c) Boj o nezávislost mezi Vietnamem a Francií
d) Zásah USA proti čínské invazi`,back:"a) Konflikt mezi komunistickým severem a antikomunistickým jihem Vietnamu"},{front:`Kdy došlo k pádu Sovětského svazu?
a) 1985
b) 1991
c) 1995
d) 2000`,back:"b) 1991"}],stats:{totalCards:50,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:50,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}},{id:"evropska-integrace",name:"Evropská integrace",cards:[{front:`Kdy byla založena Evropská hospodářská společenství (EHS)?
a) 1957
b) 1960
c) 1950
d) 1965`,back:"a) 1957"},{front:`Kdy byl podepsán Maastrichtský smlouva?
a) 1992
b) 1990
c) 1995
d) 1989`,back:"a) 1992"},{front:`Kdy vstoupilo Československo do EU?
a) 2004
b) 2000
c) 2008
d) 2010`,back:"a) 2004"},{front:`Kdy byl zaveden euro?
a) 2002
b) 2000
c) 2005
d) 1999`,back:"a) 2002"},{front:`Kdy byla podepsána Lisabonská smlouva?
a) 2007
b) 2005
c) 2010
d) 2009`,back:"a) 2007"},{front:`Kdy vstoupilo Chorvatsko do EU?
a) 2013
b) 2010
c) 2015
d) 2012`,back:"a) 2013"},{front:`Kdy Velká Británie opustila EU?
a) 2020
b) 2019
c) 2021
d) 2018`,back:"a) 2020"},{front:`Kdy byla podepsána Schengenská dohoda?
a) 1985
b) 1990
c) 1980
d) 1995`,back:"a) 1985"},{front:`Kdy vstoupily Bulharsko a Rumunsko do EU?
a) 2007
b) 2005
c) 2010
d) 2009`,back:"a) 2007"},{front:`Kdy byla podepsána Římská smlouva?
a) 1957
b) 1960
c) 1950
d) 1965`,back:"a) 1957"}],stats:{totalCards:10,cardsStudied:0,averageSuccessRate:0,totalStudyTime:0,masteryLevel:"beginner",streak:0,weeklyProgress:[],difficultyDistribution:{easy:0,medium:0,hard:0},lastWeekProgress:{cardsStudied:0,averageSuccessRate:0,timeSpent:0},achievements:[],learningPath:{currentStage:1,stages:[{level:1,requiredCards:10,requiredSuccessRate:70,completed:!1}]},reviewSchedule:{nextReviewDate:new Date,reviewHistory:[],spacedRepetitionLevel:1},analytics:{bestTimeOfDay:"",averageSessionLength:0,mostChallengingCards:[],improvementRate:0,studyPatterns:[]}}}]}];function KV(){var ae;const[n,e]=re.useState(null),[t,o]=re.useState(null),[s,a]=re.useState(null),[u,h]=re.useState(!1),[m,f]=re.useState(!1),[g,b]=re.useState(!1),[z,P]=re.useState(!1);re.useEffect(()=>{const se=localStorage.getItem("darkMode"),I=localStorage.getItem("hasSeenGuide");if(se)h(se==="true");else{const E=window.matchMedia("(prefers-color-scheme: dark)").matches;h(E)}I&&P(!0)},[]),re.useEffect(()=>{m&&!z&&b(!0)},[m,z]),re.useEffect(()=>{localStorage.setItem("darkMode",u.toString()),u?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[u]);const N=()=>{b(!1),P(!0),localStorage.setItem("hasSeenGuide","true")},M=()=>{b(!0)},L=se=>{e(se);const I=BV.find(E=>E.id===se);a(I||null),o(null)},$=se=>{o(se)},q=()=>{e(null),o(null),a(null)},Q=()=>{h(se=>!se)},oe=()=>w.jsx("header",{className:`${u?"bg-gray-800 shadow-gray-900":"bg-white shadow-sm"} transition-colors duration-200 sticky top-0 z-10`,children:w.jsx("div",{className:"max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8",children:w.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx(Ps,{text:"Welcome to your flashcards app! Start by selecting a category below.",darkMode:u,position:"bottom",children:w.jsxs("h1",{className:`text-2xl sm:text-3xl font-bold ${u?"text-white":"text-gray-900"} truncate flex items-center gap-2`,children:["Flashcards App",w.jsx("span",{className:`text-sm font-normal ${u?"text-gray-400":"text-gray-500"}`,children:"v1.16"})]})}),w.jsxs("div",{className:"flex items-center gap-2 sm:hidden",children:[w.jsx(Ps,{text:"Need help? Click to see the guide again",darkMode:u,position:"left",children:w.jsx("button",{onClick:M,className:`p-2 rounded-full ${u?"bg-gray-700 text-blue-400 hover:text-blue-300":"bg-gray-200 text-blue-600 hover:text-blue-700"}`,"aria-label":"Show help guide",children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})}),w.jsx(Ps,{text:"Toggle between light and dark mode for comfortable viewing",darkMode:u,position:"left",children:w.jsx("button",{onClick:Q,className:`p-2 rounded-full ${u?"bg-gray-700 text-yellow-300":"bg-gray-200 text-gray-700"}`,"aria-label":"Toggle dark mode",children:u?w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})})]})]}),w.jsxs("div",{className:"flex items-center justify-end gap-4",children:[w.jsx(Ps,{text:"Need help? Click to see the guide again",darkMode:u,position:"bottom",children:w.jsxs("button",{onClick:M,className:`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${u?"bg-gray-700 text-blue-400 hover:text-blue-300":"bg-gray-200 text-blue-600 hover:text-blue-700"}`,children:[w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),w.jsx("span",{className:"text-sm",children:"Help"})]})}),w.jsx("div",{className:"hidden sm:block",children:w.jsx(Ps,{text:"Toggle between light and dark mode for comfortable viewing",darkMode:u,position:"bottom",children:w.jsx("button",{onClick:Q,className:`p-2 rounded-full ${u?"bg-gray-700 text-yellow-300":"bg-gray-200 text-gray-700"}`,"aria-label":"Toggle dark mode",children:u?w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})})}),n&&w.jsx(Ps,{text:"Return to the category selection screen",darkMode:u,position:"bottom",children:w.jsx("button",{onClick:q,className:`w-full sm:w-auto px-4 py-2 ${u?"bg-gray-700 text-white hover:bg-gray-600":"bg-gray-500 text-white hover:bg-gray-600"} rounded-lg transition-colors duration-200 text-sm sm:text-base`,children:"Back to Categories"})})]})]})})});return m?w.jsxs("div",{className:`min-h-screen transition-colors duration-200 ${u?"dark bg-gray-900":"bg-gradient-to-b from-gray-50 to-gray-100"}`,children:[oe(),w.jsx("main",{className:"max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8",children:n&&s?t?w.jsx(FV,{cards:((ae=s.subcategories.find(se=>se.id===t))==null?void 0:ae.cards)||[],darkMode:u,categoryId:n,subcategoryId:t}):w.jsx(L0,{onCategorySelect:$,darkMode:u,selectedCategory:s}):w.jsx(L0,{onCategorySelect:L,darkMode:u})}),g&&w.jsx(HV,{darkMode:u,onClose:N})]}):w.jsxs("div",{className:`min-h-screen transition-colors duration-200 ${u?"dark bg-gray-900":"bg-gradient-to-b from-gray-50 to-gray-100"}`,children:[oe(),w.jsx("main",{className:"max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8",children:w.jsx(UV,{onCorrectPassword:()=>f(!0),darkMode:u})})]})}Jj.createRoot(document.getElementById("root")).render(w.jsx(Hj.StrictMode,{children:w.jsx(KV,{})}));
