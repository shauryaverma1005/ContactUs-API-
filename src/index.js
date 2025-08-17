import mongoose from "mongoose";
import { app } from "./app";
import { connectDB } from "./db/index.js"

//dotenv Config

//MongoDB connection 
connectDB()
.then(()=> {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err)=> {
    console.log(`MongoDB Connection ERR: ${err}`);
})