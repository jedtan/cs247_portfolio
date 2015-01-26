$(document).ready(function(){
	$("#collapse-mobile").click(function(){
		$(".mobile-applications").toggle("fast");
	});
	$("#collapse-web").click(function(){
		$(".web-design").toggle("fast");
	});
	$("#collapse-proj").click(function(){
		$(".other-projects").toggle("fast");
	});

	$(".load-project").click(function(){
		var file_name = $(this).attr('id') + '.html';
		$.get(file_name, function (data) {
            $("#project-text").html(data);
        });
	});	

});