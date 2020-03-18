//This tests if the local storage item "Tab" is null
//If it is null it will click the default tab (Home)
//If it has a value it tests if it is the "Settings" tab
//If it is the settings tab it will set it to the default tab (Home)

if(localStorage.getItem("Tab") === null) {
	document.getElementById("activeonload").click();
} else {
	if(localStorage.getItem("Tab") == "Settings") {
		document.getElementById("activeonload").click();
	} else {
		document.getElementsByClassName(localStorage.getItem("Tab"))[0].click();
		
		/*
		// This is if i want it to not show the tab you are on
		
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
    		localStorage.setItem("Tab", navtwotab)
		}
		navtwotab(event, localStorage.getItem("Tab"));
		*/
	}
}

//localStorage.removeItem("Tab")
//document.getElementById("activeonload").click();
	


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
    localStorage.setItem("Tab", navtwotab)
}