//Infer keyword

//Infer is a deep dive into the more advanced features of TypeScript. It allows us to extract the type of a generic type argument
// and especially useful only when working with conditional types.

type Result = true extends boolean ? 1 : 0;

// const foo = (check: true) => {};

// const a: boolean = false;

// foo(a);

const foo = (check: boolean) => {
  return '12312312';
};

type FuncResult = ReturnType<typeof foo>;

//Return type a deep dive
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

//Just a regular type but it does a conditional check!

// let's use our foo here
type Result2 = typeof foo extends (...args: any) => infer R ? R : any;

//lets strip the infer our and see what happens
type Result3 = typeof foo extends (...args: any) => any ? 1 : 0;

//now that's pretty straight forward it becomes 1
//but wouldn't it be intreresting that if our type actually matched then it would be the type matched instead of 1 ?

//Let's try to make it match
type Result4 = typeof foo extends (...args: any) => infer R ? R : any;

//infer helps you find something about the thing you're investigating, instantiate a variable and use that variable however you want to use it.

//you can think of infer as regex in the sense that it's a pattern matching tool

//in an analogy
// let's use our foo here
// typeof foo extends (...args: any) is the reggex
// => infer R ? R : any; is the pattern matching tool

// type Result2 = typeof foo extends (...args: any) => infer R ? R : any;

//infer can be used in conjuction with the never type because we enforce strict rules that way

const whateverObj = {
  name: 'whatever',
};

//so essentially the ResultWhatever cannot be used since TS
//resolves that one to never
type ResultWhatever = typeof whateverObj extends (...args: any) => infer R
  ? R
  : never;

//Now let's try to built on this!
//TS will yell at us because whateverObj is an object and not a function
// type FuncResultWhatever = ReturnType<typeof whateverObj>;

//Let's say we hack our way into the previous type and remove the generic constraint
type FakeReturnType<T> = T extends (...args: any) => infer R ? R : never;

//now this works! but results to never!
type FuncResultWhatever = FakeReturnType<typeof whateverObj>;

type FuncResultWhatever2 = FakeReturnType<typeof foo>;

//Now for another bonus round!
type FakeReturnTypeWithConstraintOnInfer<T> = T extends ((
  ...args: any
) => infer R extends string)
  ? `${R}_return_type`
  : never;

//now we get the actual result type!
//note that if we even add as const to the return type of foo it will still work! -> "12312312_return_type"
type ConstraintWhatever = FakeReturnTypeWithConstraintOnInfer<typeof foo>;

//Let's do a second example to just make sure we understand this
//Again we're talking about pattern matching here

type GetFromDeepObject<T> = T extends {
  a: {
    b: {
      c: infer C;
    };
  };
}
  ? C
  : never;

type C = GetFromDeepObject<{
  a: {
    b: {
      c: 'hello';
    };
  };
}>;

//Verdict only use it within a conditional type
//It has one use case and that is to extract the type of a generic type argument

//You can even chain infer types to be more flexible with the configuration you're trying to match

type GetFromDeepObject2<T> = T extends
  | {
      a: {
        b: {
          c: infer C;
        };
      };
    }
  | { c: infer C }
  ? C
  : never;

//This is very helpful to avoid the deep nesting of conditional types
