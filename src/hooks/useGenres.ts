import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genresResponse from '../data/genres';
import APIClient from '../services/api-client';
import { Genre } from '../Entities/Genre';

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genresResponse,
  });

export default useGenres;
