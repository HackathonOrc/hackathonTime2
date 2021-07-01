import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';

const router = Router();

router.use('/', homeRoutes);

router.get('/register', function(req, res) {
    res.send('Cadastrar');
});

router.get('/login', function(req, res) {
    res.send('Entrar');
});

export default router;