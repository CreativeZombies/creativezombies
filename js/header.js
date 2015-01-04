

$( window ).scroll(function() {
  //$( "span" ).css( "display", "inline" ).fadeOut( "slow" );
  console.log("scroll:" + $(document).scrollTop());
  
    if($(document).scrollTop()> 750){ // will require some maths because it changes with the height of the screen
        $(".navbar-nav").css("margin-top","0");
        $(".navbar-nav>li").css("padding-bottom","10px");
        $(".navbar-inverse .navbar-brand ").css("line-height","30px");
    } else{
        
        $(".navbar-nav").css("margin-top","12px");
        $(".navbar-nav>li").css("padding-bottom", "28px");
        $(".navbar-inverse .navbar-brand ").css("line-height","50px");

    }
    
});
