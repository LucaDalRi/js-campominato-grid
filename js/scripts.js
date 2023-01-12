// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.

const bottoneDom = document.getElementById("bottone-sul-dom");

const containerCelle = document.getElementById('container-celle');

bottoneDom.addEventListener('click' , generaCelle);

const numeriGenerati = [];


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

    let randomNumber = getRandomNumber(1, 100);

    while(numeriGenerati.includes(randomNumber)){
        randomNumber = getRandomNumber(1, 100);
    }

    numeriGenerati.push(randomNumber);
    
    cella.append(randomNumber);

    if(randomNumber % 2 == 0){
        cella.classList.add('even');
    }

    else {
        cella.classList.add('odd');
    }


    return cella;

};






