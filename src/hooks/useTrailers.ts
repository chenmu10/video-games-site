import { useQuery } from '@tanstack/react-query';
import m from 'ms';
import Trailer from '../Entities/Trailer';
import APIClient, { FetchResponse } from '../services/api-client';

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
    staleTime: m('24h'),
  });
};

export default useTrailer;
