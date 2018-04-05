const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 5003;

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});
