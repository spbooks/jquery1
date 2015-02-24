$(document).ready(function(){
  $('a[href=#]').click(function(){
    $.scrollTo(0,'slow');
    return false;
  });
});
