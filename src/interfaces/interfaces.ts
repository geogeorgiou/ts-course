// Interfaces

// Interfaces in TypeScript define the structure of objects
// by specifying their properties and methods, enhancing code readability and type safety.

// Let's start with a simple example by defining an interface for a person.

interface IPerson {
  name: string;
  surname: string;
}

// We can then create a 'person' object that matches the 'IPerson' interface.

const person: IPerson = { name: 'John', surname: 'Doe' };

// TypeScript will check that the object adheres to the defined interface.