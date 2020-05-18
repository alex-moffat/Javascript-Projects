//========== DECLARE GLOBAL VARIABLES ==========
//=======================================
// == Used in precisionMe() & fixMe()
var G_1 = 5.00005; 


//========== FUNCTIONS & METHODS ==========
//=========================================

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //===== CONCATENATE "Con_Text"
    document.getElementById("Con_Text").innerHTML = fillMe(document.getElementById("Con_Text").innerHTML)
    
    //===== SLICE "Slice_Text"
    document.getElementById("Phone_Text").innerHTML = sliceMe(document.getElementById("Slice_Text").innerHTML)
    
    //===== TOUPPERCASE "Up_Text"
    document.getElementById("Up_Text").innerHTML = upMe(document.getElementById("Up_Text").innerHTML)
    
    //========== SEARCH METHOD "Search_Text"
    document.getElementById("Pos_Text").innerHTML = document.getElementById("Pos_Text").innerHTML + searchMe(document.getElementById("Search_Text").innerHTML)
    
    //========== TOSTRING METHOD - update 2 <p> elements
    stringMe(5);
    
    //========== TOPRECISION METHOD - update 3 <p> elements
    document.getElementById("P4_Text").innerHTML = document.getElementById("P4_Text").innerHTML + precisionMe(4);
    document.getElementById("P7_Text").innerHTML = document.getElementById("P7_Text").innerHTML + precisionMe(7);
    document.getElementById("P14_Text").innerHTML = document.getElementById("P14_Text").innerHTML + precisionMe(14);
    
    //========== TOFIXED METHOD - update 3 <p> elements
    document.getElementById("F4_Text").innerHTML = document.getElementById("F4_Text").innerHTML + fixMe(4);
    document.getElementById("F7_Text").innerHTML = document.getElementById("F7_Text").innerHTML + fixMe(7);
    document.getElementById("F14_Text").innerHTML = document.getElementById("F14_Text").innerHTML + fixMe(14);
}

//========== CONCATENATE METHOD
function fillMe(A) {
    console.log("Concatenate --> " + A);
    var B = "<br>";
    var C = "This is some sample text ";
    var D = "that has been concatenated.";
    var E = "<br> I used the concat() method, after the onLoad event trigger.";
    return A.concat(B, C, D, E);
}

//========== SLICE METHOD
function sliceMe(A) {
    console.log("Slice --> " + A);
    A = A.slice(-10); // stice from the end - last 10 digits are the phone number part
    console.log(A);
    var B = "(" + A.slice(0,3) + ") "; // start position is 0 NOT 1
    var C = A.slice(3,6);
    var D = "-" + A.slice(6,10);
    return B.concat(C, D);
}

//========== TOUPPERCASE METHOD - The toUpperCase() method converts a string to uppercase letters
function upMe(A) {
    console.log("toUpperCase --> " + A);
    return A.toUpperCase(A);
}

//========== SEARCH METHOD - searches a string for a specified value and returns the position of the first letter of the match
function searchMe(A) {
    console.log("Search --> " + A);
    return A.search("elephant");
}

//========== TOSTRING METHOD - Converts a number to a string
function stringMe(A) {
    console.log("stringMe --> " + A);
    var S = A.toString(); // convert number to string
    var N = Number(S); // convert string to number
    console.log("N = " + N);
    document.getElementById("Num_Text").innerHTML = (N += A);
    console.log("S = " + S);
    document.getElementById("String_Text").innerHTML = (S += A);    
}

//========== TOPRECISION() METHOD converts a number to a string with a specific number of digits
function precisionMe(A) {
    var N = 123456.78901;
    console.log("number " + N + " to precision --> " + A);
    var R = N.toPrecision(A);
    var C = R;
    console.log(typeof R);
    console.log(C += G_1); // checking what happens when you add a number after toPrecision
    return R;        
}

//========== TOFIXED() METHOD converts a number into a string, rounding to a specified number of decimals
function fixMe(A) {
    var N = 123456.78901;
    console.log("number " + N + " fixed to --> " + A);
    N += G_1;
    R = N.toFixed(A)
    console.log(typeof R);
    return R.valueOf(); // The valueOf() method returns the primitive value of a String object.Note: This method is usually called automatically by JavaScript behind the scenes.        
}