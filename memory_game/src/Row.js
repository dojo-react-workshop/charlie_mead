import React from 'react';
import Cell from './Cell';
import './Row.css';
const Row = (props) => {
        const cells = props.cells.map((location) => (
            <Cell 
                key={location} 
                location={location} 
                onClick={props.onCellClick}
                gamePhase={props.gamePhase}
                correctGuesses={props.correctGuesses}
                wrongGuesses={props.wrongGuesses}
                activeCells={props.activeCells}
                />
        ))
        return (
            <div className="Row">
                {cells}
            </div>
        )
}

export default Row;