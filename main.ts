export { }

let message = "Hello World!";
console.log(message);

let myList: [string, number] = ['Ali', 12];

type Style = 'Bold' | 'Italic';

let fontStyle: Style = 'Bold';

let anyVar: any = 'Hi';
console.log(anyVar.name);
console.log(anyVar.toUpperCase());

if ('abc') {
    console.log('It\'s TRUE.');
}
if (!!'abc'){
    console.log('TRUE with truthy value!');
}

let multiTypeVar : string | boolean;
multiTypeVar = 'string value';
multiTypeVar = false;
