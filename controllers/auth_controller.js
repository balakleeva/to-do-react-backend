const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const data = jwt.verify(req.headers['x-auth'], 'secretKey', function (err, decoded) {
            return decoded
        })
        req.body.user = data
        next()
    } catch (err) {
        return res.status(401).send(err)
    }
}