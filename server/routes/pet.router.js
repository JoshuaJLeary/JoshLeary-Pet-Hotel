const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', function (req, res) {
    console.log('POST route')
    const pet = req.body;
    let queryText = 'INSERT INTO "pets" ("name", "type", "breed", "owner_id") VALUES ($1, $2, $3, $4);';
    pool.query(queryText, [pet.name, pet.type, pet.breed, pet.owner_id])
    .then( (result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
});

router.get('/', function(req, res) {
    console.log('GET /pet');
    let queryText = `SELECT "name", "type", "breed", "owner_id", "pets"."id" FROM "pets" JOIN "owners" ON "pets"."owner_id" = "owners"."id";`;
    pool.query(queryText).then(function(result) {
        res.send(result.rows);
    }).catch(function(error) {
        console.log('Error GET /pet', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    console.log('DELETE /pet', req.params);
    const petId = req.params.id;
    pool.query('DELETE FROM "pets" WHERE "id" = $1;', [petId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making pet delete query', error);
            res.sendStatus(500);
        });
});

module.exports = router;