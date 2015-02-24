$(document).ready(function(){
  $('#eulaOpen').click(function() {
    openDialog('#eula');
  });
  $('#eula')
  .find('.ok, .cancel')
  .live('click', function() {
  	closeDialog(this);
  })
  .end()
  .find('.ok')
  .live( 'click', function(){
  	// Clicked Agree!
    console.log('clicked agree!');
  })
  .end()
  .find('.cancel')
  .live('click', function() {
  	// Clicked disagree!
    console.log('clicked disagree!');
  });
});

function openDialog(selector) {
	$(selector)
		.clone()
		.show()
		.appendTo('#overlay')
		.parent()
		.fadeIn('fast');
}
  
function closeDialog( selector ) {
$(selector)
	.parents('#overlay')
	.fadeOut('fast', function() {
		$(this)
			.find('.dialog')
			.remove();
	});
}