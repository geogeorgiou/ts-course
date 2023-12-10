//Enforce as const object to be of certain shape

//Generally as const specifies that the object is of immutable value BUT doesn't specify the shape of the object

type Foo = Record<
  string,
  {
    bar: string;
    baz: Record<string, string>;
  }
>;

// Property 'baz' is missing in type '{ readonly bar: "52123100"; }' but required in type '{ bar: string; baz: Record<string, string>; }
// const foo = {
//   a: {
//     bar: '12312312',
//     baz: {}
//   },
//   b: {
//     bar: '52123100',
//   },
// } as const satisfies Foo;

//Gives off error because baz is missing and autocomplete very useful for static immutable objects
