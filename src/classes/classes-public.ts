//public classes

/*

Classes are a common abstraction used in object-oriented programming (OOP) languages to describe data structures known as objects.​

You can think of the class itself as a blueprint for creating objects with the given shape, while instances are the objects themselves, created from this blueprint.​

​

You can create a class declaration by using the class keyword, followed by the class name and then a {} pair block.​

You can then create a new instance of the Person class by using the new keyword followed by the name of your class.​



Class members in TypeScript may have three possible visibility modifiers: public, protected, and private. 
public members may be accessed outside of the class instance, where as private ones cannot. 
protected occupies a middle ground between the two, where members can be accessed by instances of the class or subclasses based on that class.​
*/
class Person {
  constructor(public name: string, public age: number) {}

  public getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}
const jon = new Person('John', 35);
// console.log(jon.name);

// console.log(jon.age);

// console.log(jon.getBirthYear());

//class methods
class Animal {
  public animalType: string;
  public color: string;

  constructor(animalType: string, color: string) {
    this.animalType = animalType;
    this.color = color;
  }

  doAction(): void {
    console.log(`The ${this.animalType} is walking...`);
  }
}

const catAnimal = new Animal('cat', 'Black');
catAnimal.doAction();

//class inheritance

/*
Inheritance allows you to reuse the functionality of an existing class without rewriting it.
The class which inherits properties and methods is called the child class.
And the class whose properties and methods are inherited is known as the parent class.
*/

//using super we can pass values to the parent class constructor
class Mammal extends Animal {
  numberOfLegs: number;

  constructor(animalType: string, color: string, numberOfLegs: number) {
    super(animalType, color);
    this.numberOfLegs = numberOfLegs;
  }

  doAction(): void {
    console.log(`The ${this.animalType} is swimming...`);
  }

  giveBirth(): void {
    console.log(`The ${this.animalType} is giving birth...`);
  }
}

const dolphin = new Mammal('dolphin', 'grey', 0);

dolphin.giveBirth();
//here doAction from mammal class overwrites the doAction method from the parent class Animal
dolphin.doAction();
