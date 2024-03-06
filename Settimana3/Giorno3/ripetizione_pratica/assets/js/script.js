const cards = document.getElementById('cards');
const searchURL = 'https://striveschool-api.herokuapp.com/books';
const cart = document.getElementById('cart');
let books = [];
let shoppingCartList = [];

//mi porto gli id dell'HTML e l'URL per la fetch 
// e mi creo gli array per i libri e per gli acquisti

//1. EventListener quando carica la pagina
window.addEventListener('load',init);

//2. mi sviluppo la funzione che fa iniziare il tutto
function init() {
    caricaLibri();  //qui caricherò la libreria grazie alla API
    if(localStorage.getItem('shoppingCart')) {
        shoppingCartList = JSON.parse(localStorage.getItem('shoppingCart'));
        loadShoppingCart();
    }
}

//3. carico i libri grazie al metodo fetch (non è una funzione)
const caricaLibri = async () => {
    await fetch(searchURL).then(response=> {
        return response.json();
    }).then(data => {
        books = data;
        stampa();
    }).catch(err => {
        console.log(err)
    });
};

function stampa() {
    for (let i = 0; i < books.length; i++) {
        let div = document.createElement('div');            // mi creo un div
        div.classList.add('col');                           // mi creo una classe col nel div
        // lavoro sull'HTML dal Js
        div.innerHTML = `<div class="card h-100>
                            <img src="${books[i].img}" class="img-fluid card-img-top" />
                            <div class="card-body">
                                    <h5 class="card-title">${books[i].title}</h5>
                                    <p class="card-text badge rounded-pill bg-dark mb-2">${books[i].category}</p>
                                    <p class="fs-4">$${books[i].price}</p>
                                <div>
                                <button class="btn btn-danger" onclick="addToCart('${books[i].asin}')">Compra</button>
                                <button class="btn btn-outline-danger" onclick="skipMe()">Scarta</button>
                                </div>
                            </div>`;
                            cards.appendChild(div);                 // una volta fatto un div, appendo tutto nell' id HTML cards
    }
}

function addToCart(asin) {                                              // aggiungo una card nel carrello
    const book = books.find(book => book.asin === asin);
    shoppingCartList.push(book);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartList));
    loadShoppingCart();
} 

function loadShoppingCart() {
        cart.innerHTML='';
        shoppingCartList.forEach(book => {
        cart.innerHTML += `<div>
                             <div class="d-flex align-items-start gap-2">
                               <img src="${book.img}" class="img-fluid" width="60" />
                               <div class="flex-grow-1">
                                 <p class="fw-bold">$${book.price}</p>
                                  <div>
                                    <div>
                                        <buttton class="btn btn-danger" onclick="deleteItem('${book.asin}')">Elimina</button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div> `;
    });

    function deleteItem(asin) {
        let index = shoppingCartList.findIndex(book => book.asin === asin);
        shoppingCartList.splice(index, 1);
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartList));
        loadShoppingCart();
    }
}