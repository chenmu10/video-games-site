import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchResponse } from '../services/api-client';
import { Platform } from './UsePlatforms';

const apiClient = new APIClient<Game>('/games');
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          searchText: gameQuery.searchText,
          sortOrder: gameQuery.sortOrder,
          pageParam: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGames;
