// fetch new version of css
document.addEventListener('DOMContentLoaded', function () {
    var cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        var newHref = href.split('?')[0] + '?v=' + new Date().getTime();
        link.setAttribute('href', newHref);
    });
});



(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(t,e,i){i(13),i(31),t.exports=i(144)},144:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i(2),s=i.n(a),o=i(4);class c extends o.a{static get Defaults(){return n.a.extend({},o.a.Defaults,{})}enable(){if(super.enable()){this.setDistanceVariable();let t=Object(n.a)(window).width();Object(n.a)(window).on("resize."+this.ns,()=>{Object(n.a)(window).width()!==t&&(t=Object(n.a)(window).width(),this.setDistanceVariable())})}}setDistanceVariable(){const t=this.$container[0].scrollWidth,e=parseInt(this.$container.css("column-gap"),10);this.$container[0].style.setProperty("--distance",t/-2-e/2+"px"),this.$container[0].style.animation="none",requestAnimationFrame(()=>{this.$container[0].style.animation="clients-animation infinite linear 12s"})}disable(){super.disable()&&Object(n.a)(window).off("."+this.ns)}}n.a.fn.setDistanceVariable=s()(c)}},[[143,0]]]);