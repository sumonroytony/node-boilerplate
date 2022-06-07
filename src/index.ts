import express, { Application, Request, Response, NextFunction } from 'express';
import { ErrorCode, ErrorException, errorHandler } from './api/v1/middlewares';

const dotenv = require('dotenv');

const app: Application = express();
dotenv.config();

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is listening on port ${process.env.PORT || 5000}`)
);
