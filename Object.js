//1. Prototype Based
let animal = {
    type: "unknown",
    sound: function (){
        console.log("The "+this.type+ " makes a sound")
    }
}
//Create
let dog = Object.create(animal)
dog.type = "Dog"
dog.color = "White"

// dog.sound()
// console.log(dog)

let cat = animal
cat.type = "cat"
console.log(cat)
console.log(animal)

//setPrototypeOf
let goat = {}
Object.setPrototypeOf(goat, animal)
goat.type = "Goat"
console.log(goat)

//proto
let vehicle = {wheels : 4}
let car = {
    seats: 5,
    proto : vehicle,
    wheels: 6
}

console.log('Vehicle:', vehicle, vehicle.__proto__)
console.log('car:', car, car.proto)
console.log('car.wheels:' ,car.wheels)


//2. Function Based

function Person(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);
    }
}

//JSON.parse
const personOne = new Person("Name", 50);
console.log(personOne)

const personTwo = new Person("Person Two", 29);
console.log(personTwo)

const json = '{"name": "Name", "age": 50}';
const obj = JSON.parse(json)
console.log(obj)

const string = JSON.stringify(obj)
console.log(string)