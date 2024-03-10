Exercise 1

Let's create an input contract for a component to render multiple input types like a text, a checkbox or a select. The discriminant should be the corresponding html type.

Follow this convention:

- checkbox should have `checked` notation
- text should have `value` notation
- select should have `selected` notation

When you have built the individual types build the contract type which should be the InputProps

Exercise 2

Create type guards for each and every individual type using the correct discriminat value for the assertion

Exercise 3

Try to make a function that uses the InputProps as argument and does `console.log()` on the value for each input type
