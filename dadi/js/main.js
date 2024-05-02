'use strict'

// costante per decidere numero di lancio dei dadi

const diceRoll = 3;

//  array per tenere traccia dei risultati dei giocatori

const player1Roll = [];
const player2Roll = [];

// generare numeri casuali da 1 a 6

for (let roll = 0; roll < diceRoll; roll++) {
    player1Roll.push(Math.round(Math.random() * 5) + 1);
    player2Roll.push(Math.round(Math.random() * 5) + 1);
}

// calcolare il punteggio di ogni giocatore

let player1Score = 0;
let player2Score = 0;

for (let score = 0; score < diceRoll; score++) {
    player1Score += player1Roll[score];
    player2Score += player2Roll[score];
}

// stampo nella console i risultati

console.log("punteggi giocatore 1:", player1Score);
console.log("punteggi giocatore 2:", player2Score);

// determino chi ha vinto

if (player1Score > player2Score) {
    console.log("Giocatore 1 ha vinto!");
} else if (player2Score > player1Score) {
    console.log("Giocatore 2 ha vinto!");
} else {
    console.log("Pareggio!");
}

