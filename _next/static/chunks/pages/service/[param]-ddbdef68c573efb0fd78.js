(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{2330:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return E},default:function(){return F}});var i=n(1043),r=n(4237),o=n(4521),a=n(1664),s=n(7294),d=n(8186),u=n(3366),l=n(7462),h=n(6010),c=(n(5697),n(917)),v=n(7192);function p(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function m(t){return parseFloat(t)}var f=n(1796),x=n(1861),g=n(6122),w=n(8979);function j(t){return(0,w.Z)("MuiSkeleton",t)}(0,n(6087).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var k=n(5893);const b=["animation","className","component","height","style","variant","width"];let y,C,_,S,A=t=>t;const N=(0,c.F4)(y||(y=A`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Z=(0,c.F4)(C||(C=A`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),M=(0,x.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const n=p(t.shape.borderRadius)||"px",i=m(t.shape.borderRadius);return(0,l.Z)({display:"block",backgroundColor:(0,f.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,c.iv)(_||(_=A`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),N)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,c.iv)(S||(S=A`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Z,e.palette.action.hover)));var W=s.forwardRef((function(t,e){const n=(0,g.Z)({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:r,component:o="span",height:a,style:s,variant:d="text",width:c}=n,p=(0,u.Z)(n,b),m=(0,l.Z)({},n,{animation:i,component:o,variant:d,hasChildren:Boolean(p.children)}),f=(t=>{const{classes:e,variant:n,animation:i,hasChildren:r,width:o,height:a}=t,s={root:["root",n,i,r&&"withChildren",r&&!o&&"fitContent",r&&!a&&"heightAuto"]};return(0,v.Z)(s,j,e)})(m);return(0,k.jsx)(M,(0,l.Z)({as:o,ref:e,className:(0,h.Z)(f.root,r),ownerState:m},p,{style:(0,l.Z)({width:c,height:a},s)}))})),z=r.ZP.div.withConfig({displayName:"param__WrapperAddress",componentId:"sc-akuv2a-0"})(["display:grid;grid-row-gap:16px;"]),P=r.ZP.div.withConfig({displayName:"param__WrapperLinkHome",componentId:"sc-akuv2a-1"})(["display:grid;grid-template-columns:13px 1fr;grid-column-gap:16px;"]),E=!0,F=function(t){var e,n=t.page,r=(0,s.useState)([]),u=r[0],l=r[1];(0,s.useEffect)((function(){(0,d.CP)().then((function(t){var e=null===t||void 0===t?void 0:t.data;l(null===e||void 0===e?void 0:e.find((function(t){return(null===t||void 0===t?void 0:t.id)===Number(n.meta.pageName)})))}))}),[n.meta.pageName]);var h=null===u||void 0===u||null===(e=u.services)||void 0===e?void 0:e.map((function(t){return(0,k.jsxs)(k.Fragment,{children:[(null===t||void 0===t?void 0:t.title)&&(0,k.jsx)(i.xv,{size:24,sizeMob:22,fontWeight:700,style:{whiteSpace:"pre-line",paddingBottom:"16px"},children:null===t||void 0===t?void 0:t.title}),(null===t||void 0===t?void 0:t.text)&&(0,k.jsx)(i.xv,{size:18,sizeMob:18,fontWeight:700,style:{whiteSpace:"pre-line",paddingBottom:"16px"},children:null===t||void 0===t?void 0:t.text}),(0,k.jsx)("div",{children:(null===t||void 0===t?void 0:t.linkImg)&&(0,k.jsx)("img",{src:null===t||void 0===t?void 0:t.linkImg,style:{paddingBottom:"16px",height:"auto",width:"100%",maxWidth:"700px"},alt:null===t||void 0===t?void 0:t.linkImg})})]})}));return(0,k.jsx)(i.jj,{children:(0,k.jsxs)(z,{children:[(0,k.jsx)(a.default,{href:"/",passHref:!0,children:(0,k.jsx)("a",{children:(0,k.jsxs)(P,{children:[(0,k.jsx)(o.Arrow,{}),"\u041d\u0430\u0437\u0430\u0434"]})})}),(0,k.jsx)(i.xv,{size:32,sizeMob:24,fontWeight:700,style:{whiteSpace:"pre-line"},children:n.meta.title}),h?(0,k.jsx)(i.xv,{size:18,sizeMob:18,fontWeight:700,style:{whiteSpace:"pre-line"},children:h}):(0,k.jsxs)("div",{children:[(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{}),(0,k.jsx)(W,{})]}),(0,k.jsx)("div",{style:{height:"96px"}})]})})}},8186:function(t,e,n){"use strict";n.d(e,{v0:function(){return o},CP:function(){return a},Po:function(){return s},Sn:function(){return d},fB:function(){return u}});var i=n(9669),r=n.n(i),o=(r().post("https://dev.avksrv.ru/admin/login",{email:"innerhard@gmail.com",password:"WhoFuckMe!100505"}),function(t,e){return r().post("https://dev.avksrv.ru/admin/login",{email:t,password:e})}),a=function(){return r().get("https://dev.avksrv.ru/category-services")},s=function(){return r().get("https://dev.avksrv.ru/callphones")},d=function(){return r().get("https://dev.avksrv.ru/all-stocks/")},u=function(t,e){return r().put("https://dev.avksrv.ru/callphones/".concat(t),e)}},4521:function(t,e,n){"use strict";n.d(e,{theme:function(){return r.r},Arrow:function(){return o.Eh}});n(1043);var i=n(3777);n.o(i,"Arrow")&&n.d(e,{Arrow:function(){return i.Arrow}}),n.o(i,"theme")&&n.d(e,{theme:function(){return i.theme}});var r=n(1978),o=n(5929)},5812:function(){},8069:function(){},3777:function(t,e,n){"use strict";var i=n(8069);n.o(i,"Arrow")&&n.d(e,{Arrow:function(){return i.Arrow}}),n.o(i,"theme")&&n.d(e,{theme:function(){return i.theme}});var r=n(5812);n.o(r,"Arrow")&&n.d(e,{Arrow:function(){return r.Arrow}}),n.o(r,"theme")&&n.d(e,{theme:function(){return r.theme}})},6826:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service/[param]",function(){return n(2330)}])}},function(t){t.O(0,[774,231,43,888,377],(function(){return e=6826,t(t.s=e);var e}));var e=t.O();_N_E=e}]);