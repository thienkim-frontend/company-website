jQuery(document).ready(function ($) {
	new WOW().init();
	$('[data-toggle="tooltip"]').tooltip(); 
	$("[data-fancybox]").fancybox({
		// Options will go here
	});

	$('body').scrollspy({ 
		target: '.navbar',
		offset: 80 
	});
	$('.navbar').affix({
	  offset: {
	    top: 40
	    // top: function () {
	    // 	console.log($('.navbar').outerHeight());
	    //   return (this.top = $('.navbar').outerHeight(true))
	    // }
	  }
	})
	// $(".navbar").on('affix.bs.affix', function(){

  // });

	function doAnimations(){
	    var elems= $(".caption-slider.active-slide").find('.animation');
	    elems.each(function () {
	        var $this = $(this),
	            $animationType = $this.data('animation'),
	            $animationDelay= $this.data('delay');
	        $this.addClass(" animated "+ $animationType).css({"animation-delay":$animationDelay}) ;   
	    });
	}

	if($('.likipe-slider-wrapper').length){
    $('.likipe-slider-wrapper').bxSlider({
      controls: false,
      // auto: true,
      pause: 5000,
      speed: 400,
      onSliderLoad: function () {
          $('.likipe-slider-wrapper>li .caption-slider').eq(1).addClass('active-slide');
          doAnimations();
      },
      onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
          $('.active-slide').removeClass('active-slide');
          $('.likipe-slider-wrapper>li .caption-slider').eq(currentSlideHtmlObject + 1).addClass('active-slide');
          doAnimations();
      },

      onSlideBefore: function () {
          var elems= $(".caption-slider.active-slide").find('.animation');
          elems.each(function () {
              var $this = $(this),
                  $animationType = $this.data('animation');
              $this.removeClass(" animated "+ $animationType) ;   
          });
          elems.removeAttr('style');
      }
    });
	}
	

	initCaptionAnimate(".likipe-slider-wrapper");
	clientSlider();
	
	initSmoothScroll();
	

});
function initSmoothScroll() {
	/*-----------------------------------------
    SMOOTH SCROLL - https://github.com/kswedberg/jquery-smooth-scroll
    ------------------------------------------*/
  $('.navbar a:not(.search-btn), a.smooth-scroll').smoothScroll({
    speed: 600,
    offset:-40
  });
};

function clientSlider(){
	if($(".client-list").length){
		var slider, windowWidth = $(window).width();
		var widthSlider = $(".client-list").width();
		var obxSettings = {
		    pager: false,
		    auto: true,
		    controls: false,
		    minSlides: 2,
		    maxSlides: 6,
		    slideMargin: 36
		};
		obxSettings.minSlides = windowWidth > 480 ? 6 : 3;
		obxSettings.slideWidth = windowWidth > 480 ? (widthSlider / 6) : (widthSlider / 3);
		obxSettings.slideMargin = windowWidth > 767 ? 36 : 10;
		slider = $('.client-list').bxSlider(obxSettings);
	}
}

function doAnimations(){
    var elems= $(".caption-slider.active-slide").find('.animation');
    elems.each(function () {
        var $this = $(this),
            $animationType = $this.data('animation'),
            $animationDelay= $this.data('delay');
        $this.addClass(" animated "+ $animationType).css({"animation-delay":$animationDelay}) ;   
    });
}
function initCaptionAnimate(el){
	if($(el).length){
	  $(el).bxSlider({
	    controls: false,
	    // auto: true,
	    pause: 5000,
	    speed: 400,
	    onSliderLoad: function () {
	        $( el + '>li .caption-slider').eq(1).addClass('active-slide');
	        doAnimations();
	    },
	    onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
	        $('.active-slide').removeClass('active-slide');
	        $(el + '> li .caption-slider').eq(currentSlideHtmlObject + 1).addClass('active-slide');
	        doAnimations();
	    },

	    onSlideBefore: function () {
	        var elems= $(".caption-slider.active-slide").find('.animation');
	        elems.each(function () {
	            var $this = $(this),
	                $animationType = $this.data('animation');
	            $this.removeClass(" animated "+ $animationType) ;   
	        });
	        elems.removeAttr('style');
	    }
	  });
	}
}

$(window)
  .on( 'load', function() {

  })
  .on( 'resize', function() {
  	clientSlider();
  })
  .on( 'scroll', function() {
      
  }); 

