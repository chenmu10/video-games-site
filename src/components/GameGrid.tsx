import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { FetchResponse } from '../services/api-client';
import Game from '../Entities/Game';

const GameGrid: FC = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  const fetchedGameCount =
    data?.pages.reduce(
      (total: number, page: FetchResponse<Game>) => total + page.results.length,
      0
    ) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGameCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page: FetchResponse<Game>, index: number) => (
          <React.Fragment key={index}>
            {page?.results.map((game: Game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
