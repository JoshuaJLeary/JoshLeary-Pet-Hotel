const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', function (req, res) {
    console.log('POST route')
    let owner = req.body;
    console.log('req.body: ',req.body);
    let queryText = `INSERT INTO "owners" ("name", "pets_owned") VALUES ($1, $2);`;
    pool.query(queryText, [owner.name, owner.pets_owned])
    .then( (result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
});

module.exports = router;