import Platform from '../Entities/Platform';
import usePlatforms from './usePlatforms';

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p:Platform) => p.id === id);
};

export default usePlatform;
