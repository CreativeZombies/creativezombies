
  //console.log("size:" + $(window).height());
$( window ).scroll(function() {
  //$( "span" ).css( "display", "inline" ).fadeOut( "slow" );
  //console.log("scroll:" + $(document).scrollTop());

  
    if($(document).scrollTop()> ($(window).height() - 84)){ // by some quick observation 
        $(".navbar-nav").css("margin-top","0");
        $(".navbar-nav>li").css("padding-bottom","10px");
        $(".navbar-inverse .navbar-brand ").css("line-height","30px");
        $("nav").css("opacity","1");
    } else{
        
        $(".navbar-nav").css("margin-top","12px");
        $(".navbar-nav>li").css("padding-bottom", "28px");
        $(".navbar-inverse .navbar-brand ").css("line-height","50px");
        $("nav").css("opacity","0.75");

    }
    
});
