const exp = require('express');
const router = exp.Router();
const model = require('model');

router.get('/', async (req, res) => {
    const agg = [
        {}
    ]
})

router.get('/:id', (req, res) => {
    model.get(id).then(data => {res.send(data);})
})



module.exports = router;