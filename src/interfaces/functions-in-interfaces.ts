// Functions in Interfaces

// Interfaces in TypeScript can define function signatures for clarity and consistency.

// Example: Define an interface for a basic addition function of two numbers.

interface IAddition {
  // Function signature for addition
  add(a: number, b: number): number;
}

// Implementing the 'IAddition' interface
const additionFunction: IAddition = {
  add(a, b) {
    return a + b;
  },
};

const result = additionFunction.add(5, 3); // Output: 8

// Function signatures in interfaces define the structure of functions that objects must follow when implementing the interface.
// In this example, we've defined a function signature for addition in the 'IAddition' interface,
// and the 'additionFunction' object implements this function accordingly.