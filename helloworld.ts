function speak(value: string): string {
    console.log(value);
    return value;
}

var greeted = "Mostafa";
var greeting = "Hello, ";
var whatToSay = greeting + greeted;

speak(whatToSay);
