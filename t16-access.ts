class PersonAccess {
    private name: string;
    protected age: number;
    public family: string;
}

class EmployeeAccess extends PersonAccess {
    constructor() {
        super();
    }
    age = 38;
}


let p = new PersonAccess();
p.family = "Mostafa";

let e = new EmployeeAccess();
e.age = 38;


