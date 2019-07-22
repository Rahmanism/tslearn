class Person {
    constructor(name, family) {
        this.fullName = function () {
            return this.name +
                " " + this.family;
        };
        this.name = name;
        this.family = family;
    }
}
function register1(person) {
    console.log(person.name +
        " " + person.family);
}
var m = new Person("Mostafa", "Rahmani");
m.name = "Ali";
// m.family = "Rahmani";
register1(m);
console.log(m.fullName());
class Per {
    constructor(name) {
        this.add = function (name) {
            return this.name;
        };
        this.name = name;
    }
}
var m2 = new Per("Ali");
console.log(m2.add("Hosein"));
