'use strict';
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const maxmind = require('maxmind');
var lookup;
maxmind.open('./private/GeoLite2-Country.mmdb')
    .then((countryLookup) => {
        lookup = countryLookup;
        console.log("GeoLite2 database loaded")
    })
    .catch((err) => {
        console.error('Failed to load GeoLite2 database:', err);
    });

function GetLoc(req) {
    const ip = req.query.ip || req.ip;
    if (!lookup) {
        return -1;
    }
    return lookup.get(ip);
}

const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

///////////
// ROUTES

// Redirect country from root
app.get('/', (req, res) => {
    let loc = GetLoc(req);
    if (loc == -1) {
        res.status(500).send('GeoLite2 database not loaded');
        return;
    }

    let countryISO;

    if (loc) countryISO = loc["country"]["iso_code"];
    if (countryISO == "HU") res.redirect("/hu");
    else res.redirect("/en");
});

app.get('/en', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.en.html'));
});

app.get('/hu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.hu.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

// used for testing ip redirection
//app.set('trust proxy', true);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});