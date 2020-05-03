function currentDate() {
    var momentDate = moment().format('LLLL');
    $("#currentDay").text(momentDate);
};
currentDate();