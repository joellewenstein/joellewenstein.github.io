(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(e,t,a){"use strict";a.r(t);a(205),a(34);var n=a(0),r=a.n(n),o=a(194),i=a(206),s=a.n(i),l=a(181),c=a(184),d=a(188),p=a(211),u=a.n(p),m=a(190);var w=[m.a.quoraDesign,m.a.quoraDesignManagement,m.a.hustleDesignManagement,m.a.retargeting],h=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={password:s.a.load("password")},a.correctPassword="daivernon",a.handleChange=a.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.handleChange=function(e){var t=e.target.value.toLowerCase();this.setState({password:t}),s.a.save("password",t)},i.renderPassword=function(){return r.a.createElement("div",{className:u.a.passwordArea},r.a.createElement("label",null,"Please enter password:",r.a.createElement("input",{type:"text",value:this.state.password,onChange:this.handleChange})))},i.renderPortfolio=function(){return w.map(function(e,t){return r.a.createElement("div",{className:u.a.tile,key:e.name},r.a.createElement("div",{className:u.a.tileImage},r.a.createElement(d.a,{queryKey:e.work[0].queryKey})),r.a.createElement("div",{className:u.a.tileText},r.a.createElement("div",null,r.a.createElement(o.a,{to:e.link},e.name)),r.a.createElement("div",{className:u.a.year},e.year)))})},i.render=function(){return r.a.createElement(l.a,{title:"Joel Lewenstein Portfolio"},r.a.createElement(c.a,{title:"Joel Lewenstein Portfolio"}),r.a.createElement("div",null,this.state.password===this.correctPassword&&this.renderPortfolio()),r.a.createElement("div",null,this.state.password!==this.correctPassword&&this.renderPassword()))},n}(r.a.Component);t.default=h},184:function(e,t,a){"use strict";var n=a(185),r=a(0),o=a.n(r),i=a(11),s=a.n(i),l=a(193),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,s=n.data.site,l=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=d},185:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Lewenstein",description:"Product Designer",author:"@joellewenstein"}}}}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-a2440830680445d08649.js.map