var updateMBTA = function () {
	var key = "gZy1MzcaiUmM3urqsYGpQQ";
	var route = "39";
	var stop = "1937";
	var mbtaurl = "http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key="+key+"&stop="+stop+"&route="+route+"&format=json";
	$.ajax({
		url: mbtaurl,
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
			    $("<h2/>").text(data.mode[0].mode_name + " "+data.mode[0].route[0].route_name+" "+data.mode[0].route[0].direction[0].direction_name),
			    $("<h2/>").text(predictString.join(', '))
			);
		}
	});
};
$(document).ready(function() {
	updateMBTA();
	setInterval(updateMBTA, 10000); 
});
