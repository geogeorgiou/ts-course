//private classes

class EmployeePrivate {
  constructor(private identifier: string) {}
}

class FinanceEmployeePrivate extends Employee {
  getFinanceIdentifier() {
    return `fin-${this.identifier}`;
  }
}

class Reptiles extends Animal {
  numberOfLegs: number;

  constructor(animalType: string, color: string, numberOfLegs: number) {
    super(animalType, color);
    this.numberOfLegs = numberOfLegs;
  }

  private doSlithering(): void {
    console.log(`The ${this.animalType} is slithering...`);
  }
  doAction(): void {
    this.doSlithering();
  }
}

const snake = new Reptiles('snake', 'grey', 0);

//private methods and values can be accessed only within the class.
//in order to access one we must use a method that have access

// snake.doSlithering(); Property 'doSlithering' is private and only accessible within class 'Reptiles'
snake.doAction();

//A private value means that is accessed only within the class and not by child classes or other
class BeingPrivate {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }
}

class Human2 extends BeingPrivate {
  public name: string;

  constructor(type: string, name: string) {
    super(type);
    this.name = name;
  }
  print(): void {
    // this.type; error!
  }
}
const person2 = new Human2('human', 'John');
person2.print();
