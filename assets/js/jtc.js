
$("#js-hover-btn")
.on("mouseover",function(){
    $(this).addClass("opacity");
})
.on("mouseleave",function(){
    $(this).removeClass("opacity");
  
})


$('.js-scroll')
.on('click',function(){
    $('body,html').animate({scrollTop:0},500);
})



