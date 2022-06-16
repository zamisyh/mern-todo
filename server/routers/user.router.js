const { express } = require('../libs/index')
const app = express.Router()
const { userRegister } = require('../controllers/user.controller')
const { userRegisterList } = require('../middleware/joi/index')

app.post('/register', userRegisterList, userRegister)



module.exports = app;