import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'antd';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { dateState } from '../context';
import { getTime } from '../utils';

interface Props {
  image: string;
  title: string;
  id: string;
}

// class
const MovieCard: FC<Props> = ({ id, title, image }) => {
  const router = useRouter();
  const [, setDate] = useRecoilState(dateState);

  // function
  const selectTime = (h: number, m: number) => {
    //getTime jest z klasy utils
    setDate(getTime(h, m));
    router.push(`/movies/${id}/tickets`);
  };

  // return JSX
  return (
    <Card style={{ width: 300 }} cover={<Image width={300} height={450} alt='example' src={image} />}>
      <div className='cursor-pointer ' onClick={() => router.push(`movies/${id}`)}>
        <h2 className='text-md hover:text-blue-400'>{title}</h2>
      </div>
      <div className='mt-4 flex justify-center gap-3'>
        <Button onClick={() => selectTime(10, 0)}>10:00</Button>
        <Button onClick={() => selectTime(16, 0)}>16:00</Button>
        <Button onClick={() => selectTime(20, 0)}>20:00</Button>
      </div>
    </Card>
  );
};

export default MovieCard;
