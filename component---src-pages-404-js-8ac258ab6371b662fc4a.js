(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(180),c=a(181);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},177:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(58),s=a.n(o);a.d(t,"a",function(){return s.a});a(178);var l=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},178:function(e,t,a){var n;e.exports=(n=a(179))&&n.default||n},179:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(82),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=(a(177),a(183)),s=a.n(o),l=function(e){var t=e.siteTitle;return r.a.createElement("header",{className:s.a.header},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,t)))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(184),function(e){var t=e.title,a=void 0===t?"":t,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{siteTitle:a}),r.a.createElement("div",{className:"content"},r.a.createElement("main",null,n)))});d.propTypes={children:c.a.node.isRequired};t.a=d},181:function(e,t,a){"use strict";var n=a(182),r=a(0),i=a.n(r),c=a(11),o=a.n(c),s=a(185),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,o=n.data.site,s=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Lewenstein",description:"Product Designer",author:"@joellewenstein"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-8ac258ab6371b662fc4a.js.map