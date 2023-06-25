import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { GameQuery } from '../App';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading: FC<GameHeadingProps> = ({ gameQuery }) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);
  const heading = `${selectedPlatform?.name || ''} ${
    selectedGenre?.name || ''
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
