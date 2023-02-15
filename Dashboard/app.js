import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import clientRouter from "./routes/client.js"
import userRouter from "./routes/users.js"
import managementRouter from "./routes/users.js"
import salesRouter from "./routes/users.js"
import db from "./db.js"


var app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))









app.use('/', clientRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT||3000

db();
app.listen(PORT,()=>{
  console.log(`Server running on ${PORT}`)
})




export default app;
