var React = require('react');

var TestForm = React.createClass({

	render: function() {
		return (
			<input type="text" name="username" defaultValue="majy"/>
		);
	}

});

module.exports = TestForm;