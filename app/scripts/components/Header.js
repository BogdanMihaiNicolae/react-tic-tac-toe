var React = require('react');
var PropTypes = React.PropTypes;

var Header = React.createClass({
    render: function() {
        return (
            <div className="game__box">
                <p className="title">Tic Tac Toe</p>
            </div>
        );
    }

});

module.exports = Header;
