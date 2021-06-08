let titles = document.querySelectorAll('.answers__content-title');

[].forEach.call(titles, function (el) {
	el.addEventListener('click', function (e) {


		let parent = e.target.closest('div');
		let text = parent.querySelector(".answers__content-text");

		if (text.style.display === 'none') {
			text.style.display = 'inline-block';
		} else {
			text.style.display = 'none';
		}
	})
});