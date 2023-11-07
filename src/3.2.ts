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
