"use strict";(self.webpackChunkcleint=self.webpackChunkcleint||[]).push([[744],{5744:(e,t,i)=>{i.r(t),i.d(t,{default:()=>re});var a=i(5043),n=i(3216),o=i(5521),r=i(9962),l=i(6446),c=i(8587),s=i(8168),d=i(8387),h=i(8606),p=i(7266),u=i(6803),m=i(4535),g=i(1475),v=i(5242),f=i(5213),A=i(6236),x=i(7056),b=i(2400);function w(e){return(0,b.Ay)("PrivateSwitchBase",e)}(0,x.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var y=i(579);const S=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=(0,m.Ay)(A.A)((e=>{let{ownerState:t}=e;return(0,s.A)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),z=(0,m.Ay)("input",{shouldForwardProp:g.A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),j=a.forwardRef((function(e,t){const{autoFocus:i,checked:a,checkedIcon:n,className:o,defaultChecked:r,disabled:l,disableFocusRipple:p=!1,edge:m=!1,icon:g,id:A,inputProps:x,inputRef:b,name:j,onBlur:C,onChange:R,onFocus:I,readOnly:E,required:L=!1,tabIndex:B,type:F,value:M}=e,T=(0,c.A)(e,S),[H,P]=(0,v.A)({controlled:a,default:Boolean(r),name:"SwitchBase",state:"checked"}),D=(0,f.A)();let N=l;D&&"undefined"===typeof N&&(N=D.disabled);const V="checkbox"===F||"radio"===F,O=(0,s.A)({},e,{checked:H,disabled:N,disableFocusRipple:p,edge:m}),W=(e=>{const{classes:t,checked:i,disabled:a,edge:n}=e,o={root:["root",i&&"checked",a&&"disabled",n&&"edge".concat((0,u.A)(n))],input:["input"]};return(0,h.A)(o,w,t)})(O);return(0,y.jsxs)(k,(0,s.A)({component:"span",className:(0,d.A)(W.root,o),centerRipple:!0,focusRipple:!p,disabled:N,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),D&&D.onFocus&&D.onFocus(e)},onBlur:e=>{C&&C(e),D&&D.onBlur&&D.onBlur(e)},ownerState:O,ref:t},T,{children:[(0,y.jsx)(z,(0,s.A)({autoFocus:i,checked:a,defaultChecked:r,className:W.input,disabled:N,id:V?A:void 0,name:j,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;P(t),R&&R(e,t)},readOnly:E,ref:b,required:L,ownerState:O,tabIndex:B,type:F},"checkbox"===F&&void 0===M?{}:{value:M},x)),H?n:g]}))}));var C=i(9662);const R=(0,C.A)((0,y.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),I=(0,C.A)((0,y.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=(0,C.A)((0,y.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var L=i(1070);function B(e){return(0,b.Ay)("MuiCheckbox",e)}const F=(0,x.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),M=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],T=(0,m.Ay)(j,{shouldForwardProp:e=>(0,g.A)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.indeterminate&&t.indeterminate,t["size".concat((0,u.A)(i.size))],"default"!==i.color&&t["color".concat((0,u.A)(i.color))]]}})((e=>{let{theme:t,ownerState:i}=e;return(0,s.A)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette[i.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,p.X4)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&{["&.".concat(F.checked,", &.").concat(F.indeterminate)]:{color:(t.vars||t).palette[i.color].main},["&.".concat(F.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),H=(0,y.jsx)(I,{}),P=(0,y.jsx)(R,{}),D=(0,y.jsx)(E,{}),N=a.forwardRef((function(e,t){var i,n;const o=(0,L.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:r=H,color:l="primary",icon:p=P,indeterminate:m=!1,indeterminateIcon:g=D,inputProps:v,size:f="medium",className:A}=o,x=(0,c.A)(o,M),b=m?g:p,w=m?g:r,S=(0,s.A)({},o,{color:l,indeterminate:m,size:f}),k=(e=>{const{classes:t,indeterminate:i,color:a,size:n}=e,o={root:["root",i&&"indeterminate","color".concat((0,u.A)(a)),"size".concat((0,u.A)(n))]},r=(0,h.A)(o,B,t);return(0,s.A)({},t,r)})(S);return(0,y.jsx)(T,(0,s.A)({type:"checkbox",inputProps:(0,s.A)({"data-indeterminate":m},v),icon:a.cloneElement(b,{fontSize:null!=(i=b.props.fontSize)?i:f}),checkedIcon:a.cloneElement(w,{fontSize:null!=(n=w.props.fontSize)?n:f}),ownerState:S,ref:t,className:(0,d.A)(k.root,A)},x,{classes:k}))}));var V=i(5721),O=i(697),W=i(5865);const _=(0,C.A)((0,y.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),q=(0,C.A)((0,y.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorder");var X=i(9297);const Y=(0,m.Ay)(l.A)({padding:"0 0 0 10px",background:"#ffccff",cursor:"pointer",display:"flex",alignItems:"center","& > div":{display:"flex",width:"100%","& > p":{fontSize:14}}}),G=(0,m.Ay)(W.A)({fontSize:"12px !important",background:"#ffb3ff",color:"#222",padding:"0 4px",borderRadius:4,marginRight:6}),J=(0,m.Ay)(W.A)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5F6368"}),K=e=>{let{email:t,selectedEmails:i,setRefreshScreen:a,setSelectedEmails:c}=e;const s=(0,r.A)(o.y.toggleStarredEmail),d=(0,n.Zp)(),h=()=>{s.call({id:t._id,value:!t.starred}),a((e=>!e))};return(0,y.jsxs)(Y,{children:[(0,y.jsx)(N,{size:"small",checked:i.includes(t._id),onChange:()=>{i.includes(t._id)?c((e=>e.filter((e=>e!==t._id)))):c((e=>[...e,t._id]))}}),t.starred?(0,y.jsx)(_,{fontSize:"small",style:{marginRight:10,color:"#FFF200"},onClick:()=>h()}):(0,y.jsx)(q,{fontSize:"small",style:{marginRight:10},onClick:()=>h()}),(0,y.jsxs)(l.A,{onClick:()=>d(X.J.view.path,{state:{email:t}}),children:[(0,y.jsx)(W.A,{style:{width:200,overflow:"hidden"},children:t.name}),(0,y.jsx)(G,{children:"Inbox"}),(0,y.jsxs)(W.A,{children:[t.subject," ",t.body&&"-"," ",t.body]}),(0,y.jsxs)(J,{children:[new window.Date(t.date).getDate(),new window.Date(t.date).toLocaleString("default",{month:"long"})]})]})]})};function Z(e){return(0,b.Ay)("MuiDivider",e)}(0,x.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Q=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],U=(0,m.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,s.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,p.X4)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,s.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,s.A)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,s.A)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,s.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),$=(0,m.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,s.A)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),ee=a.forwardRef((function(e,t){const i=(0,L.A)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:n,className:o,component:r=(n?"div":"hr"),flexItem:l=!1,light:p=!1,orientation:u="horizontal",role:m=("hr"!==r?"separator":void 0),textAlign:g="center",variant:v="fullWidth"}=i,f=(0,c.A)(i,Q),A=(0,s.A)({},i,{absolute:a,component:r,flexItem:l,light:p,orientation:u,role:m,textAlign:g,variant:v}),x=(e=>{const{absolute:t,children:i,classes:a,flexItem:n,light:o,orientation:r,textAlign:l,variant:c}=e,s={root:["root",t&&"absolute",c,o&&"light","vertical"===r&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===r&&"withChildrenVertical","right"===l&&"vertical"!==r&&"textAlignRight","left"===l&&"vertical"!==r&&"textAlignLeft"],wrapper:["wrapper","vertical"===r&&"wrapperVertical"]};return(0,h.A)(s,Z,a)})(A);return(0,y.jsx)(U,(0,s.A)({as:r,className:(0,d.A)(x.root,o),role:m,ref:t,ownerState:A},f,{children:n?(0,y.jsx)($,{className:x.wrapper,ownerState:A,children:n}):null}))}));ee.muiSkipListHighlight=!0;const te=ee,ie=(0,m.Ay)(l.A)({display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:50,opacity:.8}),ae=(0,m.Ay)(te)({width:"100%",marginTop:10}),ne=e=>{let{message:t}=e;return(0,y.jsxs)(ie,{children:[(0,y.jsx)(W.A,{children:t.heading}),(0,y.jsx)(W.A,{children:t.subHeading}),(0,y.jsx)(ae,{})]})},oe={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}},re=()=>{var e,t;const[i,c]=(0,a.useState)([]),[s,d]=(0,a.useState)(!1),{openDrawer:h}=(0,n.KC)(),{type:p}=(0,n.g)(),u=(0,r.A)(o.y.getEmailFromType),m=(0,r.A)(o.y.moveEmailsToBin),g=(0,r.A)(o.y.deleteEmail);(0,a.useEffect)((()=>{u.call({},p)}),[p,s]);return(0,y.jsxs)(l.A,{style:h?{marginLeft:200,width:"calc(100% - 200px)"}:{width:"100%"},children:[(0,y.jsxs)(l.A,{style:{padding:"20px 10px 0 10px",display:"flex",alignItems:"center"},children:[(0,y.jsx)(N,{size:"small",onChange:e=>(e=>{if(e.target.checked){var t;const e=null===u||void 0===u||null===(t=u.response)||void 0===t?void 0:t.map((e=>e._id));c(e)}else c([])})(e)}),(0,y.jsx)(O.A,{onClick:e=>("bin"===p?g.call(i):m.call(i),void d((e=>!e)))})]}),(0,y.jsx)(V.A,{children:null===u||void 0===u||null===(e=u.response)||void 0===e?void 0:e.map((e=>(0,y.jsx)(K,{email:e,selectedEmails:i,setRefreshScreen:d,setSelectedEmails:c},e._id)))}),0===(null===u||void 0===u||null===(t=u.response)||void 0===t?void 0:t.length)&&(0,y.jsx)(ne,{message:oe[p]})]})}},5521:(e,t,i)=>{i.d(t,{y:()=>a});const a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}},9962:(e,t,i)=>{i.d(t,{A:()=>r});var a=i(5043),n=i(7154);const o=async(e,t,i)=>await(0,n.A)({method:e.method,url:"".concat("http://localhost:8000","/").concat(e.endpoint,"/").concat(i),data:t}),r=e=>{const[t,i]=(0,a.useState)(null),[n,r]=(0,a.useState)(""),[l,c]=(0,a.useState)(!1);return{call:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(null),r(""),c(!0);try{let n=await o(e,t,a);i(n.data)}catch(n){r(n.message)}finally{c(!1)}},response:t,error:n,isLoading:l}}},697:(e,t,i)=>{var a=i(4994);t.A=void 0;var n=a(i(39)),o=i(579);t.A=(0,n.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")}}]);
//# sourceMappingURL=744.b77dc6d7.chunk.js.map