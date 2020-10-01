//========== DECLARE GLOBAL VARIABLES ==========
//==============================================
var G_1;

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //========== FIND ERROR
    
}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== FORM VALIDATION
function validateForm() {
    var fName = document.forms["contactForm"]["name"].value;
    var fEmail = document.forms["contactForm"]["email"].value;
    var fMessage = document.forms["contactForm"]["message"].value;
    let a = "Please make sure you fill in your ";
    if (fName == "") {
        alert(a += "name.");
        return false;
    } else if (fEmail == "") {
        alert(a += "email.");
        return false;
    } else if (fMessage == "") {
        alert(a += "a message.");
        return false;
    }
}