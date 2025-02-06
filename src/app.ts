import dotenv from 'dotenv';
import express from 'express';

import connectDB from './config/database';
import carRoutes from './routes/car.routes';
import logRoutes from './routes/log.routes';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api', carRoutes);
app.use('/api', logRoutes);

export default app;
