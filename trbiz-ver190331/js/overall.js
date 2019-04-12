$(function() {
	 var $header = $('header');
        // Nav Toggle Button
      $('#nav-toggle,#global-nav ul li').click(function() {
          $header.toggleClass('open');
        });
      $('.popup-image').magnificPopup({
        type: 'image'
      });
      $(".acc dd").css("display", "none");
      $(".acc dt").click(function() {
        if ($("+dd", this).css("display") == "none") {
          $("+dd", this).slideDown("slow");
          $(this).addClass("selected");
        } else {
          $("+dd", this).slideUp("slow");
          $(this, ".selected").removeClass("selected");
        }
      });
	
//	  accordion
	$('.info_title').click(function() {
		$(this).next().slideToggle();
	});
	
});