var updateMBTA = function () {
	$.ajax({
		url: "http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop=1937&route=39&format=json",
		dataType: "json",
		jsonpCallback: "mbtadata",
		success: function(data) {
			var trips = data.mode[0].route[0].direction[0].trip
			var numTrips = trips.length;
			var predictString = [];
			for (var i=0; i<numTrips; i++) {
			    	var time = trips[i].pre_away;
				var minutes = Math.floor(time / 60);
				var seconds = parseInt(time % 60, 10);
				predictString.push( minutes + ':' + (seconds < 10 ? '0' + seconds : seconds));

			}
			predictString.sort(function(a, b) {
				var aSecs = parseInt(a.split(":")[0])*60 + parseInt(a.split(":")[1]);
				var bSecs = parseInt(b.split(":")[0])*60 + parseInt(b.split(":")[1]);
				if (aSecs < bSecs) {
					return -1;
				}
				if (aSecs > bSecs) {
					return 1;
				}
				return 0;
			});
			$("#mbta").empty().append(
			    $("<h2/>").text("39 Bus Inbound"),
			    $("<h2/>").text(predictString.join(', '))
			);
		}
	});
};
$(document).ready(function() {
    updateMBTA();
    setInterval(updateMBTA, 10000); 
});
