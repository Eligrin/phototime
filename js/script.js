$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger, .menu, .header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: $('.arrows'),
		// centerMode: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					// centerMode: true,
					appendArrows: $('.arrows_mobile'),
				}
			}
		],
	});
});


$(document).ready(function () {
	$('a').click(function (event) {
		$('.header, .menu').toggleClass('active');
		$('.burger').removeClass('active');
		$('body').toggleClass('lock');
	});
});
