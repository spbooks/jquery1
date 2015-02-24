$(document).ready(function(){
  $('#celebs ul a').click(function(e) {
    var url = $(this).attr('href');
    $('#biography').load(url);
    e.preventDefault();
  })
});
