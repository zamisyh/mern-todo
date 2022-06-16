const { bcrypt, asyncHandler } = require('../libs/index')
const User = require('../models/user.model')
const { generateToken } = require('../middleware/jwt/generateToken')

exports.userRegister = async(req, res, next) => {
    const { name, email, password, confirm_password } = req.body;
    if (confirm_password != password) {
        return res.send({message: "Confirm password not match!"})
    }

    try {
        User.findOne({email: req.body.email}, (err, data) => {
            if(data){
                return res.send({message: "Email already exist"})
            }else{
                const newUser = new User({name, email, password});
                newUser.password = bcrypt.hashSync(password, 10);
                newUser.save((err, data) => {
                    (err) ? res.status(400).json(err) : res.status(200).json({
                        status:200,
                        message: "Succesfully create user",
                        token: generateToken(data._id)
                    })
                })
            }
        })    
    } catch (error) {
        console.log(error);
    }
}