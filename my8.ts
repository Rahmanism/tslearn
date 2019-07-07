interface IPerseon {
    name: string;
    family: string;
    age: number;
    email?: string;
    gender: Gender;
}

enum Gender {
    Male,
    Female,
    Other
}

var mostafa: IPerseon = {
    name: "Mostafa",
    family: "Rahmani",
    age: 38,
    gender: Gender.Male
}

console.log(mostafa);

function register(person: IPerseon): void {
    console.log(person.name + " " + person.family);
}

console.log(Gender[mostafa.gender]);

register(mostafa);

interface IPerseonService {
    add(person: IPerseon): IPerseon;
    delete(person: IPerseon): void;
    getAll(): IPerseon[];
    getById(personId: number): IPerseon;
}

enum Days {
    Saturday = 1,
    Sunday = 3,
    Monday = 42,
    Tuesday = 33,
    Wednesday = 4,
    Thursday = 7,
    Friday = 22
}

var day = Days.Sunday;
console.log(day);
day = Days.Tuesday;
console.log(day);

enum Colors {
    Red = "#ff3333",
    Green = "#33ff33",
    Blue = "#3333ff"
}

console.log(Colors.Blue);
