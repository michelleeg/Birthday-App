var signButton = document.getElementById('calculate');

function getSign() {
    var date = new Date(document.getElementById('inputDate').value);
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

function displaySign() {
    var result = getSign();
    document.getElementById('signText').textContent = result;
}

signButton.addEventListener('click', displaySign);
