const { jwt } = require('../../libs/index')

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '3d'
    })
}

module.exports = { generateToken }