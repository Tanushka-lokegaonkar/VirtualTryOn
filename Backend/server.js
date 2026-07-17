import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import e from 'express';

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

// Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));