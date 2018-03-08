var button = document.getElementById('calculate');

function calculateAge(inputDate) {
    var birthday = new Date(document.getElementById('inputDate').value);
    //var birthday = document.getElementById('inputDate').value
    var today = new Date();
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}

function displayAge() {
    var age = "You are " + calculateAge() + " years of age.";
    document.getElementById('age').textContent = age;
}
button.addEventListener('click', displayAge);
