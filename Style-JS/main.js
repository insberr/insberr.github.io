/* ----- Page on Load ----- */

var webPosts = 'https://website-posts--spidergamin.repl.co';
var local = {}, cookies = false;

if (localStorage.getItem('siteData')) {
    local = JSON.parse(localStorage.getItem('siteData'));
    // Ask a user to
    if (local.new === undefined || local.new === true) {
        notify('info', 'Welcome Back', 'Welcome back! It is recommended that you <a href="#settings-reset">reset the site settings</a>')
    }
} else {
    localStorage.clear();
    local = { tab: 'home', size: '20', theme: 'default', username: 'Anonymous', new: true };
};

async function save() {
    if (posts !== undefined) posts.username = local.username;
    if (userName !== undefined) userName.username = local.username;
    if (fontSize !== undefined) fontSize.size = local.size;
    if (cookies) {
        localStorage.setItem("siteData", JSON.stringify(local));
    };
};

$(document).ready(function () {
    if (local.new) {
        local.new = false;
        let notifier = new AWN();
        let onOk = () => { notifier.info('You allowed the use of localStorage, more info <a href="#site">here</a>'); cookies = true; localStorage.setItem('siteData', JSON.stringify(local)) };
        let onCancel = () => { notifier.info('You denied the use of the localStorage. For more info click <a href="#site">here</a>'); cookies = false };
        notifier.confirm(
            'My website uses the local storage feature. Click "ok" to allow this site to store data or click "cancel" to deny. This is used to save the sites settings.',
            onOk,
            onCancel,
            {
                labels: {
                    confirm: 'LocalStorage'
                }
            }
        );
    } else { cookies = true; };
    try { pageAnchors(); }
    catch (err) {
        notify('alert', 'Tab Error', 'There was a problem selecting that tab');
        removeHash();
        navBar(event, 'home');
    };
    // if (local.size !== 'default') { document.documentElement.style.setProperty("--size", local.size + 'px'); document.getElementById('slider').value = local.size; };
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

function rmSear() {
    window.history.replaceState({}, document.title, "/" + " ");
};

function pageAnchors() {
    if (window.location.search) {
        let loc = new URLSearchParams(window.location.search);
        let l = loc.get('l');
        if (l.includes('-')) {
            var tab = l.split('-')[0];
            navBar(event, tab);
            var anchor = l.split(tab)[1];
            if (tab === 'posts') {
                getPost(anchor.replace('-', ''))
                rmSear();
            } else {
                rmSear();
                setTimeout(() => {
                    scrollToAnchor('#' + anchor);
                }, 500);
            };
        } else {
            var tab = l;
            navBar(event, tab);
            rmSear();
        };
    } else {
        navBar(event, local.tab);
        rmSear();
    };

};

function pageAnchorsT() {
    if (location.hash) {
        if (location.hash.includes('-')) {
            if (location.hash.includes('posts')) {
                var hash = location.hash;
                var tab = hash.split('-')[0].replace('#', '');
                document.getElementsByClassName(tab)[0].click();
                var postId = hash.replace(tab, '');
                getPost(postId.replace('-', '').replace('#', ''))
            } else {
                var hash = location.hash;
                var tab = hash.split('-')[0].replace('#', '');
                var anchor = hash.replace(tab, '');
                document.getElementsByClassName(tab)[0].click();
                setTimeout(() => {
                    scrollToAnchor(anchor);
                }, 200);
            };
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
        pageAnchorsT();
    }
    catch (err) {
        notify('alert', 'Tab Error', `The tab or anchor "${location.hash}" does not exist`);
        removeHash();
    };
});

/* ----- Settings ----- */
function reset(i) {
    switch (i) {
        case 'username':
            local.username = 'Anonymous';
            break;
        case 'text':
            local.size = '20';
            break;
        case 'site':
            return resetSiteData();
        case 'theme':
            local.theme = 'default';
            theme.toggle(local.theme);
            break;
        case 'device':
            // local.device = 'default';
            break;
    }
    save();
    notify('success', 'Reset', `${i.toUpperCase()} was successfully reset`);
};

function resetSiteData() {
    var reset;
    let notifier = new AWN();
    let onOk = () => { notify("success", 'Site data reset', 'Refreshing in 1 second'); reset = true; cookies = false; localStorage.clear(); setTimeout(() => { location.reload() }, 1000) };
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
    if (mobile) { closeNav() };
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
    save();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Pageview',
        'pagePath': tab,
        'pageTitle': 'SpiderGaming | ' + tab
    });
};

