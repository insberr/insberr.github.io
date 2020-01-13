document.getElementById("activeonload").click();

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
    if (i = 'Home') {
        document.title = ("Personal Website | Gitlab");
        //  block of code to be executed if the condition is true
        }
        else {
        //  block of code to be executed if the condition is false
        document.title = (navtwotab);
    }
}