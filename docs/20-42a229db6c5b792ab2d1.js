(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{193:function(t,e,n){var i=n(6),r=n(9),o=n(36),a=/"/g,s=function(t,e,n,i){var r=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},195:function(t,e,n){"use strict";n(18),n(16),n(8),n(46),n(121),n(196);var i=n(17);e.__esModule=!0,e.default=void 0;var r,o=i(n(65)),a=i(n(66)),s=i(n(122)),l=i(n(123)),d=i(n(0)),c=i(n(12)),u=function(t){var e=(0,l.default)({},t),n=e.resolutions,i=e.sizes,r=e.critical;return n&&(e.fixed=n,delete e.resolutions),i&&(e.fluid=i,delete e.sizes),r&&(e.loading="eager"),e.fluid&&(e.fluid=S([].concat(e.fluid))),e.fixed&&(e.fixed=S([].concat(e.fixed))),e},p=function(t){var e=t.fluid,n=t.fixed;return(e&&e[0]||n&&n[0]).src},f=Object.create({}),h=function(t){var e=u(t),n=p(e);return f[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,y=g&&window.IntersectionObserver,v=new WeakMap;function b(t){return t.map(function(t){var e=t.src,n=t.srcSet,i=t.srcSetWebp,r=t.media,o=t.sizes;return d.default.createElement(d.default.Fragment,{key:e},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:o}),d.default.createElement("source",{media:r,srcSet:n,sizes:o}))})}function S(t){var e=[],n=[];return t.forEach(function(t){return(t.media?e:n).push(t)}),e.concat(n)}function N(t){return t.map(function(t){var e=t.src,n=t.media,i=t.tracedSVG;return d.default.createElement("source",{key:e,media:n,srcSet:i})})}function A(t){return t.map(function(t){var e=t.src,n=t.media,i=t.base64;return d.default.createElement("source",{key:e,media:n,srcSet:i})})}function E(t,e){var n=t.srcSet,i=t.srcSetWebp,r=t.media,o=t.sizes;return"<source "+(e?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(e?i:n)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var w=function(t,e){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(t){t.forEach(function(t){if(v.has(t.target)){var e=v.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(t.target),v.delete(t.target),e())}})},{rootMargin:"200px"})),r);return n&&(n.observe(t),v.set(t,e)),function(){n.unobserve(t),v.delete(t)}},D=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.title?'title="'+t.title+'" ':"",o=t.alt?'alt="'+t.alt+'" ':'alt="" ',a=t.width?'width="'+t.width+'" ':"",s=t.height?'height="'+t.height+'" ':"",l=t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"",d=t.loading?'loading="'+t.loading+'" ':"",c=t.draggable?'draggable="'+t.draggable+'" ':"";return"<picture>"+t.imageVariants.map(function(t){return(t.srcSetWebp?E(t,!0):"")+E(t)}).join("")+"<img "+d+a+s+n+i+e+o+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(t){var e=t.src,n=t.imageVariants,i=t.generateSources,r=t.spreadProps,o=d.default.createElement(O,(0,l.default)({src:e},r));return n.length>1?d.default.createElement("picture",null,i(n),o):o},O=d.default.forwardRef(function(t,e){var n=t.sizes,i=t.srcSet,r=t.src,o=t.style,a=t.onLoad,c=t.onError,u=t.loading,p=t.draggable,f=(0,s.default)(t,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:n,srcSet:i,src:r},f,{onLoad:a,onError:c,ref:e,loading:u,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var P=function(t){function e(e){var n;(n=t.call(this,e)||this).seenBefore=g&&h(e),n.addNoScript=!(e.critical&&!e.fadeIn),n.useIOSupport=!m&&y&&!e.critical&&!n.seenBefore;var i=e.critical||g&&(m||!n.useIOSupport);return n.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&e.fadeIn},n.imageRef=d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)((0,a.default)(n))),n.handleRef=n.handleRef.bind((0,a.default)((0,a.default)(n))),n}(0,o.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(t){var e=this;this.useIOSupport&&t&&(this.cleanUpListeners=w(t,function(){var t=h(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:t,imgCached:!!e.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var t,e,n;t=this.props,e=u(t),n=p(e),f[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var t=u(this.props),e=t.title,n=t.alt,i=t.className,r=t.style,o=void 0===r?{}:r,a=t.imgStyle,s=void 0===a?{}:a,c=t.placeholderStyle,p=void 0===c?{}:c,f=t.placeholderClassName,h=t.fluid,m=t.fixed,g=t.backgroundColor,y=t.durationFadeIn,v=t.Tag,S=t.itemProp,E=t.loading,w=t.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,l.default)({opacity:P?1:0,transition:I?"opacity "+y+"ms":"none"},s),x="boolean"==typeof g?"lightgray":g,L={transitionDelay:y+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&L,s,p),k={title:e,alt:this.state.isVisible?"":n,style:T,className:f};if(h){var F=h,j=F[0];return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),x&&d.default.createElement(v,{title:e,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&L)}),j.base64&&d.default.createElement(C,{src:j.base64,spreadProps:k,imageVariants:F,generateSources:A}),j.tracedSVG&&d.default.createElement(C,{src:j.tracedSVG,spreadProps:k,imageVariants:F,generateSources:N}),this.state.isVisible&&d.default.createElement("picture",null,b(F),d.default.createElement(O,{alt:n,title:e,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:D((0,l.default)({alt:n,title:e,loading:E},j,{imageVariants:F}))}}))}if(m){var R=m,V=R[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},o);return"inherit"===o.display&&delete M.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},x&&d.default.createElement(v,{title:e,style:(0,l.default)({backgroundColor:x,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},I&&L)}),V.base64&&d.default.createElement(C,{src:V.base64,spreadProps:k,imageVariants:R,generateSources:A}),V.tracedSVG&&d.default.createElement(C,{src:V.tracedSVG,spreadProps:k,imageVariants:R,generateSources:N}),this.state.isVisible&&d.default.createElement("picture",null,b(R),d.default.createElement(O,{alt:n,title:e,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:D((0,l.default)({alt:n,title:e,loading:E},V,{imageVariants:R}))}}))}return null},e}(d.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),B=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});P.propTypes={resolutions:I,sizes:B,fixed:c.default.oneOfType([I,c.default.arrayOf(I)]),fluid:c.default.oneOfType([B,c.default.arrayOf(B)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=P;e.default=x},196:function(t,e,n){"use strict";n(193)("fixed",function(t){return function(){return t(this,"tt","","")}})},249:function(t,e,n){"use strict";n(250),n(19),n(48),n(37),n(13),n(18),n(16),n(45),n(61),n(8);var i=n(0),r=n.n(i),o=n(79),a=n.n(o);function s(t){var e=!1;return function(){e||(console.warn(t),e=!0)}}s("\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"),s("\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n");var l=s("\n>> Warning, via react-flip-move <<\n\nWhen using \"wrapperless\" mode (by supplying 'typeName' of 'null'), strange things happen when the direct parent has the default \"static\" position.\n\nFlipMove has added 'position: relative' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n"),d=s("\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move's child elements have the html attribute 'disabled' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set 'animation' to false.\n"),c={elevator:{from:{transform:"scale(0)",opacity:"0"},to:{transform:"",opacity:""}},fade:{from:{opacity:"0"},to:{opacity:""}},accordionVertical:{from:{transform:"scaleY(0)",transformOrigin:"center top"},to:{transform:"",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(0)",transformOrigin:"left center"},to:{transform:"",transformOrigin:"left center"}},none:null},u={elevator:{from:{transform:"scale(1)",opacity:"1"},to:{transform:"scale(0)",opacity:"0"}},fade:{from:{opacity:"1"},to:{opacity:"0"}},accordionVertical:{from:{transform:"scaleY(1)",transformOrigin:"center top"},to:{transform:"scaleY(0)",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(1)",transformOrigin:"left center"},to:{transform:"scaleX(0)",transformOrigin:"left center"}},none:null},p=c,f="elevator",h="none",m=function(t,e){for(var n=0;n<e.length;n++)if(t(e[n],n,e))return e[n]},g=function(t,e){for(var n=0;n<e.length;n++)if(!t(e[n],n,e))return!1;return!0},y=function(t){return(y=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)};var v,b,S=(v=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},b={},function(t){return b[t]||(b[t]=v(t)),b[t]}),N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},w=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},D=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function C(t){var e,n;return n=e=function(e){function n(){return A(this,n),D(this,e.apply(this,arguments))}return w(n,e),n.prototype.checkChildren=function(t){},n.prototype.convertProps=function(t){var e={children:t.children,easing:t.easing,onStart:t.onStart,onFinish:t.onFinish,onStartAll:t.onStartAll,onFinishAll:t.onFinishAll,typeName:t.typeName,disableAllAnimations:t.disableAllAnimations,getPosition:t.getPosition,maintainContainerHeight:t.maintainContainerHeight,verticalAlignment:t.verticalAlignment,duration:this.convertTimingProp("duration"),delay:this.convertTimingProp("delay"),staggerDurationBy:this.convertTimingProp("staggerDurationBy"),staggerDelayBy:this.convertTimingProp("staggerDelayBy"),appearAnimation:this.convertAnimationProp(t.appearAnimation,p),enterAnimation:this.convertAnimationProp(t.enterAnimation,c),leaveAnimation:this.convertAnimationProp(t.leaveAnimation,u),delegated:{}};this.checkChildren(e.children);var n=Object.keys(e),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return Object.keys(t).forEach(function(i){-1===e.indexOf(i)&&(n[i]=t[i])}),n}(this.props,n);return i.style=E({position:"relative"},i.style),e.delegated=i,e},n.prototype.convertTimingProp=function(t){var e=this.props[t],i="number"==typeof e?e:parseInt(e,10);return isNaN(i)?n.defaultProps[t]:i},n.prototype.convertAnimationProp=function(t,e){switch(void 0===t?"undefined":N(t)){case"boolean":return e[t?f:h];case"string":return-1===Object.keys(e).indexOf(t)?e[f]:e[t];default:return t}},n.prototype.render=function(){return r.a.createElement(t,this.convertProps(this.props))},n}(i.Component),e.defaultProps={easing:"ease-in-out",duration:350,delay:0,staggerDurationBy:0,staggerDelayBy:0,typeName:"div",enterAnimation:f,leaveAnimation:f,disableAllAnimations:!1,getPosition:function(t){return t.getBoundingClientRect()},maintainContainerHeight:!1,verticalAlignment:"top"},n}function O(t){var e=t.domNode,n=t.styles;Object.keys(n).forEach(function(t){e.style.setProperty(S(t),n[t])})}var P=function(t){var e=t.childDomNode,n={top:0,left:0,right:0,bottom:0,height:0,width:0},i=t.childBoundingBox||n,r=t.parentBoundingBox||n,o=(0,t.getPosition)(e),a=o.top-r.top,s=o.left-r.left;return[i.left-s,i.top-a]},I=function(t,e){var n=e.delay,i=e.duration,r=e.staggerDurationBy,o=e.staggerDelayBy,a=e.easing;n+=t*o,i+=t*r;return["transform","opacity"].map(function(t){return t+" "+i+"ms "+a+" "+n+"ms"}).join(", ")},B=function(){var t={transition:"transitionend","-o-transition":"oTransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};if("undefined"==typeof document)return"";var e=document.createElement("fakeelement"),n=m(function(t){return void 0!==e.style.getPropertyValue(t)},Object.keys(t));return n?t[n]:""}(),x=!B;function L(t){return t.key||""}function T(t){return i.Children.toArray(t)}var k=C(function(t){function e(){var n,i;A(this,e);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=i=D(this,t.call.apply(t,[this].concat(o))),i.state={children:T(i.props?i.props.children:[]).map(function(t){return E({},t,{element:t,appearing:!0})})},i.childrenData={},i.parentData={domNode:null,boundingBox:null},i.heightPlaceholderData={domNode:null},i.remainingAnimations=0,i.childrenToAnimate=[],i.findDOMContainer=function(){var t=a.a.findDOMNode(i),e=t&&t.parentNode;e&&e instanceof HTMLElement&&("static"===window.getComputedStyle(e).position&&(e.style.position="relative",l()),i.parentData.domNode=e)},i.runAnimation=function(){var t=i.state.children.filter(i.doesChildNeedToBeAnimated),e=t.map(function(t){return i.computeInitialStyles(t)});t.forEach(function(t,n){i.remainingAnimations+=1,i.childrenToAnimate.push(L(t)),i.animateChild(t,n,e[n])}),"function"==typeof i.props.onStartAll&&i.callChildrenHook(i.props.onStartAll)},i.doesChildNeedToBeAnimated=function(t){if(!L(t))return!1;var e=i.getChildData(L(t)),n=e.domNode,r=e.boundingBox,o=i.parentData.boundingBox;if(!n)return!1;var a=i.props,s=a.appearAnimation,l=a.enterAnimation,d=a.leaveAnimation,c=a.getPosition,u=t.appearing&&s,p=t.entering&&l,f=t.leaving&&d;if(u||p||f)return!0;var h=P({childDomNode:n,childBoundingBox:r,parentBoundingBox:o,getPosition:c}),m=h[0],g=h[1];return 0!==m||0!==g},D(i,n)}return w(e,t),e.prototype.componentDidMount=function(){null===this.props.typeName&&this.findDOMContainer(),this.props.appearAnimation&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},e.prototype.componentWillReceiveProps=function(t){this.updateBoundingBoxCaches();var e=T(t.children);this.setState({children:this.isAnimationDisabled(t)?e.map(function(t){return E({},t,{element:t})}):this.calculateNextSetOfChildren(e)})},e.prototype.componentDidUpdate=function(t){null===this.props.typeName&&this.findDOMContainer(),!function(t,e){if(t===e)return!0;var n=!y(t)||!y(e),i=t.length!==e.length;return!n&&!i&&g(function(t,n){return t===e[n]},t)}(T(this.props.children).map(function(t){return t.key}),T(t.children).map(function(t){return t.key}))&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},e.prototype.calculateNextSetOfChildren=function(t){var e=this,n=t.map(function(t){var n=e.findChildByKey(t.key),i=!n||n.leaving;return E({},t,{element:t,entering:i})}),i=0;return this.state.children.forEach(function(r,o){if(!m(function(t){return t.key===L(r)},t)&&e.props.leaveAnimation){var a=E({},r,{leaving:!0}),s=o+i;n.splice(s,0,a),i+=1}}),n},e.prototype.prepForAnimation=function(){var t=this,e=this.props,n=e.leaveAnimation,i=e.maintainContainerHeight,r=e.getPosition;n&&(this.state.children.filter(function(t){return t.leaving}).forEach(function(e){var n=t.getChildData(L(e));!t.isAnimationDisabled(t.props)&&n.domNode&&n.domNode.disabled&&d(),n.boundingBox&&function(t,e){var n=t.domNode,i=t.boundingBox;if(n&&i){var r=window.getComputedStyle(n),o=["margin-top","margin-left","margin-right"].reduce(function(t,e){var n,i=r.getPropertyValue(e);return E({},t,((n={})[e]=Number(i.replace("px","")),n))},{});O({domNode:n,styles:{position:"absolute",top:("bottom"===e?i.top-i.height:i.top)-o["margin-top"]+"px",left:i.left-o["margin-left"]+"px",right:i.right-o["margin-right"]+"px"}})}}(n,t.props.verticalAlignment)}),i&&this.heightPlaceholderData.domNode&&function(t){var e=t.domNode,n=t.parentData,i=t.getPosition,r=n.domNode,o=n.boundingBox;if(r&&o){O({domNode:e,styles:{height:"0"}});var a=o.height-i(r).height;O({domNode:e,styles:{height:a>0?a+"px":"0"}})}}({domNode:this.heightPlaceholderData.domNode,parentData:this.parentData,getPosition:r}));this.state.children.forEach(function(e){var n=t.getChildData(L(e)).domNode;n&&(e.entering||e.leaving||O({domNode:n,styles:{transition:""}}))})},e.prototype.animateChild=function(t,e,n){var i=this,r=this.getChildData(L(t)).domNode;r&&(O({domNode:r,styles:n}),this.props.onStart&&this.props.onStart(t,r),requestAnimationFrame(function(){requestAnimationFrame(function(){var n={transition:I(e,i.props),transform:"",opacity:""};t.appearing&&i.props.appearAnimation?n=E({},n,i.props.appearAnimation.to):t.entering&&i.props.enterAnimation?n=E({},n,i.props.enterAnimation.to):t.leaving&&i.props.leaveAnimation&&(n=E({},n,i.props.leaveAnimation.to)),O({domNode:r,styles:n})})}),this.bindTransitionEndHandler(t))},e.prototype.bindTransitionEndHandler=function(t){var e=this,n=this.getChildData(L(t)).domNode;if(n){n.addEventListener(B,function i(r){r.target===n&&(n.style.transition="",e.triggerFinishHooks(t,n),n.removeEventListener(B,i),t.leaving&&e.removeChildData(L(t)))})}},e.prototype.triggerFinishHooks=function(t,e){var n=this;if(this.props.onFinish&&this.props.onFinish(t,e),this.remainingAnimations-=1,0===this.remainingAnimations){var i=this.state.children.filter(function(t){return!t.leaving}).map(function(t){return E({},t,{element:t.element,appearing:!1,entering:!1})});this.setState({children:i},function(){"function"==typeof n.props.onFinishAll&&n.callChildrenHook(n.props.onFinishAll),n.childrenToAnimate=[]}),this.heightPlaceholderData.domNode&&(this.heightPlaceholderData.domNode.style.height="0")}},e.prototype.callChildrenHook=function(t){var e=this,n=[],i=[];this.childrenToAnimate.forEach(function(t){var r=e.findChildByKey(t);r&&(n.push(r),e.hasChildData(t)&&i.push(e.getChildData(t).domNode))}),t(n,i)},e.prototype.updateBoundingBoxCaches=function(){var t=this,e=this.parentData.domNode;if(e){this.parentData.boundingBox=this.props.getPosition(e);var n=[];this.state.children.forEach(function(i){var r=L(i);if(r)if(t.hasChildData(r)){var o=t.getChildData(r);o.domNode&&i?n.push(function(t){var e=t.childDomNode,n=t.parentDomNode,i=t.getPosition,r=i(n),o=i(e),a=o.top,s=o.left,l=o.right,d=o.bottom,c=o.width,u=o.height;return{top:a-r.top,left:s-r.left,right:r.right-l,bottom:r.bottom-d,width:c,height:u}}({childDomNode:o.domNode,parentDomNode:e,getPosition:t.props.getPosition})):n.push(null)}else n.push(null);else n.push(null)}),this.state.children.forEach(function(e,i){var r=L(e),o=n[i];r&&t.setChildData(r,{boundingBox:o})})}},e.prototype.computeInitialStyles=function(t){if(t.appearing)return this.props.appearAnimation?this.props.appearAnimation.from:{};if(t.entering)return this.props.enterAnimation?E({position:"",top:"",left:"",right:"",bottom:""},this.props.enterAnimation.from):{};if(t.leaving)return this.props.leaveAnimation?this.props.leaveAnimation.from:{};var e=this.getChildData(L(t)),n=e.domNode,i=e.boundingBox,r=this.parentData.boundingBox;if(!n)return{};var o=P({childDomNode:n,childBoundingBox:i,parentBoundingBox:r,getPosition:this.props.getPosition});return{transform:"translate("+o[0]+"px, "+o[1]+"px)"}},e.prototype.isAnimationDisabled=function(t){return x||t.disableAllAnimations||0===t.duration&&0===t.delay&&0===t.staggerDurationBy&&0===t.staggerDelayBy},e.prototype.findChildByKey=function(t){return m(function(e){return L(e)===t},this.state.children)},e.prototype.hasChildData=function(t){return Object.prototype.hasOwnProperty.call(this.childrenData,t)},e.prototype.getChildData=function(t){return this.hasChildData(t)?this.childrenData[t]:{}},e.prototype.setChildData=function(t,e){this.childrenData[t]=E({},this.getChildData(t),e)},e.prototype.removeChildData=function(t){delete this.childrenData[t],this.setState(function(e){return E({},e,{children:e.children.filter(function(e){return e.element.key!==t})})})},e.prototype.createHeightPlaceholder=function(){var t=this,e=this.props.typeName,n="ul"===e||"ol"===e?"li":"div";return Object(i.createElement)(n,{key:"height-placeholder",ref:function(e){t.heightPlaceholderData.domNode=e},style:{visibility:"hidden",height:0}})},e.prototype.childrenWithRefs=function(){var t=this;return this.state.children.map(function(e){return Object(i.cloneElement)(e.element,{ref:function(n){if(n){var i=function(t){if("undefined"==typeof HTMLElement)return null;if(t instanceof HTMLElement)return t;var e=Object(o.findDOMNode)(t);return e&&e.nodeType===Node.TEXT_NODE?null:e}(n);t.setChildData(L(e),{domNode:i})}}})})},e.prototype.render=function(){var t=this,e=this.props,n=e.typeName,r=e.delegated,o=e.leaveAnimation,a=e.maintainContainerHeight,s=this.childrenWithRefs();if(o&&a&&s.push(this.createHeightPlaceholder()),!n)return s;var l=E({},r,{children:s,ref:function(e){t.parentData.domNode=e}});return Object(i.createElement)(n,l)},e}(i.Component));e.a=k},250:function(t,e,n){"use strict";var i=n(3),r=n(21),o=n(32),a=n(129),s=n(67),l=n(9),d=n(83).f,c=n(84).f,u=n(14).f,p=n(201).trim,f=i.Number,h=f,m=f.prototype,g="Number"==o(n(63)(m)),y="trim"in String.prototype,v=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,i,r,o=(e=y?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var a,l=e.slice(2),d=0,c=l.length;d<c;d++)if((a=l.charCodeAt(d))<48||a>r)return NaN;return parseInt(l,i)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(g?l(function(){m.valueOf.call(n)}):"Number"!=o(n))?a(new h(v(e)),n,f):v(e)};for(var b,S=n(10)?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)r(h,b=S[N])&&!r(f,b)&&u(f,b,c(h,b));f.prototype=m,m.constructor=f,n(15)(i,"Number",f)}}}]);
//# sourceMappingURL=20-42a229db6c5b792ab2d1.js.map