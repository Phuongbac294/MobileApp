const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const [_, token] = req.headers.authorization.split(' ');
        const userData = jwt.verify(token, process.env.KEY_JWT);
        req.user = userData;
        next();
    } catch (err) {
        res.status(401).json({
            msg: "Invalid token",
            err: err
        })
    }
}

module.exports = authMiddleware;