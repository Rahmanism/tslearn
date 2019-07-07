var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var mostafa = {
    name: "Mostafa",
    family: "Rahmani",
    age: 38,
    gender: Gender.Male
};
console.log(mostafa);
function register(person) {
    console.log(person.name + " " + person.family);
}
register(mostafa);
var Days;
(function (Days) {
    Days[Days["Saturday"] = 1] = "Saturday";
    Days[Days["Sunday"] = 3] = "Sunday";
    Days[Days["Monday"] = 42] = "Monday";
    Days[Days["Tuesday"] = 33] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 7] = "Thursday";
    Days[Days["Friday"] = 22] = "Friday";
})(Days || (Days = {}));
var day = Days.Sunday;
console.log(day);
day = Days.Tuesday;
console.log(day);
