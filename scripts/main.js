(function() { // protect the lemmings!
	
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
	
$(window).on("scroll", function() {
    if($(window).scrollTop() > 700) {
        $(".topHeader").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".topHeader").removeClass("active");
    }
});
	
})();