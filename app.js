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
        if (!action) {
          if (displayedNum === '0') {
            display.textContent = keyContent
          } else {
              display.textContent = displayedNum + keyContent
            }
        }
    }}); 
  })

// i was trying to this ALL in the above event listener like a crazy person but ended up coding like a crazy person anyways
actionBtns.forEach(button => {
  button.addEventListener('click', e => {
    const key = e.target;
    //if expression is empty do this {} else {}.....
    const keyContent = key.textContent;
    if(key.dataset.action == "add" ||
      key.dataset.action == "subtract" ||
      key.dataset.action == 'multiply' ||
      key.dataset.action == 'divide' 
    )
    {
    displayedNum = display.textContent
     a = displayedNum 
     expression.textContent = a + keyContent;
     operator = keyContent;
     display.textContent = "";
    }
    if(e.target.dataset.action == "equals"){
      displayedNum = display.textContent
      b = displayedNum
      expression.textContent += b;
      display.textContent = operate(a, b, operator) 
    }
  })
})


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

const multiply = function(arr) {
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
