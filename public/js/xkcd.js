        
	  var updateXKCD = function () {
		    var d = new Date();
		    var n = d.getDay()%2
		    if (n==1){
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
	var updateMBTA = function () {
		$.ajax({
				url: "http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop=1937&route=39&format=json",
				dataType: "json",
				jsonpCallback: "mbtadata",
				success: function(data) {
					var trips = data.mode[0].route[0].direction[0].trip
					var numTrips = trips.length;
					var predictString = [];
					for (var i = 0; i < numTrips; i++) {
					    	var time = trips[i].pre_away;
						var minutes = Math.floor(time / 60);
						var seconds = parseInt(time % 60, 10);
						predictString.push( minutes + ':' + (seconds < 10 ? '0' + seconds : seconds));

					}
					$("#mbta").empty().append(
					    $("<h2/>").text("39 Bus Inbound"),
					    $("<h2/>").text(predictString.join(', '))
					);
				}
			});
	};
        $(document).ready(function() {
            updateXKCD();
	    updateMBTA();
	    setInterval(updateMBTA, 5000); 
            setInterval(updateXKCD, 10000000);
        });
