(this["webpackJsonpmortgage-calculator"]=this["webpackJsonpmortgage-calculator"]||[]).push([[0],{119:function(e,t,a){e.exports=a(228)},124:function(e,t,a){},125:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},126:function(e,t,a){},128:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(124),a(7)),s=(a(125),a(126),a(229)),u=a(233),m=a(232),i=a(234),p=a(235),g=(a(127),a(128),a(230)),b=a(231),E=g.a.Text;var f=function(e){function t(t){e.setInputValue(t),localStorage.setItem(e.storage,t)}function a(a){console.log(e),e.setPercent(a),localStorage.setItem(e.storage+"_percent",a),"rate"!=e.storage?(e.setInputValue(e.home*(a/100)),localStorage.setItem(e.storage,e.home*(a/100))):t(a)}return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(p.a,{span:4},r.a.createElement(E,{strong:!0},e.title)),r.a.createElement(p.a,{span:8},r.a.createElement(b.a,{min:e.home?0:e.min,max:e.home?10:e.max,step:e.percent?e.step<.5?e.step:.5:e.step,onChange:e.percent?a:t,value:e.percent?e.percent:e.inputValue})),r.a.createElement(p.a,{span:3},1==e.percentOnly?null:r.a.createElement(u.a,{className:"inputCurrency",min:e.min||0,max:e.max||100,step:e.step||1,style:{margin:"0 16px"},value:e.inputValue,onChange:t,formatter:function(t){return"years"===e.storage?"".concat(t," years").replace(/\B(?=(\d{3})+(?!\d))/g,","):"\u20aa ".concat(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return e.storage,t.replace(/\\u20aa\s?|(,*)/g,"")},disabled:!e.boxes[0]})),r.a.createElement(p.a,{span:3},1==e.boxes[1]?r.a.createElement(u.a,{min:0,max:10,step:e.step<.5?e.step:.5,style:{margin:"0 16px"},value:e.percent,onChange:a,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")}}):null)),r.a.createElement(s.a,{type:"horizontal"}))};function h(e,t,a,n,r){var o=0;try{o=parseInt(e)+parseInt(x(e))+1.17*parseInt(a)+1.17*parseInt(n)+parseInt(r)}catch(l){}return o}function x(e){for(var t=[0,1744505,2069205,5338290,17794305],a=[0,0,.035,.05,.08],n=0,r=1;e>0;){var o=t[r]-t[r-1];e-o>0?(n+=o*a[r],console.log(o+" * "+a[r]),e-=o):(n+=e*a[r],console.log(e+" * "+a[r]),e=0),r++}return n}var I=function(){var e=Object(n.useState)(localStorage.getItem("home")||0),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(localStorage.getItem("tax")||0),g=Object(c.a)(l,2),b=g[0],E=g[1],I=Object(n.useState)(localStorage.getItem("tax_percent")||0),S=Object(c.a)(I,2),y=S[0],j=(S[1],Object(n.useState)(localStorage.getItem("agent")||0)),v=Object(c.a)(j,2),V=v[0],w=v[1],M=Object(n.useState)(localStorage.getItem("agent_percent")||0),P=Object(c.a)(M,2),z=P[0],B=P[1],T=Object(n.useState)(localStorage.getItem("lawyer")||0),k=Object(c.a)(T,2),A=k[0],C=k[1],_=Object(n.useState)(localStorage.getItem("lawyer_percent")||0),H=Object(c.a)(_,2),J=H[0],L=H[1],N=Object(n.useState)(localStorage.getItem("other")||0),W=Object(c.a)(N,2),D=W[0],R=W[1],$=Object(n.useState)(localStorage.getItem("downpayment")||0),q=Object(c.a)($,2),F=q[0],G=q[1],K=Object(n.useState)(localStorage.getItem("mortgage")||0),Q=Object(c.a)(K,2),U=Q[0],X=Q[1],Y=Object(n.useState)(localStorage.getItem("rate")||0),Z=Object(c.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(localStorage.getItem("years")||0),ne=Object(c.a)(ae,2),re=ne[0],oe=ne[1],le=Object(n.useState)(0),ce=Object(c.a)(le,2),se=ce[0],ue=ce[1];function me(e){te(e),ie(U,e,re)}function ie(e,t,a){var n=t/12/100,r=12*a,o=e*(n*Math.pow(1+n,r)/(Math.pow(1+n,r)-1));ue(o)}return Object(n.useEffect)((function(){ie(U,ee,re)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{type:"horizontal"}),r.a.createElement(f,{boxes:[!0,!1],inputValue:a,setInputValue:function(e){o(e),E(e*(y/100)),w(e*(z/100)),C(e*(J/100)),x(e)},min:15e5,max:4e6,step:25e3,storage:"home",title:"Home Price"}),r.a.createElement(u.a,{min:0,max:1e5,step:1,style:{margin:"0 16px"},value:Math.round(x(a)),formatter:d,parser:O,disabled:!0}),r.a.createElement(s.a,{type:"horizontal"}),r.a.createElement(f,{home:a,boxes:[!1,!0],inputValue:V,setInputValue:w,min:0,max:4e6,step:.1,storage:"agent",percent:z,setPercent:B,title:"Agent"}),r.a.createElement(f,{home:a,boxes:[!1,!0],inputValue:A,setInputValue:C,min:0,max:4e6,step:.1,storage:"lawyer",percent:J,setPercent:L,title:"Lawyer"}),r.a.createElement(f,{boxes:[!0,!1],inputValue:D,setInputValue:R,min:0,max:2e5,step:1e3,storage:"other",title:"Other"}),r.a.createElement(m.a,{title:"Total Home",value:h(a,b,A,V,D),prefix:"\u20aa"}),r.a.createElement(s.a,{type:"horizontal"}),r.a.createElement(f,{boxes:[!0,!1],inputValue:F,setInputValue:G,min:0,max:4e6,step:1e4,storage:"downpayment",title:"Down Payment"}),r.a.createElement(f,{boxes:[!0,!1],inputValue:U,setInputValue:function(e){X(e),ie(e,ee,re)},min:0,max:3e6,step:1e4,storage:"mortgage",title:"Mortgage Amount"}),r.a.createElement(f,{boxes:[!1,!0],inputValue:ee,setInputValue:me,percent:ee,setPercent:me,min:0,max:7,step:.1,storage:"rate",percentOnly:!0,title:"Mortgage Interest Rate"}),r.a.createElement(f,{boxes:[!0,!1],inputValue:re,setInputValue:function(e){oe(e),ie(U,ee,e)},min:0,max:40,step:1,storage:"years",title:"Loan Term"}),r.a.createElement(i.a,null,r.a.createElement(p.a,{span:6},r.a.createElement(m.a,{title:"Monthly Payment",value:Math.round(se),prefix:"\u20aa"})),r.a.createElement(p.a,{span:6},r.a.createElement(m.a,{title:"Annual Payment",value:Math.round(12*se),prefix:"\u20aa"})),r.a.createElement(p.a,{span:6},r.a.createElement(m.a,{title:"Total Interest Paid",value:Math.round(se*re*12-U),prefix:"\u20aa"})),r.a.createElement(p.a,{span:6},r.a.createElement(m.a,{title:"Total Paid",value:Math.round(se*re*12),prefix:"\u20aa"}))),r.a.createElement(s.a,{type:"horizontal"}))};function d(e){return"\u20aa ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}function O(e){return e.replace(/\\u20aa\s?|(,*)/g,"")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.3915287a.chunk.js.map