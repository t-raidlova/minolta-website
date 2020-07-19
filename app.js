window.addEventListener('scroll', function (e) {
	e.preventDefault();
	var nav = document.querySelector('.nav-container');
	if (
		document.documentElement.scrollTop ||
		document.body.scrollTop > window.innerHeight
	) {
		nav.classList.add('nav-colored');
		nav.classList.remove('nav-transparent');
	} else {
		nav.classList.add('nav-transparent');
		nav.classList.remove('nav-colored');
	}
});
