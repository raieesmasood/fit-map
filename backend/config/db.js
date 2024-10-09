const mongoose = require('mongoose');


const dbUrl = "mongodb://localhost:27017";
const connectDb = async() =>{
    try {
        await mongoose.connect(`${dbUrl}/FitMap`)
        console.log("Db Connected Successfully!");
        
    } catch (error) {
        console.log("Error While Connecting To DB", error)
    }
}

module.exports = connectDb