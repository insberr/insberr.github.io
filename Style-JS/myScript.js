document.getElementById("activeonload").click();
document.title = "Personal Website | Gitlab";
var userName = "New User! Click here to change your username";

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
if (localStorage.getItem("SpiderGaminName") === null) {
  document.getElementById("getname").innerHTML = userName;
} else {
    document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
}

function setname() {
    var setName = prompt("Enter Your Name/Username", "");
    if (setName === null) {
        localStorage.removeItem("SpiderGaminName");
    } else {
        localStorage.setItem("SpiderGaminName", setName);
    }
    if (localStorage.getItem("SpiderGaminName") === null) {
        document.getElementById("getname").innerHTML = userName;
    } else {
    document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
    }
}