"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[178],{178:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r=t(9439),i=t(5861),l=t(4687),o=t.n(l),a=t(9434),s=t(5218),c=t(6191),u=t(3069),d=t(5243),x=t(3329),m=function(){return(0,x.jsx)("div",{children:(0,x.jsx)(d.Z1,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"lightsalmon",innerCircleColor:"lightsalmon",middleCircleColor:"lightsalmon"})})},p=t(3736),f=t(4708),h=t(1111),b=t(1889),v=t(4554),g=t(890),j=t(1614),Z=t(7107),C=t(7012),y=(0,Z.Z)();function w(){var e=(0,a.v9)(c.Af),n=(0,a.v9)(c.c$),t=(0,a.I0)(),r=function(){var n=(0,i.Z)(o().mark((function n(r){var i,l,a,c,d;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),i=r.target,l=i.name,a=i.number,c={name:l.value,number:a.value},!e.some((function(e){return e.name.toLowerCase()===l.value.toLowerCase()}))){n.next=6;break}return n.abrupt("return",(0,s.ZP)("".concat(l.value," is already in contacts."),{duration:3e3}));case 6:return n.next=8,t((0,u.uK)(c));case 8:d=n.sent,d.error||i.reset();case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,x.jsx)(C.Z,{theme:y,children:(0,x.jsxs)(j.Z,{component:"main",maxWidth:"xs",children:[(0,x.jsx)(f.ZP,{}),(0,x.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[(0,x.jsx)(g.Z,{component:"h1",variant:"30px",sx:{color:"bleack"},children:"New Contact"}),(0,x.jsxs)(v.Z,{component:"form",onSubmit:r,sx:{mt:3,"& label.Mui-focused":{color:"blueviolet"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"blueviolet"}}},children:[(0,x.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,x.jsx)(b.ZP,{item:!0,xs:12,children:(0,x.jsx)(h.Z,{required:!0,fullWidth:!0,id:"name",label:"Name contact",name:"name",type:"text",autoComplete:"name",autoFocus:!0})}),(0,x.jsx)(b.ZP,{item:!0,xs:12,children:(0,x.jsx)(h.Z,{required:!0,fullWidth:!0,id:"number",name:"number",label:"Number",type:"tel",autoComplete:"new-tel"})})]}),(0,x.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",disabled:"add"===n,sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",mt:3,mb:2,bgcolor:"blueviolet","&:hover":{backgroundColor:"#4B0082"},"&:focus":{backgroundColor:"#4B0082"}},children:"add"===n?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{color:"blueviolet",size:20}),(0,x.jsx)("span",{children:"Add ... "})]}):"Add contact"})]})]})]})})}var k,P,I,F,z,M=t(3165),L=function(){var e=(0,a.v9)(c.ZP),n=(0,a.I0)(M.T);return(0,x.jsx)(v.Z,{sx:{"& label.Mui-focused":{color:"blueviolet"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"blueviolet"}}},children:(0,x.jsx)(h.Z,{id:"logFilter",label:"Find contact by name",name:"filter",value:e,onChange:function(e){n((0,M.T)(e.currentTarget.value))},sx:{width:350,marginBottom:3},size:"small"})})},W=t(6856),_=t(168),A=t(7691),B=A.ZP.div(k||(k=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  padding: 5px 0;\n"]))),N=A.ZP.p(P||(P=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n  font-family: inherit;\n  font-size: 18px;\n  flex-grow: 1;\n  span {\n    font-size: 16px;\n  }\n"]))),S=A.ZP.button(I||(I=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  svg {\n    color: #bdbdbd;\n  }\n  &:hover {\n    svg {\n      color: blueviolet;\n    }\n  }\n"]))),T=function(e){var n=e.contact,t=n.id,r=n.name,i=n.number,l=(0,a.v9)(c.c$),o=(0,a.I0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(B,{children:[(0,x.jsxs)(N,{children:[r,(0,x.jsxs)("span",{children:["Phone: ",i]})]}),(0,x.jsx)(S,{type:"button",onClick:function(){o((0,u.GK)(t))},children:l===t?(0,x.jsx)(m,{loading:l===t,color:"#003b8e",size:18}):(0,x.jsx)(W.FH3,{size:28})})]})})},q=A.ZP.ul(F||(F=(0,_.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),D=A.ZP.li(z||(z=(0,_.Z)(["\n  border-top: 1px solid blueviolet;\n"]))),K=function(){var e=(0,a.v9)(c.hF);return(0,x.jsx)(q,{children:e.map((function(e){return(0,x.jsx)(D,{children:(0,x.jsx)(T,{contact:e})},e.id)}))})},O=t(2791),$=t(4717);function G(){var e=(0,O.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],l=(0,$.a)().isLoggedIn;return(0,x.jsxs)("div",{children:[(0,x.jsx)(w,{}),(0,x.jsx)("h2",{children:"Contacts"}),l&&(0,x.jsx)(L,{filter:t,handleChange:function(e){i(e)}}),(0,x.jsx)(K,{filter:t})]})}}}]);
//# sourceMappingURL=178.fd459cdf.chunk.js.map