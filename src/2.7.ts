{
  // constraint using ( keyof ) operator
  type Person = {
    name: string;
    email: string;
    profession: string;
    experience: string;
  };
  // literal type
  type Owner = "name" | "email" | "profession" | "experience"; // manually ( keyof ) create
  // keyof operator use to access Person key
  type Owner2 = keyof Person; 

  // person1 or person2 are similar
  const person1: Owner = "name"; 
  const person2: Owner2 = "name";

  // Accessing object properties using the Keyof Type Operator
  function getPropertyValue<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
  }
  const person: Person = {
    name: "Rayhan",
    email: "rayhan@gmail.com",
    profession: "Web developer",
    experience: "1 year",
  };

  const personInfo = getPropertyValue(person, "email");

type Car = {
    brand: string,
    model: string,
    age: number,
    condition: 'good' | 'bad' | 'not so good' // literal type
}
  const car: Car  = {
    brand: "Toyota",
    model: "2009 model",
    age: 10,
    condition: "good",
  };

  const carInfo = getPropertyValue(car, "brand");


// Using Keyof Type Operator with mapped types
  type Student = {
    name: string;
    age: number;
    gender: string
  }
  type ReadonlyPerson = {
    readonly [index in keyof Student] : Student[index]
  }
  const student: ReadonlyPerson = {
    name: 'Rayhan',
    age: 24,
    gender: 'male'
  }

  // only read not modify
//   student.age = 23 error: Cannot assign to 'age' because it is a read-only property.
console.log(student.name);
console.log(student.gender);
console.log(student.age);

  //
}
