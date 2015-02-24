$(document).ready(function() {
  var chkSelector = 'tr td:nth-child(1) :checkbox';
  $('#checker').click(function(){
  	$('#celebs ' + chkSelector)
  		.attr('checked', $(this).attr('checked'));	
  });

  $('#celebs ' + chkSelector).click(function(e){
  	var $table = $(this).parents('table');
  	var lastRow = $table.data('lastRow');
  	var thisRow = $(this).parents('tr').index();
  
  	if(lastRow !== undefined && e.shiftKey){
  		var numChecked = 0;
  		var start = lastRow < thisRow ? lastRow : thisRow;
  		var end = lastRow > thisRow ? lastRow : thisRow;
  		$table
  			.find(chkSelector)
  			.slice(start, end)
  			.attr('checked', true);
  	}
  	$table.data('lastRow', thisRow);
  });
});
