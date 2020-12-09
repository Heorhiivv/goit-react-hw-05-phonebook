(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={list:"ContactsList_list__153yN",enter:"ContactsList_enter__2q5Mo",enterActive:"ContactsList_enterActive__r4q4M",exit:"ContactsList_exit__5koDX",exitActive:"ContactsList_exitActive__3f9In"}},18:function(t,e,n){t.exports={notification:"Notification_notification__3rKZ-",enter:"Notification_enter__2VURn",enterActive:"Notification_enterActive__2FfN9",exit:"Notification_exit__3JO4K",exitActive:"Notification_exitActive__bMONF"}},2:function(t,e,n){t.exports={PhoneBookForm:"ContactFrom_PhoneBookForm__1SsYI",input:"ContactFrom_input__CQbVH",label:"ContactFrom_label__2emPo",inputBtn:"ContactFrom_inputBtn__3mcJG"}},27:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),c=n(5),o=n.n(c),s=n(20),r=n(9),l=n(10),u=n(13),m=n(12),b=(n(27),n(7)),_=n.n(b),j=function(t){var e=t.name,n=t.number,i=t.onRemove;return Object(a.jsxs)("li",{className:_.a.item,children:[Object(a.jsxs)("p",{className:_.a.itemText,children:[e,":"]}),Object(a.jsx)("p",{className:_.a.itemText,children:n}),Object(a.jsx)("button",{type:"button",className:_.a.btn,onClick:i,children:"Delete"})]})},d=n(34),h=n(32),f=n(17),p=n.n(f),x=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(a.jsx)(d.a,{component:"ul",className:p.a.list,children:e.map((function(t){var e=t.id,i=t.name,c=t.number;return Object(a.jsx)(h.a,{timeout:250,classNames:p.a,children:Object(a.jsx)(j,{id:e,name:i,number:c,onRemove:function(){return n(e)}})},e)}))})},v=n(19),O=n(33),C=n(2),N=n.n(C),g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(v.a)({},a,i))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(O.a)(),name:t.state.name,number:t.state.number};t.props.onAddContact(n),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:N.a.PhoneBookForm,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:N.a.label,children:["Name",Object(a.jsx)("input",{className:N.a.input,name:"name",type:"text",value:e,onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("label",{className:N.a.label,children:["Number",Object(a.jsx)("input",{className:N.a.input,name:"number",type:"tel",value:n,onChange:this.handleChange,required:!0})]}),Object(a.jsx)("input",{type:"submit",value:"Add contact",className:N.a.inputBtn})]})}}]),n}(i.Component),F=n(8),A=n.n(F),y=function(t){var e=t.value,n=t.onChangeFilter,i=t.contacts;return Object(a.jsx)(h.a,{in:i.length>0,appear:!0,timeout:250,classNames:A.a,unmountOnExit:!0,children:Object(a.jsx)("div",{className:A.a.filter,children:Object(a.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",className:A.a.input,value:e,onChange:function(t){return n(t.target.value)}})]})})})},S=n(18),k=n.n(S),I=function(t){var e=t.getContact;return Object(a.jsx)(h.a,{in:e,appear:!0,timeout:250,classNames:k.a,unmountOnExit:!0,children:Object(a.jsx)("div",{className:k.a.notification,children:Object(a.jsx)("p",{children:"Contact already exists!"})})})},w=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],B=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={contacts:[],filter:"",isContacts:!1},t.addContact=function(e){if(t.state.contacts.find((function(t){return t.name===e.name})))return t.setState({isContacts:!0}),void setTimeout((function(){return t.setState({isContacts:!1})}),4e3);t.setState((function(n){var a=[].concat(Object(s.a)(n.contacts),[e]);t.setState({contacts:a})}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"))||w;t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,i=t.isContacts,c=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I,{getContact:i}),Object(a.jsx)(h.a,{in:!0,appear:!0,timeout:500,classNames:"Logo-slideIn",unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"title",children:"Phonebook"})}),Object(a.jsx)(g,{onAddContact:this.addContact}),Object(a.jsx)(y,{value:n,onChangeFilter:this.changeFilter,contacts:e}),Object(a.jsx)(h.a,{in:e.length>0,timeout:0,unmountOnExit:!0,children:Object(a.jsx)(x,{onRemoveContact:this.removeContact,contacts:c})})]})}}]),n}(i.Component);o.a.render(Object(a.jsx)(B,{}),document.getElementById("root"))},7:function(t,e,n){t.exports={item:"ContactItem_item__2vls_",itemText:"ContactItem_itemText__3maUF",btn:"ContactItem_btn__1-3IA"}},8:function(t,e,n){t.exports={filter:"Filter_filter__3briT",input:"Filter_input__2AW5z",label:"Filter_label___X_Ml",enter:"Filter_enter__r-eyK",enterActive:"Filter_enterActive__37Qov",exit:"Filter_exit__3bBzV",exitActive:"Filter_exitActive__1CiH_"}}},[[30,1,2]]]);
//# sourceMappingURL=main.015c57bd.chunk.js.map