/* Notification thingy */
function notify(type, info, text) {
    let notifier = new AWN({ labels: { info: info, alert: info } });
    notifier[type](`${text}`);
};


/* ----- vue js ----- */
var bio = new Vue({
    el: '#bio',
    data: {
        bio: `Hello, I'm SpiderGaming. I am A YouTuber, gamer, web dev, and JS programmer. I spend most of my free time programming, mainly working on this website. Recently I've been working on this websites JavaScript.`
    }
});

var userName = new Vue({
    el: '#username',
    data: {
        username: 'Loading'
    },
    created() {
        this.username = ((local?.username) || 'Anonymous');
    },
    watch: {
        username: function () {
            local.username = this.username;
            save();
        }
    }
});

var theme = new Vue({
    el: '#theme',
    data: {
        picked: 'default',
        themeDiv: '<i class="material-icons">&#xe1ac</i>'
    },
    created() {
        this.toggle(local.theme);
    },
    methods: {
        toggle: function (p) {
            if (p.includes('default')) {
                this.picked = 'default';
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) { this.darkMode('default dark') };
                if (window.matchMedia('(prefers-color-scheme: light)').matches) { this.lightMode('default light') };
            } else if (p === 'dark') {
                this.picked = 'dark';
                this.darkMode();
            } else if (p === 'light') {
                this.picked = 'light';
                this.lightMode();
            } else if (p === 'toggle') {
                if (this.picked.includes('dark')) {
                    this.picked = 'light';
                    this.lightMode();
                } else {
                    this.picked = 'dark';
                    this.darkMode();
                };
            } else if (p === 'refresh') {
                if (this.picked.includes('dark')) {
                    this.darkMode(this.picked);
                } else if (this.picked.includes('light')) {
                    this.darkMode(this.picked);
                };
            };
        },
        darkMode: function (a) {
            this.themeDiv = '<i class="material-icons">&#xe1ac;<i>';
            if (a?.includes('default')) {
                this.picked = 'default dark';
            } else {
                this.picked = 'dark';
            };
            local.theme = this.picked;
            save();

            var body = document.querySelector('body');
            body.style.backgroundColor = 'black';
            body.style.color = 'white';

            var textarea = document.querySelectorAll('textarea');
            var input = document.querySelectorAll('input');
            textarea.forEach(item => { item.style.color = 'white'; });
            input.forEach(item => { item.style.color = 'white'; });

            // document.querySelectorAll('.post-frame').forEach(i => { i.style.backgroundColor = 'transparent' });
            document.querySelectorAll('.com-frame').forEach(i => { i.style.backgroundColor = '#505050' });
            document.querySelectorAll('.post-title').forEach(i => { i.style.color = '#ff7247' });
            document.querySelectorAll('.post-body').forEach(i => { i.style.color = 'white' });
        },
        lightMode: function (a) {
            this.themeDiv = '<i class="material-icons">&#xe1ad;<i>';
            if (a?.includes('default')) {
                this.picked = 'default light';
            } else {
                this.picked = 'light';
            };
            local.theme = this.picked;
            save();

            var body = document.querySelector('body');
            body.style.backgroundColor = 'white';
            body.style.color = 'black';

            document.querySelectorAll('textarea').forEach(item => { item.style.color = 'black'; });
            document.querySelectorAll('input').forEach(item => { item.style.color = 'black'; });

            // document.querySelectorAll('.post-frame').forEach(i => { i.style.backgroundColor = 'transparent' });
            document.querySelectorAll('.com-frame').forEach(i => { i.style.backgroundColor = '#cccccc' });
            document.querySelectorAll('.post-title').forEach(i => { i.style.color = '#ff7247' });
            document.querySelectorAll('.post-body').forEach(i => { i.style.color = 'black' });
        }
    }
});

