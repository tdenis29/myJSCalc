//Vairables
const btns = document.getElementById('buttons-grid');
const display = document.getElementById('screen');
let displayValue = 0;
let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;

function updateDisplay(keyContent,result = null){
  if(display.textContent === "0"){
  display.textContent = displayValue;
  }
  if(result !== null){
    display.textContent = result;
  } else{
    display.textContent = displayValue;
  }
}
btns.addEventListener('click', e => {
  const key = e.target;
  const keyContent = key.textContent;
  // first click on number
  if(key.classList.contains('number') && operand1 === null){
    handleNumber(keyContent);
    updateDisplay();
  }
  // second click on operator then set operand1 and write to display
  if(key.classList.contains("operator") && key.textContent !== "=" && operand2 === null){
    handleOperator(keyContent);
  }
  if(operand1 !== null && key.classList.contains("decimal")){
    handleNumber(keyContent)
    updateDisplay();
  }
  //third click to set operation and second operand
  if(operand1 !== null && key.classList.contains("number")){
    handleNumber(keyContent)
    operand2 = displayValue;
    updateDisplay();
    
  }
  // fourth click
  if(keyContent === "=" && display.textContent !== "0"){
    result = operate(operand1, operand2,operator)
    result = operate(operand1,operand2,operator);
    if(Number.isInteger(result)){
      displayValue = result;
    } else {
    resultRounded = result.toFixed(3);
    displayValue = resultRounded;
  }
    updateDisplay();
  }
  if(keyContent === "=" && operand2 === "0" || keyContent === "=" && operand1 === null){
    displayValue = "First Time?";
    updateDisplay();
  }
  //fifth click for chaining operators
  if(operand1 !== null && operand2 !== null && result !== null && key.classList.contains('operator')){
    result = operate(operand1,operand2,operator);
    if(Number.isInteger(result)){
      displayValue = result;
    } else {
    resultRounded = result.toFixed(3);
    displayValue = resultRounded;
  }
    updateDisplay();
    handleOperator(keyContent);
    operand1 = result;
    operand2 = null;
    result = null;
  }
  //if clear is picked
  if(key.textContent === "CLEAR"){
    clearData();
  }
  if(keyContent === "." && display.innerHTML.indexOf(".") === -1){
    doeeDecimal();
    updateDisplay();
  }
  if(keyContent === "DELETE"){
    backSpace();
    updateDisplay();
  }
})
function isInt(n) {
  return n % 1 === 0;
}
function handleNumber(keyContent){
  //firstclick
  if (display.textContent === "0") {
   displayValue = keyContent;
} else if (display.textContent == operand1) {
  displayValue = keyContent;
}  else {
  displayValue += keyContent;
}
}
function handleOperator(keyContent){
  //if first click on operator after entring number
  if(operand1 === null){
  operand1 = displayValue;
  operator = keyContent;
  displayValue = keyContent;
} else if(operand1 !== null){
  operator = keyContent;
}}
function doeeDecimal(){
  if(operand1 !== null && operator !== null){
    displayValue = display.textContent + "."
  }
  if(display.innerHTML.includes(".") < 2){
    displayValue = display.textContent + ".";
  } else {
    displayValue = display.textContent + ".";
  }
}
// Backspace
function backSpace(){
 if(operand1 === null){
   displayValue = 0;
 }
 if(operand1 !== null){
   operator = null;
   displayValue = operand1;
   operand2 = null;
 }
 if(operand2 === null && operand1 !== null){
   displayValue = operand1;
 }
 
}
//clear button 
function clearData(){
  operand1 = null; 
  operand2 = null;
  poperator = null;
  displayValue = 0;
  result = null;
  updateDisplay();
}
//operate function
function operate(operand1, operand2, operator){
    if(operator === "+"){
        return parseFloat(operand1) + parseFloat(operand2);
    } else if (operator == "???"){
        return parseFloat(operand1) - parseFloat(operand2);
    } else if (operator === "*"){
        return parseFloat(operand1) * parseFloat(operand2);
    } else if (operator === "/"){
        return parseFloat(operand1) / parseFloat(operand2);
    }
}
// Basic Functions

