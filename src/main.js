var webPosts = 'https://website-backend--spidergamin.repl.co';
var local = {}, cookies = true, wait = false;

if (localStorage.getItem('siteData')) {
	local = JSON.parse(localStorage.getItem('siteData'));
} else {
	localStorage.clear();
	local = { tab: 'home', size: '20', theme: 'default', username: 'Anonymous', new: true };
}

async function save() {
	if (posts !== undefined) posts.username = local.username;
	if (userName !== undefined) userName.username = local.username;
	if (fontSize !== undefined) fontSize.size = local.size;
	if (cookies) {
		localStorage.setItem("siteData", JSON.stringify(local));
	}
}

$(document).ready(function () {
	pageAnchor();
	pageQuery();
});

function sanitize(html) {
	html.replace(/<script>/g, '&lt;hacker&gt;');
	html.replace(/<\/script>/g, '&lt;/hacker&gt;')
	html.replace(/</g, '&lt;');
	html.replace(/>/g, '&gt;');
	return html;
}

function rmHash() {
	history.pushState("", document.title, window.location.pathname + window.location.search);
}

function rmQuery() {
	window.history.replaceState({}, document.title, "/" + " ");
}

function pageQuery() {
	navBar(local.tab || 'home');
	try {
		if (window.location.search) {
			let loc = new URLSearchParams(window.location.search);
			let l = loc.get('l');
			let qScroll = loc.get('scroll');
			let qTab = loc.get('tab');
			let qComment = loc.get('comment');

			if (qTab) {
				navBar(qTab);
				if (qScroll) {
					setTimeout(() => {
						scrollToAnchor('#' + qScroll);
					}, 500);
				}
			}

			if (l && l.includes('-')) {
				let tab = l.split('-')[0];
				navBar(tab);
				let anchor = l.replace(tab, '');
				setTimeout(() => {
					scrollToAnchor('#' + anchor);
				}, 500);
			} else if (l) { navBar(l); } else { return; }
		}
		rmQuery();
	} catch (error) {
		console.error(`An error occurred with the query: ${error}`);
		notify('error', 'There was an error selecting that tab or anchor');
		rmQuery();
		navBar('home');
	}
}

function pageAnchor() {
	try {
		if (location.hash) {
			if (location.hash.includes('-')) {
				let hash = location.hash;
				let tab = hash.split('-')[0].replace('#', '');
				let anchor = hash.replace(tab, '');
				document.getElementsByClassName(tab)[0].click();
				setTimeout(() => {
					scrollToAnchor(anchor);
				}, 200);
			} else {
				document.getElementsByClassName(location.hash.toLowerCase().replace('#', ''))[0].click();
			}
		} else {
			navBar(local.tab || 'home');
		}
		rmHash();
	} catch (error) {
		console.error(`An error occurred with the query: ${error}`);
		notify('error', 'Tab error', 'There was an error selecting that tab or anchor');
		rmHash();
		navBar('home');
	}
}

function scrollToAnchor(anchor) {
	anchor = sanitize(anchor);
	try {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(anchor).offset().top
		});
	} catch (error) {
		console.error(error);
		notify('error', 'Scroll error');
	}
}

$(window).bind('hashchange', function () { pageAnchor() });

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
	}
	save();
	notify('success', `The setting '${i}' was successfully reset`);
}

function resetSiteData() {
	if (confirm('Are you sure?') === true) {
		notify('success', 'Site data successfully reset', 'The site will refresh in ~5 seconds');
		cookies = false;
		localStorage.clear();
		setTimeout(() => { location.reload() }, 5000);
	}
}

function navBar(tab, mobile) {
	if (mobile) { closeNav(); }
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('tab');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	tablinks = document.getElementsByClassName('tab-');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	document.getElementById(tab).style.display = 'block';
	// evt.currentTarget.className += " active";
	let elmt = document.getElementsByClassName(tab);
	elmt[0].className += ' active';
	if (elmt[1]) elmt[1].className += ' active';

	local.tab = tab;
	save();
}

/* ----- vue js ----- */
var notifier = new Vue({
	el: '#notification',
	data: {
		type: '',
		title: '',
		notification: '',
		notif: null,
		timeOut: null
	},
	methods: {
		notify: function (type, title, info) {
			console.log(type, title, info);
			this.notif = document.getElementById('notification');
			this.notif.className = 'slide-in';
			this.type = type;
			this.title = title;
			this.notification = info;
			clearTimeout(this.timeOut);
			this.timeOut = setTimeout(() => {
				this.notif.className = 'slide-out';
				setTimeout(() => {
					this.notif.className = 'hide';
				}, 1000);
			}, 5000);
		},
		hideElm: function () {
			clearTimeout(this.timeOut);
			this.notif.className = 'hide';
		}
	}
});
/* Notification thingy */
function notify(type, title, info) {
	notifier.notify(type, title, info);
}

