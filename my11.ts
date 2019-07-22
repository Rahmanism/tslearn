class Person {
    name: string;
    family: string;

    constructor(name: string, family: string) {
        this.name = name;
        this.family = family;
    }

    fullName = function (): string {
        return this.name +
            " " + this.family;
    }
}

function register1(person: Person) {
    console.log(person.name +
        " " + person.family);
}

var m = new Person("Mostafa", "Rahmani");
m.name = "Ali";
// m.family = "Rahmani";
register1(m);
console.log(m.fullName());

interface IPer {
    add(name: string): string;
}

class Per implements IPer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    add = function (name: string): string {
        return this.name;
    }
}

var m2 = new Per("Ali");
console.log(m2.add("Hosein"));
