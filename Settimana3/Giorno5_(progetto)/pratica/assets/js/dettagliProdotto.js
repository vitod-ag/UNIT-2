const productDetails = document.getElementById('productDetails');
const endpointAPI = 'https://striveschool-api.herokuapp.com/api/product/';
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZWFkZDJkN2IxMTAwMTkwZTcwMDEiLCJpYXQiOjE3MDk5ODI0MjQsImV4cCI6MTcxMTE5MjAyNH0.0VtuJryxoxwPAoO62Tdk2I4x7fPLm4zpT8zD5zEQqn4";
let id;
let product;

window.addEventListener('load', function() {
    const params = new URLSearchParams (location.search);   //creo un oggetto che mi consente di accedere e manipolare i parametri della query string dell'URL 
    id = params.get('id');                                  // qui infatti prendo l'id della API e la assegno alla variabile id
    loadProduct();
});

const loadProduct = async () => {
    try {
        let response = await fetch( endpointAPI + id, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });
        product = await response.json();
        print();
    } catch (error) {
		console.log(error);
	}
};

const print = () => {                   // la card detail
    productDetails.innerHTML = `
    <div class="col-6 text-center">
        <img src="${product.imageUrl}" width="100%" />
    </div>
    <div class="col-6">
        <div class="fs-5">${product.brand}</div>
        <div class="fs-3">${product.name}</div>
        <span class="badge bg-dark text-warning">${product.price}€</span>
        <p class="mt-4">${product.description}</p>
    </div>`
}











































/* <div class="mb-3 mt-5 mx-5">
                <h1 class="border-bottom mb-3">Edit Product</h1>
                <label for="exampleFormControlInput1" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nomeInput" placeholder="Nome Prodotto">
            </div>
            <div class="mb-3 mx-5">
                <label for="exampleFormControlInput1" class="form-label">Brand</label>
                <input type="text" class="form-control" id="brandInput" placeholder="Modello">
            </div>
            <div class="mb-3 mx-5">
                <label for="exampleFormControlInput1" class="form-label">Prezzo</label>
                <input type="number" class="form-control" id="prezzoInput" placeholder="0€">
            </div>
            <div class="mb-3 mx-5">
                <label for="exampleFormControlInput1" class="form-label">Url Immagine</label>
                <input type="text" class="form-control" id="urlInput" placeholder="https://linkprodotto.it">
            </div>
            <div class="mb-3 mx-5">
                <label for="exampleFormControlTextarea1" class="form-label">Descrizione Prodotto</label>
                <textarea class="form-control" id="descrizioneInput" rows="3"></textarea>
            </div>
            <form class="row g-3">
                <div class="d-flex justify-content-between">
                    <div class="col-auto ms-5">
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </div>
                    <div class="col-auto me-5"> 
                        <button type="submit" class="btn btn-warning mb-3 mx-5 px-4">Reset</button>
                        <button type="submit" class="btn btn-success mb-3 px-4">Save</button>
                    </div>
                </div> */