(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(185),s=a(192).a.hustleRedesign;t.default=function(){return i.a.createElement(n.a,{item:s})}},182:function(e,t,a){var r=a(6),i=a(8),n=a(35),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},184:function(e,t,a){"use strict";a(182)("fixed",function(e){return function(){return e(this,"tt","","")}})},185:function(e,t,a){"use strict";a(34);var r=a(0),i=a.n(r),n=a(183),s=a(190),l=a(194),o=a.n(l);t.a=function(e){var t=e.item;return i.a.createElement(n.a,{title:t.name,subtitle:t.year},i.a.createElement("div",{className:o.a.section},i.a.createElement("h3",null,"Context"),i.a.createElement("p",null,t.context)),t.role&&i.a.createElement("div",{className:o.a.section},i.a.createElement("h3",null,"Role"),i.a.createElement("p",null,t.role)),i.a.createElement("div",{className:o.a.section},i.a.createElement("h3",null,"Work"),t.work.map(function(e,t){return i.a.createElement("div",{key:e.queryKey},i.a.createElement(s.a,{queryKey:e.queryKey,caption:e.caption}))})),t.results&&i.a.createElement("div",{className:o.a.section},i.a.createElement("h3",null,"Results"),i.a.createElement("p",null,t.results)))}},191:function(e,t,a){"use strict";a(29),a(20),a(12),a(59),a(118),a(184);var r=a(15);t.__esModule=!0,t.default=void 0;var i,n=r(a(60)),s=r(a(61)),l=r(a(119)),o=r(a(120)),d=r(a(0)),u=r(a(11)),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=c(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+s+l+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(V,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},V=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,o.default)({opacity:z?1:0,transition:k?"opacity "+b+"ms":"none"},l),C="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},x=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&T,l,f),q={title:t,alt:this.state.isVisible?"":a,style:x,className:g};if(p){var P=p,j=P[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),C&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&T)}),j.base64&&d.default.createElement(O,{src:j.base64,spreadProps:q,imageVariants:P,generateSources:w}),j.tracedSVG&&d.default.createElement(O,{src:j.tracedSVG,spreadProps:q,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:L},j,{imageVariants:P}))}}))}if(m){var W=m,M=W[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},C&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:C,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},k&&T)}),M.base64&&d.default.createElement(O,{src:M.base64,spreadProps:q,imageVariants:W,generateSources:w}),M.tracedSVG&&d.default.createElement(O,{src:M.tracedSVG,spreadProps:q,imageVariants:W,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(V,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:L},M,{imageVariants:W}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});z.propTypes={resolutions:k,sizes:N,fixed:u.default.oneOfType([k,u.default.arrayOf(k)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=z;t.default=C}}]);
//# sourceMappingURL=component---src-pages-portfolio-hustle-redesign-js-ca419b06fea08d3d0be9.js.map