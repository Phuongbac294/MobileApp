const fs = require('fs');                           // khai báo biến sử dụng thư viện fs
const path = require('path');
// const readSyc = require('./src/lib/readFile');      // Khai báo biến sử dụng hàm theo đường dẫn

//  fs.readFile(  // Đọc file
//     './src/database/text.txt', // đường dẫn tương đối
//     'utf-8', 
//     (err, re) => { // function 
//         if (err) {console.log(err)}; // nếu lỗi thì ...
//         console.log('reuslt',re); // không lỗi thực hiện ...
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

const readAll = async (fileName = 'personnel.json') => {
    try {
        const data = await fs.promises.readFile(
            path.resolve(__dirname, `./src/database/${fileName}`),
            'utf-8');
        return JSON.parse(data);
        
    } catch (err) {
        console.log(err);
        return [];
    }
};

const readAllStudent = async (fileName = 'student.json') => {
    try {
        const data = await fs.promises.readFile(
            path.resolve(_dirname, `${fileName}`),
            'utf-8',
        )
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}
const  createStudent = async (studentData) => {
    try {
        const allStudent = await readAllStudent();
        allStudent.push(studentData);
        const dataSave = JSON.stringify(allStudent, null, 2);
        await fs.promises.writeFile(
                    path.resolve(__dirname, `student.json`),
                    dataSave
                )
    } catch (err) {
        return [];
    }
}

const createFile = async (data) => {  // Khai báo biến tạo file từ hàm async
        try {                                   // thực hiện hàm
            const allPersonnel = await readAll();  // Khai báo biến kêt thúc hàm sử dụng function lấy tất cả dữ liệu ra
            allPersonnel.push(data);       // Thêm dữ liệu vào cuối của biến
            // console.log(allPersonnel); //
            const dataSave = JSON.stringify(allPersonnel); // khai báo biến data dùng chuỗi của biến all sang json
            await fs.promises.writeFile(
                path.resolve(__dirname, `/src/database/personnel.json`),
                dataSave
            )
            console.log('file', path.join(__dirname,`./src/database/${filename}`));
                // console.log('data saved', dataSave);
        } catch (err) {} // khi xảy ra lỗi
    }

const newPersonnel = {
        name: "Nguyễn Sỹ Thức",
        positions: "Quản đốc",
        year: "1975" ,
        address: "Bắc Ninh",
        telephone: "0914999029",
        email: "nguyensythuc@gmail.com"
}

const newStudent = {
    name: "abccc",
    age: 18,
}

const danhsach = async () => {
    await createFile(newStudent)
        const dataResult = await readAllStudent();
        console.log('dataStudent', dataResult);
        // console.log('push ', newStudent);
}
const main = async () => {
    await createFile(newPersonnel)
    const dataResult = await readAll();
    console.log('dataResult', dataResult);
    // console.log('push ', newPersonnel);
}

danhsach();
main() ;