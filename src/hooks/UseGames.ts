import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';

// TODO: fix duplication
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genre: gameQuery.genre,
            platform: gameQuery.platform,
            searchText: gameQuery.searchText,
            sortOrder: gameQuery.sortOrder,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
