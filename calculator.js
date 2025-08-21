const display = document.getElementById("calc-display");
const buttonsContainer = document.getElementById("calc-buttons");

const buttons = [
  '7','8','9','/',
  '4','5','6','*',
  '1','2','3','-',
  '0','.','=','+'
];

buttons.forEach(symbol => {
  const btn = document.createElement("button");
  btn.innerText = symbol;
  btn.addEventListener("click", () => {
    if(symbol === "="){
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += symbol;
    }
  });
  buttonsContainer.appendChild(btn);
});
