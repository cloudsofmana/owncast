"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6183],{20449:function(e,t,n){n.d(t,{e:function(){return m}});var s=n(85893),l=n(56697),a=n(65400),r=n(5152),o=n.n(r),i=n(81453);let d=o()(()=>Promise.resolve().then(n.t.bind(n,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),c=o()(()=>n.e(1538).then(n.t.bind(n,11538,23)),{loadableGenerated:{webpack:()=>[11538]},ssr:!1}),u=o()(()=>n.e(6773).then(n.t.bind(n,6773,23)),{loadableGenerated:{webpack:()=>[6773]},ssr:!1}),m=e=>{let{user:t,isEnabled:n,label:r,onClick:o}=e;async function m(e){let{id:t}=e;try{let e=await (0,i.rQ)(i.NM,{data:{userId:t,enabled:!n},method:"POST",auth:!0});return e.success}catch(e){console.error(e)}return!1}let h=n?"ban":"unban",b=n?(0,s.jsx)(d,{style:{color:"var(--ant-error)"}}):(0,s.jsx)(c,{style:{color:"var(--ant-warning)"}}),x=(0,s.jsxs)(s.Fragment,{children:["Are you sure you want to ",h," ",(0,s.jsx)("strong",{children:t.displayName}),n?" and remove their messages?":"?"]});return(0,s.jsx)(a.default,{type:"primary",onClick:()=>{l.default.confirm({title:"Confirm ".concat(h),content:x,onCancel:()=>{},onOk:()=>new Promise((e,n)=>{let s=m(t);s?setTimeout(()=>{e(s),null==o||o()},3e3):n()}),okType:"danger",okText:n?"Absolutely":null,icon:b})},size:"small",icon:n?(0,s.jsx)(u,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:r||h})};m.defaultProps={label:"",onClick:null}},14840:function(e,t,n){n.d(t,{Z:function(){return A}});var s=n(85893),l=n(67294),a=n(74253),r=n(56697),o=n(53740),i=n(55673),d=n(5789),c=n(74048),u=n(94055),m=n(45938),h=n(58091),b=n(44908),x=n.n(b),j=n(20449),f=n(65400),p=n(5152),y=n.n(p),k=n(81453);let w=y()(()=>Promise.resolve().then(n.t.bind(n,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),g=y()(()=>n.e(1538).then(n.t.bind(n,11538,23)),{loadableGenerated:{webpack:()=>[11538]},ssr:!1}),C=y()(()=>n.e(6773).then(n.t.bind(n,6773,23)),{loadableGenerated:{webpack:()=>[6773]},ssr:!1}),T=y()(()=>n.e(4612).then(n.t.bind(n,64612,23)),{loadableGenerated:{webpack:()=>[64612]},ssr:!1}),v=e=>{var t;let{user:n,onClick:l}=e;async function a(e,t){let{id:n}=e;try{let e=await (0,k.rQ)(k.jr,{data:{userId:n,isModerator:t},method:"POST",auth:!0});return e.success}catch(e){console.error(e)}return!1}let o=null===(t=n.scopes)||void 0===t?void 0:t.includes("MODERATOR"),i=o?"remove moderator":"add moderator",d=o?(0,s.jsx)(w,{style:{color:"var(--ant-error)"}}):(0,s.jsx)(g,{style:{color:"var(--ant-warning)"}}),c=(0,s.jsxs)(s.Fragment,{children:["Are you sure you want to ",i," ",(0,s.jsx)("strong",{children:n.displayName}),"?"]});return(0,s.jsx)(f.default,{type:"primary",onClick:()=>{r.default.confirm({title:"Confirm ".concat(i),content:c,onCancel:()=>{},onOk:()=>new Promise((e,t)=>{let s=a(n,!o);s?setTimeout(()=>{e(s),null==l||l()},3e3):t()}),okType:"danger",okText:o?"Yup!":null,icon:d})},size:"small",icon:o?(0,s.jsx)(C,{twoToneColor:"#ff4d4f"}):(0,s.jsx)(T,{twoToneColor:"#22bb44"}),className:"block-user-button",children:i})};v.defaultProps={onClick:null};var N=n(53736),D=n(37135);let A=e=>{let{user:t,connectionInfo:n,children:b}=e,[f,p]=(0,l.useState)(!1),y=()=>{p(!1)},{displayName:k,createdAt:w,previousNames:g,nameChangedAt:C,disabledAt:T}=t,{connectedAt:A,messageCount:P,userAgent:Z}=n||{},M=null,O=g&&[...g];g&&g.length>1&&C&&(M=new Date(C),O.reverse());let F=new Date(w),G=(0,h.Z)(F,"PP pp"),E=M?(0,m.Z)(M):null;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.default,{title:(0,s.jsxs)(s.Fragment,{children:["Created at: ",G,".",(0,s.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,s.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:()=>{p(!0)},children:b})}),(0,s.jsx)(r.default,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(k),open:f,onOk:y,onCancel:y,children:(0,s.jsxs)("div",{className:"user-details",children:[(0,s.jsx)(o.default.Title,{level:4,children:k}),(0,s.jsxs)("p",{className:"created-at",children:["User created at ",G,"."]}),(0,s.jsxs)(i.Z,{gutter:16,children:[n&&(0,s.jsxs)(d.Z,{md:M?12:24,children:[(0,s.jsx)(o.default.Title,{level:5,children:"This user is currently connected to Chat."}),(0,s.jsxs)("ul",{className:"connection-info",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Active for:"})," ",(0,m.Z)(new Date(A))]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Messages sent:"})," ",P]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"User Agent:"}),(0,s.jsx)("br",{}),(0,D.AB)(Z)]})]})]}),M&&(0,s.jsxs)(d.Z,{md:n?12:24,children:[(0,s.jsx)(o.default.Title,{level:5,children:"This user is also seen as:"}),(0,s.jsx)("ul",{className:"previous-names-list",children:x()(O).map((e,t)=>(0,s.jsxs)("li",{className:0===t?"latest":"",children:[(0,s.jsx)("span",{className:"user-name-item",children:e}),0===t?" (Changed ".concat(E," ago)"):""]}))})]})]}),(0,s.jsx)(a.Z,{}),(0,s.jsxs)(c.default,{direction:"horizontal",children:[T?(0,s.jsxs)(s.Fragment,{children:["This user was banned on ",(0,s.jsx)("code",{children:(0,N.u)(T)}),".",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(j.e,{label:"Unban this user",user:t,isEnabled:!1,onClick:y})]}):(0,s.jsx)(j.e,{label:"Ban this user",user:t,isEnabled:!0,onClick:y}),(0,s.jsx)(v,{user:t,onClick:y})]})]})})]})};A.defaultProps={connectionInfo:null}},53736:function(e,t,n){n.d(t,{K:function(){return d},u:function(){return i}});var s=n(85893),l=n(2307),a=n(58091),r=n(14840),o=n(20449);function i(e){let t=new Date(e);return t.getFullYear()!==new Date().getFullYear()?(0,a.Z)(new Date(e),"MMM d, yyyy H:mma"):(0,a.Z)(new Date(e),"MMM d H:mma")}let d=e=>{let{data:t}=e,n=[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:(e,t)=>(0,s.jsx)(r.Z,{user:t,children:(0,s.jsx)("span",{className:"display-name",children:e})})},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>i(e),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:e=>e?i(e):null,sorter:(e,t)=>new Date(e.disabledAt).getTime()-new Date(t.disabledAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,s.jsx)(o.e,{user:t,isEnabled:!t.disabledAt})}];return(0,s.jsx)(l.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"small",rowKey:"id"})}}}]);