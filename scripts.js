let screen = document.getElementById("display");
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let increaseButton = document.getElementById("increase");

let screenValue = 0;

function increase() {
  screenValue++;
  screen.innerText = screenValue;
}

function decrease() {
  screenValue--;
  screen.innerText = screenValue;
}

function reset() {
  screenValue = "0";
  screen.innerText = screenValue;
}

function screenColor() {
  if (screenValue == 0) {
    screen.style.color = "black";
  } else if (screenValue < 0) {
    screen.style.color = "red";
  } else {
    screen.style.color = "green";
  }
}
decreaseButton.addEventListener("click", () => {
  decrease();
  screenColor();
});

increaseButton.addEventListener("click", () => {
  increase();
  screenColor();
});

resetButton.addEventListener("click", () => {
  reset();
  screenColor();
});
