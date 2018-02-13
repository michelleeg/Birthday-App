function age {
    this.birthDate = new Date(birthDate);
    var today = new Date();
    this.age = function() {
        return Math.floor((new Date() - this.birthDate)/1000/60/60/24/365);
    }
    return age;
}
