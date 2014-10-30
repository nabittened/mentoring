$( document ).ready( function() {
	
	apa.init();
});

var actTop = false;

var apa = {
	
	init: function() {
		
		$(window).on( 'resize', apa.resize );
		$(document).on( 'click', '.help', function() {
			
			apa.scroll('.mentorships', 300);
		} );
		$(document).on( 'click', '.gethelp', function() {
			
			apa.scroll('.register', 300);
		} );
		$(document).on( 'click', '.dohelp', function() {
			
			apa.scroll('.register', 300);
		} );
		$(document).on( 'click', 'h1', function() {
			
			apa.scroll('.start', 300);
		} );
		
		apa.resize();
	},
	
	resize: function() {
		
		var tHeight = $(window).height();
		$('.content').css('height', tHeight*3);
		$('.content section').css( 'height', tHeight );
		
		if (actTop) {
			
			apa.scroll(actTop, 0);
		}
	},
	
	scroll: function(top, tTime) {
	
		actTop = top;
		
		var tTop = $(top).position().top;
		
		$('.content').animate( {'top': -tTop }, tTime);
	}
};