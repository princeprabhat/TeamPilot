import express from "express";

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World! I am Prince');
});

export default app;