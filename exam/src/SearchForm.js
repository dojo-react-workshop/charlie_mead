import React, { Component } from 'react';
import { string, func } from 'prop-types';

class SearchForm extends Component {
    state = {
        searchTerm: ''
    }
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }
    render() {
        return (
            <div className="columns large-6 large-centered medium-6 medium-centered small-12">
                <form onSubmit={this.handleSubmit}>
                    <hr />
                    {
                        this.props.error ? <ErrorNotification error={this.props.error} onClick={this.onErrorClick} /> : null
                    }
                    <label>Search repositories by Github username</label>
                    <input placeholder="username" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <button
                        onClick={this.handleSearch}
                        disabled={this.state.searchTerm === ''}>
                        Search
                </button>
                    <hr />
                </form>
            </div>
        )
    }
}

SearchForm.propTypes = {
    error: string,
    onSubmit: func.isRequired,
    onErrorClick: func.isRequired
}

const ErrorNotification = (props) => (
    <div className="notification-box alert">
        {props.error}
    </div>
)

export default SearchForm;