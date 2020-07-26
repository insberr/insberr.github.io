/* ----- Page on Load ----- */
var local, cookies, Tab;
$(document).ready(function () {
    local = JSON.parse(localStorage.getItem('siteData'));
    if (local === null) {
        localStorage.clear();
        local = { tab: 'home', size: 'default', theme: 'default' };
        let notifier = new AWN();
        let onOk = () => { notifier.info('You allowed the use of the local storage feature'); cookies = true; localStorage.setItem('siteData', JSON.stringify(local)) };
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
        );
    } else { cookies = true; }
    try { pageAnchors(); }
    catch (err) {
        notify('alert', 'Tab Error', 'There was a problem selecting that tab');
        removeHash();
        navBar(event, 'home');
    };
    if (local.theme !== 'default') document.getElementById(local.theme).click();
    if (local.size !== 'default') { document.documentElement.style.setProperty("--size", local.size + 'px'); document.getElementById('slider').value = local.size; fontSize.size = local.size; }
    /*
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementsByTagName('body')[0].style.backgroundColor= 'red'
    }
    */

});

/* ----- Hash Tab linking ----- */
function removeHash() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
};

function pageAnchors() {
    if (location.hash) {
        if (location.hash.includes('-')) {
            var hash = location.hash;
            var tab = hash.split('-')[0].replace('#', '');
            var anchor = hash.replace(tab, '');
            document.getElementsByClassName(tab)[0].click();
            setTimeout(() => {
                scrollToAnchor(anchor);
            }, 200);
        } else {
            document.getElementsByClassName(location.hash.toLowerCase().replace('#', ''))[0].click();
        };
    } else {
        navBar(event, local.tab);
    };
    removeHash();
};

function scrollToAnchor(anchor) {
    try {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(anchor).offset().top
        });
    }
    catch (err) {
        notify('alert', 'Scroll Error', 'The scroll part failed, so you have to scroll there yourself');
        removeHash();
    };
};

$(window).bind('hashchange', function () {
    try {
        pageAnchors();
    }
    catch (err) {
        notify('alert', 'Tab Error', `The tab or anchor "${location.hash}" does not exist`);
        removeHash();
    };
});

/* ----- Settings ----- */
function reset(i) {
    switch (i) {
        case 'text':
            local.size = 'default';
            break;
        case 'site':
            return resetSiteData();
        case 'theme':
            local.theme = 'default';
            break;
        case 'device':
            // local.device = 'default';
            break;
    }
    notify('success', 'Reset', `Setting: ${i} was successfully reset`)
    if (cookies) {
        localStorage.setItem("siteData", JSON.stringify(local));
    };
}

function resetSiteData() {
    var reset;
    let notifier = new AWN();
    let onOk = () => { notifier.success('Site data reset'); reset = true; cookies = false; localStorage.clear(); };
    let onCancel = () => { notifier.info('Site data was not reset'); reset = false; };
    notifier.confirm(
        'Are you sure you want to reset this sites data?',
        onOk,
        onCancel,
        {
            labels: {
                confirm: 'Reset site data'
            }
        }
    );
};

/* ----- Nav Bar ----- */
function navBar(evt, tab, mobile) {
    if (mobile) {
        closeNav();
    };
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };
    tablinks = document.getElementsByClassName("tab-");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    };
    document.getElementById(tab).style.display = "block";
    // evt.currentTarget.className += " active";
    var elmt = document.getElementsByClassName(tab);
    elmt[0].className += ' active';
    elmt[1].className += ' active';
    document.title = ('SpiderGaming | ' + tab);
    local.tab = tab;
    if (cookies) {
        localStorage.setItem("siteData", JSON.stringify(local));
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Pageview',
        'pagePath': tab,
        'pageTitle': 'SpiderGaming | ' + tab
    });
}

/* Notification thingy */
function notify(type, info, text) {
    let notifier = new AWN({ labels: { info: info, alert: info } });
    notifier[type](`${text}`);
};


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
});

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
});

var i = 0;
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
    },
});

/* Bio */
var bio = new Vue({
    el: '#bio',
    data: {
        bio: `Hello, I'm SpiderGaming. I am A YouTuber, gamer, web dev, and JS programmer. I spend most of my free time programming, mainly working on this website. Recently I've been working on this websites JavaScript.`
    }
});

var theme = new Vue({
    el: '#theme',
    data: {
        picked: local?.theme || 'default',
    },
    watch: {
        picked: function (val) {
            if (val == 'Dark') {
                local.theme = 'dark';
                document.documentElement.style.setProperty("--bg", "black");
                document.documentElement.style.setProperty("--color", "white");
            } else if (val == 'Light') {
                local.theme = 'light';
                document.documentElement.style.setProperty("--bg", "rgb(206, 206, 206)");
                document.documentElement.style.setProperty("--color", "black");
            }
            if (cookies) {
                localStorage.setItem("siteData", JSON.stringify(local));
            }
        },
    },
    methods: {
        clickMethod() {
            // ...
        }
    }
});

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
});

var fontSize = new Vue({
    el: '#text-size',
    data: {
        size: local?.size || 'default '
    },
    watch: {
        size: function (size) {
            local.size = size;
            document.documentElement.style.setProperty("--size", size + 'px');
            if (cookies) {
                localStorage.setItem("siteData", JSON.stringify(local));
            }
        }
    }
});

function tConvert(time) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}

var coronacation = new Vue({
    el: '#corona-counter',
    data: {
        day: ''
    }
})

var countDownDate = new Date("Mar 17, 2020 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = now - countDownDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    minutes = ('0' + minutes).slice(-2)
    seconds = ('0' + seconds).slice(-2)
    console.debug()
    coronacation.day = `Day ${days} of coronacation. ${tConvert(`${hours}:${minutes}:${seconds}`)}`;
}, 1000);


function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "250px";
};

function closeNav(time) {
    if (time === undefined) time = 300;
    setTimeout(() => {
        document.getElementsByClassName("sidenav")[0].style.width = "0";
    }, time);
};

function resize() {
    closeNav(10);
};
window.onresize = resize;

$(document).mouseup(function (e) {
    var container = $('#sidebar');
    var menu = $('#menu');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            closeNav(0);
        };
    };
});