(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),i=n(4),s=n(5),b=n(9),r=n(8),d=n(1),l=n.n(d),o=n(7),u=n.n(o),j=(n(14),n(0)),T=function(t){var e,n=t.tabs,a=t.selectedTabId,c=t.onTabSelected,i=null===(e=n.find((function(t){return t.id===a})))||void 0===e?void 0:e.content;return Object(j.jsxs)("div",{className:"Tabs",children:[Object(j.jsx)("ul",{className:"Tabs__list",children:n.map((function(t){return Object(j.jsx)("li",{className:"Tabs__item",children:Object(j.jsx)("button",{type:"button",className:u()("Tabs__button",{"Tabs__button--active":t.id===a}),onClick:function(){return c(t.id)},children:t.title})},t.id)}))}),Object(j.jsx)("p",{className:"Tabs__content",children:i})]})},f=(n(16),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),h=function(t){Object(b.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:"tab-1"},t.onTabSelected=function(e){var n=f.find((function(t){return t.id===e}));n&&n.id!==t.state.selectedTab&&t.setState({selectedTab:n.id})},t}return Object(s.a)(n,[{key:"render",value:function(){var t,e=this.state.selectedTab,n=null===(t=f.find((function(t){return t.id===e})))||void 0===t?void 0:t.title;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("h1",{children:"Selected tab is ".concat(n)})}),Object(j.jsx)(T,{tabs:f,selectedTabId:e,onTabSelected:this.onTabSelected})]})}}]),n}(l.a.Component),m=h;c.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bcf88664.chunk.js.map