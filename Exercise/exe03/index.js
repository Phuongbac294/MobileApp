const exp = require('express');

const app = exp();
// Router
const userRouter = require('./Routers/userRouter')

// // user routers
app.use('/user', userRouter);

// // home
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// const crud = require('./handler/crud');

// console.log(JSON.paser(crud.readFile('userData.json')));