import { GetServerSideProps, NextPage } from 'next';
import { getMovie } from 'database';
import { useRecoilState } from 'recoil';
import { dateState, seatsState, toPayState } from '../../../context';
import { lightFormat } from 'date-fns';
import { AvailableSeances } from '@components/AvailableSeances';
import { AvailableSeats } from '@components/AvailableSeats';
import Payment from '@components/Payment';
import PersonalDataForm from '@components/PersonalDataForm';
import { Movie } from '../../../types';

interface Props {
  movie: Movie | null;
}

// class
const Tickets: NextPage<Props> = ({ movie }) => {
  // variables
  const [date] = useRecoilState(dateState);
  const [seats] = useRecoilState(seatsState);
  const [toPay] = useRecoilState(toPayState);

  if (!movie) return <div>Movie not found</div>;
  return (
    <div className='flex w-full flex-col items-center justify-center px-[10%] pt-[6%]'>
      <h1 className='text-center text-4xl'>
        You are booking ticket on <br /> <span className='text-6xl text-blue-400'>{movie.title}</span>
      </h1>
      <br />
      <AvailableSeances />
      <br />
      <br />
      {date && (
        <h2 className='text-center text-2xl'>
          You selected time to: <br />
          {lightFormat(date, 'yyyy/MM/dd HH:mm')}
        </h2>
      )}

      {date && <AvailableSeats />}
      <br />
      {date && <Payment seats={seats} />}
      {toPay != 0 && <PersonalDataForm />}
    </div>
  );
};

export default Tickets;

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.query.id;
  if (typeof id !== 'string') {
    return {
      props: {
        movie: null,
      },
    };
  }
  const movie = getMovie(id);

  return {
    props: { movie },
  };
};
