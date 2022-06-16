const { jwt } = require('../../libs/index')

const verifyJWT = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if(err){
                    return res.json({
                        isLoggedIn: false,
                        message: "Failed to Authenticate"
                    })
                }

                req.user = {};
                req.user.id = decoded.id
                req.user.name = decoded.name
                next()
            })
        }else{
            res.json({
                isLoggedIn: false,
                message: "Not authorized"
            })
        }
    }catch(error){
        console.log(`${error}`.red.bold)
    }
}

module.exports = { verifyJWT }