//Vairables
const numBtns = document.querySelectorAll("#numBtn")
const actionBtns = document.querySelectorAll('#actionBtn')
const display = document.getElementById('screen');
const expression = document.getElementById("topscreen");


//event listener for btns or use bubbling on parent? or nested event listener? for input?
numBtns.forEach(button => {
  button.addEventListener('click', e =>{
    //make sure click is on button
    if (e.target.matches("button")){
        //set clicked button to variable
        const key = e.target;
        //set clicked action to variable
        const action = key.dataset.action;
        //get key content to display on screen later
        const keyContent = key.textContent;
        //display on screen 
        displayedNum = display.textContent;
        //if not clicing on an operator or point
        if (!action) {
          //if the is the first number to be typed replace zero in the display 
          if (displayedNum === '0') {
            display.textContent = keyContent
          } else {
            //will continuously add the typed numbers to display until the first operator is clicked
              display.textContent = displayedNum + keyContent
            }
        }
    }}); 
  })

// i was trying to this ALL in the above event listener like a crazy person but ended up coding like a crazy person anyways
//to chain to gether operands im thinking of calling evaluate on expression.
actionBtns.forEach(button => {
  button.addEventListener('click', e => {
    const key = e.target;
    const keyContent = key.textContent;
    
     //if expression is empty do happy math {} else if the expression contains multiple operators {}.....
    if(key.dataset.action == "add" ||
      key.dataset.action == "subtract" ||
      key.dataset.action == 'multiply' ||
      key.dataset.action == 'divide' 
    )
    {
    //define new displayedNum in the scope of this function
     a = display.textContent
    //grab first number as a global for use in helper function
    //update top-screen with the number and operator 
    
    //this key Content is referring to the operator that was clicked.
    expression.textContent += a + keyContent;
    //operator must be global?
     operator = keyContent;
     //after written to expression clear dislay for new typing
     display.textContent = "";
    }
    //if equals is pushed we can assume the second number has been entered and ready for evaluation
    if(e.target.dataset.action == "equals"){
      //if there is no a and there is 0 in the display we can assume nothing has been entered and equals should not run 
      if(display.textContent == 0){
        return 
      } else {
      //new displayedNum to update bottom display
      displayedNum = display.textContent
      //grab second number as a global variable to pass into the operate() then helper() functions
      b = displayedNum
      //update top screen with second number plus equals
      expression.textContent += b + "=";
      //call operate by passing in the numbers and operator and save its return value to result
      result = operate(a, b, operator) 
      //display the result
      display.textContent = result;
    }}  if(e.target.dataset.action == "clear"){
      a = undefined;
      b = undefined;
      result = undefined;
      expression.textContent = "";
      display.textContent = 0;
    }
  })
})
//clear button 


//operand function
function operate(a, b, operator){
    if(operator === "+"){
        return add(a,b)
    } else if (operator === "-"){
        return subtract(a,b)
    } else if (operator === "*"){
        return multiply(a,b)
    } else if (operator === "/"){
        return divide(a,b)
    }
}

// Basic Functions

const add = function(a,b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return  parseInt(a) - parseInt(b);
};
const divide = function(a,b){
    return  a / b;
};
const sum = function(arr) {
	let total = 0;
  arr.forEach(item => {
    total += item;
  });
  return total
};

const multiply = function() {
  return  a*b 
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(number) {
  if(number === 0){
    return 1
  } else {
    return number * factorial(number - 1)
  }
};
