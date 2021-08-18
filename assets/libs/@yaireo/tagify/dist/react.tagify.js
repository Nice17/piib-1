!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.React.tagify=t()}(this,(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.MixedTags=void 0;var e,t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(require("react")),r=require("react-dom/server"),n=require("prop-types"),o=(e=require("./tagify.min.js"))&&e.__esModule?e:{default:e};function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s=e=>e;const c=({name:e,value:n="",loading:u=!1,onInput:a=s,onAdd:l=s,onRemove:c=s,onEdit:i=s,onInvalid:f=s,onClick:d=s,onKeydown:p=s,onFocus:g=s,onBlur:y=s,onChange:h=s,readOnly:m,children:O,settings:b={},InputMode:v="input",autoFocus:w,className:j,whitelist:E,tagifyRef:x,placeholder:M="",defaultValue:P,showDropdown:k})=>{const R=(0,t.useRef)(),T=(0,t.useRef)(),C=(0,t.useRef)(),I=e=>{T.current=e},N=(0,t.useMemo)((()=>({ref:I,name:e,value:O||("string"==typeof n?n:JSON.stringify(n)),className:j,readOnly:m,onChange:h,autoFocus:w,placeholder:M,defaultValue:P})),[]),_=(0,t.useCallback)((()=>{w&&C.current&&C.current.DOM.input.focus()}),[C]);return(0,t.useEffect)((()=>{!function(e){if(e)for(let n in e)if(String(e[n]).includes(".createElement")){let o=e[n];e[n]=e=>(0,r.renderToStaticMarkup)(t.default.createElement(o,e))}}(b.templates),"textarea"==v&&(b.mode="mix"),E&&E.length&&(b.whitelist=E);const e=new o.default(T.current,b);return a&&e.on("input",a),l&&e.on("add",l),c&&e.on("remove",c),i&&e.on("edit",i),f&&e.on("invalid",f),p&&e.on("keydown",p),g&&e.on("focus",g),y&&e.on("blur",y),d&&e.on("click",d),x&&(x.current=e),C.current=e,_(),()=>{e.destroy()}}),[]),(0,t.useEffect)((()=>{_()}),[w]),(0,t.useEffect)((()=>{R.current&&(C.current.settings.whitelist.length=0,E&&E.length&&C.current.settings.whitelist.push(...E))}),[E]),(0,t.useEffect)((()=>{R.current&&C.current.loadOriginalValues(n)}),[n]),(0,t.useEffect)((()=>{R.current&&C.current.toggleClass(j)}),[j]),(0,t.useEffect)((()=>{R.current&&C.current.loading(u)}),[u]),(0,t.useEffect)((()=>{R.current&&C.current.setReadonly(m)}),[m]),(0,t.useEffect)((()=>{const e=C.current;R.current&&(k?(e.dropdown.show.call(e,k),e.toggleFocusClass(!0)):e.dropdown.hide.call(e))}),[k]),(0,t.useEffect)((()=>{R.current=!0}),[]),t.default.createElement("div",{className:"tags-input"},t.default.createElement(v,N))};c.propTypes={name:n.string,value:(0,n.oneOfType)([n.string,n.array]),loading:n.bool,children:n.element,onChange:n.func,readOnly:n.bool,settings:n.object,InputMode:n.string,autoFocus:n.bool,className:n.string,tagifyRef:n.object,whitelist:n.array,placeholder:n.string,defaultValue:(0,n.oneOfType)([n.string,n.array]),showDropdown:(0,n.oneOfType)([n.string,n.bool])};const i=t.default.memo(c);i.displayName="Tags";exports.MixedTags=e=>{let r=e.children,n=l(e,["children"]);return t.default.createElement(i,a({InputMode:"textarea"},n),r)};var f=i;return exports.default=f,i}));