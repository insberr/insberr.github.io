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

const _languages = {
	data() {
		return {
			langs: ["HTML, CSS", "JavaScript", "V", "Python"],
			frameworks: ["discord.js", "VueJS"],
		};
	},
};

const _projects = {
	data() {
		return {
			repos: [
				{
					image: '',
					url: "insberr/vhiven",
					name: "vhiven",
					desc: "Hiven bot module written in V",
				},
			],
		};
	},
};

Vue.createApp(_projects).mount("#projects");
// Vue.createApp(_languages).mount("#languages");

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
	theme.set();
});
