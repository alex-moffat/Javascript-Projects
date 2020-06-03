//========== DECLARE GLOBAL VARIABLES & CONSTANTS ==========
//==========================================================
var SlideList, DemoList, ImgList, ThumbList, SlideCount, SlideIndex;


//========== AUTO FIRE - AFTER PAGE LOAD ==========
//=================================================
 
function loadMe() {
    //========== LOG
    console.log("Page Loaded");
    //========== DOCUMENT PROPERTIES
    getDocProps();
    
    
    
    //===== LOAD LISTS - global variables
    loadLists();
    //========== LOAD TEXT
    loadTitleText();
    console.log("Number of slides: " + SlideCount); 
    //========== FADE IN
    fade(1); // 1= fade in 0= fadeout

}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== DOCUMENT TITLE
function getTitle() {
    console.log(document.getElementById('Doc_Title'));
    document.getElementById('Doc_Title').innerHTML = document.title;
}

//========== DOCUMENT PROPERTIES
function getDocProps() {
    getTitle();  
    //===== META TAGS
    metaList = document.getElementsByTagName("meta");
    for (let i = 0; i < metaList.length; i++) {
        if (metaList[i].getAttribute('name') == "author") { // writes author of document to Doc_Author id element
            authorName = metaList[i].content;
            console.log("Author: " + authorName);
            document.getElementById('Doc_Author').innerHTML = authorName;
            break;
        } else if (metaList[i].getAttribute('name') == "description") { // creates new paragraph after the last paragraph element and writes description of document to that element
            console.log("Document Description: " + metaList.description.content);
            var disc = document.createElement("P");
            disc.innerHTML = metaList[i].content;
            disc.style.display = "none";
            var paraList = document.getElementsByTagName("P")
            paraList[paraList.length - 1].appendChild(disc);
        } else {
            console.log("meta attribute \'name\': " + metaList[i].getAttribute('name'));
        }
    }
    //===== FILL CURRENT
    let today = new Date();
    document.getElementById('Current_Year').innerHTML = today.getFullYear();
}

//===== LOAD LISTS SlideList, Demolist, ImgList | set slideShow to first slide | console log
function loadLists() {
    SlideList = document.getElementsByClassName("Slide"); // finds all slides by class and puts them in a list
    ImgList = document.getElementsByClassName('Img_Full'); // finds all full size photos by class and puts them in a list
    DemoList = document.getElementsByClassName("Demo"); // finds all demo photos by class and puts them in a list
    ThumbList = document.getElementsByClassName("Thumb_Text");
    /* console.log(ImgList); */
    SlideCount = SlideList.length;
    SlideIndex = 1;
}

//========== LOAD TEXT - pull alt text from images and put into captions over photos
function loadTitleText() {
    var textArray = document.getElementsByClassName('Img_Text');
    for (let i=0; i < ImgList.length; i++) {
        textArray[i].innerHTML = ImgList[i].getAttribute('data-title');
        console.log(ImgList[i].getAttribute('data-title'));
        /* ThumbList[i].innerHTML = ImgList[i].getAttribute('data-title'); Loads title to thumbnails in portfolio */
    }
}

//========== OPEN LIGHTBOX
function openLightBox(n) {
    document.getElementById("Light_Box").style.display = "block";
    document.getElementById("body").style.overflow = "hidden"; 
    if (n != undefined) {
        SlideIndex = n;
    } else {
        SlideIndex = 1;
    }    
    slideShow();
}

//========== CLOSE LIGHTBOX
function closeLightBox() {
    document.getElementById("Light_Box").style.display = "none";
    document.getElementById("body").style.overflow = "auto"; 
    //===== PAUSE VIDEOS when slideshow closed
    for (var i = 0; i < ImgList.length; i++) {
        if (ImgList[i].nodeName == 'VIDEO') {
            ImgList[i].pause();            
        } 
    }
}

//========== CHANGE SLIDE - increment/decrement slide number
function changeSlide(n) {
    SlideIndex += n;
    //===== Upper or lower limit exceeded - pass through - set global variable SlideIndex
     if (SlideIndex > SlideCount) { 
        SlideIndex = 1;
    } else if (SlideIndex < 1) {
        SlideIndex = SlideCount;
    }     
    slideShow();
}

//========== SLIDESHOW - Display change of slides and demo
function slideShow(n) {
    if (n != undefined) {
        SlideIndex = n;
    }
    var captionText = '';
    var captionElement = document.getElementById('Caption');
    console.log("slideShow() --> SlideIndex = " + SlideIndex);
   //===== Conditional loop - repeat through all slides  
    for (var i = 0; i < SlideCount; i++) {
        //===== ADD/REMOVE CLASS - style active/inactive slides
        if (i == SlideIndex-1) {
            SlideList[i].style.display = "block";
            DemoList[i].classList.add("active");
            //===== SET CAPTION
            captionText = ImgList[i].getAttribute("data-caption");
            //===== PLAY VIDEO when slide active
            if (ImgList[i].nodeName == 'VIDEO') {
                ImgList[i].play();
            }
        } else {
            SlideList[i].style.display = "none";    
            DemoList[i].classList.remove("active"); 
            //===== PAUSE VIDEO when slide inactive
            if (ImgList[i].nodeName == 'VIDEO') {
                ImgList[i].pause();
            }           
        }    
    } 
    document.getElementById('Caption').innerHTML = captionText;    
} 

//========== FADE
function fade(n) {
    let fList = document.getElementsByClassName('fade');
    for (i = 0; i < fList.length; i++) {
        if (n=1) {
            fList[i].classList.add('fade-in');
        } else {
            fList[i].classList.remove('fade-in');
        }        
    }
}

//========== FORM VALIDATION
function validateForm() {
    var nList = ['name','email','message']; // preload all the form input 'name' values to be checked
    var a = "Please make sure your form is complete.";
    console.log("nList.length = " + nList.length);
    for (i=0; i<nList.length; i++) {
        console.log(document.forms["contactForm"][nList[i]].value);
        if (document.forms["contactForm"][nList[i]].value == '') {
            document.forms["contactForm"][nList[i]].style.border = '1px solid rgb(250,128,114)';
            alert(a);
            return false;
        }
    }    
}
