(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,s){},142:function(e){e.exports=[{_id:1,project:"Custom Logo",price:400,description:"Custom logo for your company"},{_id:2,project:"Business Card",price:150,description:"Have all your information on a beautiful one sided business card"},{_id:3,project:"Website",price:500,description:"Increase the design by adding a second side to your card"},{_id:4,project:"Other",price:"TBD",description:"Have another project in mind?"}]},143:function(e,t,s){e.exports=s.p+"static/media/logo-simple.65d9fb00.jpg"},144:function(e,t,s){e.exports=s.p+"static/media/logo-intricate.e45cd788.png"},145:function(e,t,s){e.exports=s.p+"static/media/card-double-1.4b4f6069.jpg"},146:function(e,t,s){e.exports=s.p+"static/media/card-double-2.bd13de9c.jpg"},147:function(e,t,s){e.exports=s.p+"static/media/tgj_new_logo.382519a2.svg"},148:function(e,t,s){e.exports=s(372)},153:function(e,t,s){},372:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),o=s(141),c=s.n(o),r=(s(153),s(10)),i=s(4),l=s(5),p=s(7),u=s(6),m=s(8),h=s(31),b=function(e){return fetch("http://localhost:3001/email",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({survey:e})}).then(function(e){return e.json()})},j=s(142),f=s(93),d=s.n(f);d.a.initializeApp({apiKey:"AIzaSyAySZLurAbI-t0gFuyS0CJZzOR7lQN-p5Q",authDomain:"tgj-db.firebaseapp.com",databaseURL:"https://tgj-db.firebaseio.com",projectId:"tgj-db",storageBucket:"tgj-db.appspot.com",messagingSenderId:"95933339039"});var E=d.a,g=(s(11),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.projects.map(function(t){return n.a.createElement(n.a.Fragment,null,"Other"==t.project?n.a.createElement("div",{className:"buttons buttons-proj",onClick:function(){return e.props.chooseProjFunc(t.project,t.price)},key:t._id},n.a.createElement("p",{className:"buttons-title"},t.project),e.props.other?n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{className:"other-input",type:"text",value:e.props.otherProj,placeholder:"e.g. T-shirt Design",onChange:function(t){return e.props.inputTextFunc(t,"otherProj")}}),n.a.createElement("button",{onClick:function(){return e.props.chooseProjFunc(e.props.otherProj,t.price)}},">")):null,n.a.createElement("p",{className:"buttons-price"},t.price),n.a.createElement("p",{className:"buttons-desc"},t.description)):n.a.createElement("div",{className:"buttons buttons-proj",onClick:function(){return e.props.chooseProjFunc(t.project,t.price)},key:t._id},n.a.createElement("p",{className:"buttons-title"},t.project),n.a.createElement("p",{className:"buttons-price"},"$",t.price),n.a.createElement("p",{className:"buttons-desc"},t.description)))});return n.a.createElement("div",null,n.a.createElement("p",{className:"questions-header"},"What would you like to start with us?"),t)}}]),t}(a.Component)),N=s(143),y=s.n(N),C=s(144),v=s.n(C),I=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"buttons",onClick:function(){return e.props.func("Simple",0)}},n.a.createElement("p",{className:"buttons-title"},"Simple"),n.a.createElement("p",{className:"buttons-price"},"+$0"),n.a.createElement("img",{style:{width:300},src:y.a,alt:"simple-logo"}),n.a.createElement("p",{className:"buttons-desc"},"Has two or less elements for your logo.")),n.a.createElement("div",{className:"buttons",onClick:function(){return e.props.func("Complicated",50)}},n.a.createElement("p",{className:"buttons-title"},"Intricate"),n.a.createElement("p",{className:"buttons-price"},"+$50"),n.a.createElement("img",{style:{width:325},src:v.a,alt:"intricate-logo"}),n.a.createElement("p",{className:"buttons-desc"},"Has two or more elements for your logo.")))}}]),t}(a.Component),S=s(145),O=s.n(S),k=s(146),x=s.n(k),P=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"buttons",onClick:function(){return e.props.func("Single Side",0)}},n.a.createElement("p",{className:"buttons-title"},"Single Side"),n.a.createElement("p",{className:"buttons-price"},"+$0"),n.a.createElement("p",{className:"buttons-desc"},"Keep all your information neat on a side.")),n.a.createElement("div",{className:"buttons",onClick:function(){return e.props.func("Double Side",100)}},n.a.createElement("p",{className:"buttons-title"},"Double Side"),n.a.createElement("p",{className:"buttons-price"},"+$100"),n.a.createElement("img",{style:{width:300},src:O.a,alt:"double-sided-1"}),n.a.createElement("img",{style:{width:300},src:x.a,alt:"double-sided-2"}),n.a.createElement("p",{className:"buttons-desc"},"Add more design to your card by inluding another side.")))}}]),t}(a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"buttons",onClick:function(){return e.props.func("Single Page",0)}},n.a.createElement("p",{className:"buttons-title"},"Single Page"),n.a.createElement("p",{className:"buttons-price"},"+$0"),n.a.createElement("p",{className:"buttons-desc"},"Keep it simple with a fluid one page website for your business.")),n.a.createElement("div",{className:"buttons",onClick:function(){return e.props.func("Multiple Pages",200)}},n.a.createElement("p",{className:"buttons-title"},"Multiple Pages"),n.a.createElement("p",{className:"buttons-price"},"+$200"),n.a.createElement("p",{className:"buttons-desc"},"Have more to show? Add more pages for your customers to read.")))}}]),t}(a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",{className:"questions-header"},"How complex would you like your ",this.props.project.toLowerCase()," be?"),"Custom Logo"===this.props.project?n.a.createElement(I,{func:this.props.func}):"Business Card"===this.props.project?n.a.createElement(P,{func:this.props.func}):"Website"===this.props.project?n.a.createElement(D,{func:this.props.func}):null)}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",{className:"questions-header"},"Tell Us More About The Project"),n.a.createElement("div",{style:{display:"inline-block",marginRight:50}},n.a.createElement("p",{className:"questions-minor"},"What is your budget for this ",this.props.project.toLowerCase(),"?"),n.a.createElement("input",{className:"inputs",type:"text",placeholder:"e.g. $500",onChange:function(t){return e.props.func(t,"projBudget")},value:this.props.projBudget})),n.a.createElement("div",{style:{display:"inline-block"}},n.a.createElement("p",{className:"questions-minor"},"Do you have a timeline for this project?"),n.a.createElement("input",{className:"inputs",type:"text",placeholder:"e.g. 1 month",onChange:function(t){return e.props.func(t,"projTimeline")},value:this.props.projTimeline})),n.a.createElement("p",{className:"questions-minor"},"Describe your project"),n.a.createElement("textarea",{className:"textarea",rows:"6",placeholder:"Describe Project Here",onChange:function(t){return e.props.func(t,"projDesc")},value:this.props.projDesc}))}}]),t}(a.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",{className:"questions-header"},"Tell Us About Your Business"),n.a.createElement("div",{style:{display:"inline-block",marginRight:50}},n.a.createElement("p",{className:"questions-minor"},"What's the name of your business?"),n.a.createElement("input",{className:"inputs",type:"text",placeholder:"e.g. The Graphic Jar",onChange:function(t){return e.props.func(t,"businessName")},value:this.props.businessName})),n.a.createElement("div",{style:{display:"inline-block"}},n.a.createElement("p",{className:"questions-minor"},"Do you have a website for your business?"),n.a.createElement("input",{className:"inputs",type:"text",placeholder:"e.g. thegraphicjar.com",onChange:function(t){return e.props.func(t,"businessWeb")},value:this.props.businessWeb})),n.a.createElement("p",{className:"questions-minor"},"What is your business?"),n.a.createElement("textarea",{className:"textarea",rows:"6",placeholder:"Describe Business Here",onChange:function(t){return e.props.func(t,"businessDesc")},value:this.props.businessDesc}),n.a.createElement("p",{className:"questions-minor"},"Do you have a motto/slogan?"),n.a.createElement("textarea",{className:"textarea",rows:"4",placeholder:"Add Motto/Slogan Here",onChange:function(t){return e.props.func(t,"businessSlogan")},value:this.props.businessSlogan}))}}]),t}(a.Component),B=s(94),q=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",{className:"questions-header"},"What are your business colors?"),n.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top"}},n.a.createElement("p",{className:"questions-minor"},"Primary"),n.a.createElement(B.SketchPicker,{color:this.props.primColor,onChange:this.props.primFunc})),"#"==this.props.primColor.split("")[0]?n.a.createElement("div",{style:{display:"inline-block",marginLeft:40}},n.a.createElement("p",{className:"questions-minor"},"Secondary (Optional)"),n.a.createElement(B.SketchPicker,{color:this.props.secColor,onChange:this.props.secFunc}),n.a.createElement("div",{className:"back-button",onClick:function(){return e.props.cancelFunc()}},"Cancel Color")):null)}}]),t}(a.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",{className:"questions-header"},"Contact Information"),n.a.createElement("div",null,n.a.createElement("p",{className:"questions-minor"},"Your Name:"),n.a.createElement("input",{className:"inputs",type:"text",placeholder:"e.g. John Smith",onChange:function(t){return e.props.func(t,"contactName")},value:this.props.contactName})),n.a.createElement("div",null,n.a.createElement("p",{className:"questions-minor"},"Your Email:"),n.a.createElement("input",{className:"inputs",type:"text",placeholder:"e.g. thegraphicjar@gmail.com",onChange:function(t){return e.props.func(t,"contactEmail")},value:this.props.contactEmail})),n.a.createElement("div",null,n.a.createElement("p",{className:"questions-minor"},"Your Phone Number:"),n.a.createElement("input",{className:"inputs",type:"text",placeholder:"e.g. (123)456-7890",onChange:function(t){return e.props.func(t,"contactNumber")},value:this.props.contactNumber})),n.a.createElement("p",{className:"questions-minor"},"Message:"),n.a.createElement("textarea",{className:"textarea",rows:"6",placeholder:"Add Message Here",onChange:function(t){return e.props.func(t,"contactMessage")},value:this.props.contactMessage}))}}]),t}(a.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",{className:"questions-header"},"Thank you! Your project has been sent!"),n.a.createElement("p",{className:"questions-minor"},"Below is your project summary, which has also been emailed to ",this.props.contactEmail),n.a.createElement("div",{className:"end-summary-sec"},n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Estimated Project Price:")," $",this.props.finalPrice),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Project:")," ",this.props.project," $",this.props.projPrice),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Complexity:")," ",this.props.complexity," $",this.props.compPrice),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Budget:")," ",this.props.projBudget),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Timeline:")," ",this.props.projTimeline),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Project Description:")," ",this.props.projDesc)),n.a.createElement("div",{className:"end-summary-sec"},n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Business Name:")," ",this.props.businessName),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Business Website:")," ",this.props.businessWeb),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Business Description:")," ",this.props.businessDesc),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Business Slogan:")," ",this.props.businessSlogan),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Color(s):")," ",this.props.primColor,", ",this.props.secColor)),n.a.createElement("div",{className:"end-summary-sec"},n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Contact Name:")," ",this.props.contactName),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Contact Email:")," ",this.props.contactEmail),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Contact Number:")," ",this.props.contactNumber),n.a.createElement("p",null,n.a.createElement("span",{className:"end-summary-title"},"Contact Message:")," ",this.props.contactMessage)),n.a.createElement("div",null,n.a.createElement("p",{className:"questions-minor"},"Add another project?"),n.a.createElement("div",{className:"small-button",onClick:function(){return e.props.func("yes")}},"Yes! Sign me up!"),n.a.createElement("div",{className:"small-button next-button",onClick:function(){return e.props.func("no")}},"Nope! I'm all good.")))}}]),t}(a.Component),$=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.steps>0&&this.props.steps<6?n.a.createElement("div",{className:"back-button",onClick:function(){return e.props.backFunc()}},"Back"):null,2==this.props.steps?n.a.createElement("div",{className:"small-button next-button",onClick:function(){return e.props.noInputFunc("projDesc")}},"Next"):3==this.props.steps?n.a.createElement("div",{className:"small-button next-button",onClick:function(){return e.props.noInputFunc("businessName")}},"Next"):4==this.props.steps?n.a.createElement("div",{className:"small-button next-button",onClick:function(){return e.props.noInputFunc("primColor")}},"Next"):5==this.props.steps?n.a.createElement("div",{className:"small-button next-button",onClick:function(){return e.props.submitFunc()}},"Submit"):null)}}]),t}(a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.projInfo,s=this.props.businessInfo,a=this.props.contactInfo,o=this.props.steps<6,c=null!=this.props.project,r=null!=this.props.complexity,i=this.props.primColor.length>0,l=t.projDesc.length>0||t.projBudget.length>0||t.projTimeline.length>0,p=s.businessName.length>0||s.businessWeb.length>0||s.businessDesc.length>0||s.businessSlogan.length>0,u=a.contactName.length>0||a.contactEmail.length>0||a.contactNumber.length>0||a.contactMessage.length>0;return o?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"summary-column"},n.a.createElement("p",{className:"summary-title"},"Project Summary"),c?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"category-title",onClick:function(){return e.props.stepFunc(0)}},"Project"),n.a.createElement("p",{className:"category-desc"},this.props.project," +$",this.props.projPrice)):null,r?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"category-title",onClick:function(){return e.props.stepFunc(1)}},"Complexity"),n.a.createElement("p",{className:"category-desc"},this.props.complexity," +$",this.props.compPrice)):null,l?n.a.createElement("p",{className:"category-title",onClick:function(){return e.props.stepFunc(2)}},"Project Info"):null,p?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"category-title",onClick:function(){return e.props.stepFunc(3)}},"Business Information")):null,i?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"category-title",onClick:function(){return e.props.stepFunc(4)}},"Color"),n.a.createElement("p",{className:"category-desc"},this.props.primColor),n.a.createElement("p",{className:"category-desc"},this.props.secColor)):null,u?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"category-title",onClick:function(){return e.props.stepFunc(5)}},"Contact Information")):null),n.a.createElement("div",{className:"est-price"},n.a.createElement("span",null,"Est. Starting Price:"),n.a.createElement("span",{style:{display:"block",fontSize:34}},"$",this.props.finalPrice))):null}}]),t}(a.Component),H=s(147),_=s.n(H),L=(new Date).toString(),J=function(e){function t(e){var s;return Object(i.a)(this,t),(s=Object(p.a)(this,Object(u.a)(t).call(this,e))).totalPrice=function(){var e=s.state.projectsChosen.price,t=s.state.complexityChosen.price;s.setState({finalPrice:e+t})},s.goToStep=function(e){s.setState({steps:e})},s.nextStep=function(){s.setState({steps:s.state.steps+1})},s.prevStep=function(){"TBD"==s.state.projectsChosen.price&&2==s.state.steps?s.goToStep(0):s.setState({steps:s.state.steps-1})},s.chooseProject=function(e,t){"TBD"==t?"Other"==e?s.setState({other:!0}):(s.setState({finalPrice:t}),s.setState({projectsChosen:{project:e,price:t}}),s.setState({complexityChosen:{complexity:null,price:null}}),s.goToStep(2)):(s.state.projectsChosen.project!=e&&s.setState({complexityChosen:{complexity:null,price:null}}),s.setState({projectsChosen:{project:e,price:t}}),setTimeout(function(){this.totalPrice()}.bind(Object(h.a)(Object(h.a)(s))),1),s.setState({steps:1}))},s.chooseComplexity=function(e,t){s.setState({complexityChosen:{complexity:e,price:t}}),setTimeout(function(){this.totalPrice()}.bind(Object(h.a)(Object(h.a)(s))),1),s.nextStep()},s.choosePrimColor=function(e){s.setState({primColor:e.hex})},s.chooseSecColor=function(e){s.setState({secColor:e.hex})},s.cancelColor=function(){s.setState({primColor:""}),s.setState({secColor:""})},s.noInput=function(e){"primColor"==e&&""==s.state[e]&&s.setState({primColor:"No Colors"}),"projDesc"==e&&""==s.state.projInfo[e]&&(s.setState({projInfo:Object(r.a)({},s.state.projInfo,{projBudget:"No Input"})}),s.setState({projInfo:Object(r.a)({},s.state.projInfo,{projTimeline:"No Input"})}),s.setState({projInfo:Object(r.a)({},s.state.projInfo,{projDesc:"No Input"})})),"businessName"==e&&""==s.state.businessInfo[e]&&(s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessName:"No Input"})}),s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessWeb:"No Input"})}),s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessDesc:"No Input"})}),s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessSlogan:"No Input"})})),s.nextStep()},s.addProject=function(e){"yes"==e?(s.setState({finalPrice:0}),s.setState({projectsChosen:{project:null,price:null}}),s.setState({complexityChosen:{complexity:null,price:null}}),s.setState({otherProj:""}),s.setState({other:!1}),s.setState({projInfo:{projBudget:"",projTimeline:"",projDesc:""}}),s.goToStep(0)):window.close()},s.inputText=function(e,t){switch(t){case"otherProj":s.setState({otherProj:e.target.value});break;case"projBudget":s.setState({projInfo:Object(r.a)({},s.state.projInfo,{projBudget:e.target.value})});break;case"projTimeline":s.setState({projInfo:Object(r.a)({},s.state.projInfo,{projTimeline:e.target.value})});break;case"projDesc":s.setState({projInfo:Object(r.a)({},s.state.projInfo,{projDesc:e.target.value})});break;case"businessName":s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessName:e.target.value})});break;case"businessWeb":s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessWeb:e.target.value})});break;case"businessDesc":s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessDesc:e.target.value})});break;case"businessSlogan":s.setState({businessInfo:Object(r.a)({},s.state.businessInfo,{businessSlogan:e.target.value})});break;case"contactName":s.setState({contactInfo:Object(r.a)({},s.state.contactInfo,{contactName:e.target.value})});break;case"contactEmail":s.setState({contactInfo:Object(r.a)({},s.state.contactInfo,{contactEmail:e.target.value})});break;case"contactNumber":s.setState({contactInfo:Object(r.a)({},s.state.contactInfo,{contactNumber:e.target.value})});break;case"contactMessage":s.setState({contactInfo:Object(r.a)({},s.state.contactInfo,{contactMessage:e.target.value})})}},s.surveySubmit=function(){var e=E.database().ref("surveys"),t={dateTime:L,finalPrice:s.state.finalPrice,projectsChosen:s.state.projectsChosen,projectsInfo:s.state.projInfo,complexityChosen:s.state.complexityChosen,colorsInfo:[s.state.primColor,s.state.secColor],businessInfo:s.state.businessInfo,contactInfo:s.state.contactInfo};return e.push(t),s.nextStep(),b(t)},s.state={projects:[],steps:0,finalPrice:0,projectsChosen:{project:null,price:null},other:!1,otherProj:"",complexityChosen:{complexity:null,price:null},primColor:"",secColor:"",projInfo:{projBudget:"",projTimeline:"",projDesc:""},businessInfo:{businessName:"",businessWeb:"",businessDesc:"",businessSlogan:""},contactInfo:{contactName:"",contactEmail:"",contactNumber:"",contactMessage:""}},s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({projects:j})}},{key:"render",value:function(){return n.a.createElement("div",{className:"survey"},n.a.createElement("img",{className:"tgj_logo",src:_.a}),n.a.createElement("div",{className:this.state.steps<6?"question-sec":"question-sec step-7"},1===this.state.steps?n.a.createElement(T,{func:this.chooseComplexity,project:this.state.projectsChosen.project}):2===this.state.steps?n.a.createElement(w,{func:this.inputText,project:this.state.projectsChosen.project,projBudget:this.state.projInfo.projBudget,projTimeline:this.state.projInfo.projTimeline,projDesc:this.state.projInfo.projDesc}):3===this.state.steps?n.a.createElement(F,{func:this.inputText,businessName:this.state.businessInfo.businessName,businessWeb:this.state.businessInfo.businessWeb,businessDesc:this.state.businessInfo.businessDesc,businessSlogan:this.state.businessInfo.businessSlogan}):4===this.state.steps?n.a.createElement(q,{primFunc:this.choosePrimColor,secFunc:this.chooseSecColor,cancelFunc:this.cancelColor,primColor:this.state.primColor,secColor:this.state.secColor}):5===this.state.steps?n.a.createElement(W,{func:this.inputText,contactName:this.state.contactInfo.contactName,contactEmail:this.state.contactInfo.contactEmail,contactNumber:this.state.contactInfo.contactNumber,contactMessage:this.state.contactInfo.contactMessage}):6===this.state.steps?n.a.createElement(M,{func:this.addProject,finalPrice:this.state.finalPrice,project:this.state.projectsChosen.project,projPrice:this.state.projectsChosen.price,complexity:this.state.complexityChosen.complexity,compPrice:this.state.complexityChosen.price,projBudget:this.state.projInfo.projBudget,projTimeline:this.state.projInfo.projTimeline,projDesc:this.state.projInfo.projDesc,businessName:this.state.businessInfo.businessName,businesWeb:this.state.businessInfo.businesWeb,businessDesc:this.state.businessInfo.businessDesc,businessSlogan:this.state.businessInfo.businessSlogan,primColor:this.state.primColor,secColor:this.state.secColor,contactName:this.state.contactInfo.contactName,contactEmail:this.state.contactInfo.contactEmail,contactNumber:this.state.contactInfo.contactNumber,contactMessage:this.state.contactInfo.contactMessage}):n.a.createElement(g,{chooseProjFunc:this.chooseProject,inputTextFunc:this.inputText,projects:this.state.projects,other:this.state.other,otherProj:this.state.otherProj}),n.a.createElement($,{backFunc:this.prevStep,noInputFunc:this.noInput,submitFunc:this.surveySubmit,steps:this.state.steps})),n.a.createElement(A,{stepFunc:this.goToStep,finalPrice:this.state.finalPrice,projInfo:this.state.projInfo,businessInfo:this.state.businessInfo,contactInfo:this.state.contactInfo,steps:this.state.steps,project:this.state.projectsChosen.project,projPrice:this.state.projectsChosen.price,complexity:this.state.complexityChosen.complexity,compPrice:this.state.complexityChosen.price,primColor:this.state.primColor,secColor:this.state.secColor}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[148,2,1]]]);
//# sourceMappingURL=main.f90f010b.chunk.js.map