var Person = /** @class */ (function () {
    function Person(name, family) {
        this.fullName = function () {
            return this.name +
                " " + this.family;
        };
        this.name = name;
        this.family = family;
    }
    return Person;
}());
function register2(person) {
    console.log(person.name +
        " " + person.family);
}
var m = new Person("Mostafa", "Rahmani");
m.name = "Ali";
// m.family = "Rahmani";
register2(m);
console.log(m.fullName());
var Per = /** @class */ (function () {
    function Per(name) {
        this.add = function (name) {
            return this.name;
        };
        this.name = name;
    }
    return Per;
}());
var m2 = new Per("Ali");
console.log(m2.add("Hosein"));
