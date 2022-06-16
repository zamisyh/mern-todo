const { express } = require('../libs/index')
const app = express.Router()
const { userRegister, userFindAll } = require('../controllers/user.controller')
const { userRegisterList } = require('../middleware/joi/index')

app.post('/register', userRegisterList, userRegister)
app.route('/').get(userFindAll)



module.exports = app;