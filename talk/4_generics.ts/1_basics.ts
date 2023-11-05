// we have all type information here
const value = 3;

// we don't have the full type information here
const fn = (param) => {
  return typeof param;
};

// here, it's a number
fn(5);

// and here here it's a string
fn("hi");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

interface UserWithStringID {
  name: string;
  age: number;
  id: string;
}

interface UserWithNumberID {
  name: string;
  age: number;
  id: number;
}

interface UserWithObjectID {
  name: string;
  age: number;
  id: { uuid: string };
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

interface UserWith<IdType> {
  name: string;
  age: number;
  id: IdType;
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

type UserWithString = UserWith<string>;

const userWithStringId: UserWithString = {
  age: 20,
  name: "Ahmed",
  id: "yay!",
};

const userWithFunctionId: UserWith<() => string> = {
  age: 20,
  name: "Ahmed",
  id: () => "yay!",
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

interface User<IdType = string> {
  name: string;
  age: number;
  id: IdType;
}

const userWithDefaultId: User = {
  age: 20,
  name: "Ahmed",
  id: "yay!",
};

const userWithCustomId: User<number> = {
  age: 20,
  name: "Ahmed",
  id: 900,
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const userWithNoId: Omit<User, "id"> = {
  age: 20,
  name: "Ahmed",
};

const userWithOptionalProps: Partial<User> = {};

const userWithSomeProps: Pick<User, "id"> = { id: "needed!" };

const typesInception: Pick<User<number>, "id"> = { id: 333 };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const SETTINGS = { env: "PROD", port: 9876, url: "I💚Palestine.com" };

type NormalKeys = keyof typeof SETTINGS;
type UpperCaseKeys = Uppercase<NormalKeys>;
type CapitalizedKeys = Capitalize<NormalKeys>;
