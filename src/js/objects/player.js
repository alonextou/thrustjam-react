var React = require('react');
var Deck = require('./deck.js');

var Player = React.createClass({

	render: function() {
		return (
			<div>
				<Deck ref="deck" currentRound={this.props.currentRound}/>
				<div className="progress red">
					<div className="determinate" style={{width: this.props.health+'%'}}></div>
				</div>
				<h4>{this.props.name}</h4>
				<div className="chip yellow">
					{this.props.health}
				</div>
			</div>
		);
	},

});

module.exports = Player;