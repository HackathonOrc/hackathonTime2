import { Request, Response, Router } from 'express';
import UserController from '../controllers/usercontroller';

const userController = new UserController();

const userRoutes = Router();

userRoutes.post('/', (req: Request, res: Response) => {
    userController.createUser(req, res);
});

userRoutes.get('/all', (req: Request, res: Response) => {
    userController.getAllUsers(req, res);
});

export default userRoutes;