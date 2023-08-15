let screen = document.getElementById("display");
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let increaseButton = document.getElementById("increase");

let screenValue = 0;


function increase() {
  screenValue++;
  document.getElementById("display").innerText = screenValue;
  if (screenValue >0) {
    document.getElementById("display").style.color = 'green';
  }
  
}

function decrease() {
  screenValue--;
  document.getElementById("display").innerText = screenValue;
  if (screenValue <0) {
    document.getElementById("display").style.color = 'red';
  }
}

function reset() {
  screenValue = "0";
  document.getElementById("display").innerText = screenValue;
}



decreaseButton.addEventListener("click", () => {
  decrease();
});

increaseButton.addEventListener("click", () => {
  increase();
});

resetButton.addEventListener("click", () => {
  reset();
});

