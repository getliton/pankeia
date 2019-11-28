(function ($) {
"use strict";



	//================Sticky Menu JQuery======================//
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 145) {
			$("#header-sticky").removeClass("sticky-bar");
		} else {
			$("#header-sticky").addClass("sticky-bar");
		}
	});

	//================ End Sticky Menu CSS======================//



	//For Background Image function "data-background"
	$("[data-background]").each(function(){
			$(this).css("background-image", "url("+$(this).attr("data-background")+")")		

	});

	// meanmenu or mobile menu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	//One Page Nav
	 	if ($(".header-area").length) {
			var top_offset = $('.header-area').height() - 10;
			$('.main-menu nav ul').onePageNav({
			currentClass: 'active',
			scrollOffset: top_offset,
		});
	}
	// scrollToTop
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});


	// WOW active
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 20,          // distance to the element when triggering the animation (default is 0)
			mobile: true,       // trigger animations on mobile devices (default is true)
			live: true,       // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}






})(jQuery);