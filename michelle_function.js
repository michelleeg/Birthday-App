var button1 = document.getElementById('calculateAge');

function calculateAge(inputNum) {
    this.birthDate = new Date(birthDate);
    var today = new Date();
    this.age = function () {
        return Math.floor((new Date() - this.birthDate) / 1000 / 60 / 60 / 24 / 365);
    }
}

function displayAge() {
    var input = document.getElementById('inputNum').value;
    var age = calculateAge(input);
    document.getElementById('age').textContent = "You are" + calculateAge + "years of age.";
}
button3.addEventListener('click', displayAge);
