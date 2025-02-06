import axios from 'axios';
import { CreateCarProps } from '../types/car';

const API_EXTERNAL = 'http://api-test.bhut.com.br:3000/api/v1/carro';
const token = process.env.AUTH_API_TOKEN;

axios.interceptors.request.use(
  (config: any) => {
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export const getCars = async () => {
  const {data} = await axios.get(API_EXTERNAL);
  return data;
};

export const createCar = async (carData: CreateCarProps) => {
  const {data} = await axios.post(API_EXTERNAL, carData);
  return data;
};