import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const controller: AuthController = new AuthController();

const router = Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);

export default router;
