
const nomeInput = document.getElementById('nameInput');
const btnSave = document.getElementById('salva');
const btnRemove = document.getElementById('remove');
const savedNameDiv = document.getElementById('savedName');
const nameSaved = document.getElementById('nomeSalvato');

// Funzione per salvare il nomeInput nel localStorage
btnSave.addEventListener('click',function(e) {
    e.preventDefault();
    localStorage.setItem('name',nomeInput.value);
    nameSaved.innerText=(`Il nome salvato è ${nomeInput.value}`);
    nomeInput.value = '';
})

// Funzione per rimuovere il nomeInput salvato dal localStorage
btnRemove.addEventListener('click',function(e) {
    e.preventDefault();
    localStorage.removeItem('name',nomeInput.value);
    nomeInput.value = '';
})


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