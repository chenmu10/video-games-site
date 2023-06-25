import { useQuery } from '@tanstack/react-query';
import platformsResponse from '../data/platforms';
import APIClient from '../services/api-client';
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms');
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platformsResponse,
  });

export default usePlatforms;
