'use strict'

// prompt per chiedere email 
const emailUser = prompt("inserisci il tuo indirizzo email");

// array per lista email autorizzate

const authorizedUser = [
"utente1@boolean.com",
"utente2@boolean.com",
"utente3@boolean.com"
];


// cilco for per verificare se utente e autorizzato

let authorized = false;

for (let email = 0; email < authorizedUser.length; email++) {
    if (authorizedUser[email] === emailUser) {
        authorized = true;
    }
}

// messaggio di autorizzazione 

if (authorized) {
    console. log("Benvenuto, email riconosciuta");
} else {
    console.log("Email non valida, accesso negato")
}