window.matchMedia("(prefers-color-scheme: dark)").addListener(
    e => e.matches && theme.darkMode(local.theme)
);
window.matchMedia("(prefers-color-scheme: light)").addListener(
    e => e.matches && theme.lightMode(local.theme)
);

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
            };
        }
    }
});

var fontSize = new Vue({
    el: '#text-size',
    data: {
        size: '20'
    },
    created() {
        this.size = ((local?.size) || '20');
        document.getElementById('slider').value = this.size;
    },
    watch: {
        size: function (size) {
            local.size = size;
            document.querySelector('body').style.fontSize = this.size + 'px';
            save();
        }
    }
});


var coronacation = new Vue({
    el: '#corona-counter',
    data: {
        day: 'Days of coronacation'
    },
    created() {
        function tConvert(time) {
            var time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
            if (time.length > 1) {
                time = time.slice(1);
                time[5] = +time[0] < 12 ? ' AM' : ' PM';
                time[0] = +time[0] % 12 || 12;
            };
            return time.join('');
        };
        var countDownDate = new Date("Mar 17, 2020 00:00:00").getTime();
        setInterval(() => {
            var now = new Date().getTime();
            var distance = now - countDownDate;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            hours = ('0' + hours).slice(-2);
            minutes = ('0' + minutes).slice(-2);
            seconds = ('0' + seconds).slice(-2);
            this.day = `Day ${days} of coronacation. ${tConvert(`${hours}:${minutes}:${seconds}`)}`;
        }, 1000);
    }
});


var posts = new Vue({
    el: '#postsdisplay',
    data: {
        username: '',
        posts: [
            { title: 'Loading Posts' }
        ],
        comments: [
            { postId: 12, id: 1, username: 'SpiderGaming', date: 'Wed 7/29/20 5:43:00 PM', title: 'PLACEHOLDER', body: 'THIS IS A PLACEHOLDER COMMENT. Comments are disabled and will be enabled once they are stable.' }
        ],
        commentTitle: '',
        commentBody: '',
        error: null,
        noMore: false,
        amount: 10
    },
    async created() {
        this.username = await local.username;
        var lo = setTimeout(() => {
            this.error = `Still waiting for posts? Try reloading the page`;
        }, 20000);
        await pushP('/posts', 'post', { amount: this.amount }).then(async (res) => {
            if (res.error) {
                clearTimeout(lo);
                console.log(`[SERVER] ${res.error}`);
                return this.error = `[SERVER] ${res.error}`;
            }
            if (res[0] === undefined) return this.noMore = true;
            this.posts = [];
            this.posts = await res;
            clearTimeout(lo);
            theme.toggle('refresh');
        }).catch((err) => console.error(err));
    },
    methods: {
        commentShow: async function (postId) {
            /*
            await pushP('/getComments', 'post', { postId: postId }).then(async (res) => {
                if (res.error) { console.log(res.error); return; };
                this.comments = [];
                this.comments = await res;
                theme.toggle('refresh');
            });
            */
            var c = document.getElementsByClassName(`-${postId}`)[0].getElementsByClassName('post-coms')[0];
            if (c) {
                if (c.className === 'post-coms') {
                    c.className = 'post-coms com-hide';
                } else {
                    c.className = 'post-coms';
                };
            };
        },
        postComment: function (postId) {
            return this.error = 'Comments are disabled. Also don`t send web requests for comments as it will return a status 404';
            /*
            if (this.commentTitle === '' || this.commentBody === '') return this.error = 'You must provide a Title and a Body';
            // { postID: int, username: string, content: { title: string, body: string } }
            var co = {
                postID: postId,
                username: local.username,
                content: {
                    title: this.commentTitle,
                    body: this.commentBody
                }
            }
            pushP('/comment', 'post', co).then((res) => {
                if (res.error) return console.error(res.error);
                if (res.info) return this.error = res.info;
                Vue.set(posts.posts.posts, postId, res.update);
            }).catch((err) => console.error(err));
            this.commentBody = '', this.commentTitle = '';
            */
        },
        loadMorePosts: async function () {
            pushP('/posts', 'post', { have: this.amount, amount: 5 }).then(async (res) => {
                if (res.error) { console.log(res.error); return; };
                if (res[0] === undefined) return this.noMore = true;
                this.amount = this.amount + 5;
                await res.forEach(post => {
                    this.posts.push(post);
                });
                theme.toggle('refresh');
            })?.catch((err) => console.error(err));
        }
    }
});

