const { express } = require('../libs/index')
const app = express.Router()

const { addTask, getTask, getAllTask, removeTask } = require('../controllers/todo.controller')

app.route('/').post(addTask).get(getAllTask).delete(removeTask)
app.route('/:user_id').get(getTask)

module.exports = app;