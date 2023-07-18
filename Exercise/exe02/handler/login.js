const read = require('./read');

const login = async (data) => {
    const userdata = await read('user.json');
    // console.log('name', data.name, 'password', data.password);
    return userdata.find(i=>i.name === data.name && i.password === data.password)
    
}

module.exports= login;