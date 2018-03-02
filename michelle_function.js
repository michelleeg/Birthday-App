var button3 = document.getElementById('calculateAge');

function calculateAge(inputBirthday) {
    var birthday = new Date(inputBirthday);
    var today = new Date();
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}

function displayAge() {
    var input = document.getElementById('inputBirthday').value;
    var age = calculateAge(input);
    document.getElementById('age').textContent = "You are" + calculateAge + "years of age.";
}
button3.addEventListener('click', displayAge);
