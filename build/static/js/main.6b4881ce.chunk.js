(this["webpackJsonpbluehive-test-app-frontend"]=this["webpackJsonpbluehive-test-app-frontend"]||[]).push([[0],{54:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(23),a=n.n(i),s=n(7),o=(n(53),n(54),n(10)),l=n(8),j=r.a.createContext(),u=j.Provider,d=j,b=n(81),h=n(82),O=n(1);function x(){var e=Object(c.useContext)(d),t=e.user,n=e.unsetUser,r=Object(l.g)(),i=t.id?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.b,{className:"nav-link",to:"/invoices",children:"Invoices"}),Object(O.jsx)(b.a.Link,{onClick:function(){n(),r.push("/login")},children:"Logout"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.b,{className:"nav-link",to:"/register",children:"Register"}),Object(O.jsx)(o.b,{className:"nav-link",to:"/login",children:"Log In"})]});return Object(O.jsxs)(h.a,{bg:"light",expand:"lg",children:[Object(O.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Test App"}),Object(O.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(O.jsx)(b.a,{className:"mr-auto",children:Object(O.jsx)(o.b,{className:"nav-link",to:"/",children:"Home"})}),Object(O.jsx)(b.a,{children:i})]})]})}var m=n(74),p=n(47),v=n(75);function g(e){var t=e.bannerProps,n=t.title,r=t.content,i=t.destination,a=t.label,s=Object(c.useContext)(d).user;return Object(O.jsx)(m.a,{children:Object(O.jsx)(p.a,{children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)("h1",{children:n}),Object(O.jsx)("p",{children:r}),null!=s.id?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(o.b,{className:"btn homebtn",to:"/invoices",children:"Create Invoice"})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(o.b,{className:"btn homebtn",to:i,children:a})})]})})})}function f(){return Object(O.jsxs)(m.a,{children:[Object(O.jsx)(p.a,{xs:12,md:4,children:Object(O.jsx)("div",{className:"card-highlight",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Heading 1"}),Object(O.jsx)("hr",{className:"hr-highlight"}),Object(O.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea."})]})})}),Object(O.jsx)(p.a,{xs:12,md:4,children:Object(O.jsx)("div",{className:"card-highlight",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Heading 2"}),Object(O.jsx)("hr",{className:"hr-highlight"}),Object(O.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea."})]})})}),Object(O.jsx)(p.a,{xs:12,md:4,children:Object(O.jsx)("div",{className:"card-highlight",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Heading 3"}),Object(O.jsx)("hr",{className:"hr-highlight"}),Object(O.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea."})]})})})]})}var y=n(76);function N(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{bannerProps:{title:"Invoice Database Web App",content:"Free For All and No Advertisements!",destination:"/register",label:"Signup Now!"}}),Object(O.jsx)(y.a,{children:Object(O.jsx)(f,{})})]})}var C=n(80),S=n(77),I=n(16),P=n.n(I);function A(){var e=Object(l.g)(),t=Object(c.useContext)(d).user,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],a=r[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),b=u[0],h=u[1],x=Object(c.useState)(""),m=Object(s.a)(x,2),p=m[0],v=m[1],g=Object(c.useState)(""),f=Object(s.a)(g,2),N=f[0],I=f[1],A=Object(c.useState)(""),L=Object(s.a)(A,2),q=L[0],k=L[1],w=Object(c.useState)(!1),z=Object(s.a)(w,2),E=z[0],G=z[1];function D(t){t.preventDefault(),fetch("".concat("https://invoicing.centstudio.xyz","/users/checkEmail"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then((function(e){return e.json()})).then((function(t){!1===t?(fetch("".concat("https://invoicing.centstudio.xyz","/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:N,lastName:q,email:i,password:b})}).then((function(e){return e.json()})).then((function(e){!0===e?P.a.fire({title:"Success",icon:"success",text:"Registered Successfully"}):P.a.fire({title:"Error",icon:"error",text:"Check your details and try again"})})),e.push("/login")):P.a.fire({title:"Error",icon:"error",text:"Email already exist, Please use other email insted."})}))}return Object(c.useEffect)((function(){G(""!==N&&""!==q&&""!==b&&""!==i&&b===p)}),[i,b,p,N,q]),null!=t.id?Object(O.jsx)(l.a,{to:"/"}):Object(O.jsxs)(y.a,{style:{maxWidth:600},children:[Object(O.jsxs)(C.a,{className:"mt-3",onSubmit:function(e){return D(e)},children:[Object(O.jsxs)(C.a.Group,{children:[Object(O.jsx)(C.a.Label,{children:"First Name"}),Object(O.jsx)(C.a.Control,{type:"text",placeholder:"Enter First Name",value:N,onChange:function(e){return I(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{children:[Object(O.jsx)(C.a.Label,{children:"Last Name"}),Object(O.jsx)(C.a.Control,{type:"text",placeholder:"Enter Last Name",value:q,onChange:function(e){return k(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{children:[Object(O.jsx)(C.a.Label,{children:"Email Address"}),Object(O.jsx)(C.a.Control,{type:"email",placeholder:"Enter email",value:i,onChange:function(e){return a(e.target.value)},required:!0}),Object(O.jsx)(C.a.Text,{className:"text-muted",children:"We'll Never share your email with anyone else"})]}),Object(O.jsxs)(C.a.Group,{children:[Object(O.jsx)(C.a.Label,{children:"Password"}),Object(O.jsx)(C.a.Control,{type:"password",placeholder:"Enter Password",value:b,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{children:[Object(O.jsx)(C.a.Label,{children:"Verify Password:"}),Object(O.jsx)(C.a.Control,{type:"password",placeholder:"Verify Password",value:p,onChange:function(e){return v(e.target.value)},required:!0})]}),E?Object(O.jsx)(S.a,{variant:"info",type:"submit",children:Object(O.jsx)("b",{children:"Submit"})}):Object(O.jsx)(S.a,{variant:"danger",type:"submit",disabled:!0,children:"Submit"})]}),Object(O.jsxs)("div",{className:"text-muted small mt-4",children:[Object(O.jsx)("span",{children:"Aleady have an account? "}),Object(O.jsx)("span",{children:Object(O.jsx)(o.b,{className:"text-info",to:"/login",children:"Click Here"})})]})]})}function L(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),j=a[0],u=a[1],b=Object(c.useContext)(d),h=b.user,x=b.setUser,m=Object(c.useState)(!1),p=Object(s.a)(m,2),v=p[0],g=p[1];var f=function(e){fetch("".concat("https://invoicing.centstudio.xyz","/users/details"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){x({id:e._id,isAdmin:e.isAdmin})}))};return Object(c.useEffect)((function(){g(""!==n&&""!==j)}),[n,j]),null!=h.id?Object(O.jsx)(l.a,{to:"/"}):(console.log(h.id),Object(O.jsxs)(y.a,{style:{maxWidth:600,minHeight:500},children:[Object(O.jsxs)(C.a,{className:"mt-3",onSubmit:function(e){return function(e){e.preventDefault(),fetch("".concat("https://invoicing.centstudio.xyz","/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:j})}).then((function(e){return e.json()})).then((function(e){"undefined"!==typeof e.access?(localStorage.setItem("token",e.access),f(e.access)):P.a.fire({title:"Authentication failed",icon:"error",text:"Check your login details and try again"})}))}(e)},children:[Object(O.jsxs)(C.a.Group,{children:[Object(O.jsx)(C.a.Label,{children:"Email Address"}),Object(O.jsx)(C.a.Control,{type:"email",placeholder:"Enter email",value:n,onChange:function(e){return r(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{children:[Object(O.jsx)(C.a.Label,{children:"Password"}),Object(O.jsx)(C.a.Control,{type:"password",placeholder:"Enter Password",value:j,onChange:function(e){return u(e.target.value)},required:!0})]}),v?Object(O.jsx)(S.a,{variant:"info",type:"submit",children:Object(O.jsx)("b",{children:"Login"})}):Object(O.jsx)(S.a,{variant:"danger",type:"submit",disabled:!0,children:"Login"})]}),Object(O.jsxs)("div",{className:"text-muted small mt-4",children:[Object(O.jsx)("span",{children:"Don't have an account Yet? "}),Object(O.jsx)("span",{children:Object(O.jsx)(o.b,{className:"text-info",to:"/register",children:"Click Here"})})]})]}))}var q=n(78),k=n(79);function w(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),a=Object(s.a)(i,2),o=a[0],l=a[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(""),x=Object(s.a)(h,2),m=x[0],p=x[1],v=Object(c.useState)(""),g=Object(s.a)(v,2),f=g[0],N=g[1],I=Object(c.useState)(""),A=Object(s.a)(I,2),L=A[0],w=A[1],z=Object(c.useState)(""),E=Object(s.a)(z,2),G=E[0],D=E[1],T=Object(c.useState)(""),H=Object(s.a)(T,2),B=H[0],F=H[1],Q=Object(c.useState)(""),_=Object(s.a)(Q,2),J=_[0],U=_[1],W=Object(c.useState)(!1),R=Object(s.a)(W,2),V=R[0],Y=R[1],K=Object(c.useState)(!1),M=Object(s.a)(K,2),X=M[0],Z=M[1],$=Object(c.useState)(!1),ee=Object(s.a)($,2),te=ee[0],ne=ee[1],ce=function(){return Z(!1)},re=function(){Y(!1),b(""),p(""),N(""),w(""),D(""),F(""),U("")},ie=function(){fetch("".concat("https://invoicing.centstudio.xyz","/users/getAllInvoice"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){r(e.invoice)}))};Object(c.useEffect)((function(){ie()}),[]);return Object(c.useEffect)((function(){var e=n.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.invoiceNo}),Object(O.jsx)("td",{children:e.invoiceDate}),Object(O.jsx)("td",{children:e.customerName}),Object(O.jsx)("td",{children:e.productName}),Object(O.jsx)("td",{children:e.productQuantity}),Object(O.jsx)("td",{children:e.productPrice.toLocaleString()}),Object(O.jsx)("td",{children:e.totalInvoiceAmount.toLocaleString()}),Object(O.jsxs)("td",{className:"d-flex justify-content-center",children:[Object(O.jsx)(S.a,{className:"m-1",size:"sm",variant:"info",onClick:function(){return function(e){fetch("".concat("https://invoicing.centstudio.xyz","/users/getSpecificInvoice/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e._id),b(e._id),p(e.invoiceNo),N(e.invoiceDate),w(e.customerName),D(e.productName),F(e.productQuantity),U(e.productPrice)})),Y(!0)}(e._id)},children:"Update"}),Object(O.jsx)(S.a,{className:"m-1",size:"sm",variant:"danger",onClick:function(){return t=e._id,b(t),void ne(!0);var t},children:"Delete"})]})]},e._id)}));l(e)}),[n]),Object(O.jsxs)(y.a,{style:{minHeight:400},children:[Object(O.jsxs)("div",{className:"text-center my-4",children:[Object(O.jsx)("h2",{children:"DashBoard"}),Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)(S.a,{variant:"info",onClick:function(){return Z(!0)},children:"Add New Invoice"})})]}),Object(O.jsxs)(q.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm",className:"small text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Invoice No."}),Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("th",{children:"Customer Name"}),Object(O.jsx)("th",{children:"Product Name"}),Object(O.jsx)("th",{children:"Product Quantity"}),Object(O.jsx)("th",{children:"Product Price"}),Object(O.jsx)("th",{children:"Total Invoice Amount"}),Object(O.jsx)("th",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:o})]}),Object(O.jsx)(k.a,{show:V,onHide:re,children:Object(O.jsxs)(C.a,{onSubmit:function(e){return function(e){e.preventDefault(),fetch("".concat("https://invoicing.centstudio.xyz","/users/updateInvoice/").concat(d),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({invoiceNo:m,invoiceDate:f,customerName:L,productName:G,productQuantity:B,productPrice:J,totalInvoiceAmount:J*B})}).then((function(e){return e.json()})).then((function(e){!0===e?(re(),P.a.fire({title:"Success",icon:"success",text:"Invoice updated successfully",timer:4e3}),ie()):alert("failed")}))}(e)},children:[Object(O.jsx)(k.a.Header,{closeButton:!0,children:Object(O.jsx)(k.a.Title,{children:"Update Invoice"})}),Object(O.jsxs)(k.a.Body,{children:[Object(O.jsxs)(C.a.Group,{controlId:"invoiceNo",children:[Object(O.jsx)(C.a.Label,{children:"Invoice Number"}),Object(O.jsx)(C.a.Control,{type:"number",value:m,onChange:function(e){return p(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"invoiceDate",children:[Object(O.jsx)(C.a.Label,{children:"Invoice Date"}),Object(O.jsx)(C.a.Control,{type:"string",value:f,onChange:function(e){return N(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"customerName",children:[Object(O.jsx)(C.a.Label,{children:"Customer Name"}),Object(O.jsx)(C.a.Control,{type:"string",value:L,onChange:function(e){return w(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"productName",children:[Object(O.jsx)(C.a.Label,{children:"Product Name"}),Object(O.jsx)(C.a.Control,{type:"string",value:G,onChange:function(e){return D(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"productQuantity",children:[Object(O.jsx)(C.a.Label,{children:"Product Quantity"}),Object(O.jsx)(C.a.Control,{type:"number",value:B,onChange:function(e){return F(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"productPrice",children:[Object(O.jsx)(C.a.Label,{children:"Product Price"}),Object(O.jsx)(C.a.Control,{type:"number",value:J,onChange:function(e){return U(e.target.value)},required:!0})]})]}),Object(O.jsxs)(k.a.Footer,{children:[Object(O.jsx)(S.a,{variant:"secondary",onClick:re,children:"Cancel"}),Object(O.jsx)(S.a,{variant:"success",type:"submit",children:"Submit"})]})]})}),Object(O.jsx)(k.a,{show:X,onHide:ce,children:Object(O.jsxs)(C.a,{onSubmit:function(e){return function(e){e.preventDefault(),fetch("".concat("https://invoicing.centstudio.xyz","/users/createInvoice"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({invoiceNo:m,invoiceDate:f,customerName:L,productName:G,productQuantity:B,productPrice:J,totalInvoiceAmount:J*B})}).then((function(e){return e.json()})).then((function(e){!0===e?(ie(),ce(),P.a.fire({title:"Success",icon:"success",text:"Invoice created successfully",timer:4e3})):(ie(),alert("failed"))}))}(e)},children:[Object(O.jsx)(k.a.Header,{closeButton:!0,children:Object(O.jsx)(k.a.Title,{children:"Add New Invoice"})}),Object(O.jsxs)(k.a.Body,{children:[Object(O.jsxs)(C.a.Group,{controlId:"invoiceNo",children:[Object(O.jsx)(C.a.Label,{children:"Invoice Number"}),Object(O.jsx)(C.a.Control,{type:"number",value:m,onChange:function(e){return p(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"invoiceDate",children:[Object(O.jsx)(C.a.Label,{children:"Invoice Date"}),Object(O.jsx)(C.a.Control,{type:"string",value:f,onChange:function(e){return N(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"customerName",children:[Object(O.jsx)(C.a.Label,{children:"Customer Name"}),Object(O.jsx)(C.a.Control,{type:"string",value:L,onChange:function(e){return w(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"productName",children:[Object(O.jsx)(C.a.Label,{children:"Product Name"}),Object(O.jsx)(C.a.Control,{type:"string",value:G,onChange:function(e){return D(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"productQuantity",children:[Object(O.jsx)(C.a.Label,{children:"Product Quantity"}),Object(O.jsx)(C.a.Control,{type:"number",value:B,onChange:function(e){return F(e.target.value)},required:!0})]}),Object(O.jsxs)(C.a.Group,{controlId:"productPrice",children:[Object(O.jsx)(C.a.Label,{children:"Product Price"}),Object(O.jsx)(C.a.Control,{type:"number",value:J,onChange:function(e){return U(e.target.value)},required:!0})]})]}),Object(O.jsxs)(k.a.Footer,{children:[Object(O.jsx)(S.a,{variant:"secondary",onClick:ce,children:"Cancel"}),Object(O.jsx)(S.a,{variant:"success",type:"submit",children:"Submit"})]})]})}),Object(O.jsxs)(k.a,{show:te,onHide:function(e){return ne(!1)},children:[Object(O.jsx)(k.a.Header,{children:Object(O.jsx)("h5",{children:Object(O.jsx)("b",{children:"Are you sure you want to delete the Invoice?"})})}),Object(O.jsxs)(k.a.Footer,{children:[Object(O.jsx)(S.a,{variant:"secondary",onClick:function(){return ne(!1)},children:"Cancel"}),Object(O.jsx)(S.a,{variant:"danger",onClick:function(){return function(e){console.log("hello"),fetch("".concat("https://invoicing.centstudio.xyz","/users/deleteInvoice/").concat(e),{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){!0===e?(ne(!1),P.a.fire({title:"Success",icon:"success",text:"Invoice deleted successfully",timer:4e3}),ie()):(ne(!1),P.a.fire({title:"Error",icon:"error",text:"Something went wrong please try again later",timer:4e3}))}))}(d)},children:"Proceed"})]})]})]})}function z(){var e=Object(c.useState)({id:null,isAdmin:null}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("".concat("https://invoicing.centstudio.xyz","/users/details"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){"undefined"!==typeof e._id?r({id:e._id,isAdmin:e.isAdmin}):r({id:null,isAdmin:null})}))}),[]),Object(O.jsx)(u,{value:{user:n,setUser:r,unsetUser:function(){localStorage.clear(),r({id:null,isAdmin:null})}},children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/",component:N}),Object(O.jsx)(l.b,{exact:!0,path:"/register",component:A}),Object(O.jsx)(l.b,{exact:!0,path:"/login",component:L}),Object(O.jsx)(l.b,{exact:!0,path:"/invoices",component:w})]})]})})}a.a.render(Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.6b4881ce.chunk.js.map