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
    var date = documement.getElementById('inputDate').value;
    var invalid = "Sorry, but you did not enter a date in the correct format. Please try again.";
    if (checkDate(input) == false) {
        document.getElementById('result').textContent = invalid;
    } else {
        var result1 = getSign(input);
        var result2 = bDayCountdown(input);
        var result3 = calculateAge(input);
        var finalResult = "You are" + result3 "years old, your zodiac sign is" + result1 ", and there are" + result2 "until your next birthday.";
        document.getElementById('result').textcontent = finalResult;
    }
}
clickbutton.addEventListener('click', displayFinalResult;)
