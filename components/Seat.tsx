import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { seatsState } from '../context';

const Seat: FC<{ id: number; reserved: boolean }> = ({ id, reserved }) => {
  const [seats, setSeats] = useRecoilState(seatsState);
  const reserve = () => {
    const newSeats = [...seats];
    newSeats[id] = !reserved;
    setSeats(newSeats);
    console.log(id, reserved);
  };

  return (
    <div
      style={{ backgroundColor: reserved ? 'green' : 'white' }}
      onClick={reserve}
      className='h-[60px] w-[60px]'
    ></div>
  );
};

export default Seat;
