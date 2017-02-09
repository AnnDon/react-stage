var React = require('react');

var TestPass = React.createClass({

	render: function() {
		return (
			<input type="text" name="pass" defaultValue="pass123"/>
		);
	}

});

module.exports = TestPass;