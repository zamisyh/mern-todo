const { express } = require('../libs/index')
const app = express.Router()

const { addTask, getTask, getAllTask, removeTask, updateTask, updateMark, getTaskById } = require('../controllers/todo.controller')
const { updateTaskList, updateMarkList } = require('../middleware/joi/index')

// app.route('/').post(addTask).get(getAllTask).delete(removeTask)
// app.route('/:user_id').get(getTask).put(updateTaskList, updateTask).put(updateMarkList, updateMark)

app.route('/').post(addTask).get(getAllTask)
app.get('/:user_id', getTask)
app.delete('/:id', removeTask)
app.post('/task_id', getTaskById)
app.put('/:user_id/task', updateTaskList, updateTask)
app.put('/:user_id/mark', updateMarkList, updateMark)


module.exports = app;