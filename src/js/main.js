// main.js
require('../css/main.scss');

var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./states/menu.js');

ReactDOM.render(
	<Menu />,
	document.getElementById('main')
);