//public classes


class Person {
 constructor(

   public name: string,
   public age: number

 ){}

 

 public getBirthYear(){
    
    return new Date().getFullYear() - this.age;

}
}
const jon = new Person("John", 35);
// console.log(jon.name);

// console.log(jon.age);

// console.log(jon.getBirthYear());