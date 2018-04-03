$(function () {

	$("#Slider").unslider ({
		autoplay: true,
		infinite: true,
		keys: false,
		arrows: false,
		nav: false,
		delay: 2300
	});


	$(".BottomArrow a").bind ("click", function (Event) {

		Event.preventDefault ();

		var Me = $(this);
		$(Me.attr ("href")).animatescroll ({scrollSpeed: 1500,easing: "easeInOutSine"});
	});
});