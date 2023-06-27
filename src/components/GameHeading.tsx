import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';

const GameHeading: FC = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);
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
