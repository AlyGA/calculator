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
const display = document.querySelector(".solutions-display");
const display2 = document.querySelector(".numbers-display");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");
const numbers = document.querySelectorAll("#num");
const operators = document.querySelectorAll("#operator");

// Initial values
let initialInput = "";
let secondinitialInput = "";
let chosenOperator = "";
let enterButtonPressed = false; // Indicates if the enter button was pressed or not

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

// Function that retrieves both the first and second number. Uses the onclick events in HTML file to retrieve button values
function getNums(value) {
  if (chosenOperator === "") {
    initialInput += value;
    display.textContent = initialInput;
  } else if (chosenOperator !== "" && initialInput !== "") {
    secondinitialInput += value;
    display.textContent = secondinitialInput;
  }
}

// Returns the object for the operator using the onclick event
function getOperator(value) {
  if (initialInput !== "" && chosenOperator === "") {
    chosenOperator += value; // Returns number
    display.textContent = chosenOperator;
  }
}

// Performs the actual calculator logic when the enter button is pressed by using the operate() function
function enterButton() {
  enter.addEventListener("click", () => {
    display.textContent = operate(
      chosenOperator,
      +initialInput,
      +secondinitialInput
    );

    display2.textContent = `${initialInput} ${chosenOperator} ${secondinitialInput}`;

    // Now restart the strings so that more numbers can be added
    initialInput = display.textContent;
    chosenOperator = "";
    secondinitialInput = "";
  });
}

enterButton();
