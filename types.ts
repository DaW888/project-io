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
  similars: { id: string; title: string; image: string; rating: string }[];
  genres: string[];
}

// interfejsy dla klas - importowane z type.ts
