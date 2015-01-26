$(document).ready(function(){
	$(".expandable").hide();
	$(".expand").click(function(){
		$(".expandable").toggle("slow");
		$(".expand").toggle();
	});

});