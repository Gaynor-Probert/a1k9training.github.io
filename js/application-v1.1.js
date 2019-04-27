!function ($) {

  $(function(){

    // IE10 viewport hack for Surface/desktop Windows 8 bug
    // See Getting Started docs for more information
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style");
      msViewportStyle.appendChild(
        document.createTextNode(
          "@-ms-viewport{width:auto!important}"
        )
      );
      document.getElementsByTagName("head")[0].
        appendChild(msViewportStyle);
    }
});
}(window.jQuery);

var isMobile = function () {

    var android = function () {
        return navigator.userAgent.match(/Android/i);
    };
    var blackBerry = function () {
        return navigator.userAgent.match(/BlackBerry/i);
    };
    var iOS = function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    };
    var opera = function () {
        return navigator.userAgent.match(/Opera Mini/i);
    };
    var windows = function () {
        return navigator.userAgent.match(/IEMobile/i);
    };
    var any = function () {
        return (android() || blackBerry() || iOS() || opera() || windows()) === null ? false : true;
    };

    return {
        android: android,
        blackBerry: blackBerry,
        iOS: iOS,
        opera: opera,
        windows: windows,
        any: any
    };
}();