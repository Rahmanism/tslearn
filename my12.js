class Person12 {
    constructor(name, family) {
        this.fullName = function () {
            return this.name +
                " " + this.family;
        };
        this.name = name;
        this.family = family;
        Person12.lastId++;
    }
}
Person12.lastId = 0;
function register1(person) {
    console.log(person.name +
        " " + person.family);
}
var p1 = new Person12("Mostafa", "Rahmani");
// p1.name = "Ali";
// p1.family = "Rahmani";
// register1(p1);
console.log(p1.fullName());
console.log("LastId: " + Person12.lastId);
var p2 = new Person12("Ali", "Rahmani");
console.log(p2.fullName());
console.log("LastId: " + Person12.lastId);
