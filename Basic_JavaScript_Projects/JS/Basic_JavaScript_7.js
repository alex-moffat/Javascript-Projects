//========== DECLARE GLOBAL VARIABLES ==========
//=======================================
var Global_1 = "This is a global variable string value." 


//========== FUNCTIONS & METHODS ==========
//=========================================

//========== Test127 - Nested functions
function test127() {
    document.getElementById("Counting").innerHTML = Count();
    document.getElementById("Global").innerHTML = Global_1;
    function Count() {
        var Starting_point = 9; // going to use this local variable in the testVariables() function below
        var Starting_string = "9";
        function Plus_one() {
            Starting_point += 1;
            Starting_string += 1;
        }
        Plus_one();
        console.log("Starting_point = " + Starting_point);
        console.log("Starting_point = " + Starting_string);
        document.getElementById("Concatenate").innerHTML = document.getElementById("Concatenate").innerHTML + Starting_string;
        return "When an integer variable is combined with an integer: 9 += 1 = " + Starting_point;        
    }
}

//========== TEST VARIABLES
function testVariables() {
    var Local_1 = "This is a local variable string value inside a function"
    document.getElementById("Global_Var").innerHTML = Global_1;
    document.getElementById("Local_Var1").innerHTML = Local_1;
    console.log("Starting_point = " + Starting_point); // checking error
    document.getElementById("Local_Var2").innerHTML = Starting_point;
}

//========== IF THEN - Time
function getTime() {
    var T = new Date().getHours();
    var S;
    if (T >= 18) { // The statement to be evaluated is in parentheses 
        S = "How are you today";
    } 
    document.getElementById("Say_What").innerHTML = S;    
}

//========== IF THEN - Key Check
function checkKey() {
    var K = document.getElementById("Check_This").value;
    var S = "Try again";
    console.log("The Key Pressed = " + K); // checking error
    document.getElementById("Check_This").value = "";
    document.getElementById("Check_This").placeholder = "";
    document.getElementById("Check_This").style.backgroundColor = "initial";
    if (K == "g") { // The statement to be evaluated is in parentheses 
        S = "YOU GOT IT!";
        document.getElementById("Check_This").value = K;
        document.getElementById("Check_This").style.backgroundColor = "#98FB98";
    }
    document.getElementById("Key_Check").innerHTML = S;        
}

//========== IF-THEN-ELSE - Age Check
function checkAge() {
    var A = document.getElementById("Check_Age").value;
    var S = "You are";
    if (A >= 16) { // Checking driving age 
        S += ":<br>- Old enough to drive <br>";
        if (A >= 18) { // nested - checking voting age 
            S += "- Old enough to vote <br>";
            if (A >= 21) { // nested - checking drinking age 
                S += "- Old enough to drink alcohol <br>";
                if (A >= 67) { // nested - checking retirement age 
                    S += "- Old enough to collect Social Security <br>";    
                } else {
                    S += "- Not old enough to collect Social Security <br>";
                }    
            }    
        }
    } else {
        S += " too young. Grow up to do some fun stuff."
    }
    document.getElementById("Age_Statement").innerHTML = S;        
}

//========== IF THEN ELSE - Time
function getTimeOfDay() {
    var T = new Date().getHours();
    // T = 12; test with this and you will evaluation statements don't work
    var S;
    // if (T < 12 == T > 0) { The statement is evaluating all conditions exist and they don't for the 12 hour 
    if (T < 12 && T > 0) { // Fixed statement to contain && instead of ==
        S = "It is morning";
    } else if (T >= 12 && T < 18) { // Fixed statement to contain && instead of ==
        S = "It is afternoon";
    } else {
        S = "It is evening";
    }
    document.getElementById("Time_Of_Day").innerHTML = S;    
}        
        