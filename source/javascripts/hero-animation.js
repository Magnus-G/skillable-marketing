var scrollSpeed = 70;
    // set the default position
    var current = 0;
    // set the direction
    var direction = 'h';
    function bgscroll(){
        // 1 pixel row at a time
        current -= 1;
        // move the background with backgrond-position css properties
        $('div.hero').css("backgroundPosition", (direction == 'v') ? 
        current+"px 0" : "0 " + current+"px");
    }
    //Calls the scrolling function repeatedly
     setInterval(bgscroll, scrollSpeed);    
