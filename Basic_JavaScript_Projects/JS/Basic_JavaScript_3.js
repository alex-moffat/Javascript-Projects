//========== VARIABLES ==========
var My_color = "#472F70"
var AM = " - Alex Moffat"

var Family = "Moffat", Dad="Alex", Mom="Lisa", Son="Zan", Daughter="Grace", Dog="Albert";
Family= Family.fontcolor("lightseagreen"), Dad= Dad.fontcolor("#6A5ACD"), Mom= Mom.fontcolor("rgb(100,149,237)"), Son= Son.fontcolor("darkblue"), Daughter= Daughter.fontcolor("#EE82EE"), Dog= Dog.fontcolor("burlywood");


//========== FUNCTIONS & METHODS ==========


//========== EVENT FUNCTIONS ==========

function doMath() {
    // Calling the Javascript Math Random object method to generate a lucky number popup
    var R = Math.floor((Math.random() * 100) + 1);
    window.alert("Your lucky number is " + R);
    
    // assigning variables and doing basic math expressions with operands and operators
    var A = document.getElementById("Math_Add").innerHTML;
    A += 49 + 59 + 69;
    var S = document.getElementById("Math_Sub").innerHTML;
    S += 49 - 69;
    var M = document.getElementById("Math_Mult").innerHTML;
    M += 49 * 69;
    var D = document.getElementById("Math_Div").innerHTML;
    D += 49 / 7;
    var B = (1 + 2) * 10 / 2 - 5;
    var test1 = (1 + 2) * 10 / (2 - 5);
    var test2 = 1 + 2 * 10 / (2 - 5);
    var test3 = 1 + 2 * 10 / 2 - 5;
    var Mod_Test = 25 % 6;
    var N = -9;
    var Inc = 5;
    Inc++;
    var Dec = 6.25;
    Dec--;
    
    // displaying basic math expression results
    document.getElementById("Math_Add").innerHTML = A;
    document.getElementById("Math_Sub").innerHTML = S;
    document.getElementById("Math_Mult").innerHTML = M;
    document.getElementById("Math_Div").innerHTML = D;
    document.getElementById("Math_Big").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + B;
    document.getElementById("Math_Test1").innerHTML = "(1 + 2) * 10 / (2 - 5) = " + test1;
    document.getElementById("Math_Test2").innerHTML = "1 + 2 * 10 / (2 - 5) = " + test2;
    document.getElementById("Math_Test3").innerHTML = "1 + 2 * 10 / 2 - 5 = " + test3;
    document.getElementById("Math_Mod").innerHTML = "When you divide 25 by 6 you get a remainder of " + Mod_Test;
    document.getElementById("Math_Neg").innerHTML = "A negative operator applied to -9 = " + -N;
    document.getElementById("Math_Inc").innerHTML = "When you take 5 and increment 1 you get " + Inc.toString();
    document.getElementById("Math_Dec").innerHTML = "When you take 6.25 and decrement 1 you get " + Dec.toString();
    
    // Calling the Javascript Math() object methods & displayying results
    var P = Math.PI;
    document.getElementById("Math_Pi").innerHTML = document.getElementById("Math_Pi").innerHTML + P;
    document.getElementById("Math_Round").innerHTML = document.getElementById("Math_Round").innerHTML + Math.round(Math.PI);
    document.getElementById("Math_Ceiling").innerHTML = document.getElementById("Math_Ceiling").innerHTML + Math.ceil(P);
    document.getElementById("Math_Floor").innerHTML = document.getElementById("Math_Floor").innerHTML + Math.floor(P);
    document.getElementById("Math_Root").innerHTML = document.getElementById("Math_Root").innerHTML + Math.sqrt(P);
    var MP = Math.pow(5,6);
    document.getElementById("Math_Power").innerHTML = document.getElementById("Math_Power").innerHTML + MP;
    var V = -4.22 
    document.getElementById("Math_Abs").innerHTML = document.getElementById("Math_Abs").innerHTML + V + " is " + Math.abs(V);
    
    document.getElementById("Math_Min").innerHTML = document.getElementById("Math_Min").innerHTML + Math.min(5,9,30,92,2.54,2.34,17,42,56,79,32,21);
    document.getElementById("Math_Max").innerHTML = document.getElementById("Math_Max").innerHTML + Math.max(5,9,30,92,2.54,2.34,17,42,56,79,32,21);    
}

function clickMe() {
    var B = "I love the color purple!"; // assign variable for button text
    var P = "Paragraph changed to tomato!"; // assign variable for paragraph text
   
    // change text color and bold button text
    B = B.fontcolor("#634697"); 
    B = B.bold(); 
    
    // change color and font size for paragraph
    P = P.fontcolor("tomato");
    P = P.fontsize(16); 
    document.getElementById("Purple_Text").innerHTML = B; //return colored text to button
    document.getElementById("Tomato_Text").innerHTML = P; //return colored text to paragraph    
}

function hoverOver() { // change text inside button on mouse over
    var T = "I DARE YOU";
    document.getElementById("Dare_Button").innerHTML = T;
    document.getElementById("Dare_Button").style.fontSize = "2rem";
    document.getElementById("Dare_Button").style.padding = "2%";
    document.getElementById("Dare_Button").style.backgroundColor = "red";
    document.getElementById("Dare_Button").style.color = "white";
}

function hoverAway() { // change text back on button when mouse moves away 
    var T = "Click Me";
    document.getElementById("Dare_Button").innerHTML = T;
    document.getElementById("Dare_Button").style.fontSize = "initial";
    document.getElementById("Dare_Button").style.padding = "initial";
    document.getElementById("Dare_Button").style.backgroundColor = "initial";
    document.getElementById("Dare_Button").style.color = "initial";
}

function boom() { // Add paragraph text and set style properties: center text and fontsize increase
    var A = document.getElementById("Aftermath").innerHTML; // get previous string value from text element
    A += " Now you've done it and you can't take it back."; // concatenate the previous string 
    var T = "BOOM!";
    T = T.fontcolor("red");
    document.getElementById("Boom_Text").innerHTML = T;
    document.getElementById("Boom_Text").style.textAlign = "center";
    document.getElementById("Boom_Text").style.fontSize = "12rem";
    document.getElementById("Aftermath").innerHTML = A; //return amended text paragraph
    document.getElementById("Aftermath").style.textDecoration = "underline overline"; //style amended text
}

function unBoom() { // remove paragraph text and reset style properties
    var T = "";
    document.getElementById("Boom_Text").innerHTML = T;
    document.getElementById("Boom_Text").style.textAlign = "initial";
    document.getElementById("Boom_Text").style.fontSize = "initial";
}

function whatPic() { // identify what the picture is of and what kind of element it is
    E = "The type of element with the ID is: "
    A = "This is a picture of "
    E += document.getElementById("My_Pic1") // get the element type by ID
    A += document.getElementById("My_Pic1").alt // get the alt text from img element
    document.getElementById("Answer1").innerHTML = A; // place name of picture in p element
    document.getElementById("Answer2").innerHTML = E; // place type of element "My_Pic1" is
}