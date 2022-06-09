import { addDays } from 'date-fns';

export const getTime = (h: number, m: number, addedDays = 0): Date => {
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m);
  console.log(addedDays);
  console.log(date);
  return addDays(date, addedDays + 1);
};
