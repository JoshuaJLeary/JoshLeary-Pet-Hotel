const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 5003;
const petRouter = require('./routes/pet.router');
const ownerRouter = require('./routes/owner.router');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/pet', petRouter);
app.use('/owner', ownerRouter);

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});
