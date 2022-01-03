$(document).ready(function() {                                                           //When Document loads
   $('.slide-section').click(function(e) {                           //When something that has slide section as class
    var linkHref = $(this).attr('href');                          //Variable, storing what element slide section is pointing to
    
    $('html, body').animate({                               //Animates body scolling to
     scrollTop: $(linkHref).offset().top + 1 //the object (linkHref) (+1 is optional, means it scrolls a pixel more)
    }, 1000);                                                           //1000 means 1000ms which is 1 second
    
    e.preventDefault();                                        //Prevents href from showing in url
   });
});                                                                                                      //Hope you can understand the code
