{
    // Utility Types
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
    // omit Utility
    type OmitPersonProperty = Omit<Person,"contactNo">
    /* now OmitPersonProperty type structure
        type OmitPersonProperty = {
            name: string;
            email?: string | undefined;
            age: string;
        }
    */
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

    //Readonly Utility
    type PersonLocked = Readonly<Person>

    const person1:PersonLocked = {
        name: 'rayhan',
        age: 24,
        contactNo: '01774154545'
    }
    // error: Cannot assign to 'name' because it is a read-only property.
    // person1.name = 'sabbir' 

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
}