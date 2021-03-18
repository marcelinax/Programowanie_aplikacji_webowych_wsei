var personName = 'John';
document.body.innerHTML = "<h1>Hello " + personName + "</h1>";
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.show = function () {
        document.body.innerHTML = "Witaj " + this.firstName + " i " + this.lastName + " mam " + this.age + " lat.";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.show();
