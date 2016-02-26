$(document).ready(function() {

	$("#navBar a").click(function(){
		$("#navBar a").removeClass('underline');
		$(this).addClass('underline');
	});
});
