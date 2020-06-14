(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="dAdvmmfotufcfs/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/img_1051-234.jpg' : 'images/img_1051-117.jpg');
$('.js2').attr('src', (dpi>1) ? 'images/screen-shot-2020-04-30-at-8.52.34-pm-320.jpg' : 'images/screen-shot-2020-04-30-at-8.52.34-pm-160.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/29828698466_fd1f20420c_o-280.jpg' : 'images/29828698466_fd1f20420c_o-140.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/img_9484-320.jpg' : 'images/img_9484-160.jpg');
$('.js5').attr('src', (dpi>1) ? 'images/img_2659-320.jpg' : 'images/img_2659-160.jpg');
$('.js6').attr('src', (dpi>1) ? 'images/img_1082-280.jpg' : 'images/img_1082-140.jpg');
$('.js7').attr('src', (dpi>1) ? 'images/screen-shot-2020-04-30-at-8.49.11-pm-320.jpg' : 'images/screen-shot-2020-04-30-at-8.49.11-pm-160.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
$('.js8').mouseenter(function() { $.loadImages('images/screen-shot-2020-04-30-at-8.52.34-pm-1804.jpg', function() { }) });
$('.js8').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js8-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/screen-shot-2020-04-30-at-8.52.34-pm-1804.jpg'; } } });
$('.js9').mouseenter(function() { $.loadImages('images/img_2659-5472.jpg', function() { }) });
$('.js9').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js9-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/img_2659-5472.jpg'; } } });
var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "1.00s", "0.10s", 1, 100);
wl.addAnimation($('.js5')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js6')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js7')[0], "1.00s", "0.20s", 1, 100);
wl.start();

});