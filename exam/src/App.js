import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import RepoDetails from './RepoDetails';
import Header from './Header';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import FilterSelector from './FilterSelector';

class App extends Component {
    state = {
        isLoading: false,
        repos: [],
        error: null,
        selectedFilter: 'All',
        filters: [],
        user: null
    }
    handleLanguageFilterChange = (event) => {
        this.setState({
            selectedFilter: event.target.value
        })
    }
    handleSearch = (searchTerm) => {
        this.setState({ isLoading: true, error: null });
        axios.get(`https://api.github.com/users/${searchTerm}/repos`)
            .then(({ data, message }) => {
                this.setState({
                    isLoading: false,
                    repos: data,
                    error: null,
                    selectedFilter: 'All',
                    filters: this.getLanguageFiltersFromRepos(data),
                    user: searchTerm
                });
            })
            .catch((err) => {
                this.setState({
                    isLoading: false,
                    error: 'Unknown username!',
                    repos: [],
                    filters: [],
                    user: null
                });
            })
    }
    getLanguageFiltersFromRepos(repoList) {
        return Object.keys(repoList.reduce((accum, repoObj) => {
            if (repoObj.language) {
                accum[repoObj.language] = true
            }
            return accum;
        }, { All: true }))
    }
    getRepoInfoById = (id) => {
        const foundRepo = this.state.repos.find((repo) => repo.id === Number(id));
        if (!foundRepo) { return null; }

        const { forks_count, language, stargazers_count, name } = foundRepo;

        return {
            forks_count,
            language,
            stargazers_count,
            name
        }
    }
    filteredRepos() {
        if (this.state.selectedFilter === 'All') { return this.state.repos; }
        return this.state.repos.filter((({ language }) => language === this.state.selectedFilter));
    }
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" render={(props) => {
                        return (
                            <div className="row">
                                <SearchForm error={this.state.error} onSubmit={this.handleSearch} onErrorClick={() => this.setState({ error: null })} />
                                {
                                    (this.state.isLoading)
                                        ? <Loading />
                                        : (
                                            <div>
                                                {(this.state.user) ? <h2 className="text-center">{this.state.user}'s repositories:</h2> : null}
                                                <FilterSelector filters={this.state.filters} selectedFilter={this.state.selectedFilter} onChange={this.handleLanguageFilterChange} />
                                                <SearchResults
                                                    {...props}
                                                    user={this.state.user}
                                                    repos={this.filteredRepos()} />
                                            </div>
                                        )
                                }
                            </div>
                        )
                    }} />
                    <Route path="/repos/:id" render={({ match }) => {
                        const repoDetails = this.getRepoInfoById(match.params.id);
                        return (repoDetails === null) ? <Redirect to="/" /> : <RepoDetails {...repoDetails} />
                    }}
                    />
                </div>
            </Router>
        )
    }
}

const Loading = () => (
    <div className="row">
        <div className="small-3 small-centered columns">
            <span className="loading-indicator xlarge"></span>
        </div>
    </div>
)

export default App;