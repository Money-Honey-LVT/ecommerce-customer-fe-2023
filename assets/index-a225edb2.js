import{i as S,k as j,l as E,f as N,T as o,ar as $,b as c,S as C,j as a,R}from"./index-4732123a.js";var z=Object.defineProperty,i=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,f=(r,e,n)=>e in r?z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,I=(r,e)=>{for(var n in e||(e={}))A.call(e,n)&&f(r,n,e[n]);if(i)for(var n of i(e))T.call(e,n)&&f(r,n,e[n]);return r};function k({theme:r,color:e}){return e==="dimmed"?r.fn.dimmed():r.fn.themeColor(e||r.primaryColor,r.colorScheme==="dark"?4:7,!1,!0)}var D=S((r,{color:e,underline:n})=>({root:I({backgroundColor:"transparent",cursor:"pointer",padding:0,border:0,color:k({theme:r,color:e})},r.fn.hover({textDecoration:n?"underline":"none"}))}));const F=D;var U=Object.defineProperty,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(r,e,n)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,u=(r,e)=>{for(var n in e||(e={}))d.call(e,n)&&p(r,n,e[n]);if(l)for(var n of l(e))m.call(e,n)&&p(r,n,e[n]);return r},V=(r,e)=>{var n={};for(var t in r)d.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&l)for(var t of l(r))e.indexOf(t)<0&&m.call(r,t)&&(n[t]=r[t]);return n};const H={underline:!0},_=j.forwardRef((r,e)=>{const n=E("Anchor",H,r),{component:t,className:h,unstyled:y,variant:v,size:s,color:O,underline:g}=n,P=V(n,["component","className","unstyled","variant","size","color","underline"]),{classes:b,cx:w}=F({color:O,underline:g},{name:"Anchor",unstyled:y,variant:v,size:s}),x=t==="button"?{type:"button"}:null;return N.createElement(o,u(u({component:t||"a",ref:e,className:w(b.root,h),size:s},x),P))});_.displayName="@mantine/core/Anchor";const K=$(_),L=()=>c(C,{spacing:"sm",align:"center",justify:"center",children:[a(o,{c:"black.8",fz:28,fw:700,children:"Không tìm thấy trang"}),a(o,{c:"black.8",fz:"xl",children:"Trang đã bị xoá hoặc địa chỉ URL không đúng"}),c(o,{c:"black.8",fz:"xl",children:["Trở về ",a(K,{href:R.HOME.INDEX,color:"primary.9",underline:!1,children:a(o,{span:!0,inherit:!0,fw:500,fz:"xl",children:"Trang Chủ"})})]})]}),X=L;export{X as default};