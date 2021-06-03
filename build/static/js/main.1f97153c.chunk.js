(this["webpackJsonpglo-react"]=this["webpackJsonpglo-react"]||[]).push([[0],{32:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var c,r,i,o,a,s,b,d,u,j,p,l,x,h,O,g,f,m,v,k,w,y,C,I,z,S,T,F=t(2),L=t.n(F),P=t(23),B=t.n(P),D=(t(32),t(13)),N=(t(33),t(35),t(3)),R=t(4),E=Object(R.a)(c||(c=Object(N.a)(["\n  html {\n    box-sizing: border-box;\n   }\n   *,\n   *::before,\n   *::after {\n     box-sizing: inherit;\n   }\n\n   body {\n     margin: 0;\n     background-color: #f0f0f0;\n     font-family: Roboto, sans-serif;\n     font-size: 20px;\n     color: black\n   }\n   img {\n     max-width: 100%;\n     height: auto;\n   }\n   a {\n     text-decoration: none;\n     color: inherit;\n   }\n   ul {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n   }\n   h1, h2, h3 {\n    font-family: Pacifico;\n    padding: 0;\n    margin: 0;\n   }\n   p {\n    padding: 0;\n    margin: 0;\n   }\n   button {\n    cursor: pointer;\n   }\n   input, button {\n     font: inherit;\n   }\n   input [type='number'] {\n     -moz-appearance: textfield;\n   }\n   input::-webkit-outer-spin-button,\n   input::-webkit-inner-spin-button {\n     -webkit-appearance: none;\n   }\n\n"]))),M=L.a.createContext(),A=L.a.createContext(),U=t.p+"static/media/logo.e1eaca91.svg",W=t.p+"static/media/user.3dc24465.svg",J=R.b.button(r||(r=Object(N.a)(["\n    position: relative;\n    font-size: inherit;\n    text-decoration: none;\n    color: #002878;\n    border-radius: 30px;\n    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);\n    background-position: 90% 0;\n    background-size: 200% 200%;\n    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);\n    transition: .5s;\n    &:hover {\n        box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);\n        background-position: 0 0;\n    }\n"]))),Q=Object(R.b)(J)(i||(i=Object(N.a)(["\n    width: fit-content;\n    margin: 0 auto;\n    padding: 8px 30px;\n    &:disabled {\n        background-image: none;\n        box-shadow: none;\n        background-color: #bbb;\n    }\n"]))),G=Object(R.b)(J)(o||(o=Object(N.a)(["\n    width: 60px;\n    height: 60px;\n    font-size: 30px;\n    font-weight: 800;\n"]))),K=t(1),X=R.b.header(a||(a=Object(N.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    height: 80px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    background-color: #33d9de;\n    box-shadow: 0px 4px 5px rgba(0, 40, 120, 0.25);\n    color: #002878;\n"]))),Y=R.b.div(s||(s=Object(N.a)(["\n    display: flex;\n    align-items: center;\n"]))),q=R.b.h1(b||(b=Object(N.a)(["\n    font-size: 30px;\n    margin-left: 15px;\n"]))),H=R.b.img(d||(d=Object(N.a)(["\n    width: 70px;\n"]))),V=R.b.div(u||(u=Object(N.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: 20px;\n"]))),Z=R.b.p(j||(j=Object(N.a)(["\n    margin-right: 10px;\n    width: 120px;\n    text-align: center;\n"]))),$=function(){var n=Object(F.useContext)(M).auth,e=n.authentification,t=n.logIn,c=n.logOut;return Object(K.jsxs)(X,{children:[Object(K.jsxs)(Y,{children:[Object(K.jsx)(H,{src:U,alt:"logo"}),Object(K.jsx)(q,{children:"MrMagamba\xae"})]}),e?Object(K.jsxs)(V,{onClick:c,children:[Object(K.jsx)(Z,{children:e.displayName}),Object(K.jsx)(G,{children:"X"})]}):Object(K.jsxs)(V,{onClick:t,children:[Object(K.jsx)(Z,{children:"\u0412\u043e\u0439\u0442\u0438"}),Object(K.jsx)(G,{children:Object(K.jsx)("img",{src:W,alt:"\u041f\u043e\u0435\u0441\u0442\u044c"})})]})]})},_=function(n){return n.toLocaleString("ru-RU",{style:"currency",currency:"RUB"})},nn=function(n){var e=n.topping&&n.topping.filter((function(n){return n.checked})).length,t=.1*n.price*e;return(n.price+t)*(n.count<1?1:n.count>100?100:n.count)},en=R.b.ul(p||(p=Object(N.a)(["\n    display: flex;\n    justify-content: space-around; {/*\u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0430 \u044d\u043b\u0435\u043c \u043d\u0430 \u043d\u043e\u0432 \u0441\u0442\u0440\u043e\u043a\u0443*/}\n    flex-wrap: wrap;\n\n"]))),tn=R.b.li(l||(l=Object(N.a)(["\n    position: relative;\n    width: 400px; {/*\u0438\u0437 \u0432\u0435\u0440\u0441\u0442\u043a\u0438 \u0432 figma*/}\n    height: 155px;\n    background-image: ","; {/*{ img } - \u044d\u0442\u043e \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0442 props */}\n    background-position: center;\n    background-size: cover;\n    margin-top: 30px;\n    margin-right: 20px;\n    padding: 15px;\n    font-size: 24px;\n    color: #33d9de;\n    z-index: 1;\n    &:hover {\n        cursor: pointer;\n        box-shadow: inset 0 0 50px 30px black;\n        &:after {\n            opacity: 0;\n        }\n    }\n    &:after {  {/*\u043f\u0441\u0435\u0432\u0434\u043e-\u044d\u043b\u0435\u043c \u0441 \u0437\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435\u043c \u043d\u0430 \u0432\u0435\u0441\u044c \u0431\u043b\u043e\u043a \u0441 img*/}\n        content: '';\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        background-color: #000;\n        opacity: 40%;\n        z-index: -1;\n    }\n"])),(function(n){var e=n.img;return"url(".concat(e,")")})),cn=function(n){var e=n.itemList,t=Object(F.useContext)(M).openItem.setOpenItem;return Object(K.jsx)(en,{children:e.map((function(n){return Object(K.jsxs)(tn,{img:n.img,onClick:function(){return t(n)},children:[Object(K.jsx)("p",{children:n.name}),Object(K.jsx)("p",{children:_(n.price)})]},n.id)}))})},rn=R.b.div(x||(x=Object(N.a)(["\n    width: 100%;\n    background-position: center;\n    background-size: cover;\n"]))),on=R.b.div(h||(h=Object(N.a)(["\n    background-color: #33d9de;\n    color: #002878;\n    width: 400px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n"]))),an=R.b.h2(O||(O=Object(N.a)(["\n    text-align: center;\n    font-weight: 400;\n    line-height: 68px;\n    margin-bottom: 30px;\n"]))),sn=R.b.div(g||(g=Object(N.a)(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 40px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    z-index: 20;\n"]))),bn=R.b.div(f||(f=Object(N.a)(["\n    max-width: 500px;\n    margin: 0 auto;\n    column-count: 2;\n    column-gap: 5px;\n"]))),dn=R.b.label(m||(m=Object(N.a)(["\n    cursor: pointer;\n    display: block;\n"]))),un=R.b.div(v||(v=Object(N.a)(["\n    display: flex;\n    margin: 0 35px 30px;\n    & span:first-child {\n        flex-grow: 1;\n    }\n"]))),jn=R.b.span(k||(k=Object(N.a)(["\n    text-align: right;\n    width: 120px;\n    margin-left: 5px;\n"]))),pn=t(18),ln=t.n(pn),xn=t(27),hn=t(7),On=t.p+"static/media/banner.7c11c243.png",gn=R.b.main(w||(w=Object(N.a)(["\n    background-color: #ccc;\n    margin-top: 80px;\n    margin-left: 380px;\n"]))),fn=R.b.section(y||(y=Object(N.a)(["\n    padding: 30px;\n"]))),mn=R.b.h2(C||(C=Object(N.a)(["\n    font-size: 32px;\n    color: #002878;\n"]))),vn=Object(R.b)(rn)(I||(I=Object(N.a)(["\n    background-image: url(",");\n    height: 210px;\n"])),On),kn=function(){var n=function(){var n=Object(F.useState)(null),e=Object(hn.a)(n,2),t=e[0],c=e[1],r=Object(F.useState)(null),i=Object(hn.a)(r,2),o=i[0],a=i[1];return Object(F.useEffect)((function(){Object(xn.a)(ln.a.mark((function n(){var e,t;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("DB.json");case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,c(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()}),[]),{responce:t,error:o}}(),e=n.responce;return Object(K.jsxs)(gn,{children:[Object(K.jsx)(vn,{}),n.responce?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(fn,{children:[Object(K.jsx)(mn,{children:"\u0411\u0443\u0440\u0433\u0435\u0440\u044b"}),Object(K.jsx)(cn,{itemList:e.burger})]}),Object(K.jsxs)(fn,{children:[Object(K.jsx)(mn,{children:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438 / \u041d\u0430\u043f\u0438\u0442\u043a\u0438"}),Object(K.jsx)(cn,{itemList:e.other})]})]}):n.error?Object(K.jsx)("div",{children:"Sorry, we will fix it soon..."}):Object(K.jsx)("div",{children:"Loading..."})]})},wn=t(19),yn=t(9),Cn=R.b.div(z||(z=Object(N.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),In=R.b.input(S||(S=Object(N.a)(["\n    width: 40px;\n    font-size: 20px;\n    background-color: #33d9de;\n    border: none;\n    text-align: center;\n"]))),zn=R.b.button(T||(T=Object(N.a)(["\n    background-color: #002878;\n    border: none;\n    border-radius: 3px;\n    width: 30px;\n    height: 30px;\n    color: #33d9de;\n\n"])));function Sn(){var n=Object(F.useContext)(A).counter,e=n.count,t=n.onChange,c=n.validCount;return Object(K.jsxs)(Cn,{children:[Object(K.jsx)("span",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(K.jsxs)("div",{children:[Object(K.jsx)(zn,{disabled:e<=1,onClick:function(){return c(e-1)},children:"-"}),Object(K.jsx)(In,{type:"number",min:"1",max:"100",onChange:t,value:e}),Object(K.jsx)(zn,{disabled:e>=100,onClick:function(){return c(+e+1)},children:"+"})]})]})}var Tn;var Fn,Ln=R.b.input(Tn||(Tn=Object(N.a)(["\n    cursor: pointer;\n    margin-right: 5px;\n"])));function Pn(){var n=Object(F.useContext)(A).toppings,e=n.toppings,t=n.checkToppings;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u043a\u0438:"}),Object(K.jsx)(bn,{children:e.map((function(n,e){return Object(K.jsxs)(dn,{children:[Object(K.jsx)(Ln,{type:"checkbox",checked:n.checked,onChange:function(){return t(e)}}),n.name]},e)}))})]})}var Bn,Dn,Nn,Rn,En,Mn=R.b.input(Fn||(Fn=Object(N.a)(["\n    cursor: pointer;\n    margin-right: 5px;\n"])));function An(){var n=Object(F.useContext)(M).openItem.openItem,e=Object(F.useContext)(A).choices,t=e.choice,c=e.changeChoices;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h3",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435:"}),Object(K.jsx)(bn,{children:n.choices.map((function(n){return Object(K.jsxs)(dn,{children:[Object(K.jsx)(Mn,{type:"radio",name:"choices",checked:t===n,value:n,onChange:c}),n]},n)}))})]})}var Un,Wn,Jn,Qn,Gn,Kn,Xn,Yn,qn,Hn,Vn,Zn,$n,_n=R.b.div(Bn||(Bn=Object(N.a)(["\n    background-color: #33d9de;\n    width: 600px;\n    height: 600px;\n    color: #002878;\n    /*transform: translateY(-5%);*/\n    /*box-shadow: 0px 0px 5px 3px rgba(0, 40, 120, 0.3);*/\n"]))),ne=Object(R.b)(rn)(Dn||(Dn=Object(N.a)(["\n    height: 200px;\n    background-image: url(",");\n"])),(function(n){return n.img})),ee=R.b.section(Nn||(Nn=Object(N.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 200px);\n    padding: 30px;\n"]))),te=R.b.div(Rn||(Rn=Object(N.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-size: 24px;\n    font-weight: 700;\n    font-family: 'Pacifico', cursive;\n"]))),ce=R.b.div(En||(En=Object(N.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),re=function(){var n=Object(F.useContext)(M),e=n.openItem,t=e.openItem,c=e.setOpenItem,r=n.orders,i=r.orders,o=r.setOrders,a=function(n){var e=Object(F.useState)(n||1),t=Object(hn.a)(e,2),c=t[0],r=t[1],i=function(n){r(n=n<1?1:n>100?100:n)};return{count:c,setCount:r,onChange:function(n){var e=n.target.value.replace(/^0+/,"");i(e)},validCount:i}}(t.count),s=function(n){var e=n.topping?n.topping:n.toppings?function(n){return n.map((function(n){return{name:n,checked:!1}}))}(n.toppings):[],t=Object(F.useState)(e),c=Object(hn.a)(t,2),r=c[0],i=c[1];return{toppings:r,checkToppings:function(n){i(r.map((function(e,t){var c=Object(yn.a)({},e);return t===n&&(c.checked=!c.checked),c})))}}}(t),b=function(n){var e=Object(F.useState)(),t=Object(hn.a)(e,2),c=t[0],r=t[1];return{choice:c,changeChoices:function(n){r(n.target.value)}}}(),d=t.index>-1,u=Object(yn.a)(Object(yn.a)({},t),{},{count:a.count,topping:s.toppings,choice:b.choice});return Object(K.jsx)(A.Provider,{value:{choices:b,toppings:s,counter:a},children:Object(K.jsx)(sn,{id:"overlay",onClick:function(n){"overlay"===n.target.id&&c(null)},children:Object(K.jsxs)(_n,{id:"modal",children:[Object(K.jsx)(ne,{img:t.img}),Object(K.jsxs)(ee,{children:[Object(K.jsxs)(te,{children:[Object(K.jsx)("div",{children:t.name}),Object(K.jsx)("div",{children:_(t.price)})]}),Object(K.jsx)(Sn,{})," ",t.toppings&&Object(K.jsx)(Pn,{}),t.choices&&Object(K.jsx)(An,{}),Object(K.jsxs)(ce,{children:[Object(K.jsx)("span",{children:"\u0426\u0435\u043d\u0430"}),Object(K.jsx)("span",{children:_(nn(u))})]}),Object(K.jsx)(Q,{onClick:d?function(){var n=Object(wn.a)(i);n[t.index]=u,o(n),c(null)}:function(){o([].concat(Object(wn.a)(i),[u])),c(null)},disabled:u.choices&&!u.choice,children:d?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})})},ie=t.p+"static/media/trash.eb1a306d.svg",oe=R.b.button(Un||(Un=Object(N.a)(["\n    width: 24px;\n    height: 24px;\n    border-color: transparent;\n    background-color: transparent;\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n"])),ie),ae=R.b.li(Wn||(Wn=Object(N.a)(["\n    display: flex;\n    margin: 15px 0;\n    flex-wrap: wrap;\n    cursor: pointer;\n\n"]))),se=R.b.span(Jn||(Jn=Object(N.a)(["\n    flex-grow: 1;\n"]))),be=R.b.span(Qn||(Qn=Object(N.a)(["\n    margin-left: 5px;\n    margin-right: 10px;\n    width: 120px;\n    text-align: right;\n"]))),de=R.b.div(Gn||(Gn=Object(N.a)(["\n    color: #9a9a9a;\n    font-size: 14px;\n    width: 100%;\n"]))),ue=R.b.div(Kn||(Kn=Object(N.a)(["\n    color: #9a9a9a;\n    font-size: 14px;\n    width: 100%;\n"]))),je=function(n){var e=n.order,t=n.index,c=n.deleteItem,r=Object(F.useContext)(M).openItem.setOpenItem,i=e.topping.filter((function(n){return n.checked})).map((function(n){return n.name})).join(", "),o=Object(F.useRef)(null);return Object(K.jsxs)(ae,{onClick:function(n){return n.target!==o.current&&r(Object(yn.a)(Object(yn.a)({},e),{},{index:t}))},children:[" ",Object(K.jsx)(se,{children:e.name}),Object(K.jsx)("span",{children:e.count}),Object(K.jsx)(be,{children:_(nn(e))}),Object(K.jsx)(oe,{ref:o,onClick:function(){return c(t)}}),i&&Object(K.jsxs)(de,{children:["\u0414\u043e\u0431\u0430\u0432\u043a\u0438: ",i]}),e.choice&&Object(K.jsxs)(ue,{children:["\u0412\u0430\u0448 \u0432\u044b\u0431\u043e\u0440: ",e.choice]})]})},pe=R.b.section(Xn||(Xn=Object(N.a)(["\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    top: 80px;\n    left: 0;\n    background: #fff;\n    width: 380px;\n    height: calc(100% - 80px);\n    box-shadow: 4px 0px 5px rgba(0, 40, 120, 0.25);\n    padding: 20px;\n"]))),le=R.b.div(Yn||(Yn=Object(N.a)(["\n    flex-grow: 1; {/*\u0440\u0430\u0441\u0442\u044f\u043d\u0443\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442 */}\n"]))),xe=R.b.ul(qn||(qn=Object(N.a)(["\n\n"]))),he=R.b.p(Hn||(Hn=Object(N.a)(["\n    text-align: center;\n"]))),Oe=function(){var n=Object(F.useContext)(M),e=n.auth,t=e.authentification,c=e.logIn,r=n.orders,i=r.orders,o=r.setOrders,a=n.orderConfirm.setOpenOrderConfirm,s=function(n){var e=i.filter((function(e,t){return n!==t}));o(e)},b=i.reduce((function(n,e){return nn(e)+n}),0),d=i.reduce((function(n,e){return+e.count+n}),0);return Object(K.jsxs)(pe,{children:[Object(K.jsx)(an,{children:"\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417"}),Object(K.jsx)(le,{children:i.length?Object(K.jsxs)(xe,{children:["       ",i.map((function(n,e){return Object(K.jsx)(je,{order:n,deleteItem:s,index:e},e)}))]}):Object(K.jsx)(he,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u0443\u0441\u0442"})}),i.length?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(un,{children:[Object(K.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(K.jsxs)("span",{children:[d," \u0448\u0442."]}),Object(K.jsx)(jn,{children:_(b)})]}),Object(K.jsx)(Q,{onClick:function(){return t?a(!0):c()},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})]}):null]})},ge=R.b.h3(Vn||(Vn=Object(N.a)(["\n    text-align: center;\n    margin-bottom: 30px;\n"]))),fe={itemName:["name"],price:["price"],count:["count"],topping:["topping",function(n){return n.filter((function(n){return n.checked})).map((function(n){return n.name}))},function(n){return n.length?n:"no topping"}],choice:["choice",function(n){return n||"no choices"}]},me=function(n,e,t,c){var r=e.map(function(n){var e=Object.keys(n);return function(t){return e.reduce((function(e,c){return e[c]=n[c].reduce((function(n,e,c){return c?e(n):t[e]}),null),e}),{})}}(fe));n.ref("orders").push().set({nameClient:t.displayName,email:t.email,order:r}),c(!0)},ve=function(){var n=Object(F.useContext)(M),e=n.auth.authentification,t=n.orders,c=t.orders,r=t.setOrders,i=n.orderConfirm.setOpenOrderConfirm,o=n.thanks.setOpenThanks,a=(0,n.firebaseDatabase)(),s=c.reduce((function(n,e){return nn(e)+n}),0);return Object(K.jsx)(sn,{id:"confirm-overlay",onClick:function(n){"confirm-overlay"===n.target.id&&i(!1)},children:Object(K.jsxs)(on,{children:[Object(K.jsx)(an,{children:e.displayName}),Object(K.jsx)(ge,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),Object(K.jsxs)(un,{children:[Object(K.jsx)("span",{children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430:"}),Object(K.jsx)(jn,{children:_(s)})]}),Object(K.jsx)(Q,{onClick:function(){i(!1),me(a,c,e,o),r([])},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})})},ke=Object(R.b)(on)(Zn||(Zn=Object(N.a)(["\n    background-color: #002878;\n    color: #33d9de;\n"]))),we=Object(R.b)(Q)($n||($n=Object(N.a)(["\n    box-shadow: 0 16px 32px 0 rgba(51, 217, 222, .35);\n"]))),ye=function(){var n=Object(F.useContext)(M),e=n.auth.authentification,t=n.thanks.setOpenThanks;return Object(K.jsx)(sn,{id:"thanks-overlay",onClick:function(n){"thanks-overlay"===n.target.id&&t(!1)},children:Object(K.jsxs)(ke,{children:[Object(K.jsx)(an,{children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437,"}),Object(K.jsx)(an,{children:e.displayName}),Object(K.jsx)(we,{onClick:function(){return t(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};D.a.initializeApp({apiKey:"AIzaSyB01WzjQ2NOa3yW-6lofRB1xDcEu5-pQ-U",authDomain:"mrmagamba.firebaseapp.com",databaseURL:"https://mrmagamba-default-rtdb.europe-west1.firebasedatabase.app",projectId:"mrmagamba",storageBucket:"mrmagamba.appspot.com",messagingSenderId:"1069543412935",appId:"1:1069543412935:web:2a8f5046979020db591ae2"});var Ce=function(){var n=function(n){var e=Object(F.useState)(null),t=Object(hn.a)(e,2),c=t[0],r=t[1],i=n(),o=new n.GoogleAuthProvider;return Object(F.useEffect)((function(){i.onAuthStateChanged((function(n){r(n||null)}))}),[i,c]),{authentification:c,logIn:function(){return i.signInWithPopup(o)},logOut:function(){return i.signOut().catch((function(n){return console.error()}))}}}(D.a.auth),e=function(){var n=Object(F.useState)(null),e=Object(hn.a)(n,2);return{openItem:e[0],setOpenItem:e[1]}}(),t=function(){var n=Object(F.useState)([]),e=Object(hn.a)(n,2);return{orders:e[0],setOrders:e[1]}}(),c=function(){var n=Object(F.useState)(!1),e=Object(hn.a)(n,2);return{openOrderConfirm:e[0],setOpenOrderConfirm:e[1]}}(),r=function(){var n=Object(F.useState)(!1),e=Object(hn.a)(n,2);return{openThanks:e[0],setOpenThanks:e[1]}}();return function(n){Object(F.useEffect)((function(){document.title=n?n.name:"MrMagamba"}),[n])}(e.openItem),Object(K.jsxs)(M.Provider,{value:{auth:n,openItem:e,orders:t,orderConfirm:c,thanks:r,firebaseDatabase:D.a.database},children:[Object(K.jsx)(E,{}),Object(K.jsx)($,{}),Object(K.jsx)(Oe,{}),Object(K.jsx)(kn,{})," ",e.openItem&&Object(K.jsx)(re,{}),c.openOrderConfirm&&Object(K.jsx)(ve,{}),r.openThanks&&Object(K.jsx)(ye,{})]})},Ie=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),i(n),o(n)}))};B.a.render(Object(K.jsx)(L.a.StrictMode,{children:Object(K.jsx)(Ce,{})}),document.getElementById("root")),Ie()}},[[43,1,2]]]);
//# sourceMappingURL=main.1f97153c.chunk.js.map