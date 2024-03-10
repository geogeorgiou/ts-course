//Solution Exercise 1

type StatusCodes = 200 | 400 | 401 | 403 | 404 | 500;

type PaginatedResponse<T> = {
  statusCode: StatusCodes;
  error?: string;
  data: T[];
  page: number;
  pageSize: number;
  total: number;
};

const response: PaginatedResponse<string> = {
  statusCode: 200,
  data: ['a', 'b'],
  page: 1,
  pageSize: 10,
  total: 100,
};

//Solution Exercise 2

type EmployeeTableRow = {
  firstName: string;
  lastName: string;
  company: string;
};

type EmployeePaginatedResponse<T extends EmployeeTableRow> = {
  statusCode: 200 | 400 | 401 | 403 | 404 | 500;
  error?: string;
  data: T[];
  page: number;
  pageSize: number;
  total: number;
};

const employeesResponse: EmployeePaginatedResponse<EmployeeTableRow> = {
  statusCode: 200,
  data: [
    {
      firstName: 'John',
      lastName: 'Doe',
      company: 'Google',
    },
  ],
  page: 1,
  pageSize: 10,
  total: 100,
};

//Solution Exercise 3

type PaginatedSuccessResponse<T extends EmployeeTableRow> = {
  statusCode: 200;
  data: T[];
  page: number;
  pageSize: number;
  total: number;
};

type PaginatedErrorResponse = {
  statusCode: 400 | 401 | 403 | 404 | 500;
  error: string;
};

type PaginatedResponseFinal<T extends EmployeeTableRow> =
  | PaginatedSuccessResponse<T>
  | PaginatedErrorResponse;

const successResponse: PaginatedResponseFinal<EmployeeTableRow> = {
  statusCode: 200,
  data: [
    {
      firstName: 'John',
      lastName: 'Doe',
      company: 'Google',
    },
  ],
  page: 1,
  pageSize: 10,
  total: 100,
};

const errorResponse: PaginatedResponseFinal<EmployeeTableRow> = {
  statusCode: 400,
  error: 'Bad Request',
};
