"use strict";
var Occupation;
(function (Occupation) {
    Occupation[Occupation["Actress"] = 0] = "Actress";
    Occupation[Occupation["Baker"] = 1] = "Baker";
})(Occupation || (Occupation = {}));
var person1 = {
    name: "Maria",
    age: 29,
    occupation: Occupation.Actress
};
var person2 = {
    name: "Roberto",
    age: 19,
    occupation: Occupation.Baker
};
var person3 = {
    name: "Laura",
    age: 32,
    occupation: Occupation.Actress
};
var person4 = {
    name: "Carlos",
    age: 19,
    occupation: Occupation.Baker
};
console.log(person4);
//# sourceMappingURL=desafio2.js.map