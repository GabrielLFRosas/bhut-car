import { Router } from 'express';
import { getCarController, postCarController } from '../controllers/car.controller';

const router = Router();
router.get('/car', getCarController);
router.post('/car', postCarController);

export default router;