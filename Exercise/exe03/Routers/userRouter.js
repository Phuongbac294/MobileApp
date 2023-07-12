const exp = require('express');
const path = require('path');
const crud = require('../handler/crud')

const userRouter = exp.Router();
userRouter.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../database/userData.json'));
})

userRouter.get('/read', async (req, res) => {
    const data = await crud.readFile('userData.json');
    res.status(200).json(data);
})

userRouter.patch(
    '/:usreId', // Đường dẫn
    // middleware 
    (req, // obj chứa thông tin từ Clinet
    res, // obj chứa chức năng phản hồi từ Server tới Clinet
    next // function gọi để chuyển logic sang cb sau đó
    ) => { // thực hiện các logic
    if (req.body && req.body.id) {
            res.status(400).json({msg: `can't update user id`});
        }
    if (req.body && req.body.age > 100 && req.body.age<0) {
        res.status(400).json({msg: 'please check the age of user'});
    }
    next(); //sau khi thực hiện xong các logic sẽ chuyển tới bước tiếp theo
},
async (req,res) => {
    const newDataUser = req.body;
    await userHandle.updateUser(req.params.usreId, newDataUser);
    res.status(200).send('Update user success');
}
);



module.exports = userRouter;