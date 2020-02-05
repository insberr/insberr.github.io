// --- Current Tab lists Variables
// Current
var li1 = "Test";
var li2 = "";
var li3 = "";
var li4 = "";
var li5 = "";
// Completed

//Later Tab lists
// Personal Later

// Websiste Later 

// --- Code
// Li 1
function listsContent() {
    var current = document.getElementsByTagName("ul")[0];
    if (li1 === "") {
        current.getElementsByTagName("li")[0].style.display = "none";
    } else {
        current.getElementsByTagName("li")[0].style.display = "inline";
        current.getElementsByTagName("li")[0].innerHTML = li1;
}
}