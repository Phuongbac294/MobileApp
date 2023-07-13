const exp = require('express')
const path = require('path');
const teacherRouter = exp.Router();

teacherRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../database/teacher.json'));
});

module.exports = teacherRouter;