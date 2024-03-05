//*************ESERCIZIO 1************************ */

// creo la classe User
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  comparaEta(personaX) {
    if (this.age > personaX.age) {
      return `${this.firstName} ha l'eta maggiore`;
    } else if (this.age === personaX.age) {
      return `Sia ${this.firstName} che ${personaX.firstName} hanno la stessa età`;
    } else {
      return `${this.firstName} ha l'eta minore di ${personaX.firstName}`;
    }
  }
}

const persona1 = new User("Giovanni", "Rossi", 25, "Roma");
const persona2 = new User("Marco", "Verdi", 21, "Milano");

console.log("\n");
//metto in pratica il confronto
console.log("*************ESERCIZIO 1************************");
console.log("\n");
console.log(persona2.comparaEta(persona1));
console.log("\n");

//*************ESERCIZIO 2************************ */

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  haLoStessoPadrone = function (_petX) {
    if (this.ownerName == _petX.ownerName) {
      return true;
    }
    return false;
  };
}

const pet1 = new Pet('Pippo', 'Mauro', 'cane', 'pitbull');
const pet2 = new Pet('Morgan', 'Mauro', 'gatto', 'soriano');
const pet3 = new Pet('Pluto', 'Michele', 'cane', 'dobbermann');
console.log(pet1.haLoStessoPadrone(pet2));
console.log(pet1.haLoStessoPadrone(pet3));

const pets = [];

const btnAdd = document.getElementById("button");
const form = document.getElementById("Pet_form");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    return;
  }
  const petName = document.getElementById("petName");
  const ownerName = document.getElementById("ownerName");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");

  const animal = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  pets.push(animal);
  aggiungi();
  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
});

const aggiungi = () => {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";
  pets.forEach((element) => {
    const row = document.createElement("div");
    row.classList.add("row");
    const colPetName = document.createElement("div");
    colPetName.classList.add("col-3", "text-center", "border", "border-1");
    colPetName.innerText = element.petName;
    const colOwnerName = document.createElement("div");
    colOwnerName.classList.add("col-3", "text-center", "border", "border-1");
    colOwnerName.innerText = element.ownerName;
    const colSpecies = document.createElement("div");
    colSpecies.classList.add("col-3", "text-center", "border", "border-1");
    colSpecies.innerText = element.species;
    const colBreed = document.createElement("div");
    colBreed.classList.add("col-3", "text-center", "border", "border-1");
    colBreed.innerText = element.breed;
    row.append(colPetName, colOwnerName, colSpecies, colBreed);
    petList.appendChild(row);
  });
};
