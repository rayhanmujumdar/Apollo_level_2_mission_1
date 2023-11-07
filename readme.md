# 3.1 Class and object

**Date : 7/11/23**

1. Class code example:
    
    ```tsx
    // OOP class
    class Animal {
        public name: string;
        public species: string;
        public sound: string;
        constructor(name: string,species: string,sound: string){
            this.name = name
            this.species = species
            this.sound = sound
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }
    
    const dog = new Animal("German shepard  bhai", "dog","Ghew Ghew")
    const cat = new Animal("Persian bhai", "cat","meaw meaw")
    
    console.log(dog);
    console.log(cat);
    ```
    
2. Class code more simplified:
    
    ```tsx
    {
      // OOP class
      class Animal {
        // parameter properties
        constructor(public name: string, public species: string,public sound: string) {}
        makeSound() {
          console.log(`The ${this.name} says ${this.sound}`);
        }
      }
    
      const dog = new Animal("German shepard  bhai", "dog", "Ghew Ghew");
      const cat = new Animal("Persian bhai", "cat", "meaw meaw");
    
      console.log(dog);
      console.log(cat);
    }
    ```
    

## Reference:
1. Typescript class docs:
[TypeScript Classes](https://www.tutorialsteacher.com/typescript/typescript-class)

# 3.2 - Inheritance in OOP

**Date: 6/11/23**

1. {Class Practice} Inheritance Code example:
    
    ```tsx
    {
      // OOP - Inheritance
      // parent class of Person
      class Person {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
          this.name = name;
          this.age = age;
          this.address = address;
        }
        getSleep(numOfHour: number) {
          console.log(`${this.name} will sleep for ${numOfHour} hour`);
        }
      }
      // student inherit Person Class
      class Student extends Person {
        RollNo: number;
        constructor(name: string, age: number, address: string, RollNo: number) {
          super(name, age, address);
          this.RollNo = RollNo;
        }
        getRead(numOfHourRead: number){
            console.log(`${this.name} everyday total ${numOfHourRead} hour read`);
        }
      }
      // Teacher inherit Person Class
      class Teacher extends Person {
        designation: string;
        constructor(
          name: string,
          age: number,
          address: string,
          designation: string
        ) {
          super(name, age, address);
          this.designation = designation;
        }
        takeClass(numOfClass: number) {
          console.log(`${this.name} will take ${numOfClass}`);
        }
      }
      const student1 = new Student("Mr. Rayhan", 20, "Bangladesh",1);
      const teacher1 = new Teacher("Mr. sabbir", 50, "Bangladesh", "professor");
    
      student1.getSleep(8);
      student1.getRead(5)
      teacher1.takeClass(5);
    }
    ```
    
    1. {Class Practice} inheritance code more simplified:
    
    ```tsx
    {
      // OOP - Inheritance
      // parent class of Person
      class Person {
        constructor(
          public name: string,
          public age: number,
          public address: string
        ) {}
        getSleep(numOfHour: number) {
          console.log(`${this.name} will sleep for ${numOfHour} hour`);
        }
      }
      // student inherit Person Class
      class Student extends Person {
        constructor(
          name: string,
          age: number,
          address: string,
          public RollNo: number
        ) {
          super(name, age, address);
        }
        getRead(numOfHourRead: number) {
          console.log(`${this.name} everyday total ${numOfHourRead} hour read`);
        }
      }
      // Teacher inherit Person Class
      class Teacher extends Person {
        constructor(
          name: string,
          age: number,
          address: string,
          public designation: string
        ) {
          super(name, age, address);
        }
        takeClass(numOfClass: number) {
          console.log(`${this.name} will take ${numOfClass}`);
        }
      }
      const student1 = new Student("Mr. Rayhan", 20, "Bangladesh", 1);
      const teacher1 = new Teacher("Mr. sabbir", 50, "Bangladesh", "professor");
    
      student1.getSleep(8);
      student1.getRead(5);
      teacher1.takeClass(5);
    }
    ```
    
    ## Reference:
    
1. Typescript Inheritance docs:
[TypeScript Inheritance](https://www.typescripttutorial.net/typescript-tutorial/typescript-inheritance/)

[TypeScript Inheritance - GeeksforGeeks](https://www.geeksforgeeks.org/typescript-inheritance/)

# 3.3 - ****Type guard using typeof & in****

**Date : 7/11/23**

1. typeof & in guard use in typescript code example:
```tsx
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
```

# 3.4 - Type guard using instance of

**Date : 7/11/23**

1. Type guard using instance of → code example:
    
    ```tsx
    {
      // Type guard using instance of
      class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
          this.name = name;
          this.species = species;
        }
        makeSound() {
          console.log("I am making sound");
        }
      }
      // Dog inherit Animal
      class Dog extends Animal {
        constructor(name: string, species: string) {
          super(name, species);
        }
        makeBark() {
          console.log("I am Barking");
        }
      }
    // Cat inherit Animal
      class Cat extends Animal {
        constructor(name: string, species: string) {
          super(name, species);
        }
        makeMeaw() {
          console.log("I am mewaing");
        }
      }
      // create a dog or cat object
      const dog = new Dog("Dog Bhai", "dog");
      const cat = new Cat("Dog Bhai", "dog");
    
      // using instance of
      // handle smartly
      const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
      };
    
      const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
      };
    
      const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
          animal.makeBark();
        } else if (isCat(animal)) {
          animal.makeMeaw();
        } else {
          animal.makeSound();
        }
      };
    
      getAnimal(dog);
      getAnimal(cat);
    }
    ```
    
    ## Reference:
    
    1. Instance of type guard docs:[Typescript Instanceof Type Guard - TekTutorialsHub](https://www.tektutorialshub.com/typescript/typescript-instanceof-type-guard/)

# 3.5 - Access Modifiers

**Date : 7/11/23**

1. { Class practice } Access Modifier code example: 
    
    ```tsx
    {
      // * Access Modifier
      class BankAccount {
        // { id } only read not modify
        readonly id: number;
        // private property only modify own class
        private _name: string;
        // protected modify every classes with inherited classes
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
          this.id = id;
          this._name = name;
          this._balance = balance;
        }
        public addMoney(money: number) {
          this._balance += money;
        }
        public get getBalance(){
            return this._balance
        }
      }
    
      // StudentAccount classes
      class Student extends BankAccount {
        test() {
          //Property '_name' is private and only accessible within class 'BankAccount'
          // this._name
          // perfectly getting because balance is protected property
          return this._balance;
        }
      }
      const myAccount = new BankAccount(233, "Rayhan", 55);
      // id or balance is my important data property. so this property should not be changed
      // myAccount.balance = 0
      // myAccount.id = 3432
      myAccount.addMoney(50);
      console.log(myAccount.getBalance);
    }
    ```
    

## Reference:

1. typescript Access modifier docs:[TypeScript Access Modifiers](https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/)

# 3.6 - Getter and Setter

**Date : 7/ 11/23**

1. In TypeScript, there are two supported methods getter and setter to access and set the class members.
    - **getter:** This method comes when you want to access any property of an object. A getter is also called an accessor.
    - **setter:** This method comes when you want to change any property of an object. A setter is also known as a mutator.
2. Getter and setter practice code example: 
    
    ```tsx
    {
      // Getter and Setters
      class Teacher {
        private _name: string;
        private _age: number;
        protected _subject: string[];
        constructor(name: string, age: number, subject: string) {
          this._name = name;
          this._age = age;
          this._subject = [subject]
        }
        get name() {
          return this._name;
        }
        set name(value: string) {
          this._name = value;
        }
        get age() {
            return this._age
        }
        get subject ():string[]{
            return this._subject
        }
        set subject(sub:string){
            this._subject.push(sub)
        }
      }
    
      class Department {
        private _name: string;
        readonly year: number;
        private _teacher: Teacher[];
        protected _balance: number;
        constructor(
          name: string,
          year: number,
          teacher: Teacher[],
          balance: number
        ) {
          this._name = name;
          this.year = year;
          this._teacher = teacher;
          this._balance = balance;
        }
        set addTeacher(teacher: Teacher) {
            this._teacher.push(teacher)
        }
        set deposit(amount: number) {
          this._balance += amount;
        }
        get balance() {
          return this._balance;
        }
        get name() {
            return this._name
        }
        set name(value: string) {
            this._name = value
        }
        get teacher(){
            return this._teacher
        }
      }
    // getter or setter using benefit is without calling function you can set you data: example in this below
      const teacher1 = new Teacher('Anower hossain',40,'English')
      const teacher2 = new Teacher('Ratul iqbal',45,'Bangla')
      const teacher3 = new Teacher('Rahamat ali',48,'Math')
      teacher1.subject = 'psychology'
      console.log(teacher1.subject)
     const myDepartment = new Department("Al kawser school", 1996,[teacher1,teacher2],50)
     myDepartment.deposit = 50
     myDepartment.addTeacher = teacher3
      console.log(myDepartment);
    
      //
    }
    ```
    

## Reference:

1. Typescript Getter and Setter code example:[How to use getters/setters in TypeScript ? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-use-getters-setters-in-typescript/)

# 3.7 - Static in OOP

**Date : 7/11/23**

1. ES6 includes static members and so does TypeScript. The static members of a class are accessed using the class name and dot notation, without creating an object e.g. <ClassName>.<StaticMember>.
2. The static members can be defined by using the keyword *static*. Consider the following example of a class with static property.
3. Static in OOP practice:
    
    ```tsx
    {
        // Static in OOP
        class Counter {
            static count : number = 0
            static increment(value:number = 1) {
                Counter.count += value
            }
            static decrement(value: number = 1){
                Counter.count -= value
                if(Counter.count < 0) {
                    Counter.count = 0
                    throw new Error(`Count value less then ${Counter.count}. no more decrement`)
                }
            }
        } 
    
        // store different memory size
        // const count1 = new Counter()
        // count1.increment(6)
        // console.log(count1.count);
    
        // store different memory size
        // const count2 = new Counter()
        // count2.increment(10)
        // console.log(count2.count);
    
        // create static Counter
        Counter.increment(5) // count = 5
        Counter.increment(10) // count = 15
        Counter.decrement(4) // count = 11
        Counter.decrement(11) // count = 11
        console.log(Counter.count); // there are count value access static.no calling Counter class
        //
    }
    ```
    
    ## Reference:
    
    1. Typescript Static docs:
        
        [TypeScript Static](https://www.tutorialsteacher.com/typescript/typescript-static)
# 3.8 - Polymorphism
**Date : 7/11/23**

1. What is Polymorphism?
    1. Polymorphism means many forms of a function or method in a class
    2. Typescript supports the polymorphism concept in many ways.
        - function overloading
        - function overriding
        - Interface
        
2. Polymorphism  practice example:
    
    ```tsx
    // Polymorphism -> Bangla meaning is -> bohorupi
        class Person{
            getWorking(){
                console.log(`Every worker can do 8 hours work in her company`);
            }
        }
    
        class Employee extends Person{
            getWorking(): void {
                console.log(`Every employee can do 7 hours work in her company`);
            }
        }
    
        class Teacher extends Person{
            getWorking(): void {
                console.log(`Every Teacher can do 6 hours teaching her student`);
            }
        }
    
        const getEveryPersonWorkHours = (param: Person) => {
            param.getWorking()
        }
    
        const person = new Person()
        const employee = new Employee()
        const teacher = new Teacher()
    
        getEveryPersonWorkHours(person)
        getEveryPersonWorkHours(employee)
        getEveryPersonWorkHours(teacher)
    
        // more example: 
        class Shape{
            // must needed concept
            // every class  polymorphism method are same shape.
            // if you do any method use params. you must have do use every method same shape of params
            getArea():number{
                return 0
            }
        }
    
        class Circle extends Shape{
            radius: number
            constructor(radius: number){
                super()
                this.radius = radius
            }
            getArea(): number {
                return Math.PI * (this.radius * this.radius)
            }
        }
    
        class Rectangle extends Shape{
            height: number
            width: number
            constructor(height: number,width:number){
                super()
                this.height = height
                this.width = width
            }
            getArea(): number {
                return this.width * this.height
            }
        }
        const shape = new Shape()
        const circle = new Circle(10)
        const rectangle = new Rectangle(50,30)
        const getShapeArea = function (params: Shape){
            console.log(params.getArea());
        }
    
        // every instance are same method (getArea) but deferent value return. this is a call Polymorphism
        getShapeArea(shape)
        getShapeArea(circle)
        getShapeArea(rectangle)
    ```
    

## Reference: More details

1. Polymorphism tutorial - 1:
    
    [Typescript Polymorphism with examples](https://www.cloudhadoop.com/2018/09/typescript-understanding-polymorphism.html)
    
2. Polymorphism tutorial - 1:
    
    [Polymorphic this Type in TypeScript  | DigitalOcean](https://www.digitalocean.com/community/tutorials/typescript-polymorphic-this)


# 3.9 - Abstraction in OOP

**Date: 7/11/23**

1. Define an abstract class in Typescript using the `abstract` keyword. Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.
2. An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods.
3. Abstraction practice code example:
    
     
    
    ```tsx
    {
      // abstraction
      interface Player1 {
        start(): void;
        next(): void;
        previous(): void;
        pause(): void;
      }
      // real implementation
      class MusicPlayer1 implements Player1 {
        start(): void {
          console.log(`Start A new song`);
        }
        next(): void {
          console.log(`next button clicked for changing song`);
        }
        previous(): void {
          console.log(`get back to my previous song`);
        }
        pause(): void {
          console.log(`now time is prayer time. so i pause my music`);
        }
        test() {
          console.log(`All ok to my music player`);
        }
      }
      // generally created instance of MusicPlayer1 class
      const musicPlayer = new MusicPlayer1();
      console.log(musicPlayer.start());
      // abstract class
      // abstract class does'nt create instance. this is only shape of child class
      // for example:
      // idea
     abstract class Player2 {
        abstract start(): void;
        abstract next(): void;
        abstract previous(): void;
        abstract pause(): void;
        test() {
          console.log(`All ok to my music player`);
        }
      }
    
      // Cannot create an instance of an abstract class.
      // const musicPlayer2 = new MP3()
      class MusicPlayer2 extends Player2 {
        start(): void {
          console.log(`Start A new song`);
        }
        next(): void {
          console.log(`next button clicked for changing song`);
        }
        previous(): void {
          console.log(`get back to my previous song`);
        }
        pause(): void {
          console.log(`now time is prayer time. so i pause my music`);
        }
        test(): void {
            console.log(`All ok to my music player`);
        }
      }
    
      const musicPlayer2 = new MusicPlayer2()
      console.log(musicPlayer);
    }
    ```
    
    ## Reference:
    
    1. Typescript **Abstraction  docs:**[TypeScript Abstract Class](https://www.tutorialsteacher.com/typescript/abstract-class)

# 3.10 - ****Encapsulation in OOP****

**Date: 8/11/23**

1. What is Encapsulation?
    1. Answer : Encapsulation is defined as the wrapping up of data under a single unit.
    It is the mechanism that binds together code and the data it manipulates.
    Another way to think about encapsulation is, that it is a protective shield
    that prevents the data from being accessed by the code outside this shield.
2. 3.5 Module I am doing already completed ****Encapsulation → [go to 3.5 → access modifier](https://www.notion.so/3-5-Access-Modifiers-d2640bb92b7c411ba5ac09da6117037f?pvs=21)**
3. Encapsulation in OOP practice example: 
    
    ```tsx
    {
      //  * Encapsulation
      class Family {
        // { id } only read not modify
        readonly id: number;
        // private property only modify own class
        private _member: number;
        // protected modify every classes with inherited classes
        protected _familyBalance: number;
        constructor(id: number, member: number, familyBalance: number) {
          this.id = id;
          this._member = member;
          this._familyBalance = familyBalance;
        }
        public familyIncome(money: number = 1) {
          this._familyBalance += money;
        }
        public familyCost(value: number = 1) {
          this._familyBalance -= value;
        }
        public get familyBalance() {
          return this._familyBalance;
        }
        get member(): number {
          return this._member;
        }
      }
    
      // StudentAccount classes
      class Student extends Family {
        test() {
          // Property '_name' is private and only accessible within class 'Family'
          // this._name
          // perfectly getting familyBalance because balance is protected property
          return this._familyBalance;
        }
      }
      const myAccount = new Family(233, 10, 55);
      // id or familyBalance is my important data property. so this property should not be changed
      //Error: Cannot assign to 'familyBalance' because it is a read-only property.
      //   myAccount.familyBalance = 0 
      // Error: Cannot assign to 'id' because it is a read-only property.ts(2540)
      //   myAccount.id = 3432 
      myAccount.familyIncome(50);
      console.log(myAccount.familyBalance);
    }
    ```
    

## Reference:

1. Encapsulation definition:[Encapsulation - definition & overview | Sumo Logic](https://www.sumologic.com/glossary/encapsulation/)