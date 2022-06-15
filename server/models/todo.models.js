const { mongoose } = require('../libs/index')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    mark: {
        type: Boolean,
        default: false
    },
    user_id: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Task', TaskSchema)