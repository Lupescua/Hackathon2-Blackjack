


    function generateDeck(){
        var deck = [];

        var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
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



    function calcValue(card) {
        switch(card.value) {
            case 'ace': return 1
            case 'jack':
            case 'queen':
            case 'king': return 10
            default: return parseInt(card.value);
        }
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



    this.getValue = function() {

    }



//render card

function renderCard(card, divID){
    if (card.reversed == true){
        $('#'+divID).append('<div class="card reversed"></div>');
    } else {

        $('#'+divID).append('<div class="card ' + card.suit+ '-' + card.value+ ' "></div>');
    }
}






//dealer
function yes(val){
    var cardsInHand = [];
    var our_card = deck.pop();
    cardsInHand.push(our_card);
    our_card.reversed = val;
    renderCard(our_card, 'dealercards');

    if(our_card.reversed === false ){
        var value = calcValue(our_card);
        dealerSum = dealerSum + value;
        $('#dealersum').val(dealerSum);
        console.log('something');
    }

}

$( document ).ready(function() {

    yes(false);
    yes(true);

    });

    $("#standBtn").click(function() {
        yes(false);
      });



    ///player
    function smt_else(val){
    var cardsInHand = [];
    var our_card = deck.pop();
    cardsInHand.push(our_card);
    our_card.reversed = val;
    renderCard(our_card, 'playercards')

    var value = calcValue(our_card);
    playerSum = playerSum + value;
    $('#playersum').val(playerSum);
}

var playerSum = 0;
var dealerSum = 0;

$("#hitBtn").click(function() {
    smt_else(false);
  });





