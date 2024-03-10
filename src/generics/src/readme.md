Prerequisites

- discriminated union

Exercise 1

In this exercise, you will create a generic type representing an API response for a paginated table. Follow the instructions carefully and implement the solution as described.

Create a generic type called PaginatedResponse<T> that represents an API response for a paginated table. The response should include the following properties:

- statusCode of 200 | 400 | 401 | 403 | 404 | 500 values only.

- error as an optional property for error response.

- data of type T[]. (use just a string for now)

- page of type number.

- pageSize of type number.

- total of type number.

Exercise 2

Now we have setup the core table data structure in the string format we should adjust them to resemble a real API response contract like so:

data: [{firstName: "John", lastName: "Doe", company: "Agile Actors"}]

Please use a new type for this EmployeePaginatedResponse (hint use generic constraint)

Exercise 3

Now for the final Iteration of this exercise make sure with type safety that when error exists we have no data and when we have data there's no error. This should apply for non 200 status Codes only (hint use discriminated union and new types).
