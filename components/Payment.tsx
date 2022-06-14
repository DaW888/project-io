import { FC, useEffect, useState } from 'react';
import { Radio } from 'antd';
import { useRecoilState } from 'recoil';
import { toPayState } from '../context';

// private statyczna funkcja - Payment
const countSeats = (seats: boolean[]) => {
  return seats.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
};

// class
const Payment: FC<{ seats: boolean[] }> = ({ seats }) => {
  // variable
  const [toPay, setToPay] = useRecoilState(toPayState);
  // variable
  const [price, setPrice] = useState<number>(12);
  // variable
  const [totalSeats, setTotalSeats] = useState<number>(0);

  useEffect(() => {
    setTotalSeats(countSeats(seats));
    setToPay(totalSeats * price);
  }, [price, seats, setToPay, totalSeats]);

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-3xl'>Payment</h2>
      <h2 className='text-2xl'>You choose {totalSeats} seats.</h2>
      <Radio.Group onChange={e => setPrice(e.target.value)} defaultValue={12}>
        <Radio.Button value={12}>2D - $12</Radio.Button>
        <Radio.Button value={15}>3D - $15</Radio.Button>
        <Radio.Button value={20}>4D - $20</Radio.Button>
      </Radio.Group>
      <h2 className='mt-4 text-2xl'>Total: ${toPay}</h2>
    </div>
  );
};

export default Payment;
