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
