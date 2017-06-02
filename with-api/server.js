const express = require('express');
const app = express();
const bP = require('body-parser');
const path = require('path');
const port = 8000;
const axios = require('axios');

app.use(bP.urlencoded({extended: true}));

app.get('/repos/:username', (req, res) => {
    axios.get(`https://api.github.com/users/${req.params.username}/repos`)
        .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
}); 