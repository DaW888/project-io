import data from './movies.json';

const movies = data.items;

export default movies;

export interface Overview {
  id: string;
  title: string;
  image: string;
  genres: string[];
}

export interface Movie {
  id: string;
  rank: number;
  title: string;
  year: number;
  image: string;
  crew: string;
  releaseDate: string;
  runtimeStr: string;
  plot: string;
  awards: string;
  directors: string;
  actorList: { name: string; image: string; role: string }[];
  genres: string[];
}

export const getOverview = (): Overview[] => {
  return movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    image: movie.image,
    genres: movie.genres.split(', '),
  }));
};

export const getMovie = (id: string): Movie | null => {
  const movie = movies.find(movie => movie.id === id);
  if (!movie) return null;

  return {
    id: movie.id,
    rank: Number.parseInt(movie.rank, 10),
    title: movie.title,
    year: Number.parseInt(movie.year, 10),
    image: movie.image,
    crew: movie.crew,
    releaseDate: movie.releaseDate,
    runtimeStr: movie.runtimeStr,
    plot: movie.plot,
    awards: movie.awards,
    directors: movie.directors,
    actorList: movie.actorList.map(actor => ({
      name: actor.name,
      image: actor.image,
      role: actor.asCharacter,
    })),
    genres: movie.genres.split(', '),
  };
};
