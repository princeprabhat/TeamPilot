// src/config/config.js
import dotenv from 'dotenv'
import path from "path";
import Joi from "joi";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string()
            .valid("production", "development", "test")
            .required(),
        PORT: Joi.number().default(3000),
        MONGODB_URL: Joi.string().required().description("Mongo DB url"),
        JWT_SECRET: Joi.string().required().description("JWT secret key"),
        JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
            .default(30)
            .description("minutes after which access tokens expire"),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongoose: {
        url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),

    },
    jwt: {
        secret: envVars.JWT_SECRET,
        accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    },
};

export default config;