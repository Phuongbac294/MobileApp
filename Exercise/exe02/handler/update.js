const fs = require('fs');
const path = require('path');
const read = require('./read.js');

const update = async (file, id, newDataUpdate) => {
    const oldData = await read(file);
    const index = oldData.findIndex(user => user.id === id);
    if (index !== -1) {
        const data = oldData[index];
        data = {...data, newDataUpdate}
    }
}

module.exports = update;