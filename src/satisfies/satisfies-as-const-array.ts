//Enforce as const array to be of certain shape

//Similarly to the previous one using the
// 'readonly' type modifier only permitted on array and tuple literal types.

type FooArrayItem = {
  bar: string;
  xyz?: string;
  baz?: readonly FooArrayItem[];
};

const fooArray = [
  {
    bar: '52123100',
  },
  {
    bar: '12312312',
    baz: [
      {
        bar: '12312312',
        baz: [
          {
            bar: '12312312',
          },
        ],
      },
    ],
  },
] as const satisfies readonly FooArrayItem[];

//gives off improved intellicense and autocomplete compared without as const and satisfies
// fooArray[0].xyz = '12312312';

//NOTE: it's important to note the usage of readonly on the arrays because it's necessary to match up with as const! (same applies if we miss readonly)

//under the hood it's mutable vs immutable comparison
