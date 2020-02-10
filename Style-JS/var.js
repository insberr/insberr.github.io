// JavaScript Variables

// On Load (last)
function onPageLoad() {
    // Secret Code
    document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
    
    // Page color
    document.getElementsByTagName("body")[0].style.background = loacalStorage.getItem("SpiderGaminPageColor");
    
    //When the page loads it tests this to see if you are a new user or not
    if (localStorage.getItem("SpiderGaminName") === null) {
        document.getElementById("getname").innerHTML = userName;
    } else {
        document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
        document.getElementById("getnameTwo").innerHTML = localStorage.getItem("SpiderGaminName");
    }
}

onPageLoad();