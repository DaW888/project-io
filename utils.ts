import { addDays } from 'date-fns';
import axios from 'axios';

// class - Utils

// funkcja utils
export const getTime = (h: number, m: number, addedDays = 0): Date => {
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m);
  console.log(addedDays);
  console.log(date);
  return addDays(date, addedDays + 1);
};

// funkcja utils
export const sendEmail = async (email: string, name: string, toPay: number) => {
  const res = await axios.post('/api/send-email', { email, name, toPay });
  return res.status === 200;
};

// funkcja utils
export const checkPayment = async (name: string, email: string, cardNumber: string, toPay: number, ccv: number) => {
  const res = await axios.post('/api/send-email', { email, name, toPay, cardNumber, ccv });
  return res.status === 200;
};
