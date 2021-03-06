(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){"use strict";var r=a(1),n=Object(r.createContext)();t.a=n},41:function(e,t,a){},42:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(34),c=a.n(s),i=(a(41),a(15)),o=a(3),l=(a(42),a(43),a(6)),u=a.n(l),d=a(2),j=a.n(d),p=a(11),b=a(10),m=a(13),h=a.n(m),f=a(36),O=a(4),g="USER_LOADING",x="AUTH_ERROR",v="LOGIN_SUCCESS",y="LOGIN_FAIL",w="LOGOUT_SUCCESS",N="REGISTER_SUCCESS",L="REGISTER_FAIL",S="URLS_LOADING",E="GET_ERROR",C="GET_URLS",k="ADD_URL",T="UPDATE_URL",P="DELETE_URL",R=function(e,t){switch(t.type){case S:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case k:return Object(O.a)(Object(O.a)({},e),{},{urls:[].concat(Object(f.a)(e.urls),[t.payload])});case T:return Object(O.a)(Object(O.a)({},e),{},{urls:e.urls.map((function(e){return e._id===t.payload.id?t.payload.urlRecord:e}))});case P:return Object(O.a)(Object(O.a)({},e),{},{urls:e.urls.filter((function(e){return e._id!==t.payload}))});case C:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,urls:t.payload});case E:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},I=a(23),U=a(0),_=function(e){var t=Object(r.useReducer)(R,{loading:!1,urls:[]}),a=Object(b.a)(t,2),n=a[0],s=a[1],c=function(){var e=Object(p.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"POST",header:{"Content-Type":"application/json"},url:"/url/add",data:t,timeout:"4000"},e.next=4,h()(a);case 4:r=e.sent,setTimeout(Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(r.data.data);case 2:t=e.sent,s({type:k,payload:t});case 4:case"end":return e.stop()}}),e)}))),500),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(p.a)(j.a.mark((function e(t,a){var r,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"PUT",header:{"Content-Type":"application/json"},url:"/url/update",data:t,timeout:"4000"},e.next=4,h()(r);case 4:return n=e.sent,e.next=7,u(n.data.data);case 7:c=e.sent,s({type:T,payload:{urlRecord:c,id:a}}),e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),o=function(){var e=Object(p.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"DELETE",url:"/url/delete/".concat(t),timeout:"4000"},e.next=4,h()(a);case 4:s({type:P,payload:t}),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(p.a)(j.a.mark((function e(){var t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(d()),t={method:"GET",url:"/url/getall",timeout:"4000"},e.next=5,h()(t);case 5:for(a=(a=e.sent).data.data,r=0;r<a.length;r++)a[r]=a[r].url;s({type:C,payload:a}),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),s({type:E}),e.abrupt("return",Promise.reject(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(p.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"GET",url:"/url/".concat(t),timeout:"4000"},e.next=4,h()(a);case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){return{type:S}};return Object(U.jsx)(I.a.Provider,{value:{urls:n.urls,loading:n.loading,getUrls:l,addUrl:c,updateUrl:i,deleteUrl:o},children:e.children})},A=Object(r.createContext)(),G=function(){var e=Object(r.useContext)(A).userLogin,t=Object(r.useState)(""),a=Object(b.a)(t,2),n=a[0],s=a[1],c=Object(r.useState)(""),i=Object(b.a)(c,2),o=i[0],l=i[1];return Object(U.jsxs)("div",{id:"signin-modal",className:"modal modal-fixed-footer",children:[Object(U.jsxs)("div",{className:"modal-content center-align",style:{padding:"2rem 2.5rem 1rem 2.5rem"},children:[Object(U.jsx)("i",{className:" fas fa-times modal-close close-btn"}),Object(U.jsx)("h3",{children:"Sign In"}),Object(U.jsx)("div",{style:{paddingTop:"2rem"},children:Object(U.jsxs)("form",{id:"signin",children:[Object(U.jsxs)("div",{className:"input-field",children:[Object(U.jsx)("i",{className:"fas fa-paper-plane prefix"}),Object(U.jsx)("input",{id:"login_email",type:"email",placeholder:"Email",onChange:function(e){return s(e.target.value)},value:n})]}),Object(U.jsxs)("div",{className:"input-field",children:[Object(U.jsx)("i",{className:"fas fa-key prefix"}),Object(U.jsx)("input",{id:"login_password",type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)},value:o})]}),Object(U.jsx)("div",{className:"input-feild",style:{marginTop:"2rem"},children:Object(U.jsx)("button",{id:"loginForm-btn",className:"btn waves-effect light-blue sign-btn",type:"submit",form:"signin",name:"action",onClick:function(t){t.preventDefault();var a=document.getElementById("loginForm-btn");a.classList.add("button--loading");var r="";""===n||""===o?r="Please Enter User Credentials":!1===/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(n)&&(r="Please Enter Proper Email Id"),""===r?e({email:n,password:o}).then((function(e){u.a.toast({html:"Login Success..."}),setTimeout((function(){s(""),l(""),a.classList.remove("button--loading"),u.a.Modal.getInstance(document.getElementById("signin-modal")).close()}),500)})).catch((function(e){u.a.toast({html:"".concat(e.response.status,"! ").concat(e.response.data.error||"Internal Server Error")}),a.classList.remove("button--loading")})):(u.a.toast({html:"".concat(r)}),a.classList.remove("button--loading"))},children:"Sign In"})})]})})]}),Object(U.jsx)("div",{className:"modal-footer",children:Object(U.jsxs)("p",{className:"center w-100",children:["Don't have a account?"," ",Object(U.jsx)("a",{href:"#signup-modal",className:"modal-trigger light-blue-text modal-close",children:"Create One"})]})})]})},D=function(){var e=Object(r.useContext)(A).userRegister,t=Object(r.useState)(""),a=Object(b.a)(t,2),n=a[0],s=a[1],c=Object(r.useState)(""),i=Object(b.a)(c,2),o=i[0],l=i[1],d=Object(r.useState)(""),j=Object(b.a)(d,2),p=j[0],m=j[1],h=Object(r.useState)(""),f=Object(b.a)(h,2),O=f[0],g=f[1];return Object(U.jsxs)("div",{id:"signup-modal",className:"modal",children:[Object(U.jsxs)("div",{className:"modal-content center-align",style:{padding:"2rem 2.5rem 1rem 2.5rem"},children:[Object(U.jsx)("i",{className:" fas fa-times modal-close close-btn"}),Object(U.jsx)("h3",{children:"Create Account"}),Object(U.jsx)("p",{className:"grey-text",children:"It's a free and fast process"}),Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"input-field",children:[Object(U.jsx)("i",{className:"fas fa-user prefix"}),Object(U.jsx)("input",{id:"register_name",type:"text",placeholder:"Name",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(U.jsxs)("div",{className:"input-field",children:[Object(U.jsx)("i",{className:"fas fa-paper-plane prefix"}),Object(U.jsx)("input",{id:"register_email",type:"email",placeholder:"Email",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(U.jsxs)("div",{className:"input-field",children:[Object(U.jsx)("i",{className:"fas fa-key prefix"}),Object(U.jsx)("input",{id:"register_password",type:"password",placeholder:"Password",value:p,onChange:function(e){return m(e.target.value)}})]}),Object(U.jsxs)("div",{className:"input-field",children:[Object(U.jsx)("i",{className:"fas fa-check-double prefix"}),Object(U.jsx)("input",{id:"password_confirm",type:"password",placeholder:"Confirm Password",value:O,onChange:function(e){g(e.target.value),e.target.value!==p?e.target.style.color="red":e.target.style.color="green"}})]}),Object(U.jsx)("div",{className:"input-feild",style:{marginTop:"2rem"},children:Object(U.jsx)("button",{id:"registerForm-btn",className:"btn waves-effect light-blue sign-btn",type:"submit",name:"action",onClick:function(t){t.preventDefault();var a=document.getElementById("registerForm-btn");a.classList.add("button--loading");var r="";""===n||""===o||""===p?r="Please Enter All Details":!1===/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(o)?r="Please Enter Proper Email Id":!1===/^\S{5,}\S$/.test(p)?r="Password must be atleast 6 character Long without spaces":p!==O&&(r="Password and Confirm Password do not match",g("")),""===r?e({name:n,email:o,password:p}).then((function(e){u.a.toast({html:"User Registered Successfully..."}),setTimeout((function(){s(""),l(""),m(""),g(""),a.classList.remove("button--loading"),u.a.Modal.getInstance(document.getElementById("signup-modal")).close()}),500)})).catch((function(e){u.a.toast({html:"".concat(e.response.status,"! ").concat(e.response.data.error||"Internal Server Error")}),a.classList.remove("button--loading")})):(u.a.toast({html:"".concat(r)}),a.classList.remove("button--loading"))},children:"Sign Up"})})]})]}),Object(U.jsx)("div",{className:"modal-footer",children:Object(U.jsx)("p",{className:"center-align grey-text",children:"* You can shorten maximum of ten url at a time for free"})})]})},F=function(){var e=Object(r.useContext)(A),t=e.isAuthenticated,a=e.userLogout,s=Object(o.f)();return Object(U.jsx)("nav",{style:{backgroundColor:"#0c374b",height:"70px",boxShadow:"none"},children:Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:"nav-wrapper",children:[Object(U.jsx)("span",{className:"brand-logo left",children:Object(U.jsx)(i.b,{to:"/",children:"urlShred"})}),Object(U.jsx)("ul",{className:"right",children:t?Object(U.jsxs)(n.a.Fragment,{children:[Object(U.jsx)("li",{className:"valign-wrapper",children:Object(U.jsxs)(i.b,{to:"/user",children:[Object(U.jsx)("i",{className:"far fa-user",style:{marginRight:"0.5rem"}}),"User Page"]})}),Object(U.jsx)("li",{className:"valign-wrapper",children:Object(U.jsxs)("a",{href:"",onClick:function(e){e.preventDefault(),a().then((function(e){u.a.toast({html:"Logout Success..."}),s.push("/")})).catch((function(e){u.a.toast({html:"".concat(e.response.status," ").concat(e.response.data.error||"Internal Server Error")})}))},children:[Object(U.jsx)("i",{className:"fas fa-door-open",style:{marginRight:"0.5rem"}}),"Log Out"]})})]}):Object(U.jsxs)(n.a.Fragment,{children:[Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"#signin-modal",className:"modal-trigger",onClick:function(e){return e.preventDefault()},children:"Login"})}),Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"#signup-modal",className:"modal-trigger",onClick:function(e){return e.preventDefault()},children:"Register"})})]})})]})})})},B=a.p+"static/media/img.7d9fa380.png",M=function(){return Object(U.jsx)("div",{className:"centerImage",children:Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:"row",children:[Object(U.jsxs)("div",{className:"col s12 m8",style:{color:"white"},children:[Object(U.jsx)("h1",{children:"Short links, big results"}),Object(U.jsx)("p",{children:"URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator may be made substantially shorter and still direct to the required page. This is achieved by using a redirect which links to the web page that has a long URL."}),Object(U.jsx)("div",{style:{marginTop:"4rem"}}),Object(U.jsx)("a",{className:"btn btn-large brown",href:"#show-pricing",children:"Get Started for Free"})]}),Object(U.jsx)("div",{className:"col s12 m4",style:{marginTop:"2rem"},children:Object(U.jsx)("img",{src:B,alt:"brand",style:{width:"100%",height:"auto"}})})]})})})},W=(a(68),Object(r.lazy)((function(){return a.e(3).then(a.bind(null,71))}))),$=function(){var e=Object(r.useContext)(A).userGet;return Object(r.useEffect)((function(){u.a.AutoInit(),e()}),[]),Object(U.jsx)("div",{className:"App",children:Object(U.jsxs)(i.a,{children:[Object(U.jsx)(G,{}),Object(U.jsx)(D,{}),Object(U.jsx)(F,{}),Object(U.jsxs)(o.c,{children:[Object(U.jsx)(o.a,{exact:!0,path:"/",component:M}),Object(U.jsx)(_,{children:Object(U.jsx)(r.Suspense,{fallback:Object(U.jsx)("div",{className:"progress",style:{position:"absolute",top:"50%",left:"25%",width:"50%",backgroundColor:"#c0e7fa"},children:Object(U.jsx)("div",{className:"indeterminate",style:{backgroundColor:"#1c9fe0"}})}),children:Object(U.jsx)(o.a,{path:"/user",component:W})})})]})]})})},q=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,70)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))},J=function(e,t){switch(t.type){case g:return Object(O.a)(Object(O.a)({},e),{},{isLoading:!0});case v:case N:return Object(O.a)(Object(O.a)({},e),{},{user:t.payload,isAuthenticated:!0,isLoading:!1});case x:case y:case w:case L:return Object(O.a)(Object(O.a)({},e),{},{user:null,isAuthenticated:!1,isLoading:!1});default:return e}},z=function(e){var t=Object(r.useReducer)(J,{isAuthenticated:!1,isLoading:!1,user:null}),a=Object(b.a)(t,2),n=a[0],s=a[1],c=function(){var e=Object(p.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(u()),a={method:"POST",header:{"Content-Type":"application/json"},url:"/auth/login",data:t,timeout:"4000"},e.next=5,h()(a);case 5:r=e.sent,s({type:v,payload:r.data.data}),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),s({type:y}),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(p.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(u),a={method:"POST",header:{"Content-Type":"application/json"},url:"/auth/register",data:t,timeout:"4000"},e.next=5,h()(a);case 5:r=e.sent,s({type:N,payload:r.data.data}),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),s({type:L}),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(u),t={method:"GET",url:"/auth/logout",timeout:"4000"},e.next=4,h()(t);case 4:s({type:w});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(p.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(u()),t={method:"GET",url:"/auth/getme",timeout:"4000"},e.next=5,h()(t);case 5:a=e.sent,s({type:v,payload:a.data.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s({type:x});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){return{type:g}};return Object(U.jsx)(A.Provider,{value:{isAuthenticated:n.isAuthenticated,isLoading:n.isLoading,user:n.user,userLogin:c,userRegister:i,userLogout:o,userGet:l},children:e.children})};c.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(z,{children:Object(U.jsx)($,{})})}),document.getElementById("root")),q()}},[[69,1,2]]]);
//# sourceMappingURL=main.bde645c4.chunk.js.map