{
  // learning function
  // Normal function
  // Arrow function

  function add(x: number, y: number = 10): number {
    return x + y;
  }

  add(2, 2);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method

  const poorUser = {
    name: "Rayhan",
    balance: 0,
    addBalance(balance: number): string {
      return `My new Balance is : ${this.balance + balance}`;
    },
  };

  poorUser.addBalance(20);

  const arrOfNum: number[] = [1, 4, 5];
  const newArrOfNum = arrOfNum.map((elem: number): number => elem * elem);
}
