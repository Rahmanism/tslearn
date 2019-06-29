class Employee {
    protected employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Greetings ${this.employeeName}!`);
    }
}

let emp1 = new Employee('Mostafa');
emp1.greet();


class Manager extends Employee {
    constructor(name: string) {
        super(name);
    }
}
let mgr1 = new Manager('Ali');
mgr1.greet()