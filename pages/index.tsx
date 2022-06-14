import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getOverview } from '../database';
import MovieCard from '@components/MovieCard';
import { useState } from 'react';
import { Input } from 'antd';
import { Overview } from '../types';

const { Search } = Input;

// parametry klasy (czyli konstruktora)
interface Props {
  overviews: Overview[];
}

// class
const MovieList: NextPage<Props> = ({ overviews }) => {
  // variable
  const [movies, setMovies] = useState<Overview[]>(overviews);

  // function (param: string): void
  const search = (e: string) => {
    if (e === '') {
      setMovies(overviews);
    } else {
      setMovies(overviews.filter(movie => movie.title.toLowerCase().includes(e.toLowerCase())));
    }
  };

  // class return JSX
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

// MovieList agreguje częściowo database.getOverview()
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { overviews: getOverview() },
  };
};
