let animal = {
    type: "unknown",
    sound: function (){
        console.log("The "+this.type+ " makes a sound")
    }
}

let dog = Object.create(animal)
dog.type = "Dog"
dog.color = "White"

// dog.sound()
// console.log(dog)

let cat = animal
cat.type = "cat"
console.log(cat)
console.log(animal)


let goat = {}
Object.setPrototypeOf(goat, animal)
goat.type = "Goat"
console.log(goat)


let vehicle = {wheels : 4}
let car = {
    seats: 5,
    __proto__ : vehicle,
    wheels: 6
}

console.log('Vehicle:', vehicle, vehicle.__proto__)
console.log('car:', car, car.__proto__)
console.log('car.wheels:' ,car.wheels)