const { joi } = require('../../libs/index')

exports.updateTask = joi.object().keys({
    title: joi.string().required(),
    date: joi.date().required()
})