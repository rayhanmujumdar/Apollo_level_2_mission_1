{
    // generics type

    //example with function
    function getArray<T>(items: T[]): T[]{
        return new Array<T>().concat(items)
    }
    getArray<string>(['Rayhan',"iqbal"])

    // example with array
    type GenericArray<T> = T[]
    const serialNo:GenericArray<number> = [1,3,4,5,6]
    const friends:GenericArray<string> = ['Rayhan','IQbal','faisal','Miraz']
    const isMyFriends: GenericArray<boolean> = [true,false,false,true]

    // example with tuples
    type genericsTuples<X,Y> = [X,Y]
    const couple : genericsTuples <string,string> = ['Mr. Rayhan', "Mr. Rima"]
    const userWithId: genericsTuples<number,{name: string,age: number}> = [1234,{name: 'Rayhan',age: 25}]

    // example with object
    type TPerson<ID,SKILLS> = {
        id: ID
        name: string,
        age: number,
        contact: string
        skills: SKILLS
    }

    const person: TPerson<number,string[]> = {
        id: 1234,
        name: 'Rahat',
        age: 25,
        contact: '01776464695',
        skills: ['html','css', 'javascript']
    }

}