// JavaScript Variables

// On Load (last)
function onPageLoad() {
    document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
    document.getElementsByTagName("body")[0].style.background = loacalStorage.getItem("SpiderGaminPageColor");
}

onPageLoad();