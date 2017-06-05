import React from 'react';
import './Cell.css';

const Cell = ({location, onClick, activeCells, gamePhase, correctGuesses, wrongGuesses}) => {
        const classes = ['Cell'];
        switch(gamePhase){
            case 'memorize':
                if (activeCells.includes(location)) { classes.push('active'); }
                break;
            case 'results':
                if (correctGuesses.includes(location)) { classes.push('correct'); }
                else if (wrongGuesses.includes(location)) { classes.push('wrong'); }
                else if (activeCells.includes(location)) { classes.push('missed'); }
                break;
            default:
        }
        return (
            <div className={classes.join(' ')} onClick={() => { onClick(location)}}>
            </div>
        )
}

export default Cell;