$(document).ready(function(){
  $("form").submit( function(){
  	var error = false;
  	$(this).find(":text").each(function(){
  		if ($(this).val().length == 0) {
  			alert("Textboxes must have a value!");
  			$(this).focus();
  			error = true;
  			return false; // Only exits the “each” loop
  		}
  	});
  	if (error) {
  		return false;
  	}
  	return true;
  });
});

