let libreria = [];  // gli abbiamo messo let perchè la riassegneremo
let shop = [];


const creaCard = (libro, colonna) => {
    const card = document.createElement('div')
    card.classList.add('card', 'h-100');

    const img = document.createElement('img');    // da qui mi creo la card dal js
    img.src = libro.img;
    img.height = "400";
    img.classList.add('card-img-top');
    img.setAttribute('alt', libro.title);
    ///////////////////////////////////
    const body = document.createElement('div');
    body.classList.add('card-body');
    /////////////////////////////////
    const titolo = document.createElement('h5');
    titolo.classList.add('card-title');
    titolo.innerText = libro.title;
    //////////////////////////////
    const prezzo = document.createElement('p');
    prezzo.classList.add('card-text', 'fw-bold');
    prezzo.innerText = `$${libro.price}`;
    //////////////////////////
    const scarta = document.createElement('a');
    scarta.setAttribute('href', 'javascript:void(0)');
    scarta.classList.add('btn', 'btn-danger');
    scarta.innerText = 'Scarta';
    scarta.addEventListener('click', (e) => {
        e.preventDefault();
        colonna.remove();
    })
    ///////////////////////
    const aggiungi = document.createElement('a');
    aggiungi.setAttribute('href', 'javascript:void(0)');
    aggiungi.classList.add('btn', 'btn-success');
    aggiungi.innerText = 'Aggiungi';
    aggiungi.addEventListener('click', (e)  => {
        e.preventDefault();
        
        shop.push(libro);
        localStorage.setItem('shop',JSON.stringify(shop));
    })
    ////////////////////////
    body.append(titolo,prezzo,scarta,aggiungi);
    card.append(img,body);
    return card

}

const generaLibreria = () => {
    const libri = document.getElementById('libri');
    libreria.forEach((element) => {
        const col = document.createElement('div');
        col.classList.add('col-3', 'my-2');
        const card = creaCard(element, col);

        col.appendChild(card);          //funzione nuova per snellire il codice
        libri.appendChild(col);
    })
}

const ricercaAPI = () => {
  let response = fetch("https://striveschool-api.herokuapp.com/books")
    .then((risposta) => {
      // il .then vuole sempre una funziona freccia
      return risposta.json();
    })
    .then((data) => {
      libreria = data;
      generaLibreria();
    });
};

const init = () => {
  ricercaAPI();
};

window.addEventListener("load", init);
