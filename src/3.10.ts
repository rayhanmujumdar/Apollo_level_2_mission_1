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
