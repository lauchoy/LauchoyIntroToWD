
var docID = document.getElementsByTagName("body")[0].getAttribute("id");

//integrate automatic + manual slideshow playing for homepage
if (docID== "index"){
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
      var dots = document.getElementsByClassName("dot");
      if(n == undefined) { n = ++slideIndex }
      if (n > aSlides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = aSlides.length }
      for (i = 0; i < aSlides.length; i++) {
          aSlides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      aSlides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      timer = setTimeout(showSlides, 5000); 
  }
}

if (docID == "video" || docID == "photo"){
  //manual slideshow for 'photography' and 'videography' sections
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mSlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }
}


$(document).ready(function (){
        $('#toggleMe').click(function(){
          $('.card:first').toggle();
        });
      });