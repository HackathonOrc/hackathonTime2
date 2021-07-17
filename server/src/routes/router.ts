import { Router } from 'express';

// importa as rotas
import userRoutes from './userRoutes'

const router = Router();

router.use('/user', userRoutes);


router.get('/register', function(req, res) {
    res.send('Cadastrar');
});

router.get('/login', function(req, res) {
    res.send('Entrar');
});

export default router;