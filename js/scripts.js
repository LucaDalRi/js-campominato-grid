// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.

const bottoneDom = document.getElementById("bottone-sul-dom");

const containerCelle = document.getElementById('container-celle');

bottoneDom.addEventListener('click' , generaCelle);

const numeriGenerati = [];

let numeroInFila = 0;

let counterCelle = 0;

const arrayBombe = [];

bottoneDom.addEventListener('click' , numeroUnoSedici);

function numeroUnoSedici() {

    let randomNumberSedici = getRandomNumber(1, 100);
    
    for (let i = 0; arrayBombe.length < 16; i++) {

        randomNumberSedici = getRandomNumber(1, 100);

        if (arrayBombe.includes(randomNumberSedici)) {

            randomNumberSedici = getRandomNumber(1, 100);

        }

        arrayBombe.push(randomNumberSedici);

    }

    console.log('Numeri delle bombe ' + arrayBombe);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generaCelle () {

    containerCelle.innerHTML = '';  
    
    for (let i = 0; i < 100; i++) {
        
        const nuovaCella = creaNuovaCella();

        containerCelle.append(nuovaCella);
        
    }
    
};

function creaNuovaCella() {
    
    const cella = document.createElement('div');

    cella.classList.add('cella');
    
    cella.addEventListener('click' ,
    
        function () {

            console.log(cella.innerText);

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
            }
            else{
                this.classList.add('clicked');
            }

        }
    
    );

    cella.addEventListener('click' ,

    function () {
        
        for (let i = 0; i < 16; i++) {
            
            if (arrayBombe[i] == cella.innerText) {
                
                cella.classList.add('rosso');
                
                alert('Hai perso!');
                
                break;
                
            }
            else if (counterCelle > 15) {
                
                alert('Hai vinto!');

                break
                
            }
            else {

                cella.classList.add('verde');

            }
        }
        
    });

    let randomNumber = getRandomNumber(1, 100);

    while(numeriGenerati.includes(randomNumber)){
        randomNumber = getRandomNumber(1, 100);
    }

    numeriGenerati.push(randomNumber);

    if(numeroInFila < 101) {

        numeroInFila++;

    }
    
    cella.append(numeroInFila);
    
    if(randomNumber % 2 == 0){
        cella.classList.add('even');
    }

    else {
        cella.classList.add('odd');
    }


    return cella;

};







