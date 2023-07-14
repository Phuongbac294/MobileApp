const read = require('./read.js');

const getId = ( id) => {
    const data = read('user.json');
    console.log(data);
    // const dataArray = JSON.stringify(data)
    // let dataId = {};
    // console.log(dataArray);
    // for (let i = 0; i < dataArray.length; i++) {
    //     if (dataArray[i].id === id) {
    //         dataId = dataArray[i];
    //         console.log(dataArray[i]);
    // }}
    // console.log(dataId);
    // return dataId;

}

module.exports = getId;