export function operatorTouch(button, display, state) {
  if (state.justCalculated) {
    state.firstNumber = Number(display.textContent);
    state.operator = button.value;
    display.textContent += state.operator;
    state.justCalculated = false;
    return;
  }
  if (state.currentNumber === "") return;
  state.firstNumber = Number(state.currentNumber);
  state.operator = button.value;
  display.textContent += state.operator;
  state.currentNumber = "";
}
