$(document).ready(function(){
      $('.productSlider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',
        autoplay:true,
        mobileFirst:true,
      });
    });
    