// Interfaces and improving code readability

// Long type annotation without interfaces
// In the absence of interfaces, the declaration of types and values within a single object can lead to code that appears cluttered and less maintainable.

const customerData: {
  id: number;
  username: string;
  email: string;
} = {
  id: 1,
  username: "customer123",
  email: "customer@example.com",
};

// Improving code readability with interfaces
// To enhance code readability, we can start by defining a reusable interface for customers.

interface ICustomer {
  id: number;
  username: string;
  email: string;
}

// Now, we can utilize the Customer interface to define a customer object in a cleaner and more organized manner.

const customerDataWithInterface: ICustomer = {
  id: 1,
  username: "customer123",
  email: "customer@example.com",
};