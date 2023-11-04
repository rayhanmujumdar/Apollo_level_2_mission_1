# 2.1 - Type assertion / type narrowing

**Date : 3/11/23**

**Type Assertion in TypeScript:**

1. Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.
2. Using the angular bracket <> syntax.
    
    ```tsx
    let code: any = 123; 
    let employeeCode = <number> code;
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


# 2.2  type alias vs interface

**Date : 4/11/23**

1. Both the methods **Type** and the **Interface** are used to describe the structure of the objects in TypeScript. But holds some specific features that will be helpful according to the situation, choosing between them and totally depends on the developer.
2. { class practice } type alias or interface code example:
    
    ```tsx
    {
        
        // type alias
        // every primitive or object,function,array type defined you can use type alias but typescript interface not possible
        type TAge = number
        type TEmail = { email: string }
        type TUser = TEmail & {
            name: string,
            age: TAge
        }
    
        // type alias function
        type TAdd = (num1:number,num2: number) => number
        type TFriends = string[]
    
        // interface
        // every object,function,array type defined you can use interface
        // object interface or extends
        interface Email {
            email: string
        }
        interface User extends Email {
            name: string,
            age: number
        }
        // function interface
        interface Add {
            (num1: number, num2: number) : number
        }
        // array interface
        interface RollNo {
            // index type is ( number ) : number type array
            [index: number] : number
        }
        // use type alias or interface in object,function and array:
    
        // object
        const user1: TUser = {
            name: 'Rayhan',
            age: 25,
            email: 'rayhan@gmail.com'
        }
        const user2: User = {
            name: 'sabbir',
            age: 25,
            email: 'sabbir@gmail.com'
        }
    
        // function
        const add:TAdd = (num1 ,num2) => num1 + num2
        const multiply:Add = (num1,num2) => num1 * num2
    
        // array
        const rollNumber:RollNo = [1,3,5,7]
                                //  0 1 2 3 --> index number type
        const friends:TFriends = ['Rayhan',"sabbir","sakib"]
    
    }
    ```
    

## Reference:

[Typescript type alias vs interface docs](https://www.geeksforgeeks.org/what-is-the-difference-between-interface-and-type-in-typescript/)