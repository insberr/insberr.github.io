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
        local.name = 'Welcome New User';
        document.getElementsByClassName('site-user-name').forEach(element => {
            element.innerHTML = local.name;
        });
    } else {
        local.name = `Welcome Back, ${inputName}!`;
        document.getElementsByClassName('site-user-name').forEach(element => {
            element.innerHTML = local.name;
        });
    }
    document.getElementById("setNameInput").value = "";
    localStorage.setItem('siteData', JSON.stringify(local));
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
        local.color.color = null
        local.color.text = 'the default';
        console.log(local)
        localStorage.setItem('siteData', JSON.stringify(local))
    } else {
        local.color.color = pageColorSet;
        local.color.text = pageColorSet;
        console.log(local)
        localStorage.setItem('siteData', JSON.stringify(local));
    }
    document.getElementsByTagName("body")[0].style.background = local.color.color;
    document.getElementById("thePageColor").innerHTML = local.color.text;
    document.getElementById("changeColorInput").value = "";
}