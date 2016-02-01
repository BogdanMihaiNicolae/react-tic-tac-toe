var React = require('react'),
    Cell = require("./Cell");

var Board = React.createClass({
    render: function () {
        var gameCells = this.props.table.map(function (table, i) {
              return (
                  <Cell onCellClick={this.props.onCellClick.bind(null,i)} key={i} value={table}/>
                  );
            },this);
        return (
            <div className="game__body">
               {gameCells}
            </div>
        );
    }

});


module.exports = Board;
