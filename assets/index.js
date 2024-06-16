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


const params = new URLSearchParams(window.location.search);
const redirect = params.get("r");
if (redirect === "sp") {
	window.location.replace("https://insberr.github.io/schedule-personalizer/");
}
