// TEST CASE 1
// Description: Adding 1 + 2 = 3
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???


document.getElementById('one').addEventListener("click", function(){document.getElementById('calculatorDisplay').innerHTML = 1,
localStorage.setItem('firstNumber', 1)});
document.getElementById('two').addEventListener("click", function(){document.getElementById('calculatorDisplay').innerHTML = 2,
localStorage.setItem('secondNumber', 2)});

var savedFirstNumber = localStorage.getItem('firstNumber');
let parsedSavedFirstNumber = parseInt(savedFirstNumber);
var savedSecondNumber = localStorage.getItem('secondNumber');
let parsedSavedSecondNumber = parseInt(savedSecondNumber);
var savedOperator = localStorage.getItem('operator');


document.getElementById('plusSign').addEventListener("click",localStorage.setItem('operator','+'));
console.log(parsedSavedFirstNumber + savedOperator + parsedSavedSecondNumber);
console.log(savedSecondNumber);

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