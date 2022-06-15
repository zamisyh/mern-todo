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
// @desc get all task
// @route /api/v1/task/
// @access Public

exports.getAllTask = async (req, res, next) => {
    try{
        await Task.find().sort({'_id': -1})
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

// @desc delete task
// @route /api/v1/task/
// @access Private with token

exports.removeTask = async (req, res) => {
    try{
        await Task.findByIdAndDelete({'_id': req.body.id})
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Sucessfully delete task",
                    data: data
                })
            }).catch((err) => {
                res.status(400).json({
                    status: 400,
                    message: "Invalid params id or no data found!"
                })
            })
    }catch(err){
        console.log(`${err}`.red.bold)
    }
}
