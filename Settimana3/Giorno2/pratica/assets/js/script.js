
const nomeInput = document.getElementById('nameInput');
const btnSave = document.getElementById('salva');
const btnRemove = document.getElementById('remove');
const nameSaved = document.getElementById('nomeSalvato');

// Funzione per salvare il nomeInput nel localStorage
btnSave.addEventListener('click',function(e) {
    e.preventDefault();
    localStorage.setItem('name',nomeInput.value);
    salvato();
})

// Funzione per rimuovere il nomeInput salvato dal localStorage
btnRemove.addEventListener('click',function(e) {
    e.preventDefault();
    localStorage.removeItem('name',nomeInput.value);
    localStorage.clear(nomeInput);
})

//Funzione per mostrare il nome 
function salvato() {
    const nome = localStorage.getItem('name');
    if(nome || nome === nome ) {
        nameSaved.value = nome;
    }else {
        nameSaved.value = 'None';
    }
}

const init = () => {
    let tempo = sessionStorage.getItem('tempoSessione') || 0;               // ottengo il tempo trascorso oppure metto 0
    const p = document.getElementById('tempoSessione');                     // nella const p memorizzo tempoSessione
    p.innerText = `Sei nella sessione da ${tempo} secondi`;
    setInterval(() => {
        tempo++;
        p.innerText = `Sei nella sessione da ${tempo} secondi`;
        sessionStorage.setItem('tempoSessione', tempo);                     // setto con setItem all'id tempoSessione la variabile tempo
    }, 1000);
};

window.addEventListener('load', init);