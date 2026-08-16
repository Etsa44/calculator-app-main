export function equalTouch(display, state) {
  if (state.currentNumber === "" || state.firstNumber === null) return;
  let secondNumber = Number(state.currentNumber);
  let result;
  if (state.operator === "+") {
    result = state.firstNumber + secondNumber;
  } else if (state.operator === "-") {
    result = state.firstNumber - secondNumber;
  } else if (state.operator === "*") {
    result = state.firstNumber * secondNumber;
  } else if (state.operator === "/") {
    result = state.firstNumber / secondNumber;
  }
  display.textContent = result;
  state.justCalculated = true;
  state.currentNumber = "";
  state.firstNumber = null;
  state.operator = null;
}
