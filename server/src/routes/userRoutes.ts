import { Request, Response, Router } from 'express';

import UserController from '../controllers/usercontroller';

const userController = new UserController();

const userRoutes = Router();

userRoutes.post('/', (req: Request, res: Response) => {
    userController.createUser(req, res);
});

userRoutes.get('/all/:token', (req: Request, res: Response) => {
    userController.getAllUsers(req, res);
});
userRoutes.post('/login', (req: Request, res: Response) => {
    userController.login(req, res);
});

export default userRoutes;