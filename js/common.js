// Сворачивание header`a
let menu = document.querySelector('header'),
		firstLine = menu.querySelector('.first-line'),
		secondLine = menu.querySelector('.second-line'),
		main = document.querySelector('main');

main.style.paddingTop = menu.offsetHeight + parseInt(getComputedStyle(main).paddingTop) + 'px';

window.addEventListener('scroll', function() {
	if (window.scrollY > 1) {
		menu.style.transform = `translateY(-${firstLine.offsetHeight}px)`;
		secondLine.style.padding = '.6rem 0';
		secondLine.querySelector('nav').style.display = 'inline-block';
	} else {
		menu.style.transform = 'translateY(0)';
		secondLine.style.padding = '';
		secondLine.querySelector('nav').style.display = 'none';
	}
}, false)

// сдвиг контейнера вниз на высоту header`a
document.querySelectorAll('a[href^="#"]').forEach(function(elem) {
	elem.onclick = function() {
		let timer;
		clearTimeout(timer);
		timer = setTimeout(function() { window.scrollBy(0, -secondLine.offsetHeight - 10) }, 50);
	}
})
