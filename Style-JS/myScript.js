//This selects the nav bar button with the "activeonload" id to be clicked
document.getElementById("activeonload").click();

//When the page is loaded it will set the title to this
document.title = "Personal Website | Gitlab";

//This is the username variable for a new user
var userName = "Welcome New User!";

//The navigation bar Script
function navtwotab(evt, navtwotab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(navtwotab).style.display = "block";
    evt.currentTarget.className += " active";
    document.title = (navtwotab);
}

//When the page loads it tests this to see if you are a new user or not
if (localStorage.getItem("SpiderGaminName") === null) {
  document.getElementById("getname").innerHTML = userName;
} else {
    document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
}

//When the settings page loads it will set the text to the name
document.getElementById("namekkk").innerHTML = localStorage.getItem("SpiderGaminName");

//Settings Page: When the name change button is clicked 
function buttonName() {
    var nametwo = document.getElementById("input").value;
    if (nametwo === "") {
        localStorage.removeItem("SpiderGaminName");
    } else {
        localStorage.setItem("SpiderGaminName", "Welcome Back, " + nametwo + "!");
    }
    document.getElementById("namekkk").innerHTML = localStorage.getItem("SpiderGaminName");
}