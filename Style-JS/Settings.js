// Page Color set onload
document.getElementsByTagName("body")[0].style.background = loacalStorage.getItem("SpiderGaminPageColor");

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
document.getElementById("thePageColor").innerHTML = localStorage.getItem("SpiderGaminPageColor");

changeColorInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("changeColorButton").click();
    }
});

//if (loacalStorage.getItem("SpiderGaminPageColor") === null) {
//    document.getElementsByTagName("body")[0].style.background = "#222222";
//} else {
//    document.getElementsByTagName("body")[0].style.background = loacalStorage.getItem("SpiderGaminPageColor");
//}

function changeColor() {
    var pageColorSet = document.getElementById("changeColorInput").value;
    if (pageColorSet === null) {
        localStorage.setItem("SpiderGaminPageColor", "#222222");
    } else {
        localStorage.setItem("SpiderGaminPageColor", pageColorSet);
    }
    document.getElementsByTagName("body")[0].style.background = localStorage.getItem("SpiderGaminPageColor");
    document.getElementById("thePageColor").innerHTML = localStorage.getItem("SpiderGaminPageColor");
}

//