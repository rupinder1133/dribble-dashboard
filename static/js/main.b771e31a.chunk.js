(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports={container:"accordion_container__19DnE",controlIcons:"accordion_controlIcons__1Ptpq",headerIcon:"accordion_headerIcon__FfeLI",headerLabel:"accordion_headerLabel__Vhrw1",options:"accordion_options__q8wqs",isOpen:"accordion_isOpen__2HaNG",isContentVisible:"accordion_isContentVisible__3mmRQ",option:"accordion_option__2uaXo",header:"accordion_header__KSBK2"}},11:function(e,a,t){e.exports={profileElements:"profile_profileElements__2Iwf-",profile:"profile_profile__2wqo1",image:"profile_image__2oobx",name:"profile_name__Mafex",status:"profile_status__2BwUL",description:"profile_description__1Du-2",settings:"profile_settings__2MHIe",settingsOnFocus:"profile_settingsOnFocus__3M4G_"}},155:function(e,a,t){e.exports={container:"widget_container__1ThYx"}},184:function(e,a,t){e.exports=t(371)},189:function(e,a,t){},19:function(e,a,t){e.exports={header:"dashboard_header__2gN8S",filterOptions:"dashboard_filterOptions__uxzD5",filter:"dashboard_filter__18gax",months:"dashboard_months__3y13N",chartContainer:"dashboard_chartContainer__27p65",font:"dashboard_font__elDPh"}},20:function(e,a,t){e.exports={home:"navBar_home__2PyWl",option:"navBar_option__3ccJB",secondaryOption:"navBar_secondaryOption__3Leh6",scrollable:"navBar_scrollable__tz26l"}},24:function(e,a,t){e.exports={select:"dropdown_select__2Z59b",optionCommonStyle:"dropdown_optionCommonStyle__3fumI",placeholder:"dropdown_placeholder__jle5-",option:"dropdown_option__3SZgp",placeholderLabel:"dropdown_placeholderLabel__3TXeS",options:"dropdown_options__lYzgy",controlIcons:"dropdown_controlIcons__z1VsC"}},371:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),l=t(61),c=t.n(l);t(189),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(159),i=t(25),s=t(2),m=t.n(s),u=t(155),d=t.n(u),p=function(e){var a=e.children,t=e.className;return o.a.createElement("div",{className:m()(d.a.container,t)},a)},_=t(19),h=t.n(_),b=t(36),f=t(37),v=t(39),E=t(38),O=t(40),g=t(8),N=t(7),y=t(27),C=t(93),w=t.n(C),k=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(o)))).state={inFocus:!1},t.onFocus=function(){t.setState({inFocus:!0})},t.onBlur=function(){return t.setState({inFocus:!1})},t}return Object(O.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e,a=this.props,t=a.children,n=a.className,l=a.onClick,c=a.onFocusClassName,r=this.state.inFocus;return o.a.createElement("button",{className:m()(w.a.button,n,(e={},Object(y.a)(e,w.a.btnFocus,r),Object(y.a)(e,c,r),e)),onFocus:this.onFocus,onBlur:this.onBlur,onMouseUp:this.onBlur,onMouseDown:this.onFocus,onClick:l},t)}}]),a}(n.Component),I=t(24),j=t.n(I),x=o.a.createElement("div",{className:j.a.controlIcons},o.a.createElement(g.a,{icon:N.c}),o.a.createElement(g.a,{icon:N.b})),S=o.a.createElement("div",{className:j.a.controlIcons},o.a.createElement(g.a,{icon:N.b})),V=function(e){function a(e){var t;Object(b.a)(this,a),(t=Object(v.a)(this,Object(E.a)(a).call(this,e))).toggleOpen=function(){var e=t.state.isOpen;t.setState({isOpen:!e},function(){t.state.isOpen?(document.addEventListener("click",t.handleOutsideClick),document.addEventListener("keydown",t.handleEsc)):(document.removeEventListener("click",t.handleOutsideClick),document.removeEventListener("keydown",t.handleEsc))})},t.handleOutsideClick=function(e){t.toggleOpen(e)},t.handleEsc=function(e){"Escape"===e.key&&t.toggleOpen(e)},t.selectOption=function(e,a){var n=t.props,o=n.options,l=n.onClick;t.setState({selectedOptionIndex:a},t.toggleOpen),l&&l(e,o[a])};var n=e.options.findIndex(function(a){return a.value===e.selectedValue}),o=-1===n?0:n;return t.state={isOpen:!1,selectedOptionIndex:o},t}return Object(O.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.options,n=a.placeHolder,l=a.className,c=this.state,r=c.selectedOptionIndex,i=c.isOpen,s=n||t[r].label;return o.a.createElement("div",{className:m()(j.a.select,l)},o.a.createElement(k,{className:j.a.placeholder,onClick:this.toggleOpen},o.a.createElement("div",{className:j.a.placeholderLabel},s),i?S:x),i?o.a.createElement("div",{className:m()(j.a.options)},t.map(function(a,t){return o.a.createElement(k,{key:a.value,className:j.a.option,onClick:function(a){return e.selectOption(a,t)}},a.label)})):null)}}]),a}(n.Component),F=[{value:"jan",label:"January"},{value:"feb",label:"February"},{value:"mar",label:"March"},{value:"apr",label:"April"},{value:"may",label:"May"},{value:"jun",label:"June"},{value:"jul",label:"July"},{value:"aug",label:"August"},{value:"sep",label:"September"},{value:"oct",label:"October"},{value:"nov",label:"November"},{value:"dec",label:"December"}],L=[{value:"15",label:"2015"},{value:"16",label:"2016"},{value:"18",label:"2018"},{value:"19",label:"2019"}],B=Object(r.a)(Array(31)).map(function(e,a){return{x:a+1,y:Math.round(7e3*Math.random()+1500)}}),M=function(e){return"".concat(e/1e3,"k")},D=function(){return o.a.createElement("div",null,o.a.createElement(p,{className:h.a.headerWidget},o.a.createElement("div",{className:h.a.header},o.a.createElement("strong",null,"Daily Visitors"),o.a.createElement("div",{className:h.a.filterOptions},o.a.createElement(V,{options:F,selectedValue:F[11].value,className:m()(h.a.filter,h.a.months)}),o.a.createElement(V,{options:L,selectedValue:L[2].value,className:m()(h.a.filter)}))),o.a.createElement("div",{className:h.a.chartContainer},o.a.createElement(i.d,{width:"100%",height:200,className:"dailyVisitorsChartContainer"},o.a.createElement(i.b,{data:B,barSize:12},o.a.createElement(i.c,{stroke:"#e2e5ee",vertical:!1,className:"ola"}),o.a.createElement(i.f,{dataKey:"x",axisLine:!1,tickLine:!1,tick:{fill:"#93949a",fontSize:10},tickMargin:5}),o.a.createElement(i.g,{ticks:[3e3,6e3,9e3],tickFormatter:M,orientation:"right",axisLine:!1,tickLine:!1,width:20,className:h.a.font,tick:{fill:"#93949a",fontSize:10}}),o.a.createElement(i.e,{cursor:!1}),o.a.createElement(i.a,{dataKey:"y",fill:"#1D68D5"}))))))},P=t(94),z=t.n(P),J=t(95),A=t.n(J),K=function(e){var a=e.className;return o.a.createElement("div",{className:m()(A.a.status,A.a.online,a)})},W=t(11),H=t.n(W),q=function(){return o.a.createElement("div",{className:H.a.profile},o.a.createElement("div",{className:m()(H.a.image,H.a.profileElements)},o.a.createElement(k,{className:H.a.settings,onFocusClassName:H.a.settingsOnFocus},o.a.createElement(g.a,{icon:N.d}))),o.a.createElement("div",{className:m()(H.a.name,H.a.profileElements)},o.a.createElement("strong",null,"Martha Blair"),o.a.createElement(K,{className:H.a.status})),o.a.createElement("div",{className:m()(H.a.description,H.a.profileElements)},"Developer"))},T=t(10),X=t.n(T),Y=o.a.createElement("div",{className:X.a.controlIcons},o.a.createElement(g.a,{icon:N.c}),o.a.createElement(g.a,{icon:N.b})),Z=o.a.createElement("div",{className:X.a.controlIcons},o.a.createElement(g.a,{icon:N.b})),G=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(o)))).state={isOpen:!1,isContentVisible:!1},t.toggleOpen=function(){if(t.props.options){var e=t.state.isOpen;t.setState({isOpen:!e,isContentVisible:!0})}},t.toggleContentVisibility=function(){var e=t.state.isOpen;t.setState({isContentVisible:e})},t}return Object(O.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.setState({isOpen:!!this.props.header.isOpen,isContentVisible:!!this.props.header.isOpen})}},{key:"render",value:function(){var e,a=this.props,t=a.header,n=a.options,l=this.state,c=l.isOpen,r=l.isContentVisible;return o.a.createElement("div",{className:X.a.container},o.a.createElement(k,{className:m()(X.a.option,X.a.header,Object(y.a)({},X.a.isOpen,c)),onClick:this.toggleOpen},o.a.createElement(g.a,{icon:t.icon,className:X.a.headerIcon}),o.a.createElement("div",{className:X.a.headerLabel},t.label),n?c?Z:Y:null),n?o.a.createElement("div",{className:m()(X.a.options,(e={},Object(y.a)(e,X.a.isOpen,c),Object(y.a)(e,X.a.isContentVisible,r),e)),onTransitionEnd:this.toggleContentVisibility},n.map(function(e){return o.a.createElement(k,{key:e.label,className:X.a.option},e.label)})):null)}}]),a}(n.Component),R=t(43),U=t.n(R),Q=function(e){var a=e.className;return o.a.createElement("div",{className:m()(U.a.container,a)},o.a.createElement("div",{className:U.a.header},"Recently Viewed"),o.a.createElement(k,{className:U.a.option},"Overall Performance ",o.a.createElement(g.a,{icon:N.h})),o.a.createElement(k,{className:U.a.option},"Invoice #930 ",o.a.createElement(g.a,{icon:N.h})),o.a.createElement(k,{className:U.a.option},"Customer: Minerva Viewer ",o.a.createElement(g.a,{icon:N.h})))},$=t(20),ee=t.n($),ae=[{header:{icon:N.e,label:"Dashboard",isOpen:!0},options:[{label:"Page Visitors"},{label:"Post Performance"},{label:"Team Overall"}]},{header:{icon:N.a,label:"Calender"}},{header:{icon:N.g,label:"Inbox"},options:[{label:"Starred"},{label:"Others"}]},{header:{icon:N.i,label:"Invoicing"}},{header:{icon:N.j,label:"Lab / Experimental"}}],te=function(){return o.a.createElement("nav",null,o.a.createElement(k,{className:m()(ee.a.home,ee.a.option)},o.a.createElement(g.a,{icon:N.f})),o.a.createElement("div",{className:m()(ee.a.option)},o.a.createElement(q,null)),o.a.createElement("div",{className:ee.a.scrollable},ae.map(function(e){return o.a.createElement("div",{className:m()(ee.a.option,ee.a.secondaryOption),key:e.header.label},o.a.createElement(G,e))}),o.a.createElement("div",{className:m()(ee.a.option,ee.a.secondaryOption)},o.a.createElement(Q,null))))},ne=t(65),oe=t.n(ne),le=t(158),ce=Object(le.a)(o.a,{useCssModules:!1}),re=function(){var e=[{value:"en",label:o.a.createElement("span",null,o.a.createElement(ce,{code:"gb",className:oe.a.flagIcon}),"Eng")},{value:"fr",label:o.a.createElement("span",null,o.a.createElement(ce,{code:"fr",className:oe.a.flagIcon}),"French")}];return o.a.createElement("header",null,o.a.createElement("strong",null,"Dashboard"),o.a.createElement(V,{options:e,className:oe.a.languageSelect}))},ie=function(){return o.a.createElement("div",{className:z.a.appContainer},o.a.createElement(te,null),o.a.createElement("div",{className:z.a.mainContent},o.a.createElement(re,null),o.a.createElement("main",null,o.a.createElement(D,null))))};c.a.render(o.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,a,t){e.exports={container:"recentlyViewed_container__2mghy",header:"recentlyViewed_header__2-OZm",option:"recentlyViewed_option__2F_nB"}},65:function(e,a,t){e.exports={flagIcon:"header_flagIcon__2yJtt",languageSelect:"header_languageSelect__38emb"}},93:function(e,a,t){e.exports={button:"button_button__H5057",btnFocus:"button_btnFocus__h_Wtv"}},94:function(e,a,t){e.exports={appContainer:"app_appContainer__30PKY",mainContent:"app_mainContent__3hWpH"}},95:function(e,a,t){e.exports={status:"userStatus_status__3A_NX",online:"userStatus_online__2KNId"}}},[[184,1,2]]]);
//# sourceMappingURL=main.b771e31a.chunk.js.map