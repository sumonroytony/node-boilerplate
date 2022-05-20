import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port = 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
