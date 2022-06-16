const { joi } = require('../../libs/index')

exports.updateTask = joi.object().keys({
    title: joi.string().required(),
    date: joi.date().required()
})

exports.updateMark = joi.object().keys({
    mark: joi.binary().required()
})

exports.userRegister = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().exist().required(),
    password: joi.string().required(),
    confirm_password: joi.string().required().valid(joi.ref('password'))
})