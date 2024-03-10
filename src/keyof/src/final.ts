//Solution Exercise 1

const permissions = ['hasAccessToPageA', 'hasAccessToPageB'];

type Permission = (typeof permissions)[number];

//Solution Exercise 2

type User = {
  userName: string;
  permissions: Permission[];
  loginInfo: {
    application: string;
    lastLogin: Date;
  };
};

//Solution Exercise 3

//UserKeys is "userName" | "permissions" | "loginInfo" which means keyof applies only to the root level keys of the User type
type UserKeys = keyof User;
