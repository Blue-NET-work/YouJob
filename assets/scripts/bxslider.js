(function($) { "use strict";

	$('.bxslider').bxSlider({
		slideWidth: 550,
		slideMargin: 20,
		minSlides: 2,
		maxSlides: 2,
		auto: true, 
		pager: false
	});
	
	$('.bx-reviews').bxSlider({auto: true, pager: true});
})(jQuery);