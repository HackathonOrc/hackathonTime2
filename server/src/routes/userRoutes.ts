import { Request, Response, Router } from 'express';

import UserController from '../controllers/usercontroller';
import Auth from '../middlewares/auth'

const userController = new UserController();
const auth = new Auth;

const userRoutes = Router();

userRoutes.post('/register', (req: Request, res: Response) => {
    userController.createUser(req, res);
});

userRoutes.put('/validate', (req: Request, res: Response) => {
    userController.validateUser(req, res);
});

userRoutes.get('/all', (req: Request, res: Response) => {
    userController.getAllUsers(req, res);
});

userRoutes.get('/:id', (req: Request, res: Response) => {
    userController.getOneUser(req, res);
});

userRoutes.post('/login', (req: Request, res: Response) => {
    userController.login(req, res);
});

userRoutes.post('/forgot_password', (req: Request, res: Response) => {
    userController.forgotPassword(req, res);
});

userRoutes.post('/reset_password', (req: Request, res: Response) => {
    userController.resetPassword(req, res);
});

export default userRoutes;