import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';

import routes from "./routes/index.js"
dotenv.config();


const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev'))

// db connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("DB Connected Successfully."))
    .catch((err)=> console.log("Failed to connect to DB:", err));

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.get("/", async(req, res)=> {
    res.status(200).json({
        message: "Welcome to Task Hub API",
    })
})
// http:localhost:500/api-v1/
app.use("/api-v1", routes)

//error middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// not found middleware
app.use((req, res, next)=> {
    res.status(404).json({
        message: "Not Found",
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})