"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,a){a.r(t);var r=a(433),c=a(861),n=a(439),s=a(687),i=a.n(s),o=a(791),p=a(689),u=a(243),h=a(184);t.default=function(){var e=(0,o.useState)([]),t=(0,n.Z)(e,2),a=t[0],s=t[1],f=(0,p.UO)().moviesId;return(0,o.useEffect)((function(){var e="192012529bcb26605650afbe6892300f";function t(){return(t=(0,c.Z)(i().mark((function t(){var a,c,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="movie/".concat(f,"/credits?api_key=").concat(e,"&language=en-US"),t.next=3,u.Z.get(a);case 3:c=t.sent,n=c.data.cast.map((function(e){var t=e.id,a=e.profile_path,r=e.name,c=e.character;return{id:t,actorIcon:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://placehold.co/500x750/png",name:r,character:c}})),s((0,r.Z)(n));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/",s([]),function(){t.apply(this,arguments)}()}),[]),(0,h.jsx)("ul",{children:a.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:e.actorIcon,alt:"",width:"200"}),(0,h.jsxs)("p",{children:["Name: ",e.name]}),(0,h.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})}}}]);
//# sourceMappingURL=247.77b165ef.chunk.js.map