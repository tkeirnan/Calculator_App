const keys = document.getElementsByClassName('key--number');
const operators = document.getElementsByClassName('key--operator');
const screen = document.getElementById('calculatorScreen');
let firstNumber = null;
let secondNumber = null;
let operation = null;
let result = 0;
document.querySelector('#equalSign').addEventListener('click', (e) => {
     console.log('equal button was clicked!');
     debugger;
     const equalsResult = calculationFunction(firstNumber, operation, secondNumber);
     // display equals result on screen
     screen.innerText = equalsResult;
     // set the first number equal to the result
     firstNumber = equalsResult;
     // reset the second number
     secondNumber = null;
     // clear operator to null
     operation = null;
});
for (let key of keys) {
     key.addEventListener("click", function (e) {
          // console.log(e.target.value);
          if (operation === null) {
               firstNumber = parseFloat(e.target.value);
               displayInput(firstNumber)
          } else {
               secondNumber = parseFloat(e.target.value);
               displayInput(secondNumber)
          }
     });
}
for (let operator of operators) {
     operator.addEventListener("click", function (e) {
          const resultOfOperation = evaluateOperation(e.target.value)
          // console.log(e.target.value);
     });
}
function displayInput(numberKeyValue) {
     if (screen.innerText === "0") {
          screen.innerText = numberKeyValue;
     } else {
          screen.innerText = screen.innerText + numberKeyValue;
     }
}
function evaluateOperation(operator) {
     // console.log(operator);
     operation = operator;
     //1. check if firstnumber is null
     // 2. it is null, so set firstNumber to value of number
     // 3. set operator to "-"
}
function calculationFunction(firstNumber, operator, secondNumber) {
                         //      1         "+"          2
     if (operator === "+") {
          return firstNumber + secondNumber;
     }
     if (operator === "-") {
          return firstNumber - secondNumber;
     }
     if (operator === "*") {
          return firstNumber * secondNumber;
     }
     if (operator === "/") {
          return firstNumber / secondNumber;
     }
}
// example
const sum = calculationFunction(1, '+', 2);
console.log(sum);

// Example: Steps to perform 1 - 2 + 5 = 4
// 1. press 1 key
// 2. display 1
// 3. press "-" key
// 4. check if num1 value is null
// 5. it is null, so set num1 to value of 1
// 6. set operator to "-"
// 7. press 2 key
// 8. display 2
// 9. press "+" key
// 10. check if num1 value is null
// 11. it is not null, set num2 to value of 2
// 12. Perform calculation with num1, operator, and num2
// 13. return result to display and to num1
// 14. set operator to "+"
// 15. press 5 key
// 16. display 5
// 17. press "=" key
// 18. check if num1 value is null
// 19. it is not null,  set num2 to value of 5
// 20. Perform calculation with num1, operator, and num2
// 21. return result to display and to num1
// 22. set operator to null

// let equals = document.getElementById('equalSign');
// let savedFirstNumber = 0;
// let parsedSavedFirstNumber = parseInt(savedFirstNumber);
// let savedSecondNumber = 0;
// let parsedSavedSecondNumber = parseInt(savedSecondNumber);
// let operation = null;
// let x = 0;

// for (let key of keys) {
//      key.addEventListener("click", function () {
//           // if someone has pressed the plus button
//           if (operation !== null) {
//                // then set the second number
//                if (savedSecondNumber == 0) {
//                     savedSecondNumber = key.value;
//                     screen.innerText = savedSecondNumber;
//                     console.log('This is saved second number ' + savedSecondNumber);
//                } else {
//                     savedSecondNumber += key.value;
//                     screen.innerText = savedSecondNumber;
//                     console.log('This is saved second number ' + savedSecondNumber);
//                }

//           } else {
//                // otherwise (else)
//                // set the first number
//                if (savedFirstNumber == 0) {
//                     savedFirstNumber = key.value;
//                     screen.innerText = savedFirstNumber;
//                     console.log('This is saved first number ' + savedFirstNumber);
//                } else {
//                     savedFirstNumber += key.value;
//                     screen.innerText = savedFirstNumber;
//                     console.log('This is saved first number ' + savedFirstNumber);
//                }
//           }

//           for (let operator of operators) {
//                operator.addEventListener("click", function () {
//                     if (operator.value == "+") {
//                          console.log('plus button operator ran!');
//                          x = parseInt(savedFirstNumber);
//                          console.log(x);
//                          operation = operator.value;
//                          console.log('this is the value of operation ' + operation);
//                          y = parseInt(savedSecondNumber);
//                          screen.innerText = (x + y);
//                          equals.addEventListener("click", screen.innerText = (x + y));

//                     }
//                     if (operator.value == '-') {
//                          operation = operator.value;
//                          x = parseInt(savedFirstNumber);
//                          y = parseInt(savedSecondNumber);
//                          screen.innerText = (x - y);
//                     }
//                     if (operator.value == '/') {
//                          operation = operator.value;
//                          x = parseInt(savedFirstNumber);
//                          y = parseInt(savedSecondNumber);
//                          screen.innerText = (x / y);
//                     }
//                     if (operator.value == '*') {
//                          operation = operator.value;
//                          x = parseInt(savedFirstNumber);
//                          y = parseInt(savedSecondNumber);
//                          screen.innerText = (x * y);
//                     }

