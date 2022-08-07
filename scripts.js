let display = document.getElementById('display');

let num1 = 0; // keeps track of the first num
let num2 = 0; // keeps track of the second num
let numSwitch = false; // switches which num is being displayed
let dpt = false; // if true, increments num by 10, else increments by dptCounter
let dptCounter = 0.1; // keeps track of decimal increments

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  display.innerHTML = '0';
  num1 = 0;
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
  console.log('equal button was pressed');
});

//operations begin here

const divide = document.getElementById('divide');

divide.addEventListener('click', () => {
  console.log('divide button was pressed');
});

const multiply = document.getElementById('multiply');

multiply.addEventListener('click', () => {
  console.log('multiply button was pressed');
});

const subtract = document.getElementById('subtract');

subtract.addEventListener('click', () => {
  console.log('subtract button was pressed');
});

const add = document.getElementById('add');

add.addEventListener('click', () => {
  console.log('add button was pressed');
});

// numbers begin here

const zero = document.getElementById('zero');

zero.addEventListener('click', () => {
  display.innerHTML = '0';
});

const one = document.getElementById('one');

one.addEventListener('click', () => {
  if (numSwitch) {
    if (num2 == 0) {
      num2 = 1;
    } else if (dpt) {
      num2 = num2 + dptCounter * 1;
      dptCounter = dptCounter / 10;
    } else {
      num2 = num2 * 10 + 1;
    }
    display.innerHTML = num2;
  } else {
    if (num1 == 0) {
      num1 = 1;
    } else if (dpt) {
      num1 = num1 + dptCounter * 1;
      dptCounter = dptCounter / 10;
    } else {
      num1 = num1 * 10 + 1;
    }
    display.innerHTML = num1;
  }
});

const two = document.getElementById('two');

two.addEventListener('click', () => {
  console.log('two button was pressed');
  display.innerHTML = '2';
});

const three = document.getElementById('three');

three.addEventListener('click', () => {
  console.log('three button was pressed');
  display.innerHTML = '3';
});

const four = document.getElementById('four');

four.addEventListener('click', () => {
  console.log('four button was pressed');
  display.innerHTML = '4';
});

const five = document.getElementById('five');

five.addEventListener('click', () => {
  console.log('five button was pressed');
  display.innerHTML = '5';
});

const six = document.getElementById('six');

six.addEventListener('click', () => {
  console.log('six button was pressed');
  display.innerHTML = '6';
});

const seven = document.getElementById('seven');

seven.addEventListener('click', () => {
  console.log('seven button was pressed');
  display.innerHTML = '7';
});

const eight = document.getElementById('eight');

eight.addEventListener('click', () => {
  console.log('eight button was pressed');
  display.innerHTML = '8';
});

const nine = document.getElementById('nine');

nine.addEventListener('click', () => {
  console.log('nine button was pressed');
  display.innerHTML = '9';
});
