$(document).ready(function(){
  $('#photos').click(function(){
    var numberOfPics = $(this).find('div > img').length;
    var last = $(this).data('last');
    var next = Math.floor(Math.random() * numberOfPics);

    
    if(next == last) {
      next = (next + 1) % numberOfPics;
    }
    
    $(this)
    .data('last', next)
    .scrollTo('#photos_inner>img:eq(' + next + ')', {duration: 1000});
  });
});
