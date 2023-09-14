import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from 'router';

const app = express();

app.use(cors({
    credentials: true
}))

app.use(compression());
app.use(cookieParser())
app.use(bodyParser.json());

app.use((req, res)=> {
    console.log(req.method + " " + req.url);
    res.end()
})

const server = http.createServer(app);

server.listen(8000, ()=>{
    console.log("Server is running on localhost:8000");
})

const MONGODB_URL = "mongodb+srv://iammadanlalmali:nodets@cluster0.pxshgxl.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.connection.on("error", (error: Error)=> console.log(error));

app.use('/', router())
