var updateXKCD = function () {
	var d = new Date();
	// display only on Mon, Wed, Fri
	if (d.getDay()%2==0){
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
	} else {//displays news on Sun, Tue, Thu, Sat
		document.getElementById("xkcd").innerHTML = "";
		var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
		url += '?' + $.param({
		  'api-key': "e885442cbcb64f48b1660e4f53901d7f"
		});
		$.ajax({
		  url: url,
		  method: 'GET',
		  success: function(data) {
				$("#xkcd").empty().append(
				    $("<h3/>").text(data.results[0].title),
				    $("<h3/>").text(data.results[1].title),
				    $("<h3/>").text(data.results[2].title),
				    $("<h3/>").text(data.results[3].title)
				);
			}
		}).done(function(result) {
		  console.log(result);
		}).fail(function(err) {
		  throw err;
		});
	}
};
$(document).ready(function() {
	updateXKCD();
	setInterval(updateXKCD, 10000000);
});
