const { express } = require('../libs/index')
const app = express.Router()

const { addTask } = require('../controllers/todo.controller')

app.route('/').post(addTask)

module.exports = app;