import { SimpleGrid, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import useGames from '../hooks/UseGames';
import apiClient from '../services/api-client';
import GameCard from './GameCard';

interface GameGridProps {}

const GameGrid: FC<GameGridProps> = ({}) => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
