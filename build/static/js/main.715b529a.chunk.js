(this.webpackJsonpresume_website_workshop=this.webpackJsonpresume_website_workshop||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(26),a(27),a(12)),o=a(9),s=a(2),m=a(3),u=a(5),h=a(4),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("li",{id:this.props.item},c.a.createElement(i.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item)},this.props.item))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).activeitem=function(e){n.state.NavItemActive.length>0&&document.getElementById(n.state.NavItemActive).classList.remove("active"),n.setState({NavItemActive:e},(function(){document.getElementById(n.state.NavItemActive).classList.add("active")}))},n.state={NavItemActive:""},n}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(p,{item:"Home",tolink:"/",activec:this.activeitem}),c.a.createElement(p,{item:"About",tolink:"/about",activec:this.activeitem}),c.a.createElement(p,{item:"Education",tolink:"/education",activec:this.activeitem}),c.a.createElement(p,{item:"Skills",tolink:"/skills",activec:this.activeitem}),c.a.createElement(p,{item:"Contact",tolink:"/contact",activec:this.activeitem})))}}]),a}(n.Component),v=a(21),b=a.n(v),f=a.p+"static/media/desertman.5a61f85e.jpg",d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"social"},c.a.createElement("a",{href:"https://github.com/eastae",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-github"})),c.a.createElement("a",{href:"https://Instagram.com/beastman.ae",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-instagram"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/eastmankeith/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-linkedin-in"})))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv home"},c.a.createElement("img",{src:f,alt:"ProfilePic",className:"profilepic"}),c.a.createElement(b.a,{className:"typingeffect",text:["I am Keith Eastman","I am a web developer"],speed:100,eraseDelay:700}),c.a.createElement(d,null))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"About Me"),c.a.createElement("h4",null,"Hey there,"),c.a.createElement("h1",null,"I'm Keith Eastman"),c.a.createElement("h3",null,"Full Stack Web ",c.a.createElement("u",null,"Developer")),c.a.createElement("br",null),c.a.createElement("p",null,"I've written code for free, now watch me write code for money"))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"widecard"},c.a.createElement("div",{class:"compdet"},c.a.createElement("h3",null,this.props.title),c.a.createElement("h4",{class:"secondtext"},this.props.where),c.a.createElement("h4",{class:"secondtext"},this.props.from," - ",this.props.to)))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"My Education"),c.a.createElement(k,{title:"B.S. Computer Science",where:"San Francisco State University",from:"January 2018",to:"December 2020"}),c.a.createElement(k,{title:"A.A.S. Respiratory Therapy",where:"Thomas Edison State College",from:"2013",to:"2014"}))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={myskills:["HTML","CSS","JS","PHP","REACT JS","DOCKER","AWS EC2","MONGODB","MSF"]},n}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv skills"},c.a.createElement("h1",{className:"subtopic"},"My Skills"),c.a.createElement("ul",null,this.state.myskills.map((function(e){return c.a.createElement("li",null,e)}))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"Contact Me"),c.a.createElement("h3",null,"Email  :   eastman.ae@gmail.com"),c.a.createElement("h3",null,"Instagram   :   @beastman.ae"),c.a.createElement(d,null))}}]),a}(n.Component);var C=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(O,null)),c.a.createElement(o.a,{path:"/about"},c.a.createElement(j,null)),c.a.createElement(o.a,{path:"/education"},c.a.createElement(y,null)),c.a.createElement(o.a,{path:"/skills"},c.a.createElement(w,null)),c.a.createElement(o.a,{path:"/contact"},c.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.715b529a.chunk.js.map