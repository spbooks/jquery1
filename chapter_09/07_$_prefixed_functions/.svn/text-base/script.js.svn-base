$(document).ready(function() { 
  var searchTerm = 'celebs';
  $.getJSON( "http://search.twitter.com/search.json?q=" + searchTerm + "&callback=?", function(data) {
    $.each(data.results, function() {
      $('<div></div>')
        .hide()
        .append('<img src="' + this.profile_image_url + '" />' )
        .append('<span><a href="http://www.twitter.com/' 
          + this.from_user + '">' + this.from_user 
          + '</a>&nbsp;' + this.text + '</span>') 
        .append('<span class="time">' + $.lapsed(this.created_at) + '</span>')
        .appendTo('#tweets')
        .fadeIn();
    });
  });

});

(function($){
  $.lapsed = function(time) {
    var then = new Date(Date.parse(time));
    var now = new Date();
    var minutes = Math.round((now-then) / 60000);
    var lapsed;
    
    // Determine pretty time
    if(minutes == 0) {
      var seconds = Math.round((now - then) / 1000);
      if (seconds < 10) {
        lapsed = "less than 10 seconds ago";
      } 
      else if (seconds < 20) {
        lapsed = "less than 20 seconds ago";
      }
      else {
        lapsed = "half a minute ago";
      }
    }
    else if (minutes == 1) {
      var seconds = Math.round((now-then) / 1000); 
      if (seconds == 30) {
        lapsed = "half a minute ago";
      } else if (seconds < 60) {
   	    lapsed = "less than a minute ago";
      } else {
        lapsed = "1 minute ago";
      }
    } else {
      lapsed = "more than a minute ago";
    }
    return lapsed;
  };
})(jQuery);
