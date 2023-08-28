const express = require('express');


var bodyParser = require('body-parser');
var cors = require('cors');


const router = require('./router/index')
const { connect } = require('./database/connect')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

connect();

app.use('/', router)

const port = process.env.PORT || 3000;// lưu trữ các biến môi trường trong từng môi trường làm việc
app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
})
