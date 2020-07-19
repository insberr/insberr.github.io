/* ----- Page on Load ----- */
var local, cookies, Tab;
local = JSON.parse(localStorage.getItem('siteData'));
function onPageLoad() {
    if (local === null) {
        localStorage.clear();
        local = { tab: 'home' }
        let notifier = new AWN();
        let onOk = () => { notifier.info('You allowed the use of the local storage feature'); cookies = true };
        let onCancel = () => { notifier.info('You denied the use of the local storage feature. For more info click <a href="#site">here</a>'); cookies = false };
        notifier.confirm(
            'My website uses the local storage feature. Click "ok" to allow this site to store data or click "cancel" to deny.',
            onOk,
            onCancel,
            {
                labels: {
                    confirm: 'Cookies'
                }
            }
        )
        if (cookies) localStorage.setItem('siteData', JSON.stringify(local));
    } else { cookies = true }
    try { pageAnchors() }
    catch (err) {
        notify('alert', 'Tab Error', 'There was a problem selecting that tab');
        removeHash();
        navBar(event, 'home')
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

function pageAnchors() {
    if (location.hash) {
        if (location.hash.includes('-')) {
            var hash = location.hash
            var tab = hash.split('-')[0].replace('#', '');
            var anchor = hash.replace(tab, '');
            document.getElementsByClassName(tab)[0].click();
            scrollToAnchor(anchor)
        } else {
            document.getElementsByClassName(location.hash.toLowerCase().replace('#', ''))[0].click();
        }
    } else {
        document.getElementsByClassName(local.tab)[0].click();
    }
    removeHash();
}

function scrollToAnchor(anchor) {
    try {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(anchor).offset().top
        });
    }
    catch (err) {
        notify('alert', 'Scroll Error', 'The scroll part failed, so you have to scroll there yourself');
        removeHash();
    }
}

$(window).bind('hashchange', function () {
    try {
        pageAnchors();
    }
    catch (err) {
        notify('alert', 'Tab Error', `The tab or anchor "${location.hash}" does not exist`);
        removeHash();
    }
});


/* ----- Settings ----- */
function resetSiteData() {
    var reset;
    let notifier = new AWN();
    let onOk = () => { notifier.success('Site data reset'); reset = true; cookies = false; localStorage.clear(); };
    let onCancel = () => { notifier.info('Site data was not reset'); reset = false };
    notifier.confirm(
        'Are you sure you want to reset this sites data?',
        onOk,
        onCancel,
        {
            labels: {
                confirm: 'Reset site data'
            }
        }
    )
}

/* ----- Nav Bar ----- */
function navBar(evt, tab, other) {
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
        'pageTitle': tab
    });
}

/* Notification thingy */
function notify(type, info, text, callback) {
    let notifier = new AWN({ labels: { info: info, alert: info } });
    notifier[type](`${text}`)
    /*
    let onOk = () => { notifier.info('You pressed OK') };
    let onCancel = () => { notifier.info('You pressed Cancel') };
    notifier.confirm(
        'Are you sure?',
        onOk,
        onCancel,
        {
            labels: {
                confirm: 'Dangerous action'
            }
        }
    )
    */

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
    el: '#tasks-list',
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

var updates = new Vue({
    el: '#updates',
    data: {
        updates: []
    },
    created() {
        fetch('https://spidergamin.github.io/Style-JS/data.json')
        .then(response => response.json())
        .then(json => {
            this.updates = json.lists.updates
        });
    }
})

/* Bio */
var bio = new Vue({
    el: '#bio',
    data: {
        bio: 'Test bio from vuejs'
    }
})

var theme = new Vue({
    el: '#theme',
    data: {
        picked: 'Default'
    },
    watch: {
        picked: function (val) {

            if (val == 'Dark') {
                document.documentElement.style.setProperty("--bg", "black");
                document.documentElement.style.setProperty("--color", "white");
            } else if (val == 'Light') {
                document.documentElement.style.setProperty("--bg", "rgb(206, 206, 206)");
                document.documentElement.style.setProperty("--color", "black");
            }

        },
    }
})

var secretcode = new Vue({
    el: '#secretcode',
    data: {
        input: '',
        output: 'The translated secret code will display here'
    },
    watch: {
        input: function (val) {
            if (this.input === '') {
                this.output = 'The translated secret code will display here';
            } else {
                secretCode(val, (data) => this.output = data);
            }
        }
    }
})