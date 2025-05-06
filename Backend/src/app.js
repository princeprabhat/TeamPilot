import express from "express";
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import { errorHandler } from "./middlewares/error.js";
import routes from './routes/v1/index.js';
import ApiError from "../src/utils/ApiError.js";
import httpStatus from 'http-status'

const app = express();


app.use(helmet());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(compression())

app.use(cors())
app.options('*', cors())


app.use('/v1', routes)

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});
app.use(errorHandler)

export default app;