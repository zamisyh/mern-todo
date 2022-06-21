const Task = require('../models/todo.models')

// @desc add task
// @route /api/v1/task
// @method POST
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
// @method GET
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
// @method GET
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
// @method DELETE
// @access Private with token

exports.removeTask = async (req, res) => {
    try{
        await Task.findByIdAndDelete({'_id': req.params.id})
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
        console.log(`${err.message}`.red.bold)
    }
}

// @desc update task
// @route /api/v1/task/id
// @method UPDATE
// @access Private with token

exports.updateTask = async (req, res) => {
    try{
        await Task.findOneAndUpdate({_id: req.params.user_id}, {
            title: req.body.title,
            date: req.body.date
        }).then((data) => {
            res.status(201).json({
                status: 200,
                message: "Sucesfully update task",
            })
        }).catch((err) => {
            res.status(400).json({
                status: 400,
                message: "Invalid params id or no data found!"
            })
        })
    }catch(error){
        console.log(`${error}`.red.bold)
    }
}

// @desc update mark
// @route /api/v1/task/id
// @method UPDATE
// @access Private with token

exports.updateMark = async (req, res) => {
    try{
        await Task.findOneAndUpdate({_id: req.params.user_id}, {
           mark: req.body.mark
        }).then((data) => {
            res.status(201).json({
                status: 200,
                message: "Sucesfully update mark",
            })
        }).catch((err) => {
            res.status(400).json({
                status: 400,
                message: "Invalid params id or no data found!"
            })
        })
    }catch(error){
        console.log(`${error}`.red.bold)
    }
}

