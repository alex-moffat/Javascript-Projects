//========== DECLARE GLOBAL VARIABLES & CONSTANTS ==========
//==========================================================



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
