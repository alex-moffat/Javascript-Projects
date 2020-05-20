//========== DECLARE GLOBAL VARIABLES ==========
//==============================================
var SlideList, DotList, SlideCount, SlideIndex;

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //===== LOAD PHOTO CAPTIONS
    document.getElementById("Text_1").innerHTML = document.getElementById("Img_1").alt;
    document.getElementById("Text_2").innerHTML = document.getElementById("Img_2").alt;
    document.getElementById("Text_3").innerHTML = document.getElementById("Img_3").alt;
    document.getElementById("Text_4").innerHTML = document.getElementById("Img_4").alt;
    
    //===== LOAD slideList, dotlist | START slideShow() at first slide | console log
    SlideList = document.getElementsByClassName("slide"); // finds all slides by class and puts them in a list
    DotList = document.getElementsByClassName("dot"); // finds all dots by class and puts them in a list
    SlideCount = SlideList.length;
    console.log("Number of slides: " + SlideCount);
    setSlide(1); // set to first slide then calls --> slideShow()
}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== ALARM : Code with no bugs
function cdown() {
    var Sec = document.getElementById("Seconds").value;
    T = document.getElementById("Timer");
    tick(); // placed this call before the loop
    function tick() {
        console.log("Start tick() now with Sec = " + Sec); // added to show when 
        T.innerHTML = Sec;
        Sec --; // used decrement to shorten code was: "seconds = seconds - 1"
        // setTimeout(tick, 1000); move this line of code to the added else statement
        if(Sec == -1) {
            alert("Time's Up!");
        } else { // added this else statement
            setTimeout(tick, 1000); // moved from outside conditional to inside  
        }
    }
    // tick(); BUG remove this line of code that kept the timer going after the alert
}

//========== ALARM : This original code has a bug that keeps the counter going down after the alert
function countdown() {
    var Sec = document.getElementById("Seconds").value;
    function tick() {
        Timer.innerHTML = Sec;
        Sec = Sec - 1; 
        setTimeout(tick, 1000);
        if(Sec == -1) {
            alert("Time's Up!");
        }
    }
    tick();
}

//========== SHOWSLIDE - Display change of slides and dots
function slideShow() {
    var i;
    console.log("slideShow() --> SlideIndex = " + SlideIndex);
    //===== Conditional loop - repeat through all slides  
    for (i = 0; i < SlideCount; i++) {
        //===== BRANCH - style active and inactive slides | rename class of dots
        if (i == SlideIndex-1) {
            SlideList[i].className = SlideList[i].className.replace(" current", ""); // USED WHEN 1 SLIDE in SLIDESHOW - make sure to remove active state before adding again
            SlideList[i].className += " current";
            DotList[i].className = DotList[i].className.replace(" active", ""); // USED WHEN 1 SLIDE in SLIDESHOW - make sure to remove active state before adding again
            DotList[i].className += " active";
            console.log(SlideList[i].className);
            console.log(DotList[i].className);
        } else {
            SlideList[i].className = SlideList[i].className.replace(" current", "");
            DotList[i].className = DotList[i].className.replace(" active", "");
        }    
    }    
} 

//========== CHANGESLIDE - increment/decrement slide number
function changeSlide(n) {
    SlideIndex += n;
    //===== Upper or lower limit exceeded - pass through - set global variable SlideIndex
     if (SlideIndex > SlideCount) { 
        SlideIndex = 1
    } else if (SlideIndex < 1) {
        SlideIndex = SlideCount
    }     
    slideShow();
}

//========== SETSLIDE - set slide number
function setSlide(n) {
    SlideIndex = n;
    slideShow();
}