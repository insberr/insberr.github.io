const _theme = {
	data() {
		return {
			checked: false,
		};
	},
	methods: {
		toggle() {
			let current = document.getElementsByTagName("html")[0].className;
			document.getElementsByTagName("html")[0].className =
				current === "light" ? "dark" : "light";
			this.checked = this.checked === true ? false : true;
		},
		set() {
			let matches = window.matchMedia("(prefers-color-scheme: light)")
				.matches;
			document.getElementsByTagName("html")[0].className =
				matches === true ? "light" : "dark";
			this.checked = matches === true ? false : true;
		},
	},
};

function onload() {
	document.getElementById("!year").innerText = new Date().getFullYear();
	_theme.methods.set();
}

localStorage.removeItem("theme");

function theme(toggle) {
	// let swit = document.getElementById("theme-toggle");
	if (toggle === true) {
		let current = document.getElementsByTagName("html")[0].className;
		document.getElementsByTagName("html")[0].className =
			current === "dark" ? "light" : "dark";
		// _theme.data().checked = current === 'dark' ? true : false;
		// swit.checked = current === "dark" ? true : false;
	} else {
		let matches = window.matchMedia("(prefers-color-scheme: light)")
			.matches;
		document.getElementsByTagName("html")[0].className =
			matches === true ? "light" : "dark";
		// _theme.data().checked = matches;
		// swit.checked = matches;
	}
}

document.addEventListener("keyup", function (event) {
	if (event.key === "t") {
		_theme.methods.toggle(true);
	}
});

window
	.matchMedia("(prefers-color-scheme: light)")
	.addEventListener("change", (e) => {
		_theme.methods.set();
	});


const _languages = {
	data() {
		return {
			know: ["HTML & CSS", "JavaScript"],
			learn: [
				'<a href="https://vlang.io/" target="_blank" class="link">V</a>',
				"Python",
			],
			later: ["Java", "C, C++, C#", "Kotlin", "Rust", "Go", "Elixir"],
		};
	},
};

const _projects = {
	data() {
		return {
			featured: [250335962, 225704071, 268001003, 318579438, 312055785],
			repos: []
		}
	},
	async mounted() {
		this.repos = await (await fetch('https://api.github.com/users/insberr/repos').then(res => res)).json()
	}
}

Vue.createApp(_projects).mount("#projects")
Vue.createApp(_theme).mount("#theme-toggle");
Vue.createApp(_languages).mount("#languages");
