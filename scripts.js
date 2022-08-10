let display = document.getElementById('display');

var num1 = 0; // keeps track of the first num
var num2 = 0; // keeps track of the second num
var numSwitch = false; // switches which num is being displayed
var dpt = false; // if true, increments num by 10, else increments by dptCounter
var dptCounter = 0.1; // keeps track of decimal increments
var operation = 0; // 1: add / 2: subtract / 3: multiply / 4: divide
var newEQ = false; // allows for new EQs in addition to chaining EQs

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  display.innerHTML = '0';
  num1 = 0;
  num2 = 0;
  numSwitch = false;
  dpt = false;
  dptCounter = 0.1;
  operation = 0;
  newEQ = false;
});

const invert = document.getElementById('invert');

invert.addEventListener('click', () => {
  console.log('invert button was pressed');
});

const percent = document.getElementById('percent');

percent.addEventListener('click', () => {
  console.log('percent button was pressed');
});

const decimal = document.getElementById('decimal');

decimal.addEventListener('click', () => {
  dpt = true;
});

const equal = document.getElementById('equal');

equal.addEventListener('click', () => {
  if (operation == 1) {
    num1 = num1 + num2;
  } else if (operation == 2) {
    num1 = num1 - num2;
  } else if (operation == 3) {
    num1 = num1 * num2;
  } else {
    num1 = num1 / num2;
  }
  display.innerHTML = num1;
  num2 = 0;
  numSwitch = false;
  newEQ = true;
  console.log('num1: ', num1);
  console.log('num2: ', num2);
});

//operations begin here

const divide = document.getElementById('divide');

divide.addEventListener('click', () => {
  numSwitch = true;
  dptCounter = 0.1;
  operation = 4;
  console.log('num1: ', num1);
  console.log('num2: ', num2);

  if (num2 == 0) {
    display.innerHTML = num1;
  } else {
    num1 = num1 / num2;
    num2 = 0;
    display.innerHTML = num1;
  }
});

const multiply = document.getElementById('multiply');

multiply.addEventListener('click', () => {
  numSwitch = true;
  dptCounter = 0.1;
  operation = 3;
  console.log('num1: ', num1);
  console.log('num2: ', num2);

  if (num2 == 0) {
    display.innerHTML = num1;
  } else {
    num1 = num1 * num2;
    num2 = 0;
    display.innerHTML = num1;
  }
});

const subtract = document.getElementById('subtract');

subtract.addEventListener('click', () => {
  numSwitch = true;
  dptCounter = 0.1;
  operation = 2;
  console.log('num1: ', num1);
  console.log('num2: ', num2);
  num1 = num1 - num2;
  num2 = 0;
  display.innerHTML = num1;
});

const add = document.getElementById('add');

add.addEventListener('click', () => {
  numSwitch = true;
  dptCounter = 0.1;
  operation = 1;
  console.log('num1: ', num1);
  console.log('num2: ', num2);
  num1 = num1 + num2;
  num2 = 0;
  display.innerHTML = num1;
});

// numbers begin here

const zero = document.getElementById('zero');

zero.addEventListener('click', () => {
  numInput(0);
});

const one = document.getElementById('one');

one.addEventListener('click', () => {
  numInput(1);
});

const two = document.getElementById('two');

two.addEventListener('click', () => {
  numInput(2);
});

const three = document.getElementById('three');

three.addEventListener('click', () => {
  numInput(3);
});

const four = document.getElementById('four');

four.addEventListener('click', () => {
  numInput(4);
});

const five = document.getElementById('five');

five.addEventListener('click', () => {
  numInput(5);
});

const six = document.getElementById('six');

six.addEventListener('click', () => {
  numInput(6);
});

const seven = document.getElementById('seven');

seven.addEventListener('click', () => {
  numInput(7);
});

const eight = document.getElementById('eight');

eight.addEventListener('click', () => {
  numInput(8);
});

const nine = document.getElementById('nine');

nine.addEventListener('click', () => {
  numInput(9);
});

// Purpose: function for inputting numbers
// Param: number is the specific int tied to the button
// Bug: floating decimals?
function numInput(number) {
  // newEQ checks if an equation has just been solved and the answer is being displayed
  if (newEQ) {
    num1 = 0;
    newEQ = false;
  }
  // numSwitch checks if num1 already has a val, in which case we give num2 a val
  if (numSwitch) {
    // if val is 0, give the val of the button
    // if dpt is true, add the val of the button adjusted for the tenths place etc.
    // if there is already a val and dpt is false, add the val of the button after multiplying
    // everything by 10
    if (num2 == 0) {
      num2 = number;
    } else if (dpt) {
      num2 = num2 + dptCounter * number;
      dptCounter = dptCounter / 10;
    } else {
      num2 = num2 * 10 + number;
    }
    display.innerHTML = num2;
  } else {
    // the above logic is true for num1 as well
    if (num1 == 0) {
      num1 = number;
    } else if (dpt) {
      num1 = num1 + dptCounter * number;
      dptCounter = dptCounter / 10;
    } else {
      num1 = num1 * 10 + number;
    }
    display.innerHTML = num1;
  }
}
