import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Platform } from '../Entities/Platform';
import platformsResponse from '../data/platforms';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms');
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platformsResponse,
  });

export default usePlatforms;
