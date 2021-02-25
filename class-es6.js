class Animal {
    constructor() {
        this.type = 'Four legs';
        this.color = 'White and Black';
        this.meal = 'Eating Grass';
    }

    eat() {
        return this.meal;
    }
}

class Cow extends Animal {
    constructor() {
        super();
        this.type = 'Two legs';
    }
}

const animalObj = new Animal();
const cowObj = new Cow();

console.log(animalObj.type); // Called parent data member from parent object it self.
console.log(cowObj.color);   // Called parent data member from child object.
console.log(cowObj.eat());  // Called parent function using child object.