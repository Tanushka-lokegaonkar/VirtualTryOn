import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

// Route for user login
userRouter.post('/login', loginUser);

// Route for user registration
userRouter.post('/register', registerUser);

// Route for getting user profile
userRouter.post('/admin', adminLogin);

export default userRouter;