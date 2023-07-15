const exp = require('express')
const path = require('path');
const teacherRouter = exp.Router();
const handle = require('../handler/handle_teacher.js');

teacherRouter.get('/', async (req, res) => {
    const data = await handle.readAll();
    res.status(200).send(data)
});

teacherRouter.post('/add', async (req, res) => {
    const data = await req.body;
    console.log('data', data);
    await handle.createTeacher(data);
    const newTeacher = await handle.readAll();
    console.log('newTeacher', newTeacher);
    res.status(200).json(newTeacher);
})

teacherRouter.get('/:userId', async (req, res)=>{
    const id = await req.params.userId;
    const data = await handle.getById(id);
    res.status(200).send(data);
})

teacherRouter.patch('/update/:userId', async (req, res) => {
    const id = await req.params.userId;
    const newTeacher = await req.body;
    await handle.update(id, newTeacher);
    const data = await handle.readAll();
    res.status(200).send(data)
})
teacherRouter.delete('/remove/:userId', async (req, res) => {
    const id = await req.params.userId;
    await handle.deleteTeacher(id);
    const data = await handle.readAll();
    res.status(200).send(data);
})


module.exports = teacherRouter;