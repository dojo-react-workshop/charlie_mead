import React from 'react';
import Row from './Row';
import './Grid.css';

const Grid = (props) => {
        const rows = props.matrix.map((cells, idx) => {
            return <Row 
                        className="Row"
                        key={idx} 
                        cells={cells} 
                        onCellClick={props.onCellClick}
                        gamePhase={props.gamePhase}
                        correctGuesses={props.correctGuesses}
                        wrongGuesses={props.wrongGuesses}
                        activeCells={props.activeCells}
                        />
        })
        return (
            <div className={`Grid ${props.gamePhase}`}>{rows}</div>
        )
}

export default Grid;