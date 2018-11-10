// ==UserScript==
// @name         COM3D2 Shop Boughtlist Downloader
// @namespace    http://mizle.net/
// @version      0.1
// @description  COM3D2 Shopの購入済みファイルをブラウザからダウンロード出来るようにします。
// @author       eai04191
// @license      MIT
// @supportURL   https://github.com/eai04191/CM3D2-Shop-Boughtlist-Downloader/issues
// @match        https://com3d2-shop.s-court.me/boughtlist.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll("a[onclick^='dl']").forEach(function(link){
        let value = link.attributes.onclick.value;
        let params = value.replace(/[dl()']/g,"").split(",");
        let newUrl = "http://cm3d2-shop-dl2.s-court.me/api/download.php"+
            "?itemid=" + params[0] +
            "&ott=" + params[1] +
            "&itoken=" + params[2];
        link.setAttribute("href", newUrl);
    });
})();
