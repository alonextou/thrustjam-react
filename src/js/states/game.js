var React = require('react');
var ReactDOM = require('react-dom');
var Deck = require('../objects/deck.js');

var Game = React.createClass({

	getInitialState: function(){
        return {
            playerScore: 0,
            opponentScore: 0,
            deck: 'thrustjam1',
        }
    },

	render: function() {
		return (
			<div id="game-wrapper" className="center-align valign-wrapper">
				<div id="game" className="row">
					<div className="col m12 l4">
						<Deck />
					</div>
					<div className="col m12 l4">
						<button id="btn-battle" className="btn btn-large waves-effect waves-light" onClick={this.battle}>BATTLE</button>
					</div>
					<div className="col m12 l4">
						<Deck />
					</div>
				</div>
			</div>
		);
	},

	battle: function() {
		ReactDOM.unmountComponentAtNode(document.getElementById('main'));
		ReactDOM.render(
			<Game />,
			document.getElementById('main')
		);
	}

});

module.exports = Game;