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
    proto : vehicle,
    wheels: 6
}

console.log('Vehicle:', vehicle, vehicle.proto)
console.log('car:', car, car.proto)
console.log('car.wheels:' ,car.wheels)