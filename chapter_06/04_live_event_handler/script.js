$(document).ready(function(){
  $('#celebs ul a').click(function(e) {
    var url = $(this).attr('href') + ' #description';
    $('#biography').html('loading...').load(url);
    e.preventDefault();
  })
  $('#description').live('mouseover', function() {
    $(this).css('background-color', 'yellow');
  });
  $('#description').live('mouseout', function() {
    $(this).css('background-color', 'inherit');
  });
});
