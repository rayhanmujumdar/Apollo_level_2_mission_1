"use strict";
{
    // learning function
    // Normal function
    // Arrow function
    function add(x, y = 10) {
        return x + y;
    }
    add(2, 2);
    const addArrow = (num1, num2) => num1 + num2;
    // object --> function --> method
    const poorUser = {
        name: "Rayhan",
        balance: 0,
        addBalance(balance) {
            return `My new Balance is : ${this.balance + balance}`;
        },
    };
    poorUser.addBalance(20);
    const arrOfNum = [1, 4, 5];
    const newArrOfNum = arrOfNum.map((elem) => elem * elem);
}
