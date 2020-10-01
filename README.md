# Javascript-Projects
JavaScript projects that took between 2-hours and 2-days to complete. Most projects used minimal/no CSS and focused on logic programming. Select larger projects are reviewed in this readme.

## Contents
- [Calculator Demo](#calculator-demo)
- [Pizza Demo](#pizza-demo)

## Calculator Demo
A fully functional calculator to perform basic math on an HTML page.

### Output
![alt text](https://github.com/alex-moffat/Javascript-Projects/blob/master/Calculator/Screenshot_calculator.jpg "Calculator")

### Details
- Button hover effects
- Basic math functions
- Clear, equal and decimals
- Global constant object to hold values 
- Event Listeners
- Query Selector
- Shorthand methods

### JS Code
```JS
//========== DECLARE GLOBAL VARIABLES & CONSTANTS ==========
//==========================================================

//========== creates an object to keep track of default values
const Calculator = {
    displayValue: '0',
    firstOperand: null,
    waitSecondOperand: false,
    operator: null,
};

//========== creates an object that can perform calculations - use shorthand method using the ARROW function =>
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

const Keys = document.querySelector('.Calc_Keys'); //stores the 'Calc_Keys' class object
console.log("Keys = " + Keys);

//========== BUTTON CLICK MONITOR =================
//=================================================

//===== The onClick event for all keys - the variable (event) is the object event that contains 
Keys.addEventListener('click', (event) => {
    const {target} = event; // the 'target' event property is element type that triggered the event <button>
    const eventTarget = event.target;
   
    // added this code to try another method
    if (!event.target.matches('button')) {
        console.log("AM: click was not on a button");
        return;
    } else if (!target.matches('button')) {
        console.log("TECH: click was not on a button");
        return;
    }

    if (eventTarget.classList.contains('Operator')) {
        handleOperator(eventTarget.value);        
    } else if (eventTarget.classList.contains('Decimal')) {
        inputDecimal(eventTarget.value);        
    } else if (eventTarget.classList.contains('All_Clear')) {
        calculatorReset();        
    } else {
        inputDigit(eventTarget.value);
    }
    updateDisplay(); 
})

//========== AUTO FIRE - AFTER PAGE LOAD ==========
//=================================================
 
function loadMe() {
    //========== Log
    console.log("Page Loaded");
    updateDisplay();        
}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== modify values each time a button is pressed
function inputDigit(digit) {
    const {displayValue, waitSecondOperand} = Calculator;
    if (waitSecondOperand === true) {
        Calculator.displayValue = digit;
        Calculator.waitSecondOperand = false;
    } else {
        Calculator.displayValue = (displayValue === '0') ? digit: displayValue + digit;
    }
}

//========== handles decimal points
function inputDecimal(dot) {
    if (Calculator.waitSecondOperand === true) { // prevent accidental decimal point click
        return;
    } else {
        if (!Calculator.displayValue.includes(dot)) { // add a dot if one does not already exist
            Calculator.displayValue += dot;
        }
    }
}

//========== handles operators when pressed
function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = Calculator;
    console.log(firstOperand + ", " + displayValue + ", " + operator)
    // ===== convert the number on the screen to a number  
    const valueOfInput = parseFloat(displayValue);
    // ===== BOOLEAN LOGIC check if operator not null & waitSecondOperand == true
    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    } else if (operator) { // check if operator already exists - property lookup for operator - calculation done
        const valueNow = firstOperand || 0; // I HAVE NO IDEA what the || or comparitor is doing here 
        var result = performCalculation[operator] (valueNow, valueOfInput);
        if (result.toString().length > 14) { // added this so that number doesn't go off the screen
            console.log(result);    
            result = result.toPrecision(13);
            console.log(result); 
        }        
        Calculator.displayValue = String(result);
        Calculator.firstOperand = result;
    }
    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

//========== reset property values in the Calculator constant to default 
function calculatorReset() {
    Calculator.displayValue = '0';
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}

//========== pull first 'Calc_Screen' class object - then update value that is displayed
function updateDisplay() {
    const display = document.querySelector('.Calc_Screen');
    display.value = Calculator.displayValue;
}
```

## Pizza Demo
Select a size of pizza with optional toppings and calculate total for the order on an HTML page.

### Output
![alt text](https://github.com/alex-moffat/Javascript-Projects/blob/master/Pizza/Screenshot_pizza_demo.jpg "Pizza_Demo")

### Details
- Simple Form with radio buttons
- Basic calculations
- Onload, OnClick
- getElementsByClassName, getElementById
- HTML formatting with JS
- Loops and switches
- Console logging

### JS Code
```JS
//========== AUTO FIRE - AFTER PAGE LOAD ==========
//=================================================
 
function loadMe() {
    //========== Log
    console.log("Page Loaded");           
}

//========== FUNCTIONS & METHODS ===============
//==============================================

function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('Size');
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) { // checks if input checkbox is clicked 
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
        }
    }
    switch (selectedSize) {
        case "Personal Pizza":
            sizeTotal = 6;
            break;
        case "Small Pizza":
            sizeTotal = 8;
            break;
        case "Medium Pizza":
            sizeTotal = 10;
            break;
        case "Large Pizza":
            sizeTotal = 14;
            break;
        case "Extra Large Pizza":
            sizeTotal = 16;
            break;
        default:
            console.log("Unexpected value: " + selectedSize);
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getVegi(runningTotal, text1);
}

function getVegi(runningTotal, text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName('Vegi');
    for (let i = 0; i < vegArray.length; i++) {
        if (vegArray[i].checked) { // checks if input checkbox is clicked 
            selectedVeg.push(vegArray[i].value);
            console.log("Selected vegi item: " + vegArray[i].value);
            text1 += vegArray[i].value + "<br>";
        }
    }
    var vegCount = selectedVeg.length;
    runningTotal = (runningTotal + vegCount);
    console.log("Total selected vegi items: " + vegCount);
    console.log(vegCount + " vegi = $" + vegCount + ".00");
    console.log("veg text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    getMeat(runningTotal, text1);
}


function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName('Meats');
    for (let i = 0; i < meatArray.length; i++) {
        if (meatArray[i].checked) { // checks if input checkbox is clicked 
            selectedMeat.push(meatArray[i].value);
            console.log("Selected meat item: " + meatArray[i].value);
            text1 += meatArray[i].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = meatCount - 1;
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("Total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = $" + meatTotal + ".00");
    console.log("meat text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("Show_Text").innerHTML = text1;
    document.getElementById("Total_Price").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
```
