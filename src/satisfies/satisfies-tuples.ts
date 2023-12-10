// Inferring tuples

type AtLeastOneNumber = [number, ...number[]];

const array = [1, 2, 3];

const maybeExists = array[3];

const tupple = [1, 2, 3] satisfies AtLeastOneNumber;

//Tuple type '[number, number, number]' of length '3' has no element at index '3'
// const doesNotExist = tupple[3];

//When declared as tupple it infers the type as tupple with specified length and when you try to access an index it gives out an error
