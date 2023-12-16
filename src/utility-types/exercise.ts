// exercise.ts
// This exercise is dedicated to explore the practical use of TypeScript's utility types.

// Task 1: Partial
// Create an interface named 'IBankAccount' with 'id' (string), 'fullName' (string), 'balance' (number), and 'isActive' (boolean) properties.
// Add an optional property named 'creationDate' of type 'Date'.
// Use the 'Partial' utility type to make a new type 'PartialBankAccount'.
// Create an object named 'bankAccount' using the 'PartialBankAccount' type and assign a selection of properties to it.

// Task 2: Pick
// Using the 'IBankAccount' interface, create a new type 'CustomerId' that picks only the 'id' and 'fullName' properties.
// Create an object named 'customer' using the 'CustomerId' type with 'id' and 'fullName' properties.

// Task 3: Readonly
// Make the 'IBankAccount' properties immutable using 'Readonly' to create a new type 'ReadonlyBankAccount'.
// Create an object named 'readonlyBankAccount' using the 'ReadonlyBankAccount' type.
// Attempt to modify one of its properties to see the error and then comment it out.

// Task 4: Record
// Create a 'Record' type 'BankAccountRecord' that maps string keys to 'IBankAccount' objects.
// Create an object named 'bankAccountsList' using the 'BankAccountRecord' type, including at least two bank accounts.

// Task 5: Required
// Make the optional properties of 'IBankAccount' required using 'Required' to create a new type 'FullBankAccountProfile'.
// Create an object named 'completeBankAccount' using the 'FullBankAccountProfile' type, ensuring all properties are included.