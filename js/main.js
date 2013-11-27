(function () {
    "use strict";
    var imp = impress(),
        el = document.querySelector('#arrowLeft');
    imp.init();
    if (el) {
        el.addEventListener('click', function (e) {
            imp.prev();
            e.preventDefault();
        }, false);
        el = document.querySelector('#arrowRight');
        el.addEventListener('click', function (e) {
            imp.next();
            e.preventDefault();
        }, false);
    }
})();