{
    // type guards

    // typeof --> type guard
    type Alphanumeric = string | number

    const add = (param1: Alphanumeric,param2 : Alphanumeric) : Alphanumeric  => {   
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2
        }else {
            return param1.toString() + param2.toString()
        }
    }
    const result1 = add('3', '5')
    const result2 = add(5,5)
    console.log(result1);
    console.log(result2);

    // in --> in guard
    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) : string => {
        if('role' in user){
            return `My name is ${user.name} and my role is ${user.role}`
        }else {
            return `My name is ${user.name}`
        }
    }

    const normalUser: NormalUser = {
        name: 'Rahat hossain'
    }
    const adminUser: AdminUser = {
        name: 'Rayhan Mojumdar',
        role: 'admin'
    }

    const user1 = getUser(normalUser)
    const user2 = getUser(adminUser)

    console.log(user1);
    console.log(user2);

}