export function resetTouch(display, state) {
  state.currentNumber = "";
  state.firstNumber = null;
  state.operator = null;
  display.textContent = "0";
  state.justCalculated = false;
}
