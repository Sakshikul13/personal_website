$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay:true,
        nav:false,
        dots:true
    });
});
