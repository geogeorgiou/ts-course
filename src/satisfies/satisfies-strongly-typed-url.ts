//Satisfies

//The operator that gives you a a way to add type annotations to values without using type inference.

//Example Strongly Typed URL
type UrlParams = {
  id: string;
  name: string;
};

//Property 'name' is missing in type '{ id: string; }' but required in type 'UrlParams'.
// const params = new URLSearchParams({
//   id: '123',
// } satisfies UrlParams);

//the very same thing applies with POST request using fetch API
