const { express } = require('../libs/index')
const app = express.Router()
const { userRegister, userFindAll, userFindById, getMe, userLogin } = require('../controllers/user.controller')
const { userRegisterList, userLoginList } = require('../middleware/joi/index')
const { protectRoute  } = require('../middleware/jwt/authMiddleware')
const { verifyJWT } = require('../middleware/jwt/verifyToken')

app.post('/register', userRegisterList, userRegister)
app.post('/login',userLoginList, userLogin)
app.route('/').get(userFindAll)
app.post('/id', protectRoute,userFindById)
app.post('/me', verifyJWT, getMe)



module.exports = app;