parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelectorAll(".slider__button"),t=document.querySelectorAll(".slider__text");e.forEach(function(e,s){e.addEventListener("click",function(){var i=document.querySelector(".slider__text--is-active"),l=document.querySelector(".slider__button--is-active");i.classList.remove("slider__text--is-active"),t[s].classList.add("slider__text--is-active"),l.classList.remove("slider__button--is-active"),e.classList.add("slider__button--is-active")})});var s=document.querySelectorAll(".materials__tablet-button");s.forEach(function(e,s){e.addEventListener("click",function(){var i=document.querySelector(".materials__tablet-button--active"),l=document.querySelector(".slider__text--is-active"),o=document.querySelector(".materials__slider");0===s?(o.style.bottom="7%",o.style.left="55%"):1===s?(o.style.bottom="25%",o.style.left="42%"):2===s?(o.style.bottom="10%",o.style.left="28%"):3===s?(o.style.bottom="40%",o.style.left="20%"):4===s&&(o.style.bottom="15%",o.style.left="5%"),l.classList.remove("slider__text--is-active"),t[s].classList.add("slider__text--is-active"),i.classList.remove("materials__tablet-button--active"),i.innerHTML="+",e.innerHTML="-",e.classList.add("materials__tablet-button--active")})});var i=document.querySelector(".message-us__form"),l=document.querySelectorAll(".message-us__form-input");i.addEventListener("submit",function(e){e.preventDefault(),l.forEach(function(e){e.value=""})}),window.addEventListener("hashchange",function(){"#aside"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fa45de7e.js.map