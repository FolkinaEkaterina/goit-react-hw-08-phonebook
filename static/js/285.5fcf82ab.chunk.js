"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[285],{5285:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(9439),u=t(9434),a=t(2791),o=t(8856),i=t(3634),c="NOT_FOUND";var l=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,u=void 0===r?l:r,a=t.maxSize,o=void 0===a?1:a,i=t.resultEqualityCheck,s=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(u),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:c},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return c}return{get:r,put:function(n,u){r(n)===c&&(t.unshift({key:n,value:u}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,s);function p(){var n=f.get(arguments);if(n===c){if(n=e.apply(null,arguments),i){var t=f.getEntries(),r=t.find((function(e){return i(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function f(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function p(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var a,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=i,s=l.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],v=f(r),m=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:v,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return u}var d=p(s),v=function(e){return e.contacts.items},m=function(e){return e.filter},h=d([v,m],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),y=t(5218),x=t(184),g=function(){var e=(0,u.I0)(),n=(0,u.v9)(v),t=(0,a.useState)(""),c=(0,r.Z)(t,2),l=c[0],s=c[1],f=(0,a.useState)(""),p=(0,r.Z)(f,2),d=p[0],m=p[1],h=function(e){var n=e.currentTarget,t=n.name,r=n.value;"name"===t?s(r):m(r)},g=function(){s(""),m("")};return(0,x.jsxs)(o.l0,{onSubmit:function(t){t.preventDefault();var r={name:l,number:d};n.find((function(e){return e.name.toLowerCase()===l.toLowerCase()}))?y.Am.error("".concat(l," is already in contacts.")):n.find((function(e){return e.number===d}))?y.Am.error("".concat(d," is already in contacts.")):(e((0,i.uK)(r)),g())},children:[(0,x.jsxs)(o.__,{htmlFor:l,children:["Name",(0,x.jsx)(o.l_,{id:l,type:"text",name:"name",value:l,placeholder:"Enter contact name",onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)(o.__,{htmlFor:d,children:["Number",(0,x.jsx)(o.l_,{id:d,type:"tel",name:"number",value:d,placeholder:"Enter contact number",onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(o.un,{type:"submit",children:"Add contact"})]})},b=function(){var e=(0,u.I0)();(0,a.useEffect)((function(){e((0,i.yF)())}),[e]);var n=(0,u.v9)(h);return(0,x.jsx)(o.aV,{children:n.map((function(n){var t=n.id,r=n.name,u=n.number;return(0,x.jsxs)(o.ck,{id:t,children:[r,": ",u,(0,x.jsx)(o.un,{type:"button",onClick:function(){return e((0,i.GK)(t))},children:"Delete"})]},t)}))})},j=t(1538),A=function(){var e=(0,u.I0)(),n=(0,u.v9)(m);return(0,x.jsxs)(o.__,{children:["Find contact by name",(0,x.jsx)(o.l_,{type:"text",name:"name",value:n,placeholder:"Enter contact name",onChange:function(n){return e((0,j.Tv)(n.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})]})};function w(){return(0,x.jsxs)(o.W2,{children:[(0,x.jsx)(y.x7,{}),(0,x.jsx)(g,{}),(0,x.jsx)(A,{}),(0,x.jsx)(b,{})]})}}}]);
//# sourceMappingURL=285.5fcf82ab.chunk.js.map