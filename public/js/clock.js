var datetime = null,
date = null;

var update = function () {
    date = moment(new Date())
    var html = '<p>' + date.format('dddd, MMMM Do') + '</p>';
    html += '<p id="time">' + date.format('h:mm') + '</p>';
    datetime.html(html);
};

$(document).ready(function() {
    datetime = $('#date');
    update();
    setInterval(update, 60000);
});
