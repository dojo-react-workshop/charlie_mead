import React, { Component } from 'react';
import Grid from './Grid';
import GameControlPanel from './GameControlPanel';
import _ from 'underscore';

class Game extends Component {
    constructor(props){
        super(props);
        this.matrix = this.buildMatrix();
        this.initialState = {
            gamePhase: 'initialize',
            activeCells: this.generateActiveCells(this.matrix),
            correctGuesses: [],
            wrongGuesses: [],
            timeLeft: 3
        }
        this.state = {
            ...this.initialState
        }
    }

    buildMatrix(){
        const matrix = []
        for(let r = 0; r < 3; r += 1){
            let row = [];
            for(let c = 0; c < 4; c += 1){
                row.push(`${r}-${c}`);
            }
            matrix.push(row);
        }
        return matrix;
    }

    generateActiveCells(matrix){
        let flattenedMatrix = _.flatten(matrix);
        return _.sample(flattenedMatrix, 4);
    }

    handleCellSelection = (location) => {
        if (this.state.gamePhase !== 'guess'){ return; }

        const newState = {
            ...this.state
        }
        if ( this.state.activeCells.includes(location)){
            newState.correctGuesses = [ ...newState.correctGuesses, location ]
        } else {
            newState.wrongGuesses = [ ...newState.wrongGuesses, location ]
        }
        
        this.setState(newState);
    }
    resetGame = () => {
        this.setState({ ...this.initialState, activeCells: this.generateActiveCells(this.matrix) });
    }
    updateGamePhase = (phase) => {
        this.setState({
            gamePhase: phase
        });
    }
    transitionGamePhases = () => {
        this.resetGame();
        this.updateGamePhase('countdown');
        
        this.interval = setInterval(() => {
            if (this.state.timeLeft === 1){
                clearInterval(this.interval);
                this.updateGamePhase('memorize');
                setTimeout(() => {
                    this.updateGamePhase('guess');
                    setTimeout(() => {
                        this.updateGamePhase('results')
                    }, 3000)
                }, 100)
            } else {
                this.setState({
                    timeLeft: this.state.timeLeft - 1
                });
            }
        }, 1000);
    }
    render(){
        return (
            <div className="Game">
                <Grid
                    matrix={this.matrix} 
                    gamePhase={this.state.gamePhase}
                    correctGuesses={this.state.correctGuesses}
                    wrongGuesses={this.state.wrongGuesses}
                    onCellClick={this.handleCellSelection}
                    activeCells={this.state.activeCells}
                    />
                <GameControlPanel 
                    onButtonClick={this.transitionGamePhases}
                    gamePhase={this.state.gamePhase}
                    timeLeft={this.state.timeLeft}
                />
            </div>
        )
    }
}

export default Game;