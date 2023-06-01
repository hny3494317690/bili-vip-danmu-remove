// ==UserScript==
// @name         b站彩色渐变弹幕屏蔽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  b站新出的彩色渐变弹幕太恶心了，用这个来屏蔽吧
// @author       You
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
  setInterval(()=>{for(const dom of document.querySelectorAll('.bili-dm-vip')) {
  dom.style.background = ''
}}, 1000)

})();