var gottenpost = new Vue({
    el: '#gottenPost',
    data: {
        p: false,
        post: [],
        comments: []
    }
});

var links = new Vue({
    el: '#links',
    data: {
        links: []
    },
    async created() {
        pushP('/links.json', 'get').then(async (res) => {
            if (res.error) return console.log(res.error);
            this.links = await res.links;
        }).catch((err) => console.error(err));
    }
});

var tasks = new Vue({
    el: '#tasks-list',
    data: {
        tasks: [
            {
                "type": "task",
                "task": "Loading"
            }
        ]
    },
    async created() {
        await pushP('/lists.json', 'get').then(async (res) => {
            if (res.error) return console.log(res.error);
            this.tasks = await res.lists.tasks;
        }).catch((err) => console.error(err));
    }
});

var updates = new Vue({
    el: '#updates',
    data: {
        updates: [
            {
                "update": [
                    "Loading"
                ],
                "date": "Loading Updates"
            }
        ]
    },
    async created() {
        await pushP('/lists.json', 'get').then((res) => {
            if (res.error) return console.log(res.error);
            this.updates = res.lists.updates;
        }).catch((err) => console.error(err));
    }
});

function pushP(url, type, data) {
    return new Promise(function (resolve, reject) {
        if (type === 'post') {
            axios.post(webPosts + url, data)
                .then(function (res) {
                    resolve(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        } else if (type === 'get') {
            axios.get(webPosts + url, data)
                .then(function (res) {
                    resolve(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        };
    });
};

async function getPost(id) {
    await pushP('/posts', 'post', { get: id }).then(async (res) => {
        if (res.error) return console.error(res.error);
        gottenpost.post = res[0];
        gottenpost.p = true;
        theme.toggle('refresh');
    }).catch((err) => {
        console.error(err);
    });
    setTimeout(() => {
        document.querySelector('.getpostfade').style.backgroundColor = 'transparent';
    }, 500);
};


/* === SideBar === */
function openNav() {
    document.getElementsByClassName('sidenav')[0].style.width = '250px';
};

function closeNav(t) {
    if (t === undefined) var t = 300;
    setTimeout(() => {
        document.getElementsByClassName('sidenav')[0].style.width = '0';
    }, t);
};

// If the screen size changes, close the SideBar
function resize() {
    closeNav(10);
};
window.onresize = resize;

// When you click outside of the SideBar, close it
$(document).mouseup(function (e) {
    var container = $('#sidebar');
    var menu = $('#menu');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            closeNav(0);
        };
    };
});

/* === Wait 300 ms to set some values since the page load is that slow lol === *
setTimeout(() => {
    theme.toggle(local.theme)
}, 300);
*/
/* === Keyboard Shortcuts === */
document.addEventListener('keyup', function (event) {
    // CTR + D > change the theme
    if (event.ctrlKey && event.key === 'q') {
        theme.toggle('toggle');
    } else if (event.ctrlKey && event.key === ' ') {
        //
    };
});