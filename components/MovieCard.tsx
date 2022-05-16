import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'antd';
import Image from 'next/image';

interface Props {
  image: string;
  title: string;
  id: string;
}

const MovieCard: FC<Props> = ({ id, title, image }) => {
  const router = useRouter();

  return (
    <Card style={{ width: 300 }} cover={<Image width={300} height={450} alt='example' src={image} />}>
      <div className='cursor-pointer ' onClick={() => router.push(`movies/${id}`)}>
        <h2 className='text-md hover:text-blue-400'>{title}</h2>
      </div>
      <div className='mt-4 flex justify-center gap-3'>
        <Button>10:00</Button>
        <Button>16:00</Button>
        <Button>20:00</Button>
      </div>
    </Card>
  );
};

export default MovieCard;
