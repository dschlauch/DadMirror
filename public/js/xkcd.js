var updateXKCD = function () {
	var d = new Date();
	// display only on Mon, Wed, Fri
	if (d.getDay()%2==1){
		$.ajax({
			url: "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?",
			dataType: "json",
			jsonpCallback: "xkcddata",
			success: function(data) {
				$("#xkcd").empty().append(
				    $("<h1/>").text(data.title),
				    $("<img/>").attr({
					src: data.img,
					title: data.alt,
					alt: data.title,
					width: "400px"
				    }),
				    $("<h5/>").text(data.alt)
				);
			}
		});
	} else {
		document.getElementById("xkcd").innerHTML = "";
	}
};
$(document).ready(function() {
	updateXKCD();
	setInterval(updateXKCD, 10000000);
});
