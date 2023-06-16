import { FC } from 'react';
import useGenres from '../hooks/useGenres';

interface GenreListProps {}

const GenreList: FC<GenreListProps> = ({}) => {
  const { data } = useGenres();

  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
