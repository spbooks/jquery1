$(document).ready(function(){
  $('<div id="navigation-blob"></div>').css({
		width: $('#navigation li:first a').width() + 10,
		height: $('#navigation li:first a').height() + 10
	}).appendTo('#navigation').hide();

  $('#navigation a').hover(function(){ 
    // Mouse over function
	  $('#navigation-blob').animate(
      {width: $(this).width() + 10, left: $(this).position().left},
	    {duration: 'slow', easing: 'easeOutElastic', queue: false}
    );
  }, function() { 
	  // Mouse out function
	  var leftPosition = $('#navigation li:first a').position().left;
	  $('#navigation-blob').animate(
      {width:'hide'},
			{duration:'slow', easing: 'easeOutCirc', queue:false}
		).animate({left: leftPosition}, 'fast' );
  });
});
