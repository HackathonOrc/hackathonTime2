import { Request, Response, Router } from 'express';

import UserController from '../controllers/usercontroller';
import Auth from '../middlewares/auth'

const userController = new UserController();
const auth = new Auth;

const userRoutes = Router();

userRoutes.post('/', (req: Request, res: Response) => {
    userController.createUser(req, res);
});

userRoutes.get('/all/',auth.autenticate,(req: Request, res: Response) => {
    userController.getAllUsers(req, res);
});

userRoutes.post('/login', (req: Request, res: Response) => {
    userController.login(req, res);
});

export default userRoutes;