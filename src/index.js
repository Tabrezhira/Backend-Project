// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is run on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log ("mongo db connection fail", err)
})