var updateWelcome = function () {
	var d = new Date(); // current time
	var hours = d.getHours();
	var mins = d.getMinutes();
	var day = d.getDay();
	var welcome = "Hi!"
	if ((hours == 16 && mins > 45||hours == 17 && mins < 15) && day!=0 && day!=6){
		welcome = "Welcome Home, Jen";
	} else if (hours == 17 && mins >= 15){
		welcome = "Don't forget to feed the animals!";
	} else if (hours == 12){
		welcome = "What's for lunch?";
	} else if (hours == 6 && mins < 45){
		welcome = "Good Morning, Jen";
	} else if (hours == 6 && mins >= 45){
		welcome = "You're gonna be late for work, Jen!";
	} else if (hours < 12 ){ 	// Begin generic welcome messages
		welcome = "Good Morning!";
	} else if (hours < 17 ){ 
		welcome = "Good Afternoon!";
	} else if (hours < 21 ){ 
		welcome = "Good Evening!";
	} else {
		welcome = "Bedtime!";
	}
	$("#welcome").html("<h1>"+welcome+"</h1>")
};
$(document).ready(function() {
	updateWelcome();
	setInterval(updateWelcome, 10000); 
});
