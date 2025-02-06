import { Router } from 'express';

import { getLogsController } from '../controllers/log.controller';

const router = Router();
router.get('/logs', getLogsController);

export default router;