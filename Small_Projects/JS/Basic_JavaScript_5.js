//========== FUNCTIONS & METHODS ==========

// Assign variables
var A = "\"First Variable\"";
var B = 49;
var C = 49.20;
var D = "$";
var E = Boolean(0);
var F = {
    Name: "Zuli",
    Type: "Cat",
    Breed: "Balinese",
    Age: 0.9,
    Nickname: "Magical Kittenkorn",
    Power: "Supper Jump",
    Rating: 4.8
};

// Display variables and variable types on individual lines
document.writeln("Variable A (" + A + ") is a " + typeof A + "<br>"); // writeln() method doesn't add a carrage return as expected
document.write("Variable B (" + B + ") is a " + typeof B + "<br>");
document.write("Variable C (" + C + ") is a " + typeof C + "<br>");
document.write("Variable D (" + D + ") is a " + typeof D + "<br>");
document.write("Variable E (" + E + ") is a " + typeof E + "<br>");
document.writeln("Variable F (" + F + ") is a " + typeof F);// writeln() method doesn't add a carrage return as expected
document.writeln("Variable G () is a " + typeof G);// writeln() method doesn't add a carrage return as expected

// BOOLEAN LOGIC
document.write("<br>");
document.write("===== BOOLEAN LOGIC =====<br>");
document.write("10 > 2 is ");
document.write(Boolean(10 > 2) + "<br>");
document.write("10 < 2 is " + Boolean(10 < 2) + "<br>");
document.write(10>2);
document.write("<br>");

document.write(10==10);
document.write("<br>");
document.write(10==8);
document.write("<br>");
console.log(10==10);
console.log("10"==10);
console.log(10==8);
console.log("Dog"=="dog");
console.log("Dog"=="Dog");

document.write("===== TRIPLE EQUAL SIGNS =====<br>");
document.write(10===10);
document.write("<br>");
document.write("Dog"==="Dog");
document.write("<br>");
document.write("10"===12);
document.write("<br>");
document.write("10"===10);
document.write("<br>");
document.write("Dog"==="dog");
document.write("<br>");

document.write("===== LOGICAL OPERATOR && =====<br>");
document.write(10==10 && 10>5);
document.write(" true <br>");
document.write(10>10 && 10>5);
document.write(" false <br>");
document.write(10==10 && 10<5);
document.write(" false <br>");
document.write(10>10 && 10<5);
document.write(" false <br>");
document.write("===== LOGICAL OPERATOR || =====<br>");
document.write(10==10 || 10>5);
document.write(" true <br>");
document.write(10>10 || 10>5);
document.write(" true <br>");
document.write(10==10 || 10<5);
document.write(" true <br>");
document.write(10>10 || 10<5);
document.write(" false <br>");

document.write("===== LOGICAL OPERATOR ! =====<br>");
document.write(!(10<8));
document.write(": 10<8 is false so this ! operator should return true <br>");
document.write(!(10>8));
document.write(": 10>8 is true so this ! operator should return false <br>");
document.write(!("dog"=="dog"));
document.write(": \"dog\" == \"dog\" is true so this ! operator should return false <br>");




// Test 3 NOT Numbers
function doTest() {
    document.getElementById("Test1").innerHTML = 0/0;
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
    document.getElementById("Test3").innerHTML = isNaN(007);
    document.getElementById("Test4").innerHTML = isNaN("007");
    document.getElementById("Test5").innerHTML = 1.8E200;
    document.getElementById("Test6").innerHTML = 1.8E310;
    document.getElementById("Test7").innerHTML = -1.8E200;
    document.getElementById("Test8").innerHTML = -1.8E310;
    document.getElementById("Test9").innerHTML = 1.8E-200;
    document.getElementById("Test10").innerHTML = 1.8E-310;
    //the limit of how small a number will display
    document.getElementById("Test11").innerHTML = "the limit of how small a number will display before it considers it zero is " + 1.8E-323;
    document.getElementById("Test12").innerHTML = 1.8E-324; 
}

// CONSOLE LOG EXERCISES
function logRandom() {
    console.log(Math.floor((Math.random() * 1000)+1));
}

function logMath() {
    var A = (Math.random() * 100) + 1;
    var B = (Math.random() * 100) + 1;
    var C = Math.floor(B);
    console.log(A.toString() + " + " + B.toString() + " = " + (A + B));
    console.log("type coersion used to combine 10 with " + C.toString() + " = " + "10" + C);
    console.log(Boolean(A > B));
    console.log(Boolean(A < B));    
}