import express from "express";
import connectDB from "./config/db.js";
import "dotenv/config"
import morgan from "morgan";
import infoRouter from "./routers/informacion.js";
import cors from "cors";
import userRouter from "./routers/user.js";

const server = express();
const host = process.env.HOST;
const port = process.env.PORT;

connectDB();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use("/info", infoRouter)
server.use("/user", userRouter)

server.get("/", (req, res)=>{
    res.status(204).send()
}) 

server.listen(port, ()=>{
    console.log(`server running at `);
})

//ateHX8NwW9AeIfqm, juanmonrrou4
//mongodb+srv://juanmonrrou4:ateHX8NwW9AeIfqm@cluster0.gpnvgi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0