var birthdayButton = document.getElementById('calculateAll');


function getSign(input) {
    var date = new Date(input);
    var month = date.getMonth();
    var day = date.getDate();
    var sign = "";

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

};

function bDayCountDown(input) {

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


function calculateAge(input) {
    var birthday = new Date(document.getElementById('inputDate').value);
    //var birthday = document.getElementById('inputDate').value
    var today = new Date();
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}


function checkDate(input) {
    if (input.length != 10) {
        return false;
    } else {
        var check1 = str.substring(2, 3);
        var check2 = str.substring(5, 6);
        if (check1 == "/" && check2 == "/") {
            return false;
        }
        var date = new Date(input);
        if (isNaN(date.getTime()) == true) {
            return false;

        }
    }
    return true;
}

function displayFinalResult() {
    var date = document.getElementById('inputDate').value;
    var invalid = "Sorry, but you did not enter a date in the correct format. Please try again.";
    if (checkDate(input) == false) {
        document.getElementById('result').textContent = invalid;
    } else {
        var result1 = getSign(input);
        var result2 = bDayCountdown(input);
        var result3 = calculateAge(input);
        var finalResult = "You are" + result3 + "years old, your zodiac sign is" + result1 + ", and there are" + result2 + "until your next birthday.";
        document.getElementById('result').textContent = finalResult;
    }
};

birthdayButton.addEventListener('click', displayFinalResult);

