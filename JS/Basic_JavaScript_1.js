//========== VARIABLES ==========
var A = "This is a string."
var My_Alert = "This is my string alert with my age 49"
var My_Age = 49
var Quote = "This is my string alert where I say \"I cant believe I am 49\"."
var S = "- William Shakespeare"
var C = "combine 1" + " with 2"
var Family = "Moffat", Dad="Alex", Mom="Lisa", Son="Zan", Daughter="Grace", Dog="Albert";
var My_color = "purple"
Family= Family.fontcolor("lightseagreen"), Dad= Dad.fontcolor("#6A5ACD"), Mom= Mom.fontcolor("rgb(100,149,237)"), Son= Son.fontcolor("darkblue"), Daughter= Daughter.fontcolor("#EE82EE"), Dog= Dog.fontcolor("burlywood");
var E_Value = (10 * 10)


//========== FUNCTIONS & METHODS ==========

window.alert("Hello World!");
document.write("Hello World!");

document.write(A);

window.alert(My_Alert);

document.write(Quote);

document.write(" \"To be, or not to be? "
    + "That is the question.\" "
    + S);

document.write(C);

document.write("The " + Family + " family has a dog named " + Dog + ".");

document.write(Family + ", " + Dad + ", " + Mom + ", " + Son + ", " + Daughter + ", and " + Dog);

document.write(E_Value);

//========== EVENT FUNCTIONS ==========

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
    document.getElementById("Tomato_Text").innerHTML = P; //reutrn colored text to paragraph
}

function hoverOver() { // change text inside button on mouse over
    var T = "I DARE YOU";
    document.getElementById("Dare_Button").innerHTML = T;
}

function hoverAway() { // change text back on button when mouse moves away 
    var T = "Click Me";
    document.getElementById("Dare_Button").innerHTML = T;
}

function boom() { // Add paragraph text and set style properties: center text and fontsize increase
    var T = "BOOM!";
    T = T.fontcolor("red");
    document.getElementById("Boom_Text").innerHTML = T;
    document.getElementById("Boom_Text").style.textAlign = "center";
    document.getElementById("Boom_Text").style.fontSize = "12rem";
}

function unBoom() { // remove paragraph text and reset style properties
    var T = "";
    document.getElementById("Boom_Text").innerHTML = T;
    document.getElementById("Boom_Text").style.textAlign = "initial";
    document.getElementById("Boom_Text").style.fontSize = "initial";
}