(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(e,t,a){"use strict";a.r(t);a(206),a(34);var n=a(0),r=a.n(n),o=a(181),s=a(207),i=a.n(s),l=a(185),c=a(187),d=a(191),p=a(212),u=a.n(p),m=a(192);var w=[m.a.quoraDesign,m.a.quoraDesignManagement,m.a.hustleDesignManagement,m.a.retargeting],h=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={password:i.a.load("password")},a.correctPassword="daivernon",a.handleChange=a.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),console.log("Cookie says passowrd is: "+i.a.load("password")),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.handleChange=function(e){this.setState({password:e.target.value}),i.a.save("password",e.target.value)},s.renderPassword=function(){return r.a.createElement("div",{className:u.a.passwordArea},r.a.createElement("label",null,"Please enter password:",r.a.createElement("input",{type:"text",value:this.state.password,onChange:this.handleChange})))},s.renderPortfolio=function(){return w.map(function(e,t){return r.a.createElement("div",{className:u.a.tile,key:e.name},r.a.createElement("div",{className:u.a.tileImage},r.a.createElement(d.a,{queryKey:e.work[0].queryKey})),r.a.createElement("div",{className:u.a.tileText},r.a.createElement("div",null,r.a.createElement(o.a,{to:e.link},e.name)),r.a.createElement("div",{className:u.a.year},e.year)))})},s.render=function(){return r.a.createElement(l.a,{title:"Joel Lewenstein Portfolio"},r.a.createElement(c.a,{title:"Joel Lewenstein Portfolio"}),this.state.password===this.correctPassword&&this.renderPortfolio(),this.state.password!==this.correctPassword&&this.renderPassword())},n}(r.a.Component);t.default=h},187:function(e,t,a){"use strict";var n=a(188),r=a(0),o=a.n(r),s=a(11),i=a.n(s),l=a(195),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,i=n.data.site,l=t||i.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=d},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Lewenstein",description:"Product Designer",author:"@joellewenstein"}}}}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-0b5cade73e9ee04b76b3.js.map