(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();var L,_,de,x,ee,_e,K,M={},O=[],we=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,X=Array.isArray;function C(e,t){for(var o in t)e[o]=t[o];return e}function fe(e){var t=e.parentNode;t&&t.removeChild(e)}function ke(e,t,o){var i,n,s,r={};for(s in t)s=="key"?i=t[s]:s=="ref"?n=t[s]:r[s]=t[s];if(arguments.length>2&&(r.children=arguments.length>3?L.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)r[s]===void 0&&(r[s]=e.defaultProps[s]);return $(e,r,i,n,null)}function $(e,t,o,i,n){var s={type:e,props:t,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++de,__i:-1,__u:0};return n==null&&_.vnode!=null&&_.vnode(s),s}function B(e){return e.children}function W(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?P(e):null}function Te(e,t,o){var i,n=e.__v,s=n.__e,r=e.__P;if(r)return(i=C({},n)).__v=n.__v+1,_.vnode&&_.vnode(i),Z(r,i,n,e.__n,r.ownerSVGElement!==void 0,32&n.__u?[s]:null,t,s??P(n),!!(32&n.__u),o),i.__v=n.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=s&&me(i),i}function me(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return me(e)}}function te(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!D.__r++||ee!==_.debounceRendering)&&((ee=_.debounceRendering)||_e)(D)}function D(){var e,t,o,i=[],n=[];for(x.sort(K);e=x.shift();)e.__d&&(o=x.length,t=Te(e,i,n)||t,o===0||x.length>o?(U(i,t,n),n.length=i.length=0,t=void 0,x.sort(K)):t&&_.__c&&_.__c(t,O));t&&U(i,t,n),D.__r=0}function ye(e,t,o,i,n,s,r,p,h,l,d){var a,f,c,b,T,v=i&&i.__k||O,m=t.length;for(o.__d=h,Se(o,t,v),h=o.__d,a=0;a<m;a++)(c=o.__k[a])!=null&&typeof c!="boolean"&&typeof c!="function"&&(f=c.__i===-1?M:v[c.__i]||M,c.__i=a,Z(e,c,f,n,s,r,p,h,l,d),b=c.__e,c.ref&&f.ref!=c.ref&&(f.ref&&Y(f.ref,null,c),d.push(c.ref,c.__c||b,c)),T==null&&b!=null&&(T=b),65536&c.__u||f.__k===c.__k?h=ge(c,h,e):typeof c.type=="function"&&c.__d!==void 0?h=c.__d:b&&(h=b.nextSibling),c.__d=void 0,c.__u&=-196609);o.__d=h,o.__e=T}function Se(e,t,o){var i,n,s,r,p,h=t.length,l=o.length,d=l,a=0;for(e.__k=[],i=0;i<h;i++)r=i+a,(n=e.__k[i]=(n=t[i])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?$(null,n,null,null,null):X(n)?$(B,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?$(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,p=Ce(n,o,r,d),n.__i=p,s=null,p!==-1&&(d--,(s=o[p])&&(s.__u|=131072)),s==null||s.__v===null?(p==-1&&a--,typeof n.type!="function"&&(n.__u|=65536)):p!==r&&(p===r+1?a++:p>r?d>h-r?a+=p-r:a--:p<r?p==r-1&&(a=p-r):a=0,p!==i+a&&(n.__u|=65536))):(s=o[r])&&s.key==null&&s.__e&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=P(s)),z(s,s,!1),o[r]=null,d--);if(d)for(i=0;i<l;i++)(s=o[i])!=null&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=P(s)),z(s,s))}function ge(e,t,o){var i,n;if(typeof e.type=="function"){for(i=e.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=e,t=ge(i[n],t,o));return t}e.__e!=t&&(o.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Ce(e,t,o,i){var n=e.key,s=e.type,r=o-1,p=o+1,h=t[o];if(h===null||h&&n==h.key&&s===h.type&&!(131072&h.__u))return o;if(i>(h!=null&&!(131072&h.__u)?1:0))for(;r>=0||p<t.length;){if(r>=0){if((h=t[r])&&!(131072&h.__u)&&n==h.key&&s===h.type)return r;r--}if(p<t.length){if((h=t[p])&&!(131072&h.__u)&&n==h.key&&s===h.type)return p;p++}}return-1}function oe(e,t,o){t[0]==="-"?e.setProperty(t,o??""):e[t]=o==null?"":typeof o!="number"||we.test(t)?o:o+"px"}function A(e,t,o,i,n){var s;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)o&&t in o||oe(e.style,t,"");if(o)for(t in o)i&&o[t]===i[t]||oe(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=o,o?i?o.u=i.u:(o.u=Date.now(),e.addEventListener(t,s?ne:ie,s)):e.removeEventListener(t,s?ne:ie,s);else{if(n)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,o))}}function ie(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(_.event?_.event(e):e)}}function ne(e){if(this.l)return this.l[e.type+!0](_.event?_.event(e):e)}function Z(e,t,o,i,n,s,r,p,h,l){var d,a,f,c,b,T,v,m,w,S,H,I,Q,E,R,k=t.type;if(t.constructor!==void 0)return null;128&o.__u&&(h=!!(32&o.__u),s=[p=t.__e=o.__e]),(d=_.__b)&&d(t);e:if(typeof k=="function")try{if(m=t.props,w=(d=k.contextType)&&i[d.__c],S=d?w?w.props.value:d.__:i,o.__c?v=(a=t.__c=o.__c).__=a.__E:("prototype"in k&&k.prototype.render?t.__c=a=new k(m,S):(t.__c=a=new W(m,S),a.constructor=k,a.render=Pe),w&&w.sub(a),a.props=m,a.state||(a.state={}),a.context=S,a.__n=i,f=a.__d=!0,a.__h=[],a._sb=[]),a.__s==null&&(a.__s=a.state),k.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=C({},a.__s)),C(a.__s,k.getDerivedStateFromProps(m,a.__s))),c=a.props,b=a.state,a.__v=t,f)k.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(k.getDerivedStateFromProps==null&&m!==c&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(m,S),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(m,a.__s,S)===!1||t.__v===o.__v)){for(t.__v!==o.__v&&(a.props=m,a.state=a.__s,a.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(N){N&&(N.__=t)}),H=0;H<a._sb.length;H++)a.__h.push(a._sb[H]);a._sb=[],a.__h.length&&r.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(m,a.__s,S),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(c,b,T)})}if(a.context=S,a.props=m,a.__P=e,a.__e=!1,I=_.__r,Q=0,"prototype"in k&&k.prototype.render){for(a.state=a.__s,a.__d=!1,I&&I(t),d=a.render(a.props,a.state,a.context),E=0;E<a._sb.length;E++)a.__h.push(a._sb[E]);a._sb=[]}else do a.__d=!1,I&&I(t),d=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++Q<25);a.state=a.__s,a.getChildContext!=null&&(i=C(C({},i),a.getChildContext())),f||a.getSnapshotBeforeUpdate==null||(T=a.getSnapshotBeforeUpdate(c,b)),ye(e,X(R=d!=null&&d.type===B&&d.key==null?d.props.children:d)?R:[R],t,o,i,n,s,r,p,h,l),a.base=t.__e,t.__u&=-161,a.__h.length&&r.push(a),v&&(a.__E=a.__=null)}catch(N){t.__v=null,h||s!=null?(t.__e=p,t.__u|=h?160:32,s[s.indexOf(p)]=null):(t.__e=o.__e,t.__k=o.__k),_.__e(N,t,o)}else s==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=xe(o.__e,t,o,i,n,s,r,h,l);(d=_.diffed)&&d(t)}function U(e,t,o){for(var i=0;i<o.length;i++)Y(o[i],o[++i],o[++i]);_.__c&&_.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){_.__e(s,n.__v)}})}function xe(e,t,o,i,n,s,r,p,h){var l,d,a,f,c,b,T,v=o.props,m=t.props,w=t.type;if(w==="svg"&&(n=!0),s!=null){for(l=0;l<s.length;l++)if((c=s[l])&&"setAttribute"in c==!!w&&(w?c.localName===w:c.nodeType===3)){e=c,s[l]=null;break}}if(e==null){if(w===null)return document.createTextNode(m);e=n?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,m.is&&m),s=null,p=!1}if(w===null)v===m||p&&e.data===m||(e.data=m);else{if(s=s&&L.call(e.childNodes),v=o.props||M,!p&&s!=null)for(v={},l=0;l<e.attributes.length;l++)v[(c=e.attributes[l]).name]=c.value;for(l in v)c=v[l],l=="children"||(l=="dangerouslySetInnerHTML"?a=c:l==="key"||l in m||A(e,l,null,c,n));for(l in m)c=m[l],l=="children"?f=c:l=="dangerouslySetInnerHTML"?d=c:l=="value"?b=c:l=="checked"?T=c:l==="key"||p&&typeof c!="function"||v[l]===c||A(e,l,c,v[l],n);if(d)p||a&&(d.__html===a.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(a&&(e.innerHTML=""),ye(e,X(f)?f:[f],t,o,i,n&&w!=="foreignObject",s,r,s?s[0]:o.__k&&P(o,0),p,h),s!=null)for(l=s.length;l--;)s[l]!=null&&fe(s[l]);p||(l="value",b!==void 0&&(b!==e[l]||w==="progress"&&!b||w==="option"&&b!==v[l])&&A(e,l,b,v[l],!1),l="checked",T!==void 0&&T!==e[l]&&A(e,l,T,v[l],!1))}return e}function Y(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(i){_.__e(i,o)}}function z(e,t,o){var i,n;if(_.unmount&&_.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Y(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){_.__e(s,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(n=0;n<i.length;n++)i[n]&&z(i[n],t,o||typeof e.type!="function");o||e.__e==null||fe(e.__e),e.__=e.__e=e.__d=void 0}function Pe(e,t,o){return this.constructor(e,o)}function Ie(e,t,o){var i,n,s,r;_.__&&_.__(e,t),n=(i=typeof o=="function")?null:o&&o.__k||t.__k,s=[],r=[],Z(t,e=(!i&&o||t).__k=ke(B,null,[e]),n||M,M,t.ownerSVGElement!==void 0,!i&&o?[o]:n?null:t.firstChild?L.call(t.childNodes):null,s,!i&&o?o:n?n.__e:t.firstChild,i,r),e.__d=void 0,U(s,e,r)}L=O.slice,_={__e:function(e,t,o,i){for(var n,s,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(e)),r=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,i||{}),r=n.__d),r)return n.__E=n}catch(p){e=p}throw e}},de=0,W.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},o),this.props)),e&&C(o,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},W.prototype.render=B,x=[],_e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=function(e,t){return e.__v.__b-t.__v.__b},D.__r=0;var q,y,V,se,J=0,be=[],F=[],g=_,ae=g.__b,re=g.__r,le=g.diffed,pe=g.__c,he=g.unmount,ce=g.__;function Me(e,t){g.__h&&g.__h(y,e,J||t),J=0;var o=y.__H||(y.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:F}),o.__[e]}function He(e){return J=1,Ee(ve,e)}function Ee(e,t,o){var i=Me(q++,2);if(i.t=e,!i.__c&&(i.__=[o?o(t):ve(void 0,t),function(p){var h=i.__N?i.__N[0]:i.__[0],l=i.t(h,p);h!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=y,!y.u)){var n=function(p,h,l){if(!i.__c.__H)return!0;var d=i.__c.__H.__.filter(function(f){return!!f.__c});if(d.every(function(f){return!f.__N}))return!s||s.call(this,p,h,l);var a=!1;return d.forEach(function(f){if(f.__N){var c=f.__[0];f.__=f.__N,f.__N=void 0,c!==f.__[0]&&(a=!0)}}),!(!a&&i.__c.props===p)&&(!s||s.call(this,p,h,l))};y.u=!0;var s=y.shouldComponentUpdate,r=y.componentWillUpdate;y.componentWillUpdate=function(p,h,l){if(this.__e){var d=s;s=void 0,n(p,h,l),s=d}r&&r.call(this,p,h,l)},y.shouldComponentUpdate=n}return i.__N||i.__}function Ne(){for(var e;e=be.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(j),e.__H.__h.forEach(G),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){y=null,ae&&ae(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ce&&ce(e,t)},g.__r=function(e){re&&re(e),q=0;var t=(y=e.__c).__H;t&&(V===y?(t.__h=[],y.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=F,o.__N=o.i=void 0})):(t.__h.forEach(j),t.__h.forEach(G),t.__h=[],q=0)),V=y},g.diffed=function(e){le&&le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(be.push(t)!==1&&se===g.requestAnimationFrame||((se=g.requestAnimationFrame)||Ae)(Ne)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==F&&(o.__=o.__V),o.i=void 0,o.__V=F})),V=y=null},g.__c=function(e,t){t.some(function(o){try{o.__h.forEach(j),o.__h=o.__h.filter(function(i){return!i.__||G(i)})}catch(i){t.some(function(n){n.__h&&(n.__h=[])}),t=[],g.__e(i,o.__v)}}),pe&&pe(e,t)},g.unmount=function(e){he&&he(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(i){try{j(i)}catch(n){t=n}}),o.__H=void 0,t&&g.__e(t,o.__v))};var ue=typeof requestAnimationFrame=="function";function Ae(e){var t,o=function(){clearTimeout(i),ue&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(o,100);ue&&(t=requestAnimationFrame(o))}function j(e){var t=y,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),y=t}function G(e){var t=y;e.__c=e.__(),y=t}function ve(e,t){return typeof t=="function"?t(e):t}var $e=0;function u(e,t,o,i,n,s){var r,p,h={};for(p in t)p=="ref"?r=t[p]:h[p]=t[p];var l={type:e,props:h,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--$e,__i:-1,__u:0,__source:n,__self:s};if(typeof e=="function"&&(r=e.defaultProps))for(p in r)h[p]===void 0&&(h[p]=r[p]);return _.vnode&&_.vnode(l),l}function We({number:e,current:t,switchIndex:o}){return u("div",{class:"carouselIndicators",children:[...Array(e)].map((i,n)=>u("button",{class:`carouselIndicatorItem${t===n?" active":""}`,onClick:()=>o(n)}))})}function Fe({prev:e,next:t,index:o,slides:i}){return u("div",{children:[o>0&&u("button",{class:"carouselControl left",onClick:e,children:"<"}),o<i-1&&u("button",{class:"carouselControl right",onClick:t,children:">"})]})}function je({slide:e}){return u("div",{class:"carouselItem",children:[e.type=="photo"&&u("img",{src:e.path,class:"carouselItemContent"}),e.type!="photo"&&u("video",{autoplay:!0,muted:!0,controls:!0,loop:!0,class:"carouselItemContent",children:u("source",{src:e.path,type:e.type})})]})}function De({slides:e}){const[t,o]=He(0),i=()=>{const r=t>0?t-1:0;o(r)},n=()=>{const r=t<e.length-1?t+1:e.length-1;o(r)},s=r=>{o(r)};return u("div",{class:"carousel",children:[u("div",{class:"carouselInner",style:{transform:`translateX(${-t*100}%)`},children:e.map((r,p)=>u(je,{slide:r},p))}),e.length>1&&u(We,{number:e.length,current:t,switchIndex:s}),u(Fe,{prev:i,next:n,index:t,slides:e.length})]})}function Le({content:e,index:t}){let o=()=>{let i=document.getElementById(`post${t}`);i.style.display="block"};return u("div",{class:"postThumbnail",children:[e[0].type=="photo"&&u("img",{src:e[0].path,class:"thumbnail",onClick:o}),e[0].type!="photo"&&u("video",{class:"thumbnail",preload:"metadata",src:e[0].path,onClick:o}),e.length>1&&u("img",{src:"images/multi-post.webp",class:"postIcon"}),e.length==1&&e[0].type!="photo"&&u("img",{src:"images/reels-icon.png",class:"postIcon"})]})}function Be({content:e,index:t,caption:o}){let i=()=>{let n=document.getElementById(`post${t}`);n.style.display="none";let s=document.querySelector(`#post${t} video`);s&&s.pause()};return u("div",{id:"post"+t,class:"post",children:[u("button",{class:"closeButton",onClick:i,children:"X"}),u(De,{slides:e}),u("div",{class:"postInfo",children:[u("div",{children:[u("img",{src:"images/heart.jpg",class:"icon"}),u("img",{src:"images/comment.png",class:"icon"})]}),u("div",{class:"caption",dangerouslySetInnerHTML:{__html:o}})]})]})}function Re(){let e=[[{path:"posts/intro-post/1.png",type:"photo"}],[{path:"posts/availability-heuristic/1.png",type:"photo"},{path:"posts/availability-heuristic/2.png",type:"photo"},{path:"posts/availability-heuristic/3.png",type:"photo"},{path:"posts/availability-heuristic/4.PNG",type:"photo"},{path:"posts/availability-heuristic/5.png",type:"photo"},{path:"posts/availability-heuristic/6.png",type:"photo"}],[{path:"posts/messaging-post-1/1.png",type:"photo"}],[{path:"posts/messaging-post-2/1.png",type:"photo"}],[{path:"posts/messaging-post-3/1.png",type:"photo"}],[{path:"posts/mindfulness/1.gif",type:"photo"},{path:"posts/mindfulness/2.jpg",type:"photo"},{path:"posts/mindfulness/3.gif",type:"photo"},{path:"posts/mindfulness/4.jpg",type:"photo"},{path:"posts/mindfulness/5.jpg",type:"photo"}],[{path:"posts/pluralistic-ignorance/1.png",type:"photo"},{path:"posts/pluralistic-ignorance/2.png",type:"photo"},{path:"posts/pluralistic-ignorance/3.png",type:"photo"},{path:"posts/pluralistic-ignorance/4.png",type:"photo"},{path:"posts/pluralistic-ignorance/5.png",type:"photo"},{path:"posts/pluralistic-ignorance/6.png",type:"photo"},{path:"posts/pluralistic-ignorance/7.png",type:"photo"},{path:"posts/pluralistic-ignorance/8.png",type:"photo"}],[{path:"posts/text-video/1.mp4",type:"video/mp4"}],[{path:"posts/nyden-reel/1.mp4",type:"video/mp4"}],[{path:"posts/confirmation-bias/1.png",type:"photo"},{path:"posts/confirmation-bias/2.png",type:"photo"},{path:"posts/confirmation-bias/3.png",type:"photo"},{path:"posts/confirmation-bias/4.png",type:"photo"},{path:"posts/confirmation-bias/5.png",type:"photo"},{path:"posts/confirmation-bias/6.png",type:"photo"},{path:"posts/confirmation-bias/7.png",type:"photo"},{path:"posts/confirmation-bias/8.png",type:"photo"}],[{path:"posts/self-esteem/1.jpg",type:"photo"},{path:"posts/self-esteem/2.jpg",type:"photo"},{path:"posts/self-esteem/3.jpg",type:"photo"},{path:"posts/self-esteem/4.gif",type:"photo"},{path:"posts/self-esteem/5.jpg",type:"photo"},{path:"posts/self-esteem/6.gif",type:"photo"},{path:"posts/self-esteem/7.jpg",type:"photo"},{path:"posts/self-esteem/8.jpg",type:"photo"}],[{path:"posts/social-media/1.png",type:"photo"},{path:"posts/social-media/2.png",type:"photo"},{path:"posts/social-media/3.png",type:"photo"},{path:"posts/social-media/4.png",type:"photo"},{path:"posts/social-media/5.png",type:"photo"},{path:"posts/social-media/6.png",type:"photo"},{path:"posts/social-media/7.png",type:"photo"},{path:"posts/social-media/8.png",type:"photo"},{path:"posts/social-media/9.png",type:"photo"},{path:"posts/social-media/10.png",type:"photo"},{path:"posts/social-media/11.png",type:"photo"},{path:"posts/social-media/12.png",type:"photo"}],[{path:"posts/enhance-self-esteem/1.png",type:"photo"},{path:"posts/enhance-self-esteem/2.png",type:"photo"},{path:"posts/enhance-self-esteem/3.png",type:"photo"},{path:"posts/enhance-self-esteem/4.png",type:"photo"},{path:"posts/enhance-self-esteem/5.png",type:"photo"}],[{path:"posts/wellness-and-esteem/1.png",type:"photo"},{path:"posts/wellness-and-esteem/2.png",type:"photo"},{path:"posts/wellness-and-esteem/3.png",type:"photo"},{path:"posts/wellness-and-esteem/4.png",type:"photo"},{path:"posts/wellness-and-esteem/5.gif",type:"photo"}],[{path:"posts/for-wellbeing/1.png",type:"photo"},{path:"posts/for-wellbeing/2.png",type:"photo"},{path:"posts/for-wellbeing/3.png",type:"photo"},{path:"posts/for-wellbeing/4.png",type:"photo"},{path:"posts/for-wellbeing/5.png",type:"photo"},{path:"posts/for-wellbeing/6.png",type:"photo"},{path:"posts/for-wellbeing/7.png",type:"photo"},{path:"posts/for-wellbeing/8.png",type:"photo"},{path:"posts/for-wellbeing/9.png",type:"photo"}],[{path:"posts/cbt/1.png",type:"photo"},{path:"posts/cbt/2.png",type:"photo"},{path:"posts/cbt/3.png",type:"photo"},{path:"posts/cbt/4.png",type:"photo"},{path:"posts/cbt/5.png",type:"photo"}],[{path:"posts/wellness-and-encouragement/1.png",type:"photo"},{path:"posts/wellness-and-encouragement/2.png",type:"photo"},{path:"posts/wellness-and-encouragement/3.png",type:"photo"},{path:"posts/wellness-and-encouragement/4.png",type:"photo"},{path:"posts/wellness-and-encouragement/5.png",type:"photo"},{path:"posts/wellness-and-encouragement/6.png",type:"photo"},{path:"posts/wellness-and-encouragement/7.png",type:"photo"},{path:"posts/wellness-and-encouragement/8.png",type:"photo"}],[{path:"posts/upwards-comparison-reel/1.mp4",type:"video/mp4"}],[{path:"posts/six-mindfulness-exercises/1.png",type:"photo"},{path:"posts/six-mindfulness-exercises/2.png",type:"photo"},{path:"posts/six-mindfulness-exercises/3.png",type:"photo"},{path:"posts/six-mindfulness-exercises/4.png",type:"photo"},{path:"posts/six-mindfulness-exercises/5.png",type:"photo"},{path:"posts/six-mindfulness-exercises/6.png",type:"photo"},{path:"posts/six-mindfulness-exercises/7.gif",type:"photo"},{path:"posts/six-mindfulness-exercises/8.gif",type:"photo"}]],t=["Welcome to our group project! We are @milgramsmaniacs and our account is set up to inform you about ways to use social media constructively.<br><br>This first post is just a little guide to outline our project. We have content in the form of graphics and videos, where the main goal is to inform you all about a little social psychology, while also offering suggestions about how you can use social media in a healthier manner. Lots of these are designed as little scenarios and “expectations versus reality” circumstances to really get you to reflect on certain psychological content and how it relates to social media usage. <br><br>Some of the main concepts we focus on are: <br><br>- Pluralistic ignorance: how social media encourages our overestimation of how many people enjoy behaviours that may be harmful, such as dangerous social media challenges and drinking/drugs<br><br>- Peer pressuring: we may feel more inclined to participate in certain activities, given pluralistic ignorance <br><br>- Confirmation bias: how social media reinforces our pre-existing beliefs and biases<br><br>- Self-esteem/self-worth: how social media can lower our self-esteem, as we tend to make upward comparisons to others<br><br>- Availability heuristics and correspondence bias: related to self-esteem, we tend to make comparisons of our lives to others and start feeling badly about our social circle or achievements based on what we see on social media <br><br>Aside from the negatives of social media, we also highlight some ways to use the internet positively. If you notice on our website, we have omitted the follower and like counts, as this could cause some distress on regular social media accounts. We've also included posts on mental health checklists and suggestions of healthy activities aside from social media. <br><br>We hope you enjoy some healthy doom-scrolling through our account!","Unfortunately, a great proportion of peoples' perception of others is warped by the use of social media. In a study by Chou and Edge, there was a strong correlation between the amount of time an individual spent on social media and their own unhappiness with their own lives. This was measured using a survey, in which participants with high amounts of Facebook usage were more likely to indicate that others were happier than they were, life was unfair and that others had better lives even if they did not know their Facebook 'friends' personally. <br><br>This study was conducted in 2012! Think about the surge of social media since then, in the form of Instagram, Snapchat, TikTok, BeReal and more. In a time where posting is the norm (where everyone wants to put their best selves forward), how can we differentiate between reality and what other people want us to see/believe? <br><br>To reduce the negative effects of availability heuristic and correspondence bias from social media, we can:<br><br>Be more mindful of the amount of time we spend on social media<br><br>Spend more time with actual friends and family<br><br>Keep in mind that everyone is only posting the positive aspects of their lives! We don't know what is going on behind the camera, and we should refrain from making judgements about their lives (subsequently, refrain from comparing our own lives to theirs)<br><br>References<br><br>Chou, H.T.G., Edge, N. (2012). “They are happier and having better lives than I am”: The impact of using Facebook on perceptions of others' lives. Cyberpsychology, Behaviour, and Social Networking, 15(2). https://doi.org/10.1089/cyber.2011.0324/.","In this scenario, someone is being invited to a St. Patrick's Day party with friends, in which alcohol is involved. While sometimes these events can be fun when enjoyed in a safe manner, the person seems hesitant to go.<br><br>Pluralistic ignorance is a phenomenon in social psychology in which a person may say or behave in a way that contradicts what they actually believe, because they overestimate the number of people who endorse these behaviours.<br><br>Social media can even enhance this, as we are subject to seeing everyone else's idea of a good time (or so we think).<br><br>Based on this situation, what do you think? Is this person displaying pluralistic ignorance, and were they convinced to go on the basis of having content to post on their social media? ","Going back to the idea of pluralistic ignorance, this is definitely a more problematic form of this idea. Not only does social media appear to endorse some dangerous behaviours, these online challenges spread quickly to others and encourage them to participate (Falgoust et al., 2022).<br><br>Let's take a second to reflect. Why exactly do we think that everyone enjoys these social media challenges? Is it solely for the popularity and numbers in likes and follows, in a way that boosts our self esteem through gratification? Even if it does boost self-esteem in some ways, there are always dislikes and hate comments that target the subject. The gains in numbers might not even be in our best interests…do you actually have a positive and/or personal connection with each and every like and follow?<br><br>Before you even hit post next time, think about the repercussions of your actions; not even solely to preserve your own self-esteem and self-worth, but also in the interests of others in this endless cycle of social media challenges.<br><br>References<br><br>Falgoust, G., Winterlind, E., Moon, P., Parker, A., Zinzow, H., & Madathil, K. Applying the uses and gratifications theory to identify motivational factors behind young adult's participation in viral social media challenges on TikTok. Human Factors in Healthcare, 2. https://doi.org/10.1016/j.hfh.2022.100014.","We're dealing with a conversation between people who are aware of an individual who died attempting this online challenge. Knowing this information, one person seems hesitant to proceed, but the other person coaxes them into it by saying other people haven't had issues with the challenge.<br><br>This not only displays pluralistic ignorance, but also the idea of confirmation bias in psychology. Confirmation bias occurs on an individual basis, when there is a tendency towards favouring incoming information that confirms one's existing knowledge and beliefs.<br><br>Here, the individual is basing their belief (that nothing will go wrong doing the Blackout Challenge) by recalling only the posts where no long term harm was done, and ignoring examples such as news where an individual ended up passing away. This phenomenon creates a huge potential for the spread of misinformation. In this context, they are misinformed about the actual risks that come from this challenge, by actively seeking out more examples that support that they could even gain fame from attempting this challenge. <br><br>Do you think you have fallen victim to this bias? The thing is, everyone is subjected to bias. However, it's more about how we deal with it. The problem is, social media often reinforces confirmation bias, by producing targeted ads and posts. We should all make an attempt to reduce our confirmation bias, by being more open to new information that might oppose our current knowledge and beliefs even if it makes us uncomfortable!","Mindfulness-based interventions (including self-compassion) improve negative well-being (particularly depression) associated with pluralistic ignorance from upward social comparisons and envy from social-media use which have a “marked negative impact on well-being” (Carraturo et al., 2023). <br><br>Reference:<br><br>Carraturo, F., Di Perna, T., Giannicola, V., Nacchia, M.A., Muzii, B., Bottone, M., Sperandeo, R., Bochicchio, V., Maldonato, N.M., Scandurra, C. (2023). Envy, social comparison, and depression on social networking sites: a systematic review”. European Journal of Investigation in Health, Psychology and Education, 2023, Feb; 13(2): 364-376. https://doi.org/10.3390/ejihpe/13020027.","caption","This video shows that one of the students thinks the group norm at university/college parties is to drink a lot of shots of alcohol, and he is talking about conforming with that norm, even though he doesn’t really want to drink alcohol. His friend who is apparently more self-assured and likely has high self-esteem is going to take non-alcoholic beer to the party. He tells his friend who claims he will drink as many shots as everyone else does (group conformity) about the Prentice and Miller study from 1993. The friend couldn’t believe that people would do something differently than they wanted to do, because they misperceived the group norm – even though it applied to him as well. After considering the pluralistic ignorance phenomenon, he decided to take non-alcoholic beer to the party too (Module 3 and Prentice et al., 1993).<br><br>Not mentioning privately-held beliefs that are wrongly assumed to be counter to what is thought to be the group norm was studied by Pew Research, and they coined the term “spiral of silence” (Module 3 and Hampton et al., 2014). <br><br>References:<br><br>Hampton, K., Rainie, L., Lu, W., Dwyer, M., Shin, I., Purcell, K. (2014). “Social media and the ‘spiral of silence’ “. Hampton, K.N., Rainie, L., Lu, W., Dwyer, M., Shin, I., & Purcell, K. (2014). “Social Media and the ‘Spiral of Silence.’ Pew Research Center, Washington, DC. http://www.pewinternet.org/2014/08/26/social-media-and-the-spiral-of-silence/<br><br>Prentice, D. A., Miller, D. T. (1993). “Pluralistic ignorance and alcohol use on campus: Some consequences of misperceiving the social norm”. Journal of Personality and Social Psychology, 64(2), 243–256. https://doi.org/10.1037/0022-3514.64.2.243.","This video is a fun little demonstration of how people portray their lives differently on social media versus in real life. It also involves the idea of availability heuristics and their impact on our judgements and assumptions.<br><br>Availability heuristics involve when things that are highly accessible to our minds, such as things that we see often, influence our judgements and we make assumptions about an individual or situation (Module 4). When people are exposed to others’ “best selves” as presented on social media, we start to believe that their lives are much more interesting than our own, simply because we are only observing the positive aspects of this individual’s life (Chou & Edge, 2012). This video gives you both what is portrayed online, and therefore highly accessible to your mind, versus the reality of the person's life. It serves to show that you cannot always believe what you see on social media. This potential bias from this heuristic needs to be recognized and avoided so that you can have a proper perception of yourself and others, as well as the world around you. <br><br>As a Milgram’s Maniacs follower, we trust that you will always question what you see on the internet, and do your own research before you create an assumption or assumption. Stay vigilant against this bias and others. Now that you are aware of availability heuristics, see if you can spot discrepancies between the online and real versions of peoples lives that you know, and try to come up with how the availability heuristic might play a part in your perceptions of them had you not been made aware of its effects. <br><br>References:<br><br>Chou, H.T.G., Edge, N. (2012). “They are happier and having better lives than I am”: The impact of using Facebook on perceptions of others’ lives. Cyberpsychology, Behaviour, and Social Networking, 15(2). https://doi.org/10.1089/cyber.2011.0324/.","Confirmation bias might be something that you have been made aware of in the past, or maybe it is a new concept for you. It is a very common bias, and for those who were not aware of it before, you might notice that it is found everywhere, and may even influence people in your closest social circle.<br><br>Confirmation bias occurs when there is a tendency towards assimilation in social schemas; people actively seek out and favor information that confirms existing knowledge and beliefs (Module 4). Social media not only provides these resources to the individual, but also encourages it, by limiting your exposure to things that it believes you like or are interested in, allowing you to see information that fits your existing beliefs, assimilate it into your knowledge, and sometimes even selectively influencing your memory on that topic. <br><br>How can we as the user counteract the effects of confirmation bias, if it is so widespread? The first concept involves disconfirmation tasks. This is when you develop critical questions and counter arguments to your opinions (Wittebols, 2020). This process not only makes the individual uncomfortable, but also provokes thoughts on their opinion that may lead them to broaden their mindset and explore alternatives (Wittebols, 2020). As well, even the idea of educating people on the effects and nature of this bias has proven beneficial to making people more open minded, and less likely to assimilate false information into their beliefs (Wittebols, 2020). <br><br>We have attempted to provide you with as much information about confirmation bias as we can in this intervention post, so that hopefully even just the awareness of it will allow you to question your pre-existing beliefs and think a little before you decide if something is true, or if it is only easy to believe that it is true because it fits what you already think is true. <br><br>Stay Strong Maniacs! #SayNoToBiases #ThinkFirst<br><br>References:<br><br>Wittebols, James H. (2020). Transforming Confirmation Bias to Generate Critical Consciousness in News/Information Literacy and Social Science Courses. The Canadian Journal for the Scholarship of Teaching and Learning, 11 (2). ","caption","The reference below is for the slide that says social media can reduce wellbeing. Specifically the reference says that social media for teens can have “negative psychological outcomes”. The “Set Your Own Limits” part of the name was chosen in reference to the topic of normative cultural influence in Module 3 which (roughly paraphrased) says that in our individualistic culture we don’t like being told what to do.<br><br>Reference:<br><br>Allen, K.A, Ryan, T., Gray D.L., McInerney, D.M, Waters, L. (2014).<br><br>“Adolescents: the positives and the potential pitfalls”. The Educational and Developmental Psychologist, Vol 31, Issue 1, July, 2014, abstract. https://doi.org.10.1017/edp.2014.2.","caption","caption","caption","To counteract the negative aspects of social-media use, Cognitive Behavioural Therapy (CBT) was found to work better than shortening the time on social media or staying away from it completely. A systematic review of the literature (83% of the studies) showed that CBT was especially helpful as an intervention for poor mental well-being associated with social-media use (Plackett et al., 2023).<br><br>Reference:<br><br>Plackett, R., Blyth, A., Shartau, P. (2023). “The impact of social media use interventions on mental well-being: systematic review”. Journal of Medical Internet Research, 2023 Aug 11:25:e44922. https://doi.org/10.2196/44922.","caption","This short reel aims to provide you with a brief explanation about upward comparison, its impact on self-esteem, common examples of upwards comparison, and most importantly, how to break out of a cycle of upwards comparison. <br><br>The concept of upward social comparisons involves comparing yourself to others who are better off than you are (Module 5). This can be especially prominent on social media, where people often alter their lives and showcase the best possible version of themselves that they can create. Constant comparison with people who you see as being happier or living better lives than you is often linked to feeling much worse about yourself, and increased depressive symptoms are common in those who get trapped in this mindset (Module 5). Being able to identify when you are making an upward comparison, and how to break free from the cycle, are important skills we would like to pass on to you through this video.<br><br>The second you recognize that you are experiencing negative self-esteem in relation to an upward comparison, it is important to take steps to change this mindset. The main intervention method for this habit is known as social savoring. Social savoring can be broken down into three main areas: reminiscing, moment, and anticipating. These domains involve thinking positively about past experiences relating to what is bringing you down, thinking positively about what is happening in the moment, and anticipating what positive experiences could come from this in the future (Kilbert et al., 2022). This has been proven effective by a study from Andrade, F. et al., who found that self-esteem decrease from social comparisons was improved through these savoring methods. Things like giving yourself the compassion and gratitude you deserve, limiting exposure to negative social media posts, and focussing on your own achievements all help sustain these positive emotions.<br><br>Keeping an eye out for social comparisons and staying positives are the key to keep your social media mindset at a #MilgramManiacs approved level.<br><br>References:<br><br>Andrade, F., Erwin, S., Burnell, K., Jackson, J., Storch, M., Nicholas, J., & Zucker, N. Intervening on Social Comparisons on Social Media: Electronic Daily Diary Pilot Study. JMIR Ment Health, 10. doi: 10.2196/42024.<br><br>Erng2009. (n.d.). Woman scrolling smartphone touchscreen on social online communication. Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/3221810-woman-scrolling-smartphone-touchscreen-on-Social-online-communication.<br><br>Kilbert, J., Sturz, B., LeLeux-LaBarge, K., Hatton, A., Smalley, K., & Warren, J. Savoring Interventions Increase Positive Emotions After a Social-Evaluative Hassle. Front. Psychol., 20(13). https://doi.org/10.3389/fpsyg.2022.791040.<br><br>Modeonstock. (n.d.). Making Diet Food Kitchen Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/23272293-making-diet-food-kitchen.<br><br> Pingpongchaphoto. (n.d.). Serious stress, business man sitting in office, Problem in working Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/14854952-serious-stress-business-man-sitting-in-office-problem-in-working. <br><br>Vadosloginov. (n.d.). Fitness girl trains outdoors Free Video. [Video]. Vecteezy. https://www.vecteezy.com/free-videos/people-running.","caption"];return u("div",{id:"main",children:[u("div",{id:"profile",children:[u("img",{src:"images/milgram.jpg",id:"profilePhoto"}),u("div",{id:"profileInfoContainer",children:u("div",{id:"profileInfo",children:[u("div",{id:"usernameContainer",children:[u("h1",{children:"@milgramsmaniacs"}),u("img",{src:"images/checkmark.png",id:"checkmark"})]}),u("h2",{children:[e.length," posts    🤷‍♂️followers    🤷‍♂️following"]}),u("h3",{children:"Aryan, Carol, Kalista, Nyden"}),u("h3",{children:"Using social psychology concepts to foster healthy social media use"})]})})]}),u("div",{id:"postThumbnails",children:e.map((o,i)=>u(Le,{content:o,index:i}))}),u("div",{id:"posts",children:e.map((o,i)=>u(Be,{content:o,index:i,caption:t[i]}))})]})}Ie(u(Re,{}),document.body);
