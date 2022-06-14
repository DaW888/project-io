import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { seatsState } from '../context';
import Seat from '@components/Seat';

// class
export const AvailableSeats: FC = () => {
  // variable
  const [seats] = useRecoilState(seatsState);

  // JSX
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