// const add = function(a,b) {
// 	return parseInt(a) + parseInt(b);
// };

// const subtract = function(a, b) {
// 	return  parseInt(a) - parseInt(b);
// };
// const divide = function(a,b){
//     return  a / b;
// };
// const sum = function(arr) {
// 	let total = 0;
//   arr.forEach(item => {
//     total += item;
//   });
//   return total
// };

// const multiply = function() {
//   return  a*b 
// };

// const power = function(a, b) {
// 	return Math.pow(a,b)
// };

// const factorial = function(number) {
//   if(number === 0){
//     return 1
//   } else {
//     return number * factorial(number - 1)
//   }
// };
// numBtns.forEach(button => {
  //   button.addEventListener('click', e =>{
  //     //make sure click is on button
  //     if (e.target.matches("button")){
  //         //set clicked button to variable
  //         const key = e.target;
  //         //set clicked action to variable
  //         const action = key.dataset.action;
  //         //get key content to display on screen later
  //         const keyContent = key.textContent;
  //         //display on screen 
  //         displayedNum = display.textContent;
  //         //if not clicing on an operator or point
  //         if (!action) {
  //           //if the is the first number to be typed replace zero in the display 
  //           if (displayedNum === '0') {
  //             display.textContent = keyContent
  //           } else {
  //             //will continuously add the typed numbers to display until the first operator is clicked
  //               display.textContent = displayedNum + keyContent
  //             }
  //         }
  //     }}); 
  //   })
  
  // // i was trying to this ALL in the above event listener like a crazy person but ended up coding like a crazy person anyways
  // //to chain to gether operands im thinking of calling evaluate on expression.
  // actionBtns.forEach(button => {
  //   button.addEventListener('click', e => {
  //     const key = e.target;
  //     const keyContent = key.textContent;
      
  //      //if expression is empty do happy math {} else if the expression contains multiple operators {}.....
  //     if(key.dataset.action == "add" ||
  //       key.dataset.action == "subtract" ||
  //       key.dataset.action == 'multiply' ||
  //       key.dataset.action == 'divide' 
  //     )
  //     {
  //     //define new displayedNum in the scope of this function
  //      a = display.textContent
  //     //grab first number as a global for use in helper function
  //     //update top-screen with the number and operator 
  //     //this key Content is referring to the operator that was clicked.
  //     expression.textContent += a + keyContent;
  //     //operator must be global?
  //      operator = keyContent;
  //      //after written to expression clear dislay for new typing
  //      display.textContent = "";
  //     }
  //     //if equals is pushed we can assume the second number has been entered and ready for evaluation
  //     if(e.target.dataset.action == "equals"){
  //       //if there is no a and there is 0 in the display we can assume nothing has been entered and equals should not run 
  //       if(display.textContent === 0){
  //         return 
  //       } else if (
  //         expression.textContent.includes("+") && expression.textContent.includes("-") || 
  //         expression.textContent.includes("*") && expression.textContent.includes("/") ||
  //         expression.textContent.includes("+") && expression.textContent.includes("*") && 
  //         expression.textContent.includes("-") && expression.textContent.includes("/") 
  
  //         ){
          
  //         expression.textContent += display.textContent
  //         answerThis = expression.textContent.toString();
  //         console.log(answerThis)
  //         result = eval(answerThis);
  //         display.textContent = result;
  //       } else {
  //       //new displayedNum to update bottom display
  //       displayedNum = display.textContent
  //       //grab second number as a global variable to pass into the operate() then helper() functions
  //       b = displayedNum
  //       //update top screen with second number plus equals
  //       expression.textContent += b + "=";
  //       console.log(expression)
  //       //call operate by passing in the numbers and operator and save its return value to result
  //       result = operate(a, b, operator) 
  //       //display the result
  //       display.textContent = result;
  //     }}  if(e.target.dataset.action == "clear"){
  //       a = undefined;
  //       b = undefined;
  //       result = undefined;
  //       expression.textContent = "";
  //       display.textContent = 0;
  //     }
  //   })
  // })