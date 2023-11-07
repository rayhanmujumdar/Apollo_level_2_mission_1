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
