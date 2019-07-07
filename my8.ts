interface IPerseon {
    name: string;
    family: string;
    age: number;
    email?: string;
}

var mostafa: IPerseon = {
    name: "Mostafa",
    family: "Rahmani",
    age: 38
}

function register(person: IPerseon): void {
    console.log(person.name + " " + person.family);
}

register(mostafa);

interface IPerseonService {
    add(person: IPerseon): IPerseon;
    delete(person: IPerseon): void;
    getAll(): IPerseon[];
    getById(personId: number): IPerseon;
}