var userName = new Vue({
	el: '#username',
	data: {
		username: 'Anonymous'
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

const qs = (q) => document.querySelector(q);
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
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					this.darkMode('default dark');
				} else {
					this.lightMode('default light');
				}
			} else if (p === 'dark') {
				this.darkMode(p);
			} else if (p === 'light') {
				this.lightMode(p);
			} else if (p === 'toggle') {
				if (this.picked.includes('dark')) {
					this.lightMode('light');
				} else {
					this.darkMode('dark');
				}
			}
		},
		darkMode: function (a) {
			this.themeDiv = '<i class="material-icons">&#xe1ac;<i>';
			if (a?.includes('default')) {
				this.picked = 'default dark';
			} else {
				this.picked = 'dark';
			}
			local.theme = this.picked;
			save();
			qs('#light-theme').href = '';
		},
		lightMode: function (a) {
			this.themeDiv = '<i class="material-icons">&#xe1ad;<i>';
			if (a?.includes('default')) {
				this.picked = 'default light';
			} else {
				this.picked = 'light';
			}
			local.theme = this.picked;
			save();
			qs('#light-theme').href = 'src/minified/light.min.css';
		}
	}
});


window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
	e.matches && theme.darkMode(local.theme);
});
window.matchMedia("(prefers-color-scheme: light)").addEventListener('change', (e) => {
	e.matches && theme.lightMode(local.theme);
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

function date(dateTime) {
	let d = new Date(dateTime);
	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	let nd = new Date(utc + (3600000 * -7));
	return nd;
}

function tConvert(time) {
	time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
	if (time.length > 1) {
		time = time.slice(1);
		time[5] = +time[0] < 12 ? ' AM' : ' PM';
		time[0] = +time[0] % 12 || 12;
	}
	return time.join('');
}

function formatTime(t, ti) {
	let distance = 0;
	let now = date(new Date());
	if (t === 'up') distance = now - ti;
	if (t === 'down') distance = ti - now;
	let d = Math.floor(distance / (1000 * 60 * 60 * 24));
	let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let s = Math.floor((distance % (1000 * 60)) / 1000);
	h = ('0' + h).slice(-2);
	m = ('0' + m).slice(-2);
	s = ('0' + s).slice(-2);
	let f = tConvert(`${h}:${m}:${s}`);
	return { d: d, h: h, m: m, s: s, f: f };
}

var counters = new Vue({
	el: '#counters',
	data: {
		time: '00:00:00 AM',
		cc: { day: 0 },
		c: { day: 0 },
		s: { day: 0, days: 291, }
	},
	created() {
		let ccDate = new Date("Mar 17, 2020 00:00:00").getTime();
		let cDate = new Date('Dec 30, 2019 00:00:00').getTime();
		let sDateUp = new Date("Sep 3, 2020 00:00:00").getTime();
		let sDateDown = new Date("Jun 22, 2021 00:00:00").getTime();
		setInterval(() => {
			let cc = formatTime('up', ccDate);
			let c = formatTime('up', cDate);
			let su = formatTime('up', sDateUp);
			let sd = formatTime('down', sDateDown);

			this.time = cc.f;
			this.cc.day = cc.d;
			this.c.day = c.d;
			this.s.day = su.d;
			this.s.days = sd.d;
		}, 1000);
	}
});

var links = new Vue({
	el: '#links',
	data: {
		links: [
			{ 'link': 'Loading links' }
		]
	},
	async created() {
		await pushP('/links.json', 'get').then(async (res) => {
			if (res.error) return console.log(res.error);
			this.links = await res.links;
		}).catch((error) => console.error(error));
	}
});

var tasks = new Vue({
	el: '#tasks-list',
	data: {
		tasks: [
			{
				"type": "task",
				"task": "Loading",
				"done": false
			}
		]
	},
	async created() {
		await pushP('/lists.json', 'get')
			.then(async (res) => {
				this.tasks = await res.lists.tasks;
			})
			.catch((err) => console.error(err));
	}
});

var suggest = new Vue({
	el: '#suggestions',
	data: {
		suggestion: '',
		sent: null
	},
	methods: {
		send: async function () {
			pushP('/suggest', 'post', { s: this.suggestion, username: local.username }).then(async (res) => {
				if (res.error) console.error(res.error);
				this.sent = res.info;
				this.suggestion = '';
			}).catch((error) => console.error(error));
		}
	}
});

async function pushP(url, type, data) {
	return new Promise(async function (resolve, reject) {
		if (type === 'get') {
			await superagent
				.get(webPosts + url)
				.set('accept', 'json')
				.end(function (err, res) {
					if (err) return reject(err);
					if (!res) return reject('Server responded with nothing');
					resolve(JSON.parse(res.text));
				});
		} else {
			await superagent
				.post(webPosts + url)
				.send(data)
				.set('accept', 'json')
				.end(function (err, res) {
					if (err) return reject(err);
					if (!res) return reject('Server responded with nothing');
					if (res.body.error) return reject(res.body.error);
					resolve(res.body);
				});
		}
	})
}

/* === SideBar === */
function openNav() {
	document.getElementsByClassName('sidenav')[0].style.width = '250px';
}

function closeNav(delay) {
	if (delay === undefined) delay = 300;
	setTimeout(() => {
		document.getElementsByClassName('sidenav')[0].style.width = '0';
	}, delay);
}

window.onresize = () => closeNav(10);

$(document).mouseup(function (e) {
	let bar = $('#sidebar');
	let menu = $('#menu');
	if (!bar.is(e.target) && bar.has(e.target).length === 0) {
		if (!menu.is(e.target) && menu.has(e.target).length === 0) {
			closeNav(0);
		}
	}
});

function copy(f, text, i) {
	navigator.clipboard.writeText(text.replace('<br>', '\n'));
	notify('info', `${f} copied`, i);
}

document.addEventListener('keyup', function (event) {
	if (event.ctrlKey && event.key === 'q') {
		theme.toggle('toggle');
	}
});
