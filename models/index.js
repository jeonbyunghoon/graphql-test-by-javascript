// mongoDB 연결

const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
// Local server
// const MONGO_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@127.0.0.1:27017/${DB_NAME}`

// Develop server
const MONGO_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@192.168.10.38:57017/${DB_NAME}`;

module.exports = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => {
        console.log('MongoDB Connnected!')
    }).catch(err => {
        console.log(err);
    });
}
