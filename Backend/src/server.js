
import app from './app.js';

import config from "./config/config.js";
import mongoose from 'mongoose'



let server;


mongoose.connect(config.mongoose.url).then(() => {
    console.info("Connected to MongoDb on port: ", config.mongoose.url);
    server = app.listen(config.port || 3000, () => {
        console.info("Server listening on Port: ", config.port)
    })
}).catch((err) => {
    console.error("Error connecting MongoDb: ", err);
})

