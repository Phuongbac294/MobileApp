const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Heloo World')
})

app.listen(3001, () => {
    console.log('app run on port 3001');
})
