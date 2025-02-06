import { Request, Response } from 'express';

import { getLogs } from '../services/log.service';

export const getLogsController = async (req: Request, res: Response) => {
  const logs = await getLogs();
  res.json(logs);
};