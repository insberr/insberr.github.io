// Site Name
setNameInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("setNameButton").click();
    }
});

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
changeColorInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("changeColorButton").click();
    }
});

function changeColor() {
    var pageColorSet = document.getElementById("changeColorInput").value;
    if (pageColorSet === "") {
        localStorage.setItem("SpiderGaminPageColor", "#222222");
    } else {
        localStorage.setItem("SpiderGaminPageColor", pageColorSet);
    }
    document.getElementsByTagName("body")[0].style.background = localStorage.getItem("SpiderGaminPageColor");
    document.getElementById("thePageColor").innerHTML = localStorage.getItem("SpiderGaminPageColor");
}