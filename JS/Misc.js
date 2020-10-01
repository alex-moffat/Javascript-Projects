//========== DECLARE GLOBAL VARIABLES ==========
//==============================================
var metaList, authorName;

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //========== DOCUMENT PROPERTIES
    getDocProps();
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
    document.getElementById('Doc_Modified').innerHTML = 'This webpage was last modified: ' + document.lastModified;
    document.getElementById('Doc_Modified').style.textAlign = "center";
    //===== META TAGS
    metaList = document.getElementsByTagName("meta");
    console.log(metaList);
    for (let i = 0; i < metaList.length; i++) {
        if (metaList[i].getAttribute('name') == "author") { // writes author of document to Doc_Author id element
            console.log(metaList.author.content);
            authorName = metaList[i].content;
            console.log("Author: " + authorName);
            document.getElementById('Doc_Author').innerHTML = authorName;
            break;
        } else if (metaList[i].getAttribute('name') == "description") { // creates new paragraph after the last paragraph element and writes description of document to that element
            console.log(metaList.description.content);
            var disc = document.createElement("P");
            disc.innerHTML = metaList[i].content;
            var paraList = document.getElementsByTagName("P")
            paraList[paraList.length - 1].appendChild(disc);
        } else {
            console.log("meta attribute \'name\': " + metaList[i].getAttribute('name'));
        }
    }
}