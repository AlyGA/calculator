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

function buttonsClicked() {
  one.addEventListener("click", (event) => {
    display.textContent = 1;
  });
  two.addEventListener("click", (event) => {
    display.textContent = 2;
  });
  three.addEventListener("click", (event) => {
    display.textContent = 3;
  });
  four.addEventListener("click", (event) => {
    display.textContent = 4;
  });
}

buttonsClicked();
