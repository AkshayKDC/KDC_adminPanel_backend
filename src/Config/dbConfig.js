require('dotenv').config()
const mongoose = require('mongoose');


const connectDB=()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.MONGO_URL)
}

module.exports=connectDB;