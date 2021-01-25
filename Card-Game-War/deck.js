// SUITS GLOBAL CONSTANT VARIABLES
// const SUITS = ['&hearts;','&diams;','&spades;','&clubs;'];
const SUITS = ['♥','♦','♠','♣'];
const VALUES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

export default class Deck{
    constructor(cards = FreshDeck()){
        this.cards = cards
    }

    get numberOfCards(){
        return this.cards.length
    }

    pop(){
        // shift takes the top element takes it off and returns with it
        return this.cards.shift();
    }

    push(card){
        this.cards.push(card)
    }

    // lets create a method to shuffle our cards
    shuffle(){
        for(let i = this.numberOfCards -1;i>0;i--){
            // we will generate a new index, from the range of indexes we has not looped over yet, to cahnge with the original index
            const newIndex = Math.floor(Math.random() * (i+1))
            // we want to swap this.cards[i] and this.cards[newIndex]
            // temp = a; a=b; b= tmp;
            const tmp = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = tmp
        }
    }
}

class Card{
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }

    get color(){
        return this.suit === '♠' ||  this.suit === '♣' ?  'black' : 'red';
    }

    getHTML(){
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = this.suit;
        cardDiv.classList.add("card",this.color);
        cardDiv.dataset.value = `${this.value}${this.suit}`;
        return cardDiv;
    }
    
}

function FreshDeck(){
    //  we have to use flatMap() otherwise we would end up getting [Array(13),Array(13),Array(13),Array(13)] instead of Array(52)
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit,value);
        })
    })

    
}