require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
    // Database connection 
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,  useUnifiedTopology: true });

    const connect = mongoose.connection;

    try{
        await connect.once("open", () =>{
            console.log("Database connected");
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB;