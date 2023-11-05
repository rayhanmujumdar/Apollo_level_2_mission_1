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
    //

}