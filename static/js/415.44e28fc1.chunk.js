"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(e,t,n){n.r(t);var r=n(433),a=n(861),c=n(439),i=n(687),s=n.n(i),u=n(791),o=n(689),l=n(87),f=n(243),p=n(184);t.default=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],i=t[1],d=(0,o.TH)();return(0,u.useEffect)((function(){var e="192012529bcb26605650afbe6892300f";function t(){return(t=(0,a.Z)(s().mark((function t(){var n,a,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i([]),t.prev=1,n="trending/movie/day?api_key=".concat(e),t.next=5,f.Z.get(n);case 5:return a=t.sent,t.next=8,a.data.results.map((function(e){return{id:e.id,title:e.title}}));case 8:c=t.sent,i((0,r.Z)(c)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}f.Z.defaults.baseURL="https://api.themoviedb.org/3/",function(){t.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Trending today"}),(0,p.jsx)("ul",{children:n.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"/movies/".concat(e.id),state:{from:d},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=415.44e28fc1.chunk.js.map