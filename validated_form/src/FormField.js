import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { string, func } = PropTypes;

class FormField extends Component {
    state = {
        value: this.props.placeholder,
        error: false
    }

    static propTypes = {
        name: string.isRequired,
        onChange: func.isRequired,
        validate: func
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const error = this.props.validate(value);
        const args = {
            name,
            value,
            error
        }
        this.setState({
            error,
            value
        });
        this.props.onChange(args);
    }
    render(){
        return (
            <div className="form-field">
                <input 
                    type="text" 
                    name={this.props.name}  
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                {
                    this.state.value !== '' && <span className="errors" style={{ color: 'red' }}>{this.state.error}</span>
                }
            </div>
        )
    }
}

export default FormField;