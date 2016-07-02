var updateScoreboard = function () {
	d = new Date();
	yr = d.getFullYear()
	day = d.getDate()

	if (d.getHours()<12){ d.setDate(d.getDate()-1);}
	
	day = ('0' + d.getDate()).slice(-2)
	month = ("0" + (d.getMonth() + 1)).slice(-2)
	var url = "http://gd2.mlb.com/components/game/mlb/year_"+yr+"/month_"+month+"/day_"+day+"/master_scoreboard.json"

	window.alert(url);
	$.ajax({
	    type: "GET",
	    url: url,
	    cache: false,
	    dataType: "json",
	    success: function(data) {
			var soxGame = null;
			var al
			for (var i=0; i<data.data.games.game.length; i++){
				if(data.data.games.game[i].home_team_name=="Red Sox"||data.data.games.game[i].away_team_name=="Red Sox"){
					soxGame = data.data.games.game[i];
				}
			}
			if (!soxGame.linescore){return(null)}
			html = '<table id="linescore">';
			html += '<tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>R</td><td>H</td><td>E</td></tr>';

			inning_line_score = soxGame.linescore.inning

			html += '<tr><td>'+soxGame.away_name_abbrev+'</td>'
			for (var i = 0 ; i < 9 ; i++) {
				if(inning_line_score[i] && inning_line_score[i].away){
					html += '<td>'+inning_line_score[i].away+'</td>';
				} else {
					html += '<td></td>';
				}
			}
			html += '<td>'+soxGame.linescore.r.away+'</td>\
				 <td>'+soxGame.linescore.h.away+'</td>\
				 <td>'+soxGame.linescore.e.away+'</td>'
			html += '</tr>'

			html += '<tr><td>'+soxGame.home_name_abbrev+'</td>'
			for (var i = 0 ; i < 9 ; i++) {
				if(i>=inning_line_score.length){
					html += '<td></td>'
					continue;
				}
				if(inning_line_score[i] && inning_line_score[i].home){
					html += '<td>'+inning_line_score[i].home+'</td>';
				} else {
					html += '<td></td>';
				}
			}
			html += '<td>'+soxGame.linescore.r.home+'</td>\
				 <td>'+soxGame.linescore.h.home+'</td>\
				 <td>'+soxGame.linescore.e.home+'</td>'
			html += '</tr></table>';
			if (soxGame.alerts){
				html += '<p id="scorealert">'+soxGame.alerts.text+'</p>'
			} else {
				html += '<p id="scorealert">'+soxGame.status.status+'</p>'
			}
			html += '</div>';

			$("#scoreboard").html(html);
		} //success close
	});//ajax close
};
$(document).ready(function() {
	updateScoreboard();
	setInterval(updateScoreboard, 10000);
});
