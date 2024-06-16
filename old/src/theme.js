function onload() {
	document.getElementById("!year").innerText = new Date().getFullYear();
	theme();
}

localStorage.removeItem("theme");

function theme(toggle) {
	let swit =  document.getElementById('!theme');
	if (toggle === true) {
		let current = document.getElementsByTagName("html")[0].className;
		document.getElementsByTagName("html")[0].className = current === 'dark' ? 'light' : 'dark';
		swit.checked = current === 'dark' ? true : false;
	} else {
		let matches = window.matchMedia("(prefers-color-scheme: light)").matches;
		document.getElementsByTagName("html")[0].className = matches === true ? "light" : "dark";
		swit.checked = matches
	}
}

document.addEventListener("keyup", function (event) {
	if (event.key === "t") {
		theme(true);
	}
});

window
	.matchMedia("(prefers-color-scheme: light)")
	.addEventListener("change", (e) => {
		theme()
	});
