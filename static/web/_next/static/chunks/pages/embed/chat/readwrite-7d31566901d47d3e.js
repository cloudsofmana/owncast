(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955,9715],{20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(4942),o=t(87462),i=t(97685),a=t(97937),c=t(94184),l=t.n(c),s=t(98423),u=t(67294),f=t(53124),d=t(98787),p=t(68349),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},y=function(e){var n,t=e.prefixCls,i=e.className,a=e.checked,c=e.onChange,s=e.onClick,d=h(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,u.useContext(f.E_).getPrefixCls)("tag",t),y=l()(p,(n={},(0,r.Z)(n,"".concat(p,"-checkable"),!0),(0,r.Z)(n,"".concat(p,"-checkable-checked"),a),n),i);return u.createElement("span",(0,o.Z)({},d,{className:y,onClick:function(e){null===c||void 0===c||c(!a),null===s||void 0===s||s(e)}}))},v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},m=new RegExp("^(".concat(d.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(d.E.join("|"),")$")),b=function(e,n){var t,c=e.prefixCls,d=e.className,h=e.style,y=e.children,b=e.icon,w=e.color,x=e.onClose,k=e.closeIcon,C=e.closable,O=void 0!==C&&C,j=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=u.useContext(f.E_),_=E.getPrefixCls,Z=E.direction,P=u.useState(!0),K=(0,i.Z)(P,2),N=K[0],T=K[1];u.useEffect((function(){"visible"in j&&T(j.visible)}),[j.visible]);var A=function(){return!!w&&(m.test(w)||g.test(w))},S=(0,o.Z)({backgroundColor:w&&!A()?w:void 0},h),I=A(),D=_("tag",c),M=l()(D,(t={},(0,r.Z)(t,"".concat(D,"-").concat(w),I),(0,r.Z)(t,"".concat(D,"-has-color"),w&&!I),(0,r.Z)(t,"".concat(D,"-hidden"),!N),(0,r.Z)(t,"".concat(D,"-rtl"),"rtl"===Z),t),d),L=function(e){e.stopPropagation(),null===x||void 0===x||x(e),e.defaultPrevented||"visible"in j||T(!1)},R="onClick"in j||y&&"a"===y.type,U=(0,s.Z)(j,["visible"]),H=b||null,J=H?u.createElement(u.Fragment,null,H,u.createElement("span",null,y)):y,X=u.createElement("span",(0,o.Z)({},U,{ref:n,className:M,style:S}),J,O?k?u.createElement("span",{className:"".concat(D,"-close-icon"),onClick:L},k):u.createElement(a.Z,{className:"".concat(D,"-close-icon"),onClick:L}):null);return R?u.createElement(p.Z,null,X):X},w=u.forwardRef(b);w.CheckableTag=y;var x=w},23279:function(e,n,t){var r=t(13218),o=t(7771),i=t(14841),a=Math.max,c=Math.min;e.exports=function(e,n,t){var l,s,u,f,d,p,h=0,y=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(n){var t=l,r=s;return l=s=void 0,h=n,f=e.apply(r,t)}function b(e){return h=e,d=setTimeout(x,n),y?g(e):f}function w(e){var t=e-p;return void 0===p||t>=n||t<0||v&&e-h>=u}function x(){var e=o();if(w(e))return k(e);d=setTimeout(x,function(e){var t=n-(e-p);return v?c(t,u-(e-h)):t}(e))}function k(e){return d=void 0,m&&l?g(e):(l=s=void 0,f)}function C(){var e=o(),t=w(e);if(l=arguments,s=this,p=e,t){if(void 0===d)return b(p);if(v)return clearTimeout(d),d=setTimeout(x,n),g(p)}return void 0===d&&(d=setTimeout(x,n)),f}return n=i(n)||0,r(t)&&(y=!!t.leading,u=(v="maxWait"in t)?a(i(t.maxWait)||0,n):u,m="trailing"in t?!!t.trailing:m),C.cancel=function(){void 0!==d&&clearTimeout(d),h=0,l=p=s=d=void 0},C.flush=function(){return void 0===d?f:k(o())},C}},7771:function(e,n,t){var r=t(55639);e.exports=function(){return r.Date.now()}},30672:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readwrite",function(){return t(41095)}])},8119:function(e,n,t){"use strict";t.d(n,{h:function(){return A},Z:function(){return S}});var r=t(85893),o=t(97183),i=t(94199),a=t(20550),c=t(828),l=t(66516),s=t(38504),u=t(71577),f=t(26713),d=t(86548),p=t(94149),h=t(38545),y=t(87547),v=t(39398),m=t(4480),g=t(67294),b=t(49218),w=t(5152),x=t.n(w),k=t(1899),C=t(47093),O=t.n(C),j=x()((function(){return t.e(2365).then(t.bind(t,32365)).then((function(e){return e.Modal}))}),{loadableGenerated:{webpack:function(){return[32365]}}}),E=x()((function(){return Promise.all([t.e(8939),t.e(8225)]).then(t.bind(t,98225)).then((function(e){return e.NameChangeModal}))}),{loadableGenerated:{webpack:function(){return[98225]}}}),_=x()((function(){return Promise.all([t.e(4381),t.e(9674)]).then(t.bind(t,9674)).then((function(e){return e.AuthModal}))}),{loadableGenerated:{webpack:function(){return[9674]}}}),Z=function(e){var n=e.username,t=void 0===n?void 0:n,o=(0,g.useState)(!1),i=o[0],a=o[1],w=(0,g.useState)(!1),x=w[0],C=w[1],Z=(0,c.Z)((0,m.FV)(k.ZA),2),P=Z[0],K=Z[1],N=(0,m.sJ)(k.Q),T=function(){K(!P)};(0,b.y1)("c",T,{enableOnContentEditable:!1},[P]);var A=(0,m.sJ)(k.db);if(!A)return null;var S=A.displayName,I=t||S,D=(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(d.Z,{}),onClick:function(){a(!0)},children:"Change name"},"0"),(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(p.Z,{}),onClick:function(){return C(!0)},children:"Authenticate"},"1"),N.chatAvailable&&(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(h.Z,{}),onClick:function(){return T()},children:"Toggle chat"},"3")]});return(0,r.jsxs)("div",{className:"".concat(O().root),children:[(0,r.jsx)(s.Z,{overlay:D,trigger:["click"],children:(0,r.jsx)(u.Z,{type:"primary",icon:(0,r.jsx)(y.Z,{style:{marginRight:".5rem"}}),children:(0,r.jsxs)(f.Z,{children:[I,(0,r.jsx)(v.Z,{})]})})}),(0,r.jsx)(j,{title:"Change Chat Display Name",open:i,handleCancel:function(){return a(!1)},children:(0,r.jsx)(E,{})}),(0,r.jsx)(j,{title:"Authenticate",open:x,handleCancel:function(){return C(!1)},children:(0,r.jsx)(_,{})})]})},P=t(60113),K=t(92910),N=t.n(K),T=o.Z.Header,A=function(e){var n=e.name,t=void 0===n?"Your stream title":n,o=e.chatAvailable,c=e.chatDisabled;return(0,r.jsxs)(T,{className:"".concat(N().header),children:[(0,r.jsxs)("div",{className:"".concat(N().logo),children:[(0,r.jsx)(P.C,{variant:"contrast"}),(0,r.jsx)("span",{children:t})]}),o&&!c&&(0,r.jsx)(Z,{}),!o&&!c&&(0,r.jsx)(i.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,r.jsx)(a.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})},S=A},41095:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(85893),o=t(4480),i=t(32382),a=t(1899),c=t(8119);function l(){var e=(0,o.sJ)(a.db),n=(0,o.sJ)(a.pH),t=(0,o.sJ)(a.g1),l=t.name,s=t.chatDisabled;if(!e)return null;var u=e.id,f=e.displayName,d=e.isModerator;return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.me,{}),(0,r.jsx)(c.Z,{name:l,chatAvailable:!0,chatDisabled:s}),(0,r.jsx)(i.ChatContainer,{messages:n,usernameToHighlight:f,chatUserId:u,isModerator:d,showInput:!0,height:"80vh"})]})}},47093:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2"}},92910:function(e){e.exports={header:"Header_header__U4Ro1",logo:"Header_logo__HLZ6Z"}},49218:function(e,n,t){"use strict";t.d(n,{y1:function(){return P}});var r="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function o(e,n,t,r){e.addEventListener?e.addEventListener(n,t,r):e.attachEvent&&e.attachEvent("on".concat(n),(function(){t(window.event)}))}function i(e,n){for(var t=n.slice(0,n.length-1),r=0;r<t.length;r++)t[r]=e[t[r].toLowerCase()];return t}function a(e){"string"!==typeof e&&(e="");for(var n=(e=e.replace(/\s/g,"")).split(","),t=n.lastIndexOf("");t>=0;)n[t-1]+=",",n.splice(t,1),t=n.lastIndexOf("");return n}for(var c={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":r?173:189,"=":r?61:187,";":r?59:186,"'":222,"[":219,"]":221,"\\":220},l={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},s={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},u={16:!1,18:!1,17:!1,91:!1},f={},d=1;d<20;d++)c["f".concat(d)]=111+d;var p=[],h=!1,y="all",v=[],m=function(e){return c[e.toLowerCase()]||l[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function g(e){y=e||"all"}function b(){return y||"all"}var w=function(e){var n=e.key,t=e.scope,r=e.method,o=e.splitKey,c=void 0===o?"+":o;a(n).forEach((function(e){var n=e.split(c),o=n.length,a=n[o-1],s="*"===a?"*":m(a);if(f[s]){t||(t=b());var u=o>1?i(l,n):[];f[s]=f[s].filter((function(e){return!((!r||e.method===r)&&e.scope===t&&function(e,n){for(var t=e.length>=n.length?e:n,r=e.length>=n.length?n:e,o=!0,i=0;i<t.length;i++)-1===r.indexOf(t[i])&&(o=!1);return o}(e.mods,u))}))}}))};function x(e,n,t,r){var o;if(n.element===r&&(n.scope===t||"all"===n.scope)){for(var i in o=n.mods.length>0,u)Object.prototype.hasOwnProperty.call(u,i)&&(!u[i]&&n.mods.indexOf(+i)>-1||u[i]&&-1===n.mods.indexOf(+i))&&(o=!1);(0!==n.mods.length||u[16]||u[18]||u[17]||u[91])&&!o&&"*"!==n.shortcut||!1===n.method(e,n)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function k(e,n){var t=f["*"],r=e.keyCode||e.which||e.charCode;if(C.filter.call(this,e)){if(93!==r&&224!==r||(r=91),-1===p.indexOf(r)&&229!==r&&p.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(n){var t=s[n];e[n]&&-1===p.indexOf(t)?p.push(t):!e[n]&&p.indexOf(t)>-1?p.splice(p.indexOf(t),1):"metaKey"===n&&e[n]&&3===p.length&&(e.ctrlKey||e.shiftKey||e.altKey||(p=p.slice(p.indexOf(t))))})),r in u){for(var o in u[r]=!0,l)l[o]===r&&(C[o]=!0);if(!t)return}for(var i in u)Object.prototype.hasOwnProperty.call(u,i)&&(u[i]=e[s[i]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===p.indexOf(17)&&p.push(17),-1===p.indexOf(18)&&p.push(18),u[17]=!0,u[18]=!0);var a=b();if(t)for(var c=0;c<t.length;c++)t[c].scope===a&&("keydown"===e.type&&t[c].keydown||"keyup"===e.type&&t[c].keyup)&&x(e,t[c],a,n);if(r in f)for(var d=0;d<f[r].length;d++)if(("keydown"===e.type&&f[r][d].keydown||"keyup"===e.type&&f[r][d].keyup)&&f[r][d].key){for(var h=f[r][d],y=h.splitKey,v=h.key.split(y),g=[],w=0;w<v.length;w++)g.push(m(v[w]));g.sort().join("")===p.sort().join("")&&x(e,h,a,n)}}}function C(e,n,t){p=[];var r=a(e),c=[],s="all",d=document,y=0,g=!1,b=!0,w="+",x=!1;for(void 0===t&&"function"===typeof n&&(t=n),"[object Object]"===Object.prototype.toString.call(n)&&(n.scope&&(s=n.scope),n.element&&(d=n.element),n.keyup&&(g=n.keyup),void 0!==n.keydown&&(b=n.keydown),void 0!==n.capture&&(x=n.capture),"string"===typeof n.splitKey&&(w=n.splitKey)),"string"===typeof n&&(s=n);y<r.length;y++)c=[],(e=r[y].split(w)).length>1&&(c=i(l,e)),(e="*"===(e=e[e.length-1])?"*":m(e))in f||(f[e]=[]),f[e].push({keyup:g,keydown:b,scope:s,mods:c,shortcut:r[y],method:t,key:r[y],splitKey:w,element:d});"undefined"!==typeof d&&!function(e){return v.indexOf(e)>-1}(d)&&window&&(v.push(d),o(d,"keydown",(function(e){k(e,d)}),x),h||(h=!0,o(window,"focus",(function(){p=[]}),x)),o(d,"keyup",(function(e){k(e,d),function(e){var n=e.keyCode||e.which||e.charCode,t=p.indexOf(n);if(t>=0&&p.splice(t,1),e.key&&"meta"===e.key.toLowerCase()&&p.splice(0,p.length),93!==n&&224!==n||(n=91),n in u)for(var r in u[n]=!1,l)l[r]===n&&(C[r]=!1)}(e)}),x))}var O={setScope:g,getScope:b,deleteScope:function(e,n){var t,r;for(var o in e||(e=b()),f)if(Object.prototype.hasOwnProperty.call(f,o))for(t=f[o],r=0;r<t.length;)t[r].scope===e?t.splice(r,1):r++;b()===e&&g(n||"all")},getPressedKeyCodes:function(){return p.slice(0)},isPressed:function(e){return"string"===typeof e&&(e=m(e)),-1!==p.indexOf(e)},filter:function(e){var n=e.target||e.srcElement,t=n.tagName,r=!0;return!n.isContentEditable&&("INPUT"!==t&&"TEXTAREA"!==t&&"SELECT"!==t||n.readOnly)||(r=!1),r},trigger:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(f).forEach((function(t){var r=f[t].find((function(t){return t.scope===n&&t.shortcut===e}));r&&r.method&&r.method()}))},unbind:function(e){if("undefined"===typeof e)Object.keys(f).forEach((function(e){return delete f[e]}));else if(Array.isArray(e))e.forEach((function(e){e.key&&w(e)}));else if("object"===typeof e)e.key&&w(e);else if("string"===typeof e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=t[0],i=t[1];"function"===typeof o&&(i=o,o=""),w({key:e,scope:o,method:i,splitKey:"+"})}},keyMap:c,modifier:l,modifierMap:s};for(var j in O)Object.prototype.hasOwnProperty.call(O,j)&&(C[j]=O[j]);if("undefined"!==typeof window){var E=window.hotkeys;C.noConflict=function(e){return e&&window.hotkeys===C&&(window.hotkeys=E),C},window.hotkeys=C}var _=t(67294);C.filter=function(){return!0};var Z=function(e,n){var t=e.target,r=t&&t.tagName;return Boolean(r&&n&&n.includes(r))};function P(e,n,t,r){t instanceof Array&&(r=t,t=void 0);var o=t||{},i=o.enableOnTags,a=o.filter,c=o.keyup,l=o.keydown,s=o.filterPreventDefault,u=void 0===s||s,f=o.enabled,d=void 0===f||f,p=o.enableOnContentEditable,h=void 0!==p&&p,y=(0,_.useRef)(null),v=(0,_.useCallback)((function(e,t){var r,o;return a&&!a(e)?!u:!!(Z(e,["INPUT","TEXTAREA","SELECT"])&&!Z(e,i)||null!=(r=e.target)&&r.isContentEditable&&!h)||!!(null===y.current||document.activeElement===y.current||null!=(o=y.current)&&o.contains(document.activeElement))&&(n(e,t),!0)}),r?[y,i,a].concat(r):[y,i,a]);return(0,_.useEffect)((function(){if(d)return c&&!0!==l&&(t.keydown=!1),C(e,t||{},v),function(){return C.unbind(e,v)};C.unbind(e,v)}),[v,e,d]),y}C.isPressed}},function(e){e.O(0,[1272,8700,3903,9372,2852,760,1899,2382,9774,2888,179],(function(){return n=30672,e(e.s=n);var n}));var n=e.O();_N_E=n}]);