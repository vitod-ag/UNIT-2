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
}

const btnAdd = document.getElementById('button');
const animali = [];

btnAdd.addEventListener('click', function(e) {
        e.preventDefault();

        let petName = document.getElementById('petName').value;
        let ownerName = document.getElementById('ownerName').value;
        let species = document.getElementById('species').value;
        let breed = document.getElementById('breed').value;

        let pet1 = new Pet(petName, ownerName, species, breed);
        animali.push(pet1);
        mostra();
});

// ora che ho l'animale da confrontare, mi rimane confrontarlo e mostrarlo

function comparaPadrone(proprietario) {
  return this.ownerName === proprietario.ownerName;
}

function mostra () {
    console.log(animali);
    let lista = document.getElementById('petList');
    lista.innerHTML = '';   //la svuoto come prima cosa
    for (let i = 0; i < animali.length; i++) {
      let listItem = document.createElement('li');
      listItem.innerText = `Nome: ${animali[i].petName},Proprietario: ${animali[i].ownerName}, Specie: ${animali[i].species}, Razza: ${animali[i].breed}`;
      // Confronta se l'animale corrente ha lo stesso proprietario di un altro animale
      for (let j = 0; j < animali.length; j++) {
        if (i !== j && comparaPadrone(animali[i], animali[j])) {
            listItem.innerText += `, Ha lo stesso proprietario di ${animali[j].petName}`;
        }
    }
    
    lista.appendChild(listItem);      
}
}