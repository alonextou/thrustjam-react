var React = require('react');

var Message = React.createClass({

	render: function() {
		return (
			<div className="row">
				<div className="col l12">
					<h1>Player one wins!</h1>
				</div>
			</div>
		);
	},

});

module.exports = Message;