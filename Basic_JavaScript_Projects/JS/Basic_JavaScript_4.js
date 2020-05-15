//========== FUNCTIONS & METHODS ==========

function clickMe() {
    // create KVP array
    var A1 = {
        Name: "Albert",
        Type: "Dog",
        Breed: "Norwich Terrier",
        Breed: "Balinese", // intensional duplicate key
        Breed: "Norwich Terrier", // intensional duplicate key: this sets the value back to what it should be becasue it is the last value associated with the same key
        Age: 11.2,
        Nickname: "Balbatron",
        Power: "Persuasion",
        Rating: 5.0
    };
    delete A1.Breed;
    var A2 = {
        Name: "Zuli",
        Type: "Cat",
        Breed: "Balinese",
        Age: 0.9,
        Nickname: "Magical Kittenkorn",
        Power: "Supper Jump",
        Rating: 4.8
    };
    document.getElementById("Dictionary1").innerHTML = A1.Breed; //put first animal into paragraph
    document.getElementById("Dictionary2").innerHTML = A2.Nickname; //put second animal into paragraph    
}
