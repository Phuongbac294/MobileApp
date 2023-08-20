const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const router = require('./router/index')


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router)

app.listen(3000, (req, res) => {
    console.log('listening on port 3000');
})
