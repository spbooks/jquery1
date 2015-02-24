$(document).ready(function(){
  stylesheetToggle();
  
  $(window).resize(stylesheetToggle);
});

  function stylesheetToggle() {
    if($('body').width() > 900) {
      $('<link rel="stylesheet" href="wide.css" type="text/css" media="screen" charset="utf-8"/>')
        .appendTo('head');
    } else {
      $('link[href=wide.css]').remove();
    } 
  }
