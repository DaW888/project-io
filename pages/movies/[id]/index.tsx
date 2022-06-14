import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { getMovie } from 'database';
import Image from 'next/image';
import { Avatar, Button, Card, List } from 'antd';
import { useRouter } from 'next/router';
import { Movie } from '../../../types';

interface Props {
  movie: Movie | null;
}

// class
const MovieId: NextPage<Props> = ({ movie }) => {
  const router = useRouter();

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className='align-center flex min-h-screen w-full flex-col items-center'>
      <Image src={movie.image} alt={movie.title} width={300} height={450} />
      <Button className='my-4' type='primary' onClick={() => router.push(`/movies/${movie?.id}/tickets`)}>
        BUY TICKET
      </Button>
      <div className='w-full px-6 md:w-1/2 md:px-0'>
        <h1 className='text-4xl font-bold'>{movie.title}</h1>
        <p>rank: {movie.rank}</p>
        <p>year: {movie.year}</p>
        <p>director: {movie.directors}</p>
        <p>genres: {movie.genres.join(', ')}</p>
        <p>awards: {movie.awards}</p>
        <p>crew: {movie.crew}</p>
        <p>release date: {movie.releaseDate}</p>
        <p>duration: {movie.runtimeStr}</p>
        <p>plot: {movie.plot}</p>
        <h2>Actors</h2>
        <List
          itemLayout='horizontal'
          dataSource={movie.actorList}
          renderItem={actor => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={actor.image} size='large' />}
                title={actor.role}
                description={actor.name}
              />
            </List.Item>
          )}
        />
        <div className='similar-movies-container'>
          {movie.similars.map(similar => (
            <Card
              hoverable
              onClick={() => router.push(`/movies/${similar.id}`)}
              key={similar.id}
              style={{ width: 120 }}
              cover={<Image width={120} height={200} alt='example' src={similar.image} />}
            >
              <p>{similar.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieId;

// agreguje częściowo database.getMovie()
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
