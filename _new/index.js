const Hello = Vue.createApp({
	data() {
		return {
			name: "insberr",
		};
	},
}).mount("#hello");

console.log(Hello.name);