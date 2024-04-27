var output = document.querySelector(".output");
var buttonsnum = document.querySelectorAll(".btnnum");
var clear = document.querySelector(".clear");
var btndec = document.querySelector(".btndec");
var buttonop = document.querySelectorAll(".buttonop");
var output1 = document.querySelector(".output1");
var equal = document.querySelector(".equal");

let currentVal = "";
let firstVal = null;
let operator = null;
let btndecidx = 0;
let opidx = 0;
let btnopidex = 0;
let result = null;

function calculate() {
  console.log(operator);
  
  switch (operator) {
    case "+":
      result = firstVal + parseFloat(currentVal);
      break;
    case "-":
      result = firstVal - parseFloat(currentVal);
      break;
    case "*":
      result = firstVal * parseFloat(currentVal);
      break;
    case "/":
      result = firstVal / parseFloat(currentVal);
      break;
    default:
      break;
  }
  currentVal = result;
  firstVal = result;
  output1.value = currentVal;
}
function display(e) {
  output.value += e.target.textContent; // Use 'this' to reference the clicked button
  console.log("I am clicked");
  btnopidex = 0;
}
btndec.addEventListener('click', function(e){
  if(btndecidx === 0){
      output.value += this.value;
      btndecidx = 1;
    }
});
buttonop.forEach(buttonop => {
  buttonop.addEventListener('click',function(e){

    if(opidx===0){
      firstVal = parseFloat(output.value);
      opidx = 1;
    }
    else{
      currentVal = parseFloat(output.value);
      calculate();
      output.value = result;
      output1.value = result;
      output.value = "";
    }
   if(btnopidex===0){ 
    console.log(e);
    operator = e.target.value;
    output.value += this.value;
    btndecidx = 0;
    btnopidex=1;
    output1.value += output.value;
    output.value = "";
  }
 });
});
clear.addEventListener('click', function(e){
  let currentVal = "";
let operator = null;
let btndecidx = 0;
let opidx = 0;
let btnopidex = 0;
let result = null;

  output1.value = "";
  firstVal = null;
  operator = null;
  btndecidx = 0;
  opidx = 0;
  btnopidex = 0;
  currentVal = null
  output.value = null;

  console.log(output.value)
});
buttonsnum.forEach(buttonsnum => {
  buttonsnum.addEventListener('click', display);
});
equal.addEventListener('click', function(e){
  currentVal = parseFloat(output.value);
  calculate();
  output.value = result;
  output1.value = "";
  firstVal = null;
  operator = null;
  btndecidx = 0;
  opidx = 0;
  btnopidex = 0;
});
