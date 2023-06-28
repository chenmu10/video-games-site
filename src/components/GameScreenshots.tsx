import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';
import useScreenshots from '../hooks/useScreenshots';
import { Image } from '@chakra-ui/react';
interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots: FC<GameScreenshotsProps> = ({ gameId }) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  const images = data?.results;
  if (isLoading) return null;
  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {images?.map((file) => (
          <Image src={file.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
