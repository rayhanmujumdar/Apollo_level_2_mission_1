{
  //Type assertion
  let anything: any;
  anything = "Rayhan";
  const replacedName = (<string>anything).replace("Rayhan", "Rakib");
  // i am sure this data is string.hence i use assertion
  console.log(replacedName);
  const kgToGm = function (
    value: string | number
  ): number | string | undefined {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  // if you sure this function return a string value then use type assertion otherwise better not to use
  // use can use assertion to different syntax
  const result1 = <string>kgToGm("100");
  const result2 = kgToGm(100) as number;
  console.log(result1);
  console.log(result2);

  // catch block {err} object add a assertion types
  type CustomError = {
    message: string;
  };

  try {
    throw new Error("Something was wrong");
  } catch (err) {
    console.log((err as CustomError).message);
  }
  console.log('Typescript Error');
  //
}
