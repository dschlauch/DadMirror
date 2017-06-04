// Docs at http://simpleweatherjs.com
var updateWeather = function () {
  $.simpleWeather({
    location: '',
    woeid: '2457514',
    unit: 'f',
    success: function(weather) {
        var skycons = new Skycons({"color": "white"});
	var humidity = weather.humidity
	var sunrise = weather.sunrise.split(":")[0] + ":" + (parseInt(weather.sunrise.split(":")[1])<10 ? ('0'+weather.sunrise.split(":")[1]):weather.sunrise.split(":")[1]);
	var sunset = weather.sunset.split(":")[0] + ":" + (parseInt(weather.sunset.split(":")[1])<10 ? ('0'+weather.sunset.split(":")[1]):weather.sunset.split(":")[1]);
          html = '<canvas id="weather-icon" width="128" height="128"></canvas><h2> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
          html += '<div>Needham</div>';
          html += '<div><i class="fa fa-angle-up"></i>  High '+weather.high + ' <i class="fa fa-angle-down"></i>  Low ' + weather.low + '</div>'
          html += '<div>'+weather.currently+', '+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+', Humidity:' +humidity+'%</div>';
          html += '<div>Sunrise: '+sunrise+', Sunset: '+sunset+'</div>';
          html += '<div id="forecast"><table id="table_forecast"> \
		<tr>\
		    <td></td>\
		    <td>'+weather.forecast[1].day+'</td>\
		    <td>'+weather.forecast[2].day+'</td>\
		    <td>'+weather.forecast[3].day+'</td>\
		    <td>'+weather.forecast[4].day+'</td>\
		    <td>'+weather.forecast[5].day+'</td>\
		  </tr>\
		  <tr>\
		    <td></td>\
		    <td><img src="'+weather.forecast[1].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[2].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[3].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[4].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[5].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		  </tr>\
		  <tr>\
		    <td><i class="fa fa-angle-up"></i></td>\
		    <td>'+weather.forecast[1].high+'</td>\
		    <td>'+weather.forecast[2].high+'</td>\
		    <td>'+weather.forecast[3].high+'</td>\
		    <td>'+weather.forecast[4].high+'</td>\
		    <td>'+weather.forecast[5].high+'</td>\
		  </tr>\
		  <tr>\
		    <td><i class="fa fa-angle-down"></i></td>\
		    <td>'+weather.forecast[1].low+'</td>\
		    <td>'+weather.forecast[2].low+'</td>\
		    <td>'+weather.forecast[3].low+'</td>\
		    <td>'+weather.forecast[4].low+'</td>\
		    <td>'+weather.forecast[5].low+'</td>\
		  </tr>\
		</table></div>';
          html += '<div>Updated: '+weather.title.split('at')[1].split("EDT")[0]+'</div>';
          $("#weather").html(html);

         switch(parseInt(weather.code)) {
            case 0:
                var animation = 'sleet';
                break;
            case 1:
                var animation = 'sleet';
                break;
            case 2:
                var animation = 'sleet';
                break;
             case 3:
                var animation = 'sleet';
                break;                       
             case 4:
                var animation = 'sleet';
                break;
             case 5:
                var animation = 'snow';
                break;
             case 6:
                var animation = 'snow';
                break;
             case 7:
                var animation = 'snow';
                break;
             case 8:
                var animation = 'snow';
                break;
             case 9:
                var animation = 'rain';
                break;
             case 10:
                var animation = 'snow';
                break;
             case 11:
                var animation = 'rain';
                break;
             case 12:
                var animation = 'rain';
                break;
             case 13:
                var animation = 'snow';
                break; 
             case 14:
                var animation = 'snow';
                break;
             case 15:
                var animation = 'snow';
                break;
             case 16:
                var animation = 'snow';
                break;
             case 17:
                var animation = 'sleet';
                break;
             case 18:
                var animation = 'sleet';
                break;
             case 19:
                var animation = 'fog';
                break;
             case 20:
                var animation = 'fog';
                break;
             case 21:
                var animation = 'fog';
                break;
             case 22:
                var animation = 'fog';
                break;
             case 23:
                var animation = 'wind';
                break;
             case 24:
                var animation = 'wind';
                break;
             case 25:
                var animation = 'cloudy';
                break;
            case 26:
                var animation = 'cloudy';
                break; 
             case 27:
                var animation = 'partly-cloudy-night';
                break;
             case 28:
                var animation = 'partly-cloudy-day';
                break;
             case 29:
                var animation = 'partly-cloudy-night';
                break;
             case 30:
                var animation = 'partly-cloudy-day';
                break;
             case 31:
                var animation = 'clear-night';
                break;
             case 32:
                var animation = 'clear-day';
                break;
             case 33:
                var animation = 'clear-night';
                break;
             case 34:
                var animation = 'clear-day';
                break;
             case 35:
                var animation = 'sleet';
                break;
             case 36:
                var animation = 'clear-day';
                break;
             case 37:
                var animation = 'sleet';
                break;
             case 38:
                var animation = 'sleet';
                break;
             case 39:
                var animation = 'sleet';
                break;
             case 40:
                var animation = 'rain';
                break;
             case 41:
                var animation = 'snow';
                break;
             case 42:
                var animation = 'snow';
                break;
             case 43:
                var animation = 'snow';
                break;
             case 44:
                var animation = 'partly-cloudy-day';
                break;
             case 45:
                var animation = 'sleet';
                break;
             case 46:
                var animation = 'snow';
                break;
             case 46:
                var animation = 'sleet';
                break;                
            default:
                var animation = 'clear-day';
        } 

          skycons.remove('weather-icon')
          // you can add a canvas by it's ID...
          console.log(animation);
          skycons.add("weather-icon", animation);

          // ...or by the canvas DOM element itself.

          // if you're using the Forecast API, you can also supply
          // strings: "partly-cloudy-day" or "rain".

          // start animation!
          skycons.play();
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
};
var updateWareham = function () {
  $.simpleWeather({
    location: '',
    woeid: '2359460',
    unit: 'f',
    success: function(weather) {
        var skycons = new Skycons({"color": "white"});
	var humidity = weather.humidity
	var sunrise = weather.sunrise.split(":")[0] + ":" + (parseInt(weather.sunrise.split(":")[1])<10 ? ('0'+weather.sunrise.split(":")[1]):weather.sunrise.split(":")[1]);
	var sunset = weather.sunset.split(":")[0] + ":" + (parseInt(weather.sunset.split(":")[1])<10 ? ('0'+weather.sunset.split(":")[1]):weather.sunset.split(":")[1]);
          html = '';
          html += '<div>Wareham</div>';
          html += '<div id="forecast"><table id="table_forecast"> \
		<tr>\
		    <td></td>\
		    <td>'+weather.forecast[1].day+'</td>\
		    <td>'+weather.forecast[2].day+'</td>\
		    <td>'+weather.forecast[3].day+'</td>\
		    <td>'+weather.forecast[4].day+'</td>\
		    <td>'+weather.forecast[5].day+'</td>\
		  </tr>\
		  <tr>\
		    <td></td>\
		    <td><img src="'+weather.forecast[1].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[2].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[3].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[4].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		    <td><img src="'+weather.forecast[5].thumbnail+'" alt="pic" height="40" width="40"/></td>\
		  </tr>\
		  <tr>\
		    <td><i class="fa fa-angle-up"></i></td>\
		    <td>'+weather.forecast[1].high+'</td>\
		    <td>'+weather.forecast[2].high+'</td>\
		    <td>'+weather.forecast[3].high+'</td>\
		    <td>'+weather.forecast[4].high+'</td>\
		    <td>'+weather.forecast[5].high+'</td>\
		  </tr>\
		  <tr>\
		    <td><i class="fa fa-angle-down"></i></td>\
		    <td>'+weather.forecast[1].low+'</td>\
		    <td>'+weather.forecast[2].low+'</td>\
		    <td>'+weather.forecast[3].low+'</td>\
		    <td>'+weather.forecast[4].low+'</td>\
		    <td>'+weather.forecast[5].low+'</td>\
		  </tr>\
		</table></div>';
          $("#weather2").html(html);

    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
};
$(document).ready(function() {
    updateWeather();
    updateWareham();
    setInterval(updateWeather, 300000);
    setInterval(updateWareham, 3000000);
});
