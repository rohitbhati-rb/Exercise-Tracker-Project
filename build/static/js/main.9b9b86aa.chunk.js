(this["webpackJsonpexercise-tracker-app"]=this["webpackJsonpexercise-tracker-app"]||[]).push([[0],{168:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(33),c=a.n(s),r=a(22),i=a(7),o=(a(86),a(87),a(16)),l=a(17),u=a(19),d=a(18),h=a(2),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("nav",{className:"navbar navbar-dark navbar-expand-md",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsxs)(r.b,{to:"/",className:"navbar-brand",children:[Object(h.jsx)("img",{className:"logo-image",src:"./logo.png",alt:""}),"ExcerTracker"]}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collpase navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"navbar-item",children:Object(h.jsx)(r.b,{to:"/",className:"nav-link",children:"Exercises"})}),Object(h.jsx)("li",{className:"navbar-item",children:Object(h.jsx)(r.b,{to:"/create",className:"nav-link",children:"Create Exercise Log"})}),Object(h.jsx)("li",{className:"navbar-item",children:Object(h.jsx)(r.b,{to:"/user",className:"nav-link",children:"Create User"})})]})})]})})}}]),a}(n.Component),j=a(8),m=a(13),x=a.n(m),p=function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.exercise.username}),Object(h.jsx)("td",{children:e.exercise.description}),Object(h.jsx)("td",{children:e.exercise.duration}),Object(h.jsx)("td",{children:e.exercise.date.substring(0,10)}),Object(h.jsxs)("td",{children:[Object(h.jsx)(r.b,{to:"/edit/"+e.exercise._id,children:"Edit"})," | ",Object(h.jsx)(r.b,{to:"#",onClick:function(){e.deleteExercise(e.exercise._id)},children:"Delete"})]})]})},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deleteExercise=n.deleteExercise.bind(Object(j.a)(n)),n.state={exercises:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://backend-excer-tracker.herokuapp.com/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){x.a.delete("https://backend-excer-tracker.herokuapp.com/exercises/"+e).then((function(e){console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return Object(h.jsx)(p,{exercise:t,deleteExercise:e.deleteExercise},t._id)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Logged Exercises"}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{className:"thead-light",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"table-head",children:"Username"}),Object(h.jsx)("th",{className:"table-head",children:"Description"}),Object(h.jsx)("th",{className:"table-head",children:"Duration"}),Object(h.jsx)("th",{className:"table-head",children:"Date"}),Object(h.jsx)("th",{className:"table-head",children:"Actions"})]})}),Object(h.jsx)("tbody",{children:this.exerciseList()})]})]})}}]),a}(n.Component),g=a(37),v=a.n(g),f=(a(69),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(j.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(j.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(j.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(j.a)(n)),n.onSubmit=n.onSubmit.bind(Object(j.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://backend-excer-tracker.herokuapp.com/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),x.a.get("https://backend-excer-tracker.herokuapp.com/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),x.a.post("https://backend-excer-tracker.herokuapp.com/exercises/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Edit Exercise Log"}),Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Username: "}),Object(h.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Description: "}),Object(h.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Duration (in minutes): "}),Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Date: "}),Object(h.jsx)("div",{children:Object(h.jsx)(v.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"})})]})]})}}]),a}(n.Component)),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(j.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(j.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(j.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(j.a)(n)),n.onSubmit=n.onSubmit.bind(Object(j.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://backend-excer-tracker.herokuapp.com/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),x.a.post("https://backend-excer-tracker.herokuapp.com/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Create New Exercise Log"}),Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Username: "}),Object(h.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Description: "}),Object(h.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Duration (in minutes): "}),Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Date: "}),Object(h.jsx)("div",{children:Object(h.jsx)(v.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"})})]})]})}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(j.a)(n)),n.onSubmit=n.onSubmit.bind(Object(j.a)(n)),n.state={username:""},n}return Object(l.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),x.a.post("https://backend-excer-tracker.herokuapp.com/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Create New User"}),Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Username: "}),Object(h.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"submit",value:"Create User",className:"btn btn-primary"})})]})]})}}]),a}(n.Component);var N=function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("br",{}),Object(h.jsx)(i.a,{path:"/",exact:!0,component:O}),Object(h.jsx)(i.a,{path:"/edit/:id",exact:!0,component:f}),Object(h.jsx)(i.a,{path:"/create",exact:!0,component:C}),Object(h.jsx)(i.a,{path:"/user",exact:!0,component:k})]})]})};c.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))},87:function(e,t,a){}},[[168,1,2]]]);
//# sourceMappingURL=main.9b9b86aa.chunk.js.map