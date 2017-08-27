"use strict";

//Preloader
$(window).on("load", function() {
	$(".preloader-inner").fadeOut();
	$(".preloader").delay(400).fadeOut("slow");
});

$(function() {

	function get_scroll_item() {
		var topMenu =  $("#main-menu"),
			topMenuHeight = topMenu.outerHeight() + 15,
			menuItems = topMenu.find("a"),
			scrollItems = menuItems.map(function() {
				var item = $($(this).attr("href"));
				if (item.length) return item;
			});
		var fromTop = $(this).scrollTop() + topMenuHeight;

		var cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop) return this;
		});
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";
		menuItems
			.parent().removeClass("active")
			.end().filter("[href='#"+id+"']").parent().addClass("active");
	}
	function sticky_header() {
		var site_header = $("#top-header");
		
		if ($(this).scrollTop() > 135){
			site_header.addClass("site-header--fixed");
		} else{
			site_header.removeClass("site-header--fixed");
		}
	}
	//Google Maps
	function google_map_init() {
		var mapOptions = {
			scrollwheel: false,
			zoom: 17,
			center: new google.maps.LatLng(-32.934702, 151.776788),
			styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dadada"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#bbdde6"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#bbdde6"}]},{"featureType":"water","elementType":"labels","stylers":[{"color":"#0097a9"}]}]
		};
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(-32.934702, 151.776788),
			map: map,
			title: "gravis.app",
		});
	};

	//Rellax JS
	var rellax;
	// if( $(window).width() > 991 ) rellax = new Rellax(".rellax-js");

	//Scroll active section
	// $(window).on("scroll", get_scroll_item);
	// $(window).on("load", get_scroll_item);
	
	//Fixed Header
	// $(window).on("scroll", sticky_header);
	// $(window).on("load", sticky_header);

	//Sandwitch
	// var sandwitch = $(".sandwitch");
	// var header_menu = $("#main-menu");
	// var menu_element = $("#main-menu ul li a");

	// sandwitch.on("click", function() {
	// 	$(this).toggleClass("s--active");
	// 	header_menu.toggleClass("site-header--menu__active");
	// });
	// menu_element.on("click", function() {
	// 	sandwitch.toggleClass("s--active");
	// 	header_menu.toggleClass("site-header--menu__active");
	// });

	//Magnific Popup
	// var video_popup = $("#watch-video-popup");
	// video_popup.magnificPopup({
	// 	disableOn: 700,
	// 	type: "iframe",
	// 	mainClass: "mfp-fade",
	// 	removalDelay: 0,
	// 	preloader: false,
	// 	fixedContentPos: true,
	// 	overflowY: "scroll",
	// 	closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-ios-close-empty"></i></button>'
	// });

	//Screenshots slider
	// var screenshots_slider = $("#screenshots-slider");
	// screenshots_slider.slick({
	// 	speed: 900,
	// 	dots: true,
	// 	arrows: false,
	// 	slidesToShow: 3,
	// 	centerMode: true,
	// 	prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
	// 	nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
	// 	responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				centerMode: false
	// 			}
	// 		}
	// 	]
	// });

	//Testimonials slider
	// var testimonials_slider = $("#testimonials-slider");
	// testimonials_slider.slick({
	// 	speed: 500,
	// 	dots: true,
	// 	slidesToShow: 1,
	// 	arrows: false,
	// 	centerMode: true,
	// 	variableWidth: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 725,
	// 			settings: {
	// 				variableWidth: false
	// 			}
	// 		}
	// 	]
	// });
	// var $progressBar = $("#ti-progress");
	// testimonials_slider.on("beforeChange", function(event, slick, curSlide, nextSlide) {
	// 	var calc = ( (nextSlide) / (slick.slideCount - 1) ) * 100;
	// 	$progressBar.css("background-size", calc + "% 100%")
	// 		.attr("aria-valuenow", calc);
	// });

	//Equal Height via MatchHeight
	// $(".height").matchHeight();
	// $(".s-testimonials--one-testimonial .inner").matchHeight();
	// $(".new-testimonial").matchHeight();

	//Anchor Scripts
	var $root = $("html, body");
	var scroll_time = 1000;
	// var scroll_to_top = $("#scroll-top");

	// scroll_to_top.on("click", function(e) {
	// 	e.preventDefault();
	// 	$root.stop().animate({
	// 		scrollTop: 0
	// 	}, scroll_time);
	// 	return false;
	// });
	// $(".site-header--logo").on("click", function(e) {
	// 	e.preventDefault();
	// 	$root.stop().animate({
	// 		scrollTop: 0
	// 	}, scroll_time);
	// 	return false;
	// });
	// $('a[href*=\\#]').on("click", function(event){     
	// 	event.preventDefault();
	// 	$root.animate({
	// 		scrollTop: $($(this).attr("href")).offset().top - 75
	// 	}, scroll_time);
	// 	return false;
	// });

	//Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//Contact Form
	// $("#contact-form").on("submit", function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Thanks for feedback!");
	// 	});
	// 	return false;
	// });

	// $("#subscribe-newsletter").on("submit", function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "subs.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Thanks for subscribe!");
	// 	});
	// 	return false;
	// });

	//Footer Reveal
	// var footerHeight = $("#footer").height();
	// if( $(window).width() > 991 ) $("#layout").css("margin-bottom", footerHeight + 82);

	//Grab images and links
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// google_map_init();

});
