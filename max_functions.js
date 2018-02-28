function birthdayCountDown() {

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
