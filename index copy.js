// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================

// Takes in a number and updates the readonly display input
function updateDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(parseFloat(value));
}

// Gets the value from the readonly display input
// Returns a number
// Doesn't need to be used but can help you verify
// the current value on the display
function getDisplay() {
  const display = document.getElementById("display");
  //parseFloat changes the string into a number we can use
  return display.value;
}

//Set up display to show zero when starting
updateDisplay(0);

console.log("Initial value of display: ", getDisplay());

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================

let num1 = null;
let operator = null;
let shouldResetDisplay = false;
let displayValue = "0";
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operators = ["+", "-", "*", "/"];
/**
 * Main input handler called from HTML buttons
 * This function receives ALL button clicks and routes them to the appropriate handler
 * @param {string} input - The input value from button clicks
 *
 * HINT: This function should:
 * 1. Check if input is a number (0-9) and handle number input
 * 2. Check if input is an operator (+, -, *, /) and handle operator input
 * 3. Check if input is a decimal point (.) and handle decimal input( )
 * 4. Check if input is equals (=) and execute the operation
 * 5. Check if input is clear (C) and reset the calculator
 * 6. Don't forget to call updateDisplay() at the end to refresh the screen!
 */
function handleInput(input) {
  console.log(`Button clicked: ${input}`);
  // Your code here
  // Use if statements to check what type of input was received
  // Then call the appropriate helper function
  // you may need to use parseFloat
  // Don't forget to call updateDisplay() at the end!

  if (numbers.includes(input))
  {
    handleNumber(input);
  }
  else if (input === ".") 
  {
    handleDecimal(input);
  }
  else if (operators.includes(input))
  {
    handleOperator(input);
  } 
  else if (input === "C")
  {
    resetCalculator();
  }
  else if (input === "CE")
  {
    displayValue = "0";
  }
  else if (input === "=")
  {
    executeOperation();
  }

  updateDisplay(displayValue);
}

// TODO: Create your arithmetic operation functions here
// You will need: add, subtract, multiply, and divide functions
// Each should take two parameters (first, second) and return the result
// Don't forget to add console.log statements for debugging!
// Remember: division should check for division by zero and return "Error"

function add(number1, number2) {
  result = number1 + number2;
  return result;
}

function subtract(number1, number2) {
  result = number1 - number2;
  return result;
}

function multiply(number1, number2) {
  result = number1 * number2;
  return result;
}

function divide(number1, number2) {
  if (number2 === 0)
  {
    console.error("Error!  You cannot divide by 0!");
    return "Error, you cannot divide by 0";
  }
  else
  {
    result = number1 / number2;
    return result;
  }
}

/**
 * Handles number input (0-9)
 * @param {string} number - The number that was clicked
 */
function handleNumber(number) {
  // Your code here
  // This function should update the displayValue
  // Consider: Are we starting fresh? Continuing a number?
  if (shouldResetDisplay)
  {
    displayValue = number;
    shouldResetDisplay = false;
  }
  else 
  {
    displayValue = displayValue === "0" ? number : displayValue + number;
  }
}

/**
 * Handles decimal point input
 */
function handleDecimal() {
  // Your code here
  // Make sure you don't add multiple decimal points to one number
  if (shouldResetDisplay)
  {
    displayValue = "0";
    shouldResetDisplay = false;
  }
  else if (!displayValue.includes("."))
  {
    displayValue += ".";
  }
}

/**
 * Handles operator input (+, -, *, /)
 * @param {string} nextOperator - The operator that was clicked
 */
function handleOperator(nextOperator) {
  // Your code here
  // Store the first number and operator
  // Prepare for the second number input
  if (operator && shouldResetDisplay)
  {
    console.warn(`You are replacing previous operator ${operator} with ${nextOperator}`);
    operator = nextOperator;
    return;
  }
  
  if (num1 === null)
  {
    num1 = parseFloat(displayValue);
  }
  else if (operator)
  {
    executeOperation();
  }

  operator = nextOperator;
  shouldResetDisplay = true;
  console.log(`Clicked ${nextOperator}`);
}

/**
 * Executes the calculation when = is pressed
 */
function executeOperation() {
  // Your code here
  // Use if/else statements to call the right operation function
  // Handle the result and any errors
  if (operator === null || shouldResetDisplay)
  {
    return;
  }

  const num2 = parseFloat(displayValue);
  let result;


  switch (operator)
  {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      console.warn("You must choose one of the correct operators!");
      break;
  }
  displayValue = result.toString();
  num1 = result;
  operator = null;
  shouldResetDisplay = true;
  console.log("Successful operation");
}

/**
 * Resets the calculator (C button)
 */
function resetCalculator() {
  // Your code here
  // Reset all state variables and display
  displayValue = "0";
  num1 = null;
  operator = null;
  shouldResetDisplay = false;
}