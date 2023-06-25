import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { GameQuery } from '../App';
import usePlatforms from '../hooks/UsePlatforms';
import useGenres from '../hooks/useGenres';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading: FC<GameHeadingProps> = ({ gameQuery }) => {
  const { data: platforms } = usePlatforms();
  const selectedPlatformName = platforms.results.find(
    (p) => p.id === gameQuery.platformId
  )?.name;
  const { data: genres } = useGenres();
  const selectedGenreName = genres.results.find(
    (g) => g.id === gameQuery.genreId
  )?.name;
  const heading = `${selectedPlatformName || ''} ${
    selectedGenreName || ''
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
