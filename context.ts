import { atom } from 'recoil';

export const dateState = atom<Date | null>({
  key: 'date',
  default: null,
});

const generateSeats = (): boolean[] => {
  return [...Array(20).keys()].map(i => false);
};
export const seatsState = atom<boolean[]>({
  key: 'seats',
  default: generateSeats(),
});

export const toPayState = atom<number>({
  key: 'toPay',
  default: 0,
});
