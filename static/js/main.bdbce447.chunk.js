(this["webpackJsonpcubos-player"]=this["webpackJsonpcubos-player"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),r=s(6),c=s.n(r),a=(s(12),s(7)),o=s(4),d=(s(13),s(14),s.p+"static/media/logo.737fb174.svg"),l=s.p+"static/media/T.97a3d48e.png",u=s(0);function p(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:d})}),Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsx)("img",{className:"profileImg",src:l}),Object(u.jsx)("p",{children:"Bem Vindo, Matheus."})]})]})}s(16);var m=s.p+"static/media/stop.c30597e9.svg",j=s.p+"static/media/next.f2e40fc9.svg",g=s.p+"static/media/previous.184d8033.svg",h=s.p+"static/media/play.6233e861.svg",f=s.p+"static/media/pause.2e5d08b2.svg";function b(e){var t=e.currentMusic,s=e.audioRef,i=e.iconBtn,r=e.setIconBtn,c=e.handleChangeMusic,a=Object(n.useRef)(null),o=null;return Object(u.jsxs)("footer",{children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h3",{children:t.title}),Object(u.jsx)("strong",{children:t.artist})]}),Object(u.jsxs)("div",{className:"container-player",children:[Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)("img",{src:m}),Object(u.jsx)("img",{src:g,onClick:function(){return c("Previous")}}),Object(u.jsx)("img",{src:"Pause"===i?f:h,onClick:function(){return function(){if(o=setInterval((function(){s.current.paused&&clearInterval(o);var e=s.current.duration/60,t=s.current.currentTime/60*100/e;a.current.style.width="".concat(t,"%")}),1e3),s.current.paused)return r("Pause"),void s.current.play();r("Play"),s.current.pause()}()}}),Object(u.jsx)("img",{src:j,onClick:function(){return c("Next")}})]}),Object(u.jsx)("div",{className:"container-progress",children:Object(u.jsxs)("div",{className:"container-line",children:[Object(u.jsx)("div",{className:"line"}),Object(u.jsx)("div",{className:"line-color",ref:a})]})})]}),Object(u.jsx)("div",{className:"empty",children:"."})]})}s(17);function v(e){var t=e.title,s=e.description,n=e.cover;return Object(u.jsx)("div",{className:"cards",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:n}),Object(u.jsx)("h1",{children:t}),Object(u.jsx)("p",{children:s})]})})}var x=[{id:1,title:"Viol\xe3o Ac\xfastico",artist:"Mayer Bronkx",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img1.jpg"},{id:2,title:"Just Things",artist:"John Cris",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/Bay%20Street%20Billionaires%20-%20Squadda%20B.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img2.jpg"},{id:3,title:"Maybe Other",artist:"Eva Garden",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/North%20Oakland%20Extasy%20-%20Squadda%20B.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img4.jpg"},{id:4,title:"It's simple",artist:"Emily C. M.",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/One%20Time%20-%20Jeremy%20Black.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img5.jpg"}];var y=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(Object(a.a)(x)),s=Object(o.a)(t,2),i=s[0],r=(s[1],Object(n.useState)({id:0,title:"",artist:""})),c=Object(o.a)(r,2),d=c[0],l=c[1],m=Object(n.useState)("Pause"),j=Object(o.a)(m,2),g=j[0],h=j[1];function f(t){h("Play"),e.current.src=t.url,l(t)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(p,{}),Object(u.jsxs)("main",{musics:x,children:[Object(u.jsx)("h2",{children:"The best play list"}),Object(u.jsx)("div",{className:"container-cards",children:i.map((function(e){return Object(u.jsx)("div",{onClick:function(){return f(e)},children:Object(u.jsx)(v,{title:e.title,description:e.description,cover:e.cover})},e.id)}))})]}),Object(u.jsx)(b,{audioRef:e,currentMusic:d,iconBtn:g,setIconBtn:h,handleChangeMusic:function(e){var t="Next"===e?d.id+1:d.id-1,s=i.find((function(e){return e.id===t}));s&&f(s)}}),Object(u.jsx)("audio",{ref:e})]})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.bdbce447.chunk.js.map