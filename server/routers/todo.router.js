const { express } = require('../libs/index')
const app = express.Router()

const { addTask, getTask, getAllTask, removeTask, updateTask } = require('../controllers/todo.controller')
const { updateTaskList } = require('../middleware/joi/index')

app.route('/').post(addTask).get(getAllTask).delete(removeTask)
app.route('/:user_id').get(getTask).put(updateTaskList, updateTask)

module.exports = app;