"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[43],{43:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,o,a,s,c,d,l,p=t(861),x=t(439),u=t(687),h=t.n(u),v=t(791),f=t(689),g=t(243),m=t(168),j=t(686),b=t(87),Z=(0,j.Z)(b.rU)(r||(r=(0,m.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #E186D6;\n    color: white;\n    font-size: 40px;\n    text-decoration: none;\n    border-radius: 50%;\n    width: 40px;\n    padding: 10px;\n    margin: 20px;\n    margin-left: 0px;\n\n    :hover{\n        background-color: #dd9bd5;\n    }\n"]))),w=j.Z.div(i||(i=(0,m.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    /* padding-left: 20px; */\n    padding-right: 150px;\n"]))),y=j.Z.div(o||(o=(0,m.Z)(["\n    margin-left: 30px;\n    /* height: 600px; */\n"]))),k=j.Z.div(a||(a=(0,m.Z)(["\n    display: flex;\n    /* flex-direction: column; */\n    /* justify-content: center; */\n    align-items: center;\n    margin-top: 20px;\n    \n"]))),_=(0,j.Z)(b.rU)(s||(s=(0,m.Z)(["\n    display: flex;\n    /* flex-direction: column; */\n    justify-content: center;\n    align-items: center;\n    \n    \n    margin-top: 20px;\n    font-size: 40px;\n    text-decoration: none;\n    border-radius: 6px;\n    width: 150px;\n    padding: 10px;\n    /* margin: 20px; */\n\n    background-color: #E186D6;\n    color: white;\n\n    :last-of-type{\n        margin-left: 50px;\n    }\n\n    :hover{\n        background-color: #dd9bd5;\n    }\n    \n"]))),U=j.Z.div(c||(c=(0,m.Z)(["\nmargin-bottom: 20px;\n"]))),L=j.Z.div(d||(d=(0,m.Z)(["\nmargin-bottom: 20px;\n"]))),R=j.Z.div(l||(l=(0,m.Z)(["\nmargin-bottom: 20px;\n"]))),D=t(135),E=t(184);function S(n){var e,t,r=n.moviesRender,i=r.poster,o=r.title,a=r.date,s=r.genreList,c=r.overview,d=r.rate,l=(0,f.TH)();return(0,E.jsx)("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:void 0!==r&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Z,{to:null!==(e=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,E.jsx)(D.x_l,{})}),(0,E.jsxs)(w,{children:[(0,E.jsx)("div",{children:(0,E.jsx)("img",{src:i,alt:""})}),(0,E.jsxs)(y,{children:[(0,E.jsx)(U,{children:(0,E.jsxs)("h3",{children:[o," (",a,")"]})}),(0,E.jsxs)(L,{children:[(0,E.jsx)("b",{children:"Genres:"})," ",s]}),(0,E.jsxs)(R,{children:[(0,E.jsx)("b",{children:"Overview:"})," ",c]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("b",{children:"Rating:"})," ",d]}),(0,E.jsxs)(k,{children:[(0,E.jsx)(_,{to:"cast",children:"cast"}),(0,E.jsx)(_,{to:"reviews",children:"reviews"})]})]})]}),(0,E.jsx)(v.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading page..."}),children:(0,E.jsx)(f.j3,{})})]})})}var z=function(){var n=(0,v.useState)({}),e=(0,x.Z)(n,2),t=e[0],r=e[1],i=(0,f.UO)().moviesId;return(0,v.useEffect)((function(){var n="192012529bcb26605650afbe6892300f";function e(){return(e=(0,p.Z)(h().mark((function e(){var t,o,a,s;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(null),e.prev=1,t=function(n){var e=n.poster_path,t=n.overview,r=n.genres,i=n.popularity,o=n.release_date,a=n.id,s=n.title,c=n.vote_average;return{poster:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://placehold.co/500x750/png",overview:t,genreList:r.map((function(n){return n.name})).join(" "),popularity:i,date:o?o.split("-")[0]:"No release information",id:a,title:s,rate:c.toFixed(1)}},o="movie/".concat(i,"?api_key=").concat(n,"&language=en-US"),e.next=6,g.Z.get(o);case 6:return a=e.sent,e.next=9,t(a.data);case 9:return s=e.sent,e.next=12,r(s);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}g.Z.defaults.baseURL="https://api.themoviedb.org/3/",function(){e.apply(this,arguments)}()}),[i]),(0,E.jsx)("div",{style:{padding:"40px"},children:null!==t&&(0,E.jsx)(S,{moviesRender:t})})}}}]);
//# sourceMappingURL=43.fd44aade.chunk.js.map