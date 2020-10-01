//========== DECLARE GLOBAL VARIABLES ==========
//==============================================
var G_1;

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //========== FIND ERROR
    
}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== DATA ATTRIBUTE
function getDescription(pet) {
    var pAnimal = pet.getAttribute("data-animal");
    var pBreed = pet.getAttribute("data-breed");
    var pAge = pet.getAttribute("data-age");
    var pGender = pet.getAttribute("data-gender");
    var pLove = pet.getAttribute("data-love");
    var pDescription = pet.innerHTML + " is a " + " " + pAge + " old " + pBreed + " " + pAnimal + " that loves to " + pLove + ".";
    document.getElementById("Description_Text").innerHTML = pDescription;    
}