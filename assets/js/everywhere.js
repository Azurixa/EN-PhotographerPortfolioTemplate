//slider text scale
var slitertext_top = ($('#slider1').height() - $('.slider-text').height())/2;
function slide_text_position(){
	slitertext_topnow = window.slitertext_top + $(document).scrollTop()/1.5;
	$('.slider-text').css('top', slitertext_topnow);
}
slide_text_position();

//zmiana kolory nav
function navbar_color(){
	if($(document).scrollTop() > window.innerHeight/1.5){
		//scrolled
		$('nav').css({
			'background' : 'black'
		});
		$('#logo').css({
			'font-size' : '1.5rem'
		});
	} else{
		//top
		$('nav').css({
			'background' : 'transparent'
		});
		$('#logo').css({
			'font-size' : '3rem'
		});
	}
}

//window strolling events
$(window).scroll(
	function(){
		if($(document).scrollTop() < window.innerHeight/1.5){
			slide_text_position();
		}
		navbar_color();
	}
);

//Linki a name href instrona
$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top-60
    }, 500, 'swing');

    return false;
});

//portfolio zoom
$('.portfolio-img').click(
	function(){
		$("#img-zoom").css("backgroundImage",$(this).css('backgroundImage'));
		$("#img-zoom-box").fadeIn();
	}
);
$('#img-zoom-box').click(
	function(){
		$("#img-zoom-box").fadeOut();
		$("#img-zoom").css("backgroundImage",'unset');
	}
);