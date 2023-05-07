import cors from 'cors';
import express, { NextFunction, Request, Response, response } from 'express';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import dbConnect from '@modules/connection/dbConnection';
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: 'Interval server error',
    });
  }
  return res.status(500).json({
    error: error,
  });
});

//database
dbConnect();

//routes
app.use(routes);

app.listen(3333, () => {
  console.log('running server on port 3333');
});
