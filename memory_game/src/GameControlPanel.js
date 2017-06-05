import React from 'react';

const GameControlPanel = (props) => {
        return (
            <div className="GameControlPanel">

                {
                    (props.gamePhase === 'countdown')
                    ? <h3>Memorize the highlighted cells in {props.timeLeft}</h3>
                    : null
                }

                {
                    (props.gamePhase === 'initialize' || props.gamePhase === 'results')
                    ? <button onClick={props.onButtonClick}>Play Game!</button>
                    : null
                }

                {
                    (props.gamePhase === 'guess')
                    ? <h1>Click the boxes!</h1>
                    : null
                }
                
            </div>
        )
}


export default GameControlPanel;