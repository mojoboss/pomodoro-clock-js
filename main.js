$(document).ready(function(){
	//console.log("ready");
	$(".break").find(".plus").click(function(){
		console.log("Bplus clicked");
		var text = parseInt($("#breakText").text());
		if(text <= 1440)
			text = text + 1;
		$("#breakText").html(text);
	});
	$(".break").find(".minus").click(function(){
		console.log("Bminus clicked");
		var text = parseInt($("#breakText").text());
		if(text > 1)
			text = text - 1;
		$("#breakText").html(text);
	});


	$(".session").find(".plus").click(function(){
		console.log("Splus clicked");
		var text = parseInt($("#sessionText").text());
		if(text <= 1440)
			text = text + 1;
		$("#sessionText").html(text);
	});
	$(".session").find(".minus").click(function(){
		console.log("Sminus clicked");
		var text = parseInt($("#sessionText").text());
		if(text > 1)
			text = text - 1;
		$("#sessionText").html(text);
	});
});