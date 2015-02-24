$(document).ready(function(){
  $('#photo-grid > img').draggable({
    revert: 'invalid'
  });
  $('.trash').droppable({
    activeClass: 'highlight',
    hoverClass: 'highlight-accept',
    drop: function(event, ui) {
      puffRemove($(ui.draggable));
    }
  });
});

function puffRemove(which) {
  var $this = $(which);
  var image_width = 128;
  var frame_count = 5;
  
  // create container
  var $puff = $('<div class="puff"></div>')
    .css({
      height: $this.outerHeight(),
      left: $this.offset().left,
      top: $this.offset().top,
      width: $this.outerWidth(),
      position: 'absolute',
      overflow: 'hidden'
    })
    .appendTo('body');

  // add the animation image
var scale_factor = $this.outerWidth() / image_width;
var $image = $('<img class="puff" src="epuff.png"/>')
  .css({
    width: image_width * scale_factor,
    height: (frame_count * image_width) * scale_factor
  })
  .data('count', frame_count)
  .appendTo($puff);

  // remove the original element
  $this.animate({
    opacity: 0
  }, 'fast').remove();
  
(function animate() {

var count = $image.data('count');

if(count) {
  var top = frame_count - count;
  var height = $image.height() / frame_count;
  $image.css({
    "top": - (top * height),
    'position': 'absolute'
  });
  $puff.css({
    'height': height
  })
  $image.data("count", count - 1);
  setTimeout(animate, 75);
} else {
  $image.parent().remove();
}
})();

}
