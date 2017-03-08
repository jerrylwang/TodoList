//Click off speicifc todos by cliking
$("li").click(function(){
	$(this).toggleClass("completed");
});


//Click on X to delete todos
$("span").click(function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

