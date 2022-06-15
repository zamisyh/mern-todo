const { mongoose, colors } = require('../libs/index')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL+"/"+process.env.MONGO_DB, {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    }).then(() => {
        console.log(`Connected to Database`.cyan.underline.bold)
    }).catch((err) => {
        console.log(`Database Error : ${err}`.red.bold);
    });
}

module.exports = connectDB;