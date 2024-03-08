let articoli = []
const nome = document.getElementById("nomeInput")
const brand = document.getElementById("brandInput")
const prezzo = document.getElementById("prezzoInput")
const url = document.getElementById("urlInput")
const descrizione = document.getElementById("descrizioneInput")
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZWFiMDJkN2IxMTAwMTkwZTZmZmEiLCJpYXQiOjE3MDk4OTQzMjAsImV4cCI6MTcxMTEwMzkyMH0.8cDM_DIErBsEv4hihTMhxnq8Y0vaSGR-reBH-SOlPEc";


const cercaFetch = async () => {
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

window.addEventListener('load', init)

function recuperoDati(dataString) {
    articoli.forEach((element) => {
        if(element._id == dataString)
        {
            nome.value = element.name
            brand.value = element.brand
            prezzo.value = element.price
            descrizione.value = element.description
            url.value = element.imageUrl 
        }
    })
}

async function init() {
    await cercaFetch()
        const urlParams = new URLSearchParams(window.location.search);
        const dataString = urlParams.get('id');
        if (dataString) {
           recuperoDati(dataString)
        }
}