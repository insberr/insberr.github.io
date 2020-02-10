// --- Current Tab lists Variables
// Current
var li1 = "Adding javascript to make these lists more manageable";
var li2 = "Idr";
var li3 = "";
var li4 = "";
var li5 = "";
var li6 = "";
var li7 = "";
var li8 = "";
var li9 = "";
var li10 = "";
var li11 = "";
var li12 = "";
var li13 = "";
var li14 = "";
var li15 = "";
// Completed

//Later Tab lists
// Personal Later

// Websiste Later 

// --- Code
// Li 1
function listsContent() {
    var current = document.getElementsByTagName("ul")[0];
    if (li1 === "") {
        current.getElementsByTagName("li")[0].style.display = "none";
    } else {
		  current.getElementsByTagName("li")[0].innerHTML = li1;
	}
	//=======2
	if (li2 === "") {
        current.getElementsByTagName("li")[1].style.display = "none";
    } else {
        current.getElementsByTagName("li")[1].innerHTML = li2;
	}
	if (li3 === "") {
        current.getElementsByTagName("li")[2].style.display = "none";
    } else {
        current.getElementsByTagName("li")[2].innerHTML = li3;
	}
	//----------- 4
	if (li4 === "") {
        current.getElementsByTagName("li")[3].style.display = "none";
    } else {
        current.getElementsByTagName("li")[3].innerHTML = li4;
	}
	//=====5
	if (li5 === "") {
        current.getElementsByTagName("li")[4].style.display = "none";
    } else {
        current.getElementsByTagName("li")[4].innerHTML = li5;
	}
	
	if (li6 === "") {
        current.getElementsByTagName("li")[5].style.display = "none";
    } else {
        current.getElementsByTagName("li")[5].innerHTML = li6;
	}
	
	if (li7 === "") {
        current.getElementsByTagName("li")[6].style.display = "none";
    } else {
        current.getElementsByTagName("li")[6].innerHTML = li7;
	}
	
	if (li8 === "") {
        current.getElementsByTagName("li")[7].style.display = "none";
    } else {
        current.getElementsByTagName("li")[7].innerHTML = li8;
	}
	
	if (li9 === "") {
        current.getElementsByTagName("li")[8].style.display = "none";
    } else {
        current.getElementsByTagName("li")[8].innerHTML = li9;
	}
	
	if (li10 === "") {
        current.getElementsByTagName("li")[9].style.display = "none";
    } else {
        current.getElementsByTagName("li")[9].innerHTML = li10;
	}
	
	if (li11 === "") {
        current.getElementsByTagName("li")[10].style.display = "none";
    } else {
        current.getElementsByTagName("li")[10].innerHTML = li11;
	}
	
	if (li12 === "") {
        current.getElementsByTagName("li")[11].style.display = "none";
    } else {
        current.getElementsByTagName("li")[11].innerHTML = li12;
	}
	
	if (li13 === "") {
        current.getElementsByTagName("li")[12].style.display = "none";
    } else {
        current.getElementsByTagName("li")[12].innerHTML = li13;
	}
	
	if (li14 === "") {
        current.getElementsByTagName("li")[13].style.display = "none";
    } else {
        current.getElementsByTagName("li")[13].innerHTML = li14;
	}
	
	if (li15 === "") {
        current.getElementsByTagName("li")[14].style.display = "none";
    } else {
        current.getElementsByTagName("li")[14].innerHTML = li15;
	}
}

listsContent()