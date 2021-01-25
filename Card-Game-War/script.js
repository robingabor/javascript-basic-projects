import Deck from './deck.js';

const CARD_VALUE_MAP = {
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14
}

const computerDeckElement = document.querySelector(".computer-deck");
const computerCartSlot = document.querySelector(".computer-card-slot");
const text = document.querySelector(".text");
const playerDeckElement = document.querySelector(".player-deck");
const playerCartSlot = document.querySelector(".player-card-slot");

let playerDeck, computerDeck, stop;
// we need a flag to show if the card is flipped or not
let inRound = false;

document.addEventListener('click', ()=>{
    if(stop){
        // we want to restart the game if it is stopped(someone won)
        startGame()
        return;
    }    
    if(inRound){
        cleanBeforeRound()
    }else{
        flipCards()
    }
})

startGame()

function startGame(){
    const deck = new Deck();
    // This going to randomize our deck
    deck.shuffle();

    // Lets split the dexk into 2 equal parts
    // First we need the midpoint of our deck wich will be equal to 26 at the beginning
    const deckMidPoint = Math.ceil(deck.numberOfCards / 2);
    playerDeck = new Deck(deck.cards.slice(0, deckMidPoint));
    computerDeck = new Deck(deck.cards.slice(deckMidPoint,deck.numberOfCards));

    inRound = false;
    stop = false;

    console.log(playerDeck);
    console.log(computerDeck);

    cleanBeforeRound();
}

function cleanBeforeRound(){
    inRound = false;
    // we have to clean the table, before every round otherwise all the flipped cards would be there
    computerCartSlot.innerHTML = '';
    playerCartSlot.innerHTML = '';
    text.innerText = '';
     
    // Finally lets update our deck count
    updateDeckCount()
}

function flipCards(){
    // we now in a middle of a round
    inRound = true;
    // we need 1 card from the computer and from the player as well.
    const playerCard  = playerDeck.pop()
    const computerCard = computerDeck.pop()
    // now we have the cards we have to append them
    computerCartSlot.appendChild(computerCard.getHTML());
    playerCartSlot.appendChild(playerCard.getHTML());

    updateDeckCount()

    if(isRoundWinner(playerCard,computerCard)){
        // in case the player win the computer's card chould be pushed
        // in the players deck and his own card of course
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
        text.innerText = 'Win';
    }else if(isRoundWinner(computerCard,playerCard)){
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
        text.innerText = 'Loose!';
    }else{
        computerDeck.push(computerCard)
        playerDeck.push(playerCard)
        text.innerText = 'Draw';
    }

    if(isGameOver(playerDeck)){
        text.innerText = 'You Loose!!4!';
        stop = true;
    }else if(isGameOver(computerDeck)){
        text.innerText = 'You Win, Bravoo !!4!';
        stop = true;
    }
}

function updateDeckCount(){
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText  = playerDeck.numberOfCards
}

function isRoundWinner(cardOne,cardTwo){
    // with the help of our map object we can compate numeric values 
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]   
    
}

function isGameOver(deck){
    return deck.numberOfCards === 0;
}
