var countDown = document.getElementById('calculate');

function bDayCountDown() {

    var today = new Date();
    var bDay = new Date(document.getElementById('inputDate').value);

    var currentime = today.getTime();
    var bDaytime = bDay.getTime();

    if ((bDaytime - currentime) < 0) {

        bDay.setFullYear(today.getFullYear());

        if ((bDay.getTime() - today.getTime()) < 0) {
            bDay.setFullYear(bDay.getFullYear() + 1);
        }

    }

    var daysuntil = Math.ceil((bDay.getTime() / 86400000) - (today.getTime() / 86400000));

    return daysuntil;

}



function dayDisplay() {
    var days = "There are " + bDayCountDown() + " day(s) until your birthday";

    document.getElementById('days').textContent = days;
}

countDown.addEventListener('click', dayDisplay);
