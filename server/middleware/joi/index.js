const { updateTask, updateMark, userRegister,userLogin } = require('./schema')

exports.updateTaskList = (req, res, next) => {
    const { result, error } = updateTask.validate(req.body);
    (error === undefined) ? next() : res.send({message: error}).status(304); 
}

exports.updateMarkList = (req, res, next) => {
    const { result, error } = updateMark.validate(req.body);
    ( error === undefined ) ? next() : res.send({message: error}).status(304);
}

exports.userRegisterList = (req, res, next) => {
    const { result, error } = userRegister.validate(req.body);
    (error === undefined) ? next() : res.send({message: error}).status(304);
}

exports.userLoginList = (req, res, next) => {
    const { result, error } = userLogin.validate(req.body);
    (error === undefined) ? next() : res.send({message: error}).status(304);
}