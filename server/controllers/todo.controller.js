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

// @desc get task by user_id
// @route /api/v1/task/user_id
// @access Private by user

exports.getTask = async (req, res, next) => {
    try{
        await Task.find({'user_id': req.params.user_id}).sort({'_id': -1})
            .then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                res.status(500).json({
                    status: 500,
                    message: err
                })
            });
    }catch(err){
        console.log(`${err}`.red.bold)
    }
}
