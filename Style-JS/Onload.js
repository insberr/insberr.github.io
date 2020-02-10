// Variables

//This is the username variable for a new user
var userName = "Welcome New User!";


// On Load (last)
function onPageLoad() {
    // Page Title
    document.title = "Personal Website | Gitlab";

    // Secret Code
    document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
    
    // Page color
    if (loacalStorage.getItem("SpiderGaminPageColor") === null) {
        document.getElementsByTagName("body")[0].style.background = "#222222";
        document.getElementById("thePageColor").innerHTML = "#222222";
    } else {
        document.getElementsByTagName("body")[0].style.background = loacalStorage.getItem("SpiderGaminPageColor");
        document.getElementById("thePageColor").innerHTML = localStorage.getItem("SpiderGaminPageColor");
    }

    //When the page loads it tests this to see if you are a new user or not
    if (localStorage.getItem("SpiderGaminName") === null) {
        document.getElementById("getname").innerHTML = userName;
    } else {
        document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
        document.getElementById("getnameTwo").innerHTML = localStorage.getItem("SpiderGaminName");
    }
    
    // User Name Text Set (settings page)
    document.getElementById("afterNameSet").innerHTML = localStorage.getItem("SpiderGaminName");
}

onPageLoad();