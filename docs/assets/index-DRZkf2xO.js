(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var U,d,fe,E,Y,pe,V,T={},G=[],ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function C(_,e){for(var t in e)_[t]=e[t];return _}function ae(_){var e=_.parentNode;e&&e.removeChild(_)}function ge(_,e,t){var n,o,i,l={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(i in _.defaultProps)l[i]===void 0&&(l[i]=_.defaultProps[i]);return N(_,l,n,o,null)}function N(_,e,t,n,o){var i={type:_,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++fe,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(i),i}function B(_){return _.children}function F(_,e){this.props=_,this.context=e}function S(_,e){if(e==null)return _.__?S(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?S(_):null}function ke(_,e,t){var n,o=_.__v,i=o.__e,l=_.__P;if(l)return(n=C({},o)).__v=o.__v+1,d.vnode&&d.vnode(n),X(l,n,o,_.__n,l.ownerSVGElement!==void 0,32&o.__u?[i]:null,e,i??S(o),!!(32&o.__u),t),n.__v=o.__v,n.__.__k[n.__i]=n,n.__d=void 0,n.__e!=i&&de(n),n}function de(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return de(_)}}function Z(_){(!_.__d&&(_.__d=!0)&&E.push(_)&&!M.__r++||Y!==d.debounceRendering)&&((Y=d.debounceRendering)||pe)(M)}function M(){var _,e,t,n=[],o=[];for(E.sort(V);_=E.shift();)_.__d&&(t=E.length,e=ke(_,n,o)||e,t===0||E.length>t?(j(n,e,o),o.length=n.length=0,e=void 0,E.sort(V)):e&&d.__c&&d.__c(e,G));e&&j(n,e,o),M.__r=0}function he(_,e,t,n,o,i,l,c,f,s,p){var r,k,u,v,w,m=n&&n.__k||G,h=e.length;for(t.__d=f,be(t,e,m),f=t.__d,r=0;r<h;r++)(u=t.__k[r])!=null&&typeof u!="boolean"&&typeof u!="function"&&(k=u.__i===-1?T:m[u.__i]||T,u.__i=r,X(_,u,k,o,i,l,c,f,s,p),v=u.__e,u.ref&&k.ref!=u.ref&&(k.ref&&J(k.ref,null,u),p.push(u.ref,u.__c||v,u)),w==null&&v!=null&&(w=v),65536&u.__u||k.__k===u.__k?f=ve(u,f,_):typeof u.type=="function"&&u.__d!==void 0?f=u.__d:v&&(f=v.nextSibling),u.__d=void 0,u.__u&=-196609);t.__d=f,t.__e=w}function be(_,e,t){var n,o,i,l,c,f=e.length,s=t.length,p=s,r=0;for(_.__k=[],n=0;n<f;n++)l=n+r,(o=_.__k[n]=(o=e[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?N(null,o,null,null,null):K(o)?N(B,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?N(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=_,o.__b=_.__b+1,c=we(o,t,l,p),o.__i=c,i=null,c!==-1&&(p--,(i=t[c])&&(i.__u|=131072)),i==null||i.__v===null?(c==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):c!==l&&(c===l+1?r++:c>l?p>f-l?r+=c-l:r--:c<l?c==l-1&&(r=c-l):r=0,c!==n+r&&(o.__u|=65536))):(i=t[l])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==_.__d&&(_.__d=S(i)),R(i,i,!1),t[l]=null,p--);if(p)for(n=0;n<s;n++)(i=t[n])!=null&&!(131072&i.__u)&&(i.__e==_.__d&&(_.__d=S(i)),R(i,i))}function ve(_,e,t){var n,o;if(typeof _.type=="function"){for(n=_.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=_,e=ve(n[o],e,t));return e}_.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function we(_,e,t,n){var o=_.key,i=_.type,l=t-1,c=t+1,f=e[t];if(f===null||f&&o==f.key&&i===f.type&&!(131072&f.__u))return t;if(n>(f!=null&&!(131072&f.__u)?1:0))for(;l>=0||c<e.length;){if(l>=0){if((f=e[l])&&!(131072&f.__u)&&o==f.key&&i===f.type)return l;l--}if(c<e.length){if((f=e[c])&&!(131072&f.__u)&&o==f.key&&i===f.type)return c;c++}}return-1}function ee(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ye.test(e)?t:t+"px"}function D(_,e,t,n,o){var i;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof n=="string"&&(_.style.cssText=n=""),n)for(e in n)t&&e in t||ee(_.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||ee(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+i]=t,t?n?t.u=n.u:(t.u=Date.now(),_.addEventListener(e,i?te:_e,i)):_.removeEventListener(e,i?te:_e,i);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function _e(_){if(this.l){var e=this.l[_.type+!1];if(_.t){if(_.t<=e.u)return}else _.t=Date.now();return e(d.event?d.event(_):_)}}function te(_){if(this.l)return this.l[_.type+!0](d.event?d.event(_):_)}function X(_,e,t,n,o,i,l,c,f,s){var p,r,k,u,v,w,m,h,y,$,H,x,Q,L,O,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),i=[c=e.__e=t.__e]),(p=d.__b)&&p(e);e:if(typeof b=="function")try{if(h=e.props,y=(p=b.contextType)&&n[p.__c],$=p?y?y.props.value:p.__:n,t.__c?m=(r=e.__c=t.__c).__=r.__E:("prototype"in b&&b.prototype.render?e.__c=r=new b(h,$):(e.__c=r=new F(h,$),r.constructor=b,r.render=$e),y&&y.sub(r),r.props=h,r.state||(r.state={}),r.context=$,r.__n=n,k=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=C({},r.__s)),C(r.__s,b.getDerivedStateFromProps(h,r.__s))),u=r.props,v=r.state,r.__v=e,k)b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==u&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(h,$),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(h,r.__s,$)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(r.props=h,r.state=r.__s,r.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(A){A&&(A.__=e)}),H=0;H<r._sb.length;H++)r.__h.push(r._sb[H]);r._sb=[],r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(h,r.__s,$),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(u,v,w)})}if(r.context=$,r.props=h,r.__P=_,r.__e=!1,x=d.__r,Q=0,"prototype"in b&&b.prototype.render){for(r.state=r.__s,r.__d=!1,x&&x(e),p=r.render(r.props,r.state,r.context),L=0;L<r._sb.length;L++)r.__h.push(r._sb[L]);r._sb=[]}else do r.__d=!1,x&&x(e),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++Q<25);r.state=r.__s,r.getChildContext!=null&&(n=C(C({},n),r.getChildContext())),k||r.getSnapshotBeforeUpdate==null||(w=r.getSnapshotBeforeUpdate(u,v)),he(_,K(O=p!=null&&p.type===B&&p.key==null?p.props.children:p)?O:[O],e,t,n,o,i,l,c,f,s),r.base=e.__e,e.__u&=-161,r.__h.length&&l.push(r),m&&(r.__E=r.__=null)}catch(A){e.__v=null,f||i!=null?(e.__e=c,e.__u|=f?160:32,i[i.indexOf(c)]=null):(e.__e=t.__e,e.__k=t.__k),d.__e(A,e,t)}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Pe(t.__e,e,t,n,o,i,l,f,s);(p=d.diffed)&&p(e)}function j(_,e,t){for(var n=0;n<t.length;n++)J(t[n],t[++n],t[++n]);d.__c&&d.__c(e,_),_.some(function(o){try{_=o.__h,o.__h=[],_.some(function(i){i.call(o)})}catch(i){d.__e(i,o.__v)}})}function Pe(_,e,t,n,o,i,l,c,f){var s,p,r,k,u,v,w,m=t.props,h=e.props,y=e.type;if(y==="svg"&&(o=!0),i!=null){for(s=0;s<i.length;s++)if((u=i[s])&&"setAttribute"in u==!!y&&(y?u.localName===y:u.nodeType===3)){_=u,i[s]=null;break}}if(_==null){if(y===null)return document.createTextNode(h);_=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),i=null,c=!1}if(y===null)m===h||c&&_.data===h||(_.data=h);else{if(i=i&&U.call(_.childNodes),m=t.props||T,!c&&i!=null)for(m={},s=0;s<_.attributes.length;s++)m[(u=_.attributes[s]).name]=u.value;for(s in m)u=m[s],s=="children"||(s=="dangerouslySetInnerHTML"?r=u:s==="key"||s in h||D(_,s,null,u,o));for(s in h)u=h[s],s=="children"?k=u:s=="dangerouslySetInnerHTML"?p=u:s=="value"?v=u:s=="checked"?w=u:s==="key"||c&&typeof u!="function"||m[s]===u||D(_,s,u,m[s],o);if(p)c||r&&(p.__html===r.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(r&&(_.innerHTML=""),he(_,K(k)?k:[k],e,t,n,o&&y!=="foreignObject",i,l,i?i[0]:t.__k&&S(t,0),c,f),i!=null)for(s=i.length;s--;)i[s]!=null&&ae(i[s]);c||(s="value",v!==void 0&&(v!==_[s]||y==="progress"&&!v||y==="option"&&v!==m[s])&&D(_,s,v,m[s],!1),s="checked",w!==void 0&&w!==_[s]&&D(_,s,w,m[s],!1))}return _}function J(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(n){d.__e(n,t)}}function R(_,e,t){var n,o;if(d.unmount&&d.unmount(_),(n=_.ref)&&(n.current&&n.current!==_.__e||J(n,null,e)),(n=_.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){d.__e(i,e)}n.base=n.__P=null,_.__c=void 0}if(n=_.__k)for(o=0;o<n.length;o++)n[o]&&R(n[o],e,t||typeof _.type!="function");t||_.__e==null||ae(_.__e),_.__=_.__e=_.__d=void 0}function $e(_,e,t){return this.constructor(_,t)}function Ce(_,e,t){var n,o,i,l;d.__&&d.__(_,e),o=(n=typeof t=="function")?null:t&&t.__k||e.__k,i=[],l=[],X(e,_=(!n&&t||e).__k=ge(B,null,[_]),o||T,T,e.ownerSVGElement!==void 0,!n&&t?[t]:o?null:e.firstChild?U.call(e.childNodes):null,i,!n&&t?t:o?o.__e:e.firstChild,n,l),_.__d=void 0,j(i,_,l)}U=G.slice,d={__e:function(_,e,t,n){for(var o,i,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(_)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(_,n||{}),l=o.__d),l)return o.__E=o}catch(c){_=c}throw _}},fe=0,F.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof _=="function"&&(_=_(C({},t),this.props)),_&&C(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),Z(this))},F.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Z(this))},F.prototype.render=B,E=[],pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,V=function(_,e){return _.__v.__b-e.__v.__b},M.__r=0;var P,W,oe,me=[],q=[],g=d,ne=g.__b,re=g.__r,ie=g.diffed,le=g.__c,se=g.unmount,ce=g.__;function Ee(){for(var _;_=me.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(I),_.__H.__h.forEach(z),_.__H.__h=[]}catch(e){_.__H.__h=[],g.__e(e,_.__v)}}g.__b=function(_){P=null,ne&&ne(_)},g.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),ce&&ce(_,e)},g.__r=function(_){re&&re(_);var e=(P=_.__c).__H;e&&(W===P?(e.__h=[],P.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=q,t.__N=t.i=void 0})):(e.__h.forEach(I),e.__h.forEach(z),e.__h=[])),W=P},g.diffed=function(_){ie&&ie(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(me.push(e)!==1&&oe===g.requestAnimationFrame||((oe=g.requestAnimationFrame)||Se)(Ee)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==q&&(t.__=t.__V),t.i=void 0,t.__V=q})),W=P=null},g.__c=function(_,e){e.some(function(t){try{t.__h.forEach(I),t.__h=t.__h.filter(function(n){return!n.__||z(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],g.__e(n,t.__v)}}),le&&le(_,e)},g.unmount=function(_){se&&se(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{I(n)}catch(o){e=o}}),t.__H=void 0,e&&g.__e(e,t.__v))};var ue=typeof requestAnimationFrame=="function";function Se(_){var e,t=function(){clearTimeout(n),ue&&cancelAnimationFrame(e),setTimeout(_)},n=setTimeout(t,100);ue&&(e=requestAnimationFrame(t))}function I(_){var e=P,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),P=e}function z(_){var e=P;_.__c=_.__(),P=e}var xe=0;function a(_,e,t,n,o,i){var l,c,f={};for(c in e)c=="ref"?l=e[c]:f[c]=e[c];var s={type:_,props:f,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--xe,__i:-1,__u:0,__source:o,__self:i};if(typeof _=="function"&&(l=_.defaultProps))for(c in l)f[c]===void 0&&(f[c]=l[c]);return d.vnode&&d.vnode(s),s}function Te({content:_,index:e}){let t=()=>{let n=document.getElementById(`post${e}`);n.style.display="block"};return a("div",{class:"postThumbnail",children:[_[0].type=="photo"&&a("img",{src:_[0].path,class:"thumbnail",onClick:t}),_[0].type!="photo"&&a("video",{class:"thumbnail",preload:"metadata",src:_[0].path,onClick:t})]})}function He({content:_,index:e,likes:t,caption:n}){return a("div",{id:"post"+e,class:"post",children:[a("button",{class:"closeButton",onClick:()=>{let o=document.getElementById(`post${e}`);o.style.display="none"},children:"X"}),_[0].type=="photo"&&a("img",{src:_[0].path,class:"content"}),_[0].type!="photo"&&a("video",{class:"content",autoplay:!0,muted:!0,loop:!0,children:a("source",{src:_[0].path})}),a("div",{class:"postInfo",children:[a("div",{children:[a("img",{src:"images/heart.jpg",class:"icon"}),a("img",{src:"images/comment.png",class:"icon"})]}),a("div",{class:"likes",children:[t," likes"]}),a("div",{class:"caption",children:n})]})]})}function Le(){let _=[[{path:"posts/quack.png",type:"photo"},{path:"posts/stock.mp4",type:"video/mp4"}],[{path:"posts/stock.mp4",type:"video/mp4"}]],e=[123,45],t=["This is a caption","This is another caption"];return a("div",{id:"main",children:[a("div",{id:"profile",children:[a("img",{src:"images/photo.jpg",id:"profilePhoto"}),a("div",{id:"profileInfoContainer",children:a("div",{id:"profileInfo",children:[a("div",{id:"usernameContainer",children:[a("h1",{children:"@username"}),a("img",{src:"images/checkmark.png",id:"checkmark"})]}),a("h2",{children:"# posts    # followers    # following"}),a("h3",{children:"Aryan, Carol, Kalista, Nyden"}),a("h3",{children:"Bio"})]})})]}),a("div",{id:"postThumbnails",children:_.map((n,o)=>a(Te,{content:n,index:o}))}),a("div",{id:"posts",children:_.map((n,o)=>a(He,{content:n,index:o,likes:e[o],caption:t[o]}))})]})}Ce(a(Le,{}),document.body);