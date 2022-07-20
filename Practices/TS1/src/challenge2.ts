enum Occupation {
    Actress,
    Baker
}

type Person = {
    name: string,
    age: number,
    occupation: Occupation
}

const person1: Person = {
    name: "Maria",
    age: 29,
    occupation: Occupation.Actress
}

const person2: Person ={
    name: "Roberto",
    age: 19,
    occupation: Occupation.Baker
}

const person3: Person = {
    name: "Laura",
    age: 32,
    occupation: Occupation.Actress
}

const person4: Person ={
    name: "Carlos",
    age: 19,
    occupation: Occupation.Baker
}

console.log(person4);