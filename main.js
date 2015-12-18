$(document).ready(function(){
	//globals
	var timeLeft = parseInt($("#sessionText").text()) * 60;
	var sessionRunning = true;
	var breakRunning = false;
	//console.log(timeLeft, sessionRunning, breakRunning);
	//console.log("ready");
	//these four click handlers are for setting the session and break timer
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

	//click handler for clock
	$(".clock").click(function(){
		var interval = setInterval(function(){ update(); }, 1000);
	});
	
	//for running the timer
	function update(){
		if(timeLeft == 0 && sessionRunning == true){
			sessionRunning = false;
			breakRunning = true;
			timeLeft = parseInt($("#breakText").text()) * 60;
			$("#clockText").html("Break");
		}
		else if(timeLeft == 0 && breakRunning == true){
			breakRunning = false;
			sessionRunning = true;
			timeLeft = parseInt($("#sessionText").text()) * 60;
			$("#clockText").html("Session");	
		}
		var hours = parseInt(timeLeft/3600); console.log(hours);
		var minutes = parseInt( (timeLeft - hours * 3600) / 60 ); console.log(minutes);
		var seconds = parseInt(  timeLeft - hours * 3600 - minutes * 60); console.log(seconds);
		if (hours < 10){
			var H = "0" + hours;
		}
		else{
			var H = hours;	
		}
		if (minutes < 10){
			var M = "0" + minutes;
		}
		else{
			var M = minutes;	
		}
		if (seconds<10){
			var S = "0" + seconds;
		}
		else{
			var S = seconds;	
		}
		var clockTime = H + ":" + M + ":" + S ;
		$("#clockTextTime").html(clockTime);
		timeLeft = timeLeft - 1;
	}


});