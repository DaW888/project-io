import { atom } from 'recoil';

// class - Context

// statyczne zmienne
export const dateState = atom<Date | null>({
  key: 'date',
  default: null,
});

// private function
const generateSeats = (): boolean[] => {
  return [...Array(20).keys()].map(i => false);
};
// pubic static variable
export const seatsState = atom<boolean[]>({
  key: 'seats',
  default: generateSeats(),
});

// pubic static variable
export const toPayState = atom<number>({
  key: 'toPay',
  default: 0,
});
