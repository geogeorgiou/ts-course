//private classes

class EmployeePrivate {

 constructor(

   private identifier: string

 ) {}

}



class FinanceEmployeePrivate extends Employee {

 getFinanceIdentifier() {

   return `fin-${this.identifier}`;
 }

}