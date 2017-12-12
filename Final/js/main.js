//Smooth Scroll from https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
//progress timeline
// var progressTl = new TimelineMax({
//     paused: true,
//     onUpdate: progressUpdate,
//     onComplete: loadComplete
// });

// progressTl
//     //tween the progress bar width
//     .to($('.progress span'), 1, {width:100, ease:Linear.easeNone});

// //as the progress bar width updates and grows we put the percentage loaded in the screen
// function progressUpdate()
// {
//     //the percentage loaded based on the tween's progress
//     loadingProgress = Math.round(progressTl.progress() * 100);

//     //we put the percentage in the screen
//     $(".txt-perc").text(loadingProgress + '%');

// }
// // number of loaded images for preloader progress
// var loadedCount = 0; //current number of images loaded
// var imagesToLoad = $('.bcg').length; //number of slides with .bcg container
// var loadingProgress = 0; //timeline progress - starts at 0

// $('.bcg').imagesLoaded({
//     background: true
// }).progress( function( instance, image ) {
//     loadProgress();
// });

// function loadProgress(imgLoad, image)
// {
//     //one more image has been loaded
//     loadedCount++;

//     loadingProgress = (loadedCount/imagesToLoad);

//     // GSAP tween of our progress bar timeline
//     TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});

// }
// function loadComplete() {

//     // preloader out
//     var preloaderOutTl = new TimelineMax();

//     preloaderOutTl
//         .to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn})
//         .to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
//         .set($('body'), {className: '-=is-loading'})
//         .set($('#introPanel'), {className: '+=is-loaded'})
//         .to($('#preloader'), 0.7, {yPercent: 100, ease:Power4.easeInOut})
//         .set($('#preloader'), {className: '+=is-hidden'})
//         .from($('#introPanel .logo'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.2')
//         .from($('#introPanel .logo-description'), 0.7, {autoAlpha: 0, ease:Power1.easeOut}, '+=0.2')
//         .from($('#scrlSection'), 0.3, {y: -20, autoAlpha: 0, ease:Power1.easeOut}, '+=0.1');

//     return preloaderOutTl;
// }
//main functions
$(document).ready(function(){
    //make menu and page fade in on load
    //make the body tab invisible to start
    TweenLite.from($('body'), 0.5, {autoAlpha: 0});

    //Grab each button by ID and assign them to variables
    var $floor4 = $('#introBtn'),
    $floor3 = $('#factsBtn'),
    $floor2 = $('#galleryBtn'),
    $floor1 = $('#aboutBtn');
    $scrollDown = $('#scrlSection');

    //pass all of the list items as an array for our menu
    var $navButtons = $('li');


    //add and remove active class on mouse enter and leave
    $navButtons.mouseenter(function(){
        TweenLite.to(this, 0.2, {className:'+=active'});
    });
    $navButtons.mouseleave(function(){
        TweenLite.to(this, 0.2, {className:'-=active'});
    });

    //assign an HTML5 data attribute to each of our buttons
    $floor4.attr('data-scrollPos', $('#introPanel').offset().top);
    $floor3.attr('data-scrollPos', $('#factsPanel').offset().top);
    $floor2.attr('data-scrollPos', $('#galleryPanel').offset().top);
    $floor1.attr('data-scrollPos', $('#aboutPanel').offset().top);
    $scrollDown.attr('data-scrollPos', $('#factsPanel').offset().top);

    $navButtons.click(function(){
        var myScrollPosition = $(this).attr('data-scrollPos');
        TweenLite.to(window,1,{scrollTo: myScrollPosition, ease: Power2.easeOut});
    });
    $scrollDown.click(function(){
        TweenLite.to(window,1,{scrollTo: "#factsPanel", ease: Power2.easeOut});
    })

    var initialFloor = $('#introPanel').attr('data-scrollPos');
    TweenLite.to(window,1,{scrollTo:initialFloor});

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

// midterm slideshow
var docID = document.getElementsByTagName("section")[0].getAttribute("id");

//integrate automatic + manual slideshow playing for homepage
if (docID== "galleryPanel"){
  var slideIndex = 1;
  showSlides(slideIndex);
  var timer = null;

  function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
      var i;
      var aSlides = document.getElementsByClassName("aSlides");
      if(n == undefined) { n = ++slideIndex }
      if (n > aSlides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = aSlides.length }
      for (i = 0; i < aSlides.length; i++) {
          aSlides[i].style.display = "none";
      }

      aSlides[slideIndex - 1].style.display = "block";
      timer = setTimeout(showSlides, 5000);
  }
}