//                     if (operator.value == '=') {
//                          x = parseInt(savedFirstNumber);
//                          y = parseInt(savedSecondNumber);
//                          screen.innerText = (x+y);
//                     }
//                });
//           }

//      });
// }

// 1.) Click on the number 1 button
// EXPECTATION: Show 1 in the screen
// ACTUAL: 1
// 2.) Click on the number 2 button
// EXPECTATION: Show 12 in the screen
// ACTUAL: 12
// 3.) Click on the plus button
// EXPECTATION: 12
// ACTUAL:12
// 4.) Click on the number 3 button
// EXPECTATION: Show 3 in the screen
// ACTUAL: 3
// 5.) Click on the equals sign
// EXPECTATION:  Show 15 on the screen.
// Actuatl: 15

// if (button was a decimal) keep 0 and add decimal
// else delete 0 and put first number

//  You will have to grab the key className and assign it to something like 'operator', instead of 'keys' like we did.
// Then loop through and add an event listener as well.

// let savedFirstNumber;
// const display = document.getElementById("calculatorDisplay");

// savedFirstNumber = display;

// document.getElementsByClassName('key--number').addEventListener("click", function(){
//      display = document.getElementsByClassName('key--number')
// });

// console.log(savedFirstNumber);
// display.innerText = savedFirstNumber;
// console.log(display);

// document.getElementById("one").addEventListener("click", function(){
//      document.getElementById("calculatorDisplay").innerText = document.getElementById("one").value;
// });

// document.getElementById("two").addEventListener("click", function(){
//      document.getElementById("calculatorDisplay").innerText = document.getElementById("two").value;
// });
// document.getElementsByClassName("key--number").addEventListener("click", function(){
//      document.getElementById("calculatorDisplay").innerText = document.getElementsByClassName("key--number").value;
// });

// TEST CASE 1
// Description: Adding 1 + 2 = 3
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???

// let savedFirstNumber;

// document.getElementById("one").addEventListener("click", function(){
//     document.getElementById("calculatorDisplay").innerText = 1;
//     savedFirstNumber = 1;
// });

// console.log(savedFirstNumber);

// const firstPlayer = document.getElementById('select-player');
// let player = null;

// firstPlayer.addEventListener("change", e => {
//     player = e.targe.id;
// });

// console.log(savedFirstNumber);
// let parsedSavedFirstNumber = parseInt(savedFirstNumber);

// console.log(parsedSavedFirstNumber);

// let savedSecondNumber;

// document.getElementById('two').addEventListener("click", function(){
//     document.getElementById('calculatorDisplay').innerHTML = 2,
//     savedSecondNumber = 2;
// });

// let savedOperator;

// let parsedSavedSecondNumber = parseInt(savedSecondNumber);

// document.getElementById('plusSign').addEventListener("click", function(){
//     savedOperator = '+' ;
// });
// console.log(parsedSavedFirstNumber + savedOperator + parsedSavedSecondNumber);
// console.log(savedFirstNumber + savedOperator + savedSecondNumber);
// console.log(savedOperator);

// 1. press 1 button
//  2. show 1 in display
//  3. save the number 1 for later
//  4. press the + button
//  5. save the + symbol for later
//  6. press 2
//  7. show 2 in display
//  8. save the number 2 for late

// 2.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 1 in the display)
// ACTUAL: ???
// 3.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ???
// 4.) Click on the equals button
// EXPECTATION: Show 3 in the display
// ACTUAL: ???

// TEST CASE 2
// Description: Adding 11 + 22 = 33
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???
// 2.) Click on the number one button
// EXPECTATION: Show 11 in the display
// ACTUAL: ???
// 3.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 11 in the display)
// ACTUAL: ???
// 4.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ???
// 5.) Click on the number two button
// EXPECTATION: Show 22 in the display
// ACTUAL: ???
// 6.) Click on the equals button
// EXPECTATION: Show 33 in the display
// ACTUAL: ???

// create interface - display, number keys, decimal key, clearEverything key, equals key, operator keys.

//display should be set to 0.
//ClearEverythingKey should be set to CE.

// First Input: A. If NumberKey - replace 0 on display with number.
//              B. If DecimalKey - change CE key to C. and place decimal after 0.
//              C. If ClearEverythingKey - do nothing.
//              D. If EqualsKey - do nothing.
//              E. If MultiplicationKey, AdditionKey, SubtractionKey - change color of key.
//              F. If DivisionKey - do nothing.

// Second Input: If A plus A - render string of As on display.
//               If A plus B - place decimal after A.
//               If A plus C - clear display and revert to 0.
//               If A plus D - do nothing.
//               If A plus E - do nothing to display - change color of key.
//               If A plus F - do nothing to display - do nothing to key.
//               If B plus A - place number key after "0." in display.
//               if B plus B - do nothing.

// Third Input:

//add an event listener that turns the number on the display to zero.

//add an event listener that adds an operator to the number of the display

// Add if else function for third event. If number add it to equation, Else, replace previous operator.

//add an event listener to EqualsKey that evaluates first, second, and third input.

//and replaces any previous operator if any.

// if a number key is pressed after a number and an operator, add it to the equation

//

//add an event listener that adds a number the value of the diplay, the operator, and a third value,
//and renders the result in the display.

// create event listener that clears any number or operator on the display.
