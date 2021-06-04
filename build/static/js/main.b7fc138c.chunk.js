(this["webpackJsonpglo-react"]=this["webpackJsonpglo-react"]||[]).push([[0],{32:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s,d,b,p,j,u,l,x,h,g,f,O,m,v,k,w,y,C,z,I,S,T,F,P,B,L,D,N,R,E,M,A,U=t(2),W=t.n(U),J=t(23),Q=t.n(J),G=(t(32),t(3)),K=t(13),X=(t(33),t(35),t(4)),Y=Object(X.a)(r||(r=Object(G.a)(["\n  html {\n    box-sizing: border-box;\n   }\n   *,\n   *::before,\n   *::after {\n     box-sizing: inherit;\n   }\n\n   body {\n     margin: 0;\n     background-color: #f0f0f0;\n     font-family: Roboto, sans-serif;\n     font-size: 20px;\n     color: black\n   }\n   img {\n     max-width: 100%;\n     height: auto;\n   }\n   a {\n     text-decoration: none;\n     color: inherit;\n   }\n   ul {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n   }\n   h1, h2, h3 {\n    font-family: Pacifico;\n    padding: 0;\n    margin: 0;\n   }\n   p {\n    padding: 0;\n    margin: 0;\n   }\n   button {\n    cursor: pointer;\n   }\n   input, button {\n     font: inherit;\n   }\n   input [type='number'] {\n     -moz-appearance: textfield;\n   }\n   input::-webkit-outer-spin-button,\n   input::-webkit-inner-spin-button {\n     -webkit-appearance: none;\n   }\n\n"]))),q=W.a.createContext(),H=W.a.createContext(),V=t.p+"static/media/logo.e1eaca91.svg",Z=t.p+"static/media/user.3dc24465.svg",$=X.b.button(i||(i=Object(G.a)(["\n    position: relative;\n    font-size: inherit;\n    text-decoration: none;\n    color: #002878;\n    border-radius: 30px;\n    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);\n    background-position: 90% 0;\n    background-size: 200% 200%;\n    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);\n    transition: .5s;\n    &:hover {\n        box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);\n        background-position: 0 0;\n    }\n"]))),_=Object(X.b)($)(c||(c=Object(G.a)(["\n    width: fit-content;\n    margin: 0 auto;\n    padding: 8px 30px;\n    &:disabled {\n        background-image: none;\n        box-shadow: none;\n        background-color: #bbb;\n    }\n"]))),nn=Object(X.b)($)(a||(a=Object(G.a)(["\n    width: 60px;\n    height: 60px;\n    font-size: 30px;\n    font-weight: 800;\n"]))),en=t(1),tn=X.b.header(o||(o=Object(G.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    height: 80px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    background-color: #33d9de;\n    box-shadow: 0px 4px 5px rgba(0, 40, 120, 0.25);\n    color: #002878;\n"]))),rn=X.b.div(s||(s=Object(G.a)(["\n    display: flex;\n    align-items: center;\n"]))),cn=X.b.h1(d||(d=Object(G.a)(["\n    font-size: 30px;\n    margin-left: 15px;\n    @media (max-width: 376px) {\n        display: none;\n    }\n"]))),an=X.b.img(b||(b=Object(G.a)(["\n    width: 70px;\n    @media (max-width: 240px) {\n        display: none;\n    }\n"]))),on=X.b.div(p||(p=Object(G.a)(["\n    display: flex;\n    align-items: center;\n"]))),sn=X.b.p(j||(j=Object(G.a)(["\n    margin-right: 10px;\n    width: 120px;\n    text-align: center;\n    @media (max-width: 576px) {\n        display: none;\n    }\n"]))),dn=function(){var n=Object(U.useContext)(q).auth,e=n.authentification,t=n.logIn,r=n.logOut;return Object(en.jsxs)(tn,{children:[Object(en.jsxs)(rn,{children:[Object(en.jsx)(an,{src:V,alt:"logo"}),Object(en.jsx)(cn,{children:"MrMagamba\xae"})]}),e?Object(en.jsxs)(on,{onClick:r,children:[Object(en.jsx)(sn,{children:e.displayName}),Object(en.jsx)(nn,{children:"X"})]}):Object(en.jsxs)(on,{onClick:t,children:[Object(en.jsx)(sn,{children:"\u0412\u043e\u0439\u0442\u0438"}),Object(en.jsx)(nn,{children:Object(en.jsx)("img",{src:Z,alt:"\u041f\u043e\u0435\u0441\u0442\u044c"})})]})]})},bn=function(n){return n.toLocaleString("ru-RU",{style:"currency",currency:"RUB"})},pn=function(n){var e=n.topping&&n.topping.filter((function(n){return n.checked})).length,t=.1*n.price*e;return(n.price+t)*(n.count<1?1:n.count>100?100:n.count)},jn=X.b.ul(u||(u=Object(G.a)(["\n    display: flex;\n    justify-content: space-around; {/*\u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0430 \u044d\u043b\u0435\u043c \u043d\u0430 \u043d\u043e\u0432 \u0441\u0442\u0440\u043e\u043a\u0443*/}\n    flex-wrap: wrap;\n\n"]))),un=X.b.li(l||(l=Object(G.a)(["\n    position: relative;\n    width: 400px; {/*\u0438\u0437 \u0432\u0435\u0440\u0441\u0442\u043a\u0438 \u0432 figma*/}\n    height: 155px;\n    background-image: ","; {/*{ img } - \u044d\u0442\u043e \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0442 props */}\n    background-position: center;\n    background-size: cover;\n    margin-top: 30px;\n    margin-right: 20px;\n    padding: 15px;\n    font-size: 24px;\n    color: #33d9de;\n    z-index: 1;\n    &:hover {\n        cursor: pointer;\n        box-shadow: inset 0 0 50px 30px black;\n        &:after {\n            opacity: 0;\n        }\n    }\n    &:after {  {/*\u043f\u0441\u0435\u0432\u0434\u043e-\u044d\u043b\u0435\u043c \u0441 \u0437\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435\u043c \u043d\u0430 \u0432\u0435\u0441\u044c \u0431\u043b\u043e\u043a \u0441 img*/}\n        content: '';\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        background-color: #000;\n        opacity: 40%;\n        z-index: -1;\n    }\n"])),(function(n){var e=n.img;return"url(".concat(e,")")})),ln=function(n){var e=n.itemList,t=Object(U.useContext)(q).openItem.setOpenItem;return Object(en.jsx)(jn,{children:e.map((function(n){return Object(en.jsxs)(un,{img:n.img,onClick:function(){return t(n)},children:[Object(en.jsx)("p",{children:n.name}),Object(en.jsx)("p",{children:bn(n.price)})]},n.id)}))})},xn=X.b.div(x||(x=Object(G.a)(["\n    width: 100%;\n    background-position: center;\n    background-size: cover;\n    @media (max-width: 768px) {\n        display: none;\n    }\n"]))),hn=X.b.div(h||(h=Object(G.a)(["\n    background-color: #33d9de;\n    color: #002878;\n    width: 400px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n"]))),gn=X.b.h2(g||(g=Object(G.a)(["\n    text-align: center;\n    font-weight: 400;\n    line-height: 68px;\n    margin-bottom: 30px;\n    @media (max-width: 768px) {\n        margin-bottom: 0;\n        font-size: 20px;\n    }\n"]))),fn=X.b.div(f||(f=Object(G.a)(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 40px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    z-index: 20;\n"]))),On=X.b.div(O||(O=Object(G.a)(["\n    max-width: 500px;\n    margin: 0 auto;\n    column-count: 2;\n    column-gap: 5px;\n"]))),mn=X.b.label(m||(m=Object(G.a)(["\n    cursor: pointer;\n    display: block;\n"]))),vn=X.b.div(v||(v=Object(G.a)(["\n    display: flex;\n    margin: 0 35px 30px;\n    & span:first-child {\n        flex-grow: 1;\n    }\n"]))),kn=X.b.span(k||(k=Object(G.a)(["\n    text-align: right;\n    width: 120px;\n    margin-left: 5px;\n"]))),wn=t(18),yn=t.n(wn),Cn=t(27),zn=t(7),In=t.p+"static/media/banner.7c11c243.png",Sn=X.b.div(w||(w=Object(G.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 40, 120, .7);;\n  z-index: 1001;\n"]))),Tn=Object(X.b)(Sn)(y||(y=Object(G.a)(["\n  padding-top: 200px;\n  color: red;\n  font-size: 30px;\n  text-align: center;\n"]))),Fn=X.b.div(C||(C=Object(G.a)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  left: 50%;\n"]))),Pn=X.b.div(z||(z=Object(G.a)(["\n  margin: 0 30px;\n  width: 50px;\n  height: 20px;\n  border-radius: 10px;\n  background: #33d9de;\n"]))),Bn=Object(X.b)(Pn)(I||(I=Object(G.a)(["\n  margin-right: -18px;\n  transform-origin: center left;\n  animation: spin1 3s linear infinite;\n  @keyframes spin1 {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(360deg);\n    }\n    30% {\n      transform: rotate(370deg);\n    }\n    35% {\n      transform: rotate(360deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Ln=Object(X.b)(Pn)(S||(S=Object(G.a)(["\n  transform-origin: center right;\n  animation: spin2 3s linear infinite;\n  animation-delay: .2s;\n  @keyframes spin2 {\n    0% {\n      transform: rotate(0deg);\n    }\n    20% {\n      transform: rotate(0deg);\n    }\n    30% {\n      transform: rotate(-180deg);\n    }\n    35% {\n      transform: rotate(-190deg);\n    }\n    40% {\n      transform: rotate(-180deg);\n    }\n    78% {\n      transform: rotate(-180deg);\n    }\n    95% {\n      transform: rotate(-360deg);\n    }\n    98% {\n      transform: rotate(-370deg);\n    }\n    100% {\n      transform: rotate(-360deg);\n    }\n  }\n"]))),Dn=Object(X.b)(Pn)(T||(T=Object(G.a)(["\n  transform-origin: center right;\n  animation: spin3 3s linear infinite;\n  animation-delay: .3s;\n  @keyframes spin3 {\n    0% {\n      transform: rotate(0deg);\n    }\n    27% {\n      transform: rotate(0deg);\n    }\n    40% {\n      transform: rotate(180deg);\n    }\n    45% {\n      transform: rotate(190deg);\n    }\n    50% {\n      transform: rotate(180deg);\n    }\n    62% {\n      transform: rotate(180deg);\n    }\n    75% {\n      transform: rotate(360deg);\n    }\n    80% {\n      transform: rotate(370deg);\n    }\n    85% {\n      transform: rotate(360deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Nn=Object(X.b)(Pn)(F||(F=Object(G.a)(["\n  transform-origin: center right;\n  animation: spin4 3s linear infinite;\n  animation-delay: .4s;\n  @keyframes spin4 {\n    0% {\n      transform: rotate(0deg);\n    }\n    38% {\n      transform: rotate(0deg);\n    }\n    60% {\n      transform: rotate(-360deg);\n    }\n    65% {\n      transform: rotate(-370deg);\n    }\n    75% {\n      transform: rotate(-360deg);\n    }\n    100% {\n      transform: rotate(-360deg);\n    }\n  }\n"]))),Rn=function(){return Object(en.jsx)(Sn,{children:Object(en.jsxs)(Fn,{children:[Object(en.jsx)(Bn,{}),Object(en.jsx)(Ln,{}),Object(en.jsx)(Dn,{}),Object(en.jsx)(Nn,{})]})})},En=X.b.section(P||(P=Object(G.a)(["\n    background-color: #ccc;\n    margin-top: 80px;\n    margin-left: 380px;\n    width: calc(100% - 380px);\n    height: calc(100% - 80px);\n    @media (max-width: 768px) {\n        margin-left: 0;\n        width: 100%;\n    }\n"]))),Mn=X.b.section(B||(B=Object(G.a)(["\n    padding: 30px;\n"]))),An=X.b.h2(L||(L=Object(G.a)(["\n    font-size: 32px;\n    color: #002878;\n"]))),Un=Object(X.b)(xn)(D||(D=Object(G.a)(["\n    background-image: url(",");\n    height: 210px;\n"])),In),Wn=function(){var n=function(){var n=Object(U.useState)(null),e=Object(zn.a)(n,2),t=e[0],r=e[1],i=Object(U.useState)(null),c=Object(zn.a)(i,2),a=c[0],o=c[1];return Object(U.useEffect)((function(){Object(Cn.a)(yn.a.mark((function n(){var e,t;return yn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("DB.json");case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,r(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),o(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()}),[]),{responce:t,error:a}}(),e=n.responce;return Object(en.jsxs)(En,{children:[Object(en.jsx)(Un,{}),n.responce?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsxs)(Mn,{children:[Object(en.jsx)(An,{children:"\u0411\u0443\u0440\u0433\u0435\u0440\u044b"}),Object(en.jsx)(ln,{itemList:e.burger})]}),Object(en.jsxs)(Mn,{children:[Object(en.jsx)(An,{children:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438 / \u041d\u0430\u043f\u0438\u0442\u043a\u0438"}),Object(en.jsx)(ln,{itemList:e.other})]})]}):n.error?Object(en.jsx)(Tn,{children:"Sorry, nework error. We will fix it soon..."}):Object(en.jsx)(Rn,{})]})},Jn=t(19),Qn=t(9),Gn=X.b.div(N||(N=Object(G.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),Kn=X.b.input(R||(R=Object(G.a)(["\n    width: 40px;\n    font-size: 20px;\n    background-color: #33d9de;\n    border: none;\n    text-align: center;\n"]))),Xn=X.b.button(E||(E=Object(G.a)(["\n    background-color: #002878;\n    border: none;\n    border-radius: 3px;\n    width: 30px;\n    height: 30px;\n    color: #33d9de;\n"]))),Yn=X.b.span(M||(M=Object(G.a)(["\n    @media (max-width: 376px) {\n        display: none;\n    }\n"]))),qn=X.b.div(A||(A=Object(G.a)(["\n    @media (max-width: 376px) {\n        margin: 0 auto;\n    }\n"])));function Hn(){var n=Object(U.useContext)(H).counter,e=n.count,t=n.onChange,r=n.validCount;return Object(en.jsxs)(Gn,{children:[Object(en.jsx)(Yn,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(en.jsxs)(qn,{children:[Object(en.jsx)(Xn,{disabled:e<=1,onClick:function(){return r(e-1)},children:"-"}),Object(en.jsx)(Kn,{type:"number",min:"1",max:"100",onChange:t,value:e}),Object(en.jsx)(Xn,{disabled:e>=100,onClick:function(){return r(+e+1)},children:"+"})]})]})}var Vn;var Zn,$n=X.b.input(Vn||(Vn=Object(G.a)(["\n    cursor: pointer;\n    margin-right: 5px;\n"])));function _n(){var n=Object(U.useContext)(H).toppings,e=n.toppings,t=n.checkToppings;return Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u043a\u0438:"}),Object(en.jsx)(On,{children:e.map((function(n,e){return Object(en.jsxs)(mn,{children:[Object(en.jsx)($n,{type:"checkbox",checked:n.checked,onChange:function(){return t(e)}}),n.name]},e)}))})]})}var ne,ee,te,re,ie,ce=X.b.input(Zn||(Zn=Object(G.a)(["\n    cursor: pointer;\n    margin-right: 5px;\n"])));function ae(){var n=Object(U.useContext)(q).openItem.openItem,e=Object(U.useContext)(H).choices,t=e.choice,r=e.changeChoices;return Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)("h3",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435:"}),Object(en.jsx)(On,{children:n.choices.map((function(n){return Object(en.jsxs)(mn,{children:[Object(en.jsx)(ce,{type:"radio",name:"choices",checked:t===n,value:n,onChange:r}),n]},n)}))})]})}var oe,se,de,be,pe,je,ue,le,xe,he,ge,fe,Oe,me=X.b.div(ne||(ne=Object(G.a)(["\n    background-color: #33d9de;\n    width: 600px;\n    height: fit-content;\n    color: #002878;\n    /*transform: translateY(-5%);*/\n    /*box-shadow: 0px 0px 5px 3px rgba(0, 40, 120, 0.3);*/\n"]))),ve=Object(X.b)(xn)(ee||(ee=Object(G.a)(["\n    height: 200px;\n    background-image: url(",");\n"])),(function(n){return n.img})),ke=X.b.section(te||(te=Object(G.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 200px);\n    padding: 30px;\n"]))),we=X.b.div(re||(re=Object(G.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-size: 24px;\n    font-weight: 700;\n    font-family: 'Pacifico', cursive;\n"]))),ye=X.b.div(ie||(ie=Object(G.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),Ce=function(){var n=Object(U.useContext)(q),e=n.openItem,t=e.openItem,r=e.setOpenItem,i=n.orders,c=i.orders,a=i.setOrders,o=function(n){var e=Object(U.useState)(n||1),t=Object(zn.a)(e,2),r=t[0],i=t[1],c=function(n){i(n=n<1?1:n>100?100:n)};return{count:r,setCount:i,onChange:function(n){var e=n.target.value.replace(/^0+/,"");c(e)},validCount:c}}(t.count),s=function(n){var e=n.topping?n.topping:n.toppings?function(n){return n.map((function(n){return{name:n,checked:!1}}))}(n.toppings):[],t=Object(U.useState)(e),r=Object(zn.a)(t,2),i=r[0],c=r[1];return{toppings:i,checkToppings:function(n){c(i.map((function(e,t){var r=Object(Qn.a)({},e);return t===n&&(r.checked=!r.checked),r})))}}}(t),d=function(n){var e=Object(U.useState)(),t=Object(zn.a)(e,2),r=t[0],i=t[1];return{choice:r,changeChoices:function(n){i(n.target.value)}}}(),b=t.index>-1,p=Object(Qn.a)(Object(Qn.a)({},t),{},{count:o.count,topping:s.toppings,choice:d.choice});return Object(en.jsx)(H.Provider,{value:{choices:d,toppings:s,counter:o},children:Object(en.jsx)(fn,{id:"overlay",onClick:function(n){"overlay"===n.target.id&&r(null)},children:Object(en.jsxs)(me,{id:"modal",children:[Object(en.jsx)(ve,{img:t.img}),Object(en.jsxs)(ke,{children:[Object(en.jsxs)(we,{children:[Object(en.jsx)("div",{children:t.name}),Object(en.jsx)("div",{children:bn(t.price)})]}),Object(en.jsx)(Hn,{})," ",t.toppings&&Object(en.jsx)(_n,{}),t.choices&&Object(en.jsx)(ae,{}),Object(en.jsxs)(ye,{children:[Object(en.jsx)("span",{children:"\u0426\u0435\u043d\u0430"}),Object(en.jsx)("span",{children:bn(pn(p))})]}),Object(en.jsx)(_,{onClick:b?function(){var n=Object(Jn.a)(c);n[t.index]=p,a(n),r(null)}:function(){a([].concat(Object(Jn.a)(c),[p])),r(null)},disabled:p.choices&&!p.choice,children:b?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})})},ze=t.p+"static/media/trash.eb1a306d.svg",Ie=X.b.button(oe||(oe=Object(G.a)(["\n    width: 24px;\n    height: 24px;\n    border-color: transparent;\n    background-color: transparent;\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n"])),ze),Se=X.b.li(se||(se=Object(G.a)(["\n    display: flex;\n    margin: 15px 0;\n    flex-wrap: wrap;\n    cursor: pointer;\n\n"]))),Te=X.b.span(de||(de=Object(G.a)(["\n    flex-grow: 1;\n"]))),Fe=X.b.span(be||(be=Object(G.a)(["\n    margin-left: 5px;\n    margin-right: 10px;\n    width: 120px;\n    text-align: right;\n"]))),Pe=X.b.div(pe||(pe=Object(G.a)(["\n    color: #9a9a9a;\n    font-size: 14px;\n    width: 100%;\n"]))),Be=X.b.div(je||(je=Object(G.a)(["\n    color: #9a9a9a;\n    font-size: 14px;\n    width: 100%;\n"]))),Le=function(n){var e=n.order,t=n.index,r=n.deleteItem,i=Object(U.useContext)(q).openItem.setOpenItem,c=e.topping.filter((function(n){return n.checked})).map((function(n){return n.name})).join(", "),a=Object(U.useRef)(null);return Object(en.jsxs)(Se,{onClick:function(n){return n.target!==a.current&&i(Object(Qn.a)(Object(Qn.a)({},e),{},{index:t}))},children:[" ",Object(en.jsx)(Te,{children:e.name}),Object(en.jsx)("span",{children:e.count}),Object(en.jsx)(Fe,{children:bn(pn(e))}),Object(en.jsx)(Ie,{ref:a,onClick:function(){return r(t)}}),c&&Object(en.jsxs)(Pe,{children:["\u0414\u043e\u0431\u0430\u0432\u043a\u0438: ",c]}),e.choice&&Object(en.jsxs)(Be,{children:["\u0412\u0430\u0448 \u0432\u044b\u0431\u043e\u0440: ",e.choice]})]})},De=X.b.section(ue||(ue=Object(G.a)(["\n    display: flex;\n    flex-direction: column;\n    top: 80px;\n    left: 0;\n    background: #ddd;\n    position: fixed;\n    height: calc(100% - 80px);\n    width: 380px;\n    box-shadow: 5px 0px 5px rgba(0, 40, 120, 0.25);\n    padding: 20px;\n    @media (max-width: 768px) {\n    position: relative;\n    height: fit-content;\n    width: 100%;\n    box-shadow: 0px 5px 5px rgba(0, 40, 120, 0.25);\n  }\n\n"]))),Ne=X.b.div(le||(le=Object(G.a)(["\n    flex-grow: 1; {/*\u0440\u0430\u0441\u0442\u044f\u043d\u0443\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442 */}\n"]))),Re=X.b.ul(xe||(xe=Object(G.a)(["\n\n"]))),Ee=X.b.p(he||(he=Object(G.a)(["\n    text-align: center;\n\n"]))),Me=function(){var n=Object(U.useContext)(q),e=n.auth,t=e.authentification,r=e.logIn,i=n.orders,c=i.orders,a=i.setOrders,o=n.orderConfirm.setOpenOrderConfirm,s=function(n){var e=c.filter((function(e,t){return n!==t}));a(e)},d=c.reduce((function(n,e){return pn(e)+n}),0),b=c.reduce((function(n,e){return+e.count+n}),0);return Object(en.jsxs)(De,{children:[Object(en.jsx)(gn,{children:"\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417"}),Object(en.jsx)(Ne,{children:c.length?Object(en.jsxs)(Re,{children:["       ",c.map((function(n,e){return Object(en.jsx)(Le,{order:n,deleteItem:s,index:e},e)}))]}):Object(en.jsx)(Ee,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u0443\u0441\u0442"})}),c.length?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsxs)(vn,{children:[Object(en.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(en.jsxs)("span",{children:[b," \u0448\u0442."]}),Object(en.jsx)(kn,{children:bn(d)})]}),Object(en.jsx)(_,{onClick:function(){return t?o(!0):r()},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})]}):null]})},Ae=X.b.h3(ge||(ge=Object(G.a)(["\n    text-align: center;\n    margin-bottom: 30px;\n"]))),Ue={itemName:["name"],price:["price"],count:["count"],topping:["topping",function(n){return n.filter((function(n){return n.checked})).map((function(n){return n.name}))},function(n){return n.length?n:"no topping"}],choice:["choice",function(n){return n||"no choices"}]},We=function(n,e,t,r){var i=e.map(function(n){var e=Object.keys(n);return function(t){return e.reduce((function(e,r){return e[r]=n[r].reduce((function(n,e,r){return r?e(n):t[e]}),null),e}),{})}}(Ue));n.ref("orders").push().set({nameClient:t.displayName,email:t.email,order:i}),r(!0)},Je=function(){var n=Object(U.useContext)(q),e=n.auth.authentification,t=n.orders,r=t.orders,i=t.setOrders,c=n.orderConfirm.setOpenOrderConfirm,a=n.thanks.setOpenThanks,o=(0,n.firebaseDatabase)(),s=r.reduce((function(n,e){return pn(e)+n}),0);return Object(en.jsx)(fn,{id:"confirm-overlay",onClick:function(n){"confirm-overlay"===n.target.id&&c(!1)},children:Object(en.jsxs)(hn,{children:[Object(en.jsx)(gn,{children:e.displayName}),Object(en.jsx)(Ae,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),Object(en.jsxs)(vn,{children:[Object(en.jsx)("span",{children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430:"}),Object(en.jsx)(kn,{children:bn(s)})]}),Object(en.jsx)(_,{onClick:function(){c(!1),We(o,r,e,a),i([])},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})})},Qe=Object(X.b)(hn)(fe||(fe=Object(G.a)(["\n    background-color: #002878;\n    color: #33d9de;\n"]))),Ge=Object(X.b)(_)(Oe||(Oe=Object(G.a)(["\n    box-shadow: 0 16px 32px 0 rgba(51, 217, 222, .35);\n"]))),Ke=function(){var n=Object(U.useContext)(q),e=n.auth.authentification,t=n.thanks.setOpenThanks;return Object(en.jsx)(fn,{id:"thanks-overlay",onClick:function(n){"thanks-overlay"===n.target.id&&t(!1)},children:Object(en.jsxs)(Qe,{children:[Object(en.jsx)(gn,{children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437,"}),Object(en.jsx)(gn,{children:e.displayName}),Object(en.jsx)(Ge,{onClick:function(){return t(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};var Xe;K.a.initializeApp({apiKey:"AIzaSyB01WzjQ2NOa3yW-6lofRB1xDcEu5-pQ-U",authDomain:"mrmagamba.firebaseapp.com",databaseURL:"https://mrmagamba-default-rtdb.europe-west1.firebasedatabase.app",projectId:"mrmagamba",storageBucket:"mrmagamba.appspot.com",messagingSenderId:"1069543412935",appId:"1:1069543412935:web:2a8f5046979020db591ae2"});var Ye=X.b.div(Xe||(Xe=Object(G.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"])));var qe=function(){var n=function(n){var e=Object(U.useState)(null),t=Object(zn.a)(e,2),r=t[0],i=t[1],c=n(),a=new n.GoogleAuthProvider;return Object(U.useEffect)((function(){c.onAuthStateChanged((function(n){i(n||null)}))}),[c,r]),{authentification:r,logIn:function(){return c.signInWithPopup(a)},logOut:function(){return c.signOut().catch((function(n){return console.error()}))}}}(K.a.auth),e=function(){var n=Object(U.useState)(null),e=Object(zn.a)(n,2);return{openItem:e[0],setOpenItem:e[1]}}(),t=function(){var n=Object(U.useState)([]),e=Object(zn.a)(n,2);return{orders:e[0],setOrders:e[1]}}(),r=function(){var n=Object(U.useState)(!1),e=Object(zn.a)(n,2);return{openOrderConfirm:e[0],setOpenOrderConfirm:e[1]}}(),i=function(){var n=Object(U.useState)(!1),e=Object(zn.a)(n,2);return{openThanks:e[0],setOpenThanks:e[1]}}();return function(n){Object(U.useEffect)((function(){document.title=n?n.name:"MrMagamba"}),[n])}(e.openItem),Object(en.jsxs)(q.Provider,{value:{auth:n,openItem:e,orders:t,orderConfirm:r,thanks:i,firebaseDatabase:K.a.database},children:[Object(en.jsx)(Y,{}),Object(en.jsx)(dn,{}),Object(en.jsxs)(Ye,{children:[Object(en.jsx)(Me,{}),Object(en.jsx)(Wn,{})]}),e.openItem&&Object(en.jsx)(Ce,{}),r.openOrderConfirm&&Object(en.jsx)(Je,{}),i.openThanks&&Object(en.jsx)(Ke,{})]})},He=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};Q.a.render(Object(en.jsx)(W.a.StrictMode,{children:Object(en.jsx)(qe,{})}),document.getElementById("root")),He()}},[[43,1,2]]]);
//# sourceMappingURL=main.b7fc138c.chunk.js.map