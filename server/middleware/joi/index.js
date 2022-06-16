const { updateTask } = require('./schema')

exports.updateTaskList = (req, res, next) => {
    const { result, error } = updateTask.validate(req.body);
    (error === undefined) ? next() : res.send({message: error}).status(304); 
}