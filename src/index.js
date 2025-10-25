// require('dotenv').config({path: './env})

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err)
})










// New-Item app.js...creates app.js
// Starts server as files are saved - Nodemon












// function connectDB(){
// }
// connectDB()

// oR To execute immediate, use IIFE
/*



import express from "express"
const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR: ", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`APp is listening on port ${process.env.PORT}`)
            })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/