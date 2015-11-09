// Start animating when the page is ready.
window.onload = function() {
	animateLogo();
	animateRobot();
	function animateLogo(){
		TweenMax.fromTo("#logo",1, {
			  // from
			    css: {
			    	y: "-20px",
			    }
			},{
			    // to
			    css: {
			    	y: "20px",
			    },

			    // option to repeat animation forever
			    repeat: -1,

			    // option to reverse the animation and rerun
			    yoyo: true,

			    // change easing type
			    ease: Power2.easeInOut,
			}
		);
	}

	function animateRobot(){
		TweenMax.fromTo("#android-robot",1, {
			  // from
			    css: {
			        rotation:"-80deg",
			    }
			},{
			    // to
			    css: {
			          rotation:"-15deg",
			    },

			    // option to repeat animation forever
			    repeat: -1,

			    // option to reverse the animation and rerun
			    yoyo: true,

			    // change easing type
			    ease: Power2.easeInOut,
			}
		);
	}
};
