import React from 'react';
import { array, string } from 'prop-types';
import { Link } from 'react-router-dom';

const SearchResults = ({ repos, user }) => {
    if (!user) {
        return null;
    }
    repos = repos.map(({ id, name }) => {
        return <tr key={id}><td><Link to={`/repos/${id}`}>{name}</Link></td></tr>
    })
    return (
        <div className="row">
            <div className="columns large-6 large-centered medium-6 medium-centered small-10 small-centered">
                <h2>{user}'s repositories:</h2>
                <table className="table" summary="User repositories">
                    <thead>
                        <tr>
                            <th width="500">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

SearchResults.propTypes = {
    repos: array.isRequired,
    user: string
}

export default SearchResults;