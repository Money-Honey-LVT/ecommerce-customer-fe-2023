import{i as P,k as S,l as h,f as D,o as w,ae as n,a9 as c,aa as f,x as l,y as p}from"./index-4732123a.js";var C=Object.defineProperty,N=Object.defineProperties,A=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,R=(r,e,t)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,j=(r,e)=>{for(var t in e||(e={}))I.call(e,t)&&R(r,t,e[t]);if(O)for(var t of O(e))T.call(e,t)&&R(r,t,e[t]);return r},x=(r,e)=>N(r,A(e)),G=P((r,{ratio:e})=>({root:{position:"relative",maxWidth:"100%","&::before":{content:'""',height:0,display:"block",paddingBottom:`${1/e*100}%`},"&::after":{content:'""',display:"table",clear:"both"},"& > *:not(style)":x(j({},r.fn.cover()),{overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}),"& > img, & > video":{objectFit:"cover"}}}));const $=G;var L=Object.defineProperty,_=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,y=(r,e,t)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,U=(r,e)=>{for(var t in e||(e={}))d.call(e,t)&&y(r,t,e[t]);if(_)for(var t of _(e))E.call(e,t)&&y(r,t,e[t]);return r},F=(r,e)=>{var t={};for(var a in r)d.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&_)for(var a of _(r))e.indexOf(a)<0&&E.call(r,a)&&(t[a]=r[a]);return t};const M=S.forwardRef((r,e)=>{const t=h("AspectRatio",{},r),{className:a,ratio:o,children:s,unstyled:i,variant:v}=t,g=F(t,["className","ratio","children","unstyled","variant"]),{classes:m,cx:u}=$({ratio:o},{name:"AspectRatio",unstyled:i,variant:v});return D.createElement(w,U({ref:e,className:u(m.root,a)},g),s)});M.displayName="@mantine/core/AspectRatio";const B=(r,e)=>async t=>{var i;t({type:n.ORDER_PENDING});const a=c.ORDER.order(),{response:o,error:s}=await f({...a,payload:r});!s&&(o==null?void 0:o.status)===200?(t({type:n.ORDER_SUCCESS}),(i=e==null?void 0:e.onSuccess)==null||i.call(e),l("Thông báo","Đặt hàng thành công",p.SUCCESS)):(t({type:n.ORDER_FAIL}),l("Thông báo",s.response.data.devMsg,p.ERROR))},V=()=>async r=>{r({type:n.GET_ORDER_PENDING});const e=c.ORDER.getOrder(),{response:t,error:a}=await f({...e});if(!a&&(t==null?void 0:t.status)===200){const{data:o}=t;r({type:n.GET_ORDER_SUCCESS,payload:o})}else r({type:n.GET_ORDER_FAIL}),l("Thông báo",a.response.data.devMsg,p.ERROR)},b=(r,e)=>async t=>{var i;t({type:n.CANCEL_ORDER_PENDING});const a=c.ORDER.cancelOrder(r),{response:o,error:s}=await f({...a});!s&&(o==null?void 0:o.status)===200?(t({type:n.CANCEL_ORDER_PENDING}),l("Thông báo","Huỷ đơn hàng thành công",p.SUCCESS),(i=e==null?void 0:e.onSuccess)==null||i.call(e)):(t({type:n.CANCEL_ORDER_FAIL}),l("Thông báo",s.response.data.devMsg,p.ERROR))},W={MakeOrder:B,GetOrder:V,CancelOrder:b};export{M as A,W as O};