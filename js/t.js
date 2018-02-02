window.onload = function() {

    init();

        function init() {

            hitButton = document.getElementById('hitBtn');
            standButton = document.getElementById('standBtn');
            hitButton.onclick = hitPlayer;
            standButton.onclick = hitDealer;



        }


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


    // function  start(){
    // var count = 0;
    // for(i=0; i<10; i++){
    //     count++;

    // }
    // function yes(){


    //     var cardsInHand = [];
    //     var our_card = deck.pop();
    //     cardsInHand.push(our_card);
    //     $('#dealercards').append('<div class="card ' + our_card.suit+ '-' + our_card.value+ ' "></div>');
    // }

    // }




    function Hand(deck){


        if(this === playerHand) {
            area = document.getElementById("playerCards");
        } else if (this === dealerHand) {
            area = document.getElementById("dealerCards");
        }





     for(var i=0; i<cardArray.length; i++) {
        var our_card = deck.pop();
        cardsInHand.push(our_card);
        $('#dealercards').append('<div class="card ' + our_card.suit+ '-' + our_card.value+ ' "></div>');

        area.appendChild(cardsInHand[i]);

    }


    }





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

    // function yes(){
    //         var cardsInHand = [];
    //         var our_card = deck.pop();
    //         cardsInHand.push(our_card);
    //         $('#dealercards').append('<div class="card ' + our_card.suit+ '-' + our_card.value+ ' "></div>');
    //  }

    //  function smt_else(){
    //     var cardsInHand = [];
    //     var our_card = deck.pop();
    //     cardsInHand.push(our_card);

    //     $('#playercards').append('<div class="card ' + our_card.suit+ '-' + our_card.value+ ' "></div>');


    //  }


     }


