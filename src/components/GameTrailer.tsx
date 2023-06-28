import { Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import useTrailer from '../hooks/useTrailers';

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer: FC<GameTrailerProps> = ({ gameId }) => {
  const { data: movies, isLoading, error } = useTrailer(gameId);
  const first = movies?.results[0];
  if (error) throw error;
  if (isLoading) return <Spinner />;
  return first ? (
    <video controls src={first?.data[480]} poster={first.preview} />
  ) : null;
};

export default GameTrailer;
