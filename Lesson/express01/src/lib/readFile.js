const fs = require('fs'); // Gán biến gọi thư viện fs
const path = require('path'); // gán biến goi thu viện path

// const read = (filename, cb) => {
//     fs.readFile(path.join(__dirname, `../database/${filename}`), 'utf8',
//     (err, re) => {
//         if (err) {console.log(err)}
//         // console.log(JSON.parse(re), re);
//         cb(JSON.parse(re))
//     })
// }

const readSyc = async(filename) => { // khai báo hàm bất đồng async 
    try {                                               // khối lênh thực thi khi có thể sảy ra lỗi code
        const data =  await fs.promises.readFile(       // khai báo biến với việc tạm dừng async bằng lệnh đọc file từ thư viện fs    
        path.resolve(__dirname, `../database/${filename}`), // lấy đường dẫn tuyệt đối cho file cần đọc
        'utf8');                                            // mã đọc
            return JSON.parse(data);                        // kết thúc hàm và trả về file json
    }
    catch (err) {                                           // Trường hợp lỗi xảy ra
        console.log(err);                               
        return[]                                               // kết thức và trả về 1 mảng rỗng
    }
}


module.exports= readSyc;
