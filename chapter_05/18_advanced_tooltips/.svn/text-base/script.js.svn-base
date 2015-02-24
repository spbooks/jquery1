var TT = {
  delay: 600,
  
  setTips: function(){
    
    $('.tooltip').parent().hover(function(){
      // store the tooltip being hovered
      TT.current = $(this);
      TT.timer = setTimeout(function(){
        // find the tooltip, 
        TT.current.find(".tooltip").fadeIn('fast');
      }, TT.delay);
    }, function(){
      // on mouseout, clear timer and hide tooltip
      clearTimeout(TT.timer);
      $(this).find(".tooltip").fadeOut('fast');
    }).attr("title", ""); // clear the title to stop browser tooltips
    
    var screenWidth = $(window).width();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
    $(".tooltip").each(function(){
      // grab the containing element
      $container = $(this).parent();
      
      // give it relative position if required
      if ($container.css("position") != 'absolute' 
          && $container.css("position") != "fixed") {
        $container.css({position: 'relative'});
      }
      
      var totalHeight = $container.height() + $(this).outerHeight();
      var width = $(this).outerWidth();
      var offset = $container.offset();
      
      // now we get the position the tip
      var top = $container.height(); // default placement
      var left = 0;
      
      // re-position if it's off the right of the screen
      if (offset.left + width > screenWidth) {
        left = 0 - width + 42;
        $(this).addClass('left');
      } else {
        $(this).removeClass('left');
      }
      
      // re-position if it's off the bottom of the screen
      if (offset.top + totalHeight > screenBottom) {
        top = 0 - $(this).outerHeight();
        $(this).addClass('above');
      } else {
        $(this).removeClass('above');
      }
      
      // finally set the css properties to position onscreen
      $(this).css({
        "top": top,
        "left": left
      });
    });
  }
}
  
$(document).ready(function() {
  TT.setTips();
});

$(window).resize(function(){
  TT.setTips();
});
