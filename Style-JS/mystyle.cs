/* ================ JavaScript Tabs ============ */

/* Style the tab */
.tab {
    overflow: hidden;
    background-color: #222222;
    padding: 0;
    width: auto;
    border-radius: 15px;
    position: fixed;
    top: 0;
    margin-left: 280px;
    z-index: 10;
}
        
/* Style the buttons inside the tab */
.tab button {
    background-color: #505050;
    float: left;
    border: none;
    outline: 0;
    cursor: pointer;
    transition: .5s;
    font-size: 17px;
    padding: 14px 16px;
    color: white;
    margin: auto;
}
        
/* Change background color of buttons on hover */
.tab button:hover {
    background-color: red;
    color: white;
}
        
/* Create an active/current tablink class */
.tab button.active {
    background-color: red;
    color: white;
}
        
/* Style the tab content */
.tabcontent {
    display: none;
    -webkit-animation: fadeEffect 1.5s;
    animation: fadeEffect 1.5s;
}
        
/* Fade in tabs */
@-webkit-keyframes fadeEffect {
    from {opacity: 0;}
    to {opacity: 1;}
}
        
@keyframes fadeEffect {
    from {opacity: 0;}
    to {opacity: 1;}
}


/* ============ Screen Content ============ */

/* The default styles are for ipad */

/* ==== Phone ==== */
@media screen and (max-width: 700px) {
    .tab {
        margin-left: 8px!important;
    }
    
    .tab button {
        padding: 13px 15px!important;
        font-size: 13px!important;
    }
    
    .page-content {
        margin-top: 60px!important;
        margin-left: 1px!important;
        margin-right: 1px!important;
        margin-bottom: 50px!important;
    }
    
    .site-user-name {
        display: none;
    }
    .site-user-name-bottom {
        display: block!important;
    }
    
    .settings-svg {
        color: lightblue!important;
    }
    
    .screen-ipad {
        display: none!important;
    }
    .screen-iphone {
        display: inline!important;
    }
}

.page-content {
    margin: 70px 0 20px 20px;
}

/* ============ Body ============= */

body {
    font-family: Arial, sans-serif;
    color: white;
    background: #222222;
}

/* ============ Other Classes ============ */
.warning {
    background-color: red;
    border-radius: 15px;
    text-align: center;
    padding: 5px 15px;
    display: none;
}

.home-progress-bar::before {
    content: "43%";
}

.settings-svg {
    color: red;
}

.site-user-name {
    position: fixed;
    top: 5px;
    background-color: rgb(34, 34, 34, 0.5);
}
.site-user-name-bottom {
    display: none;
    position: fixed;
    bottom: 6px;
    background-color: rgb(34, 34, 34, 0.5);
    margin-left: 30px;
}

.button-tran-red {
    color: red;
    font-size: 15px;
    background-color: none;
    border-radius: 8px;
    border-color: red;
}
.button-tran-red:hover {
    background-color: red;
    color: white;
    border-color: black;
}

/* === Custom HTML tags === */

hr1-solidred {
    /* hr */
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    /* style */
    border: 1px solid red;
    border-radius: 2px;
}

hr2-solidred {
    /* hr */
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    /* style */
    border: 2px solid red;
    border-radius: 2px;
}

done {
    text-decoration: line-through;
}

done::after {
    content: "Done!";
}

/* ===  === */
h3.red-or {
    color: #fc5203;
}

.screen-ipad {
    display: inline;
}
.screen-iphone {
    display: none;
}

/* ============ Links ============ */

a:link {
    color: gray;
}

a:visited {
    color: gray;
}

a:hover {
    color: lightgray;
}

a:active {
    color: darkgray;
}

/* Nav bar ends 
.item-one {
    border-radius: 15px 0 0 15px;
}
.item-end {
    border-radius: 0 15px 15px 0;
}
*/
/* ============ Pogress bar ============ */

.progress-one {
    color: #000;
    background-color: #f1f1f1;
    border-radius: 16px;
}

.progress-two {
    padding: 5px 10px;
    font-size: 8px;
    border-radius: 16px;
    display: table;
    clear: both;
    color: #fff;
    background-color: #2196F3;
}

.w3-container {
    padding: 5px 15px;
}

.w3-container:after,.w3-container:before {
    content:"";
}

.w3-round-xlarge {
    border-radius:16px;
}

.w3-blue,.w3-hover-blue:hover {
	color: #fff!important;
	background-color: #2196F3!important;
}

.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover {
    color:#000!important;
    background-color:#f1f1f1!important;
}

.w3-round,.w3-round-medium {
    border-radius:16px;
}