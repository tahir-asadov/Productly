console.log('script');
var b;
$(document).ready(function() {
  $('.image-popup').magnificPopup({type:'image'});
  // $('.band-validation').appear();
  // $(document.body).on('appear', '.band-validation', function(e, $affected) {
  //   $(this).addClass( 'animated zoomInUp' );
  // });
  // $('.band-feature').appear();
  
  // $(document.body).on('appear', '.band-feature', function(e, $affected) {
  //   $(this).addClass( 'animated zoomInUp' );
  //   $('.feature-items > *').each(function(){
  //     $(this).fadeIn();
  //   });
  // });
  // $('.band-feature').on('appear', function(){
  // });


  $('.band-hero').appear();
  $(document.body).on('appear', '.band-hero', function(e, $affected) {
    setTimeout(function(){
      $('.hero').addClass( 'animated rubberBand' );
    }, 1000);
    // $('.feature-items > *').each(function(){
    //   $(this).fadeIn();
    // });
  });

  $('.slides').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.slick-dots button').each(function(){
    $(this).text('');
  });
  $(window).on('resize', function(){
    $('.slick-dots button').each(function(){
      $(this).text('');
    });

  });

  $('.hamburger-toggle').click(function(){
    // $('.hamburger-overlay').fadeIn('fast', function(){
      
    // });
    $('.hamburger-overlay').toggle();
    $('.hamburger-menu').toggle();
    return false;
  });

  $(window).scroll();
});