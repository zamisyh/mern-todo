const { joi } = require('../../libs/index')

exports.updateTask = joi.object().keys({
    title: joi.string().required(),
    date: joi.date().required()
})

exports.updateMark = joi.object().keys({
    mark: joi.binary().required()
})