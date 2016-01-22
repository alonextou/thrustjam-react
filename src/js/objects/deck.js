var React = require('react');
var deckValues = require('json!../../decks/thrustjam1.json');

var Deck = React.createClass({

	getInitialState: function(){
        return {
        	deckName: 'thrustjam1',
        	cards: [],
            cardCount: 0,
            currentCard: {
            	id: 0,
            	dmg: 0
            }
        }
    },

	render: function() {
		return (
			<img src={'/assets/images/cards/' + this.state.deckName + '/' + this.state.currentCard.id + '.jpg'} />
		);
	},

	componentWillMount: function() {
		this.getCards(this.setCards);
	},

	getCards: function (setCards) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/assets/decks/' + this.state.deckName + '.json');
		xhr.send(null);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				deckObject = JSON.parse(xhr.responseText);
				setCards(deckObject);
			}
		};
	},

	setCards: function(deckObject) {
		var shuffledCards = this.shuffleCards(deckObject);
		this.setState({
			cards: shuffledCards,
			currentCard: shuffledCards[this.state.cardCount]
		});
 	},

 	shuffleCards: function(deckObject){
 		var o = deckObject;
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
 	}

});

module.exports = Deck;