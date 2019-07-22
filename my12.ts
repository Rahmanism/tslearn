class Person12 {

    static lastId: number = 0;

    name: string;
    family: string;

    constructor(name: string, family: string) {
        this.name = name;
        this.family = family;
        Person12.lastId++;
    }

    fullName = function (): string {
        return this.name +
            " " + this.family;
    }
}

function register1(person: Person12) {
    console.log(person.name +
        " " + person.family);
}

var p1 = new Person12("Mostafa", "Rahmani");
// p1.name = "Ali";
// p1.family = "Rahmani";
// register1(p1);
console.log(p1.fullName());
console.log("LastId: "+ Person12.lastId);

var p2 = new Person12("Ali", "Rahmani");
console.log(p2.fullName());

console.log("LastId: "+ Person12.lastId);
