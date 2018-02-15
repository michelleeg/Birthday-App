var button1 = document.getElementById('calculateAge');

function daysUntilBDay(birthday) {
    var bDay = new Date(birthday);
    var today = new Date();
    var days = Math.floor((bDay.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
    return days;
}
function calculateAge {
    this.birthDate = new Date(birthDate);
    var today = new Date();
    this.age = function () {
        return Math.floor((new Date() - this.birthDate) / 1000 / 60 / 60 / 24 / 365);
    }
}

function displayAge() {
    var input = document.getElementById('inputNum').value;
    var result = "You are" ;
}
button3.addEventListener('click', displayAge);
