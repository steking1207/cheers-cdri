
$( document ).ready(function() {


 AOS.init({
    offset: 200,
      duration: 600,
     easing: 'ease-out-back'
    });


	$('.btn_tech').click(function(){
		 $('body,html').animate({
			scrollTop:$('.tech').offset().top
		},1000);
		return false;
	});
   $('.btn_energy').click(function(){
		 $('body,html').animate({
			scrollTop:$('.energy').offset().top
		},1000);
		return false;
	});

 $('.top').click(function(){
		 $('body,html').animate({
			scrollTop:0
		},1000);
		return false;
	});

$(window).scroll(function() {
	//gotop
	var s3top=$('.section3').offset().top
    var wS = $(this).scrollTop();
	 if (wS >s3top){
     $('.top').fadeIn()
   }else{
	  $('.top').fadeOut()
	   }
	});

	//lightbox
	var black=$('.black')

		$('.black, .pclose').click(function (){
			$('.pop,.finish, .classinfo').fadeOut()
			black.fadeOut()
			$('body').css({'overflow':''})
		})
		$('.btn').click(function (){
			$('.pop,.black').fadeOut()
			$('body').css({'overflow':''})
			$('body,html').animate({
				scrollTop:$('.section3').offset().top
			},1000);
			return false;
		})
		$('.addrbtn').click(function (){
		     black.show()
			$('.classinfo').fadeIn()
		    $('body').css({'overflow':'hidden'})
		})

	 $('.box1').click(function(){
		 black.show()
		$('.popup1').fadeIn()
		 $('body').css({'overflow':'hidden'})
	});
	 $('.box2 ').click(function(){
		$('.popup2').fadeIn()
		 black.show()
		 $('body').css({'overflow':'hidden'})
	});
    $('.box3 ').click(function(){
		$('.popup3').fadeIn()
		 black.show()
		 $('body').css({'overflow':'hidden'})
	});

	 $('.sent ').click(function(){
		$('.finish').fadeIn()
		 black.show()
		 $('body').css({'overflow':'hidden'})
	});

});


