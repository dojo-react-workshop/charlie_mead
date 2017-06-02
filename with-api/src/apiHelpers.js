export const getReposByUsername = (username) => {
    return fetch(`/repos/${username}`)
        .then((response) => {
            return response.json()
        });
}