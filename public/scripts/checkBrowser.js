var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
  //IE specific code goes here
  var currentLang = window.navigator.userLanguage || window.navigator.language;
  window.location.replace(currentLang === 'en' || currentLang.indexOf('en-') > -1 ? '/outdated_eng.html' : '/outdated_ko.html');
}
