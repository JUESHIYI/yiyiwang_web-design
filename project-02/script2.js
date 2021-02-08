

$("document").ready(function() {

    

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 850) {
          $("h1").css("color", "white");
        }
   
        else{
            $("h1").css("color", "black");  	
        }
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
          $("li").css("color", "white");
        }
   
        else{
            $("li").css("color", "black");  	
        }
    });


    $(".menu").click(function() {
        $("nav").toggle();
    });


    var slideIndex = 1;
    showSlides(slideIndex);
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slides[slideIndex-1].style.display = "block";  
    }

    $(".prev").click(function() {
        plusSlides(-1);
    });

    $(".next").click(function() {
        plusSlides(1);
    });

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }


});






