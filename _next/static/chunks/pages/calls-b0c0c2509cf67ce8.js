(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{35068:function(e,n,t){"use strict";t.r(n);var i=t(59499),r=t(50029),o=t(16835),l=t(87794),d=t.n(l),a=t(67294),c=t(655),u=t(72381),s=t(32008),v=t(60619),f=t(8797),h=t(83321),p=t(67720),g=t(78862),x=t(61903),m=t(94054),j=t(33841),w=t(37058),b=t(87109),y=t(93946),Z=t(22961),N=t(72450),_=t(70461),P=t(90260),C=t(85893);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=f.ZP.div.withConfig({displayName:"calls__WrapperAddress",componentId:"sc-wpndg6-0"})(["display:grid;height:960px;margin-bottom:96px;"]),S=f.ZP.div.withConfig({displayName:"calls__WrapperLogin",componentId:"sc-wpndg6-1"})(["margin:24px;display:grid;grid-row-gap:24px;height:150px;"]),F=(0,f.F4)(["",""],s.dC),D=f.ZP.div.withConfig({displayName:"calls__BouncyDiv",componentId:"sc-wpndg6-2"})(["animation:3s infinite ",";"],F);n.default=function(){var e=(0,v.Z)("./1.mp3"),n=(0,o.Z)(e,1)[0],t=(0,a.useState)(!1),i=t[0],l=t[1],s=(0,a.useState)([]),f=s[0],O=s[1],F=(0,a.useState)(!0),I=F[0],A=F[1],T=(0,a.useState)(""),z=T[0],B=T[1],L=(0,a.useState)(""),W=L[0],X=L[1],G=(0,a.useState)(!1),V=G[0],$=G[1],q=(0,_.Z)(["avkcall"]),H=(0,o.Z)(q,2),J=H[0],K=H[1],M=(0,a.useState)(!0),Q=M[0],R=M[1];(0,a.useEffect)((function(){var e=setInterval((function(){(0,P.Po)().then((function(e){O(null===e||void 0===e?void 0:e.data)}))}),15e3);return function(){return clearInterval(e)}}),[]),(0,a.useEffect)((function(){(0,P.Po)().then((function(e){O(null===e||void 0===e?void 0:e.data)}))}),[]);var U=(null===f||void 0===f?void 0:f.filter((function(e){return!1===(null===e||void 0===e?void 0:e.call)})))||[];(0,a.useEffect)((function(){(null===U||void 0===U?void 0:U.length)>0&&A(!0),(null===U||void 0===U?void 0:U.length)>0&&(i||J.avkcall)&&setTimeout((function(){return n()}),500),0===(null===U||void 0===U?void 0:U.length)&&A(!1)}),[U]);var Y=[{field:"id",headerName:"ID",width:70},{field:"lastName",headerName:"\u0418\u043c\u044f",width:130},{field:"phoneNumber",headerName:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",width:200,renderCell:function(e){var n;return(0,C.jsx)("a",{href:"tel: ".concat(null===e||void 0===e||null===(n=e.value)||void 0===n?void 0:n.replace(/\s/g,"")),children:null===e||void 0===e?void 0:e.value})}},{field:"call",headerName:"\u0421\u0442\u0430\u0442\u0443\u0441",width:130},{field:"street",headerName:"\u0417\u0430\u043f\u0438\u0441\u044c",width:130},{field:"action",headerName:"\u041f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043b\u0438",sortable:!1,width:150,renderCell:function(e){return(0,C.jsx)(h.Z,{variant:"contained",onClick:function(n){null===n||void 0===n||n.stopPropagation();var t=e.api,i={};t.getAllColumns().filter((function(e){return"__check__"!==e.field&&!!e})).forEach((function(n){return i[n.field]=e.getValue(e.id,n.field)})),null===f||void 0===f||f.forEach(function(){var e=(0,r.Z)(d().mark((function e(n){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(null===n||void 0===n?void 0:n.id)&&!(null!==n&&void 0!==n&&n.call)&&(null===n||void 0===n?void 0:n.id)===(null===i||void 0===i?void 0:i.id),!e.t0){e.next=4;break}return e.next=4,(0,P.fB)(null===n||void 0===n?void 0:n.id,k(k({},n),{},{call:!0,dateCall:(new Date).toLocaleString(),operator:"Operator"}));case 4:(null===n||void 0===n||!n.call)&&(null===n||void 0===n?void 0:n.id)&&(null===n||void 0===n?void 0:n.id)===(null===i||void 0===i?void 0:i.id)&&(0,P.Po)().then((function(e){O(null===e||void 0===e?void 0:e.data)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},children:"\u041f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043b\u0438"})}},{field:"date",headerName:"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438",width:200},{field:"dateCall",headerName:"\u0414\u0430\u0442\u0430 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0437\u0430\u044f\u0432\u043a\u0443",width:200},{field:"operator",headerName:"\u041a\u0442\u043e \u043f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043b",width:200}];return(0,C.jsx)(u.jj,{children:(0,C.jsx)(E,{children:(0,C.jsx)("div",{children:i||J.avkcall?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridColumnGap:"8px"},children:[(0,C.jsx)(h.Z,{variant:"contained",onClick:function(){(0,P.Po)().then((function(e){O(null===e||void 0===e?void 0:e.data)}))},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443"}),(0,C.jsx)(h.Z,{variant:Q?"outlined":"text",onClick:function(){return R(!0)},children:"\u041d\u043e\u0432\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b"}),(0,C.jsx)(h.Z,{variant:Q?"text":"outlined",onClick:function(){return R(!1)},children:"\u041e\u0431\u0449\u0430\u044f \u0431\u0430\u0437\u0430"})]}),(0,C.jsx)(p.Z,{style:{margin:"16px 0"}}),I&&f&&(0,C.jsx)("div",{style:{position:"fixed",zIndex:2,bottom:20,right:20,background:"#FFFFFF",border:"2px solid #000000"},children:(0,C.jsxs)(D,{style:{overflow:"overlay",height:"200px",padding:"8px"},children:[(0,C.jsxs)(g.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[null===U||void 0===U?void 0:U.length," \u043d\u043e\u0432\u044b\u0439(\u044b\u0445) \u043a\u043b\u0435\u043d\u0442(\u0430)"]}),null===U||void 0===U?void 0:U.map((function(e){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.Z,{sx:{mb:1.5},color:"text.secondary",children:null===e||void 0===e?void 0:e.lastName}),(0,C.jsx)(g.Z,{variant:"h5",component:"div",children:null===e||void 0===e?void 0:e.phoneNumber}),(0,C.jsx)("br",{})]})}))]})}),(0,C.jsx)(c._$r,{rows:Q?U:f,columns:Y,pageSize:15,rowsPerPageOptions:[1],logLevel:"error"})]}):(0,C.jsxs)(S,{children:[(0,C.jsx)(x.Z,{value:z,onChange:function(e){return B(e.target.value)},id:"Name",label:"Name"}),(0,C.jsxs)(m.Z,{variant:"outlined",children:[(0,C.jsx)(j.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,C.jsx)(w.Z,{id:"outlined-adornment-password",type:V?"text":"password",value:W,onChange:function(e){return X(e.target.value)},endAdornment:(0,C.jsx)(b.Z,{position:"end",children:(0,C.jsx)(y.Z,{"aria-label":"toggle password visibility",onClick:function(){return $(!V)},edge:"end",children:V?(0,C.jsx)(N.Z,{}):(0,C.jsx)(Z.Z,{})})}),label:"Password"})]}),(0,C.jsx)(h.Z,{variant:"contained",onClick:function(){return(0,P.v0)(z,W).then((function(e){l(!!e),K("avkcall","true",{maxAge:3600})})).catch((function(e){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})})})}},27964:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calls",function(){return t(35068)}])}},function(e){e.O(0,[662,179,249,81,381,774,888,377],(function(){return n=27964,e(e.s=n);var n}));var n=e.O();_N_E=n}]);