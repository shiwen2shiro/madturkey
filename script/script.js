$(document).ready(function() {
	
	var height = $(window).height();






	var audio = document.getElementsByTagName('audio')[0];

	$('#noise_img').click(function(){
		if (audio.paused == false) {
			audio.pause();
		} else {
			audio.play();
		}
	});





	function isElementInViewport(elem) {
    var $elem = $(elem);
    var $elem2 = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    var elemTop2 = Math.round( $elem2.offset().top );
    var elemBottom2 = elemTop2 + $elem2.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop) && (elemTop2 < viewportBottom) && (elemBottom2 > viewportTop));

}

	// Check if it's time to start the animation.
	function checkAnimation() {
	    var $elem = $('.box');
	    var $elem2 = $('.money')

	    if (isElementInViewport($elem)) {
	        // Start the animation
	        $elem.addClass('start');
	    } else {
	        $elem.removeClass('start');
	    }

	    if (isElementInViewport($elem2)) {
	        // Start the animation
	        $elem2.addClass('start');
	    } else {
	        $elem2.removeClass('start');
	    }

	}

	// Capture scroll events
	$(window).scroll(function(){
	    checkAnimation();
	});









})