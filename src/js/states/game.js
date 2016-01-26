var React = require('react');
var ReactDOM = require('react-dom');
var Player = require('../objects/player.js');
var Deck = require('../objects/deck.js');
var Message = require('../objects/message.js');

var Game = React.createClass({

	getInitialState: function(){
        return {
            playerHealth: 100,
            playerName: 'Player',
            enemyHealth: 100,
            enemyName: 'Enemy',
            currentRound: 0,
            deck: 'thrustjam1',
        }
    },

    componentDidUpdate: function() {
    	console.log('GAME DID UPDATE, round: ' + this.state.currentRound);

    	if(this.state.enemyHealth <= 0 || this.state.playerHealth <= 0){
    		if(this.state.enemyHealth > this.state.playerHealth) {
    			alert('Game over!')
    		} else {
    			alert('Game over!')
    		}
    	}
    	
	},

	render: function() {
		return (
			<div id="game-wrapper" className="center-align valign-wrapper">
				<div id="game" className="row">
					<div className="player col s12 l4">
						<Player ref="player" name={this.state.playerName} health={this.state.playerHealth} currentRound={this.state.currentRound} />
					</div>
					<div className="col s12 l4 center-align">
						<button id="btn-battle" className="center-align" onClick={this.battle}></button>
					</div>
					<div className="player col s12 l4">
						<Player ref="enemy" name={this.state.enemyName} health={this.state.enemyHealth} currentRound={this.state.currentRound} />
					</div>
				</div>
			</div>
		);
	},

	battle: function() {
		this.setState({
			currentRound: this.state.currentRound + 1
		});
		var playerDmg = this.refs.player.refs.deck.state.cards[this.state.currentRound].dmg;
		var enemyDmg = this.refs.enemy.refs.deck.state.cards[this.state.currentRound].dmg;
		var newPlayerHealth = this.state.playerHealth - enemyDmg;
		var newEnemyHealth = this.state.enemyHealth - playerDmg;
		console.log(newPlayerHealth);
		console.log(newEnemyHealth);
		this.setState({
			playerHealth: newPlayerHealth,
			enemyHealth: newEnemyHealth	
		});
	},

});

module.exports = Game;