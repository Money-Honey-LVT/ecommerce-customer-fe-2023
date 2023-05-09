import{k as u,a6 as me,a7 as ve,i as Se,l as Ee,M as ye,N as be,f as H,a8 as F,a9 as xe,aa as Re,x as Y,y as Z,u as M,b as p,G as ie,j as i,c as P,S as B,T as m,d as N,B as V,Z as we,F as Ce,ab as L,D as K,v as X,ac as Ie,ad as l,t as De,C as Le}from"./index-4732123a.js";import{A as ae,O}from"./order.action-da5d328d.js";import{u as Pe}from"./use-form-213a4803.js";import{I as se}from"./Image-ff6b5269.js";import{R as Te}from"./Rating-70908286.js";import{I as W}from"./Input-2a654f21.js";import{C as J}from"./Card-ee0b218a.js";import{T as y}from"./Tabs-a553f249.js";var ze=u.useLayoutEffect,Ne=function(t){var r=u.useRef(t);return ze(function(){r.current=t}),r},Q=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},Oe=function(t,r){var n=u.useRef();return u.useCallback(function(a){t.current=a,n.current&&Q(n.current,null),n.current=r,r&&Q(r,a)},[r])},ee={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},te=function(t){Object.keys(ee).forEach(function(r){t.style.setProperty(r,ee[r],"important")})},h=null,_e=function(t,r){var n=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?n+r.borderSize:n-r.paddingSize};function Ae(e,t,r,n){r===void 0&&(r=1),n===void 0&&(n=1/0),h||(h=document.createElement("textarea"),h.setAttribute("tabindex","-1"),h.setAttribute("aria-hidden","true"),te(h)),h.parentNode===null&&document.body.appendChild(h);var a=e.paddingSize,c=e.borderSize,s=e.sizingStyle,o=s.boxSizing;Object.keys(s).forEach(function(b){var x=b;h.style[x]=s[x]}),te(h),h.value=t;var d=_e(h,e);h.value="x";var f=h.scrollHeight-a,g=f*r;o==="border-box"&&(g=g+a+c),d=Math.max(g,d);var v=f*n;return o==="border-box"&&(v=v+a+c),d=Math.min(v,d),[d,f]}var re=function(){},Ge=function(t,r){return t.reduce(function(n,a){return n[a]=r[a],n},{})},He=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Fe=!!document.documentElement.currentStyle,We=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var n=Ge(He,r),a=n.boxSizing;if(a==="")return null;Fe&&a==="border-box"&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var c=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),s=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:c,borderSize:s}},je=function(t){var r=Ne(t);u.useLayoutEffect(function(){var n=function(c){r.current(c)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}},[])},Be=function(t,r){var n=t.cacheMeasurements,a=t.maxRows,c=t.minRows,s=t.onChange,o=s===void 0?re:s,d=t.onHeightChange,f=d===void 0?re:d,g=me(t,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),v=g.value!==void 0,b=u.useRef(null),x=Oe(b,r),E=u.useRef(0),R=u.useRef(),w=function(){var S=b.current,D=n&&R.current?R.current:We(S);if(D){R.current=D;var z=Ae(D,S.value||S.placeholder||"x",c,a),C=z[0],G=z[1];E.current!==C&&(E.current=C,S.style.setProperty("height",C+"px","important"),f(C,{rowHeight:G}))}},T=function(S){v||w(),o(S)};return u.useLayoutEffect(w),je(w),u.createElement("textarea",ve({},g,{onChange:T,ref:x}))},Ve=u.forwardRef(Be);const Me=Ve;var ke=Se(e=>({input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}}));const $e=ke;var Ue=Object.defineProperty,qe=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&ne(e,r,t[r]);if(_)for(var r of _(t))le.call(t,r)&&ne(e,r,t[r]);return e},j=(e,t)=>qe(e,Ye(t)),Ze=(e,t)=>{var r={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&_)for(var n of _(e))t.indexOf(n)<0&&le.call(e,n)&&(r[n]=e[n]);return r};const Ke={autosize:!1,size:"sm",__staticSelector:"Textarea"},ce=u.forwardRef((e,t)=>{const r=Ee("Textarea",Ke,e),{autosize:n,maxRows:a,minRows:c,label:s,error:o,description:d,id:f,className:g,required:v,style:b,wrapperProps:x,classNames:E,styles:R,size:w,__staticSelector:T,sx:A,errorProps:S,descriptionProps:D,labelProps:z,inputWrapperOrder:C,inputContainer:G,unstyled:k,withAsterisk:de,variant:$}=r,ue=Ze(r,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),U=ye(f),{classes:he,cx:pe}=$e(),{systemStyles:ge,rest:fe}=be(ue),q=I({required:v,ref:t,error:o,id:U,classNames:j(I({},E),{input:pe(he.input,E==null?void 0:E.input)}),styles:R,__staticSelector:T,size:w,multiline:!0,unstyled:k,variant:$},fe);return H.createElement(W.Wrapper,I(I({label:s,error:o,id:U,description:d,required:v,style:b,className:g,classNames:E,styles:R,size:w,__staticSelector:T,sx:A,errorProps:S,labelProps:z,descriptionProps:D,inputContainer:G,inputWrapperOrder:C,unstyled:k,withAsterisk:de,variant:$},ge),x),n?H.createElement(W,j(I({},q),{component:Me,maxRows:a,minRows:c})):H.createElement(W,j(I({},q),{component:"textarea",rows:c})))});ce.displayName="@mantine/core/Textarea";const Xe=(e,t)=>async r=>{var s;r({type:F.POST_RATING_PENDING});const n=xe.PRODUCT.ratingProduct(),{response:a,error:c}=await Re({...n,payload:e});!c&&(a==null?void 0:a.status)===200?(r({type:F.POST_RATING_SUCCESS}),(s=t==null?void 0:t.onSuccess)==null||s.call(t),Y("Thông báo","Đánh giá sản phẩm thành công",Z.SUCCESS)):(r({type:F.POST_RATING_FAIL}),Y("Thông báo",c.response.data.devMsg,Z.ERROR))},Je={PostRating:Xe},Qe=({products:e,orderID:t,closeModal:r})=>{const n=M(),a=Pe({initialValues:e==null?void 0:e.reduce((s,o)=>({...s,[o.productDetailID]:{score:5,review:""}}),{}),validate:{}}),c=s=>{const o=Object.entries(s).map(([f,g])=>({productDetailID:parseInt(f),author:"",score:g.score,review:g.review})),d={orderID:t,rating:o};n(Je.PostRating(d,{onSuccess:()=>{r(),n(O.GetOrder())}}))};return p("form",{style:{marginBottom:"30px"},onSubmit:a.onSubmit(s=>c(s)),children:[e==null?void 0:e.map(s=>p("div",{style:{marginBottom:"20px"},children:[p(ie,{mb:15,children:[i(P,{span:2,children:i(ae,{ratio:1/1,children:i(se,{width:"100%",src:s.imagePath,withPlaceholder:!0})})}),i(P,{span:9,children:p(B,{spacing:0,children:[i(m,{children:s.name}),p(m,{size:"xs",c:"gray",children:[s.size," / ",s.color]})]})})]}),i(Te,{...a.getInputProps(`${s.productDetailID}.score`)}),i(ce,{...a.getInputProps(`${s.productDetailID}.review`),label:"Bình luận",placeholder:"Để lại bình luận của bạn"})]},s.productDetailID)),i(N,{position:"right",mt:10,children:i(V,{type:"submit",children:"Hoàn thành"})})]})},et=({order:e})=>{const t=M(),[r,{open:n,close:a}]=we(!1),c=()=>{e!=null&&e.orderID&&t(O.CancelOrder(e==null?void 0:e.orderID,{onSuccess:()=>t(O.GetOrder())}))},s=o=>{switch(o){case void 0:case l.CANCELLED:return null;case l.DELIVERING:return null;case l.DELIVERED:return(e==null?void 0:e.reviews.length)===0?i(V,{onClick:n,children:"Đánh giá"}):null;case l.PENDING:return i(V,{onClick:c,children:"Huỷ đơn"})}};return p(Ce,{children:[p(J,{withBorder:!0,py:"xs",mt:15,children:[i(J.Section,{children:i(N,{position:"right",children:i(m,{mt:"md",mr:"md",children:L(e==null?void 0:e.status)})})}),i(K,{my:10}),e==null?void 0:e.products.map((o,d)=>p(ie,{children:[i(P,{span:4,lg:1,children:i(ae,{ratio:1/1,w:"100%",children:i(se,{width:"100%",src:o.imagePath,withPlaceholder:!0})})}),i(P,{span:6,lg:9,children:p(B,{spacing:0,children:[i(m,{children:o.name}),p(m,{size:"xs",c:"gray",children:[o.size," / ",o.color]}),p(m,{children:["x ",o.quantity]})]})}),i(P,{span:1,lg:2,children:i(B,{h:"100%",justify:"flex-end",children:i(m,{align:"right",children:X(o.price)})})})]})),i(K,{my:10}),i(N,{position:"right",children:i(m,{size:"lg",align:"right",children:`Thành tiền: ${X(e==null?void 0:e.price)}`})}),i(N,{position:"right",mt:10,children:s(e==null?void 0:e.status)})]}),i(Ie,{centered:!0,opened:r,onClose:a,title:"Đánh giá sản phẩm",children:i(Qe,{products:e==null?void 0:e.products,orderID:e==null?void 0:e.orderID,closeModal:a})})]})},ct=()=>{const e=M(),[t,r]=u.useState("ALL"),n=()=>e(O.GetOrder());u.useEffect(()=>{n()},[]);const{orders:a,isFetching:c}=De(o=>o.order),s=(()=>{switch(t){case"ALL":return a;case l.PENDING:return a.filter(o=>o.status===l.PENDING);case l.DELIVERED:return a.filter(o=>o.status===l.DELIVERED);case l.CANCELLED:return a.filter(o=>o.status===l.CANCELLED);case l.DELIVERING:return a.filter(o=>o.status===l.DELIVERING);default:return[]}})();return p(y,{mt:10,value:t,onTabChange:r,children:[p(y.List,{children:[i(y.Tab,{value:"ALL",children:"TẤT CẢ"}),i(y.Tab,{value:l.PENDING,children:L(l.PENDING)}),i(y.Tab,{value:l.DELIVERING,children:L(l.DELIVERING)}),i(y.Tab,{value:l.DELIVERED,children:L(l.DELIVERED)}),i(y.Tab,{value:l.CANCELLED,children:L(l.CANCELLED)})]}),s.length>0?s.map((o,d)=>i(et,{order:o},d)):i(Le,{mt:20,children:i(m,{weight:"bold",children:"Không có đơn hàng nào"})})]})};export{ct as default};