import axios from "axios";
import dotenv from "dotenv";

import { connectRabbitMQ, QUEUE_NAME } from "../config/rabbitmq";
import { createLog } from "../services/log.service";

export const startConsumer = async () => {
  try {
    const channel = await connectRabbitMQ();
    console.log("Aguardando mensagens na fila...");

    channel.consume(QUEUE_NAME, async (msg) => {
      if (msg) {
        const content = JSON.parse(msg.content.toString());
        const webhoohURL = process.env.WEBHOOK_URL || "";

        try {
          await axios.post(webhoohURL, content);
          console.log(`Dados enviados para o webhook: ${content.car_id}`);
        } catch (error) {
          console.error(`Erro ao enviar dados para o webhook: ${error}`);
        }

        try {
          await createLog({
            car_id: content.car_id,
            data_hora_criacao: content.data_hora_criacao,
            data_hora_processamento: new Date().toISOString(),
          });
          console.log(`Log criado para o carro ID: ${content.car_id}`);
        } catch (error) {
          console.error(`Erro ao criar log: ${error}`);
        }

        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Erro ao iniciar o consumidor:", error);
  }
};

startConsumer();
