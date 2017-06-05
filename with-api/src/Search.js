import React, { Component } from "react";
import { getReposByUsername } from "./apiHelpers";

class Search extends Component {
  state = {
    username: ""
  };
  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleClick = () => {
    getReposByUsername(this.state.username).then(repos =>
      this.props.handleSearch(repos)
    );
  };
  render() {
    return (
      <div>
        <input
          type="search"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;
