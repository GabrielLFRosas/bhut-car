import { Request, Response } from 'express';

import { connectRabbitMQ, QUEUE_NAME } from '../config/rabbitmq';
import { createCar, getCars } from '../services/car.service';

export const getCarController = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carros' });
  }
};

export const postCarController = async (req: Request, res: Response) => {
  try {
    const response = await createCar(req.body);
    const channel = await connectRabbitMQ();
    channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify({
      car_id: response.id,
      data_hora_criacao: new Date().toISOString(),
    })));
    res.json(response);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erro ao criar carro' });
  }
};