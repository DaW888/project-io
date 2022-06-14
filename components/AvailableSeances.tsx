import { FC } from 'react';
import { addDays, lightFormat } from 'date-fns';
import { Button } from 'antd';
import { getTime } from '../utils';
import { useRecoilState } from 'recoil';
import { dateState } from '../context';

// class
export const AvailableSeances: FC = () => {
  const [, setDate] = useRecoilState(dateState);

  // return JSX
  return (
    <>
      <h3 className='text-center text-2xl'>Available seances</h3>
      <div className='flex w-full flex-row justify-evenly'>
        {[0, 1, 2].map(d => (
          <div key={d}>
            <p className='text-center text-2xl'>{lightFormat(addDays(new Date(), d + 1), 'yyyy-MM-dd')}</p>
            <div className='flex flex-col'>
              <Button onClick={() => setDate(getTime(10, 0, d))}>10:00</Button>
              <Button onClick={() => setDate(getTime(16, 0, d))}>16:00</Button>
              <Button onClick={() => setDate(getTime(20, 0, d))}>20:00</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
