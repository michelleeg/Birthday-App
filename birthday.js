var signButton = document.getElementByid("getSign");



this.getSign = function () {
    var date = new Date(birthdate);
    var month = date.getMonth();
    var day = date.getDate();
    if (month == 0) {
        if (day <= 20) {
            return "Capricorn";
        } else if (day > 20) {
            return "Aquarius";
        }
    } else if (month == 1) {
        if (day <= 19) {
            return "Aquarius";
        } else if (day > 19) {
            return "Pisces";
        }
    } else if (month == 2) {
        if (day <= 20) {
            return "Pisces";
        } else if (day > 20) {
            return "Aries";
        }
    } else if (month == 3) {
        if (day <= 20) {
            return "Aries";
        } else if (day > 20) {
            return "Taurus";
        }
    } else if (month == 4) {
        if (day <= 21) {
            return "Taurus";
        } else if (day > 21) {
            return "Gemini";
        }
    } else if (month == 5) {
        if (day <= 21) {
            return "Gemini";
        } else if (day > 21) {
            return "Cancer";
        }
    } else if (month == 6) {
        if (day <= 22) {
            return "Cancer";
        } else if (day > 22) {
            return "Leo";
        }
    } else if (month == 7) {
        if (day <= 22) {
            return "Leo";
        } else if (day > 22) {
            return "Virgo";
        }
    } else if (month == 8) {
        if (day <= 23) {
            return "Virgo";
        } else if (day > 23) {
            return "Libra";
        }
    } else if (month == 9) {
        if (day <= 23) {
            return "Libra";
        } else if (day > 23) {
            return "Scorpio";
        }
    } else if (month == 10) {
        if (day <= 22) {
            return "Scorpio";
        } else if (day > 22) {
            return "Sagittarius";
        }
    } else if (month == 11) {
        if (day <= 21) {
            return "Sagittarius";
        } else if (day > 21) {
            return "Capricorn";
        }

    }

signButton.addEventListener('click',getSign);

}

var countDown = document.getElementById('calculate');

function bDayCountDown() {

    var today = new Date();
    var bDay = new Date(document.getElementById('calculateCountdown').value);
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
    var days = bDayCountDown();

    document.getElementById('days').textContent = days;
}

countDown.addEventListener('click', dayDisplay);


