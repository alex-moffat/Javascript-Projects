//========== DECLARE VARIABLES ==========
//=======================================

// USED in: rideFunction()
var Height; // experiment to see if variables can be declared globally before function is called
var Can_ride; 

// USED in: guessNumber()
var R_Num = Math.round(Math.random() * 100) + 1;
var Number_Guess = 0;
var G_Num, How_Close;

// USED in: myFunction() - Object Constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White & Black");
var Erik = new Vehicle("Ford", "Pinto", 1971,"Mustard");

// USED in: addPerson()
function Person(Name, Age, Gender, State) { //creating a class?
    this.pName = Name;
    this.pAge = Age;
    this.pGender = Gender;
    this.pState = State;
    this.pAnimal = "Human";
}
var personList = []; // list of person objects
var pCount = 0; // number of person ojects added to the list
var aName, aAge, aGender, aState;


//========== FUNCTIONS & METHODS ==========
//=========================================

console.log("The random number is " + R_Num); // write random number to console
console.log("The number of guesses is " + Number_Guess);

function fillIt() { // after page loads can fill element
    document.getElementById("Guess_Num").innerHTML = Number_Guess;
    //var super = "I can display the word \"super\"!";
    //document.getElementById("Reserve_Word").innerHTML = super; // RESERVE WORD CHALLANGE - try to assign a name to a variable that is a reserve word
}

// ========== NESTED FUNCTION
function nest1(iNum) {
    var nestNum = iNum + 1;
    return nestNum;
}

function addOne() {
    var Current_Num = Number(document.getElementById("Nested_Funtion").innerHTML);
    document.getElementById("Nested_Funtion").innerHTML = nest1(Current_Num);
}


// ========== CHECK RIDER HEIGHT 
function rideFunction() { // check if rider is tall enough to ride
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//========== GUESS A NUMBER
function guessNumber() { // guess a number from 1 to 100
    G_Num = document.getElementById("Guess").value; // get the guess value
    Number_Guess++; //increment one guess
    How_Close = (G_Num < R_Num) ? "You are too low":"You are too high";
    How_Close = (G_Num == R_Num) ? "YOU GUESSED IT!":How_Close; // overright response only if guess is equal to random number
    How_Close = (G_Num == "") ? "You need to guess a number!":How_Close; // overright response only if guess is equal to random number
    console.log("The number of guesses is " + Number_Guess);
    document.getElementById("Your_Guess").innerHTML = How_Close;
    document.getElementById("Guess_Num").innerHTML = Number_Guess;
}

//========== KEYWORDS & CONSTRUCTORS
function myFunction() {
    document.getElementById("Keywords_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Year + " " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + " " + Erik.Vehicle_Model;
}

//========== ADD A PERSON - adds a person to a list and to <p> element based on input fields
function addPerson() {
    pCount++; //increment one person added to list of people
    console.log("The number of people added is " + pCount);
    aName = document.getElementById("A_Name").value;
    aAge = document.getElementById("A_Age").value;
    aGender = document.getElementById("A_Gender").value;
    aState = document.getElementById("A_State").value;
    console.log(aPerson + ", " + aName + ", " + aAge + ", " + aGender + ", " + aState);
    var aPerson = new Person(aName, aAge, aGender, aState); // create the new object of the person class
    personList.push(aPerson); // add a person object to the list
    document.getElementById("New_and_This").innerHTML = document.getElementById("New_and_This").innerHTML + 
    aPerson.pName + " is a " + 
    aPerson.pAge + " year old " +
    aPerson.pGender + " " +
    aPerson.pAnimal + " that lives in " +
    aPerson.pState + ".<br>";
    console.log(aPerson.pName + " added to the list and should match --> " + personList[(pCount-1)].pName);
    document.getElementById("Person_Count").innerHTML = "You have " + pCount + " people on the list:";
}