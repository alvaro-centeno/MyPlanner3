function currentDate() {
    var momentDate = moment().format('LLLL');
    $("#currentDay").text(momentDate);
};
currentDate();

var date = new Date();
console.log(date);
var currentHour = date.getHours();


$(".userInput").each(function () {

    if ($(this).attr("time") == currentHour) {
        $(this).addClass("present");
    };

    if ($(this).attr("time") > currentHour) {
        $(this).addClass("future");
    };

    if ($(this).attr("time") < currentHour) {
        $(this).addClass("past");
    };

});

