const fs = require('fs');

const saveData = (studentData) => {
    return Promise(
        (res, rej) => {
            const dataSave = JSON.stringify(studentData);
            console.log('dataSave', dataSave);
            fs.writeFile('./src/student.json',
             dataSave, 
             (err) => {
                if (err) {
                    rej(err);
                    console.log('Saved!');
                    res(1);
                } else {
                    res(studentData);
                }
             }
            )
        }
    )
}

const readStudent = (studentData) => {
    const newPromise = new Promise((res, rej) => {
        fs.readFile('./src/student.json', 'utf-8', (err, re) => {
            if (err) rej(err);
            res(re)
        })
    })
}

const createStudent = async (Data) => {
    try {
        const allStudent = await readStudent();
        if (allStudent) {
            const dataConvert = JSON.parse(allStudent);
            await saveData([...dataConvert, Data]);
        } else {
            await saveData([Data])
        }
    } catch (err) {}
}

const dataStudent = {
    name: 'Student',
    age: 20
}