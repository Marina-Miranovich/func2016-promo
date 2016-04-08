(function (w) {
	var OPEN_MENU_CLASS = 'menu-opened';
	var MIN_DESCTOP_WIDTH = 770;
	var DEBOUNCE_DELAY = 100;
	var topNav = w.document.getElementById('topNav');
	var debounceTimer;

	topNav.addEventListener('click', function () {
		toggleMenu();
	});

	w.addEventListener('resize', function () {
		if (debounceTimer) {
			w.clearTimeout(debounceTimer);
		}
		w.setTimeout(function () {
			if (w.innerWidth >= MIN_DESCTOP_WIDTH) {
				closeMenu();
			}
		}, DEBOUNCE_DELAY);

	});

	function toggleMenu() {
		if (w.innerWidth < MIN_DESCTOP_WIDTH) {
			topNav.classList.toggle(OPEN_MENU_CLASS);
		}
	}

	function closeMenu () {
		topNav.classList.remove(OPEN_MENU_CLASS);
	}
}) (window);