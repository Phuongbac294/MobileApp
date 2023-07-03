const fs = require('fs');
const readSyc = require('./src/lib/readFile');

//  fs.readFile(
//     './src/database/text.txt',
//     'utf-8',
//     (err, re) => {
//         if (err) {console.log(err)};
//         console.log('reuslt',re);
//     }
//  )

// const readFile = async () => {
//     const data = readSyc('personnel.json', (reuslt) => {
//         console.log('result',reuslt);
//     });
//     console.log('data',data);
    
//     const dataResult = await readSyc('personnel.json');
//     console.log('dataResult',dataResult);
// }

const createFile = async (prosonneldata) => {
        try {
            const allProsonnel = await readSyc();
            allProsonnel.push(prosonneldata);
            const dataSave = Json.stringfy(allProsonnel, null, 4);
            await fs.promises.writeFile(
                path.resolve(__dirname, 'database/personnel.json'),
                dataSave
            )
        } catch (err) {}
    }

const newPersonnel = {
        name: "Nguyễn Sỹ Thức",
        positions: "Quản đốc",
        year: "1975" ,
        address: "Bắc Ninh",
        telephone: "0914999029",
        email: "nguyensythuc@gmail.com"
}

const main = async () => {
    await createFile(newPersonnel)
    const dataResult = await readSyc();
    console.log('dataResult', dataResult);
}

main();