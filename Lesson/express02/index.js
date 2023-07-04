const exp = require('express'); // khai báo biến dùng thư viện express

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
// 5. Dữ liệu mà Server gửi lê

app.use(express.static('public'));

app.get('/', (req, res) => { // get đường dẫn trên web với function req, res
    //req - yêu cầu từ Client
    // res - trả lời từ server
  res.send('Hello World in get!'); // Hiển thị lên body html
});

app.get('/*', (req, res) => { // đường dẫn phân cấp xuống chi tiết nhỏ hơn
  res.send('Hello World in get chiled!'); 
});

app.post('/', (req, res) => {
    res.send('Hello World in post!');
})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); // cổng server lắng nghe chương trình ứng dụng
});