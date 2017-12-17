//pre-loader
$(document).ready(function() {
    $(window).load(function() {
        preloaderFadeOutTime = 800;

        function hidePreloader() {
            var preloader = $('.cube-wrapper');
            // delay preload screen by a few seconds just in case
            preloader.delay(2700).fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });
});
var docID = document.getElementsByTagName("body")[0].getAttribute("id");
if (docID == "index") {
    //main functions
    $(document).ready(function() {
        TweenLite.from($('body'), 0.5, { autoAlpha: 0 });

        var $floor4 = $('#introBtn'),
            $floor3 = $('#factsBtn'),
            $floor2 = $('#galleryBtn'),
            $floor1 = $('#aboutBtn');
        $scrollDown = $('#scrlSection');

        //pass all of the list items as an array for our menu
        var $navButtons = $('li');


        //add and remove active class on mouse enter and leave
        $navButtons.mouseenter(function() {
            TweenLite.to(this, 0.2, { className: '+=active' });
        });
        $navButtons.mouseleave(function() {
            TweenLite.to(this, 0.2, { className: '-=active' });
        });

        //assign an HTML5 data attribute to each of our buttons
        $floor4.attr('data-scrollPos', $('#introPanel').offset().top);
        $floor3.attr('data-scrollPos', $('#factsPanel').offset().top);
        $floor2.attr('data-scrollPos', $('#galleryPanel').offset().top);
        $floor1.attr('data-scrollPos', $('#aboutPanel').offset().top);
        $scrollDown.attr('data-scrollPos', $('#factsPanel').offset().top);

        $navButtons.click(function() {
            var myScrollPosition = $(this).attr('data-scrollPos');
            TweenLite.to(window, 1, { scrollTo: myScrollPosition, ease: Power2.easeOut });
        });
        $scrollDown.click(function() {
            TweenLite.to(window, 1, { scrollTo: "#factsPanel", ease: Power2.easeOut });
        })

        var initialFloor = $('#introPanel').attr('data-scrollPos');
        TweenLite.to(window, 1, { scrollTo: initialFloor });

    });
    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById("menu").style.width = "250px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("menu").style.width = "0";
        // document.body.style.backgroundColor = "white";
    }



    //integrate automatic + manual slideshow playing for homepage

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("aSlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";


        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
}
