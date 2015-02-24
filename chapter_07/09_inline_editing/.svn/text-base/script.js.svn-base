$(document).ready(function(){
  $('.editable, .editable-area')
    .hover(function() {
      $(this).toggleClass('over-inline');
    })

    .click(function(e) {
      // start the inline editing
      var $editable = $(this);
      if($editable.hasClass('active-inline')) {
        return;
      }
      var contents = $.trim($editable.html());
      $editable
        .addClass('active-inline')
        .empty();
      
      // Determine what kind of form element we need
      var editElement = $editable.hasClass('editable') ? 
        '<input type="text" />' : '<textarea></textarea>';

      // Replace the target with the form element
      $(editElement)
        .val(contents)
        .appendTo($editable)
        .focus()
        .blur(function(e) {
          $editable.trigger('blur');
        });
    })
    
.blur(function(e) {
  // end the inline editing
  var $editable = $(this);
  
  var contents = $editable.find(':first-child:input').val();
  $editable.contents().replaceWith('<em class="ajax">Saving ... </em>');
  
  // post the new value to the server along with its ID
  $.post('save',
    {id: $editable.attr('id'), value: contents},
    function(data) {
      $editable
        .removeClass('active-inline')
        .contents()
        .replaceWith(contents);
    });
});
});