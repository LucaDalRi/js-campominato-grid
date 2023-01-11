// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.

const bottoneDom = document.getElementById("bottone-sul-dom");

const containerCelle = document.getElementById('container-celle');

bottoneDom.addEventListener('click' , generaCelle);


function generaCelle () {

    for (let i = 0; i < 100; i++) {

        containerCelle.innerHTML += '<div class="cella invisibile"></div>';
        
    }

    console.log('cliccato!');
}
