(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),s=function(e){var n=e.searchName,t=e.setSearchName;return r.a.createElement("div",null,r.a.createElement("p",null,"filter shown with",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}})))},l=t(3),i=t.n(l),m="/api/persons",f=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},h=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.persons,t=e.setPersons,a=e.newName,c=e.setNewName,u=e.newNumber,o=e.setNewNumber,s=e.DisplayMessage;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={name:a,number:u},l=n.find((function(e){return e.name===r.name&&e.number!==r.number}));void 0!==l?window.confirm("".concat(a," is already added to phonebook, replace the old number with a new one?"))&&h(l.id,r).then((function(e){t(n.map((function(n){return n.id!==l.id?n:e}))),s(!1,"Successfully Number changed about ".concat(r.name))})):!0===n.some((function(e){return e.name===r.name&&e.number===r.number}))?alert("".concat(a," is alreadey added to phonebook")):d(r).then((function(e){t(n.concat(e)),s(!1,"Successfully Added ".concat(a))})).catch((function(e){return s(!0,e.response.data.error)})),c(""),o("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:a,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:function(e){o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.persons,t=e.setPersons,a=e.searchName,c=e.DisplayMessage;return r.a.createElement("ul",null,n.filter((function(e){return e.name.includes(a)||e.name.toLowerCase().includes(a)})).map((function(e){return r.a.createElement("li",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a=e.name,r=e.id,void(window.confirm("Delete ".concat(a," ?"))&&b(r).then((function(){t(n.filter((function(e){return e.id!==r})))})).catch((function(e){c(!0,"Information of ".concat(a," has already been removed from server"))})));var a,r}},"delete"))})))},v=(t(36),function(e){var n=e.isErr,t=e.message;return null===t?null:n?r.a.createElement("div",{className:"error"},t):r.a.createElement("div",{className:"success"},t)}),N=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),i=l[0],m=l[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),h=b[0],N=b[1],w=Object(a.useState)(""),g=Object(o.a)(w,2),j=g[0],O=g[1],y=Object(a.useState)(null),S=Object(o.a)(y,2),k=S[0],D=S[1],C=Object(a.useState)(!1),P=Object(o.a)(C,2),M=P[0],A=P[1];Object(a.useEffect)((function(){f().then((function(e){return c(e)}))}),[]);var I=function(e,n){D(n),A(e),setTimeout((function(){D(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{isErr:M,message:k}),r.a.createElement(s,{searchName:i,setSearchName:m}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(p,{persons:t,setPersons:c,newName:h,setNewName:N,newNumber:j,setNewNumber:O,DisplayMessage:I}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(E,{persons:t,setPersons:c,searchName:i,DisplayMessage:I}))};u.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0176b9d4.chunk.js.map