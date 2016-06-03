        
	  var updateXKCD = function () {
		$.ajax({
		    url: "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?",
		    dataType: "json",
		    jsonpCallback: "xkcddata",
		    success: function(data) {
			$("#xkcd").append(
			    $("<h1/>").text(data.title),
			    $("<img/>").attr({
				src: data.img,
				title: data.alt,
				alt: data.title,
				width: "400px"
			    })
			);
		    }
		});

        };
        $(document).ready(function() {
            updateXKCD();
            setInterval(updateXKCD, 10000000);
        });
