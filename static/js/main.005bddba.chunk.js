(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n.n(c),s=n(5),r=n(2),i=n(3),l=n.n(i),o=n(1),d=n.n(o),u=(n(17),n(18),n(19),n(4)),j=n.n(u),b=n(9),m=n(10),h=(n(20),n(0)),O=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},f=function(e){var t=e.onAddComment,n=Object(o.useState)(""),c=Object(r.a)(n,2),a=c[0],i=c[1],d=Object(o.useState)(""),u=Object(r.a)(d,2),b=u[0],m=u[1],O=Object(o.useState)(""),f=Object(r.a)(O,2),x=f[0],p=f[1],v=Object(o.useState)(!1),N=Object(r.a)(v,2),y=N[0],g=N[1],w=Object(o.useState)(!1),k=Object(r.a)(w,2),C=k[0],S=k[1],E=Object(o.useState)(!1),P=Object(r.a)(E,2),T=P[0],F=P[1],U=Object(o.useState)(!1),I=Object(r.a)(U,2),L=I[0],A=I[1],B=function(){var e=Object(s.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),g(!a.trim()),S(!b.trim()),F(!x.trim()),!(a&&b&&x)){e.next=17;break}return e.prev=3,A(!0),c={name:a,email:b,body:x},e.next=8,t(c);case 8:e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(3),new Error("Can't add new comment");case 13:return e.prev=13,A(!1),p(""),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[3,10,13,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:B,children:[Object(h.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":y}),value:a,onChange:function(e){i(e.currentTarget.value),g(!1)}}),Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-user"})}),y&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),y&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(h.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{type:"email",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":C}),value:b,onChange:function(e){m(e.target.value),S(!1)}}),Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-envelope"})}),C&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),C&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(h.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":T}),value:x,onChange:function(e){p(e.target.value),F(!1)}})}),T&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(h.jsxs)("div",{className:"field is-grouped",children:[Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":L}),children:"Add"})}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){g(!1),S(!1),F(!1),i(""),m(""),p("")},children:"Clear"})})]})]})},x="https://mate.academy/students-api";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),p(300).then((function(){return fetch(x+e,c)})).then((function(e){return e.json()}))}var N=function(e){return v(e)},y=function(e,t){return v(e,"POST",t)},g=function(e){return v(e,"DELETE")},w=function(e){return g("/comments/".concat(e))},k=function(e){return y("/comments",e)},C=function(e){var t=e.post,n=t.id,c=t.title,a=t.body,i=Object(o.useState)([]),d=Object(r.a)(i,2),u=d[0],j=d[1],x=Object(o.useState)(!1),p=Object(r.a)(x,2),v=p[0],y=p[1],g=Object(o.useState)(!1),C=Object(r.a)(g,2),S=C[0],E=C[1],P=Object(o.useState)(!1),T=Object(r.a)(P,2),F=T[0],U=T[1],I=Object(o.useState)(!1),L=Object(r.a)(I,2),A=L[0],B=L[1],M=Object(o.useState)(!1),D=Object(r.a)(M,2),_=D[0],J=D[1],q=Object(o.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(m.a)(Object(m.a)({},t),{},{id:n}),e.prev=1,e.next=4,k(c);case 4:a=e.sent,j((function(e){return[].concat(Object(b.a)(e),[a])})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),U(!0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[]),W=Object(o.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(b.a)(u),j((function(e){return e.filter((function(e){return e.id!==t}))})),e.prev=2,B(!1),e.next=6,w(t);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),j(n),B(!0);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){var e=function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j([]),J(!1),E(!1),y(!0),e.next=7,c=t.id,N("/comments?postId=".concat(c));case 7:n=e.sent,j(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),E(!0);case 14:return e.prev=14,y(!1),e.finish(14);case 17:case"end":return e.stop()}var c}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[t.id]),Object(o.useEffect)((function(){var e=setTimeout((function(){B(!1)}),3e3);return function(){return clearTimeout(e)}}),[A]),Object(o.useEffect)((function(){var e=setTimeout((function(){U(!1)}),3e3);return function(){return clearTimeout(e)}}),[F]),Object(h.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(n,": ").concat(c)}),Object(h.jsx)("p",{"data-cy":"PostBody",children:a})]}),Object(h.jsxs)("div",{className:"block",children:[S&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),v?Object(h.jsx)(O,{}):Object(h.jsxs)(h.Fragment,{children:[u.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"title is-4",children:"Comments:"}),u.map((function(e){return Object(h.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(h.jsxs)("div",{className:"message-header",children:[Object(h.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(h.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return W(e.id)},children:"delete button"})]}),Object(h.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}):Object(h.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),F&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Can't add new comment"}),A&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Can't delete comment"}),_?Object(h.jsx)(f,{onAddComment:q}):Object(h.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return J(!0)},children:"Write a comment"})]})]})]})},S=d.a.memo((function(e){var t=e.users,n=e.selectedUser,c=e.selectUser,a=Object(o.useState)(!1),s=Object(r.a)(a,2),i=s[0],l=s[1],d=Object(o.useRef)(null),u={display:i?"block":"none"};return Object(o.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&l(!1)};return window.addEventListener("mousedown",e),function(){return window.removeEventListener("mousedown",e)}}),[]),Object(h.jsxs)("div",{"data-cy":"UserSelector",className:j()("dropdown",{"is - active":i}),ref:d,children:[Object(h.jsx)("div",{className:"dropdown-trigger",children:Object(h.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return l(!i)},children:[Object(h.jsx)("span",{children:n?n.name:"Choose a user"}),Object(h.jsx)("span",{className:"icon is-small",children:Object(h.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",style:u,children:Object(h.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(h.jsx)("a",{href:"#user-".concat(e.id),className:j()("dropdown-item",{"is-active":(null===n||void 0===n?void 0:n.id)===e.id}),onClick:function(){return function(e){var n=t.find((function(t){return t.id===e}))||null;c(n),l(!1)}(e.id)},children:e.name},e.id)}))})})]})})),E=function(e){var t=e.selectedUserId,n=e.selectedPost,c=e.selectPost,a=Object(o.useState)([]),i=Object(r.a)(a,2),d=i[0],u=i[1],b=Object(o.useState)(!1),m=Object(r.a)(b,2),f=m[0],x=m[1],p=Object(o.useState)(!1),v=Object(r.a)(p,2),y=v[0],g=v[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(null),x(!0),g(!1),e.next=6,N("/posts?userId=".concat(t));case 6:n=e.sent,u(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g(!0);case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),f?Object(h.jsx)(O,{}):y?Object(h.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}):d.length?Object(h.jsxs)("div",{"data-cy":"PostsList",children:[Object(h.jsx)("p",{className:"title",children:"Posts:"}),Object(h.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"has-background-link-light",children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:d.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"Post",children:[Object(h.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(h.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button","is-link",{"is-light":(null===n||void 0===n?void 0:n.id)!==e.id}),onClick:function(){return function(e){if((null===n||void 0===n?void 0:n.id)!==e){var t=d.find((function(t){return t.id===e}))||null;c(t)}else c(null)}(e.id)},children:(null===n||void 0===n?void 0:n.id)===e.id?"Close":"Open"})})]},e.id)}))})]})]}):Object(h.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})},P=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(null),i=Object(r.a)(a,2),d=i[0],u=i[1],b=Object(o.useState)(null),m=Object(r.a)(b,2),O=m[0],f=m[1],x=Object(o.useCallback)((function(e){u(e)}),[]),p=Object(o.useCallback)((function(e){f(e)}),[]),v=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("/users");case 3:t=e.sent,c(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Can't load users");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){v()}),[]),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"tile is-ancestor",children:[Object(h.jsx)("div",{className:"tile is-parent",children:Object(h.jsxs)("div",{className:"tile is-child box is-success",children:[Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(S,{users:n,selectedUser:d,selectUser:x})}),Object(h.jsx)("div",{className:"block","data-cy":"MainContent",children:d?Object(h.jsx)(E,{selectedUserId:d.id,selectedPost:O,selectPost:p}):Object(h.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"})})]})}),Object(h.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":O}),children:Object(h.jsx)("div",{className:"tile is-child box is-success ",children:O&&Object(h.jsx)(C,{post:O})})})]})})})};a.a.render(Object(h.jsx)(P,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.005bddba.chunk.js.map