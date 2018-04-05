const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', function (req, res) {
    console.log('POST route')
    const pet = req.body;
    let queryText = 'INSERT INTO "pets" ("owner", "name", "type", "breed", "owner_id") VALUES ($1, $2, $3, $4, $5);';
    pool.query(queryText, [pet.owner, pet.name, pet.type, pet.breed, pet.owner_id])
    .then( (result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
});

module.exports = router;