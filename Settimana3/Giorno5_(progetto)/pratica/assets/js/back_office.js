const submitBtn = document.getElementById("submitBtn");
const deleteBtn = document.getElementById("deleteBtn");
let id; //mi serve sempre una variabile per manipolare l'id della API
const descriptionInput = document.getElementById("description");
const imageUrlInput = document.getElementById("imageUrl");
const priceInput = document.getElementById("price");
const brandInput = document.getElementById("brand");
const nameInput = document.getElementById("name");
const title = document.getElementById("title");

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZWFkZDJkN2IxMTAwMTkwZTcwMDEiLCJpYXQiOjE3MDk5ODI0MjQsImV4cCI6MTcxMTE5MjAyNH0.0VtuJryxoxwPAoO62Tdk2I4x7fPLm4zpT8zD5zEQqn4";
const endpointAPI = "https://striveschool-api.herokuapp.com/api/product/";

window.addEventListener("load", function () {
  const params = new URLSearchParams(location.search);
  id = params.get("id");
  //struttura condizionale per vedere se l'utente vuole aggiungere o modificare il prodotto
  if (id) {
    title.innerText = "Edit product";
    searchProduct(id);
  } else {
    title.innerText = "Add product";
    deleteBtn.style.display = "none";
  }
});

const searchProduct = async (id) => {
  try {
    let response = await fetch(endpointAPI + id, {
      headers: {
        Authorization: token,
      },
    });
    let product = await response.json();
    fillForm(product);
  } catch (error) {
    console.log(error);
  }
};

const fillForm = (product) => {
  // assegno al valore delle variabili da me create e prese dall'HTML grazie all'id il prodotto della API
  nameInput.value = product.name;
  brandInput.value = product.brand;
  imageUrlInput.value = product.imageUrl;
  priceInput.value = product.price;
  descriptionInput.value = product.description;
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // inserisco il valore che hanno ora le mie variabili, nei campi del form
  const name = nameInput.value;
  const brand = brandInput.value;
  const imageUrl = imageUrlInput.value;
  const price = priceInput.value;
  const description = descriptionInput.value;

  const product = {
    // mi creo il prodotto con i nuovi valori appena assegnati
    name,
    brand,
    imageUrl,
    price,
    description,
  };
  // dopo un if, in base alla decisione dell'utente, agisco sull'id
  if (id) {
    modifyProduct(product);
  } else {
    addProduct(product);
  }
});

const addProduct = async (product) => {
  try {
    let response = await fetch(endpointAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(product),
    });
    let data = await response.json();
    alert("Prodotto correttamente inserito");
    location.href = "index.html";
  } catch (error) {
    console.log(error);
    alert("Errore nell'inserimento del prodotto");
  }
};

const modifyProduct = async (product) => {
  try {
    let response = await fetch(endpointAPI + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(product),
    });
    let data = await response.json();
    alert("Prodotto correttamente modificato");
    location.href = "index.html";
  } catch (error) {
    console.log(error);
    alert("Errore nella modifica del prodotto");
  }
};

const deleteProduct = async () => {
  try {
    let response = await fetch(endpointAPI + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    alert("Prodotto cancellato correttamente");
    location.href = "index.html";
  } catch (error) {
    console.log(error);
    alert("Errore nella cancellazione dell'elemento");
  }
};
