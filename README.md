# Javascript-Projects
JavaScript projects that took between 2-hours and 2-days to complete. Most projects used minimal/no CSS and focused on logic programming. Select larger projects are reviewed in this readme.

## Contents
- [Calculator Demo](#calculator-demo)
- [Pizza Demo](#pizza-demo)
- {TicTacToe Game](#tictactoe-game)

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

## TicTacToe Game
An HTML/JavaScript two-player TicTacToe game with graphics and sounds.

### Output
![alt text](https://github.com/alex-moffat/Javascript-Projects/blob/master/Calculator/Screenshot_calculator.jpg "Calculator")

### Details
- Audio used for place avatar, win, draw, and dice roll
- Active player display
- Player avatar selection
- Start and Stop Buttons
- Win condition celebration display 
- Winning squares display
- Square selection animation
- Use hidden HTML element to maintain board state


### JS Code
```JS
//========== AUTO FIRE - AFTER PAGE LOAD
window.onload = function() {
    watch()
}
function watch() {
    var stopBtn = document.getElementById("Btn_Stop");
    btnDisabled(stopBtn);
}

//========== SOUNDS ============================
//==============================================
function squareSound() {
    var sound = document.getElementById('Place_Avatar');
    sound.play();
    setTimeout(function() {sound.pause();}, 400); //pause sound to adjust length
    setTimeout(function() {sound.currentTime = 0;}, 420); //reset sound to beginning
}

function tieSound() {
    var sound = document.getElementById('Tie_Game');
    sound.play();
}

function winSound() {
    var sound = document.getElementById('Win_Game');
    sound.play();
    setTimeout(function() {sound.pause();}, 2200); //pause sound to adjust length
    setTimeout(function() {sound.currentTime = 0;}, 2220); //reset sound to beginning
}

function diceRoll() {
    var sound = document.getElementById('Dice_Roll');
    sound.play();
}

//========== DICE ROLL =========================
//==============================================

//========== rollForTurn()
function rollForTurn() {
    var xArray = [];
    var ranNum = "";
    var minNum = 2; // changed to make roll go from 2 to 12
    var maxNum = 11; // changed to make roll go from 2 to 12
    var first = "";
    var txt1 = "";
    var pOne = 0;
    var pTwo = 0;
    //===== random whole number between 2 & 12
    for (let i=0; i<2; i++) { 
        ranNum = Math.floor(Math.random()*(maxNum) + minNum);
        if (xArray == []) {
            xArray.push(ranNum);
        } else if (xArray[1] == ranNum) { // prevent tie - player 2 rolls again if the same number as player 1 
            i--;
        } else {
            xArray.push(ranNum);
        }        
    }
    
    //===== play dice roll sound
    diceRoll(); 
    
    //===== build string to show the players dice rolls
    for (let i=0; i<xArray.length; i++) { 
        let result = i + 1; // NOT USED in this code
        pOne = xArray[0];
        pTwo = xArray[1];
        // CODE REMOVED that prevented tie by hard coding payer 1 victory - prevented tie above 
        var txt1 = "Player 1 rolled [" + pOne + "]<br>";
        setTimeout(function() {writeMsg(txt1);},1000);
        var txt2 = txt1 + "Player 2 rolled [" + pTwo + "]<br><br>";
        setTimeout(function() {writeMsg(txt2);},3000);
    }
    //===== concantenate string showing which player won the dice roll
    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function() {txt2 += "Player 1 wins,please choose a square.";}, 4000);
        setTimeout(function() {writeMsg(txt2);}, 4000);
    } else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function() {txt2 += "Player 2 wins,please choose a square.";}, 4000);
        setTimeout(function() {writeMsg(txt2);}, 4000);
    }
    return first;
}

//========== GAME START & STOP =====================
//==================================================

//===== startGame() - started by user - rolls for turn, sets active player, disables/enables start/stop buttons
function startGame() {
    var xTurn = 0; // NOT USED in original code
    var activePlayer = rollForTurn();
    if (activePlayer == "") { // NOT USED in this code - tie is prevented in rollForTurn()
        activePlayer = rollForTurn();
    }
    setTimeout(function() {hideGameMsg();}, 7000);
   
    //========== assign proper state to control buttons
    var btnStart = document.getElementById('Btn_Start');
    btnDisabled(btnStart);
    var btnStop = document.getElementById('Btn_Stop');
    btnEnabled(btnStop);

    //========== display the active player
    setTimeout(function() {displayPlayer();}, 7020); // Delay when to display active player
    function displayPlayer() {
        var showPlayer = document.getElementById('Show_Player');
        showPlayer.innerHTML = activePlayer;
        showPlayer.style.color = "green";
    }
}

//===== btnDisabled() - disable the start or stop button
function btnDisabled(btn) {
    console.log("btnDisabled() --> " + btn.id);
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(153,153,102)";
    btn.style.backgroundColor = "rgb(214,214,194)";
    btn.disabled = true;
}

//===== btnEnabled() - enable the start or stop button - changes buttons back to orginal state set by css - replaced the 2 functions used in video
function btnEnabled(btn) {
    console.log("btnEnabled() --> " + btn.id);
    if (btn.id == "Btn_Start") {
        btn.style.color = "#fff";
        btn.style.border = "2px solid rgb(62, 117, 62)";
        btn.style.backgroundColor = "rgb(77, 173, 45)";
    } else {
        btn.style.color = "#fff";
        btn.style.border = "2px solid rgb(109, 16, 0)";
        btn.style.backgroundColor = "rgb(179, 78, 78)";
    }    
    btn.disabled = false;
}

//===== stopGame() - stopped by user - stop current game and reset
function stopGame() {
    hideGameMsg();
    
    //========== assign proper state to control buttons
    var btnStart = document.getElementById('Btn_Start');
    btnEnabled(btnStart);
    var btnStop = document.getElementById('Btn_Stop');
    btnDisabled(btnStop);

    //========== display game stopped
    var showPlayer = document.getElementById('Show_Player');
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color = "red";

    //========== reset all squares to starting state
    const arrayO = document.getElementsByClassName("O");
    const arrayX = document.getElementsByClassName("X");
    for (i=0; i<arrayO.length;i++) {
        arrayO[i].style.transform = "translateY(-100%)";
        arrayX[i].style.transform = "translateY(100%)";
    }
    
    //========== Clears running log of game moves
    document.getElementById('Board_State').innerHTML = "";
} 

//========== MESSAGE CONSOLE ===================
//==============================================

//========== writeMsg() - show message box and create message
function writeMsg(t) {
    document.getElementById("gameMsg").innerHTML = t;
    showGameMsg();
}
//========== clearMsg() - clear message
function clearMsg() {
    document.getElementById("gameMsg").innerHTML = "";
}

//========== showGameMsg() - show message box
function showGameMsg() {
    document.getElementById("gameMsgBox").style.display = 'block';
}
//========== hideGameMsg() - show message box
function hideGameMsg() {
    clearMsg();
    document.getElementById("gameMsgBox").style.display = 'none';
}

//========== PLAYER CONFIGURATION ==================
//==================================================

//========== saveSettings() - makes avatar assignments after checking to makes sure they are not both the same 
function saveSettings() {
    var p1Index = document.getElementById("Player_1").selectedIndex;
    var p1Select = document.getElementById("Player_1").options;
    var p2Index = document.getElementById("Player_2").selectedIndex;
    var p2Select = document.getElementById("Player_2").options;
    if (p1Select[p1Index].text == p2Select[p2Index].text) {
        alert("ERROR: Player 1 and Player 2 cannot both be assigned as: " + p1Select[p1Index].text);
    } else {
        document.getElementById("P1_Display").innerHTML = p1Select[p1Index].text;
        document.getElementById("P2_Display").innerHTML = p2Select[p2Index].text;
    }
}

//========== getAvatar() - returns currently assigned avatars for each player
function getAvatars() {
    var p1Avatar = document.getElementById("P1_Display").innerHTML;
    var p2Avatar = document.getElementById("P2_Display").innerHTML;
    var avatarArray = [p1Avatar, p2Avatar];
    return avatarArray;
}

//========== determineAvatar() - return the active players avatar
function determineAvatar() {
    var avatarArray = getAvatars();
    var active = document.getElementById("Show_Player").innerHTML;
    var p1Avatar = avatarArray[0];
    var p2Avatar = avatarArray[1];
    if (active == "Player 1") {
        var paintAvatar = p1Avatar;
    } else if (active == "Player 2") {
        var paintAvatar = p2Avatar;
    }
    return paintAvatar;
}

//========== avatarPlaced() - switches the active player
function avatarPlaced() {
    var parseText = document.getElementById('gameMsg').innerHTML;
    var showPlayer = document.getElementById('Show_Player');
    //===== check if the game is already over
    if (parseText == "That's three in a row, Player 1 wins!" || parseText == "That's three in a row, Player 2 wins!") {
        showPlayer.innerHTML = "Game Stopped";
        showPlayer.style.color = "red";
    }
    var activePlayer = showPlayer.innerHTML;
    //===== Swap player turn
    if (activePlayer == "Player 1") {
        showPlayer.innerHTML = "Player 2"
    } else {
        showPlayer.innerHTML = "Player 1"
    }
    // checkTie(); NOT USED in original code
}

//========== SQUARE CLICK EVENTS ===================
//==================================================

//========== squareAnimate(e) - receives the element as an argument 
function squareAnimate(e) {
    console.log('squareAnimate(e)--> ' + e.id);
    var square = e.getAttribute("data-square"); // added code to pull what square number is being pressed (squares numbered 1 - 9)
    var indexNum = parseInt(square) - 1; // convert string square number to integer
    var squareID = e.id; // added code to pull what square element ID
    var activePlayer = document.getElementById('Show_Player').innerHTML;
    
    //===== Prevent placement is game is not started
    if (activePlayer != "Game Stopped") {
        
        //===== Check if selected square is valid (hasn't been used) - then use if valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar(); // no value returned (undefined) if not occupied already
            var selected = document.getElementsByClassName(paintAvatar)[indexNum];
            //===== animate X or O - count remove this if statement and just use animate(paintAvatar, selected);
            if (paintAvatar == "O") {
                animate(paintAvatar, selected);
            } else if (paintAvatar == "X") {
                animate(paintAvatar, selected);
            }
            squareSound(); // play sound when avatar is placed 
        }
        //===== Build new array with newly selected square and assigned avatar
        var currentMove = "," + square + paintAvatar;
        recordMove(currentMove);
        checkForWin();
        avatarPlaced(square,paintAvatar); // pass turn to other player
    }
}

//========== animate() - animates either a "O" or "X" (which) to the selected element
function animate(which, selected) {
    if (which == "O") {
        selected.style.transform = (selected.style.transform == "translateY(-100%)" || null) ? "translateY(0)":"translateY(-100%)";
    } else {
        selected.style.transform = (selected.style.transform == "translateY(100%)" || null) ? "translateY(0)":"translateY(100%)";
    }
    
}

//========== RECORD & CHECK MOVES ==================
//==================================================

//========== recordMoves(square) - format input then calls to check if square is already assigned - passed string square number as argument
function recordMoves(square) {
    var boardState = document.getElementById('Board_State').innerHTML;
    var info = boardState.split(','); // seperate the string by commas to create an array
    verdict = check(info,square); // call to check if square is already occupied - no value returned (undefined) if not occupied already
    return verdict;
}

//========== check() - check if space is already occupied
function check(info, square) {
    for (let i in info) {
        let tempInfo = info[i].charAt(0);
        if (tempInfo == square) {
            return tempInfo; //return a value if in list of played squares
        }
    }
}

//========== recordMove() - get a list of previous moves and concatenate the current move
function recordMove(currentMove) {
    console.log("recordMove() --> " + currentMove);
    document.getElementById('Board_State').innerHTML = document.getElementById('Board_State').innerHTML + currentMove;
    console.log("Board_State = " + document.getElementById('Board_State').innerHTML);
}

//========== checkForWin()
function checkForWin() {
    var squareArray = [];
    var avatarArray = [];
    var target = document.getElementById('Board_State');
    var info = target.innerHTML;
    info = info.substring(1); //remove leading comma
    info = info.split(',');
    info.sort(); // sort the square array in order despite the squence of gameplay
    
    // create new array without avatars & without squares
    for (i in info) {
        squareArray.push(info[i].charAt(0));
        avatarArray.push(info[i].charAt(1));
    }
    //===== check for any 1 of 8 win conditions
    checkWinCon(squareArray,avatarArray);    
    check4Tie();
}

//========== WIN & TIE CONDITIONS ==================
//==================================================

//========== checkWinCon() - consolidated 9 wincon functions to this one with two switches
function checkWinCon(squareArray,avatarArray) {
    console.log("checkWinCon() --> " + squareArray + " " + avatarArray);
    var winCon = [];
    var winDetected = "on";
    //===== create an array with all current square values
    var currentArray = ['','','','','','','','',''];
    for (let i=0; i<squareArray.length; i++) {
        switch (squareArray[i]) {
            case "1":
                currentArray[0] = avatarArray[i];
                break;
            case "2": 
                currentArray[1] = avatarArray[i];
                break;
            case "3": 
                currentArray[2] = avatarArray[i];
                break;
            case "4": 
                currentArray[3] = avatarArray[i];
                break;
            case "5": 
                currentArray[4] = avatarArray[i];
                break;
            case "6": 
                currentArray[5] = avatarArray[i];
                break;
            case "7": 
                currentArray[6] = avatarArray[i];
                break;
            case "8": 
                currentArray[7] = avatarArray[i];
                break;
            case "9": 
                currentArray[8] = avatarArray[i];
                break;
            default :
                // default current array set before switch    
        }       
    }
    console.log(currentArray);
    //===== check for 1 of 8 win conditions - evaluate to boolean in each case 
    if (currentArray[0] != "" && currentArray[0] == currentArray[1] && currentArray[0] == currentArray[2]) {
        // winCondition 1 = [0,1,2]
        winCon = [0,1,2];
        winDetected = "win";            
    } else if (currentArray[3] != "" && currentArray[3] == currentArray[4] && currentArray[3] == currentArray[5]) {
        // winCondition 2 = [3,4,5]
        winCon = [3,4,5];
        winDetected = "win";
    } else if (currentArray[6] != "" && currentArray[6] == currentArray[7] && currentArray[6] == currentArray[8]) {
        // winCondition 3 = [6,7,8]
        winCon = [6,7,8];
        winDetected = "win";
    } else if (currentArray[0] != "" && currentArray[0] == currentArray[3] && currentArray[0] == currentArray[6]) {
        // winCondition 4 = [0,3,6]
        winCon = [0,3,6];
        winDetected = "win";
    } else if (currentArray[1] != "" && currentArray[1] == currentArray[4] && currentArray[1] == currentArray[7]) {
        // winCondition 5 = [1,4,7]
        winCon = [1,4,7];
        winDetected = "win";
    } else if (currentArray[2] != "" && currentArray[2] == currentArray[5] && currentArray[2] == currentArray[8]) {
        // winCondition 6 = [2,5,8]
        winCon = [2,5,8];
        winDetected = "win";
    } else if (currentArray[6] != "" && currentArray[6] == currentArray[4] && currentArray[6] == currentArray[2]) {
        // winCondition 7 = [6,4,2]
        winCon = [6,4,2];
        winDetected = "win";
    } else if (currentArray[0] != "" && currentArray[0] == currentArray[4] && currentArray[0] == currentArray[8]) {
        // winCondition 8 = [0,4,8]
        winCon = [0,4,8];
        winDetected = "win";
    } else {
        // default no win detected
        winDetected = "on";
    }
    winner(winDetected,winCon);     
}

//========== check4Tie() - Check to see if all spots have been placed and to winning message
function check4Tie() {
    var boardState = document.getElementById('Board_State').innerHTML;
    boardState = boardState.substring(1); //remove leading comma
    boardState = boardState.split(',');
    var check = document.getElementById('gameMsg').innerHTML;
    if (boardState.length >= 9 && check.substring(0,6) != "That's") {
        let txt1 = "Oh no! Nobody wins, it was a tie game";
        tieSound();
        writeMsg(txt1);
        //===== end game and enable restart
        setTimeout(function() {stopGame();}, 3000);
    }
}

//========== winner() - if win was detected this makes the win process
function winner(winDetected, winCon) {
    console.log("winner() --> " + winDetected + " " + winCon)
    if (winDetected == "win") {
        var showMe = winDetected; // NOT USED in original code
        var activePlayer = document.getElementById('Show_Player').innerHTML;
        var txt2 = "That's three in a row, " + activePlayer + " wins!";
        writeMsg(txt2);
        glowBoard(winCon);
        //===== end game and enable restart
        setTimeout(function() {stopGame();}, 4000);
    }
}

//========== glowBoard() - make winning squares light up
function glowBoard(pos) {
    // ASSIGN VARIABLES - make adjustment for element class "Square" array
    var index0 = pos[0];
    var index1 = pos[1];
    var index2 = pos[2];
    var winArray = [index0, index1, index2];
    var squareArray = document.getElementsByClassName('Square');
    winSound();
     
    //===== blink backgrounds of winning squares & webpage background - iterate through winArray to set the 3 squareArray elements
    blink(document.getElementById('Body'));
    for (let i=0; i<winArray.length;i++) {
        console.log(squareArray[winArray[i]].id);
        blink(squareArray[winArray[i]]); // the squareArray index is the value at the winArray i index position
    } 
}

//========== blink() - make Square or Body element blink - parameter is the element 
function blink(e) {
    if (e.id == "Body") { // webpage element
        var finalColor = '#ffffff';
    } else { // Square element
        var finalColor = '#d7f3f7';
    }
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 100);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 200);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 300);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 400);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 500);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 600);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 700);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 800);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 900);
    setTimeout(function() {e.style.backgroundColor = randomRGB();}, 900);
    setTimeout(function() {e.style.backgroundColor = finalColor;}, 1100);
}

function randomRGB() {
    let num1 = Math.floor((Math.random()*255)+1);
    let num2 = Math.floor((Math.random()*255)+1);
    let num3 = Math.floor((Math.random()*255)+1);
    let sRGB = 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
    return sRGB;
}
```
