(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(180),c=a(181);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},177:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(11),c=a.n(i),l=a(58),s=a.n(l);a.d(t,"a",function(){return s.a});a(178);var o=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},178:function(e,t,a){var n;e.exports=(n=a(179))&&n.default||n},179:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),l=a(82),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),c=a.n(i),l=(a(177),a(183)),s=a.n(l),o=function(e){var t=e.title,a=e.subtitle;return r.a.createElement("header",{className:s.a.header},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:s.a.titles},r.a.createElement("h1",null,t),a&&r.a.createElement("h2",null,a))))};o.propTypes={title:c.a.string,subtitle:c.a.string},o.defaultProps={title:"",subtitle:""};var u=o,d=(a(184),function(e){var t=e.title,a=void 0===t?"":t,n=e.subtitle,i=void 0===n?"":n,c=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{title:a,subtitle:i}),r.a.createElement("div",{className:"content"},r.a.createElement("main",null,c)))});d.propTypes={children:c.a.node.isRequired};t.a=d},181:function(e,t,a){"use strict";var n=a(182),r=a(0),i=a.n(r),c=a(11),l=a.n(c),s=a(185),o=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Lewenstein",description:"Product Designer",author:"@joellewenstein"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-faf1ea8b3377e3b7e06f.js.map