import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getOverview, Overview } from '../database';
import MovieCard from '@components/MovieCard';
import { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;
interface Props {
  overviews: Overview[];
}

const MovieList: NextPage<Props> = ({ overviews }) => {
  const [movies, setMovies] = useState<Overview[]>(overviews);

  const search = (e: string) => {
    if (e === '') {
      setMovies(overviews);
    } else {
      setMovies(overviews.filter(movie => movie.title.toLowerCase().includes(e.toLowerCase())));
    }
  };

  return (
    <div className='align-center flex min-h-full w-full flex-col justify-center bg-black px-12 text-white'>
      <Head>
        <title>Cinema</title>
        <meta name='description' content='Hello in the template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='sticky top-0 left-0 z-50 flex w-full justify-center bg-black py-8'>
        <Search
          placeholder='Search movie'
          onChange={e => search(e.currentTarget.value)}
          allowClear
          style={{ width: '50%' }}
        />
      </nav>
      <div className='movies-container'>
        {movies.map(overview => (
          <MovieCard key={overview.id} id={overview.id} title={overview.title} image={overview.image} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { overviews: getOverview() },
  };
};
