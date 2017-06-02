const express = require('express');
const app = express();
const bP = require('body-parser');
const path = require('path');
const port = 8000;

app.use(bP.urlencoded({extended: true}));

app.get('/repos/:username', (req, res) => {
    res.json(req.params.username);
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
})