{
  // Basic data type

  // string
  let firstName = "Rayhan"; // Type Inference defined
  let lastName: string = "Mojumdar"; // Type explicit defined

  // number
  let roll: number = 123;

  // boolean
  let isAdmin = true;

  // undefined
  let x: undefined = undefined;

  // null
  let y: null = null;

  // any types
  let d;
  d = 123;
  d = "text";
  d = true;

  let c: number;
  c = 69;

  // Array
  // only string add in this array
  let friends: string[] = ["rachel", "monica"];
  // only number add in this array
  let eligibleRollList: number[] = [1, 2, 3, 4];

  // tuple --> array --> order --> type of values
  let coordinates: [number, number] = [1, 5];

  let ageName: [number, string, boolean] = [32, "Rayhan", true];

  // ageName[0] = 'Mojumdar' there was an tuple type error
}
