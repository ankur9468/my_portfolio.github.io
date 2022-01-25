$(document).ready(function(){
    $(".slider").slick({
        arrows:false ,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots',
        slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
         
    });
    // $('.autoplay').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1200,
    //   });
    
});
$(document).ready(function(){
  $(".sliders").slick({
      arrows:false ,
      dots:true,
      appendDots:'.slider-dotss',
      dotsClass:'dots',
      slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
       
  });
  

let hamberger =document.querySelector('.hamberger');
let times=document.querySelector('.times');
let mobilenav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
  mobilenav.classList.add('open')
})
times.addEventListener('click',function(){
  mobilenav.classList.remove('open')
  
})
});


  