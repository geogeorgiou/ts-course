//protected classes

class Employee {
 constructor(
 protected identifier:string

 ){}
 }

 class FinanceEmployee extends Employee {
    getFinanceIdentifier() {
        return `fin-${this.identifier}`
    }
 }

 
//if we try to add the below code outside of the class or subclass we will get an error.

const financeEmployee = new FinanceEmployee('AB123');

// financeEmployee.identifier;
// this gives: Property identifier is protected and only accessible within class Employee and its subclasses.

