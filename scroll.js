$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  // facebook logo fade in and fade out
  $("#facebook").mouseenter(function(){
    $("#facebook").fadeTo("fast", 0.7);
  });

  $("#facebook").mouseleave(function(){
    $("#facebook").fadeTo("fast", 1);
  });
  
  //codepen logo fade in and fade out
  $("#codepen").mouseenter(function(){
    $("#codepen").fadeTo("fast", 0.7);
  });

  $("#codepen").mouseleave(function(){
    $("#codepen").fadeTo("fast", 1);
  });
  
  //linkedin logo fade in and fade out
  $("#linkedin").mouseenter(function(){
    $("#linkedin").fadeTo("fast", 0.7);
  });

  $("#linkedin").mouseleave(function(){
    $("#linkedin").fadeTo("fast", 1);
  });

});