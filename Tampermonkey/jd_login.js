// ==UserScript==
// @name         My-JD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://plogin.m.jd.com/login/login*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jd.coms
// ==/UserScript==

(function()
 {
    'use strict';
    var u = getQueryString('u');
    var p = getQueryString('p');
    console.log(u);
    console.log(p);
    if(!u || !p)
    {
       return;
    }

    setTimeout(function () {
        document.querySelector('p.quick-btn').firstElementChild.click();//账号密码登录
        document.querySelector('input.policy_tip-checkbox').click();//协议
        WriteInput();
    }, 500);

    function WriteInput(){
        setTimeout(function () {
            // 触发input的输入事件，以便对应的事件处理程序可以监听到输入值的变化
            var event = new Event("input", {
                bubbles: true,
                cancelable: true,
            });

            var userName = document.querySelector('#username');
            userName.value = u;
            userName.dispatchEvent(event);

            var pwd = document.querySelector('#pwd');
            pwd.value = p;
            pwd.dispatchEvent(event);

            ClickBtn();
        }, 500);
    }

    function ClickBtn(){
        setTimeout(function () {
            document.querySelector('a.btn.J_ping.active').click();
        }, 300);
    }

    function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
})();
