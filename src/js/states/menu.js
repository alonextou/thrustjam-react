var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./game.js');

var Menu = React.createClass({

	render: function() {
		return (
			<div id="menu-wrapper" className="center-align valign-wrapper">
				<div id="menu" className="row valign">
					<ul className="valign">
						<li>
							<img src="/assets/images/logo.png" />
						</li>
						<li>
							<button className="btn waves-effect waves-light" onClick={this.startGame}>Start game</button>
						</li>
					</ul>
				</div>
			</div>
		);
	},

	startGame: function() {
		ReactDOM.unmountComponentAtNode(document.getElementById('main'));
		ReactDOM.render(
			<Game />,
			document.getElementById('main')
		);
	}

});

module.exports = Menu;