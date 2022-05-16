import { useRouter } from 'next/router';

import React, { FC } from 'react';

const MovieId: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <div>{id}</div>;
};

export default MovieId;
