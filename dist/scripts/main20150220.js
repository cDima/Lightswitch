/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


/* =========================================================
 * bootstrap-slider.js v2.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {

	$.propHooks.disabled = {
	  set: function (el, value) {
	    if (el.disabled !== value) {
	      el.disabled = value;
	      value && $(el).trigger('disabledSet');
	      !value && $(el).trigger('enabledSet');
	    }
	  }
	};

	var Slider = function(element, options) {
		this.element = $(element);
		this.picker = $('<div class="slider">'+
							'<div class="slider-track">'+
								'<div class="slider-selection"></div>'+
								'<div class="slider-handle"></div>'+
								'<div class="slider-handle"></div>'+
							'</div>'+
							'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'+
						'</div>')
							.insertBefore(this.element)
							.append(this.element);
		this.id = this.element.data('slider-id')||options.id;
		if (this.id) {
			this.picker[0].id = this.id;
		}

		this.disabled = false;

		if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
			this.touchCapable = true;
		}

		var tooltip = this.element.data('slider-tooltip')||options.tooltip;

		this.tooltip = this.picker.find('.tooltip');
		this.tooltipInner = this.tooltip.find('div.tooltip-inner');

		this.orientation = this.element.data('slider-orientation')||options.orientation;
		switch(this.orientation) {
			case 'vertical':
				this.picker.addClass('slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
				this.tooltip.addClass('right')[0].style.left = '100%';
				break;
			default:
				this.picker
					.addClass('slider-horizontal');
					//.css('width', this.element.outerWidth());
				this.orientation = 'horizontal';
				this.stylePos = 'left';
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
				this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
				break;
		}

		this.min = this.element.data('slider-min')||options.min;
		this.max = this.element.data('slider-max')||options.max;
		this.step = this.element.data('slider-step')||options.step;
		this.value = this.element.data('slider-value')||options.value;
		if (this.value[1]) {
			this.range = true;
		}

		this.selection = this.element.data('slider-selection')||options.selection;
		this.selectionEl = this.picker.find('.slider-selection');
		if (this.selection === 'none') {
			this.selectionEl.addClass('hide');
		}
		this.selectionElStyle = this.selectionEl[0].style;


		this.handle1 = this.picker.find('.slider-handle:first');
		this.handle1Stype = this.handle1[0].style;
		this.handle2 = this.picker.find('.slider-handle:last');
		this.handle2Stype = this.handle2[0].style;

		var handle = this.element.data('slider-handle')||options.handle;
		switch(handle) {
			case 'round':
				this.handle1.addClass('round');
				this.handle2.addClass('round');
				break
			case 'triangle':
				this.handle1.addClass('triangle');
				this.handle2.addClass('triangle');
				break
		}

		if (this.range) {
			this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
			this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
		} else {
			this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
			this.handle2.addClass('hide');
			if (this.selection == 'after') {
				this.value[1] = this.max;
			} else {
				this.value[1] = this.min;
			}
		}
		this.diff = this.max - this.min;
		this.percentage = [
			(this.value[0]-this.min)*100/this.diff,
			(this.value[1]-this.min)*100/this.diff,
			this.step*100/this.diff
		];

		this.offset = this.picker.offset();
		this.size = this.picker[0][this.sizePos];

		this.formater = options.formater;

		this.layout();

		if (this.touchCapable) {
			// Touch: Bind touch events:
			this.picker.on({
				touchstart: $.proxy(this.mousedown, this)
			});
		} else {
			this.picker.on({
				mousedown: $.proxy(this.mousedown, this)
			});
		}

		if (tooltip === 'show') {
			this.picker.on({
				mouseenter: $.proxy(this.showTooltip, this),
				mouseleave: $.proxy(this.hideTooltip, this)
			});
		} else {
			this.tooltip.addClass('hide');
		}

		$(element).on({
			change: $.proxy(this.onValueChange, this),
			disabledSet: $.proxy(this.deactivate, this),
			enabledSet: $.proxy(this.activate, this)
		});
		//change(function(){
			
			//this.onValueChange();
		//});
	};

	Slider.prototype = {
		constructor: Slider,

		over: false,
		inDrag: false,
		
		showTooltip: function(){
			this.tooltip.addClass('in');
			//var left = Math.round(this.percent*this.width);
			//this.tooltip.css('left', left - this.tooltip.outerWidth()/2);
			this.over = true;
		},
		
		hideTooltip: function(){
			if (this.inDrag === false) {
				this.tooltip.removeClass('in');
			}
			this.over = false;
		},

		layout: function(){
			this.handle1Stype[this.stylePos] = this.percentage[0]+'%';
			this.handle2Stype[this.stylePos] = this.percentage[1]+'%';
			if (this.orientation == 'vertical') {
				this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			} else {
				this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			}
			if (this.range) {
				this.tooltipInner.text(
					this.formater(this.value[0]) + 
					' : ' + 
					this.formater(this.value[1])
				);
				this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0])/2)/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			} else {
				this.tooltipInner.text(
					this.formater(this.value[0])
				);
				this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0]/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			}
		},

		mousedown: function(ev) {

			if (this.disabled) return;

			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchstart') {
				ev = ev.originalEvent;
			}

			this.offset = this.picker.offset();
			this.size = this.picker[0][this.sizePos];

			var percentage = this.getPercentage(ev);

			if (this.range) {
				var diff1 = Math.abs(this.percentage[0] - percentage);
				var diff2 = Math.abs(this.percentage[1] - percentage);
				this.dragged = (diff1 < diff2) ? 0 : 1;
			} else {
				this.dragged = 0;
			}

			this.percentage[this.dragged] = percentage;
			this.layout();

			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).on({
					touchmove: $.proxy(this.mousemove, this),
					touchend: $.proxy(this.mouseup, this)
				});
			} else {
				$(document).on({
					mousemove: $.proxy(this.mousemove, this),
					mouseup: $.proxy(this.mouseup, this)
				});
			}

			this.inDrag = true;
			var val = this.calculateValue();
			this.element.trigger({
					type: 'slideStart',
					value: val
				}).trigger({
					type: 'slide',
					value: val
				});
			return false;
		},

		mousemove: function(ev) {
			
			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchmove') {
				ev = ev.originalEvent;
			}

			var percentage = this.getPercentage(ev);
			if (this.range) {
				if (this.dragged === 0 && this.percentage[1] < percentage) {
					this.percentage[0] = this.percentage[1];
					this.dragged = 1;
				} else if (this.dragged === 1 && this.percentage[0] > percentage) {
					this.percentage[1] = this.percentage[0];
					this.dragged = 0;
				}
			}
			this.percentage[this.dragged] = percentage;
			this.layout();
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slide',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		mouseup: function(ev) {
			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).off({
					touchmove: this.mousemove,
					touchend: this.mouseup
				});
			} else {
				$(document).off({
					mousemove: this.mousemove,
					mouseup: this.mouseup
				});
			}

			this.inDrag = false;
			if (this.over == false) {
				this.hideTooltip();
			}
			this.element;
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slideStop',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		activate: function(ev) {
			this.picker.removeClass("disabled");
			this.disabled = false;
		},

		deactivate: function(ev) {
			this.picker.addClass("disabled");
			this.disabled = true;
		},

		onValueChange: function(ev) {
			var val = this.element.val();
			this.setValue(val);
		},

		calculateValue: function() {
			var val;
			if (this.range) {
				val = [
					(this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step),
					(this.min + Math.round((this.diff * this.percentage[1]/100)/this.step)*this.step)
				];
				this.value = val;
			} else {
				val = (this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step);
				this.value = [val, this.value[1]];
			}
			return val;
		},

		getPercentage: function(ev) {
			if (this.touchCapable) {
				ev = ev.touches[0];
			}
			var percentage = (ev[this.mousePos] - this.offset[this.stylePos])*100/this.size;
			percentage = Math.round(percentage/this.percentage[2])*this.percentage[2];
			return Math.max(0, Math.min(100, percentage));
		},

		getValue: function() {
			if (this.range) {
				return this.value;
			}
			return this.value[0];
		},

		setValue: function(val) {
			this.value = val;

			if (this.range) {
				this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
				this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
			} else {
				this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
				this.handle2.addClass('hide');
				if (this.selection == 'after') {
					this.value[1] = this.max;
				} else {
					this.value[1] = this.min;
				}
			}
			this.diff = this.max - this.min;
			this.percentage = [
				(this.value[0]-this.min)*100/this.diff,
				(this.value[1]-this.min)*100/this.diff,
				this.step*100/this.diff
			];
			this.layout();
		}
	};

	$.fn.slider = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('slider'),
				options = typeof option === 'object' && option;
			if (!data)  {
				$this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults,options))));
			}
			if (typeof option == 'string') {
				data[option](val);
			}
		})
	};

	$.fn.slider.defaults = {
		min: 0,
		max: 10,
		step: 1,
		orientation: 'horizontal',
		value: 5,
		selection: 'before',
		tooltip: 'show',
		handle: 'round',
		formater: function(value) {
			return value;
		}
	};

	$.fn.slider.Constructor = Slider;

}( window.jQuery );
/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * License
 * -------
 * Creative Commons Attribution 2.5 License:
 * http://creativecommons.org/licenses/by/2.5/
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 */
//var CanvasImage=function(a){this.canvas=document.createElement("canvas"),
//this.context=this.canvas.getContext("2d"),this.canvas.style.display="none",
//document.body.appendChild(this.canvas),
//this.width=this.canvas.width=a.width,this.height=this.canvas.height=a.height,this.context.drawImage(a,0,0,this.width,this.height)};CanvasImage.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},CanvasImage.prototype.update=function(a){this.context.putImageData(a,0,0)},CanvasImage.prototype.getPixelCount=function(){return this.width*this.height},CanvasImage.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},CanvasImage.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var ColorThief=function(){};
/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
//if(ColorThief.prototype.getColor=function(a,b){var c=this.getPalette(a,5,b),d=c[0];return d},ColorThief.prototype.getPalette=function(a,b,c){"undefined"==typeof b&&(b=10),"undefined"==typeof c&&(c=10);for(var d,e,f,g,h,i=new CanvasImage(a),j=i.getImageData(),k=j.data,l=i.getPixelCount(),m=[],n=0;l>n;n+=c)d=4*n,e=k[d+0],f=k[d+1],g=k[d+2],h=k[d+3],h>=125&&(e>250&&f>250&&g>250||m.push([e,f,g]));var o=MMCQ.quantize(m,b),p=o.palette();return i.removeCanvas(),p},!pv)var pv={map:function(a,b){var c={};return b?a.map(function(a,d){return c.index=d,b.call(c,a)}):a.slice()},naturalOrder:function(a,b){return b>a?-1:a>b?1:0},sum:function(a,b){var c={};return a.reduce(b?function(a,d,e){return c.index=e,a+b.call(c,d)}:function(a,b){return a+b},0)},max:function(a,b){return Math.max.apply(null,b?pv.map(a,b):a)}};var MMCQ=function(){function a(a,b,c){return(a<<2*i)+(b<<i)+c}function b(a){function b(){c.sort(a),d=!0}var c=[],d=!1;return{push:function(a){c.push(a),d=!1},peek:function(a){return d||b(),void 0===a&&(a=c.length-1),c[a]},pop:function(){return d||b(),c.pop()},size:function(){return c.length},map:function(a){return c.map(a)},debug:function(){return d||b(),c}}}function c(a,b,c,d,e,f,g){var h=this;h.r1=a,h.r2=b,h.g1=c,h.g2=d,h.b1=e,h.b2=f,h.histo=g}function d(){this.vboxes=new b(function(a,b){return pv.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())})}function e(b){var c,d,e,f,g=1<<3*i,h=new Array(g);return b.forEach(function(b){d=b[0]>>j,e=b[1]>>j,f=b[2]>>j,c=a(d,e,f),h[c]=(h[c]||0)+1}),h}function f(a,b){var d,e,f,g=1e6,h=0,i=1e6,k=0,l=1e6,m=0;return a.forEach(function(a){d=a[0]>>j,e=a[1]>>j,f=a[2]>>j,g>d?g=d:d>h&&(h=d),i>e?i=e:e>k&&(k=e),l>f?l=f:f>m&&(m=f)}),new c(g,h,i,k,l,m,b)}function g(b,c){function d(a){var b,d,e,f,g,h=a+"1",j=a+"2",k=0;for(i=c[h];i<=c[j];i++)if(o[i]>n/2){for(e=c.copy(),f=c.copy(),b=i-c[h],d=c[j]-i,g=d>=b?Math.min(c[j]-1,~~(i+d/2)):Math.max(c[h],~~(i-1-b/2));!o[g];)g++;for(k=p[g];!k&&o[g-1];)k=p[--g];return e[j]=g,f[h]=e[j]+1,[e,f]}}if(c.count()){var e=c.r2-c.r1+1,f=c.g2-c.g1+1,g=c.b2-c.b1+1,h=pv.max([e,f,g]);if(1==c.count())return[c.copy()];var i,j,k,l,m,n=0,o=[],p=[];if(h==e)for(i=c.r1;i<=c.r2;i++){for(l=0,j=c.g1;j<=c.g2;j++)for(k=c.b1;k<=c.b2;k++)m=a(i,j,k),l+=b[m]||0;n+=l,o[i]=n}else if(h==f)for(i=c.g1;i<=c.g2;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.b1;k<=c.b2;k++)m=a(j,i,k),l+=b[m]||0;n+=l,o[i]=n}else for(i=c.b1;i<=c.b2;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.g1;k<=c.g2;k++)m=a(j,k,i),l+=b[m]||0;n+=l,o[i]=n}return o.forEach(function(a,b){p[b]=n-a}),d(h==e?"r":h==f?"g":"b")}}function h(a,c){function h(a,b){for(var c,d=1,e=0;k>e;)if(c=a.pop(),c.count()){var f=g(i,c),h=f[0],j=f[1];if(!h)return;if(a.push(h),j&&(a.push(j),d++),d>=b)return;if(e++>k)return}else a.push(c),e++}if(!a.length||2>c||c>256)return!1;var i=e(a),j=0;i.forEach(function(){j++});var m=f(a,i),n=new b(function(a,b){return pv.naturalOrder(a.count(),b.count())});n.push(m),h(n,l*c);for(var o=new b(function(a,b){return pv.naturalOrder(a.count()*a.volume(),b.count()*b.volume())});n.size();)o.push(n.pop());h(o,c-o.size());for(var p=new d;o.size();)p.push(o.pop());return p}var i=5,j=8-i,k=1e3,l=.75;return c.prototype={volume:function(a){var b=this;return(!b._volume||a)&&(b._volume=(b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(b){var c=this,d=c.histo;if(!c._count_set||b){var e,f,g,h=0;for(e=c.r1;e<=c.r2;e++)for(f=c.g1;f<=c.g2;f++)for(g=c.b1;g<=c.b2;g++)index=a(e,f,g),h+=d[index]||0;c._count=h,c._count_set=!0}return c._count},copy:function(){var a=this;return new c(a.r1,a.r2,a.g1,a.g2,a.b1,a.b2,a.histo)},avg:function(b){var c=this,d=c.histo;if(!c._avg||b){var e,f,g,h,j,k=0,l=1<<8-i,m=0,n=0,o=0;for(f=c.r1;f<=c.r2;f++)for(g=c.g1;g<=c.g2;g++)for(h=c.b1;h<=c.b2;h++)j=a(f,g,h),e=d[j]||0,k+=e,m+=e*(f+.5)*l,n+=e*(g+.5)*l,o+=e*(h+.5)*l;c._avg=k?[~~(m/k),~~(n/k),~~(o/k)]:[~~(l*(c.r1+c.r2+1)/2),~~(l*(c.g1+c.g2+1)/2),~~(l*(c.b1+c.b2+1)/2)]}return c._avg},contains:function(a){var b=this,c=a[0]>>j;return gval=a[1]>>j,bval=a[2]>>j,c>=b.r1&&c<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=b.b2}},d.prototype={push:function(a){this.vboxes.push({vbox:a,color:a.avg()})},palette:function(){return this.vboxes.map(function(a){return a.color})},size:function(){return this.vboxes.size()},map:function(a){for(var b=this.vboxes,c=0;c<b.size();c++)if(b.peek(c).vbox.contains(a))return b.peek(c).color;return this.nearest(a)},nearest:function(a){for(var b,c,d,e=this.vboxes,f=0;f<e.size();f++)c=Math.sqrt(Math.pow(a[0]-e.peek(f).color[0],2)+Math.pow(a[1]-e.peek(f).color[1],2)+Math.pow(a[2]-e.peek(f).color[2],2)),(b>c||void 0===b)&&(b=c,d=e.peek(f).color);return d},forcebw:function(){var a=this.vboxes;a.sort(function(a,b){return pv.naturalOrder(pv.sum(a.color),pv.sum(b.color))});var b=a[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(a[0].color=[0,0,0]);var c=a.length-1,d=a[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(a[c].color=[255,255,255])}},{quantize:h}}();
/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * License
 * -------
 * Creative Commons Attribution 2.5 License:
 * http://creativecommons.org/licenses/by/2.5/
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 */


/*
  CanvasImage Class
  Class that wraps the html image element and canvas.
  It also simplifies some of the canvas context manipulation
  with a set of helper functions.
*/
var CanvasImage = function (image) {
    this.canvas  = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    this.width  = this.canvas.width  = image.width;
    this.height = this.canvas.height = image.height;

    this.context.drawImage(image, 0, 0, this.width, this.height);
};

CanvasImage.prototype.clear = function () {
    this.context.clearRect(0, 0, this.width, this.height);
};

CanvasImage.prototype.update = function (imageData) {
    this.context.putImageData(imageData, 0, 0);
};

CanvasImage.prototype.getPixelCount = function () {
    return this.width * this.height;
};

CanvasImage.prototype.getImageData = function () {
    return this.context.getImageData(0, 0, this.width, this.height);
};

CanvasImage.prototype.removeCanvas = function () {
    this.canvas.parentNode.removeChild(this.canvas);
};


var ColorThief = function () {};

/*
 * getColor(sourceImage[, quality])
 * returns {r: num, g: num, b: num}
 *
 * Use the median cut algorithm provided by quantize.js to cluster similar
 * colors and return the base color from the largest cluster.
 *
 * Quality is an optional argument. It needs to be an integer. 0 is the highest quality settings.
 * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
 * faster a color will be returned but the greater the likelihood that it will not be the visually
 * most dominant color.
 *
 * */
ColorThief.prototype.getColor = function(sourceImage, quality) {
    var palette       = this.getPalette(sourceImage, 5, quality);
    var dominantColor = palette[0];
    return dominantColor;
};


/*
 * getPalette(sourceImage[, colorCount, quality])
 * returns array[ {r: num, g: num, b: num}, {r: num, g: num, b: num}, ...]
 *
 * Use the median cut algorithm provided by quantize.js to cluster similar colors.
 *
 * colorCount determines the size of the palette; the number of colors returned. If not set, it
 * defaults to 10.
 *
 * BUGGY: Function does not always return the requested amount of colors. It can be +/- 2.
 *
 * quality is an optional argument. It needs to be an integer. 0 is the highest quality settings.
 * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
 * faster the palette generation but the greater the likelihood that colors will be missed.
 *
 *
 */
ColorThief.prototype.getPalette = function(sourceImage, colorCount, quality) {

    if (typeof colorCount === 'undefined') {
        colorCount = 10;
    }
    if (typeof quality === 'undefined') {
        quality = 10;
    }

    // Create custom CanvasImage object
    var image      = new CanvasImage(sourceImage);
    var imageData  = image.getImageData();
    var pixels     = imageData.data;
    var pixelCount = image.getPixelCount();

    // Store the RGB values in an array format suitable for quantize function
    var pixelArray = [];
    for (var i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
        offset = i * 4;
        r = pixels[offset + 0];
        g = pixels[offset + 1];
        b = pixels[offset + 2];
        a = pixels[offset + 3];
        // If pixel is mostly opaque and not white
        if (a >= 125) {
            if (!(r > 250 && g > 250 && b > 250)) {
                pixelArray.push([r, g, b]);
            }
        }
    }

    // Send array to quantize function which clusters values
    // using median cut algorithm
    var cmap    = MMCQ.quantize(pixelArray, colorCount);
    var palette = cmap.palette();

    // Clean up
    image.removeCanvas();

    return palette;
};




/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

// fill out a couple protovis dependencies
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (!pv) {
    var pv = {
        map: function(array, f) {
          var o = {};
          return f ? array.map(function(d, i) { o.index = i; return f.call(o, d); }) : array.slice();
        },
        naturalOrder: function(a, b) {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        },
        sum: function(array, f) {
          var o = {};
          return array.reduce(f ? function(p, d, i) { o.index = i; return p + f.call(o, d); } : function(p, d) { return p + d; }, 0);
        },
        max: function(array, f) {
          return Math.max.apply(null, f ? pv.map(array, f) : array);
        }
    };
}



/**
 * Basic Javascript port of the MMCQ (modified median cut quantization)
 * algorithm from the Leptonica library (http://www.leptonica.com/).
 * Returns a color map you can use to map original pixels to the reduced
 * palette. Still a work in progress.
 *
 * @author Nick Rabinowitz
 * @example

// array of pixels as [R,G,B] arrays
var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]
                // etc
                ];
var maxColors = 4;

var cmap = MMCQ.quantize(myPixels, maxColors);
var newPalette = cmap.palette();
var newPixels = myPixels.map(function(p) {
    return cmap.map(p);
});

 */
var MMCQ = (function() {
    // private constants
    var sigbits = 5,
        rshift = 8 - sigbits,
        maxIterations = 1000,
        fractByPopulations = 0.75;

    // get reduced-space color index for a pixel
    function getColorIndex(r, g, b) {
        return (r << (2 * sigbits)) + (g << sigbits) + b;
    }

    // Simple priority queue
    function PQueue(comparator) {
        var contents = [],
            sorted = false;

        function sort() {
            contents.sort(comparator);
            sorted = true;
        }

        return {
            push: function(o) {
                contents.push(o);
                sorted = false;
            },
            peek: function(index) {
                if (!sorted) sort();
                if (index===undefined) index = contents.length - 1;
                return contents[index];
            },
            pop: function() {
                if (!sorted) sort();
                return contents.pop();
            },
            size: function() {
                return contents.length;
            },
            map: function(f) {
                return contents.map(f);
            },
            debug: function() {
                if (!sorted) sort();
                return contents;
            }
        };
    }

    // 3d color space box
    function VBox(r1, r2, g1, g2, b1, b2, histo) {
        var vbox = this;
        vbox.r1 = r1;
        vbox.r2 = r2;
        vbox.g1 = g1;
        vbox.g2 = g2;
        vbox.b1 = b1;
        vbox.b2 = b2;
        vbox.histo = histo;
    }
    VBox.prototype = {
        volume: function(force) {
            var vbox = this;
            if (!vbox._volume || force) {
                vbox._volume = ((vbox.r2 - vbox.r1 + 1) * (vbox.g2 - vbox.g1 + 1) * (vbox.b2 - vbox.b1 + 1));
            }
            return vbox._volume;
        },
        count: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._count_set || force) {
                var npix = 0,
                    i, j, k;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                             index = getColorIndex(i,j,k);
                             npix += (histo[index] || 0);
                        }
                    }
                }
                vbox._count = npix;
                vbox._count_set = true;
            }
            return vbox._count;
        },
        copy: function() {
            var vbox = this;
            return new VBox(vbox.r1, vbox.r2, vbox.g1, vbox.g2, vbox.b1, vbox.b2, vbox.histo);
        },
        avg: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._avg || force) {
                var ntot = 0,
                    mult = 1 << (8 - sigbits),
                    rsum = 0,
                    gsum = 0,
                    bsum = 0,
                    hval,
                    i, j, k, histoindex;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                             histoindex = getColorIndex(i,j,k);
                             hval = histo[histoindex] || 0;
                             ntot += hval;
                             rsum += (hval * (i + 0.5) * mult);
                             gsum += (hval * (j + 0.5) * mult);
                             bsum += (hval * (k + 0.5) * mult);
                        }
                    }
                }
                if (ntot) {
                    vbox._avg = [~~(rsum/ntot), ~~(gsum/ntot), ~~(bsum/ntot)];
                } else {
//                    console.log('empty box');
                    vbox._avg = [
                        ~~(mult * (vbox.r1 + vbox.r2 + 1) / 2),
                        ~~(mult * (vbox.g1 + vbox.g2 + 1) / 2),
                        ~~(mult * (vbox.b1 + vbox.b2 + 1) / 2)
                    ];
                }
            }
            return vbox._avg;
        },
        contains: function(pixel) {
            var vbox = this,
                rval = pixel[0] >> rshift;
                gval = pixel[1] >> rshift;
                bval = pixel[2] >> rshift;
            return (rval >= vbox.r1 && rval <= vbox.r2 &&
                    gval >= vbox.g1 && gval <= vbox.g2 &&
                    bval >= vbox.b1 && bval <= vbox.b2);
        }
    };

    // Color map
    function CMap() {
        this.vboxes = new PQueue(function(a,b) {
            return pv.naturalOrder(
                a.vbox.count()*a.vbox.volume(),
                b.vbox.count()*b.vbox.volume()
            );
        });
    }
    CMap.prototype = {
        push: function(vbox) {
            this.vboxes.push({
                vbox: vbox,
                color: vbox.avg()
            });
        },
        palette: function() {
            return this.vboxes.map(function(vb) { return vb.color; });
        },
        size: function() {
            return this.vboxes.size();
        },
        map: function(color) {
            var vboxes = this.vboxes;
            for (var i=0; i<vboxes.size(); i++) {
                if (vboxes.peek(i).vbox.contains(color)) {
                    return vboxes.peek(i).color;
                }
            }
            return this.nearest(color);
        },
        nearest: function(color) {
            var vboxes = this.vboxes,
                d1, d2, pColor;
            for (var i=0; i<vboxes.size(); i++) {
                d2 = Math.sqrt(
                    Math.pow(color[0] - vboxes.peek(i).color[0], 2) +
                    Math.pow(color[1] - vboxes.peek(i).color[1], 2) +
                    Math.pow(color[2] - vboxes.peek(i).color[2], 2)
                );
                if (d2 < d1 || d1 === undefined) {
                    d1 = d2;
                    pColor = vboxes.peek(i).color;
                }
            }
            return pColor;
        },
        forcebw: function() {
            // XXX: won't  work yet
            var vboxes = this.vboxes;
            vboxes.sort(function(a,b) { return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color));});

            // force darkest color to black if everything < 5
            var lowest = vboxes[0].color;
            if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)
                vboxes[0].color = [0,0,0];

            // force lightest color to white if everything > 251
            var idx = vboxes.length-1,
                highest = vboxes[idx].color;
            if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)
                vboxes[idx].color = [255,255,255];
        }
    };

    // histo (1-d array, giving the number of pixels in
    // each quantized region of color space), or null on error
    function getHisto(pixels) {
        var histosize = 1 << (3 * sigbits),
            histo = new Array(histosize),
            index, rval, gval, bval;
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            index = getColorIndex(rval, gval, bval);
            histo[index] = (histo[index] || 0) + 1;
        });
        return histo;
    }

    function vboxFromPixels(pixels, histo) {
        var rmin=1000000, rmax=0,
            gmin=1000000, gmax=0,
            bmin=1000000, bmax=0,
            rval, gval, bval;
        // find min/max
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            if (rval < rmin) rmin = rval;
            else if (rval > rmax) rmax = rval;
            if (gval < gmin) gmin = gval;
            else if (gval > gmax) gmax = gval;
            if (bval < bmin) bmin = bval;
            else if (bval > bmax)  bmax = bval;
        });
        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
    }

    function medianCutApply(histo, vbox) {
        if (!vbox.count()) return;

        var rw = vbox.r2 - vbox.r1 + 1,
            gw = vbox.g2 - vbox.g1 + 1,
            bw = vbox.b2 - vbox.b1 + 1,
            maxw = pv.max([rw, gw, bw]);
        // only one pixel, no split
        if (vbox.count() == 1) {
            return [vbox.copy()];
        }
        /* Find the partial sum arrays along the selected axis. */
        var total = 0,
            partialsum = [],
            lookaheadsum = [],
            i, j, k, sum, index;
        if (maxw == rw) {
            for (i = vbox.r1; i <= vbox.r2; i++) {
                sum = 0;
                for (j = vbox.g1; j <= vbox.g2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(i,j,k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        else if (maxw == gw) {
            for (i = vbox.g1; i <= vbox.g2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(j,i,k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        else {  /* maxw == bw */
            for (i = vbox.b1; i <= vbox.b2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.g1; k <= vbox.g2; k++) {
                        index = getColorIndex(j,k,i);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        partialsum.forEach(function(d,i) {
            lookaheadsum[i] = total-d;
        });
        function doCut(color) {
            var dim1 = color + '1',
                dim2 = color + '2',
                left, right, vbox1, vbox2, d2, count2=0;
            for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
                if (partialsum[i] > total / 2) {
                    vbox1 = vbox.copy();
                    vbox2 = vbox.copy();
                    left = i - vbox[dim1];
                    right = vbox[dim2] - i;
                    if (left <= right)
                        d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2));
                    else d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
                    // avoid 0-count boxes
                    while (!partialsum[d2]) d2++;
                    count2 = lookaheadsum[d2];
                    while (!count2 && partialsum[d2-1]) count2 = lookaheadsum[--d2];
                    // set dimensions
                    vbox1[dim2] = d2;
                    vbox2[dim1] = vbox1[dim2] + 1;
//                    console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());
                    return [vbox1, vbox2];
                }
            }

        }
        // determine the cut planes
        return maxw == rw ? doCut('r') :
            maxw == gw ? doCut('g') :
            doCut('b');
    }

    function quantize(pixels, maxcolors) {
        // short-circuit
        if (!pixels.length || maxcolors < 2 || maxcolors > 256) {
//            console.log('wrong number of maxcolors');
            return false;
        }

        // XXX: check color content and convert to grayscale if insufficient

        var histo = getHisto(pixels),
            histosize = 1 << (3 * sigbits);

        // check that we aren't below maxcolors already
        var nColors = 0;
        histo.forEach(function() { nColors++; });
        if (nColors <= maxcolors) {
            // XXX: generate the new colors from the histo and return
        }

        // get the beginning vbox from the colors
        var vbox = vboxFromPixels(pixels, histo),
            pq = new PQueue(function(a,b) { return pv.naturalOrder(a.count(), b.count()); });
        pq.push(vbox);

        // inner function to do the iteration
        function iter(lh, target) {
            var ncolors = 1,
                niters = 0,
                vbox;
            while (niters < maxIterations) {
                vbox = lh.pop();
                if (!vbox.count())  { /* just put it back */
                    lh.push(vbox);
                    niters++;
                    continue;
                }
                // do the cut
                var vboxes = medianCutApply(histo, vbox),
                    vbox1 = vboxes[0],
                    vbox2 = vboxes[1];

                if (!vbox1) {
//                    console.log("vbox1 not defined; shouldn't happen!");
                    return;
                }
                lh.push(vbox1);
                if (vbox2) {  /* vbox2 can be null */
                    lh.push(vbox2);
                    ncolors++;
                }
                if (ncolors >= target) return;
                if (niters++ > maxIterations) {
//                    console.log("infinite loop; perhaps too few pixels!");
                    return;
                }
            }
        }

        // first set of colors, sorted by population
        iter(pq, fractByPopulations * maxcolors);

        // Re-sort by the product of pixel occupancy times the size in color space.
        var pq2 = new PQueue(function(a,b) {
            return pv.naturalOrder(a.count()*a.volume(), b.count()*b.volume());
        });
        while (pq.size()) {
            pq2.push(pq.pop());
        }

        // next set - generate the median cuts using the (npix * vol) sorting.
        iter(pq2, maxcolors - pq2.size());

        // calculate the actual colors
        var cmap = new CMap();
        while (pq2.size()) {
            cmap.push(pq2.pop());
        }

        return cmap;
    }

    return {
        quantize: quantize
    };
})();
/* (C) 2014 Dmitry Sadakov */

'use strict';

/*exported config */

 var config = {
  //app: 'light' // light, ambieye, pro, web
  //app: 'ambieye',
  //app: 'pro',
  //app: 'app',
  app: 'web',
 };

/* (C) 2014 Dmitry Sadakov */

'use strict';

/*global config:true */

config.ambieye = true;
config.scenes = true;
config.search = true;
config.tabs = true;
config.feedback = true;
config.voice = true;

switch(config.app) {
  case 'light':
      config.ambieye = false;
      config.scenes = false;
      config.search = false;
      config.tabs = false;
      config.voice = false;
      break;
  case 'pro':
      config.ambieye = true;
      config.scenes = true;
      config.search = true;
      config.tabs = true;
      config.voice = true;
      break;
  case 'web':
      config.ambieye = false;
      config.scenes = true;
      config.search = true;
      config.tabs = true;
      config.voice = true;
      break;
  case 'app':
      config.ambieye = false;
      config.scenes = true;
      config.search = false;
      config.tabs = true;
      config.feedback = false;
      config.voice = false;
      break;
  case 'eye':
      config.ambieye = true;
      config.scenes = false;
      config.search = false;
      config.tabs = true;
      config.voice = false;
      break;
  case 'win':
      config.ambieye = false;
      config.scenes = true;
      config.search = true;
      config.tabs = true;
      config.voice = false;
      break;
 }


'use strict';

/* jshint ignore:start */

(function(){var aa=encodeURIComponent,f=window,ba=setTimeout,n=Math;function Pc(a,b){return a.href=b}function fa(a,b){return a.name=b}
var Qc="replace",q="data",m="match",xc="send",ja="port",u="createElement",id="setAttribute",da="getTime",x="host",A="split",B="location",ra="hasOwnProperty",ma="hostname",ga="search",E="protocol",Ab="href",kd="action",G="apply",p="push",h="hash",s="test",ha="slice",r="cookie",t="indexOf",ia="defaultValue",v="name",y="length",z="prototype",la="clientWidth",jd="target",C="call",na="clientHeight",F="substring",oa="navigator",Ub="parentNode",H="join",I="toLowerCase";var pa=new function(){var a=[];this.set=function(b){a[b]=!0};this.M=function(){for(var b=[],c=0;c<a[y];c++)a[c]&&(b[n.floor(c/6)]=b[n.floor(c/6)]^1<<c%6);for(c=0;c<b[y];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c]||0);return b[H]("")+"~"}};function J(a){pa.set(a)};var ea=function(a){return"function"==typeof a},ka=function(a){return"[object Array]"==Object[z].toString[C](Object(a))},qa=function(a){return void 0!=a&&-1<(a.constructor+"")[t]("String")},D=function(a,b){return 0==a[t](b)},sa=function(a){return a?a[Qc](/^[\s\xa0]+|[\s\xa0]+$/g,""):""},ta=function(a){var b=M[u]("img");b.width=1;b.height=1;b.src=a;return b},ua=function(){},K=function(a){if(aa instanceof Function)return aa(a);J(28);return a},L=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,
c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){J(27)}},va=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},wa=function(a,b){if(a){var c=M[u]("script");c.type="text/javascript";c.async=!0;c.src=a;b&&(c.id=b);var d=M.getElementsByTagName("script")[0];d[Ub].insertBefore(c,d)}},xa=function(){var a=""+M[B][ma];return 0==a[t]("www.")?a[F](4):a},ya=function(a){var b=M.referrer;if(/^https?:\/\//i[s](b)){if(a)return b;a="//"+M[B][ma];var c=
b[t](a);if(5==c||6==c)if(a=b.charAt(c+a[y]),"/"==a||"?"==a||""==a||":"==a)return;return b}},za=function(a,b){if(1==b[y]&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=n.min(a[y]+1,b[y]),e=0;e<d;e++)if("object"===typeof b[e]){for(var g in b[e])b[e][ra](g)&&(c[g]=b[e][g]);break}else e<a[y]&&(c[a[e]]=b[e]);return c};var N=function(){this.keys=[];this.w={};this.m={}};N[z].set=function(a,b,c){this.keys[p](a);c?this.m[":"+a]=b:this.w[":"+a]=b};N[z].get=function(a){return this.m[ra](":"+a)?this.m[":"+a]:this.w[":"+a]};N[z].map=function(a){for(var b=0;b<this.keys[y];b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var O=f,M=document,fb=function(a){ba(a,100)},Mc=function(){for(var a=O[oa].userAgent+(M[r]?M[r]:"")+(M.referrer?M.referrer:""),b=a[y],c=O.history[y];0<c;)a+=c--^b++;return La(a)};var Aa=function(a){var b=O._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===O["ga-disable-"+a])return!0;try{var c=O.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(d){}return!1};var Ca=function(a){var b=[],c=M[r][A](";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c[y];d++){var e=c[d][m](a);e&&b[p](e[1])}return b},zc=function(a,b,c,d,e,g){e=Aa(e)?!1:eb[s](M[B][ma])||"/"==c&&vc[s](d)?!1:!0;if(!e)return!1;b&&1200<b[y]&&(b=b[F](0,1200),J(24));c=a+"="+b+"; path="+c+"; ";g&&(c+="expires="+(new Date((new Date)[da]()+g)).toGMTString()+"; ");d&&"none"!=d&&(c+="domain="+d+";");d=M[r];M.cookie=c;if(!(d=d!=M[r]))t:{a=Ca(a);for(d=0;d<a[y];d++)if(b==a[d]){d=!0;break t}d=!1}return d},
Cc=function(a){return K(a)[Qc](/\(/g,"%28")[Qc](/\)/g,"%29")},vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc=function(){return(Ba||"https:"==M[B][E]?"https:":"http:")+"//www.google-analytics.com"},Da=function(a){fa(this,"len");this.message=a+"-8192"},Ea=function(a){fa(this,"ff2post");this.message=a+"-2036"},Ga=function(a,b,c,d){c=c||ua;d&&(d=c,O[oa].sendBeacon?O[oa].sendBeacon(a,b)?(d(),d=!0):d=!1:d=!1);if(!d)if(2036>=b[y])wc(a,b,c);else if(8192>=b[y]){if(0<=O[oa].userAgent[t]("Firefox")&&![].reduce)throw new Ea(b[y]);wd(a,b,c)||xd(a,b,c)||Fa(b,c)||c()}else throw new Da(b[y]);},wc=function(a,b,c){var d=
ta(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},xd=function(a,b,c){var d;d=O.XDomainRequest;if(!d)return!1;d=new d;d.open("POST",a);d.onerror=function(){c()};d.onload=c;d[xc](b);return!0},wd=function(a,b,c){var d=O.XMLHttpRequest;if(!d)return!1;var e=new d;if(!("withCredentials"in e))return!1;e.open("POST",a,!0);e.withCredentials=!0;e.setRequestHeader("Content-Type","text/plain");e.onreadystatechange=function(){4==e.readyState&&(c(),e=null)};e[xc](b);return!0},Fa=function(a,
b){if(!M.body)return fb(function(){Fa(a,b)}),!0;a=aa(a);try{var c=M[u]('<iframe name="'+a+'"></iframe>')}catch(d){c=M[u]("iframe"),fa(c,a)}c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var e=M[B],e=oc()+"/analytics_iframe.html#"+aa(e[E]+"//"+e[x]+"/favicon.ico"),g=function(){c.src="";c[Ub]&&c[Ub].removeChild(c)};L(O,"beforeunload",g);var ca=!1,l=0,k=function(){if(!ca){try{if(9<l||c.contentWindow[B][x]==M[B][x]){ca=!0;g();va(O,"beforeunload",g);b();return}}catch(a){}l++;
ba(k,200)}};L(c,"load",k);M.body.appendChild(c);c.src=e;return!0};var Ha=function(){this.t=[]};Ha[z].add=function(a){this.t[p](a)};Ha[z].D=function(a){try{for(var b=0;b<this.t[y];b++){var c=a.get(this.t[b]);c&&ea(c)&&c[C](O,a)}}catch(d){}b=a.get(Ia);b!=ua&&ea(b)&&(a.set(Ia,ua,!0),ba(b,10))};function Ja(a){if(100!=a.get(Ka)&&La(P(a,Q))%1E4>=100*R(a,Ka))throw"abort";}function Ma(a){if(Aa(P(a,Na)))throw"abort";}function Oa(){var a=M[B][E];if("http:"!=a&&"https:"!=a)throw"abort";}
function Pa(a){try{O.XMLHttpRequest&&"withCredentials"in new O.XMLHttpRequest?J(40):O.XDomainRequest&&J(41),O[oa].sendBeacon&&J(42)}catch(b){}a.set(Ac,R(a,Ac)+1);var c=[];Qa.map(function(b,e){if(e.p){var g=a.get(b);void 0!=g&&g!=e[ia]&&("boolean"==typeof g&&(g*=1),c[p](e.p+"="+K(""+g)))}});c[p]("z="+Bd());a.set(Ra,c[H]("&"),!0)}function Sa(a){var b=P(a,gd)||oc()+"/collect";Ga(b,P(a,Ra),a.get(Ia),a.get(Vd));a.set(Ia,ua,!0)}
function Hc(a){var b=O.gaData;b&&(b.expId&&a.set(Nc,b.expId),b.expVar&&a.set(Oc,b.expVar))}function cd(){if(O[oa]&&"preview"==O[oa].loadPurpose)throw"abort";}function yd(a){var b=O.gaDevIds;ka(b)&&0!=b[y]&&a.set("&did",b[H](","),!0)}function vb(a){if(!a.get(Na))throw"abort";};var hd=function(){return n.round(2147483647*n.random())},Bd=function(){try{var a=new Uint32Array(1);O.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return hd()}};function Ta(a){var b=R(a,Ua);500<=b&&J(15);var c=P(a,Va);if("transaction"!=c&&"item"!=c){var c=R(a,Wa),d=(new Date)[da](),e=R(a,Xa);0==e&&a.set(Xa,d);e=n.round(2*(d-e)/1E3);0<e&&(c=n.min(c+e,20),a.set(Xa,d));if(0>=c)throw"abort";a.set(Wa,--c)}a.set(Ua,++b)};var Ya=function(){this.data=new N},Qa=new N,Za=[];Ya[z].get=function(a){var b=$a(a),c=this[q].get(a);b&&void 0==c&&(c=ea(b[ia])?b[ia]():b[ia]);return b&&b.n?b.n(this,a,c):c};var P=function(a,b){var c=a.get(b);return void 0==c?"":""+c},R=function(a,b){var c=a.get(b);return void 0==c||""===c?0:1*c};Ya[z].set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a[ra](d)&&ab(this,d,a[d],c);else ab(this,a,b,c)};
var ab=function(a,b,c,d){if(void 0!=c)switch(b){case Na:wb[s](c)}var e=$a(b);e&&e.o?e.o(a,b,c,d):a[q].set(b,c,d)},bb=function(a,b,c,d,e){fa(this,a);this.p=b;this.n=d;this.o=e;this.defaultValue=c},$a=function(a){var b=Qa.get(a);if(!b)for(var c=0;c<Za[y];c++){var d=Za[c],e=d[0].exec(a);if(e){b=d[1](e);Qa.set(b[v],b);break}}return b},yc=function(a){var b;Qa.map(function(c,d){d.p==a&&(b=d)});return b&&b[v]},S=function(a,b,c,d,e){a=new bb(a,b,c,d,e);Qa.set(a[v],a);return a[v]},cb=function(a,b){Za[p]([new RegExp("^"+
a+"$"),b])},T=function(a,b,c){return S(a,b,c,void 0,db)},db=function(){};var gb=qa(f.GoogleAnalyticsObject)&&sa(f.GoogleAnalyticsObject)||"ga",Ba=!1,hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");var Vd=S("useBeacon",void 0,!1);S("dataSource","ds");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");S("screenName","cd");
var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",function(){return M.title||void 0});cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");S("campaignMedium","cm");
S("campaignKeyword","ck");S("campaignContent","cc");var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");S("appName","an");
S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",function(a){return new bb(a[0],"cm"+a[1])});S("linkerParam",void 0,void 0,Bc,db);
var ld=S("usage","_u",void 0,function(){return pa.M()},db);S("forceSSL",void 0,void 0,function(){return Ba},function(a,b,c){J(34);Ba=!!c});var ed=S("_j1","jid"),Hd=S("_j2","gjid");cb("\\&(.*)",function(a){var b=new bb(a[0],a[1]),c=yc(a[0][F](1));c&&(b.n=function(a){return a.get(c)},b.o=function(a,b,g,ca){a.set(c,g,ca)},b.p=void 0);return b});
var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=T("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),V=T("name"),Q=T("clientId","cid"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),$b=T("legacyCookieDomain"),
Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),gd=S("transportUrl"),Md=S("_r","_r");
function X(a,b,c,d){b[a]=function(){try{return d&&J(d),c[G](this,arguments)}catch(b){var g=b&&b[v];if(!(1<=100*n.random()||Aa("?"))){var ca=["t=error","_e=exc","_v=j31","sr=1"];a&&ca[p]("_f="+a);g&&ca[p]("_m="+K(g[F](0,100)));ca[p]("aip=1");ca[p]("z="+hd());Ga(oc()+"/collect",ca[H]("&"))}throw b;}}};var Od=function(){this.V=1E4;this.fa=void 0;this.$=!1;this.ea=1},Ed=function(){var a=new Od,b;if(a.fa&&a.$)return 0;a.$=!0;if(0==a.V)return 0;void 0===b&&(b=Bd());return 0==b%a.V?n.floor(b/a.V)%a.ea+1:0};function fc(){var a,b,c;if((c=(c=O[oa])?c.plugins:null)&&c[y])for(var d=0;d<c[y]&&!b;d++){var e=c[d];-1<e[v][t]("Shockwave Flash")&&(b=e.description)}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),b=a.GetVariable("$version")}catch(g){}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),b="WIN 6,0,21,0",a.AllowScriptAccess="always",b=a.GetVariable("$version")}catch(ca){}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),b=a.GetVariable("$version")}catch(l){}b&&
(a=b[m](/[\d]+/g))&&3<=a[y]&&(b=a[0]+"."+a[1]+" r"+a[2]);return b||void 0};var gc=function(a,b){var c=n.min(R(a,dc),100);if(!(La(P(a,Q))%100>=c)&&(c={},Ec(c)||Fc(c))){var d=c[Eb];void 0==d||Infinity==d||isNaN(d)||(0<d?(Y(c,Gb),Y(c,Jb),Y(c,Ib),Y(c,Fb),Y(c,Hb),Y(c,Kb),Y(c,Lb),b(c)):L(O,"load",function(){gc(a,b)},!1))}},Ec=function(a){var b=O.performance||O.webkitPerformance,b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;a[Jb]=b.connectEnd-b.connectStart;a[Ib]=b.responseStart-b.requestStart;
a[Fb]=b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;return!0},Fc=function(a){if(O.top!=O)return!1;var b=O.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();if(void 0==c)return!1;a[Eb]=c;return!0},Y=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},Fd=function(a){return function(b){"pageview"!=b.get(Va)||a.I||(a.I=!0,gc(b,function(b){a[xc]("timing",b)}))}};var hc=!1,mc=function(a){if("cookie"==P(a,ac)){var b=P(a,U),c=nd(a),d=kc(P(a,Yb)),e=lc(P(a,W)),g=1E3*R(a,Zb),ca=P(a,Na);if("auto"!=e)zc(b,c,d,e,ca,g)&&(hc=!0);else{J(32);var l;t:{c=[];e=xa()[A](".");if(4==e[y]&&(l=e[e[y]-1],parseInt(l,10)==l)){l=["none"];break t}for(l=e[y]-2;0<=l;l--)c[p](e[ha](l)[H]("."));c[p]("none");l=c}for(var k=0;k<l[y];k++)if(e=l[k],a[q].set(W,e),c=nd(a),zc(b,c,d,e,ca,g)){hc=!0;return}a[q].set(W,"auto")}}},nc=function(a){if("cookie"==P(a,ac)&&!hc&&(mc(a),!hc))throw"abort";},
Yc=function(a){if(a.get(Wc)){var b=P(a,W),c=P(a,$b)||xa(),d=Xc("__utma",c,b);d&&(J(19),a.set(Tc,(new Date)[da](),!0),a.set(Rc,d.R),(b=Xc("__utmz",c,b))&&d[h]==b[h]&&a.set(Sc,b.R))}},nd=function(a){var b=Cc(P(a,Q)),c=ic(P(a,W));a=jc(P(a,Yb));1<a&&(c+="-"+a);return["GA1",c,b][H](".")},Gc=function(a,b,c){for(var d=[],e=[],g,ca=0;ca<a[y];ca++){var l=a[ca];if(l.r[c]==b)d[p](l);else void 0==g||l.r[c]<g?(e=[l],g=l.r[c]):l.r[c]==g&&e[p](l)}return 0<d[y]?d:e},lc=function(a){return 0==a[t](".")?a.substr(1):
a},ic=function(a){return lc(a)[A](".")[y]},kc=function(a){if(!a)return"/";1<a[y]&&a.lastIndexOf("/")==a[y]-1&&(a=a.substr(0,a[y]-1));0!=a[t]("/")&&(a="/"+a);return a},jc=function(a){a=kc(a);return"/"==a?1:a[A]("/")[y]};function Xc(a,b,c){"none"==b&&(b="");var d=[],e=Ca(a);a="__utma"==a?6:2;for(var g=0;g<e[y];g++){var ca=(""+e[g])[A](".");ca[y]>=a&&d[p]({hash:ca[0],R:e[g],O:ca})}return 0==d[y]?void 0:1==d[y]?d[0]:Zc(b,d)||Zc(c,d)||Zc(null,d)||d[0]}function Zc(a,b){var c,d;null==a?c=d=1:(c=La(a),d=La(D(a,".")?a[F](1):"."+a));for(var e=0;e<b[y];e++)if(b[e][h]==c||b[e][h]==d)return b[e]};var od=new RegExp(/^https?:\/\/([^\/:]+)/),pd=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;function Bc(a){a=a.get(Q);var b=Ic(a,0);return"_ga=1."+K(b+"."+a)}function Ic(a,b){for(var c=new Date,d=O[oa],e=d.plugins||[],c=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b],d=0;d<e[y];++d)c[p](e[d].description);return La(c[H]("."))}var Dc=function(a){J(48);this.target=a;this.T=!1};
Dc[z].Q=function(a,b){if(a.tagName){if("a"==a.tagName[I]()){a[Ab]&&Pc(a,qd(this,a[Ab],b));return}if("form"==a.tagName[I]())return rd(this,a)}if("string"==typeof a)return qd(this,a,b)};
var qd=function(a,b,c){var d=pd.exec(b);d&&3<=d[y]&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a[jd].get("linkerParam");var e=b[t]("?"),d=b[t]("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b[F](0,d)+c+a+b[F](d));return b},rd=function(a,b){if(b&&b[kd]){var c=a[jd].get("linkerParam")[A]("=")[1];if("get"==b.method[I]()){for(var d=b.childNodes||[],e=0;e<d[y];e++)if("_ga"==d[e][v]){d[e][id]("value",c);return}d=M[u]("input");d[id]("type","hidden");d[id]("name","_ga");d[id]("value",c);b.appendChild(d)}else"post"==
b.method[I]()&&(b.action=qd(a,b[kd]))}};
Dc[z].S=function(a,b,c){function d(c){try{c=c||O.event;var d;t:{var g=c[jd]||c.srcElement;for(c=100;g&&0<c;){if(g[Ab]&&g.nodeName[m](/^a(?:rea)?$/i)){d=g;break t}g=g[Ub];c--}d={}}("http:"==d[E]||"https:"==d[E])&&sd(a,d[ma]||"")&&d[Ab]&&Pc(d,qd(e,d[Ab],b))}catch(w){J(26)}}var e=this;this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"touchstart",d,!1),L(M,"keyup",d,!1));if(c){c=function(b){b=b||O.event;if((b=b[jd]||b.srcElement)&&b[kd]){var c=b[kd][m](od);c&&sd(a,c[1])&&rd(e,b)}};for(var g=0;g<M.forms[y];g++)L(M.forms[g],
"submit",c)}};function sd(a,b){if(b==M[B][ma])return!1;for(var c=0;c<a[y];c++)if(a[c]instanceof RegExp){if(a[c][s](b))return!0}else if(0<=b[t](a[c]))return!0;return!1};var Jd=function(a,b,c,d){this.U=b;this.aa=c;(b=d)||(b=(b=P(a,V))&&"t0"!=b?Wd[s](b)?"_gat_"+Cc(P(a,Na)):"_gat_"+Cc(b):"_gat");this.Y=b},Rd=function(a,b){var c=b.get(Wb);b.set(Wb,function(b){Pd(a,b);var d=c(b);Qd(a,b);return d});var d=b.get(Xb);b.set(Xb,function(b){var c=d(b);Id(a,b);return c})},Pd=function(a,b){b.get(a.U)||("1"==Ca(a.Y)[0]?b.set(a.U,"",!0):b.set(a.U,""+hd(),!0))},Qd=function(a,b){b.get(a.U)&&zc(a.Y,"1",b.get(Yb),b.get(W),b.get(Na),6E5)},Id=function(a,b){if(b.get(a.U)){var c=new N,
d=function(a){c.set($a(a).p,b.get(a))};d(hb);d(ib);d(Na);d(Q);d(a.U);d(ld);var e=a.aa;c.map(function(a,b){e+=K(a)+"=";e+=K(""+b)+"&"});e+="z="+hd();ta(e);b.set(a.U,"",!0)}},Wd=/^gtm\d+$/;var fd=function(a,b){var c=a.b;if(!c.get("dcLoaded")){J(29);O._gaq&&J(52);b=b||{};var d;b[U]&&(d=Cc(b[U]));d=new Jd(c,ed,"https://stats.g.doubleclick.net/collect?t=dc&aip=1&",d);Rd(d,c);c.set("dcLoaded",!0)}};var Sd=function(a){var b;b=a.get("dcLoaded")?!1:"cookie"!=a.get(ac)?!1:!0;b&&(J(51),b=new Jd(a,ed),Pd(b,a),Qd(b,a),a.get(b.U)&&(a.set(Md,1,!0),a.set(gd,oc()+"/r/collect",!0)))};var Kd=function(a,b){var c=a.b;if(!c.get("_rlsaLoaded")){J(38);b=b||{};if(b[U])var d=Cc(b[U]);d=new Jd(c,Hd,"https://www.google.com/ads/ga-audiences?t=sr&aip=1&",d);Rd(d,c);c.set("_rlsaLoaded",!0);tc("displayfeatures",a,b)}};var Lc=function(){var a=O.gaGlobal=O.gaGlobal||{};return a.hid=a.hid||hd()};var ad,bd=function(a,b,c){if(!ad){var d;d=M[B][h];var e=O[v],g=/^#?gaso=([^&]*)/;if(e=(d=(d=d&&d[m](g)||e&&e[m](g))?d[1]:Ca("GASO")[0]||"")&&d[m](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))zc("GASO",""+d,c,b,a,0),f._udo||(f._udo=b),f._utcp||(f._utcp=c),a=e[1],wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+hd(),"_gasojs");ad=!0}};var wb=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){function b(a,b){d.b[q].set(a,b)}function c(a,c){b(a,c);d.filters.add(a)}var d=this;this.b=new Ya;this.filters=new Ha;b(V,a[V]);b(Na,sa(a[Na]));b(U,a[U]);b(W,a[W]||xa());b(Yb,a[Yb]);b(Zb,a[Zb]);b($b,a[$b]);b(Wc,a[Wc]);b(bc,a[bc]);b(cc,a[cc]);b(Ka,a[Ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(Ad,a[Ad]);b(hb,1);b(ib,"j31");c(Qb,Ma);c(dd,cd);c(Rb,Oa);c(md,vb);c(Sb,nc);c(Uc,Yc);c(Tb,Ja);c(Vb,Ta);c(Vc,Hc);c(zd,yd);c(Ld,Sd);c(Wb,Pa);c(Xb,Sa);c(Cd,Fd(this));
Jc(this.b,a[Q]);Kc(this.b);this.b.set(jb,Lc());bd(this.b.get(Na),this.b.get(W),this.b.get(Yb))},Jc=function(a,b){if("cookie"==P(a,ac)){hc=!1;var c;i:{var d=Ca(P(a,U));if(d&&!(1>d[y])){c=[];for(var e=0;e<d[y];e++){var g;g=d[e][A](".");var ca=g.shift();("GA1"==ca||"1"==ca)&&1<g[y]?(ca=g.shift()[A]("-"),1==ca[y]&&(ca[1]="1"),ca[0]*=1,ca[1]*=1,g={r:ca,s:g[H](".")}):g=void 0;g&&c[p](g)}if(1==c[y]){J(13);c=c[0].s;break i}if(0==c[y])J(12);else{J(14);d=ic(P(a,W));c=Gc(c,d,0);if(1==c[y]){c=c[0].s;break i}d=
jc(P(a,Yb));c=Gc(c,d,1);c=c[0]&&c[0].s;break i}}c=void 0}c||(c=P(a,W),d=P(a,$b)||xa(),c=Xc("__utma",d,c),(c=void 0==c?void 0:c.O[1]+"."+c.O[2])&&J(10));c&&(a[q].set(Q,c),hc=!0)}c=a.get(cc);if(e=(c=M[B][c?"href":"search"][m]("(?:&|#|\\?)"+K("_ga")[Qc](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==c[y]?c[1]:"")a.get(bc)?(c=e[t]("."),-1==c?J(22):(d=e[F](c+1),"1"!=e[F](0,c)?J(22):(c=d[t]("."),-1==c?J(22):(e=d[F](0,c),c=d[F](c+1),e!=Ic(c,0)&&e!=Ic(c,-1)&&e!=Ic(c,-2)?J(23):(J(11),a[q].set(Q,c)))))):
J(21);b&&(J(9),a[q].set(Q,K(b)));a.get(Q)||((c=(c=O.gaGlobal&&O.gaGlobal.vid)&&-1!=c[ga](/^(?:utma\.)?\d+\.\d+$/)?c:void 0)?(J(17),a[q].set(Q,c)):(J(8),a[q].set(Q,[hd()^Mc()&2147483647,n.round((new Date)[da]()/1E3)][H]("."))));mc(a)},Kc=function(a){var b=O[oa],c=O.screen,d=M[B];a.set(lb,ya(a.get(ec)));if(d){var e=d.pathname||"";"/"!=e.charAt(0)&&(J(31),e="/"+e);a.set(kb,d[E]+"//"+d[ma]+e+d[ga])}c&&a.set(qb,c.width+"x"+c.height);c&&a.set(pb,c.colorDepth+"-bit");var c=M.documentElement,g=(e=M.body)&&
e[la]&&e[na],ca=[];c&&c[la]&&c[na]&&("CSS1Compat"===M.compatMode||!g)?ca=[c[la],c[na]]:g&&(ca=[e[la],e[na]]);c=0>=ca[0]||0>=ca[1]?"":ca[H]("x");a.set(rb,c);a.set(tb,fc());a.set(ob,M.characterSet||M.charset);a.set(sb,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||!1);a.set(nb,(b&&(b.language||b.browserLanguage)||"")[I]());if(d&&a.get(cc)&&(b=M[B][h])){b=b[A](/[?&#]+/);d=[];for(c=0;c<b[y];++c)(D(b[c],"utm_id")||D(b[c],"utm_campaign")||D(b[c],"utm_source")||D(b[c],"utm_medium")||D(b[c],"utm_term")||
D(b[c],"utm_content")||D(b[c],"gclid")||D(b[c],"dclid")||D(b[c],"gclsrc"))&&d[p](b[c]);0<d[y]&&(b="#"+d[H]("&"),a.set(kb,a.get(kb)+b))}};pc[z].get=function(a){return this.b.get(a)};pc[z].set=function(a,b){this.b.set(a,b)};var qc={pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};
pc[z].send=function(a){if(!(1>arguments[y])){var b,c;"string"===typeof arguments[0]?(b=arguments[0],c=[][ha][C](arguments,1)):(b=arguments[0]&&arguments[0][Va],c=arguments);b&&(c=za(qc[b]||[],c),c[Va]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b[q].m={},J(44))}};var rc=function(a){if("prerender"==M.visibilityState)return!1;a();return!0};var td=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=function(a){if(ea(a[0]))this.u=a[0];else{var b=td.exec(a[0]);null!=b&&4==b[y]&&(this.c=b[1]||"t0",this.e=b[2]||"",this.d=b[3],this.a=[][ha][C](a,1),this.e||(this.A="create"==this.d,this.i="require"==this.d,this.g="provide"==this.d,this.ba="remove"==this.d),this.i&&(3<=this.a[y]?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(qa(this.a[1])?this.X=this.a[1]:this.W=this.a[1])));b=a[1];a=a[2];if(!this.d)throw"abort";if(this.i&&(!qa(b)||""==b))throw"abort";if(this.g&&
(!qa(b)||""==b||!ea(a)))throw"abort";if(ud(this.c)||ud(this.e))throw"abort";if(this.g&&"t0"!=this.c)throw"abort";}};function ud(a){return 0<=a[t](".")||0<=a[t](":")};var Yd,Zd,$d;Yd=new N;$d=new N;Zd={ec:45,ecommerce:46,linkid:47};
var tc=function(a,b,c){b==$?J(35):b.get(V);var d=Yd.get(a);if(!ea(d))return!1;b.plugins_=b.plugins_||new N;if(b.plugins_.get(a))return!0;b.plugins_.set(a,new d(b,c||{}));return!0},ae=function(a){function b(a){var b=(a[ma]||"")[A](":")[0][I](),c=(a[E]||"")[I](),c=1*a[ja]||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";D(a,"/")||(a="/"+a);return[b,""+c,a]}var c=M[u]("a");Pc(c,M[B][Ab]);var d=(c[E]||"")[I](),e=b(c),g=c[ga]||"",ca=d+"//"+e[0]+(e[1]?":"+e[1]:"");D(a,"//")?a=d+a:D(a,"/")?a=ca+a:!a||
D(a,"?")?a=ca+e[2]+(a||g):0>a[A]("/")[0][t](":")&&(a=ca+e[2][F](0,e[2].lastIndexOf("/"))+"/"+a);Pc(c,a);d=b(c);return{protocol:(c[E]||"")[I](),host:d[0],port:d[1],path:d[2],G:c[ga]||"",url:a||""}};var Z={ga:function(){Z.f=[]}};Z.ga();Z.D=function(a){var b=Z.J[G](Z,arguments),b=Z.f.concat(b);for(Z.f=[];0<b[y]&&!Z.v(b[0])&&!(b.shift(),0<Z.f[y]););Z.f=Z.f.concat(b)};
Z.J=function(a){for(var b=[],c=0;c<arguments[y];c++)try{var d=new sc(arguments[c]);if(d.g)Yd.set(d.a[0],d.a[1]);else{if(d.i){var e=d,g=e.a[0];if(!ea(Yd.get(g))&&!$d.get(g)){Zd[ra](g)&&J(Zd[g]);var ca=e.X;!ca&&Zd[ra](g)?(J(39),ca=g+".js"):J(43);if(ca){ca&&0<=ca[t]("/")||(ca=(Ba||"https:"==M[B][E]?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+ca);var l=ae(ca),e=void 0;var k=l[E],w=M[B][E],e="https:"==k||k==w?!0:"http:"!=k?!1:"http:"==w;var Xd;if(Xd=e){var e=l,be=ae(M[B][Ab]);if(e.G||0<=
e.url[t]("?")||0<=e.path[t]("://"))Xd=!1;else if(e[x]==be[x]&&e[ja]==be[ja])Xd=!0;else{var ce="http:"==e[E]?80:443;Xd="www.google-analytics.com"==e[x]&&(e[ja]||ce)==ce&&D(e.path,"/plugins/")?!0:!1}}Xd&&(wa(l.url),$d.set(g,!0))}}}b[p](d)}}catch(de){}return b};
Z.v=function(a){try{if(a.u)a.u[C](O,$.j("t0"));else{var b=a.c==gb?$:$.j(a.c);if(a.A)"t0"==a.c&&$.create[G]($,a.a);else if(a.ba)$.remove(a.c);else if(b)if(a.i){if(!tc(a.a[0],b,a.W))return!0}else if(a.e){var c=a.d,d=a.a,e=b.plugins_.get(a.e);e[c][G](e,d)}else b[a.d][G](b,a.a)}}catch(g){}};var $=function(a){J(1);Z.D[G](Z,[arguments])};$.h={};$.P=[];$.L=0;$.answer=42;var uc=[Na,W,V];$.create=function(a){var b=za(uc,[][ha][C](arguments));b[V]||(b[V]="t0");var c=""+b[V];if($.h[c])return $.h[c];b=new pc(b);$.h[c]=b;$.P[p](b);return b};$.remove=function(a){for(var b=0;b<$.P[y];b++)if($.P[b].get(V)==a){$.P.splice(b,1);$.h[a]=null;break}};$.j=function(a){return $.h[a]};$.K=function(){return $.P[ha](0)};
$.N=function(){"ga"!=gb&&J(49);var a=O[gb];if(!a||42!=a.answer){$.L=a&&a.l;$.loaded=!0;var b=O[gb]=$;X("create",b,b.create,3);X("remove",b,b.remove);X("getByName",b,b.j,5);X("getAll",b,b.K,6);b=pc[z];X("get",b,b.get,7);X("set",b,b.set,4);X("send",b,b[xc],2);b=Ya[z];X("get",b,b.get);X("set",b,b.set);t:for(var b=M.getElementsByTagName("script"),c=0;c<b[y]&&100>c;c++){var d;d=(d=b[c].src)?0!=d[t]("https://www.google-analytics.com/analytics")?!1:!0:!1;if(d){J(33);break t}}"https:"!=M[B][E]&&!Ba&&Ed()&&
(J(36),Ba=!0);(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc[z];Yd.set("linker",Dc);X("decorate",b,b.Q,20);X("autoLink",b,b.S,25);Yd.set("displayfeatures",fd);Yd.set("adfeatures",Kd);a=a&&a.q;ka(a)?Z.D[G]($,a):J(50)}};$.k=function(){for(var a=$.K(),b=0;b<a[y];b++)a[b].get(V)};(function(){var a=$.N;if(!rc(a)){J(16);var b=!1,c=function(){!b&&rc(a)&&(b=!0,va(M,"visibilitychange",c))};L(M,"visibilitychange",c)}})();function La(a){var b=1,c=0,d;if(a)for(b=0,d=a[y]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};})(window);

//mix panel


	(function(f,b){
	  if(!b.__SV){var a,e,i,g;
	  window.mixpanel=b;b._i=[];
	  b.init=function(a,e,d){
	    function f(b,h){
	      var a=h.split(".");
	      2==a.length&&(b=b[a[0]],h=a[1]);
	  b[h]=function(){
	    b.push([h].concat(Array.prototype.slice.call(arguments,0)))}
	  }
	  var c=b;
	  "undefined"!==typeof d?c=b[d]=[]:d="mixpanel";
	  c.people=c.people||[];
	  c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");
	  return a
	};
	c.people.toString=function(){
	  return c.toString(1)+".people (stub)"};
	  i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
	for(g=0;g<i.length;g++) f(c,i[g]);
	  b._i.push([a,e,d])};
	  b.__SV=1.2;
	  a=f.createElement("script");
	  a.type="text/javascript";a.async=!0;
	  a.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
	  e=f.getElementsByTagName("script")[0];
	  //e.parentNode.insertBefore(a,e)
	}})(document,window.mixpanel||[]);
	
if (config.app === 'app') {

	(function() {
	var n=!0,p=null,s=!1;function C(){return function(){}}
	(function(r){function o(){}function i(){}function F(a,b,e){var f,d="mixpanel"===e?r:r[e];if(d&&!c.isArray(d))q.error("You have already initialized "+e);else return f=new i,f.Fa(a,b,e),f.people=new o,f.people.Fa(f),w=w||f.d("debug"),c.h(d)||(f.Da.call(f.people,d.people),f.Da(d)),f}function m(a){this.props={};this.kb=s;this.name=a.cookie_name?"mp_"+a.cookie_name:"mp_"+a.token+"_mixpanel";this.load();this.Kb(a);this.Qc(a);this.save()}function G(){this.Ab="submit"}function A(){this.Ab="click"}function v(){}
	function x(){if(!x.tc)K=x.tc=n,L=s,c.a(y,function(a){a.Wb()})}var J=Array.prototype,N=Function.prototype,z=Object.prototype,B=J.slice,D=z.toString,H=z.hasOwnProperty,u=window.console,E=window.navigator,k=window.document,t=E.userAgent,O="__mps,__mpso,__mpa,__mpap,$people_distinct_id,__alias,__cmpns".split(","),z=r&&r.__SV||0,I=window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,L=!I&&-1==t.indexOf("MSIE")&&-1==t.indexOf("Mozilla"),c={},w=s,P={api_host:("https:"==k.location.protocol?"https://":
	"http://")+"api.mixpanel.com",cross_subdomain_cookie:n,cookie_name:"",loaded:C(),store_google:n,save_referrer:n,test:s,verbose:s,img:s,track_pageview:n,debug:s,track_links_timeout:300,cookie_expiration:365,upgrade:s,disable_cookie:s,secure_cookie:s,ip:n},K=s;(function(){var a=N.bind,b=J.forEach,e=J.indexOf,f=Array.isArray,d={};c.bind=function(b,e){var d,f;if(a&&b.bind===a)return a.apply(b,B.call(arguments,1));if(!c.wb(b))throw new TypeError;d=B.call(arguments,2);return f=function(){if(!(this instanceof
	f))return b.apply(e,d.concat(B.call(arguments)));ctor.prototype=b.prototype;var a=new ctor;ctor.prototype=p;var c=b.apply(a,d.concat(B.call(arguments)));return Object(c)===c?c:a}};c.ic=function(a){for(var b in a)"function"===typeof a[b]&&(a[b]=c.bind(a[b],a))};var l=c.a=function(a,e,c){if(a!=p)if(b&&a.forEach===b)a.forEach(e,c);else if(a.length===+a.length)for(var f=0,l=a.length;f<l&&!(f in a&&e.call(c,a[f],f,a)===d);f++);else for(f in a)if(H.call(a,f)&&e.call(c,a[f],f,a)===d)break};c.p=function(a){a&&
	c.Ua(a)&&(a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"));return a};c.extend=function(a){l(B.call(arguments,1),function(b){for(var e in b)void 0!==b[e]&&(a[e]=b[e])});return a};c.isArray=f||function(a){return"[object Array]"===D.call(a)};c.wb=function(a){try{return/^\s*\bfunction\b/.test(a)}catch(b){return s}};c.xc=function(a){return!(!a||!H.call(a,"callee"))};c.$=function(a){return!a?[]:a.$?a.$():c.isArray(a)||c.xc(a)?B.call(a):c.Sc(a)};
	c.Sc=function(a){var b=[];if(a==p)return b;l(a,function(a){b[b.length]=a});return b};c.Wc=function(a){return a};c.sb=function(a,b){var c=s;if(a==p)return c;if(e&&a.indexOf===e)return-1!=a.indexOf(b);l(a,function(a){if(c||(c=a===b))return d});return c};c.o=function(a,b){return-1!==a.indexOf(b)}})();c.ub=function(a,b){a.prototype=new b;a.Lc=b.prototype};c.j=function(a){return a===Object(a)&&!c.isArray(a)};c.W=function(a){if(c.j(a)){for(var b in a)if(H.call(a,b))return s;return n}return s};c.h=function(a){return void 0===
	a};c.Ua=function(a){return"[object String]"==D.call(a)};c.yc=function(a){return"[object Date]"==D.call(a)};c.zc=function(a){return"[object Number]"==D.call(a)};c.ob=function(a){c.a(a,function(b,e){c.yc(b)?a[e]=c.uc(b):c.j(b)&&(a[e]=c.ob(b))});return a};c.uc=function(a){function b(a){return 10>a?"0"+a:a}return a.getUTCFullYear()+"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())};c.s=function(a){return function(){try{a.apply(this,
	arguments)}catch(b){q.na("Implementation error. Please contact support@mixpanel.com.")}}};c.Cb=function(a,b){for(var e=0;e<b.length;e++)a.prototype[b[e]]=c.s(a.prototype[b[e]])};c.ra=function(a){var b={};c.a(a,function(a,f){c.Ua(a)&&0<a.length&&(b[f]=a)});return b};c.truncate=function(a,b){var e;"string"===typeof a?e=a.slice(0,b):c.isArray(a)?(e=[],c.a(a,function(a){e.push(c.truncate(a,b))})):c.j(a)?(e={},c.a(a,function(a,d){e[d]=c.truncate(a,b)})):e=a;return e};c.ca=function(){return function(a){function b(a,
	c){var l="",j=0,h=j="",h=0,g=l,i=[],k=c[a];k&&"object"===typeof k&&"function"===typeof k.toJSON&&(k=k.toJSON(a));switch(typeof k){case "string":return e(k);case "number":return isFinite(k)?""+k:"null";case "boolean":case "null":return""+k;case "object":if(!k)return"null";l+="    ";i=[];if("[object Array]"===D.apply(k)){h=k.length;for(j=0;j<h;j+=1)i[j]=b(j,k)||"null";return h=0===i.length?"[]":l?"[\n"+l+i.join(",\n"+l)+"\n"+g+"]":"["+i.join(",")+"]"}for(j in k)H.call(k,j)&&(h=b(j,k))&&i.push(e(j)+
	(l?": ":":")+h);return h=0===i.length?"{}":l?"{"+i.join(",")+""+g+"}":"{"+i.join(",")+"}"}}function e(a){var b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var b=e[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}return b("",
	{"":a})}}();c.wa=function(){function a(){switch(h){case "t":return d("t"),d("r"),d("u"),d("e"),n;case "f":return d("f"),d("a"),d("l"),d("s"),d("e"),s;case "n":return d("n"),d("u"),d("l"),d("l"),p}l("Unexpected '"+h+"'")}function b(){for(;h&&" ">=h;)d()}function e(){var a,b,e="",c;if('"'===h)for(;d();){if('"'===h)return d(),e;if("\\"===h)if(d(),"u"===h){for(b=c=0;4>b;b+=1){a=parseInt(d(),16);if(!isFinite(a))break;c=16*c+a}e+=String.fromCharCode(c)}else if("string"===typeof g[h])e+=g[h];else break;
	else e+=h}l("Bad string")}function c(){var a;a="";"-"===h&&(a="-",d("-"));for(;"0"<=h&&"9">=h;)a+=h,d();if("."===h)for(a+=".";d()&&"0"<=h&&"9">=h;)a+=h;if("e"===h||"E"===h){a+=h;d();if("-"===h||"+"===h)a+=h,d();for(;"0"<=h&&"9">=h;)a+=h,d()}a=+a;if(isFinite(a))return a;l("Bad number")}function d(a){a&&a!==h&&l("Expected '"+a+"' instead of '"+h+"'");h=i.charAt(j);j+=1;return h}function l(a){throw{name:"SyntaxError",message:a,Vc:j,text:i};}var j,h,g={'"':'"',"\\":"\\","/":"/",b:"\u0008",f:"\u000c",
	n:"\n",r:"\r",t:"\t"},i,k;k=function(){b();switch(h){case "{":var j;a:{var g,i={};if("{"===h){d("{");b();if("}"===h){d("}");j=i;break a}for(;h;){g=e();b();d(":");Object.hasOwnProperty.call(i,g)&&l('Duplicate key "'+g+'"');i[g]=k();b();if("}"===h){d("}");j=i;break a}d(",");b()}}l("Bad object")}return j;case "[":a:{j=[];if("["===h){d("[");b();if("]"===h){d("]");g=j;break a}for(;h;){j.push(k());b();if("]"===h){d("]");g=j;break a}d(",");b()}}l("Bad array")}return g;case '"':return e();case "-":return c();
	default:return"0"<=h&&"9">=h?c():a()}};return function(a){i=a;j=0;h=" ";a=k();b();h&&l("Syntax error");return a}}();c.ib=function(a){var b,e,f,d,l=0,j=0,h="",h=[];if(!a)return a;a=c.Rc(a);do b=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),d=b<<16|e<<8|f,b=d>>18&63,e=d>>12&63,f=d>>6&63,d&=63,h[j++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)+
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);while(l<a.length);h=h.join("");switch(a.length%3){case 1:h=h.slice(0,-2)+"==";break;case 2:h=h.slice(0,-1)+"="}return h};c.Rc=function(a){var a=(a+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n"),b="",e,c,d=0,l;e=c=0;d=a.length;for(l=0;l<d;l++){var j=a.charCodeAt(l),h=p;128>j?c++:h=127<j&&2048>j?String.fromCharCode(j>>6|192,j&63|128):String.fromCharCode(j>>12|224,j>>6&63|128,j&63|128);h!==p&&(c>e&&(b+=a.substring(e,c)),b+=
	h,e=c=l+1)}c>e&&(b+=a.substring(e,a.length));return b};c.Rb=function(){function a(){function a(b,e){var c,d=0;for(c=0;c<e.length;c++)d|=l[c]<<8*c;return b^d}var b,c,l=[],j=0;for(b=0;b<t.length;b++)c=t.charCodeAt(b),l.unshift(c&255),4<=l.length&&(j=a(j,l),l=[]);0<l.length&&(j=a(j,l));return j.toString(16)}function b(){for(var a=1*new Date,b=0;a==1*new Date;)b++;return a.toString(16)+b.toString(16)}return function(){var c=(screen.height*screen.width).toString(16);return b()+"-"+Math.random().toString(16).replace(".",
	"")+"-"+a()+"-"+c+"-"+b()}}();c.vb=function(a){return/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(a)?n:s};c.Qb=function(a){var b,e,f,d=[];"undefined"===typeof b&&(b="&");c.a(a,function(a,b){e=encodeURIComponent(a.toString());f=encodeURIComponent(b);d[d.length]=f+"="+e});return d.join(b)};c.pb=function(a,b){var b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),c=RegExp("[\\?&]"+b+"=([^&#]*)").exec(a);return c===p||c&&"string"!==typeof c[1]&&c[1].length?"":decodeURIComponent(c[1]).replace(/\+/g,
	" ")};c.cookie={get:function(a){for(var a=a+"=",b=k.cookie.split(";"),c=0;c<b.length;c++){for(var f=b[c];" "==f.charAt(0);)f=f.substring(1,f.length);if(0==f.indexOf(a))return decodeURIComponent(f.substring(a.length,f.length))}return p},parse:function(a){var b;try{b=c.wa(c.cookie.get(a))||{}}catch(e){}return b},set:function(a,b,c,f,d){var e;var l="",j="",h="";f&&(e=(l=(l=k.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i))?l[0]:"")?"; domain=."+l:"",l=e);c&&(j=new Date,j.setTime(j.getTime()+
	864E5*c),j="; expires="+j.toGMTString());d&&(h="; secure");k.cookie=a+"="+encodeURIComponent(b)+j+"; path=/"+l+h},remove:function(a,b){c.cookie.set(a,"",-1,b)}};c.N=function(){function a(a,f,d){return function(l){if(l=l||b(window.event)){var j=n,h;c.wb(d)&&(h=d(l));l=f.call(a,l);if(s===h||s===l)j=s;return j}}}function b(a){if(a)a.preventDefault=b.preventDefault,a.stopPropagation=b.stopPropagation;return a}b.preventDefault=function(){this.returnValue=s};b.stopPropagation=function(){this.cancelBubble=
	n};return function(b,c,d,l){b?b.addEventListener&&!l?b.addEventListener(c,d,s):(c="on"+c,b[c]=a(b,d,b[c])):q.error("No valid element provided to register_event")}}();c.sc=function(){function a(a,c){return 0<=(" "+a.className+" ").replace(b," ").indexOf(" "+c+" ")}var b=/[\t\r\n]/g;return function(b){if(!k.getElementsByTagName)return[];for(var b=b.split(" "),f,d=Array(k),l=0;l<b.length;l++)if(f=b[l].replace(/^\s+/,"").replace(/\s+$/,""),-1<f.indexOf("#")){f=f.split("#");var j=f[0],d=k.getElementById(f[1]);
	if(!d||j&&d.nodeName.toLowerCase()!=j)return[];d=Array(d)}else if(-1<f.indexOf(".")){f=f.split(".");var j=f[0],h=f[1];j||(j="*");f=[];for(var g=0,i=0;i<d.length;i++){var m;m="*"==j?d[i].all?d[i].all:d[i].getElementsByTagName("*"):d[i].getElementsByTagName(j);for(var o=0;o<m.length;o++)f[g++]=m[o]}d=[];for(g=j=0;g<f.length;g++)f[g].className&&c.Ua(f[g].className)&&a(f[g],h)&&(d[j++]=f[g])}else if(f.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)){var j=RegExp.$1,q=RegExp.$2,h=RegExp.$3,r=RegExp.$4;
	j||(j="*");f=[];for(i=g=0;i<d.length;i++){m="*"==j?d[i].all?d[i].all:d[i].getElementsByTagName("*"):d[i].getElementsByTagName(j);for(o=0;o<m.length;o++)f[g++]=m[o]}d=[];j=0;switch(h){case "=":h=function(a){return a.getAttribute(q)==r};break;case "~":h=function(a){return a.getAttribute(q).match(RegExp("\\b"+r+"\\b"))};break;case "|":h=function(a){return a.getAttribute(q).match(RegExp("^"+r+"-?"))};break;case "^":h=function(a){return 0==a.getAttribute(q).indexOf(r)};break;case "$":h=function(a){return a.getAttribute(q).lastIndexOf(r)==
	a.getAttribute(q).length-r.length};break;case "*":h=function(a){return-1<a.getAttribute(q).indexOf(r)};break;default:h=function(a){return a.getAttribute(q)}}d=[];for(g=j=0;g<f.length;g++)h(f[g])&&(d[j++]=f[g])}else{j=f;f=[];for(i=g=0;i<d.length;i++){m=d[i].getElementsByTagName(j);for(o=0;o<m.length;o++)f[g++]=m[o]}d=f}return d}}();c.info={lc:function(){var a="",b={};c.a("utm_source utm_medium utm_campaign utm_content utm_term".split(" "),function(e){a=c.pb(k.URL,e);a.length&&(b[e]=a)});return b},
	Ec:function(a){return 0===a.search("https?://(.*)google.([^/?]*)")?"google":0===a.search("https?://(.*)bing.com")?"bing":0===a.search("https?://(.*)yahoo.com")?"yahoo":0===a.search("https?://(.*)duckduckgo.com")?"duckduckgo":p},Fc:function(a){var b=c.info.Ec(a),e={};if(b!==p)e.$search_engine=b,a=c.pb(a,"yahoo"!=b?"q":"p"),a.length&&(e.mp_keyword=a);return e},ka:function(a,b,e){b=b||"";return e?c.o(a,"Mini")?"Opera Mini":"Opera":/(BlackBerry|PlayBook|BB10)/i.test(a)?"BlackBerry":c.o(a,"FBIOS")?"Facebook Mobile":
	c.o(a,"Chrome")?"Chrome":c.o(a,"CriOS")?"Chrome iOS":c.o(b,"Apple")?c.o(a,"Mobile")?"Mobile Safari":"Safari":c.o(a,"Android")?"Android Mobile":c.o(a,"Konqueror")?"Konqueror":c.o(a,"Firefox")?"Firefox":c.o(a,"MSIE")||c.o(a,"Trident/")?"Internet Explorer":c.o(a,"Gecko")?"Mozilla":""},Xa:function(){return/Windows/i.test(t)?/Phone/.test(t)?"Windows Mobile":"Windows":/(iPhone|iPad|iPod)/.test(t)?"iOS":/Android/.test(t)?"Android":/(BlackBerry|PlayBook|BB10)/i.test(t)?"BlackBerry":/Mac/i.test(t)?"Mac OS X":
	/Linux/.test(t)?"Linux":""},nb:function(a){return/iPad/.test(a)?"iPad":/iPod/.test(a)?"iPod Touch":/iPhone/.test(a)?"iPhone":/(BlackBerry|PlayBook|BB10)/i.test(a)?"BlackBerry":/Windows Phone/i.test(a)?"Windows Phone":/Android/.test(a)?"Android":""},Bb:function(a){a=a.split("/");return 3<=a.length?a[2]:""},qa:function(){return c.extend(c.ra({$os:c.info.Xa(),$browser:c.info.ka(t,E.vendor,window.opera),$referrer:k.referrer,$referring_domain:c.info.Bb(k.referrer),$device:c.info.nb(t)}),{$screen_height:screen.height,
	$screen_width:screen.width,mp_lib:"web",$lib_version:"2.3.2"})},Dc:function(){return c.ra({$os:c.info.Xa(),$browser:c.info.ka(t,E.vendor,window.opera)})},Cc:function(a){return c.ra({mp_page:a,mp_referrer:k.referrer,mp_browser:c.info.ka(t,E.vendor,window.opera),mp_platform:c.info.Xa()})}};var q={log:function(){if(w&&!c.h(u)&&u)try{u.log.apply(u,arguments)}catch(a){c.a(arguments,function(a){u.log(a)})}},error:function(){if(w&&!c.h(u)&&u){var a=["Mixpanel error:"].concat(c.$(arguments));try{u.error.apply(u,
	a)}catch(b){c.a(a,function(a){u.error(a)})}}},na:function(){if(!c.h(u)&&u){var a=["Mixpanel error:"].concat(c.$(arguments));try{u.error.apply(u,a)}catch(b){c.a(a,function(a){u.error(a)})}}}};v.prototype.ma=C();v.prototype.Oa=C();v.prototype.Ka=C();v.prototype.Ta=function(a){this.yb=a;return this};v.prototype.P=function(a,b,e,f){var d=this,g=c.sc(a);if(0==g.length)q.error("The DOM query ("+a+") returned 0 elements");else return c.a(g,function(a){c.N(a,this.Ab,function(a){var c={},j=d.ma(e,this),g=
	d.yb.d("track_links_timeout");d.Oa(a,this,c);window.setTimeout(d.Ib(f,j,c,n),g);d.yb.P(b,j,d.Ib(f,j,c))})},this),n};v.prototype.Ib=function(a,b,c,f){var f=f||s,d=this;return function(){if(!c.kc)c.kc=n,a&&a(f,b)===s||d.Ka(b,c,f)}};v.prototype.ma=function(a,b){return"function"===typeof a?a(b):c.extend({},a)};c.ub(A,v);A.prototype.ma=function(a,b){var c=A.Lc.ma.apply(this,arguments);if(b.href)c.url=b.href;return c};A.prototype.Oa=function(a,b,c){c.zb=2===a.which||a.metaKey||"_blank"===b.target;c.href=
	b.href;c.zb||a.preventDefault()};A.prototype.Ka=function(a,b){b.zb||setTimeout(function(){window.location=b.href},0)};c.ub(G,v);G.prototype.Oa=function(a,b,c){c.element=b;a.preventDefault()};G.prototype.Ka=function(a,b){setTimeout(function(){b.element.submit()},0)};m.prototype.qa=function(){var a={};c.a(this.props,function(b,e){c.sb(O,e)||(a[e]=b)});return a};m.prototype.load=function(){if(!this.disabled){var a=c.cookie.parse(this.name);a&&(this.props=c.extend({},a))}};m.prototype.Qc=function(a){var b=
	a.upgrade,e;if(b)e="mp_super_properties","string"===typeof b&&(e=b),b=c.cookie.parse(e),c.cookie.remove(e),c.cookie.remove(e,n),b&&(this.props=c.extend(this.props,b.all,b.events));if(!a.cookie_name&&"mixpanel"!==a.name&&(e="mp_"+a.token+"_"+a.name,b=c.cookie.parse(e)))c.cookie.remove(e),c.cookie.remove(e,n),this.G(b)};m.prototype.save=function(){this.disabled||(this.Yb(),c.cookie.set(this.name,c.ca(this.props),this.Pa,this.Ma,this.Db))};m.prototype.remove=function(){c.cookie.remove(this.name,s);c.cookie.remove(this.name,
	n)};m.prototype.clear=function(){this.remove();this.props={}};m.prototype.G=function(a,b,e){return c.j(a)?("undefined"===typeof b&&(b="None"),this.Pa="undefined"===typeof e?this.mb:e,c.a(a,function(a,c){if(!this.props[c]||this.props[c]===b)this.props[c]=a},this),this.save(),n):s};m.prototype.Z=function(a,b){return c.j(a)?(this.Pa="undefined"===typeof b?this.mb:b,c.extend(this.props,a),this.save(),n):s};m.prototype.ua=function(a){a in this.props&&(delete this.props[a],this.save())};m.prototype.Yb=
	function(){var a=this.props.__cmpns,b=w?6E4:36E5;if(a){for(var e in a)1*new Date-a[e]>b&&delete a[e];c.W(a)&&delete this.props.__cmpns}};m.prototype.Pc=function(){if(!this.kb)this.G(c.info.lc()),this.kb=n};m.prototype.Lb=function(a){this.Z(c.info.Fc(a))};m.prototype.Za=function(a){this.G({$initial_referrer:a||"$direct",$initial_referring_domain:c.info.Bb(a)||"$direct"},"")};m.prototype.wc=function(){return c.ra({$initial_referrer:this.props.$initial_referrer,$initial_referring_domain:this.props.$initial_referring_domain})};
	m.prototype.Kb=function(a){this.mb=this.Pa=a.cookie_expiration;this.Hc(a.disable_cookie);this.Gc(a.cross_subdomain_cookie);this.Ic(a.secure_cookie)};m.prototype.Hc=function(a){(this.disabled=a)&&this.remove()};m.prototype.Gc=function(a){if(a!==this.Ma)this.Ma=a,this.remove(),this.save()};m.prototype.vc=function(){return this.Ma};m.prototype.Ic=function(a){if(a!==this.Db)this.Db=a?n:s,this.remove(),this.save()};m.prototype.C=function(a,b){var e=this.Ea(a),f=b[a],d=this.ga("$set"),g=this.ga("$set_once"),
	j=this.ga("$add"),h=this.ga("$append",[]);"__mps"===e?(c.extend(d,f),this.ia("$add",f)):"__mpso"===e?c.a(f,function(a,b){b in g||(g[b]=a)}):"__mpa"===e?c.a(f,function(a,b){b in d?d[b]+=a:(b in j||(j[b]=0),j[b]+=a)},this):"__mpap"===e&&h.push(f);q.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");q.log(b);this.save()};m.prototype.ia=function(a,b){var e=this.T(a);c.h(e)||(c.a(b,function(a,b){delete e[b]},this),this.save())};m.prototype.Ea=function(a){if("$set"===a)return"__mps";if("$set_once"===
	a)return"__mpso";if("$add"===a)return"__mpa";if("$append"===a)return"__mpap";q.error("Invalid queue:",a)};m.prototype.T=function(a){return this.props[this.Ea(a)]};m.prototype.ga=function(a,b){var e=this.Ea(a),b=c.h(b)?{}:b;return this.props[e]||(this.props[e]=b)};i.prototype.Ta=function(a,b,c){if("undefined"===typeof c)q.error("You must name your new library: init(token, config, name)");else if("mixpanel"===c)q.error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
	else return a=F(a,b,c),r[c]=a,a.ha(),a};i.prototype.Fa=function(a,b,e){this.__loaded=n;this.config={};this.Eb(c.extend({},P,b,{name:e,token:a,callback_fn:("mixpanel"===e?e:"mixpanel."+e)+"._jsc"}));this._jsc=C();this.Ba=[];this.Ca=[];this.Aa=[];this.S={disable_all_events:s,identify_called:s};this.cookie=new m(this.config);this.G({distinct_id:c.Rb()},"")};i.prototype.ha=function(){this.d("loaded")(this);this.d("track_pageview")&&this.Jb()};i.prototype.Wb=function(){c.a(this.Ba,function(a){this.Ia.apply(this,
	a)},this);c.a(this.Ca,function(a){this.w.apply(this,a)},this);delete this.Ba;delete this.Ca};i.prototype.Ia=function(a,b){if(this.d("img"))return q.error("You can't use DOM tracking functions with img = true."),s;if(!K)return this.Ba.push([a,b]),s;var c=(new a).Ta(this);return c.P.apply(c,b)};i.prototype.Ga=function(a,b){if(c.h(a))return p;if(I)return function(c){a(c,b)};var e=this._jsc,f=""+Math.floor(1E8*Math.random()),d=this.d("callback_fn")+'["'+f+'"]';e[f]=function(c){delete e[f];a(c,b)};return d};
	i.prototype.w=function(a,b,e){if(L)this.Ca.push(arguments);else{var f=this.d("verbose");b.verbose&&(f=n);this.d("test")&&(b.test=1);f&&(b.verbose=1);this.d("img")&&(b.img=1);if(!I)if(e)b.callback=e;else if(f||this.d("test"))b.callback="(function(){})";b.ip=this.d("ip")?1:0;b._=(new Date).getTime().toString();a+="?"+c.Qb(b);if("img"in b){var d=k.createElement("img");d.src=a;k.body.appendChild(d)}else if(I){var g=new XMLHttpRequest;g.open("GET",a,n);g.withCredentials=n;g.onreadystatechange=function(){if(4===
	g.readyState)if(200===g.status)e&&(f?e(c.wa(g.responseText)):e(Number(g.responseText)));else{var a="Bad HTTP status: "+g.status+" "+g.statusText;q.error(a);e&&(f?e({status:0,error:a}):e(0))}};g.send(p)}else{d=k.createElement("script");d.type="text/javascript";d.async=n;d.defer=n;d.src=a;var j=k.getElementsByTagName("script")[0];j.parentNode.insertBefore(d,j)}}};i.prototype.Da=function(a){function b(a,b){c.a(a,function(a){this[a[0]].apply(this,a.slice(1))},b)}var e,f=[],d=[],g=[];c.a(a,function(a){a&&
	(e=a[0],"function"===typeof a?a.call(this):c.isArray(a)&&"alias"===e?f.push(a):c.isArray(a)&&-1!=e.indexOf("track")&&"function"===typeof this[e]?g.push(a):d.push(a))},this);b(f,this);b(d,this);b(g,this)};i.prototype.push=function(a){this.Da([a])};i.prototype.disable=function(a){"undefined"===typeof a?this.S.pc=n:this.Aa=this.Aa.concat(a)};i.prototype.P=function(a,b,e){if("undefined"===typeof a)q.error("No event name provided to mixpanel.track");else if(c.vb(t)||this.S.pc||c.sb(this.Aa,a))"undefined"!==
	typeof e&&e(0);else return b=b||{},b.token=b.Xc||this.d("token"),this.cookie.Lb(k.referrer),this.d("store_google")&&this.cookie.Pc(),this.d("save_referrer")&&this.cookie.Za(k.referrer),b=c.extend({},c.info.qa(),this.cookie.qa(),b),a=c.truncate({event:a,properties:b},255),b=c.ca(a),b=c.ib(b),q.log("MIXPANEL REQUEST:"),q.log(a),this.w(this.d("api_host")+"/track/",{data:b},this.Ga(e,a)),a};i.prototype.Jb=function(a){if("undefined"===typeof a)a=k.location.href;this.P("mp_page_view",c.info.Cc(a))};i.prototype.Oc=
	function(){return this.Ia.call(this,A,arguments)};i.prototype.Nc=function(){return this.Ia.call(this,G,arguments)};i.prototype.Z=function(a,b){this.cookie.Z(a,b)};i.prototype.G=function(a,b,c){this.cookie.G(a,b,c)};i.prototype.ua=function(a){this.cookie.ua(a)};i.prototype.Ha=function(a,b){var c={};c[a]=b;this.Z(c)};i.prototype.Ra=function(a,b,c,f,d){a!=this.M()&&a!=this.oa("__alias")&&(this.ua("__alias"),this.Ha("distinct_id",a));this.$a(this.M());this.S.qb=n;this.people.Zb(b,c,f,d)};i.prototype.M=
	function(){return this.oa("distinct_id")};i.prototype.hc=function(a,b){if(a===this.oa("$people_distinct_id"))return q.na("Attempting to create alias for existing People user - aborting."),-2;var e=this;c.h(b)&&(b=this.M());if(a!==b)return this.Ha("__alias",a),this.P("$create_alias",{alias:a,distinct_id:b},function(){e.Ra(a)});q.error("alias matches current distinct_id - skipping api call.");this.Ra(a);return-1};i.prototype.Ac=function(a){this.Ha("mp_name_tag",a)};i.prototype.Eb=function(a){c.j(a)&&
	(c.extend(this.config,a),this.cookie&&this.cookie.Kb(this.config),w=w||this.d("debug"))};i.prototype.d=function(a){return this.config[a]};i.prototype.oa=function(a){return this.cookie.props[a]};i.prototype.toString=function(){var a=this.d("name");"mixpanel"!==a&&(a="mixpanel."+a);return a};i.prototype.$a=function(a){if(a&&!this.S.qb&&!this.d("disable_notifications")){q.log("MIXPANEL NOTIFICATION CHECK");var b=this;this.w(this.d("api_host")+"/decide/",{verbose:n,version:"1",lib:"web",token:this.d("token"),
	distinct_id:a},this.Ga(function(a){a.notifications&&0<a.notifications.length&&b.gb.call(b,a.notifications[0])}))}};i.prototype.gb=function(a){(new g(a,this)).show()};o.prototype.Fa=function(a){this.c=a};o.prototype.set=function(a,b,e){var f={},d={};c.j(a)?(c.a(a,function(a,b){"$distinct_id"==b||"$token"==b||(d[b]=a)}),e=b):d[a]=b;this.fa("save_referrer")&&this.c.cookie.Za(k.referrer);d=c.extend({},c.info.Dc(),this.c.cookie.wc(),d);f.$set=d;return this.w(f,e)};o.prototype.Fb=function(a,b,e){var f=
	{},d={};c.j(a)?(c.a(a,function(a,b){"$distinct_id"==b||"$token"==b||(d[b]=a)}),e=b):d[a]=b;f.$set_once=d;return this.w(f,e)};o.prototype.tb=function(a,b,e){var f={},d={};c.j(a)?(c.a(a,function(a,b){"$distinct_id"==b||"$token"==b||(isNaN(parseFloat(a))?q.error("Invalid increment value passed to mixpanel.people.increment - must be a number"):d[b]=a)}),e=b):(c.h(b)&&(b=1),d[a]=b);f.$add=d;return this.w(f,e)};o.prototype.append=function(a,b,e){var f={},d={};c.j(a)?(c.a(a,function(a,b){"$distinct_id"==
	b||"$token"==b||(d[b]=a)}),e=b):d[a]=b;f.$append=d;return this.w(f,e)};o.prototype.Mc=function(a,b,e){if(!c.zc(a)&&(a=parseFloat(a),isNaN(a))){q.error("Invalid value passed to mixpanel.people.track_charge - must be a number");return}return this.append("$transactions",c.extend({$amount:a},b),e)};o.prototype.mc=function(a){return this.set("$transactions",[],a)};o.prototype.oc=function(){if(this.bb())return this.w({$delete:this.c.M()});q.error("mixpanel.people.delete_user() requires you to call identify() first")};
	o.prototype.toString=function(){return this.c.toString()+".people"};o.prototype.w=function(a,b){a.$token=this.fa("token");a.$distinct_id=this.c.M();var e=c.ob(a),f=c.truncate(e,255),e=c.ca(e),e=c.ib(e);if(!this.bb())return this.Xb(a),c.h(b)||(this.fa("verbose")?b({status:-1,error:p}):b(-1)),f;q.log("MIXPANEL PEOPLE REQUEST:");q.log(f);this.c.w(this.fa("api_host")+"/engage/",{data:e},this.c.Ga(b,f));return f};o.prototype.fa=function(a){return this.c.d(a)};o.prototype.bb=function(){return this.c.S.qb===
	n};o.prototype.Xb=function(a){"$set"in a?this.c.cookie.C("$set",a):"$set_once"in a?this.c.cookie.C("$set_once",a):"$add"in a?this.c.cookie.C("$add",a):"$append"in a?this.c.cookie.C("$append",a):q.error("Invalid call to _enqueue():",a)};o.prototype.Zb=function(a,b,e,f){var d=this,g=c.extend({},this.c.cookie.T("$set")),j=c.extend({},this.c.cookie.T("$set_once")),h=c.extend({},this.c.cookie.T("$add")),i=this.c.cookie.T("$append");!c.h(g)&&c.j(g)&&!c.W(g)&&(d.c.cookie.ia("$set",g),this.set(g,function(b,
	e){0==b&&d.c.cookie.C("$set",g);c.h(a)||a(b,e)}));!c.h(j)&&c.j(j)&&!c.W(j)&&(d.c.cookie.ia("$set_once",j),this.Fb(j,function(a,b){0==a&&d.c.cookie.C("$set_once",j);c.h(f)||f(a,b)}));!c.h(h)&&c.j(h)&&!c.W(h)&&(d.c.cookie.ia("$add",h),this.tb(h,function(a,e){0==a&&d.c.cookie.C("$add",h);c.h(b)||b(a,e)}));if(!c.h(i)&&c.isArray(i)&&i.length){for(var k=i.length-1;0<=k;k--){var m=i.pop();d.append(m,function(a,b){0==a&&d.c.cookie.C("$append",m);c.h(e)||e(a,b)})}d.c.cookie.save()}};i.Ub=function(a,b){c.ic(this);
	this.Wa=b;this.cookie=this.Wa.cookie;this.D=c.p(a.id);this.xb=c.p(a.message_id);this.body=(c.p(a.body)||"").replace(/\n/g,"<br/>");this.nc=c.p(a.cta)||"Close";this.V=c.p(a.cta_url)||p;this.Sa=c.p(a.image_url)||p;this.X=c.p(a.type)||"takeover";this.style=c.p(a.style)||"light";this.H=c.p(a.thumb_image_url)||p;this.title=c.p(a.title)||"";this.va=c.p(a.video_url)||p;this.aa=g.Tb;this.Q=g.Sb;this.la=n;if(!this.V)this.V="#dismiss",this.la=s;this.q="mini"===this.X;if(!this.q)this.X="takeover";this.Bc=!this.q?
	g.R:g.xa;this.fb();this.pa=this.$b();this.cc()};var g=i.Ub;g.I=200;g.u="mixpanel-notification";g.ba=0.6;g.B=25;g.da=200;g.R=388;g.xa=420;g.v=85;g.ya=5;g.F=60;g.za=Math.round(g.F/2);g.Tb=595;g.Sb=334;g.prototype.show=function(){var a=this;this.fb();this.l?(this.bc(),this.ac(),this.dc(this.Vb)):setTimeout(function(){a.show()},300)};g.prototype.Na=c.s(function(){var a=this.Jc?this.g("video"):this.L();if(this.Mb)this.ec("bg","visible"),this.J(a,"exiting"),setTimeout(this.eb,g.I);else{var b,c,f;this.q?
	(b="right",c=20,f=-100):(b="top",c=g.B,f=g.da+g.B);this.ea([{m:this.g("bg"),k:"opacity",start:g.ba,i:0},{m:a,k:"opacity",start:1,i:0},{m:a,k:b,start:c,i:f}],g.I,this.eb)}});g.prototype.J=c.s(function(a,b){b=g.u+"-"+b;"string"===typeof a&&(a=this.g(a));a.className?~(" "+a.className+" ").indexOf(" "+b+" ")||(a.className+=" "+b):a.className=b});g.prototype.ec=c.s(function(a,b){b=g.u+"-"+b;"string"===typeof a&&(a=this.g(a));if(a.className)a.className=(" "+a.className+" ").replace(" "+b+" ","").replace(/^[\s\xA0]+/,
	"").replace(/[\s\xA0]+$/,"")});g.prototype.ea=c.s(function(a,b,c,f){var d=this,g=s,j,h;j=1*new Date;var i,f=f||j;i=j-f;for(j=0;j<a.length;j++){h=a[j];if("undefined"===typeof h.A)h.A=h.start;if(h.A!==h.i){var g=n,k=h.i>=h.start?1:-1;h.A=h.start+(h.i-h.start)*i/b;if("opacity"!==h.k)h.A=Math.round(h.A);if(0<k&&h.A>=h.i||0>k&&h.A<=h.i)h.A=h.i}}if(g){for(j=0;j<a.length;j++)h=a[j],h.m&&(h.m.style[h.k]=""+h.A+("opacity"===h.k?"":"px"));setTimeout(function(){d.ea(a,b,c,f)},10)}else c&&c()});g.prototype.Vb=
	c.s(function(){var a=this;if(!this.Kc&&!this.ab()[this.D])this.Kc=n,this.l.appendChild(this.Y),setTimeout(function(){var b=a.L();if(a.Mb)a.q||a.J("bg","visible"),a.J(b,"visible"),a.cb();else{var c,f,d;a.q?(c="right",f=-100,d=20):(c="top",f=g.da+g.B,d=g.B);a.ea([{m:a.g("bg"),k:"opacity",start:0,i:g.ba},{m:b,k:"opacity",start:0,i:1},{m:b,k:c,start:f,i:d}],g.I,a.cb)}},100),c.N(a.g("cancel"),"click",function(b){b.preventDefault();a.Na()}),c.N(a.g("button")||a.g("mini-content"),"click",function(b){b.preventDefault();
	a.O?(a.Ja("$campaign_open",{$resource_type:"video"}),a.fc()):(a.Na(),a.la&&a.Ja("$campaign_open",{$resource_type:"link"},function(){window.location.href=a.V}))})});g.prototype.g=function(a){return k.getElementById(g.u+"-"+a)};g.prototype.L=function(){return this.g(this.X)};g.prototype.ab=function(){return this.cookie.props.__cmpns||(this.cookie.props.__cmpns={})};g.prototype.K=function(a,b){return this.z[a]&&this.z[a]<=b};g.prototype.$b=function(){var a=[];this.q?(this.H=this.H||"//cdn.mxpnl.com/site_media/images/icons/notifications/mini-news-dark.png",
	a.push(this.H)):(this.Sa?(a.push(this.Sa),this.rb='<img id="img" src="'+this.Sa+'"/>'):this.rb="",this.H?(a.push(this.H),this.Hb='<div id="thumbborder-wrapper"><div id="thumbborder"></div></div><img id="thumbnail" src="'+this.H+'" width="'+g.F+'" height="'+g.F+'"/><div id="thumbspacer"></div>'):this.Hb="");return a};g.prototype.ac=function(){var a="",b="",c="";this.Y=k.createElement("div");this.Y.id=g.u+"-wrapper";if(this.q)a='<div id="mini"><div id="mainbox"><div id="cancel"><div id="cancel-icon"></div></div><div id="mini-content"><div id="mini-icon"><div id="mini-icon-img"></div></div><div id="body"><div id="body-text"><div>'+
	this.body+'</div></div></div></div></div><div id="mini-border"></div></div>';else{var a=this.la||this.O?"":'<div id="button-close"></div>',f=this.O?'<div id="button-play"></div>':"";this.K("ie",7)&&(f=a="");a='<div id="takeover">'+this.Hb+'<div id="mainbox"><div id="cancel"><div id="cancel-icon"></div></div><div id="content">'+this.rb+'<div id="title">'+this.title+'</div><div id="body">'+this.body+'</div><div id="tagline"><a href="http://mixpanel.com?from=inapp" target="_blank">POWERED BY MIXPANEL</a></div></div><div id="button">'+
	a+'<a id="button-link" href="'+this.V+'">'+this.nc+"</a>"+f+"</div></div></div>"}this.Ob?(b="//www.youtube.com/embed/"+this.Ob+"?wmode=transparent&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=0&vq=hd1080",this.Pb&&(b+="&enablejsapi=1&html5=1&controls=0",c='<div id="video-controls"><div id="video-progress" class="video-progress-el"><div id="video-progress-total" class="video-progress-el"></div><div id="video-elapsed" class="video-progress-el"></div></div><div id="video-time" class="video-progress-el"></div></div>')):
	this.Nb&&(b="//player.vimeo.com/video/"+this.Nb+"?autoplay=1&title=0&byline=0&portrait=0");if(this.O)this.Tc='<iframe id="'+g.u+'-video-frame" width="'+this.aa+'" height="'+this.Q+'"  src="'+b+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="1" scrolling="no"></iframe>',c='<div id="video-'+(this.Qa?"":"no")+'flip"><div id="video"><div id="video-holder"></div>'+c+"</div></div>";b=c+a;this.Qa&&(b=(this.q?a:"")+'<div id="flipcontainer"><div id="flipper">'+(this.q?c:b)+"</div></div>");
	this.Y.innerHTML=('<div id="overlay" class="'+this.X+'"><div id="campaignid-'+this.D+'"><div id="bgwrapper"><div id="bg"></div>'+b+"</div></div></div>").replace(/class=\"/g,'class="'+g.u+"-").replace(/id=\"/g,'id="'+g.u+"-")};g.prototype.bc=function(){this.e="dark"===this.style?{La:"#1d1f25",U:"#282b32",ja:"#3a4147",jb:"#4a5157",jc:"#32353c",lb:"0.4",Va:"#2a3137",ta:"#fff",Ya:"#9498a3",Gb:"#464851",sa:"#ddd"}:{La:"#fff",U:"#e7eaee",ja:"#eceff3",jb:"#f5f5f5",jc:"#e4ecf2",lb:"1.0",Va:"#fafafa",ta:"#5c6578",
	Ya:"#8b949b",Gb:"#ced9e6",sa:"#7c8598"};var a="0px 0px 35px 0px rgba(45, 49, 56, 0.7)",b=a,e=a,f=g.F+2*g.ya,d=g.I/1E3+"s";this.q&&(a="none");var i={};i["@media only screen and (max-width: "+(g.xa+20-1)+"px)"]={"#overlay":{display:"none"}};a={".flipped":{transform:"rotateY(180deg)"},"#overlay":{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",overflow:"auto","text-align":"center","z-index":"10000","font-family":'"Helvetica", "Arial", sans-serif',"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},
	"#overlay.mini":{height:"0",overflow:"visible"},"#overlay a":{width:"initial",padding:"0","text-decoration":"none","text-transform":"none",color:"inherit"},"#bgwrapper":{position:"relative",width:"100%",height:"100%"},"#bg":{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","min-width":4*this.rc+"px","min-height":4*this.qc+"px","background-color":"black",opacity:"0.0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",filter:"alpha(opacity=60)",transition:"opacity "+d},
	"#bg.visible":{opacity:g.ba},".mini #bg":{width:"0",height:"0","min-width":"0"},"#flipcontainer":{perspective:"1000px",position:"absolute",width:"100%"},"#flipper":{position:"relative","transform-style":"preserve-3d",transition:"0.3s"},"#takeover":{position:"absolute",left:"50%",width:g.R+"px","margin-left":Math.round(-g.R/2)+"px","backface-visibility":"hidden",transform:"rotateY(0deg)",opacity:"0.0",top:g.da+"px",transition:"opacity "+d+", top "+d},"#takeover.visible":{opacity:"1.0",top:g.B+"px"},
	"#takeover.exiting":{opacity:"0.0",top:g.da+"px"},"#thumbspacer":{height:g.za+"px"},"#thumbborder-wrapper":{position:"absolute",top:-g.ya+"px",left:g.R/2-g.za-g.ya+"px",width:f+"px",height:f/2+"px",overflow:"hidden"},"#thumbborder":{position:"absolute",width:f+"px",height:f+"px","border-radius":f+"px","background-color":this.e.U,opacity:"0.5"},"#thumbnail":{position:"absolute",top:"0px",left:g.R/2-g.za+"px",width:g.F+"px",height:g.F+"px",overflow:"hidden","z-index":"100","border-radius":g.F+"px"},
	"#mini":{position:"absolute",right:"20px",top:g.B+"px",width:this.Bc+"px",height:2*g.v+"px","margin-top":20-g.v+"px","backface-visibility":"hidden",opacity:"0.0",transform:"rotateX(90deg)",transition:"opacity 0.3s, transform 0.3s, right 0.3s"},"#mini.visible":{opacity:"1.0",transform:"rotateX(0deg)"},"#mini.exiting":{opacity:"0.0",right:"-150px"},"#mainbox":{"border-radius":"4px","box-shadow":a,"text-align":"center","background-color":this.e.La,"font-size":"14px",color:this.e.Ya},"#mini #mainbox":{height:g.v+
	"px","margin-top":g.v+"px","border-radius":"3px",transition:"background-color "+d},"#mini-border":{height:g.v+6+"px",width:g.xa+6+"px",position:"absolute",top:"-3px",left:"-3px","margin-top":g.v+"px","border-radius":"6px",opacity:"0.25","background-color":"#fff","z-index":"-1","box-shadow":e},"#mini-icon":{position:"relative",display:"inline-block",width:"75px",height:g.v+"px","border-radius":"3px 0 0 3px","background-color":this.e.U,background:"linear-gradient(135deg, "+this.e.jb+" 0%, "+this.e.U+
	" 100%)",transition:"background-color "+d},"#mini:hover #mini-icon":{"background-color":this.e.Va},"#mini:hover #mainbox":{"background-color":this.e.Va},"#mini-icon-img":{position:"absolute","background-image":"url("+this.H+")",width:"48px",height:"48px",top:"20px",left:"12px"},"#content":{padding:"30px 20px 0px 20px"},"#mini-content":{"text-align":"left",height:g.v+"px",cursor:"pointer"},"#img":{width:"328px","margin-top":"30px","border-radius":"5px"},"#title":{"max-height":"600px",overflow:"hidden",
	"word-wrap":"break-word",padding:"25px 0px 20px 0px","font-size":"19px","font-weight":"bold",color:this.e.ta},"#body":{"max-height":"600px","margin-bottom":"25px",overflow:"hidden","word-wrap":"break-word","line-height":"21px","font-size":"15px","font-weight":"normal","text-align":"left"},"#mini #body":{display:"inline-block","max-width":"250px",margin:"0 0 0 30px",height:g.v+"px","font-size":"16px","letter-spacing":"0.8px",color:this.e.ta},"#mini #body-text":{display:"table",height:g.v+"px"},"#mini #body-text div":{display:"table-cell",
	"vertical-align":"middle"},"#tagline":{"margin-bottom":"15px","font-size":"10px","font-weight":"600","letter-spacing":"0.8px",color:"#ccd7e0","text-align":"left"},"#tagline a":{color:this.e.Gb,transition:"color "+d},"#tagline a:hover":{color:this.e.sa},"#cancel":{position:"absolute",right:"0",width:"8px",height:"8px",padding:"10px","border-radius":"20px",margin:"12px 12px 0 0","box-sizing":"content-box",cursor:"pointer",transition:"background-color "+d},"#mini #cancel":{margin:"7px 7px 0 0"},"#cancel-icon":{width:"8px",
	height:"8px",overflow:"hidden","background-image":"url(//cdn.mxpnl.com/site_media/images/icons/notifications/cancel-x.png)",opacity:this.e.lb},"#cancel:hover":{"background-color":this.e.ja},"#button":{display:"block",height:"60px","line-height":"60px","text-align":"center","background-color":this.e.U,"border-radius":"0 0 4px 4px",overflow:"hidden",cursor:"pointer",transition:"background-color "+d},"#button-close":{display:"inline-block",width:"9px",height:"60px","margin-right":"8px","vertical-align":"top",
	"background-image":"url(//cdn.mxpnl.com/site_media/images/icons/notifications/close-x-"+this.style+".png)","background-repeat":"no-repeat","background-position":"0px 25px"},"#button-play":{display:"inline-block",width:"30px",height:"60px","margin-left":"15px","background-image":"url(//cdn.mxpnl.com/site_media/images/icons/notifications/play-"+this.style+"-small.png)","background-repeat":"no-repeat","background-position":"0px 15px"},"a#button-link":{display:"inline-block","vertical-align":"top","text-align":"center",
	"font-size":"17px","font-weight":"bold",overflow:"hidden","word-wrap":"break-word",color:this.e.ta,transition:"color "+d},"#button:hover":{"background-color":this.e.ja,color:this.e.sa},"#button:hover a":{color:this.e.sa},"#video-noflip":{position:"relative",top:2*-this.Q+"px"},"#video-flip":{"backface-visibility":"hidden",transform:"rotateY(180deg)"},"#video":{position:"absolute",width:this.aa-1+"px",height:this.Q+"px",top:g.B+"px","margin-top":"100px",left:"50%","margin-left":Math.round(-this.aa/
	2)+"px",overflow:"hidden","border-radius":"5px","box-shadow":b,transform:"translateZ(1px)",transition:"opacity "+d+", top "+d},"#video.exiting":{opacity:"0.0",top:this.Q+"px"},"#video-holder":{position:"absolute",width:this.aa-1+"px",height:this.Q+"px",overflow:"hidden","border-radius":"5px"},"#video-frame":{"margin-left":"-1px",width:this.aa+"px"},"#video-controls":{opacity:"0",transition:"opacity 0.5s"},"#video:hover #video-controls":{opacity:"1.0"},"#video .video-progress-el":{position:"absolute",
	bottom:"0",height:"25px","border-radius":"0 0 0 5px"},"#video-progress":{width:"90%"},"#video-progress-total":{width:"100%","background-color":this.e.La,opacity:"0.7"},"#video-elapsed":{width:"0","background-color":"#6cb6f5",opacity:"0.9"},"#video #video-time":{width:"10%",right:"0","font-size":"11px","line-height":"25px",color:this.e.Ya,"background-color":"#666","border-radius":"0 0 5px 0"}};this.K("ie",8)&&c.extend(a,{"* html #overlay":{position:"absolute"},"* html #bg":{position:"absolute"},"html, body":{height:"100%"}});
	this.K("ie",7)&&c.extend(a,{"#mini #body":{display:"inline",zoom:"1",border:"1px solid "+this.e.ja},"#mini #body-text":{padding:"20px"},"#mini #mini-icon":{display:"none"}});var b="backface-visibility,border-radius,box-shadow,opacity,perspective,transform,transform-style,transition".split(","),e=["khtml","moz","ms","o","webkit"],j;for(j in a)for(f=0;f<b.length;f++)if(d=b[f],d in a[j])for(var h=a[j][d],m=0;m<e.length;m++)a[j]["-"+e[m]+"-"+d]=h;(function(a,b){function c(a){var b="",d;for(d in a){var e=
	d.replace(/#/g,"#"+g.u+"-").replace(/\./g,"."+g.u+"-"),b=b+("\n"+e+" {"),e=a[d],f;for(f in e)b+=f+":"+e[f]+";";b+="}"}return b}var d=c(a)+function(a){var b="",d;for(d in a)b+="\n"+d+" {"+c(a[d])+"\n}";return b}(b),e=k.head||k.getElementsByTagName("head")[0]||k.documentElement,f=k.createElement("style");e.appendChild(f);f.setAttribute("type","text/css");f.styleSheet?f.styleSheet.cssText=d:f.textContent=d})(a,i)};g.prototype.cc=c.s(function(){if(this.va){var a=this;a.Pb="postMessage"in window;k.createElement("div");
	a.V=a.va;var b=a.va.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),c=a.va.match(/vimeo\.com\/.*?(\d+)/i);if(b){if(a.O=n,a.Ob=b[1],a.Pb)window.onYouTubeIframeAPIReady=function(){a.g("video-frame")&&a.hb()},b=k.createElement("script"),b.src="//www.youtube.com/iframe_api",c=k.getElementsByTagName("script")[0],c.parentNode.insertBefore(b,c)}else if(c)a.O=n,a.Nb=c[1];if(a.K("ie",7)||a.K("firefox",3))a.O=s,a.la=n}});g.prototype.cb=c.s(function(){function a(a,
	b){var c={};if(k.defaultView&&k.defaultView.getComputedStyle)c=k.defaultView.getComputedStyle(a,p);else if(a.currentStyle)c=a.currentStyle;return c[b]}var b=this;c.N(b.g("bg"),"click",function(){b.Na()});if(this.D){var e=this.g("overlay");e&&"hidden"!==a(e,"visibility")&&"none"!==a(e,"display")&&(this.ab()[this.D]=1*new Date,this.cookie.save(),this.Ja("$campaign_delivery"),this.Wa.people.append({$campaigns:this.D,$notifications:{campaign_id:this.D,message_id:this.xb,type:"web",time:new Date}}))}});
	g.prototype.dc=function(a){var b=this;if(0===this.pa.length)a();else{for(var c=0,f=[],d=0;d<this.pa.length;d++){var g=new Image,i=function(){c++;c===b.pa.length&&a&&(a(),a=p)};g.onload=i;g.src=this.pa[d];g.complete&&i();f.push(g)}this.K("ie",7)&&setTimeout(function(){var b=n;for(d=0;d<f.length;d++)f[d].complete||(b=s);b&&a&&(a(),a=p)},500)}};g.prototype.eb=c.s(function(){window.clearInterval(this.gc);this.Y.style.visibility="hidden";this.l.removeChild(this.Y)});g.prototype.fb=function(){function a(a){if(a in
	f)return n;if(!c)for(var a=a[0].toUpperCase()+a.slice(1),a=["O"+a,"Webkit"+a,"Moz"+a],b=0;b<a.length;b++)if(a[b]in f)return n;return s}function b(a){return(a=E.userAgent.match(a))&&a[1]}this.z={};this.z.chrome=b(/Chrome\/(\d+)/);this.z.firefox=b(/Firefox\/(\d+)/);this.z.ie=b(/MSIE (\d+).+/);!this.z.ie&&!window.ActiveXObject&&"ActiveXObject"in window&&(this.z.ie=11);if(this.l=k.body||k.getElementsByTagName("body")[0])this.rc=Math.max(this.l.scrollWidth,k.documentElement.scrollWidth,this.l.offsetWidth,
	k.documentElement.offsetWidth,this.l.clientWidth,k.documentElement.clientWidth),this.qc=Math.max(this.l.scrollHeight,k.documentElement.scrollHeight,this.l.offsetHeight,k.documentElement.offsetHeight,this.l.clientHeight,k.documentElement.clientHeight);var c=this.z.ie,f=k.createElement("div").style;this.Mb=this.l&&a("transition")&&a("transform");this.Qa=(33<=this.z.chrome||15<=this.z.firefox)&&this.l&&a("backfaceVisibility")&&a("perspective")&&a("transform")};g.prototype.fc=c.s(function(){function a(){window.YT&&
	window.YT.loaded&&b.hb();b.Jc=n;b.L().style.visibility="hidden"}var b=this,c=[{m:b.L(),k:"opacity",start:1,i:0},{m:b.L(),k:"top",start:g.B,i:-500},{m:b.g("video-noflip"),k:"opacity",start:0,i:1},{m:b.g("video-noflip"),k:"top",start:2*-b.Q,i:0}];if(b.q){var f=b.g("bg"),d=b.g("overlay");f.style.width="100%";f.style.height="100%";d.style.width="100%";b.J(b.L(),"exiting");b.J(f,"visible");c.push({m:b.g("bg"),k:"opacity",start:0,i:g.ba})}b.g("video-holder").innerHTML=b.Tc;b.Qa?(b.J("flipper","flipped"),
	setTimeout(a,g.I)):b.ea(c,g.I,a)});g.prototype.Ja=function(a,b,e){this.D?(b=b||{},b=c.extend(b,{campaign_id:this.D,message_id:this.xb,message_type:"web_inapp",message_subtype:this.X}),this.Wa.track(a,b,e)):e&&e.call()};g.prototype.hb=c.s(function(){var a=this;if(!a.Uc){a.Uc=n;var b=a.g("video-elapsed"),e=a.g("video-time"),f=a.g("video-progress");new window.YT.Player(g.u+"-video-frame",{events:{onReady:function(d){function g(a){var a=Math.round(h-a),b=Math.floor(a/60),c=Math.floor(b/60),a=a-60*b;e.innerHTML=
	"-"+(c?c+":":"")+("00"+(b-60*c)).slice(-2)+":"+("00"+a).slice(-2)}var i=d.target,h=i.getDuration();g(0);a.gc=window.setInterval(function(){var a=i.getCurrentTime();b.style.width=100*(a/h)+"%";g(a)},250);c.N(f,"click",function(a){a=Math.max(0,a.pageX-f.getBoundingClientRect().left);i.seekTo(h*a/f.clientWidth,n)})}}})}});c.toArray=c.$;c.isObject=c.j;c.JSONEncode=c.ca;c.JSONDecode=c.wa;c.isBlockedUA=c.vb;c.isEmptyObject=c.W;c.info=c.info;c.info.device=c.info.nb;c.info.browser=c.info.ka;i.prototype.init=
	i.prototype.Ta;i.prototype.disable=i.prototype.disable;i.prototype.track=i.prototype.P;i.prototype.track_links=i.prototype.Oc;i.prototype.track_forms=i.prototype.Nc;i.prototype.track_pageview=i.prototype.Jb;i.prototype.register=i.prototype.Z;i.prototype.register_once=i.prototype.G;i.prototype.unregister=i.prototype.ua;i.prototype.identify=i.prototype.Ra;i.prototype.alias=i.prototype.hc;i.prototype.name_tag=i.prototype.Ac;i.prototype.set_config=i.prototype.Eb;i.prototype.get_config=i.prototype.d;i.prototype.get_property=
	i.prototype.oa;i.prototype.get_distinct_id=i.prototype.M;i.prototype.toString=i.prototype.toString;i.prototype._check_and_handle_notifications=i.prototype.$a;i.prototype._show_notification=i.prototype.gb;m.prototype.properties=m.prototype.qa;m.prototype.update_search_keyword=m.prototype.Lb;m.prototype.update_referrer_info=m.prototype.Za;m.prototype.get_cross_subdomain=m.prototype.vc;m.prototype.clear=m.prototype.clear;o.prototype.set=o.prototype.set;o.prototype.set_once=o.prototype.Fb;o.prototype.increment=
	o.prototype.tb;o.prototype.append=o.prototype.append;o.prototype.track_charge=o.prototype.Mc;o.prototype.clear_charges=o.prototype.mc;o.prototype.delete_user=o.prototype.oc;o.prototype.toString=o.prototype.toString;c.Cb(m,["_expire_notification_campaigns"]);c.Cb(i,["identify","_check_and_handle_notifications","_show_notification"]);if(c.h(r))q.na("'mixpanel' object not initialized. Ensure you are using the latest version of the Mixpanel JS Library along with the snippet we provide.");else if(r.__loaded||
	r.config&&r.cookie)q.error("Mixpanel library has already been downloaded at least once.");else if(1.1>z)q.na("Version mismatch; please ensure you're using the latest version of the Mixpanel code snippet.");else{var y={};c.a(r._i,function(a){var b;a&&c.isArray(a)&&(b=a[a.length-1],a=F.apply(this,a),y[b]=a)});var Q=function(){c.a(y,function(a,b){"mixpanel"!==b&&(r[b]=a)});r._=c};r.init=function(a,b,c){c?r[c]||(r[c]=y[c]=F(a,b,c),r[c].ha()):(c=r,y.mixpanel?c=y.mixpanel:a&&(c=F(a,b,"mixpanel"),c.ha()),
	window.mixpanel=r=c,Q())};r.init();c.a(y,function(a){a.ha()});if(k.addEventListener)"complete"==k.readyState?x():k.addEventListener("DOMContentLoaded",x,s);else if(k.attachEvent){k.attachEvent("onreadystatechange",x);z=s;try{z=window.frameElement==p}catch(R){}if(k.documentElement.doScroll&&z){var M=function(){try{k.documentElement.doScroll("left")}catch(a){setTimeout(M,1);return}x()};M()}}c.N(window,"load",x,n)}})(window.mixpanel);
	})();

} 
//else
 {

}

//Google Analytics

// light
switch(config.app) {
  case 'light':
	  ga('create', 'UA-55863666-1', 'auto');
	  break;
  case 'pro':
	  ga('create', 'UA-55863666-2', 'auto');
	  mixpanel.init("339e511cfff7fdcd146d3a4dd60f03a8");
	  break;
  case 'web':
	  ga('create', 'UA-58183317-1', 'auto');
	  mixpanel.init("339e511cfff7fdcd146d3a4dd60f03a8");
	  break;
  case 'app':
	  ga('create', 'UA-55863666-8', 'auto');
	  break;
  case 'ambieye':
	  ga('create', 'UA-55863666-6', 'auto');
	  break;
}
//ga('create', 'UA-55863666-2', 'auto');
// ambieye ga('create', 'UA-55863666-6', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

if (typeof(mixpanel) !== "undefined" && mixpanel.track_links !== undefined) {
	mixpanel.track_links("a", "click", {
	    "referrer": document.referrer
	});
}
/**/

function trackState(name, state) {
	try{
		var protocol = location.protocol;
		if (protocol === 'chrome-extension:') {
			protocol = 'http:';
		}
		$.ajax(protocol + '//huekit.elasticbeanstalk.com/api/track/' + name, {
			data: JSON.stringify(state),
			type: 'put',
			processData: false,
			contentType: 'application/json',
			error: function(err) {
				console.log(err);
			}
		});
	} catch(ex){
		// do nothing
	}
}

function trackEvent(category, action, label, value, data) {

	ga('send', 'event', category, action, {
		'nonInteraction': 1, 
		'label': label, 
		'value': value
	}); 

	var obj = {
		'category': category, 
		'action': action, 
		'value': value,
		'data': data
	};

	if (typeof(mixpanel) !== "undefined" && mixpanel.track_links !== undefined) {
		mixpanel.track(label, obj);
	}

	if (data) {
		trackState(category, obj)
	}
}
/*
window.addEventListener('error', function (err) {
    var lineAndColumnInfo = err.colno ? ' line:' + err.lineno +', column:'+ err.colno : ' line:' + e.lineno;
    ga(
        'send',
        'event',
        'JavaScript Error',
        err.message,
        err.filename + lineAndColumnInfo + ' -> ' +  navigator.userAgent,
        0,
        true
    );
});

// jQuery errors handler (jQuery API)
$.error = function (message) {
    ga(
        'send',
        'event',
        'jQuery Error',
        message,
        navigator.userAgent,
        0,
        true
    );
}

// jQuery AJAX errors handler (jQuery API)
$(document).ajaxError(function (event, request, settings) {
    ga(
        'send',
        'event',
        'jQuery Ajax Error',
        settings.url,
        JSON.stringify({
            result: event.result,
            status: request.status,
            statusText: request.statusText,
            crossDomain: settings.crossDomain,
            dataType: settings.dataType
        }),
        0,
        true
    );
});
*/


var gOldOnError = window.onerror;
// Override previous handler.
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  if (gOldOnError)
    // Call previous handler.
    return gOldOnError(errorMsg, url, lineNumber);

  // Just let default handler run.
  return false;
}

if (config.app === 'pro' || config.app === 'web') {
	// script.fail
	(function(_, __) { _._errs = []; var h = _.onerror; var f = function() { var a = arguments; _errs.push(a); h && h.apply(this, a)}; 
	var sf = __.createElement('script'); sf.type = 'text/javascript'; 
	sf.async = true; sf.id = 'onscriptfail'; 
	sf.src = 'https://script.fail/inform?sadakov@gmail.com'; 
	var s = __.getElementsByTagName('script')[0]; 
	s.parentNode.insertBefore(sf, s); _.onerror = f; })(window, document); 

/*
// track js 
window._trackJs = { token: 'a6fb3e01217a42abb1e241124913ce6f' };
// COPYRIGHT (c) 2015 TrackJS LLC ALL RIGHTS RESERVED
(function(h,p,k){"use awesome";if(h.trackJs)h.console&&h.console.warn&&h.console.warn("TrackJS global conflict");else{var l=function(a,b,c,d,e){this.util=a;this.onError=b;this.onFault=c;this.options=e;e.enabled&&this.initialize(d)};l.prototype={initialize:function(a){a.addEventListener&&(this.wrapAndCatch(a.Element.prototype,"addEventListener",1),this.wrapAndCatch(a.XMLHttpRequest.prototype,"addEventListener",1),this.wrapRemoveEventListener(a.Element.prototype),this.wrapRemoveEventListener(a.XMLHttpRequest.prototype));this.wrapAndCatch(a,"setTimeout",0);this.wrapAndCatch(a,"setInterval",0)},wrapAndCatch:function(a,b,c){var d=this,e=a[b];d.util.hasFunction(e,"apply")&&(a[b]=function(){try{var f=Array.prototype.slice.call(arguments),g=f[c],u,h;if(d.options.bindStack)try{throw Error();}catch(k){h=k.stack,u=d.util.isoNow()}if("addEventListener"===b&&(this._trackJsEvt||(this._trackJsEvt=new m),this._trackJsEvt.getWrapped(f[0],g,f[2])))return;g&&d.util.hasFunction(g,"apply")&&(f[c]=function(){try{return g.apply(this,
arguments)}catch(a){throw d.onError("catch",a,{bindTime:u,bindStack:h}),d.util.wrapError(a);}},"addEventListener"===b&&this._trackJsEvt.add(f[0],g,f[2],f[c]));return e.apply(this,f)}catch(l){a[b]=e,d.onFault(l)}})},wrapRemoveEventListener:function(a){if(a&&a.removeEventListener&&this.util.hasFunction(a.removeEventListener,"call")){var b=a.removeEventListener;a.removeEventListener=function(a,d,e){if(this._trackJsEvt){var f=this._trackJsEvt.getWrapped(a,d,e);f&&this._trackJsEvt.remove(a,d,e);return b.call(this,
a,f,e)}return b.call(this,a,d,e)}}}};var m=function(){this.events=[]};m.prototype={add:function(a,b,c,d){-1>=this.indexOf(a,b,c)&&this.events.push([a,b,!!c,d])},remove:function(a,b,c){a=this.indexOf(a,b,!!c);0<=a&&this.events.splice(a,1)},getWrapped:function(a,b,c){a=this.indexOf(a,b,!!c);return 0<=a?this.events[a][3]:k},indexOf:function(a,b,c){for(var d=0;d<this.events.length;d++)if(this.events[d][0]===a&&this.events[d][1]===b&&this.events[d][2]===!!c)return d;return-1}};var t=function(a,b){this.util=
a;this.initCurrent(b)};t.prototype={current:{},initOnly:{application:"",enabled:!0,token:!0,callback:{enabled:!0},console:{enabled:!0},network:{enabled:!0},visitor:{enabled:!0},window:{enabled:!0}},defaults:{application:"",enabled:!0,onError:function(){return!0},serialize:function(a){return a===k?"undefined":null===a?"null":"number"===typeof a&&isNaN(a)?"NaN":""===a?"Empty String":0===a?"0":!1===a?"false":a&&a.toString?a.toString():"unknown"},sessionId:"",token:"",userId:"",version:"",callback:{enabled:!0,
bindStack:!1},console:{enabled:!0,display:!0,error:!0,watch:["log","debug","info","warn","error"]},network:{enabled:!0,error:!0},visitor:{enabled:!0},window:{enabled:!0}},initCurrent:function(a){if(this.validate(a,this.defaults,"config",{}))return this.current=this.util.extend(this.current,this.defaults,a),!0;this.current=this.util.extend(this.current,this.defaults);return!1},setCurrent:function(a){return this.validate(a,this.defaults,"config",this.initOnly)?(this.current=this.util.extend(this.current,
a),!0):!1},validate:function(a,b,c,d){var e=!0;c=c||"";d=d||{};for(var f in a)if(a.hasOwnProperty(f))if(b.hasOwnProperty(f)){var g=typeof b[f];g!==typeof a[f]?(console.warn(c+"."+f+": property must be type "+g+"."),e=!1):"[object Array]"!==Object.prototype.toString.call(a[f])||this.validateArray(a[f],b[f],c+"."+f)?"[object Object]"===Object.prototype.toString.call(a[f])?e=this.validate(a[f],b[f],c+"."+f,d[f]):d.hasOwnProperty(f)&&(console.warn(c+"."+f+": property cannot be set after load."),e=!1):
e=!1}else console.warn(c+"."+f+": property not supported."),e=!1;return e},validateArray:function(a,b,c){var d=!0;c=c||"";for(var e=0;e<a.length;e++)this.util.contains(b,a[e])||(console.warn(c+"["+e+"]: invalid value: "+a[e]+"."),d=!1);return d}};var q=function(a,b,c,d,e,f,g){this.util=a;this.log=b;this.onError=c;this.onFault=d;this.serialize=e;g.enabled&&(f.console=this.wrapConsoleObject(f.console,g))};q.prototype={wrapConsoleObject:function(a,b){a=a||{};var c=a.log||function(){},d=this,e;for(e=
0;e<b.watch.length;e++)(function(e){var g=a[e]||c;a[e]=function(){try{var a=Array.prototype.slice.call(arguments);d.log.add("c",{timestamp:d.util.isoNow(),severity:e,message:d.serialize(a)});if(b.error&&"error"===e)try{throw Error(a[0]);}catch(c){d.onError("console",c)}b.display&&(d.util.hasFunction(g,"apply")?g.apply(this,a):g(a[0],a[1],a[2]))}catch(h){d.onFault(h)}}})(b.watch[e]);return a},report:function(){return this.log.all("c")}};var r=function(a,b,c,d,e){this.config=a;this.util=b;this.log=
c;this.window=d;this.document=e;this.correlationId=this.token=null;this.initialize()};r.prototype={initialize:function(){this.token=this.getCustomerToken();this.correlationId=this.getCorrelationId()},getCustomerToken:function(){if(this.config.current.token)return this.config.current.token;var a=this.document.getElementsByTagName("script");return a[a.length-1].getAttribute("data-token")},getCorrelationId:function(){var a;try{a=this.document.cookie.replace(/(?:(?:^|.*;\s*)TrackJS\s*\=\s*([^;]*).*$)|^.*$/,
"$1"),a||(a=this.util.uuid(),this.document.cookie="TrackJS="+a+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/")}catch(b){a=this.util.uuid()}return a},report:function(){return{application:this.config.current.application,correlationId:this.correlationId,sessionId:this.config.current.sessionId,token:this.token,userId:this.config.current.userId,version:this.config.current.version}}};var s=function(a){this.loadedOn=(new Date).getTime();this.window=a};s.prototype={discoverDependencies:function(){var a,
b={};this.window.jQuery&&(this.window.jQuery.fn&&this.window.jQuery.fn.jquery)&&(b.jQuery=this.window.jQuery.fn.jquery);this.window.jQuery&&(this.window.jQuery.ui&&this.window.jQuery.ui.version)&&(b.jQueryUI=this.window.jQuery.ui.version);this.window.angular&&(this.window.angular.version&&this.window.angular.version.full)&&(b.angular=this.window.angular.version.full);for(a in this.window)if("_trackJs"!==a&&"_trackJS"!==a&&"_trackjs"!==a&&"webkitStorageInfo"!==a&&"webkitIndexedDB"!==a)try{if(this.window[a]){var c=
this.window[a].version||this.window[a].Version||this.window[a].VERSION;"string"===typeof c&&(b[a]=c)}}catch(d){}return b},report:function(){return{age:(new Date).getTime()-this.loadedOn,dependencies:this.discoverDependencies(),userAgent:this.window.navigator.userAgent,viewportHeight:this.window.document.documentElement.clientHeight,viewportWidth:this.window.document.documentElement.clientWidth}}};var v=function(a){this.util=a;this.appender=[];this.maxLength=30};v.prototype={all:function(a){var b=
[],c,d;for(d=0;d<this.appender.length;d++)(c=this.appender[d])&&c.category===a&&b.push(c.value);return b},clear:function(){this.appender.length=0},truncate:function(){this.appender.length>this.maxLength&&(this.appender=this.appender.slice(Math.max(this.appender.length-this.maxLength,0)))},add:function(a,b){var c=this.util.uuid();this.appender.push({key:c,category:a,value:b});this.truncate();return c},get:function(a,b){var c,d;for(d=0;d<this.appender.length;d++)if(c=this.appender[d],c.category===a&&
c.key===b)return c.value;return!1}};var w=function(a,b,c,d,e,f){this.util=a;this.log=b;this.onError=c;this.onFault=d;this.window=e;this.options=f;f.enabled&&this.initialize(e)};w.prototype={initialize:function(a){a.XMLHttpRequest&&this.util.hasFunction(a.XMLHttpRequest.prototype.open,"apply")&&this.watchNetworkObject(a.XMLHttpRequest);a.XDomainRequest&&this.util.hasFunction(a.XDomainRequest.prototype.open,"apply")&&this.watchNetworkObject(a.XDomainRequest)},watchNetworkObject:function(a){var b=this,
c=a.prototype.open,d=a.prototype.send;a.prototype.open=function(a,b){0>b.indexOf("localhost:0")&&(this._trackJs={method:a,url:b});return c.apply(this,arguments)};a.prototype.send=function(){try{if(!this._trackJs)return d.apply(this,arguments);this._trackJs.logId=b.log.add("n",{startedOn:b.util.isoNow(),method:this._trackJs.method,url:this._trackJs.url});b.listenForNetworkComplete(this)}catch(a){b.onFault(a)}return d.apply(this,arguments)};return a},listenForNetworkComplete:function(a){var b=this;
b.window.ProgressEvent&&a.addEventListener&&a.addEventListener("readystatechange",function(){4===a.readyState&&b.finalizeNetworkEvent(a)},!0);a.addEventListener?a.addEventListener("load",function(){b.finalizeNetworkEvent(a);b.checkNetworkFault(a)},!0):setTimeout(function(){try{var c=a.onload;a.onload=function(){b.finalizeNetworkEvent(a);b.checkNetworkFault(a);"function"===typeof c&&b.util.hasFunction(c,"apply")&&c.apply(a,arguments)};var d=a.onerror;a.onerror=function(){b.finalizeNetworkEvent(a);b.checkNetworkFault(a);"function"===typeof oldOnError&&d.apply(a,arguments)}}catch(e){b.onFault(e)}},0)},finalizeNetworkEvent:function(a){if(a._trackJs){var b=this.log.get("n",a._trackJs.logId);b&&(b.completedOn=this.util.isoNow(),b.statusCode=1223==a.status?204:a.status,b.statusText=1223==a.status?"No Content":a.statusText)}},checkNetworkFault:function(a){if(this.options.error&&400<=a.status&&1223!=a.status){var b=a._trackJs||{};this.onError("ajax",a.status+" "+a.statusText+": "+b.method+" "+b.url)}},
report:function(){return this.log.all("n")}};var n=function(a){this.util=a;this.disabled=!1;this.throttleStats={attemptCount:0,throttledCount:0,lastAttempt:(new Date).getTime()};h.JSON&&h.JSON.stringify||(this.disabled=!0)};n.prototype={errorEndpoint:function(a,b){b=(b||"https://capture.trackjs.com/capture")+("?token="+a);return this.util.isBrowserIE()?"//"+b.split("://")[1]:b},usageEndpoint:function(a){return this.appendObjectAsQuery(a,"https://usage.trackjs.com/usage.gif")},trackerFaultEndpoint:function(a){return this.appendObjectAsQuery(a,
"https://usage.trackjs.com/fault.gif")},appendObjectAsQuery:function(a,b){b+="?";for(var c in a)a.hasOwnProperty(c)&&(b+=encodeURIComponent(c)+"="+encodeURIComponent(a[c])+"&");return b},getCORSRequest:function(a,b){var c=new h.XMLHttpRequest;"withCredentials"in c?(c.open(a,b),c.setRequestHeader("Content-Type","text/plain")):"undefined"!==typeof h.XDomainRequest?(c=new h.XDomainRequest,c.open(a,b)):c=null;return c},sendTrackerFault:function(a){this.throttle(a)||((new Image).src=this.trackerFaultEndpoint(a))},
sendUsage:function(a){(new Image).src=this.usageEndpoint(a)},sendError:function(a,b){var c=this;if(!this.disabled&&!this.throttle(a))try{var d=this.getCORSRequest("POST",this.errorEndpoint(b));d.onreadystatechange=function(){4===d.readyState&&200!==d.status&&(c.disabled=!0)};d._trackJs=k;d.send(h.JSON.stringify(a))}catch(e){throw this.disabled=!0,e;}},throttle:function(a){var b=(new Date).getTime();this.throttleStats.attemptCount++;if(this.throttleStats.lastAttempt+1E3>=b){if(this.throttleStats.lastAttempt=
b,10<this.throttleStats.attemptCount)return this.throttleStats.throttledCount++,!0}else a.throttled=this.throttleStats.throttledCount,this.throttleStats.attemptCount=0,this.throttleStats.lastAttempt=b,this.throttleStats.throttledCount=0;return!1}};var x=function(a){this.window=a};x.prototype={bind:function(a,b){return function(){return a.apply(b,Array.prototype.slice.call(arguments))}},contains:function(a,b){var c;for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},defer:function(a,b){setTimeout(function(){a.apply(b)})},
extend:function(a){for(var b,c=Array.prototype.slice.call(arguments,1),d=0;d<c.length;d++)for(b in c[d])null===c[d][b]||c[d][b]===k?a[b]=c[d][b]:"[object Object]"===Object.prototype.toString.call(c[d][b])?(a[b]=a[b]||{},this.extend(a[b],c[d][b])):a[b]=c[d][b];return a},hasFunction:function(a,b){try{return!!a[b]}catch(c){return!1}},isBrowserIE:function(){var a=this.window.navigator.userAgent,b=a.match(/Trident\/([\d.]+)/);return b&&"7.0"===b[1]?11:(a=a.match(/MSIE ([\d.]+)/))?parseInt(a[1],10):!1},
isBrowserSupported:function(){var a=this.isBrowserIE();return!a||8<=a},isoNow:function(){var a=new Date;return a.toISOString?a.toISOString():a.getUTCFullYear()+"-"+this.pad(a.getUTCMonth()+1)+"-"+this.pad(a.getUTCDate())+"T"+this.pad(a.getUTCHours())+":"+this.pad(a.getUTCMinutes())+":"+this.pad(a.getUTCSeconds())+"."+String((a.getUTCMilliseconds()/1E3).toFixed(3)).slice(2,5)+"Z"},pad:function(a){a=String(a);1===a.length&&(a="0"+a);return a},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})},wrapError:function(a){if(a.innerError)return a;var b=Error("TrackJS Caught: "+(a.message||a));b.description="TrackJS Caught: "+a.description;b.file=a.file;b.line=a.line||a.lineNumber;b.column=a.column||a.columnNumber;b.stack=a.stack;b.innerError=a;return b}};var y=function(a,b,c,d,e,f){this.util=a;this.log=b;this.onError=c;this.onFault=d;this.options=f;this.document=e;f.enabled&&this.initialize(e)};y.prototype={initialize:function(a){var b=
this.util.bind(this.onDocumentClicked,this),c=this.util.bind(this.onInputChanged,this);a.addEventListener?(a.addEventListener("click",b,!0),a.addEventListener("blur",c,!0)):a.attachEvent&&(a.attachEvent("onclick",b),a.attachEvent("onfocusout",c))},onDocumentClicked:function(a){try{var b=this.getElementFromEvent(a);b&&b.tagName&&(this.isDescribedElement(b,"a")||this.isDescribedElement(b,"button")||this.isDescribedElement(b,"input",["button","submit"])?this.writeVisitorEvent(b,"click"):this.isDescribedElement(b,
"input",["checkbox","radio"])&&this.writeVisitorEvent(b,"input",b.value,b.checked))}catch(c){this.onFault(c)}},onInputChanged:function(a){try{var b=this.getElementFromEvent(a);if(b&&b.tagName)if(this.isDescribedElement(b,"textarea"))this.writeVisitorEvent(b,"input",b.value);else if(this.isDescribedElement(b,"select")&&b.options&&b.options.length)this.onSelectInputChanged(b);else this.isDescribedElement(b,"input")&&!this.isDescribedElement(b,"input",["button","submit","hidden","checkbox","radio"])&&
this.writeVisitorEvent(b,"input",b.value)}catch(c){this.onFault(c)}},onSelectInputChanged:function(a){if(a.multiple)for(var b=0;b<a.options.length;b++)a.options[b].selected&&this.writeVisitorEvent(a,"input",a.options[b].value);else 0<=a.selectedIndex&&a.options[a.selectedIndex]&&this.writeVisitorEvent(a,"input",a.options[a.selectedIndex].value)},writeVisitorEvent:function(a,b,c,d){"password"===this.getElementType(a)&&(c=k);this.log.add("v",{timestamp:this.util.isoNow(),action:b,element:{tag:a.tagName.toLowerCase(),
attributes:this.getElementAttributes(a),value:this.getMetaValue(c,d)}})},getElementFromEvent:function(a){return a.target||p.elementFromPoint(a.clientX,a.clientY)},isDescribedElement:function(a,b,c){if(a.tagName.toLowerCase()!==b.toLowerCase())return!1;if(!c)return!0;a=this.getElementType(a);for(b=0;b<c.length;b++)if(c[b]===a)return!0;return!1},getElementType:function(a){return(a.getAttribute("type")||"").toLowerCase()},getElementAttributes:function(a){for(var b={},c=0;c<a.attributes.length;c++)"value"!==
a.attributes[c].name.toLowerCase()&&(b[a.attributes[c].name]=a.attributes[c].value);return b},getMetaValue:function(a,b){return a===k?k:{length:a.length,pattern:this.matchInputPattern(a),checked:b}},matchInputPattern:function(a){return""===a?"empty":/^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(a)?"email":/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(a)||/^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(a)?
"date":/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(a)?"usphone":/^\s*$/.test(a)?"whitespace":/^\d*$/.test(a)?"numeric":/^[a-zA-Z]*$/.test(a)?"alpha":/^[a-zA-Z0-9]*$/.test(a)?"alphanumeric":"characters"},report:function(){return this.log.all("v")}};var z=function(a,b,c,d,e){this.onError=
a;this.onFault=b;this.serialize=c;e.enabled&&this.watchWindowErrors(d)};z.prototype={watchWindowErrors:function(a){var b=this;a.onerror=function(a,d,e,f,g){try{g=g||{},g.message=g.message||b.serialize(a),g.file=g.file||b.serialize(d),g.line=g.line||parseInt(e,10)||null,g.column=g.column||parseInt(f,10)||null,b.onError("window",g)}catch(h){b.onFault(h)}}}};var A=function(a,b,c,d,e,f,g,h,k,l,m,n,p,t,q,r){try{this.window=q,this.document=r,this.util=new m(this.window),this.onError=this.util.bind(this.onError,
this),this.onFault=this.util.bind(this.onFault,this),this.serialize=this.util.bind(this.serialize,this),this.transmitter=new l(this.util),this.config=new d(this.util,a),this.log=new h(this.util),this.api=new b(this.config,this.util,this.onError),this.environment=new g(this.window),this.customer=new f(this.config,this.util,this.log,this.window,this.document),this.customer.token&&(this.config.current.enabled&&this.transmitter.sendUsage({token:this.customer.token,correlationId:this.customer.correlationId,
application:this.config.current.application,x:this.util.uuid()}),this.apiConsoleWatcher=new e(this.util,this.log,this.onError,this.onFault,this.serialize,this.api,this.config.defaults.console),this.windowConsoleWatcher=new e(this.util,this.log,this.onError,this.onFault,this.serialize,this.window,this.config.current.console),this.util.isBrowserSupported()&&this.config.current.enabled&&(this.callbackWatcher=new c(this.util,this.onError,this.onFault,this.window,this.config.current.callback),this.visitorWatcher=
new n(this.util,this.log,this.onError,this.onFault,this.document,this.config.current.visitor),this.networkWatcher=new k(this.util,this.log,this.onError,this.onFault,this.window,this.config.current.network),this.windowWatcher=new p(this.onError,this.onFault,this.serialize,this.window,this.config.current.window)))}catch(s){this.onFault(s)}};A.prototype={reveal:function(){if(this.customer.token)return this.api;this.window.console&&this.window.console.warn&&this.window.console.warn("TrackJS could not find a token");
return k},onError:function(a,b,c){if(this.util.isBrowserSupported()&&this.config.current.enabled)try{b=b||{};c=c||{bindStack:null,bindTime:null,force:!1};var d=b.message||b;if(!d||!d.indexOf||-1===d.indexOf("TrackJS Caught")){var e=this.util.extend({},{bindStack:c.bindStack,bindTime:c.bindTime,column:b.column||b.columnNumber,console:this.windowConsoleWatcher.report(),customer:this.customer.report(),entry:a,environment:this.environment.report(),file:b.file||b.fileName,line:b.line||b.lineNumber,message:c.force?
d:this.serialize(d),network:this.networkWatcher.report(),url:(h.location||"").toString(),stack:b.stack,timestamp:this.util.isoNow(),visitor:this.visitorWatcher.report(),version:"2.1.9"});if(!c.force)try{if(!this.config.current.onError(e,b))return}catch(f){e.console.push({timestamp:this.util.isoNow(),severity:"error",message:f.message});var g=this;setTimeout(function(){g.onError("catch",f,{force:!0})},0)}this.log.clear();this.transmitter.sendError(e,this.customer.token)}}catch(k){console.log(k),this.onFault(k)}},
onFault:function(a){var b=this.transmitter||new n;a=a||{};a={token:this.customer.token,file:a.file||a.fileName,msg:a.message||"unknown",stack:(a.stack||"unknown").substr(0,500),url:this.window.location,v:"2.1.9",x:this.util.uuid()};b.sendTrackerFault(a)},serialize:function(a){if(this.config&&this.config.current&&this.config.current.serialize)try{return this.config.current.serialize(a)}catch(b){return this.onError("catch",b,{force:!0}),this.util&&this.util.hasFunction(a,"toString")?a.toString():"unknown"}}};
l=new A(h._trackJs||h._trackJS||h._trackjs||{},function(a,b,c){return{attempt:function(a,e){try{var f=Array.prototype.slice.call(arguments,2);return a.apply(e||this,f)}catch(g){throw c("catch",g),b.wrapError(g);}},configure:function(b){return a.setCurrent(b)},track:function(a){a=a||{};if(!a.stack)try{throw Error(a);}catch(b){a=b}c("direct",a)},watch:function(a,e){return function(){try{var f=Array.prototype.slice.call(arguments,0);return a.apply(e||this,f)}catch(g){throw c("catch",g),b.wrapError(g);
}}},watchAll:function(a){var e=Array.prototype.slice.call(arguments,1),f;for(f in a)"function"===typeof a[f]&&(b.contains(e,f)||function(){var e=a[f];a[f]=function(){try{var a=Array.prototype.slice.call(arguments,0);return e.apply(this,a)}catch(d){throw c("catch",d),b.wrapError(d);}}}());return a},version:"2.1.9"}},l,t,q,r,s,v,w,n,x,y,z,m,h,p);h.trackJs=l.reveal()}})(window,document);
*/




}
/*(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&appId=398943743535206&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
*/
/* jshint ignore:end */

// localstorage interface

'use strict';
/*jshint multistr: true */

/*globals chrome:false */

/* exported  storageClass */

var storageClass = function (){

	function setSetting(name, val, callback){
		try{
		  	console.log('setting ' + name + ' = ' + val);
		  	var obj = {};
		  	obj[name] = val;

		  	if (syncAvailable()) {
				chrome.storage.sync.set(obj, callback);
			} else {
				localStorage.setItem(name, val);
				if (callback) { 
					callback(name, val);// might be different from sync
				}
			}
		} catch(error) {
			// do nothing
		}
	}

	function getSetting(name, callback) {
		if (syncAvailable()) {
			chrome.storage.sync.get(name, function (items) {
				console.log('got storage ' + name + ': ' + items[name]);
				callback(items[name]);
			});
		} else if (localStorage) {
			var result = localStorage.getItem(name);
			if (callback) { 
				callback(result);
			}
		} else {
			if (callback) {
				callback(null);
			}
		}
	}

	function syncAvailable() {
		return typeof(chrome) !== 'undefined'  && 
						chrome.storage !== undefined && 
						chrome.storage.sync !== undefined;
	}

	// public functions
	return {
		set: function(name, value, onSave){
			return setSetting(name, value, onSave);
		},
		get: function(name, onGet){
			return getSetting(name, onGet);
		}
	};
};
/* jshint ignore:start */


// Include the UserVoice JavaScript SDK (only needed once on a page)
//UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');
//uv.type='text/javascript';uv.async=true;uv.src='https://widget.uservoice.com/6ZxdF0ZIHNl8VdvcVRSm2A.js';
//var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();

window.UserVoice = {events:window.UserVoice||[],push:function(x){window.UserVoice.events.push(x)},account:{"campaign":"footer_poweredby","name":"API Starter","white_labeled":false,"subdomain_ssl_host":"apistarter.uservoice.com","subdomain_site_host":"apistarter.uservoice.com","subdomain_key":"apistarter","subdomain_id":235823,"client_key":"6ZxdF0ZIHNl8VdvcVRSm2A","client_options":null,"smartvote_autoprompt_enabled":true,"satisfaction_autoprompt_enabled":true,"messages":{"Loading":"Loading"}},client_widgets:{},manifest:{"tab-left-dark":"/pkg/clients/widget2/tab-left-dark-e89fceb89af232658b40362993385936.png","tab-left-dark-no-bullhorn":"/pkg/clients/widget2/tab-left-dark-no-bullhorn-b0b7f5027c63700387f010da3385d278.png","tab-left-light":"/pkg/clients/widget2/tab-left-light-e79b3d5a5bcb9a8cb3aaba4e7c08853e.png","tab-left-light-no-bullhorn":"/pkg/clients/widget2/tab-left-light-no-bullhorn-978e55e46fb61a295c914e2b6f3d4bfe.png","tab-right-dark":"/pkg/clients/widget2/tab-right-dark-da2413549ce324fc421ae86a0e5881ee.png","tab-right-dark-no-bullhorn":"/pkg/clients/widget2/tab-right-dark-no-bullhorn-0132cc76ef9e62ce31bb84088e8c0eb0.png","tab-right-light":"/pkg/clients/widget2/tab-right-light-087cbff98d6cd97b87d4a73c4232a642.png","tab-right-light-no-bullhorn":"/pkg/clients/widget2/tab-right-light-no-bullhorn-f246ba6076ce0e74cbffa93c1328fdc4.png","tab-horizontal-dark":"/pkg/clients/widget2/tab-horizontal-dark-3efc2033e3bb06b1eefaa3431d3d47d8.png","tab-horizontal-dark-no-bullhorn":"/pkg/clients/widget2/tab-horizontal-dark-no-bullhorn-7cdf414f3f944a78dd7439dced926fd2.png","tab-horizontal-light":"/pkg/clients/widget2/tab-horizontal-light-75fca6f195066c2da966daf9e706b949.png","tab-horizontal-light-no-bullhorn":"/pkg/clients/widget2/tab-horizontal-light-no-bullhorn-e052ef0d62993c4d8f7179a5fbb4f088.png","close":"/pkg/clients/widget2/close-cd8571377d9499a984190ca453714b3b.png","pb":"/pkg/clients/widget2/powered_by-0684ee8d751bce50921b2807087eaf1c.png","screenshot":"/pkg/clients/omnibox/screenshot-e8965e1bf01616360e480f88faa08a1f.js"}};"undefined"!=typeof UserVoice&&UserVoice.showLightbox||!function(t,e,o){function i(t){O("Error: "+t+" See https://www.uservoice.com/o/javascript-sdk for more help.")}function s(t){for(var e=[],o=0;o<t.length;o++)e.push(t[o]);return e}function n(t,e,o,i,s){var n=t-e/2;return o>n-s&&(n=o+s),n+e+s>i&&(n=i-e-s),n}function r(e){if("getComputedStyle"in t){for(var i=["transitionDuration","MozTransitionDuration","WebkitTransitionDuration","OTransitionDuration","msTransitionDuration"],s=0,n=0,r=i.length;r>n;n++){var a=i[n],l=A.getComputedStyle(e)[a]||e.style[a];if(l){s=1e3*parseFloat(l);break}}if(0!==s){var p=A.data(e,"transition-timer"),d=A.data(e,"transition-timeout-at"),c=+new Date+s;A.addClass(e,"uv-is-transitioning"),e.offsetWidth,(p===o||c>d)&&(clearTimeout(p),A.data(e,"transition-timer",setTimeout(function(){A.removeClass(e,"uv-is-transitioning"),e.offsetWidth},s)),A.data(e,"transition-timeout-at",c))}}}function a(t){meta=e.createElement("meta"),meta.setAttribute("name","viewport"),meta.setAttribute("content",t),e.head.appendChild(meta)}function l(){for(var t,o=e.getElementsByTagName("meta"),i=0;i<o.length;i++)if(/viewport/i.test(o[i].getAttribute("name"))){t=o[i];break}return t}function p(){if(!Y){var t=l(),e=/user-scalable\s*=\s*(0|1|no|yes)/;if(t){I=t;var o=t.getAttribute("content");t.parentNode.removeChild(t),e.test(o)?a(o.replace(e,"user-scalable=0")):a(o+"; user-scalable=0")}else a("user-scalable=0");Y=!0}}function d(){if(Y){var t=l();t.parentNode.removeChild(t),I?e.head.appendChild(I):a("user-scalable=1"),Y=!1}}function c(t,e){return t.replace(/\#\{([^{}]*)\}/g,function(t,o){var i=e[o];return"string"==typeof i||"number"==typeof i?i:t})}function h(t){var o=e.createElement("div");return o.innerHTML=t,e.body.insertBefore(o.firstChild,e.body.firstChild),e.body.firstChild}function u(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(t,e){e||(e=function(t){return t});var o=[];for(var i in t)if(t.hasOwnProperty(i)){var s=e(i)+"="+e(t[i]);o.push(s)}return o.join("&")}function m(t){for(var e=Array.prototype.slice.call(arguments,1),o=e.length,i=0;o>i;i++)for(var s in e[i])e[i].hasOwnProperty(s)&&("object"==typeof t[s]&&"object"==typeof e[i][s]?m(t[s],e[i][s]):t[s]=e[i][s]);return t}function b(t,o){var i=e.createElement("style");i.type="text/css",i.media=o||"screen",i.styleSheet?i.styleSheet.cssText=t:i.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(i)}function f(){X||(b("#uvTab,.uv-tray,.uv-icon,.uv-popover,.uv-bubble{display:none!important}","print"),X=!0)}function v(){j||(b(".uv-icon:hover{opacity:1}"),j=!0)}function x(){return e.getElementsByTagName("html")[0]}function y(){var o=e.documentElement,i=o&&o.clientWidth||e.body.clientWidth,s=t.innerHeight||o&&o.clientHeight||e.body.clientHeight;return{width:i,height:s}}function w(t){return((new Date).getTime()-t)/1e3/60/60/24}function _(t){return t&&(t.tab_color!==o&&(t.trigger_background_color=t.tab_color),t.tab_position!==o&&(t.trigger_position=t.tab_position)),t||{}}function k(t,e){return e&&("support"===e.mode?e.post_suggestion_enabled=!1:"feedback"===e.mode&&(e.contact_enabled=!1),delete e.mode,e.default_mode!==o&&(e.classic_default_mode=e.default_mode),_(e)),T({mode:t},e||{})}function C(){C.fired||(C.fired=!0,Q.tracker.trackExternalView(),Q.tracker.ready(),Q.scan())}var S={};S.sanitizeValue=function(t,e){var o;switch(e){case"boolean":o="true"===t||t===!0?!0:!1;break;case"timestamp":"[object Date]"===Object.prototype.toString.call(t)?o=t.getTime():(o=parseInt(t,10),isNaN(o)&&(o=0),44308744825>o&&(o=1e3*o));break;case"int":o=parseInt(t,10),isNaN(o)&&(o=0);break;case"float":o=parseFloat(t),isNaN(o)&&(o=0);break;case"string":o=t.toString();break;default:o=t}return o},S.uTF8Encode=function(t){t=t.replace(/\x0d\x0a/g,"\n");for(var e="",o=0;o<t.length;o++){var i=t.charCodeAt(o);128>i?e+=String.fromCharCode(i):i>127&&2048>i?(e+=String.fromCharCode(192|i>>6),e+=String.fromCharCode(128|63&i)):(e+=String.fromCharCode(224|i>>12),e+=String.fromCharCode(128|63&i>>6),e+=String.fromCharCode(128|63&i))}return e},S.base64Encode=function(t){var e,o,i,s,n,r,a,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p="",d=0;for(t=S.uTF8Encode(t);d<t.length;)e=t.charCodeAt(d++),o=t.charCodeAt(d++),i=t.charCodeAt(d++),s=e>>2,n=(3&e)<<4|o>>4,r=(15&o)<<2|i>>6,a=63&i,isNaN(o)?r=a=64:isNaN(i)&&(a=64),p=p+l.charAt(s)+l.charAt(n)+l.charAt(r)+l.charAt(a);return p},S.extend=function(t){for(var e=Array.prototype.slice.call(arguments,1),o=e.length,i=0;o>i;i++)for(var s in e[i])e[i].hasOwnProperty(s)&&(t[s]=e[i][s]);return t},S.values=function(t){var e,o=[];if(null==t)return o;for(e in t)t.hasOwnProperty(e)&&o.push(t[e]);return o},S.setCookie=function(t,o,i){i=S.extend({path:"/",domain:"",expires:new Date},i||{});var s=[t,"=",encodeURIComponent(o),"; path=",i.path,"; domain=",i.domain];return i.expires&&(i.expires.setFullYear(i.expires.getFullYear()+1),s.push("; expires="),s.push(i.expires.toUTCString())),e.cookie=s.join(""),o},S.getCookie=function(t){for(var o,i=(e.cookie||"").split(";"),s=i.length,n=0;s>n;n++)if(o=S.trim(i[n]),o.substr(0,t.length+1)===t+"=")return decodeURIComponent(o.substr(t.length+1))},S.trim=function(t){var e=String.prototype.trim;return e?e.apply(t):t.replace(/^\s+|\s+$/g,"")},S.isSpider=function(){return/(google web preview|baiduspider|yandexbot)/i.test(t.navigator.userAgent)},S.log=function(){"undefined"!=typeof console&&"undefined"!=typeof console.log&&"undefined"!=typeof console.log.apply&&console.log.apply(console,arguments)},function(){function e(t){return 10>t?"0"+t:t}function o(t){return a.lastIndex=0,a.test(t)?'"'+t.replace(a,function(t){var e=l[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function i(t,e){var a,l,p,d,c,h=s,u=e[t];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(t)),"function"==typeof r&&(u=r.call(e,t,u)),typeof u){case"string":return o(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(s+=n,c=[],"[object Array]"===Object.prototype.toString.apply(u)){for(d=u.length,a=0;d>a;a+=1)c[a]=i(a,u)||"null";return p=0===c.length?"[]":s?"[\n"+s+c.join(",\n"+s)+"\n"+h+"]":"["+c.join(",")+"]",s=h,p}if(r&&"object"==typeof r)for(d=r.length,a=0;d>a;a+=1)"string"==typeof r[a]&&(l=r[a],p=i(l,u),p&&c.push(o(l)+(s?": ":":")+p));else for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(p=i(l,u),p&&c.push(o(l)+(s?": ":":")+p));return p=0===c.length?"{}":s?"{\n"+s+c.join(",\n"+s)+"\n"+h+"}":"{"+c.join(",")+"}",s=h,p}}"object"!=typeof JSON&&(t.JSON={}),"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var s,n,r,a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,l={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,e,o){var a;if(s="",n="","number"==typeof o)for(a=0;o>a;a+=1)n+=" ";else"string"==typeof o&&(n=o);if(r=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return i("",{"":t})})}();var U=function(t,o){function i(e,o){var s=this;this.subdomain=e,this.config=S.extend({},i.default_config,o||{}),this.babaId=a++,this.sessionCallbackName="__uvSessionData"+this.babaId,t[this.sessionCallbackName]=function(t){s.sync(t)},this.tracks=[],this.identity=null,this.session=null,this.uvts=null,this.isReady=!1,this.needsIdentityFlush=!1,this.needsSessionFlush=!1,this.firedUvts=!1,this.firedSession=!1,this.syncedSession=!0,this.cookieable=null,this.initFromCookie(),t.__babas.push(this)}function s(t){this.props={},!t===Object(t)&&(t={}),this.set(S.extend({},t,{o:(new Date).getTimezoneOffset()}))}function n(){this.store=new r,this.recurrent=this.store.get("r"),this.store.set("r",!0)}function r(){var e="x";this.storage=null;try{this.storage="sessionStorage"in t&&t.sessionStorage,this.set(e,e),this.get(e)!==e?this.storage=null:this.remove(e)}catch(o){this.storage=null}}var a=0;t.__babas=t.__babas||[],i.prototype.initFromCookie=function(){var t=S.getCookie(this.config.cookie_name);this.log("Babayaga#initFromCookie: %s",t),t&&this.setUvts(t)},i.prototype.identify=function(t){this.log("Babayaga#identify: %O",t),this.identity?this.identity.set(t):this.identity=new s(t),this.needsIdentityFlush=!0,this.flush()},i.prototype.getIdentity=function(){return this.identity?this.identity.toJSON():void 0},i.prototype.syncSession=function(){this.syncedSession=!1,this.identify({})},i.prototype.updateSession=function(t){this.log("Babayaga#updateSession: %O",t),this.needsSessionFlush=S.extend({},this.needsSessionFlush||{},this.session.set(t)),this.flush()},i.prototype.getSession=function(t){return this.session.get(t)},i.prototype.dumpSession=function(){return this.session.toJSON()},i.prototype.sync=function(t){this.log("Babayaga#sync: %O",t),t===Object(t)&&(this.session.set(t),t.uvts&&this.setUvts(t.uvts),this.syncCreatedAt(),this.fireSession())},i.prototype.syncCreatedAt=function(){var t=this.identity&&this.identity.get("created_at");t&&(this.log("Babayaga#syncCreatedAt: %O",t),this.session.set({created_at:t}))},i.prototype.fireSession=function(){this.session.isEnabled()&&(this.firedSession?this.syncedSession||("function"==typeof this.config.onSync&&this.config.onSync(),this.syncedSession=!0):("function"==typeof this.config.onSession&&this.config.onSession(),this.firedSession=!0))},i.prototype.setUvts=function(t){this.uvts=t,S.setCookie(this.config.cookie_name,t,{domain:this.cookieDomain()}),this.firedUvts||("function"==typeof this.config.onUvts&&this.config.onUvts(t),this.firedUvts=!0)},i.prototype.setConfig=function(t){this.config=S.extend(this.config,t)},i.prototype.setChannel=function(t){this.setConfig({channel:t})},i.prototype.track=function(t,e,o){var i={evt:t,props:e};o&&(i.channel=o),this.tracks.push(i),this.flush()},i.prototype.trackExternalView=function(){this.log("Babayaga#trackExternalView: %s",this.config.channel),"external"===this.config.channel&&this.track("view_page",{u:e.location.toString(),r:e.referrer})},i.prototype.flush=function(){if(this.isReady&&this.config.enabled){var t=0,e=this.tracks.length;if(this.log("Babayaga#flush: %s",e),this.uvts||this.shouldTrack())for((0===e&&this.needsIdentityFlush||this.needsSessionFlush)&&this.sendTrack({evt:"identify"});e>t;t+=1)this.sendTrack(this.tracks.shift())}},i.prototype.sendTrack=function(t){var o=[this.config.domain,"/t/",this.subdomain,"/",l[t.channel||this.config.channel]||"_","/",p[t.evt]||"_"],i={},s=!this.syncedSession||!this.session.recurrent&&!this.firedSession;this.uvts&&(o.push("/"),o.push(this.uvts)),o.push("/track.js?_="+(new Date).getTime()),o.push("&s="+(s?"0":"1")),o=o.join(""),this.needsIdentityFlush&&(i.u=this.identity.toJSON(),this.needsIdentityFlush=!1),this.needsSessionFlush===Object(this.needsSessionFlush)&&(i.u=S.extend({},i.u||{},this.needsSessionFlush),this.needsSessionFlush=!1),t.props&&S.values(t.props).length>0&&(i.e=t.props),this.log("Babayaga#sendTrack: %s, %O",o,i),i=S.values(i).length>0?encodeURIComponent(S.base64Encode(JSON.stringify(i))):null;var n,r,a;a=["&c=",this.sessionCallbackName],i&&(a.push("&d="),a.push(i)),n=e.getElementsByTagName("script")[0],r=e.createElement("script"),r.type="application/javascript",r.async=!0,r.defer=!0,r.src=o+a.join(""),n.parentNode.insertBefore(r,n)},i.prototype.ready=function(){this.log("Babayaga#ready: %s",this.isReady),this.isReady||(this.isReady=!0,this.session=new n,this.flush(),this.afterReady())},i.prototype.afterReady=function(){},i.prototype.shouldTrack=function(){return!S.isSpider()&&this.haveCookies()},i.prototype.haveCookies=function(){return null===this.cookieable&&(S.setCookie("__uvt","1",{domain:this.cookieDomain()}),this.cookieable=!!S.getCookie("__uvt"),S.setCookie("__uvt","",{domain:this.cookieDomain()})),this.log("Babayaga#haveCookies: %s",this.cookieable),this.cookieable},i.prototype.log=function(){this.config.logging_enabled&&S.log.apply(null,arguments)},i.prototype.cookieDomain=function(e){return e||t.location.hostname},s.prototype.set=function(t){var e,o;if(!t===Object(t)&&(t={}),t.account){e=t.account,delete t.account;for(o in e)e.hasOwnProperty(o)&&(t["account_"+o]=e[o])}for(o in t)s.keys.hasOwnProperty(o)&&(this.props[o]=S.sanitizeValue(t[o],s.keys[o]));return this.props},s.prototype.get=function(t){return this.props[t]},s.prototype.toJSON=function(){return this.props},s.keys={o:"int",name:"string",email:"string",id:"string",type:"string",created_at:"timestamp",account_name:"string",account_id:"string",account_monthly_rate:"float",account_ltv:"float",account_plan:"string",account_created_at:"timestamp"},n.prototype.set=function(t){var e,o={};for(e in t)n.keys.hasOwnProperty(e)&&(o[e]=S.sanitizeValue(t[e],n.keys[e]));for(e in o)o.hasOwnProperty(e)&&this.store.set(e,o[e]);return o},n.prototype.get=function(t){return this.store.get(t)},n.prototype.toJSON=function(){var t,e={};for(var i in n.keys)n.keys.hasOwnProperty(i)&&(t=this.get(i),t!==o&&(e[i]=t));return e},n.prototype.isEnabled=function(){return this.store.isEnabled()},n.keys={created_at:"timestamp",last_sat_at:"timestamp",last_smartvote_at:"timestamp",dismissed_smartvote_at:"timestamp",dismissed_sat_at:"timestamp",autoprompted_satisfaction_at:"timestamp",autoprompted_smartvote_at:"timestamp",active_days:"int",autoprompt_disabled:"boolean"},r.prototype.isEnabled=function(){return!!this.storage},r.prototype.get=function(t){if(this.storage){var e,o=this.storage.getItem(this.makeKey(t));try{e=JSON.parse(o)}catch(i){}return e}},r.prototype.set=function(t,e){this.storage&&this.storage.setItem(this.makeKey(t),JSON.stringify(e))},r.prototype.remove=function(t){this.storage&&this.storage.removeItem(this.makeKey(t))},r.prototype.makeKey=function(t){return r.namespace+t},r.namespace="__uv_";var l={external:"x",classic_widget:"w",smartvote_widget:"e",instant_answers_widget:"o",satisfaction_widget:"t",site2:"s",admin:"a"},p={view_page:"p",view_forum:"m",view_topic:"c",view_kb:"k",view_channel:"o",view_idea:"i",view_article:"f",view_comparison:"a",authenticate:"u",search_ideas:"s",search_articles:"r",vote_idea:"v",vote_article:"z",submit_ticket:"t",submit_idea:"d",subscribe_idea:"b",rate_satisfaction:"e",identify:"y",comment_idea:"h",dismiss:"w",autoprompt:"x",pick_idea:"1",view_tweet_button:"2",clicked_tweet_button:"3",posted_tweet:"4"};return i.default_config={cookie_name:"uvts",domain:"https://by.uservoice.com",channel:"external",enabled:!0,logging_enabled:!1},i}(this),z=S.base64Encode,T=S.extend,O=(S.values,S.setCookie,S.getCookie,S.lpad,S.trim,S.log),E=".uv-icon{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;cursor:pointer;position:relative;-webkit-transition:all 300ms;-moz-transition:all 300ms;-o-transition:all 300ms;transition:all 300ms;width:39px;height:39px;position:fixed;z-index:100002;opacity:0.8;-webkit-transition:opacity 100ms;-moz-transition:opacity 100ms;-o-transition:opacity 100ms;transition:opacity 100ms}.uv-icon.uv-bottom-right{bottom:10px;right:12px}.uv-icon.uv-top-right{top:10px;right:12px}.uv-icon.uv-bottom-left{bottom:10px;left:12px}.uv-icon.uv-top-left{top:10px;left:12px}.uv-icon.uv-is-selected{opacity:1}.uv-icon svg{width:39px;height:39px}.uv-popover{font-family:sans-serif;font-weight:100;font-size:13px;color:black;position:fixed;z-index:100001}.uv-popover-content{-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px;background:white;position:relative;width:325px;height:325px;-webkit-transition:background 200ms;-moz-transition:background 200ms;-o-transition:background 200ms;transition:background 200ms}.uv-bottom .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-top .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-left .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-right .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-ie8 .uv-popover-content{position:relative}.uv-ie8 .uv-popover-content .uv-popover-content-shadow{display:block;background:black;content:'';position:absolute;left:-15px;top:-15px;width:100%;height:100%;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=15,MakeShadow=true,ShadowOpacity=0.30);z-index:-1}.uv-popover-tail{border:9px solid transparent;width:0;z-index:10;position:absolute;-webkit-transition:border-top-color 200ms;-moz-transition:border-top-color 200ms;-o-transition:border-top-color 200ms;transition:border-top-color 200ms}.uv-top .uv-popover-tail{bottom:-20px;border-top:11px solid white}.uv-bottom .uv-popover-tail{top:-20px;border-bottom:11px solid white}.uv-left .uv-popover-tail{right:-20px;border-left:11px solid white}.uv-right .uv-popover-tail{left:-20px;border-right:11px solid white}.uv-popover-loading{background:white;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px;position:absolute;width:100%;height:100%;left:0;top:0}.uv-popover-loading-text{position:absolute;top:50%;margin-top:-0.5em;width:100%;text-align:center}.uv-popover-iframe-container{height:100%}.uv-popover-iframe{-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px;overflow:hidden}.uv-is-hidden{display:none}.uv-is-invisible{display:block !important;visibility:hidden !important}.uv-is-transitioning{display:block !important}.uv-no-transition{-moz-transition:none !important;-webkit-transition:none !important;-o-transition:color 0 ease-in !important;transition:none !important}.uv-fade{opacity:1;-webkit-transition:opacity 200ms ease-out;-moz-transition:opacity 200ms ease-out;-o-transition:opacity 200ms ease-out;transition:opacity 200ms ease-out}.uv-fade.uv-is-hidden{opacity:0}.uv-scale-top,.uv-scale-top-left,.uv-scale-top-right,.uv-scale-bottom,.uv-scale-bottom-left,.uv-scale-bottom-right,.uv-scale-right,.uv-scale-right-top,.uv-scale-right-bottom,.uv-scale-left,.uv-scale-left-top,.uv-scale-left-bottom,.uv-slide-top,.uv-slide-bottom,.uv-slide-left,.uv-slide-right{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-top.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%);-moz-transform:scale(0.8) translateY(-15%);-ms-transform:scale(0.8) translateY(-15%);-o-transform:scale(0.8) translateY(-15%);transform:scale(0.8) translateY(-15%)}.uv-scale-top-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%) translateX(-10%);-moz-transform:scale(0.8) translateY(-15%) translateX(-10%);-ms-transform:scale(0.8) translateY(-15%) translateX(-10%);-o-transform:scale(0.8) translateY(-15%) translateX(-10%);transform:scale(0.8) translateY(-15%) translateX(-10%)}.uv-scale-top-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%) translateX(10%);-moz-transform:scale(0.8) translateY(-15%) translateX(10%);-ms-transform:scale(0.8) translateY(-15%) translateX(10%);-o-transform:scale(0.8) translateY(-15%) translateX(10%);transform:scale(0.8) translateY(-15%) translateX(10%)}.uv-scale-bottom.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%);-moz-transform:scale(0.8) translateY(15%);-ms-transform:scale(0.8) translateY(15%);-o-transform:scale(0.8) translateY(15%);transform:scale(0.8) translateY(15%)}.uv-scale-bottom-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%) translateX(-10%);-moz-transform:scale(0.8) translateY(15%) translateX(-10%);-ms-transform:scale(0.8) translateY(15%) translateX(-10%);-o-transform:scale(0.8) translateY(15%) translateX(-10%);transform:scale(0.8) translateY(15%) translateX(-10%)}.uv-scale-bottom-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%) translateX(10%);-moz-transform:scale(0.8) translateY(15%) translateX(10%);-ms-transform:scale(0.8) translateY(15%) translateX(10%);-o-transform:scale(0.8) translateY(15%) translateX(10%);transform:scale(0.8) translateY(15%) translateX(10%)}.uv-scale-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(15%);-moz-transform:scale(0.8) translateX(15%);-ms-transform:scale(0.8) translateX(15%);-o-transform:scale(0.8) translateX(15%);transform:scale(0.8) translateX(15%)}.uv-scale-right-top.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(15%) translateY(-10%);-moz-transform:scale(0.8) translateX(15%) translateY(-10%);-ms-transform:scale(0.8) translateX(15%) translateY(-10%);-o-transform:scale(0.8) translateX(15%) translateY(-10%);transform:scale(0.8) translateX(15%) translateY(-10%)}.uv-scale-right-bottom.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(15%) translateY(10%);-moz-transform:scale(0.8) translateX(15%) translateY(10%);-ms-transform:scale(0.8) translateX(15%) translateY(10%);-o-transform:scale(0.8) translateX(15%) translateY(10%);transform:scale(0.8) translateX(15%) translateY(10%)}.uv-scale-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(-15%);-moz-transform:scale(0.8) translateX(-15%);-ms-transform:scale(0.8) translateX(-15%);-o-transform:scale(0.8) translateX(-15%);transform:scale(0.8) translateX(-15%)}.uv-scale-left-top.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(-15%) translateY(-10%);-moz-transform:scale(0.8) translateX(-15%) translateY(-10%);-ms-transform:scale(0.8) translateX(-15%) translateY(-10%);-o-transform:scale(0.8) translateX(-15%) translateY(-10%);transform:scale(0.8) translateX(-15%) translateY(-10%)}.uv-scale-left-bottom.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(-15%) translateY(10%);-moz-transform:scale(0.8) translateX(-15%) translateY(10%);-ms-transform:scale(0.8) translateX(-15%) translateY(10%);-o-transform:scale(0.8) translateX(-15%) translateY(10%);transform:scale(0.8) translateX(-15%) translateY(10%)}.uv-slide-top.uv-is-hidden{-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);-ms-transform:translateY(-100%);-o-transform:translateY(-100%);transform:translateY(-100%)}.uv-slide-bottom.uv-is-hidden{-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%);transform:translateY(100%)}.uv-slide-left.uv-is-hidden{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}.uv-slide-right.uv-is-hidden{-webkit-transform:translateX(100%);-moz-transform:translateX(100%);-ms-transform:translateX(100%);-o-transform:translateX(100%);transform:translateX(100%)}\n",V=function(){function e(t){this.events=t,this.timer=null,this.last_hash=null}return e.prototype.listen=function(){var e=this;return"postMessage"in t&&("addEventListener"in t?t.addEventListener("message",function(t){e.dispatchEvent.apply(e,[t])},!1):t.attachEvent("onmessage",function(t){e.dispatchEvent.apply(e,[t])})),this},e.prototype.dispatchEvent=function(t){var e=t.data;try{e=JSON.parse(e)}catch(o){}if(e===Object(e))for(var i in e)e.hasOwnProperty(i)&&this.events.hasOwnProperty(i)&&this.events[i](e[i],t.source,t.origin);else this.events.hasOwnProperty(e)&&this.events[e]()},e.getHash=function(){var e=t.location.href.match(/#(.*)$/);return e?e[1]:""},e}(),F={};F.match=function(t){return t.test(navigator.userAgent)},F.match(/IEMobile/i)?F.ieMobile=!0:F.match(/msie (\d+\.\d+);/i)?(F.ie=!0,F.version=parseInt(RegExp.$1,10),F["ie"+F.version]=!0,F.ieCompatibility=7===F.version&&F.match(/Trident/i),F.ieQuirks=e.compatMode&&"BackCompat"===e.compatMode):F.match(/Trident.*rv:(\d+)/i)&&(F.ie=!0,F.version=parseInt(RegExp.$1,10),F["ie"+F.version]=!0),F.touch="ontouchstart"in t,F.mobile=F.match(/Android.*Mobile|iPhone|IEMobile/i),F.tablet=!F.mobile&&F.match(/Android|iOS/i),F.iOS="ontouchstart"in t&&F.match(/like Mac OS X/i);var I,N=function(t){return UserVoice.account.messages[t]},A=function(){var o=function(){var t,o,i;if(1===arguments.length?(t=e,o="div",i=arguments[0]):2===arguments.length?(t=arguments[0],o="div",i=arguments[1]):(t=arguments[0],o=arguments[1],i=arguments[2]),t.querySelector)return t.querySelector(o+"."+i);for(var s=t.getElementsByTagName(o),n=new RegExp("\b"+i+"\b","gmi"),r=0;r<s.length;r++)if(n.test(s[r].className))return s[r];return null},i=0;return o.uniqId=function(){return i+=1,"uv-"+i},o.identify=function(t){var e=t.getAttribute("id");return e?e:(e=o.uniqId(),t.setAttribute("id",e),e)},o.data=function(){function t(t,i,s){var n=o.identify(t);return e[n]=e[n]||{},arguments.length>2?e[n][i]=s:e[n][i]}var e={};return t}(),o.addClass=function(t,e){new RegExp("(^|\\s+)"+e+"(\\s+|$)").test(t.className)||(t.className+=(t.className?" ":"")+e)},o.removeClass=function(t,e){t.className=t.className.replace(new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)","g")," ")},o.hasClass=function(t,e){return t.className.indexOf(e)>-1},o.dimensions=function(t){var e=t.display;if("none"!==e&&null!==e)return{width:t.offsetWidth,height:t.offsetHeight};var o=t.style,i=o.visibility,s=o.position,n=o.display;o.visibility="hidden",o.position="absolute",o.display="block";var r=t.clientWidth,a=t.clientHeight;return o.display=n,o.position=s,o.visibility=i,{width:r,height:a}},o.offset=function(t){for(var e=t,o={top:0,left:0};e;)o.top+=e.offsetTop,o.left+=e.offsetLeft,e=e.offsetParent;return o},o.on=function(e,o,i){"addEventListener"in e?e.addEventListener(o,i,!1):e.attachEvent("on"+o,function(){return i.call(e,t.event)})},o.off=function(t,e,o){"removeEventListener"in t?t.removeEventListener(e,o,!1):t.detachEvent(e,o)},o.one=function(t,e,i){var s=function(){i(arguments),o.off(t,e,s)};o.on(t,e,s)},o.ready=function(o){if(e.addEventListener)"complete"===e.readyState?o():(e.addEventListener("DOMContentLoaded",o,!1),t.addEventListener("load",o,!1));else if(e.attachEvent){e.attachEvent("onreadystatechange",o),t.attachEvent("onload",o);var i=!1;try{i=null===t.frameElement}catch(s){}e.documentElement.doScroll&&i}},o.element=function(t){return t.nodeName?t:e.getElementById(t.substr(1))},o.getComputedStyle=function(e){var o=t.getComputedStyle(e);return o?o:{}},o}(),Y=!1,X=!1,j=!1,M=["https:"===e.location.protocol?"https://":"http://","widget.uservoice.com"].join(""),P={"tab-light-bottom-right":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};","tab-dark-bottom-right":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};","tab-light-top-right":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};","tab-dark-top-right":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};","tab-light-bottom-left":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};","tab-dark-bottom-left":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};","tab-light-top-left":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};","tab-dark-top-left":"background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};","tab-light-middle-left":"background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};","tab-dark-middle-left":"background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};","tab-light-middle-right":"background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};","tab-dark-middle-right":"background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};","link-vertical":"display:block;padding:39px 5px 10px 5px;text-decoration:none;","link-horizontal":"display:block;padding:6px 10px 2px 42px;text-decoration:none;","link-vertical-no-bullhorn":"display:block;padding:10px 5px 10px 5px;text-decoration:none;","link-horizontal-no-bullhorn":"display:block;padding:6px 10px 2px 10px;text-decoration:none;"},D="    html.uvw-dialog-open object,    html.uvw-dialog-open iframe,    html.uvw-dialog-open embed {      visibility: hidden;    }    html.uvw-dialog-open iframe.uvw-dialog-iframe {      visibility: visible;    }    ",L=function(){function t(t){this.template='<div id="uvTab" style="#{tabStyle}"><a id="uvTabLabel" style="background-color: transparent; #{linkStyle}" href="javascript:return false;"><img src="#{imgSrc}" alt="#{tab_label}" style="border:0; background-color: transparent; padding:0; margin:0;" /></a></div>',this.widgets=[],this.options=t,this.processOptions()
}return t.prototype.push=function(t){this.widget=t,this.widgets.push(t)},t.prototype.pop=function(){1!==this.widgets.length&&(this.widgets.pop(),this.widget=this.widgets[this.widgets.length-1])},t.prototype.render=function(){this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el);var t=new Image,e=this;A.on(t,"load",function(){e.createElement(),e.show(),Q.pendingAutoprompt&&(Q.pendingAutoprompt=!1,Q.autoprompt())}),t.src=this.options.imgSrc,f()},t.prototype.createElement=function(){var t=this.el=h(c(this.template,this.options)),e=t.getElementsByTagName("a")[0],o=this;A.addClass(t,"uv-tab uv-slide-"+this.edge),this.dimensions=A.dimensions(t),this.hide(!1),this.rotation&&(t.style.marginTop=["-",Math.round(this.dimensions.height/2),"px"].join("")),A.on(e,"click",function(t){return t.preventDefault&&t.preventDefault(),o.visibleWidget?o.visibleWidget.hide():o.widget.show(),!1})},t.prototype.remove=function(){this.el&&(this.widget.hide(),this.hide())},t.prototype.hide=function(t){t=t===o?!0:t,t&&r(this.el),A.addClass(this.el,"uv-is-hidden"),this.el.offsetWidth},t.prototype.show=function(){r(this.el),A.removeClass(this.el,"uv-is-hidden"),this.el.offsetWidth},t.prototype.processOptions=function(){var t={trigger_position:"right",trigger_background_color:"CC6D00",tab_label:"feedback",tab_inverted:!1},e=T({},t,this.options);e.trigger_position.match(/^((top|bottom|middle)-(left|right)|left|right)$/)||(e.trigger_position=t.trigger_position),e.trigger_position.match(/^(right|left)$/)&&(e.trigger_position="middle-"+e.trigger_position),"string"==typeof e.trigger_background_color&&e.trigger_background_color.match(/^#/)&&(e.trigger_background_color=e.trigger_background_color.substring(1));var o=/([^\-]+)-([^\-]+)/.exec(e.trigger_position),i=o[1],s=o[2],n="middle"===o[1]?90:0,r=UserVoice.account.white_labeled?"-no-bullhorn":"",a=["tab-",e.inverted?"light-":"dark-",e.trigger_position].join(""),l=[n?"link-vertical":"link-horizontal",r].join(""),p=[M,"/dcache","/widget/feedback-tab.png?t=",encodeURIComponent(e.tab_label),"&c=",e.tab_inverted?encodeURIComponent(e.trigger_background_color):"ffffff","&r=",encodeURIComponent(n),e.tab_inverted?"&i=yes":""].join(""),d=e.trigger_position.replace(/middle-/,"").replace(/(bottom|top)-(right|left)/,"horizontal");d=["tab-",d,e.tab_inverted?"-light":"-dark",r].join(""),d=[M,UserVoice.manifest[d]].join(""),e.bgImage=d,e.imgSrc=p,e.tab_label=u(e.tab_label),a=P[a],l=P[l],(F.ie6||F.ieQuirks)&&(a+="position:absolute !important;","top"===i?a+="top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (!this.offsetHeight && 0)) + 'px');":"middle"===i?a+="top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + ((((document.documentElement.clientHeight || document.body.clientHeight) + (!this.offsetHeight && 0)) / 2) >> 0)) + 'px');":"bottom"===i&&(a+="top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight) + 'px');")),e.tabStyle=c(a,{color:e.trigger_background_color,bgImage:e.bgImage}),e.linkStyle=l,"top"===i?this.edge="top":"bottom"===i?this.edge="bottom":"left"===s?this.edge="left":"right"===s&&(this.edge="right"),this.rotation=n,this.options=e},t}(),W=function(){function i(){}return i.template='      <div class="uv-popover-content">        <div class="uv-popover-iframe-container"></div>        <div class="uv-popover-loading"><div class="uv-popover-loading-text">'+N("Loading")+'&#8230;</div></div>        <!-- shadow for ie8 -->        <div class="uv-popover-content-shadow"></div>      </div>    ',i.prototype.show=function(t){t=t===o?!0:t,Q.hideActive(),Q.active=this,this.el||this.render(),this.trigger&&(this.trigger.visibleWidget=this),this.trigger&&this.trigger.popoverWillShow&&this.trigger.popoverWillShow(),t?this.animateIn():A.removeClass(this.el,"uv-is-hidden"),this.iframe.poke({show:!0}),this.iframe.poke({focus:null})},i.prototype.hide=function(t){if(t=t===o?!0:t,Q.active=null,this.el||this.render(),this.trigger&&(this.trigger.visibleWidget=null),this.trigger&&this.trigger.popoverWillHide&&this.trigger.popoverWillHide(),t?this.animateOut():A.addClass(this.el,"uv-is-hidden"),this.temp){var e=this.el;setTimeout(function(){e.parentNode.removeChild(e)},500)}},i.prototype.toggle=function(t){this.el||this.render(),this.visible()?this.hide(t):this.show(t)},i.prototype.animateIn=function(){this.position(),r(this.el),A.removeClass(this.el,"uv-is-hidden"),this.el.offsetWidth,this.createIframe()},i.prototype.preload=function(){this.el||this.render(),this.createIframe(!0)},i.prototype.animateOut=function(){r(this.el),A.addClass(this.el,"uv-is-hidden")},i.prototype.visible=function(){return!A.hasClass(this.el,"uv-is-hidden")&&!this.preloading},i.prototype.paneOpened=function(t,e){e.needsReload&&(this.needsReload=!0)},i.prototype.position=function(){this.preloading&&(A.addClass(this.el,"uv-is-hidden"),this.el.style.left="",this.preloading=!1);var t=this.visible();A.addClass(this.el,"uv-no-transition"),t||(A.addClass(this.el,"uv-is-invisible"),this.el.style.left="-1000px"),A.removeClass(this.el,"uv-scale-\\S+"),this.el.offsetWidth,this.calculatePosition(),this.el.offsetWidth,t||A.removeClass(this.el,"uv-is-invisible"),A.removeClass(this.el,"uv-no-transition"),this.el.offsetWidth},i.prototype.createIframe=function(e){var o=A(this.el,"uv-popover-iframe-container"),i=A(this.el,"uv-popover-loading"),s=this;(!this.iframe||this.needsReload)&&(this.iframe&&(o.removeChild(this.iframe.el),this.needsReload=!1),e&&(A.removeClass(this.el,"uv-is-hidden"),this.el.style.left="-10000px",this.preloading=!0),this.iframe=new $("popover",this.options.widgetType,T({height:"100%"},UserVoice.globalOptions,this.options)),this.iframe.render(),A.addClass(this.iframe.el,"uv-popover-iframe"),o.appendChild(this.iframe.el),F.ie8&&A.addClass(this.el,"uv-ie8"),A.on(t,"resize",function(){s.visible()&&s.calculatePosition()}),i&&i.parentNode&&(this.iframe.loaded||F.ie&&F.version<10?i.parentNode.removeChild(i):A.one(this.iframe.el,"load",function(){s.preloading&&(A.addClass(s.el,"uv-is-hidden"),s.el.style.left="",s.preloading=!1),i.parentNode.removeChild(i)})))},i.prototype.createElement=function(t){var o=this.el=e.createElement("div");o.innerHTML=this.template,o.setAttribute("data-html2canvas-ignore",!0),this.options.width&&!F.mobile&&(A(o,"uv-popover-content").style.width=this.options.width),this.options.height&&!F.mobile&&(A(o,"uv-popover-content").style.height=this.options.height),A.addClass(this.el,"uv-popover uv-is-hidden"),t.appendChild(o)},i}(),B=function(){function o(t){this.template=W.template,this.options=t,f()}return o.prototype=T({},W.prototype),o.prototype.render=function(){this.createElement(e.body)},o.prototype.show=function(){var e,o,i;F.mobile&&p(),W.prototype.show.apply(this,arguments),F.match(/iPhone OS 7/)&&(e=this,i=function(){e.visible()&&(o!==y().height?(t.scrollBy(0),o=y().height,setTimeout(i,80)):setTimeout(i,800))},i())},o.prototype.hide=function(){W.prototype.hide.apply(this,arguments),F.mobile&&(d(),this.needsReload=!0)},o.prototype.calculatePosition=function(){var e=this.options.position.match(/^(top|bottom)-(left|right)$/)?this.options.position:"bottom-right",o=/(\w+)-(\w+)/.exec(e);if(this.el.style.zIndex=100003,F.mobile){var i=A(this.el,"uv-popover-content"),s=t.innerWidth,n=325,r=10,a=s/(n+2*r),l=Math.round(a*r);i.style.width="100%",i.style.height="100%",this.el.style.position="fixed",this.el.style.top=l+"px",this.el.style.left=l+"px",this.el.style.bottom=l+"px",this.el.style.right=l+"px"}else{var r=20;this.el.style.left="",this.el.style[o[1]]=r+"px",this.el.style[o[2]]=r+"px"}A.addClass(this.el,"uv-"+("bottom"===o[1]?"top":"bottom")),A.addClass(this.el,"uv-scale-"+e)},o}(),R=function(){function t(t,e){this.template=W.template+'<div class="uv-popover-tail"></div>',this.options=t,this.trigger=e,f()}return t.prototype=T({},W.prototype),t.prototype.render=function(){this.target="self"===this.options.target?this.trigger.el:A.element(this.options.target),Q.systemTrigger&&this.target===Q.systemTrigger.el?(this.container=this.target,this.isContained=!0):this.container=e.body,this.createElement(this.container)},t.prototype.paneOpened=function(t,e){W.prototype.paneOpened.apply(this,arguments),this.setTailColor(e.backgroundColor)},t.prototype.defaultPosition=function(){var t=this.target,o=A.offset(t),i=A.dimensions(t),s=t.currentStyle?t.currentStyle.position:A.getComputedStyle(t,null).position,n=100;return"fixed"!==s&&(o.top-=e.body.scrollTop,o.left-=e.body.scrollLeft),o.top<n?"bottom":o.top+i.height+n>y().height?"top":o.left<n?"right":o.left+i.width+n>y().width?"left":o.top>o.top+i.height-y().height?"bottom":"top"},t.prototype.calculatePosition=function(){var t=A(this.el,"uv-popover-tail"),e=this.target,o="automatic"===this.options.position?this.defaultPosition():this.options.position,i="top"===o?"bottom":"right"===o?"left":"left"===o?"right":"top",s="top"===o||"bottom"===o?"left":"top",r="left"===s?"width":"height",a="left"===s?"top":"left",l="width"===r?"height":"width",p=A.dimensions(this.el),d=A.dimensions(e),c=A.offset(e),h=n(c[s]+d[r]/2,p[r],0,y()[r],10),u=n(c[s]-h+d[r]/2,A.dimensions(t)[r],0,p[r],15),g=1*(u-A.dimensions(t)[r]/2)/p[r],m=1/3>=g?"left"===s?"-left":"-top":2/3>=g?"":"left"===s?"-right":"-bottom",b=e.currentStyle?e.currentStyle.position:A.getComputedStyle(e,null).position;this.currentPosition=o,this.el.style.position="fixed"!==b||this.isContained?"absolute":"fixed",this.el.style[s]=h-(this.isContained?c[s]:0)+"px",t.style[s]=u+"px",A.removeClass(this.el,"uv-(bottom|top|left|right)"),A.addClass(this.el,"uv-"+o),A.addClass(this.el,"uv-scale-"+i+m),"top"===o||"left"===o?this.el.style[a]=(this.isContained?0:c[a])-p[l]-14+"px":("bottom"===o||"right"===o)&&(this.el.style[a]=(this.isContained?0:c[a])+d[l]+14+"px")},t.prototype.setTailColor=function(t){"transparent"!==t&&("#ffffff"===t||"rgb(255, 255, 255)"===t||"white"===t||""===t?A.removeClass(this.el,"uv-reversed"):A.addClass(this.el,"uv-reversed"),A(this.el,"uv-popover-content").style.backgroundColor=t,A(this.el,"uv-popover-tail").style["border"+this.currentPosition[0].toUpperCase()+this.currentPosition.slice(1)+"Color"]=t)},t}(),J=function(){function t(t){var e={trigger_background_color:"rgba(46, 49, 51, 0.6)",trigger_position:"bottom-right"};this.options=T({},e,t),this.options.trigger_position.match(/^(bottom|top)-(left|right)$/)||(this.options.trigger_position=e.trigger_position),this.widgets=[],F.touch||v(),f()}return t.icon_images={contact:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\r\n<g>\r\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)" d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\r\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\r\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\r\n	<g>\r\n		<g>\r\n			<path class="uv-bubble-foreground" fill="#FFFFFF" d="M16.943,19.467c0-3.557,4.432-3.978,4.432-6.058c0-0.935-0.723-1.721-2.383-1.721\r\n				c-1.508,0-2.773,0.725-3.709,1.87l-2.441-2.743c1.598-1.9,4.01-2.924,6.602-2.924c3.891,0,6.271,1.959,6.271,4.765\r\n				c0,4.4-5.037,4.732-5.037,7.265c0,0.481,0.243,0.994,0.574,1.266l-3.316,0.965C17.303,21.459,16.943,20.522,16.943,19.467z\r\n				 M16.943,26.19c0-1.326,1.114-2.441,2.44-2.441c1.327,0,2.442,1.115,2.442,2.441c0,1.327-1.115,2.441-2.442,2.441\r\n				C18.058,28.632,16.943,27.518,16.943,26.19z"/>\r\n		</g>\r\n	</g>\r\n</g>\r\n</svg>\r\n',feedback:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',post_suggestion:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',smartvote:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',satisfaction:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\r\n<g>\r\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)" d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\r\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\r\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\r\n</g>\r\n<g>\r\n	<g>\r\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M13.501,19.25c0.308,0.3,0.501,0.891,0.427,1.314l-1.02,5.95c-0.073,0.423,0.18,0.604,0.56,0.404\r\n			l5.338-2.806c0.381-0.2,1.004-0.2,1.385,0l5.338,2.806c0.38,0.201,0.633,0.018,0.561-0.404l-1.02-5.95\r\n			C25,20.141,25.191,19.55,25.499,19.25l4.321-4.21c0.308-0.3,0.211-0.596-0.215-0.658l-5.968-0.868\r\n			c-0.426-0.062-0.93-0.427-1.119-0.813l-2.673-5.412c-0.19-0.385-0.501-0.385-0.691,0l-2.671,5.412\r\n			c-0.191,0.385-0.695,0.75-1.12,0.813l-5.967,0.868c-0.426,0.062-0.523,0.358-0.215,0.658L13.501,19.25z"/>\r\n	</g>\r\n</g>\r\n</svg>\r\n'},t.icon_images_ie8={contact:"//widget.uservoice.com/omnibox/icons/question_mark_bubble_icon.png",feedback:"//widget.uservoice.com/omnibox/icons/lightbulb_bubble_icon.png",post_suggestion:"//widget.uservoice.com/omnibox/icons/lightbulb_bubble_icon.png",smartvote:"//widget.uservoice.com/omnibox/icons/lightbulb_bubble_icon.png",satisfaction:"//widget.uservoice.com/omnibox/icons/star_bubble_icon.png"},t.prototype.remove=function(){this.widget.hide();try{e.body.removeChild(this.el)}catch(t){}},t.prototype.push=function(t){this.widget=t,this.widgets.push(t)},t.prototype.pop=function(){1!==this.widgets.length&&(this.widgets.pop(),this.widget=this.widgets[this.widgets.length-1])},t.prototype.render=function(){var e=this,o="classic_widget"===this.widget.options.mode?"contact":this.widget.options.mode;this.el||this.createElement();var i=t.icon_images[o];if(F.ie8){var s=t.icon_images_ie8[o];s+="?trigger_color="+encodeURIComponent(this.options.trigger_color),s+="&trigger_background_color="+encodeURIComponent(this.options.trigger_background_color),s+="&icon_version=3",i="<img src='"+s+"'/>"}this.el.innerHTML=i,F.ie8||(this.options.trigger_color&&(A(this.el,"path","uv-bubble-foreground").style.fill=this.options.trigger_color),this.options.trigger_background_color&&(A(this.el,"path","uv-bubble-background").style.fill=this.options.trigger_background_color)),A.on(this.el,"click",function(){e.visibleWidget?e.visibleWidget.hide():e.widget.show()}),F.touch||F.ie&&!(F.ie&&F.version>9)||A.one(e.el,"mousemove",function(){e.widget.preload()})},t.prototype.createElement=function(){var t=this.el=e.createElement("div");t.setAttribute("data-html2canvas-ignore",!0),A.addClass(this.el,"uv-icon uv-"+this.options.trigger_position),F.ie8&&A.addClass(this.el,"uv-ie8"),e.body.appendChild(this.el)},t.prototype.popoverWillShow=function(){A.addClass(this.el,"uv-is-selected")},t.prototype.popoverWillHide=function(){A.removeClass(this.el,"uv-is-selected")},t}(),H=function(){function t(t,e){this.el=t,this.options=e,A.data(this.el,"trigger",this)}return t.prototype.render=function(){var t=this;this.clickHandler=function(e){return t.options.trigger_prevent_default_enabled&&e.preventDefault&&e.preventDefault(),t.widget.toggle(),t.options.trigger_prevent_default_enabled?!1:void 0},A.on(this.el,"click",this.clickHandler),F.touch||F.ie&&!(F.ie&&F.version>9)||A.one(this.el,"mousemove",function(){t.removed||t.widget.preload()})},t.prototype.remove=function(){this.removed=!0,A.off(this.el,"click",this.clickHandler)},t}(),$=function(){function i(t,e,o){this.options=T({css:"display: block; background: transparent; padding: none; margin: none; border: none; width: #{width}; height: #{height}",cdn:"omnibox"===e,embed_type:t,type:e,width:"100%",height:"100%"},o),this.options.mode.match(/contact|instant/)?this.options.mode="contact":this.options.mode.match(/post_idea|post_suggestion/)?this.options.mode="feedback":"satisfaction"===this.options.mode&&(this.options.survey_lockout=!1),this.pokes=[],this.loaded=!1,this.setLocation(),this.src=[this.location.baseUrl,this.queryString()].join("?"),this.sendUserData(),i.all.push(this)}return i.all=[],i.prototype.setLocation=function(){var t="https";if(this.options.cdn){var e="widget.uservoice.com";this.location={host:e,protocol:t,baseUrl:[t,"://",e,"/",this.options.type,"/",encodeURIComponent(this.options.locale||"0"),"/",encodeURIComponent(this.options.accent_color||"0"),"/",UserVoice.account.client_key].join("")}}else this.location={host:UserVoice.account.subdomain_ssl_host,protocol:t,baseUrl:t+"://"+UserVoice.account.subdomain_ssl_host+"/clients/widgets/"+this.options.type};this.location.origin=[this.location.protocol,"://",this.location.host].join("")},i.prototype.doLoad=function(){this.loaded=!0,this.poke()},i.prototype.poke=function(e){if(e&&("object"==typeof e&&(e=JSON.stringify(e)),this.pokes.push(e)),this.loaded&&this.el&&this.el.contentWindow){for(var o=this.el.contentWindow,i=0,s=this.pokes.length;s>i;i++)if("postMessage"in t)o.postMessage(this.pokes[i],this.location.origin);else try{o.location.href=[this.src,(+new Date).toString()+"&"+this.pokes[i]].join("#")}catch(n){}this.pokes=[]}},i.prototype.render=function(){this.loaded=!1,this.options.startIframeLoad=+new Date;var t=this.el=e.createElement("iframe"),o=this,i={height:this.options.height,width:this.options.width},s=c(this.options.css,i);if(t.attachEvent?t.attachEvent("onload",function(){o.doLoad()}):t.onload=function(){o.doLoad()},t.name="uvw-iframe-"+this.options.id,A.addClass(t,"uvw-dialog-iframe"),F.ie?t.style.setAttribute("cssText",s,0):t.setAttribute("style",s),t.setAttribute("allowtransparency","true"),t.setAttribute("frameBorder","0"),t.frameBorder=0,!(F.ie&&F.version<9)){t.style.visibility="hidden";var n=t.onload;t.onload=function(){"function"==typeof n&&n(),t.style.visibility="visible"}}return t.src=this.src,t},i.prototype.queryString=function(){for(var e={},i=["sso","sess","mode","locale","link_color","topic_id","forum_id","article_id","suggestion_id","feedback_tab_name","support_tab_name","contact_us","email","status_ids","smartvote_status_ids","states","category_ids","smartvote_category_ids","survey_lockout","primary_color","accent_color","trigger_color","trigger_background_color","header","border","custom_template_id","design_settings_id","mixpanel_channel","allow_tests","demo","startIframeLoad","org_name","post_idea_title","contact_title","smartvote_title","context","embed_type","trigger_method","menu","screenshot_enabled","mobile","twitter_demo","twitter_demo_username","twitter_demo_message","twitter_demo_satisfaction_thanks_mode","twitter_demo_satisfaction_thanks_message","permalinks_enabled","strings","instant_answers","smartvote","satisfaction","contact_enabled","feedback_enabled"],s=0;s<i.length;s++){var n=i[s],r=this.options[n];r===o&&(r=this.options["__"+n]),r!==o&&("string"==typeof r&&n.match(/color/)&&r.match(/^#/)&&(r=r.substring(1)),"object"==typeof r&&(r=JSON.stringify(r)),e[n]=r)}this.options.post_idea_enabled!==o&&(this.options.post_suggestion_enabled=this.options.post_idea_enabled);var a=this.options.ticket_custom_fields||this.options.custom_fields;a&&"object"==typeof a&&(e.custom_fields=z(JSON.stringify(a)));var l=this.options.strings||{};return l&&"object"==typeof l&&(e.strings=z(JSON.stringify(l))),e.smartvote_status_ids&&(e.status_ids=e.smartvote_status_ids,delete e.smartvote_status_ids),e.smartvote_category_ids&&(e.category_ids=e.smartvote_category_ids,delete e.smartvote_category_ids),this.options.menu_enabled!==o&&(e.menu=this.options.menu_enabled),this.options.smartvote_enabled!==o&&(e.smartvote=this.options.smartvote_enabled),this.options.satisfaction_enabled!==o&&(e.satisfaction=this.options.satisfaction_enabled),this.options.post_suggestion_enabled!==o&&(e.feedback_enabled=this.options.post_suggestion_enabled),"classic_widget"===this.options.type&&(this.options.classic_default_mode!==o&&(e.default_mode=this.options.classic_default_mode),e.mode=this.options.contact_enabled?this.options.post_suggestion_enabled?"full":"support":"feedback"),e.referrer=t.location.href,g(e,function(t){try{t=decodeURIComponent(t)}catch(e){}return encodeURIComponent(t)})},i.prototype.sendUserData=function(){if(Q.uvts&&this.poke({setUvts:Q.uvts}),Q.email&&this.poke({setEmail:Q.email}),Q.external_user_ids&&Q.external_user_ids.length)for(var t=0;t<Q.external_user_ids.length;t++)this.poke({addExternalUserId:Q.external_user_ids[t]})},i.sendUserData=function(){for(var t=0;t<this.all.length;t++)this.all[t].sendUserData()},i}(),q=function(){function t(t,e){var o=A.dimensions(t).height,i={trigger_method:"embed",height:10>o?"325px":"100%",contact_enabled:!0,post_suggestion_enabled:!0,smartvote_enabled:!0,feedback_enabled:!0},s=Q.processModeOptions(T(i,UserVoice.globalOptions,e)),n=new $("inline",s.widgetType,s),r=t.currentStyle?t.currentStyle.position:A.getComputedStyle(t,null).position;for("static"===r&&(t.style.position="relative");t.firstChild;)t.removeChild(t.firstChild);t.appendChild(n.render()),n.poke({show:!0})}return t}(),K=function(){function o(t){this.iframe=new $("lightbox",t.widgetType,T({css:"display: block; border: none; -moz-border-radius: 3px; -webkit-border-radius: 3px; height: 100%; padding: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;-webkit-transform: translate3d(0,0,0);"},t)),this.template='<div class="uvOverlay1" id="uvw-overlay-#{id}" style="position: relative; visibility:hidden; z-index: 100003;"><div id="uvw-overlay-background-#{id}" style="background: #000; -ms-filter: alpha(opacity=75); filter: alpha(opacity=75); opacity: .75; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"></div><div class="uvOverlay2" style="height: 100%; overflow: auto; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"><div class="uvOverlay3" style="height: 100%; min-height: 550px; min-width: 900px; position: relative; width: 100%;"><div id="#{dialog_id}" style="-webkit-box-shadow: rgba(0,0,0,.5) 0 5px 5px; height: 500px; margin: -250px 0 0 -444px; position: absolute; top: 50%; left: 50%; width: 888px;"><div id="#{dialog_close_id}" title="Close Dialog" style="z-index: 100004; background: transparent url('+M+UserVoice.manifest.close+') 0 0 no-repeat; height: 48px; margin: 0; padding: 0; position: absolute; top: -22px; right: -24px; width: 48px;"><button style="background: none; border: none; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; cursor: pointer; height: 30px; margin: 6px 0 0 9px; padding: 0; width: 30px; text-indent: -9000px;">Close Dialog</button></div>'+'<div id="#{dialog_content_id}" style="position:static; width:100%; height:100%"></div>'+(UserVoice.account.campaign?'<a id="uvw-dialog-powered-by-#{id}" href="http://www.uservoice.com/powered-by?uv_experience=classic&amp;uv_company_name='+UserVoice.account.name+"&amp;uv_contact_url="+UserVoice.account.subdomain_site_host+"&amp;utm_campaign="+UserVoice.account.campaign+"&amp;utm_medium=widget2&amp;utm_source="+UserVoice.account.subdomain_ssl_host+'" target="_blank" style="background: url('+M+UserVoice.manifest.pb+') 0 0 no-repeat; font-size: 11px; height: 20px; position: absolute; bottom: -25px; right: 10px; text-indent: -9000px; width: 150px;">Powered by UserVoice</a>':"")+"</div></div></div></div>",this.id=A.uniqId(),this.dialog_id="uvw-dialog-"+this.id,this.dialog_close_id="uvw-dialog-close-"+this.id,this.dialog_content_id="uvw-dialog-content-"+this.id,this.options=t}return o.prototype.toggle=function(){this.show()},o.prototype.show=function(){F.ie6||F.touch||F.ieMobile||F.iOS||F.ieQuirks?t.open(this.iframe.src,"uservoice_widget","height=500,width=888,resizable=yes,scrollbars=1"):(this.initPopup(),this.overlay.style.visibility="visible",this.overlay.style.display="block",this.dialog.focus(),A.addClass(x(),"uvw-dialog-open"))},o.prototype.preload=function(){},o.prototype.hide=function(){this.iframe.poke("reset"),this.overlay&&(this.overlay.style.display="none"),A.removeClass(x(),"uvw-dialog-open")},o.prototype.initPopup=function(){if(this.overlay||(b(D),this.overlay=h(c(this.template,this))),this.iframe.poke("opened"),!this.dialog||this.dialog.getAttribute("data-widget-key")!==this.id){for(this.iframe.render(),this.dialogContent=e.getElementById(this.dialog_content_id);this.dialogContent.firstChild;)this.dialogContent.removeChild(this.dialogContent.firstChild);this.dialogContent.appendChild(this.iframe.el),this.dialog=e.getElementById(this.dialog_id),this.dialog.setAttribute("data-widget-key",this.id);var t=this;A.on(e.getElementById(this.dialog_close_id),"click",function(){return t.hide()})}},o}(),Q=function(){var i={session:!1,syncedSession:!1};return i.setUvts=function(t){i.uvts=t,$.sendUserData()},i.setEmail=function(t){i.email=t,$.sendUserData()},i.addExternalUserId=function(t){i.external_user_ids||(i.external_user_ids=[]),i.external_user_ids.push(t),$.sendUserData()},i.setSession=function(){i.session=!0,i.pendingAutoprompt&&(i.pendingAutoprompt=!1,i.autoprompt())},i.syncSession=function(){i.syncedSession=!0,i.pendingAutoprompt&&(i.pendingAutoprompt=!1,i.autoprompt())},i.tracker=new U(UserVoice.account.subdomain_id,{channel:e.location.host===UserVoice.account.subdomain_site_host?"site2":"external",onUvts:i.setUvts,onSession:i.setSession,onSync:i.syncSession}),i.autoprompt=function(){if(F.mobile)return this.pendingAutoprompt=!1,void 0;if(this.session===!1||this.systemTrigger&&this.systemTrigger.el===o)return this.pendingAutoprompt=!0,void 0;var t=this.tracker.dumpSession(),e=this.shouldShowSatisfactionPrompt(t),s=this.shouldShowSmartVotePrompt(t);if(e||s){if(this.syncedSession===!1)return this.pendingAutoprompt=!0,this.tracker.syncSession(),void 0;e&&(i.recordAutoprompt("satisfaction"),this.tracker.updateSession({dismissed_sat_at:(new Date).getTime()}),i.pushSystemWidget({mode:"satisfaction"}),i.showAutoprompt({mode:"satisfaction"}),this.tracker.track("autoprompt",{},"satisfaction_widget")),s&&(i.recordAutoprompt("smartvote"),this.tracker.updateSession({dismissed_smartvote_at:(new Date).getTime()}),i.showAutoprompt({mode:"smartvote"}),this.tracker.track("autoprompt",{},"smartvote_widget"))}},i.shouldShowSatisfactionPrompt=function(t){if(!UserVoice.account.satisfaction_autoprompt_enabled)return!1;if(t.autoprompt_disabled)return!1;var e=((new Date).getTime(),Math.max(t.created_at||0,this.lastSatisfactionPrompt(t))),o=this.lastSmartvotePrompt(t);return 0!==e?w(e)>=60&&(0===o||w(o)>=21):!1},i.shouldShowSmartVotePrompt=function(t){if(!UserVoice.account.smartvote_autoprompt_enabled)return!1;if(t.autoprompt_disabled)return!1;var e=((new Date).getTime(),this.lastSmartvotePrompt(t)),o=this.lastSatisfactionPrompt(t);return 0!==e?w(e)>=42&&(0===o||w(o)>=21):7===t.active_days&&(0===o||w(o)>=21)},i.lastSatisfactionPrompt=function(t){return Math.max(t.last_sat_at||0,t.dismissed_sat_at||0,t.autoprompted_satisfaction_at||0)},i.lastSmartvotePrompt=function(t){return Math.max(t.last_smartvote_at||0,t.dismissed_smartvote_at||0,t.autoprompted_smartvote_at||0)},i.scan=function(){var t,o=s(e.getElementsByTagName("*"));t=function(t,e,o){var s=t.getAttribute(e);t.hasAttribute&&t.hasAttribute(e)&&!t.getAttribute("data-uv-scanned")&&(t.setAttribute("data-uv-scanned","true"),o(t,s,i.extractOptions(t)))};for(var n=0;n<o.length;n++){var r=o[n];t(r,"data-uv-inline",this.renderInline),t(r,"data-uv-embed",this.renderInline),t(r,"data-uv-lightbox",this.linkToLightbox),t(r,"data-uv-show",this.linkToPopover),t(r,"data-uv-trigger",this.linkToPopover)}},i.renderInline=function(t,e,o){"classic_widget"===e?new q(t,k(e,o)):new q(t,T({mode:e,contact_enabled:!0,post_suggestion_enabled:!0,smartvote_enabled:!0,feedback_enabled:!0},o))},i.linkToLightbox=function(t,e,o){i.createCustomTrigger(t,T({target:"lightbox"},k(e,o)))},i.linkToPopover=function(t,e,o){i.createCustomTrigger(t,T({mode:e},o))},i.extractOptions=function(t){for(var e={},o=0;o<t.attributes.length;o++){var i=t.attributes[o],s=i.value;i.specified&&i.name.match(/^data-uv-/)&&(s.match(/^(true|false)$/)&&(s="true"===s),e[i.name.replace(/^data-uv-/,"").replace(/-/g,"_")]=s)}return e},i.processModeOptions=function(t){return t.mode=t.mode||(t.contact_enabled?"contact":t.smartvote_enabled?"smartvote":"post_suggestion"),t.mode.match(/instant/)&&(t.mode="contact"),"post_idea"===t.mode&&(t.mode="post_suggestion"),t.widgetType="classic_widget"===t.mode?t.mode:"omnibox",t},i.active=null,i.hideActive=function(){i.active&&i.active.hide()},i.createCustomTrigger=function(t,e){var o=new H(t,T({trigger_prevent_default_enabled:!0},UserVoice.globalOptions,e)),s=i.createWidget(T({trigger_method:"custom_trigger"},e),o);return e&&e.autoprompt&&(i.autopromptOptions=T({target:t},Widget.autopromptOptions||{})),o.widget=s,o.render(),o},i.createSystemTrigger=function(t){var e=T({trigger_color:"white"},UserVoice.globalOptions,t||{}),o=e.trigger_style||"icon",s="icon"===o?new J(e):new L(e),n=i.createWidget(T({trigger_method:"pin"},t),s);
if(!(F.ie&&F.version<8&&"icon"===o))return s.push(n),s.render(),s},i.createWidget=function(t,e){var o={target:"self",contact_enabled:!0,post_suggestion_enabled:!0,smartvote_enabled:!0,feedback_enabled:!0},s=i.processModeOptions(T(o,UserVoice.globalOptions,t));return F.mobile&&(s.mobile=!0),"lightbox"===s.target||"classic_widget"===s.mode?new K(s,e):s.target===!1||"self"===s.target&&!e?(s.position=s.position||"bottom-right",new B(s,e)):(s.position&&s.position.match(/^(automatic|top|bottom|left|right)$/)||(s.position="automatic"),F.mobile?new B(s,e):new R(s,e))},i.showWidget=function(t){i.createWidget(T({temp:!0},t),i.systemTrigger).show()},i.showAutoprompt=function(t){i.showWidget(T({trigger_method:"autoprompt"},i.autopromptOptions||{},t))},i.pushSystemWidget=function(t){i.systemTrigger&&i.systemTrigger.push(i.createWidget(t,i.systemTrigger))},i.recordAutoprompt=function(t){var o=i.tracker.getIdentity()||{},s={"audit[prompt_type]":t,"audit[uvts]":i.uvts,"audit[session_data]":JSON.stringify(i.tracker.dumpSession()),"audit[external_user_id]":o.id,"audit[email]":o.email},n=e.getElementsByTagName("script")[0],r=e.createElement("script");r.type="application/javascript",r.async=!0,r.defer=!0,r.src="http://"+UserVoice.account.subdomain_ssl_host+"/clients/widgets/omnibox/autoprompts/create.json?"+g(s),n.parentNode.insertBefore(r,n)},i.includeCss=function(){b(E)},new V({openPane:function(t){i.active&&i.active.paneOpened(t[0],t[1])},close:function(){i.active&&i.active.hide()},dismiss:function(){i.active&&i.active.hide()},voteSubmitted:function(){i.tracker.updateSession({last_smartvote_at:(new Date).getTime()})},ratingSubmitted:function(){i.systemTrigger&&i.systemTrigger.pop(),i.tracker.updateSession({last_sat_at:(new Date).getTime()})},captureScreenshot:function(o,i,s){("http://widget.uservoice.com"===s||"https://widget.uservoice.com"===s)&&(t.html2canvas_onload_options={onrendered:function(t){var e=t.toDataURL("image/png");if(e){var n=e.split(",",2)[1];i.postMessage(JSON.stringify({identifier:o,content_type:"image/png",base64data:n,width:t.width,height:t.height}),s)}}},function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="//assets.uvcdn.com"+UserVoice.manifest.screenshot+"?"+o;var i=e.getElementsByTagName("head")[0];i.appendChild(t)}())}}).listen(),i}();UserVoice.globalOptions={},UserVoice.push=function(t){var e=t[0],o=t.slice(1);"function"==typeof UserVoice[e]&&UserVoice[e].apply(null,o)},UserVoice.set=function(t,e){if("object"==typeof t)UserVoice.globalOptions=m(UserVoice.globalOptions,t);else{var o={};o[t]=e,UserVoice.set(o)}},UserVoice.embed=function(){var t=arguments[0],e=arguments[1],s=arguments[2];return("string"!=typeof t||"#"===t[0])&&(e=arguments[0],s=arguments[1],t=null),e===o?i("please specify where to embed it."):(Q.renderInline(A.element(e),t,s),void 0)},UserVoice.addTrigger=function(t,e){if(t&&t.nodeName||"string"==typeof t){if(F.ie&&F.version<8)return;Q.createCustomTrigger(A.element(t),e)}else e=t||{},Q.systemTrigger&&Q.systemTrigger.remove(),Q.systemTrigger=Q.createSystemTrigger(_(e))},UserVoice.show=function(t){"string"==typeof arguments[0]&&(t=T({mode:arguments[0]},arguments[1]||{})),Q.showWidget(T({trigger_method:"show"},t||{}))},UserVoice.hide=function(){Q.hideActive()},UserVoice.removeTrigger=function(t){t?A.data(A.element(t),"trigger").remove():(Q.systemTrigger.remove(),Q.systemTrigger=null)},UserVoice.autoprompt=function(t){Q.autopromptOptions=t,Q.autoprompt()},UserVoice.identify=function(t){Q.tracker.identify(t),t&&t.email&&Q.setEmail(t.email)},UserVoice.track=function(t,e){Q.tracker.track(t,e)},UserVoice.footprint=function(t){Q.tracker.setConfig({enabled:t})},UserVoice.scan=function(){Q.scan()},UserVoice.addExternalUserId=function(t){Q.addExternalUserId(t)},UserVoice.setOption=UserVoice.setOptions=UserVoice.set,UserVoice.setSSO=function(t){UserVoice.set("sso",t)},UserVoice.setCustomFields=function(t){UserVoice.set("ticket_custom_fields",t)},UserVoice.setLocale=function(t){UserVoice.set("locale",t)},UserVoice.showPrompt=UserVoice.showPopover=UserVoice.show,UserVoice.showLightbox=function(t,e){Q.showWidget(T({target:"lightbox"},k(t,e)))},UserVoice.hideLightbox=function(){},UserVoice.showIcon=UserVoice.pin=function(t,e){e&&(e.trigger_position=e.position,e.position="automatic"),UserVoice.addTrigger(T({mode:t,trigger_style:"icon"},e||{}))},UserVoice.showTab=function(t,e){UserVoice.addTrigger(T({trigger_style:"tab"},k(t,e)))},Q.includeCss();for(var Z=0;Z<UserVoice.events.length;Z++)UserVoice.push(UserVoice.events[Z]);Q.scan(),A.ready(C)}(window,document);


/* jshint ignore:end */

/**
 * Color utility functions, exposed as an AMD module.
 * No external dependencies.
 * Special thanks for the RGB to CIE conversion code goes out to the Q42 team 
 * for their Q42.HueApi work. Dank u!
 * More info: https://github.com/Q42/Q42.HueApi.
 *
 * https://github.com/bjohnso5/hue-hacking
 * Copyright (c) 2013 Bryan Johnson; Licensed MIT */

/*globals define:false */
 /*exported colors*/
var colors = function () {
    
    'use strict';
    
    /**
     * Represents a CIE 1931 XY coordinate pair.
     *
     * @param {Number} X coordinate.
     * @param {Number} Y coordinate.
     * @constructor
     */
    var XYPoint = function (x, y) {
        this.x = x;
        this.y = y;
    },
    
    Red = new XYPoint(0.675, 0.322),
    Lime = new XYPoint(0.4091, 0.518),
    Blue = new XYPoint(0.167, 0.04),
   
    /**
     * Parses a valid hex color string and returns the Red RGB integer value.
     *
     * @param {String} Hex color string.
     * @return {Number} Red integer value.
     */    
    hexToRed = function (hex) {
        return parseInt( hex.substring(0, 2), 16 );
    },
    
    /**
     * Parses a valid hex color string and returns the Green RGB integer value.
     *
     * @param {String} Hex color string.
     * @return {Number} Green integer value.
     */    
    hexToGreen = function (hex) {
        return parseInt( hex.substring(2, 4), 16 );
    },
    
    /**
     * Parses a valid hex color string and returns the Blue RGB integer value.
     *
     * @param {String} Hex color string.
     * @return {Number} Blue integer value.
     */
    hexToBlue = function (hex) {
        return parseInt( hex.substring(4, 6), 16 );
    },
    
    /**
     * Converts a valid hex color string to an RGB array.
     *
     * @param {String} Hex color String (e.g. FF00FF)
     * @return {Array} Array containing R, G, B values
     */
    hexToRGB = function (h) {
        var rgb = [hexToRed(h), hexToGreen(h), hexToBlue(h)];
        return rgb;
    },
    
    /**
     * Generates a random number between 'from' and 'to'.
     *
     * @param {Number} Number representing the start of a range.
     * @param {Number} Number representing the end of a range.
     */
    randomFromInterval = function (from /* Number */, to /* Number */) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    },
    
    /**
     * Return a random Integer in the range of 0 to 255, representing an RGB
     * color value.
     *
     * @return {number} Integer between 0 and 255.
     */
    randomRGBValue = function () {
        return randomFromInterval(0, 255);
    },
    
    /**
     * Returns the cross product of two XYPoints.
     *
     * @param {XYPoint} Point 1.
     * @param {XYPoint} Point 2.
     * @return {Number} Cross-product of the two XYPoints provided.
     */
    crossProduct = function (p1, p2) {
        return (p1.x * p2.y - p1.y * p2.x);
    },
    
    /**
     * Check if the provided XYPoint can be recreated by a Hue lamp.
     *
     * @param {XYPoint} XYPoint to check.
     * @return {boolean} Flag indicating if the point is within reproducible range.
     */
    checkPointInLampsReach = function (p) {
        var v1 = new XYPoint(Lime.x - Red.x, Lime.y - Red.y),
            v2 = new XYPoint(Blue.x - Red.x, Blue.y - Red.y),
        
            q = new XYPoint(p.x - Red.x, p.y - Red.y),
        
            s = crossProduct(q, v2) / crossProduct(v1, v2),
            t = crossProduct(v1, q) / crossProduct(v1, v2);
        
        return (s >= 0.0) && (t >= 0.0) && (s + t <= 1.0);
    },
    
    /**
     * Find the closest point on a line. This point will be reproducible by a Hue lamp.
     *
     * @param {XYPoint} The point where the line starts.
     * @param {XYPoint} The point where the line ends.
     * @param {XYPoint} The point which is close to the line.
     * @return {XYPoint} A point that is on the line, and closest to the XYPoint provided.
     */
    getClosestPointToPoint = function (A, B, P) {
        var AP = new XYPoint(P.x - A.x, P.y - A.y),
            AB = new XYPoint(B.x - A.x, B.y - A.y),
            ab2 = AB.x * AB.x + AB.y * AB.y,
            apab = AP.x * AB.x + AP.y * AB.y,
            t = apab / ab2;
        
        if (t < 0.0) {
            t = 0.0;
        } else if (t > 1.0) {
            t = 1.0;
        }
        
        return new XYPoint(A.x + AB.x * t, A.y + AB.y * t);
    },
    
    /**
     * Returns the distance between two XYPoints.
     *
     * @param {XYPoint} The first point.
     * @param {XYPoint} The second point.
     * @param {Number} The distance between points one and two.
     */
    getDistanceBetweenTwoPoints = function (one, two) {
        var dx = one.x - two.x, // horizontal difference
            dy = one.y - two.y; // vertical difference
        
        return Math.sqrt(dx * dx + dy * dy);
    },
    
    /**
     * Returns an XYPoint object containing the closest available CIE 1931
     * coordinates based on the RGB input values.
     *
     * @param {Number} RGB red value, integer between 0 and 255.
     * @param {Number} RGB green value, integer between 0 and 255.
     * @param {Number} RGB blue value, integer between 0 and 255.
     * @return {XYPoint} CIE 1931 XY coordinates, corrected for reproducibility.
     */
    getXYPointFromRGB = function (red, green, blue) {
        
        var r = (red > 0.04045) ? Math.pow((red + 0.055) / (1.0 + 0.055), 2.4) : (red / 12.92),
            g = (green > 0.04045) ? Math.pow((green + 0.055) / (1.0 + 0.055), 2.4) : (green / 12.92),
            b = (blue > 0.04045) ? Math.pow((blue + 0.055) / (1.0 + 0.055), 2.4) : (blue / 12.92),
        
            X = r * 0.4360747 + g * 0.3850649 + b * 0.0930804,
            Y = r * 0.2225045 + g * 0.7168786 + b * 0.0406169,
            Z = r * 0.0139322 + g * 0.0971045 + b * 0.7141733,
        
            cx = X / (X + Y + Z),
            cy = Y / (X + Y + Z);
        
        cx = isNaN(cx) ? 0.0 : cx;
        cy = isNaN(cy) ? 0.0 : cy;
        
        //Check if the given XY value is within the colourreach of our lamps.
        var xyPoint = new XYPoint(cx, cy),
            inReachOfLamps = checkPointInLampsReach(xyPoint);
        
        if (!inReachOfLamps) {
            
            //Color is unreproducible, find the closest point on each line in the CIE 1931 'triangle'.
            var pAB = getClosestPointToPoint(Red, Lime, xyPoint),
                pAC = getClosestPointToPoint(Blue, Red, xyPoint),
                pBC = getClosestPointToPoint(Lime, Blue, xyPoint),
            
            // Get the distances per point and see which point is closer to our Point.
                dAB = getDistanceBetweenTwoPoints(xyPoint, pAB),
                dAC = getDistanceBetweenTwoPoints(xyPoint, pAC),
                dBC = getDistanceBetweenTwoPoints(xyPoint, pBC),
            
                lowest = dAB,
                closestPoint = pAB;
            
            if (dAC < lowest) {
                lowest = dAC;
                closestPoint = pAC;
            }
            if (dBC < lowest) {
                lowest = dBC;
                closestPoint = pBC;
            }
            
            // Change the xy value to a value which is within the reach of the lamp.
            cx = closestPoint.x;
            cy = closestPoint.y;
        }
        
        return new XYPoint(cx, cy);
    };
    
    /**
     * Publicly accessible functions exposed as API.
     */
    return {
        /**
         * Converts hexadecimal colors represented as a String to approximate
         * CIE 1931 coordinates. May not produce accurate values.
         *
         * @param {String} Value representing a hexadecimal color value
         * @return {Array{Number}} Approximate CIE 1931 x,y coordinates.
         */
        hexToCIE1931 : function (h) {
            var rgb = hexToRGB(h);
            return this.rgbToCIE1931(rgb[0], rgb[1], rgb[2]);
        },
        
        /**
         * Converts red, green and blue integer values to approximate CIE 1931
         * x and y coordinates. Algorithm from: 
         * http://www.easyrgb.com/index.php?X=MATH&H=02#text2. May not produce
         * accurate values.
         *
         * @param {Number} red Integer in the 0-255 range.
         * @param {Number} green Integer in the 0-255 range.
         * @param {Number} blue Integer in the 0-255 range.
         * @return {Array{Number}} Approximate CIE 1931 x,y coordinates.
         */
        rgbToCIE1931 : function (red, green, blue) {
            var point = getXYPointFromRGB(red, green, blue);
            return [point.x, point.y];
        },
        
        /**
         * Returns the approximate CIE 1931 x,y coordinates represented by the 
         * supplied hexColor parameter, or of a random color if the parameter
         * is not passed.
         *
         * @param {String} hexColor String representing a hexidecimal color value.
         * @return {Array{Number}} Approximate CIE 1931 x,y coordinates.
         */
        getCIEColor : function (hexColor /* String */) {
            var hex = hexColor || null,
                xy = [];
            if (null !== hex) {
                xy = this.hexToCIE1931(hex);
            } else {
                var r = randomRGBValue(),
                    g = randomRGBValue(),
                    b = randomRGBValue();
                xy = this.rgbToCIE1931(r, g, b);
            }
            return xy;
        }, 
        hexFullRed:     'FF0000',
        hexFullGreen:   '00FF00',
        hexFullBlue:    '0000FF',
        hexFullWhite:   'FFFFFF'
    };
};

if(typeof(define) !== 'undefined' && typeof(define.amd) !== 'undefined') {
    define(colors);
} else {
    window.colors = colors();
}

/*exported Palettes */
'use strict';

// fill solid palette
var Palettes = {
    'Empty': [
    ],    
    'Kelvin degrees': [
        { name: 'Candle', color:'#FF9329'},
        { name: '40W Tungsten', color:'#FFC58F'},
        { name: '100W Tungsten', color:'#FFD6AA'},
        { name: 'Halogen', color:'#FFF1E0'},
        { name: 'Carbon Arc', color:'#FFFAF4'},
        { name: 'High Noon Sun', color:'#FFFFFB'},
        { name: 'Direct Sunlight', color:'#FFFFFF'},
        { name: 'Overcast Sky', color:'#C9E2FF'},
        { name: 'Clear Blue Sky', color:'#409CFF'}
    ],
    'Fluorescents': [
        { name: 'Warm Fluorescent', color: '#FFF4E5'},
        { name: 'Standard Fluorescent', color: '#F4FFFA'},
        { name: 'Cool White Fluorescent', color: '#D4EBFF'},
        { name: 'Full Spectrum Fluorescent', color: '#FFF4F2'},
        { name: 'Grow Light Fluorescent', color: '#FFEFF7'},
        { name: 'Pink Fluorescent', color: '#ffc0cb'}
    ],
    'Valentines': [
        { name: 'February 14', color: '#820081'},
        { name: 'Feelings', color: '#FE59C2'},
        { name: 'Joy', color: '#FE40B9'},
        { name: 'Hearts', color: '#FE1CAC'},
        { name: 'Attitude', color: '#390039'},
        { name: 'Pink Fluorescent', color: '#ffc0cb'}
    ],
    'Rainbow': [
        '#3400E5',
        '#7200E2',
        '#AD00DF',
        '#DD00D2',
        '#DA0094',
        '#D80058',
        '#D5001C',
        '#D31C00',
        '#D05500',
        '#CE8C00',
        '#CBC200',
        '#9BC900',
        '#63C600',
        '#2DC400',
        '#00C108',
        '#00BF3C'
    ], 
    'RomanticRed': [
        // '#4c0000',
        // '#660000',
        // '#7f0000',
        // '#990000',
        // '#b20000',
        // '#cc0000',
        // '#e50000',
         '#ff0000',
        '#ff1919',
        '#ff3232',
        '#ff4c4c',
        '#ff6666',
         '#ff7f7f',
         '#ff9999',
         '#ffb2b2'
        // '#ffcccc',
        // '#ffe5e5',
        // '#ffffff'
    ],
    'Sunrise': [
        '#FF8E74',
        '#FFB376',
        '#FFDF80',
        '#FFFA90',
        '#CBF2FF'
    ],
    'Thanksgiving': [
        '#FFC300',
        '#FF6200',
        '#FF0000',
        '#CD0500',
        '#690F00',
    ],
    'TurkeyFeast': [
        '#DE7600',
        '#BF7117',
        '#965811',
        '#9E4A0E',
        '#663715',
    ],
    'TurkeyDinner': [
        { name: 'Salad', color: '#456905'},
        { name: 'Tabasco', color: '#B2A509'},
        { name: 'Turkey Girll', color: '#E0E610'},
        { name: 'Salmon', color: '#FE6823'},
        { name: 'Grow Light Fluorescent', color: '#FFEFF7'},
        { name: 'Catch a turkey', color: '#AA5B00'}
    ],
    'Police': [
        '#0000FF',
        '#FF0000',
        '#0000FF',
        '#0000FF',
        '#FF0000'
    ],
    'Christmas': [
        '#FF3333',
        '#FFFFFF',
        '#FFFE99',
        '#33FF33'
    ],
    'NewYears': [
        '#5B1D99',
        '#0074B4',
        '#00B34C',
        '#FFD41F',
        '#FC6E3D',
    ],
    'Broadway': [
        '#FFFFFF',
        '#FFFE99',
        '#FFFFFF',
        '#FFFE99',
        '#FFFFFF',
        '#FFFE99',
        '#FFFFFF',
        '#FFFE99',
    ],
    'SuperbowlPatriots': [
        { name: 'Nautical Blue', color: '#0D254C'},
        { name: 'Red', color: '#C80815'},
        { name: 'New Century Silver', color: '#D6D6D6'},
        { name: 'White', color: '#FFFFFF'}
    ],
    'SuperbowlSeahawks': [
        { name: 'Bright green', color: '#4EAE47'},
        { name: 'Silver', color: '#ACB6BC'},
        { name: 'Blue', color: '#06192E'}
    ],
};
//var Timer = {};
'use strict';
/*exported Sequence */
var Sequence = {
	All: function(time) {
		return true;
	},
	Sequence: function(timer){
		
	}, 
	Random: function(time) {

	}
};
/*
  Ambient Class  
  (c) 2014, Dmitry Sadakov, all rights reserved
*/

'use strict';
/*globals ColorThief, chrome, colorUtil*/
/*exported Ambient*/


var Ambient = (function () {

    var dominantColors  = [],
	    updateHandlers = [],
		publicMethods = {}, 
		lastUpdate = null;

	// fields
	publicMethods.on = false;
	publicMethods.updateImage = false;
	publicMethods.changeBrightness = false;
	publicMethods.enablePrimary = false;
	publicMethods.mode = 'eye-ambient';

	function parseBrightness(color){
		var helper = colorUtil();
		if (publicMethods.changeBrightness) {
			return helper.getBrightness(color);
		} else {
			return undefined;
		}
	}

	function onImageUpdated(image) {
		if (image === undefined) {
			return;
		}
		if (chrome.runtime.lastError) {
        	console.log(chrome.runtime.lastError.message);
        	chrome.runtime.lastError = null;
        } else {
			var img = new Image();
			img.src = image;

			// get main colors
			var colorThief = new ColorThief();
			var colors = colorThief.getPalette(img, 8);

			lastUpdate = new Date();

			dominantColors = [];
			var helper = colorUtil();

			if (publicMethods.enablePrimary) {
				var primary = helper.rgbToHex(
						    colors[0][0],
							colors[0][1],
							colors[0][2]
						);
				var bri = parseBrightness(primary);
				
				// thrice for ui.
				var color = {color: primary, bri: bri};
				dominantColors.push(color);
				dominantColors.push(color);
				dominantColors.push(color);

			} else {
				colors.forEach(function(color){
					var hex = helper.rgbToHex(
						    color[0],
							color[1],
							color[2]
						);
					var b = parseBrightness(hex);
					dominantColors.push({ color: hex, bri: b });
				});
			}

			updateHandlers.forEach(function(handler) {
				handler(dominantColors, image);
			});
		}

		// do it again
		setTimeout(retryRequestImage, getDelay() * 1000);
	}

	function retryRequestImage(){	
		if (publicMethods.on || publicMethods.updateImage) {		
			try {
				requestImage();
			} catch(e) {
				setTimeout(retryRequestImage, 1000);
				console.log(e);
			}
		}
	}

	function requestImage(){
    	if (chrome.runtime.lastError) {
        	console.log(chrome.runtime.lastError.message);
        	return;
        }
		if (typeof(chrome) !== 'undefined' && 
			chrome.tabs !== undefined && 
			chrome.tabs.captureVisibleTab !== undefined) {
			chrome.tabs.captureVisibleTab({quality:1}, onImageUpdated);	
			return true;
		}
		return false;
	}

	function getDelay(){
		switch(publicMethods.mode) {
		    case 'eye-ambient':
		        return 10;
		    case 'eye-work':
		        return 5;
		    case 'eye-movie':
		        return 1;
		    case 'eye-gaming':
		        return 0;
		    default:
		        return 1;
		}
	}

	publicMethods.definedBrightness = function() {
		if (publicMethods.changeBrightness === false) {
			return 255; // always bright
		}
		return undefined;
	};
	publicMethods.run = function() {
		return requestImage();
	};
	publicMethods.onUpdate = function(func){
		updateHandlers = []; // clear for now, memory might go unused on multi-timed open popup
		updateHandlers.push(func);
	};
	// in seconds
	publicMethods.getDelay = function(){ 
		return getDelay();
	};
	publicMethods.getDominantColors = function (colorCount) {
		if ((new Date() - lastUpdate) > (getDelay() * 1000)) { // if more than delay
			retryRequestImage();
		}
	    return dominantColors;
	};

	return publicMethods;
})();


/**
 * Scene Commander
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals $:false, Palettes:false, Ambient */
/*exported scenes */

'use strict';

var scenes = {
    'RelaxedRandom': {
        interval: 2000,
        Palette: Palettes.RomanticRed,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
	'Romantic Red': {
		interval: 2000,
		Palette: Palettes.RomanticRed,
		update: function(lampIds) {
			return scenes.randomPallete(lampIds, this.Palette);
		}
	},
    'Valentines': {
        interval: 2000,
        Palette: Palettes.Valentines,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'Christmas': {
        interval: 5000,
        Palette: Palettes.Christmas,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette, 5);
        },
        index: 0
    },
    'NewYears': {
        interval: 500,
        Palette: Palettes.NewYears,
        update: function(lampIds) {
            var lightStates = [];
            $.each(lampIds, function(index, val){
                if (Math.random() > 0.6) {
                    var color = Palettes.NewYears[Math.round(Math.random() * (Palettes.NewYears.length - 1))]; // random
                    lightStates.push({lamp: val, color:color, bri: 255, transitionTime: 0});
                } else {
                    var random = Math.floor((Math.random()*(15-6+1)+6) );
                    lightStates.push({lamp: val, bri: -255, transitionTime: random});
                }
            });
            return lightStates;
        },
        index: 0
    },
    'Broadway': {
        interval: 500,
        Palette: Palettes.Broadway,
        update: function(lampIds) {
            scenes.Broadway.index++;
            if (scenes.Broadway.index >= lampIds.length){
                scenes.Broadway.index = 0;
            }
            return scenes.one(lampIds, this.Palette, scenes.Broadway.index, 0);
        },
        index: 0
    },
    'Police': {
        interval: 200,
        Palette: Palettes.Police,
        update: function(lampIds) {
            scenes.Police.index++;
            if (scenes.Police.index >= this.Palette.length){
                scenes.Police.index = 0;
            }
            return scenes.cycle(lampIds, this.Palette, scenes.Police.index, 0);
        },
        index: 0
    },
	'Sunrise': {
		interval: 5000,
		Palette: Palettes.Sunrise,
		update: function(lampIds) {
            scenes.Sunrise.index++;
            if (scenes.Sunrise.index >= this.Palette.length){
                scenes.Sunrise.index = 0;
            }
			return scenes.cycle(lampIds, this.Palette, scenes.Sunrise.index, 5);
		},
        index: 0
	},
	'Disco': {
		interval: 200,
		Palette: Palettes.Rainbow,
		update: function(lampIds) {
			return scenes.randomPallete(lampIds, this.Palette);
		}
	},
    'Thanksgiving': {
        interval: 2000,
        Palette: Palettes.Thanksgiving,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'TurkeyFeast': {
        interval: 5000,
        Palette: Palettes.TurkeyFeast,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'TurkeyDinner': {
        interval: 1000,
        Palette: Palettes.TurkeyDinner,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'Patriots': {
        interval: 5000,
        index: 0,
        Palette: Palettes.SuperbowlPatriots,
        update: function(lampIds) {
            scenes.Patriots.index++;
            if (scenes.Patriots.index >= this.Palette.length){
                scenes.Patriots.index = 0;
            }
            return scenes.chain(lampIds, this.Palette, scenes.Patriots.index, 2);
        }
    },
    'Seahawks': {
        interval: 5000,
        index: 0,
        Palette: Palettes.SuperbowlSeahawks,
        update: function(lampIds) {
            scenes.Seahawks.index++;
            if (scenes.Seahawks.index >= this.Palette.length){
                scenes.Seahawks.index = 0;
            }
            return scenes.chain(lampIds, this.Palette, scenes.Seahawks.index, 2);
        }
    },
    'Ambient': {
        interval: 1000,
        Palette: Palettes.Empty,
        update: function(lampIds) {
            var lightStates = [];

            var dominantColors = Ambient.getDominantColors();
            $.each(lampIds, function(index, val){            
                while (dominantColors.length <= index) {
                    index -= dominantColors.length;
                }
                var c = dominantColors[index];
                lightStates.push({
                    lamp: val, 
                    color: c.color, 
                    bri: c.bri, 
                    transitionTime: Ambient.getDelay()  * 10});
            });
            return lightStates;
        }
    },
    makeArray: function(lampIds){
        if (!$.isArray(lampIds)) {
            lampIds = [lampIds];
        }
        return lampIds;
    },
    one:  function(lampIds, palette, cycleIndex, transitionTime){
        lampIds = scenes.makeArray(lampIds);
        if (transitionTime === undefined) {
            transitionTime = 2;
        }
        var lightStates = [];
        $.each(lampIds, function(index, val){
            if (index === cycleIndex) {
                lightStates.push({lamp: val, color: palette[1], transitionTime: transitionTime * 10});
            } else {
                lightStates.push({lamp: val, color: palette[0], transitionTime: transitionTime * 10});
            }
        });
        
        return lightStates;
    },
    chain:  function(lampIds, palette, cycleIndex, transitionTime){
        lampIds = scenes.makeArray(lampIds);
        var lightStates = [];
        var chain = cycleIndex;
        if (transitionTime === undefined) {
            transitionTime = 2;
        }
        $.each(lampIds, function(index, val){
            chain++;
            if (palette.length <= chain) {
                chain = 0; // need to circle back if length larger
            }
            var co = palette[chain]; 
            lightStates.push({lamp: val, color: co, transitionTime: transitionTime * 10});
        });
        
        return lightStates;
    },
    cycle:  function(lampIds, palette, cycleIndex, transitionTime){
        lampIds = scenes.makeArray(lampIds);
        var lightStates = [];
        var color = palette[cycleIndex]; 
        if (transitionTime === undefined) {
            transitionTime = 2;
        }
        $.each(lampIds, function(index, val){            
            lightStates.push({lamp: val, color: color, transitionTime: transitionTime * 10});
        });
        
        return lightStates;
    },
	randomPallete: function(lampIds, palette, transitionTime){
        lampIds = scenes.makeArray(lampIds);
        if (transitionTime === undefined) {
            transitionTime = 2;
        }
        var lightStates = [];
        $.each(lampIds, function(index, val){
            var color = palette[Math.round(Math.random() * (palette.length - 1))]; // random
            lightStates.push({lamp: val, color: color, transitionTime: transitionTime * 10});
        });
        
		return lightStates;
	},
    findScene: function(name){
        for( var key in scenes) {
            if(key.toLowerCase() === name.toLowerCase()){
                return key;
            }
        }
        return null;
    }
};
/**
 * Scene Commander
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals scenes */
/*exported sceneCommander */

'use strict';

var sceneCommander = function ($, hue) { 
    var logger = null,
        scene = null,
        sceneTimer = null,
        sceneStart = function(sceneName, lampIds) 
        {
        	sceneStop(); 
            log('Starting scene ' + sceneName);
            var sceneKey = scenes.findScene(sceneName);
            if (sceneKey === null) {
                // might be programmed into the bridge already:
                var state = hue.getState();
                if (state.scenes[sceneName] !== undefined) {
                    hue.startScene(sceneName);
                }
            } else {
                scene = scenes[sceneKey];
                if (scene.interval === 0) {
                	// one time hit
                	setTimeout(sceneUpdate, 10);
                }
                else {
                	// counter
    	            sceneTimer = setInterval(function intervaledSceneUpdate() {
                        sceneUpdate(lampIds);
                    }, Math.round(scene.interval * lampIds.length / 3)); 
                    sceneUpdate(lampIds); // start now.
    	        }
            }
        },
        sceneStop = function(){
            log('Stop scenes');
            clearInterval(sceneTimer);
            scene = null;
        },

        sceneUpdate = function(lampIds){
            log('Updating scenes');
            if(scene === null) {
                clearInterval(sceneTimer);
            } else {
                var lightStates = scene.update(lampIds);
                $(lightStates).each(function setSceneState(index, state) {
                    var time = state.transitionTime; 
                    if (state.color !== undefined) {
                    	var co = state.color.color !== undefined ? state.color.color : state.color;
                        log('setting color: ' + state.lamp + ' = ' + co);
                        hue.setColor(state.lamp, co.substring(1), time, state.bri);
                    } else if (state.bri !== undefined) {
                        hue.brighten(state.lamp, state.bri, time);
                    }
                });
            }
        },
        log = function (text){
            if (logger !== null) {
                logger(text);
            }
        };
        
 
    return {
    	executing: function(){
    		return scene; // null if none
    	},
        sceneExists: function(sceneName) {
			return scenes[sceneName] !== undefined;
        },
        start: function(sceneName, actors) {
			sceneStart(sceneName, actors);
        },
        stop: function() {
			sceneStop();
        },
        palette: function(colors) {
            scenes.RelaxedRandom.Palette = colors;
        },
        setLogger: function(logHandler) {
            logger = logHandler;
        }
    };
};

/*exported testData */
/* jshint ignore:start */

var testData = {
  "lights": {
    "1": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "Nederste",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:b2:64:0d-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "2": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "Skabet",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:b2:82:55-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "3": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "Ã˜verste",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:be:3a:6f-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "4": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "KÃ¸kken",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:be:94:41-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "5": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 6113,
        "sat": 134,
        "effect": "none",
        "xy": [
          0.5421,
          0.3791
        ],
        "alert": "none",
        "colormode": "hs",
        "reachable": true
      },
      "type": "Color light",
      "name": "Ontop bedroom",
      "modelid": "LST001",
      "uniqueid": "00:17:88:01:00:cd:44:ca-0b",
      "swversion": "66010400",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "6": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 4909,
        "sat": 230,
        "effect": "none",
        "xy": [
          0.6342,
          0.3466
        ],
        "alert": "none",
        "colormode": "xy",
        "reachable": true
      },
      "type": "Color light",
      "name": "LightStrips 1",
      "modelid": "LST001",
      "uniqueid": "00:17:88:01:00:cd:44:ba-0b",
      "swversion": "66010400",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    }
  },
  "groups": {
    "1": {
      "name": "HPMusicGroup",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "type": "LightGroup",
      "action": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "colormode": "xy"
      }
    }
  },
  "config": {
    "name": "Philips hue",
    "zigbeechannel": 11,
    "mac": "00:17:88:0a:b8:8d",
    "dhcp": false,
    "ipaddress": "192.168.1.55",
    "netmask": "255.255.255.0",
    "gateway": "192.168.1.1",
    "proxyaddress": "none",
    "proxyport": 0,
    "UTC": "2015-01-09T16:55:16",
    "localtime": "2015-01-09T17:55:16",
    "timezone": "Europe/Copenhagen",
    "whitelist": {
      "0000000055b291d67d6cd2e97d6cd2e9": {
        "last use date": "2014-08-11T13:32:50",
        "create date": "2013-04-13T09:44:28",
        "name": "samsung GT-I9300"
      },
      "94c24a0bc4fb8d342f0db892a5d39b4a": {
        "last use date": "2014-08-11T13:37:13",
        "create date": "2013-04-13T11:39:08",
        "name": "HueMore"
      },
      "c4721fc1b6d1e79a8016582fabd75d1b": {
        "last use date": "2013-04-21T19:34:15",
        "create date": "2013-04-13T11:39:43",
        "name": "TASS Hue App"
      },
      "phillipshue-rec2": {
        "last use date": "2015-01-07T11:05:46",
        "create date": "2015-01-07T10:49:58",
        "name": "Philips hue JavaScript"
      },
      "f66bdcb067993b42d6a15d4dbb1a95a9": {
        "last use date": "2013-04-13T12:10:34",
        "create date": "2013-04-13T12:10:30",
        "name": "xbmc-player"
      },
      "721f8094b4215ccbbd38f91010bf8216": {
        "last use date": "2013-06-03T23:07:09",
        "create date": "2013-04-13T12:30:03",
        "name": "xbmc-player"
      },
      "18db81e6ffb8aed1": {
        "last use date": "2013-05-06T21:47:06",
        "create date": "2013-05-03T21:22:04",
        "name": "HueProApp"
      },
      "bff3c5dba8cfec2b": {
        "last use date": "2014-05-13T08:18:07",
        "create date": "2013-05-07T10:18:31",
        "name": "HueProApp"
      },
      "a7dff2b7bc7ad893": {
        "last use date": "2013-10-22T22:33:47",
        "create date": "2013-06-24T23:01:04",
        "name": "HueProApp"
      },
      "00000000431607a97d6cda707d6cda70": {
        "last use date": "2013-09-25T08:31:06",
        "create date": "2013-06-29T14:41:51",
        "name": "samsung GT-I9505"
      },
      "1aaa43faab871a4c": {
        "last use date": "2013-10-26T21:57:07",
        "create date": "2013-10-26T20:07:37",
        "name": "HueProApp"
      },
      "userHueful": {
        "last use date": "2015-01-08T19:20:43",
        "create date": "2013-12-27T23:42:10",
        "name": "Hueful"
      },
      "a750da2e33af2ba7": {
        "last use date": "2014-06-26T07:33:46",
        "create date": "2014-05-13T11:29:33",
        "name": "HueProApp"
      },
      "1f5c3355a6bd1d208b90bca64d3977bd": {
        "last use date": "2014-10-07T17:01:32",
        "create date": "2014-05-17T21:17:16",
        "name": "xbmc-player"
      },
      "583bac7ddec9425b": {
        "last use date": "2014-09-30T19:37:07",
        "create date": "2014-07-03T22:26:51",
        "name": "HueProApp"
      },
      "ffffffffacc397e3ffffffffe9931467": {
        "last use date": "2014-08-13T06:29:15",
        "create date": "2014-08-11T13:27:20",
        "name": "Hue#Samsung SM-G900F"
      },
      "a27e0ac425e4f964": {
        "last use date": "2015-01-09T16:05:40",
        "create date": "2014-10-10T17:15:14",
        "name": "HueProApp"
      },
      "0000000004c63be4ffffffffe9931467": {
        "last use date": "2015-01-07T11:35:46",
        "create date": "2014-10-11T09:48:10",
        "name": "Hue#Samsung SM-G900F"
      },
      "bH1uC5RGeUvSBiGa": {
        "last use date": "2014-10-28T06:14:11",
        "create date": "2014-10-19T17:38:08",
        "name": "Huemanic"
      },
      "lightswitch-v3": {
        "last use date": "2014-12-01T10:56:04",
        "create date": "2014-11-30T22:58:02",
        "name": "lightswitch-v3"
      },
      "yonomiuser": {
        "last use date": "2014-12-18T08:08:38",
        "create date": "2014-12-13T01:09:39",
        "name": "yonomi"
      },
      "lightswitch-v4": {
        "last use date": "2015-01-09T16:55:16",
        "create date": "2015-01-07T10:57:31",
        "name": "lightswitch-v4"
      }
    },
    "swversion": "01018228",
    "apiversion": "1.5.0",
    "swupdate": {
      "updatestate": 2,
      "checkforupdate": false,
      "devicetypes": {
        "bridge": false,
        "lights": [
          "5",
          "6"
        ]
      },
      "url": "",
      "text": "HUE0103 â€“ 66013452",
      "notify": false
    },
    "linkbutton": false,
    "portalservices": true,
    "portalconnection": "connected",
    "portalstate": {
      "signedon": true,
      "incoming": true,
      "outgoing": true,
      "communication": "connected"
    }
  },
  "schedules": {},
  "scenes": {
    "c48ba1f7b-off-0": {
      "name": "Mushrooms off 14",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "64f0ebf54-on-0": {
      "name": "Mushrooms on 141",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "02b12e930-off-0": {
      "name": "Blacklight off 1",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "e749a56ac-on-0": {
      "name": "Blacklight on 14",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "f4293d731-on-0": {
      "name": "TV on 1413028670",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "b115f381a-on-0": {
      "name": "glow stick color",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "948ce012e-on-0": {
      "name": "Kathy on 1366579",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "5da2271e3-on-0": {
      "name": "Moon Light on 1413028671000",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "91eefa170-on-0": {
      "name": "Sunrise F 2 on 1413028673000",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "087f88f52-on-0": {
      "name": "Sunset on 1413028572000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "84fa88aa5-on-0": {
      "name": "Energize on 1366579799000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "f90b4d882-on-0": {
      "name": "Frost on 1413375387000",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "a08c2be21-on-0": {
      "name": "Storm on 1413028668000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "54ae5d997-on-0": {
      "name": "Ski on 1366579800000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "33300ac17-on-0": {
      "name": "Feet up on 1413028587000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "726af216a-on-0": {
      "name": "Deep sea on 1366579800000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    }
  },
  "rules": {},
  "sensors": {
    "1": {
      "state": {
        "daylight": false,
        "lastupdated": "none"
      },
      "config": {
        "on": true,
        "long": "none",
        "lat": "none",
        "sunriseoffset": 30,
        "sunsetoffset": -30
      },
      "name": "Daylight",
      "type": "Daylight",
      "modelid": "PHDL00",
      "manufacturername": "Philips",
      "swversion": "1.0"
    }
  }
};

var testData = null;
/* jshint ignore:end */
/**
 * Social Likes
 * http://sapegin.github.com/social-likes
 *
 * Sharing buttons for Russian and worldwide social networks.
 *
 * @requires jQuery
 * @author Artem Sapegin
 * @copyright 2014 Artem Sapegin (sapegin.me)
 * @license MIT
 */

/*global define:false, socialLikesButtons:false */

function initSocialButtons() {
	(function(factory) {  // Try to register as an anonymous AMD module
		if (typeof define === 'function' && define.amd) {
			define(['jquery'], factory);
		}
		else {
			factory(jQuery);
		}
	}(function($, undefined) {

		'use strict';

		var prefix = 'social-likes';
		var classPrefix = prefix + '__';
		var openClass = prefix + '_opened';
		var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
		var isHttps = protocol === 'https:';

		var artificialSweetner = true;

		/**
		 * Buttons
		 */
		var services = {
			facebook: {
				// https://developers.facebook.com/docs/reference/fql/link_stat/
				counterUrl: 'https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?',
				convertNumber: function(data) {
					if (artificialSweetner) {
						return 150 + data.data[0].total_count;
					}
					return data.data[0].total_count;
				},
				popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
				popupWidth: 600,
				popupHeight: 500
			},
			twitter: {
				counterUrl: 'https://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?',
				convertNumber: function(data) {
					if (artificialSweetner) {
						return 190 + data.count;
					}
					return data.count;
				},
				popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',
				popupWidth: 600,
				popupHeight: 450,
				click: function() {
					// Add colon to improve readability
					if (!/[\.:\-–—]\s*$/.test(this.options.title)) this.options.title += ':';
					return true;
				}
			},
			mailru: {
				counterUrl: protocol + '//connect.mail.ru/share_count?url_list={url}&callback=1&func=?',
				convertNumber: function(data) {
					for (var url in data) {
						if (data.hasOwnProperty(url)) {
							return data[url].shares;
						}
					}
				},
				popupUrl: protocol + '//connect.mail.ru/share?share_url={url}&title={title}',
				popupWidth: 550,
				popupHeight: 360
			},
			vkontakte: {
				counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
				counter: function(jsonUrl, deferred) {
					var options = services.vkontakte;
					if (!options._) {
						options._ = [];
						if (!window.VK) window.VK = {};
						window.VK.Share = {
							count: function(idx, number) {
								options._[idx].resolve(number);
							}
						};
					}

					var index = options._.length;
					options._.push(deferred);
					$.getScript(makeUrl(jsonUrl, {index: index}))
						.fail(deferred.reject);
				},
				popupUrl: protocol + '//vk.com/share.php?url={url}&title={title}',
				popupWidth: 550,
				popupHeight: 330
			},
			odnoklassniki: {
				// connect.ok.ru works on mobiles but doesn’t work with HTTPS
				// www.ok.ru works with HTTPS but redirects to HTML page on mobiles
				counterUrl: (isHttps ? 'https://www' : 'http://connect') + '.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
				counter: function(jsonUrl, deferred) {
					var options = services.odnoklassniki;
					if (!options._) {
						options._ = [];
						if (!window.ODKL) window.ODKL = {};
						window.ODKL.updateCount = function(idx, number) {
							options._[idx].resolve(number);
						};
					}

					var index = options._.length;
					options._.push(deferred);
					$.getScript(makeUrl(jsonUrl, {index: index}))
						.fail(deferred.reject);
				},
				popupUrl: 'http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
				popupWidth: 550,
				popupHeight: 360
			},
			plusone: {
				// HTTPS not supported yet: http://clubs.ya.ru/share/1499
				counterUrl: isHttps ? undefined : 'http://share.yandex.ru/gpp.xml?url={url}',
				counter: function(jsonUrl, deferred) {
					var options = services.plusone;
					if (options._) {
						// Reject all counters except the first because Yandex Share counter doesn’t return URL
						deferred.reject();
						return;
					}

					if (!window.services) window.services = {};
					window.services.gplus = {
						cb: function(number) {

							if (artificialSweetner) {
								options._.resolve(200 + Number(number));
								return;
							}
							options._.resolve(number);
						}
					};

					options._ = deferred;
					$.getScript(makeUrl(jsonUrl))
						.fail(deferred.reject);
				},
				popupUrl: 'https://plus.google.com/share?url={url}',
				popupWidth: 700,
				popupHeight: 500
			},
			pinterest: {
				counterUrl: protocol + '//api.pinterest.com/v1/urls/count.json?url={url}&callback=?',
				convertNumber: function(data) {
					return data.count;
				},
				popupUrl: protocol + '//pinterest.com/pin/create/button/?url={url}&description={title}',
				popupWidth: 630,
				popupHeight: 270
			}
		};


		/**
		 * Counters manager
		 */
		var counters = {
			promises: {},
			fetch: function(service, url, extraOptions) {
				if (!counters.promises[service]) counters.promises[service] = {};
				var servicePromises = counters.promises[service];

				if (!extraOptions.forceUpdate && servicePromises[url]) {
					return servicePromises[url];
				}
				else {
					var options = $.extend({}, services[service], extraOptions);
					var deferred = $.Deferred();
					var jsonUrl = options.counterUrl && makeUrl(options.counterUrl, {url: url});

					if (jsonUrl && $.isFunction(options.counter)) {
						options.counter(jsonUrl, deferred);
					}
					else if (options.counterUrl) {
						$.getJSON(jsonUrl)
							.done(function(data) {
								try {
									var number = data;
									if ($.isFunction(options.convertNumber)) {
										number = options.convertNumber(data);
									}
									deferred.resolve(number);
								}
								catch (e) {
									deferred.reject();
								}
							})
							.fail(deferred.reject);
					}
					else {
						deferred.reject();
					}

					servicePromises[url] = deferred.promise();
					return servicePromises[url];
				}
			}
		};


		/**
		 * jQuery plugin
		 */
		$.fn.socialLikes = function(options) {
			return this.each(function() {
				var elem = $(this);
				var instance = elem.data(prefix);
				if (instance) {
					if ($.isPlainObject(options)) {
						instance.update(options);
					}
				}
				else {
					instance = new SocialLikes(elem, $.extend({}, $.fn.socialLikes.defaults, options, dataToOptions(elem)));
					elem.data(prefix, instance);
				}
			});
		};

		$.fn.socialLikes.defaults = {
			url: window.location.href.replace(window.location.hash, ''),
			title: document.title,
			counters: true,
			zeroes: false,
			wait: 500,
			popupCheckInterval: 500,
			singleTitle: 'Share'
		};

		function SocialLikes(container, options) {
			this.container = container;
			this.options = options;
			this.init();
		}

		SocialLikes.prototype = {
			init: function() {
				// Add class in case of manual initialization
				this.container.addClass(prefix);

				this.single = this.container.hasClass(prefix + '_single');

				this.initUserButtons();

				this.countersLeft = 0;
				this.number = 0;
				this.container.on('counter.' + prefix, $.proxy(this.updateCounter, this));

				var buttons = this.container.children();

				this.makeSingleButton();

				this.buttons = [];
				buttons.each($.proxy(function(idx, elem) {
					var button = new Button($(elem), this.options);
					this.buttons.push(button);
					if (button.options.counterUrl) this.countersLeft++;
				}, this));

				if (this.options.counters) {
					this.timer = setTimeout($.proxy(this.appear, this), this.options.wait);
				}
				else {
					this.appear();
				}
			},
			initUserButtons: function() {
				if (!this.userButtonInited && window.socialLikesButtons) {
					$.extend(true, services, socialLikesButtons);
				}
				this.userButtonInited = true;
			},
			makeSingleButton: function() {
				if (!this.single) return;

				var container = this.container;
				container.addClass(prefix + '_vertical');
				container.wrap($('<div>', {'class': prefix + '_single-w'}));
				container.wrapInner($('<div>', {'class': prefix + '__single-container'}));
				var wrapper = container.parent();

				// Widget
				var widget = $('<div>', {
					'class': getElementClassNames('widget', 'single')
				});
				var button = $(template(
					'<div class="{buttonCls}">' +
						'<span class="{iconCls}"></span>' +
						'<span class="service-text">{title}</span>' +
					'</div>',
					{
						buttonCls: getElementClassNames('button', 'single'),
						iconCls: getElementClassNames('icon', 'single'),
						title: this.options.singleTitle
					}
				));
				widget.append(button);
				wrapper.append(widget);

				widget.on('click', function() {
					var activeClass = prefix + '__widget_active';
					widget.toggleClass(activeClass);
					if (widget.hasClass(activeClass)) {
						container.css({left: -(container.width()-widget.width())/2,  top: -container.height()});
						showInViewport(container);
						closeOnClick(container, function() {
							widget.removeClass(activeClass);
						});
					}
					else {
						container.removeClass(openClass);
					}
					return false;
				});

				this.widget = widget;
			},
			update: function(options) {
				if (!options.forceUpdate && options.url === this.options.url) return;

				// Reset counters
				this.number = 0;
				this.countersLeft = this.buttons.length;
				if (this.widget) this.widget.find('.' + prefix + '__counter').remove();

				// Update options
				$.extend(this.options, options);
				for (var buttonIdx = 0; buttonIdx < this.buttons.length; buttonIdx++) {
					this.buttons[buttonIdx].update(options);
				}
			},
			updateCounter: function(e, service, number) {
				if (number) {
					this.number += number;
					if (this.single) {
						this.getCounterElem().text(this.number);
					}
				}

				this.countersLeft--;
				if (this.countersLeft === 0) {
					this.appear();
					this.container.addClass(prefix + '_ready');
					this.container.trigger('ready.' + prefix, this.number);
				}
			},
			appear: function() {
				this.container.addClass(prefix + '_visible');
			},
			getCounterElem: function() {
				var counterElem = this.widget.find('.' + classPrefix + 'counter_single');
				if (!counterElem.length) {
					counterElem = $('<span>', {
						'class': getElementClassNames('counter', 'single')
					});
					this.widget.append(counterElem);
				}
				return counterElem;
			}
		};


		function Button(widget, options) {
			this.widget = widget;
			this.options = $.extend({}, options);
			this.detectService();
			if (this.service) {
				this.init();
			}
		}

		Button.prototype = {
			init: function() {
				this.detectParams();
				this.initHtml();
				setTimeout($.proxy(this.initCounter, this), 0);
			},

			update: function(options) {
				$.extend(this.options, {forceUpdate: false}, options);
				this.widget.find('.' + prefix + '__counter').remove();  // Remove old counter
				this.initCounter();
			},

			detectService: function() {
				var service = this.widget.data('service');
				if (!service) {
					// class="facebook"
					var node = this.widget[0];
					var classes = node.classList || node.className.split(' ');
					for (var classIdx = 0; classIdx < classes.length; classIdx++) {
						var cls = classes[classIdx];
						if (services[cls]) {
							service = cls;
							break;
						}
					}
					if (!service) return;
				}
				this.service = service;
				$.extend(this.options, services[service]);
			},

			detectParams: function() {
				var data = this.widget.data();

				// Custom page counter URL or number
				if (data.counter) {
					var number = parseInt(data.counter, 10);
					if (isNaN(number)) {
						this.options.counterUrl = data.counter;
					}
					else {
						this.options.counterNumber = number;
					}
				}

				// Custom page title
				if (data.title) {
					this.options.title = data.title;
				}

				// Custom page URL
				if (data.url) {
					this.options.url = data.url;
				}
			},

			initHtml: function() {
				var options = this.options;
				var widget = this.widget;

				// Old initialization HTML
				var a = widget.find('a');
				if (a.length) {
					this.cloneDataAttrs(a, widget);
				}

				// Button
				var button = $('<span>', {
					'class': this.getElementClassNames('button')
				});
				button.append($('<span>', {
						'class': 'social-name',
						'text': widget.text()
					}));

				if (options.clickUrl) {
					var url = makeUrl(options.clickUrl, {
						url: options.url,
						title: options.title
					});
					var link = $('<a>', {
						href: url
					});
					this.cloneDataAttrs(widget, link);
					widget.replaceWith(link);
					this.widget = widget = link;
				}
				else {
					widget.on('click', $.proxy(this.click, this));
				}

				widget.removeClass(this.service);
				widget.addClass(this.getElementClassNames('widget'));

				// Icon
				button.prepend($('<span>', {'class': this.getElementClassNames('icon')}));

				widget.empty().append(button);
				this.button = button;
			},

			initCounter: function() {
				if (this.options.counters) {
					if (this.options.counterNumber) {
						this.updateCounter(this.options.counterNumber);
					}
					else {
						var extraOptions = {
							counterUrl: this.options.counterUrl,
							forceUpdate: this.options.forceUpdate
						};
						counters.fetch(this.service, this.options.url, extraOptions)
							.always($.proxy(this.updateCounter, this));
					}
				}
			},

			cloneDataAttrs: function(source, destination) {
				var data = source.data();
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						destination.data(key, data[key]);
					}
				}
			},

			getElementClassNames: function(elem) {
				return getElementClassNames(elem, this.service);
			},

			updateCounter: function(number) {
				if (typeof number === 'string') {
					number = number.replace(/\D/g, '');
				}
				number = parseInt(number, 10) || 0;

				var params = {
					'class': this.getElementClassNames('counter'),
					'text': number
				};
				if (!number && !this.options.zeroes) {
					params['class'] += ' ' + prefix + '__counter_empty';
					params.text = '';
				}
				var counterElem = $('<span>', params);
				this.widget.append(counterElem);

				this.widget.trigger('counter.' + prefix, [this.service, number]);
			},

			click: function(e) {
				var options = this.options;
				var process = true;
				var url = makeUrl(options.popupUrl, {
						url: options.url,
						title: options.title
					});
					url = this.addAdditionalParamsToUrl(url);

				if ($.isFunction(options.click)) {
					e.shareUrl = url;
					process = options.click.call(this, e);
				}
				if (process) {
					this.openPopup(url, {
						width: options.popupWidth,
						height: options.popupHeight
					});
				}
				return false;
			},

			addAdditionalParamsToUrl: function(url) {
				var params = $.param($.extend(this.widget.data(), this.options.data));
				if ($.isEmptyObject(params)) return url;
				var glue = url.indexOf('?') === -1 ? '?' : '&';
				return url + glue + params;
			},

			openPopup: function(url, params) {
				var left = Math.round(screen.width/2 - params.width/2);
				var top = 0;
				if (screen.height > params.height) {
					top = Math.round(screen.height/3 - params.height/2);
				}

				var win = window.open(url, 'sl_' + this.service, 'left=' + left + ',top=' + top + ',' +
				   'width=' + params.width + ',height=' + params.height + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
				if (win) {
					win.focus();
					this.widget.trigger('popup_opened.' + prefix, [this.service, win]);
					var timer = setInterval($.proxy(function() {
						if (!win.closed) return;
						clearInterval(timer);
						this.widget.trigger('popup_closed.' + prefix, this.service);
					}, this), this.options.popupCheckInterval);
				}
				else {
					location.href = url;
				}
			}
		};


		/**
		 * Helpers
		 */

		 // Camelize data-attributes
		function dataToOptions(elem) {
			function upper(m, l) {
				return l.toUpper();
			}
			var options = {};
			var data = elem.data();
			for (var key in data) {
				var value = data[key];
				if (value === 'yes') value = true;
				else if (value === 'no') value = false;
				options[key.replace(/-(\w)/g, upper)] = value;
			}
			return options;
		}

		function makeUrl(url, context) {
			return template(url, context, encodeURIComponent);
		}

		function template(tmpl, context, filter) {
			return tmpl.replace(/\{([^\}]+)\}/g, function(m, key) {
				// If key doesn't exists in the context we should keep template tag as is
				return key in context ? (filter ? filter(context[key]) : context[key]) : m;
			});
		}

		function getElementClassNames(elem, mod) {
			var cls = classPrefix + elem;
			return cls + ' ' + cls + '_' + mod;
		}

		function closeOnClick(elem, callback) {
			function handler(e) {
				if ((e.type === 'keydown' && e.which !== 27) || $(e.target).closest(elem).length) return;
				elem.removeClass(openClass);
				doc.off(events, handler);
				if ($.isFunction(callback)) callback();
			}
			var doc = $(document);
			var events = 'click touchstart keydown';
			doc.on(events, handler);
		}

		function showInViewport(elem) {
			var offset = 10;
			if (document.documentElement.getBoundingClientRect) {
				var left = parseInt(elem.css('left'), 10);
				var top = parseInt(elem.css('top'), 10);

				var rect = elem[0].getBoundingClientRect();
				if (rect.left < offset)
					elem.css('left', offset - rect.left + left);
				else if (rect.right > window.innerWidth - offset)
					elem.css('left', window.innerWidth - rect.right - offset + left);

				if (rect.top < offset)
					elem.css('top', offset - rect.top + top);
				else if (rect.bottom > window.innerHeight - offset)
					elem.css('top', window.innerHeight - rect.bottom - offset + top);
			}
			elem.addClass(openClass);
		}


		/**
		 * Auto initialization
		 */
		$(function() {
			$('.' + prefix).socialLikes();
		});

	}));

}
/**
 * Philips Hue discoverer service
 * Copyright (c) 2015 Dmitry Sadakov; All rights reserved */

'use strict';

/*globals $, trackState, storageClass */
/*exported hueDiscoverer */

var hueBridge = function(bridgeIP, apiKey, onNeedAuthorization, onAuthorized, onError){
    // defaults
    var baseUrl = 'http://' + bridgeIP + '/api';
    var baseApiUrl = baseUrl + '/' + apiKey;
    var status = 'init'; // found, notauthorized, ready, error

    var storage = storageClass();

    function setLastBridgeIP(ip) {
      storage.set('lastBridgeIp', ip);
    }

        
    var log = function(text) {
            var message = 'hueBridge (' + bridgeIP + '): ' + text;
            console.log(message);
        },
        getBridgeState = function(){
            try{
                $.ajax({
                    dataType: 'json',
                    url: baseApiUrl,
                    success: onGotBridgeState,
                    error: onAuthError,
                    timeout: 5000
                });
            }catch (err) {
                onAuthError(err);
            }
        },
        onAuthError = function(err){
            if (err.statusText === 'timeout') {
                log('Bridge error timeout: ' + bridgeIP);
                onError(bridgeIP, 'Timeout', 'Too many timeouts on: ' + baseUrl);
            } else { 
                log('error on auth: ' + err.statusText);
                // error
                status = 'error';
                onError(bridgeIP, 'Error', 'Unknown error' + err.statusText);
            }
        },
        onGotBridgeState = function(dataArray) {
            var data = dataArray;
            if ($.isArray(data)) {
                data = dataArray[0]; // take first
            }
            
            // save bridge ip to storage
            setLastBridgeIP(bridgeIP);

            if (data.hasOwnProperty('error') && data.error.description === 'unauthorized user')
            {
                log('Bridge found at ' + bridgeIP);
                status = 'found';
                addUser();
            }
            else if (data.hasOwnProperty('lights'))
            {
                status = 'ready';
                log('Bridge ready ' + bridgeIP);
                onAuthorized(bridgeIP, 'Ready', data);
            }
        },
        addUser = function(){
            log('adding user...');
            var dataString = JSON.stringify({devicetype: apiKey, username: apiKey });
            log(dataString);
            $.ajax({
                url: baseUrl,
                type: 'POST',
                data: dataString,
                success: onAddUserResponse
            });

        }, 
        onAddUserResponse = function(response) {
             log(response);
             if (response[0].hasOwnProperty('error'))
             {
                unauthorized(response);
             }
             else if (response[0].hasOwnProperty('success'))
             {
                status = 'ready';
                bridgeSuccess(response);
             }
        },
        unauthorized = function(response){
            if (response[0].error.description === 'link button not pressed') {
                status = 'needauthorization';
                onNeedAuthorization(bridgeIP, 'NeedAuthorization', 'Bridge found. Press the bridge button...');
                setTimeout(addUser, 2000);
            } else  {
                status = 'error';
                onError(bridgeIP, 'Error', 'Error: ' + response[0].error.description);
            }
        },
        bridgeSuccess = function(response) {
            log('Authorization successful');
            // request success message from actual bridge:
            getBridgeState();
        };
    return {
        getStatus: function(){
            return status;
        },
        start: function(){
            getBridgeState();
        }
    };
};


var hueNupnpDiscoverer = function (onReady) { 

    var ips = [];
    var findNupnpBridges = function() {
            console.log('Requesting meethue.com/api/nupnp.');
            var nupnp = 'https://www.meethue.com/api/nupnp';
            
            // debugging only!
            //nupnp = 'https://debugging';

            $.ajax({
                url: nupnp,
                dataType: 'json',
                timeout: 2000,
                success: onNupnpResponse,
                error: errorNupnp
            });
        },
        onNupnpResponse = function(data) {
            trackState('nunpnp', data);
            if (data !== null && data.length > 0) {
                data.forEach(function(bridgeInfo, index) {
                    var bridgeIP = bridgeInfo.internalipaddress;
                    if (bridgeIP !== '0.0.0.0') {
                        ips.push(bridgeIP);
                    }
                });
                ready();
            } else {
                console.log('meethue portal did not return');
                ready();
            }
        },
        errorNupnp = function(err){
            // error
            console.log(err);
            ready();
        }, 
        ready = function(){
            onReady(ips);
        };
        
        // auto launch
        findNupnpBridges();

        return {};
    };


var bruteForcer = function () { 
    var getIps = function () {
          // try default ips for win and mac, first 20 devices
          var ips = [];
          for(var i = 0; i < 21; i++) {
            ips.push('10.0.1.' + i); // mac: 10.0.1.1-20
            ips.push('192.168.0.' + i); // win: 192.168.0.1-20
            ips.push('192.168.0.' + (100+i)); // win: 192.168.1.100-120
            ips.push('192.168.1.' + i); // win: 192.168.1.1-20
          }
          return ips;
        };
    return {
        ips: function(){
            return getIps();
        }
    };
};


var hueDiscoverer = function (apiKey, onNeedAuthorization, onAuthorized, onError, onComplete) { 

    var hueBridges = [];
    var completeCounter = 0;

    var lastBridgeIp = null;
    var storage = null;

    function getLastBridgeIP() {
      storage.get('lastBridgeIp', function (ip) {
        
        lastBridgeIp = ip;
        // debugging only!
        //lastBridgeIp = null;

      });
    }

    // constructor
    storage = storageClass();
    getLastBridgeIP();

    var addHueBridges = function(ips) {
            ips.forEach(function (ip) {
               addHueBridge(ip);
            });
        },
        launchAfter = function(ips) {
            addHueBridges(ips);
            launch();
        },
        addHueBridge = function(ip){
            var probableHueBridge = hueBridge(ip, apiKey, onNeedAuthWrapper, onAuthorizedWrapper, onErrWrapper);
            hueBridges.unshift(probableHueBridge);
        },
        start = function(ip, brute){
            if (ip) {
               addHueBridge(ip);
            } else if (lastBridgeIp !== null) {
               addHueBridge(lastBridgeIp);
            }
            launch();

            hueNupnpDiscoverer(launchAfter);
        },
        launch = function(){
            if(hueBridges.length === 0) {
                addHueBridges(bruteForcer().ips());
            }
            hueBridges.forEach(function(bridge) {
                bridge.start();
            });
        }, 
        onNeedAuthWrapper = function(ip, status, message) {
            onNeedAuthorization(ip, status, message);
            completed();
        }, 
        onAuthorizedWrapper = function(ip, status, message) {
            onAuthorized(ip, status, message);
            completed();
        }, 
        onErrWrapper = function(ip, status, message) {
            onError(ip, status, message);
            completed();
        }, 
        completed = function(){
            completeCounter++;
            if (completeCounter >= hueBridges.length && onComplete) {
                onComplete(); // call when every IP was traversed
            }
        };
    return {
        start: function(ip, brute) {
            start(ip, brute);
        },
        ips: function() {
            return hueBridges;
        }
    };
};

/**
 * Dmitry Sadakov's Philips Hue api wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright 2014 Dmitry Sadakov, All rights reserved.
 * original: https://github.com/bjohnso5/hue-hacking
 * Copyright (c) 2013 Bryan Johnson; Licensed MIT */

'use strict';

/*globals colorUtil:false,
          hueDiscoverer
*/ 
/*trackEvent*/
/*exported  hue, 
            findActors, 
            findGroupIdByName 
*/


var hue = function ($, colors) { 

    var discover = null;
    var discoverStatus = 'init';

    
    var bridgeIP = '', // Hue bridge's IP address 
        apiKey = 'lightswitch-v4', //'1391b1706caeb6f4b2c8418fd8f402d8', // lightswitch - API key registered with hue bridge
        status = { status: 'init', text: 'Initializing...' }, // system status
        state = null, // bridge state

        // defaults
        baseUrl = 'http://' + bridgeIP + '/api',
        baseApiUrl = null,//baseUrl + '/' + apiKey,
        lightApiUrl =null,// baseApiUrl + '/lights',
        lastResult = null,
        numberOfLamps = 3, // defaulted to the # of lamps included in the starter kit, update if you've connected additional bulbs

        // lamp states:
        shortFlashType = 'select',
        longFlashType = 'lselect',
        offState = { on: false },
        onState = { on: true },
        shortFlashState = { alert: shortFlashType },
        longFlashState = { alert: longFlashType },
        transitionTime = null,
        timeoutAuthCounter = 0,
        retryAuthCounter = 0,
        errorCounter = 0;

        discover = hueDiscoverer(apiKey, onNeedAuthorization, onIpAuthorized, onError, onComplete);

        var statusInit = {status: 'init', text: 'Initializing...'};
        var statusNeedAuth = {status: 'Authenticating', text: 'Bridge found. Press the bridge button...'};
        var statusNoBridge = {status: 'BridgeNotFound', text: 'Philip Hue bridge not found.'};
        //var statusReady = {status: 'OK', text: 'Lights found.'};

        function onNeedAuthorization() {
          onStatus(statusNeedAuth);
          discoverStatus = 'auth';
        }
        function onIpAuthorized(ip, message, data){
          //onStatus(statusReady);
          discoverStatus = 'ok';
          hue.setIp(ip);
          onAuthorized(data);
        }
        function onError(){
          //onStatus(statusNoBridge);
        }

        function onComplete(){
          if (discoverStatus === 'init') {
            onStatus(statusNoBridge);
          }
        }

        var onLampError = function(err){
            // do nothing for now.
            errorCounter++;
        },
        /**
         * Reconstruct the baseUrl and baseApiUrl members when configuration is updated.
         */
        updateURLs = function() {
            baseUrl = 'http://' + bridgeIP + '/api';
            baseApiUrl = baseUrl + '/' + apiKey;
            lightApiUrl = baseApiUrl + '/lights';
        },
        /**
         * Sets the response to the lastResult member for use. Currently unused.
         *
         * @param {String} Response data as a String
         * @param {String} Status text
         * @param {jqXHR} jQuery XmlHttpResponse object
         */
        apiSuccess = function(data, successText, jqXHR) {
            lastResult = data;
            log(JSON.stringify(lastResult));
        },
        
        /**
         * Convenience function to perform an asynchronous HTTP PUT with the
         * provided JSON data.
         *
         * @param {String} url The URL to send the PUT request to.
         * @param {Function} callback The function to invoke on a successful response.
         * @param {Object} data The JSON data.
         * @return {Object} The JSON data.
         */
        putJSON = function(url, callback, error,  data) {
            var options = {
                type: 'PUT',
                url: url,
                success: callback,
                error: error || onLampError,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data)
            };
            $.ajax(options);
            //log(JSON.stringify(options));
            return data;
        },

        postJSON = function(url, callback, error,  data) {
            var options = {
                type: 'POST',
                url: url,
                success: callback,
                error: error || onLampError,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data)
            };
            $.ajax(options);
            //log(JSON.stringify(options));
            return data;
        },

        del = function(url, callback, error,  data) {
            var options = {
                type: 'DELETE',
                url: url,
                success: callback,
                error: error || onLampError
            };
            $.ajax(options);
            log(JSON.stringify(options));
        },
        
        /**
         * Convenience function used to query the state of a Hue lamp or other
         * bridge-administered resource.
         *
         * @param {String} destination URL to send HTTP GET request to.
         * @param {Function} success Callback function to invoke on successful response.
         * @return {Object} JSON bulb configuration data.
         */
        get = function(destination, success, error) {
            var callback = success || null;
            callback = null === callback ? apiSuccess : success;
            
            $.ajax({
                dataType: 'json',
                url: destination,
                success: function(data) {
                    success(data);
                },
                error: error,
                timeout: 2000
            });
        },

        /**
         * Convenience function used to build a state URL for a provided Hue lamp
         * index.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp.
         * @return {String} URL to put state to a lamp.
         */
        buildStateURL = function(lampIndex /* Number */) {
            return baseApiUrl + '/lights/' + lampIndex + '/state';
        },
        
        /**
         * Convenience function used to build a state URL for a provided Hue lamp
         * group.
         *
         * @param {Number} groupIndex 0-based index of the lamp group.
         * @return {String} URL to trigger a group action.
         */
        buildGroupActionURL = function(groupIndex /* {Number} */) {
            return baseApiUrl + '/groups/' + groupIndex + '/action';
        },

        buildGroupURL = function(key) {
            if (key !== undefined) {
                return baseApiUrl + '/groups/' + key;
            }
            return baseApiUrl + '/groups';
        },
        
        /**
         * Convenience function used to initiate an HTTP PUT request to modify 
         * state.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to modify.
         * @param {String} data String containing the JSON state object to commit to the lamp.
         * @param {Function} success Callback function to invoke on successful response.
         * @return {Object} JSON bulb state data.
         */
        put = function(lampIndex, data, success, error) {
            var callback = success || null;
            callback = null === callback ? apiSuccess : success;
            return putJSON(buildStateURL(lampIndex), callback, error, data);
        },
        
        /**
         * Convenience function used to initiate an HTTP PUT request to modify state of a group of lamps.
         *
         * @param {Number} Index of the lamp group to modify
         * @param {Object} Object containing desired lamp state
         * @return {Object} JSON bulb group state data.
         */
        putGroupAction = function(groupIndex /* {Number} */, action /* String */) {
            var callback = apiSuccess;
            var error = log;
            return putJSON(buildGroupActionURL(groupIndex), callback, error, action);
        },
        
        postGroup = function(name, lampIds) {
            var callback = apiSuccess;
            var error = log;
            var state = {name: name, lights: lampIds };
            return postJSON(buildGroupURL(), callback, error, state);
        },
        deleteGroup = function(key) {
            var callback = apiSuccess;
            var error = log;
            return del(buildGroupURL(key), callback, error);
        },
        /**
         * Convenience function used to initiate HTTP PUT requests to modify state
         * of all connected Hue lamps.
         *
         * @param {String} data String containing the JSON state object to commit to the lamps.
         * @param {Function} success Callback function to invoke on successful response.
         * @return {Object} JSON object containing state to apply to lamp.
         */
        putAll = function(data, success, error) {
            var callback = success || null;
            callback = null === callback ? apiSuccess : success;
            
            for(var i = 0; i < numberOfLamps; ++i) {
                putJSON(buildStateURL(i+1), callback, error,  data);
            }
            return data;
        },
        
        /**
         * Convenience function used to build a URL to query a lamp's status.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp.
         * @return {String} URL to query a specific lamp.
         */
        buildLampQueryURL = function(lampIndex /* Number */) {
            return baseApiUrl + '/lights/' + lampIndex;
        },
        
        /** 
         * Builds a JSON state object for the CIE 1931 color coordinates provided.
         * If the transitionTime property has been set, it is also included in the
         * JSON object.
         *
         * @param {Number[]} CIE 1931 X,Y color coordinates.
         * @return {Object} State object containing CIE X,Y coordinates.
         */
        buildXYState = function(xyCoords /* Number[] */, brightness, transitionTimeOverride) {
            var stateObj = { xy: xyCoords };
            if (typeof(brightness) === 'number') {
				stateObj.bri = brightness;
			}
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },

        /** 
         * Builds a JSON state object for the hue, saturation, and brightness provided.
         * @param {Number} hue from 0 to 65535.
         * @param {Number} sat from 0 to 255.
         * @param {Number} bri from 0 to 255.
         * @return {Object} State object containing CIE X,Y coordinates.
         */
        buildHueSatState = function(hue, sat, brightness, transitionTimeOverride) {
            var stateObj = { hue: hue, sat: sat };
            if (typeof(brightness) === 'number') {
                stateObj.bri = brightness;
            }
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },
        addTransitionTime = function(stateObj, transitionTimeOverride){
            if(typeof(transitionTime) === 'number' ) {
                stateObj.transitiontime = transitionTime;
            }
            if(typeof(transitionTimeOverride) === 'number' ) {
                stateObj.transitiontime = transitionTimeOverride;
            }
        },
        buildSceneState = function(sceneKey, transitionTimeOverride) {
            var stateObj = { scene: sceneKey };
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },
        
        /**
         * Returns the brightness of the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the lamp to query.
         * @return {Number} Brightness of the lamp at lampIndex. 0 - 255.
         */
        getBrightness = function(lampIndex /* Number */, success) {
            get(buildLampQueryURL(lampIndex), function(data) {
                // success
                if (data.state === undefined) {
                    // fail
                    return;
                }
                success(data.state.bri);
            }, function(err){
                err = null;
                // fail
            });
            //return lampState.state.bri;
        },
        
        /**
         * Builds a JSON state object used to set the brightness of a Hue lamp to
         * the value of the brightness parameter.
         *
         * @param {Number} brightness Integer value between 0 and 255. Note that 0
         * is not equivalent to the lamp's off state.
         * @return {Object} JSON object used to set brightness.
         */
        buildBrightnessState = function(brightness, transitionTimeOverride) {
            var stateObj = { bri: Number(brightness) };
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },

        adjustBrightness = function(lampId, brightness, success) {
            brightness = Number(brightness);
            getBrightness(lampId, function(currentBrightness){
                var adjustedBrightness = currentBrightness + brightness;
                var newBrightness = (adjustedBrightness< 255) ? adjustedBrightness : 254;
                newBrightness = (adjustedBrightness > 0) ? adjustedBrightness : 0;
                success(Math.round(newBrightness));
            });
        },
        getLightState = function(){
            $.ajax({
                dataType: 'json',
                url: lightApiUrl,
                success: onLightUpdate,
                error: onAuthError,
                timeout: 2000
            });
        },
        onLightUpdate = function(lights){
            // cache state
            /*jshint sub:true*/
            if (lights !== null && state !== null) {
                state.lights = lights;
                //log('hue: saving light state - ' + JSON.stringify(lights));
                timeoutAuthCounter = 0;
            }
        },
        getBridgeState = function(){
            $.ajax({
                dataType: 'json',
                url: baseApiUrl,
                success: onGotBridgeState,
                error: onAuthError,
                timeout: 5000
            });
        },
        onGotBridgeState = function(dataArray) {
            var data = dataArray;
            if ($.isArray(data)) {
                data = dataArray[0]; // take first
            }
            timeoutAuthCounter = 0;
            if (data.hasOwnProperty('error') && data.error.description === 'unauthorized user')
            {
                log('Not authorized with bridge, registering...');
                retryAuthCounter++;
                addUser();
            }
            else if (data.hasOwnProperty('lights'))
            {
                retryAuthCounter = 0;
                onAuthorized(data);
            }
        },
        onAuthorized = function(data){
            //log('Authorized');
            /* jshint ignore:start */
            if (typeof testData !== undefined && testData !== null) {
                data = testData;
            }
            /* jshint ignore:end */

            // cache state
            state = data;
            // re-create virtual All group:
            var lampIds = $.map(state.lights, function(lamp, key) {
              return key;
            });
            state.groups['0'] = {
                    name: 'All', 
                    lights: lampIds, 
                    type: 'LightGroup',
                    action: {} 
                };

            //log('hue: saving state - ' + JSON.stringify(data));

            numberOfLamps = Object.keys(data.lights).length;
            var message = 'No  lights found';
            if (numberOfLamps === 0) {
                message = 'No lights found.';
            } else if (numberOfLamps === 1) {
                message = 'One light found.';
            } else {
                message = '' + numberOfLamps + ' lights found.';
            }

            log('Updating Status - ok...');
            updateStatus('OK', message);
        },
        onAuthError = function(err){
            if (err.statusText === 'timeout') {
                timeoutAuthCounter++;
                if (timeoutAuthCounter >= 2) {
                    timeoutAuthCounter = 0;
                    log('too many timeouts with IP ' + baseUrl);
                    updateStatus('BridgeNotFound', 'Philip Hue bridge not found.');
                } else {
                    log('timeout on auth: ' + err.statusText + ' retry #' + timeoutAuthCounter);
                    getBridgeState(); // retry
                }
            } else { //if (err.statusText !== 'error') {
                log('error on auth: ' + err.statusText);
                updateStatus('BridgeNotFound', 'Philip Hue bridge not found.');
            } // what now?
        },
        addUser = function(){
            log('adding user...');
            var dataString = JSON.stringify({devicetype: apiKey, username: apiKey });
            log(dataString);
            $.ajax({
                url: baseUrl,
                type: 'POST',
                data: dataString,
                success: function(response) {
                     log(response);
                     if (response[0].hasOwnProperty('error'))
                     {
                        if (response[0].error.description === 'link button not pressed') {
                            updateStatus('Authenticating', 'Bridge found. Press the bridge button...');
                            setTimeout(addUser, 2000);
                        } else  {
                            log('Error: ' + response[0].error.description);
                        }
                     }
                     else if (response[0].hasOwnProperty('success'))
                     {
                        log('Authorization successful');
                        getBridgeState();
                     }
                }
            });

        },

        /**
         * Log to console
         */
        updateStatus = function(inStatus, text, data) {
            var newStatus = { status: inStatus, text: text, data: data };
            onStatus(newStatus);
        }, 
        onStatus = function(newStatus) {
            if (JSON.stringify(status) !== JSON.stringify(newStatus) ) {
                console.log('hue: sending status change, ' + newStatus.status + ', text: ' + newStatus.text + ', data: ' + newStatus.data);
                status = newStatus;
                statusChange();
            }
        },
        log = function(text) {
            console.log('hue: ' + text);
            if (logHandler !== null) {
                logHandler(text);
            }
        },
        // events:
        statusChangeHandler = null,
        logHandler = null,
        statusChange = function() { 
            if (statusChangeHandler !== null) {
                console.log('hue: sending status change, ' + status.status + ', text: ' + status.text + ', data: ' + status.data);
                statusChangeHandler(status);
            }
        },
        setHueSatState = function(lampIndex, hue, sat, bri, transitiontime) {
            var state = buildHueSatState(hue, sat, bri, transitiontime);
            put(lampIndex, state);
        },
        setXYState = function(lampIndex /* Number */, xy, transitiontime, bri) {
            var state = buildXYState(xy, bri, transitiontime);
            put(lampIndex, state);
        };
        
    return {
        /** 
         * Flash the lamp at lampIndex for a short time. 
         *	
         * @param {Number} lampIndex 1-based index of the Hue lamp to flash.
         * @return {Object} JSON object containing lamp state.
         */
        flash: function(lampIndex /* Number */) {
            return put(lampIndex, shortFlashState);
        },
        /** 
         * Flash all connected lamps for a short time.
         *
         * @return {Object} JSON object containing lamp state.
         */
        flashAll: function() {
            return putAll(shortFlashState);
        },
        /** 
         * Flash the lamp at lampIndex for a long time.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to flash.
         * @return {Object} JSON object containing lamp state.
         */
        longFlash: function(lampIndex /* Number */) {
            return put(lampIndex, longFlashState);
        },
        /** 
         * Flash all connected lamps for a long time.
         *
         * @return {Object} JSON object containing lamp state.
         */
        longFlashAll: function() {
            return putAll(longFlashState);
        },
        /** 
         * Set the lamp at lampIndex to the approximate CIE x,y equivalent of 
         * the provided hex color.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to colorize.
         * @param {String} color String representing a hexadecimal color value.
         * @return {Object} JSON object containing lamp state.
         */
        setColor: function(lampIndex /* Number */, color /* String */, transitiontime, brightness) {
            var xy = colors.getCIEColor(color);
            if (typeof(brightness) === 'number') {
                if (brightness < 0) { // min
                    // adjust it:
                    var bri = colorUtil().getBrightness(color);
                    adjustBrightness(lampIndex, bri, function(bri){
                        setXYState(lampIndex, xy, transitiontime, bri);
                    });
                    return;
                }
                setXYState(lampIndex, xy, transitiontime, brightness);
                
            } else {
                setXYState(lampIndex, xy, transitiontime, null);
            }
        },
        setXYState: function(lampIndex, xy, transitiontime, bri){
            setXYState(lampIndex, xy, transitiontime, bri);
        },
        /** 
         * Sets state for the hue, saturation, and brightness provided.
         * @param {Number} hue from 0 to 65535.
         * @param {Number} sat from 0 to 255.
         * @param {Number} bri from 0 to 255.
         * @return {Object} State object containing CIE X,Y coordinates.
         */
        setHueSatState: function(lampIndex, hue, sat, bri, transitiontime){
            setHueSatState(lampIndex, hue, sat, bri, transitiontime);
        },

        /**
         * Sets all connected lamps to the approximate CIE x,y equivalent of 
         * the provided hex color.
         *
         * @param {String} color String representing a hexadecimal color value.
         * @return {Object} JSON object containing lamp state.
         */
        setAllColors: function(color /* String */) {
			var xy = colors.getCIEColor(color);
            colorUtil().getBrightness(color, function(bri){
                var state = buildXYState(xy, bri);
                putGroupAction(0, state);
            });
        },
        createGroup: function(name, lights) {
            return postGroup(name, lights);
        },
        removeGroup: function(key) {
            return deleteGroup(key);
        },
        /** 
         * Turn on scene by key
         */
        startScene: function(sceneKey) {
            var state = buildSceneState(sceneKey);
            return putGroupAction(0, state);
            //var scene = hue.getState().scenes[sceneKey];
            //if (scene !== undefined) {
                //var state = buildSceneState(sceneKey);
                //$.each(scene.lights, function(index, val){
                //    put(val, state);
                //});       
            //}
        },
        /**
         * Turn off the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to turn off.
         * @return {Object} JSON object containing lamp state.
         */
        turnOff: function(lampIndex /* Number */) {
            return put(lampIndex, offState);
        },
        /** 
         * Turn on the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to turn on.
         * @return {Object} JSON object containing lamp state.
         */
        turnOn: function(lampIndex /* Number */) {
            return put(lampIndex, onState);
        },
        /** 
         * Turn off all connected lamps.
         *
         * @return {Object} JSON object containing lamp state.
         */
        turnOffAll: function() {
            if (status.status === 'OK') { status.data = false; }
            return putGroupAction(0, offState);
        },
        /** 
         * Turn on all connected lamps.
         *
         * @return {Object} JSON object containing lamp state.
         */
        turnOnAll: function() {
            if (status.status === 'OK') { status.data = true; }
            return putGroupAction(0, onState);
        },
        /**
         * Set the brightness of the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to modify.
         * @param {Number} brightness Integer value between 0 and 254.
         * @return {Object} JSON object containing lamp state.
         */
        setBrightness: function(lampIndex /* Number */, brightness /* Number */, transitiontime /* Number */) {
            var state = buildBrightnessState(brightness, transitiontime);
            return put(lampIndex, state);
        },
        /**
         * Set the brightness of all connected lamps.
         *
         * @param {Number} brightness Integer value between 0 and 254.
         * @return {Object} JSON object containing all lamp state.
         */
        setAllBrightness: function(brightness /* Number */) {
            var state = buildBrightnessState(brightness);
            return putGroupAction(0, state);
        },
        /**
         * Set the brightness of an indexed group of lamps.
         *
         * @param {Number} groupIndex 0-based lamp group index.
         * @param {Number} brightness Integer value between 0 and 254.
         * @return {Object} JSON object containing group state.
         */
        setGroupBrightness: function(groupIndex /* Number */, brightness /* Number */) {
            var state = buildBrightnessState(brightness);
            return putGroupAction(groupIndex, state);
        },
        /**
         * Dim the lamp at lampIndex by decrement.
         * 
         * @param {Number} lampIndex 1-based lamp index.
         * @param {Number} [decrement] Amount to decrement brightness by (between 0 and 255).
         * @return {Object} JSON object containing lamp state.
         */
        dim: function(lampIndex /* Number */, decrement /* Number */, transitiontime) {
            decrement = decrement || -10; // default to 10 if decrement not provided.
            adjustBrightness(lampIndex, decrement, function(newBrightness) {
                return put(lampIndex, buildBrightnessState(newBrightness, transitiontime));
            });
        },
        /**
         * Dim all lamps by decrement.
         * 
         * @param {Number} [decrement] Amount to decrement brightness by (between 0 and 255).
         * @return {Object[]} JSON objects containing lamp states.
         */
        dimAll: function(decrement /* Number */) {
            var states = [];
            for(var i = 0; i < numberOfLamps; ++i ) {
                states[i] = this.dim(i + 1, decrement);
            }
            return states;
        },
        /**
         * Brighten the lamp at lampIndex by increment.
         *
         * @param {Number} lampIndex 1-based lamp index.
         * @param {Number} [increment] Amount to increment brightness by (between 0 and 255).
         * @return {Object} JSON object containing lamp state.
         */
        brighten: function(lampIndex, increment, transitiontime) {
            increment = increment || 10;
            adjustBrightness(lampIndex, increment, function(newBrightness) {
                //this.setBrightness(lampIndex, newBrightness, transitiontime);
                return put(lampIndex, buildBrightnessState(newBrightness, transitiontime));
            });
        },
        /**
         * Brighten all lamps by increment.
         *
         * @param {Number} [increment] Amount to increment brightness by (between 0 and 255).
         * @return {Object[]} JSON objects containing lamp states.
         */
        brightenAll: function(increment /* Number */) {
            var states = [];
            for(var i = 0; i < numberOfLamps; ++i) {
                states[i] = this.brighten(i + 1, increment);
            }
            return states;
        },
        /** 
         * Return the value of the configured transitionTime property.
         *
         * @return {Number} Value of the transitionTime property. Null by default if not
         * set.
         */
        getTransitionTime: function() {
            return transitionTime;
        },
        /**
         * Set the value of the transitionTime property.
         *
         * @param {Number} time Lamp color transition time in approximate milliseconds.
         */
        setTransitionTime: function(time /* Number */) {
            transitionTime = time;
        },
        /**
         * Set the IP address of the bridge and the API key to use to control
         * the Hue lamps.
         * 
         * @param {String} IP Address as a String (e.g. 192.168.1.1)
         * @param {String} API key that was registered with the Hue bridge.
         */
        setIp: function(ip) {
            bridgeIP = ip;
            updateURLs();
        },
        /**
         * Find bridges  findBridge() a upnp, then scan, then predefined typical ips. 
         */
        findBridge: function(onerror) {
            log('Requesting meethue.com/api/nupnp.');
            $.ajax({
                url: 'https://www.meethue.com/api/nupnp',
                dataType: 'json',
                timeout: 2000,
                success: function(data) {
                    if (data !== null && data.length > 0) {
                        bridgeIP = data[0].internalipaddress;
                        if (bridgeIP !== '0.0.0.0')
                        {
                            log('Found bridge at ' + bridgeIP);
                            updateURLs();

                            getBridgeState();
                        }
                        else{
                            log('Bridge not found');
                            updateStatus('BridgeNotFound', 'Philip Hue lights not found.');
                        }
                    } else {
                        log('meethue portal did not return');
                        updateStatus('BridgeNotFound', 'Philip Hue lights not found.');
                    }
                },
                error: function(err){
                    // error
                    log(err);
                    updateStatus('BridgeNotFound', 'Philip Hue lights not found.');
                    if (typeof(onerror) !== 'undefined') {
                        onerror(err);
                    }
                }
            });
        },
        /**
         * Set the number of lamps available to control.
         *
         * @param {Number} The total number of lamps available to interact with. Default is 3.
         */
        setNumberOfLamps: function(numLamps /* Number */) {
            if(typeof(numLamps) === 'number') {
                numberOfLamps = numLamps;
            }
        },
        //status: status,
        // events
        onStatusChange: function  (func) {
            console.log('new subscriber to status change registered; internal status' + status);
            statusChangeHandler = func;
            statusChangeHandler(status);
        }, 
        setLogger: function  (func) {
            console.log('new subscriber to log change registered;');
            logHandler = func;
        }, 
        getState: function() {
            return state;
        },
        getStatus: function() {
            return status;
        },
        refresh: function(data){
            if (!data) {
                getBridgeState();
            } else {
                onAuthorized(data);
            }
            
        },
        heartbeat: function(){
            getLightState();
        },
        getLampIds: function(actors){
            // parse actors
            //actors
            if (actors === null) {
                return []; // no lamps
            }
            if (actors.substring(0, 'group-'.length) === 'group-')
            {
                var group = actors.substring('group-'.length);
                if (state.groups[group] === undefined) {
                    // error.
                    return []; 
                }
                return state.groups[group].lights;
            }
            return [actors]; // lights: prefix not used, just return array of number.
        },
        discover: function(ip){
          //window.hue.findBridge(); 
          discover.start(ip, true);
          updateStatus(statusInit.status,statusInit.text);
          //discoverStatus = 'init';

        }
    };
};


function findActors(key) {
  return findGroupIdByName(key);
}

function findGroupIdByName(name) {
  if (name.toLowerCase() === 'all') {
    return '0';// special case group-0 is all.
  }
  var state = window.hue.getState();
  if (state !== null) {
      for(var group in state.groups) {
        if (state.groups[group].name.toLowerCase() === name.toLowerCase()) {
          return group;
        }
      }
    }
  return null;
}
/**
 * Dmitry Sadakov's Color Util
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */
 
'use strict';

/*exported colorUtil */
var colorUtil = function() {
    
    
    function colourNameToHex(colour)
    {
        var colours = {
            'aliceblue':'#f0f8ff',
            'antiquewhite':'#faebd7',
            'aqua':'#00ffff',
            'aquamarine':'#7fffd4',
            'azure':'#f0ffff',
            'beige':'#f5f5dc',
            'bisque':'#ffe4c4',
            'black':'#000000',
            'blanchedalmond':'#ffebcd',
            'blue':'#0000ff',
            'blueviolet':'#8a2be2',
            'brown':'#a52a2a',
            'burlywood':'#deb887',
            'cadetblue':'#5f9ea0',
            'chartreuse':'#7fff00',
            'chocolate':'#d2691e',
            'coral':'#ff7f50',
            'cornflowerblue':'#6495ed',
            'cornsilk':'#fff8dc',
            'crimson':'#dc143c',
            'cyan':'#00ffff',
            'darkblue':'#00008b',
            'darkcyan':'#008b8b',
            'darkgoldenrod':'#b8860b',
            'darkgray':'#a9a9a9',
            'darkgreen':'#006400',
            'darkkhaki':'#bdb76b',
            'darkmagenta':'#8b008b',
            'darkolivegreen':'#556b2f',
            'darkorange':'#ff8c00',
            'darkorchid':'#9932cc',
            'darkred':'#8b0000',
            'darksalmon':'#e9967a',
            'darkseagreen':'#8fbc8f',
            'darkslateblue':'#483d8b',
            'darkslategray':'#2f4f4f',
            'darkturquoise':'#00ced1',
            'darkviolet':'#9400d3',
            'deeppink':'#ff1493',
            'deepskyblue':'#00bfff',
            'dimgray':'#696969',
            'dodgerblue':'#1e90ff',
            'firebrick':'#b22222',
            'floralwhite':'#fffaf0',
            'forestgreen':'#228b22',
            'fuchsia':'#ff00ff',
            'gainsboro':'#dcdcdc',
            'ghostwhite':'#f8f8ff',
            'gold':'#ffd700',
            'goldenrod':'#daa520',
            'gray':'#808080',
            'green':'#008000',
            'greenyellow':'#adff2f',
            'honeydew':'#f0fff0',
            'hotpink':'#ff69b4',
            'indianred ':'#cd5c5c',
            'indigo':'#4b0082',
            'ivory':'#fffff0',
            'khaki':'#f0e68c',
            'lavender':'#e6e6fa',
            'lavenderblush':'#fff0f5',
            'lawngreen':'#7cfc00',
            'lemonchiffon':'#fffacd',
            'lemon':'#fffacd',
            'lightblue':'#add8e6',
            'lightcoral':'#f08080',
            'lightcyan':'#e0ffff',
            'lightgoldenrodyellow':'#fafad2',
            'lightgrey':'#d3d3d3',
            'lightgreen':'#90ee90',
            'lightpink':'#ffb6c1',
            'lightsalmon':'#ffa07a',
            'lightseagreen':'#20b2aa',
            'lightskyblue':'#87cefa',
            'lightslategray':'#778899',
            'lightsteelblue':'#b0c4de',
            'lightyellow':'#ffffe0',
            'lime':'#00ff00',
            'limegreen':'#32cd32',
            'linen':'#faf0e6',
            'magenta':'#ff00ff',
            'maroon':'#800000',
            'mediumaquamarine':'#66cdaa',
            'mediumblue':'#0000cd',
            'mediumorchid':'#ba55d3',
            'mediumpurple':'#9370d8',
            'mediumseagreen':'#3cb371',
            'mediumslateblue':'#7b68ee',
            'mediumspringgreen':'#00fa9a',
            'mediumturquoise':'#48d1cc',
            'mediumvioletred':'#c71585',
            'midnightblue':'#191970',
            'mintcream':'#f5fffa',
            'mistyrose':'#ffe4e1',
            'moccasin':'#ffe4b5',
            'navajowhite':'#ffdead',
            'navy':'#000080',
            'oldlace':'#fdf5e6',
            'olive':'#808000',
            'olivedrab':'#6b8e23',
            'orange':'#ffa500',
            'orangered':'#ff4500',
            'orchid':'#da70d6',
            'palegoldenrod':'#eee8aa',
            'palegreen':'#98fb98',
            'paleturquoise':'#afeeee',
            'palevioletred':'#d87093',
            'papayawhip':'#ffefd5',
            'peachpuff':'#ffdab9',
            'peru':'#cd853f',
            'pink':'#ffc0cb',
            'plum':'#dda0dd',
            'powderblue':'#b0e0e6',
            'purple':'#800080',
            'red':'#ff0000',
            'rosybrown':'#bc8f8f',
            'royalblue':'#4169e1',
            'saddlebrown':'#8b4513',
            'salmon':'#fa8072',
            'sandybrown':'#f4a460',
            'seagreen':'#2e8b57',
            'seashell':'#fff5ee',
            'sienna':'#a0522d',
            'silver':'#c0c0c0',
            'skyblue':'#87ceeb',
            'slateblue':'#6a5acd',
            'slategray':'#708090',
            'snow':'#fffafa',
            'springgreen':'#00ff7f',
            'steelblue':'#4682b4',
            'tan':'#d2b48c',
            'teal':'#008080',
            'thistle':'#d8bfd8',
            'tomato':'#ff6347',
            'turquoise':'#40e0d0',
            'violet':'#ee82ee',
            'wheat':'#f5deb3',
            'white':'#ffffff',
            'whitesmoke':'#f5f5f5',
            'yellow':'#ffff00',
            'yellowgreen':'#9acd32',

            'minty':'#98FF98',
            'coldwhite':'#FFF4E5',
            'warmwhite':'#D4EBFF'
        };

        // if key exists
        if (typeof colours[colour.toLowerCase()] !== 'undefined') {
            return colours[colour.toLowerCase()];
        }

        return false;
    }

    function isColorHex(hex){
        var isColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
        if (isColor) {
            return true;
        }
        return false;
    }
	
	function componentToHex(c) {
	    var hex = c.toString(16);
	    return hex.length === 1 ? '0' + hex : hex;
	}

	function hexToRgb(hex) {
	    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
	        return r + r + g + g + b + b;
	    });

	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	        r: parseInt(result[1], 16),
	        g: parseInt(result[2], 16),
	        b: parseInt(result[3], 16)
	    } : null;
	}
    /*
    //Converts to color HSB object (code from here 
    // http://www.csgnetwork.com/csgcolorsel4.html 
    //with some improvements)
    function rgb2hsb(r, g, b) {    
        r /= 255; g /= 255; b /= 255; // Scale to unity.   
        var minVal = Math.min(r, g, b),
        maxVal = Math.max(r, g, b),
        delta = maxVal - minVal,
        HSB = {hue:0, sat:0, bri:maxVal},
        del_R, del_G, del_B;

        if( delta !== 0 ) {
            HSB.sat = delta / maxVal;
            del_R = (((maxVal - r) / 6) + (delta / 2)) / delta;
            del_G = (((maxVal - g) / 6) + (delta / 2)) / delta;
            del_B = (((maxVal - b) / 6) + (delta / 2)) / delta;

            if (r === maxVal) {HSB.hue = del_B - del_G;}
            else if (g === maxVal) {HSB.hue = (1 / 3) + del_R - del_B;}
            else if (b === maxVal) {HSB.hue = (2 / 3) + del_G - del_R;}

            if (HSB.hue < 0) {HSB.hue += 1;}
            if (HSB.hue > 1) {HSB.hue -= 1;}
        }

        HSB.hue *= 360;
        HSB.sat *= 100;
        HSB.bri *= 100;

        return HSB;
    }
    */
    
    return {
        getColor: function(command) {
            //log('get color: ' + command);

            var foundColor = colourNameToHex(command);
            if (foundColor !== false) {
                return foundColor;
            }

            var isColor = isColorHex(command);
            if (isColor) {
                return command;
            }
           return false;
        },
		getBrightness: function(hex){
			var rgb = hexToRgb(hex);
			return Math.round((0.2126*rgb.r) + (0.7152*rgb.g) + (0.0722*rgb.b));
		},
        rgbToHex: function (r, g, b) {
            return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
    };
};
/**
 * Dmitry Sadakov's Philips Hue Commander wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals trackEvent, $, findActors */
/*exported 
    hueCommander,
    executeCommand,
    activatedScene
 */
 
'use strict';

var hueCommander = function ($, hue, colorUtil, sceneCmd) { 
    if (typeof String.prototype.endsWith !== 'function') {
        String.prototype.endsWith = function(suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }
     
    if (typeof String.prototype.startsWith !== 'function') {
        String.prototype.startsWith = function(prefix) {
            return this.indexOf(prefix) !== -1;
        };
    }

    var logger = null,
        actorId = null,
        stateCache = null,
        executeCommand = function(command) {
            log('executing command: ' + command + ' on actor: ' + actorId);
            trackEvent('huecommander', 'command', command);

            if (actorId === null) {
                // by default set all group
                var groupAll = findActors('All');
                if (groupAll === null) {
                  actorId = 'group-1';
                } else {
                  actorId = 'group-' + groupAll;
                }
            }

            if (command === undefined) {
                return;
            }
            if (command === 'brighten' || command === 'up') {
                //hue.brightenAll(Math.floor(255 / 3));
                executeOnActors(function(bulb){
                    hue.brighten(bulb, Math.floor(255 / 3));
                });            
            }
            if (command === 'darken' || command === 'dim' || command === 'dim down' || command === 'down') {
                //hue.brightenAll(Math.floor(-255 / 3));
                executeOnActors(function(bulb){
                    hue.dim(bulb, -Math.floor(255 / 3));
                });
            }
            if (command === 'on') {
                executeOnActors(function(bulb){
                    hue.turnOn(bulb);
                });
                return;
            }
            if (command === 'off') {
                executeOnActors(function(bulb){
                    hue.turnOff(bulb);
                });
                return;
            }
            var json = parseJson(command);
            if (json !== null)
            {   
                // hue, sat, bri command:
                if('hue' in json) {
                    executeOnActors(function(bulb){
                        hue.setHueSatState(bulb, json.hue, json.sat, json.bri, json.time);
                    });
                    return;
                } else if('bri' in json) {
                    executeOnActors(function(bulb){
                       hue.setBrightness(bulb, json.bri);
                    });
                    return;
                } 
                //else if('color' in json) {
                //    hue.setColor(color.substring(1));
                //}
            }
            var bri = detectBrightness(command);
            if (bri !== null) {
                executeOnActors(function(bulb){
                    hue.setBrightness(bulb, bri);
                });
                return;
            }
            var color = colorUtil.getColor(command);
            if (color !== false) {
                executeOnActors(function(bulb){
                    hue.setColor(bulb, color.substring(1));
                });
                return;
            }

            if (command === 'scene:stop') {
                sceneCmd.stop();
                restoreState();
                return 'stop';
            } else {
                if (command.lastIndexOf('scene:', 0) === 0) {
                    var sceneName = command.substring(6);
                    var lampids = hue.getLampIds(actorId);

                    saveState();

                    sceneCmd.start(sceneName, lampids);
                    return sceneName;
                }
            }
        },
        parseJson = function(cmd){
            try {
                if (cmd.startsWith('{')) {
                    return JSON.parse(cmd);
                }
            }
            catch(ex)
            {
                log('Bad command:' + cmd + ' ex:' + ex.message);
            }
            return null;
        },
        saveState = function(){
            if (stateCache === null) {
                stateCache = getActorStatesInternal();
                log('Saved state' + JSON.stringify(stateCache));
            }
        },
        restoreState = function(){
            if (stateCache !== null) {
                var newstate = stateCache;
                stateCache = null;
                log('Restoring state' + JSON.stringify(newstate));
                $.each(newstate, function(key, value){
                    hue.setXYState(value.key,value.state.xy, 0, value.state.bri);
                });
                hue.heartbeat();// force refresh from bridge
            }
        },
        executeOnActors = function(func){
            sceneCmd.stop();
            restoreState();

            var lampIds = hue.getLampIds(actorId);
            if (!$.isArray(lampIds)) {
                lampIds = [lampIds];
            }
            $.each(lampIds, function(index, val){
                func(val, index);
            });
        },
        detectBrightness = function(command){
            if (command === undefined) {
                return null;
            }
            if (command.startsWith('bri:')) {
                return command.substring('bri:'.length);
            }
            return null;
        },
        log = function (text){
            if (logger !== null) {
                logger(text);
            }
        },
        getActorStatesInternal = function(){
            var lampIds = hue.getLampIds(actorId);
            var state = window.hue.getState();
            var actorStates= [];
            if (state.lights !== null) {
                for(var i in state.lights) {
                    var lamp = state.lights[i];
                    lamp.key = i;
                    if (lampIds.indexOf(i) !== -1) {
                        actorStates.push(lamp);
                    }
                }
            } 
            return actorStates;
        },
        getActorBrightnessInternal = function() {
            var bri = 0;
            var actors = getActorStatesInternal();
            $.each(actors, function(key, lamp){
                if (lamp.state.bri > bri) {
                  bri = lamp.state.bri;
                }
            });
            return bri;
        },
        getActorTurnedOn = function() {
            var on = false;
            var actors = getActorStatesInternal();
            $.each(actors, function(key, lamp){
                on = on || lamp.state.on;
            });
            return on;
        }, 
        discover = function(ip){
            hue.discover(ip);
        }, 
        onStatusChange = function(onStatus){
            hue.onStatusChange(onStatus);
        }, 
        setIp = function(ip){
            hue.setIp(ip);
        }, 
        heartbeat = function(){
            hue.heartbeat();
        },
        createGroup = function(name, lampIds){
            hue.createGroup(name, lampIds);
        },
        removeGroup = function(key){
            hue.removeGroup(key);
        },
        refresh =  function(){
            hue.refresh();
        },
        flash = function(key){
            hue.flash(key);
        },
        getState = function(){
            var state = hue.getState();
            state.actorId = actorId;
            return state;
        },
        getStatus = function(){
            return hue.getStatus();
        },
        palette = function(colors){
            return sceneCmd.palette(colors);
        }
        ;
        
 
    return {
        setActor: function(actor) {
            actorId = actor;
            return actorId;
        },
        getActor: function(actor) {
            return actorId;
        },
        getActorBrightness: function() {
            return {
                bri: getActorBrightnessInternal(), 
                on: getActorTurnedOn() 
            };
        },
        getActorStates: function() {
            return getActorStatesInternal();
        },
        command: function(commandText) {
            return executeCommand(commandText);
        },
        setLogger: function(logHandler) {
            logger = logHandler;
        },
        discover: function(ip) {
            discover(ip);
        }, 
        onStatusChange: function(onStatus){
            onStatusChange(onStatus);
        },
        setIp: function(ip){
            setIp(ip);
        }, 
        heartbeat: function(){
            heartbeat();
        },
        createGroup: function(group){
            //name, lampIds){
            createGroup(group.name, group.lampIds);
        },
        removeGroup: function(key){
            removeGroup(key);
        },
        refresh: function(){
            refresh();
        },
        flash: function(key){
            flash(key);
        },
        getState: function(){
            return getState();
        },
        getStatus: function(){
            return getStatus();
        }, 
        palette: function(colors) {
           return palette(colors); 
        },
        parse: function(cmd){
            return this[cmd.hueCommand.command](cmd.hueCommand.args);
        }
    };
};

/*
function executeBrightness(val){
  window.hueCommander.command('bri:' + val);   
  return false;
}

function executeToggle(on){
  window.hueCommander.command(on ? 'on' : 'off');   
  return false;
}
function executeHrefCommand() {
  
  var command = $(this).attr('href');
  executeCommand(command);
  return false;
}
*/


function executeCommand(command) {
  window.hueCommander.command(command);
  //activatedScene('stop');
  return false; 
}

function activatedScene(key){
  $('#scenes button').removeClass('active');
  $('.scene').removeClass('active');
  $('#scenes button[id="' + key + '"]').addClass('active');
  $('.scene[data-scene="' + key + '"]').addClass('active');
}
// Dmitry Sadakov 2015 Voice module
/*globals 
    SpeechSynthesisUtterance: false,
    trackEvent
*/
/*exported voice, voiceCommander, huevoice, voiceCmd */
'use strict';

var voice = function () { 
    
 	var recognition = null;
	var callback = null;
    var errfunc = null;
    var endfunc = null;

	function speak(text){
		if ('speechSynthesis' in window) {
	      var speech = new SpeechSynthesisUtterance();
	      speech.lang = 'en-US';
	      speech.text = text;
	      window.speechSynthesis.speak(speech);
	  }
	}

    function available() {
        var SpeechRecognition = window.SpeechRecognition ||
                            window.webkitSpeechRecognition ||
                            window.mozSpeechRecognition ||
                            window.msSpeechRecognition ||
                            window.oSpeechRecognition;
        return SpeechRecognition;
    }
	
	function recognize(callbackFunc, err, onend) { 
		callback = callbackFunc;
        errfunc = err;
        endfunc = onend;

		var SpeechRecognition = available();
	    if (SpeechRecognition !== undefined) {
            if (recognition === null) {
	            recognition = new SpeechRecognition();
           } else {
                return recognition;
           }
        }
	    else {
	        console.error('Your browser does not support the Web Speech API');
            speak('Voice not supported');
            return null;
	    }
        recognition.lang = 'en-US';
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.onresult = onSpeechResult;
        recognition.onstart = onStarted;
        recognition.onerror = onErrored;
        recognition.onend = onEnd;
        return recognition;
    }

    function onStarted(){
        console.log('voice started');
        trackEvent('voice', 'started');
    }

    function onErrored(err){
        console.log('voice error: ' + err);
        if (errfunc) {
            errfunc(err);
        }    
        trackEvent('voice', 'error', err.message);
    }

    function onEnd(){
        console.log('voice end');
        //recognition.start();
        if (endfunc) {
            endfunc();
        }
    }

    function onSpeechResult(e) {
    	var text = '';
        for (var i = e.resultIndex; i < e.results.length; ++i) {
            text += e.results[i][0].transcript;
        }

        console.log('voice:' + text);
        trackEvent('voice', 'speech', text);

        if (callback) {
        	callback(text);
        }   
    }

    function start() {
    	if (recognition) {
        	recognition.start();
    	}
    }

    function stop() {
    	if (recognition) {
        	recognition.stop();
    	}
    }

    function abort() {
    	if (recognition) {
        	recognition.abort();
    	}
    }

    return {
        speak: function(text) {
            return speak(text);
        },
        recognize: function(func, errfunc, endfunc) {
            return recognize(func, errfunc, endfunc);
        },
        start: function() {
            return start();
        },
        stop: function() {
            return stop();
        },
        abort: function() {
            return abort();
        }, 
        notAvailable: function () {
            return available() === undefined;
        }
    };
};


var reaction = function() {
    var items = [];
    var filters = [];
    var otherwise = null;

    function on(regex, func){
        items.push([regex, func]);
    }

    function filterAdd(func){
        filters.push(func);
    }

    function setDefault(func) {
        otherwise = func;
    }

    function react(text) {
        var textIn = text;
        for (var index in filters) {
            text = filters[index](text);
        }
        
        var obj = {'voice': true, 'text': textIn, 'text-reaction': text, match: false};
        for (var item in items) {
            if (items[item][0].test(text)) {
                console.log('filtered text: "' + textIn + '" -> "' + text +'" matched: ' + items[item][0]);
                obj.match = items[item][0];
                trackEvent('voice', 'reaction', text, textIn, obj);
                var args = items[item][0].exec(text);
                args.unshift(text);
                var func = items[item][1];
                func.apply(null, args);
                return;
            }
        }
        console.log('filtered text: "' + textIn + '" -> "' + text +'", no match');
        trackEvent('voice', 'reaction', text, textIn, obj);
        if (otherwise) {
          otherwise.apply(null, [text]);
        }
    }

    return {
        on: function(text, func) {
            on(text, func);
        },
        react: function(text) {
            react(text);
        },
        setDefault: function(text) {
            setDefault(text);
        },
        filter: function(func) {
            filterAdd(func);
        }
    };
};

var voiceCommander = function (voiceFunc) {
    var voiceCallback = voiceFunc;

    function lightCmdParser() {
        var cmds = new reaction();
        cmds.filter(removeDeterminers);
        cmds.filter(replaceLightSynonyms);
        cmds.filter(replaceSceneSynonyms);
        cmds.filter(replaceCommandSynonyms);

        cmds.on(/make it look like (?:a )?(.+)/, sceneCmd);
        cmds.on(/(?:start |stop )(?:dynamic )?([a-z ]+)(?: scene| lights)?(?: in )([a-z ]+)/, toggleSceneCmd);
        cmds.on(/(start|stop)(?: dynamic)?(?: scene| lights)?/, toggleSceneCmd);
        cmds.on(/(?:set|up|dim) ([a-z ]+) to ([a-z0-9%]*)(?: brightness)?/, inverseCmd);
        cmds.on(/(?:set|up|dim) to ([a-z0-9%]*)(?: brightness)?/, voiceCmd);
        cmds.on(/(on|off|up|dim)+? ([a-z]+)+/, voiceCmd);
        cmds.on(/([a-z0-9% ]*) brightness/, inverseCmd);
        cmds.on(/([a-z]+) (on|off|up|dim|dimmer)+?/, inverseCmd);
        cmds.on(/(on|off|up|dim|dimmer)+ ([a-z]+)/, voiceCmd);
        cmds.on(/(on|off|up|down|dim|lower|higher)/, voiceCmd);
        cmds.setDefault(function (text) {
            voiceCallback(text);
        });
        return cmds;
    }

    function removeDeterminers(text) {
      return text.replace(/the |my /g, '');
    }

    function replaceLightSynonyms(text) {
      return text.replace(/bulbs |lamps |lights | lights?/g, '');
    }

    function replaceCommandSynonyms(text) {
      text = text.replace(/ percent/g, '%');
      text = text.replace(/maximum/g, '100%');
      text = text.replace(/minimum/g, '1%');
      text = text.replace(/turn /g, '');
      text = text.replace(/dim down|down|dimmer/g, 'dim');
      text = text.replace(/animate|continue/g, 'start');
      text = text.replace(/brighten|lighten/g, 'up');
      return text;
    }

    function replaceSceneSynonyms(text) {
      return text.replace(/animation|theme/g, 'scene');
    }

    function voiceCmd(text, match, action, actor) {
        if (voiceCallback) {
            voiceCallback(text, match, action, actor);
        }
    }
    
    //function inverseSceneCmd(text, match, actor, action) {
    //  voiceCmd(text, match, 'scene:' + action, actor);
    //}

    function toggleSceneCmd(text, match, action, actor) {
      voiceCmd(text, match, 'scene:' + action, actor);
    }

    function inverseCmd(text, match, actor, action) {
      voiceCmd(text, match, action, actor);
    }

    function sceneCmd(text, match, action, actor) {
      voiceCmd(text, match, 'scene:' + action, actor);
    }

    return lightCmdParser();
};



/*   voice commands */
var huevoice = null;

/*
function voiceError(err){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.error(err);
}

function voiceEnd(){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.log('voice end');
}*/


function voiceCmd(text, match, action, actor) {
    if (window.voiceCmdFunc) {
        window.voiceCmdFunc(text, match, action, actor);
    }
}
/**
 * Dmitry Sadakov's Philips Hue app
 */

'use strict';

/* globals chrome */
/*exported hueProxy
*/

var hueProxy = function(hueCommander) {

    function sendToMothership(obj, args, callback){
        if (hueCommander) {
            var result = hueCommander.parse(obj, args);
            if (result && callback) {
                callback(result);
            }
        } else {
            //var editorExtensionId = 'bkjobgdhkjdholiipmcdbaefnoacfkcc';
            var editorExtensionIdProd = 'ahcbfmbmpojngalhbkkggbfamgmkneoo';
            //chrome.runtime.sendMessage(editorExtensionId, obj, callback);
            chrome.runtime.sendMessage(editorExtensionIdProd, obj, callback);
        }
    }

    function hueCommand(command, args, callback) {
        if (typeof(args) === 'function') {
            // reorder arguments if second is skipped
            callback = args;
            args = undefined;
        }
        var obj = {
            hueCommand: {
                command: command,
                args: args
            }
        };
        sendToMothership(obj, args, callback);
    }

    return {
        cmd: hueCommand,
        sendToMothership: sendToMothership
    };
};
/**
 * Dmitry Sadakov"s Philips Hue api wrapper popup page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */

'use strict';
/*jshint multistr: true */

/*globals $:false, 
          chrome:false, 
          hueCommander:true, 
          hue:false, 
          sceneCommander:false, 
          Palettes:false, 
          scenes:false, 
          trackEvent:false,
          trackState,
          colorUtil:false,
          ga:false
          Ambient:false,
		      config:false,
          initSocialButtons: true,
          voice: true, 
          huevoice: true,
          findActors,
          activatedScene,
          voiceCommander,
          hueProxy
*/

/* exported socialLikesButtons, voiceCmdFunc */

var heartbeat = null;// setInterval(hue.heartbeat, 1000); // dies with closed popup.

var sceneCmd = null;
var ambieye = null;
var heartbeatInterval = 2000;

var hubStartTime = new Date().getTime();


/* search */
var clPalettes = null;
var skip = 0;

var manualIpInputAnimation = null;

var gravity = {
  active: false,
  a: 0,
  b: 0,
  g: 0,
  x: 0,
  y: 0,
  z: 0,
  hue: 0,
  bri: 0, 
  sat: 255,
  north: 0,
  northhue: false,
  timer: null,
  delaySend: null
};


var hideCircleTimer = null;

var delayedSend = null;

var circle = $('#picker-circle');

$(document).ready(function(){

    initGlobals();


    // copyright
    $('footer time').text(new Date().getFullYear());


    initSlider();
    initSubscribe();
    initSearch();
    initManualBridge();
    initGroupCreation();

    // todo: safe to remove?
    if (window.hue.status === 'OK') {
      $('#lightswitch').prop('checked', window.hue.status.data);
    }

    $('.voice-control').hide();

    initLightswitch();
    initPalettes();
    initPickers();
    initGravity();

    initAmbientEye();
    initCloseMinimize();

    initSocialButtons();

    $('footer a').click(handleSystemLink);
    $('.nativeclick').click(handleSystemLink);

});

// Wait for device API libraries to load
document.addEventListener('deviceready', onDeviceReady, false);

var socialLikesButtons = {
    plusone: {
       click: nativeShareUrl
    },
    facebook: {
       click: nativeShareUrl
    },
    twitter: {
       click: nativeShareUrl
    },
    pinterest: {
       click: nativeShareUrl
    },
    isDevice: false
};

// device APIs are available
//
function onDeviceReady() {
  //var ref = window.open('http://apache.org', '_blank', 'location=yes');
  socialLikesButtons.isDevice = true;
  // onclick="window.open('http://bit.ly/lightpro','_blank');"
}


function handleSystemLink(a) {  
  var url = a.target.href;
  if (a.target.href === undefined) {
    url = $(a.target).attr('href');
  }

  if (window.winapp !== undefined){
    window.winapp.handleUrl(url);
    return false;
  }

  if (socialLikesButtons.isDevice) {
    window.open(url, '_system', 'location=yes');
  } else {  
    window.open(url, '_blank', 'location=yes');
  }
  return false;
}

function nativeShareUrl(e) {  
  if (socialLikesButtons.isDevice) {
    window.open(e.shareUrl, '_system', 'location=yes');
    return false;
  } 
  return true;
}

function amExtension(){
  return typeof(chrome) !== 'undefined'  && chrome.extension !== undefined;
}

function initGlobals(){


    $('body').addClass(config.app);
     //config.ambieye
    $('.config-moods').toggle(config.scenes);
    $('.config-colors').toggle(config.scenes);
    $('.config-search').toggle(config.search);
    $('.config-ambieye').toggle(config.ambieye);
    $('.config-feedback').toggle(config.feedback);

    if(config.app !== 'app') {
      /* jshint ignore:start */
      // Set colors
      UserVoice.push(['set', {
        target : '#uservoice',
        accent_color: '#448dd6',
        trigger_color: 'white',
        trigger_background_color: 'rgba(46, 49, 51, 0.6)',
        strings: {
          post_suggestion_body: ''
          //post_suggestion_title: '',
          //post_suggestion_details_title: ''

        }
      }]);
      /* jshint ignore:end */
    }

    var background = null;
    if (window.externalBackground !== undefined) {
      log('loading as page with external background reference');
      background = window.externalhuebk;
    } else if (amExtension()) {
      log('loading as chrome extention popup');
      background = chrome.extension.getBackgroundPage();
    }

    $('#https-proxy').hide();

    if (location.protocol === 'https:') {
        // page is secure, hue commander needs to use proxy to LPS.
        window.hueProxy = hueProxy();

        $('#https-proxy').show();

        /* disfunctional probably: */
        ambieye = window.Ambient;
        window.hue = hue(window.jQuery, window.colors);
        sceneCmd = sceneCommander(window.jQuery, window.hue);
        window.hueCommander = hueCommander(window.jQuery, window.hue, colorUtil(), sceneCmd);
        
    } else if (background !== null) {
      window.hue = background.hue;
      sceneCmd = background.sceneCmd;
      ambieye = background.Ambient;
      huevoice = background.voice();
      hueCommander = background.hueCommander;
      window.hueProxy = hueProxy(window.hueCommander);
      tryEnableEye();
      ambieye.onUpdate(updatePreviewColors);
      $('#ambieyepermissions').click(initRequestEye);

    } else {
        log('loading as no chrome, running standalone');
        window.hue = hue(window.jQuery, window.colors);
        sceneCmd = sceneCommander(window.jQuery, window.hue);
        ambieye = window.Ambient;
        window.hueCommander = hueCommander(window.jQuery, window.hue, colorUtil(), sceneCmd);
        window.hueProxy = hueProxy(window.hueCommander);
        ambieye.onUpdate(updatePreviewColors);

        hueProxy.cmd('discover');
    }

    

    log('client: binding to status change.');

    //window.hueCommander.setLogger(log);
    //window.sceneCmd.setLogger(log);

    requestStatus();

    $('.switch').hide();
    $('#controls').hide();
    $('.successsubscribe').hide();

    setInitialHeight();
}
 
var hueStatusRequestInterval = null;

function requestStatus(){
  window.hueProxy.cmd('getStatus', onHueStatusUpdate);
  if (!hueStatusRequestInterval) {
    hueStatusRequestInterval = setInterval(requestStatus, 500); 
  }
}

function onHueStatusUpdate(status) {
  if (status) {
    onStatus(status);
  }
}

function initRequestEye(){
  requestAmbientPermissionOnClient(function(granted) {
    if (granted) {
      tryEnableEye();
    } 
  });
}

function setInitialHeight() {

    if (config.app === 'web') {
      // do nothing
    } else if (config.app === 'app') {
      setHeight(160, 0);
    } else {
      setHeight(150, 0);
    }  
}

function initSlider(){

    //$('#brightness-control').rangepicker().on('slideStop', function(slideEvt){
    $('#brightness-control').slider().on('slideStop', function(slideEvt){
      var val = slideEvt.value;
      log('new brightness: ' + val);
      hueProxy.cmd('command', 'bri:' + val);
    });

}

function enableBrightness(on){
    //$('#toggle-ambientweb').attr('disabled', !on);
    //eyeEnabled(on);
}

function initSubscribe(){
    /* email subscribe form */
    $('.subscribe-form').submit(function(e) {
      var $this = $(this);
      $.ajax({
          type: 'POST', // GET & url for json slightly different
          url: 'https://APIStarter.us9.list-manage.com/subscribe/post-json?u=83c6f205a4379f5136e187d52&amp;id=cad0da3b8a&c=?',
          data: $this.serialize(),
          dataType: 'jsonp',
          contentType: 'application/json; charset=utf-8',
          error: function(){
            errorShake('.subscribe-form');
          },
          success: function(data) {
              if (data.result !== 'success') {
                  errorShake('.subscribe-form');
              } else {
                  // It worked, so hide form and display thank-you message.
                  $('.subscribe-form').removeClass('error'); 
                  $('.subscribe-form').addClass('ok'); 
                  $('.successsubscribe').show(); 
                  $('.subscribe-form').hide();               
              }
          }
      });
      return false;
    });
}

function errorShake(id){
  $(id).addClass('error'); 
  $(id).addClass('shake');
  $(id).bind('oanimationend animationend webkitAnimationEnd', function() { 
     $(id).removeClass('shake');
  });
}
 
/* search */
function initSearch() {
    $('#colorsearch').keyup(function(e){
        if(e.keyCode === 13) {
          skip = 0;
          doSearch('top');
        }
    });

    $('button#search').click(function() {
      skip = 0;
      doSearch('top');
    });

    $('a[href="#search?top"]').click(function(){
      doSearch('top');
    });

    $('a[href$="#search?new"]').click(function(){
      doSearch('new');
    });

    $('a[href$="#search?random"]').click(function(){
      doSearch('random');
    });
}

function doSearch(type){
    $('#search-loading').show();
    if (type === 'random') {
      skip = 0;
    }
    $.getJSON('https://colorlovers.herokuapp.com/api/palettes/' + type + '?jsonCallback=?', {
          keywords: $('#colorsearch').val(),
          resultOffset: skip,
          numResults: 7
    }, function(allPalettes) {
        $('#search-loading').hide();
        clPalettes = allPalettes;
        showPalettes(clPalettes);
        $('a[href$="#search?back"]').off('click');
        $('a[href$="#search?back"]').click(function(){
          skip -= 7;
          doSearch(type, skip);
        });
        $('a[href$="#search?next"]').off('click');
        $('a[href$="#search?next"]').click(function(){
          skip += 7;
          doSearch(type, skip);
        });
    });
}


function executeHrefCommand() {
  /*jshint validthis:true */
  var command = $(this).attr('href');
  window.hueProxy.cmd('command', command);
  return false;
}

function showPalettes(palettes){

  var results = $('.search-results');
  results.empty();
  $.each(palettes, function(k, v) {
    var result = $('<div class="palette"> \
                      <div class="colors"></div> \
                      <div class="palette-name"></div>  \
                    </div>');

    v.colors.forEach(function(co) {
        $('.colors', result).append($('<a></a>')
        .addClass('color')
        .attr('href', '#' + co)
        .css({backgroundColor: '#' + co})
        .click(executeHrefCommand));
    });

    $('.palette-name', result).text(v.title);

    $(result).click(function(){
      scenes.RelaxedRandom.Palette = v.colors.map(function(n) { return '#' + n; });
      hueProxy.cmd('palette', scenes.RelaxedRandom.Palette);
      hueProxy.cmd('command', 'scene:RelaxedRandom');
      activatedScene('RelaxedRandom');
    });

    results.append(result);
  });  
}


function log(text) {
    console.log(text);
}

            

/* bridge ip */
function initManualBridge(){
    $('#manualbridgeip .input').keyup(function(e){
        if(e.keyCode === 13) {
          tryBridge();
        }
    });

    $('#manualbridgeip button').click(tryBridge);

    $('#manualbridgeip').hide();

}



function tryBridge(){
  var ip = $('#manualbridgeip input').val();
  tryIP(ip,function() {
    $('#manualbridgeip')
      .addClass('shake')
      .bind('oanimationend animationend webkitAnimationEnd', function() { 
       $('#manualbridgeip').removeClass('shake');
    });
  });
}

function tryIP(ip, error){
  try{
    $.ajax({
        dataType: 'json',
        url: 'http://' + ip + '/api/123-bogus',
        success: function(){
          hueProxy.cmd('discover', ip);
          //hueProxy.cmd('setIp', ip);
          //hueProxy.cmd('heartbeat');
        },
        error: error,
        timeout: 2000
      });
  } 
  catch(err) {
    // do nothing.
  }
}


function showManualBridge(){
    $('#manualbridgeip').addClass('fade3').show();
    if (config.app === 'web') {
      // do nothing
    } else if (config.app === 'light' || config.app === 'app') {
      setHeight(170, 400);
    } else {
      setHeight(160, 400);
    }
    $('.switch').fadeOut(600, function() {
        $('#connectStatus').fadeIn(600);
    });
    hideControls();

    setTimeout(function(){
      hueProxy.cmd('discover');
    }, 2000);
}

var cachedStatus = null;
function onStatus(status) {
    if (JSON.stringify(status) !== JSON.stringify(cachedStatus) ) {
        cachedStatus = status;
    } else {
      // same status, ignore onStatus call.
      return;
    }
    console.log('client: status changed - ' + status.status);
    
    if (status.status === 'BridgeNotFound') {
      onBridgeNotFound();
      
      return;
    } 
    if (manualIpInputAnimation !== null) {
      clearInterval(manualIpInputAnimation);
      manualIpInputAnimation = null;
    }

    if (status.status === 'OK') {
        onBridgeConnected(status);
    } else if (status.status === 'init' || status.status === 'Authenticating') {
      onBridgeInit(status);
    } else {
      onBridgeDisconnected(status);
    }
}

function stopHeartbeat(){
  if (heartbeat !== null) {
    log('Clearing heartbeat');
    clearInterval(heartbeat);
  }
}

function startHeartbeat() {
  log('Starting heartbeat');
  heartbeat = setInterval(hueHeartbeat, heartbeatInterval);
}

function hueHeartbeat() {
  hueProxy.cmd('heartbeat');
  //requestSettings();
  //hueProxy.cmd('getState', null, fillSettings); // will get previous state
}

function onBridgeNotFound(status) {
  $('#connectStatus').html('<div class="intro-text"><a class="amazonlink" href="http://bit.ly/lightswitchhue" target="_blank">Philips Hue bridge</a> not found.</div>');
  manualIpInputAnimation = setTimeout(showManualBridge, 2000);
  stopHeartbeat();
}

function onBridgeConnected(status){

  $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
  $('#manualbridgeip').hide();
  $('#https-proxy').hide();

  $('#lightswitch').prop('disabled', false);

  // time to screen
  var hubEndTime = new Date().getTime();
  var timeSpent = hubEndTime - hubStartTime;

  log('Tracking event OK');
  ga('send', 'timing', 'status-ok', 'Ping hub', timeSpent, 'Philips Hue Hub');

  $('#connectStatus').fadeOut(600, onSuccessfulInit);
  $('#lightswitch').prop('checked', status.data);

  stopHeartbeat();
  startHeartbeat();
}

function onBridgeInit(status) {
  $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
}

function onBridgeDisconnected(status){
  stopHeartbeat();
        
  log('Hiding elements, bridge not found');
  $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
  $('#lightswitch').prop('disabled', true);
  $('#lightswitch').prop('checked', false);

  //$('body').removeClass('on');
  $('#controls').fadeOut(600);
  $('.tab-content').hide();
  setInitialHeight();

  $('.switch').fadeOut(600, function() {
      $('#connectStatus').fadeIn(600);
  });
}

function onSuccessfulInit(){
  if (config.tabs === true) {
    if (config.app === 'web') {
      // do nothing
    } if (config.app === 'app') {
      setHeight(445, 400);
    } else {
      setHeight(435, 400);
    }
  }
  $('.switch').fadeIn(600, showControls);
    
  //$('body').addClass('on');
  requestSettings();

  // successfully started, unless All group was not set correctly, then no actors are set.
  //var autostartScene = $.QueryString.autostartscene;

  var lochash    = location.hash.substr(1),
      autostartScene = lochash.substr(lochash.indexOf('autostartscene='))
                    .split('&')[0]
                    .split('=')[1];
  if (autostartScene && scenes[autostartScene] !== undefined) {
    $('.nav-tabs a[href="#moods"]').tab('show');
    activateSceneByKey(autostartScene);
  }
}

function setHeight(height, transitionTime) {
  //height = $('wrapper').height();
  $('html').animate({height: height}, transitionTime);
  $('body').animate({height: height}, transitionTime);
  if (amExtension() || chrome.app.window !== undefined) {
    setTimeout(function(){
      if (chrome.app.window !== undefined) {
        var wind = chrome.app.window.current();
        wind.innerBounds.height = height;
        wind.innerBounds.width = 320;
      }
    }, 500); // wait until animations are done.
  }
}

function updateActorUI(actorId) {
  
  $('button').removeClass('active');
  $('button[id=' + actorId + ']').addClass('active');

  hueProxy.cmd('getActorStates', updateActorControls);
}

function updateActorControls(actors) {
  var on = false;
  var bri = 0;
  
  $.each(actors, function(key, lamp){
    on = on || (lamp && lamp.state && lamp.state.on);
    if (lamp && lamp.state && (lamp.state.bri > bri)) {
      bri = lamp.state.bri;
    }
  });
 
  $('#lightswitch').prop('checked', on);
  enableBrightness(on);
  $('#brightness-control').val(bri);
  $('#brightness-control').change(); // update ui
}

function initGroupCreation() {
    $('#create-group').hide();
    $('#make-group').click(function(){
      $('#create-group').slideToggle();
    });
    $('#add-group').click(function(){
      var name = $('#group-name input').val();
      if (name === '') {
        errorShake('#group-name');
        return;
      }
      $('#group-name').removeClass('error');
      var lampIds = $('#group-add-lamps .lamp-select.active').map(function() {
            return this.id;
        }).get();
      if (lampIds.length === 0) {
        errorShake('#group-add-lamps');
        return;
      }
      $('#group-add-lamps').removeClass('error');
      // add group
      $('#group-name input').val('');
      hueProxy.cmd('createGroup', { name: name, lampIds: lampIds });
      // reset
      delayedRefresh();
    });
}

function createActorBtn(key,name){
  var btn = $('<button type="button" class="actor"></button>').text(name).attr('id', key);
  return btn;
}

function actorClick(event){
  var key = event.target.id;
  $('button').removeClass('active');
  $('button[id=' + key + ']').addClass('active');
  setActor(key);
  return false;
}

function flashLamp(event){
  var key = event.target.id;
  hueProxy.cmd('flash', key);
  return false;
}

function setActor(key) {
  hueProxy.cmd('setActor', key, updateActorUI); 
}

function delayedRefresh(){
  setTimeout(function(){
    hueProxy.cmd('refresh');
    setTimeout(requestSettings, 2000);
  }, 2000);
}

function removeGroupClick(){
  /*jshint validthis:true */
  var key = this.id;
  hueProxy.cmd('removeGroup', key);
  delayedRefresh();
  
  $(this).hide('slow');
}

function activateSceneClick(event){
  var key = event.target.id;
  activateSceneByKey(key);
}

function activateSceneByKey(key){
  hueProxy.cmd('command', 'scene:' + key, activatedScene);
}

function toggleActiveClick(){
  $(event.target).toggleClass('active');
}

function requestSettings(){
  hueProxy.cmd('getState', null, fillSettings); // will get previous state
}

function fillSettings(state) {
    //var state =window.hueProxy.getState();
    // safari ios compatibility issues:
    var i = 0,
        key = null, 
        value = null,
        btn = null, 
        selector = null;

    if (!state) {
      //setTimeout(requestSettings, 1000); // reset UI in a bit.
      return;
    }

    if (state.lights !== null && state.lights !== undefined) {
        trackState('config', state);
        /*
        trackEvent('settings', 'init', 'version', state.config.swversion);
        trackEvent('settings', 'init', 'ip', state.config.ipaddress);
        trackEvent('settings', 'init', 'portal', state.config.portalconnection);
        trackEvent('settings', 'init', 'zigbeechannel', state.config.zigbeechannel);
        trackEvent('settings', 'init', 'lightcount', state.lights.length);
        trackEvent('settings', 'init', 'groupcount', state.groups.length);
        trackEvent('settings', 'init', 'scenecount', state.scenes.length);
        */

        $('#lamps').empty();
        $('#group-add-lamps').empty();
        $('#groups').empty();
        $('#scenes').empty();
        $('#group-remove').empty();

        //$.each(state.lights, function(key, value) {
        for(i in state.lights) {
            key = i;
            value = state.lights[i];
          
            if (value.state === undefined) {
              continue;
            }

            //log('Lights: ' + key  + ', name: ' + 
            //  value.name + ', reachable: ' + 
            //  value.state.reachable + 
            //  ', on: ' + value.state.on);
            btn = createActorBtn(key, value.name);
            btn.click(actorClick);
            btn.click(flashLamp);
            $('#lamps').append(btn);
            
            selector = createActorBtn(key, value.name);
            selector.addClass('lamp-select');
            selector.click(flashLamp);
            selector.click(toggleActiveClick);
            $('#group-add-lamps').append(selector);
        }


        var allOn = false;
        var lightsReachable = [];

        for(i in state.lights) {
            key = i;
            value = state.lights[i];
            if (value.state === undefined) {
              continue;
            }
            if (value.state.reachable) {
                lightsReachable.push(value);
            }
            allOn = allOn || value.state.reachable || value.state.on;
        }
        
        if (typeof(chrome) !== 'undefined'  && chrome.browserAction !== undefined) {
          var path = 'images/lightswitch.logo.on.128.png';
            if (allOn)  {
                if (config.app === 'eye') {
                  path ='images/ambieye-ico-on.png';
                } else {
                  path ='images/lightswitch.logo.on.128.png';
                }
            } else {
                if (config.app === 'eye') {
                  path ='images/ambieye-ico.png';
                } else {
                  path ='images/lightswitch.logo.128.png';
                }
            }
            chrome.browserAction.setIcon({path:path});
        }

        for(i in state.groups) {
          key = i;
          value = state.groups[i];
          //log('Groups: ' + key  + ', name: ' + value.name + ', # lights: ' + value.lights.length);
          displayGroup(key, value.name, key !== '0');
        }

        for(i in state.scenes) {
          key = i;
          value = state.scenes[i];
        
            //log('Scenes: ' + key  + ', name: ' + value.name + ', # lights: ' + value.lights.length);

            if (value.name.endsWith(' on 0'))
            {
              var normalName = value.name.substring(0,value.name.length - ' on 0'.length);
              if ($('#scenes button:contains("' + normalName + '")').length === 0) {
                btn = $('<button type="button" class="savedscene"></button>').text(normalName).attr('id', key);
                btn.click(activateSceneClick);
                $('#scenes').append(btn);
              }
            } 
        }
        log('Config: ' + state.config.name +
            ', version: ' + state.config.swversion +
            ', ip: ' + state.config.ipaddress +
            ', portal: ' + state.config.portalconnection +
            ', zigbeechannel:' + state.config.zigbeechannel);


        hueProxy.cmd('setActor', state.actorId || 'group-0', updateActorUI); 
    }
}

function displayGroup(key, name, removable) {
  var btn = createActorBtn('group-' + key, name);
  btn.click(actorClick);
  $('#groups').append(btn);

  if (removable) {
    var selector = createActorBtn(key, name);
    selector.click(removeGroupClick);
    selector.append('&nbsp;');
    selector.append($('<li class="fa fa-remove"></li>'));
    $('#group-remove').append(selector);
  }
}

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function hideControls(){
  $('.tab-content').hide(0);
  $('#controls').fadeOut(600, showTabContent);
}

function showControls(){
    $('#connectStatus').hide(0);
    $('.tab-content').hide(0);
    if (config.tabs === true) {
      $('#controls').fadeIn(600, showTabContent);
    }
}
function showTabContent() {
    $('.tab-content').fadeIn(600, initVoice);
}

function initLightswitch() {
    $('#lightswitch').click(function(e){
        var turnOn = $('#lightswitch').is(':checked');
        enableBrightness(turnOn);
        window.hueProxy.cmd('command', turnOn ? 'on' : 'off');
        trackEvent(e.target.id, 'clicked');
    });
}

function initPalettes() {
    $('#solid-palette div ').each(function(name, colorsElement) {
      colorsElement = $(colorsElement);
      var paletteName = colorsElement.data('palette');
      if (Palettes[paletteName] !== null) {
        colorsElement.addClass('palette');
        colorsElement.append($('<div class="colors"> \
                        </div> \
                        <div class="colors-name"></div>  \
                    </div>'));
        $('.colors-name', colorsElement).text(paletteName);
        Palettes[paletteName].forEach(function(co) {
          var ec = $('<a href="" class="color"></a>');

          var color = typeof co === 'string' ? co : co.color;

          $(ec).attr('href', color);
          $(ec).attr('title', typeof co.name === 'undefined' ? color : co.name);
          $(ec).css({backgroundColor: color});
          $(ec).click(executeHrefCommand);

          $('.colors', colorsElement).append(ec);
        });
      }
    });

    $('.scene').each(function(index, sceneElement) {
      sceneElement = $(sceneElement);
      var sceneName = sceneElement.data('scene');
      if (scenes[sceneName] !== undefined) {

        var colorsElement = $('<div class="colors"></div>');
        var colors = scenes[sceneName].Palette;
        colors.forEach(function(co) {
          var ec = $('<div class="color"></div>');
          var color = typeof co === 'string' ? co : co.color;
          $(ec).css({backgroundColor: color});
          $(ec).attr('title', typeof co.name === 'undefined' ? color : co.name);
          colorsElement.append(ec);
        });

        var e = $('<div class="scene-name"></div>');
        e.text(sceneName);

        sceneElement.append(colorsElement);    
        sceneElement.append(e);
      } 
    });

    $('.scene').click(function(element){
      var key = $(this).data('scene');
      if (!$(this).hasClass('active')) {
        hueProxy.cmd('command', 'scene:' + key, activatedScene);
      } else {
        // deactivate all
        hueProxy.cmd('command', 'scene:stop', activatedScene);
      }
      return false;
    });


    $('.command').click(executeHrefCommand); // buttons

}



// color wheel:

// create canvas and context objects
function placeImage(picker, imgsrc){
  var canvas = document.getElementById(picker);
  var ctx = canvas.getContext('2d');

  // drawing active image
  var image = new Image();
  // select desired colorwheel
  image.src=imgsrc;
  image.onload = function () {
	ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
  };
}


/* gravity */
function round(n){
  var num = n.toFixed(2);
  if (n >= 0) {
    num = '+' + num;
  } 
  return num;
}

function initGravity() {
    $('.north-enabled').hide();
    $('.ground-enabled').hide();

    $('#toggle-gravity').click(function(e){
      var active = $('#toggle-gravity').is(':checked');
      gravity.active = active;
      $('.north-enabled').toggle(active);
      if (!active || gravity.timer !== null) {
        clearInterval(gravity.timer);
        gravity.timer = null;
      } else {    
        //gravity.timer = setInterval(gravityUpdate, 300);
        gravity.timer = setTimeout(gravityUpdate, 300);
      }
    });
    $('#toggle-north').click(function(e){
      var active = $('#toggle-north').is(':checked');
      gravity.northhue = active;
    });


    $(window).on( 'orientationchange', function(e){
      $('#orien').text(window.orientation);
      if (window.orientation === '') {
        $('#orien').text('0');
      }
      log('orientation: ' + window.orientation);
    }); 
}

function enableGravity(on) {
  if (on) {
    window.ondeviceorientation = onDeviceOrientation;
    window.ondevicemotion = onDeviceMotion;
  } else {
    window.ondeviceorientation = null;
    window.ondevicemotion = null;
  }
}

function onDeviceOrientation(e) {
  if (e.beta === null) {
    $('.north-enabled').hide();
    return; // windows has beta null.
  }
  $('#orienA').text(round(e.alpha || 0));
  $('#orienB').text(round(e.beta));
  $('#orienG').text(round(e.gamma));

  gravity.north = e.webkitCompassHeading || e.alpha || 0;
  /*if (e.webkitCompassHeading !== undefined) {
    //var n = e.webkitCompassHeading - 180;
    //if (n < 0) {
    //  n += 360;
    //}
    gravity.north = e.webkitCompassHeading; 
  } else {
    gravity.north = e.alpha || 0;
  }*/
  
  $('#north').text(gravity.north);
  gravity.a = e.alpha;
  gravity.b = e.beta;
  gravity.g = e.gamma;
  
}

function onDeviceMotion (event){
  if (event.accelerationIncludingGravity.x === null) {
    $('.ground-enabled').hide();
    return; // windows has beta null.
  } else {
    $('.ground-enabled').show();
  }

  var accelerationX = event.accelerationIncludingGravity.x;
  var accelerationY = event.accelerationIncludingGravity.y;
  var accelerationZ = event.accelerationIncludingGravity.z;
  var deg = window.orientation;
  if (deg === 90) {
    // x is -9
    var y = accelerationY;
    accelerationY = accelerationX;
    accelerationX = -y;
  } else if (deg === -90) {
    // x is +9
    var te = accelerationY;
    accelerationY = -accelerationX;
    accelerationX = te;
  }
  // y is usually -9
  $('#varx').text(round(accelerationX));
  $('#vary').text(round(accelerationY));
  $('#varz').text(round(accelerationZ));

  gravity.x = accelerationX;
  gravity.y = accelerationY;
  gravity.z = accelerationZ;

}

function gravityUpdate(){
  if (gravity.active) {
    var yCoef = null;
    var xCoef = null;
    if (gravity.a === 0) {
      // mac books?
      yCoef = Math.abs(gravity.y);
    } else {
      // iphones
      yCoef = (10 - Math.abs(gravity.y));
    }

    xCoef = gravity.x;

    if (!gravity.northhue){
      gravity.sat = Math.round((yCoef / 10) * 255);
      gravity.hue += Math.round((xCoef / 10) * 65535 * 0.05);
      gravity.bri = 255; // max 
    } else {
      gravity.sat = Math.round((yCoef / 10) * 255);
      gravity.hue = Math.round((gravity.north / 360) * 65535);
      gravity.bri = 255;//Math.round((xCoef / 10) * 255);
    }  
    while (gravity.hue < 0) {
      gravity.hue += 65535;
    }
    while (65535 < gravity.hue) {
      gravity.hue -= 65535;
    }


    var json = {
      hue: gravity.hue,
      sat:gravity.sat,
      bri: gravity.bri
    };

    $('#hue').text(round(gravity.hue));
    $('#sat').text(round(gravity.sat));
    $('#bri').text(round(gravity.bri));

    var cmd = JSON.stringify(json);
    log('Setting gravity:  ' + cmd);
    hueProxy.cmd('command', cmd);

    var color = 'hsl('+
      Math.round(360 * (json.hue / 65535)) +', '+
      Math.round(100 * json.sat / 255)+'%, '+
      Math.round(100 - (50 * json.bri / 255))+'%)';
    $('#rgbVal').css({backgroundColor: color});

    activatedScene('stop');

    setTimeout(gravityUpdate, 500);
  }
}

function initPickers() {

    placeImage('picker', 'images/colorbox-100.png');
    placeImage('picker2', 'images/colorwheel-100.png');
    //placeImage('#picker', 'img/colorwhell2.png');

    //$('#picker').click(function(e) { // click event handler
    $('#picker, #picker2, #picker3').on({
      'touchmove': throttleCmd,
      'mousemove': touchMove,
      'mouseover': mouseStart,
      'touchstart': touchStart,
      'mouseout': touchOut
      //'touchout': touchOut
    });
    $('#picker, #picker2, #picker3').click(throttleCmd);

    circle.hide();
}

var currentHex = null;
function throttleCmd(e){ 
    currentHex = getColor(e);
    if (delayedSend !== null) {
      clearTimeout(delayedSend);
    }
    if (hideCircleTimer !== null) {
      clearTimeout(hideCircleTimer); 
    }
    delayedSend = setTimeout(onDelaySend, 500);
}

function onDelaySend(){
  hueProxy.cmd('command', currentHex);
  activatedScene('stop');
  hideCircleDelayed();
}

// hide circle delayed
function hideCircleDelayed() {  
  if (hideCircleTimer !== null) {
    clearTimeout(hideCircleTimer); 
  }
  hideCircleTimer = setTimeout(hideCircle, 1000);
}

function hideCircle() {
  circle.stop(true).fadeOut();
}

function touchOut(e){
  getColor(e);
  //hideCircleDelayed();
  hideCircleTimer = null;
  hideCircle();
  console.log('touchout');
}
function touchMove(e){
  getColor(e);
}

function mouseStart(e){
  if (!circle.is(':visible') || circle.is(':animated')) {
    circle.stop(true).show().fadeIn();
  }
}
function touchStart(e){
  mouseStart(e);
  throttleCmd(e);
}

function getColor(e){

    e.preventDefault();
    // get coordinates of current position
    var canvasOffset = $(e.target).offset();

    if (e.pageX === undefined) { 
      e = e.originalEvent; 
    }

    var touches = e.changedTouches;
    if(touches === undefined) {
      touches = e.targetTouches;
    }

    if (e.pageX === undefined) { 
      e = e.originalEvent; 
    }
    log('touch event e.pageX:' + e.pageX);
    log('touch event touches:' + touches);

    var x = e.pageX;
    var y = e.pageY;

    if (touches !== undefined && touches.length > 0) {
      x = touches[0].pageX;
      y = touches[0].pageY;
      log('touches[0]:' + touches[0]);
    }


    var canvasX = Math.floor(x - canvasOffset.left);
    var canvasY = Math.floor(y - canvasOffset.top);
    var pixel = null;
    
    var ctx = document.getElementById(e.target.id).getContext('2d');
    var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
    pixel = imageData.data;

    // show picker circle
    
    // hide on white
    if (pixel[0] === 0 && pixel[1] === 0 && pixel[2] === 0) {
      //circle.fadeOut();
      //hideCircleDelayed();
      return;
    }
    var pixelColor = 'rgb('+pixel[0]+', '+pixel[1]+', '+pixel[2]+')';
    //$('.preview').css('backgroundColor', pixelColor);

    circle.css({ 
          backgroundColor: pixelColor, 
          //top: e.pageY - 50,
          //left: e.pageX -10
          top: y - 50,
          left: x -10
        });

    // update controls
    //$('#rVal').val(pixel[0]);
    //$('#gVal').val(pixel[1]);
    //$('#bVal').val(pixel[2]);
    //$('#rgbVal').text(pixel[0]+','+pixel[1]+','+pixel[2]);

    var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
    var hex = '#' + ('0000' + dColor.toString(16)).substr(-6);
    //$('#hexVal').val();
    $('#rgbVal').css({backgroundColor: hex});
    return hex;
}

/* ambient eye tab on show */

function initAmbientEye() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
      
      circle.hide();
      log('in tab: ' + e.target.hash);
      
      trackEvent('click', 'tab', e.target.hash);

    	if (e.target.hash === '#eye')
    	{
        tryEnableEye();
    	} else {
    		ambieye.updateImage = false;
    	}

      if (e.target.hash === '#search' && clPalettes === null)
      {
        doSearch('new');
      }

      enableGravity(e.target.hash === '#colors');

    });

    $('#toggle-ambientweb').click(toggleAmbience);
    $('#toggle-eye-brightness').click(toggleEyeBrightness);
    $('#toggle-eye-primary').click(toggleEyePrimary);
    $('#eye-mode-group button').click(toggleEyeMode);

    $('#eye-mode-group button').removeClass('active');
    $('#eye-mode-group #' + ambieye.mode).addClass('active');
}


function toggleAmbience(e) {
  var active = $('#toggle-ambientweb').is(':checked');
  ambieye.on = active;
  if (active) {
    hueProxy.cmd('command', 'scene:Ambient', activatedScene);
  } else {
    hueProxy.cmd('command', 'scene:none', activatedScene);
  }
}

function toggleEyeBrightness(e) {
  var active = $('#toggle-eye-brightness').is(':checked');
  ambieye.changeBrightness = active;
}

function toggleEyePrimary(e) {
  var active = $('#toggle-eye-primary').is(':checked');
  ambieye.enablePrimary = active;
}

function toggleEyeMode(e) {
  ambieye.mode = e.currentTarget.id;
  $('#eye-mode-group button').removeClass('active');
  $('#eye-mode-group #' + ambieye.mode).addClass('active');
}

function tryEnableEye(){
  // check permissions for access to <all_tabs> 
  if (amExtension()) {
    log('loading as chrome extention popup');
    hasAllUrlAccess(function(granted) {
      ambieye.updateImage = granted;
      $('#ambieyepermissions').toggle(!granted);
      $('#toggle-ambientweb').prop('checked', ambieye.on);
      eyeEnabled(granted);
      var alreadyOn = ambieye.on;
      if (!alreadyOn) {
        alreadyOn = ambieye.run();
      }
    });
  } else {
    $('#' + ambieye.mode).button('toggle');
    eyeEnabled(false);
  }
}

function eyeEnabled(granted){
  $('#toggle-ambientweb').attr('disabled', !granted);
  $('#toggle-eye-brightness').attr('disabled', !granted);
  $('#toggle-eye-primary').attr('disabled', !granted);
  $('#eye-mode-group button').removeClass('active');
  $('#eye-mode-group #' + ambieye.mode).addClass('active');
  $('#toggle-eye-brightness').prop('checked', ambieye.changeBrightness);
  $('#toggle-eye-primary').prop('checked', ambieye.enablePrimary);
}

function hasAllUrlAccess(success, mayRequest){
  chrome.permissions.contains({
        permissions: ['tabs'],
        origins: ['<all_urls>']
      }, function(granted) {
        success(granted);
      });
}

function requestAmbientPermissionOnClient(callback){
    // Permissions must be requested from inside a user gesture, like a button's click handler.
    chrome.permissions.request({
      permissions: ['tabs'],
      origins: ['<all_urls>']
    }, function(granted){
      if (granted) {
        callback(granted);
      } else {
        callback(granted);
      }

    });
}

function updatePreviewColors(colors, image){
  $('.preview-box').each(function(index, value) {
    $(value).css('background-color', colors[index].color);
  });

  $('#ambientpreview').attr('src', image);
}

function initCloseMinimize() {
    $('#close-app').click(function(){
      window.close();
    });

    $('#minimize-app').click(function(){
      chrome.app.window.current().minimize();
    });
}


function initVoice() {
  if (huevoice === null) {
    huevoice = voice(hue);
  }
  if (huevoice.notAvailable() || config.voice === false) {
    $('.voice-control').hide();
  } else {
    $('.voice-control').fadeIn();
  }

  $('#voice-mic').click(toggleVoice);
}


function toggleVoiceOnWebpage() {
  var mic = $('#voice-mic');
  mic.toggleClass('active');
  var parser = voiceCommander(voiceCmdFunc);
  if (mic.hasClass('active')) {
    if (huevoice.recognize(parser.react, voiceError, voiceEnd)) {
      huevoice.speak('Enabling voice commands');
      huevoice.start();
    }
  } else {
    huevoice.speak('Voice commands disabled');
    huevoice.stop();
  }
}

function voiceError(err){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.error(err);
  //sendToMothership({voiceErr: err});
}

function voiceEnd(){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.log('voice end');
  //sendToMothership({voiceEnd: true});
}

function toggleVoice() {
  if (amExtension()) {
      //launch window if not launched
    chrome.tabs.create({
      url: 'https://ambieye.com/voice.html'
    }, function (tab){
      // tab id
    });
    return false;
  } else {
    // from page, same page.
    toggleVoiceOnWebpage();
  }
  return false;
}
    
function voiceCmdFunc(text, match, action, actor) {
  try {
    $('#voice-feedback').html('');
    $('#voice-feedback').html('<i class="voice-fade ">' + text + '</i>');
    //voiceFeedback(text,match, action, actor);

    if (actor !== undefined) {
      var actorId = findActors(actor);
      if(actorId !== null) {
        setActor('group-' + actorId);
      } else {
        huevoice.speak('Cannot find the ' + actor + ' lights');
        return;
      } 
    }
    // canExecute(action)
    if ($.inArray(action, ['on','off','dim','dim down','up','brighten','lighten','down','light up']) >= 0 || action.match('^scene:')) {
      window.hueProxy.cmd('command', action);
    }
  } catch (err){
    console.log(err);
    // nothing
  }
}


