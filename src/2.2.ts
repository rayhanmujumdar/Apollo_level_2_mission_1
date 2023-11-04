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