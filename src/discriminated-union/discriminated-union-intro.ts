// Discriminated Union

// In TypeScript, a discriminated union is a type that combines multiple other types using a common property, known as a discriminant property. This property is used to determine which specific type within the union is currently in use. Commonly used in applications when dealing with components that can have different states or variations.

//Let's say we have a type Sample that has a property status that can be either active or inactive. We can use a discriminated union to create a type that represents the different states of the Sample type.

type ActiveSample = {
  name: string;
  age: number;
  isMember: boolean;
  status: 'active';
};

type InactiveSample = {
  name: string;
  age: number;
  status: 'inactive';
};

type Sample = ActiveSample | InactiveSample;

//Object literal may only specify known properties, and 'isMember' does not exist in type 'InactiveSample'.
// const sample1: Sample = {
//     name: 'John',
//     age: 30,
//     isMember: true,
//     status: 'inactive',
// };

//Let's create a function (also known as type guard) that checks if a sample is active. The `is` operator here is assisting typescript to narrow down the type of the sample.

const isActiveSample = (sample: Sample): sample is ActiveSample => {
  return sample.status === 'active';
};

const sample1 = {
  name: 'John',
  age: 30,
  isMember: true,
  status: 'active',
} satisfies Sample;

if (isActiveSample(sample1)) {
  console.log(sample1.isMember);
}
