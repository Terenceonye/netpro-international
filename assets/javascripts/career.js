
// fetch new version of css
document.addEventListener('DOMContentLoaded', function () {
    var cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        var newHref = href.split('?')[0] + '?v=' + new Date().getTime();
        link.setAttribute('href', newHref);
    });
});



(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(i,e,t){t(13),t(23),i.exports=t(149)},149:function(i,e,t){"use strict";t.r(e);var s=t(0),n=t(2),l=t.n(n);s.a.fn.fileUpload=l()(class{constructor(i,e){this.options=s.a.extend({},this.constructor.Defaults,e);this.$container=i,this.$input=i.find('[type="file"]'),this.$fileTitle=i.find(".js-file-name"),this.$fileLine=i.find(".js-file-file"),this.$buttonUpload=i.find(".js-file-input"),this.$remove=i.find(".js-file-remove"),this.$placeInput=i.find(".js-place-input"),i.on("input change",this.updateFile.bind(this)),i.on("click returnkey",".js-file-remove",this.reset.bind(this))}fileName(i){return i.split("\\").pop()}updateFile(){let i=this.fileName(this.$input.val());i&&(this.$fileTitle.text(i),this.$fileLine.removeClass("is-hidden"),this.$container.addClass("is-active"))}reset(){this.$fileLine.addClass("is-hidden"),this.$fileTitle.text(""),this.$container.removeClass("is-active"),this.$input.val("")}})}},[[148,0]]]);