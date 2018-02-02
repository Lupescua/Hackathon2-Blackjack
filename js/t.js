// Create and shuffle a deck of cards - we already have this





// Create two BlackjackHands, userHand and dealerHand -

function Dealer(color, name, x, y, mouth, facing) {
	this.color = color;
	this.name = name;
	this.x = x;
	this.y = y;
	this.facing = facing;
	this.mouth = mouth;

	this.info = function() {
		return this.color + ' ' + this.name;
    }

function Player1(color, name, x, y, mouth, facing) {
    this.color = color;
    this.name = name;
    this.x = x;
    this.y = y;
    this.facing = facing;
    this.mouth = mouth;

    this.info = function() {
        return this.color + ' ' + this.name;
    }

// Deal two cards into each hand


// Check if dealer has blackjack (if so, game ends)
// Check if user has blackjack (if so, game ends)


// User draws cards (if user goes over 21, game ends)
// Dealer draws cards
// Check for winner