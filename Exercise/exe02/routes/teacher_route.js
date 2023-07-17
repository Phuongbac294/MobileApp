const exp = require('express')
const path = require('path');
const teacherRouter = exp.Router();
const handle = require('../handler/handle_teacher.js');
const {validate, createUserSchema} = require('../validate/validate.js');

teacherRouter.get('/', 
    async (req, //Obj chưa thống tin từ Client
         res, // Obj chứa chức năng phản hồi Server từ cl
          next) => { //funtion gọi để chuyển logic sang cb sau đó
            // thưc hiện các logi code rồi chuyến hàm next
    const data = await handle.readAll();
    res.status(200).send(data)
});

teacherRouter.post('/add', 
    (req, res, next) => {
        const error = validate(createUserSchema, req.body);
        if (error) {
            res.status(400).json(error.details)
        }
        next();
    },
    async (req, res) => {
        const data = await req.body;
        console.log('data', data);
        await handle.createTeacher(data);
        const newTeacher = await handle.readAll();
        console.log('newTeacher', newTeacher);
        res.status(200).json(newTeacher);
})

teacherRouter.get('/:userId', async (req, res)=>{
    const id = await parseInt(req.params.userId);
    const data = await handle.getById(id);
    res.status(200).send(data);
});

teacherRouter.patch('/update/:userId',
    async (req, res,) => {
        const id = await parseInt(req.params.userId);
        const newTeacher = await req.body;
        await handle.update(id, newTeacher);
        const data = await handle.readAll();
        res.status(200).send(data)
})
teacherRouter.delete('/remove/:userId', async (req, res) => {
    const id = await parseInt(req.params.userId);
    await handle.deleteTeacher(id);
    const data = await handle.readAll();
    res.status(200).send(data);
})


module.exports = teacherRouter;