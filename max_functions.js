function daysUntilBDay(birthday) {
    var bDay = new Date(birthday);
    var today = new Date();
    var days = Math.floor((bDay.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
    return days;
}




today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!");


var today = new Date();
var birthday = new Date(0, 29, today.getFullYear);
if (today.getMonth > birthday.getMonth && today.getDate > birthday.getDate) {
    birthday.setFullYear(birthday.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log("There are " + Math.ceil((birthday.getTime() - today.getTime()) / (one_day)) + " days until your birthday!");
