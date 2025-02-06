import Log from '../models/log.model';

export const getLogs = async () => {
  return Log.find();
};

export const createLog = async (logData: any) => {
  return Log.create(logData);
};