const exp = require('express'); // khai báo biến dùng thư viện express
var bodyParser = require('body-parser');
var cors = require('cors');
const app = exp(); // khai báo biến

// http
// 1. đường dẫn
// 2. method
    // get - chạy trên web - hiển thị tại body
    // post  - chạy ẩn cho lập trình - dùng để check server
    // put
    // delete
    // options
    // head
    // trace
    // connect
    // patch
// 3. Phương thức truyền dữ liệu
    // header
    // body
// 4. Dữ liệu mà Client gửi lên
    // params - truyền đường dẫn nhưng phải là 1 giá trị cụ thể vd: /user/:userId=phuong
    // query - cách thức truyền tin bằng key trên đường dẫn vd /user?name=abc&password=123
    // body
// 5. Routing:
  // - Xử lý các đường dẫn
  // - method (get, post, path, delete, put, patch)
  // - Sử lý req, res
    // - res (thông tin về yêu cầu từ Client)
        // 1. req.query
        // 2. req.params
        // 3. req.body
        // 4. res.send
        // 5. res.json
        // 6. res.redirect
        // 7. res.render
        // 8. res.renderFile
        // 9. res.renderString
        // 10. res.sendFile
        // 11. res.redirectTo
        // 12. res.renderTemplate
        // 13. res.renderTemplateFile
        // 14. res.renderTemplateString
        // 15. res.renderView
        // 16. res.renderViewFile
        // 17. res.renderViewString
        // 18. res.renderJSON
        // 19. res.renderJSONFile
        // 20. res.renderJSONString
        // 21. res.renderXML

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
        
app.get('/', (req, res) => { // get đường dẫn trên web với function req, res
    //req - yêu cầu từ Client
    // res - trả lời từ server
  res.send('Hello World in get!'); // Hiển thị lên body html
});

const studentRoute = require('./src/student.js');
app.use('/student', studentRoute);

const teacherRoute = exp.Router();
teacherRoute.get('/', (req, res) => {
  res.send('Teacher');
  // res.sendFile(`index1.html`);
});
teacherRoute.get('/user', (req, res) => {
  // res.send('Teacher');
  res.sendFile('/Users/Dell/Documents/GitHub/MobileApp/lesson/express02/index1.html');
});

app.use('/teacher', teacherRoute); 

app.get('/*', (req, res) => { // đường dẫn phân cấp xuống chi tiết nhỏ hơn
  res.send('Hello World in get chiled!'); 
});

app.post('/', (req, res) => {
    res.send('Hello World in post!');
})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); // cổng server lắng nghe chương trình ứng dụng
});