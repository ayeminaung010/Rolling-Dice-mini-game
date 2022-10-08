'use strict';

const newGameBtn = document.querySelector('.newGameBtn');
const rollDiceBtn = document.querySelector('.rollDiceBtn');
const holdBtn = document.querySelector('.holdBtn');

const currentPlayerOne = document.querySelector('.currentPlayer0');
const currentPlayerTwo = document.querySelector('.currentPlayer1');

const image = document.querySelector('.imageDice');

const player1 = document.querySelector('.player1');
const player0 = document.querySelector('.player0')
const finalScore0 = document.querySelector('.finalScore0');
const finalScore1 = document.querySelector('.finalScore1');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

image.style.display = 'none';
currentPlayerOne.textContent = 0;
currentPlayerTwo.textContent = 0;
//swith player
const switchPlayer = () =>{
    currentScore = 0 ;
    document.querySelector(`.currentPlayer${activePlayer}`).textContent = 0;
    player1.classList.toggle('switchPlayer');
    player0.classList.toggle('switchPlayer');
   activePlayer = activePlayer === 0? 1:0 ;
};

//dice rolling button
rollDiceBtn.addEventListener('click',() =>{
    image.style.display = 'block';
    const randomNo =  Math.trunc(Math.random()*6) +1;
    image.src = `./dice-${randomNo}.png`;
    
    if(randomNo !== 1){
        currentScore += randomNo;
        document.querySelector(`.currentPlayer${activePlayer}`).textContent = currentScore;
    }else{
        
        switchPlayer();
    }
    
}) 

//hold btn (switch player)
holdBtn.addEventListener('click',() =>{
    scores[activePlayer] += currentScore;
    
    document.querySelector(`.finalScore${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        document.querySelector(`.player${activePlayer}`).classList.add('winner');
        rollDiceBtn.classList.add('btnRemove');
        holdBtn.classList.add('btnRemove');
    }
   switchPlayer();

})

//Game restart btn
newGameBtn.addEventListener('click',()=>{
    const scores = [0,0];
    let currentScore = 0;
    let activePlayer = 0;
    
    image.style.display = 'none';
    currentPlayerOne.textContent = 0;
    currentPlayerTwo.textContent = 0;
    rollDiceBtn.classList.remove('btnRemove');
    holdBtn.classList.remove('btnRemove');
    document.querySelector(`.player${activePlayer}`).classList.remove('winner');
    finalScore0.textContent = 0;
    finalScore1.textContent = 0;
})
