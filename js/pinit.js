
// fetch new version of css
document.addEventListener('DOMContentLoaded', function () {
    var cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        var newHref = href.split('?')[0] + '?v=' + new Date().getTime();
        link.setAttribute('href', newHref);
    });
});



!function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"https://assets.pinterest.com/js/pinit_main.js"});