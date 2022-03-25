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
let chosenOperator = "";
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

// Get both numbers
function getNums(value) {
  if (chosenOperator === "") {
    initialInput += value;
    display.textContent = initialInput;
    console.log(initialInput);
  } else if (chosenOperator !== "" && initialInput !== "") {
    secondinitialInput += value;
    display.textContent = secondinitialInput;
    console.log(secondinitialInput);
  }
}

// Once first number has been recorded, get the object for the operator using the onclick event
function getOperator(value) {
  if (initialInput !== "") {
    if (chosenOperator === "") {
      chosenOperator += value; // Returns number
      display.textContent = chosenOperator;
      console.log(chosenOperator);
    }
  }
}

// (PLEASE IGNORE THIS FUNCTION) Once the enter button is pressed, perform the operation
function enterButton() {
  enter.addEventListener("click", () => {
    return (display.textContent = operate(
      chosenOperator,
      +initialInput,
      +secondinitialInput
    ));
  });
}

enterButton();
