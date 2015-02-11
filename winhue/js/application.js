$(function() {

  $animateIn = $(".animate-in");
  var animateInOffset = 100;

  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn.addClass("pre-animate");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})

function isUsingUnsupportedOS() {
  // Windows XP is not supported
  var userAgent = window.navigator.userAgent;
  return userAgent.indexOf('Windows NT 5.1') > -1 ||
    userAgent.indexOf('Windows NT 5.2') > -1;
}

function browserSupportsCSSProperty(propertyName) {
  var elm = document.createElement('div');
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] != undefined)
    return true;

  var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
    domPrefixes = 'Webkit Moz ms O'.split(' ');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
      return true;
  }

  return false;
}