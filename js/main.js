function anchor(ele) {
	if ($(ele).length) {
		$(ele).ScrollTo();
		var navbar = document.getElementsByClassName('mobile-nav')[0];
		var navOverlay = document.getElementsByClassName('nav-overlay')[0];
		if (!navbar.classList.contains('hidden')) {
			navbar.classList.add('hidden');
			navbar.classList.remove('slide-open');
			navOverlay.style.display="none";
		}
	}
}
