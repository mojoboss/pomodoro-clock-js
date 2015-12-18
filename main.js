$(document).ready(function(){
	//globals
	var timeLeft = parseInt($("#sessionText").text()) * 60 ; // this varible stores the time in seconds
	var sessionRunning = true;
	var breakRunning = false;
	var clockRunning = false; // only change the session and break times when the clock is not running
	var interval = null; // variable for setInterval() function

	//these four click handlers are for setting the session and break time
	$(".break").find(".plus").click(function(){
		if(!clockRunning){
			//console.log("Bplus clicked");
			var text = parseInt($("#breakText").text());
			if(text <= 1440)
				text = text + 1;
			$("#breakText").html(text);
		}
	});
	$(".break").find(".minus").click(function(){
		if(!clockRunning){
			//console.log("Bminus clicked");
			var text = parseInt($("#breakText").text());
			if(text > 1)
				text = text - 1;
			$("#breakText").html(text);
		}
	});
	$(".session").find(".plus").click(function(){
		if(!clockRunning){
			//console.log("Splus clicked");
			var text = parseInt($("#sessionText").text());
			if(text <= 1440)
				text = text + 1;
			$("#sessionText").html(text);
			timeLeft = text * 60;
		}
	});
	$(".session").find(".minus").click(function(){
		if(!clockRunning){
			//console.log("Sminus clicked");
			var text = parseInt($("#sessionText").text());
			if(text > 1)
				text = text - 1;
			$("#sessionText").html(text);
			timeLeft = text * 60;
		}
	});

	//click handler for clock
	$(".clock").click(function(){
		if(!clockRunning){
			interval = setInterval(function(){ update(); }, 1000);
			clockRunning = true;
		}
		else{
			clockRunning = false;
			clearInterval(interval);
		}
	});
	
	//for running and updating the timer, switching between session and break times, and displaying the time
	function update(){
		//switch from session to break
		if(timeLeft == 0 && sessionRunning == true){
			sessionRunning = false;
			breakRunning = true;
			timeLeft = parseInt($("#breakText").text()) * 60;
			$("#clockText").html("Break");
		}
		//switch from break to switch
		else if(timeLeft == 0 && breakRunning == true){
			breakRunning = false;
			sessionRunning = true;
			timeLeft = parseInt($("#sessionText").text()) * 60;
			$("#clockText").html("Session");	
		}
		//calculating hr, min and seconds
		var hours = parseInt(timeLeft/3600); 
		var minutes = parseInt( (timeLeft - hours * 3600) / 60 ); 
		var seconds = parseInt(  timeLeft - hours * 3600 - minutes * 60); 
		//console.log(hours, minutes, seconds);
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