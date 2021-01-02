function onload() {
	document.getElementById('!year').innerText = new Date().getFullYear()
	theme()
}

function theme(mode, save, ignore) {
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
			if (!localStorage.theme) {
				let c = document.getElementsByTagName('html')[0].className;
				if (c === '') {
					return theme('dark');
				}
				return theme('light');
			}
			localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
			break;
		}
		default: {
			break;
		}
	}

	if (ignore && ignore !== undefined) return;

	if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
		document.getElementsByTagName('html')[0].className = '';
	} else {
		document.getElementsByTagName('html')[0].className = 'dark';
	}

	if (!save && save !== undefined) return theme('delete', false, true);
}

document.addEventListener('keyup', function (event) {
	if (event.key === 't') {
		theme('switch');
	}
});

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
	if (e.matches) {
		theme('light', false)
	} else {
		theme('dark', false)
	}
});
