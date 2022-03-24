"use strict";
// Getting all html classes
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const star = document.querySelector(".star");
const slash = document.querySelector(".slash");
const display = document.querySelector(".calc-screen");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");
const numbers = document.querySelectorAll("#num");
const operators = document.querySelectorAll("#operator");

// Initial values
let initialInput = "";
let secondinitialInput = "";
let chosenOperater = "";
let buttonPressed = false;

// Function that allows calculator to add an infinite amount of numbers
const add = function (...theNums) {
  return theNums.reduce((totalSum, num) => {
    return totalSum + num;
  }, 0);
};

// Function that allows calculator to subtract an infinite amount of numbers
const subtract = function (...theNums) {
  return theNums.reduce((total, num) => {
    return total - num;
  });
};

// Function that allows calculator to multiply an infinite amount of numbers
const multiply = function (...theNums) {
  return theNums.reduce((total, num) => {
    return total * num;
  }, 1);
};

// Function that allows calculator to divide an infinite amount of numbers
const divide = function (...theNums) {
  return theNums.reduce((total, num) => {
    return total / num;
  });
};

// Controls how the calculator chooses its operators.
const operate = function (operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return `Something's not right!`;
  }
};

// Get the number for 1
function getNum1(value) {
  initialInput += value; // Returns number
  display.textContent = initialInput;
}

// Get the object for the operator
function getOperator() {
  operators.forEach((item) => {
    item.addEventListener("click", () => {
      return (chosenOperater += item.textContent);
    });
  });
}

// Get the second number
function getNum2() {
  numbers.forEach((item) => {
    item.addEventListener("click", () => {
      return (secondinitialInput += item.textContent);
    });
  });
}

// Once the enter button is pressed, perform the operation
function enterButton() {
  let num1 = getNum1();
  let num2 = getNum2();
  let operator = getOperator();
  console.log(num1);
  console.log(num2);
  console.log(operator);
  console.log(operate(operator, num1, num2));
}

// enterButton();
