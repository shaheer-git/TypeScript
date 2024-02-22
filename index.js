var firstName = "Mohammed";
var lastName = "shaheer";
var age = 22;
var Human = /** @class */ (function () {
    function Human(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Human.prototype.displayPersonsDetails = function () {
        console.log(firstName);
        console.log(lastName);
        console.log(age);
    };
    Human.prototype.displayPersonsName = function () {
        return alert(firstName);
    };
    return Human;
}());
var person = new Human(firstName, lastName, age);
person.displayPersonsDetails();
person.displayPersonsName();
