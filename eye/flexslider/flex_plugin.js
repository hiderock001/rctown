// JavaScript Document
	$(document).ready(function() {
        $('.flexslider').flexslider({
			animation: "slide",            //String: Select your animation type, "fade" or "slide"
			slideshow: true,              //Boolean: Animate slider automatically
			slideshowSpeed: 2000,         //Integer: Set the speed of the slideshow cycling, in milliseconds
			initDelay: 0,                 //Integer: Set an initialization delay, in milliseconds
			pauseOnAction: false,          //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
			pauseOnHover: false,          //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
			video: false,                 //Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
			// Primary Controls
			controlNav: false,            //Boolean: Create navigation for paging control of each clide?
			directionNav: false,           //Boolean: Create navigation for previous/next navigation? (true/false)
			prevText: "Previous",         //String: Set the text for the "previous" directionNav item
			nextText: "Next"              //String: Set the text for the "next" directionNav item
		});
		
    });