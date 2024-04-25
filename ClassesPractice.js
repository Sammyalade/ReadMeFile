class Mavericks{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static setName(newName){
        this.name = newName
    }

    static getName(){
        return this.name;
    }

    static setAge(newAge){
        this.age = newAge;
    }

    static getAge(){
        return this.age;
    }
}