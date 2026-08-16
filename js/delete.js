export function deleteTouch(display, state) {
  if (display.textContent !== "0") {
    state.currentNumber = state.currentNumber.slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
  }
  if (display.textContent === "") {
    display.textContent = "0";
  }
}
