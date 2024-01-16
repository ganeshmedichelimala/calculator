// Get the element with the id "result"
const res = document.getElementById("result");

// Function to update the live screen with entered values
function liveScreen(enteredValue) {
  // If the result value is falsy, initialize it to an empty string
  if (!res.value) {
    res.value = "";
  }
  
  // Concatenate the entered value to the existing result value
  res.value += enteredValue;
}

// Function to perform calculations
function calculate(value) {
  // Use eval to calculate the result from the provided value
  const calculatedValue = eval(value);
  
  // Check if the calculated value is NaN (Not a Number)
  if (isNaN(calculatedValue)) {
    // If NaN, display a specific message for division by zero
    res.style.fontSize = "25px"
    res.value = "Can't divide 0 with 0";
    
    // Reset the result value after a delay
    setTimeout(() => {
      res.value = "";
    }, 1000);
    
  } else {
    // If a valid result, update the result value
    res.value = calculatedValue;
    res.style.fontSize = "35px"
  }
}

// Add an event listener for keyboard inputs on the entire document
document.addEventListener("keydown", (keyboardInputHandler));

// Function to handle keyboard inputs
function keyboardInputHandler(e) {
  // Prevent the default behavior of the browser for certain keys
  e.preventDefault();
  
  // Numbers
  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  // Operators
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    res.value += e.key;
  }

  // Decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  // Enter key for calculating result
  if (e.key === "Enter") {
    // Call the calculate function with the current result value
    calculate(res.value);
  }

  // Backspace key for removing the last input
  if (e.key === "Backspace") {
    // Get the current result input
    const resultInput = res.value;
    
    // Remove the last character from the result value
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
