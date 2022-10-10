const mongoose = require("mongoose")
const colors = require("colors")
const uri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)

    }
}

module.exports = connectDB