const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.getElementById("equal-btn");
const resetBtn = document.getElementById("reset-btn");
const display = document.getElementById("display");

let currentNumber = "";
let firstNumber = null;
let operator = null;
let justCalculated = false;

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (justCalculated) {
      display.textContent = "";
      currentNumber = "";
      justCalculated = false;
    }
    currentNumber += button.value;
    display.textContent += button.value;
  });
});
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (justCalculated) {
      firstNumber = Number(display.textContent);
      operator = button.value;
      display.textContent += operator;
      justCalculated = false;
      return;
    }
    if (currentNumber === "") return;
    firstNumber = Number(currentNumber);
    operator = button.value;
    display.textContent += operator;
    currentNumber = "";
  });
});
equalBtn.addEventListener("click", () => {
  if (currentNumber === "" || firstNumber === null) return;
  let secondNumber = Number(currentNumber);
  let result;
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  }
  display.textContent = result;
  justCalculated = true;
  currentNumber = "";
  firstNumber = null;
  operator = null;
});
resetBtn.addEventListener("click", () => {
  currentNumber = "";
  firstNumber = null;
  operator = null;
  display.textContent = "";
  justCalculated = false;
});
