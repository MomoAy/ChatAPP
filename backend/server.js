import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import userRoutes from './Routes/userRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', userRoutes);

app.listen(PORT, () => { console.log(`Server is listening on ${PORT}`) });