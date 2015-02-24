$(document).ready(function(){
  $('.location').hover(function(e){
    // Hover over code
    var titleText = $(this).attr('title');
    $(this)
      .data('tipText', titleText)
      .removeAttr('title');
      
    $('<p class="tooltip"></p>')
      .text(titleText)
      .appendTo('body')
      .css('top', (e.pageY - 10) + 'px')
      .css('left', (e.pageX + 20) + 'px')
      .fadeIn('slow');
  }, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(e){
    // Mouse move code
    $('.tooltip')
      .css('top', (e.pageY - 10) + 'px')
      .css('left', (e.pageX + 20) + 'px');
  });
});
