import React from 'react';

const RepoList = (props) => {
    const repos = props.repos.map((repoObj) => {
        return <li key={repoObj.id}><a href={repoObj.html_url}>{repoObj.name}</a></li>
    })
    return (
        <ul>
            {repos}
        </ul>
    )
}

export default RepoList;