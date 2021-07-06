import { Router } from 'express';

// importa as rotas
import userRoutes from './userRoutes'


const router = Router();

router.use('/user', userRoutes);


export default router;