const { jwt } = require('../../libs/index')

const decoded = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {decoded}