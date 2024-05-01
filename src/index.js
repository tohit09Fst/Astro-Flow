import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import astroRouter from './routes/astroRoutes.js';

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://tohitk121:9W3Sz9DS5vtAou6n@cluster0.dnwtdcw.mongodb.net/")
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err.message));

app.use('/astrologer', astroRouter);
app.use('/user', userRouter);

app.listen(8000, () => console.log("Server started on port 8000"));
