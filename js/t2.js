window.onload = function() {

    /*
    - I created this game after following several tutorials, then starting from scratch

    TO DO:
    - Work with a side deck, so that the player cannot receive cards that are already into play right after shuffling
    - There is no 'split' function yet
    - Better to execute init() function 'on load' (window.onload = init)
    */

    init();

    function init() {

        hitButton = document.getElementById('hit');
        standButton = document.getElementById('stand');
        continueButton = document.getElementById('nextRound');
        hitButton.onclick = hitPlayer;
        standButton.onclick = hitDealer;
        continueButton.onclick = playRound;

        blackJack = false;
        roundOver = false;
    }

    // Create a card object
    function Card(number, suit) {
        var number = number;
        var suit = suit;

        // Get the number value of the card (11 for aces, 10 for face cards)
        this.getValue = function() {
            switch(number) {
                case 1: return 11
                break;
                case 11:
                case 12:
                case 13: return 10
                break;
                default: return number;
            }
        }

        // Get the suit of the card: 1 = hearts, 2 = diamonds, 3 = spades, 4 = clubs
        this.getSuit = function () {
            return suit;
        }

        // Create the img url for the src attribute. We will use an img element to draw the card on screen

        this.getCardImage = function() {
            var suitName, CardName;
            var sourceRoot="img/Cards/";

            switch(suit) {
                case 1:
                    suitName="hearts";
                    break;
                case 2:
                     suitName = "diamonds";
                     break;
                case 3:
                     suitName = "spades";
                     break;
                case 4:
                     suitName = "clubs";
                     break;
                default:
                    suitName = "Error";
            };

            switch(number) {
                case 1:
                     cardName = "ace";
                     break;
                case 11:
                    cardName="jack";
                    break;
                case 12:
                     cardName = "queen";
                     break;
                case 13:
                     cardName = "king";
                     break;
                default:
                    cardName = number;
            };

            return (sourceRoot + cardName + '_of_' + suitName + '.svg');

        }

        this.writeToConsole = function() {

            console.log('Card value: ' + this.getValue());
            console.log('Card number: ' + number);
            console.log('Card suit: ' + suit);
            console.log('img url: ' + getCardImage());
        }

    }

    // Create a hand object - array of card objects
    function Hand(deck) {

        var cardArray = [];

        // Display the current hand on the screen
        this.show = function(hideSecondCard) {

            // If hideSecondCard argument is 1, then show second card face down
            var cardsInHand = [];
            var imgArray = [];
            var area;

            // Check if the object we got is the dealer hand or the player hand, and get the proper DOM element

            if(this === playerHand) {
                area = document.getElementById("playerCards");
            } else if (this === dealerHand) {
                area = document.getElementById("dealerCards");
            }

            // Remove current children for player or dealer area

            while (area.firstChild) {
                area.removeChild(area.firstChild);
            }

            for(var i=0; i<cardArray.length; i++) {
                // Create an img DOM element to use later
                cardsInHand[i] = document.createElement("img");

                if(hideSecondCard === 1) {
                    imgArray[0] = cardArray[0].getCardImage();
                    imgArray[1] = "img/Cards/red_joker.svg"
                }
                else {
                    imgArray[i] = cardArray[i].getCardImage();
                }

                cardsInHand[i].src = imgArray[i];
                cardsInHand[i].width = '80';
                cardsInHand[i].height = '100';

                area.appendChild(cardsInHand[i]);

            }

        }

        // Get the total score of the current hand
        this.getScore = function() {
            var totalValue = 0;
            var tempVal;
            var acesAmount = 0;

            // Handle aces: count the total amount and if the total value > 21, decrease by 10
            for(var i=0; i<cardArray.length; i++) {
                tempVal = cardArray[i].getValue();

                if(tempVal == 11) {
                        acesAmount++;
                    }

                totalValue = totalValue + tempVal;

                while(totalValue > 21 && acesAmount >0) {
                    totalValue = totalValue - 10;
                    acesAmount--;
                }
            }

            return totalValue;
        }

        // Create the first hand for the game. Uses the deck object passed in the hand object constructor function

        this.makeFirstHand = function() {
            cardArray = [deck.hit(), deck.hit()];
        }

        this.addCard = function() {
            var newCard = deck.hit();
            cardArray.push(newCard);
        }


        this.hasBlackJack = function() {
            if(this.getScore() == 21 && roundOver == false) {
                roundOver = true;
                return true;
            } else {
                return false;
            }
        }

        this.isBusted = function() {
            if(this.getScore() > 21) {
                return true;
            } else {
                return false;
            }
        }

        this.writeToConsole = function() {
            console.log('Hand score: ' + this.getScore());
            console.log('Has blackjack: ' + this.hasBlackJack());
            console.log('Is busted: ' + this.isBusted());
        }
    }

    // Create a deck object - array of card objects
    function Deck() {
        var deck = [];
        this.fill = function() {
            for(var x=0; x<=4; x++) {
                for (var i = 0; i < 13; i++) {
                    deck[i+(x*13-13)] = new Card(i+1, x);
                }
            }
        }

        this.show = function() {
            for (var i=0; i<deck.length; i++) {
            console.log(deck[i].getCardImage());
            }
        }

        this.shuffle = function() {
            var deckLength = deck.length;
            var randIndex, tempIndex;
            while(--deckLength > 0) {
                randIndex = Math.floor(Math.random() * (deckLength));
                tempIndex = deck[randIndex];
                deck[randIndex] = deck[deckLength];
                deck[deckLength] = tempIndex;
            }
        }

        this.hit = function() {
            var deckLength = deck.length;

            if(deckLength <1) {
                displayMessage('Shuffling the deck again'); // Todo: check if this works correctly
                console.log('Shuffling the deck again');
                this.fill();
                this.shuffle();
            }

            return (deck.pop(deckLength));
        }
    }

    function hitPlayer() {
        playerHand.addCard();
        playerHand.show();

        if(playerHand.isBusted()) {
            hitDealer();
        }
    }

    function decideWinner() {

        // Note: we already checked for blackjack in the playRound function
        var playerScore = playerHand.getScore();
        var dealerScore = dealerHand.getScore();
        var playerBust = playerHand.isBusted();
        var dealerBust = dealerHand.isBusted();

        // Round is over, so we can show the dealer hand
        dealerHand.show();

        // First check if player is bust
        if (playerBust) {
            if(dealerBust) {
                displayMessage('Both you and the dealer are busted.');
                resetButtons();
            } else {
                displayMessage('You are busted. Dealer wins.');
                resetButtons();
            }
        }

        // Then check if dealer is bust
        else if(dealerBust) {
            displayMessage("Dealer is busted. You win.");
            resetButtons();
        }

        // If neither are bust, compare their scores and display a message
        else {
            if(playerScore > dealerScore) {
                displayMessage("You have the higher score (" + playerScore + "). You win.");
                dealerHand.show();
                resetButtons();
            } else if(playerScore < dealerScore) {
                displayMessage("Dealer has the higher score (" + dealerScore + "). Dealer wins.");
                dealerHand.show();
                resetButtons();
            } else {
                  displayMessage("Same score. It's a draw.");
                dealerHand.show();
                  resetButtons();
            }
          }


        // Play the next round

        // We set roundOver to false. The hand.hasBlackJack() method uses this to determine if someone has blackjack or just the score of 21
        roundOver = false;

    }

    function displayMessage(msg) {
        var message = document.getElementById('message');
        message.innerHTML = msg;
    }

    function hitDealer() {
        // Let Computer draw cards. This function is called when player is busted or pressed the 'stand' button

        // Let the dealer pick additional cards until score is at least 17
        // If there are any Aces and the score if above 21, decrease score by 10 until score is below 21 or there are no more aces

        while (dealerHand.getScore() < 17) {
            displayMessage("I will take another card");
            dealerHand.addCard();
            dealerHand.show();

            if(dealerHand.isBusted()) {
                displayMessage("Dealer is busted!");
                dealerHand.show();
                setButtons();
            }
        }

        // Once the dealer has picked his cards, we can decide the winner
        decideWinner();
    }


    // Reset buttons so that only 'next round' is active
    function resetButtons() {
        hitButton.disabled = true;
        standButton.disabled = true;
        continueButton.disabled = false;
    }

    // Set buttons so that it is only possible to 'hit' or 'stand'
    function setButtons() {
        hitButton.disabled = false;
        standButton.disabled = false;
        continueButton.disabled = true;
    }

    function playRound() {

        // Set up and reset a number of things
        setButtons();

        dealerHand = new Hand(gameDeck);
        playerHand = new Hand(gameDeck);

        displayMessage("Push 'Hit' to get another card, 'stand' to finish your turn.");
        // Create the first hand for the player and the dealer

        dealerHand.makeFirstHand();
        playerHand.makeFirstHand();

        var dealerBj = dealerHand.hasBlackJack();
        var playerBj = playerHand.hasBlackJack();

        // If one of the player has Blackjack, show cards and custom victory message
        if(dealerBj || playerBj) {

            // If either one has blackjack, show both hands and reset the buttons

            dealerHand.show(0);