(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const _ of n)if(_.type==="childList")for(const s of _.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const _={};return n.integrity&&(_.integrity=n.integrity),n.referrerPolicy&&(_.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?_.credentials="include":n.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function i(n){if(n.ep)return;n.ep=!0;const _=o(n);fetch(n.href,_)}})();var B,f,he,P,ee,fe,q,H={},X=[],ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function $(e,t){for(var o in t)e[o]=t[o];return e}function de(e){var t=e.parentNode;t&&t.removeChild(e)}function we(e,t,o){var i,n,_,s={};for(_ in t)_=="key"?i=t[_]:_=="ref"?n=t[_]:s[_]=t[_];if(arguments.length>2&&(s.children=arguments.length>3?B.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)s[_]===void 0&&(s[_]=e.defaultProps[_]);return L(e,s,i,n,null)}function L(e,t,o,i,n){var _={type:e,props:t,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++he,__i:-1,__u:0};return n==null&&f.vnode!=null&&f.vnode(_),_}function M(e){return e.children}function A(e,t){this.props=e,this.context=t}function S(e,t){if(t==null)return e.__?S(e.__,e.__i+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?S(e):null}function Ce(e,t,o){var i,n=e.__v,_=n.__e,s=e.__P;if(s)return(i=$({},n)).__v=n.__v+1,f.vnode&&f.vnode(i),Q(s,i,n,e.__n,s.ownerSVGElement!==void 0,32&n.__u?[_]:null,t,_??S(n),!!(32&n.__u),o),i.__v=n.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=_&&me(i),i}function me(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return me(e)}}function te(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!F.__r++||ee!==f.debounceRendering)&&((ee=f.debounceRendering)||fe)(F)}function F(){var e,t,o,i=[],n=[];for(P.sort(q);e=P.shift();)e.__d&&(o=P.length,t=Ce(e,i,n)||t,o===0||P.length>o?(V(i,t,n),n.length=i.length=0,t=void 0,P.sort(q)):t&&f.__c&&f.__c(t,X));t&&V(i,t,n),F.__r=0}function ye(e,t,o,i,n,_,s,l,c,a,h){var r,d,p,g,C,b=i&&i.__k||X,m=t.length;for(o.__d=c,xe(o,t,b),c=o.__d,r=0;r<m;r++)(p=o.__k[r])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?H:b[p.__i]||H,p.__i=r,Q(e,p,d,n,_,s,l,c,a,h),g=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&Y(d.ref,null,p),h.push(p.ref,p.__c||g,p)),C==null&&g!=null&&(C=g),65536&p.__u||d.__k===p.__k?c=ve(p,c,e):typeof p.type=="function"&&p.__d!==void 0?c=p.__d:g&&(c=g.nextSibling),p.__d=void 0,p.__u&=-196609);o.__d=c,o.__e=C}function xe(e,t,o){var i,n,_,s,l,c=t.length,a=o.length,h=a,r=0;for(e.__k=[],i=0;i<c;i++)s=i+r,(n=e.__k[i]=(n=t[i])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?L(null,n,null,null,null):J(n)?L(M,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?L(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,l=$e(n,o,s,h),n.__i=l,_=null,l!==-1&&(h--,(_=o[l])&&(_.__u|=131072)),_==null||_.__v===null?(l==-1&&r--,typeof n.type!="function"&&(n.__u|=65536)):l!==s&&(l===s+1?r++:l>s?h>c-s?r+=l-s:r--:l<s?l==s-1&&(r=l-s):r=0,l!==i+r&&(n.__u|=65536))):(_=o[s])&&_.key==null&&_.__e&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=S(_)),G(_,_,!1),o[s]=null,h--);if(h)for(i=0;i<a;i++)(_=o[i])!=null&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=S(_)),G(_,_))}function ve(e,t,o){var i,n;if(typeof e.type=="function"){for(i=e.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=e,t=ve(i[n],t,o));return t}e.__e!=t&&(o.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function $e(e,t,o,i){var n=e.key,_=e.type,s=o-1,l=o+1,c=t[o];if(c===null||c&&n==c.key&&_===c.type&&!(131072&c.__u))return o;if(i>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||l<t.length;){if(s>=0){if((c=t[s])&&!(131072&c.__u)&&n==c.key&&_===c.type)return s;s--}if(l<t.length){if((c=t[l])&&!(131072&c.__u)&&n==c.key&&_===c.type)return l;l++}}return-1}function oe(e,t,o){t[0]==="-"?e.setProperty(t,o??""):e[t]=o==null?"":typeof o!="number"||ke.test(t)?o:o+"px"}function D(e,t,o,i,n){var _;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)o&&t in o||oe(e.style,t,"");if(o)for(t in o)i&&o[t]===i[t]||oe(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=o,o?i?o.u=i.u:(o.u=Date.now(),e.addEventListener(t,_?ie:ne,_)):e.removeEventListener(t,_?ie:ne,_);else{if(n)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,o))}}function ne(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(f.event?f.event(e):e)}}function ie(e){if(this.l)return this.l[e.type+!0](f.event?f.event(e):e)}function Q(e,t,o,i,n,_,s,l,c,a){var h,r,d,p,g,C,b,m,k,x,T,I,Z,E,j,w=t.type;if(t.constructor!==void 0)return null;128&o.__u&&(c=!!(32&o.__u),_=[l=t.__e=o.__e]),(h=f.__b)&&h(t);e:if(typeof w=="function")try{if(m=t.props,k=(h=w.contextType)&&i[h.__c],x=h?k?k.props.value:h.__:i,o.__c?b=(r=t.__c=o.__c).__=r.__E:("prototype"in w&&w.prototype.render?t.__c=r=new w(m,x):(t.__c=r=new A(m,x),r.constructor=w,r.render=Se),k&&k.sub(r),r.props=m,r.state||(r.state={}),r.context=x,r.__n=i,d=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),w.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=$({},r.__s)),$(r.__s,w.getDerivedStateFromProps(m,r.__s))),p=r.props,g=r.state,r.__v=t,d)w.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(w.getDerivedStateFromProps==null&&m!==p&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(m,x),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(m,r.__s,x)===!1||t.__v===o.__v)){for(t.__v!==o.__v&&(r.props=m,r.state=r.__s,r.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(N){N&&(N.__=t)}),T=0;T<r._sb.length;T++)r.__h.push(r._sb[T]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(m,r.__s,x),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(p,g,C)})}if(r.context=x,r.props=m,r.__P=e,r.__e=!1,I=f.__r,Z=0,"prototype"in w&&w.prototype.render){for(r.state=r.__s,r.__d=!1,I&&I(t),h=r.render(r.props,r.state,r.context),E=0;E<r._sb.length;E++)r.__h.push(r._sb[E]);r._sb=[]}else do r.__d=!1,I&&I(t),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++Z<25);r.state=r.__s,r.getChildContext!=null&&(i=$($({},i),r.getChildContext())),d||r.getSnapshotBeforeUpdate==null||(C=r.getSnapshotBeforeUpdate(p,g)),ye(e,J(j=h!=null&&h.type===M&&h.key==null?h.props.children:h)?j:[j],t,o,i,n,_,s,l,c,a),r.base=t.__e,t.__u&=-161,r.__h.length&&s.push(r),b&&(r.__E=r.__=null)}catch(N){t.__v=null,c||_!=null?(t.__e=l,t.__u|=c?160:32,_[_.indexOf(l)]=null):(t.__e=o.__e,t.__k=o.__k),f.__e(N,t,o)}else _==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=Pe(o.__e,t,o,i,n,_,s,c,a);(h=f.diffed)&&h(t)}function V(e,t,o){for(var i=0;i<o.length;i++)Y(o[i],o[++i],o[++i]);f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){f.__e(_,n.__v)}})}function Pe(e,t,o,i,n,_,s,l,c){var a,h,r,d,p,g,C,b=o.props,m=t.props,k=t.type;if(k==="svg"&&(n=!0),_!=null){for(a=0;a<_.length;a++)if((p=_[a])&&"setAttribute"in p==!!k&&(k?p.localName===k:p.nodeType===3)){e=p,_[a]=null;break}}if(e==null){if(k===null)return document.createTextNode(m);e=n?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,m.is&&m),_=null,l=!1}if(k===null)b===m||l&&e.data===m||(e.data=m);else{if(_=_&&B.call(e.childNodes),b=o.props||H,!l&&_!=null)for(b={},a=0;a<e.attributes.length;a++)b[(p=e.attributes[a]).name]=p.value;for(a in b)p=b[a],a=="children"||(a=="dangerouslySetInnerHTML"?r=p:a==="key"||a in m||D(e,a,null,p,n));for(a in m)p=m[a],a=="children"?d=p:a=="dangerouslySetInnerHTML"?h=p:a=="value"?g=p:a=="checked"?C=p:a==="key"||l&&typeof p!="function"||b[a]===p||D(e,a,p,b[a],n);if(h)l||r&&(h.__html===r.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(r&&(e.innerHTML=""),ye(e,J(d)?d:[d],t,o,i,n&&k!=="foreignObject",_,s,_?_[0]:o.__k&&S(o,0),l,c),_!=null)for(a=_.length;a--;)_[a]!=null&&de(_[a]);l||(a="value",g!==void 0&&(g!==e[a]||k==="progress"&&!g||k==="option"&&g!==b[a])&&D(e,a,g,b[a],!1),a="checked",C!==void 0&&C!==e[a]&&D(e,a,C,b[a],!1))}return e}function Y(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(i){f.__e(i,o)}}function G(e,t,o){var i,n;if(f.unmount&&f.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Y(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(_){f.__e(_,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(n=0;n<i.length;n++)i[n]&&G(i[n],t,o||typeof e.type!="function");o||e.__e==null||de(e.__e),e.__=e.__e=e.__d=void 0}function Se(e,t,o){return this.constructor(e,o)}function Ie(e,t,o){var i,n,_,s;f.__&&f.__(e,t),n=(i=typeof o=="function")?null:o&&o.__k||t.__k,_=[],s=[],Q(t,e=(!i&&o||t).__k=we(M,null,[e]),n||H,H,t.ownerSVGElement!==void 0,!i&&o?[o]:n?null:t.firstChild?B.call(t.childNodes):null,_,!i&&o?o:n?n.__e:t.firstChild,i,s),e.__d=void 0,V(_,e,s)}B=X.slice,f={__e:function(e,t,o,i){for(var n,_,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&_.getDerivedStateFromError!=null&&(n.setState(_.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,i||{}),s=n.__d),s)return n.__E=n}catch(l){e=l}throw e}},he=0,A.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},o),this.props)),e&&$(o,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},A.prototype.render=M,P=[],fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,t){return e.__v.__b-t.__v.__b},F.__r=0;var R,y,O,_e,z=0,ge=[],U=[],v=f,re=v.__b,se=v.__r,ae=v.diffed,le=v.__c,ce=v.unmount,pe=v.__;function He(e,t){v.__h&&v.__h(y,e,z||t),z=0;var o=y.__H||(y.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:U}),o.__[e]}function Te(e){return z=1,Ee(be,e)}function Ee(e,t,o){var i=He(R++,2);if(i.t=e,!i.__c&&(i.__=[o?o(t):be(void 0,t),function(l){var c=i.__N?i.__N[0]:i.__[0],a=i.t(c,l);c!==a&&(i.__N=[a,i.__[1]],i.__c.setState({}))}],i.__c=y,!y.u)){var n=function(l,c,a){if(!i.__c.__H)return!0;var h=i.__c.__H.__.filter(function(d){return!!d.__c});if(h.every(function(d){return!d.__N}))return!_||_.call(this,l,c,a);var r=!1;return h.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(r=!0)}}),!(!r&&i.__c.props===l)&&(!_||_.call(this,l,c,a))};y.u=!0;var _=y.shouldComponentUpdate,s=y.componentWillUpdate;y.componentWillUpdate=function(l,c,a){if(this.__e){var h=_;_=void 0,n(l,c,a),_=h}s&&s.call(this,l,c,a)},y.shouldComponentUpdate=n}return i.__N||i.__}function Ne(){for(var e;e=ge.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){y=null,re&&re(e)},v.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),pe&&pe(e,t)},v.__r=function(e){se&&se(e),R=0;var t=(y=e.__c).__H;t&&(O===y?(t.__h=[],y.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=U,o.__N=o.i=void 0})):(t.__h.forEach(W),t.__h.forEach(K),t.__h=[],R=0)),O=y},v.diffed=function(e){ae&&ae(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ge.push(t)!==1&&_e===v.requestAnimationFrame||((_e=v.requestAnimationFrame)||De)(Ne)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==U&&(o.__=o.__V),o.i=void 0,o.__V=U})),O=y=null},v.__c=function(e,t){t.some(function(o){try{o.__h.forEach(W),o.__h=o.__h.filter(function(i){return!i.__||K(i)})}catch(i){t.some(function(n){n.__h&&(n.__h=[])}),t=[],v.__e(i,o.__v)}}),le&&le(e,t)},v.unmount=function(e){ce&&ce(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(i){try{W(i)}catch(n){t=n}}),o.__H=void 0,t&&v.__e(t,o.__v))};var ue=typeof requestAnimationFrame=="function";function De(e){var t,o=function(){clearTimeout(i),ue&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(o,100);ue&&(t=requestAnimationFrame(o))}function W(e){var t=y,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),y=t}function K(e){var t=y;e.__c=e.__(),y=t}function be(e,t){return typeof t=="function"?t(e):t}var Le=0;function u(e,t,o,i,n,_){var s,l,c={};for(l in t)l=="ref"?s=t[l]:c[l]=t[l];var a={type:e,props:c,key:o,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Le,__i:-1,__u:0,__source:n,__self:_};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)c[l]===void 0&&(c[l]=s[l]);return f.vnode&&f.vnode(a),a}function Ae({number:e,current:t,switchIndex:o}){return u("div",{class:"carouselIndicators",children:[...Array(e)].map((i,n)=>u("button",{class:`carouselIndicatorItem${t===n?" active":""}`,onClick:()=>o(n)}))})}function Ue({prev:e,next:t,index:o,slides:i}){return u("div",{children:[o>0&&u("button",{class:"carouselControl left",onClick:e,children:"<"}),o<i-1&&u("button",{class:"carouselControl right",onClick:t,children:">"})]})}function We({slide:e}){return u("div",{class:"carouselItem",children:[e.type=="photo"&&u("img",{src:e.path,class:"carouselItemContent"}),e.type!="photo"&&u("video",{autoplay:!0,muted:!0,class:"carouselItemContent",children:u("source",{src:e.path,type:e.type})})]})}function Fe({slides:e}){const[t,o]=Te(0),i=()=>{const s=t>0?t-1:0;o(s)},n=()=>{const s=t<e.length-1?t+1:e.length-1;o(s)},_=s=>{o(s)};return u("div",{class:"carousel",children:[u("div",{class:"carouselInner",style:{transform:`translateX(${-t*100}%)`},children:e.map((s,l)=>u(We,{slide:s},l))}),e.length>1&&u(Ae,{number:e.length,current:t,switchIndex:_}),u(Ue,{prev:i,next:n,index:t,slides:e.length})]})}function Be({content:e,index:t}){let o=()=>{let i=document.getElementById(`post${t}`);i.style.display="block"};return u("div",{class:"postThumbnail",children:[e[0].type=="photo"&&u("img",{src:e[0].path,class:"thumbnail",onClick:o}),e[0].type!="photo"&&u("video",{class:"thumbnail",preload:"metadata",src:e[0].path,onClick:o}),e.length>1&&u("img",{src:"images/multi-post.webp",class:"postIcon"}),e.length==1&&e[0].type!="photo"&&u("img",{src:"images/reels-icon.png",class:"postIcon"})]})}function Me({content:e,index:t,likes:o,caption:i}){return u("div",{id:"post"+t,class:"post",children:[u("button",{class:"closeButton",onClick:()=>{let n=document.getElementById(`post${t}`);n.style.display="none"},children:"X"}),u(Fe,{slides:e}),u("div",{class:"postInfo",children:[u("div",{children:[u("img",{src:"images/heart.jpg",class:"icon"}),u("img",{src:"images/comment.png",class:"icon"})]}),u("div",{class:"likes",children:[o," likes"]}),u("div",{class:"caption",dangerouslySetInnerHTML:{__html:i}})]})]})}function je(){let e=[[{path:"posts/availability-heuristic/1.png",type:"photo"},{path:"posts/availability-heuristic/2.png",type:"photo"},{path:"posts/availability-heuristic/3.png",type:"photo"},{path:"posts/availability-heuristic/4.PNG",type:"photo"},{path:"posts/availability-heuristic/5.png",type:"photo"},{path:"posts/availability-heuristic/6.png",type:"photo"}],[{path:"posts/messaging-post-1/1.png",type:"photo"}],[{path:"posts/messaging-post-2/1.png",type:"photo"}],[{path:"posts/messaging-post-3/1.png",type:"photo"}],[{path:"posts/mindfulness/1.mp4",type:"video/mp4"},{path:"posts/mindfulness/2.mp4",type:"video/mp4"},{path:"posts/mindfulness/3.mp4",type:"video/mp4"}],[{path:"posts/pluralistic-ignorance/1.png",type:"photo"},{path:"posts/pluralistic-ignorance/2.png",type:"photo"},{path:"posts/pluralistic-ignorance/3.png",type:"photo"},{path:"posts/pluralistic-ignorance/4.png",type:"photo"},{path:"posts/pluralistic-ignorance/5.png",type:"photo"},{path:"posts/pluralistic-ignorance/6.png",type:"photo"},{path:"posts/pluralistic-ignorance/7.png",type:"photo"},{path:"posts/pluralistic-ignorance/8.png",type:"photo"}],[{path:"posts/text-video/1.mp4",type:"video/mp4"}]],t=[100,100,100,100,100,100,100,0],o=["caption","In this scenario, someone is being invited to a St. Patrick's Day party with friends, in which alcohol is involved. While sometimes these events can be fun when enjoyed in a safe manner, the person seems hesitant to go.<br><br>Pluralistic ignorance is a phenomenon in social psychology in which a person may say or behave in a way that contradicts what they actually believe, because they overestimate the number of people who endorse these behaviours.<br><br>Social media can even enhance this, as we are subject to seeing everyone else's idea of a good time (or so we think).<br><br>Based on this situation, what do you think? Is this person displaying pluralistic ignorance, and were they convinced to go on the basis of having content to post on their social media? ","Going back to the idea of pluralistic ignorance, this is definitely a more problematic form of this idea. Not only does social media appear to endorse some dangerous behaviours, these online challenges spread quickly to others and encourage them to participate (Falgoust et al., 2022).<br><br>Let's take a second to reflect. Why exactly do we think that everyone enjoys these social media challenges? Is it solely for the popularity and numbers in likes and follows, in a way that boosts our self esteem through gratification? Even if it does boost self-esteem in some ways, there are always dislikes and hate comments that target the subject. The gains in numbers might not even be in our best interests…do you actually have a positive and/or personal connection with each and every like and follow?<br><br>Before you even hit post next time, think about the repercussions of your actions; not even solely to preserve your own self-esteem and self-worth, but also in the interests of others in this endless cycle of social media challenges.","We're dealing with a conversation between people who are aware of an individual who died attempting this online challenge. Knowing this information, one person seems hesitant to proceed, but the other person coaxes them into it by saying other people haven't had issues with the challenge.<br><br>This not only displays pluralistic ignorance, but also the idea of confirmation bias in psychology. Confirmation bias occurs on an individual basis, when there is a tendency towards favouring incoming information that confirms one's existing knowledge and beliefs.<br><br>Here, the individual is basing their belief (that nothing will go wrong doing the Blackout Challenge) by recalling only the posts where no long term harm was done, and ignoring examples such as news where an individual ended up passing away. This phenomenon creates a huge potential for the spread of misinformation. In this context, they are misinformed about the actual risks that come from this challenge, by actively seeking out more examples that support that they could even gain fame from attempting this challenge. <br><br>Do you think you have fallen victim to this bias? The thing is, everyone is subjected to bias. However, it's more about how we deal with it. The problem is, social media often reinforces confirmation bias, by producing targeted ads and posts. We should all make an attempt to reduce our confirmation bias, by being more open to new information that might oppose our current knowledge and beliefs even if it makes us uncomfortable!","caption","caption","caption"];return u("div",{id:"main",children:[u("div",{id:"profile",children:[u("img",{src:"images/photo.jpg",id:"profilePhoto"}),u("div",{id:"profileInfoContainer",children:u("div",{id:"profileInfo",children:[u("div",{id:"usernameContainer",children:[u("h1",{children:"@milgramsmaniacs"}),u("img",{src:"images/checkmark.png",id:"checkmark"})]}),u("h2",{children:[e.length," posts    🤷‍♂️ followers    🤷‍♂️ following"]}),u("h3",{children:"Aryan, Carol, Kalista, Nyden"}),u("h3",{children:"Bio"})]})})]}),u("div",{id:"postThumbnails",children:e.map((i,n)=>u(Be,{content:i,index:n}))}),u("div",{id:"posts",children:e.map((i,n)=>u(Me,{content:i,index:n,likes:t[n],caption:o[n]}))})]})}Ie(u(je,{}),document.body);
