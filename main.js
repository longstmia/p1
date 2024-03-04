document.addEventListener('DOMContentLoaded', function() {
	
	const mySlider = new Splide('#mySlider', {
		pagination: false,
		breakpoints: {
			1440: {
				perPage: 2,
			},
			765: {
				perPage: 1,
			},
			375: {
				perPage: 1,
			}
		}
	});
	
	mySlider.mount();
	
	const mySliderTwo = new Splide('#mySliderTwo', {
		pagination: false,
		breakpoints: {
			1024: {
				perPage: 2
			},
			765: {
				perPage: 1,
			}
		}
	});
	
	mySliderTwo.mount();
	
	const rightButtonOne = document.getElementById('rightButtonOne');
	const leftButtonOne = document.getElementById('leftButtonOne');
	const rightButtonTwo = document.getElementById('rightButtonTwo');
	const leftButtonTwo = document.getElementById('leftButtonTwo');
	
	rightButtonOne.addEventListener('click', function() {
		mySlider.go('+');
	});
	
	leftButtonOne.addEventListener('click', function() {
		mySlider.go('+');
	});
	
	rightButtonTwo.addEventListener('click', function() {
		mySliderTwo.go('-');
	});
	
	leftButtonTwo.addEventListener('click', function() {
		mySliderTwo.go('+');
	});
})

document.querySelectorAll('tr').forEach(function(element) {
  element.addEventListener('click', function(event) {
    const text = event.currentTarget.querySelector('td').textContent.trim();
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  });
});

