import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  car_id: String,
  data_hora_criacao: Date,
  data_hora_processamento: Date,
});

export default mongoose.model('Log', LogSchema);