const Task = require('../models/todo.models')

// @desc add task
// @route /api/v1/task
// @access Public

exports.addTask = async (req, res, next) => {
    try{
        await new Task({
            title: req.body.title,
            date: req.body.date,
            user_id: req.body.user_id
        }).save((err, data) => {
            (err) ? res.status(500).json(err) : res.status(200).json({
                status: 200,
                message: "Sucesfully created task",
                data: data
            })
        });
    }catch (err) {
        console.log(`${err}`.red.bold)
    }
}