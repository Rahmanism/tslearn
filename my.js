var animal = {
    name: "Fido",
    species: "dog",
    birthYear: 2010,
    // age: calculateAge(this.birthYear)
    age: calculateAge(2010),
    speak: function () {
        console.log("Woof !");
    }
};
function calculateAge(by) {
    var today = new Date();
    return today.getFullYear() - by;
}
console.log(animal);
animal.speak();
function totalLength(x, y) {
    var total = x.length + y.length;
    return total;
}
console.log(totalLength(['4', 123, "Kamran"], '5'));
function addition(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        // return (x + y).toString();
        return x + y;
    }
    else if (typeof x == "string" && typeof y == "string") {
        return x + " " + y;
    }
    else if (x instanceof Array && y instanceof Array) {
        return x.concat(y);
    }
    else {
        return "No suitable input!";
    }
}
console.log(addition("5", "7"));
console.log(addition(6, 8));
console.log(addition(["123", 123], ["A", "B"]));
