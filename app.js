const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('u fond us')
});

app.get('/user', (req, res) => {
    res.send('esta dentro do usuário')
});

module.exports = app;