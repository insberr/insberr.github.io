/* ----- Page on Load ----- */
var local;
local = JSON.parse(localStorage.getItem('siteData'));
var cookies;
function onPageLoad() {
    if (local === null) {
        localStorage.clear();
        local = {
            tab: 'Home',
        }
        cookies = confirm('My website uses cookies, click "ok" to allow. Click "cancel" to deny');
        if (cookies) {
            localStorage.setItem('siteData', JSON.stringify(local));
        }
        pageAncors();
        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
    } else {
        cookies = true;
        pageAncors();
        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
    }
    /*
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementsByTagName('body')[0].style.backgroundColor= 'red'
    }
    */
};



/* ----- Hash Tab linking ----- */
function removeHash() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
};
var Tab;
function pageAncors() {
    if (location.hash) {
        var tabHash = location.hash;
        tabHash = tabHash.toLowerCase()
        tabHash = tabHash.charAt(1).toUpperCase() + tabHash.slice(2);
        tabHash = tabHash.replace('#', '');
        removeHash();
        return document.getElementsByClassName(tabHash)[0].click();
    } else {
        document.getElementsByClassName(local.tab)[0].click();
    }
}

$(window).bind('hashchange', function () {
    pageAncors();
});


/* ----- Settings ----- */
function resetSiteData() {
    var reset = confirm('Are you sure you want to reset the site data?');
    if (!reset) {
        return alert('Data was not reset');
    } else {
        cookies = false;
        localStorage.clear();
        return alert('Data was reset');
    }
}

/* ----- Nav Bar ----- */
function navBar(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
    document.title = (tab);
    local.tab = tab;
    if (cookies) {
        localStorage.setItem("siteData", JSON.stringify(local));
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Pageview',
        'pagePath': tab,
        'pageTitle': tab //some arbitrary name for the page/state
    });
}


/* ----- vue js ----- */
/*
fetch('https://spidergamin.github.io/Style-JS/data.json')
.then(response => response.json())
.then(json => {
    return json;
});
*/

/* About > links */
var links = new Vue({
    el: '#links',
    data: {
        links: []
    },
    created() {
        fetch('https://spidergamin.github.io/Style-JS/data.json')
            .then(response => response.json())
            .then(json => {
                this.links = json.links
            });
    }
})

/* Tasks */
var tasks = new Vue({
    el: '#tasks',
    data: {
        tasks: []
    },
    created() {
        fetch('https://spidergamin.github.io/Style-JS/data.json')
            .then(response => response.json())
            .then(json => {
                this.tasks = json.lists.tasks
            });
    }
})
