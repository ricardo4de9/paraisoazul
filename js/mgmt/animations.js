$(document).ready(function() {
    $('#logoBird').animateRotate(-20);
 
 // BOOKING FORM
 Placeholder.init();
	$("a#bookingButton").fancybox({
		minWidth: 750,
		minHeight: 450,
		"onUpdate"  : function() {
      $(".fancybox-title").css({'top':'-20px', 'bottom':'auto', 'font-size':"'Fauna One',serif"});
    },
  "afterLoad" : function() {
      $(".fancybox-title").css({'top':'-20px', 'bottom':'auto', 'font-size':"'Fauna One',serif"});
    },
  helpers : { 
				overlay : {closeClick: false}
		}
	});   
    
 // PHOTO GALLERIES

	// Booking button animations
	$("div.bookingButtonFinal").mouseenter(animateBookingButton).mouseleave(returnNormalState);
});

function resizeImages(){
    $(".imgSlideshow").css("width","100%");
    $(".imgSlideshow").css("height","auto");
}

$.fn.animateRotate = function(angle, duration, easing, complete) {
    return this.each(function() {
        var $elem = $(this);

        $({deg: 0}).animate({deg: angle}, {
            duration: duration,
            easing: easing,
            step: function(now) {
                $elem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};

function animateBookingButton(){
		//$("#logoBird").animate({right:'7.2%'});
		$('#logoBird').animateRotate(20);
		$('#logoBird').attr('class','logoBird saturate');
}

function returnNormalState(){
		//$("#logoBird").animate({right:'13.2%'});
		$('#logoBird').animateRotate(-20);
		$("#logoBird").attr('src','./res/img/icons/shellfish2.png');
		$('#logoBird').attr('class','logoBird');
		
}
