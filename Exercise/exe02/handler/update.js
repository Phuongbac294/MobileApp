const fs = require('fs');
const read = require('./read.js');
const path = require('path');

const update = async (file, id, newDataUpdate) => {
    const oldData = await read(file);
    // console.log('Updating', oldData);
    const index = oldData.findIndex(user => user.id === id);
    // console.log('Index', index);
    if (index !== -1) {
        const data = oldData[index];
        oldData[index] = {...data, ...newDataUpdate}
        const newDataConvertString = JSON.stringify(oldData, null, 4);
        await fs.promises.writeFile(path.join(__dirname, `../database/${file}`), newDataConvertString);
        // console.log('newDataConvertString', newDataConvertString);
        return 1;
    } else {
        return 0;
    }
}

module.exports = update;