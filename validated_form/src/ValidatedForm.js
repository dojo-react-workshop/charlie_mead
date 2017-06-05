import React, { Component } from 'react';
import { validateName, validateEmail } from './validations';
import FormField from './FormField';

class ValidatedForm extends Component {
    state = {
        inputVals: { name: '', email: '' },
        errors: { },
        submitted: false
    }
    blockSubmit(){
        const errorMsgs = Object.keys(this.state.errors).filter((key) => this.state.errors[key]);
        const blankInputs = Object.keys(this.state.inputVals).filter((key) => this.state.inputVals[key] === '');
        return (errorMsgs.length > 0 || blankInputs.length > 0);
    }
    handleChange = ({ name, value, error }) => {
        const { errors, inputVals } = this.state;

        const newState = {
            inputVals: {
                ...inputVals,
                [name]: value
            },
            errors: {
                ...errors,
                [name]: error
            }
        }
        this.setState(newState);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        });
    }
    render(){
        return (this.state.submitted) ? <h1>Thanks!</h1> : (
            <form onSubmit={this.handleSubmit}>
                <FormField 
                    name='name'
                    placeholder='Name'
                    validate={ validateName }
                    onChange={ this.handleChange }
                />
                <FormField 
                    name='email'
                    placeholder='Email'
                    validate={ validateEmail }
                    onChange={ this.handleChange }
                />

                <input type="submit" value="Submit" disabled={this.blockSubmit()}/>
            </form>
        )
    }
}

export default ValidatedForm;