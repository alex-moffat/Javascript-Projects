//========== DECLARE GLOBAL VARIABLES ==========
//==============================================
var G_1;

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //========== FIND ERROR
    
}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== SWITCH
function enterColor() {
    var strReturn = " is a great color!";
    var strInput = (document.getElementById("Input_Color").value).toLowerCase(); // added toLowerCase() to prevent false negative if capitalized
    switch(strInput) {
        case "red":
            strReturn = "Red" + strReturn;
        break;
        case "yellow":
            strReturn = "Yellow" + strReturn;
        break;
        case "green":
            strReturn = "Green" + strReturn;
        break;
        case "blue":
            strReturn = "Blue" + strReturn;
        break;
        case "pink":
            strReturn = "Pink" + strReturn;
        break;
        case "purple":
            strReturn = "Purple" + strReturn;
        break;
        default:
            strReturn = "Please enter one of the colors in the list above.";
    }
    document.getElementById("Output_Color").innerHTML = strReturn;
}

//========== GET ELEMENTS BY CLASS NAME - changeClass()
function changeClass() {
    var classInput = document.getElementById("Input_Class").value - 1;
    var classList = document.getElementsByClassName("Start_Class");
    let i;
    for (i=0; i<classList.length; i++) {
        if (i == classInput) { // change the selected list item
            classList[i].innerHTML = "You changed me!"
        } else { // change all other list items back to original text
            classList[i].innerHTML = "Starting text that you can change."
        }
    } 
    document.getElementById("Input_Again").innerHTML = "Select another number to see what happens."  
}

//========== CANVAS
function makeDrawing() {
    var c = document.getElementById("Canvas_1");
    
    var ctx = c.getContext("2d");
    ctx.lineWidth = 15;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "#FF6347";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.beginPath();
    ctx.arc(200, 200, 75, -.25*Math.PI, 1.75*Math.PI);
    ctx.lineTo(350, 60);
    ctx.lineTo(350, 110);
    ctx.moveTo(350, 60);
    ctx.lineTo(300, 60);
    ctx.stroke();

    var rtx = c.getContext("2d");
    var my_gradient = rtx.createLinearGradient(0, 160, 0, 0);
    my_gradient.addColorStop(0, "#2a0080"); // dark color
    my_gradient.addColorStop(1, "#ccb3ff"); // light color
    rtx.shadowBlur = 5;
    rtx.shadowColor = "black";
    rtx.fillStyle = my_gradient;
    rtx.fillRect(50, 50, 75, 75);
}