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

// Initial values
let initialInput;
let chosenOperater;

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

// When the buttons are cliked, save the variable or operator
one.addEventListener("click", () => {
  display.textContent = one.textContent;
  initialInput = one.textContent;
});
two.addEventListener("click", () => {
  display.textContent = two.textContent;
  initialInput = two.textContent;
});
three.addEventListener("click", () => {
  display.textContent = three.textContent;
  initialInput = three.textContent;
});
four.addEventListener("click", () => {
  display.textContent = four.textContent;
  initialInput = four.textContent;
});
five.addEventListener("click", () => {
  display.textContent = five.textContent;
  initialInput = five.textContent;
});
six.addEventListener("click", () => {
  display.textContent = six.textContent;
  initialInput = six.textContent;
});
seven.addEventListener("click", () => {
  display.textContent = seven.textContent;
  initialInput = seven.textContent;
});
eight.addEventListener("click", () => {
  display.textContent = eight.textContent;
  initialInput = eight.textContent;
});
nine.addEventListener("click", () => {
  display.textContent = nine.textContent;
  initialInput = nine.textContent;
});
zero.addEventListener("click", () => {
  display.textContent = zero.textContent;
  initialInput = zero.textContent;
});
plus.addEventListener("click", () => {
  display.textContent = plus.textContent;
  chosenOperater = plus.textContent;
});
minus.addEventListener("click", () => {
  display.textContent = minus.textContent;
  chosenOperater = minus.textContent;
});
star.addEventListener("click", () => {
  display.textContent = star.textContent;
  chosenOperater = star.textContent;
});
slash.addEventListener("click", () => {
  display.textContent = slash.textContent;
  chosenOperater = slash.textContent;
});

// Once the enter button is pressed, perform the operation
function enterButton() {
  enter.addEventListener("click", () => {
    operator;
  });
}
