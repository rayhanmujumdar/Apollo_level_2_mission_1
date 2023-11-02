{
  // Reference Type --> Object

  const user: {
    company: "Programming Hero"; // type --> literal Types
    readonly firstName: string; // this property use only readonly
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Rayhan",
    lastName: "Mojumdar",
    isMarried: false,
  };

  // user.firstName = "sabbir hossain";
}
