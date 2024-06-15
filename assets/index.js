const theme = Vue.createApp({
	data() {
		return {
			dark: true,
		};
	},
	methods: {
		toggle() {
			let current = document.getElementsByTagName("html")[0].className;
			document.getElementsByTagName("html")[0].className = current === "light" ? "dark" : "light";
			this.dark = current === "light" ? true : false;
		},
		set() {
			let matches = window.matchMedia("(prefers-color-scheme: light)").matches;
			document.getElementsByTagName("html")[0].className = matches === true ? "light" : "dark";
			this.dark = matches === true ? false : true;
		},
	},
	mounted() {
		this.set();
	},
}).mount("#theme-toggle");

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
	theme.set();
});


// Counters
function date(dateTime) {
	let d = new Date(dateTime);
	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	let nd = new Date(utc + (3600000 * -7));
	return nd;
}

/*
 TimeString = 'hh:mm:ss"
*/
function convertTimeStringToTimeStringIn12HourFormat(timeString) {
	let timeStringIn12HourFormat = "";
	let timeArray = timeString.split(":");
	let hours = timeArray[0];
	let minutes = timeArray[1];
	let seconds = timeArray[2];
	let hoursIn12HourFormat = hours % 12;
	if (hoursIn12HourFormat === 0) {
		hoursIn12HourFormat = 12;
	}
	timeStringIn12HourFormat = hoursIn12HourFormat + ":" + minutes + ":" + seconds;
	return timeStringIn12HourFormat;
}

/*
function tConvert(time) {
	time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
	if (time.length > 1) {
		time = time.slice(1);
		time[5] = +time[0] < 12 ? ' AM' : ' PM';
		time[0] = +time[0] % 12 || 12;
	}
	return time.join('');
}
*/

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
	let f = convertTimeStringToTimeStringIn12HourFormat(`${h}:${m}:${s}`);
	return { d: d, h: h, m: m, s: s, f: f };
}

const counters = Vue.createApp({
	data() {
		return {
			time: '',
			cc: { day: 0 },
			c: { day: 0 },
			s: { day: 0, days: 291 },
		};
	},
	mounted() {
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
}).mount("#counters");


// Secret code
var characterMap = {
	a: "@",
	b: "/",
	c: "+",
	d: "$",
	e: "3",
	f: "&",
	g: "*",
	h: "(",
	i: "8",
	j: ")",
	k: "'",
	l: '"',
	m: ":",
	n: ";",
	o: "9",
	p: "0",
	q: "1",
	r: "4",
	s: "#",
	t: "5",
	u: "7",
	v: "=",
	w: "2",
	x: "-",
	y: "6",
	z: "%",
	"1": "q",
	"2": "w",
	"3": "e",
	"4": "r",
	"5": "t",
	"6": "y",
	"7": "u",
	"8": "i",
	"9": "o",
	"0": "p",
	".": "?",
	"?": ".",
	"!": ",",
	",": "!",
	"@": "a",
	"/": "b",
	"+": "c",
	$: "d",
	"&": "f",
	"*": "g",
	"(": "h",
	")": "j",
	"'": "k",
	"‘": "k",
	'"': "l",
	"“": "l",
	":": "m",
	";": "n",
	"#": "s",
	"=": "v",
	"-": "x",
	"%": "z",
	" ": " ",
	"\n": "<br>",
};

function secretCode(input, callback) {
	let output = input.toLowerCase().split('').map(character => characterMap[character]).join('');
	callback(output);
}
