//========== DECLARE GLOBAL VARIABLES ==========
//==============================================
var G_1;

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //========== FIND ERROR
    findError();
    
    //========== STRING LENGTH
    countString();

    //========== FOR LOOP
    forLoop();

    //========== ARRAY
    makeArray();

    //========== LET
    useLet();
    document.getElementById("Object_Text").innerHTML = letObject();

    //========== RETURN
    document.getElementById("Return_Text").innerHTML = getReturn();

    //========== CONTINUE & BREAK
    continueAndBreak(document.getElementById("Break_Text").id); // pass the html id as an argument for the function the insert
}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== FIND ERROR
function findError() {
    var toPrint = "";
    A = "Always ";
    B = "remember: ";
    console.log(A + B);
    toPrint += (A + B);

    X = "you ";
    Y = "are ";
    console.log(X + Y);
    toPrint += (X + Y);

    M = "unique, " ;
    N = "just like everyone else.";
    /* document.write(N + Z); Bug: fixed in line below */
    console.log(M + N);
    toPrint += (M + N);
    
    document.getElementById("Error_Text").innerHTML = toPrint;
}

//========== WHILE LOOP
function whileLoop(n) {
    var toPrint = "";
    var i = n;
    while (i>=0) {
        toPrint += i + " ";
        i--;
    }
    document.getElementById("Loop_Text").innerHTML = toPrint
}

//========== STRING LENGTH
function countString() {
    var s = document.getElementById("Sample_Text").innerHTML;
    document.getElementById("Count_Text").innerHTML = document.getElementById("Count_Text").innerHTML += s.length;
}

//========== FOR LOOP
function forLoop() {
    var iList = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var toPrint = document.getElementById("For_Text").innerHTML + "<br>";
    var i;
    for (i = 0; i < iList.length; i++) {
        toPrint += iList[i] + "<br>";        
    }
    document.getElementById("For_Text").innerHTML = toPrint;
}

//========== ARRAY
function makeArray() {
    var i;
    var aList = [];
    var aText = document.getElementById("Array_Text").innerHTML + "<br>";
    var iText = document.getElementById("Item_Text").innerHTML + " ";
    // adding items to array
    aList.push("Monkey");
    aList.push("Dog", "Cat");
    aList.push("Snake");
    aList.push("Frog");
    aList.push("Chicken");
    aList.push("Chinchilla");
    // adding items from array to print variable
    for (i = 0; i < aList.length; i++) {
        console.log("List item " + i + " = " + aList[i]);
        aText += aList[i] + "<br>";        
    }
    document.getElementById("Array_Text").innerHTML = aText;
    document.getElementById("Item_Text").innerHTML = iText += aList[3];
}

//========== CONSTANT
function useConstant() {
    var i, cKeys, cValues;
    sReturn = document.getElementById("Constant_Text").innerHTML += "<br>";
    // creating a constant object with KVPs (properties and values) 
    const cArray = {
        Dog:"Albert",
        Cat:"Zuli",
        Snake:"Barbus",
        Chicken:"Nug",
        Frog:"Cogswerth"
    }
    cArray.Farm = "Moffat" // added KVP
    cArray.Chicken = "Plurp" // changed value
    cKeys = Object.keys(cArray); // USE keys() method to create a list of keys (properties) from cArray KVPs object
    cValues = Object.values(cArray); // USE values() method to create a list of values from cArray KVPs object
    // LOOP - generate a string return that contains all the KVPs
    for (i = 0; i < cKeys.length; i++) {
        console.log("List item " + i + " = " + cValues[i]);
        sReturn += cKeys[i] + ": " + cValues[i] + "<br>";        
    }
    document.getElementById("Constant_Text").innerHTML = sReturn;
    document.getElementById("Added_Value").innerHTML = document.getElementById("Added_Value").innerHTML += cArray.Farm;
    document.getElementById("Changed_Value").innerHTML = document.getElementById("Changed_Value").innerHTML += cArray.Chicken;
}

//========== LET - useLet
function useLet() {
    var X = 10;
    {
        let X = 5;
        console.log("let X = " + X)
    }
    console.log("var X = " + X)
    document.getElementById("Let_Text").innerHTML = X;
}

//========== LET - letObject
function letObject() {
    let cArray = {
        dog:"Albert",
        cat:"Zuli",
        snake:"Barbus",
        chicken:"Plurp",
        chickens:"Nug, Plurp, Peep, Pilar, Supreme, and Guchi",
        frog:"Cogswerth",
        farm:"Moffat",
        description: function() {
            let d = "The " + this.farm + " Family Farm has";
            d += " a cat named " + this.cat;
            d += " a dog named " + this.dog;
            d += " a snake named " + this.snake;
            d += " a frog named " + this.frog;
            d += " and chickens named " + this.chickens + ".";
            d += " The softest chicken is " + this.chicken + ".";
            return d;
        }
    }
    return cArray.description();
}

//========== RETURN
function getReturn() {
    const S = "The return statement <u>stops</u> the execution of a function and returns a value from that function.<br>This was a string constant set inside a function that was returned by that function when it was called.";
    return S;
    console.log("You should not see this message because the function returned a value already.");
}

//========== CONTINUE & BREAK
function continueAndBreak(n) {
    var iList = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var aList = ["Monkey","Dog", "Cat", "Snake", "Frog", "Chicken", "Chinchilla"];
    var fList = iList.concat(aList);
    let editCount = 0;
    let consoleList = "There are " + fList.length + " items on the full list and they are: ";
    let editList = "";
    let i;
    for (i=0; i < fList.length; i++) {  
        if (fList[i] === "Trumpet" || fList[i] === "Monkey") { // edit out 2 items from edited list
            consoleList += fList[i] + " "; // keeping items on full list 
            continue;
        } else if (fList[i] === "Frog") { // editing out last few items on the edited list 
            let j;
            // NESTED LOOP - keeping remaining items on full list
            for (j=i; j < fList.length; j++) {  
                consoleList += fList[j] + " ";
            }            
            break;
        }
        consoleList += fList[i] + " ";
        editList += fList[i] + " ";       
        editCount ++;
    }
    console.log(consoleList);
    console.log(document.getElementById(n).id);
    document.getElementById(n).innerHTML = "There are " + editCount + " items on the edited list and they are: " + editList;
}

 