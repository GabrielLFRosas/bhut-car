import app from './app';
import { startConsumer } from './consumers/car.consumer';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  startConsumer(); 
});
