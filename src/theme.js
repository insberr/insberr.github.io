document.getElementById('!year').innerText = new Date().getFullYear()
function theme(mode) {
	switch (mode) {
		case 'delete': {
			localStorage.removeItem('theme');
			break;
		}
		case 'light': {
			localStorage.theme = 'light';
			break;
		}
		case 'dark': {
			localStorage.theme = 'dark';
			break;
		}
		case 'switch': {
			localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
			break;
		}
		default: {
			break;
		}
	}

	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.querySelector('html').classList.add('dark')
	} else {
		document.querySelector('html').classList.remove('dark')
	}
}

theme()

document.addEventListener('keyup', function (event) {
	if (event.key === 't') {
		theme('switch');
	}
});
