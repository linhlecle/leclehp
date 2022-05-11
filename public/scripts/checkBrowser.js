var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
  //IE specific code goes here
  var currentLang = navigator.language;
  window.location.replace(currentLang === 'en' ? '/outdated_eng.html' : '/outdated_ko.html');
}
