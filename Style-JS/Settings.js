// Site Name

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