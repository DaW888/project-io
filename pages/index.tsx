import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getOverview, Overview } from '../database';
import MovieCard from '@components/MovieCard';
import { Grid } from '@nextui-org/react';
import { Input } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  overviews: Overview[];
}

const Home: NextPage<Props> = ({ overviews }) => {
  const [movies, setMovies] = useState<Overview[]>(overviews);

  const search = (e: string) => {
    if (e === '') {
      setMovies(overviews);
    } else {
      setMovies(overviews.filter(movie => movie.title.toLowerCase().includes(e.toLowerCase())));
    }
  };

  return (
    <div className='align-center justify-center bg-black px-12 text-white'>
      <Head>
        <title>Hi</title>
        <meta name='description' content='Hello in the template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='sticky top-0 left-0 z-50 flex w-full justify-center bg-black py-8'>
        <Input width={'30vw'} onInput={e => search(e.currentTarget.value)} placeholder='Search' />
      </nav>
      <Grid.Container className='mt-12' wrap='wrap' gap={2} justify='center'>
        {movies.map(overview => (
          <Grid xs key={overview.id}>
            <MovieCard title={overview.title} image={overview.image} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { overviews: getOverview() },
  };
};
