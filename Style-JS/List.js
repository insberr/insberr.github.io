// --- Current Tab lists Variables
// Current (to 15)
var li1 = "Copying and converting 4K videos to 1080p";
var li2 = "Learning JavaScript and Jqueury";
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

// Completed (to 15)
var c1 = "Moving Files";
var c2 = "Learning HTML and CSS";
var c3 = "This websites style";
var c4 = "A JavaScript secret code encode/decode thing";
var c5 = "Using JavaScript to set the content of the list item and the order";
var c6 = "Use JS for the progress bars";
var c7 = "";
var c8 = "";
var c9 = "";
var c10 = "";
var c11 = "";
var c12 = "";
var c13 = "";
var c14 = "";
var c15 = "";

// --- Later Tab lists
// Personal Later
var p1 = "";
var p2 = "";
var p3 = "";

// Websiste Later 
var w1 = "Switch out as much of the JavaScript for Jqueury";
var w2 = "Add content to the media tab, use JQ and JavaScript for it, to make life a bit easier";
var w3 = "";


// --- Code
function listsContent() {
    
    // --- Current Tab
    
    // Get the Current list items
    var current = document.getElementsByTagName("ul")[0];
    
    // Item 1 upgraded
    if (li1 === null) {
        current.getElementsByTagName("li")[0].style.display = "none";
    } else {
        if (li1 === "") {
            current.getElementsByTagName("li")[0].style.display = "none";
        } else {
		  current.getElementsByTagName("li")[0].innerHTML = li1;
        }
    }
	
	// Item 2
	if (li2 === "") {
        current.getElementsByTagName("li")[1].style.display = "none";
    } else {
        current.getElementsByTagName("li")[1].innerHTML = li2;
	}
	
	// Item 3
	if (li3 === "") {
        current.getElementsByTagName("li")[2].style.display = "none";
    } else {
        current.getElementsByTagName("li")[2].innerHTML = li3;
	}
	
	// Item 4
	if (li4 === "") {
        current.getElementsByTagName("li")[3].style.display = "none";
    } else {
        current.getElementsByTagName("li")[3].innerHTML = li4;
	}
	
	// Item 5
	if (li5 === "") {
        current.getElementsByTagName("li")[4].style.display = "none";
    } else {
        current.getElementsByTagName("li")[4].innerHTML = li5;
	}
	
	// Item 6
	if (li6 === "") {
        current.getElementsByTagName("li")[5].style.display = "none";
    } else {
        current.getElementsByTagName("li")[5].innerHTML = li6;
	}
	
	// Item 7
	if (li7 === "") {
        current.getElementsByTagName("li")[6].style.display = "none";
    } else {
        current.getElementsByTagName("li")[6].innerHTML = li7;
	}
	
	// Item 8
	if (li8 === "") {
        current.getElementsByTagName("li")[7].style.display = "none";
    } else {
        current.getElementsByTagName("li")[7].innerHTML = li8;
	}
	
	// Item 9
	if (li9 === "") {
        current.getElementsByTagName("li")[8].style.display = "none";
    } else {
        current.getElementsByTagName("li")[8].innerHTML = li9;
	}
	
	// Item 10
	if (li10 === "") {
        current.getElementsByTagName("li")[9].style.display = "none";
    } else {
        current.getElementsByTagName("li")[9].innerHTML = li10;
	}
	
	// Item 11
	if (li11 === "") {
        current.getElementsByTagName("li")[10].style.display = "none";
    } else {
        current.getElementsByTagName("li")[10].innerHTML = li11;
	}
	
	// Item 12
	if (li12 === "") {
        current.getElementsByTagName("li")[11].style.display = "none";
    } else {
        current.getElementsByTagName("li")[11].innerHTML = li12;
	}
	
	// Item 13
	if (li13 === "") {
        current.getElementsByTagName("li")[12].style.display = "none";
    } else {
        current.getElementsByTagName("li")[12].innerHTML = li13;
	}
	
	// Item 14
	if (li14 === "") {
        current.getElementsByTagName("li")[13].style.display = "none";
    } else {
        current.getElementsByTagName("li")[13].innerHTML = li14;
	}
	
	// Item 15
	if (li15 === "") {
        current.getElementsByTagName("li")[14].style.display = "none";
    } else {
        current.getElementsByTagName("li")[14].innerHTML = li15;
	}
	
	
	// --- Completed

	var completed = document.getElementsByTagName("ul")[1];
    
    // Item 15
    if (c15 === "") {
        completed.getElementsByTagName("li")[0].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[0].innerHTML = c15;
	}
	
	// Item 14
	if (c14 === "") {
        completed.getElementsByTagName("li")[1].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[1].innerHTML = c14;
	}
	
	// Item 13
	if (c13 === "") {
        completed.getElementsByTagName("li")[2].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[2].innerHTML = c13;
	}
	
	// Item 12
	if (c12 === "") {
        completed.getElementsByTagName("li")[3].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[3].innerHTML = c12;
	}
	
	// Item 11
	if (c11 === "") {
        completed.getElementsByTagName("li")[4].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[4].innerHTML = c11;
	}
	
	// Item 10
	if (c10 === "") {
        completed.getElementsByTagName("li")[5].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[5].innerHTML = c10;
	}
	
	// Item 9
	if (c9 === "") {
        completed.getElementsByTagName("li")[6].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[6].innerHTML = c9;
	}
	
	// Item 8
	if (c8 === "") {
        completed.getElementsByTagName("li")[7].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[7].innerHTML = c8;
	}
	
	// Item 7
	if (c7 === "") {
        completed.getElementsByTagName("li")[8].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[8].innerHTML = c7;
	}
	
	// Item 6
	if (c6 === "") {
        completed.getElementsByTagName("li")[9].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[9].innerHTML = c6;
	}
	//
	if (c5 === "") {
        completed.getElementsByTagName("li")[10].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[10].innerHTML = c5;
	}
	//
	if (c4 === "") {
	    completed.getElementsByTagName("li")[11].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[11].innerHTML = c4;
	}
	//
	if (c3 === "") {
        completed.getElementsByTagName("li")[12].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[12].innerHTML = c3;
	}
	//
	if (c2 === "") {
        completed.getElementsByTagName("li")[13].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[13].innerHTML = c2;
	}
	//
	if (c1 === "") {
        completed.getElementsByTagName("li")[14].style.display = "none";
    } else {
        completed.getElementsByTagName("li")[14].innerHTML = c1;
	}
	
	// --- To Do Later
	
	// - Personal
	
	// - Website
}

listsContent();