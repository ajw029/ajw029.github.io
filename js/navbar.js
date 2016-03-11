function navbar() {
	var navbar = document.getElementsByClassName('mobile-nav')[0];
	var navOverlay = document.getElementsByClassName('nav-overlay')[0];
	if(navbar.classList.contains('hidden')) {
		navbar.classList.remove('hidden');
		navbar.classList.add('slide-open');
		navOverlay.style.display="inline-block";
	}
	else {
		navbar.classList.add('hidden');
		navbar.classList.remove('slide-open');
		navOverlay.style.display="none";
	}
}
function clickOverlay() {
	navbar();
}