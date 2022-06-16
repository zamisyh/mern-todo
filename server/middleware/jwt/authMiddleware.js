const { jwt, asyncHandler } = require('../../libs/index')
const User = require('../../models/user.model')
const { decoded } = require('./decodedToken')

const protectRoute = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decode = decoded(token)

            //get user from  the token
            req.user = await User.findById(decode.id).select('-password')
            next();

        }catch(err){
            console.log(`${err}`.red.bold)
        }
    }

    if (!token) {
        res.status(401).json({message: 'Not authorized, no token!'})
    }

})

module.exports = { protectRoute }