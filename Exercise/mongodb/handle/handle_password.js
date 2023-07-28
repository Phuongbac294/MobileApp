var bcrypt = require('bcrypt');

const cryptPassword = function (password) {
    return bcrypt
        .genSalt(10) // bổ sung 1 số ngẫu nhiên vào mk, (10) - thời gian bổ sung tính bàng s
        .then(salt => { // sau khi bổ sung sẽ chuyển mật khẩu và hàm Salt tới hàm .hash để hash mk.
            console.log('Salt: ', salt)
            return bcrypt.hash(password, salt)
        })
        .then(hash => { // lưu mk trong cơ sở dữ liệu
            console.log('Hash: ', hash)
            return hash;
        })
        .catch(err => console.error(err.message))
};

const comparePassword = function (plainPass, hashword) { // hàm so sánh mk cung cấp với mk trong cơ sở dũ liệu
    return bcrypt.compare(plainPass, hashword);
};


module.exports = {
    cryptPassword,
    comparePassword
}