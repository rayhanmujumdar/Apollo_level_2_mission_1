{
  // ternary operator || optional chaining || nullish coalescing

  // ternary operator
  let age: number = 20;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("No Adult");
  }

  const isAdult: string = age >= 18 ? "Adult" : "No Adult";

  // console.log({isAdult});

  // nullish coalescing

  // null / undefined --> decision making  --> only two types using nullish operator
  type IsAuthenticated = string | null | undefined;
  const isAuthenticated: IsAuthenticated = "";
  const result1: string = isAuthenticated ?? "Guest"; // (??) nullish coalescing
  const result2: string = isAuthenticated ? isAuthenticated : "Guest";
  //   console.log({ result1 });
  //   console.log({ result2 });

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Rayhan",
    address: {
      city: "Hajigonj",
      road: "1200/1",
      presentAddress: "Pachui,hajigonj",
    },
  };

  const permanentAddress = user.address.permanentAddress ?? 'No permanent address found'
  console.log({permanentAddress});

}
