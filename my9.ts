// Anonymous Types

var people: {
    name: string
}

people = {
    name: "Mostafa"
}
console.log(people);


function totalLength
    (x: { length: number }, y: { length: number }): number {
    return x.length + y.length;
}

var x = { length: 120 }
console.log(totalLength(x, x));
