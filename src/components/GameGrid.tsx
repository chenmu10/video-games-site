import { SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/UseGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
interface GameGridProps {
  gameQuery: GameQuery | null;
}

const GameGrid: FC<GameGridProps> = ({ gameQuery }) => {
  const { data, error, isLoading } = useGames(gameQuery as GameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
