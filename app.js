

//Vairables
const btns = document.getElementById("buttons-grid");
const display = document.getElementById('screen');
const expression = document.getElementById("topscreen");
let a;
let b;
let operator;
//event listener for btns or use bubbling on parent? or nested event listener? for input?
btns.addEventListener('click', e =>{
    //make sure click is on button
    if (e.target.matches("button")){
        //set clicked button to variable
        const key = e.target;
        //set clicked action to variable
        const action = key.dataset.action;
        //get key content to display on screen later
        const keyContent = key.textContent;
        //display on screen 
        const displayedNum = display.textContent;
        //if not action key then number and display
       
            //if starting number is 0 then add clicked number
 

        //if this is not an action key firtst
        // if(!action){
        //     console.log(key)
        // }
        // if (
        //     action === 'add' ||
        //     action === 'subtract' ||
        //     action === 'multiply' ||
        //     action === 'divide'
        //   ) {
        //     console.log('operator key!')
        //     let a = displayedNum
        //     let operator = e.target.keyContent
        //     display.textContent = a + keyContent;
        //   }
        // if(!action){
        //     let b = key + 
        // }
        //   if (action === 'decimal') {
        //     console.log('decimal key!')
        //     display.textContent = displayedNum + '.'
        //   }
        //   if (action === 'clear') {
        //     console.log('clear key!')
        //   }
        //   if (action === 'equals') {
            
        //     console.log('equal key!')
        //   }
    //   if the action keys are pressed and displayed number is 0 replace 0 then concatenate chosen num to displayNum
    //       if (!action) {
    //           //first key pressed replace 0
    //         if (displayedNum === '0') {
    //         display.textContent = keyContent
    //         //continue to ADD number to display as they are pressed. but adds clear and delete as well
    //         } else {
    //            display.textContent = displayedNum + keyContent 
    //         }   
    //     }
    //     if(e.target === action){
    //         let a = displayedNum;
    //          display.textContent = displayedNum + keyContent 
    //     }
    // }



// add event listener ? 



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
	return sum = a + b;
};

const subtract = function(a, b) {
	return sum = a - b;
};
const divide = function(a,b){
    return sum = a / b;
};
const sum = function(arr) {
	let total = 0;
  arr.forEach(item => {
    total += item;
  });
  return total
};

const multiply = function(arr) {
  return sum = arr.reduce((a, b)=>  a*b, 1)
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
