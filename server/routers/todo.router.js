const { express } = require('../libs/index')
const app = express.Router()

const { addTask, getTask, getAllTask } = require('../controllers/todo.controller')

app.route('/').post(addTask).get(getAllTask)
app.route('/:user_id').get(getTask)

module.exports = app;