import React from 'react';
import Search from './Search';
import RepoList from './RepoList';

const App = () => {
    return (
        <div>
            <h1>Repo Getter</h1>
            <Search />
            <RepoList />
        </div>
    )
}

export default App;