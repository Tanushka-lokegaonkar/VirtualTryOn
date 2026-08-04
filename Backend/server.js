import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import e from 'express';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/userRoute.js';

// App config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

// Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));