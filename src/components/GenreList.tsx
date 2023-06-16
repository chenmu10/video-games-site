import { SkeletonText, Text } from '@chakra-ui/react';
import { FC } from 'react';
import useGenres from '../hooks/useGenres';

interface GenreListProps {}

const GenreList: FC<GenreListProps> = ({}) => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && skeletons.map((s) => <SkeletonText key={s} />)}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
