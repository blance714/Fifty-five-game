!function(){"use strict";var t={4531:function(t,n,r){var e=r(8246),o=r(7483);function a(t,n){this.step=t||0,this.stat=n||Array.from({length:16},(function(t,n){return n})),this.calc=function(){return function(t){for(var n=0,r=0;r<4;++r)for(var e=0;e<4;++e)t[4*r+e]!==4*r+e&&++n;return n}(this.stat)}}var s=Array.from({length:16},(function(t,n){return n+1}));s[15]=0;var i=new a,u=new o.MinHeap((function(t,n){return t.step+t.calc()-n.step-n.calc()})),f=new e.Z;function c(t,n,r){var e=Array.from(t);return e[n]^=e[r],e[r]^=e[n],e[n]^=e[r],e}var p=0;onmessage=function(t){if("start"===t.data.type)u.push(new a(0,t.data.orig)),s=t.data.dest,!1,function(){for(console.log("calculate");0!==u.size&&(e=s,o=u.peek().stat,e.toString()!==o.toString());)if(i=u.pop(),f.find(i.stat.toString()).equals(f.end())){f.insert(i.stat.toString()),++p,console.log(i.step,i.calc(),i.stat.toString()),p%23===0&&postMessage({type:"stat",stat:i.stat,step:p});for(var t=0;t<16&&0!==i.stat[t];++t);var n=Math.floor(t/4),r=t%4;0!==n&&u.push(new a(i.step+1,c(i.stat,t,t-4))),3!==n&&u.push(new a(i.step+1,c(i.stat,t,t+4))),0!==r&&u.push(new a(i.step+1,c(i.stat,t,t-1))),3!==r&&u.push(new a(i.step+1,c(i.stat,t,t+1)))}var e,o;!0,postMessage({type:"stop",time:(new Date).getTime()}),postMessage({type:"stat",stat:s,step:p})}()}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,r.x=function(){var t=r.O(void 0,[139],(function(){return r(4531)}));return t=r.O(t)},function(){var t=[];r.O=function(n,e,o,a){if(!e){var s=1/0;for(c=0;c<t.length;c++){e=t[c][0],o=t[c][1],a=t[c][2];for(var i=!0,u=0;u<e.length;u++)(!1&a||s>=a)&&Object.keys(r.O).every((function(t){return r.O[t](e[u])}))?e.splice(u--,1):(i=!1,a<s&&(s=a));if(i){t.splice(c--,1);var f=o();void 0!==f&&(n=f)}}return n}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[e,o,a]}}(),r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(n,e){return r.f[e](t,n),n}),[]))},r.u=function(t){return"static/js/"+t+".37dfeffe.chunk.js"},r.miniCssF=function(t){},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/Fifty-five-game/",function(){var t={531:1};r.f.i=function(n,e){t[n]||importScripts(r.p+r.u(n))};var n=self.webpackChunkaiwork=self.webpackChunkaiwork||[],e=n.push.bind(n);n.push=function(n){var o=n[0],a=n[1],s=n[2];for(var i in a)r.o(a,i)&&(r.m[i]=a[i]);for(s&&s(r);o.length;)t[o.pop()]=1;e(n)}}(),function(){var t=r.x;r.x=function(){return r.e(139).then(t)}}();r.x()}();
//# sourceMappingURL=531.b9af7109.chunk.js.map