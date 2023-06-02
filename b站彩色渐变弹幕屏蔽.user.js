// ==UserScript==
// @name         屏蔽B站彩色渐变弹幕
// @namespace    https://github.com/hny3494317690/bili-vip-danmu-remove
// @version      0.3
// @description  b站新出的彩色渐变弹幕太恶心了，用这个来屏蔽吧
// @author       hny3494317690
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
  setInterval(()=>{for(const dom of document.querySelectorAll('.bili-dm-vip')) {
  dom.style.visibility='hidden'
}}, 100)

})();
