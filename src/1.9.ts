{
  // alias in Typescript
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "Rayhan",
    age: 50,
    gender: "male",
    contactNo: "01776464695",
    address: "Hajigonj,chandpur",
  };

  const student2: Student = {
    name: "Rayhan",
    age: 50,
    gender: "male",
    address: "Hajigonj,chandpur",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Rayhan";
  const isAdmin: IsAdmin = true;


  type Add = (num1: number, num2: number) =>  number
  const add: Add = (num1, num2) => num1 + num2;
}
