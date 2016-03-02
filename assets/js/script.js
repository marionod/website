
$(document).ready(function() {

	$("#homeTab").addClass('underline');

	$("#navBar a").click(function(){
		$("#navBar a").removeClass('underline');
		$(this).addClass('underline');
	});
});
