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

exports.userLogin = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;

    const u = await User.findOne({email})

    if(u && (await bcrypt.compare(password, u.password))){
        res.json({
            _id: u.id,
            name: u.name,
            email: u.email,
            token: generateToken(u._id)
        })
    }else{
        res.status(400).json({message: "Invalid credentials"})
    }
});

exports.userFindAll = async (req, res, next) => {
    try{
        await User.find().select("-password").then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(422).json({
                status: 422,
                message: "Something wrong"
            })
        })
    }catch(err){
        console.log(`${err}`.red)
    }
}

exports.userFindById = async (req, res, next) => {
    try{
        await User.findOne({"_id": req.body.id}).select("-password")
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                res.status(422).json({
                    status: 422,
                    message: "Something wrong"
                })
            })
    }catch(err){
        console.log(`${err}`.red)
    }
}

exports.getMe = async (req, res) => {
    await res.json({
        isLoggedIn: true,
        data: {
            id: req.user.id,
           
        }
    })
}



