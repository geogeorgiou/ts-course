//protected classes

class Employee {
  constructor(protected identifier: string) {}
}

class FinanceEmployee extends Employee {
  getFinanceIdentifier() {
    return `fin-${this.identifier}`;
  }
}

//if we try to add the below code outside of the class or subclass we will get an error.

const financeEmployee = new FinanceEmployee('AB123');

// financeEmployee.identifier;
// this gives: Property identifier is protected and only accessible within class Employee and its subclasses.

//A protected value means that is accessed only within the class or child classes methods
class BeingProtected {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }
}

class Human extends BeingProtected {
  public name: string;

  constructor(type: string, name: string) {
    super(type);
    this.name = name;
  }
  print(): void {
    this.type;
  }
}
const person1 = new Human('human', 'John');
person1.print();
