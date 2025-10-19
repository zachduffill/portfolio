'use strict';
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Redirect country from root
app.get('/', (req, res) => {
    let countryISO = req.headers['x-vercel-ip-country'];

    //if (countryISO == "HU") res.redirect("/hu");
    //else res.redirect("/en");
    res.redirect("/en");
});

app.get('/en', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.en.html'));
});

app.get('/hu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.hu.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
