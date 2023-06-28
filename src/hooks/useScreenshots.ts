import { useQuery } from '@tanstack/react-query';
import m from 'ms';
import Screenshot from '../Entities/Screenshot';
import APIClient, { FetchResponse } from '../services/api-client';

const useScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
    staleTime: m('24h'),
  });
};

export default useScreenshot;
