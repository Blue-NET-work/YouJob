(function($) { "use strict";
	
	var map;
	  map = new GMaps({
		div: '#maps',
		lat: -12.043333,
		lng: -77.028333,
		zoomControl : true,
		zoomControlOpt: {
			style : 'SMALL',
			position: 'TOP_LEFT'
		},
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false
		});
	
	map.addMarker({
	  lat: -12.043333,
	  lng: -77.028333,
      icon: "assets/img/marker.png",
	  title: 'YouJob',
	  infoWindow: {
        content: '<h4><img src="assets/img/logo.png" alt=""></h4><p>ul. zielonogorska,<br>22-457 warsaw</p>'
      }
	});

})(jQuery);