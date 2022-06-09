import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { seatsState } from '../context';
import Seat from '@components/Seat';

export const AvailableSeats: FC = () => {
  const [seats] = useRecoilState(seatsState);

  return (
    <>
      <h3 className='text-center text-2xl'>Available Seats</h3>
      <div className='grid w-[320px] grid-cols-5 flex-row gap-1'>
        {seats.map((s, i) => (
          <Seat key={i} id={i} reserved={s} />
        ))}
      </div>
    </>
  );
};
