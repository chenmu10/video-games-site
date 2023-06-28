import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from '../Entities/Game';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string | number) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug || ''),
    staleTime: ms('24h'),
  });

export default useGame;
