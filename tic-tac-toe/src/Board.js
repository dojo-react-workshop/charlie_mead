import React from 'react';
import Square from './Square';

class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
        player: 'X'
    }
    
    winningStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

  renderSquare(i) {
    return <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            />;
  }

  resetBoard = () => {
      this.setState({
        squares: Array(9).fill(null),
        player: 'X'
      });
  }

  calculateWinner(){
    const { squares } = this.state;
    for ( let i = 0; i < this.winningStates.length; i += 1){
        const [ a, b, c ] = this.winningStates[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
  }

  handleClick = (i) => {
    if (this.state.squares[i] !== null) { return; }
    //   Why are we making a copy of the array? See:
    //   https://facebook.github.io/react/tutorial/tutorial.html#why-immutability-is-important
      const squares = [...this.state.squares]
      squares[i] = this.state.player;
      this.setState({
          squares: squares,
          player: (this.state.player === 'X') ? 'O' : 'X'
      });
  }

  render() {
    let status = `Next player: ${this.state.player}`;
    const potentialWinner = this.calculateWinner();
    if (potentialWinner !== null) {
        status = (
            <div>
                <h1>{potentialWinner} wins!</h1>
                <a href="#" onClick={this.resetBoard}>Play again</a>
            </div>
        )
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;