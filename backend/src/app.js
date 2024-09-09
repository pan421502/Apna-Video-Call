import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";


import { connect } from "node:http2";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());

app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended:true}));

app.use("/api/v1/users", userRoutes);

const start = async() =>{
    const connectionDb = await mongoose.connect("mongodb+srv://pan421502:joYCdjPJg1b5pBfA@cluster0.aryrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () =>{
        console.log("listerning on port 8000")
    });
}

start();