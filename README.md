ESERCIZIO MAIL

Per svolgere l'esercizio partiremo dalla creazione del prompt dove si chiede di inserire indirizzo email:

const emailUser = prompt("inserisci il tuo indirizzo email");

unavolta che l'utente ha inserito il suo indirizzo email js dove scorrere nella lista di email che sono abilitate all'accesso. 
Per renderlo possibile possiamo utilizzare un arrey:

const authorizedUser = [
    inserire mail campione 
]

ora che abbiamo la lista a cui fare riferimento bisogna creare la condizione per la quale si possa dire se un utente e autorizzato o meno, per farlo posso creando un ciclo for cosi che l'applicativo va a effettivamente nella lista e creo la costante authorized alla quale poi andremo un valore true (Boolean value vedi w3schools)

let authorized;
for (let email = 0; email < authorizedUser.lenght; i++) {
    if (authorizedUser[email] === emailUser) {
        authorized = true;
    }
}

ora l'applicativo e in grado di stabilire su una mail ha l'autorizzazione o meno, pero dobbiamo far si che venga anche stampato un messaggio che confermi se il processo e andato a buon fine o meno 

per fare queso passaggio basta usare nuovamente la condizionale if unito a consle.log

if (authorized) {
    console. log("Benvenuto, email riconosciuta);
} else {
    console.log(Email non valida, accesso negato)
}


ESERCIZIO DADI

Per risolvere questo esercizio dobbiamo iniziare dal stabilire quanti lanci ci devono essere per ogni giocatore dunque:

const diceRoll = 3 cosi ci saranno tre lanci per giocatore

poi per tenere traccia dei tiri dei giocatori possiamo usare la struttura degli arreay dato che i lanci sono valori csuali non possiao inserire i valori subito dentro gli array quindi andranno lasviati vuoti

const player1Roll = []
const player2Roll = []


ora e il momento di creare la generazione dei numeri casuali per fare cio useremo il ciclo for e math method 

for (let roll = 0; roll < diceRoll; roll++) cosi abbimo stabilito entrata e uscita del ciclo. {
    player1roll.push(Math.round(Math.random() * 5) + 1)
    player2roll.push(Math.round(Math.random() * 5) + 1)

    ho usato push per aggiungere un nuovo oggetto alla fine dell'array mentre Math.round e Math.random mi danno un numero casuale intero
}

ora che i lanci csuali dei dadi sono stati creati dobbiamo passare al calcolo del punteggio totale per farlo creeremo un altro ciclo for 

creaimo le variabili:

let player1Score = 0
let player2Score = 0

for (score = 0; < diceRoll; score++) {
    player1Score += player1roll[score] 
    player2Score += player2roll[score]
}

stampiamo nella console i risultati

console.log("punteggi giocatore 1: player1Score")
console.log("punteggi giocatore 2: player2Score")

determiniamo chi ha vinto tramite una modale 

if (player1Score > player2Score) {
    console.log(Giocatore 1 ha vinto!)
} else if (player2Score > player1Score) {
    console.log(Giocatore 2 ha vinto!)
} else {
    console.log(Pareggio!)
}









