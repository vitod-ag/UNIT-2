window.addEventListener('load', init);
const dataUrl = "https://striveschool-api.herokuapp.com/api/product/";
let articoli = [];
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZWFiMDJkN2IxMTAwMTkwZTZmZmEiLCJpYXQiOjE3MDk4OTQzMjAsImV4cCI6MTcxMTEwMzkyMH0.8cDM_DIErBsEv4hihTMhxnq8Y0vaSGR-reBH-SOlPEc";
const riga = document.getElementById("row")
riga.classList.add("row")

const primoProdotto = {
    "name": "One Piece 106",
    "price": 10,
    "brand": "Eiichiro Oda", 
    "description": "Nel fantasmagorico universo di One Piece non esiste la parola “riposo”, e l’instancabile mente del maestro Oda è costantemente al lavoro per partorire nuove, pazzesche avventure da far vivere alla masnada di pirati più bizzarra che ci sia!",
    "imageUrl": "https://m.media-amazon.com/images/I/81MTczzL2tL._SY466_.jpg"
}

async function init() {
    await caricaApi();
    prodotto();
}

const prodotto = async () => {
    console.log(primoProdotto)
    let stop = false
    articoli.forEach((element) => {
        if (element.name == primoProdotto.name){
            stop = true
        }
    })
    if (stop){
        return
    }

    try {
        const generaCard = await fetch(dataUrl, {
            method: "POST",
            headers: {
                "Authorization": API_KEY,
                "Content-Type": "application/json"
            }, body: JSON.stringify(primoProdotto)
        });
        if (generaCard.ok) {
            console.log("Prodotto inserito con successo")
        } else {
            console.error("Errore durante l'aggiunta del prodotto", generaCard.status)
        }
    } catch (error) {
        console.log(error)
    }

} 




internoCard = (element, col) => {
    col.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${element.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
    </div>
    <div class="card-body">
      <a href="editProduct.html?id=${element._id}"><button id="modifica" class="btn btn-warning" type="">Modifica</button></a>
      <a href="scopri-di-piu.html?id=${element._id}"><button id="info" class="btn btn-info" type="">Scopri di più</button></a>
    </div>
  </div> `
  riga.append(col)
}






const generaCard = () => {
    articoli.forEach((element) => {
    const col = document.createElement("div")
    col.classList.add("col-3", "my-3")
    internoCard(element, col)
    });
    
}





caricaApi = async () => {
    try {
        const caricamento = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                "Authorization": API_KEY
            }
        })
        const response = await caricamento.json();
        articoli = response;
        console.log("Articoli recuperati", articoli)
        generaCard();
    }

    catch (error) {
        console.log(error);
    }
}

/* <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-body">
          <a href="#"><button class="btn btn-outline-warning" type="">Modifica</button></a>
          <a href="#"><button class="btn btn-outline-info" type="">Scopri di più</button></a>
        </div>
      </div> */


