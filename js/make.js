var dealerCards = [];  // Arrays holding the DisplayCard objects used to show the cards
var playerCards = [];

dealerCards.count = 0;  // Number of cards actually in the dealer's hand
playerCards.count = 0;   // Number of cards actually in the player's hand

// var deck = new Deck();

var gameInProgress = false;
var hit = $('$hitbtn');


// Create and shuffle a deck of cards

function generateDeck(){
    var deck = [];

    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    for(var s = 0; s < suits.length; s++){
        for(var v = 0; v < values.length; v++){

            deck.push({
                'suit': suits[s],
                'value': values[v],
                'reversed': false
            });
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    var counter = deck.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random indexx§
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = deck[counter];
        deck[counter] = deck[index];
        deck[index] = temp;
    }

    return deck;
}



// Create two BlackjackHands, userHand and dealerHand -


if(card.value )
$('#dealer_score')= parseInt('#dealer_score')+card[i].value;

function Dealer(card) {

	this.card[{'suit': suits[s]},
    {'value': values[v]},
    {'reversed': false}],


    this. sum = card[{1.value}]+card[{2.value}]+card[{3.value}],

	this.info = function() {
        return this.sum;
    }

function Player1(card) {
	this.card[{'suit': suits[s]},
    {'value': values[v]},
    {'reversed': false}],
this. sum: card[{1.value}]+card[{2.value}]+card[{3.value}],

	this.info = function() {
        return this.sum;
    }

// Deal two cards into each hand

// my comment: Function which targets a user, and gives him 1 card.

function Deal(target, card){
    deck
// append the users deck with his card

}

// Check if dealer has blackjack (if so, game ends)
// Check if user has blackjack (if so, game ends)

// my comment: Create a check value of user deck.
function user_deck(target){

}

// User draws cards (if user goes over 21, game ends)
// Dealer draws cards
// Check for winner


function yes(){
    var cardsInHand = [];
    var our_card = deck.pop();
    cardsInHand.push(our_card);
    $('#dealercards').append('<div class="card ' + our_card.suit+ '-' + our_card.value+ ' "></div>');
}

function smt_else(){
var cardsInHand = [];
var our_card = deck.pop();
cardsInHand.push(our_card);

$('#playercards').append('<div class="card ' + our_card.suit+ '-' + our_card.value+ ' "></div>');


}