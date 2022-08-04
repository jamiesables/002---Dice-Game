'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const scores = [0,0];
let stillPlaying = true;

//Who is currently playing
let activePlayer = 0;

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnHowTo = document.querySelector('.btn--howto')

//Starting conditions - Setting player scores to 0 and hiding dice
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
let currentScore = 0;

const switchPlayer = function() {
document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
player0El.classList.toggle('player--active')
player1El.classList.toggle('player--active')
}



//Making the dice roll
btnRoll.addEventListener('click', function() {

//if else statement to see if the game is still going, if it's not and it's game over, we freeze all buttons.
if (stillPlaying) {

// 1. Generate random dice roll
const dice = Math.trunc(Math.random() * 6) + 1;

// 2. Display image
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`

// 3. Check if dice roll is one and if true, select next player
if (dice !== 1) {

currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;

} else { //Switch to next player
switchPlayer();
}
}
})

btnHold.addEventListener('click', function() {

if (stillPlaying) {

// Add current score to score of active player
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

//Check score is >= 100

if (scores[activePlayer] >= 100) {
stillPlaying = false;
diceEl.classList.add('hidden');
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
} else {
switchPlayer();
}
}
});


//RESET GAME BUTTON

btnNew.addEventListener('click', function() {
    //scores = [0,0];
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    activePlayer = 0;
    switchPlayer();
})
