import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='align-center flex h-screen w-screen justify-center bg-black text-white'>
      <Head>
        <title>Hi</title>
        <meta name='description' content='Hello in the template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col justify-center'>
        <h1 className='text-center'>Hi</h1>
      </main>
    </div>
  );
};

export default Home;
