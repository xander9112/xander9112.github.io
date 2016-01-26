/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
;
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);;
/* jquery.nicescroll
 -- version 3.6.0
 -- copyright 2014-11-21 InuYaksa*2014
 -- licensed under the MIT
 --
 -- http://nicescroll.areaaperta.com/
 -- https://github.com/inuyaksa/jquery.nicescroll
 --
 */

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define([ 'jquery' ], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function (jQuery) {
	"use strict";

	// globals
	var domfocus = false;
	var mousefocus = false;
	var tabindexcounter = 0;
	var ascrailcounter = 2000;
	var globalmaxzindex = 0;

	var $ = jQuery; // sandbox

	// http://stackoverflow.com/questions/2161159/get-script-path
	function getScriptPath () {
		var scripts = document.getElementsByTagName('script');
		var path = scripts[ scripts.length - 1 ].src.split('?')[ 0 ];
		return (path.split('/').length > 0) ? path.split('/').slice(0, -1).join('/') + '/' : '';
	}

	var vendors = [ 'webkit', 'ms', 'moz', 'o' ];

	var setAnimationFrame = window.requestAnimationFrame || false;
	var clearAnimationFrame = window.cancelAnimationFrame || false;

	if (!setAnimationFrame) {  // legacy detection
		for (var vx in vendors) {
			var v = vendors[ vx ];
			if (!setAnimationFrame) setAnimationFrame = window[ v + 'RequestAnimationFrame' ];
			if (!clearAnimationFrame) clearAnimationFrame = window[ v + 'CancelAnimationFrame' ] || window[ v + 'CancelRequestAnimationFrame' ];
		}
	}

	var ClsMutationObserver = window.MutationObserver || window.WebKitMutationObserver || false;

	var _globaloptions = {
		zindex:                     "auto",
		cursoropacitymin:           0,
		cursoropacitymax:           1,
		cursorcolor:                "#424242",
		cursorwidth:                "5px",
		cursorborder:               "1px solid #fff",
		cursorborderradius:         "5px",
		scrollspeed:                60,
		mousescrollstep:            8 * 3,
		touchbehavior:              false,
		hwacceleration:             true,
		usetransition:              true,
		boxzoom:                    false,
		dblclickzoom:               true,
		gesturezoom:                true,
		grabcursorenabled:          true,
		autohidemode:               true,
		background:                 "",
		iframeautoresize:           true,
		cursorminheight:            32,
		preservenativescrolling:    true,
		railoffset:                 false,
		railhoffset:                false,
		bouncescroll:               true,
		spacebarenabled:            true,
		railpadding:                {
			top:    0,
			right:  0,
			left:   0,
			bottom: 0
		},
		disableoutline:             true,
		horizrailenabled:           true,
		railalign:                  "right",
		railvalign:                 "bottom",
		enabletranslate3d:          true,
		enablemousewheel:           true,
		enablekeyboard:             true,
		smoothscroll:               true,
		sensitiverail:              true,
		enablemouselockapi:         true,
		//      cursormaxheight:false,
		cursorfixedheight:          false,
		directionlockdeadzone:      6,
		hidecursordelay:            400,
		nativeparentscrolling:      true,
		enablescrollonselection:    true,
		overflowx:                  true,
		overflowy:                  true,
		cursordragspeed:            0.3,
		rtlmode:                    "auto",
		cursordragontouch:          false,
		oneaxismousemode:           "auto",
		scriptpath:                 getScriptPath(),
		preventmultitouchscrolling: true
	};

	var browserdetected = false;

	var getBrowserDetection = function () {

		if (browserdetected) return browserdetected;

		var _el = document.createElement('DIV'),
			_style = _el.style,
			_agent = navigator.userAgent,
			_platform = navigator.platform,
			d = {};

		d.haspointerlock = "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document;

		d.isopera = ("opera" in window); // 12-
		d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
		d.isoperamini = (Object.prototype.toString.call(window.operamini) === "[object OperaMini]");

		d.isie = (("all" in document) && ("attachEvent" in _el) && !d.isopera); //IE10-
		d.isieold = (d.isie && !("msInterpolationMode" in _style)); // IE6 and older
		d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || (document.documentMode == 7));
		d.isie8 = d.isie && ("documentMode" in document) && (document.documentMode == 8);
		d.isie9 = d.isie && ("performance" in window) && (document.documentMode >= 9);
		d.isie10 = d.isie && ("performance" in window) && (document.documentMode == 10);
		d.isie11 = ("msRequestFullscreen" in _el) && (document.documentMode >= 11); // IE11+

		d.isie9mobile = /iemobile.9/i.test(_agent); //wp 7.1 mango
		if (d.isie9mobile) d.isie9 = false;
		d.isie7mobile = (!d.isie9mobile && d.isie7) && /iemobile/i.test(_agent); //wp 7.0

		d.ismozilla = ("MozAppearance" in _style);

		d.iswebkit = ("WebkitAppearance" in _style);

		d.ischrome = ("chrome" in window);
		d.ischrome22 = (d.ischrome && d.haspointerlock);
		d.ischrome26 = (d.ischrome && ("transition" in _style)); // issue with transform detection (maintain prefix)

		d.cantouch = ("ontouchstart" in document.documentElement) || ("ontouchstart" in window); // detection for Chrome Touch Emulation
		d.hasmstouch = (window.MSPointerEvent || false); // IE10 pointer events
		d.hasw3ctouch = (window.PointerEvent || false); //IE11 pointer events, following W3C Pointer Events spec

		d.ismac = /^mac$/i.test(_platform);

		d.isios = (d.cantouch && /iphone|ipad|ipod/i.test(_platform));
		d.isios4 = ((d.isios) && !("seal" in Object));
		d.isios7 = ((d.isios) && ("webkitHidden" in document));  //iOS 7+

		d.isandroid = (/android/i.test(_agent));

		d.haseventlistener = ("addEventListener" in _el);

		d.trstyle = false;
		d.hastransform = false;
		d.hastranslate3d = false;
		d.transitionstyle = false;
		d.hastransition = false;
		d.transitionend = false;

		var a;
		var check = [ 'transform', 'msTransform', 'webkitTransform', 'MozTransform', 'OTransform' ];
		for (a = 0; a < check.length; a++) {
			if (typeof _style[ check[ a ] ] != "undefined") {
				d.trstyle = check[ a ];
				break;
			}
		}
		d.hastransform = (!!d.trstyle);
		if (d.hastransform) {
			_style[ d.trstyle ] = "translate3d(1px,2px,3px)";
			d.hastranslate3d = /translate3d/.test(_style[ d.trstyle ]);
		}

		d.transitionstyle = false;
		d.prefixstyle = '';
		d.transitionend = false;
		check = [ 'transition', 'webkitTransition', 'msTransition', 'MozTransition', 'OTransition', 'OTransition', 'KhtmlTransition' ];
		var prefix = [ '', '-webkit-', '-ms-', '-moz-', '-o-', '-o', '-khtml-' ];
		var evs = [ 'transitionend', 'webkitTransitionEnd', 'msTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'KhtmlTransitionEnd' ];
		for (a = 0; a < check.length; a++) {
			if (check[ a ] in _style) {
				d.transitionstyle = check[ a ];
				d.prefixstyle = prefix[ a ];
				d.transitionend = evs[ a ];
				break;
			}
		}
		if (d.ischrome26) {  // always use prefix
			d.prefixstyle = prefix[ 1 ];
		}

		d.hastransition = (d.transitionstyle);

		function detectCursorGrab () {
			var lst = [ '-webkit-grab', '-moz-grab', 'grab' ];
			if ((d.ischrome && !d.ischrome22) || d.isie) lst = []; // force setting for IE returns false positive and chrome cursor bug
			for (var a = 0; a < lst.length; a++) {
				var p = lst[ a ];
				_style.cursor = p;
				if (_style.cursor == p) return p;
			}
			return 'url(//mail.google.com/mail/images/2/openhand.cur),n-resize'; // thank you google for custom cursor!
		}

		d.cursorgrabvalue = detectCursorGrab();

		d.hasmousecapture = ("setCapture" in _el);

		d.hasMutationObserver = (ClsMutationObserver !== false);

		_el = null; //memory released

		browserdetected = d;

		return d;
	};

	var NiceScrollClass = function (myopt, me) {

		var self = this;

		this.version = '3.6.0';
		this.name = 'nicescroll';

		this.me = me;

		this.opt = {
			doc: $("body"),
			win: false
		};

		$.extend(this.opt, _globaloptions);  // clone opts

		// Options for internal use
		this.opt.snapbackspeed = 80;

		if (myopt || false) {
			for (var a in self.opt) {
				if (typeof myopt[ a ] != "undefined") self.opt[ a ] = myopt[ a ];
			}
		}

		this.doc = self.opt.doc;
		this.iddoc = (this.doc && this.doc[ 0 ]) ? this.doc[ 0 ].id || '' : '';
		this.ispage = /^BODY|HTML/.test((self.opt.win) ? self.opt.win[ 0 ].nodeName : this.doc[ 0 ].nodeName);
		this.haswrapper = (self.opt.win !== false);
		this.win = self.opt.win || (this.ispage ? $(window) : this.doc);
		this.docscroll = (this.ispage && !this.haswrapper) ? $(window) : this.win;
		this.body = $("body");
		this.viewport = false;

		this.isfixed = false;

		this.iframe = false;
		this.isiframe = ((this.doc[ 0 ].nodeName == 'IFRAME') && (this.win[ 0 ].nodeName == 'IFRAME'));

		this.istextarea = (this.win[ 0 ].nodeName == 'TEXTAREA');

		this.forcescreen = false; //force to use screen position on events

		this.canshowonmouseevent = (self.opt.autohidemode != "scroll");

		// Events jump table    
		this.onmousedown = false;
		this.onmouseup = false;
		this.onmousemove = false;
		this.onmousewheel = false;
		this.onkeypress = false;
		this.ongesturezoom = false;
		this.onclick = false;

		// Nicescroll custom events
		this.onscrollstart = false;
		this.onscrollend = false;
		this.onscrollcancel = false;

		this.onzoomin = false;
		this.onzoomout = false;

		// Let's start!  
		this.view = false;
		this.page = false;

		this.scroll = {
			x: 0,
			y: 0
		};
		this.scrollratio = {
			x: 0,
			y: 0
		};
		this.cursorheight = 20;
		this.scrollvaluemax = 0;

		this.isrtlmode = (this.opt.rtlmode == "auto") ? ((this.win[ 0 ] == window ? this.body : this.win).css("direction") == "rtl") : (this.opt.rtlmode === true);
		//    this.checkrtlmode = false;

		this.scrollrunning = false;

		this.scrollmom = false;

		this.observer = false;  // observer div changes
		this.observerremover = false;  // observer on parent for remove detection
		this.observerbody = false;  // observer on body for position change

		do {
			this.id = "ascrail" + (ascrailcounter++);
		} while (document.getElementById(this.id));

		this.rail = false;
		this.cursor = false;
		this.cursorfreezed = false;
		this.selectiondrag = false;

		this.zoom = false;
		this.zoomactive = false;

		this.hasfocus = false;
		this.hasmousefocus = false;

		this.visibility = true;
		this.railslocked = false;  // locked by resize
		this.locked = false;  // prevent lost of locked status sets by user
		this.hidden = false; // rails always hidden
		this.cursoractive = true; // user can interact with cursors

		this.wheelprevented = false; //prevent mousewheel event

		this.overflowx = self.opt.overflowx;
		this.overflowy = self.opt.overflowy;

		this.nativescrollingarea = false;
		this.checkarea = 0;

		this.events = []; // event list for unbind

		this.saved = {};  // style saved

		this.delaylist = {};
		this.synclist = {};

		this.lastdeltax = 0;
		this.lastdeltay = 0;

		this.detected = getBrowserDetection();

		var cap = $.extend({}, this.detected);

		this.canhwscroll = (cap.hastransform && self.opt.hwacceleration);
		this.ishwscroll = (this.canhwscroll && self.haswrapper);

		this.hasreversehr = (this.isrtlmode && !cap.iswebkit);  //RTL mode with reverse horizontal axis

		this.istouchcapable = false; // desktop devices with touch screen support

		//## Check WebKit-based desktop with touch support
		//## + Firefox 18 nightly build (desktop) false positive (or desktop with touch support)
		if (cap.cantouch && !cap.isios && !cap.isandroid && (cap.iswebkit || cap.ismozilla)) {
			this.istouchcapable = true;
			cap.cantouch = false; // parse normal desktop events
		}

		//## disable MouseLock API on user request
		if (!self.opt.enablemouselockapi) {
			cap.hasmousecapture = false;
			cap.haspointerlock = false;
		}

		/* deprecated
		 this.delayed = function(name, fn, tm, lazy) {
		 };
		 */

		this.debounced = function (name, fn, tm) {
			var dd = self.delaylist[ name ];
			self.delaylist[ name ] = fn;
			if (!dd) {
				setTimeout(function () {
					var fn = self.delaylist[ name ];
					self.delaylist[ name ] = false;
					fn.call(self);
				}, tm);
			}
		};

		var _onsync = false;

		this.synched = function (name, fn) {

			function requestSync () {
				if (_onsync) return;
				setAnimationFrame(function () {
					_onsync = false;
					for (var nn in self.synclist) {
						var fn = self.synclist[ nn ];
						if (fn) fn.call(self);
						self.synclist[ nn ] = false;
					}
				});
				_onsync = true;
			}

			self.synclist[ name ] = fn;
			requestSync();
			return name;
		};

		this.unsynched = function (name) {
			if (self.synclist[ name ]) self.synclist[ name ] = false;
		};

		this.css = function (el, pars) { // save & set
			for (var n in pars) {
				self.saved.css.push([ el, n, el.css(n) ]);
				el.css(n, pars[ n ]);
			}
		};

		this.scrollTop = function (val) {
			return (typeof val == "undefined") ? self.getScrollTop() : self.setScrollTop(val);
		};

		this.scrollLeft = function (val) {
			return (typeof val == "undefined") ? self.getScrollLeft() : self.setScrollLeft(val);
		};

		// derived by by Dan Pupius www.pupius.net
		var BezierClass = function (st, ed, spd, p1, p2, p3, p4) {

			this.st = st;
			this.ed = ed;
			this.spd = spd;

			this.p1 = p1 || 0;
			this.p2 = p2 || 1;
			this.p3 = p3 || 0;
			this.p4 = p4 || 1;

			this.ts = (new Date()).getTime();
			this.df = this.ed - this.st;
		};
		BezierClass.prototype = {
			B2:     function (t) {
				return 3 * t * t * (1 - t);
			},
			B3:     function (t) {
				return 3 * t * (1 - t) * (1 - t);
			},
			B4:     function (t) {
				return (1 - t) * (1 - t) * (1 - t);
			},
			getNow: function () {
				var nw = (new Date()).getTime();
				var pc = 1 - ((nw - this.ts) / this.spd);
				var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
				return (pc < 0) ? this.ed : this.st + Math.round(this.df * bz);
			},
			update: function (ed, spd) {
				this.st = this.getNow();
				this.ed = ed;
				this.spd = spd;
				this.ts = (new Date()).getTime();
				this.df = this.ed - this.st;
				return this;
			}
		};

		//derived from http://stackoverflow.com/questions/11236090/
		function getMatrixValues () {
			var tr = self.doc.css(cap.trstyle);
			if (tr && (tr.substr(0, 6) == "matrix")) {
				return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/);
			}
			return false;
		}

		if (this.ishwscroll) {
			// hw accelerated scroll
			this.doc.translate = {
				x:  0,
				y:  0,
				tx: "0px",
				ty: "0px"
			};

			//this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
			if (cap.hastranslate3d && cap.isios) this.doc.css("-webkit-backface-visibility", "hidden"); // prevent flickering http://stackoverflow.com/questions/3461441/      

			this.getScrollTop = function (last) {
				if (!last) {
					var mtx = getMatrixValues();
					if (mtx) return (mtx.length == 16) ? -mtx[ 13 ] : -mtx[ 5 ]; //matrix3d 16 on IE10
					if (self.timerscroll && self.timerscroll.bz) return self.timerscroll.bz.getNow();
				}
				return self.doc.translate.y;
			};

			this.getScrollLeft = function (last) {
				if (!last) {
					var mtx = getMatrixValues();
					if (mtx) return (mtx.length == 16) ? -mtx[ 12 ] : -mtx[ 4 ]; //matrix3d 16 on IE10
					if (self.timerscroll && self.timerscroll.bh) return self.timerscroll.bh.getNow();
				}
				return self.doc.translate.x;
			};

			this.notifyScrollEvent = function (el) {
				var e = document.createEvent("UIEvents");
				e.initUIEvent("scroll", false, true, window, 1);
				e.niceevent = true;
				el.dispatchEvent(e);
			};

			var cxscrollleft = (this.isrtlmode) ? 1 : -1;

			if (cap.hastranslate3d && self.opt.enabletranslate3d) {
				this.setScrollTop = function (val, silent) {
					self.doc.translate.y = val;
					self.doc.translate.ty = (val * -1) + "px";
					self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0px)");
					if (!silent) self.notifyScrollEvent(self.win[ 0 ]);
				};
				this.setScrollLeft = function (val, silent) {
					self.doc.translate.x = val;
					self.doc.translate.tx = (val * cxscrollleft) + "px";
					self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0px)");
					if (!silent) self.notifyScrollEvent(self.win[ 0 ]);
				};
			} else {
				this.setScrollTop = function (val, silent) {
					self.doc.translate.y = val;
					self.doc.translate.ty = (val * -1) + "px";
					self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
					if (!silent) self.notifyScrollEvent(self.win[ 0 ]);
				};
				this.setScrollLeft = function (val, silent) {
					self.doc.translate.x = val;
					self.doc.translate.tx = (val * cxscrollleft) + "px";
					self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
					if (!silent) self.notifyScrollEvent(self.win[ 0 ]);
				};
			}
		} else {
			// native scroll
			this.getScrollTop = function () {
				return self.docscroll.scrollTop();
			};
			this.setScrollTop = function (val) {
				return self.docscroll.scrollTop(val);
			};
			this.getScrollLeft = function () {
				if (self.detected.ismozilla && self.isrtlmode)
					return Math.abs(self.docscroll.scrollLeft());
				return self.docscroll.scrollLeft();
			};
			this.setScrollLeft = function (val) {
				return self.docscroll.scrollLeft((self.detected.ismozilla && self.isrtlmode) ? -val : val);
			};
		}

		this.getTarget = function (e) {
			if (!e) return false;
			if (e.target) return e.target;
			if (e.srcElement) return e.srcElement;
			return false;
		};

		this.hasParent = function (e, id) {
			if (!e) return false;
			var el = e.target || e.srcElement || e || false;
			while (el && el.id != id) {
				el = el.parentNode || false;
			}
			return (el !== false);
		};

		function getZIndex () {
			var dom = self.win;
			if ("zIndex" in dom) return dom.zIndex(); // use jQuery UI method when available
			while (dom.length > 0) {
				if (dom[ 0 ].nodeType == 9) return false;
				var zi = dom.css('zIndex');
				if (!isNaN(zi) && zi != 0) return parseInt(zi);
				dom = dom.parent();
			}
			return false;
		}

		//inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
		var _convertBorderWidth = {
			"thin":   1,
			"medium": 3,
			"thick":  5
		};

		function getWidthToPixel (dom, prop, chkheight) {
			var wd = dom.css(prop);
			var px = parseFloat(wd);
			if (isNaN(px)) {
				px = _convertBorderWidth[ wd ] || 0;
				var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
				if (self.isie8 && px) px += 1;
				return (brd) ? px : 0;
			}
			return px;
		}

		this.getDocumentScrollOffset = function () {
			return {
				top:  window.pageYOffset || document.documentElement.scrollTop,
				left: window.pageXOffset || document.documentElement.scrollLeft
			};
		}

		this.getOffset = function () {
			if (self.isfixed) {
				var ofs = self.win.offset();  // fix Chrome auto issue (when right/bottom props only)
				var scrl = self.getDocumentScrollOffset();
				ofs.top -= scrl.top;
				ofs.left -= scrl.left;
				return ofs;
			}
			var ww = self.win.offset();
			if (!self.viewport) return ww;
			var vp = self.viewport.offset();
			return {
				top:  ww.top - vp.top,// + self.viewport.scrollTop(),
				left: ww.left - vp.left // + self.viewport.scrollLeft()
			};
		};

		this.updateScrollBar = function (len) {
			if (self.ishwscroll) {
				self.rail.css({  //**
					height: self.win.innerHeight() - (self.opt.railpadding.top + self.opt.railpadding.bottom)
				});
				if (self.railh) self.railh.css({  //**
					width: self.win.innerWidth() - (self.opt.railpadding.left + self.opt.railpadding.right)
				});

			} else {
				var wpos = self.getOffset();
				var pos = {
					top:  wpos.top,
					left: wpos.left - (self.opt.railpadding.left + self.opt.railpadding.right)
				};
				pos.top += getWidthToPixel(self.win, 'border-top-width', true);
				pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');

				var off = self.opt.railoffset;
				if (off) {
					if (off.top) pos.top += off.top;
					if (self.rail.align && off.left) pos.left += off.left;
				}

				if (!self.railslocked) self.rail.css({
					top:    pos.top,
					left:   pos.left,
					height: ((len) ? len.h : self.win.innerHeight()) - (self.opt.railpadding.top + self.opt.railpadding.bottom)
				});

				if (self.zoom) {
					self.zoom.css({
						top:  pos.top + 1,
						left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
					});
				}

				if (self.railh && !self.railslocked) {
					var pos = {
						top:  wpos.top,
						left: wpos.left
					};
					var off = self.opt.railhoffset;
					if (!!off) {
						if (!!off.top) pos.top += off.top;
						if (!!off.left) pos.left += off.left;
					}
					var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', true);
					var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
					self.railh.css({
						top:   y - (self.opt.railpadding.top + self.opt.railpadding.bottom),
						left:  x,
						width: self.railh.width
					});
				}


			}
		};

		this.doRailClick = function (e, dbl, hr) {
			var fn, pg, cur, pos;

			if (self.railslocked) return;
			self.cancelEvent(e);

			if (dbl) {
				fn = (hr) ? self.doScrollLeft : self.doScrollTop;
				cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
				fn(cur);
			} else {
				fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
				cur = (hr) ? self.scroll.x : self.scroll.y;
				pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
				pg = (hr) ? self.view.w : self.view.h;
				fn((cur >= pos) ? pg : -pg);//   (cur >= pos) ? fn(pg): fn(-pg);
			}

		};

		self.hasanimationframe = (setAnimationFrame);
		self.hascancelanimationframe = (clearAnimationFrame);

		if (!self.hasanimationframe) {
			setAnimationFrame = function (fn) {
				return setTimeout(fn, 15 - Math.floor((+new Date()) / 1000) % 16);
			}; // 1000/60)};
			clearAnimationFrame = clearInterval;
		} else if (!self.hascancelanimationframe) clearAnimationFrame = function () {
			self.cancelAnimationFrame = true;
		};

		this.init = function () {

			self.saved.css = [];

			if (cap.isie7mobile) return true; // SORRY, DO NOT WORK!
			if (cap.isoperamini) return true; // SORRY, DO NOT WORK!

			if (cap.hasmstouch) self.css((self.ispage) ? $("html") : self.win, {
				'-ms-touch-action': 'none'
			});

			self.zindex = "auto";
			if (!self.ispage && self.opt.zindex == "auto") {
				self.zindex = getZIndex() || "auto";
			} else {
				self.zindex = self.opt.zindex;
			}

			if (!self.ispage && self.zindex != "auto") {
				if (self.zindex > globalmaxzindex) globalmaxzindex = self.zindex;
			}

			if (self.isie && self.zindex == 0 && self.opt.zindex == "auto") { // fix IE auto == 0
				self.zindex = "auto";
			}

			if (!self.ispage || (!cap.cantouch && !cap.isieold && !cap.isie9mobile)) {

				var cont = self.docscroll;
				if (self.ispage) cont = (self.haswrapper) ? self.win : self.doc;

				if (!cap.isie9mobile) self.css(cont, {
					'overflow-y': 'hidden'
				});

				if (self.ispage && cap.isie7) {
					if (self.doc[ 0 ].nodeName == 'BODY') self.css($("html"), {
						'overflow-y': 'hidden'
					}); //IE7 double scrollbar issue
					else if (self.doc[ 0 ].nodeName == 'HTML') self.css($("body"), {
						'overflow-y': 'hidden'
					}); //IE7 double scrollbar issue
				}

				if (cap.isios && !self.ispage && !self.haswrapper) self.css($("body"), {
					"-webkit-overflow-scrolling": "touch"
				}); //force hw acceleration

				var cursor = $(document.createElement('div'));
				cursor.css({
					position:                "relative",
					top:                     0,
					"float":                 "right",
					width:                   self.opt.cursorwidth,
					height:                  "0px",
					'background-color':      self.opt.cursorcolor,
					border:                  self.opt.cursorborder,
					'background-clip':       'padding-box',
					'-webkit-border-radius': self.opt.cursorborderradius,
					'-moz-border-radius':    self.opt.cursorborderradius,
					'border-radius':         self.opt.cursorborderradius
				});

				cursor.hborder = parseFloat(cursor.outerHeight() - cursor.innerHeight());

				cursor.addClass('nicescroll-cursors');

				self.cursor = cursor;

				var rail = $(document.createElement('div'));
				rail.attr('id', self.id);
				rail.addClass('nicescroll-rails nicescroll-rails-vr');

				var v, a, kp = [ "left", "right", "top", "bottom" ];  //**
				for (var n in kp) {
					a = kp[ n ];
					v = self.opt.railpadding[ a ];
					(v) ? rail.css("padding-" + a, v + "px") : self.opt.railpadding[ a ] = 0;
				}

				rail.append(cursor);

				rail.width = Math.max(parseFloat(self.opt.cursorwidth), cursor.outerWidth());
				rail.css({
					width:        rail.width + "px",
					'zIndex':     self.zindex,
					"background": self.opt.background,
					cursor:       "default"
				});

				rail.visibility = true;
				rail.scrollable = true;

				rail.align = (self.opt.railalign == "left") ? 0 : 1;

				self.rail = rail;

				self.rail.drag = false;

				var zoom = false;
				if (self.opt.boxzoom && !self.ispage && !cap.isieold) {
					zoom = document.createElement('div');

					self.bind(zoom, "click", self.doZoom);
					self.bind(zoom, "mouseenter", function () {
						self.zoom.css('opacity', self.opt.cursoropacitymax);
					});
					self.bind(zoom, "mouseleave", function () {
						self.zoom.css('opacity', self.opt.cursoropacitymin);
					});

					self.zoom = $(zoom);
					self.zoom.css({
						"cursor":             "pointer",
						'z-index':            self.zindex,
						'backgroundImage':    'url(' + self.opt.scriptpath + 'zoomico.png)',
						'height':             18,
						'width':              18,
						'backgroundPosition': '0px 0px'
					});
					if (self.opt.dblclickzoom) self.bind(self.win, "dblclick", self.doZoom);
					if (cap.cantouch && self.opt.gesturezoom) {
						self.ongesturezoom = function (e) {
							if (e.scale > 1.5) self.doZoomIn(e);
							if (e.scale < 0.8) self.doZoomOut(e);
							return self.cancelEvent(e);
						};
						self.bind(self.win, "gestureend", self.ongesturezoom);
					}
				}

				// init HORIZ

				self.railh = false;
				var railh;

				if (self.opt.horizrailenabled) {

					self.css(cont, {
						'overflow-x': 'hidden'
					});

					var cursor = $(document.createElement('div'));
					cursor.css({
						position:                "absolute",
						top:                     0,
						height:                  self.opt.cursorwidth,
						width:                   "0px",
						'background-color':      self.opt.cursorcolor,
						border:                  self.opt.cursorborder,
						'background-clip':       'padding-box',
						'-webkit-border-radius': self.opt.cursorborderradius,
						'-moz-border-radius':    self.opt.cursorborderradius,
						'border-radius':         self.opt.cursorborderradius
					});

					if (cap.isieold) cursor.css({ 'overflow': 'hidden' });  //IE6 horiz scrollbar issue

					cursor.wborder = parseFloat(cursor.outerWidth() - cursor.innerWidth());

					cursor.addClass('nicescroll-cursors');

					self.cursorh = cursor;

					railh = $(document.createElement('div'));
					railh.attr('id', self.id + '-hr');
					railh.addClass('nicescroll-rails nicescroll-rails-hr');
					railh.height = Math.max(parseFloat(self.opt.cursorwidth), cursor.outerHeight());
					railh.css({
						height:       railh.height + "px",
						'zIndex':     self.zindex,
						"background": self.opt.background
					});

					railh.append(cursor);

					railh.visibility = true;
					railh.scrollable = true;

					railh.align = (self.opt.railvalign == "top") ? 0 : 1;

					self.railh = railh;

					self.railh.drag = false;

				}

				//        

				if (self.ispage) {
					rail.css({
						position: "fixed",
						top:      "0px",
						height:   "100%"
					});
					(rail.align) ? rail.css({
						right: "0px"
					}) : rail.css({
						left: "0px"
					});
					self.body.append(rail);
					if (self.railh) {
						railh.css({
							position: "fixed",
							left:     "0px",
							width:    "100%"
						});
						(railh.align) ? railh.css({
							bottom: "0px"
						}) : railh.css({
							top: "0px"
						});
						self.body.append(railh);
					}
				} else {
					if (self.ishwscroll) {
						if (self.win.css('position') == 'static') self.css(self.win, {
							'position': 'relative'
						});
						var bd = (self.win[ 0 ].nodeName == 'HTML') ? self.body : self.win;
						$(bd).scrollTop(0).scrollLeft(0);  // fix rail position if content already scrolled
						if (self.zoom) {
							self.zoom.css({
								position:       "absolute",
								top:            1,
								right:          0,
								"margin-right": rail.width + 4
							});
							bd.append(self.zoom);
						}
						rail.css({
							position: "absolute",
							top:      0
						});
						(rail.align) ? rail.css({
							right: 0
						}) : rail.css({
							left: 0
						});
						bd.append(rail);
						if (railh) {
							railh.css({
								position: "absolute",
								left:     0,
								bottom:   0
							});
							(railh.align) ? railh.css({
								bottom: 0
							}) : railh.css({
								top: 0
							});
							bd.append(railh);
						}
					} else {
						self.isfixed = (self.win.css("position") == "fixed");
						var rlpos = (self.isfixed) ? "fixed" : "absolute";

						if (!self.isfixed) self.viewport = self.getViewport(self.win[ 0 ]);
						if (self.viewport) {
							self.body = self.viewport;
							if ((/fixed|absolute/.test(self.viewport.css("position"))) == false) self.css(self.viewport, {
								"position": "relative"
							});
						}

						rail.css({
							position: rlpos
						});
						if (self.zoom) self.zoom.css({
							position: rlpos
						});
						self.updateScrollBar();
						self.body.append(rail);
						if (self.zoom) self.body.append(self.zoom);
						if (self.railh) {
							railh.css({
								position: rlpos
							});
							self.body.append(railh);
						}
					}

					if (cap.isios) self.css(self.win, {
						'-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
						'-webkit-touch-callout':       'none'
					}); // prevent grey layer on click

					if (cap.isie && self.opt.disableoutline) self.win.attr("hideFocus", "true"); // IE, prevent dotted rectangle on focused div
					if (cap.iswebkit && self.opt.disableoutline) self.win.css({ "outline": "none" });  // Webkit outline
					//if (cap.isopera&&self.opt.disableoutline) self.win.css({"outline":"0"});  // Opera 12- to test [TODO]

				}

				if (self.opt.autohidemode === false) {
					self.autohidedom = false;
					self.rail.css({
						opacity: self.opt.cursoropacitymax
					});
					if (self.railh) self.railh.css({
						opacity: self.opt.cursoropacitymax
					});
				} else if ((self.opt.autohidemode === true) || (self.opt.autohidemode === "leave")) {
					self.autohidedom = $().add(self.rail);
					if (cap.isie8) self.autohidedom = self.autohidedom.add(self.cursor);
					if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
					if (self.railh && cap.isie8) self.autohidedom = self.autohidedom.add(self.cursorh);
				} else if (self.opt.autohidemode == "scroll") {
					self.autohidedom = $().add(self.rail);
					if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
				} else if (self.opt.autohidemode == "cursor") {
					self.autohidedom = $().add(self.cursor);
					if (self.railh) self.autohidedom = self.autohidedom.add(self.cursorh);
				} else if (self.opt.autohidemode == "hidden") {
					self.autohidedom = false;
					self.hide();
					self.railslocked = false;
				}

				if (cap.isie9mobile) {

					self.scrollmom = new ScrollMomentumClass2D(self);

					self.onmangotouch = function () {
						var py = self.getScrollTop();
						var px = self.getScrollLeft();

						if ((py == self.scrollmom.lastscrolly) && (px == self.scrollmom.lastscrollx)) return true;

						var dfy = py - self.mangotouch.sy;
						var dfx = px - self.mangotouch.sx;
						var df = Math.round(Math.sqrt(Math.pow(dfx, 2) + Math.pow(dfy, 2)));
						if (df == 0) return;

						var dry = (dfy < 0) ? -1 : 1;
						var drx = (dfx < 0) ? -1 : 1;

						var tm = +new Date();
						if (self.mangotouch.lazy) clearTimeout(self.mangotouch.lazy);

						if (((tm - self.mangotouch.tm) > 80) || (self.mangotouch.dry != dry) || (self.mangotouch.drx != drx)) {
							self.scrollmom.stop();
							self.scrollmom.reset(px, py);
							self.mangotouch.sy = py;
							self.mangotouch.ly = py;
							self.mangotouch.sx = px;
							self.mangotouch.lx = px;
							self.mangotouch.dry = dry;
							self.mangotouch.drx = drx;
							self.mangotouch.tm = tm;
						} else {

							self.scrollmom.stop();
							self.scrollmom.update(self.mangotouch.sx - dfx, self.mangotouch.sy - dfy);
							self.mangotouch.tm = tm;

							var ds = Math.max(Math.abs(self.mangotouch.ly - py), Math.abs(self.mangotouch.lx - px));
							self.mangotouch.ly = py;
							self.mangotouch.lx = px;

							if (ds > 2) {
								self.mangotouch.lazy = setTimeout(function () {
									self.mangotouch.lazy = false;
									self.mangotouch.dry = 0;
									self.mangotouch.drx = 0;
									self.mangotouch.tm = 0;
									self.scrollmom.doMomentum(30);
								}, 100);
							}
						}
					};

					var top = self.getScrollTop();
					var lef = self.getScrollLeft();
					self.mangotouch = {
						sy:   top,
						ly:   top,
						dry:  0,
						sx:   lef,
						lx:   lef,
						drx:  0,
						lazy: false,
						tm:   0
					};

					self.bind(self.docscroll, "scroll", self.onmangotouch);

				} else {

					if (cap.cantouch || self.istouchcapable || self.opt.touchbehavior || cap.hasmstouch) {

						self.scrollmom = new ScrollMomentumClass2D(self);

						self.ontouchstart = function (e) {
							if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;

							self.hasmoving = false;

							if (!self.railslocked) {

								var tg;
								if (cap.hasmstouch) {
									tg = (e.target) ? e.target : false;
									while (tg) {
										var nc = $(tg).getNiceScroll();
										if ((nc.length > 0) && (nc[ 0 ].me == self.me)) break;
										if (nc.length > 0) return false;
										if ((tg.nodeName == 'DIV') && (tg.id == self.id)) break;
										tg = (tg.parentNode) ? tg.parentNode : false;
									}
								}

								self.cancelScroll();

								tg = self.getTarget(e);

								if (tg) {
									var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
									if (skp) return self.stopPropagation(e);
								}

								if (!("clientX" in e) && ("changedTouches" in e)) {
									e.clientX = e.changedTouches[ 0 ].clientX;
									e.clientY = e.changedTouches[ 0 ].clientY;
								}

								if (self.forcescreen) {
									var le = e;
									e = {
										"original": (e.original) ? e.original : e
									};
									e.clientX = le.screenX;
									e.clientY = le.screenY;
								}

								self.rail.drag = {
									x:  e.clientX,
									y:  e.clientY,
									sx: self.scroll.x,
									sy: self.scroll.y,
									st: self.getScrollTop(),
									sl: self.getScrollLeft(),
									pt: 2,
									dl: false
								};

								if (self.ispage || !self.opt.directionlockdeadzone) {
									self.rail.drag.dl = "f";
								} else {

									var view = {
										w: $(window).width(),
										h: $(window).height()
									};

									var page = {
										w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
										h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
									};

									var maxh = Math.max(0, page.h - view.h);
									var maxw = Math.max(0, page.w - view.w);

									if (!self.rail.scrollable && self.railh.scrollable) self.rail.drag.ck = (maxh > 0) ? "v" : false;
									else if (self.rail.scrollable && !self.railh.scrollable) self.rail.drag.ck = (maxw > 0) ? "h" : false;
									else self.rail.drag.ck = false;
									if (!self.rail.drag.ck) self.rail.drag.dl = "f";
								}

								if (self.opt.touchbehavior && self.isiframe && cap.isie) {
									var wp = self.win.position();
									self.rail.drag.x += wp.left;
									self.rail.drag.y += wp.top;
								}

								self.hasmoving = false;
								self.lastmouseup = false;
								self.scrollmom.reset(e.clientX, e.clientY);

								if (!cap.cantouch && !this.istouchcapable && !e.pointerType) {

									var ip = (tg) ? /INPUT|SELECT|TEXTAREA/i.test(tg.nodeName) : false;
									if (!ip) {
										if (!self.ispage && cap.hasmousecapture) tg.setCapture();
										if (self.opt.touchbehavior) {
											if (tg.onclick && !(tg._onclick || false)) { // intercept DOM0 onclick event
												tg._onclick = tg.onclick;
												tg.onclick = function (e) {
													if (self.hasmoving) return false;
													tg._onclick.call(this, e);
												};
											}
											return self.cancelEvent(e);
										}
										return self.stopPropagation(e);
									}

									if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
										pc = {
											"tg":    tg,
											"click": false
										};
										self.preventclick = pc;
									}

								}
							}

						};

						self.ontouchend = function (e) {
							if (!self.rail.drag) return true;
							if (self.rail.drag.pt == 2) {
								if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
								self.scrollmom.doMomentum();
								self.rail.drag = false;
								if (self.hasmoving) {
									self.lastmouseup = true;
									self.hideCursor();
									if (cap.hasmousecapture) document.releaseCapture();
									if (!cap.cantouch) return self.cancelEvent(e);
								}
							}
							else if (self.rail.drag.pt == 1) {
								return self.onmouseup(e);
							}

						};

						var moveneedoffset = (self.opt.touchbehavior && self.isiframe && !cap.hasmousecapture);

						self.ontouchmove = function (e, byiframe) {

							if (!self.rail.drag) return false;

							if (e.targetTouches && self.opt.preventmultitouchscrolling) {
								if (e.targetTouches.length > 1) return false; // multitouch
							}

							if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;

							if (self.rail.drag.pt == 2) {
								if (cap.cantouch && (cap.isios) && (typeof e.original == "undefined")) return true; // prevent ios "ghost" events by clickable elements

								self.hasmoving = true;

								if (self.preventclick && !self.preventclick.click) {
									self.preventclick.click = self.preventclick.tg.onclick || false;
									self.preventclick.tg.onclick = self.onpreventclick;
								}

								var ev = $.extend({
									"original": e
								}, e);
								e = ev;

								if (("changedTouches" in e)) {
									e.clientX = e.changedTouches[ 0 ].clientX;
									e.clientY = e.changedTouches[ 0 ].clientY;
								}

								if (self.forcescreen) {
									var le = e;
									e = {
										"original": (e.original) ? e.original : e
									};
									e.clientX = le.screenX;
									e.clientY = le.screenY;
								}

								var ofy, ofx;
								ofx = ofy = 0;

								if (moveneedoffset && !byiframe) {
									var wp = self.win.position();
									ofx = -wp.left;
									ofy = -wp.top;
								}

								var fy = e.clientY + ofy;
								var my = (fy - self.rail.drag.y);
								var fx = e.clientX + ofx;
								var mx = (fx - self.rail.drag.x);

								var ny = self.rail.drag.st - my;

								if (self.ishwscroll && self.opt.bouncescroll) {
									if (ny < 0) {
										ny = Math.round(ny / 2);
										//                    fy = 0;
									} else if (ny > self.page.maxh) {
										ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2);
										//                    fy = 0;
									}
								} else {
									if (ny < 0) {
										ny = 0;
										fy = 0;
									}
									if (ny > self.page.maxh) {
										ny = self.page.maxh;
										fy = 0;
									}
								}

								var nx;
								if (self.railh && self.railh.scrollable) {
									nx = (self.isrtlmode) ? mx - self.rail.drag.sl : self.rail.drag.sl - mx;

									if (self.ishwscroll && self.opt.bouncescroll) {
										if (nx < 0) {
											nx = Math.round(nx / 2);
											//                      fx = 0;
										} else if (nx > self.page.maxw) {
											nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2);
											//                      fx = 0;
										}
									} else {
										if (nx < 0) {
											nx = 0;
											fx = 0;
										}
										if (nx > self.page.maxw) {
											nx = self.page.maxw;
											fx = 0;
										}
									}

								}

								var grabbed = false;
								if (self.rail.drag.dl) {
									grabbed = true;
									if (self.rail.drag.dl == "v") nx = self.rail.drag.sl;
									else if (self.rail.drag.dl == "h") ny = self.rail.drag.st;
								} else {
									var ay = Math.abs(my);
									var ax = Math.abs(mx);
									var dz = self.opt.directionlockdeadzone;
									if (self.rail.drag.ck == "v") {
										if (ay > dz && (ax <= (ay * 0.3))) {
											self.rail.drag = false;
											return true;
										} else if (ax > dz) {
											self.rail.drag.dl = "f";
											$("body").scrollTop($("body").scrollTop()); // stop iOS native scrolling (when active javascript has blocked)
										}
									} else if (self.rail.drag.ck == "h") {
										if (ax > dz && (ay <= (ax * 0.3))) {
											self.rail.drag = false;
											return true;
										} else if (ay > dz) {
											self.rail.drag.dl = "f";
											$("body").scrollLeft($("body").scrollLeft()); // stop iOS native scrolling (when active javascript has blocked)
										}
									}
								}

								self.synched("touchmove", function () {
									if (self.rail.drag && (self.rail.drag.pt == 2)) {
										if (self.prepareTransition) self.prepareTransition(0);
										if (self.rail.scrollable) self.setScrollTop(ny);
										self.scrollmom.update(fx, fy);
										if (self.railh && self.railh.scrollable) {
											self.setScrollLeft(nx);
											self.showCursor(ny, nx);
										} else {
											self.showCursor(ny);
										}
										if (cap.isie10) document.selection.clear();
									}
								});

								if (cap.ischrome && self.istouchcapable) grabbed = false; //chrome touch emulation doesn't like!
								if (grabbed) return self.cancelEvent(e);
							}
							else if (self.rail.drag.pt == 1) { // drag on cursor
								return self.onmousemove(e);
							}

						};

					}

					self.onmousedown = function (e, hronly) {
						if (self.rail.drag && self.rail.drag.pt != 1) return;
						if (self.railslocked) return self.cancelEvent(e);
						self.cancelScroll();
						self.rail.drag = {
							x:  e.clientX,
							y:  e.clientY,
							sx: self.scroll.x,
							sy: self.scroll.y,
							pt: 1,
							hr: (!!hronly)
						};
						var tg = self.getTarget(e);
						if (!self.ispage && cap.hasmousecapture) tg.setCapture();
						if (self.isiframe && !cap.hasmousecapture) {
							self.saved.csspointerevents = self.doc.css("pointer-events");
							self.css(self.doc, {
								"pointer-events": "none"
							});
						}
						self.hasmoving = false;
						return self.cancelEvent(e);
					};

					self.onmouseup = function (e) {
						if (self.rail.drag) {
							if (self.rail.drag.pt != 1) return true;
							if (cap.hasmousecapture) document.releaseCapture();
							if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
							self.rail.drag = false;
							//if (!self.rail.active) self.hideCursor();
							if (self.hasmoving) self.triggerScrollEnd(); // TODO - check &&!self.scrollrunning
							return self.cancelEvent(e);
						}
					};

					self.onmousemove = function (e) {
						if (self.rail.drag) {
							if (self.rail.drag.pt != 1) return;

							if (cap.ischrome && e.which == 0) return self.onmouseup(e);

							self.cursorfreezed = true;
							self.hasmoving = true;

							if (self.rail.drag.hr) {
								self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
								if (self.scroll.x < 0) self.scroll.x = 0;
								var mw = self.scrollvaluemaxw;
								if (self.scroll.x > mw) self.scroll.x = mw;
							} else {
								self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
								if (self.scroll.y < 0) self.scroll.y = 0;
								var my = self.scrollvaluemax;
								if (self.scroll.y > my) self.scroll.y = my;
							}

							self.synched('mousemove', function () {
								if (self.rail.drag && (self.rail.drag.pt == 1)) {
									self.showCursor();
									if (self.rail.drag.hr) {
										if (self.hasreversehr) {
											self.doScrollLeft(self.scrollvaluemaxw - Math.round(self.scroll.x * self.scrollratio.x), self.opt.cursordragspeed);
										} else {
											self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), self.opt.cursordragspeed);
										}
									}
									else self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), self.opt.cursordragspeed);
								}
							});

							return self.cancelEvent(e);
						}
						/*              
						 else {
						 self.checkarea = true;
						 }
						 */
					};

					if (cap.cantouch || self.opt.touchbehavior) {

						self.onpreventclick = function (e) {
							if (self.preventclick) {
								self.preventclick.tg.onclick = self.preventclick.click;
								self.preventclick = false;
								return self.cancelEvent(e);
							}
						}

						self.bind(self.win, "mousedown", self.ontouchstart); // control content dragging

						self.onclick = (cap.isios) ? false : function (e) {
							if (self.lastmouseup) {
								self.lastmouseup = false;
								return self.cancelEvent(e);
							} else {
								return true;
							}
						};

						if (self.opt.grabcursorenabled && cap.cursorgrabvalue) {
							self.css((self.ispage) ? self.doc : self.win, {
								'cursor': cap.cursorgrabvalue
							});
							self.css(self.rail, {
								'cursor': cap.cursorgrabvalue
							});
						}

					} else {

						var checkSelectionScroll = function (e) {
							if (!self.selectiondrag) return;

							if (e) {
								var ww = self.win.outerHeight();
								var df = (e.pageY - self.selectiondrag.top);
								if (df > 0 && df < ww) df = 0;
								if (df >= ww) df -= ww;
								self.selectiondrag.df = df;
							}
							if (self.selectiondrag.df == 0) return;

							var rt = -Math.floor(self.selectiondrag.df / 6) * 2;
							self.doScrollBy(rt);

							self.debounced("doselectionscroll", function () {
								checkSelectionScroll()
							}, 50);
						};

						if ("getSelection" in document) { // A grade - Major browsers
							self.hasTextSelected = function () {
								return (document.getSelection().rangeCount > 0);
							};
						} else if ("selection" in document) { //IE9-
							self.hasTextSelected = function () {
								return (document.selection.type != "None");
							};
						} else {
							self.hasTextSelected = function () { // no support
								return false;
							};
						}

						self.onselectionstart = function (e) {
							/*  More testing - severe chrome issues            
							 if (!self.haswrapper&&(e.which&&e.which==2)) {  // fool browser to manage middle button scrolling
							 self.win.css({'overflow':'auto'});
							 setTimeout(function(){
							 self.win.css({'overflow':''});
							 },10);                
							 return true;
							 }            
							 */
							if (self.ispage) return;
							self.selectiondrag = self.win.offset();
						};

						self.onselectionend = function (e) {
							self.selectiondrag = false;
						};
						self.onselectiondrag = function (e) {
							if (!self.selectiondrag) return;
							if (self.hasTextSelected()) self.debounced("selectionscroll", function () {
								checkSelectionScroll(e)
							}, 250);
						};


					}

					if (cap.hasw3ctouch) { //IE11+
						self.css(self.rail, {
							'touch-action': 'none'
						});
						self.css(self.cursor, {
							'touch-action': 'none'
						});
						self.bind(self.win, "pointerdown", self.ontouchstart);
						self.bind(document, "pointerup", self.ontouchend);
						self.bind(document, "pointermove", self.ontouchmove);
					} else if (cap.hasmstouch) { //IE10
						self.css(self.rail, {
							'-ms-touch-action': 'none'
						});
						self.css(self.cursor, {
							'-ms-touch-action': 'none'
						});
						self.bind(self.win, "MSPointerDown", self.ontouchstart);
						self.bind(document, "MSPointerUp", self.ontouchend);
						self.bind(document, "MSPointerMove", self.ontouchmove);
						self.bind(self.cursor, "MSGestureHold", function (e) {
							e.preventDefault()
						});
						self.bind(self.cursor, "contextmenu", function (e) {
							e.preventDefault()
						});
					} else if (this.istouchcapable) { //desktop with screen touch enabled
						self.bind(self.win, "touchstart", self.ontouchstart);
						self.bind(document, "touchend", self.ontouchend);
						self.bind(document, "touchcancel", self.ontouchend);
						self.bind(document, "touchmove", self.ontouchmove);
					}


					if (self.opt.cursordragontouch || (!cap.cantouch && !self.opt.touchbehavior)) {

						self.rail.css({
							"cursor": "default"
						});
						self.railh && self.railh.css({
							"cursor": "default"
						});

						self.jqbind(self.rail, "mouseenter", function () {
							if (!self.ispage && !self.win.is(":visible")) return false;
							if (self.canshowonmouseevent) self.showCursor();
							self.rail.active = true;
						});
						self.jqbind(self.rail, "mouseleave", function () {
							self.rail.active = false;
							if (!self.rail.drag) self.hideCursor();
						});

						if (self.opt.sensitiverail) {
							self.bind(self.rail, "click", function (e) {
								self.doRailClick(e, false, false)
							});
							self.bind(self.rail, "dblclick", function (e) {
								self.doRailClick(e, true, false)
							});
							self.bind(self.cursor, "click", function (e) {
								self.cancelEvent(e)
							});
							self.bind(self.cursor, "dblclick", function (e) {
								self.cancelEvent(e)
							});
						}

						if (self.railh) {
							self.jqbind(self.railh, "mouseenter", function () {
								if (!self.ispage && !self.win.is(":visible")) return false;
								if (self.canshowonmouseevent) self.showCursor();
								self.rail.active = true;
							});
							self.jqbind(self.railh, "mouseleave", function () {
								self.rail.active = false;
								if (!self.rail.drag) self.hideCursor();
							});

							if (self.opt.sensitiverail) {
								self.bind(self.railh, "click", function (e) {
									self.doRailClick(e, false, true)
								});
								self.bind(self.railh, "dblclick", function (e) {
									self.doRailClick(e, true, true)
								});
								self.bind(self.cursorh, "click", function (e) {
									self.cancelEvent(e)
								});
								self.bind(self.cursorh, "dblclick", function (e) {
									self.cancelEvent(e)
								});
							}

						}

					}

					if (!cap.cantouch && !self.opt.touchbehavior) {

						self.bind((cap.hasmousecapture) ? self.win : document, "mouseup", self.onmouseup);
						self.bind(document, "mousemove", self.onmousemove);
						if (self.onclick) self.bind(document, "click", self.onclick);

						self.bind(self.cursor, "mousedown", self.onmousedown);
						self.bind(self.cursor, "mouseup", self.onmouseup);

						if (self.railh) {
							self.bind(self.cursorh, "mousedown", function (e) {
								self.onmousedown(e, true)
							});
							self.bind(self.cursorh, "mouseup", self.onmouseup);
						}

						if (!self.ispage && self.opt.enablescrollonselection) {
							self.bind(self.win[ 0 ], "mousedown", self.onselectionstart);
							self.bind(document, "mouseup", self.onselectionend);
							self.bind(self.cursor, "mouseup", self.onselectionend);
							if (self.cursorh) self.bind(self.cursorh, "mouseup", self.onselectionend);
							self.bind(document, "mousemove", self.onselectiondrag);
						}

						if (self.zoom) {
							self.jqbind(self.zoom, "mouseenter", function () {
								if (self.canshowonmouseevent) self.showCursor();
								self.rail.active = true;
							});
							self.jqbind(self.zoom, "mouseleave", function () {
								self.rail.active = false;
								if (!self.rail.drag) self.hideCursor();
							});
						}

					} else {

						self.bind((cap.hasmousecapture) ? self.win : document, "mouseup", self.ontouchend);
						self.bind(document, "mousemove", self.ontouchmove);
						if (self.onclick) self.bind(document, "click", self.onclick);

						if (self.opt.cursordragontouch) {
							self.bind(self.cursor, "mousedown", self.onmousedown);
							self.bind(self.cursor, "mouseup", self.onmouseup);
							//self.bind(self.cursor, "mousemove", self.onmousemove);
							self.cursorh && self.bind(self.cursorh, "mousedown", function (e) {
								self.onmousedown(e, true)
							});
							//self.cursorh && self.bind(self.cursorh, "mousemove", self.onmousemove);
							self.cursorh && self.bind(self.cursorh, "mouseup", self.onmouseup);
						}

					}

					if (self.opt.enablemousewheel) {
						if (!self.isiframe) self.bind((cap.isie && self.ispage) ? document : self.win /*self.docscroll*/, "mousewheel", self.onmousewheel);
						self.bind(self.rail, "mousewheel", self.onmousewheel);
						if (self.railh) self.bind(self.railh, "mousewheel", self.onmousewheelhr);
					}

					if (!self.ispage && !cap.cantouch && !(/HTML|^BODY/.test(self.win[ 0 ].nodeName))) {
						if (!self.win.attr("tabindex")) self.win.attr({
							"tabindex": tabindexcounter++
						});

						self.jqbind(self.win, "focus", function (e) {
							domfocus = (self.getTarget(e)).id || true;
							self.hasfocus = true;
							if (self.canshowonmouseevent) self.noticeCursor();
						});
						self.jqbind(self.win, "blur", function (e) {
							domfocus = false;
							self.hasfocus = false;
						});

						self.jqbind(self.win, "mouseenter", function (e) {
							mousefocus = (self.getTarget(e)).id || true;
							self.hasmousefocus = true;
							if (self.canshowonmouseevent) self.noticeCursor();
						});
						self.jqbind(self.win, "mouseleave", function () {
							mousefocus = false;
							self.hasmousefocus = false;
							if (!self.rail.drag) self.hideCursor();
						});

					}

				} // !ie9mobile

				//Thanks to http://www.quirksmode.org !!
				self.onkeypress = function (e) {
					if (self.railslocked && self.page.maxh == 0) return true;

					e = (e) ? e : window.e;
					var tg = self.getTarget(e);
					if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
						var tp = tg.getAttribute('type') || tg.type || false;
						if ((!tp) || !(/submit|button|cancel/i.tp)) return true;
					}

					if ($(tg).attr('contenteditable')) return true;

					if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
						var key = e.keyCode;

						if (self.railslocked && key != 27) return self.cancelEvent(e);

						var ctrl = e.ctrlKey || false;
						var shift = e.shiftKey || false;

						var ret = false;
						switch (key) {
							case 38:
							case 63233: //safari
								self.doScrollBy(24 * 3);
								ret = true;
								break;
							case 40:
							case 63235: //safari
								self.doScrollBy(-24 * 3);
								ret = true;
								break;
							case 37:
							case 63232: //safari
								if (self.railh) {
									(ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24 * 3);
									ret = true;
								}
								break;
							case 39:
							case 63234: //safari
								if (self.railh) {
									(ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24 * 3);
									ret = true;
								}
								break;
							case 33:
							case 63276: // safari
								self.doScrollBy(self.view.h);
								ret = true;
								break;
							case 34:
							case 63277: // safari
								self.doScrollBy(-self.view.h);
								ret = true;
								break;
							case 36:
							case 63273: // safari                
								(self.railh && ctrl) ? self.doScrollPos(0, 0) : self.doScrollTo(0);
								ret = true;
								break;
							case 35:
							case 63275: // safari
								(self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh) : self.doScrollTo(self.page.maxh);
								ret = true;
								break;
							case 32:
								if (self.opt.spacebarenabled) {
									(shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
									ret = true;
								}
								break;
							case 27: // ESC
								if (self.zoomactive) {
									self.doZoom();
									ret = true;
								}
								break;
						}
						if (ret) return self.cancelEvent(e);
					}
				};

				if (self.opt.enablekeyboard) self.bind(document, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress);

				self.bind(document, "keydown", function (e) {
					var ctrl = e.ctrlKey || false;
					if (ctrl) self.wheelprevented = true;
				});
				self.bind(document, "keyup", function (e) {
					var ctrl = e.ctrlKey || false;
					if (!ctrl) self.wheelprevented = false;
				});
				self.bind(window, "blur", function (e) {
					self.wheelprevented = false;
				});

				self.bind(window, 'resize', self.lazyResize);
				self.bind(window, 'orientationchange', self.lazyResize);

				self.bind(window, "load", self.lazyResize);

				if (cap.ischrome && !self.ispage && !self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
					var tmp = self.win.attr("style");
					var ww = parseFloat(self.win.css("width")) + 1;
					self.win.css('width', ww);
					self.synched("chromefix", function () {
						self.win.attr("style", tmp)
					});
				}


				// Trying a cross-browser implementation - good luck!

				self.onAttributeChange = function (e) {
					self.lazyResize(self.isieold ? 250 : 30);
				};

				if (ClsMutationObserver !== false) {
					self.observerbody = new ClsMutationObserver(function (mutations) {
						mutations.forEach(function (mut) {
							if (mut.type == "attributes") {
								return ($("body").hasClass("modal-open")) ? self.hide() : self.show();  // Support for Bootstrap modal
							}
						});
						if (document.body.scrollHeight != self.page.maxh) return self.lazyResize(30);
					});
					self.observerbody.observe(document.body, {
						childList:       true,
						subtree:         true,
						characterData:   false,
						attributes:      true,
						attributeFilter: [ 'class' ]
					});
				}

				if (!self.ispage && !self.haswrapper) {
					// redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
					if (ClsMutationObserver !== false) {
						self.observer = new ClsMutationObserver(function (mutations) {
							mutations.forEach(self.onAttributeChange);
						});
						self.observer.observe(self.win[ 0 ], {
							childList:     true,
							characterData: false,
							attributes:    true,
							subtree:       false
						});
						self.observerremover = new ClsMutationObserver(function (mutations) {
							mutations.forEach(function (mo) {
								if (mo.removedNodes.length > 0) {
									for (var dd in mo.removedNodes) {
										if (!!self && (mo.removedNodes[ dd ] == self.win[ 0 ])) return self.remove();
									}
								}
							});
						});
						self.observerremover.observe(self.win[ 0 ].parentNode, {
							childList:     true,
							characterData: false,
							attributes:    false,
							subtree:       false
						});
					} else {
						self.bind(self.win, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
						if (cap.isie9) self.win[ 0 ].attachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug
						self.bind(self.win, "DOMNodeRemoved", function (e) {
							if (e.target == self.win[ 0 ]) self.remove();
						});
					}
				}

				//

				if (!self.ispage && self.opt.boxzoom) self.bind(window, "resize", self.resizeZoom);
				if (self.istextarea) self.bind(self.win, "mouseup", self.lazyResize);

				//        self.checkrtlmode = true;
				self.lazyResize(30);

			}

			if (this.doc[ 0 ].nodeName == 'IFRAME') {
				var oniframeload = function () {
					self.iframexd = false;
					var doc;
					try {
						doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document;
						var a = doc.domain;
					} catch (e) {
						self.iframexd = true;
						doc = false
					}

					if (self.iframexd) {
						if ("console" in window) console.log('NiceScroll error: policy restriced iframe');
						return true; //cross-domain - I can't manage this        
					}

					self.forcescreen = true;

					if (self.isiframe) {
						self.iframe = {
							"doc":  $(doc),
							"html": self.doc.contents().find('html')[ 0 ],
							"body": self.doc.contents().find('body')[ 0 ]
						};
						self.getContentSize = function () {
							return {
								w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
								h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
							};
						};
						self.docscroll = $(self.iframe.body); //$(this.contentWindow);
					}

					if (!cap.isios && self.opt.iframeautoresize && !self.isiframe) {
						self.win.scrollTop(0); // reset position
						self.doc.height(""); //reset height to fix browser bug
						var hh = Math.max(doc.getElementsByTagName('html')[ 0 ].scrollHeight, doc.body.scrollHeight);
						self.doc.height(hh);
					}
					self.lazyResize(30);

					if (cap.isie7) self.css($(self.iframe.html), {
						'overflow-y': 'hidden'
					});
					self.css($(self.iframe.body), {
						'overflow-y': 'hidden'
					});

					if (cap.isios && self.haswrapper) {
						self.css($(doc.body), {
							'-webkit-transform': 'translate3d(0,0,0)'
						}); // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
					}

					if ('contentWindow' in this) {
						self.bind(this.contentWindow, "scroll", self.onscroll); //IE8 & minor
					} else {
						self.bind(doc, "scroll", self.onscroll);
					}

					if (self.opt.enablemousewheel) {
						self.bind(doc, "mousewheel", self.onmousewheel);
					}

					if (self.opt.enablekeyboard) self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress);

					if (cap.cantouch || self.opt.touchbehavior) {
						self.bind(doc, "mousedown", self.ontouchstart);
						self.bind(doc, "mousemove", function (e) {
							return self.ontouchmove(e, true)
						});
						if (self.opt.grabcursorenabled && cap.cursorgrabvalue) self.css($(doc.body), {
							'cursor': cap.cursorgrabvalue
						});
					}

					self.bind(doc, "mouseup", self.ontouchend);

					if (self.zoom) {
						if (self.opt.dblclickzoom) self.bind(doc, 'dblclick', self.doZoom);
						if (self.ongesturezoom) self.bind(doc, "gestureend", self.ongesturezoom);
					}
				};

				if (this.doc[ 0 ].readyState && this.doc[ 0 ].readyState == "complete") {
					setTimeout(function () {
						oniframeload.call(self.doc[ 0 ], false)
					}, 500);
				}
				self.bind(this.doc, "load", oniframeload);

			}

		};

		this.showCursor = function (py, px) {
			if (self.cursortimeout) {
				clearTimeout(self.cursortimeout);
				self.cursortimeout = 0;
			}
			if (!self.rail) return;
			if (self.autohidedom) {
				self.autohidedom.stop().css({
					opacity: self.opt.cursoropacitymax
				});
				self.cursoractive = true;
			}

			if (!self.rail.drag || self.rail.drag.pt != 1) {
				if ((typeof py != "undefined") && (py !== false)) {
					self.scroll.y = Math.round(py * 1 / self.scrollratio.y);
				}
				if (typeof px != "undefined") {
					self.scroll.x = Math.round(px * 1 / self.scrollratio.x);
				}
			}

			self.cursor.css({
				height: self.cursorheight,
				top:    self.scroll.y
			});
			if (self.cursorh) {
				var lx = (self.hasreversehr) ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
				(!self.rail.align && self.rail.visibility) ? self.cursorh.css({
					width: self.cursorwidth,
					left:  lx + self.rail.width
				}) : self.cursorh.css({
					width: self.cursorwidth,
					left:  lx
				});
				self.cursoractive = true;
			}

			if (self.zoom) self.zoom.stop().css({
				opacity: self.opt.cursoropacitymax
			});
		};

		this.hideCursor = function (tm) {
			if (self.cursortimeout) return;
			if (!self.rail) return;
			if (!self.autohidedom) return;
			if (self.hasmousefocus && self.opt.autohidemode == "leave") return;
			self.cursortimeout = setTimeout(function () {
				if (!self.rail.active || !self.showonmouseevent) {
					self.autohidedom.stop().animate({
						opacity: self.opt.cursoropacitymin
					});
					if (self.zoom) self.zoom.stop().animate({
						opacity: self.opt.cursoropacitymin
					});
					self.cursoractive = false;
				}
				self.cursortimeout = 0;
			}, tm || self.opt.hidecursordelay);
		};

		this.noticeCursor = function (tm, py, px) {
			self.showCursor(py, px);
			if (!self.rail.active) self.hideCursor(tm);
		};

		this.getContentSize =
			(self.ispage) ?
				function () {
					return {
						w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
						h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
					}
				} : (self.haswrapper) ?
				function () {
					return {
						w: self.doc.outerWidth() + parseInt(self.win.css('paddingLeft')) + parseInt(self.win.css('paddingRight')),
						h: self.doc.outerHeight() + parseInt(self.win.css('paddingTop')) + parseInt(self.win.css('paddingBottom'))
					}
				} : function () {
				return {
					w: self.docscroll[ 0 ].scrollWidth,
					h: self.docscroll[ 0 ].scrollHeight
				}
			};

		this.onResize = function (e, page) {

			if (!self || !self.win) return false;

			if (!self.haswrapper && !self.ispage) {
				if (self.win.css('display') == 'none') {
					if (self.visibility) self.hideRail().hideRailHr();
					return false;
				} else {
					if (!self.hidden && !self.visibility) self.showRail().showRailHr();
				}
			}

			var premaxh = self.page.maxh;
			var premaxw = self.page.maxw;

			var preview = {
				h: self.view.h,
				w: self.view.w
			};

			self.view = {
				w: (self.ispage) ? self.win.width() : parseInt(self.win[ 0 ].clientWidth),
				h: (self.ispage) ? self.win.height() : parseInt(self.win[ 0 ].clientHeight)
			};

			self.page = (page) ? page : self.getContentSize();

			self.page.maxh = Math.max(0, self.page.h - self.view.h);
			self.page.maxw = Math.max(0, self.page.w - self.view.w);

			if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == preview.w) && (self.view.h == preview.h)) {
				// test position        
				if (!self.ispage) {
					var pos = self.win.offset();
					if (self.lastposition) {
						var lst = self.lastposition;
						if ((lst.top == pos.top) && (lst.left == pos.left)) return self; //nothing to do            
					}
					self.lastposition = pos;
				} else {
					return self; //nothing to do
				}
			}

			if (self.page.maxh == 0) {
				self.hideRail();
				self.scrollvaluemax = 0;
				self.scroll.y = 0;
				self.scrollratio.y = 0;
				self.cursorheight = 0;
				self.setScrollTop(0);
				self.rail.scrollable = false;
			} else {
				self.page.maxh -= (self.opt.railpadding.top + self.opt.railpadding.bottom);  //**
				self.rail.scrollable = true;
			}

			if (self.page.maxw == 0) {
				self.hideRailHr();
				self.scrollvaluemaxw = 0;
				self.scroll.x = 0;
				self.scrollratio.x = 0;
				self.cursorwidth = 0;
				self.setScrollLeft(0);
				self.railh.scrollable = false;
			} else {
				self.page.maxw -= (self.opt.railpadding.left + self.opt.railpadding.right);  //**
				self.railh.scrollable = true;
			}

			self.railslocked = (self.locked) || ((self.page.maxh == 0) && (self.page.maxw == 0));
			if (self.railslocked) {
				if (!self.ispage) self.updateScrollBar(self.view);
				return false;
			}

			if (!self.hidden && !self.visibility) {
				self.showRail().showRailHr();
			}
			else if (!self.hidden && !self.railh.visibility) self.showRailHr();

			if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') self.view.h -= 20;

			self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
			self.cursorheight = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight, self.cursorheight);

			self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
			self.cursorwidth = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight, self.cursorwidth);

			self.scrollvaluemax = self.view.h - self.cursorheight - self.cursor.hborder - (self.opt.railpadding.top + self.opt.railpadding.bottom);  //**

			if (self.railh) {
				self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
				self.scrollvaluemaxw = self.railh.width - self.cursorwidth - self.cursorh.wborder - (self.opt.railpadding.left + self.opt.railpadding.right);  //**
			}

			/*
			 if (self.checkrtlmode&&self.railh) {
			 self.checkrtlmode = false;
			 if (self.opt.rtlmode&&self.scroll.x==0) self.setScrollLeft(self.page.maxw);
			 }
			 */

			if (!self.ispage) self.updateScrollBar(self.view);

			self.scrollratio = {
				x: (self.page.maxw / self.scrollvaluemaxw),
				y: (self.page.maxh / self.scrollvaluemax)
			};

			var sy = self.getScrollTop();
			if (sy > self.page.maxh) {
				self.doScrollTop(self.page.maxh);
			} else {
				self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
				self.scroll.x = Math.round(self.getScrollLeft() * (1 / self.scrollratio.x));
				if (self.cursoractive) self.noticeCursor();
			}

			if (self.scroll.y && (self.getScrollTop() == 0)) self.doScrollTo(Math.floor(self.scroll.y * self.scrollratio.y));

			return self;
		};

		this.resize = self.onResize;

		this.lazyResize = function (tm) { // event debounce
			tm = (isNaN(tm)) ? 30 : tm;
			self.debounced('resize', self.resize, tm);
			return self;
		};

		// modified by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
		function _modernWheelEvent (dom, name, fn, bubble) {
			self._bind(dom, name, function (e) {
				var e = (e) ? e : window.event;
				var event = {
					original:                 e,
					target:                   e.target || e.srcElement,
					type:                     "wheel",
					deltaMode:                e.type == "MozMousePixelScroll" ? 0 : 1,
					deltaX:                   0,
					deltaZ:                   0,
					preventDefault:           function () {
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
						return false;
					},
					stopImmediatePropagation: function () {
						(e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
					}
				};

				if (name == "mousewheel") {
					event.deltaY = -1 / 40 * e.wheelDelta;
					e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
				} else {
					event.deltaY = e.detail;
				}

				return fn.call(dom, event);
			}, bubble);
		};


		this.jqbind = function (dom, name, fn) { // use jquery bind for non-native events (mouseenter/mouseleave)
			self.events.push({
				e: dom,
				n: name,
				f: fn,
				q: true
			});
			$(dom).bind(name, fn);
		};

		this.bind = function (dom, name, fn, bubble) { // touch-oriented & fixing jquery bind
			var el = ("jquery" in dom) ? dom[ 0 ] : dom;

			if (name == 'mousewheel') {
				if (window.addEventListener || 'onwheel' in document) { // modern brosers & IE9 detection fix
					self._bind(el, "wheel", fn, bubble || false);
				} else {
					var wname = (typeof document.onmousewheel != "undefined") ? "mousewheel" : "DOMMouseScroll"; // older IE/Firefox
					_modernWheelEvent(el, wname, fn, bubble || false);
					if (wname == "DOMMouseScroll") _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || false); // Firefox legacy
				}
			} else if (el.addEventListener) {
				if (cap.cantouch && /mouseup|mousedown|mousemove/.test(name)) { // touch device support
					var tt = (name == 'mousedown') ? 'touchstart' : (name == 'mouseup') ? 'touchend' : 'touchmove';
					self._bind(el, tt, function (e) {
						if (e.touches) {
							if (e.touches.length < 2) {
								var ev = (e.touches.length) ? e.touches[ 0 ] : e;
								ev.original = e;
								fn.call(this, ev);
							}
						} else if (e.changedTouches) {
							var ev = e.changedTouches[ 0 ];
							ev.original = e;
							fn.call(this, ev);
						} //blackberry
					}, bubble || false);
				}
				self._bind(el, name, fn, bubble || false);
				if (cap.cantouch && name == "mouseup") self._bind(el, "touchcancel", fn, bubble || false);
			} else {
				self._bind(el, name, function (e) {
					e = e || window.event || false;
					if (e) {
						if (e.srcElement) e.target = e.srcElement;
					}
					if (!("pageY" in e)) {
						e.pageX = e.clientX + document.documentElement.scrollLeft;
						e.pageY = e.clientY + document.documentElement.scrollTop;
					}
					return ((fn.call(el, e) === false) || bubble === false) ? self.cancelEvent(e) : true;
				});
			}
		};

		if (cap.haseventlistener) {  // W3C standard model
			this._bind = function (el, name, fn, bubble) { // primitive bind
				self.events.push({
					e: el,
					n: name,
					f: fn,
					b: bubble,
					q: false
				});
				el.addEventListener(name, fn, bubble || false);
			};
			this.cancelEvent = function (e) {
				if (!e) return false;
				var e = (e.original) ? e.original : e;
				e.preventDefault();
				e.stopPropagation();
				if (e.preventManipulation) e.preventManipulation(); //IE10
				return false;
			};
			this.stopPropagation = function (e) {
				if (!e) return false;
				var e = (e.original) ? e.original : e;
				e.stopPropagation();
				return false;
			};
			this._unbind = function (el, name, fn, bub) { // primitive unbind
				el.removeEventListener(name, fn, bub);
			};
		} else {  // old IE model
			this._bind = function (el, name, fn, bubble) { // primitive bind
				self.events.push({
					e: el,
					n: name,
					f: fn,
					b: bubble,
					q: false
				});
				if (el.attachEvent) {
					el.attachEvent("on" + name, fn);
				} else {
					el[ "on" + name ] = fn;
				}
			};
			// Thanks to http://www.switchonthecode.com !!
			this.cancelEvent = function (e) {
				var e = window.event || false;
				if (!e) return false;
				e.cancelBubble = true;
				e.cancel = true;
				e.returnValue = false;
				return false;
			};
			this.stopPropagation = function (e) {
				var e = window.event || false;
				if (!e) return false;
				e.cancelBubble = true;
				return false;
			};
			this._unbind = function (el, name, fn, bub) { // primitive unbind IE old
				if (el.detachEvent) {
					el.detachEvent('on' + name, fn);
				} else {
					el[ 'on' + name ] = false;
				}
			};
		}

		this.unbindAll = function () {
			for (var a = 0; a < self.events.length; a++) {
				var r = self.events[ a ];
				(r.q) ? r.e.unbind(r.n, r.f) : self._unbind(r.e, r.n, r.f, r.b);
			}
		};

		this.showRail = function () {
			if ((self.page.maxh != 0) && (self.ispage || self.win.css('display') != 'none')) {
				self.visibility = true;
				self.rail.visibility = true;
				self.rail.css('display', 'block');
			}
			return self;
		};

		this.showRailHr = function () {
			if (!self.railh) return self;
			if ((self.page.maxw != 0) && (self.ispage || self.win.css('display') != 'none')) {
				self.railh.visibility = true;
				self.railh.css('display', 'block');
			}
			return self;
		};

		this.hideRail = function () {
			self.visibility = false;
			self.rail.visibility = false;
			self.rail.css('display', 'none');
			return self;
		};

		this.hideRailHr = function () {
			if (!self.railh) return self;
			self.railh.visibility = false;
			self.railh.css('display', 'none');
			return self;
		};

		this.show = function () {
			self.hidden = false;
			self.railslocked = false;
			return self.showRail().showRailHr();
		};

		this.hide = function () {
			self.hidden = true;
			self.railslocked = true;
			return self.hideRail().hideRailHr();
		};

		this.toggle = function () {
			return (self.hidden) ? self.show() : self.hide();
		};

		this.remove = function () {
			self.stop();
			if (self.cursortimeout) clearTimeout(self.cursortimeout);
			self.doZoomOut();
			self.unbindAll();

			if (cap.isie9) self.win[ 0 ].detachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug

			if (self.observer !== false) self.observer.disconnect();
			if (self.observerremover !== false) self.observerremover.disconnect();
			if (self.observerbody !== false) self.observerbody.disconnect();

			self.events = null;

			if (self.cursor) {
				self.cursor.remove();
			}
			if (self.cursorh) {
				self.cursorh.remove();
			}
			if (self.rail) {
				self.rail.remove();
			}
			if (self.railh) {
				self.railh.remove();
			}
			if (self.zoom) {
				self.zoom.remove();
			}
			for (var a = 0; a < self.saved.css.length; a++) {
				var d = self.saved.css[ a ];
				d[ 0 ].css(d[ 1 ], (typeof d[ 2 ] == "undefined") ? '' : d[ 2 ]);
			}
			self.saved = false;
			self.me.data('__nicescroll', ''); //erase all traces

			// memory leak fixed by GianlucaGuarini - thanks a lot!
			// remove the current nicescroll from the $.nicescroll array & normalize array
			var lst = $.nicescroll;
			lst.each(function (i) {
				if (!this) return;
				if (this.id === self.id) {
					delete lst[ i ];
					for (var b = ++i; b < lst.length; b++, i++) lst[ i ] = lst[ b ];
					lst.length--;
					if (lst.length) delete lst[ lst.length ];
				}
			});

			for (var i in self) {
				self[ i ] = null;
				delete self[ i ];
			}

			self = null;

		};

		this.scrollstart = function (fn) {
			this.onscrollstart = fn;
			return self;
		};
		this.scrollend = function (fn) {
			this.onscrollend = fn;
			return self;
		};
		this.scrollcancel = function (fn) {
			this.onscrollcancel = fn;
			return self;
		};

		this.zoomin = function (fn) {
			this.onzoomin = fn;
			return self;
		};
		this.zoomout = function (fn) {
			this.onzoomout = fn;
			return self;
		};

		this.isScrollable = function (e) {
			var dom = (e.target) ? e.target : e;
			if (dom.nodeName == 'OPTION') return true;
			while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
				var dd = $(dom);
				var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
				if (/scroll|auto/.test(ov)) return (dom.clientHeight != dom.scrollHeight);
				dom = (dom.parentNode) ? dom.parentNode : false;
			}
			return false;
		};

		this.getViewport = function (me) {
			var dom = (me && me.parentNode) ? me.parentNode : false;
			while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
				var dd = $(dom);
				if (/fixed|absolute/.test(dd.css("position"))) return dd;
				var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
				if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) return dd;
				if (dd.getNiceScroll().length > 0) return dd;
				dom = (dom.parentNode) ? dom.parentNode : false;
			}
			return false; //(dom) ? $(dom) : false;
		};

		this.triggerScrollEnd = function () {
			if (!self.onscrollend) return;

			var px = self.getScrollLeft();
			var py = self.getScrollTop();

			var info = {
				"type":    "scrollend",
				"current": {
					"x": px,
					"y": py
				},
				"end":     {
					"x": px,
					"y": py
				}
			};
			self.onscrollend.call(self, info);
		}

		function execScrollWheel (e, hr, chkscroll) {
			var px, py;

			if (e.deltaMode == 0) { // PIXEL
				px = -Math.floor(e.deltaX * (self.opt.mousescrollstep / (18 * 3)));
				py = -Math.floor(e.deltaY * (self.opt.mousescrollstep / (18 * 3)));
			} else if (e.deltaMode == 1) { // LINE
				px = -Math.floor(e.deltaX * self.opt.mousescrollstep);
				py = -Math.floor(e.deltaY * self.opt.mousescrollstep);
			}

			if (hr && self.opt.oneaxismousemode && (px == 0) && py) { // classic vertical-only mousewheel + browser with x/y support 
				px = py;
				py = 0;

				if (chkscroll) {
					var hrend = (px < 0) ? (self.getScrollLeft() >= self.page.maxw) : (self.getScrollLeft() <= 0);
					if (hrend) {  // preserve vertical scrolling
						py = px;
						px = 0;
					}
				}

			}

			if (px) {
				if (self.scrollmom) {
					self.scrollmom.stop()
				}
				self.lastdeltax += px;
				self.debounced("mousewheelx", function () {
					var dt = self.lastdeltax;
					self.lastdeltax = 0;
					if (!self.rail.drag) {
						self.doScrollLeftBy(dt)
					}
				}, 15);
			}
			if (py) {
				if (self.opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) {
					if (py < 0) {
						if (self.getScrollTop() >= self.page.maxh) return true;
					} else {
						if (self.getScrollTop() <= 0) return true;
					}
				}
				if (self.scrollmom) {
					self.scrollmom.stop()
				}
				self.lastdeltay += py;
				self.debounced("mousewheely", function () {
					var dt = self.lastdeltay;
					self.lastdeltay = 0;
					if (!self.rail.drag) {
						self.doScrollBy(dt)
					}
				}, 15);
			}

			e.stopImmediatePropagation();
			return e.preventDefault();
		};

		this.onmousewheel = function (e) {
			if (self.wheelprevented) return;
			if (self.railslocked) {
				self.debounced("checkunlock", self.resize, 250);
				return true;
			}
			if (self.rail.drag) return self.cancelEvent(e);

			if (self.opt.oneaxismousemode == "auto" && e.deltaX != 0) self.opt.oneaxismousemode = false; // check two-axis mouse support (not very elegant)

			if (self.opt.oneaxismousemode && e.deltaX == 0) {
				if (!self.rail.scrollable) {
					if (self.railh && self.railh.scrollable) {
						return self.onmousewheelhr(e);
					} else {
						return true;
					}
				}
			}

			var nw = +(new Date());
			var chk = false;
			if (self.opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
				self.nativescrollingarea = self.isScrollable(e);
				chk = true;
			}
			self.checkarea = nw;
			if (self.nativescrollingarea) return true; // this isn't my business
			var ret = execScrollWheel(e, false, chk);
			if (ret) self.checkarea = 0;
			return ret;
		};

		this.onmousewheelhr = function (e) {
			if (self.wheelprevented) return;
			if (self.railslocked || !self.railh.scrollable) return true;
			if (self.rail.drag) return self.cancelEvent(e);

			var nw = +(new Date());
			var chk = false;
			if (self.opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
				self.nativescrollingarea = self.isScrollable(e);
				chk = true;
			}
			self.checkarea = nw;
			if (self.nativescrollingarea) return true; // this isn't my business
			if (self.railslocked) return self.cancelEvent(e);

			return execScrollWheel(e, true, chk);
		};

		this.stop = function () {
			self.cancelScroll();
			if (self.scrollmon) self.scrollmon.stop();
			self.cursorfreezed = false;
			self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
			self.noticeCursor();
			return self;
		};

		this.getTransitionSpeed = function (dif) {
			var sp = Math.round(self.opt.scrollspeed * 10);
			var ex = Math.min(sp, Math.round((dif / 20) * self.opt.scrollspeed));
			return (ex > 20) ? ex : 0;
		};

		if (!self.opt.smoothscroll) {
			this.doScrollLeft = function (x, spd) { //direct
				var y = self.getScrollTop();
				self.doScrollPos(x, y, spd);
			};
			this.doScrollTop = function (y, spd) { //direct
				var x = self.getScrollLeft();
				self.doScrollPos(x, y, spd);
			};
			this.doScrollPos = function (x, y, spd) { //direct
				var nx = (x > self.page.maxw) ? self.page.maxw : x;
				if (nx < 0) nx = 0;
				var ny = (y > self.page.maxh) ? self.page.maxh : y;
				if (ny < 0) ny = 0;
				self.synched('scroll', function () {
					self.setScrollTop(ny);
					self.setScrollLeft(nx);
				});
			};
			this.cancelScroll = function () {
			}; // direct
		} else if (self.ishwscroll && cap.hastransition && self.opt.usetransition && !!self.opt.smoothscroll) {
			this.prepareTransition = function (dif, istime) {
				var ex = (istime) ? ((dif > 20) ? dif : 0) : self.getTransitionSpeed(dif);
				var trans = (ex) ? cap.prefixstyle + 'transform ' + ex + 'ms ease-out' : '';
				if (!self.lasttransitionstyle || self.lasttransitionstyle != trans) {
					self.lasttransitionstyle = trans;
					self.doc.css(cap.transitionstyle, trans);
				}
				return ex;
			};

			this.doScrollLeft = function (x, spd) { //trans
				var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
				self.doScrollPos(x, y, spd);
			};

			this.doScrollTop = function (y, spd) { //trans
				var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
				self.doScrollPos(x, y, spd);
			};

			this.doScrollPos = function (x, y, spd) { //trans

				var py = self.getScrollTop();
				var px = self.getScrollLeft();

				if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection      

				if (self.opt.bouncescroll == false) {
					if (y < 0) y = 0;
					else if (y > self.page.maxh) y = self.page.maxh;
					if (x < 0) x = 0;
					else if (x > self.page.maxw) x = self.page.maxw;
				}

				if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) return false;

				self.newscrolly = y;
				self.newscrollx = x;

				self.newscrollspeed = spd || false;

				if (self.timer) return false;

				self.timer = setTimeout(function () {

					var top = self.getScrollTop();
					var lft = self.getScrollLeft();

					var dst = {};
					dst.x = x - lft;
					dst.y = y - top;
					dst.px = lft;
					dst.py = top;

					var dd = Math.round(Math.sqrt(Math.pow(dst.x, 2) + Math.pow(dst.y, 2)));
					var ms = (self.newscrollspeed && self.newscrollspeed > 1) ? self.newscrollspeed : self.getTransitionSpeed(dd);
					if (self.newscrollspeed && self.newscrollspeed <= 1) ms *= self.newscrollspeed;

					self.prepareTransition(ms, true);

					if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);

					if (ms > 0) {

						if (!self.scrollrunning && self.onscrollstart) {
							var info = {
								"type":    "scrollstart",
								"current": {
									"x": lft,
									"y": top
								},
								"request": {
									"x": x,
									"y": y
								},
								"end":     {
									"x": self.newscrollx,
									"y": self.newscrolly
								},
								"speed":   ms
							};
							self.onscrollstart.call(self, info);
						}

						if (cap.transitionend) {
							if (!self.scrollendtrapped) {
								self.scrollendtrapped = true;
								self.bind(self.doc, cap.transitionend, self.onScrollTransitionEnd, false); //I have got to do something usefull!!
							}
						} else {
							if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
							self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, ms); // simulate transitionend event
						}

						var py = top;
						var px = lft;
						self.timerscroll = {
							bz: new BezierClass(py, self.newscrolly, ms, 0, 0, 0.58, 1),
							bh: new BezierClass(px, self.newscrollx, ms, 0, 0, 0.58, 1)
						};
						if (!self.cursorfreezed) self.timerscroll.tm = setInterval(function () {
							self.showCursor(self.getScrollTop(), self.getScrollLeft())
						}, 60);

					}

					self.synched("doScroll-set", function () {
						self.timer = 0;
						if (self.scrollendtrapped) self.scrollrunning = true;
						self.setScrollTop(self.newscrolly);
						self.setScrollLeft(self.newscrollx);
						if (!self.scrollendtrapped) self.onScrollTransitionEnd();
					});


				}, 50);

			};

			this.cancelScroll = function () {
				if (!self.scrollendtrapped) return true;
				var py = self.getScrollTop();
				var px = self.getScrollLeft();
				self.scrollrunning = false;
				if (!cap.transitionend) clearTimeout(cap.transitionend);
				self.scrollendtrapped = false;
				self._unbind(self.doc[ 0 ], cap.transitionend, self.onScrollTransitionEnd);
				self.prepareTransition(0);
				self.setScrollTop(py); // fire event onscroll
				if (self.railh) self.setScrollLeft(px);
				if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
				self.timerscroll = false;

				self.cursorfreezed = false;

				self.showCursor(py, px);
				return self;
			};
			this.onScrollTransitionEnd = function () {
				if (self.scrollendtrapped) self._unbind(self.doc[ 0 ], cap.transitionend, self.onScrollTransitionEnd);
				self.scrollendtrapped = false;
				self.prepareTransition(0);
				if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
				self.timerscroll = false;
				var py = self.getScrollTop();
				var px = self.getScrollLeft();
				self.setScrollTop(py); // fire event onscroll        
				if (self.railh) self.setScrollLeft(px); // fire event onscroll left

				self.noticeCursor(false, py, px);

				self.cursorfreezed = false;

				if (py < 0) py = 0
				else if (py > self.page.maxh) py = self.page.maxh;
				if (px < 0) px = 0
				else if (px > self.page.maxw) px = self.page.maxw;
				if ((py != self.newscrolly) || (px != self.newscrollx)) return self.doScrollPos(px, py, self.opt.snapbackspeed);

				if (self.onscrollend && self.scrollrunning) {
					self.triggerScrollEnd();
				}
				self.scrollrunning = false;

			};

		} else {

			this.doScrollLeft = function (x, spd) { //no-trans
				var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
				self.doScrollPos(x, y, spd);
			};

			this.doScrollTop = function (y, spd) { //no-trans
				var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
				self.doScrollPos(x, y, spd);
			};

			this.doScrollPos = function (x, y, spd) { //no-trans
				var y = ((typeof y == "undefined") || (y === false)) ? self.getScrollTop(true) : y;

				if ((self.timer) && (self.newscrolly == y) && (self.newscrollx == x)) return true;

				if (self.timer) clearAnimationFrame(self.timer);
				self.timer = 0;

				var py = self.getScrollTop();
				var px = self.getScrollLeft();

				if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection

				self.newscrolly = y;
				self.newscrollx = x;

				if (!self.bouncescroll || !self.rail.visibility) {
					if (self.newscrolly < 0) {
						self.newscrolly = 0;
					} else if (self.newscrolly > self.page.maxh) {
						self.newscrolly = self.page.maxh;
					}
				}
				if (!self.bouncescroll || !self.railh.visibility) {
					if (self.newscrollx < 0) {
						self.newscrollx = 0;
					} else if (self.newscrollx > self.page.maxw) {
						self.newscrollx = self.page.maxw;
					}
				}

				self.dst = {};
				self.dst.x = x - px;
				self.dst.y = y - py;
				self.dst.px = px;
				self.dst.py = py;

				var dst = Math.round(Math.sqrt(Math.pow(self.dst.x, 2) + Math.pow(self.dst.y, 2)));

				self.dst.ax = self.dst.x / dst;
				self.dst.ay = self.dst.y / dst;

				var pa = 0;
				var pe = dst;

				if (self.dst.x == 0) {
					pa = py;
					pe = y;
					self.dst.ay = 1;
					self.dst.py = 0;
				} else if (self.dst.y == 0) {
					pa = px;
					pe = x;
					self.dst.ax = 1;
					self.dst.px = 0;
				}

				var ms = self.getTransitionSpeed(dst);
				if (spd && spd <= 1) ms *= spd;
				if (ms > 0) {
					self.bzscroll = (self.bzscroll) ? self.bzscroll.update(pe, ms) : new BezierClass(pa, pe, ms, 0, 1, 0, 1);
				} else {
					self.bzscroll = false;
				}

				if (self.timer) return;

				if ((py == self.page.maxh && y >= self.page.maxh) || (px == self.page.maxw && x >= self.page.maxw)) self.checkContentSize();

				var sync = 1;

				function scrolling () {
					if (self.cancelAnimationFrame) return true;

					self.scrollrunning = true;

					sync = 1 - sync;
					if (sync) return (self.timer = setAnimationFrame(scrolling) || 1);

					var done = 0;
					var sx, sy;

					var sc = sy = self.getScrollTop();
					if (self.dst.ay) {
						sc = (self.bzscroll) ? self.dst.py + (self.bzscroll.getNow() * self.dst.ay) : self.newscrolly;
						var dr = sc - sy;
						if ((dr < 0 && sc < self.newscrolly) || (dr > 0 && sc > self.newscrolly)) sc = self.newscrolly;
						self.setScrollTop(sc);
						if (sc == self.newscrolly) done = 1;
					} else {
						done = 1;
					}

					var scx = sx = self.getScrollLeft();
					if (self.dst.ax) {
						scx = (self.bzscroll) ? self.dst.px + (self.bzscroll.getNow() * self.dst.ax) : self.newscrollx;
						var dr = scx - sx;
						if ((dr < 0 && scx < self.newscrollx) || (dr > 0 && scx > self.newscrollx)) scx = self.newscrollx;
						self.setScrollLeft(scx);
						if (scx == self.newscrollx) done += 1;
					} else {
						done += 1;
					}

					if (done == 2) {
						self.timer = 0;
						self.cursorfreezed = false;
						self.bzscroll = false;
						self.scrollrunning = false;
						if (sc < 0) sc = 0;
						else if (sc > self.page.maxh) sc = self.page.maxh;
						if (scx < 0) scx = 0;
						else if (scx > self.page.maxw) scx = self.page.maxw;
						if ((scx != self.newscrollx) || (sc != self.newscrolly)) self.doScrollPos(scx, sc);
						else {
							if (self.onscrollend) {
								self.triggerScrollEnd();
							}
						}
					} else {
						self.timer = setAnimationFrame(scrolling) || 1;
					}
				};
				self.cancelAnimationFrame = false;
				self.timer = 1;

				if (self.onscrollstart && !self.scrollrunning) {
					var info = {
						"type":    "scrollstart",
						"current": {
							"x": px,
							"y": py
						},
						"request": {
							"x": x,
							"y": y
						},
						"end":     {
							"x": self.newscrollx,
							"y": self.newscrolly
						},
						"speed":   ms
					};
					self.onscrollstart.call(self, info);
				}

				scrolling();

				if ((py == self.page.maxh && y >= py) || (px == self.page.maxw && x >= px)) self.checkContentSize();

				self.noticeCursor();
			};

			this.cancelScroll = function () {
				if (self.timer) clearAnimationFrame(self.timer);
				self.timer = 0;
				self.bzscroll = false;
				self.scrollrunning = false;
				return self;
			};

		}

		this.doScrollBy = function (stp, relative) {
			var ny = 0;
			if (relative) {
				ny = Math.floor((self.scroll.y - stp) * self.scrollratio.y)
			} else {
				var sy = (self.timer) ? self.newscrolly : self.getScrollTop(true);
				ny = sy - stp;
			}
			if (self.bouncescroll) {
				var haf = Math.round(self.view.h / 2);
				if (ny < -haf) ny = -haf
				else if (ny > (self.page.maxh + haf)) ny = (self.page.maxh + haf);
			}
			self.cursorfreezed = false;

			var py = self.getScrollTop(true);
			if (ny < 0 && py <= 0) return self.noticeCursor();
			else if (ny > self.page.maxh && py >= self.page.maxh) {
				self.checkContentSize();
				return self.noticeCursor();
			}

			self.doScrollTop(ny);
		};

		this.doScrollLeftBy = function (stp, relative) {
			var nx = 0;
			if (relative) {
				nx = Math.floor((self.scroll.x - stp) * self.scrollratio.x)
			} else {
				var sx = (self.timer) ? self.newscrollx : self.getScrollLeft(true);
				nx = sx - stp;
			}
			if (self.bouncescroll) {
				var haf = Math.round(self.view.w / 2);
				if (nx < -haf) nx = -haf;
				else if (nx > (self.page.maxw + haf)) nx = (self.page.maxw + haf);
			}
			self.cursorfreezed = false;

			var px = self.getScrollLeft(true);
			if (nx < 0 && px <= 0) return self.noticeCursor();
			else if (nx > self.page.maxw && px >= self.page.maxw) return self.noticeCursor();

			self.doScrollLeft(nx);
		};

		this.doScrollTo = function (pos, relative) {
			var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
			if (ny < 0) ny = 0;
			else if (ny > self.page.maxh) ny = self.page.maxh;
			self.cursorfreezed = false;
			self.doScrollTop(pos);
		};

		this.checkContentSize = function () {
			var pg = self.getContentSize();
			if ((pg.h != self.page.h) || (pg.w != self.page.w)) self.resize(false, pg);
		};

		self.onscroll = function (e) {
			if (self.rail.drag) return;
			if (!self.cursorfreezed) {
				self.synched('scroll', function () {
					self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
					if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() * (1 / self.scrollratio.x));
					self.noticeCursor();
				});
			}
		};
		self.bind(self.docscroll, "scroll", self.onscroll);

		this.doZoomIn = function (e) {
			if (self.zoomactive) return;
			self.zoomactive = true;

			self.zoomrestore = {
				style: {}
			};
			var lst = [ 'position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight' ];
			var win = self.win[ 0 ].style;
			for (var a in lst) {
				var pp = lst[ a ];
				self.zoomrestore.style[ pp ] = (typeof win[ pp ] != "undefined") ? win[ pp ] : '';
			}

			self.zoomrestore.style.width = self.win.css('width');
			self.zoomrestore.style.height = self.win.css('height');

			self.zoomrestore.padding = {
				w: self.win.outerWidth() - self.win.width(),
				h: self.win.outerHeight() - self.win.height()
			};

			if (cap.isios4) {
				self.zoomrestore.scrollTop = $(window).scrollTop();
				$(window).scrollTop(0);
			}

			self.win.css({
				"position": (cap.isios4) ? "absolute" : "fixed",
				"top":      0,
				"left":     0,
				"z-index":  globalmaxzindex + 100,
				"margin":   "0px"
			});
			var bkg = self.win.css("backgroundColor");
			if (bkg == "" || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor", "#fff");
			self.rail.css({
				"z-index": globalmaxzindex + 101
			});
			self.zoom.css({
				"z-index": globalmaxzindex + 102
			});
			self.zoom.css('backgroundPosition', '0px -18px');
			self.resizeZoom();

			if (self.onzoomin) self.onzoomin.call(self);

			return self.cancelEvent(e);
		};

		this.doZoomOut = function (e) {
			if (!self.zoomactive) return;
			self.zoomactive = false;

			self.win.css("margin", "");
			self.win.css(self.zoomrestore.style);

			if (cap.isios4) {
				$(window).scrollTop(self.zoomrestore.scrollTop);
			}

			self.rail.css({
				"z-index": self.zindex
			});
			self.zoom.css({
				"z-index": self.zindex
			});
			self.zoomrestore = false;
			self.zoom.css('backgroundPosition', '0px 0px');
			self.onResize();

			if (self.onzoomout) self.onzoomout.call(self);

			return self.cancelEvent(e);
		};

		this.doZoom = function (e) {
			return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
		};

		this.resizeZoom = function () {
			if (!self.zoomactive) return;

			var py = self.getScrollTop(); //preserve scrolling position
			self.win.css({
				width:  $(window).width() - self.zoomrestore.padding.w + "px",
				height: $(window).height() - self.zoomrestore.padding.h + "px"
			});
			self.onResize();

			self.setScrollTop(Math.min(self.page.maxh, py));
		};

		this.init();

		$.nicescroll.push(this);

	};

	// Inspired by the work of Kin Blas
	// http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  


	var ScrollMomentumClass2D = function (nc) {
		var self = this;
		this.nc = nc;

		this.lastx = 0;
		this.lasty = 0;
		this.speedx = 0;
		this.speedy = 0;
		this.lasttime = 0;
		this.steptime = 0;
		this.snapx = false;
		this.snapy = false;
		this.demulx = 0;
		this.demuly = 0;

		this.lastscrollx = -1;
		this.lastscrolly = -1;

		this.chkx = 0;
		this.chky = 0;

		this.timer = 0;

		this.time = function () {
			return +new Date(); //beautifull hack
		};

		this.reset = function (px, py) {
			self.stop();
			var now = self.time();
			self.steptime = 0;
			self.lasttime = now;
			self.speedx = 0;
			self.speedy = 0;
			self.lastx = px;
			self.lasty = py;
			self.lastscrollx = -1;
			self.lastscrolly = -1;
		};

		this.update = function (px, py) {
			var now = self.time();
			self.steptime = now - self.lasttime;
			self.lasttime = now;
			var dy = py - self.lasty;
			var dx = px - self.lastx;
			var sy = self.nc.getScrollTop();
			var sx = self.nc.getScrollLeft();
			var newy = sy + dy;
			var newx = sx + dx;
			self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
			self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
			self.speedx = dx;
			self.speedy = dy;
			self.lastx = px;
			self.lasty = py;
		};

		this.stop = function () {
			self.nc.unsynched("domomentum2d");
			if (self.timer) clearTimeout(self.timer);
			self.timer = 0;
			self.lastscrollx = -1;
			self.lastscrolly = -1;
		};

		this.doSnapy = function (nx, ny) {
			var snap = false;

			if (ny < 0) {
				ny = 0;
				snap = true;
			} else if (ny > self.nc.page.maxh) {
				ny = self.nc.page.maxh;
				snap = true;
			}

			if (nx < 0) {
				nx = 0;
				snap = true;
			} else if (nx > self.nc.page.maxw) {
				nx = self.nc.page.maxw;
				snap = true;
			}

			(snap) ? self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed) : self.nc.triggerScrollEnd();
		};

		this.doMomentum = function (gp) {
			var t = self.time();
			var l = (gp) ? t + gp : self.lasttime;

			var sl = self.nc.getScrollLeft();
			var st = self.nc.getScrollTop();

			var pageh = self.nc.page.maxh;
			var pagew = self.nc.page.maxw;

			self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
			self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;

			var chk = l && (t - l) <= 60;

			if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) chk = false;

			var sy = (self.speedy && chk) ? self.speedy : false;
			var sx = (self.speedx && chk) ? self.speedx : false;

			if (sy || sx) {
				var tm = Math.max(16, self.steptime); //timeout granularity

				if (tm > 50) { // do smooth
					var xm = tm / 50;
					self.speedx *= xm;
					self.speedy *= xm;
					tm = 50;
				}

				self.demulxy = 0;

				self.lastscrollx = self.nc.getScrollLeft();
				self.chkx = self.lastscrollx;
				self.lastscrolly = self.nc.getScrollTop();
				self.chky = self.lastscrolly;

				var nx = self.lastscrollx;
				var ny = self.lastscrolly;

				var onscroll = function () {
					var df = ((self.time() - t) > 600) ? 0.04 : 0.02;

					if (self.speedx) {
						nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
						self.lastscrollx = nx;
						if ((nx < 0) || (nx > pagew)) df = 0.10;
					}

					if (self.speedy) {
						ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
						self.lastscrolly = ny;
						if ((ny < 0) || (ny > pageh)) df = 0.10;
					}

					self.demulxy = Math.min(1, self.demulxy + df);

					self.nc.synched("domomentum2d", function () {

						if (self.speedx) {
							var scx = self.nc.getScrollLeft();
							if (scx != self.chkx) self.stop();
							self.chkx = nx;
							self.nc.setScrollLeft(nx);
						}

						if (self.speedy) {
							var scy = self.nc.getScrollTop();
							if (scy != self.chky) self.stop();
							self.chky = ny;
							self.nc.setScrollTop(ny);
						}

						if (!self.timer) {
							self.nc.hideCursor();
							self.doSnapy(nx, ny);
						}

					});

					if (self.demulxy < 1) {
						self.timer = setTimeout(onscroll, tm);
					} else {
						self.stop();
						self.nc.hideCursor();
						self.doSnapy(nx, ny);
					}
				};

				onscroll();

			} else {
				self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
			}

		}

	};


	// override jQuery scrollTop

	var _scrollTop = jQuery.fn.scrollTop; // preserve original function

	jQuery.cssHooks[ "pageYOffset" ] = {
		get: function (elem, computed, extra) {
			var nice = $.data(elem, '__nicescroll') || false;
			return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
		},
		set: function (elem, value) {
			var nice = $.data(elem, '__nicescroll') || false;
			(nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem, value);
			return this;
		}
	};

	/*  
	 $.fx.step["scrollTop"] = function(fx){    
	 $.cssHooks["scrollTop"].set( fx.elem, fx.now + fx.unit );
	 };
	 */

	jQuery.fn.scrollTop = function (value) {
		if (typeof value == "undefined") {
			var nice = (this[ 0 ]) ? $.data(this[ 0 ], '__nicescroll') || false : false;
			return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
		} else {
			return this.each(function () {
				var nice = $.data(this, '__nicescroll') || false;
				(nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this), value);
			});
		}
	};

	// override jQuery scrollLeft

	var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function

	$.cssHooks.pageXOffset = {
		get: function (elem, computed, extra) {
			var nice = $.data(elem, '__nicescroll') || false;
			return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
		},
		set: function (elem, value) {
			var nice = $.data(elem, '__nicescroll') || false;
			(nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem, value);
			return this;
		}
	};

	/*  
	 $.fx.step["scrollLeft"] = function(fx){
	 $.cssHooks["scrollLeft"].set( fx.elem, fx.now + fx.unit );
	 };  
	 */

	jQuery.fn.scrollLeft = function (value) {
		if (typeof value == "undefined") {
			var nice = (this[ 0 ]) ? $.data(this[ 0 ], '__nicescroll') || false : false;
			return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
		} else {
			return this.each(function () {
				var nice = $.data(this, '__nicescroll') || false;
				(nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this), value);
			});
		}
	};

	var NiceScrollArray = function (doms) {
		var self = this;
		this.length = 0;
		this.name = "nicescrollarray";

		this.each = function (fn) {
			for (var a = 0, i = 0; a < self.length; a++) fn.call(self[ a ], i++);
			return self;
		};

		this.push = function (nice) {
			self[ self.length ] = nice;
			self.length++;
		};

		this.eq = function (idx) {
			return self[ idx ];
		};

		if (doms) {
			for (var a = 0; a < doms.length; a++) {
				var nice = $.data(doms[ a ], '__nicescroll') || false;
				if (nice) {
					this[ this.length ] = nice;
					this.length++;
				}
			}
			;
		}

		return this;
	};

	function mplex (el, lst, fn) {
		for (var a = 0; a < lst.length; a++) fn(el, lst[ a ]);
	};
	mplex(
		NiceScrollArray.prototype, [ 'show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos' ],
		function (e, n) {
			e[ n ] = function () {
				var args = arguments;
				return this.each(function () {
					this[ n ].apply(this, args);
				});
			};
		}
	);

	jQuery.fn.getNiceScroll = function (index) {
		if (typeof index == "undefined") {
			return new NiceScrollArray(this);
		} else {
			var nice = this[ index ] && $.data(this[ index ], '__nicescroll') || false;
			return nice;
		}
	};

	jQuery.extend(jQuery.expr[ ':' ], {
		nicescroll: function (a) {
			return ($.data(a, '__nicescroll')) ? true : false;
		}
	});

	$.fn.niceScroll = function (wrapper, opt) {
		if (typeof opt == "undefined") {
			if ((typeof wrapper == "object") && !("jquery" in wrapper)) {
				opt = wrapper;
				wrapper = false;
			}
		}
		opt = $.extend({}, opt); // cloning
		var ret = new NiceScrollArray();
		if (typeof opt == "undefined") opt = {};

		if (wrapper || false) {
			opt.doc = $(wrapper);
			opt.win = $(this);
		}
		var docundef = !("doc" in opt);
		if (!docundef && !("win" in opt)) opt.win = $(this);

		this.each(function () {
			var nice = $(this).data('__nicescroll') || false;
			if (!nice) {
				opt.doc = (docundef) ? $(this) : opt.doc;
				nice = new NiceScrollClass(opt, $(this));
				$(this).data('__nicescroll', nice);
			}
			ret.push(nice);
		});
		return (ret.length == 1) ? ret[ 0 ] : ret;
	};

	window.NiceScroll = {
		getjQuery: function () {
			return jQuery
		}
	};

	if (!$.nicescroll) {
		$.nicescroll = new NiceScrollArray();
		$.nicescroll.options = _globaloptions;
	}

}));
