import express from 'express';
import {createServer} from "node:http";
import {Server} from  "socket.io";
import mongoose from "mongoose";
import cors from 'cors';
// import userRouter from './routes/user.routes.js';
import {connectToSocket} from './controllers/socektManager.js';
import userRoutes from './routes/user.routes.js';

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",process.env.PORT || 8000);
app.use(cors()); 
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

console.log("User routes mounted");
app.use("/api/v1/users",userRoutes);
        

const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://sondekaravdhut25_db_user:PMlc26N2AHoxiTYQ@cluster0.piieuxu.mongodb.net/");
    console.log(`Mongo connected host:${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log('server is listening on port ' + app.get("port"));
    });

}
start();
