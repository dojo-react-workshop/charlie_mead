import React, { Component } from 'react';
import Search from './Search';
import RepoList from './RepoList';

class App extends Component {
    state = {
        repos: []
    }

    handleSearch = (repos) => {
        this.setState({
            repos
        })
    }
    render(){
        return (
            <div>
                <h1>Repo Getter</h1>
                <Search handleSearch={this.handleSearch}/>
                <RepoList repos={this.state.repos} />
            </div>
        )
    }
}

export default App;