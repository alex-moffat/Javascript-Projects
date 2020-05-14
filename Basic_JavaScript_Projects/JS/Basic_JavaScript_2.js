//========== VARIABLES ==========
var My_color = "#472F70"
var My_Alert = "Welcome to my website."
var AM = " - Alex Moffat"
My_Alert += AM

var Family = "Moffat", Dad="Alex", Mom="Lisa", Son="Zan", Daughter="Grace", Dog="Albert";
Family= Family.fontcolor("lightseagreen"), Dad= Dad.fontcolor("#6A5ACD"), Mom= Mom.fontcolor("rgb(100,149,237)"), Son= Son.fontcolor("darkblue"), Daughter= Daughter.fontcolor("#EE82EE"), Dog= Dog.fontcolor("burlywood");



//========== FUNCTIONS & METHODS ==========

window.alert(My_Alert);

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