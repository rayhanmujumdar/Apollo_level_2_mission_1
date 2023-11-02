{
  // Never & Unknown & nullable type

  // nullable
  function searchName(name: string | null) {
    if (name) {
      console.log("searching");
    } else {
      console.log("Name Not found");
    }
  }

  // searchName(null)

  // unknown
  function getSpeedInMeterPerSecond(value: unknown) {
    // i am not sure what type of data send my array that's why i am use (unknown)
    if (typeof value === "number") {
      const convertedSpeed = ((value * 1000) / 3600).toFixed(2);
      return `The speed is ${convertedSpeed} ms`;
    } else if (typeof value === "string") {
      const [spreed, unit] = value.split(" ");
      const convertedSpeed = ((parseInt(spreed) * 1000) / 3600).toFixed(2);
      return `The speed is ${convertedSpeed} ms`;
    } else {
      return "Your value is not valid";
    }
  }

  const spreedPerSecond = getSpeedInMeterPerSecond(`1000 kmh`);
  console.log({ spreedPerSecond });

  // Never
  function throwError(msg: string): never { // this function not return any type of data that's why use (never) type
    throw new Error(msg);
  }

  throwError("There was an unexpected error");
  //
}
