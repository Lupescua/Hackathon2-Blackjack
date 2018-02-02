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