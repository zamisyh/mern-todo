const { express } = require('../libs/index')
const app = express.Router()

const { addTask, getTask } = require('../controllers/todo.controller')

app.route('/').post(addTask)
app.route('/:user_id').get(getTask)

module.exports = app;