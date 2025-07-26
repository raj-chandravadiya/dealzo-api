import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import authorizer from './src/routes/auth.routes';

const app = express();

app.use(express.json());
app.use('/v1.0', authorizer);

export default app;
