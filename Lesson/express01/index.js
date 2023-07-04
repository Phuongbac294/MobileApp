const fs = require('fs');                           // khai báo biến sử dụng thư viện fs
const readSyc = require('./src/lib/readFile');      // Khai báo biến sử dụng hàm theo đường dẫn

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

const createFile = async (data) => {  // Khai báo biến tạo file từ hàm async
        try {                                   // thực hiện hàm
            const allPersonnel = await readSyc(filename);  // Khai báo biến kêt thúc hàm sử dụng function lấy tất cả dữ liệu ra
            allPersonnel.push(data);       // Thêm dữ liệu vào cuối của biến
            const dataSave = Json.stringfy(allPersonnel, null, 4); // khai báo biến data dùng chuỗi của biến all sang json
            await fs.promises.writeFile(                            // Viết vào file theo đường dẫn từ biến
                path.resolve(__dirname, `database/${filename}`),
                dataSave
                )
                console.log('data saved', dataSave);
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

const main = async () => {
    await createFile(newPersonnel)
    const dataResult = await readSyc('personnel.json');
    console.log('dataResult', dataResult);
    console.log('push ', newPersonnel);
}

main();