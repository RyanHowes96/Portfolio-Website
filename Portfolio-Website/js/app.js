$(document).ready(function(){
  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll>=50){
      $(".sticky").addClass("stickyadd");
    }else{
      $(".sticky").removeClass("stickyadd");
    }
  })
})

var filterizd = $('.filter-container').filterizr({
   animationDuration: .5,

});
