// Site Name
setNameInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("setNameButton").click();
    }
});

//When the settings page loads it will set the text to the name
document.getElementById("afterNameSet").innerHTML = localStorage.getItem("SpiderGaminName");
                
//Settings Page: When the name change button is clicked 
function setName() {
    var inputName = document.getElementById("setNameInput").value;
    if (inputName === "") {
        localStorage.removeItem("SpiderGaminName");
        document.getElementById("afterNameSet").innerHTML = localStorage.getItem("SpiderGaminName");
        document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
        document.getElementById("getnameTwo").innerHTML = localStorage.getItem("SpiderGaminName");
    } else {
        localStorage.setItem("SpiderGaminName", "Welcome Back, " + inputName + "!");
        document.getElementById("afterNameSet").innerHTML = localStorage.getItem("SpiderGaminName");
        document.getElementById("getnameTwo").innerHTML = localStorage.getItem("SpiderGaminName");
        document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
    }
}

// Page Color
var storedPageColor = loacalStorage.getItem("SpiderGaminPageColor");
if (storedPageColor === null) {
    document.getElementsByTagName("body")[0].style.background = "#222222";
} else {
    document.getElementsByTagName("body")[0].style.background = storedPageColor;
}

function changeColor() {
    // Set the variable to the inputed color
    var pageColorSet = document.getElementById("changeColorInput").value;
    // Test if a value was entered
    if (pageColorSet === null) {
        // If no value then it sets it to the default
        localStorage.setItem("SpiderGaminPageColor", "#222222");
    } else if (pageColorSet == " ") {
        localStorage.setItem("SpiderGaminPageColor", "#222222");
    } else {
        // If there is a value then it sets it to the value entered
        localStorage.setItem("SpiderGaminPageColor", pageColorSet);
        document.getElementsByTagName("body")[0].style.background = pageColorSet;
    }
}

//