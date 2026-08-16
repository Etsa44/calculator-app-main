export function padTouch(button, display, state) {
  if (state.justCalculated) {
    display.textContent = button.value;
    state.currentNumber = button.value;
    state.justCalculated = false;
    return;
  }
  state.currentNumber += button.value;
  if (display.textContent === "0") {
    display.textContent = button.value;
  } else {
    display.textContent += button.value;
  }
}
