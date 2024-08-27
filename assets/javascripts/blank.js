// fetch new version of css
document.addEventListener('DOMContentLoaded', function () {
    var cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        var newHref = href.split('?')[0] + '?v=' + new Date().getTime();
        link.setAttribute('href', newHref);
    });
});



(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{150:function(n,o,p){n.exports=p(13)}},[[150,0]]]);