var $$ = $$ || {};

class Application {
	constructor () {
		"use strict";
		this._initSlider();
		this._initCards();

	}

	_initSlider () {
		"use strict";

		$('.slider').slider({full_width: true});
	}

	_initCards () {
		"use strict";

		$(document).on('click.card', '.card', function (e) {
			if ($(this).find('.card-reveal').length) {
				console.log("card reveal");
				if ($(e.target).is($('.card-reveal span.card-title')) || $(e.target).is($('.card-reveal span.card-title i'))) {
					$(this).find('.card-reveal').velocity({translateY: 0}, {
						duration: 300,
						queue: false,
						easing: 'easeOutQuad'
					});
				}
				else {
					$(this).find('.card-reveal').velocity({translateY: '-100%'}, {
						duration: 300,
						queue: false,
						easing: 'easeOutQuad'
					});
				}
			}


		});
	}
}

$(function () {
	$$.window = $(window);
	$$.body = $(document.body);
	$$.windowWidth = $$.window.width();
	$$.windowHeight = $$.window.height();

	$$.application = new Application();

	$$.ESCAPE_KEY_CODE = 27;

	$$.window.on('resize', function () {
		$$.windowWidth = $$.window.width();
		$$.windowHeight = $$.window.height();
	});
});
