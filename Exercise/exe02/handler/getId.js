const read = require('./read.js');

const getId = async (file, id) => {
    const data = await read(file);
    // console.log('data', typeof data, data);
    const user = data.find(user => user.id === id);
    // console.log('newData', typeof user, user);
    return user;
}

module.exports = getId;