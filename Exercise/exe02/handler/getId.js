const read = require('./read.js');

const getId = async (file, id) => {
    const data = await read(file);
    console.log('data', typeof data, data);
    const user = data.find(user => user.id === id);
    console.log('newData', typeof user, user);
    return user;
    // const user = await data.find(user => user.id === id);
    // return usery
    // const dataArray = JSON.stringify(data)
    // let dataId = {};
    // console.log(dataArray);ws
    // for (let i = 0; i < dataArray.length; i++) {
    //     if (dataArray[i].id === id) {
    //         dataId = dataArray[i];
    //         console.log(dataArray[i]);
    // }}
    // console.log(dataId);
    // return dataId;

}

module.exports = getId;