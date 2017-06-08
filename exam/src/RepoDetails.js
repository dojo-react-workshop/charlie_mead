import React from 'react';
import { string, number } from 'prop-types';
const RepoDetails = ({ forks_count, name, stargazers_count, language }) => (
    <div className="row">
        <div className="card columns large-6 large-centered medium-6 medium-centered small-10 small-centered">
            <h2 className="text-center">{name} details</h2>
            <table className="table" summary="This summary is for screen readers and should summarize the structure of the table headers and rows">
                <thead>
                    <tr>
                        <th className="text-center" width="300">Stars</th>
                        <th className="text-center" width="300">Forks</th>
                        <th className="text-center" width="300">Primary language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{stargazers_count}</td>
                        <td className="text-center">{forks_count}</td>
                        <td className="text-center">{language}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

RepoDetails.propTypes = {
    forks_count: number.isRequired,
    language: string.isRequired,
    stargazers_count: number.isRequired,
    name: string.isRequired
}

export default RepoDetails;