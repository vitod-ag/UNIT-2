const productsList = document.getElementById('productsList');
let list = [];
const endpointAPI = 'https://striveschool-api.herokuapp.com/api/product/';
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZWFkZDJkN2IxMTAwMTkwZTcwMDEiLCJpYXQiOjE3MDk5ODI0MjQsImV4cCI6MTcxMTE5MjAyNH0.0VtuJryxoxwPAoO62Tdk2I4x7fPLm4zpT8zD5zEQqn4";



window.addEventListener('load', function() {
    loadCards();
});

const loadCards = async () => {                 // faccio una try and catch per caricare la API
    try {
        let response = await fetch (endpointAPI, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });
        list = await response.json();
        print();
    }catch (error) {
		console.log(error);
	}
};

const print = () => {
    productsList.innerHTML='';             // 1. svuoto
        list.forEach(element => {          // 2. itero gli elementi creando la card del prodotto
            productsList.innerHTML += `
            <div class="col">
                <div class="card">
                  <img src="${element.imageUrl}" class="card-img-top"/>
                    <div class="card-body"> 
                    <h5 class="card-title">${element.name}</h5> 
                    <p class="card-text">${element.description}</p>
                    <a class="btn btn-warning me-2" href="back_office.html?id=${element._id}">Modifica</a>
                    <a class="btn btn-info" href="dettagliProdotto.html?id=${element._id}">Scopri di più</a>
                    </div>
                </div>  
            </div>`;
        });
};
