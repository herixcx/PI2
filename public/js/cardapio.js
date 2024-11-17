const linkAlmoco = document.getElementById('linkAlmoco');
const linkJantar = document.getElementById('linkJantar');
const almocoDiv = document.getElementById('almoco');
const jantarDiv = document.getElementById('jantar');

function mostrarDiv(divMostrar, divEsconder) {
    divMostrar.classList.remove('hidden');
    divEsconder.classList.add('hidden');
}

linkAlmoco.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarDiv(almocoDiv, jantarDiv);
});

linkJantar.addEventListener('click', (event) => {
    event.preventDefault(); 
    mostrarDiv(jantarDiv, almocoDiv);
});