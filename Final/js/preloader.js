//pre-loader
$(document).ready(function() {
    $(window).load(function() {
        preloaderFadeOutTime = 500;

        function hidePreloader() {
            var preloader = $('.cube-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });
});
