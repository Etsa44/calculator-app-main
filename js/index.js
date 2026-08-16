import { padTouch } from "./button.js";
import { deleteTouch } from "./delete.js";
import { equalTouch } from "./equal.js";
import { operatorTouch } from "./operator.js";
import { resetTouch } from "./reset.js";

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const deleteBtn = document.getElementById("delete-btn");
const equalBtn = document.getElementById("equal-btn");
const resetBtn = document.getElementById("reset-btn");
const display = document.getElementById("display");

const state = {
  firstNumber: null,
  currentNumber: "",
  operator: null,
  justCalculated: false,
};
if (state.currentNumber === "") {
  display.textContent = "0";
}
// Pad button
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    padTouch(button, display, state);
  });
});
// Operator button
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    operatorTouch(button, display, state);
  });
});
// Delete button
deleteBtn.addEventListener("click", () => {
  deleteTouch(display, state);
});
// Equal button
equalBtn.addEventListener("click", () => {
  equalTouch(display, state);
});
// Reset button
resetBtn.addEventListener("click", () => {
  resetTouch(display, state);
});
