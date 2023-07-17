const read = require('./read');
const fs = require('fs');
const path = require('path');

const deleter = async (file, id) => {
    const data = await read(file);
    console.log('id: ' , id);
    const newData = data.filter(user => user.id !== id);
    console.log('newData', newData);
    if (newData.length === data.length) {
        return 0;
    } else {
        const newDataConvertString = JSON.stringify(newData)
        await fs.promises.writeFile(path.join(__dirname, `../database/${file}`), newDataConvertString);
        return 1;
    }
}

module.exports = deleter;