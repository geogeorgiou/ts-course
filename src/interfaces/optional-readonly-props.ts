// Optional and readonly properties in interfaces

// Interfaces in TypeScript offer the flexibility of defining optional and readonly properties.

// Optional properties
// We begin by defining an interface, IPerson, with an optional "age" property. The "?" symbol denotes an optional property.

interface IPerson {
  name: string;
  surname: string;
  age?: number; // Optional property
}

// Next, we create two person objects which utilise the IPerson interface.
// Notably, both objects are valid as the "age" property can be omitted.

const person1: IPerson = { name: "George", surname: "Williams" }; // Age is optional
const person2: IPerson = { name: "Anna", surname: "Jones", age: 30 };

// Readonly properties
// To define a read-only property, we introduce the "readonly" modifier before the property name in the interface definition.

interface IProduct {
  name: string;
  price: number;
  readonly productId: number;
}

// We proceed to construct a product object using the IProduct interface.

const product: IProduct = { name: "book", price: 10, productId: 1000 };

// So, what distinguishes readonly properties? Let's explore this with the following example.

product.price = 15; // The price property of the product can be updated without issues.
// product.productId = 2000; // Error: Cannot assign to 'productId' because it is a read-only property.

// Conclusion - Readonly properties are immutable which means they enhance code safety by preventing unintended modifications.
// In the first example with a non-readonly property, "price" can be freely modified, which might not be desirable if the property should remain unchanged.
// In the second example with a read-only property, any attempt to modify "productId" results in a TypeScript error, ensuring that the property remains constant.