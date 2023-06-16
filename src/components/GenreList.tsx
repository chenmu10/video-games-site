import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import useGenres from '../hooks/useGenres';

interface GenreListProps {}

const GenreList: FC<GenreListProps> = ({}) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      <List>
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
