// Part 1: Variable Declarations and Conditionals
const inputElement = document.getElementById('userInput');
const checkButton = document.getElementById('checkButton');
const resultElement = document.getElementById('result');
const numberList = document.getElementById('numberList');
let numberArray = [];

// Part 2: Custom Functions
function isEven(number) {
  return number % 2 === 0;
}

function addToList(number, status) {
  const listItem = document.createElement('li');
  listItem.textContent = `Number ${number} is ${status}`;
  numberList.appendChild(listItem);
}

// Part 3: Loop Examples
function displayNumbersUpTo(n) {
  // For loop to display numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    console.log(`Counting: ${i}`);
  }
}

function processArray(arr) {
  // While loop to process array elements
  let i = 0;
  while (i < arr.length) {
    console.log(`Array element at index ${i}: ${arr[i]}`);
    i++;
  }
}

// Part 4: DOM Interactions
checkButton.addEventListener('click', () => {
  const userNumber = parseInt(inputElement.value);
  
  // DOM Interaction 1: Update result text
  if (isNaN(userNumber)) {
    resultElement.textContent = 'Please enter a valid number';
    return;
  }
  
  // Conditional to check if number is even or odd
  const status = isEven(userNumber) ? 'even' : 'odd';
  resultElement.textContent = `${userNumber} is ${status}`;
  
  // DOM Interaction 2: Add to list
  numberArray.push(userNumber);
  addToList(userNumber, status);
  
  // DOM Interaction 3: Update input field
  inputElement.value = '';
  
  // Run loop examples
  displayNumbersUpTo(userNumber);
  processArray(numberArray);
});
