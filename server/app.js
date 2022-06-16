const { express, cors, colors, http, env } = require('./libs/index')
const connectDB = require('./config/connection')
const task = require('./routers/todo.router')
const user = require('./routers/user.router')

env.config({ path: './config/config.env' })
connectDB();

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}))


app.use('/api/v1/task', task)
app.use('/api/v1/auth', user)
app.all("*", (req, res) => {
    res.send({
        message: "The router or endpoint you entered was not found"
    });
});

const server = http.createServer(app)
server.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${process.env.PORT}`.yellow.bold)
})
