(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),i=a(9),c=a(2),s=a(3),u=a(4),d=a(5),m=a(11),h=(a(35),a(36),a(37),a(1));function g(e){return r.a.createElement("div",{id:"contact-wrapper",className:e.className},r.a.createElement(p,{hide:e.className}))}var p=function(e){return r.a.createElement("div",{id:"contact-form-div"},r.a.createElement("form",{id:"toggle-contact-form",className:""},r.a.createElement("label",{htmlFor:"email-contact-name",className:"f-l-i"},"Contact Name"),r.a.createElement("input",{type:"text",id:"email-contact-name",className:"f-l-i",placeholder:"Name",required:!0}),r.a.createElement("label",{htmlFor:"email-contact",className:"f-l-i"},"Contact Email"),r.a.createElement("input",{type:"email",id:"email-contact",className:"f-l-i",placeholder:"contact email",required:!0}),r.a.createElement("label",{htmlFor:"contact-email-category",className:"f-l-i"},"Select Category"),r.a.createElement("select",{id:"contact-email-category",className:"f-l-i"},r.a.createElement("optgroup",null,r.a.createElement("option",{defaultValue:"email-contact-cat-general"},"General"),r.a.createElement("option",{value:"email-contact-cat-website"},"Website"),r.a.createElement("option",{value:"email-contact-cat-order"},"Order"),r.a.createElement("option",{value:"email-contact-cat-other"},"Other"))),r.a.createElement("textarea",{id:"email-message",minLength:"50",maxLength:"1800",cols:"",rows:"20",placeholder:"Please type your message here before sending.",required:!0}),r.a.createElement("button",{type:"submit",defaultValue:"Send"},"Send Message"),r.a.createElement("button",{type:"reset"},"Reset"),r.a.createElement("button",{id:"cancel-form-button",className:"click-hide-contact-us"},"Cancel")))},C=[{firstName:"Mike",email:"mike@gmail.com",password:"hash1111",favCategories:[]},{firstName:"Jeff",email:"jeff@gmail.com",password:"hash1111",favCategories:[]},{firstName:"Cliff",email:"cliff@gmail.com",password:"hash1111",favCategories:[]},{firstName:"Stil",email:"stil@gmail.com",password:"hash1111",favCategories:[]}],f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).triggerCartUpdateInt=setInterval((function(){return n.handleCartStorChange()}),3e3),n.state={menuArr:[{type:"li",linkName:"Home",linkAddr:"/",className:"nav-menu-item to-hide",submenu:{}},{type:"li",linkName:"About",linkAddr:"/about",className:"nav-menu-item to-hide",submenu:{}},{type:"li",linkName:"Contact",linkAddr:"/",className:"nav-menu-item click-hide-contact-us to-hide",submenu:{}},{type:"ul",className:"login-container",submenu:[{type:"li",linkName:r.a.createElement("span",{style:{fontSize:"200%",backgroundColor:""}},"\ud83d\uded2"),linkAddr:"/cart",className:"nav-menu-item to-hide login cart"}]},{type:"li",linkName:"Admin",linkAddr:"/admin",className:"nav-menu-item to-hide admin",submenu:{}}],regFormHide:"register-form hide-element",logFormHide:"login-form hide-element",contactFormHide:"hide-element",forLocalStorUpdate:JSON.parse(localStorage.getItem("inCartLocStoreCount"))},n.handleRegFormClick=n.handleRegFormClick.bind(Object(h.a)(n)),n.handleLogFormClick=n.handleLogFormClick.bind(Object(h.a)(n)),n.handleContactFormClick=n.handleContactFormClick.bind(Object(h.a)(n)),n.handleCartStorChange=n.handleCartStorChange.bind(Object(h.a)(n)),n.checkUserDB=n.checkUserDB.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"handleRegFormClick",value:function(){"register-form"===this.state.regFormHide?this.setState({regFormHide:"register-form hide-element"}):this.setState({regFormHide:"register-form"})}},{key:"handleLogFormClick",value:function(){"login-form"===this.state.logFormHide?this.setState({logFormHide:"login-form hide-element"}):this.setState({logFormHide:"login-form"})}},{key:"handleContactFormClick",value:function(){"hide-element"===this.state.contactFormHide?this.setState({contactFormHide:""}):this.setState({contactFormHide:"hide-element"})}},{key:"handleCartStorChange",value:function(){this.setState({forLocalStorUpdate:JSON.parse(localStorage.getItem("inCartLocStoreCount"))});var e,t=document.querySelector("li.cart");e=this.state.forLocalStorUpdate;var a=document.createElement("span");t.appendChild(a),a.textContent="",t.childNodes[1].textContent=e,t.children.length>2&&t.removeChild(t.childNodes[2])}},{key:"checkUserDB",value:function(e){e.preventDefault();var t=document.querySelector("#register-password-input").value,a=document.querySelector("#register-password-input-re-enter").value,n=document.querySelector("#login-email-input"),r=document.querySelector("#login-password-input"),o=document.querySelector("#register-email-input").value;function l(e){var t=C.map((function(e){return e.email.toString()})).filter((function(t){return t===e}));return!!t.includes(e)||!(n!==t||!r)&&void console.log("logged in")}t===a&&!0===l(o)?console.log("please login to your account"):l(n)?console.log("logged in > still need to check password"):console.log("not equal",o)}},{key:"render",value:function(){return r.a.createElement("header",{className:"header site-header"},r.a.createElement("div",{className:"header nav-menu-flex"},r.a.createElement("nav",{className:"nav-menu"},r.a.createElement("ul",null,r.a.createElement("li",{className:this.state.menuArr[0].className},r.a.createElement(i.b,{to:this.state.menuArr[0].linkAddr},this.state.menuArr[0].linkName)),r.a.createElement("li",{className:this.state.menuArr[1].className},r.a.createElement(i.b,{to:this.state.menuArr[1].linkAddr},this.state.menuArr[1].linkName)),r.a.createElement("li",{className:this.state.menuArr[2].className,onClick:this.handleContactFormClick},r.a.createElement(i.b,{to:this.state.menuArr[2].linkAddr},this.state.menuArr[2].linkName)),r.a.createElement("ul",null,r.a.createElement("li",{className:this.state.menuArr[3].submenu[0].className},r.a.createElement(i.b,{to:this.state.menuArr[3].submenu[0].linkAddr},this.state.menuArr[3].submenu[0].linkName))),r.a.createElement("li",{className:this.state.menuArr[4].className},r.a.createElement(i.b,{to:this.state.menuArr[4].linkAddr,onChange:this.handleCartStorChange},this.state.menuArr[4].linkName)))),r.a.createElement(g,{className:this.state.contactFormHide})))}}]),a}(n.Component),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).footerEls=[{linkAddr:"#",linkName:r.a.createElement("span",null,"\xa9 2020 SolveJS")},{linkAddr:"#",linkName:"Terms"},{linkAddr:"#",linkName:"Cookies"},{linkAddr:"#",linkName:"FAQs"}],n.state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer footer-flex"},r.a.createElement(v,{footerEls:this.footerEls})))}}]),a}(r.a.Component);function v(e){return e.footerEls.map((function(e,t){return r.a.createElement("li",{key:t,className:"footer-item",style:{listStyle:"none",marginRight:"5px"}},r.a.createElement("a",{href:e.linkAddr},e.linkName))}))}var S=a(28);function k(e){return r.a.createElement("form",{action:"/api/login",method:"post",id:"login-wrapper",className:e.showForm,onSubmit:e.checkDB},r.a.createElement("label",{htmlFor:"loginEmailInput"},"Email Address"),r.a.createElement("input",{type:"email",name:"loginEmailInput",id:"loginEmailInput",className:"login-email",placeholder:"Email Address",defaultValue:"",required:!0,onChange:e.trackText}),r.a.createElement("label",{htmlFor:"loginPasswordInput"},"Password"),r.a.createElement("input",{type:"password",name:"loginPasswordInput",id:"loginPasswordInput",className:"login-password",placeholder:"Create Password",defaultValue:"",minLength:"8",required:!0,onChange:e.trackText}),r.a.createElement("button",{type:"submit",id:"login-button"},"Submit"),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"pw-reset"},"Reset Password or Username")))}var E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{action:"/",id:"register-wrapper",className:this.props.regFormHide},r.a.createElement("label",{html:"register-name"},"Name"),r.a.createElement("input",{type:"text",id:"register-name",placeholder:"Name",minLength:"2",required:!0,onChange:this.props.checkUserDB}),r.a.createElement("label",{htmlFor:"register-email-input"},"Email Address"),r.a.createElement("input",{type:"email",name:"register-email-input",id:"register-email-input",className:"register-email",placeholder:"Email Address",required:!0,onChange:this.props.checkUserDB}),r.a.createElement("label",{htmlFor:"register-password-input"},"Password"),r.a.createElement("input",{type:"password",name:"register-password-input",id:"register-password-input",className:"register-password",placeholder:"Create Password",defaultValue:"",minLength:"8",required:!0,onChange:this.props.checkUserDB}),r.a.createElement("label",{htmlFor:"register-password-input-re-enter"},"Re-Enter"),r.a.createElement("input",{type:"password",name:"register-password-input-re-enter",id:"register-password-input-re-enter",className:"register-password",placeholder:"Re-enter password",defaultValue:"",minLength:"8",required:!0,onChange:this.props.checkUserDB}),r.a.createElement("button",{type:"submit",id:"register-button",onSubmit:this.props.checkUserDB},"Register"),r.a.createElement("button",{type:"reset",id:"reset-button"},"Reset"))}}]),a}(n.Component);var y=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome ",e.name),r.a.createElement("p",null,"On this site, you can add bumper stickers to your shopping cart at the top right."))},N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).initialState={isActive:null,items:[{Title:"Bumpers Creation",submenu:["Text","Layout","Images","Categories","Font","Size"]},{Title:"Categories"}]},n.state=n.initialState,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin",id:"admin"},r.a.createElement("h2",null,"Admin Console"),r.a.createElement("p",null,"This will be a form that controls any and all of the follow items."),r.a.createElement("ul",null,r.a.createElement("li",null,"Bumper Creation"),r.a.createElement("li",null,"Categories"),": should be auto-generated when labeled"),r.a.createElement(O,null))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"When enabled, Express attempts to determine the IP address of the client connected through the front-facing proxy, or series of proxies. The `req.ips` property, then contains an array of IP addresses the client is connected through. To enable it, use the values described in"))}}]),a}(n.Component),x=N,I=a(29),A=a(14),w=a.n(A),P=a(19),j=a(17),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).cart=document.getElementsByClassName("cart"),n.totalNumSpan=document.createElement("span").append("this.state.inCartTotal"),n.addToCart=function(){n.setState({display:"inline-block"})},n.removeAddToCart=function(){n.setState({display:"none"})},n.handleClickChangeAddToCart=function(e){var t,a="cartItemLocal-".concat(e.target.parentNode.previousSibling.id),n=null!==localStorage.getItem("inCartLocStoreArr")?localStorage.getItem("inCartLocStoreArr"):(window.localStorage.setItem("inCartLocStoreArr",JSON.stringify([a])),window.localStorage.setItem("inCartLocStoreCount","1"),window.localStorage.getItem("inCartLocStoreArr"));t=JSON.parse(n),function(){var r=null!==t.indexOf(a)?t.indexOf(a):void 0;console.log("currIndex:",r,"itemsParsedFromLocStor:",t,t.length,"tempStor:",n,"currItem:",a,"window.locst:",window.localStorage.key("inCartLocStoreArr").length),-1!==r?(t.splice(r,1),window.localStorage.setItem("inCartLocStoreCount","".concat(t.length)),localStorage.setItem("inCartLocStoreArr",JSON.stringify(t))):(t.push("cartItemLocal-".concat(e.target.parentNode.previousSibling.id)),window.localStorage.setItem("inCartLocStoreCount","".concat(t.length)),localStorage.setItem("inCartLocStoreArr",JSON.stringify(t)))}()},n.handleInCart=function(){n.setState((function(e){return{textStyle:{color:"red",fontWeight:"bold",fontSize:"medium"},text:"testing handleInCart"}}))},n.handleClick=function(e){console.log(e.target.parentNode.previousSibling,"event click add to cart solobump"),n.setState({text:"Item In Cart"})},n.state={className:"bumper bumper-long",display:"inline-block",text:"Add to Cart",textStyle:{},inCartTotal:0,inCartItems:[],totalNumSpan:n.totalNumSpan},n.addToCart=n.addToCart.bind(Object(h.a)(n)),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e={containerStyle:{display:this.state.display}}.containerStyle;return r.a.createElement("div",{className:this.state.className,style:{}},this.props.children,r.a.createElement("button",{style:e,className:this.props.buttonClass,onClick:this.props.clickCartButtonHandle},r.a.createElement(L,{text:this.props.text,style:this.state.textStyle,className:this.props.buttonClass,clickAddCartChange:this.handleClickChangeAddToCart,checkInCart:this.handleInCart})))}}]),a}(n.Component);function L(e){return r.a.createElement(n.Fragment,null,r.a.createElement("span",{style:e.style,onClick:e.clickAddCartChange,onLoad:e.checkInCart},e.text))}var T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Bumper Stickers - Choose Wisely")}}]),a}(n.Component),B=["red","blue","purple","navy","black","coral","green","pink","crimson","salmon","orange","tomato","darkred","grey","darkgrey","olive","deeppink","firebrick","pagegreen"],D=B.length;function H(){return B[Math.floor(Math.random()*D-1)+1]}var J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_.Consumer,null,(function(e){return r.a.createElement(U,{contextList:e.currBumpersPages,handlePageChangeCat:e.handlePageChangeCat,selected:e.radioCatSelected,handleRadioCatChange:e.handleRadioCatChange},n.Children)})),r.a.createElement(T,null),r.a.createElement(_.Consumer,null,(function(e){return r.a.createElement(R,{contextForm:e.radioPagesFiltered,contextCartItems:e.inCartItems,contextAddCartHandle:e.handleAddCartClick,contextTextStyle:e.textStyle,contextButtonIn:e.textStyleInCartButtonClass1,contextButtonOut:e.textStyleInCartButtonClass2,contextFontSize:e.bumperTextSize},n.Children)})),r.a.createElement(_.Consumer,null,(function(e){return r.a.createElement(q,{contextFormPages:e.radioCatSelectedPageNums,pagesClick:e.handlePageChangeCat,catPassedForPageTurn:e.radioCatSelected},n.Children)})))}}]),a}(n.Component),R=function(e){var t=localStorage.getItem("inCartLocStoreArr")||"[]",a=JSON.parse(t);e.contextFontSize;return r.a.createElement("main",{className:"main-content"},r.a.createElement("div",{id:"main-wrapper",className:"content-grid"},r.a.createElement("div",{id:"bumper-left",className:"content-left bumper-flex",key:7},r.a.createElement(n.Fragment,null,e.contextForm.map((function(t){return"[]"!==a&&a.includes("cartItemLocal-".concat(t.id))?r.a.createElement(F,{key:t.id,clickCartButtonHandle:e.contextAddCartHandle,text:"In Cart",buttonClass:"add-to-cart-selected"}," ",r.a.createElement("div",{id:t.id,style:{display:"block",width:"100%",height:"75px"}},r.a.createElement("span",{style:{height:"75px",lineHeight:"75px",display:"inline-grid",color:H(),backgroundColor:H()}},t.title))):r.a.createElement(F,{key:t.id,clickCartButtonHandle:e.contextAddCartHandle,text:"Add to Cart",buttonClass:"add-to-cart"}," ",r.a.createElement("div",{id:t.id,style:{display:"block",width:"100%",height:"75px"}},r.a.createElement("span",{style:{height:"75px",lineHeight:"75px",display:"inline-grid",color:H(),backgroundColor:H()}},t.title)))}))))))},q=function(e){return r.a.createElement("div",{id:"simple-pagination"},r.a.createElement("ul",{id:"bumper-ul"},e.contextFormPages.map((function(t){return r.a.createElement("li",{key:t,className:"page-number",value:t,customcattag:e.catPassedForPageTurn,onClick:e.pagesClick},t)}))))},W=[{value:"all",id:"all",checked:"props.selected === 'all'",onChange:"props.handleRadioCatChange",text:"All Bumpers"},{value:"drive-traffic",id:"drive-traffic",checked:"props.selected === 'drive-traffic'",onChange:"props.handleRadioCatChange",text:"Driving & Traffic"},{value:"logos",id:"logos",checked:"props.selected === 'logos'",onChange:"props.handleRadioCatChange",text:"Logos"},{value:"diy",id:"diy",checked:"props.selected === 'diy'",onChange:"props.handleRadioCatChange",text:"DIY"},{value:"thoughtful",id:"thoughtful",checked:"props.selected === 'thoughtful'",onChange:"props.handleRadioCatChange",text:"Thoughtful"},{value:"health",id:"health",checked:"props.selected === 'health'",onChange:"props.handleRadioCatChange",text:"Health"},{value:"inappropriate",id:"inappropriate",checked:"props.selected === 'inappropriate'",onChange:"props.handleRadioCatChange",text:"Inappropriate"}],U=function(e){return r.a.createElement("div",{className:"categories",id:"categories",style:{display:"grid",backgroundColor:"white"}},r.a.createElement("h2",null,"Please select a category"),r.a.createElement("form",null,W.map((function(t){return r.a.createElement(n.Fragment,{key:t.id},r.a.createElement("input",{type:"radio",name:"bumpers-cat-radio",value:t.value,id:t.id,checked:e.selected===t.value,onChange:e.handleRadioCatChange}),r.a.createElement("label",{htmlFor:t.value,className:"bumpers-label-radio"},t.text))}))))},M=J,z={},G=Object(n.createContext)(),V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).bumperCatMapToPages=function(e){switch(e){case"all":case"drive-traffic":case"logos":case"diy":case"thoughtful":case"health":case"inappropriate":n.switchGenCreate(e)}},n.itemsAPIConnect=function(e){var t=e.apiData;return Object(j.a)(t)},n.transferAPITo=function(){return n.itemsAPIConnect(n.state)},n.createPages=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=JSON.parse(JSON.stringify(Object(j.a)(a))),r={};return Y=[],"all"===t?(r.bumpersFiltered=n,r.bumpSelectedLength=n.length,r.numberOfPages=Number.isInteger(r.bumpSelectedLength/e)?r.bumpSelectedLength/e:parseInt(r.bumpSelectedLength/e)+1,r.testing="testing obj loading",r.pageNumbersArr=$,r.pageNumGen=function(){var t=[],a=0,n=0;function o(){for(;a<r.bumpSelectedLength&&n<e;)t.push(r.bumpersFiltered[a]),a++,n++;return n=0,t}function l(e){Q.push(e)}Q=[],r.pages=[];for(var i=0;i<r.numberOfPages;i++){var c;c=o(),r.pages[i]=c,l(i),t=[]}return r.pageNumbersArr=Q.map((function(e){return e+1})),r}()):(r.bumpersFiltered=n.filter((function(e){return e.category===t})),r.bumpSelectedLength=n.filter((function(e){return e.category===t})).length,r.numberOfPages=Number.isInteger(r.bumpSelectedLength/e)?r.bumpSelectedLength/e:parseInt(r.bumpSelectedLength/e)+1,r.pageNumbersArr=$,r.testing="testing obj loading",r.pageNumGen=function(){var t=[],a=0,n=0;function o(){for(;a<r.bumpSelectedLength&&n<e;)t.push(r.bumpersFiltered[a]),a++,n++;return n=0,t}function l(e){Q.push(e)}Q=[],r.pages=[];for(var i=0;i<r.numberOfPages;i++){var c;c=o(),r.pages[i]=c,l(i),t=[]}return r.pageNumbersArr=Q.map((function(e){return e+1})),Q=[],r}())},n.fontGrow=function(){document.querySelectorAll("div.bumper-long").forEach((function(e){for(var t=10,a=Number(e.firstElementChild.clientWidth.toString().replace(/D/g,"")),n=Number(e.firstElementChild.firstChild.clientWidth.toString().replace(/D/g,""));a-n>=60;)t+=2,a=Number(e.firstElementChild.clientWidth.toString().replace(/D/g,"")),n=Number(e.firstElementChild.firstChild.clientWidth.toString().replace(/D/g,"")),e.firstElementChild.firstChild.style.fontSize=t+"px"}))},n.state={apiData:[],locallyStoredCart:window.localStorage,testerLocStor:window.localStorage.tester,cartLoggedinStatus:document.cookie.split(";").find((function(e){return e.includes("bsLoggedIn")}))?"Complete Order":"Log in to complete order",sidebarPrevBumpers:"",sidebarCurrBumpers:[{title:"test",id:1},{title:"test",id:2}],sidebarCurrBumpersPages:$,currBumpersPages:Y,sidebarPages:Y,bumGenLoad:n.createPages,radioCatSelectedPageNums:n.createPages(Object(h.a)(n),20,"all").pageNumbersArr,radioCatSelected:"all",radioPagesFiltered:[{title:"PAGE LOADING...",id:1}],bumperTextSize:"300%",inCartTotal:JSON.parse(localStorage.getItem("inCartLocStoreCount")),inCartItems:[],textStyleInCart:{text:{color:"blue",fontWeight:"bold",fontSize:"medium"}},textStyleOutCart:{text:{color:"red",fontWeight:"bold",fontSize:"medium"}}},n.handlePageChange=n.handlePageChange.bind(Object(h.a)(n)),n.handlePageChangeCat=n.handlePageChangeCat.bind(Object(h.a)(n)),n.handleRadioCatChange=n.handleRadioCatChange.bind(Object(h.a)(n)),n.handleAddCartClick=n.handleAddCartClick.bind(Object(h.a)(n)),n.dataPullFromAPI=n.dataPullFromAPI.bind(Object(h.a)(n)),n.bumperCatMapToPages=n.bumperCatMapToPages.bind(Object(h.a)(n)),n.loopThroughBumperCatMapToPages=n.loopThroughBumperCatMapToPages.bind(Object(h.a)(n)),n.createPages=n.createPages.bind(Object(h.a)(n)),n.itemsAPIConnect=n.itemsAPIConnect.bind(Object(h.a)(n)),n.switchGenCreate=n.switchGenCreate.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.dataPullFromAPI()}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({radioCatSelectedPageNums:z.all.pageNumbersArr,radioCatSelected:"all",radioPagesFiltered:z.all.pages[0]})}),1e3)}},{key:"dataPullFromAPI",value:function(){var e=Object(P.a)(w.a.mark((function e(){var t,a=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage,e.next=3,fetch("/api/bumpers",{method:"get",headers:{"Content-Type":"application/json",localStore:JSON.stringify(t)}}).then((function(e){return e.json()})).then((function(e){a.setState({apiData:e,localStor:window.localStorage})})).then((function(){return a.loopThroughBumperCatMapToPages()}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleAddCartClick",value:function(e){var t=this.state.inCartItems;t.push(e.target.parentNode.previousSibling,e.target.parentNode.parentNode),this.setState((function(e){return{inCartTotal:JSON.parse(localStorage.getItem("inCartLocStoreCount")),inCartItems:t}})),t=[]}},{key:"handlePageChange",value:function(e){this.setState({sidebarCurrBumpers:[{title:"test",id:1},{title:"test",id:2}]})}},{key:"handlePageChangeCat",value:function(e){this.setState({radioPagesFiltered:z[e.target.getAttribute("customcattag")].pages[e.currentTarget.value-1]})}},{key:"handleRadioCatChange",value:function(e){e.stopPropagation(),this.setState({radioCatSelected:e.target.value,radioCatSelectedPageNums:z[e.currentTarget.value].pageNumbersArr,radioPagesFiltered:z[e.currentTarget.value].pages[0]})}},{key:"loopThroughBumperCatMapToPages",value:function(){var e,t=Object(I.a)(W);try{for(t.s();!(e=t.n()).done;){var a=e.value;this.bumperCatMapToPages(a.value)}}catch(n){t.e(n)}finally{t.f()}this.setState({pagesForCats:z})}},{key:"switchGenCreate",value:function(e){var t;t=this.createPages(20,e,this.state.apiData),z[e]=t}},{key:"componentDidUpdate",value:function(){this.fontGrow()}},{key:"render",value:function(){return this.state.apiData?r.a.createElement(G.Provider,{value:{prevBumpers:this.state.prevBumpers,apiData:this.state.apiData,sidebarPrevBumpers:this.state.sidebarPrevBumpers,sidebarCurrBumpers:this.state.sidebarCurrBumpers,sidebarCurrBumpersPages:this.state.sidebarCurrBumpersPages,radioCatSelected:this.state.radioCatSelected,radioCatSelectedPageNums:this.state.radioCatSelectedPageNums,radioPagesFiltered:this.state.radioPagesFiltered,handlePageChange:this.handlePageChange,handlePageChangeCat:this.handlePageChangeCat,handleRadioCatChange:this.handleRadioCatChange,handleAddCartClick:this.handleAddCartClick,inCartTotal:JSON.parse(localStorage.getItem("inCartLocStoreCount")),inCartItems:this.state.inCartItems,cartLoggedinStatus:this.state.cartLoggedinStatus,textStyle:this.state.textStyle,textSize:this.state.bumperTextSize}},this.props.children):r.a.createElement("div",null,"Loading...please wait")}}]),a}(n.Component),$=[],Q=[],Y=[],_=G,K=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.removeCookies=function(){fetch("/api/cookie-logout",{method:"POST",headers:{},body:""}).then((function(e){return console.log(e,"res cookie cleared?")}))},n.state={isLoggedIn:!1,regFormHideClasses:"register-form hide-element",logFormHideClasses:"login-form hide-element",contactFormHide:"hide-element"},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleLogin=n.handleLogin.bind(Object(h.a)(n)),n.handleLogout=n.handleLogout.bind(Object(h.a)(n)),n.handleLogFormClick=n.handleLogFormClick.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"handleLogFormClick",value:function(){"login-form hide-element"===this.state.logFormHideClasses?this.setState({logFormHideClasses:"login-form"}):this.setState({logFormHideClasses:"login-form hide-element"})}},{key:"handleCookie",value:function(e){console.log(e,"status....start of condition");var t=document.cookie,a={loggedIn:e};decodeURIComponent(t);e?(console.log(e,"status...true...if(status)"),fetch("/api/cookie-login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify(a)}).then((function(t){return console.log(e,t,"res res res")}))):e||console.log(e,"status...false...else/if(!status)")}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault();var a={loginEmailInput:this.state.loginEmailInput,loginPasswordInput:this.state.loginPasswordInput};fetch("/api/login",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){return t.setState((function(t){return{isLoggedIn:e.isLoggedIn,logFormHideClasses:e.logFormHideClasses}}))})).then((function(e){return t.handleCookie(t.state.isLoggedIn)}))}},{key:"handleLogout",value:function(e){var t=this;e.preventDefault();var a={loginEmailInput:this.state.loginEmailInput};fetch("/api/logout",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t.setState({isLoggedIn:e.isLoggedIn})})).then(this.removeCookies())}},{key:"render",value:function(){return this.state.isLoggedIn?r.a.createElement(n.Fragment,null,r.a.createElement(X,{text:"Logout",click:this.handleLogout},","),r.a.createElement(k,{showForm:this.state.logFormHideClasses,checkDB:this.handleLogin}),r.a.createElement(m.c,null,r.a.createElement(y,{exact:!0,path:"/dashboard",component:y}),r.a.createElement(m.a,{exact:!0,path:"/admin",component:x}))):this.state.isLoggedIn?void 0:r.a.createElement(n.Fragment,null,r.a.createElement(X,{text:"Login",click:this.handleLogFormClick},","),r.a.createElement(k,{showForm:this.state.logFormHideClasses,trackText:this.handleChange,checkDB:this.handleLogin}))}}]),a}(n.Component);function X(e){return"Login"===e.text?r.a.createElement(n.Fragment,null,r.a.createElement("button",{onClick:e.click,style:{display:"inline-block",height:"20px",verticalAlign:"middle",fontWeight:"bold",color:"white",backgroundColor:"var(--main-highlight-color)"}},e.text)):r.a.createElement(n.Fragment,null,r.a.createElement("button",{onClick:e.click,style:{display:"inline-block",height:"20px",verticalAlign:"middle",fontWeight:"bold",color:"var(--secondary-highlight-color)",backgroundColor:"var(--main-background-color)"}},e.text))}var Z=a(18);n.Component;var ee=function(e){var t=Object(n.useState)(!1),a=Object(Z.a)(t,2),o=(a[0],a[1],Object(n.useState)("red")),l=Object(Z.a)(o,2),i=(l[0],l[1],Object(n.useState)("")),c=Object(Z.a)(i,2),s=(c[0],c[1],Object(n.useState)("")),u=Object(Z.a)(s,2);return u[0],u[1],r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"About SolveJS Bumpers"),r.a.createElement("p",null,"SolveJS Bumpers is your source for humerous bumper stickers. If you enjoy looking back to see someone smiling or laughing because of the bumper sticker on your vehicle, you are at the right place now."),r.a.createElement("p",null,"If you feel that little internal tickle or giggle in knowing that your bumper sticker has placed a smile on someone's face, you're at the right site."),r.a.createElement("p",null,"We trust you will find the best bumper stickers money can buy to help lighten the mood for those who read your stickers as they make their commute to / from work."))};n.Component;function te(){return r.a.createElement(n.Fragment,null,"Add to Cart")}var ae=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).cartNumToIcon=function(){},n.handleClickChangeAddToCart=function(e){var t,a="cartItemLocal-".concat(e.target.parentNode.previousSibling.id),r=localStorage.getItem("inCartLocStoreArr");t=JSON.parse(r),function(){var e=t.indexOf(a);-1!==e&&(t.splice(e,1),localStorage.setItem("inCartLocStoreArr",JSON.stringify(t)))}(),n.setState((function(e){return{currentCartTotal:t.length,totalCost:1.99*Number(localStorage.getItem("inCartLocStoreCount"))}}))},n.handleHoverCartButton=function(){document.cookie.split(";").find((function(e){return e.includes("bsLoggedIn")}))?n.setState({titleForButton:"",purchButtonDisabled:!1}):n.setState({titleForButton:"Please login to complete your order.",purchButtonDisabled:!0})},n.handleOrder=Object(P.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("inCartLocStoreArr"),e.next=3,fetch("/api/order",{method:"POST",referrerPolicy:"same-origin",headers:{accept:"text/html","content-type":"application/json"},body:JSON.stringify({user:"test",items:JSON.stringify(t)})}).then((function(e){return console.log("response.json()",e)})).then(localStorage.setItem("inCartLocStoreArr","[]"),localStorage.setItem("inCartLocStoreCount",0)).then(n.setState({visibility:!n.state.visibility}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)}))),n.totalChange=function(){n.setState((function(e){return{totalCost:document.querySelectorAll("span.cart-span")?1.99*Number(localStorage.getItem("inCartLocStoreCount")):null}}))},n.state={destrData:n.props.contextData,currentCartTotal:JSON.parse(localStorage.getItem("inCartLocStoreCount")),visibility:!1,purchButtonDisabled:!0,titleForButton:"Please login to complete your order.",totalCost:0},n}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(){console.log(this.state.destrData,"inside did mount"),this.setState({destrData:this.props.contextData,currentCartTotal:JSON.parse(localStorage.getItem("inCartLocStoreCount")),totalCost:document.querySelectorAll("span.cart-span")?1.99*Number(localStorage.getItem("inCartLocStoreCount")):null})}},{key:"componentDidUpdate",value:function(){var e,t=document.querySelector("li.cart");e=this.state.currentCartTotal;var a=document.createElement("span");t.appendChild(a),a.textContent="",t.childNodes[1].textContent=e,t.children.length>2&&t.removeChild(t.childNodes[2])}},{key:"componentDidMount",value:function(){var e,t=document.querySelector("li.cart");e=this.state.currentCartTotal;var a=document.createElement("span");t.appendChild(a),a.textContent="",t.childNodes[1].textContent=e,t.children.length>2&&t.removeChild(t.childNodes[2]),this.setState((function(e){return{totalCost:1.99*Number(localStorage.getItem("inCartLocStoreCount"))}}))}},{key:"render",value:function(){var e=this,t=localStorage.getItem("inCartLocStoreArr")||"[]",a=JSON.parse(t);JSON.parse(JSON.stringify(Object(j.a)(this.props.contextData)));return 0!==this.state.destrData.length&&a.length>0?r.a.createElement("div",{id:"cart-content",className:"main-content"},r.a.createElement("h2",{style:{textAlign:"center",fontWeight:"bold"}},"Current Cart Items"),r.a.createElement("div",{id:"main-wrapper",className:"content-grid"},r.a.createElement("div",{id:"bumper-left",className:"content-left bumper-flex",key:7},a.map((function(t){return r.a.createElement(F,{key:Number(t.substring(14)),clickCartButtonHandle:e.handleClickChangeAddToCart,text:"Remove - $1.99",buttonClass:"add-to-cart-selected"}," ",r.a.createElement("div",{id:e.state.destrData[Number(t.substring(14))].id,style:{display:"block",width:"100%",height:"75px"}},r.a.createElement("span",{className:"cart-span",onClick:e.totalChange,style:{height:"75px",lineHeight:"75px",display:"inline-block",color:H(),backgroundColor:H()}},e.state.destrData[Number(t.substring(14))].title)))}))),r.a.createElement("div",{style:{textAlign:"center",margin:"auto",marginTop:"15px",width:"max-content"}},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(re,{show:!this.state.visibility,totalCost:this.state.totalCost,totalChange:this.totalChange})),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(ne,{disabled:this.state.purchButtonDisabled,text:"Complete Purchase",title:this.state.titleForButton,order:this.handleOrder,hover:this.handleHoverCartButton}))))):0===a.length?r.a.createElement("div",{id:"contact-wrapper",className:"content-left"},r.a.createElement("h2",null,"Cart is Empty")):r.a.createElement("div",{id:"contact-wrapper",className:"content-left"},r.a.createElement("h2",null,"Cart is Empty Else"))}}]),a}(n.Component);function ne(e){return r.a.createElement("button",{disabled:e.disabled,onMouseOver:e.hover,onClick:e.order,title:e.title},e.text)}function re(e){return e.show?r.a.createElement("div",null,r.a.createElement(oe,{totalCost:e.totalCost,totalChange:e.totalChange}),r.a.createElement("form",{id:"cc-pay",key:1},r.a.createElement("input",{type:"text",value:"Name on Card"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:Number(0x3f35ba7b14c7f)}),r.a.createElement("br",null),r.a.createElement("input",{type:"data",value:"11/2023"}),r.a.createElement("br",null))):null}function oe(e){return r.a.createElement("span",null,"Cart Total:  ",e.totalCost)}var le=function(e){return r.a.createElement(_.Consumer,null,(function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(ae,{contextData:e.apiData},n.Children))}))},ie=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return null===localStorage.getItem("inCartLocStoreCount")&&(localStorage.setItem("inCartLocStoreArr","[]"),localStorage.setItem("inCartLocStoreCount","0")),r.a.createElement("div",{id:"body"},r.a.createElement(f,{handleRegFormClick:this.handleRegFormClick,handleLogFormClick:this.handleLogFormClick,handleContactFormClick:this.handleContactFormClick}),r.a.createElement(b,{style:!0}),r.a.createElement(m.c,null,r.a.createElement(V,null,r.a.createElement(m.a,{exact:!0,path:"/about",component:ee}),r.a.createElement(m.a,{exact:!0,path:"/",component:M}),r.a.createElement(m.a,{exact:!0,path:"/contact",component:g}),r.a.createElement(m.a,{path:"/cart",component:le}),r.a.createElement(K,{component:K},r.a.createElement(m.a,{exact:!0,path:"/admin",component:x})))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"#",component:k}),r.a.createElement(m.a,{path:"#",component:E})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.835a7a76.chunk.js.map