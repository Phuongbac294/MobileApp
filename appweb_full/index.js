const exp =require('express');

const router = require('./routers/index');

const database = require('./database');
const db = new database()

const app = exp();

app.use(exp.json());
app.use('/', router)

app.listen(3005, (req, res) => {
    console.log('listening on http://localhost on port 3005');
    // db.connect().then((err, result) => {
    //     if (err) throw err;
    //     console.log('database connected');
    // })
});