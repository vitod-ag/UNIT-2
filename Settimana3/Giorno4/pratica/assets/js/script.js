const query = 'https://api.pexels.com/v1/search?query=';
const cards = document.querySelectorAll('.col-md-4');
const input = document.getElementById('input');
const cerca = document.getElementById('cerca');
const API_KEY = '2xtywweDaT7SDDdRI5bcmJOtwdzVusQeL2t8XwqFbLMqNxhfpXYw3Zpd';


cerca.addEventListener('click', (e) => {
    e.preventDefault();
    let testo = input.value.trim();
    if (testo == "") {
        return
    }
    loadImages(testo)
})

async function loadImages(search) {
	let searchQuery = '';
	switch (search) {
		case 1:
			searchQuery = 'basket';
			break;
		case 2:
			searchQuery = 'summer';
			break;
		default:
			searchQuery = search;
			break;
	}
	try {
		const request = await fetch(query + searchQuery, {
			headers: {
				Authorization: API_KEY,
			},
		});
		const response = await request.json();
        if (response.photos.length > 0) {
            for (let i = 0; i < cards.length; i++) {
                if (response.photos[i]) {
                    if (cards[i].classList.contains('d-none')) {
                        cards[i].classList.remove('d-none')
                    }
                    let card = cards[i].querySelector('.card');
                    let img = card.querySelector('img');
                    img.src = response.photos[i].src.original;
                    img.alt = response.photos[i].alt;
                    let hideBtn = card.querySelectorAll('button')[1];
                    hideBtn.innerText = 'Hide';
                    hideBtn.removeEventListener('click', (e) => {
                        e.preventDefault();
                        cards[i].classList.add('d-none')
                    })
                    hideBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        cards[i].classList.add('d-none')
                    })
                    let small = card.querySelector('small');
                    small.innerText = response.photos[i].id;
                } else {
                    cards[i].classList.add('d-none')
                }
                
            }
        } else {
            cards.forEach((element) => {
                element.classList.add('d-none');
            })
        }
	} catch (error) {
		console.log(error);
	}
}