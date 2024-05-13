$(document).ready(function() {

	$('.jumbotron aside a').css('height', $('.jumbotron').height());

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if(isMobile.any()) {
		var myScroll = new iScroll('wrap', {
			hScrollbar: false,
			vScrollbar: false,
			hScroll: false,
			lockDirection: true,
			vScroll: true
		});

		$('.dropdown-menu a').click ( function (e) {
			var id = $(this).attr('href');
			if (id.substr(0,1) == '#') {
				e.preventDefault();
				setTimeout( function() {
					myScroll.scrollToElement ( id, 0 );
				}, 0);
				return false;
			} else {
				return true;
			}
		});
	}
});