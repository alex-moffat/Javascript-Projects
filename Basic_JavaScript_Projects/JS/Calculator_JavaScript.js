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
