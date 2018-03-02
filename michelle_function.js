var button3 = document.getElementById('calculate');

function calculateAge(inputDate) {
    var birthday = new Date(inputDate);
    //var birthday = document.getElementById('inputDate').value
    var today = new Date();
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}

function displayAge() {
    var age = calculateAge(inputDate);
    document.getElementById('age').textContent = "You are " + age + " years of age.";
}
button3.addEventListener('click', displayAge);
