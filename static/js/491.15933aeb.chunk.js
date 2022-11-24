"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[491],{491:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(434),r=t(791),s=t(705),i=t(184),o={name:"",phone:""},c=function(e){var n=e.onSubmit;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.J9,{initialValues:o,onSubmit:n,children:(0,i.jsxs)(s.l0,{className:"form",autoComplete:"off",children:[(0,i.jsxs)("label",{children:["Name"," ",(0,i.jsx)(s.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,i.jsxs)("label",{children:["Number"," ",(0,i.jsx)(s.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,i.jsx)("button",{className:"btn",type:"sumbit",children:"Add contact"})]})})})},u=t(258),l=function(e){var n=e.name,t=e.value,r=e.id,s=(0,a.I0)();return(0,i.jsxs)("li",{children:[n,": ",t,(0,i.jsx)("button",{type:"button",onClick:function(){return s((0,u.IY)(r))},className:"btn",children:"Delete"})]})},d=function(e){var n=e.arr;return(0,i.jsx)("ul",{children:n.map((function(e){return(0,i.jsx)(l,{name:e.name,value:e.number,id:e.id},e.id)}))})},m=function(e){var n=e.value,t=e.onFilter;return(0,i.jsxs)("label",{children:["Find contacts by name"," ",(0,i.jsx)("input",{type:"text",value:n,onChange:t})]})},h=t(895),f=function(){var e=(0,a.I0)(),n=(0,a.v9)((function(e){return e.filter})),t=(0,a.v9)((function(e){return e.contacts.isLoading})),s=(0,a.v9)((function(e){return e.contacts.items})),o=n.toLowerCase(),l=s.filter((function(e){return e.name.toLowerCase().includes(o)}));return(0,r.useEffect)((function(){e((0,u.BJ)())}),[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"title",children:"Phonebook"}),(0,i.jsx)(c,{onSubmit:function(n,t){var a=t.resetForm;if(s.some((function(e){return e.name===n.name})))return a(),window.alert("".concat(n.name," is already in contacts"));e((0,u.Og)(n)),a()}}),(0,i.jsx)("h2",{className:"subtitle",children:"Contacts"}),(0,i.jsx)(m,{value:n,onFilter:function(n){e((0,h.L)(n.target.value))}}),t?(0,i.jsx)("h2",{children:"Loading..."}):(0,i.jsx)(d,{arr:l})]})}}}]);
//# sourceMappingURL=491.15933aeb.chunk.js.map