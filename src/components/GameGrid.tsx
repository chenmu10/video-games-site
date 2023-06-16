import { Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
interface GameGridProps {}

const GameGrid: FC<GameGridProps> = ({}) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));

    return () => {};
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
