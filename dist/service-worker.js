if(!self.define){let e,s={};const o=(o,n)=>(o=new URL(o+".js",n).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const l=e=>o(e,i),c={module:{uri:i},exports:d,require:l};s[i]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"od"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/od/css/app.7c84dd00.css",revision:null},{url:"/od/css/chunk-vendors.85a1681b.css",revision:null},{url:"/od/index.html",revision:"dcebb78879dc70c6d819a75a8666d695"},{url:"/od/js/about.b3b1e1fd.js",revision:null},{url:"/od/js/app.d8de29e1.js",revision:null},{url:"/od/js/chunk-vendors.ea286009.js",revision:null},{url:"/od/js/demand.cf32bd50.js",revision:null},{url:"/od/js/offer.6bb0126b.js",revision:null},{url:"/od/manifest.json",revision:"14802c5f08dcc15b999e9ca6b850d213"},{url:"/od/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
