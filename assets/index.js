const theme = Vue.createApp({
	data() {
		return {
			dark: true,
		};
	},
	methods: {
		toggle() {
			let current = document.getElementsByTagName("html")[0].className;
			document.getElementsByTagName("html")[0].className =
				current === "light" ? "dark" : "light";
			this.dark = current === "light" ? true : false;
		},
		set() {
			let matches = window.matchMedia("(prefers-color-scheme: light)")
				.matches;
			document.getElementsByTagName("html")[0].className =
				matches === true ? "light" : "dark";
			this.dark = matches === true ? false : true;
		},
	},
}).mount("#theme-toggle");

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
			repos: [],
		};
	},
	async mounted() {
		this.repos = await (
			await fetch("https://api.github.com/users/insberr/repos").then(
				(res) => res
			)
		).json();
	},
};

Vue.createApp(_projects).mount("#projects");
Vue.createApp(_languages).mount("#languages");

localStorage.removeItem("theme");
function onload() {
	theme.set();
}

document.addEventListener("keyup", function (event) {
	if (event.key === "t") {
		theme.toggle(true);
	}
});

window
	.matchMedia("(prefers-color-scheme: light)")
	.addEventListener("change", (e) => {
		theme.set();
	});
