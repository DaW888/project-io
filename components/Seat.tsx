import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { seatsState } from '../context';

// class
const Seat: FC<{ id: number; reserved: boolean }> = ({ id, reserved }) => {
  // variable
  const [seats, setSeats] = useRecoilState(seatsState);
  // private function void
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
