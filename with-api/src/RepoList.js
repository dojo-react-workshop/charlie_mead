import React from 'react';

const RepoList = (props) => {
    const repos = props.repos.map((name) => {
        return <li key={name}>{name}</li>
    })
    return (
        <ul>
            {repos}
        </ul>
    )
}

export default RepoList;