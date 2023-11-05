# 2.1 - Type assertion / type narrowing

**Date : 3/11/23**

**Type Assertion in TypeScript:**

1. Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.
2. Using the angular bracket <> syntax.

   ```tsx
   let code: any = 123;
   let employeeCode = <number>code;
   ```

3. Using as keyword

   ```tsx
   let code: any = 123;
   let employeeCode = code as number;
   ```

4. Both the syntaxes are equivalent and we can use any of these type assertions syntaxes. However, while dealing with JSX in TypeScript, only the `as` syntax is allowed, because JSX is embeddable in XML like a syntax. And since XML uses angular brackets, it creates a conflict while using type assertions with angular brackets in JSX.
5. Warning: Be careful while using type assertion. The TypeScript compiler will autocomplete `Employee` properties, but it won't show any compile time error if you forgot to add the properties.

   ```tsx
   interface Employee {
       name: string;
       code: number;
   }

   let employee = <Employee> {
       // Compiler will provide autocomplete properties,
       but will not give an error if you forgot to add the properties
   };
   console.log(employee.name); // undefined;
   ```

6. { class practice } **Type assertion Practice code:**

   ```tsx
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
     //
   }
   ```

## Reference:

1. Type assertion in typescript docs:
   [Type Assertion in TypeScript](https://www.tutorialsteacher.com/typescript/type-assertion)

# 2.2 type alias vs interface

**Date : 4/11/23**

1. Both the methods **Type** and the **Interface** are used to describe the structure of the objects in TypeScript. But holds some specific features that will be helpful according to the situation, choosing between them and totally depends on the developer.
2. { class practice } type alias or interface code example:

   ```tsx
   {
     // type alias
     // every primitive or object,function,array type defined you can use type alias but typescript interface not possible
     type TAge = number;
     type TEmail = { email: string };
     type TUser = TEmail & {
       name: string;
       age: TAge;
     };

     // type alias function
     type TAdd = (num1: number, num2: number) => number;
     type TFriends = string[];

     // interface
     // every object,function,array type defined you can use interface
     // object interface or extends
     interface Email {
       email: string;
     }
     interface User extends Email {
       name: string;
       age: number;
     }
     // function interface
     interface Add {
       (num1: number, num2: number): number;
     }
     // array interface
     interface RollNo {
       // index type is ( number ) : number type array
       [index: number]: number;
     }
     // use type alias or interface in object,function and array:

     // object
     const user1: TUser = {
       name: "Rayhan",
       age: 25,
       email: "rayhan@gmail.com",
     };
     const user2: User = {
       name: "sabbir",
       age: 25,
       email: "sabbir@gmail.com",
     };

     // function
     const add: TAdd = (num1, num2) => num1 + num2;
     const multiply: Add = (num1, num2) => num1 * num2;

     // array
     const rollNumber: RollNo = [1, 3, 5, 7];
     //  0 1 2 3 --> index number type
     const friends: TFriends = ["Rayhan", "sabbir", "sakib"];
   }
   ```

## Reference:

[Typescript type alias vs interface docs](https://www.geeksforgeeks.org/what-is-the-difference-between-interface-and-type-in-typescript/)\*\*\*\*

# 2.3 **Introduction to generics**

**********\*\***********Date: 4/11/23**********\*\***********

1. Generics offer a way to create reusable components. Generics provide a way to make components work with any data type and not restrict to one data type. So, components can be called or used with a variety of data types. Generics in TypeScript is almost similar to C# generics.
2. the type variable `T` is specified with the function in the angle brackets `getArray<T>`.The type variable `T` is also used to specify the type of the arguments and the return value.This means that the data type which will be specified at the time of a function call, will also be the data type of the arguments and of the return value.

   ```tsx
   //example with function
   function getArray<T>(items: T[]): T[] {
     return new Array<T>().concat(items);
   }
   getArray<string>(["Rayhan", "iqbal"]);
   ```

3. Generics with type alias code example:

   ```tsx
   {
     // generics type

     // example with array
     type GenericArray<T> = T[];
     const serialNo: GenericArray<number> = [1, 3, 4, 5, 6];
     const friends: GenericArray<string> = [
       "Rayhan",
       "IQbal",
       "faisal",
       "Miraz",
     ];
     const isMyFriends: GenericArray<boolean> = [true, false, false, true];

     // example with tuples
     type genericsTuples<X, Y> = [X, Y];
     const couple: genericsTuples<string, string> = ["Mr. Rayhan", "Mr. Rima"];
     const userWithId: genericsTuples<number, { name: string; age: number }> = [
       1234,
       { name: "Rayhan", age: 25 },
     ];

     // example with object
     type TPerson<ID, SKILLS> = {
       id: ID;
       name: string;
       age: number;
       contact: string;
       skills: SKILLS;
     };

     const person: TPerson<number, string[]> = {
       id: 1234,
       name: "Rahat",
       age: 25,
       contact: "01776464695",
       skills: ["html", "css", "javascript"],
     };
   }
   ```

## Reference:

1. Typescript Generics documentation:
   [TypeScript Generics](https://www.tutorialsteacher.com/typescript/typescript-generic)

# 2.4 Generic with interface

**Date: 4/11/23**

1. generic type also using to interface

   1. there are created a Developer interface and Device interface are object type of array set to devices property
   2. T or X is a generic params
   3. you can set generic type params default value : X = null (defalut value is null)

   ```tsx
   // Generic with interface
   interface Device {
     category: string;
     brand: string;
     model: string;
     releaseYear: number;
   }
   // T,X = params
   interface Developer<T, X = null> {
     // default value set is null
     name: string;
     email: string;
     devices: Device[];
     smartWatch: T; // dynamic type set
     bike?: X; // dynamic type set
   }
   ```

2. created an object with above Developer interface type structure:

   1. create a NormalSmartWatch interface type
   2. then NormalSmartWatch set to Developer type first parameter

   ```tsx
   // generic smartwatch type create
   interface NormalSmartWatch {
     brand: string;
     model: string;
     display: string;
     releaseYear: number;
   }

   // create a object with generic types
   const poorDeveloper: Developer<NormalSmartWatch> = {
     name: "Rayhan",
     email: "rayhanmujumdar@gmail.com",
     devices: [
       {
         category: "Laptop",
         brand: "LG",
         model: "Y-9563",
         releaseYear: 2015,
       },
     ],
     smartWatch: {
       brand: "appleClone",
       model: "Z-9998",
       display: "LCD",
       releaseYear: 2020,
     },
   };
   console.log(poorDeveloper);
   ```

3. created an another object with Developer interface type
   1. there a two params to Developer interface
   2. one params is AppleWatch
   3. or another params is YamahaBike

```ts
// generic smartwatch type create
interface AppleWatch {
  brand: string;
  model: string;
  display: string;
  sleepTrack: boolean;
  heartbeatTrack: boolean;
}
// generic bike type create
interface YamahaBike {
  brand: string;
  model: string;
  power: string;
  dickBreakPad: boolean;
}

const richDeveloper: Developer<AppleWatch, YamahaBike> = {
  name: "Shariar",
  email: "shariar@gmail.com",
  devices: [
    {
      category: "Phone",
      brand: "Apple",
      model: "I phone 15",
      releaseYear: 2023,
    },
  ],
  smartWatch: {
    brand: "apple",
    model: "15 series",
    display: "OLED",
    heartbeatTrack: true,
    sleepTrack: true,
  },
  bike: {
    brand: "YAMAHA",
    model: "V3",
    power: "21 HP",
    dickBreakPad: true,
  },
};
console.log(richDeveloper);
```


# 2.5 Function with Generics

**Date : 4/11/23**

1. Function with generics code example:
    
    ```tsx
    {
      // Function with generics
      const createWithGeneric = <T>(param: T): T[] => {
        return [param];
      };
    
      createWithGeneric<string>("Bangladesh");
      createWithGeneric<number>(255);
    
      // generic with Tuples
      const createWithTuple = <T, Y>(param1: T, param2: Y): [T, Y] => {
        return [param1, param2];
      };
      createWithTuple<string, number>("Bangladesh", 244);
      createWithTuple<{ tips: string }, boolean>(
        { tips: "always be honest" },
        true
      );
    
      //
      const addCourseToStudent = <T>(student: T): T & { course: string } => {
        const course = "Next level web development";
        return {
          ...student,
          course,
        };
      };
    // student1 create a dynamic type
      type Student1 = {
        name: string;
        skills: string[];
      };
      const student1 = addCourseToStudent<Student1>({
        name: "Rayhan",
        skills: ["javascript", "React", "node"],
      });
    // student2 create a dynamic type
      type Student2 = {
        name: string;
        email: string;
      };
      const student2 = addCourseToStudent<Student2>({
        name: "sabbir",
        email: "rayhan@gmail.com",
      });
      //
    }
    ```
    
    ## Reference:
    
    1. **Generic Functions in TypeScript**
     [Generic Functions in TypeScript - Scaler Topics](https://www.scaler.com/topics/typescript/generic-functions-in-typescript/)


     # 2.6 Contraints in typescript

**Date : 5/11/23**

1. example with constraints in typescript in this below:
    
    ```tsx
    {
      //  constraints in typescript
      type UserInfo = { name: string; email: string };
      const addCourseToStudent = <T extends UserInfo>( // generic type param value must have UserInfo property
        student: T
      ): T & { course: string } => {
        const course = "Next level web development";
        return {
          ...student,
          course,
        };
      };
      const student1 = addCourseToStudent({
        name: "Rayhan",
        email: "rayhan@gmail.com",
        skills: ["javascript", "React", "node"],
      });
      const student2 = addCourseToStudent({
        name: "sabbir",
        email: "rayhan@gmail.com",
      });
      const student3 = addCourseToStudent({ disgusting: "very poor" }); //
      // error
      /* 
        Argument of type '{ disgusting: string; }' is not assignable to parameter of type 'UserInfo'.
      Object literal may only specify known properties, and 'disgusting' does not exist in type 'UserInfo'.
      */
      //
    }
    ```
    
    1. you need more better example, please visit **Reference link**
    

## Reference:

1. **TypeScript Generic Constraints**
   [TypeScript Generic Constraints](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)


# 2.7 Constraint using keyof operator

**Date : 5/11/23**

1. keyof operator code example:
    
    ```tsx
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
    ```
    
    ## Reference:
    
    1. Typescript keyof type operator (GeeksforGeeks)
        
        [Typescript Keyof Type Operator - GeeksforGeeks](https://www.geeksforgeeks.org/typescript-keyof-type-operator/)
        
    2. **Constraint using keyof operator**
      [TypeScript Generic Constraints](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)


# 2.8 Typescript Asynchronous

**Date : 5/11/23**

1. Typescript  default async type is Promise<unknown>
2. Typescript asynchronous code example:
    
    ```tsx
    {
      // asynchronous Typescript
      // Promise
      // fetch data
      type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
      };
      const getTodo = async function (): Promise<Todo | undefined> {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const data = await response.json();
          console.log(data);
          return data;
        } catch (err) {
          console.log(err);
        }
      };
      getTodo();
      // simulate
      // Promise example 1:
    
      type User = {
        name: string;
        age: number;
        contact: string;
        isMarried: boolean;
      };
    
      const createPromise = (isNeedData: boolean): Promise<User> => {
        return new Promise<User>((resolve, reject) => {
          const data: User = {
            name: "Rayhan",
            age: 25,
            contact: "01776464695",
            isMarried: false,
          };
          if (isNeedData) {
            resolve(data);
          } else {
            reject("failed to load data");
          }
        });
      };
    
      // calling create promise function
      type Error = string;
      const showData = async function () {
        try {
          const data: User = await createPromise(false);
          console.log(data);
        } catch (err) {
          console.log(err as Error); // using assertion
        }
      };
      showData();
    
      // Promise example 2:
    
      const printDelay = async function (elements: string[], millisecond: number) {
        for(const element of elements){
            await delay(400)   
            console.log(element);
        }
      };
      const delay = function (millisecond: number): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(resolve, millisecond);
        });
      };
      printDelay(["Hello", "my", "dear", "bangladesh"], 400);
    
      //
    }
    ```
    

## Reference:

1. Typescript async await docs:
    [Documentation - TypeScript 1.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html)


    # 2.9 Conditional Types

**Date : 5/11/23**

1. এমন কোনো টাইপ যদি অন্য কোনো টাইপের উপর নির্বর করে কোনো একটা কন্ডিশনের উপর ভিত্তি করে  সেটাই হচ্ছে conditional types.
2. conditional Types code example:
    
    ```tsx
    {
        // conditional typescript
        type a1 = null
        type b1 = undefined
    
        // javascript conditional expressions syntax
        type c1 = a1 extends string ? true : false
        type d1 = a1 extends number ? b1 extends string ? string : number : null // nested check condition
    
        type RichMan  = {
            bike: string,
            car: string,
            ship: string,
            plane: string
        }
    
        // keyof RichMan "bike" | "car" | "ship"
        // car ase kina / bike ace kina / ship ace kina / plane ace kina
        type CheckVehicle<T> = T extends keyof RichMan ? true : false
    
        type HasPlane = CheckVehicle<"track"> // HasPlan = false
    
        //
    }
    ```
    

## Reference:

1. Conditional types docs
  [Documentation - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)


  # 2.10 Mapped Types & using look up

**Date : 6/11/23**

1. Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:
2. Typescript Mapped Types code example:
    
    ```tsx
    {
        // Mapped types
        // javascript map
        const arrOfNumber: number[] = [1,4,5] 
    
        // convert arrOfNumber to arrOfString String ==> ['1','4','5']
        const arrOfString:string[] = arrOfNumber.map((num: number) => num + '')
        console.log(arrOfString);
    
        // Typescript Mapped Type
    
        type AreaOfNumber = {
            width: number,
            height: number
        }
        // this is not good practice because AreaOfNumber or AreaOfString almost same types
        // type AreaOfString = {
        //     width: string,
        //     height: string
        // }
        type Height = AreaOfNumber['height'] // this called (look up type)
        // now use typescript Map create AreaOfString types
        // keyof  => array key
        type AreaOfString = {
            [key in keyof AreaOfNumber] : string // mapped in every property type
        }
    
        // now using Map with generic:
        type ThreeDimensional<T> = {
            [key in keyof T] : T[key] // this a look up types
        }
    
        const threeDimensional:ThreeDimensional<{width: number;height: number;length: string}> = {
            width: 100,
            height: 200,
            length: '150'
        }
        console.log(threeDimensional);
    
    }
    ```
    
3. Advance Mapped typed usage code example:
    
    ```tsx
    // You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.
        // Removes 'readonly' attributes from a type's properties
        type CreateMutable<T> = {
            -readonly [key in keyof T] : T[key]
        }
        type LockedAccount = {
            readonly id: number | string;
            readonly name: string
        }
    
        type UnLockedAccount = CreateMutable<LockedAccount>
        // Removes 'optional' attributes from a type's properties
        type Concrete<T> = {
            [key in keyof T]-? : T[key] // => this is look up type
        }
        type MaybeUser = {
            id: string,
            name?: string,
            age?:number
        }
        type User = Concrete<MaybeUser>
        // Key Remapping via * as *
        type Getters<T> = {
            [key in keyof T as `get${Capitalize<string & key>}`] : () => T[key]
        }
        interface Person {
            name: string;
            age: number;
            location: string
        }
        type LazyPerson = Getters<Person>
    ```
    

## Reference:

1. Mapped types docs:
[Documentation - Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

# 2.11 Utility types (Pick, Omit, require, partial, readonly, **Record**)

1. **Pick<Type, Keys>** utility
    1. Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`.
    
    ```tsx
    // pick Utility
        type Person = {
            name: string,
            age: number,
            email?: string,
            contactNo: string
        }
        type PickPerson = Pick<Person,"name" | "email">
        /* now PickPerson type structure
            type PickPerson = {
                name: string;
                email?: string | undefined;
            }
        */
    ```
    
2. **Omit<Type, Keys>** Utility
    1. Constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals). The opposite of [Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys).
    
    ```tsx
    // omit Utility
        type OmitPersonProperty = Omit<Person,"contactNo">
        /* now OmitPersonProperty type structure
            type OmitPersonProperty = {
                name: string;
                email?: string | undefined;
                age: string;
            }
        */
    ```
    
3. **Partial<Type>** Utility
    1. Constructs a type with all properties of `Type` set to optional. This utility will return a type that represents all subsets of a given type.
    
    ```tsx
    // partial/optional Utility
        type PersonPartial = Partial<Person>
        /* PersonPartial type output
            type PersonPartial = {
                name?: string | undefined;
                age?: string | undefined;
                email?: string | undefined;
                contactNo?: string | undefined;
            }
        */
    ```
    
4. **Required<Type>** Utility
    1. Constructs a type consisting of all properties of `Type` set to required. The opposite of `[Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)`.
    
    ```tsx
    // required Utility
       type PersonRequired = Required<Person>
       /* PersonRequired Type output
            type PersonRequired = {
                name: string;
                age: string;
                email: string;
                contactNo: string;
            }
       */
    ```
    
5. **ReadOnly<Type>** Utility
    1. Constructs a type with all properties of `Type` set to `readonly`, meaning the properties of the constructed type cannot be reassigned.
    
    ```tsx
    //Readonly Utility
        type PersonLocked = Readonly<Person>
    
        const person1:PersonLocked = {
            name: 'rayhan',
            age: 24,
            contactNo: '01774154545'
        }
        // error: Cannot assign to 'name' because it is a read-only property.
        // person1.name = 'sabbir'
    ```
    
6. **Record<Keys, Type> Utility**
    1. Constructs an object type whose property keys are `Keys` and whose property values are `Type`. This utility can be used to map the properties of a type to another type.
    
    ```tsx
    // Record Utility
        
        type MyObj = Record<string,string>
        const obj1:MyObj = {
            a: 'aa',
            b: 'bb',
            c: 'cc',
            // d: 11 error: Type 'number' is not assignable to type 'string'.
        }
        
        const emptyObj: Record<string,unknown> = {}
        emptyObj.id = 123
        emptyObj.userId = '234'
    ```
    
    ## Reference:
    1. Typescript important Utility types  docs:
    [Documentation - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
