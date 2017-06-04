var updateWelcome = function () {
	var d = new Date(); // current time
	var hours = d.getHours();
	var mins = d.getMinutes();
	var day = d.getDay();
	var welcome = "Hello, Dad"
	//$.get("https://dl.dropboxusercontent.com/u/61127052/mirror_message.txt", function(data) {
	//	welcome = data
		// check if welcome message is empty, and if so, use following system
		if (welcome=="Hello, Dad"){
			if ((hours == 16 && mins > 45||hours == 17 && mins < 15) && day!=0 && day!=6){
				welcome = "Hello, Dad";
			} else if (hours == 6 && mins < 45){
				welcome = "Good Morning, Dad";
			} else if (hours < 12 ){ 	// Begin generic welcome messages
				welcome = "Good Morning!";
			} else if (hours < 17 ){ 
				welcome = "Good Afternoonq!";
			} else if (hours < 21 ){ 
				welcome = "Good Evening!";
			} else {
				welcome = "Bedtime!";
			}
		}
		$("#welcome").html("<h1>"+welcome+"</h1>")
	//})

};
$(document).ready(function() {
	updateWelcome();
	setInterval(updateWelcome, 10000); 
});
