(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.45a2f0b8.png"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),i=a.n(s),o=(a(15),a(1)),l=a(2),c=a(4),m=a(3),u=a(7),h=a.n(u),p=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"),r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"))},d=function(e){var t=e.user;return r.a.createElement("div",{className:"f2"},r.a.createElement("p",null,t.name,", your current rank is..."),r.a.createElement("p",null,t.entries))},g=a(8),b=a.n(g),f=(a(16),a(9)),w=a.n(f),E=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(b.a,{className:"Tilt shadow-2 br2",options:{max:100},style:{height:200,width:200}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{alt:"brain",className:"br3 shadow grow",style:{height:170,width:170},src:w.a})," ")))},v=(a(17),function(e){var t=e.onInputChange,a=e.onDetectImage;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:" form center pa4 br4 shadow-5"},r.a.createElement("input",{onChange:t,className:"f6 w-70 pa2 center",type:"text"}),r.a.createElement("button",{className:"grow w-30 link f6 ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),N=(a(18),function(e){var t=e.imageUrl,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:"mt2"},r.a.createElement("img",{alt:"",id:"inputimage",src:t,width:"500px",height:"auto"})),r.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://stormy-reaches-21076.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("article",{className:"br2 shadow-3 br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b w3 ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib",placeholder:"Sign In"}),r.a.createElement("a",{onClick:function(){return e("register")},href:"#0",className:"f6 link dim black db"},"Register"))))))}}]),a}(r.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("https://stormy-reaches-21076.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"br2 shadow-3 br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure"},r.a.createElement("fieldset",{className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("input",{onClick:this.onSubmitRegister,className:"b w3 ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib",placeholder:"Register"}))))))}}]),a}(r.a.Component),k=(a(19),{particles:{number:{value:250,density:{enable:!0,value_area:800}}}}),S={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:"",joined:""}},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onDetectImage=function(){e.setState({imageUrl:e.state.input}),fetch("https://stormy-reaches-21076.herokuapp.com/imageurl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://stormy-reaches-21076.herokuapp.com/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){return e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.state=S,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.box,n=e.route,s=e.imageUrl;return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{className:"particles",params:k}),r.a.createElement(p,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(d,{user:this.state.user}),r.a.createElement(v,{onInputChange:this.onInputChange,onDetectImage:this.onDetectImage}),r.a.createElement(N,{box:a,imageUrl:s})):"signin"===this.state.route||"signout"===this.state.route?r.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20);i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0d142126.chunk.js.map