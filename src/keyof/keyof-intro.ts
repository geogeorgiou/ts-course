//Keyof Operator

//This operator returns object type and produces a string or numeric literal union of its keys.

//Let's say we have an object type Person with properties name

type Person = {
  name: string;
  age: number;
};

//We can use keyof to get the keys of the Person type

//The type of PersonKeys is "name" | "age"
type PersonKeys = keyof Person;

//We could use the keyof to generate a type out of an array:

const fieldAttributes = ['hasName', 'hasAge'] as const;

//The type of Field is "hasName" | "hasAge"
type Field = (typeof fieldAttributes)[number];

// This is a very powerful feature that
// allows us to generate types from existing types and values.
