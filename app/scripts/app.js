
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Board = require("./components/Board"),
    Cell = require("./components/Cell"),
    Footer = require("./components/Footer"),
    Header = require("./components/Header");

    var Game = React.createClass({
        getInitialState: function () {
            return {
                StartScreen: true,
                table: ['', '', '', '', '', '', '', '', ''],
                player: Math.floor(Math.random() * 2) + 1,
                winner: '',
                draw: false
            };
        },
        // change player turn
        nextPlayer: function(){
          return this.state.player === 1 ? 2 : 1
        },
        // update table with current player number
        updateTable:function(tableIndex,player){
          var table = this.state.table;
          table[tableIndex] = player;
          return table;
        },

        onCellClick: function (tableIndex) {
          if (this.state.table[tableIndex] === '' && this.state.winner === '') {
            this.setState({
              table:this.updateTable(tableIndex, this.state.player),
              player:this.nextPlayer()
            });
            this.winCheck();
            this.drawCheck();
          };
        },
        //check win conditions
        winCheck:function(){
          var sumRow, sumColumn, sumDiag1, sumDiag2;

          // check diagonal
          sumDiag1 = this.state.table[0] + this.state.table[4] + this.state.table[8];
          sumDiag2 = this.state.table[2] + this.state.table[4] + this.state.table[6];
          if (sumDiag1 === 3 || sumDiag1 === 6) {
            this.setState({
              winner: (sumDiag1 === 3 ? 1 : 2)
            });
          };
          if (sumDiag2 === 3 || sumDiag2 === 6) {
            this.setState({
              winner: (sumDiag1 === 3 ? 1 : 2)
            });
          };

          //check rows
          for (var i=0; i<=6; i+=3){
            sumRow  = this.state.table[i] + this.state.table[i+1] + this.state.table[i+2];
            if (sumRow === 3 || sumRow === 6) {
              this.setState({
                winner: (sumRow === 3 ? 1 : 2)
              });
            };
          };

          //check columns
          for (var i=0; i<3; i++){
            sumColumn  = this.state.table[i] + this.state.table[i+3] + this.state.table[i+6];
            if (sumColumn === 3 || sumColumn === 6) {
              this.setState({
                winner: (sumColumn === 3 ? 1 : 2)
              });
            };
          };
        },
        //check if table is filled
        drawCheck:function(){
          if (this.state.table.indexOf('') < 0 ) {
            this.setState({
              draw:true
            });
          }
        },
        // render the game
        render: function() {
            return (
              <div>
                <Header/>
                <Board table = {this.state.table} onCellClick = {this.onCellClick}/>
                <Footer player = {this.state.player} winner = {this.state.winner} draw = {this.state.draw}/>
              </div>
            );
        }

    });

ReactDOM.render(<Game />, document.getElementById("game"));
