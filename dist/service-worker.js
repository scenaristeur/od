if(!self.define){let e,s={};const o=(o,n)=>(o=new URL(o+".js",n).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const l=e=>o(e,i),t={module:{uri:i},exports:c,require:l};s[i]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"od"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/od/css/app.cf71b751.css",revision:null},{url:"/od/css/chunk-vendors.85a1681b.css",revision:null},{url:"/od/index.html",revision:"0c8a4a5fe3e37a0ca93db6b3acca05ca"},{url:"/od/js/about.34f69e93.js",revision:null},{url:"/od/js/app.d4c80b7e.js",revision:null},{url:"/od/js/chunk-vendors.fe25034e.js",revision:null},{url:"/od/manifest.json",revision:"14802c5f08dcc15b999e9ca6b850d213"},{url:"/od/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
